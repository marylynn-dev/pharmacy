const mongoose = require('mongoose');

const MedicationSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch', required: true },
    expiryDate: { type: Date, required: true },
    stockLevel: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Medication', MedicationSchema);
