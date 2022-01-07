setInterval(() => {
  let SunucuID = "SUNUCU_ID",
  let BirHafta = "BIR_HAFTA_ROLU_ID",
  let BirAy = "BIR_AY_ROLU_ID",//discord.gg/borangkdn
  let UcAy = "UC_AY_ROLU_ID",
  let AltiAy = "ALTİ_AY_ROLU_ID",//discord.gg/borangkdn
  let DokuzAy = "DOKUZ_AY_ROLU_ID",
  let BirYil = "BIR_YIL_ROLU_ID"
  const server = client.guilds.cache.get(SunucuID); 
  server.members.cache.forEach(async member => {//BoranGkdn#0001
if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 7) {await member.roles.add(BirHafta)}
//discord.gg/borangkdn
  if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 30) {await member.roles.remove(BirHafta)//BoranGkdn#0001
    await member.roles.add(BirAy)}

if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 90) {await member.roles.remove(BirAy)//discord.gg/borangkdn
  await member.roles.add(UcAy)}//discord.gg/borangkdn
//BoranGkdn#0001
if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 180) {await member.roles.remove(UcAy)//YouTube: BoranGkdn
await member.roles.add(AltiAy)}

if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 270) {await member.roles.remove(AltiAy)//YouTube: BoranGkdn
  await member.roles.add(DokuzAy)}//YouTube: BoranGkdn
//discord.gg/borangkdn
  if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 365) {await member.roles.remove(DokuzAy)
    await member.roles.add(BirYil)}

        })
  }, 1000 * 60 * 60 * 2)

//--------------------------------KOD 20 SATIR ZATEN ÇALMAYIN BİR ZAHMET :)--------------------------------\\
//--------------------------------KOD 20 SATIR ZATEN ÇALMAYIN BİR ZAHMET :)--------------------------------\\
//--------------------------------KOD 20 SATIR ZATEN ÇALMAYIN BİR ZAHMET :)--------------------------------\\
