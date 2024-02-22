// Required Packages
import fs from 'fs';
import path from 'path';

// Source and destination folders
const sourceDirectory = path.join('./src','');
const targetDirectory = path.join('./dist','');

// A list of folders to ignore when we're copying files 1-to-1 (these are included in a different manner)
const ignoreDirList = ['less', 'packs'];

// A function to read all of the files in the source directory and store them in an array with their paths
const fullFileList = [];
export function readAllFiles(dir, depth) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (!(ignoreDirList.includes(file.name) && depth === 0)) {
            file.isDirectory() ? readAllFiles(path.join(dir, file.name), depth + 1) : fullFileList.push(file);
        }
    }

}

readAllFiles(sourceDirectory, 0);
console.log(fullFileList);

// File destination.txt will be created or overwritten by default.
/* fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});



const sourceFiles = fs.readdirSync(sourceDirectory, { withFileTypes: true })
    .map(dirent => dirent.name)

console.log(sourceFiles)

*/