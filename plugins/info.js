let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Nastar Gs
Script: @Nurotomo
Github: 
https://github.com/NastarGs/Biji-BOT1

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @its.bijii
➥ YouTube:
youtube.com/NastarGMB

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Arya
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Tsel: 082322695602
╠➥ Gopay: 087897345363
║>Request? Wa.me/6283820699650
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

