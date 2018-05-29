const fs = require('fs');
const path = require('path');
const folder = '../../../../../../Pictures/Wallpapers/base64/test';

const writeRequests = () => {
  fs.readdir(folder, async (err, files) => {
    if (err) {
      console.error('Could not list the directory', err);
      process.exit(1);
    }

    files.forEach(file => {
      let base64 = fs.readFileSync(path.join(folder, file)).toString('base64');
      let req = {
        requests: [
          {
            image: {
              content: base64
            }
          }
        ]
      }
      fs.writeFileSync(`${file.slice(0, -4)}.json`, JSON.stringify(req));
    });
  });
}

writeRequests();
