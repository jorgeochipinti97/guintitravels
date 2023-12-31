import mongoose, { Schema, model, Model } from 'mongoose';


const QuerySchema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    query: { type: String, required: true },
    product: { type: String, },
}, {
    timestamps: true,
})

const Query= mongoose.models.Query || model('Query', QuerySchema);

export default Query;