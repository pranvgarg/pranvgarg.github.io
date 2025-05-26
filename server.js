const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;

// Configuration
const CONFIG = {
  defaultPage: 'index.html',
  errorPage: '404.html',
  port: PORT,
  mimeTypes: {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.mp3': 'audio/mpeg'
  }
};

// Utility functions
const utils = {
  getContentType: (filePath) => {
    const extname = path.extname(filePath);
    return CONFIG.mimeTypes[extname] || 'text/plain';
  },
  
  handleFileRead: (filePath, res) => {
    console.log(`Attempting to read file: ${filePath}`);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.error(`File not found: ${filePath}`);
          utils.serveErrorPage(res);
        } else {
          console.error(`Error reading file ${filePath}:`, err);
          utils.serverError(res, err);
        }
      } else {
        const contentType = utils.getContentType(filePath);
        console.log(`Serving file: ${filePath} with content-type: ${contentType}`);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  },
  
  serveErrorPage: (res) => {
    fs.readFile(path.join(__dirname, CONFIG.errorPage), (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  },
  
  serverError: (res, err) => {
    res.writeHead(500);
    res.end(`Server Error: ${err.code}`);
    console.error(`Server error: ${err}`);
  },
  
  // Check if file exists
  fileExists: (filePath) => {
    try {
      return fs.existsSync(filePath);
    } catch (err) {
      console.error(`Error checking if file exists (${filePath}):`, err);
      return false;
    }
  }
};

// Create the server
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Normalize URL to prevent directory traversal attacks
  const normalizedUrl = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
  
  // Handle root path
  let filePath = normalizedUrl === '/' 
    ? path.join(__dirname, CONFIG.defaultPage)
    : path.join(__dirname, normalizedUrl);
  
  // Check if file exists
  if (utils.fileExists(filePath)) {
    // Read and serve the file
    utils.handleFileRead(filePath, res);
  } else {
    console.log(`File not found: ${filePath}, checking if it's a directory...`);
    
    // Check if it's a directory and look for index.html
    if (utils.fileExists(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      if (utils.fileExists(filePath)) {
        utils.handleFileRead(filePath, res);
      } else {
        utils.serveErrorPage(res);
      }
    } else {
      console.log(`No directory found either, serving 404 page`);
      utils.serveErrorPage(res);
    }
  }
});

// Start the server
server.listen(CONFIG.port, () => {
  console.log(`Server running at http://localhost:${CONFIG.port}/`);
  console.log(`Press Ctrl+C to stop the server`);
  
  // Log the status of critical files
  const profileImagePath = path.join(__dirname, 'images/profile_photo.jpg');
  console.log(`Profile image exists: ${utils.fileExists(profileImagePath)}`);
  
  const longhornSvgPath = path.join(__dirname, 'images/longhorn.svg');
  console.log(`Longhorn SVG exists: ${utils.fileExists(longhornSvgPath)}`);
});