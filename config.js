const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_09_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDQwLFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODksXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkR1RjJrS3ZmQlpibDNrYXJIL2JpbU1lVlhLVUc3c08xMFJSbDAxd0Jtajg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MTAxNDAwNTc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRUM2RjRDQ0Q1MzY0NkNDODUzQjZBMTczNTc1NzE0QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMwMDQ1NDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTgxMDE0MDA1NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDNzZFMDdDODU0RjVEMDFCNTk1RDkwQzYxMjM2N0U1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzAwNDU0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5SERXRUVXdFN2TzVqVVFDaGlOQWd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkYmE4Y2M5LWI5MzktNDljNC1hNmMyLTQwNmEwNjA0NjFiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAyNTEsXG4gICAgICA5NixcbiAgICAgIDEyMixcbiAgICAgIDEwNyxcbiAgICAgIDE3NyxcbiAgICAgIDE2NSxcbiAgICAgIDksXG4gICAgICA5OSxcbiAgICAgIDE1OCxcbiAgICAgIDIxMixcbiAgICAgIDI0MSxcbiAgICAgIDIyMixcbiAgICAgIDcxLFxuICAgICAgOTEsXG4gICAgICA3NSxcbiAgICAgIDE2MyxcbiAgICAgIDE5NixcbiAgICAgIDExMixcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAyNSxcbiAgICAgIDEwOSxcbiAgICAgIDIyMixcbiAgICAgIDM5LFxuICAgICAgMTQ1LFxuICAgICAgMTk3LFxuICAgICAgODksXG4gICAgICAxMyxcbiAgICAgIDc3LFxuICAgICAgMjE4LFxuICAgICAgNTUsXG4gICAgICAxMjUsXG4gICAgICA2MyxcbiAgICAgIDExNixcbiAgICAgIDIzMSxcbiAgICAgIDE2NCxcbiAgICAgIDMsXG4gICAgICAzNixcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFMzVOWUhFMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MTAxNDAwNTc5OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzg0NjQ3NDk1NjgxODU6NDFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pem4oCi4peP4peJ4py/QVlBTuKcv+KXieKXj+KAouKXplwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xHUis0c0NFUGVacnJvR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWUVOWUFmeG9oaGFGTFc0UFZsa0hRUXY4SU9qM1pmOGJDTzEyb3JBQWhEbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYM1RXQUVIRU9yMTh0dWp6Q0F0RllUR21yNks4cjQ0ZkhhL1VJZWZiNGdESHVsQi9FVlYrZWZzV1ViRTlFdnpMWDA4UW5uNXYxRld6SU9IZ2V2R2ZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIycTd6dUhGNTI1NGRmVU9STVpTeVk0R1UyZkMzNFpXOFRGL3VEMVZxVExzZklOcE9aR2NIYTNvK0d5VzRldWlMdGRhVUpxdDRteG9wbW1wRGxDN29DUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgxMDE0MDA1Nzk6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwMDQ1MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLRVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtFWi5qc29uIjogIntcImtleURhdGFcIjpcIktQbTdlaTdRci9LQmNHZWtQbVN5R1l3V0Y0dFdjcVRYdWhKL2xxeXpLcFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTYxOTU3MDQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
