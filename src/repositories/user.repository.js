const { User } = require("../models");
const CrudRepository = require("./crud.repository");

class NoteRepository extends CrudRepository{
    constructor(){
        super(User)
    }

    async getByUsername(username){
        try {
            const response = await User.findOne({username});
            return response;
        } catch (error) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Bad Request")
        }
    }
}

module.exports = NoteRepository;