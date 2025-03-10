const mongoose = require('mongoose')

const BatchSchema = mongoose.Schema({
    batchNumber: { type: String, required: true, unique: true },
    medicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Medication', required: true },
    manufactureDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    quantity: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ['Active', 'Recalled', 'Expired'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Batch', BatchSchema);
