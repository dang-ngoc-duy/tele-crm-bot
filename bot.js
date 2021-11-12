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

bot.onText(/\/beba-xinchao (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const user_name = msg.from.username;
  const chatId = msg.chat.id;

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, 'Bé ba chào anh, ' + user_name + '!').then(() => {
        'test'
  });
});

// bot.on('message', (msg) => {
//   const name = msg.from.username;
//   bot.sendMessage(msg.chat.id, 'Xin chào anh/chị, ' + name + '!').then(() => {
//     // reply sent!
//   });
// });

module.exports = bot;
