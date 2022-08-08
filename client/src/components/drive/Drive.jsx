import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../actions/file";
import FileList from "./fileList/FileList";
import "./drive.css";
import { setPopupDisplay } from "../../reducers/fileReducer";
import PopUp from "./PopUp";

const Drive = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  function showPopupHandler() {
    dispatch(setPopupDisplay("flex"));
  }

  return (
    <div className="drive">
      <div className="drive__btns">
        <button className="drive__back">Back</button>
        <button className="drive__create" onClick={() => showPopupHandler()}>
          Create folder
        </button>
      </div>
      <FileList />
      <PopUp />
    </div>
  );
};

export default Drive;
