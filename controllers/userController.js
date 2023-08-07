const { User, Thought} = require('../models');

const userController = {
    async getAllUsers(req, res) {
        try {
            const allUsers = await User.find({})
                .populate({
                    path: 'thoughts',
                    select: '-__v'
                })
                .select('-__v');
            res.json(allUsers);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async getSingleUser({ params }, res) {
        try {
            const singleUser = await User.findOne({ _id: params.userId })
                .populate({
                    path: 'thoughts',
                    select: '-__v'
                })
                .select('-__v');
            if (!singleUser) {
                res.status(404).json({ message: 'No user found!' });
                return;
            }
            res.json(singleUser);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async createUser({ body }, res) {
        try {
            const newUser = await User.create(body);
            res.json(newUser);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async updateUser({ params, body }, res) {
        try {
            const singleUser = await User.findOneAndUpdate({ _id: params.userId }, { $set: req.body }, { new: true, runValidators: true });
            if (!singleUser) {
                res.status(404).json({ message: 'No user found!' });
                return;
            }
            res.json(singleUser);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async deleteUser({ params }, res) {
        try {
            const singleUser = await User.findOneAndDelete({ _id: params.userId });
            if (!singleUser) {
                res.status(404).json({ message: 'No user found!' });
                return;
            }
            res.json(singleUser);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async addFriend({ params }, res) {
        try {
            const singleUser = await User.findOneAndUpdate(
                { _id: params.userId },
                { $addToSet: { friends: params.friendId } },
                { new: true }
            );
            if (!singleUser) {
                res.status(404).json({ message: 'No user found!' });
                return;
            }
            res.json(singleUser);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async removeFriend({ params }, res) {
        try {
            const singleUser = await User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { friends: params.friendId } },
                { new: true }
            );
            if (!singleUser) {
                res.status(404).json({ message: 'No user found!' });
                return;
            }
            res.json(singleUser);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
};


module.exports = userController;
