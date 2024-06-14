import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285766450735', 'bot 𝙓𝘿 𖤍.', true],
['gtw', ' 𝙓𝘿 𖤍. v2', true]
]
global.mods = ['6285766450735']
global.prems = ['6285766450735']
// Info
global.nomorwa = '6285766450735'
global.author = 'gtw 𝙓𝘿 𖤍.'
global.namebot = '​gtw 𖤍'
global.wm = 'gtw 𖤍 ʙʏ gtw 𝙓𝘿 𖤍.'
global.stickpack = 'gtw 𖤍'
global.stickauth = 'gtw 𝙓𝘿 𖤍.'
// Link Sosmed
global.sig = 'https://www.instagram.com/ferzdevsxd'
global.sgh = 'https://github.com/ZeroBotz-MD'
global.sgc = 'https://chat.whatsapp.com'
// Donasi
global.ppulsa1 = '0'
global.ppulsa2 = '0'
global.psaweria = 'https://saweria.co'
global.ptrakterr = 'https://trakteer.id/ferzxd'
global.povo = '-'
// Emoticon
global.semot = '```'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = '65r5XpwYCY'
global.xyro1 = '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'
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk..
// Mendapatkan Apikey Kamu

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

