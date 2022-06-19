//━━━━━━━━━━━━━━━[ Thanks To Dika Ardnt ]━━━━━━━━━━━━━━━\\
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateProfilePicture,  generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const hx = require('hxz-api')
const xfar = require('xfarr-api')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")
const imgbbUploader = require('imgbb-uploader')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const nekobocc = require('nekobocc')
//Gambar
let zaki = fs.readFileSync('./media/Zaki.jpg')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qris = 'https://telegra.ph/file/a12c56da5d940cb4a703d.jpg'
const faxc = 'https://telegra.ph/file/7ebc6b629a069790e811b.jpg'
const { color, bgcolor } = require('./lib/color')

//━━━━━━━━━━━━━━━[ Bremana ]━━━━━━━━━━━━━━━\\

const { hentaiimg, hentaivid } = require('./plugins/hentai')
const { Tiktokdl } = require('./lib/tiktokdl')
const { igDL } = require('./lib/igdl')
apizenz = '4e5dd596c8'


let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _balance = JSON.parse(fs.readFileSync('./database/balance.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
// Docunent
var hudy = [ 'application/pdf' , 'application/vnd.openxmlformats-officedocument.presentationml.presentation' , 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
hudu = hudy[Math.floor(Math.random() * hudy.length)]

//━━━━━━━━━━━━━━━[ End ]━━━━━━━━━━━━━━━\\
//Database
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = Zaki = async (Zaki, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Zaki.decodeJid(Zaki.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
//Group
        const groupMetadata = m.isGroup ? await Zaki.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
//Time
        moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	
//Func Runtime
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
	
//Fake Reply Group
const troli ={key: {fromMe: false,"participant":`${m.sender.split`@`[0]}@s.whatsapp.net`, "remoteJid": "6281261266674-1635944260@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fakeImg, surface: 200, message: `Req Fitur ${command}\nDari ${pushname}`, orderTitle: 'Bremana', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
	const reply = (text) => {
            Zaki.sendMessage(m.chat, { text: text, contextInfo:{"externalAdReply": {"title": ``,"body": `Losing :/`, "previewType": "VIDEO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://wa.me/p/5724577000888501/6281364601469"}}}, { quoted: troli})
        }
        
        const reply1 = (teks) => {
            Zaki.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Subscribe Bot's Official YT Channel`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://m.youtube.com/channel/UCHdipvk52k43KsPRenGpD0w"}}}, { quoted: troli})
        }
      let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let bancmd = JSON.parse(fs.readFileSync('./database/bancmd.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));


const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false
const welcm = m.isGroup ? wlcm.includes(m.chat) : false
const GcRvk = m.isGroup ? gcrevoke.includes(m.chat) : false
const isLeveling = m.isGroup ? _leveling.includes(m.chat) : false
const isAutoStick = _autostick.includes(m.chat)
const isAutoSticker = m.isGroup ? autosticker.includes(m.chat) : false
const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
const isUser = pendaftar.includes(m.sender)
autoreadsw = true
const qtod = m.quoted? "true":"false"
//Sewa
_sewa.expiredCheck(Zaki, sewa)

// Auto-group sticker
        if (isAutoSticker) {
                      if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Zaki.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
                console.log(`Detec Autosticker`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await Zaki.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)}
        }
                if (isAutoStick) {
            if (/image/.test(mime)) {
                let mediac =   quoted.download()
                  Zaki.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Detec Autosticker`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac =   quoted.download()
                  Zaki.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
            }
        }
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'cyan'), 'm.chat', color(m.pushName), 'in', color(groupName, 'orange'))
}
        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 
        // Leveling Punya Chika 🗿🗿 Di Copas Oleh Fardan
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
        //function levelingnya
                        if (m.isGroup && isLeveling && isUser && Zaki.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `──「 LEVEL UP 」──\n\n❑ Name:  @${m.sender.split("@")[0]}\n❑ XP: ${getLevelingXp(m.sender)}\n❑ Level: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❑ Role: ${role} \n\nCongrats!! 🎉`
Zaki.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error(err)
                        }
                }
if (command) {
  Zaki.sendPresenceUpdate('composing', m.chat)
}
if (autoreadsw) {
		if (m.chat === 'status@broadcast') {
		Zaki.chatRead(m.chat)
	}
	}






//function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/darah.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/alat_tukar.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/monay.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
   //Fax
let picaks = ['flaming','fluming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

//Add Hit Fax
global.hit = {}
if (command) {
data = await fetchJson('https://api.countapi.xyz/hit/Bremana/visits')
jumlahcmd = data.value
dataa =  await fetchJson(`https://api.countapi.xyz/hit/Bremana${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = dataa.value
} try {

            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

//Mode Bot
        if (!Zaki.public) {
            if (!m.key.fromMe) return
        }

//Console Auto Read
        if (m.message) {
            Zaki.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
       //Block 212 bitch
       if (m.sender.startsWith('212'))
        
        Zaki.updateBlockStatus(m.sender, "block")
      
//Detected Link Group
/* if (isAnti212)

if (m.sender.startsWith('212')){
await Zaki.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} */
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/'))
 {
               if (!m.key.fromMe) {
               reply('*｢  LINK DETECTED  ｣*\nMaaf Anda Akan Di Kick Karena Antilink Di Group Ini Aktif ')
               if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
               let gclink = (`https://chat.whatsapp.com/`+await Zaki.groupInviteCode(m.chat))
               let isLinkThisGc = new RegExp(gclink, 'i')
               let isgclink = isLinkThisGc.test(m.text)
               if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
               if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
               if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
               let sianj = m.sender
               await Zaki.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
          if (!isBotAdmins) return m.reply(`Bot must be admin first`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
        if (isAdmins) return m.reply(`Ehh sorry you admin`)
        if (isCreator) return m.reply(`Ehh sorry you are the owner of me`)
        Zaki.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
//Mute Chat Bot
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//Reading Database
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//Automatic Reset Limit
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	    
//Respond From Media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Zaki.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Zaki.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Zaki.ev.emit('messages.upsert', msg)
        }

//Game	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Zaki.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, Zaki.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Zaki.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Zaki.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, Zaki.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Zaki.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Zaki.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Zaki.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Zaki.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Zaki.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    Zaki.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Zaki.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Zaki.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Zaki.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Zaki.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Zaki.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Zaki.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) Zaki.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Zaki.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
           case 'me': case 'inventori': case 'profile':{
                if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
                if (!isInventory){ addInventori(m.sender) }
                if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
                   
                         try {
                    ppuser = await Zaki.profilePictureUrl(m.quoted.sender, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/fa07d44f07b153e67e84f.jpg'
                }
                   let teksehmazeh = `── 「 PROFIL BIODATA 」 ──\n\n`
                   teksehmazeh += `❤️Darah kamu : ${getDarah(m.sender)}\n`
                   teksehmazeh += `◻️️Besi kamu : ${getBesi(m.sender)}\n`
                   teksehmazeh += `🌟Emas Kamu : ${getEmas(m.sender)}\n`
                   teksehmazeh += `💎Emerald Kamu : ${getEmerald(m.sender)}\n`
                   teksehmazeh += `🧪Potion Kamu : ${getPotion(m.sender)}\n\n`
                   teksehmazeh += `── 「 HASIL BURUAN 🏹 」 ──\n`
                   teksehmazeh += `🐟Ikan : ${getIkan(m.sender)}\n`
                   teksehmazeh += `🐔Ayam : ${getAyam(m.sender)}\n`
                   teksehmazeh += `🐇Kelinci : ${getKelinci(m.sender)}\n`
                   teksehmazeh += `🐑Domba : ${getDomba(m.sender)}\n`
                   teksehmazeh += `🐄Sapi : ${getSapi(m.sender)}\n`
                   teksehmazeh += `🐘Gajah : ${getGajah(m.sender)}\n\n`
                   teksehmazeh += `${pushname}`
   
                          Zaki.sendMessage(m.chat, { image: { url: ppuser}, caption: teksehmazeh} ,{quoted : m})
                          }
                          break
                          case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 
 case 'allbalance':

 	{      
   let txt = `「 *ALL BALANCE USER* 」\n\n`
     for (let i of _balance){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    m.reply(txt)       
  }
 break
case 'mancing':{
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
  m.reply("1 umpan terpakai")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mancing lagi🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/mancing.jpg' },
      caption: caption,
      footer: "Nothing :/",
      buttons: buttons,
      headerType: 4
     }
     Zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai memancing🎣`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)	     
  }   
  break  
  case 'darah':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  m.reply(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isCekDarah < 1) return reply('Darah kamu habis')
   kurangDarah(m.sender, 7)
  m.reply('Telah Si Bacok️')
  }
  break
case 'mining': case 'menambang':{
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     Zaki.sendMessage(m.chat,buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`*${pushname}* Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break 
  case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break

 case 'heal':{
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{ 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     Zaki.sendMessage(m.chat, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
                      case 'grupsetting':
                          case 'groupsetting':{
                                  let sections = []
                                  let com = [`group enable`,`leveling on`,`autosticker enable`,`welcome on`,`antilink on`]
                                  let comm = [`group disable`,`leveling off`,`autosticker disable`,`welcome off`,`antilink off`]
                                  let listnya = [`Group open/close`,`Leveling on/off`,`Auto-Sticker on/off`,`Welcome on/off`,`antilink on/off`]
                                  let suruh = [`Enable`, `Disable`]
                                  let fiturname = [`Group`,`Leveling`,`AutoSticker`,`Welcome`,`Antilink`]
                                  let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                                  let startnumm = 1
                                  for (let x of com) {
                                      const yy = {title: `${listnya[startnum++]}`,
                                  rows: [
                                     {
                                      title: `${suruh[0]}`,
                                      description: `Mengaktifkan ${fiturname[startnu++]}`,
                                      rowId: `${prefix}${x}`
                                    },{
                                      title: `${suruh[1]}`,
                                      description: `Menonaktifkan ${fiturname[startn++]}`,
                                      rowId: `${prefix}${comm[start++]}`
                                    }
                                  ]
                                 }
                                      sections.push(yy)
                                  }
                                  const sendm =  Zaki.sendMessage(m.chat, 
                    {
                     text: "Group Settings",
                     footer: "Only Admin Yak",
                     title: "Atur Settingan Grup anda disini......",
                     buttonText: "Click Button",
                     sections
                    }, { quoted : m }
                  )  
              }
                break
              case 'welcome': {
              if (isBan) return m.reply(mess.ban)
              if (!m.isGroup) return m.reply(mess.group)
              if (!isAdmins && !isCreator) return m.reply(mess.admin)
              if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
              if (args[0] === "on") {
              if (welcm) return m.reply('Sudah Aktif')
              wlcm.push(m.chat)
              m.reply('Succes menyalakan welcome di group ini')
              } else if (args[0] === "off") {
              if (!welcm) return m.reply('Sudah Mati')
              let off = wlcm.indexOf(m.chat)
              wlcm.splice(off, 1)
              m.reply('Succes mematikan welcome di group ini')
              } else {
              m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
              }
              }
              break
              case 'autorevoke': {
              if (isBan) return m.reply(mess.ban)
              if (!m.isGroup) return m.reply(mess.group)
              if (!isBotAdmins) return m.reply(mess.botAdmin)
              if (!isAdmins && !isCreator) return m.reply(mess.admin)
              if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
              if (args[0] === "on") {
              if (GcRvk) return m.reply('Sudah Aktif')
              gcrevoke.push(m.chat)
              m.reply('Succes menyalakan autorevoke di group ini')
              } else if (args[0] === "off") {
              if (!GcRvk) return m.reply('Sudah Mati')
              let off = wlcm.indexOf(m.chat)
              gcrevoke.splice(off, 1)
              m.reply('Succes mematikan autorevoke di group ini')
              } else {
              m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
              }
              }
              break
              case 'leveling':
              if (isBan) return m.reply(mess.ban)
              if (!m.isGroup) return m.reply(mess.group)
              if (!isAdmins && !isCreator) return m.reply(mess.admin)
              if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
              if (args[0] === 'on'){
              if (isLeveling) return m.reply(`Udah aktif`)
              _leveling.push(m.chat)
              fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
              m.reply('leveling aktif')
              } else if (args[0] === 'off'){
              let anu = _leveling.indexOf(m.chat)
              _leveling.splice(anu, 1)
              fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
              m.reply('leveling nonaktif')
              } 
              break
              case 'autosticker':
                          case 'autostiker':
              if (isBan) return m.reply(mess.ban)
              if (!m.isGroup) return m.reply(mess.group)
              if (!isBotAdmins) return m.reply(mess.botAdmin)
              if (!isAdmins && !isCreator) return m.reply(mess.admin)
              if (args.length < 1) return m.reply('ketik autosticker enable untuk mengaktifkan\nketik autosticker disable untuk menonaktifkan')
              if (args[0]  === 'enable'){
              if (isAutoSticker) return m.reply(`Udah aktif`)
              autosticker.push(m.chat)
              fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
              m.reply('autosticker aktif')
              } else if (args[0] === 'disable'){
              let anu = autosticker.indexOf(m.chat)
              autosticker.splice(anu, 1)
              fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
              m.reply('autosticker nonaktif')
              }
              break
              case 'autostickerpc':
                          case 'autostikerpc':
                    if (m.isGroup) return fakey('Command ini khusus chat pribadi!')
              if (isBan) return m.reply(mess.ban)
              if (args.length < 1) return m.reply('ketik autosticker enable untuk mengaktifkan\nketik autosticker disable untuk menonaktifkan')
              if (args[0]  === 'enable'){
              if (isAutoStick) return m.reply(`Udah aktif`)
              _autostick.push(m.chat)
              fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
              m.reply('autostickerpc aktif')
              } else if (args[0] === 'disable'){
              let anu = autosticker.indexOf(m.chat)
              _autostick.splice(anu, 1)
              fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
              m.reply('autostickerpc nonaktif')
              }
              break
              case 'sewa':
              if (!q) return m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0] === 'add'){
              _sewa.addSewaGroup(m.chat, args[1], sewa)
              m.reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(m.chat, sewa), 1)
              fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
              break
              case 'sewalist': 
              case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvippsewa = ms(i.expired - Date.now())
              txtnyee += `ID : ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
              }
              m.reply(txtnyee)
              break
              case 'sewacheck':
              case 'ceksewa': 
              if (!m.isGroup) return m.reply('khusus Grup')
              if (!isSewa) return m.reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvipsewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
              let sewanya = `「 SEWA EXPIRE 」\n\n➸ ID: ${from}\n➸ Expired : ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
              m.reply(sewanya)
              break
              case 'getname': {
              if (isBan) return m.reply(mess.ban)
              if (qtod === "true") {
              namenye = await Zaki.getName(m.quoted.sender)
              m.reply(namenye)
              } else if (qtod === "false") {
              Zaki.sendMessage(m.chat, {text:"Reply orangnya"}, {quoted:m})
              }
              }
              break
              case 'getpic': {
             
              if (qtod === "true") {
              try {
              pporg = await Zaki.profilePictureUrl(m.quoted.sender, 'image')
              } catch {
              pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }
              Zaki.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
              } else if (qtod === "false") {
              try {
              pporgs = await Zaki.profilePictureUrl(m.chat,'image')
              } catch {
              pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }
              Zaki.sendMessage(m.chat, { image : { url : pporgs}, caption:`Done` }, { quoted : m })
              }
              }
              break
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await Zaki.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Zaki.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Zaki.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await Zaki.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Zaki.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                Zaki.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/5Gpzr1Q/20220422-170038.jpg' }, caption: `*── 「 DONATE 」 ──*\n\n_Kalian Bisa Dukung Bot Lewat Donate Ke :_\n _》Dana : 6281366391843\n _》Gopay : 085878313791_\n _》Pulsa : 085878313791 ( Indosat )_\n\n_Donate Kalian Sangat Berarti._\n\n_Contact person Owner:_\n_wa.me/6285878313791_` }, { quoted: troli})
            }
            break
            case 'sc': case 'script': {
                reply('Nyari Script ya banh ☝️😅\nBase : Hisoka morou\nGw nemu di yt bang kizaki 😅😅')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    Zaki.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Zaki.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Zaki.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Zaki.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Zaki.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Zaki.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Zaki.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': { //this is in indonesian so if u want to activate u can but will be in indonesian
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Zaki.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': { //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. music\n2. picture\n3. word\n4. sentence\n5. lyrics\n6.rice cake`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Zaki.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: troli})
                    Zaki.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Zaki.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Zaki.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Zaki.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Zaki.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Zaki.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Zaki.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Zaki.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Zaki.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Zaki.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Zaki.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Zaki.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Zaki.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'pasangan': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, jawab, Zaki.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, jawab, Zaki.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Zaki.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await Zaki.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Zaki.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Zaki.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Zaki.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Zaki.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Zaki.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Zaki.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Zaki.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Zaki.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setppbot': {
             
                if (!isCreator) return m.reply(mess.owner)
                if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                var media = await Zaki.downloadAndSaveMediaMessage(quoted)
                try {
                if (args[0] == "/full") {
                const { generateProfilePicture } = require("./lib/myfunc")
                var { img } = await generateProfilePicture(media)
                await Zaki.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                } else { await Zaki.updateProfilePicture(botNumber, { url: media }) }
                m.reply(mess.success)
                } catch { m.reply('Gagal Mengganti Photo Profile') }
                }
                break
                case 'setppgroup': {
             
                    if (!isCreator) return m.reply(mess.owner)
                    if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    var media = await Zaki.downloadAndSaveMediaMessage(quoted)
                    try {
                    if (args[0] == "/full") {
                    const { generateProfilePicture } = require("./lib/myfunc")
                    var { img } = await generateProfilePicture(media)
                    await Zaki.query({ tag: 'iq',  attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                    } else { await Zaki.updateProfilePicture(m.chat, { url: media }) }
                    m.reply(mess.success)
                    } catch { m.reply('Gagal Mengganti Photo Profile') }
                    }
                    break
case 'grupinfo': case 'groupinfo':
try{
 var pic = await Zaki.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Zaki.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case 'tagall': case 'tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `➣ @${mem.id.split('@')[0]}\n`
                }
                Zaki.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: troli})
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            Zaki.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: troli})
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `➣ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
• Total: ${vote[m.chat][1].length}

 [ DEVOTE ]
• Total: ${vote[m.chat][2].length}

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Zaki.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Zaki.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Zaki.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Zaki.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Zaki.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Zaki.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes
`
Zaki.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await Zaki.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Zaki.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `Group Mode`, Zaki.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await Zaki.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Zaki.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'OEPN' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `Mode Edit Info`, Zaki.user.name, m)

            }
            }
            break
case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```ANTILINK ACTIIVED IN GROUP```')
						Zaki.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```ANTILINK NOT ACTIVE IN GROUP```')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					case 'antiwame': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Activated!`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: 'ENABLE' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: 'DISABLE' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, Zaki.user.name, m)
                }
             }
             break
					   case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${Zaki.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${Zaki.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'MUTE' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'UNMUTE' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `Mute Bot`, Zaki.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await Zaki.groupInviteCode(m.chat)
                Zaki.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await Zaki.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await Zaki.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                Zaki.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await Zaki.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/E14rIyYMuovIfkskhi5QN9'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Zaki.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      Zaki.send5ButImg(i, txt, Zaki.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} halo`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nIn ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/E14rIyYMuovIfkskhi5QN9'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Zaki.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      Zaki.send5ButImg(yoi, txt, `${global.pengguna} | © 2022`, fatihgans, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': {
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `➣ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━➣ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ➣ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                Zaki.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await Zaki.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `❏ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `➣ *Name :* ${nama}\n➣ *User :* @${i.split('@')[0]}\n➣ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Zaki.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `❏ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Zaki.groupMetadata(i)
                     teks += `➣ *Name :* ${metadata.subject}\n➣ *Owner :* @${metadata.owner.split('@')[0]}\n➣ *ID :* ${metadata.id}\n➣ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n➣ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Zaki.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Zaki.sendText(m.chat, 'Online List:\n\n' + online.map(v => '➣ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Zaki.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await Zaki.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
            
            
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Zaki.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
                let media = await Zaki.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Zaki.sendMessage(m.chat, { image: buffer }, { quoted: troli})
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Zaki.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Zaki.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: troli})
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Zaki.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Zaki.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${Zaki.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Zaki.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Zaki.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Zaki.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: troli})
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Zaki.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Zaki.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Zaki.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `➣ No : ${no++}\n➣ Type : ${i.type}\n➣ Video ID : ${i.videoId}\n➣ Title : ${i.title}\n➣ Views : ${i.views}\n➣ Duration : ${i.timestamp}\n➣ Upload At : ${i.ago}\n➣ Author : ${i.author.name}\n➣ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Zaki.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks ,contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}}}, { quoted: troli})
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `➣ *Title* : ${g.title}\n`
                teks += `➣ *Description* : ${g.snippet}\n`
                teks += `➣ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': case 'googleimage': {
        if (!text) throw `Example : ${prefix + command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
*Query* : ${text}
 *Media Url* : ${images}`,
                    footer: Zaki.user.name,
                    buttons: buttons,
                    contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}},
                    headerType: 4
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1},
                    {buttonId: `play ${text}`, buttonText: {displayText: 'Next pencarian'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}},
                    footer: `Nothing :/` ,
                    buttons: buttons,
                    headerType: 4
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                Zaki.sendImage(m.chat, media.thumb, `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resolution : ${args[1] || '320kbps'}`, m)
                Zaki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` ,contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}}}, { quoted: troli})
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                Zaki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resololution : ${args[1] || '360p'}` ,contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}}}, { quoted: troli})
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Message')
                if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                Zaki.sendImage(m.chat, media.thumb, `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resolution : ${args[1] || '320kbps'}`, m)
                Zaki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: troli})
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply To A Message That Has Been Already Sent')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe the message you replied does not contain the ytsearch result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                Zaki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resolution : ${args[1] || '360p'}` }, { quoted: troli})
            }
            break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                
           
            
    let buttons = [
                    {buttonId: `Pinterest ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result},
                    caption: '➣ Media Url : '+result ,
                    footer: Zaki.user.name,
                    contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}},
                    buttons: buttons,
                    headerType: 4
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
            }
            break
            
            
	    case 'couplepp': case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Zaki.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: troli})
                Zaki.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: troli})
            }
	    break
            case 'coffe': case 'coffee': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: Zaki.user.name,
                    contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}},
                    buttons: buttons,
                    headerType: 4
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `➣ Title : ${result.title}\n➣ Category : ${result.type}\n➣ Detail : ${result.source}\n➣ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}},
                    footer: Zaki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `➣ Title : ${result.title}\n➣ Source : ${result.source}\n➣ Media Url : ${result.image}`,
                    footer: Zaki.user.name,
                    contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}},
                    buttons: buttons,
                    headerType: 4
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
            }
            break
            
	        case 'tiktok': case 'tiktokdl': case 'tt': {
          if (!text) throw 'Masukkan Link Tiktok!'
          reply(mess.wait)
          anu = await Tiktokdl(text)
var but = [{buttonId: `!tiktokmp3 ${text}`, buttonText: { displayText: "Audio" }, type: 1 },
{buttonId: `!tiktokwm ${text}`, buttonText: { displayText: "Watermark" }, type: 1 }]
            await Zaki.sendMessage(m.chat,{ video : await getBuffer(anu.nowatermark) ,buttons: but, footer: 'Pencet tombol dibawah untuk mendapatkan soundnya' , 
            caption:  `Nih Bro` },  { quoted: troli})
} 
            break
          case 'tiktokmp3':{
if (!text) throw 'Masukkan Link Tiktok!'
			    m.reply(mess.wait)
			    hx.ttdownloader(text).then( data => {
			        Zaki.sendMessage(m.chat, { audio: { url: data.nowm },mimetype: 'audio/mpeg' , contextInfo: {"externalAdReply": {"title": `Nih lagu nya`,"body": `Created @bremana`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `https://bit.ly/wibuburiq`}},caption : `0`}, { quoted : troli    } )

  } )}
  
