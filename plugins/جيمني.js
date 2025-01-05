import fetch from 'node-fetch';

/*
هديه الي متابعيني الاعزاء 🫣💗.
حقوق القنوات :

https://whatsapp.com/channel/0029Vael6wMJP20ze3IXJk0z

https://whatsapp.com/channel/0029VasoQ3rEFeXn7Ij6oG37
ملكية : ⛊  𝚂𝙰𝚈𝙴𝙳-𝚂𝙷𝙰𝚆𝙰𝚉𝙰 +++ Eslam

مجموعه اكواد الذكاء الاصطناعي 🤭🔥
*/



const handler = async (m, { command, usedPrefix, conn, args, text }) => {
  await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

  let txt = text;

  if (!text && m.quoted && m.quoted.text) {
    txt = m.quoted.text;
  }

  if (!txt) {
    await conn.sendMessage(m.chat, {
      text: `❗ الرجاء إدخال نص أو الرد على رسالة تحتوي على نص.`,
    }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    return;
  }

  let res;
  try {
    if (command === 'سمسمي') {
      res = await simsimi(txt);
    } else if (command === 'جيبتي') {
      res = await gpt(txt);
    } else if (command === 'بوكس') {
      res = await blackbox(txt);
    } else if (command === 'جيمني') {
      res = await gemini(txt);
    } else if (command === 'شات') {
      res = await chatai(txt);
    }

    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
    await conn.sendMessage(m.chat, { text: res }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: '👌🏻', key: m.key } });

  } catch (error) {
    await conn.sendMessage(m.chat, {
      text: `❌ حدث خطأ أثناء معالجة الطلب.`,
    }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    console.error(error);
  }
};

handler.command = ['سمسمي', 'جيبتي', 'بوكس', 'جيمني', 'شات'];
export default handler;

async function simsimi(question) {
  const url = `https://the-end-api.vercel.app/api/ai/simsimi?q=${encodeURIComponent(question)}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.message;
}

async function gpt(question) {
  const url = `https://the-end-api.vercel.app/api/ai/gpt?q=${encodeURIComponent(question)}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.message;
}

async function blackbox(question) {
  const url = `https://the-end-api.vercel.app/api/ai/blackbox?q=${encodeURIComponent(question)}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.message;
}

async function gemini(question) {
  const url = `https://the-end-api.vercel.app/api/ai/gemini?q=${encodeURIComponent(question)}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

async function chatai(question) {
  const url = `https://the-end-api.vercel.app/api/ai/chat-ai?q=${encodeURIComponent(question)}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}
