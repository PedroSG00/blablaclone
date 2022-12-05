const { Schema, model, Types } = require("mongoose");

const carSchema = new Schema(
    {

        owner: {
            type: Types.ObjectId,
            ref: 'User'
        },

        sits: {
            type: Number,
            required: [true, 'You have to specify number of sits'],
            min: 2
        },

        fuelConsumption: {
            type: Number
        },

        energeticClasification: {
            type: String,
            enum: ['B', 'C', 'ECO', '0'],
            required: [true, 'You have to specify your energetic clasification']
        }

    },

    {
        timestamps: true,
    }
);

const Car = model("Car", carSchema);

module.exports = Car;



