const { Schema, model, Types } = require("mongoose");

const tripSchema = new Schema(

    {

        from: {
            type: {
                type: String,
            },
            coordinates: [Number],
        },

        to: {
            type: {
                type: String,
            },
            coordinates: [Number],

        },

        origin_address: {
            type: String,
            required: [true, 'Origin is required']

        },

        destination_address: {
            type: String,
            required: [true, 'Destination is required']
        },

        owner: {
            type: Types.ObjectId,
            ref: 'User'
        },

        price: {
            type: Number
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
        }],

        owner: {
            type: Types.ObjectId,
            ref: 'User'
        }

    },
    {
        timestamps: true
    }
);

const Trip = model("Trip", tripSchema);

module.exports = Trip;



// origin: {
//     address: String,
//         location: {
//         type: {
//             type: String,
//                 },
//         coordinates: [Number],
//             required: [true, 'Origin is required']
//     }