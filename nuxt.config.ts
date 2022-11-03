export default defineNuxtConfig({
	buildModules: ["@nuxtjs/tailwindcss"],
	runtimeConfig: {
		NUXT_MONGO_ADDRESS: process.env.NUXT_MONGO_ADDRESS || 'localhost'
	},
	nitro: {
		plugins: ["@/server/database/grievous.ts"]
	}
});