import React from "react";
import "./fileList.css";
import { useSelector } from "react-redux";
import File from "./file/File";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FileList = () => {
  const files = useSelector((state) => state.files.files);
  const fileView = useSelector((state) => state.files.view);

  if (files.length === 0) {
    return <div className="loader">Files were not found</div>;
  }

  if (fileView === "plate") {
    return (
      <div className="filePlate">
        {files.map((file) => (
          <File key={file._id} file={file} />
        ))}
      </div>
    );
  }

  if (fileView === "list") {
    return (
      <div className="fileList">
        <div className="fileList__header">
          <div className="fileList__name">Name</div>
          <div className="fileList__date">Date</div>
          <div className="fileList__size">Size</div>
        </div>
        <TransitionGroup>
          {files.map((file) => (
            <CSSTransition
              key={file._id}
              timeout={500}
              classNames={"file"}
              exit={false}
            >
              <File file={file} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
};

export default FileList;
