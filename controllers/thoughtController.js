const {User, Thought} = require('../models');
const { find } = require('../models/User');

const thoughtController = {
    async getAllThoughts(req, res) {
        try {
            const allThoughts = await Thought.find({})
                .populate({
                    path: 'reactions',
                    select: '-__v'
                })
                .select('-__v');
            res.json(allThoughts);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    
    async getSingleThought({ params }, res) {
        try {
            const singleThought = await Thought.findOne({ _id: params.thoughtId })
                .populate({
                    path: 'reactions',
                    select: '-__v'
                })
                .select('-__v');
            if (!singleThought) {
                res.status(404).json({ message: 'No thought found!' });
                return;
            }
            res.json(singleThought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async createThought({ body }, res) {
        try {
            const userDB = await User.findOne({ _id: body.username });
            if (!userDB) {
                res.status(404).json({ message: 'No user found!' });
            }
            const singleThought = await Thought.create(body);
            const updatedUser = await User.findOneAndUpdate(
                { _id: body.username },
                { $push: { thoughts: singleThought._id } },
                { new: true }
            );
            if (!updatedUser) {
                res.status(404).json({ message: 'No user found!' });
            }
            res.json(singleThought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async updateThought({ params, body }, res) {
        try {
            const singleThought = await Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true });
            if (!singleThought) {
                res.status(404).json({ message: 'No thought found!' });
                return;
            }
            res.json(singleThought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async deleteThought({ params }, res) {
        try {
            const singleThought = await Thought.findOneAndDelete({ _id: params.thoughtId });
            if (!singleThought) {
                res.status(404).json({ message: 'No thought found' });
                return;
            }
            res.json(singleThought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async addReaction({ params, body }, res) {
        try {
            const singleThought = await Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $push: { reactions: body } },
                { new: true, runValidators: true }
            );
            if (!singleThought) {
                res.status(404).json({ message: 'No thought found!' });
                return;
            }
            res.json(singleThought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async deleteReaction({ params }, res) {
        try {
            const singleThought = await Thought.findOneAndDelete({ _id: params.thoughtId });
            if (!singleThought) {
                res.status(404).json({ message: 'No thought found!' });
                return;
            }
            res.json(singleThought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
};

module.exports = thoughtController;