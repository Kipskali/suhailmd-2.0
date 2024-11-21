const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaxGZwdJkK74htxFaG1k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaxGZwdJkK74htxFaG1k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://ibb.co/xs4ZsFf" || "https://ibb.co/xs4ZsFf" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© KaliTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256727088519";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://ibb.co/xs4ZsFf" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_53_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDeEZYWjRFZjBhZmVZWVZ5TzJjTHpIek1wVWc1NHhMeVNralR0M1IyaGUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxcm00VWwwd1E1eXViQ3BWdnNTdmJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ4ZTQxNmUwLWIwNjUtNDZhZi04NTZhLThlMjg0MTkxOTlhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDIsXG4gICAgICAyMjQsXG4gICAgICAxMzMsXG4gICAgICA2OCxcbiAgICAgIDE3LFxuICAgICAgMjAxLFxuICAgICAgMTE3LFxuICAgICAgMzEsXG4gICAgICAxMjMsXG4gICAgICA1MixcbiAgICAgIDIzNCxcbiAgICAgIDExMCxcbiAgICAgIDAsXG4gICAgICAxNTUsXG4gICAgICAyMjksXG4gICAgICAzMCxcbiAgICAgIDE1MSxcbiAgICAgIDg3LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDM4LFxuICAgICAgMTAxLFxuICAgICAgMTA1LFxuICAgICAgMTUzLFxuICAgICAgMSxcbiAgICAgIDQ4LFxuICAgICAgNTksXG4gICAgICAxNzMsXG4gICAgICA4MSxcbiAgICAgIDE2MixcbiAgICAgIDI0NyxcbiAgICAgIDQzLFxuICAgICAgMTA5LFxuICAgICAgNzEsXG4gICAgICAyMDgsXG4gICAgICAyNTAsXG4gICAgICA1MyxcbiAgICAgIDExNSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVBNV1lRRllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NjcyNzA4ODUxOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MDM3NDkwODk4MTMzOTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pyNXNjUUhFSmFmL3JrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUUt0R2xsVUp5Tmd4VzlkRTRRUVpIVE8xY1EvR2VjL1JsM2lSbXFweGNuST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSS3VNWkRVdGM1UTlNTldtSmtIM0w5T1B2MG9IRGovSDA2bHFIZXNaRG85RHZJL0N3dU9tSW1LRFRFZGloZWVHVWN0d1ZaSmdCcDdZZzkvT1NZR1NCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsU2M0V0NTRmU2U2hWZUdxM1RBQTdPc2EyVFR5M3BZRVNONU13UjcrVmwvNjhYMThrSXJyejd2V2M5OXBBTlpTUmoxS0ZBbG0xTk9aZXpNbXZudXZpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MjcwODg1MTk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyMTg3NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBbkRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFuRC5qc29uIjogIntcImtleURhdGFcIjpcIjA5bFNLUkU4Sm95VjZDSWthNi9Ia1RDOWVuVkhyajczbnRybFZteElMams9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyMjQ3Mjg1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjE5NDEwMzI4NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • KALI TECH』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kali Tech MD",
  ownername:process.env.OWNER_NAME|| "Kips Kali",


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
  alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
