module.exports = {
   run: async (m, {
}) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  if (m.quoted) {
    if (m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return
    let usr = m.quoted.sender
    await conn.groupParticipantsUpdate(m.chat, [usr], 'remove')
    return
  }
  if (!m.mentionedJid[0]) return m.reply(Func.texted('italic', 'Balas/Tag orang yang ingin di kick.'))
  let users = m.mentionedJid.filter((u) => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users)
    if (user.endsWith('@s.whatsapp.net'))
      await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
},
  help: ['kick'],
  tags: ['group'],
  admin: true,
  botAdmin: true,
  group: true,
  command: ['kick','-']
}