import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import moment from 'moment-timezone';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const time = moment.tz('Africa/Egypt').format('HH');
    let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
    let date = new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' });

    await conn.sendMessage(m.chat, { react: { text: '🗂️', key: m.key } });


    const images = [

        'https://telegra.ph/file/ee4c96ccb0ed40b687bd0.jpg',

    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];


    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `
╮───────────────╭ـ 
│⚝ ⃟✨❯ *اهلا بك, ${m.pushName}*
│───────────────╰ـ
│⚝ ⃟👤❯ *المالك:* ستيف
│⚝ ⃟🤖❯ *إسم البـوت:* ستيف_روبــوت
│⚝ ⃟💳❯ *رقم المطور:* wa.me/967733123213
│───────────────╭ـ 
│⚝ ⃟⏰❯ *التـاريخ و الوقــت* ♥️
│───────────────╰ـ
┆───────────────╭ـ
│⚝ ⃟🗓️❯ *التاريـخ:* ${date}
︎│───────────────╰ـ
┆───────────────╭ـ
│⚝ ⃟⌚❯ *الـوقـت:* ${wib}
︎╯───────────────╰ـ `
                    },
                    footer: {
                        text: 'بوت ستيف'
                    },
                    header: {
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '│⚝ ⃟📑❯كـل القـوائم',
                                    sections: [
                                        {
                                            title: 'هنـا القائمة الرئيسية التي تحتوي على جميع أوامر ميزات الروبوت',
                                            highlight_label: 'القـائمة الرئيسية',
                                            rows: [
                                                {
                                                    header: 'ستيف',
                                                    title: '│⚝ ⃟🎖️❯الاوامــــر',
                                                    description: 'اظغط هنا لعرض قائمة الاوامر او الميزات الخاصه بالروبوت',
                                                    id: '.مساعدة'
                                                },
                                                {
                                                    header: 'ستيف',
                                                    title: '│⚝ ⃟🎏❯صور إنمي عشوائية',
                                                    description: 'قائمة خاصة بإرسال صور عشوائية لأبطال الانميات',
                                                    id: '.الانمي',
                                                },


                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: 'ALI BOT'
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"│⚝ ⃟👤❯المطــور\",\"id\":\".الدعم\"}"
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"│⚝ ⃟💙❯قنـاة التحديثـات\",\"id\":\".الدعم\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "│⚝ ⃟💚قنـاة المـطـور❯",
                                    url: "https://chat.whatsapp.com/JHVwmEAC0zI4yZWdvFsQVZ",
                                    merchant_url: "https://chat.whatsapp.com/JHVwmEAC0zI4yZWdvFsQVZ"
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['أوامر','menu','اوامر','الاوامر'];

export default handler;
