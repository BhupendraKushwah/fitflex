module.exports = ((mongoose) => {
    const { Schema } = mongoose;
    return {
        clientIp: { type: Schema.Types.String },
        browser: { type: Schema.Types.String },
        version: { type: Schema.Types.String },
        os: { type: Schema.Types.String },
        platform: { type: Schema.Types.String },
        source: { type: Schema.Types.String },
    }
});