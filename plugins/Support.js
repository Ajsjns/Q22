let handler = async (m, { conn, command, text }) => {
let love = `

*1_قنـاة دعـم البـ،ـوت 🖥️ لمعرفه تحديث الاوامر.↯↯*
*https://chat.whatsapp.com/JHVwmEAC0zI4yZWdvFsQVZ*
 

`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|القناة)$/i
export default handler
