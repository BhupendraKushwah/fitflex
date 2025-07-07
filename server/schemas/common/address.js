module.exports = ((mongoose) => {
    const { Schema } = mongoose;
    return {
        addressLine1: { type: Schema.Types.String },
        addressLine2: { type: Schema.Types.String },
        city: { type: Schema.Types.String },
        state: { type: Schema.Types.String },
        zipCode: { type: Schema.Types.String },
        district: { type: Schema.Types.String },
        country: {
            name: { type: Schema.Types.String },
            code: { type: Schema.Types.String },
        },
    }
});