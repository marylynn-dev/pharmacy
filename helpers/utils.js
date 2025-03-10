function generateSku(productName, uniqueId) {
    const namePart = productName
        .replace(/[^a-zA-Z0-9]/g, '') // Remove special characters
        .toUpperCase()
        .slice(0, 3); // Take the first 3 characters

    const idPart = uniqueId.toString().padStart(6, '0'); // Pad with zeros for consistent length
    return `${namePart}${idPart}`;
}

module.exports = {
    generateSku
}