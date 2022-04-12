import User from '../../../../models/User';

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
        createUser: async (parent, {input}, { database }, info) => {
            console.log(input);
            const user = await database.user.create({
                fullname: input.fullname,
                email: input.email,

            })
            console.log(user);
            return user;
        },
        // updateUser: (_parent, { id, data }) => User.findOneAndUpdate(id, data, { new: true }),
        // deleteUser: async (_, { id }) => {
        //     const deleted = await User.findOneAndDelete(id);
        //     return !!deleted;
        // }
    },
};

// const resolvers = {


//     Mutation: {

//         async createStudent(root, { firstName, email }, { models }) {
//             return models.Student.create({
//                 firstName,
//                 email
//             })

//         },