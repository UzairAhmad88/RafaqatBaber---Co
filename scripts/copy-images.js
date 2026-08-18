const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\97e78848-fbe4-4a41-8e71-d169b5d40825';
const destDir = 'd:\\rafaqatbaber\\rafaqat-babar-portfolio\\public\\images';

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir);
  let c1 = 0, c2 = 0, c3 = 0;

  files.forEach(file => {
    if (file.startsWith('partner_rafaqat_babar_') && file.endsWith('.jpg')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, 'partner1.jpg'));
      c1++;
    }
    if (file.startsWith('partner_farhan_babar_') && file.endsWith('.jpg')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, 'partner2.jpg'));
      c2++;
    }
    if (file.startsWith('partner_ayesha_rahman_') && file.endsWith('.jpg')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, 'partner3.jpg'));
      c3++;
    }
  });

  console.log(`Copy status: Partner1 copied: ${c1 > 0}, Partner2 copied: ${c2 > 0}, Partner3 copied: ${c3 > 0}`);
} catch (err) {
  console.error('Error copying files:', err);
}
