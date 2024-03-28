const { StatusCodes } = require('http-status-codes');
const UserRepository = require('../repositories/user.repository')
const { ApiError } = require('../utils/base.error')
const userRepository = new UserRepository();

class UserService {
    async createUser(data) {
        const user = await userRepository.create(data);
        return user;
    }

    async getUserById(id) {
        let user = await userRepository.get(id);
        if(!user){
            throw new ApiError(StatusCodes.NOT_FOUND, "User not Found!")
        }
        user = await user.populate('role');
        return user;
    }

    async login(data) {

        const user = await userRepository.getByUsername(data.username);
        if (!user) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "user or password is invalid");
        }

        if (await !user.comparePassword(data.password)) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "user or password is invalid");
        }
        return user;
    }
}

module.exports = UserService;