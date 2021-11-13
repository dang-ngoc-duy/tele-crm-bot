const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.onText(/\/hi_beba/, (msg) => {
  const user_name = msg.from.username;
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Bé ba chào anh, ' + `@${user_name}` + '!').then(() => {});
});

bot.onText(/\/hi_beba/, (msg) => {
  const user_name = msg.from.username;
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Bé ba chào anh, ' + `@${user_name}` + '!').then(() => {});
});
bot.sendSticker()

module.exports = bot;
