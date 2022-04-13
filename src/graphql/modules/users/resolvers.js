
export default {
    Query: {

        getUser: async (parent, { id }, { database }, info) => {
            return await database.user.findByPk(id)
        },


        getAllUsers: async (parent, _, { database }, info) => {
            return await database.user.findAll()
        }
    },
    Mutation: {
        createUser: async (parent, { input }, { database }, info) => {
            const user = await database.user.create({
                fullname: input.fullname,
                email: input.email,
            })
            return user;
        },
        updateUser: async (parent, { id, input }, { database }, info) => {
            const user = await database.user.findByPk(id)
            if (!user) throw new Error('User not found');
            const updateUser = await user.update(input);
            return updateUser;
        },
        deleteUser: async (parent, { id }, { database }, info) => {
            const user = await database.user.findByPk(id)
            if (!user) throw new Error('User not found');
            const deleteUser = await user.update({
                removed_at: new Date()
            });

            return !!deleteUser;
        }

    },
};