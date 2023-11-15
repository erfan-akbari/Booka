import usersModel from '@/models/user'
import connectToDB from '@/utils/db'

const handler = async (req, res) => {
    connectToDB()

    const { method } = req
    const { username, password } = req.body

    switch (method) {
        case 'POST': {

            const user = await usersModel.findOne({ username, password })
            if (username && password) {
                if (user) {
                    res.status(200).json(user)
                } else {
                    res.status(401).json({ message: 'There is no one with this profile' })
                }
            } else {
                res.status(422).json({ message: 'request body is not found' })
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