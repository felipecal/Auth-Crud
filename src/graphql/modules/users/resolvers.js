import sequelize from 'sequelize';
export default {
    Query: {
        getUser: async (parent, { id }, { database }, info) => {
            return await database.user.findByPk(id)
        },
        getAllUsers: async (parent, _, { database }, info) => {
            return await database.user.findAll()
        },
        getNotRemovedUsers: async (parent, { id }, { database }, info) => {
            const Op = sequelize.Op;
            return await database.user.findAll({
                where: {
                    removed_at: {
                        [Op.eq]: null,
                    }
                }
            })
        },
        getRemovedUsers: async (parent, _, { database }, info) => {
            const Op = sequelize.Op;
            return await database.user.findAll({
                where: {
                    removed_at: {
                        [Op.ne]: null
                    }
                }
            })
        },
        profile: async (parent, { first = 10, offset = 0 }, { database }, info) => {
            return database.user.findAll({
                limit: first,
                offset: offset,
                order: [['id', 'ASC']]
            });
        },
    },
    Mutation: {
        createUser: async (parent, { input }, { database }, info) => {
            const user = await database.user.create({
                first_name: input.first_name,
                last_name: input.last_name,
                email: input.email
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
    User: {
        post: async (parent, args, { database }, info) => {
            const post = await database.post.findAll({ where: { 
                user_id: parent.id
            }});
            if (!post) {
                throw new Error('Post not found');
            }
            return post;
        },
        full_name: (user) => `${user.first_name} ${user.last_name}`
    }
}
