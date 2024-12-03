import express from 'express'
import fileUpload from 'express-fileupload'
import {
  DownloadObject,
  getFile,
  getFileUrl,
  getObject,
  uploadFile
} from './s3.js'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
const app = express()

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
  })
)

app.use(express.static('images'))

app.get('/files', async (req, res) => {
  try {
    const result = await getFile()
    res.json({ content: result.Contents })
  } catch (error) {
    console.log({ error })
    return res.status(500)
  }
})

app.get('/files/:name', async (req, res) => {
  try {
    const { name } = req.params
    const resp = await getObject(name)
    console.log(resp)
    res.status(200).send('ok')
  } catch (error) {
    console.log({ error })
    return res.status(500)
  }
})

app.get('/donwload/:name', async (req, res) => {
  try {
    const { name } = req.params
    await DownloadObject(name)

    res.status(200).send('ok')
  } catch (error) {
    console.log({ error })
    return res.status(500)
  }
})

app.post('/files', async (req, res) => {
  try {
    const result = await uploadFile(req.files.loofy)
    return res.json({ result })
  } catch (error) {
    console.log({ error })
    return res.status(500)
  }
})

app.listen(3000)
console.log('server on port 3000')

app.get('/filesUrl/:name', async (req, res) => {
  try {
    const resp = await getFileUrl(req.params.name)
    res.status(200).json({ resp })
  } catch (error) {
    console.log({ error })
    return res.status(500)
  }
})
