import { NowRequest, NowResponse } from '@vercel/node'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NowRequest, res: NowResponse) => {
  const name = String(req.query.name || 'yuri')
  const book = await prisma.books.create({
    data: { name }
  })
  res.json({ book })
}