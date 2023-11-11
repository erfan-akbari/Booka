import connectToDB from '@/utils/db'

const handler = (req, res) => {
    connectToDB()
    return res.json({ message: 'Welcome to first api next-app' })
}

export default handler