module.exports = ((mongoose) => {
    const { Schema } = mongoose;
    return {
        createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
        updatedBy: { type: Schema.Types.ObjectId, ref: 'user' },
    }
});