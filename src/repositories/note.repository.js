const CrudRepository = require("./crud.repository");
const {Note} = require('../models')

class NoteRepository extends CrudRepository{
    constructor(){
        super(Note)
    }

    async getAllByQuery(keyword) {
        try {
            const result = await this.model.find({ $text: { $search: keyword } });
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Fetching" + error);
        }
    }
}

module.exports = NoteRepository;