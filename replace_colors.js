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

const excludeFiles = ['Hero.tsx', 'Navbar.tsx', 'hero.html', 'hero.css'];

let modifiedFiles = 0;

dirsToScan.forEach(dir => {
    walkDir(path.join(rootDir, dir), (filePath) => {
        if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js') && !filePath.endsWith('.ts')) return;
        
        const fileName = path.basename(filePath);
        if (excludeFiles.includes(fileName)) return;

        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Replace background color
        content = content.replace(/bg-\[#494949\]/g, 'bg-[#516856]');
        content = content.replace(/#494949/g, '#516856');
        
        // Replace text colors
        content = content.replace(/text-white/g, 'text-[#f7f2e6]');
        content = content.replace(/text-black/g, 'text-[#f7f2e6]');
        content = content.replace(/text-\[#212121\]/g, 'text-[#f7f2e6]');

        // Also if bg-black is used as a section background? 
        // Let's leave bg-black alone unless we are sure, but maybe we should change it to bg-[#516856] if it's a major section. 
        // Let's stick to what we know is the background (#494949).

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            modifiedFiles++;
            console.log(`Updated: ${filePath}`);
        }
    });
});

console.log(`Finished. Modified ${modifiedFiles} files.`);
