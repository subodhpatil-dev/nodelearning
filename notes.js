
const fs = require("fs");


const addNotes = (title, body) => {
  const notes = loadNotes();
//   const duplicateNotes = notes.filter(function (note) {
//     return note.title === title;
//   });

//replacing with new arrow function syntax
  const duplicateNotes = notes.filter((note) =>  note.title === title);

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

const saveNotes =(notes) =>{
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const getNotes = () => {
  return "Notes in a string";
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes =  (title, body) => {
  const notes = loadNotes();
  const removedduplicate = notes.filter((note) => note.title != title);

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
