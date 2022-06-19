let axios = require('axios')
let cheerio = require('cheerio')


function hentaiimg(title) {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random * 10)
        axios.get(`https://rule34.world/${title}/page/${page}`)
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = []
            $('app-post-grid > app-grid > app-loading-block > div > div.box-grid.ng-star-inserted > app-post-preview').each(function (a, b) {
                hasil.push('https://rule34.world'+$(b).find('img').attr('src'))
            })
            resolve({ status: res.status, creator: 'Dika Ardnt.', hasil: hasil })
        })
    })
}

function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            const random = hasil[Math.floor(Math.random() * hasil.length)]
            resolve({
                status: data.status,
                creator: 'Dika Ardnt.',
                hasil: random
            })
        })
    })
}

module.exports = { hentaiimg, hentaivid }
