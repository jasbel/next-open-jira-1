import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name?: string,
  message?: string,
}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

  if(process.env.NODE_ENV === 'production') {
    return res.status(401).json({message: ' no tinene acceso a esta informacion'})
  }

  res.status(200).json({ name: 'Example' })
}