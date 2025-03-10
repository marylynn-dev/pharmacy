const User = require('../models/user');
const createError = require('http-errors');
const { signAccessToken } = require('../helpers/jwt')

async function register(req, res, next) {
    try {
        const { fullName, email, password, role } = req.body;

        const user = new User({ fullName, email, password, role });
        const savedUser = await user.save();

        const { password: _, ...passwordLessUser } = savedUser.toObject();

        const accessToken = await signAccessToken(savedUser._id, savedUser.role)
        res.status(201).send({ user: passwordLessUser, accessToken });
    } catch (err) {
        // Handle specific errors
        if (err.name === 'ValidationError') {
            return next(createError(400, 'Invalid input data'));
        }
        if (err.code === 11000) { // MongoDB duplicate key error code
            return next(createError(409, 'Email already registered'));
        }
        next(err);
    }
}

async function logIn(req, res, next) {
    try {
        const user = await User
            .findOne({ email: req.body.email })
            .exec()
        if (!user) throw createError.NotFound('User not registered');

        const isMatch = await user.isValidPassword(req.body.password);
        console.log(isMatch)
        if (!isMatch) throw createError.Unauthorized('Username/Password is not valid');

        const { password: _, ...passwordLessUser } = user.toObject()

        const accessToken = await signAccessToken(user._id, user.role)
        res.send({ user: passwordLessUser, accessToken });
    } catch (error) {
        next(error);
    }
}


const logOut = async (req, res, next) => {
    try {
        console.log('logging out')
    } catch (error) {
        next(error)
    }
}

function getOne(req, res, next) {
    const userId = req.params.id;

    User
        .findOne({ _id: userId })
        .then((userData) => {
            if (!userData) {
                throw createError(404, 'user not found');
            }
            res.json({ data: userData });
        })
        .catch((err) => next(err));
}

module.exports = { register, logIn, logOut, getOne }