export default defineNuxtConfig({
	buildModules: ["@nuxtjs/tailwindcss"],
	runtimeConfig: {
		public: {
			NUXT_MONGO_ADDRESS: process.env.NUXT_MONGO_ADDRESS
		}
	},
	nitro: {
		plugins: ["@/server/database/grievous.ts"]
	}
});