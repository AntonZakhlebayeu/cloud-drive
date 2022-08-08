import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../actions/file";
import FileList from "./fileList/FileList";
import "./drive.css";

const Drive = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  return (
    <div className="drive">
      <div className="drive__btns">
        <button className="drive__back">Back</button>
        <button className="drive__create">Create folder</button>
      </div>
      <FileList />
    </div>
  );
};

export default Drive;
