const path = require('path');
const fs = require('fs');

const targetFile = '/node_modules/png-async/nul';
const finalPath = path.join(__dirname, targetFile);

let result;
try {
  result = fs.unlinkSync(finalPath);
  console.log('File deleted:', targetFile);
} catch(err){
  if (err.code != 'ENOENT') {
    console.log('Error message:', err);
  } else {
    result = 'file does not exist.'
  }
  console.log('Could not delete:', targetFile, 'result:', result);
}
