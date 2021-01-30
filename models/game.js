const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        unique: false,
        required: true
    },
    score: {
        type: Number,
        unique: false,
        required: true
    }
});

const Game = mongoose.model("Game", gameSchema);


module.exports = Game;