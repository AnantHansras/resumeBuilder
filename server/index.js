const express = require('express')
const connect = require('./utils/dbConnect');
const app = express()
const userRoutes = require('./Routes/User')
const cors = require('cors')
connect();
app.use(express.json());
app.use(
	cors({
		origin:"*",
		credentials:true,
	})
)

app.use('/user',userRoutes)

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})