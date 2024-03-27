const CrudRepository = require("./crud.repository");
const {Note} = require('../models')

class NoteRepository extends CrudRepository{
    constructor(){
        super(Note)
    }
}

module.exports = NoteRepository;