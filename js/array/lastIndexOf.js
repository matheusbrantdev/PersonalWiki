function getFileExtension(filename) {
  const lastDotPosition = filename.lastIndexOf(".");
    
  console.log({lastDotPosition})
  // returns -1 if not found.
  if (lastDotPosition === -1) {
    return null; // No extension found
  }

  return filename.substring(lastDotPosition + 1);
}

// Test cases
console.log(getFileExtension("report.final.version.pdf")); // "pdf"
console.log(getFileExtension("image.png"));                // "png"
console.log(getFileExtension("README"));                   // null
