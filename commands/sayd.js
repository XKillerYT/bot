const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

  message.delete();
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "sayd"
}
