const { Role } = require("../models");
const CrudRepository  = require("./crud.repository");

class NoteRepository extends CrudRepository{
    constructor(){
        super(Role)
    }
}

module.exports = NoteRepository;