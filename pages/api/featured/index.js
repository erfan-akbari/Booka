const fs = require('fs')
const path = require('path')

const handler = (req, res) => {
    const dbAddress = path.join(process.cwd(), 'Data', 'db.json')
    const data = fs.readFileSync(dbAddress)
    const parsedData = JSON.parse(data)

    if (req.method === 'GET') {
        return res
        .status(200)
        .json(parsedData.featured)
    }
    
    return res.json({ message: 'not found' })
}

export default handler