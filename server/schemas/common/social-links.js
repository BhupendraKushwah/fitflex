module.exports = ((mongoose) => {
    const { Schema } = mongoose;
    return {
        linkedin: { type: Schema.Types.String },
        twitter: { type: Schema.Types.String },
        facebook: { type: Schema.Types.String },
        instagram: { type: Schema.Types.String },
        googleReview: { type: Schema.Types.String },
        tikTok: { type: Schema.Types.String },
        zillow: { type: Schema.Types.String },
    }
});