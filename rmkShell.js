const rootDirectory = '~';
let PS1 = 'rmkShell ';
let currentDirectory = rootDirectory;
const listFiles = [];

const getCurrentDir = function (path) {
  if (path.length === 0 || path[0] === '') {
    return rootDirectory;
  }
  const currentDir = path.toString().split('/').at(-1);
  return currentDir;
}

const changeDirectory = function (path) {
  currentDirectory = getCurrentDir(path) + ' %';
}

const runEcho = function (string) {
  console.log(string.join(' '));
}

const createFile = function (fileName) {
  console.log(listFiles);
  for (const folder of listFiles) {
    if (folder[0] === currentDirectory) {
      folder[1].push(fileName);
    }
  }
  console.log(listFiles);
}

const runLsCmd = function () {
  for (const pair of listFiles) {
    if (pair[0] === currentDirectory) {
      console.log(pair[1].toString());
    }
  }
}

const runCopyCmd = function (path) {
  const source = path[0].split('/').at(-1);
  const destination = path[1].split('/').at(-1);
  console.log(destination, source)
  listFiles.push([destination, source]);
  console.log(listFiles);
}


const runningCommand = function (runCommand) {
  runCommand = runCommand.trim();
  const [command, ...path] = runCommand.split(' ');

  switch (command) {
    case 'cd': return changeDirectory(path);
    case 'echo': return runEcho(path);
    case 'touch': return createFile(path);
    case 'ls': return runLsCmd();
    case 'cp': return runCopyCmd(path);
    default: console.log('command not found');
  }
}

while (true) {
  let command = prompt(PS1 + currentDirectory);
  runningCommand(command);
}