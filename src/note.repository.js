const { default: CrudRepository } = require("./crud.repository");

class NoteRepository extends CrudRepository{
    constructor(){
        super()
    }
}

module.exports = NoteRepository;