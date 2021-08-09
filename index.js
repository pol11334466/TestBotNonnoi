const {Client , MessageAttachment} = require('discord.js');
const bot = new Client();

const token = 'ODQ0MTk1MjExODIzNDE1MzA4.YKO4Dg.Al7KZr6DjNuaCTH4PLnYSt28mDE';

const prefix = '!'

var version = '1.0.1'


let firsttype = ['Cake BNK48','Cherprang BNK48','Earth BNK48','Grace BNK48','Hoop BNK48','Jaa BNK48','Jaokhem BNK48','Jeje BNK48','June BNK48','Kaew BNK48','Kate BNK48','Korn BNK48','Maira BNK48','Maysa BNK48','Mean BNK48','Mewnich BNK48','Music BNK48','Myyu BNK48','Namhorm BNK48','New BNK48','Niky BNK48','Panda BNK48','Popper BNK48','Pupe BNK48','Ratah BNK48','Angel CGM48','Fortune CGM48','Izurina CGM48','Jjae CGM48','Kyla CGM48','Latin CGM48','Pepo CGM48','Sita CGM48 ']

let secondtype = ['Cincin BNK48','Deenee BNK48','Earn BNK48','Fifa BNK48','Fond BNK48','Gygee BNK48','Jan BNK48','Jane BNK48','Kaimook BNK48','Kaofrang BNK48','Kidcat BNK48','Khamin BNK48','Mind BNK48','Namsai BNK48','Natherine BNK48','Noey BNK48','Pakwan BNK48','Pampam BNK48','Pancake BNK48','Peak BNK48','Phukkhom BNK48','Pun BNK48','Satchan BNK48','View BNK48','Yoghurt BNK48','Jayda CGM48','Marmink CGM48','Meen CGM48','Nena CGM48','Nenie CGM48','Pim CGM48','Ping CGM48','Punch CGM48']

let thirdtype = ['Bamboo BNK48','Cancan BNK48','Eve BNK48','Faii BNK48','Fame BNK48','Jennis BNK48','Jib BNK48','Kheng BNK48','Miori BNK48','Minmin BNK48','Mobile BNK48','Monet BNK48','Namneung BNK48','Nine BNK48','Nink BNK48','Oom BNK48','Orn BNK48','Paeyah BNK48','Piam BNK48','Pim BNK48','Stang BNK48','Tarwaan BNK48','Wee BNK48','Yayee BNK48','Aom CGM48','Champoo CGM48','Fahsai CGM48','Kaiwan CGM48','Kaning CGM48','Mei CGM48','Milk CGM48','Nicha CGM48','Parima CGM48']

let allmember = ['Kaew','Korn','Kaimook','Kitkat','Kate','Can','Ja','Jib','Jane','Jennis','Jan','Satchan','Cincin','Cherprang','Tarwaan','Namsai','Namneung','Namhom','Nink','Noey','Pun','Pupe','Piam','Mind','Music','Miori','Maysa','Mobile','Orn','Khamin','Cake','Gygee','Denee','Nine','Niky','New','Bamboo','Phukkhom','Faii','Pakwan','Panda','Fond','Fifa','Myyu','Minmin','Mewnich','Ratah','View','Wee','Stang','Aom','Maira','Natherrine','Earn','Earth','Eve','Fame','Grace','Hoop','Jaokhem','Kaofrang','Mean','Monet','Paeyah','Pampam','Pancake','Peak','Pim','Popper','Yayee','Yogurth','Angel','Aom','Champoo','Fahsai','Fortune','Izurina','Jaydah','Jjae','Kaiwan','Kaning','Kyla','Latin','Marmink','Meen','Mei','Milk','Nena','Nenie','Nicha','Parima','Pepo','Pim','Ping','Punch','Sita']

let compost = ['F','H','C','F','H','C']

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

var i
var gacha

