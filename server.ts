const path = require('path')
const express = require('express')
const app = new express()

app.use(express.static('dist'))

app.get('*', (_req: any, res: { sendFile: (arg0: any) => void }) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000')
})