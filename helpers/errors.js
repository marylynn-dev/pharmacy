function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log the error stack trace

    // Handle known errors
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Validation Error',
            errors: err.errors
        });
    }

    if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).json({ message: 'Duplicate key error' });
    }

    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token' });
    }

    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
    }

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        return res.status(400).json({
            message: `Invalid object ID`,
        });
    }
    // For unexpected errors
    res.status(500).json({
        error: err.message
    });


}

module.exports = errorHandler;