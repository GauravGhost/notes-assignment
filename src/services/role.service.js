const RoleRepository = require('../repositories/role.repository')

const roleRepository = new RoleRepository();

class RoleService {
    async createRole(data) {
        const role = await roleRepository.create(data);
        return role;
    }

    async getRoleById(id) {
        const role = await roleRepository.get(id);
        return role;
    }
}


module.exports = RoleService;