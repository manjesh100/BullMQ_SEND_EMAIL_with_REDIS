const { createClient } = require("redis");
// Create Redis client
const connectionRedis = createClient({
  url: "redis://localhost:6379"
}); 
 // Handle errors
connectionRedis.on("error", (err) => console.error("Redis Error:", err));
module.exports = connectionRedis;
