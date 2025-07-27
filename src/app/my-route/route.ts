import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  let medias = await payload.find({
    collection: 'media',
    page: 0,
    limit: 25,
  })

  console.log(medias)

  return Response.json({
    medias,
    message: 'This is an example of a custom route.',
  })
}
