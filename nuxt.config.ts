export default defineNuxtConfig({
	buildModules: ["@nuxtjs/tailwindcss"],
	runtimeConfig: {
		MONGO_ADDRESS: process.env.MONGO_ADDRESS
	},
	nitro: {
		plugins: ["@/server/database/grievous.ts"]
	}
});