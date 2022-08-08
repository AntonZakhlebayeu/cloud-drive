import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, uploadFile } from "../../actions/file";
import FileList from "./fileList/FileList";
import "./drive.css";
import {
  setCurrentDir,
  setFileView,
  setPopupDisplay,
} from "../../reducers/fileReducer";
import PopUp from "./PopUp";
import Uploader from "./uploader/Uploader";

const Drive = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  const loader = useSelector((state) => state.app.loader);
  const dirStack = useSelector((state) => state.files.dirStack);
  const [dragEnter, setDragEnter] = useState(false);
  const [sort, setSort] = useState("type");

  useEffect(() => {
    dispatch(getFiles(currentDir, sort));
  }, [currentDir, sort]);

  function showPopupHandler() {
    dispatch(setPopupDisplay("flex"));
  }

  function backClickHandler() {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  }

  function fileUploadHandler(event) {
    const files = [...event.target.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
  }

  function dragEnterHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(true);
  }

  function dragLeaveHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    setDragEnter(false);
  }

  function dropHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    let files = [...event.dataTransfer.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
    setDragEnter(false);
  }

  if (loader) {
    return (
      <div className="loader">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }

  return !dragEnter ? (
    <div
      className="drive"
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      <div className="drive__btns">
        <button className="drive__back" onClick={() => backClickHandler()}>
          Back
        </button>
        <button className="drive__create" onClick={() => showPopupHandler()}>
          Create folder
        </button>
        <div className="drive__upload">
          <label htmlFor="drive__upload-input" className="drive__upload-label">
            Upload file
          </label>
          <input
            multiple={true}
            onChange={(event) => fileUploadHandler(event)}
            type="file"
            id="drive__upload-input"
            className="drive__upload-input"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="drive__select"
        >
          <option value="name">By name</option>
          <option value="type">By type</option>
          <option value="date">By date</option>
        </select>
        <button
          className="drive__plate"
          onClick={() => dispatch(setFileView("plate"))}
        />
        <button
          className="drive__list"
          onClick={() => dispatch(setFileView("list"))}
        />
      </div>
      <FileList />
      <PopUp />
      <Uploader />
    </div>
  ) : (
    <div
      className="drop-area"
      onDrop={dropHandler}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      Перетащите файлы сюда
    </div>
  );
};

export default Drive;
