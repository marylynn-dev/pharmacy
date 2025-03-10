const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Pharmacist'], default: 'Pharmacist' }
}, { timestamps: true });

userSchema.pre('save', async function (next) { // Add next parameter
    if (!this.isModified('password')) {
        return next(); // Skip hashing if password isn't modified
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next(); // Call next to proceed
    } catch (err) {
        next(err); // Pass error to next middleware
    }
});

userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (err) {
        throw err;
    }
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;