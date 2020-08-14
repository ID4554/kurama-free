const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
let prefix = "/"

const warns = JSON.parse(fs.readFileSync('./warns.json'))
 
client.login('NzAyNjg3OTUxOTc2NTI5OTUw.XwJ-og.xnrIdA70FW4kkhK4KLKNtqD6s2A')

console.log("========================") 
console.log("Kurama シ#1380 En Ligne") 
console.log("========================")

client.on('ready', function(){
    var interval = setInterval (function () {
 var actt = ["0","1","2"];
   var act = actt[Math.floor(Math.random() * 3)]

   if(act == 0) {
      client.user.setStatus("dnd")
       
  } else {
      if(act == 1){
      client.user.setStatus("dnd")
  } else {
      if(act == 2){
      client.user.setStatus("dnd")
  } else {
      return
 } 
} 
} 

}, 10000);

 var a = 0
setInterval(() => {
     if(a == 0){
                 client.user.setActivity("💻 DEV : Kurama#0001" , {type:"WATCHING"});
         a = 1
     } else {
         if(a == 1){
                       client.user.setActivity("🚨 Protéger Le Serveur !" , {type:"PLAYING"});
             a = 2
         } else {
             if(a == 2){
                       client.user.setActivity("📜 /help" , {type:"WATCHING"});
          a = 0 
             }
         }
     }
 }, 10000)



})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + 'kick') {
        message.delete();
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Exlure Des Membres" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("<:error:728759373035470928> Mentionner un utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("<:error:728759373035470928> Vous ne pouvez pas exclure cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (!member.kickable) return message.channel.send("<:error:728759373035470928> Je ne peut pas exclure cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("<:error:728759373035470928> Mettez une raison !").then((msg) => msg.delete (5000));//3 secondes
        member.user.send(" Tu t'es fait exclure du serveur **" + message.guild.name + "** par **" + message.author.tag + "**" + " Pour la raison : " + "**" + reason + "**");
        member.kick()
        message.channel.send('<:check:728757022576869377>' + member.user.tag + ' Est Exclu !').then((msg) => msg.delete (5000));//3 secondes
     }

     if (args[0].toLowerCase() === prefix + 'ping') {
        message.delete();
        let début = Date.now();
        message.channel.send('<a:loading:728756624788815903>')
            .then((m) => m.edit(`<:check:728757022576869377> __**LATENCE**__ : **${Date.now() - début}**ms`));
     }

     if (args[0].toLowerCase() === prefix + 'help') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Aide Disponible Sur Kurama !")
        .addField("📌 - /moderation : " , "Modération")
        .addField("👍 - /amusement : " , "Amusement")
        .addField("🗃️ - /information : " , "Information")
        .addField("⚙️ - /utile : "  , "Utile")
        .addField("🗂️ - /commande-speciale :" , "Commande Spéciale")
        .setTimestamp()   
        
     message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'commande-speciale') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Aide Pour Les Commandes Spéciales Sur Kurama !")
        .addField("/mute-info : " , "Pour La Commande Mute !")
        .addField("/ticket-info : " , "Pour La Commande Ticket !")
        .addField("/cc-info : " , "Pour La Commande Concours !")
        .addField("/sd-info : " , "Pour La Commande Sondage !")
        .addField("/report-info : " , "Pour La Commande Report !")
        .setTimestamp() 

        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'mute-info') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Aide Pour La Commande Mute Sur Kurama !")
        .addField("Pour Commencer : " , "La Commande Mute A La Durée Infini , Donc Pour Enlever Le Mute Fait /unmute @Pseudo")
        .addField(" 1 ) - Fait Un Rôle Avec Le Nom : " , "🔇 Muted 🔇 | https://pastebin.com/bfsaYEpj")
        .addField(" 2 ) - Mettre Un Raison Exemple : " , "Pub Discord")
        .setTimestamp() 

        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'ticket-info') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Aide Pour La Commande Ticket Sur Kurama !")
        .addField("1 ) - Pour Le Staff : " , "Faite Un Rôle Avec Le Nom Staff , Pour Avoir Accès Au Ticket !")
        .addField("2 ) - Avoir Un Salon Avec Le Nom : " , "🔖-ouvrir-ticket | https://pastebin.com/A8CL2AqU")
        .addField("3 ) - /close : " , "Pour Fermer Le Ticket , Ou La Commande Est Taper !")
        .setTimestamp() 

        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'cc-info') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Aide Pour La Commande Concours Sur Kurama !")
        .addField("1 ) - Avoir Un Salon Avec Le Nom : " , "🎉-concours | https://pastebin.com/PLhT1vB3")
        .addField("2 ) - Avoir La Permission : " , "Administrateur")
        .addField("3 ) - Faire Un Message Comme Sa : " , "/concours {Votre Concours}")
        .setTimestamp() 

        message.channel.send(embed)
    }

    
    if (args[0].toLowerCase() === prefix + 'sd-info') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Aide Pour La Commande Sondage Sur Kurama !")
        .addField("1 ) - Avoir Un Salon Avec Le Nom : " , "📊-sondage | https://pastebin.com/GEz5p505")
        .addField("2 ) - Avoir La Permission : " , "Administrateur")
        .addField("3 ) - Faire Un Message Comme Sa : " , "/sondage {Votre Sondage}")
        .setTimestamp() 

        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'report-info') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Aide Pour La Commande Report Sur Kurama !")
        .addField("1 ) - Avoir Un Salon Avec Le Nom : " , "📌-report-logs | https://pastebin.com/TUL61rZM")
        .addField("2 ) - Faire Un Message Comme Sa : " , "/report @Pseudo Raison")
        .setTimestamp() 

        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + "mute") {
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Gérer Les Messages" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("<:error:728759373035470928> Mentionner un utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("<:error:728759373035470928> Vous ne pouvez pas mute cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (!member.manageable) return message.channel.send("<:error:728759373035470928> Je ne peut pas mute cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        let muterole = message.guild.roles.find(role => role.name === '🔇 Muted 🔇')
        if (muterole) {
            let reason = args.slice(2).join(' ')
            if (!reason) return message.channel.send("<:error:728759373035470928> Mettez Une Raison !").then((msg) => msg.delete (5000));//3 secondes    
            member.user.send(" Tu t'es fait mute du serveur **" + message.guild.name + "** par **" + message.author.tag + "**" + " Pour la raison : " + "**" + reason + "**");
            member.addRole(muterole)
            message.channel.send('<:check:728757022576869377>' + member + ' Est Mute !').then((msg) => msg.delete (5000));//3 secondes
        }

        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send('<:check:728757022576869377>' + member + ' Est Mute ! ').then((msg) => msg.delete (5000));//3 secondes
            })
        }
    }

    if (args[0].toLowerCase() === prefix + "unmute") {
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Gérer Les Messages" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("<:error:728759373035470928> Merci de mentionner un utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("<:error:728759373035470928> Vous ne pouvez pas unmute cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (!member.manageable) return message.channel.send("<:error:728759373035470928> Je ne peut pas unmute cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        member.user.send(" Tu t'es fait unmute du serveur **" + message.guild.name +"** par **" + message.author.tag + "**");
        let muterole = message.guild.roles.find(role => role.name === '🔇 Muted 🔇')
        if (muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send('<:check:728757022576869377>' + member + 'Est Mute !').then((msg) => msg.delete (5000));//3 secondes
    }

    if (message.content.startsWith(prefix + 'report')) {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send();
        let rreason = args.join(" ").slice(22);
    
        let reportEmbed = new Discord.RichEmbed()
            .setDescription("Signalement")
            .setColor("#15f153")
            .addField("Personne Signaler : ", `${rUser} Avec L'ID : ${rUser.id}`)
            .addField("Signaler Par : ", `${message.author} Avec L'ID : ${message.author.id}`)
            .addField("Signaler Via Le Salon : ", message.channel)
            .addField("Raison", rreason);
    
        let reportschannel = message.guild.channels.find(`name`, "📌-report-logs");
        if (!reportschannel) return message.channel.send("Impossible de trouver le salon 📌-report-logs").then((msg) => msg.delete (5000));//3 secondes
    
    
        message.delete().catch(O_o => { });
        reportschannel.send(reportEmbed);
        if (message.content === '>report') message.channel.send('**Commande : !report @Utilisateur Raison**').then((msg) => msg.delete (5000));//3 secondes
    }

    if (message.content.startsWith(prefix + "concours")) {
        message.delete()
   if (message.member.hasPermission("ADMINISTRATOR")){
       let args = message.content.split(" ").slice(1);
       let thingToEcho = args.join(" ")
       var embed = new Discord.RichEmbed()
        .setDescription("Concours De " + message.author.tag)
        .addField(thingToEcho, "Répondre Avec :tada: Pour Participer Au Concours")
        .setColor("#8c53dd")
        .setTimestamp()
       message.guild.channels.find('name', '🎉-concours').send(embed)
       .then(function (message) {
           message.react("🎉")
       }).catch(function() {
       });
       }else{
           return message.reply("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Administrateur" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
            }
        }

        
    if (message.content.startsWith(prefix + "sondage")) {
        message.delete()
   if (message.member.hasPermission("ADMINISTRATOR")){
       let args = message.content.split(" ").slice(1);
       let thingToEcho = args.join(" ")
       var embed = new Discord.RichEmbed()
       .setDescription("Sondage De " + message.author.tag)
           .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
           .setColor("#8c53dd")
           .setTimestamp()
       message.guild.channels.find('name', '📊-sondage').send(embed)
       .then(function (message) {
           message.react("✅")
           message.react("❌")
       }).catch(function() {
       });
       }else{
           return message.reply("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Administrateur" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
            }
        }

        if (message.content === prefix + "ticket") {
            message.delete()
            let channel = message.guild.channels.find("name", "ticket");
         
            if (message.channel.name === "🔖-ouvrir-ticket") {
              const embed = new Discord.RichEmbed()
                .setAuthor("Ticket De " + message.author.tag)
                .setColor("#15f153")
                .setDescription(
                  "Pour Fermer Le Ticket " + "**" + "/close" + " [Permission : Gérer Les Messages]" + "**"
               );
               
                message.guild
         .createChannel("Ticket-" + message.author.username, "text")
             .then(c => {
                let role = message.guild.roles.find("name", "Staff");
                let role2 = message.guild.roles.find("name", "@everyone")
                c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
                });
                c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
                }); 
                c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
                });
             c.setParent("Ticket");
              c.send(message.author, embed).then(async data => {
            });
          });
      } else {
        message.channel.send(
          "Merci d'utiliser cette commande dans **" + "🔖-ouvrir-ticket" + "**"
        ).then((msg) => msg.delete (5000));//3 secondes
      }
    }
       if (message.content === prefix + "close") {
       message.delete()
       if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Gérer Les Messages" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
       if (message.channel.name.startsWith("ticket-")) {
         message.channel.delete();
         
       } else {
         message.channel.send("<:error:728759373035470928> Impossible de fermer le ticket !").then((msg) => msg.delete (5000));//3 secondes
       }
     }

    if (args[0].toLowerCase() === prefix + 'moderation') {
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Gérer Les Messages" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Aide De Modération Sur Kurama !")
        .addField("🔐 ● /kick @Pseudo Raison : " , "Pour Exclure La Personne !")
        .addField("🔒 ● /ban @Pseudo Raison : " , "Pour Ban La Personne !")
        .addField("🔇 ● /mute @Pseudo Raison : " , "Pour Mute La Personne !")
        .addField("📧 ● /warn @Pseudo : " , "Pour Avertir La Personne !")
        .addField("♻️ ● /clear 1 - 99 : " , "Pour Supprimer Des Messages !")
        .addField("📧 ● /unwarn @Pseudo : " , "Pour Enlever 1 Warn A La Personne !")
        .addField("📰 ● /stats @Pseudo : " , "Pour Regarder Les Warns De La Personne !")
        .addField("🗳️ ● /addrole @Pseudo @Rôle : " , "Pour Donner Un Rôle A La Personne !")
        .addField("🗑️ ● /delrole @Pseudo @Rôle : " , "Pour Enlever Un Rôle A La Personne !")
        .addField("🤪 ● /say {Votre Message} [Permission : Administrateur] : " , "Le Bot Va Répéter Votre Message !")
        .addField("🧾 ● /sondage {Votre Message} [Permission : Administrateur] : " , "Pour Faire Un Sondage !")
        .addField("🎉 ● /concours {Votre Concours} [Permission : Administrateur] : " , "Pour Faire Un Concours !")
        .setTimestamp()   
        
     message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'information') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici Les Informations Sur Kurama !")
        .addField("🔰 ●  /ping : " , "Pour Regarder Le Ping Du Bot !")
        .addField("📋 ●  /bot-info : " , "Donne Des Petites Informations Sur Kurama !")
        .addField("🔖 ● /support : " , "Pour Aller Sur Notre Serveur Support !")
        .addField("🗂️ ● /serveur-info : " , "Pour Avoir Des Informations Sur Le Serveur !")
        .setTimestamp()   
        
     message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'utile') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici Les Choses Utile Sur Kurama !")
        .addField("😉 ● /avatar : " , "Donne L'Avatar De La Personne !")
        .addField("🚨 ● /Report @Pseudo Raison : " , "Pour Signaler Une Personne Au Staff !")
        .addField("📑 ● /ticket : " , "Pour Ouvrir Un Ticket !")
        .setTimestamp()   
        
     message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'amusement') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici L'Amusement Sur Kurama !")
        .addField("🎶 ●  /musique : " , "Donne Le Lien De 10 Musique Aléatoires  !")
        .addField("🔵 ●  /dice : " , "Lance Un Dé Aléatoire !")
        .addField("💰 ●  /coins : " , "Pile Ou Face !")
        .addField("👨‍👦‍👦 ●  /equipe-naruto : " , "Tombe Sur Une Equipe Dans Naruto !")
        .addField("🉐 ●  /biju : " , "Tombe Sur 1 Démons A Queues Dans Naruto !")
        .setTimestamp()   
        
     message.channel.send(embed)
    }


    if (args[0].toLowerCase() === prefix + 'ban') {
        message.delete();
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Bannir Des Membres" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("<:error:728759373035470928> Veuillez mentionner un utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("<:error:728759373035470928> Vous ne pouvez pas banni cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (!member.bannable) return message.channel.send("<:error:728759373035470928> Je ne peut pas bannir cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        const membreMention = message.mentions.members.first()
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("<:error:728759373035470928> Veuillez mettre une raison !").then((msg) => msg.delete (5000));//3 secondes
        member.user.send(" Tu t'es fait bannir définitivement du serveur **" + message.guild.name + "** par **" + message.author.tag + "**" + " Pour la raison : " + "**" + reason + "**");
        message.guild.ban(member)
        message.channel.send('<:check:728757022576869377>' + member.user.tag + ' a été banni !').then((msg) => msg.delete (5000));//3 secondes
     }
 
     if (args[0].toLowerCase() === prefix + "clear") {
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Gérer Les Messages" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        let count = parseInt(args[1])
        if (!count) return message.channel.send("<:error:728759373035470928> Veuillez indiquer un nombre de messages à supprimer !").then((msg) => msg.delete (5000));//3 secondes
        if (isNaN(count)) return message.channel.send("<:error:728759373035470928> Veuillez indiquer un nombre valide !").then((msg) => msg.delete (5000));//3 secondes
        if (count < 1 || count > 100) return message.channel.send("<:error:728759373035470928> Veuillez indiquer un nombre entre 1 et 99 !").then((msg) => msg.delete (5000));//3 secondes
        message.channel.bulkDelete(count + 1, true)
        message.channel.send("<:check:728757022576869377> Les Messages Ont Eté Supprimées !").then((msg) => msg.delete (5000));//3 secondes
    }

    if (args[0].toLowerCase() === prefix + "warn") {
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Gérer Les Messages" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("<:error:728759373035470928> Veuillez mentionner un utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("<:error:728759373035470928> Vous ne pouvez pas warn cette utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("<:error:728759373035470928> Veuillez mettre une raison !").then((msg) => msg.delete (5000));//3 secondes
        member.user.send(" Tu as reçu un warn du serveur **" + message.guild.name + "** par **" + message.author.tag + "**" + " Pour la raison : " + "**" + reason + "**");
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send("<:check:728757022576869377>" + member + " à été warn pour " + reason).then((msg) => msg.delete (5000));//3 secondes
    }

    if (args[0].toLowerCase() === prefix + "stats") {
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Gérer Les Messages" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("<:error:728759373035470928> Veuillez mentionner un utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .setColor("#15f153")
            .addField('3 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 3).map(e => e.reason) : "Ce membre n'a aucun warn <:check:728757022576869377> !"))
            .setTimestamp()
        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + "musique") {
        let answers = ["https://www.youtube.com/watch?v=cNqR6woVZzM", "https://www.youtube.com/watch?v=w_oJxO3RxT4", "https://www.youtube.com/watch?v=uLHqpjW3aDs", "https://www.youtube.com/watch?v=zAQbYTHvPks", "https://www.youtube.com/watch?v=ApXoWvfEYVU", "https://www.youtube.com/watch?v=pmYOoGEhaFE", "https://www.youtube.com/watch?v=wowJSOBQNMg", "https://www.youtube.com/watch?v=WfZIWUxzqew", "https://www.youtube.com/watch?v=fxMKdhTnzNw", "https://www.youtube.com/watch?v=7BcZclWDnso"]
        let question = args.slice(1).join(" ")
        message.delete();
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#15f153")
            .addField("Musique :", answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content.startsWith(`/say`)) {
        message.delete();
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Administrateur" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        var text = message.content.split(' ').slice(1).join(' ');
        if(!text) return message.channel.send('<:error:728759373035470928> Mettez une message après ' + '**' + '!say' + '**' + ' sinon sa fonctionne pas !').then((msg) => msg.delete (5000));//3 secondes
         message.channel.send(text);
        message.delete();
        message.channel.stopTyping()
       }

       if (args[0].toLowerCase() === prefix + "support") {
        let answers = ["https://discord.gg/JVTy6Gv"]
        let question = args.slice(1).join(" ")
        message.delete();
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#15f153")
            .addField("Notre Support :", answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp()
        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + "equipe-naruto") {
        let answers = ["Equipe 7 : Naruto Uzumaki - Sakura Haruno - Sasuke Uchiwa", "Equipe 10 : Chôji Akimichi - Ino Yamanaka - Shikamaru Nara", "Equipe 8 : Hinata Hyûga - Kiba Inuzuka et Akamaru - Shino Aburame", "Equipe 9 : Neji Hyûga - Rock Lee - Tenten"]
        let question = args.slice(0).join(" ")
        message.delete();
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#15f153")
            .addField("Equipe :", answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp()
        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + "biju") {
        let answers = ["1 Queue - Ichibi ( Shukaku )", "2 Queues - Nibi ( Matatabi )", "3 Queues - Sanbi ( Isobu )", "4 Queues - Yonbi ( Son Gokû )", "5 Queues - Gobi ( Kokuô )", "6 Queues - Rokubi ( Saiken )", "7 Queues - Nanabi ( Chômei )", "8 Queues - Hachibi ( Gyûki )", "9 Queues - Kyûbi ( Kurama )"]
        let question = args.slice(0).join(" ")
        message.delete();
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#15f153")
            .addField("Biju :", answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp()
        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + "dice") {
        let answers = ["️1️⃣", "️2️⃣", "️3️⃣", "️4️⃣", "️5️⃣", "️6️⃣"]
        let question = args.slice(0).join(" ")
        message.delete();
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#15f153")
            .addField("Dice :", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + "coins") {
        let answers = ["⚪ - Pile ", "⚫ - Face "]
        let question = args.slice(0).join(" ")
        message.delete();
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#15f153")
            .addField("Coins :", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'bot-info') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici Les Informations Disponible Sur Kurama !")
        .addField("Mon Développeur : " , "Kurama#0001")
        .addField("Sur Le Serveur :" , message.guild.name )
        .addField("Prefix :" , "/")
        .addField("ID Du Bot :" , "702687951976529950")
        .addField("Serveurs : " , client.guilds.size)
        .addField("Langue :" , "Français")
        .setTimestamp()
        message.channel.send(embed)
    }

    if (args[0].toLowerCase() === prefix + 'serveur-info') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription("<:Information:729514742476963850> - Voici Les Informations Sur Le Serveur !")
        .addField("Nom Du Serveur :" , message.guild.name )
        .addField("ID Du Serveur :" , message.guild.id )
        .addField("Membres totales :", message.guild.memberCount)
        .setTimestamp()
        message.channel.send(embed)
    } 

    if (message.content.startsWith(prefix + 'avatar')) {
        let member = message.mentions.users.first()
        message.delete()  
        var embedAuthor = new Discord.RichEmbed()     
            .setColor("#15f153")
            .setTitle("Voici ton avatar " + message.author.tag )
            .setImage(message.author.avatarURL)
        if (!member) return message.channel.send(embedAuthor)
        var embed = new Discord.RichEmbed()
            .setTitle("Voici l'avatar de " + member.username + " :")
            .setImage(member.displayAvatarURL)
        message.channel.send(embed)
       }
 
       if(message.content.startsWith(prefix + "delrole")) {
        message.delete()
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Administrateur" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
      
        var member = message.mentions.members.first();
      
        var role = message.mentions.roles.first()
      
        member.removeRole(role).catch(console.error);
      
        message.channel.send(`<:check:728757022576869377>
         ${member} à plus le rôle ${role} ! `).then((msg) => msg.delete (5000));//3 secondes

        member.user.send(" Le rôle **" + role.name + "** t'a été retiré du serveur **" + message.guild.name + "** par **" + message.author.tag + "**");

     }
      
     if(message.content.startsWith(prefix + "addrole")) {
        message.delete()
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Administrateur" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
      
        var member = message.mentions.members.first();
      
        var role = message.mentions.roles.first()
      
        member.addRole(role).catch(console.error);
      
        message.channel.send(`<:check:728757022576869377> ${member} à obtenu le rôle ${role} !`).then((msg) => msg.delete (5000));//3 secondes

        member.user.send(" Le rôle **" + role.name + "** t'a été ajouter sur le serveur **" + message.guild.name + "** par **" + message.author.tag + "**");
     }
 
     if (args[0].toLowerCase() === prefix + "unwarn") {
        let member = message.mentions.members.first()
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:728759373035470928> Vous n'avez pas la permission d'utiliser cette commande , Il vous faut la permission ``Gérer Les Messages" + "``" + " !").then((msg) => msg.delete (5000));//3 secondes
        if (!member) return message.channel.send("<:error:728759373035470928> Veuillez mentionner un utilisateur !").then((msg) => msg.delete (5000));//3 secondes
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("<:error:728759373035470928> Vous ne pouvez pas unwarn ce membre !").then((msg) => msg.delete (5000));//3 secondes
        if (!member.manageable) return message.channel.send("<:error:728759373035470928> Je ne peut pas unwarn ce membre !").then((msg) => msg.delete (5000));//3 secondes
        if (!warns[member.id]|| !warns[member.id].length) return message.channel.send(" <:check:728757022576869377> Ce membre n'a actuellement aucun warn !").then((msg) => msg.delete (5000));//3 secondes
        member.user.send(" Tu as un warn qui t'es retiré du serveur **" + message.guild.name +"** par **" + message.author.tag + "**");
        warns[member.id].shift()
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send("<:check:728757022576869377> Le dernier warn de " + member + " a été retiré !").then((msg) => msg.delete (5000));//3 secondes
  }
}) 
