const mongoose = require('mongoose')

const SupplierSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    contactEmail: { type: String, required: true, unique: true, lowercase: true },
    contactPhone: { type: String, required: true },
    address: { type: String, required: true },
    medicationsSupplied: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medication' }]
}, { timestamps: true });

module.exports = mongoose.model('Supplier', SupplierSchema);
