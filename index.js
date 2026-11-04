import express from "express"
import dotenv  from "dotenv"

dotenv.config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('|| Jai Shree Ram ||')
})
app.get("/rakshit", (req, res) =>{
    res.send("Hello Rakshit!")
})

console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})