const {Schema, model} = require('mongoose');

const balanceSchema = new Schema(
    {
        balance: {type: Number, required: true}
    }, 
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("Balance", balanceSchema);

