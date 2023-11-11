const fs = require('fs')
const path = require('path')

const handler = (req, res) => {
    const { method } = req
    const { username, password } = req.body

    const dbPath = path.join(process.cwd(), 'Data', 'db.json')
    const data = fs.readFileSync(dbPath)
    const parsedData = JSON.parse(data)

    switch (method) {
        case 'POST': {
            const isInUser = parsedData.users.some(user => user.username === username)

            if (isInUser && (username && password)) {

                const findUser = parsedData.users.filter(user => user.username === username)
                res.status(201).json(...findUser)
                
            } else {
                res.status(404).json({ message: 'noy found user' })
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