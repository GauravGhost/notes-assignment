const UserRepository = require('../repositories/user.repository')

const userRepository = new UserRepository();

class UserService {
    async createUser(data) {
        const user = await userRepository.create(data);
        return user;
    }

    async getUserById(id) {
        const user = await userRepository.get(id);
        return user;
    }

    async login(data) {

        const user = await userRepository.getByUsername(data.username);
        if (!user) {
            throw new ApiError(StatusCodes.NOT_FOUND, "user or password is invalid");
        }

        if (await !user.comparePassword(data.password)) {
            throw new ApiError(StatusCodes.NOT_FOUND, "password is invalid");
        }
        return user;
    }
}

module.exports = UserService;