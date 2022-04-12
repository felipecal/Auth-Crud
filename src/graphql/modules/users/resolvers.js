import User from '../../../../models/User';

export default {
    Query: {

        getUser: async (parent, { id }, { database}) => {
            return await database.user.findByPk(id)
        },
        

        users: () => User.find(),
    },
    Mutation: {
        createUser: (_, { data }) => User.create(data),
        updateUser: (_, { id, data }) => User.findOneAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => {
            const deleted = await User.findOneAndDelete(id);
            return !!deleted;
        }
    },
};

// const resolvers = {

//     Query: {
//         async getStudent(root, { id }, { models }) {
//             return models.Student.findByPk(id)
//         },
//         async getAllStudents(root, args, { models }) {
//             return models.Student.findAll()
//         },
//         async getHobbies(root, { id }, { models }) {
//             return models.Hobbies.findByPk(id)
//         }

//     },

//     Mutation: {

//         async createStudent(root, { firstName, email }, { models }) {
//             return models.Student.create({
//                 firstName,
//                 email
//             })

//         },