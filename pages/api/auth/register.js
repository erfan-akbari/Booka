import usersModel from '@/models/user'
import connectToDB from '@/utils/db'

const handler = async (req, res) => {
    connectToDB()
    const { method } = req
    const { username, password, email } = req.body

    switch (method) {
        case 'POST': {
            if (username && password && email) {
                const user = await usersModel.create({ username, password, email })
                if (user) {
                    return res.status(201).json({ message: 'SuccessFully Register' })
                } else {
                    return console.log('Error Register');
                }

            } else {
                return res.status(422).json({ message: 'error in body request' })
            }
        }
        default: {
            res.json({ message: 'not found' })
            break;
        }
    }

}

export default handler