import mongoose from 'mongoose';



const Connection = (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.cfn4r.mongodb.net/project3?retryWrites=true&w=majority`;
    try {
        mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;