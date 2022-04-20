import sequelize from 'sequelize';
export default {
    Query: {
        getPost: async (parent, { id }, { database }, info) => {
            return await database.post.findByPk(id)
        },
        getAllPosts: async (parent,_, { database }, info) => {
            return await database.post.findAll()
        },
        getNotRemovedPost: async (parent, { id }, { database }, info) => {
            const Op = sequelize.Op;
            return await database .post.findAll({
                where: { 
                    removed_at: { 
                        [Op.eq]: null, 
                    }
                }
            })
        },
        getRemovedPost: async (parent,_, { database }, info) => {
            const Op = sequelize.Op;
            return await database.post.findAll({
                where: {
                    removed_at: {
                        [Op.ne]: null
                    }
                }
            })
        },
        profile: async (parent, { first = 10, offset = 0 }, { database }, info) => {
            return database.post.findAll({
                limit: first,
                offset: offset,
                order: [['id', 'ASC']]
            });
        },
    },
    Mutation: {
        createPost: async (parent, { input }, { database }, info) => {
            const post = await database.post.create({
                first_name: input.first_name,
                last_name: input.last_name,
                email: input.email
            })
            return post;
        },
        updatePost: async (parent, { id, input }, { database }, info) => {
            const post = await database.post.findByPk(id)
            if (!post) throw new Error('Post not found');
            const updatePost = await post.update(input);
            return updatePost;
        },
        deletePost: async (parent, { id }, { database }, info) => {
            const post = await database.post.findByPk(id)
            if (!post) throw new Error('Post not found');
            const deletepost = await post.update({
                removed_at: new Date()
            });
            return !!deletepost;
        }
    },
};
