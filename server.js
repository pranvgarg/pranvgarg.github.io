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
    '.pdf': 'application/pdf'
  }
};

// Utility functions
const utils = {
  getContentType: (filePath) => {
    const extname = path.extname(filePath);
    return CONFIG.mimeTypes[extname] || 'text/plain';
  },
  
  handleFileRead: (filePath, res) => {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          utils.serveErrorPage(res);
        } else {
          utils.serverError(res, err);
        }
      } else {
        const contentType = utils.getContentType(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
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
  }
};

// Create the server
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Handle root path
  let filePath = req.url === '/' 
    ? path.join(__dirname, CONFIG.defaultPage)
    : path.join(__dirname, req.url);
  
  // Read and serve the file
  utils.handleFileRead(filePath, res);
});

// Start the server
server.listen(CONFIG.port, () => {
  console.log(`Server running at http://localhost:${CONFIG.port}/`);
  console.log(`Press Ctrl+C to stop the server`);
});