import User from "../models/User";
import Character from "../models/Character";

/* READ */
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

export const getUserCharacters = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const characters = await Promise.all(
            user.characters.map((id) => Character.findById(id))
        );
        const formattedCharacters = characters.map(
            ({ _id, username, level, heroicLevel, stuffPath, specialists}) => {
                return { _id, username, level, heroicLevel, stuffPath, specialists };
            }
        );
        res.status(200).json(formattedCharacters);
    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

/* UPDATE */
export const addRemoveCharacter = async (req, res)