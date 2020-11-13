const { Schema, model } = require("mongoose");

const RuleSchema = new Schema({
    description: {
        type: String,
        required: true,
        enum: [
            "Women only", 
            "Man only"
        ]
    }
})
