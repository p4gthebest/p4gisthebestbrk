const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`DragonsTeam`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("message", message => {
    var prefix = "-"; 
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "P4G BOT"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "-help"){
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:small_blue_diamond:『اوامر العامة』   
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: 
:newspaper:『لمعرفة السيرفر』
=server
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:robot: 『لمعرفة البوت』
=bot
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:no_entry: 『لطرد شخص』
=kick
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:warning:  『 لأعطاء شخص بان』
=ban
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:x:        『لمسح الشات』
=clear 
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:      
:blue_book:『لروئية الرتب』             
=roles
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:   
:signal_strength: 『لرؤية سرعة البوت』
=ping   
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:busts_in_silhouette: 『كود برودكاست』
=bc 
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:    
:incoming_envelope: 『البوت يكتب』
=say (اللي تبي تكتبه)
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:    
:incoming_envelope: 『رابط البوت』
=invite
`)
.setColor('#00994c')

message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'help')) {
    msg.reply('**:runner: شيك علي الخاص**');
  }
});


client.on('message',async message => {
  if(message.content.startsWith(prefix + "bc")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
          collected.first().delete();
          member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
        });
        }
      });
    });
    });
  }
});
	  
	  
client.login(process.env.BOT_TOKEN);
