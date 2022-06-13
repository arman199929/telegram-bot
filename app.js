const {Telegraf} = require('telegraf');
const translator = require('translation-google');

const config = require('./config.json');
const bot = new Telegraf(config.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Hello,send me a text you want to translate.')

});

bot.on('text', async (ctx) => {
    const text = ctx.update.message.text;

    const translation = await translator(text, {from: 'en', to: 'ru'})

    ctx.reply(translation.text)
    console.log(ctx.update)

})


bot.launch()

