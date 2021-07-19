module.exports = {
  Admins: ["ElNeroz#0001"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "+", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "En progreso...", //Support Server Link
  Token: process.env.Token || "ODA1MjgyMzgxNjMxNzE3NDE3.YBYnqQ.W_nL8_RsSKjoo1721_wmcIPJPfA", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "805282381631717417", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "ZDMkzCmE5r_H_nqIaIFpNPvhDNF8R_ep", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "NeroDarkmaou", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/app-icons/805282381631717417/45b5bcfc75d919bcf59d62ef5e1d2a07.png?size=256", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "11206e95318d4d359f20c7a09039079a", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "56a328352ef645829018301b0182a057", //Spotify Client Secret
  },
};
