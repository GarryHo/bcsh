#!/usr/bin/env node

import "colors";
import cons from "csharp-like-custom-console";
import { existsSync, promises } from "fs";
import { userInfo, homedir } from "os";
import { join } from "path";
import { chdir } from "process";
import { exec } from "child_process";

const { readFile, writeFile, unlink, mkdir, rmdir, readdir, stat } = promises;

const Console = new cons({
  inp: process.stdin,
  out: process.stdout,
});

async function main() {
  async function cwd() {
    let cwd = process.cwd();
    if (process.platform == "win32") {
      cwd = cwd.replace(/(\\)/g, "/");
      cwd = cwd.replace(`C:/Users/${userInfo().username}`, "~");
    } else cwd = `~${cwd}`;
    return cwd;
  }

  if (!(await cwd()).includes("~")) {
    chdir(homedir());
  }

  Console.Clear();
  Console.Write(
    `${"bcsh".bold}${
      `@${
        JSON.parse(
          (await readFile(join(__dirname, "../package.json"))).toString()
        ).version
      }`.grey
    }`
  );
  async function ask() {
    Console.Read(
      `${(await cwd()).yellow}${"$".grey} `,
      async (answer: string) => {
        answer = answer.trim();
        switch (answer.split(" ")[0]) {
          case "":
            break;
          case "help":
            Console.Write(`${"COMMANDS".red + "@BASIC".gray}`.bold);
            Console.Write("help".green + " ".red);
            Console.Write(" Show this page");
            Console.Write("echo".green + " [...text]".red);
            Console.Write(" Echos the text joined together with ' '");
            Console.Write(" Refreshes");
            Console.Write("touch".green + " [...filenames]".red);
            Console.Write(" Makes the files with the corresponding filenames");
            Console.Write(
              "cat".green + " / " + "type".green + " [filename]".red
            );
            Console.Write(
              " Writes out the contents of that file tith the corresponding filename"
            );
            Console.Write(
              "rm".green + " / " + "del".green + " [...filenames]".red
            );
            Console.Write(
              " Removes the files with the corresponding filenames"
            );
            Console.Write("cd".green + " / " + "chdir".green + " [path]".red);
            Console.Write(
              " Changes the current working directory to the corresponding path"
            );
            Console.Write("cls".green + " / " + "clear".green + " ".red);
            Console.Write(" Clears the bash");
            Console.Write(
              "md".green + " / " + "mkdir".green + "[...foldernames]".red
            );
            Console.Write(
              " Makes the directories corresponding to the foldernames"
            );
            Console.Write("ls".green + " / " + "dir".green + " ".red);
            Console.Write(" Shows the files in the current working directory");
            Console.Write("exit".green + " ".red);
            Console.Write(" Exit the bash");
            Console.Write(`${"COMMANDS".red + "@CODE".gray}`.bold);
            Console.Write(
              "code@".gray + "code".green + " [...fileorfoldernames]".red
            );
            Console.Write(
              " Opens the corresponding fileorfoldernames in vscode"
            );
            Console.Write(`${"COMMANDS".red + "@NODE".gray}`.bold);
            Console.Write(
              "node@".gray + "init".green + " (--useYarn) (-Y)".red
            );
            Console.Write(
              " Inits a node project with npm, or if --useYarn/-Y is specified, yarn, and say yes to every question"
            );
            Console.Write(
              "node@".gray +
                "script".green +
                " [scriptname] (--useYarn) (-Y)".red
            );
            Console.Write(
              " Runs the script with the corresponding scriptname with npm, or if --useYarn/-Y is specified, yarn (doesn't display output)"
            );
            Console.Write(
              "node@".gray + "start".green + " (--useYarn) (-Y)".red
            );
            Console.Write(
              " Runs `node@run start (--useYarn if --useYarn/-Y is specified)` (doesn't display output)"
            );
            Console.Write(`${"COMMANDS".red + "@TYPESCRIPT".gray}`.bold);
            Console.Write("typescript@".gray + "tsc".green + " ".red);
            Console.Write(
              " Compiles typescript with the options in tsconfig.json"
            );
            break;
          case "echo":
            const words = await (async () => {
              const words = answer.split(" ");
              words.shift();
              return words;
            })();
            Console.Write(words.join(" "));
            break;
          case "touch":
            const filenames = await (async () => {
              const filenames = answer.split(" ");
              filenames.shift();
              return filenames;
            })();
            for (const filename of filenames) {
              if (existsSync(filename)) {
                Console.Write(`${"FATAL".red.bold} ${filename} already exists`);
              } else {
                await writeFile(filename, "");
              }
            }
            break;
          case "cat":
            try {
              Console.Write((await readFile(answer.split(" ")[1])).toString());
            } catch {
              Console.Write(
                `${"FATAL".red.bold} ${answer.split(" ")[1]} doesn't exist`
              );
            }
            break;
          case "type":
            try {
              Console.Write((await readFile(answer.split(" ")[1])).toString());
            } catch {
              Console.Write(
                `${"FATAL".red.bold} ${answer.split(" ")[1]} doesn't exist`
              );
            }
            break;
          case "rm":
            const filenames_ = await (async () => {
              const filenames_ = answer.split(" ");
              filenames_.shift();
              return filenames_;
            })();
            for (const filename_ of filenames_) {
              if (!existsSync(filename_)) {
                Console.Write(`${"FATAL".red.bold} ${filename_} doesn't exist`);
              } else {
                try {
                  await unlink(filename_);
                } catch {
                  await rmdir(filename_, { recursive: true });
                }
              }
            }
            break;
          case "del":
            const filenames__ = await (async () => {
              const filenames__ = answer.split(" ");
              filenames__.shift();
              return filenames__;
            })();
            for (const filename__ of filenames__) {
              if (!existsSync(filename__)) {
                Console.Write(
                  `${"FATAL".red.bold} ${filename__} doesn't exist`
                );
              } else {
                try {
                  await unlink(filename__);
                } catch {
                  await rmdir(filename__, { recursive: true });
                }
              }
            }
            break;
          case "cd":
            if (!existsSync(answer.split(" ")[1])) {
              Console.Write(`${"FATAL".red.bold} path doesn't exist`);
            } else {
              chdir(join(process.cwd(), answer.split(" ")[1]));
              if (process.cwd() == "C:\\" || process.cwd() == "C:\\Users") {
                Console.Write(`${"FATAL".red.bold} path doesn't exist`);
                chdir(`C:\\Users\\${userInfo().username}`);
              }
            }
            break;
          case "chdir":
            if (!existsSync(answer.split(" ")[1])) {
              Console.Write(`${"FATAL".red.bold} path doesn't exist`);
            } else {
              chdir(join(process.cwd(), answer.split(" ")[1]));
              if (process.cwd() == "C:\\" || process.cwd() == "C:\\Users") {
                Console.Write(`${"FATAL".red.bold} path doesn't exist`);
                chdir(`C:\\Users\\${userInfo().username}`);
              }
            }
            break;
          case "cls":
            Console.Clear();
            break;
          case "clear":
            Console.Clear();
            break;
          case "md":
            const foldernames = await (async () => {
              const foldernames = answer.split(" ");
              foldernames.shift();
              return foldernames;
            })();
            for (const foldername of foldernames) {
              if (existsSync(foldername)) {
                Console.Write(
                  `${"FATAL".red.bold} ${foldername} already exists`
                );
              } else {
                await mkdir(foldername);
              }
            }
            break;
          case "mkdir":
            const foldernames_ = await (async () => {
              const foldernames_ = answer.split(" ");
              foldernames_.shift();
              return foldernames_;
            })();
            for (const foldername_ of foldernames_) {
              if (existsSync(foldername_)) {
                Console.Write(
                  `${"FATAL".red.bold} ${foldername_} already exists`
                );
              } else {
                await mkdir(foldername_);
              }
            }
            break;
          case "ls":
            for (const f of await readdir(process.cwd())) {
              if ((await stat(f)).isDirectory()) {
                Console.Write(f.cyan);
              } else if (!f.includes(".")) {
                Console.Write(f.magenta);
              } else Console.Write(f);
            }
            break;
          case "dir":
            for (const f of await readdir(process.cwd())) {
              if ((await stat(f)).isDirectory()) {
                Console.Write(f.cyan);
              } else if (!f.includes(".")) {
                Console.Write(f.magenta);
              } else Console.Write(f);
            }
            break;
          case "exit":
            Console.Die();
            break;
          case "code@code":
            const fileorfoldernames = answer.slice(10);
            exec(`code ${fileorfoldernames}`);
            break;
          case "node@init":
            const useYarn =
              answer.split(" ").includes("--useYarn") ||
              answer.split(" ").includes("-Y");
            exec(`${useYarn ? "yarn" : "npm"} init --yes`);
            break;
          case "node@script":
            const useYarn_ =
              answer.split(" ").includes("--useYarn") ||
              answer.split(" ").includes("-Y");
            exec(`${useYarn_ ? "yarn" : "npm"} run ${answer.split(" ")[1]}`);
          case "node@start":
            const useYarn__ =
              answer.split(" ").includes("--useYarn") ||
              answer.split(" ").includes("-Y");
            exec(`${useYarn__ ? "yarn" : "npm"} start`);
            break;
          case "typescript@tsc":
            exec("tsc");
            break;
          default:
            Console.Write(`Bad command. Type ${"help".green.bold} for help`);
            break;
        }
        await ask();
      }
    );
  }
  ask();
}

main();
