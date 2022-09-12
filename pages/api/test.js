import dbConnect from '../../src/lib/dbConnect'

export default async function handler(req, res) {
  await dbConnect()

  res.status(200).json({ message: 'Test' })
}