module.exports = mongoose => {
    const schema = mongoose.Schema(
            {
                name: String,
                fathers_name: String,
                mothers_name: String,
                married: Boolean
            },
            { timestamps: true }

    );
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    return mongoose.model("person", schema);
};