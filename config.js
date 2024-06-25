const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="preshleecoded@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Lilpresh:<Lilpresh>@clusterpresh.qcyjlap.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Lilpresh-hub/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vac8SYVK5cDMoFS7ZL10";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vac8SYVK5cDMoFS7ZL10" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349152597171" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349152597171";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349152597171";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_41_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICA3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNixcbiAgICAgICAgNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrRHdIajFwUENtMXZWVWRwTjl5dDUwSHpJUGdCRHhVcTZ4QURPOXRMSmM4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOOGFHZWttVFFfS0sxQTdSUW1fQXhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdkOTVkMmIxLTBjN2MtNGFlYi04NzQxLTk3NWVjZGE4ZWQ2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAyNDMsXG4gICAgICAxMDcsXG4gICAgICAyMSxcbiAgICAgIDk4LFxuICAgICAgNTMsXG4gICAgICAxMDgsXG4gICAgICAxNjEsXG4gICAgICA0MSxcbiAgICAgIDE1MyxcbiAgICAgIDE3OSxcbiAgICAgIDEyMSxcbiAgICAgIDMyLFxuICAgICAgMTU2LFxuICAgICAgMzUsXG4gICAgICAyMTYsXG4gICAgICAxLFxuICAgICAgMzQsXG4gICAgICAxODEsXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxNjUsXG4gICAgICA5NyxcbiAgICAgIDQ2LFxuICAgICAgMTM2LFxuICAgICAgMTc5LFxuICAgICAgMjUxLFxuICAgICAgMjI0LFxuICAgICAgMjUxLFxuICAgICAgMTE5LFxuICAgICAgMTEwLFxuICAgICAgMjM1LFxuICAgICAgMjIzLFxuICAgICAgMjMsXG4gICAgICAyMixcbiAgICAgIDIwMSxcbiAgICAgIDQ5LFxuICAgICAgMTE3LFxuICAgICAgMTcsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0pIRVlBSzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTI1OTcxNzE6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYzNzg1MDYyNjM3Njk1OjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05Ld3VzUUNFTlhmNXJNR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUjh1TCtUWHVqRWE0dGw1eXd3S296R2lLRVlGcS8vZzY2MThLTkVRclVIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmMHM2NlU4MnlqVk4yeFkvL2xxdm9JSUhFYm1CVVh3R2p4dXBTdEkxdFhnMkoxSXBNaTZTRGs3M0JIMkp4VlFkY2VYRDU2b21oUk5XYjgrWVJVblhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyb3Q4ZE83SUwrQWpjelBPbHhEdHRKTGsrTTE0ak0yOHE0K0xPbUtZd0IwWTFtT1lVMGxOa25QZGV3NkFlMVRFQWNiOUYybXlQRCsxR094VzNCZWFoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTUyNTk3MTcxOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTI1MDkwNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Lil Presh",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
