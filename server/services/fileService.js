const fs = require("fs");
const File = require("../models/File");

class FileService {
  createDir(file) {
    const filePath = `${process.env.FILE_PATH}//${file.user}//${file.path}`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: "file was created" });
        } else {
          return reject({ message: "file already exist" });
        }
      } catch (e) {
        return reject({ message: "file error" });
      }
    });
  }

  deleteFile(file) {
    const path = this.getPath(file);
    if (file.type === "dir") {
      fs.rmdirSync(path);
    } else {
      fs.unlinkSync(path);
    }
  }

  getPath(file) {
    return process.env.FILE_PATH + "//" + file.user + "//" + file.path;
  }
}

module.exports = new FileService();
