import sequelize from 'sequelize';
export default {
    Query: {
        getPost: async (parent, { id }, { database }, info) => {
           return await database.post.findByPk(id)
        },
        getAllPosts: async (parent, _, { database }, info) => {
            return await database.post.findAll()
        },
        getNotRemovedPost: async (parent, { id }, { database }, info) => {
            const Op = sequelize.Op;
            return await database.post.findAll({
                where: {
                    removed_at: {
                        [Op.eq]: null,
                    }
                }
            })
        },
        getRemovedPost: async (parent, _, { database }, info) => {
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
                title: input.title,
                content: input.content,
                user_id: input.user_id
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
    Post: {
        userAuthor: async (parent, args, {database}, info) => {
            console.log(info);
            const user = await database.user.findByPk(parent.user_id);
            if (!user) {
                throw new Error('Author not found');
            }
            return user;
        },
    }
};
