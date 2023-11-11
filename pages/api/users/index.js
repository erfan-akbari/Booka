import connectToDB from '@/utils/db'
import usersModel from "@/models/user"

const fs = require('fs')
const path = require('path')

const handler = async (req, res) => {
    connectToDB()
    const { method } = req
    const { username, password, email } = req.body

    const dbPath = path.join(process.cwd(), 'Data', 'db.json')
    const data = fs.readFileSync(dbPath)
    const parsedData = JSON.parse(data)

    switch (method) {
        case 'GET': {
            const users = await usersModel.find({})
            res.status(200).json(...users)
            break;
        }

        case 'POST': {
            const isInUser = parsedData.users.some(user => user.username === username)

            if (!isInUser && (username && password && email)) {
                parsedData.users.push({
                    id: crypto.randomUUID(),
                    username,
                    password,
                    email,
                })

                const err = fs.writeFileSync(dbPath, JSON.stringify(parsedData))

                if (err) {
                    console.log('erorr =>', err);
                } else {
                    res.status(201).json(...parsedData.users)
                }
            } else {
                res.status(422).json({
                    message: 'error in body request'
                })
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