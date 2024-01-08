import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT || 8000

connectDB()
.then(() =>{
    app.listen(PORT , () =>{
        console.log(`Server is running at port: ${PORT}`);
    })
})
.catch((err) =>{
    console.log("Mongo DB connection failed !!! ", err);
})








// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) =>{
//             console.log("Error: ", error);
//         })

//         app.listen(process.env.PORT, () =>{
//             console.log(`App is listening on POST: ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()