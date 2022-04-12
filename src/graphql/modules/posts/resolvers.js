import Post from '../../../models/Post';
import User from '../../../models/User';

const postResolve = {
    Post: {
        author: (post) => User.findById(post.author),
    },
    Query: {
        posts: () => Post.find(),
        post: (_, { id }) => Post.findById(id),
    },
    Mutation: {
        createPost: (_, { data }) => Post.create(data),
        updatePost: (_, { id, data }) => Post.findOneAndUpdate(id, data, { new: true }),
        deletePost: async (_, { id }) => {
                        const deleted = await Post.findOneAndDelete(id);
            return !!deleted;
        },
        deleteManyPost: async (_, { ids }) => {
            ids.forEach(async (id) => {                
                await postResolve.Mutation.deletePost(_, {id}).then(res => console.log(res));
            })
            return true;
        }
    },
};

export default postResolve;