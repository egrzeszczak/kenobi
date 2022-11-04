import mongoose from "mongoose"

export default async (_nitroApp) => {
    const config = useRuntimeConfig()

    console.info(`[INFO] Connecting to GrievousDB ${config.public.NUXT_MONGO_ADDRESS}`)

    mongoose
        .connect(`mongodb://${config.public.NUXT_MONGO_ADDRESS}:27017/kenobi`)
        .then(() => {
            console.info(`[INFO] Connected to GrievousDB ${config.public.NUXT_MONGO_ADDRESS}`)
        })
        .catch((e) => {
            console.error(`[ERROR] Error connecting to GrievousDB ${config.public.NUXT_MONGO_ADDRESS}: ${e}`)
        })
}
