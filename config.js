//═══════[ THANKS 2K SUBSCRIBER ]════════\\
/*
• SCRIPT FULL NO ENC
• APIKEY PREMIUM
*/
const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', 
}
global.APIKeys = {
	'https://zenzapis.xyz': '4e5dd596c8', //Apikey Premium
}
global.rkyt = []
global.apikeycal = 'yvvdE26q'
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = []
global.gcrevoke = ['19054091487-1424650263@g.us']
global.Prefix = 'Multi'
global.meki = '6281366391843'
global.ownerNumber = '6281366391843'
global.botname = 'Kebal Roasting :/' 
global.ownername = '6281366391843'
global.owner = ['6281366391843','50054022'] 
global.pemilik = ['6281366391843'] 
global.premium = ['6281366391843'] 
global.pengguna = 'Kanjut'
global.botnma = 'Nothing :/' 
global.ownernma = '@Bremana'
global.packname = 'Ownername : Bremana\nPackname : Kebal Roasting\n' 
global.author = '' 
global.sessionName = 'SessionKebalRoasting'
global.prefa = ['#','!','/','']
global.sp = '» ' 
global.mess = {
    success: '_Berhasil._',
    admin: '_Fitur Khusus Admin Group!_',
    botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Digunakan Hanya Untuk Group!_',
    private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
    bot: '_Fitur Khusus Pengguna Nomor Bot_',
    wait: '_Wait!.. Sedang Diproses, Jika tidak merespon mungkin ada kesalahan :/_',
    done: 'Done',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.thumb =  fs.readFileSync('./media/kanjut2.jpg')
global.fakeImg = fs.readFileSync('./media/peler.jpg')
global.thumb2 = "https://telegra.ph/file/b16be9089cdefc496ad1f.jpg"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
