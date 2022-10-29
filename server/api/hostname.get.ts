import os from 'os'
export default defineEventHandler((event) => {
    return { hostname: os.hostname() }
})