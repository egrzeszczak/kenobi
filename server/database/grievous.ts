import mongoose from "mongoose"

export default async (_nitroApp) => {
    const config = useRuntimeConfig()

    console.log(config)

    mongoose
    .connect(`mongodb://${config.NUXT_MONGO_ADDRESS}:27017/kenobi`)
    .then(() => {
        console.log(`Connected to ${config.NUXT_MONGO_ADDRESS}`)
    })
    .catch((e) => {
        console.log(`Error connecting to ${config.NUXT_MONGO_ADDRESS}: ${e}`)
    })
}