import connectToDB from "@/utils/db";
import newslettersModel from "@/models/newsletter"

const handler = async (req, res) => {
    connectToDB()
    const { email } = req.body

    if (email) {
        if (req.method === 'POST') {
            const subscribeNewsletter = newslettersModel.create({ email })
            if (subscribeNewsletter) {
                return res.status(201).json({ message: 'You have successfully subscribed to the newsletter' })
            } else {
                return res.status(500).json({ message: 'server error' })
            }
        }
    }

}

export default handler