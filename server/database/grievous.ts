import mongoose from "mongoose"

export default async (_nitroApp) => {
    const config = useRuntimeConfig()
    mongoose
    .connect(`mongodb://${config.MONGO_ADDRESS}:27017/kenobi`)
    .then(() => {
        console.log(`Connected to ${config.MONGO_ADDRESS}`)
    })
    .catch((e) => {
        console.log(`Error connecting to ${config.MONGO_ADDRESS}: ${e}`)
    })
}