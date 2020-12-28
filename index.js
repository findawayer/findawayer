// Import node.js modules
const fs = require('fs');
const path = require('path');
// const util = require('util');

// Import packages
const pretty = require('pretty');
const pug = require('pug');

// Entry
const TEMPLATE_PATH = path.resolve(process.cwd(), 'template.pug');
// Output
const README_PATH = path.resolve(process.cwd(), 'README.md');

const variables = {
  tools: [
    { name: 'TypeScript', color: '#007ACC' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#45B8D8' },
    { name: 'Redux', color: '#764ABC' },
    { name: 'GraphQL', color: '#E10098' },
    { name: 'Apollo', color: '#311C87', icon: 'apollographql' },
    { name: 'Nodejs', color: '#339933', icon: 'node-dot-js' },
    { name: 'Styled Components', color: '#DB7092' },
    { name: 'npm', color: '#CB3837' },
    { name: 'html5', color: '#E34F26' },
    { name: 'Sass', color: '#CC6699' },
    { name: 'Stylus', color: '#CC6699' },
    { name: 'git', color: '#F05032' },
    { name: 'Webpack', color: '#8DD6F9' },
    { name: 'Babel', color: '#F9DC3E' },
    { name: 'Eslint', color: '#4B32C3' },
    { name: 'Prettier', color: '#F7B93E' },
    { name: 'Nextjs', color: '#FFFFFF', icon: 'next-dot-js' },
    { name: 'Material UI', color: '#0081CB' },
    { name: 'Visual Studio Code', color: '#007ACC', icon: 'visualstudiocode' },
    { name: 'Google Chrome', color: '#4285F4', icon: 'googlechrome' },
  ],
};

// Init
async function generateReadMe() {
  const compileFunction = pug.compileFile(TEMPLATE_PATH);
  const compiled = compileFunction(variables);
  const output = pretty(compiled, { ocd: true });
  // Write README.md
  fs.writeFileSync(README_PATH, output);
}

generateReadMe();