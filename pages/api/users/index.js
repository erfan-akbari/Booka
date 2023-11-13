import connectToDB from '@/utils/db'
import usersModel from "@/models/user"

const handler = async (req, res) => {
    connectToDB()
    const { method } = req
    const { username, password, email } = req.body

    switch (method) {
        case 'GET': {
            const users = await usersModel.find({})
            res.status(200).json(users)
            break;
        }
        case 'POST': {
            const isInUser = await usersModel.findOne({ username })
            if (!isInUser?.username && username && password && email) {
                const user = await usersModel.create({ username, password, email })
                if (user) {
                    return res.status(201).json({ message: 'SuccessFully Register', user })
                } else {
                    return res.status(409).json({ message: 'Failed to register user' })
                }
            } else {
                return res.status(422).json({ message: 'error in body request' })
            }
            break;
        }
        default: {
            res.json({ message: 'not found' })
            break;
        }
    }

}

export default handler