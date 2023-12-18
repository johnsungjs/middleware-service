import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

// disini udah dapet path, headers, dan body, tinggal axios aje udah
app.post('/*', (req, res) => {
  res.json({
    data: {
      path: req.path,
      headers: req.headers,
      body: req.body
    },
    message: "middleware success",
    statusCode: res.statusCode
  });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running succesfully on port: ", PORT);
  } else {
    console.log("Error occured, server can't start", error);
  }
});