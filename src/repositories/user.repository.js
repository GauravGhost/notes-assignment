const { User } = require("../models");
const CrudRepository = require("./crud.repository");

class NoteRepository extends CrudRepository{
    constructor(){
        super(User)
    }
}

module.exports = NoteRepository;