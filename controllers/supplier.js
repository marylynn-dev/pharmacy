const Supplier = require('../models/supplier')
const createError = require('http-errors')

async function create(req, res, next) {
    try {
        const { name, contactEmail, contactPhone, address, medicationsSupplied } = req.body
        const supplier = new Supplier({ name, contactEmail, contactPhone, address, medicationsSupplied })
        await supplier.save()
        res.json({ message: "supplier created successfully", data: { supplier } })
    } catch (err) {
        next(err)
    }
}

function edit(req, res, next) {
    const supplierId = req.params.id;
    const supplierData = req.body;

    Supplier.findOneAndUpdate({ _id: supplierId }, supplierData, { new: true })
        .then((updatedsupplier) => {
            if (!updatedsupplier) {
                throw createError(404, 'supplier not found')
            }
            res.json({ message: "supplier was updated successfully", data: updatedsupplier });
        })
        .catch((err) => {
            next(err)
        });
}

async function get(req, res, next) {
    try {
        const suppliers = await Supplier.find()
        res.json({ message: "All suppliers", data: supplieres })
    } catch (err) { next(err) }
}

function getOne(req, res, next) {
    const supplierId = req.params.id
    Supplier
        .findOne({ _id: supplierId })
        .then((supplierData) => {
            if (!supplierData) {
                throw createError(404, 'supplier not found');
            }
            res.json({ data: supplierData });
        })
        .catch((err) => next(err));
}

function del(req, res, next) {
    const supplierId = req.params.id;

    Supplier.deleteOne({ _id: supplierId })
        .then((result) => {
            if (result.deletedCount === 0) {
                throw createError(404, 'supplier not found');
            }
            res.json({ message: "supplier deleted successfully" });
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