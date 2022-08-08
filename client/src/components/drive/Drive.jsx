import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, uploadFile } from "../../actions/file";
import FileList from "./fileList/FileList";
import "./drive.css";
import { setCurrentDir, setPopupDisplay } from "../../reducers/fileReducer";
import PopUp from "./PopUp";

const Drive = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  const dirStack = useSelector((state) => state.files.dirStack);
  const [dragEnter, setDragEnter] = useState(false);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

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
      </div>
      <FileList />
      <PopUp />
    </div>
  ) : (
    <div
      className="drop-area"
      onDrop={dropHandler}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      Drop files here
    </div>
  );
};

export default Drive;
