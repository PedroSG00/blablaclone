const { Schema, model, Types } = require("mongoose");

const tripSchema = new Schema(

    {

        from: {
            type: {
                type: String,
            },
            coordinates: [Number],
            required: [true, 'Origin is required']
        },

        to: {
            type: {
                type: String,
            },
            coordinates: [Number],
            required: [true, 'Destination is required']

        },

        address: [{
            type: String
        }],

        owner: {
            type: Types.ObjectId,
            ref: 'User'
        },

        passengers: [{
            type: Types.ObjectId,
            ref: 'User'
        }],

        date: [{
            type: Date,
            required: [true, 'You have to specify date for the trip']
        }],

        stops: [{
            type: {
                type: String,
            },
            coordinates: [Number],
        }]

    },
    {
        timestamps: true
    }
);

const Trip = model("Trip", tripSchema);

module.exports = Trip;