const Medication = require('../models/medication')
const createError = require('http-errors')


async function create(req, res, next) {
    try {
        const { name, batchId, expiryDate, stockLevel, price, supplierId } = req.body
        const medication = new Medication({ name, batchId, expiryDate, stockLevel, price, supplierId })
        await medication.save()
        res.json({ message: "medication created successfully", data: { medication } })
    } catch (err) {
        next(err)
    }
}

function edit(req, res, next) {
    const medicationId = req.params.id;
    const medicationData = req.body;

    Medication.findOneAndUpdate({ _id: medicationId }, medicationData, { new: true })
        .then((updatedmedication) => {
            if (!updatedmedication) {
                throw createError(404, 'medication not found')
            }
            res.json({ message: "medication was updated successfully", data: updatedmedication });
        })
        .catch((err) => {
            next(err)
        });
}

async function get(req, res, next) {
    try {
        const medicationes = await Medication.find()
        res.json({ message: "All medications", data: medicationes })
    } catch (err) { next(err) }
}

function getOne(req, res, next) {
    const medicationId = req.params.id
    Medication
        .findOne({ _id: medicationId })
        .then((medicationData) => {
            if (!medicationData) {
                throw createError(404, 'medication not found');
            }
            res.json({ data: medicationData });
        })
        .catch((err) => next(err));
}

function del(req, res, next) {
    const medicationId = req.params.id;

    Medication.deleteOne({ _id: medicationId })
        .then((result) => {
            if (result.deletedCount === 0) {
                throw createError(404, 'medication not found');
            }
            res.json({ message: "medication deleted successfully" });
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