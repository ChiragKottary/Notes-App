import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes';
import mongoose from 'mongoose';
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", router)


app.listen(3000, () => {
  console.log(` App listening at http://localhost:${3000}`);
});

mongoose.connect(
  "mongodb+srv://ckottary18:4ajza709nmavk4wr@cluster0.fdjdxav.mongodb.net/notes",
  { dbName: "notes" }
).then(()=>{
    console.log("Connected to the DataBase"); 
}).catch(()=>{
    console.log("Error while connecting");
})