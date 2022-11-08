const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
    dest: path.resolve(__dirname, "..", "..", "tpm", "uploads"),
    storage: multer.diskStorage({

    }),
    limits: {
        filesize: 2 * 1024 * 1024,
    },
    filefilter: (req, file, cb) => {
        const allowedMimes = [
            "images/jpeg",
            "images/pgjep",
            "images/png",
            "images/gif"
        ];
        if(allowedMimes.includes(file.mimetypes)){
            cb(null, true);
        }else{
            cb(new Error("Invalid file type."));
        }
    }
};