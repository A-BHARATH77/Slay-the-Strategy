const fs = require('fs');
const path = require('path');

const dirsToScan = ['components', 'container', 'pages', 'app'];
const rootDir = 'd:\\FreeLance\\Slay_Final';

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

let modifiedFiles = 0;

dirsToScan.forEach(dir => {
    walkDir(path.join(rootDir, dir), (filePath) => {
        if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js') && !filePath.endsWith('.ts')) return;
        
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Replace beige background with #526855
        content = content.replace(/bg-\[#f7f2e6\]/g, 'bg-[#526855]');
        content = content.replace(/backgroundColor=\{"#f7f2e6"\}/g, 'backgroundColor={"#526855"}');
        
        // The user said "use the beige for texts". Beige is #f7f2e6. 
        // Previously text was #516856 (which is dark green)
        content = content.replace(/text-\[#516856\]/g, 'text-[#f7f2e6]');
        content = content.replace(/hover:text-\[#516856\]/g, 'hover:text-[#f7f2e6]');

        // Also they used bg-[#516856] for buttons probably. If they said "nothing else must be changed", I shouldn't touch it unless it is the text.
        // Wait, they said "use the color #526855 instead of the beige background".
        // I will just replace the exact requested things.

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            modifiedFiles++;
            console.log(`Updated: ${filePath}`);
        }
    });
});

console.log(`Finished. Modified ${modifiedFiles} files.`);
