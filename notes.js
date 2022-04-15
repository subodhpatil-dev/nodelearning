
const fs = require("fs");


const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note already exist");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);

  fs.writeFileSync("notes.json", dataJSON);
};

const getNotes = function () {
  return "Notes in a string";
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes = function (title, body) {
  const notes = loadNotes();

  const removedduplicate = notes.filter(function (note) {
    return note.title != title;
  });

  if (notes.length > removedduplicate.length) {
    console.log("Note removed !");
    saveNotes(removedduplicate);
  } else {
    console.log("Note not removed !");
    
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
};
