const handler = (req, res) => {
    const { query, method } = req
    if (method === "GET") {
        return res.json({ message: `The single blog api ===> id: ${query.id}` })
    }
}

export default handler