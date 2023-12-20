import * as path from 'path'

const filePath = {
    root: 'C:/',
    dir: 'C:/Users/Vijay/.vscode/NodeJsTutorial/pathModule',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }
// console.log(path.basename('C:/Users/Vijay/.vscode/NodeJsTutorial/pathModule/index.js','.js'))
// console.log(path.dirname('C:/Users/Vijay/.vscode/NodeJsTutorial/pathModule/index.js'))
// console.log(path.parse('C:/Users/Vijay/.vscode/NodeJsTutorial/pathModule/index.js'))
// console.log(path.isAbsolute('C:/Users/Vijay/.vscode/NodeJsTutorial/pathModule/index.js'))
// console.log(path.isAbsolute('C:/Users/Vijay/.vscode'))
// console.log(path.format(filePath))
console.log(path.join('some','path','is','full','..'))
console.log(path.join('/foo', 'bar', 'baz', 'quux', '..'));

// console.log(path.delimiter)