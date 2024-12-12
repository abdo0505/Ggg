import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//---------[ Añada los numeros a ser Propietario/a ]---------

global.owner = [['212710723716', 'Ayoub', true], ['212641207087']]
global.mods = []
global.prems = []

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = "" //Ejemplo: +59309090909
global.confirmCode = "" 

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = false

//---------[ APIS GLOBAL ]---------

global.openai_key = 'sk-...OzYy' /* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW' /* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */
global.Key360 = ['964f-0c75-7afc']//key de violetics
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV2"
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://deliriussapi-oficial.vercel.app'

global.APIs = {xteam: 'https://api.xteam.xyz', 
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api-fgmods.ddns.net',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site' },
global.APIKeys = {'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren' }

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//------------------------[ Stickers ]-----------------------------

global.packname = 'Jeen-MD'
global.author = 'Jeen-MD'

//------------[ Versión | Nombre | cuentas ]------------

global.wm = 'ᴊᴇᴇɴ-ʙᴏᴛ'
global.botname = 'ᴊᴇᴇɴ-ʙᴏᴛ' 
global.botname = 'ᴊᴇᴇɴ-ᴍᴅ'
global.vs = '1.9.5'
global.yt = 'https://www.youtube.com/@elrebelde.21'
global.tiktok = 'tiktok.com/@elrebelde21'
global.md = 'https://github.com/elrebelde21/LoliBot-MD'
global.fb = 'https://www.facebook.com/elrebelde21'
global.face = 'https://www.facebook.com/groups/872989990425789/'

global.nna = '' //Update
global.nna2 = '' //LoliBot update
global.nnaa = '' //LoliBot - Test
global.nn = '' //Grupo 1
global.nnn = '' //Grupo 2
global.nnnt = '' //Grupo del Colaboracion
global.nnnt2 = '' //  COL 2
global.nnntt = '' //Grupo COL 3
global.nnnttt = '' //enlace lolibot
global.nnntttt = '' //Grupo ayuda sobre el bot
global.bot = ''
global.asistencia = `${fb}`
global.redes = [nna, nna2, yt, nn, md, tiktok, fb, nnn, face]

//------------------------[ Info | Datos ]---------------------------

global.wait = 'Calmao pa estoy procesando😎\n\n> *❗Por favor no hacer spam👏❗*'
global.waitt = '*⌛ _ᴡᴀɪᴛ ᴘʟᴇᴀsᴇ..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _ᴡᴀɪᴛ ᴘʟᴇᴀsᴇ..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _ᴡᴀɪᴛ ᴘʟᴇᴀsᴇ..._ ▬▬▬▬▬▬▭*'
global.waittttt = '*⌛ _ᴡᴀɪᴛ ᴘʟᴇᴀsᴇ..._ ▬▬▬▬▬▬▬*'
global.rg = '『✅ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ✅』\n\n'
global.resultado = rg
global.ag = '『⚠️ 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 ⚠️』\n\n'
global.advertencia = ag
global.iig = '『❕ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 』\n\n'
global.informacion = iig
global.fg = '『❌ 𝙀𝙍𝙍𝙊𝙍 ❌』\n\n'
global.fallo = fg
global.mg = '『❗️ 𝙇𝙊 𝙐𝙎𝙊 𝙈𝘼𝙇❗』\n\n'
global.mal = mg
global.eeg = '『📩 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 📩』\n\n'
global.envio = eeg
global.eg = '『💚 𝙀𝙓𝙄𝙏𝙊𝙎 💚』\n\n'
global.exito = eg

//-------------------------[ IMAGEN ]------------------------------
//global.img = "https://qu.ax/Zgqq.jpg"
global.img1 = 'https://i.ibb.co/XbvXSnZ/IMG-20241208-114456.jpg'
global.img2 = 'https://i.ibb.co/XbvXSnZ/IMG-20241208-114456.jpg'

global.imagen = fs.readFileSync('./Menu2.jpg')
global.imagen1 = fs.readFileSync('./media/Menu1.jpg')
global.imagen2 = fs.readFileSync('./media/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/Menu3.jpg')
global.imagen4 = fs.readFileSync('./media/Menu4.jpg')
global.imagen5 = 'https://qu.ax/rULv.jpg'
global.imagen6 = 'https://qu.ax/CySs.jpg'
global.menu18 = 'https://qu.ax/MOgO.jpg'
global.vid1 = 'https://qu.ax/dcAc.mp4'
global.img = [imagen, imagen1, imagen2, imagen3, imagen4]
global.imageUrl = ["https://qu.ax/HJnWj.jpg", "https://qu.ax/ehPzQ.jpg", "https://qu.ax/ilfbC.jpg"]

//----------------------------[ NIVELES | RPG ]---------------------------------

global.multiplier = 850 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '4' // máxima advertencias

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

//---------------[ IDs de canales ]----------------

global.ch = {
ch1: '120363372688988248@newsletter', 
ch2: '120363355261011910@newsletter', 
ch3: '120363372688988248@newsletter',
ch4: '120363301598733462@newsletter',
ch5: '120363372688988248@newsletter', 
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