bot.on('message', msg => {
  if (msg.content === '!bot') {
    msg.channel.send('@everyone');
    msg.reply('พร้อมมาเสี่ยงโชคชะกันแล้วสินะ สามารถพิมพ์ !help เพื่ออ่านรายละเอียด');
  }
  else if(msg.content === '!help'){  
    msg.reply('วิธีการเล่นก็คือ ให้ผู้เล่นพิมคำสั่ง !gacha ตามด้วยตัวเลข 1 - 3 ตัวจำนวนโฟโตโซ็ตที่มี เช่น \n : gacha1 ทำการสุ่มจำนวนโฟโตเซ็ต 5 ใบจำนวน 1 ซอง \n : แล้วสามารถพิมพ์ !photoset 1 - 3 เช่น !photoset1 จะบอกรายละเอียดในซองนั้นว่ามีไรบ้าง');
  }
  else if(msg.content === '!photoset1'){
    msg.reply('รายชื่อเมมเบอร์ในเซ็ตที่ 1 : \n Cake BNK48 , Cherprang BNK48 , Earth BNK48 , Grace BNK48 , Hoop BNK48 , Jaa BNK48 , Jaokhem BNK48 , Jeje BNK48 , June BNK48 , Kaew BNK48 , Kate BNK48 , Korn BNK48 , Maira BNK48 , Maysa BNK48 , Mean BNK48 ,  Mewnich BNK48 , Music BNK48 , Myyu BNK48 , Namhorm BNK48 , New BNK48 , Niky BNK48 , Panda BNK48 , Popper BNK48 ,\nPupe BNK48 , Ratah BNK48 , Angel CGM48 , Fortune CGM48 , Izurina CGM48 , Jjae CGM48 , Kyla CGM48 , Latin CGM48 , Pepo CGM48 , Sita CGM48');
  }
  else if(msg.content === '!photoset2'){
    msg.reply('รายชื่อเมมเบอร์ในเซ็ตที่ 2 : \n Cincin BNK48 , Deenee BNK48 , Earn BNK48 , Fifa BNK48 , Fond BNK48 , Gygee BNK48 , Jan BNK48 , Jane BNK48 , Kaimook BNK48 , Kaofrang BNK48 , Kidcat BNK48 ,\n Khamin BNK48 , Mind BNK48 , Namsai BNK48 , Natherine BNK48 , Noey BNK48 , Pakwan BNK48 , Pampam BNK48 , Pancake BNK48 , Peak BNK48 , Phukkhom BNK48 , Pun BNK48 , Satchan BNK48 , View BNK48 , Yoghurt BNK48 , Jayda CGM48 , Marmink CGM48 , Meen CGM48 , Nena CGM48 , Nenie CGM48 , Pim CGM48 , Ping CGM48 , Punch CGM48');
  }
  else if(msg.content === '!photoset3'){
    msg.reply('รายชื่อเมมเบอร์ในเซ็ตที่ 3 : \n Bamboo BNK48 , Cancan BNK48 , Eve BNK48 , Faii BNK48 , Fame BNK48 , Jennis BNK48 , Jib BNK48 , Kheng BNK48 , Miori BNK48 , Minmin BNK48 , Mobile BNK48 , Monet BNK48 , Namneung BNK48 , Nine BNK48 , Nink BNK48 , Oom BNK48 , Orn BNK48 , Paeyah BNK48 , Piam BNK48 , Pim BNK48 , Stang BNK48 , Tarwaan BNK48 , Wee BNK48 , Yayee BNK48 , Aom CGM48 , Champoo CGM48 , Fahsai CGM48 , Kaiwan CGM48 , Kaning CGM48 , Mei CGM48 , Milk CGM48 , Nicha CGM48 , Parima CGM48');
  }

});

