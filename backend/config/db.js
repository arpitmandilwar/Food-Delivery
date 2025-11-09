import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arpitmandilwar:Arpit2002@cluster0.koymvmq.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

// mongodb+srv://arpitmandilwar:Arpit2002@cluster0.w3fiomj.mongodb.net/food-del

