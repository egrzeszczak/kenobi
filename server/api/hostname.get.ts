import os from 'os'
export default defineEventHandler((event) => {
    // Get hostname
    const hostname = os.hostname();
    // Return hostname
    return { hostname: hostname }
})