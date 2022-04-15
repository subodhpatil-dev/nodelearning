const yargs = require('yargs');

yargs.command({
    command:'add',
    description:'add a note',
    handler: function(){
        console.log("Adding a new note");
    }
})


yargs.command({
    command:'remove',
    description:'remove a note',
    handler: function(){
        console.log("Removing a new note");
    }
})
yargs.command({
    command:'list',
    description:'showing all notes',
    handler: function(){
        console.log("Listing all notes");
    }
})
yargs.command({
    command:'read',
    description:'reading a note',
    handler: function(){
        console.log("reading a note");
    }
})
console.log(yargs.argv)