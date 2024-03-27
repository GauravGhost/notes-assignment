import { StatusCodes } from "http-status-codes";
import { ApiError } from "./utils/base.error";

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
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Creating");
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Deleting");
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Fetching");
        }
    }

    async getAll() {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error While Fetching");
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new: true});
            return result;
        } catch(error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Error while Updating");
        }
    }

}

export default CrudRepository;