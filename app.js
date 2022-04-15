const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  description: "add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title, argv.body);
  },
});
yargs.command({
  command: "list",
  description: "showing all notes",
  handler() {
    console.log("Listing all notes");
  },
});
yargs.command({
  command: "read",
  description: "reading a note",
  handler() {
    console.log("reading a note");
  },
});
console.log(yargs.argv);
