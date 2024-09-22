import fs from 'fs';
import path from 'path';

// Utility to read JSON
export const readData = (filename) => {
  const filePath = path.join(__dirname, filename);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

// Utility to write JSON
export const writeData = (filename, content) => {
  const filePath = path.join(__dirname, filename);
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf-8');
};
