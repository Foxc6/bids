const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	name: String,
	productOneBid: { type: Number, min: 1},
	productTwoBid: { type: Number, min: 1},
	productThreeBid: { type: Number, min: 1},
}, {timestamps: true})

mongoose.model("User", UserSchema)