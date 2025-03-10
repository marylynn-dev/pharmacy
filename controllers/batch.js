const Batch = require('../models/batch')
const createError = require('http-errors')


async function create(req, res, next) {
    try {
        const { batchNumber, medicationId, manufactureDate, expiryDate, quantity, status } = req.body
        const batch = new Batch({ batchNumber, medicationId, manufactureDate, expiryDate, quantity, status })
        await batch.save()
        res.json({ message: "batch created successfully", data: { batch } })
    } catch (err) {
        next(err)
    }
}

function edit(req, res, next) {
    const batchId = req.params.id;
    const batchData = req.body;

    Batch.findOneAndUpdate({ _id: batchId }, batchData, { new: true })
        .then((updatedbatch) => {
            if (!updatedbatch) {
                throw createError(404, 'batch not found')
            }
            res.json({ message: "batch was updated successfully", data: updatedbatch });
        })
        .catch((err) => {
            next(err)
        });
}

async function get(req, res, next) {
    try {
        const batches = await Batch.find()
        res.json({ message: "All batches", data: batches })
    } catch (err) { next(err) }
}

function getOne(req, res, next) {
    const batchId = req.params.id
    Batch
        .findOne({ _id: batchId })
        .then((batchData) => {
            if (!batchData) {
                throw createError(404, 'batch not found');
            }
            res.json({ data: batchData });
        })
        .catch((err) => next(err));
}

function del(req, res, next) {
    const batchId = req.params.id;

    Batch.deleteOne({ _id: batchId })
        .then((result) => {
            if (result.deletedCount === 0) {
                throw createError(404, 'batch not found');
            }
            res.json({ message: "batch deleted successfully" });
        })
        .catch((err) => {
            next(err);
        });
}

module.exports = {
    create,
    edit,
    get,
    getOne,
    del
}