break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    contextInfo: {"externalAdReply": {"title": `Perintah ${command}`,"body": `Hasil pencarian!!`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `https://bit.ly/wibuburiq`}},         
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }

            break
         
	     /*   case 'instagram': case 'igdl': case 'ig': {
    if (!text) throw 'Masukkan Link Instagram!'
anu = await igDL(text)
    Zaki.sendMessage(m.chat, { video: await getBuffer(anu.result.link) , caption: 'Nih bro'}, { quoted: troli })
    }
    break  */
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
➣ Title : ${anu.title}
➣ Author : ${anu.author.name}
➣ Like : ${anu.like}
➣ Caption : ${anu.caption}
➣ Url : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
`,
			footer: Zaki.user.name,
			buttons,
			headerType: 4
		    }
		    Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Zaki.sendMessage(m.chat, { image: { url }, caption: `➣ Title : ${anu.title}\n➣ Author : ${anu.author.name}\n➣ Like : ${anu.like}\n➣ Caption : ${anu.caption}` }, { quoted: troli})
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Zaki.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: troli})
	    }
	    break
		

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await Zaki.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Zaki.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Zaki.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} message name`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                Zaki.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `➣ *Name :* ${i.nama}\n➣ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://m.youtube.com/channel/UCHdipvk52k43KsPRenGpD0w'
                                }
                            }]
                Zaki.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Zaki.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, Zaki.user.name, m)
            }
			break
case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await Zaki.profilePictureUrl(room.b)
                let status = await Zaki.fetchStatus(room.b)
                let msg = await Zaki.sendImage(room.a, profile, `Name : ${await Zaki.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                Zaki.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await Zaki.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, Zaki.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Zaki.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Zaki.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Zaki.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, Zaki.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Zaki.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Zaki.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Zaki.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Zaki.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Zaki.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, Zaki.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                Zaki.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                Zaki.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'owner': case 'creator': {
                Zaki.sendContact(m.chat, global.owner, troli)
            }
            break    
          /*  case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;KiZakiXD;;;'
    + 'FN:KiZakiXD\n'
    + 'ORG:@Bremana;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=50054022:+500 54022\n' 
    + 'item1.TEL;type=CELL;type=VOICE;waid=6281366391843:+62 813-6639-1843\n' 
    + 'item1.X-ABLabel:Orang Gabot\n'
    + 'item2.EMAIL;type=INTERNET:nothing@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/bremana404\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Kepulauan Malvinas;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
Zaki.sendMessage(m.chat, { contacts: { displayName: '@Bremana', caption: `peled`,
contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}},contacts: [{ vcard }] } }, { quoted: troli,sendEphemeral: true     })
            }
            break            */
                    case 'bug': case 'report': {
                    	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                    	Zaki.sendMessage(`6281366391843@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 

             /*case 'sendbuffer':{
try{
 await m.reply('Tunggu sebentar...')
send(m.chat, isUrl(q)[0], mess.done)
} catch (err){
 m.reply(err)
console.log(err)
}
}
break*/


case 'mediafire':{
	try{
	p = await fetchJson(`https://caliphapi.com/api/mediafire?url=${text}&apikey=${apikeycal}`)
	peler = p.result.link

Zaki.sendMessage(m.chat, { image: { url: `https://caliphapi.com/api/ssweb2?url=${text}&apikey=${apikeycal}`}, caption: `━━━[ Media Fire Downloader ]━━━
Name Apk : ${p.result.judul}
Size           : ${p.result.size}
Link.          : ${p.result.link}`},{quoted : m}) 
Zaki.sendMessage(m.chat, { document: {url: peler},fileName: `${p.result.judul}`, mimetype: 'application'},{ quoted: troli })
} catch (err){
	reply(`Gagal 😅🙏`)
	}}
	break

//━━━━━━━━━━━━━━━[ MENU RANDOM ]━━━━━━━━━━━━━━━\\
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Zaki.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Zaki.sendImageAsSticker(m.chat ,wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Zaki.sendImageAsSticker(m.chat,wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'patrik':
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Zaki.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'asupan':{
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/random`
Zaki.sendMessage(m.chat, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'asupan-santuy':
case 'asupansantuy':{
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
Zaki.sendMessage(m.chat, {video:{url:buffer}, mimetype:"video/mp4", caption:"Nih bro",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "PHOTO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'hijaber':{
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'cecan-indo':{
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'cecan-malaysia':{
	
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'cecan-thai':{
	
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'cecan-vietnam':{
	
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'cecan-korea':{
	
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'cecan-jepang':{
	
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'cecan':{
	
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'darkjokes':{
	
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/darkjokes`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'meme':{
	
 reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/meme`
Zaki.sendMessage(m.chat, {image:{url:buffer}, caption:"Done!",contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, {quoted:m})
}
break
case 'arti': {
    p = await fetchJson(`https://api.neoxr.my.id/api/urban?q=${text}&apikey=QGRlFzXY`)
    tes = `
    Data : ${p.data.content}\nAuthor : ${p.data.author}`
    reply(tes)
}
break
case 'instagram': 
   case 'igdl':
       case 'ig': {
    if (!text) throw 'Masukkan Link Instagram!'
    try{   
        reply(mess.wait)
    p = await fetchJson(`https://caliphapi.com/api/ig/dl?url=${text}&apikey=${apikeycal}`)
    for (let url of p.result.medias)
    Zaki.sendMessage(m.chat, { video : url ,caption : `Id berhasil didapatkan!!!\n\nUsername : ${p.result.user.username}\nFollowers : ${p.result.user.followers}`}, {quoted : m})

} catch (err){
    reply(`_Sorry cuy Ga ada 😅🙏_`)
   }}
break
//━━━━━━━━━━━━━━━[ END ]━━━━━━━━━━━━━━━\\
//━━━━━━━━━━━━━━━[ CONVERT MENU ]━━━━━━━━━━━━━━━\\
case 'smeme':
              case 'stickmeme' :{
 
            if (!isMedia) throw `Kirim Image/Balas Sticker dengan caption ${prefix + command} teks atas|teks bawah`
            reply(mess.wait)
            let { UploadFileUgu } = require('./lib/uploader')
            let media = await Zaki.downloadAndSaveMediaMessage(quoted)
            let anu = await UploadFileUgu(media)
            let [atas, bawah] = text.split`|`
            sme = `https://api.memegen.link/images/custom/_/${text}.png?background=${anu.url}`
            Zaki.sendImageAsSticker(m.chat, sme,   m,{ packname: global.packname, author: global.author } )
            await fs.unlinkSync(media)
            }
            break
            case 'attp': {
const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
Zaki.sendMessage(m.chat, { sticker : buff},{ quoted: troli }) 
}
break
//━━━━━━━━━━━━━━━[ END ]━━━━━━━━━━━━━━━\\
//━━━━━━━━━━━━━━━[ Nsfw MENU ]━━━━━━━━━━━━━━━\\
case 'nsfwneko':
{
    
     reply(mess.wait)

    let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                 let buttonMessage = {
                  image: {url : 'https://zenzapis.xyz/api/morensfw/nsfwneko?apikey=4e5dd596c8'},
                    caption: `Random nsfwneko`,
                footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}},
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
            break
            
case 'nsfwwaifu':
{
    
     m.reply(mess.wait)
meg = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
                    hasil = await getBuffer(meg.url)
    let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                 let buttonMessage = {
                  image: hasil,
                    caption: `Random nsfw`,
                    contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}},
                  footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
break
case 'hentaivid': 
{
    
reply(mess.wait)
let result = await hentaivid()
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next video" }, type: 1 }]
            await Zaki.sendMessage(m.chat,{ video : {url : result.hasil.video_1 },buttons: but, footer: 'Pencet tombol dibawah untuk video selanjutnya' , caption:  ` *Title :* ${result.hasil.title}\n *Views :* ${result.hasil.views_count}\n*Share :* ${result.hasil.share_count}\n *Category :* ${result.hasil.category}\n*Source :* ${result.hasil.link}` },  { quoted: troli })
   }   break
          case 'milf': case  'yaoi': case 'oneesan': case prefix+'shota': case  'ass': case  'anal': case  'ass': case  'pussy': case  'paizuri': case  'tentacle': case  'boobs': case  'yaoi': {
          
            m.reply(mess.wait)
                let result = await hentaiimg(command)
                let url = result.hasil[Math.floor(Math.random() * result.hasil.length)]
                Zaki.sendImage(m.chat, url, command, m)
            }
            break
            
                case 'ecchi':  {
               reply(mess.wait)
                
 let hasil = await getBuffer(`https://zenzapis.xyz/api/morensfw/blowjob?apikey=4e5dd596c8`)
              let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                 let buttonMessage = {
                  image: hasil,
                    caption: `Random ecchi`,
                    contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}},
                  footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
         break
         case 'hentaiimg': {
            
            reply(mess.wait)
        let qwe = await getBuffer(`https://zenzapis.xyz/api/morensfw/hentai?apikey=4e5dd596c8`)
          let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                 let buttonMessage = {
                  image: qwe,
                    caption: `Random ${command}`,
                    contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}},
                   footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
            break
            case 'nekopoisearch':{
            	
            	if (!text) throw `Example : ${prefix + command} black rover`
            try {
                         
                    res = await nekobocc.search(text)
                        for (let i = 0; i < res.result.length; i++) {
                           let  { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await reply(text)
                    } catch (err) {
                        console.error(err)
                        }}
                        break
             case 'yuri':
case  'ahegao':
 case  'manga':{
 reply(mess.wait)
        let absu = await getBuffer(`https://zenzapis.xyz/api/morensfw/${command}?apikey=4e5dd596c8`)
         let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                 let buttonMessage = {
                  image: absu,
                    caption: `Random ${command}`,
                   contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}},
                   footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
            break
        /*    case 'nhentai':{
         	
    if (!text) throw 'Masukkan kode yang benar!!'
    try{   
reply(mess.wait)
let megin = await fetchJson(`https://expressjs-akkun.up.railway.app/nhentai?code=${text}`)
result = megin.result.pages[Math.floor(Math.random() * megin.result.pages.length)]
Zaki.sendImage(m.chat, result, `ID Berhasil didapatkan\n\nTitle : ${megin.result.title}`, m)
p = await getBuffer(result)			  
Zaki.sendMessage(m.chat, { document: { url: `https://expressjs-akkun.up.railway.app/nhentai/download/${text}`},fileName: `${megin.result.title}`,jpegThumbnail: p , mimetype: 'application/pdf' }, { quoted: m })

} catch (err){
 reply(`_Sorry cuy code nya ga ada di kami 🙏😅_`)
}}
   break*/
   case 'nhentai':{
try{            	
    if (!text) throw 'Masukkan kode yang benar!!'
reply(mess.wait)
let megin = await fetchJson(`https://caliphapi.com/api/nhentai?apikey=${apikeycal}&q=${text}`)
result = megin.result.pages[Math.floor(Math.random() * megin.result.pages.length)]
          let buttons = [
              {buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1}
                ]
let buttonMessage = {
	image: { url: result },
caption: `*ID* : ${text}\n*Title* : ${megin.result.title.english}\n*Native* : ${megin.result.title.pretty}\n*Japanese* ${megin.result.title.japanese}\n*Total Page* : ${megin.result.totalpage}\n`,
footer: `Nothing yet`,
 buttons: buttons,
                    headerType: 4
                }
Zaki.sendMessage(m.chat, buttonMessage, { quoted: m })				  

peler = megin.result.pdf
Zaki.sendMessage(m.chat, { document: {url: peler},fileName: `${megin.result.title.english}`, mimetype: 'application/pdf'},{ quoted: troli })
} catch (err){
 reply(`_Sorry cuy code nya ga ada di kami 🙏😅_`)
}}
   break
   
   case 'xnxx':{
         	
				if (!text) throw 'Yang mau di search afaan ya banh 😅🙏'
                try{        
				let megin = await fetchJson(`https://caliphapi.com/api/xnxx/search?apikey=${apikeycal}&query=${text}`)
                result = megin.result.results[Math.floor(Math.random() * megin.result.results.length)]
                let buttons = [
                    {buttonId: `!xnxxdl ${result.link}`, buttonText: {displayText: 'Download'}, type: 1},
                    {buttonId: `!xnxx ${text}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Title : ${result.title}\nInfo : ${result.info}\nLink : ${result.link}\n`,
                    footer: 'Dosa lu tanggung sendiri',
                    buttons: buttons,
                    headerType: 2
                }
                Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli})
            } catch (err){
                reply(`_Sorry cuy yang lu search ga ada di kami 🙏😅_`)
               }}
            break
            case 'xnxxdl':{
                if (!text) throw 'Yang mau di search afaan ya banh 😅🙏'
                try {
				let megin = await fetchJson(`https://caliphapi.com/api/xnxx/detail?apikey=${apikeycal}&url=${text}`)
              p = await getBuffer(megin.result.image) 
              tes = await getBuffer(megin.result.files.high)
                let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1}
                      ]
      let buttonMessage = {
          image: p,
      caption: `*Title* : ${megin.result.title}\n*Url* : ${megin.result.URL}\n*Info* : ${megin.result.duration}\n*Duration* ${megin.result.info}\n`,
      footer: `Nothing yet`,
       buttons: buttons,
                          headerType: 4
                      }

      Zaki.sendMessage(m.chat, buttonMessage, { quoted: m })	
      Zaki.sendMessage(m.chat, { video: { url: megin.result.files.high }, mimetype: 'video/mp4', fileName: `kanjuy.mp4`, caption: `Low Version : ${megin.result.files.low}` ,contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `Jadi user yang bijak dikit 😓☝️`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up"}}}, { quoted: troli})
    } catch (err){
        reply(`_Sorry cuy yang lu search ga ada di kami 🙏😅_`)
       }}
            break
  //━━━━━━━━━━━━━━━[ END ]━━━━━━━━━━━━━━━\\
  case   'fajar-news':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
reply(teks) 
})
 
break
case   'quotes':
var res = await Quotes()
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
reply(teks)
 
break
case   "darkjoke":
var res = await Darkjokes()
teks = "\nDarkjokes*"
 Zaki.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
 
break
case   'cnn-news':
CNNNews().then(res => {
no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
reply(teks) 
})
 
break
case   'layarkaca-search':
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `❲ ––––––––––––––––––––––––––––––––––––– ❳`
reply(teks) 
})
 
break
case   'cnbc-news':
CNBCNews().then(async(res) => {
no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 
break
case   'tribun-news':
TribunNews().then(async(res) => {
no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
 
break
case   'indozone-news':
IndozoneNews().then(async(res) => {
no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
 
break
case   'kompas-news':
KompasNews().then(async(res) => {

no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 
break
case   'detik-news':
DetikNews().then(async(res) => {

no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 
break
case   'daily-news':
DailyNews().then(async(res) => {

no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 
break

case   'inews-news':
iNews().then(async(res) => {

no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
reply(teks) 
})
 
break
case   'okezone-news':
OkezoneNews().then(async(res) => {

no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 
break

case   'sindo-news':
SindoNews().then(async(res) => {

no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
reply(teks) 
})
 
break
case   'tempo-news':
TempoNews().then(async(res) => {

no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 
break
case   'antara-news':
AntaraNews().then(async(res) => {

no = 0
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 
break

case   'kontan-news':
  KontanNews().then(async (res) => {
    
    teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Jenis: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
     Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
   
break
case   'merdeka-news':
  MerdekaNews().then(async (res) => {
    
    teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
     Zaki.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  
break

case   'jalantikus-meme':
  var res = await JalanTikusMeme()
teks = "❲ ––––––––––––––––––––––––––––––––––––– ❳"
teks += "\nNgakak?\n"
teks += `\nSource: ${res}\n`
teks += "❲ ––––––––––––––––––––––––––––––––––––– ❳"
 Zaki.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })


break
//━━━━━━━━━━━━━━━[ Anime MENU ]━━━━━━━━━━━━━━━\\
case 'anime': { 
reply(mess.wait)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Zaki.sendMessage(
      m.chat, 
      {
       text: "Anime Search",
       footer: "Nothing :/",
       title: "Data Base Ada Di Button Ini",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
  case 'animesearch':{
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `     Anime Search      \n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Produser Utama:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
Zaki.sendMessage(m.chat, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
case 'cry':
          case 'kill':
          case 'hug':
          case 'pat':
          case 'lick':
          case 'kiss':
          case 'bite':
          case  'yeet':
          case  'neko':
          case  'bully':
          case  'bonk':
          case  'wink':
          case  'poke':
          case  'nom':
          case  'slap':
          case  'smile':
          case  'wave':
          case  'blush':
          case  'smug':
          case  'glomp':
          case  'happy':
          case  'dance':
          case  'cringe':
          case  'cuddle':
          case  'highfive':
          case  'handhold':
                   {
                        reply(mess.wait)
meg = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
                   
 hasil = await getBuffer(meg.url)
 let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Gif'}, type: 1}
                ]
                 let buttonMessage = {
                  image: hasil,
                    caption: `Random ${command}`,
                    gifPlayback: true, 
                    footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
        await Zaki.sendVideoAsSticker(m.chat, hasil, m, { packname: global.packname, author: global.author })
    }
  
break
case 'megumin':{
	hasil = await getBuffer(`https://zenzapis.xyz/api/random/megumin?apikey=8003aa41af`)
	let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                 let buttonMessage = {
                  image: hasil,
                    caption: `Random Megumin`,
                    
                    footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
             }
             break
case  'waifu':
case  'awoo' :
case  'shinobu':
     {
                        reply(mess.wait)
meg = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
                   
 hasil = await getBuffer(meg.url)
 let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                 let buttonMessage = {
                  image: hasil,
                    caption: `Random ${command}`,
                    
                    footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
break
case  'ppcp' : 
case  'ppcouple' : {
    xm = await fetchJson('https://api.xteam.xyz/randomimage/ppcouple?APIKEY=38454391899bc24a')
     Zaki.sendMessage(m.chat, { image: await getBuffer(xm.result.male), caption:'Nih cowonya'}, { quoted: troli })
         Zaki.sendMessage(m.chat, { image: await getBuffer(xm.result.female), caption:'Nih cewenya'}, { quoted: troli })
        
          }
          break
          case 'asupanloli':
          case 'lolivideo':
case 'lolivid':{
    let loli = await getBuffer(` https://api.zacros.my.id/asupan/loli`)
    let buttons = [
               {buttonId: `${command}`, buttonText: {displayText: 'Next video'}, type: 1}
           ]
            let buttonMessage = {
             video: loli,
               caption: `Random loli video
`,
               footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
               buttons: buttons,
               headerType: 4
           }
        Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
} break
				case  'loli': {
                   
            reply(mess.wait)
            let loli = await getBuffer(`https://api.zacros.my.id/randomimg/loli`)
         let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                 let buttonMessage = {
                  image: loli,
                    caption: `Random Loli
`,
                    footer: `Bot Berjalan selama : ${runtime(process.uptime())}`,
                    buttons: buttons,
                    headerType: 4
                }
             Zaki.sendMessage(m.chat, buttonMessage, { quoted: troli })
          await Zaki.sendImageAsSticker(m.chat, loli, m, { packname: global.packname, author: global.author })
            }
          break        
          case 'speedtest': {
            if (!isCreator) throw mess.owner
        reply('Testing Speed...')
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
      let o
      try {
      o = await exec('python speed.py')
      } catch (e) {
      o = e
     } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) reply(stdout)
    if (stderr.trim()) reply(stderr)
        }
        }
        break
        
           case 'menu': {
                anu = 
`_*Hi Kak ${pushname} ${ucapanWaktu} 👋.*_                
Saya ${botname} Yang Di Buat Oleh wa.me/${ownername}
Untuk Menjadi Asisten Anda, Ada Yang Bisa Saya Bantu ?

━━━━[ Informasi BOT ]━━━━

  ├ _Your Name : ${pushname}_
  ├ _Library : Baileys-Md_
  ├ _Version : 1.0.4_
  ├ _Language : Javascript_
  ├ _Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
  ├ _Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_   
  ├ _Hostname: ${os.hostname()}_
  ├ _Platform : ${os.platform()}_
  ├ _Uptime OS : ${runtime(os.uptime()) }_  
  ├ _Runtime BOT : ${runtime(process.uptime())}_
  ├ _User Bot : ${jumlahUser}_
  ├ _Total Hit : ${jumlahcmd}_
  ├ _Total Hit Today : ${jumlahharian}_
 ━━━━━━[      END      ]━━━━━━
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏     `
let butRun = [
        	{ urlButton: { displayText: `Group WhatsApp`, url : `https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up` } },
            { urlButton: { displayText: `Github owner`, url: `https://github.com/bremana` } },
            { quickReplyButton: { displayText: `Contact Owner`, id: 'owner'} },
            { quickReplyButton: { displayText: `List Menu`, id: 'command'} },
            { quickReplyButton: { displayText: `Thanks To`, id: 'tqtq'} }
            
        	]
            var hudy = [ 'application/pdf' , 'application/vnd.openxmlformats-officedocument.presentationml.presentation' , 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
hudu = hudy[Math.floor(Math.random() * hudy.length)]
        	Zaki.sendMessage(m.chat, { caption: anu, document: fs.readFileSync('./media/kanjut.pdf') ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), mimetype: hudu,fileName: 'Kebal Roasting @Bremana',pageCount: 9999,fileLength : 10000000000000000, templateButtons: butRun, footer: `Thanks using bot`},{ quoted: troli })}
break
case 'command': {
const sections = [
    {
	title: "List Menu",
	rows: [
	{title: "Group Menu", rowId: "groupmenu", description: "Perintah yang digunakan didalam group"},
	{title: "Downloader Menu", rowId: "downloadermenu", description: "Ingin mendownload Sesuatu?"},
	{title: "Search Menu", rowId: "searchmenu", description: "Ingin mencari sesuatu?, Seperti fitur play (judul lagu)"},
	{title: "Random Menu", rowId: "randommenu", description: "Random fitur"},
	{title: "Voice changer Menu", rowId: "voicechangermenu", description: "Ngubah sound :v"},
	{title: "Convert Menu", rowId: "convertmenu", description: "Convert fitur"},
    {title: "Information menu", rowId: "informationmenu", description: "List informasi"},
	{title: "Database Bot", rowId: "databasemenu", description: "Database Bot"},
	{title: "Khusus Owner", rowId: "ownermenu", description: "Khusus owner ku"},
	{title: "Nsfw Fitur", rowId: "nsfwmenu", description: "Ya... pasti lu tau lah 🗿"},
	{title: "Anime menu", rowId: "animemenu", description: "List Foto animeh"},
	
	
	]
    }]
const listMessage = {
  text: `
 _*Hi Kak ${pushname} ${ucapanWaktu} 👋.*_

━━━━━━[ Informasi Kamu ]━━━━━━
├ Level : ${levelMenu}
├ Xp : ${xpMenu}\ ${reqXp}
├ Role : ${role}
├ Uang : ${uangku}

━━━━━━[ Pertualangan User ]━━━━━━
├ Besi kamu : ${getBesi(m.sender)}
├ Emas Kamu : ${getEmas(m.sender)}
├ Emerald Kamu : ${getEmerald(m.sender)}
├ Potion Kamu : ${getPotion(m.sender)}

`,
  footer: `Join Group chat : https://chat.ẉhatsapp.com/GQxmW4E03dC6EbVUFXC4up`,
  
  title: "",
  buttonText: "List Menu",
  sections
}

const sendMsg = await Zaki.sendMessage(m.chat,listMessage,      { quoted: troli})
}
break
case 'groupmenu':{
	p = `
	
━━━━━━[ Group Menu ]━━━━━━

  ├ ${prefix}antilink on/off
  ├ ${prefix}mute on/off
  ├ ${prefix}antiwame on/off
  ├ ${prefix}grouplink 
  ├ ${prefix}ephemeral [option]
  ├ ${prefix}groupsetting
  ├ ${prefix}setname [text]
  ├ ${prefix}group [option]
  ├ ${prefix}editinfo [option]
  ├ ${prefix}grupinfo
  ├ ${prefix}add @user
  ├ ${prefix}kick @user
  ├ ${prefix}promote @user
  ├ ${prefix}demote @user├ ${prefix}grouplink
  ├ ${prefix}ephemeral [option]
  ├ ${prefix}setgrouppp
  ├ ${prefix}setname [text]
  ├ ${prefix}group [option]
  ├ ${prefix}editinfo [option]
  ├ ${prefix}grupinfo
  ├ ${prefix}add @user
  ├ ${prefix}kick @user
  ├ ${prefix}promote @user
  ├ ${prefix}demote @user

━━━━━━━━[ END ]━━━━━━━━
`
let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
                var hudy = [ 'application/pdf' , 'application/vnd.openxmlformats-officedocument.presentationml.presentation' , 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
                hudu = hudy[Math.floor(Math.random() * hudy.length)]
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 9999999999, buttons: buttons, footer: `ẉa.me/6281366398143`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'downloadermenu':{
	p = `
━━━━━━[ Downloader Menu ]━━━━━━
  
  ├ ${prefix}tiktok[url]
  ├ ${prefix}tiktokwm [url]
  ├ ${prefix}tiktokmp3 [url]
  ├ ${prefix}instagram [url]
  ├ ${prefix}ig [url]
  ├ ${prefix}ytmp3 [url]
  ├ ${prefix}ytmp4 [url]
  ├ ${prefix}getmusic [query]
  ├ ${prefix}getvideo [query]
  ├ ${prefix}mediafire [link]
  
━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
                var hudy = [ 'application/pdf' , 'application/vnd.openxmlformats-officedocument.presentationml.presentation' , 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
                hudu = hudy[Math.floor(Math.random() * hudy.length)]
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'searchmenu':{
p = `
━━━━━━[ Search Menu ]━━━━━━
  
  ├ ${prefix}play [query]
  ├ ${prefix}yts [query]
  ├ ${prefix}google [query]
  ├ ${prefix}gimage [query]
  ├ ${prefix}pinterest [query]
  ├ ${prefix}wallpaper [query]
  ├ ${prefix}wikimedia [query]
  ├ ${prefix}ytsearch [query]
  
━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'informationmenu': {
	p = `
━━━━━━[ Info Menu ]━━━━━━

├ ${prefix}merdeka-news 
├ ${prefix}kontan-news 
├ ${prefix}cnbc-news 
├ ${prefix}tribun-news 
├ ${prefix}indozone-news 
├ ${prefix}kompas-news 
├ ${prefix}detik-news 
├ ${prefix}daily-news 
├ ${prefix}inews-news 
├ ${prefix}okezone-news 
├ ${prefix}sindo-news 
├ ${prefix}tempo-news 
├ ${prefix}antara-news 
├ ${prefix}cnn-news 
├ ${prefix}fajar-news 

━━━━━━━━[ END ]━━━━━━━━`
let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 9999999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                



break
case 'randommenu':{
p = `  
━━━━━━[ Random Menu ]━━━━━━

  ├ ${prefix}coffee
  ├ ${prefix}couplepp
  ├ ${prefix}gura
  ├ ${prefix}patrick
  ├ ${prefix}bucinstik 
  ├ ${prefix}hijaber
  ├ ${prefix}asupan
  ├ ${prefix}asupansantuy
  ├ ${prefix}cecan-indo
  ├ ${prefix}cecan-malaysia
  ├ ${prefix}cecan-thai
  ├ ${prefix}cecan-vietnam
  ├ ${prefix}cecan-korea
  ├ ${prefix}cecan-jepang
  ├ ${prefix}cecan
  ├ ${prefix}darkjokes
  ├ ${prefix}meme
  
 
━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'voicechangermenu':{
	p = `
━━━━━━[ Audio Menu ]━━━━━━

  ├ ${prefix}bass
  ├ ${prefix}blown
  ├ ${prefix}deep
  ├ ${prefix}earrape
  ├ ${prefix}fast
  ├ ${prefix}fat
  ├ ${prefix}nightcore
  ├ ${prefix}reverse
  ├ ${prefix}robot
  ├ ${prefix}slow
  ├ ${prefix}squirrel
  
━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'convertmenu':{
	p =`
━━━━━━[ Convert Menu ]━━━━━━

  ├ ${prefix}toimage
  ├ ${prefix}removebg
  ├ ${prefix}sticker
  ├ ${prefix}emojimix
  ├ ${prefix}tovideo
  ├ ${prefix}togif
  ├ ${prefix}tourl
  ├ ${prefix}ebinary
  ├ ${prefix}dbinary
  ├ ${prefix}smeme
  ├ ${prefix}attp
  
  
━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype : hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'databasemenu':{
p = `
━━━━━━[ Database Menu ]━━━━━━

  ├ ${prefix}setcmd
  ├ ${prefix}listcmd
  ├ ${prefix}delcmd
  ├ ${prefix}lockcmd
  ├ ${prefix}addmsg
  ├ ${prefix}listmsg
  ├ ${prefix}getmsg
  ├ ${prefix}delmsg
━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'ownermenu':{
p = `
━━━━━━[ Owner Menu ]━━━━━━

  ├ ${prefix}chat [option]
  ├ ${prefix}join [link]
  ├ ${prefix}leave
  ├ ${prefix}setbotpp
  ├ ${prefix}block @user
  ├ ${prefix}unblock @user
  ├ ${prefix}bcgroup
  ├ ${prefix}bcal

━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'nsfwmenu':{
	p = ` 
━━━━━━[ Random Nsfw Menu ]━━━━━━

├ ${prefix}nsfwneko
├ ${prefix}nsfwwaifu
├ ${prefix}hentaivid
├ ${prefix}ecchi
├ ${prefix}hentaiimg
├ ${prefix}yuri
├ ${prefix}manga
├ ${prefix}ahegao
├ ${prefix}milf
├ ${prefix}yaoi
├ ${prefix}shota
├ ${prefix}anal
├ ${prefix}pussy
├ ${prefix}paizuri
├ ${prefix}tentacle
├ ${prefix}boobs
├ ${prefix}nhentai [code] || Nhentai 212121
├ ${prefix}xnxx [search] || Xnxx Japan

_Dosa lu tanggung sendiri..._

━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
case 'animemenu': {
	p = ` 
━━━━━━[ Random Animek Menu ]━━━━━━

├ ${prefix}lolivid
├ ${prefix}loli
├ ${prefix}anime [Judul anime]
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
├ ${prefix}cringe
├ ${prefix}ppcouple

━━━━━━━━[ END ]━━━━━━━━`
  let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'Back To list Menu'}, type: 1}
                ]
                
       
Zaki.sendMessage(m.chat, { caption: p, document: fs.readFileSync('./media/kanjut.pdf') , mimetype: hudu ,jpegThumbnail:fs.readFileSync('./media/rip.jpg'), fileName: 'Kebal Roasting @Bremana',pageCount: 99999999, buttons: buttons, footer: `Thanks using bot`, contextInfo: { forwardingScore: 250, isForwarded: true, "externalAdReply":{"title": `Yahahaha Muka Nyengir Hati pengen nyatir`, mediaType: 2, thumbnail: thumb, "previewType": "VIDEO","mediaUrl": `https://youtu.be/Ir5ZdDs0IFI`}}}, { quoted: troli })}                

break
//━━━━━━━━━━━━━━━[ MENU LOC ]━━━━━━━━━━━━━━━\\
/*const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: anu.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/menu.jpg') }, hydratedFooterText: `Terima Kasih Telah Menggunakan Bot ini, Mohon Jangan Satirin bot inih ☝️😓`, hydratedButtons: [{ urlButton: { displayText: 'YouTube', url: 'https://m.youtube.com/channel/UCHdipvk52k43KsPRenGpD0w'} }, { urlButton: { displayText: 'Group', url: 'https://chat.whatsapp.com/E14rIyYMuovIfkskhi5QN9'} }, { quickReplyButton: { displayText: 'Owner', id: 'owner', } }, { quickReplyButton: { displayText: 'Donate', id: 'donate', } }] } } }), { userJid: m.sender, quoted: troli}); //conn.reply(m.chat, text.trim(), m) 
  Zaki.relayMessage( m.chat, template.message, { messageId: template.key.id } )*/

  
//━━━━━━━━━━━━━━━[ MENU IMG ]━━━━━━━━━━━━━━━\\
/*let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/menu.jpg') }, { upload: Zaki.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Group WhatsApp',
                                    url: 'https://chat.whatsapp.com/GQxmW4E03dC6EbVUFXC4up'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number',
                                    phoneNumber: '+62 813-6639-1843'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To',
                                    id: 'tqtq'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: 'command'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: troli})
                Zaki.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break  */
case 'tqtq': case 'thanksto':{
txt = `
   *｢  THANKS TO  ｣*  
• Dika Ardnt
• Diri Sendiri☝️😓
• Kahfxz
• Kizakixd
• Deff
• Caliph
• Zacros Team
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: txt.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/menu.jpg') }, hydratedFooterText: `Terima Kasih Telah Menggunakan Script Ini, Mohon Jangan Di Perjual Belikan!`, hydratedButtons: [{ quickReplyButton: { displayText: 'Back To Menu', id: 'menu', } }] } } }), { userJid: m.sender, quoted: troli}); //conn.reply(m.chat, text.trim(), m) 
  Zaki.relayMessage( m.chat, template.message, { messageId: template.key.id } )
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Zaki.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        Zaki.sendMessage(`6281366391843@s.whatsapp.net`, util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
