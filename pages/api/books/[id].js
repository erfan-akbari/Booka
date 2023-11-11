const fs = require('fs')
const path = require('path')

const handler = (req, res) => {
    const { query, method } = req

    const dbAddress = path.join(process.cwd(), 'Data', 'db.json')
    const data = fs.readFileSync(dbAddress)
    const parsedData = JSON.parse(data)

    if (method === "GET") {
        const [findBook] = parsedData.books.filter(book => String(book.id) === String(query.id))
        return res
            .status(200)
            .json(findBook)
    }

    return res.json({ message: 'not found' })
}

export default handler