const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("../utils/base.error");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            console.log(data);
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Creating" + error);
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Deleting" + error);
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Fetching" + error);
        }
    }

    async getAll() {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Fetching" + error);
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, { new: true });
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error while Updating");
        }
    }

}

module.exports = CrudRepository;