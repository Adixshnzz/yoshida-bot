<p align="center">
<a href="https://wa.me/6282375933838"><img title="Grup" src="https://img.shields.io/badge/Contact to Owner-black.svg?style=for-the-badge&logo=whatsapp"></a>
</p>
<p align="center">
<a href="https://chat.whatsapp.com/HnoKcpzYsKE5y0thEM060h"><img title="Grup" src="https://img.shields.io/badge/Grup WhatsApp Yoshida Bot-green.svg?style=for-the-badge&logo=whatsapp"></a>

# Introduction
> Yoshida is a WhatsApp Bot with many multifunctional features, using Baileys 🔥 For Free
> - This script is 100% free, which uses the api from [Yoshida-APIs](https://api.yoshida.my.id)
> - Using the module from [@yoshx/func](https://github.com/YuuraHz/Func)

### Set in .env
```Javascript
DATABASE_URL = '' // your mongodb database 
```

### Plugins run command 
```Javascript
module.exports = {
   run: async (m, {
      conn,
      text,
      participants
   }) => {
      try {
         // your code
      } catch (e) {
         console.log(e)
         return conn.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   help: ['command'],
   use: 'example',
   tags: ['category'],
   command: /^(command)$/i,
   group: Boolean,
   admin: Boolean
}
```

### Plugins Event
```Javascript
module.exports = {
   async before(m, {
      conn,
      body,
      isOwner
   }) {
      try {
         // your code
      } catch (e) {
         console.log(e)
         return conn.reply(m.chat, Func.jsonFormat(e), m)
      }
      return true
   }
}
```

### Install and run
```
clone this repo
cd repo
$ npm install
$ npm start
```

## Install & Run use PM2

```
$ npm install pm2 -g
$ npm install
$ pm2 start index.js && pm2 save && pm2 logs
```
---------
Wanna see all the bot commands? lookout our main bot [Try demo](https://wa.me/62856400229695?text=.menu)
> Will be increased every time it get new updates
---------
### Requirements
- [x] Server Panel/Vps Minimum Space (1gb)
> The requirements above are the minimum requirements to running the bot. Upgrade it higher for better experience

Jika Mengalami Kesulitan Hubungi kontak Owner:
[Owner](https://wa.me/6282375933838)

---------

### 📮 S&K
1. Not For Sale
2. Don't forget give star this repo
3. Don't use this repository wrong!
4. If you have problem chat me in owner number

---------

## ✨ Big Thanks To
- My God
- My partner
- My friends 
- All Creator Bot
---------

## Customer Support
 [![nando](https://github.com/rifnd.png?size=100)](https://github.com/rifnd) | [![Adi](https://github.com/Adixshnzz.png?size=100)](https://github.com/YuuraHz) | [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
----|----|----
[Nando](https://github.com/rifnd) | [Adi](https://github.com/YuuraHz) | [Nurutomo](https://github.com/Nurutomo)
 Inspiration | Developer | Original Base