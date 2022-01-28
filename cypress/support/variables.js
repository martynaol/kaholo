export const BUTTONS ={
  execute: 'Execute'
}

export const EXAMPLE_COMMANDS = {
  uname: "uname",
  unameAll: "uname -a",
  listFiles: "ls -al",
  echo: "echo kapusta",
  cat: "cat README.md",
};

export const COMMAND_OUTPUT = {
  uname: "Linux",
  unameAll: "Linux magic-ThinkPad-T480 5.8.0-53-generic #60-Ubuntu SMP Thu May 6 07:46:32 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux",
  listFiles: "total 520\n" +
      "drwxrwxr-x   5 magic magic   4096 cze 14 13:21 .\n" +
      "drwxrwxr-x   9 magic magic   4096 cze 14 12:31 ..\n" +
      "-rw-rw-r--   1 magic magic   3337 cze 14 13:21 angular.json\n" +
      "-rw-rw-r--   1 magic magic    703 cze 14 12:35 .browserslistrc\n" +
      "drwxrwxr-x   8 magic magic   4096 cze 14 14:44 .git\n" +
      "-rw-rw-r--   1 magic magic    604 cze 14 12:35 .gitignore\n" +
      "drwxrwxr-x 729 magic magic  24576 cze 14 13:22 node_modules\n" +
      "-rw-rw-r--   1 magic magic    881 cze 14 13:21 package.json\n" +
      "-rw-rw-r--   1 magic magic 462009 cze 14 13:21 package-lock.json\n" +
      "-rw-rw-r--   1 magic magic   1052 cze 14 12:35 README.md\n" +
      "drwxrwxr-x   5 magic magic   4096 cze 14 12:35 src\n" +
      "-rw-rw-r--   1 magic magic    287 cze 14 12:35 tsconfig.app.json\n" +
      "-rw-rw-r--   1 magic magic    783 cze 14 12:35 tsconfig.json",
  echo: "kapusta",
  cat: "# QaTest\n" +
      "\n" +
      "        This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.",
}

export const ERROR_MESSAGES = {
  unsupported: 'error: command not supported.'
}