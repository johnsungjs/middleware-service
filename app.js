import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

// disini udah dapet path, headers, dan body, tinggal axios aje udah
app.use('/middleware', async (req, res) => {
  console.log("method", req.method);
  console.log("url", req.body.url);
  console.log("headers", req.headers);
  console.log("data", req.body.data);
  const response = await
    axios({
      method: req.method,
      url: req.body.url,
      headers: req.headers,
      data: req.body.data,
      strict
    })
      .then((response) => console.log("response: ", response))
      .catch((err) => console.log("axios express error", err));

  res.json(response);
});

app.listen(PORT, "0.0.0.0", (error) => {
  if (!error) {
    console.log("Server is running succesfully on port: ", PORT);
  } else {
    console.log("Error occured, server can't start", error);
  }
});