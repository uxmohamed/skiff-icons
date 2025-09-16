const fs = require('fs');
const path = require('path');

// Get all SVG files
const iconsDir = path.join(__dirname, 'icons');
const svgFiles = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg'))
  .map(file => file.replace('.svg', ''))
  .sort();

console.log(`Found ${svgFiles.length} SVG files`);

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Generate imports
const imports = svgFiles.map(icon => {
  const pascalName = toPascalCase(icon);
  return `const ${pascalName}Svg = require('./icons/${icon}.svg').default;`;
}).join('\n');

// Generate exports
const iconExports = svgFiles.map(icon => {
  const pascalName = toPascalCase(icon);
  return `export const ${pascalName} = createIcon(${pascalName}Svg);`;
}).join('\n');

// Generate icon names type
const iconNames = svgFiles.map(icon => `'${toPascalCase(icon)}'`);
const iconNamesType = iconNames.join(' | ');

// Generate icons object
const iconsObjectEntries = svgFiles.map(icon => toPascalCase(icon)).join(', ');

// Generate type definitions
const typeDefinitions = svgFiles.map(icon => {
  const pascalName = toPascalCase(icon);
  return `export const ${pascalName}: IconComponent;`;
}).join('\n');

// Write results to files for copying
fs.writeFileSync('imports.txt', imports);
fs.writeFileSync('exports.txt', iconExports);
fs.writeFileSync('icon-names-type.txt', iconNamesType);
fs.writeFileSync('icons-object.txt', iconsObjectEntries);
fs.writeFileSync('type-definitions.txt', typeDefinitions);

console.log('Generated all icon code snippets!');
console.log(`Icon names (first 10): ${iconNames.slice(0, 10).join(', ')}`);
