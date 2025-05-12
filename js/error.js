// List of valid routes/pages in your website (relative to root)
const validPaths = [
  '/',                 // Home page (root)
  '/index.html',
  '/html/image.html',
  '/html/error.html',
];

// Get the current path
const currentPath = window.location.pathname;

// If current path is not valid, redirect to error page
if (!validPaths.includes(currentPath)) {
  window.location.href = '/html/error.html';
}
