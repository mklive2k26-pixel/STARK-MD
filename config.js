const fs = require('fs'),
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://stark-pair.vercel.app";

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "STARK-MD~H4sIAAAAAAAAA5VVXZOiOBT9L3nVGvkQAau6agERkcYvRGy39iGSgBEMGCKKU/73LZzp7nnYmerNU76499xzzg3fAS1IhT3cgOF3UDJSQ47bKW9KDIbAvCQJZqALEOQQDAGciduCL8RyTPih7079vreZH9StdM92yXYTrrTZK+OEDOz0BTy6oLzscxL/ISBek+SwC9e3cU7upjjwJctD9hbr5jwMZ76pjTfcObwJ2SR7AY82IiSM0NQuD/iEGcw93CwgYV+Dv5x4s2uYycTLWJEE+blBk2Lsaj6b9k5adJItgS9nW3EjaF+Dz1fn+Xa3d23RX58Hqig2esT9+KoEEE32NeYmXCyaLDum9g/4FUkpRi7ClBPefJl3wV0jN+tZoXN2r04mH49sc5RoYI7IXOyI8+AS4mJsFIeJ8DXgO2/j276xOY7yQr6uc3eaKfC0ng3ylX4bKMH5TRYVeVtuHO1X4Av27pXs//De8fd9byPzuCds43Np3+ZzqsSyLN7jis1GyabEeaLU6i1yvwZ/JoViGUV6FtpTfSmn/T2fuLOCIh+h11wbrUznWkxRRFbLT/iQX9ifUG63q+C6SZLrjt3For7S8UGJLO2NScSSxHq31a5GZ5SIsuH0qIjy5q2T3a56fVnFhLKIXmZ8OuowDy0Oqv+KTxaesIPx8qwow42LwFB8dAHDKak4g5wUtN2TJKELIKoDHDPMn/QCu5mra21OOoMe9ie6YvjIHtx7bhDp8bRci+vReu/37bKGyxfQBSUrYlxVGE1IxQvW+LiqYIorMPz7ny6g+MZ/CNem00S5CxLCKh7SS5kXEL3L+nEK47i4UB40NLbaCWZgKHxuY84JTauWyQuFLD6QGlsHyCswTGBe4Y8aMcMIDDm74I++tQrUUm/7K8+NNA90wekpCUFgCHRJlvuyrsqK2h8q/b+qb9c2LCzLbxRz0AX585okDiRVVXVp0NclUW9vtgePD4RtQIQ5JHkFhsDyOqZYhKbt0rLPDccx3NSwUgN8VvRujh/k57TRUFCNK3HXaUyW3RIaatOTH0hkEF3rupwoESRnH6/Dl/8IAoZgpNC3KtxBp24Wy/uJ7WXdapB/y3s+Q1d7HNHa6dOLBHXbmJo8qFVsDRQUIYMFxdt2Wqs9syeJtUJP6yj1du6bVI1aJ3UBwjWJ8a/JxGga9zo9b1scnL6YmUixPdnBE3eV5oKjCapLq+Tszo8Tp1ruVP1InGCuLdBdUgNBd9imxisyX2dotbyMsqqiouOTn7Z9tk3+87kiT0O1WrXLhOBn91PYKvg7Ud4Bt94SHt1fvv35jvymF83dTqsnITP3syipUqj4W0VcWLujzYtLXr2qg1VncyrOx0kmgsfjny4oc8iTgp3avxRFrHgmZ8Wl9apLk+IPySwjdUfLdNxWnMOKG5/+X5MTrjg8lWAoqpogCLKuqV1waoyyDDjk730DjHYsxlfw+BdrrDgBVAcAAA==", // Add sess Id here especially when deploying on panels else use app.json and .env file...
    SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", // Add multiple numbers with country codes without (+), separated by comma
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // ✅ only ONE, default = true
    AUTO_STATUS_VIEWS: process.env.AUTO_STATUS_VIEWS || "true",
    AUTO_STATUS_REACTS: process.env.AUTO_STATUS_REACTS || "true",
    AUTO_STATUS_EMOJIS: process.env.AUTO_STATUS_EMOJIS || "❤️,💀,🌚,🌟,🔥,❤️‍🩹,🌸,🍁,🍂,🦋,🍥,🍧,🍨,🍫,🍭,🎀,🎐,🎗️,👑,🚩,🇵🇰,🍓,🍇,🧃,🗿,🎋,💸,🧸,🦢,✨,🌾,🌊,⚡,🌏,🕸️,🎀,🪄,🌝,🌜,💫,🤍,🖤,🤎,💜,💙", // Input your custom emojis
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ STATUS VIEWED BY STARK-MD", // Custom message
    MODE: process.env.MODE || "public", // Options: private, public, inbox, groups
    TGTOKEN:process.env.TGTOKEN || "7672295852:AAG0SEMHbM1jhkpodxHspJuVT5tiAhXPPpI",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923437393822", // Only 1 owner number here, others add to sudo numbers
    OWNER_NAME: process.env.OWNER_NAME || "𓂃ᷱ᪳𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄^᪲᪲᪲輪", // Custom name
    PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Custom
    PACK_NAME: process.env.PACK_NAME || "",
    PREFIX: process.env.PREFIX || ".",
    VERSION: process.env.VERSION || "9.0.0",
    ANTI_LINK: process.env.ANTI_LINK || "false", // true = kick, delete = delete, warn = warn
    ANTI_CALL: process.env.ANTI_CALL || "false",
    ANTIBAD: process.env.ANTIBAD || "false",
    BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Will be deleted if ANTIBAD is true
    ANTI_CALL_MSG: process.env.ANTI_CALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐒𝐓𝐀𝐑𝐊-𝐌𝐃ှ᪳𓆪", // Don't change
    BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", // Don't change
    AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "STARK MD ALIVE",
    WELCOME: process.env.WELCOME || "false",
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // true = bluetick all messages, commands = bluetick commands only
    AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Multiple country codes separated by comma
    PRESENCE: process.env.PRESENCE || "null", // typing, recording, online, null
    TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter your timezone
};

// Auto-reload this config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update '${__filename}'`);
    delete require.cache[file];
    require(file);
});
