const rootDirectory = '~';
let PS1 = 'rmkShell ';
let PS2 = rootDirectory;

const getCurrentDir = function (path) {
  if (path.length === 0 || path[0] === '') {
    return rootDirectory;
  }
  const currentDir = path.toString().split('/').at(-1);
  return currentDir;
}

const changeDirectory = function (path) {
  return getCurrentDir(path) + ' %';
}

const runningCommand = function (runCommand) {
  runCommand = runCommand.trim();

  const [command, ...path] = runCommand.split(' ');
  switch (command) {
    case 'cd': return changeDirectory(path);
  }
}

while (true) {
  let command = prompt(PS1 + PS2);
  const currentDirectory = runningCommand(command);
  PS2 = currentDirectory;
}