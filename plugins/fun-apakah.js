let handler = async (m) => m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Oh ya', 'Mungkin betul', 'Mungkin sih', 'Mungkin kagak yah', 'Enggak goublog', 'gk mungkin tai'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i

export default handler
