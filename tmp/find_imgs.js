const fs = require('fs');
const html = fs.readFileSync('/tmp/page_home.html', 'utf8');

// Find all image references in src, data-src, background-image
const re = /(?:src|data-src|data-bg-url|background-image:[^;]*url)\s*[:=]\s*["'\(]?([^"'\)\s>]+)/gi;
const urls = new Set();
let m;
while ((m = re.exec(html)) !== null) {
  if (m[1].includes('image') || m[1].includes('.jpg') || m[1].includes('.png') || m[1].includes('.jpeg') || m[1].includes('upload')) {
    urls.add(m[1]);
  }
}
console.log('Image URLs count:', urls.size);
console.log(Array.from(urls));
