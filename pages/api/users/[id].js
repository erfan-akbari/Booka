import { isValidObjectId } from "mongoose"
import usersModel from "@/models/user"

const handler = async (req, res) => {
    const { query, method } = req

    if (method === "GET") {
        if (isValidObjectId(query.id)) {
            const user = await usersModel.findOne({ _id: query.id })
            if (user) {
                return res.status(200).json(user)
            } else {
                return res.status(500).json({ message: `server error` })
            }
        }
    }
}

export default handler