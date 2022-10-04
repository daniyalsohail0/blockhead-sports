import fs from "fs";

export function readWriteAsync(filePath, newValue) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) throw err;

    fs.writeFile(filePath, newValue, "utf-8", function (err) {
      if (err) throw err;
      console.log("filelistAsync complete");
    });
  });
}

export function readWriteSync(filePath, newValue) {
  fs.writeFileSync(filePath, newValue, "utf-8");
  console.log("readFileSync complete");
}