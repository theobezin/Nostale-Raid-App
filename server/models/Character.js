import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 4,
            max: 16,
        },
        level: {
            type: Number,
            required: true,
            max: 100,
        },
        heroicLevel: {
            type: Number,
            required: true,
            max: 100,
        },
        stuffPath: {
            type: String,
            default: "",
        },
        specialists: {
            type: Array,
            default: []
        }
    }, {timestamps: true}
);

const Character = mongoose.model("Character", CharacterSchema);
export default Character;