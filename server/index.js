const express = require('express')
const connect = require('./utils/dbConnect');
const app = express()
const userRoutes = require('./Routes/User')
const passwordRoutes = require('./Routes/Password')
const resumeRoutes = require('./Routes/Resume')
const contactUsRoute = require('./Routes/Contact')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
connect();
app.use(express.json());
app.use(
	cors({
		origin:"*",
		credentials:true,
	})
)

app.use('/user',userRoutes)
app.use('/password',passwordRoutes)
app.use('/resume',resumeRoutes)
app.use("/reach", contactUsRoute)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})