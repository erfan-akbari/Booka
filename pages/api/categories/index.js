const fs = require('fs')
const path = require('path')

const handler = (req, res) => {
    const dbPath = path.join(process.cwd(), 'Data', 'db.json')
    const data = fs.readFileSync(dbPath)
    const parsedData = JSON.parse(data)

    if (req.method === 'GET') {
        return res
        .status(200)
        .json(parsedData.categories)
    }

    return res.json({ message: 'not found' })
}

export default handler