import {
  GetObjectCommand,
  ListObjectsCommand,
  PutObjectCommand,
  S3Client
} from '@aws-sdk/client-s3'
import {
  AWS_ACCESS_KEY,
  SERVER_BUCKET,
  AWS_SECRET_KEY,
  NAME_BUCKET
} from './config.js'
import fs from 'fs'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const client = new S3Client({
  region: SERVER_BUCKET,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
  }
})

export async function uploadFile(file) {
  const stream = fs.createReadStream(file.tempFilePath)

  const uploadParams = {
    Bucket: NAME_BUCKET,
    Key: file.name,
    Body: stream
  }

  const command = new PutObjectCommand(uploadParams)

  return await client.send(command)
}

export async function getFile() {
  const command = new ListObjectsCommand({
    Bucket: NAME_BUCKET
  })

  return await client.send(command)
}

export async function getObject(name) {
  const command = new GetObjectCommand({
    Bucket: NAME_BUCKET,
    Key: name
  })

  return await client.send(command)
}

export async function DownloadObject(name) {
  const command = new GetObjectCommand({
    Bucket: NAME_BUCKET,
    Key: name
  })

  const result = await client.send(command)
  console.log(result)
  result.Body.pipe(fs.createWriteStream('./images/image.png'))
}

export async function getFileUrl(filename) {
  const command = new GetObjectCommand({
    Bucket: NAME_BUCKET,
    Key: filename
  })

  //segundos
  return await getSignedUrl(client, command, { expiresIn: 3600 })
}
