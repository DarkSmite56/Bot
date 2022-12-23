let handler = async (m, { command, text }) => m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['iya ', 'Mungkin betul', 'Mungkin sih', 'Mungkin kagak yah', 'kagak goublog', 'Gak mungkin anjay'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.command = /^apakah$/i

export default handler