bot.on('message' , msg => {

  do{

  let args = msg.content.substring(prefix.length).split(" ");

  switch(args[0]){

    case 'gacha':
      const attachment = new MessageAttachment('https://tenor.com/view/mewnich-mewnich-bnk48-mn-love-wink-smiles-gif-14201754.gif')
      
      msg.reply('กำลังสุ่ม โฟโต้เซ็ต : ')
      msg.channel.send('เสร็จสิ้นภายใน.... '+':arrows_counterclockwise:')
      msg.channel.send('3')
      msg.channel.send('2')
      msg.channel.send('1')
      msg.channel.send('',attachment);
      for(let i = 1; i <= 5 ; i++){
        var randomallmember = allmember[Math.floor(Math.random()*allmember.length)]
        var randomcompost = compost[Math.floor(Math.random()*compost.length)]
        var ranjackpot = Math.floor(Math.random() * 200 + 1 )
        var rannum = Math.floor(Math.random() * 200 + 1 )
        if(rannum === ranjackpot){
          msg.reply('SSR = Jackpot '+ randomallmember)
          }
        else{
          msg.channel.send(' ' + randomallmember + ' ' + randomcompost)
             
      }
    }
  }}while(gacha!=gacha);
})

bot.on('message' , msg => {

  let args = msg.content.substring(prefix.length).split(" ");

  switch(args[0]){
    case 'gacha1':
      const attachment = new MessageAttachment('https://tenor.com/view/cry-crying-cries-namneung-angel-gif-16285892.gif')
      msg.reply('กำลังสุ่ม โฟโต้เซ็ต : ')
      msg.channel.send('',attachment);

      for(let i = 1; i <= 5 ; i++){
        var randomfirsttype = firsttype[Math.floor(Math.random()*firsttype.length)]
        var randomcompost = compost[Math.floor(Math.random()*compost.length)]
        var ranjackpot = Math.floor(Math.random() * 200 + 1 )
        var rannum = Math.floor(Math.random() * 200 + 1 )
        if(rannum === ranjackpot){
          msg.reply('SSR = Jackpot '+ randomfirsttype)
          }
        else{
          msg.channel.send(' ' + randomfirsttype + ' ' + randomcompost)

      }
    }
  }
})

bot.on('message' , msg => {

  let args = msg.content.substring(prefix.length).split(" ");

  switch(args[0]){
    case 'gacha2':
      const attachment = new MessageAttachment('https://tenor.com/view/music-bnk48-bnk48-gif-21417855.gif')
      msg.reply('กำลังสุ่ม โฟโต้เซ็ต : ')
      msg.channel.send('',attachment);

      for(let i = 1; i <= 5 ; i++){
        var randomsecondtype = secondtype[Math.floor(Math.random()*secondtype.length)]
        var randomcompost = compost[Math.floor(Math.random()*compost.length)]
        var ranjackpot = Math.floor(Math.random() * 200 + 1 )
        var rannum = Math.floor(Math.random() * 200 + 1 )
        if(rannum === ranjackpot){
          msg.reply('SSR = Jackpot '+ randomsecondtype)
          }
        else{
          msg.channel.send(' ' + randomsecondtype + ' ' + randomcompost)

      }
    }
  }
})

bot.on('message' , msg => {

  let args = msg.content.substring(prefix.length).split(" ");

  switch(args[0]){
    case 'gacha3':
      const attachment = new MessageAttachment('https://tenor.com/view/bnk48-pupebnk48-pupe-gif-10996628.gif')
      msg.reply('กำลังสุ่ม โฟโตเซ็ต : ')
      msg.channel.send('',attachment);

      for(let i = 1; i <= 5 ; i++){
        var randomthirdtype = secondtype[Math.floor(Math.random()*thirdtype.length)]
        var randomcompost = compost[Math.floor(Math.random()*compost.length)]
        var ranjackpot = Math.floor(Math.random() * 100 + 1 )
        var rannum = Math.floor(Math.random() * 100 + 1 )
        if(rannum === ranjackpot){
          msg.reply('SSR = Jackpot '+ randomthirdtype)
          }
        else{
          msg.channel.send(' ' + randomthirdtype + ' ' + randomcompost)

      }
    }
  }
})

bot.login(token);