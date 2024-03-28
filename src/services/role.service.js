const { StatusCodes } = require('http-status-codes');
const RoleRepository = require('../repositories/role.repository')

const roleRepository = new RoleRepository();

class RoleService {
    async createRole(data) {
        const role = await roleRepository.create(data);
        return role;
    }

    async getRoleById(id) {
        const role = await roleRepository.get(id);
        if(!role){
            throw new ApiError(StatusCodes.NOT_FOUND, "Role Not Found!")
        }
        return role;
    }
}


module.exports = RoleService;