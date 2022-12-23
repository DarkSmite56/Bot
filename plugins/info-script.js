let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

📮 S&K
1. Jᴀɴԍᴀɴ ᴅιᴘᴇʀנuᴀʟ ʙᴇʟικᴀɴ Scʀιᴘт ιɴι😠
2. Jᴀɴԍᴀɴ sᴀʟᴀн ԍuɴᴀκᴀɴ scʀιᴘт ιɴι😴
3. suʙscʀιʙᴇ ᴘᴇмʙuᴀт sc ɴʏᴀ ʙκɴ sᴀʏᴀ ʏᴀ😎
4. Mιɴтᴀ sc? ʙoʟᴇн ᴀנᴀ🙃
• Jika ada eror di sc hub https://wa.me/628971507809

--------Thanks to ✨---------
NexEp
My parents
All Friends
All Contributors
All Creator Bot
Adiwajshing
Nurutomo
BochilGaming`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Scʀιᴘт ᴅι sιɴι', url: 'https://wa.me/628971507809'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
