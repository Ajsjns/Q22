import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
╮───────────────╭ـ 
│⚝ ⃟✨❯ *اهلا بك, ${taguser}*
│───────────────╰ـ
┆───────────────╭ـ 
│⚝ ⃟👤❯ *المالك:* الجنہـــــرال
│⚝ ⃟🤖❯ *رقم البوت:* wa.me/966551138192
│⚝ ⃟🗓️❯ *التاريخ:* ${date}
│⚝ ⃟⏲️❯ *الوقت:* ${uptime}
│⚝ ⃟👤❯ *المستخدم:* ${rtotalreg}
│⚝ ⃟👥❯ *عدد المستخدمين:* ${rtotal}
︎╯───────────────╰ـ
╮───────────────╭ـ
│「❥📲 *حسـابك* 📃❥」
│───────────────╰ـ
┆───────────────╭ـ 
│⚝ ⃟🎖️❯ *المستوى:* ${level}
│⚝ ⃟🧰❯ *الخبرات:* ${exp}
│⚝ ⃟⚓❯ *رتـبة:* ${role}
│⚝ ⃟💎❯ *المـاس:* ${limit}
│⚝ ⃟👾❯ *العمـلات:* ${money}
│⚝ ⃟🪙❯ *الرموز:* ${joincount}
│⚝ ⃟🎟️❯ *المميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
︎╯───────────────╰ـ
${readMore}
${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}
╮───────────────╭ـ
│>「❥❤️ *إسلاميات* ✨👑❥」
│───────────────╰ـ
┊˼🕋˹┊⟣｢الله｣
┊˼🕋˹┊⟣｢السوره｣
┊˼🕋˹┊⟣｢القران｣
┊˼🕋˹┊⟣｢قران｣
┊˼📿˹┊⟣｢ادعيه｣
┊˼📿˹┊⟣｢اذكار الصـباح｣
┊˼📿˹┊⟣｢اذكار المـساء｣
┊˼📿˹┊⟣｢اذكار الصـلاه｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「 *الـذكاء الإصطنـــاعي* 🗣️ 」
│───────────────╰ـ 
┊˼🤖˹┊⟣｢بوت｣
┊˼🤖˹┊⟣｢جيمي｣
┊˼🤖˹┊⟣｢مساعد｣
┊˼🤖˹┊⟣｢بوكس｣
┊˼🤖˹┊⟣｢ميتا｣
┊˼🧮˹┊⟣｢ناتج｣
┊˼🤖˹┊⟣｢ايلي｣
┊˼🙎˹┊⟣｢تخيل｣
┊˼🏞️˹┊⟣｢قراءة｣
┊˼🏞️˹┊⟣｢طباعة｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「❥  *التنـــــزيـلات* 📂📥❥」
│───────────────╰ـ
┊˼🎭˹┊⟣｢تيكتوك｣
┊˼🎬˹┊⟣｢اليوتيوب｣
┊˼🎬˹┊⟣｢يوتيوب｣
┊˼📥˹┊⟣｢تطبيق｣
┊˼📥˹┊⟣｢تطبيق2｣
┊˼📥˹┊⟣｢تطبيقات｣
┊˼📸˹┊⟣｢بينترست｣
┊˼📸˹┊⟣｢صوره｣
┊˼📸˹┊⟣｢صور｣
┊˼📥˹┊⟣｢انستجرام｣
┊˼📥˹┊⟣｢فيسبوك｣
┊˼📥˹┊⟣｢تويتر｣
┊˼📥˹┊⟣｢درايف｣
┊˼📥˹┊⟣｢ميديافاير｣
┊˼📥˹┊⟣｢جيتكلون｣
┊˼📥˹┊⟣｢ستيكرز｣
┊˼🎬˹┊⟣｢تنزيل｣
┊˼🎼˹┊⟣｢تحميل｣
┊˼🎬˹┊⟣｢تشغيل1｣
┊˼🎬˹┊⟣｢تشغيل2 ｣
┊˼🎼˹┊⟣｢صوت｣
┊˼🎬˹┊⟣｢فيديو｣
┊˼🎼˹┊⟣｢سبوتيفي｣
┊˼🎼˹┊⟣｢رنين｣
┊˼🎭˹┊⟣｢تيك｣
┊˼🎭˹┊⟣｢توك｣
┊˼🎭˹┊⟣｢تيكستوك｣
┊˼🎶˹┊⟣｢اوديو｣
┊˼🎶˹┊⟣｢صوتي｣
┊˼🎶˹┊⟣｢صوتي2｣
┊˼🎬˹┊⟣｢فديو｣
┊˼🎬˹┊⟣｢فديو2｣
┊˼🎬˹┊⟣｢فديو3｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「❥  *البــــحـــــــــــث* 🔍❥」
│───────────────╰ـ
┊˼🔍˹┊⟣｢بحث｣
┊˼🔍˹┊⟣｢انمي｣
┊˼🔍˹┊⟣｢مانجا｣
┊˼📚˹┊⟣｢كتب｣
┊˼📕˹┊⟣｢كتابي｣
┊˼🖼️˹┊⟣｢يوتيوب｣
┊˼🎼˹┊⟣｢كلمات｣
┊˼🏞️˹┊⟣｢جوجل｣
┊˼🎭˹┊⟣｢بلايستور｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「❥  *ورشـــة الـصــــور* 🔍❥」
│───────────────╰ـ
┊˼🪄˹┊⟣｢تحسين｣
┊˼🪄˹┊⟣｢طباعة｣
┊˼🪄˹┊⟣｢مساعد｣
┊˼🪄˹┊⟣｢بكسل｣
┊˼🪄˹┊⟣｢طمس｣
┊˼🪄˹┊⟣｢تلوين｣
┊˼🪄˹┊⟣｢تصفية｣
┊˼🪄˹┊⟣｢سيمب｣
┊˼🪄˹┊⟣｢تعليق｣
┊˼🪄˹┊⟣｢قلب｣
┊˼🪄˹┊⟣｢لوليس｣
┊˼🪄˹┊⟣｢ثلوج｣
┊˼🪄˹┊⟣｢زومبي｣
┊˼🪄˹┊⟣｢توزومبي｣
┊˼🪄˹┊⟣｢تويت｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「  *المجموعات والأعضاء* 👥❥」
│───────────────╰ـ
┊˼🔐˹┊⟣｢جروب｣
┊˼🔐˹┊⟣｢جروبتايم｣
┊˼⬇️˹┊⟣｢خفض｣
┊˼⬆️˹┊⟣｢ترقية｣
┊˼🧼˹┊⟣｢حذف｣
┊˼🗿˹┊⟣｢اشباح｣
┊˼🔄˹┊⟣｢تكرار｣
┊˼👥˹┊⟣｢المجموعة｣
┊˼📬˹┊⟣｢الدعوة｣
┊˼📜˹┊⟣｢كشف｣
┊˼🔄˹┊⟣｢تعيين｣
┊˼📜˹┊⟣｢وصف｣
┊˼🔄˹┊⟣｢ستنيم｣
┊˼📜˹┊⟣｢ترجيب｣
┊˼🔄˹┊⟣｢منشن｣
┊˼🖇️˹┊⟣｢تذكير｣
┊˼⚠️˹┊⟣｢تحذير｣
┊˼📱˹┊⟣｢استعرض｣
┊˼🏞️˹┊⟣｢عرض｣
┊˼⬆️˹┊⟣｢توب｣
┊˼👨‍👩‍👦‍👦˹┊⟣｢زواج｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「❥  *صـور عشــوائيـة* 🔍❥」
│───────────────╰ـ
┊˼🏞️˹┊⟣｢الانمي｣ 
┊˼👨‍👩‍👦‍👦˹┊⟣｢تطقيم｣
┊˼⚽˹┊⟣｢كريست｣
┊˼⚽˹┊⟣｢ميسي｣
┊˼🐶˹┊⟣｢كلب｣
┊˼🐱˹┊⟣｢قطة｣
┊˼🐈˹┊⟣｢قط｣
┊˼🌫️˹┊⟣｢الفسفور｣
┊˼🏔️˹┊⟣｢جبال｣
┊˼🎗️˹┊⟣｢عيد｣
┊˼🔫˹┊⟣｢بوبجي｣
┊˼🏞️˹┊⟣｢خلفيات｣
┊˼🏞️˹┊⟣｢خلفيات2｣
┊˼👤˹┊⟣｢كاركتير｣
┊˼🏎️˹┊⟣｢سبايسو｣
┊˼🌀˹┊⟣｢تكنولوجيا｣
┊˼©️˹┊⟣｢دورايمون｣
┊˼☠️˹┊⟣｢هاكر｣
┊˼🌝˹┊⟣｢كوكب｣
┊˼💢˹┊⟣｢بنتول｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「❥  *الألعاب والمكافآت* 🔍❥」
│───────────────╰ـ
┊˼❓˹┊⟣｢السؤال｣
┊˼❓˹┊⟣｢السؤال2｣
┊˼❓˹┊⟣｢سؤال｣
┊˼♦️˹┊⟣｢لعب｣
┊˼🌺˹┊⟣｢حب｣
┊˼🤔˹┊⟣｢مراهنة｣
┊˼👾˹┊⟣｢متقاطعة｣
┊˼🌀˹┊⟣｢رياضيات｣
┊˼🔗˹┊⟣｢دردشة｣
┊˼🔗˹┊⟣｢مغادرة｣
┊˼🔗˹┊⟣｢تبديل｣
┊˼💫˹┊⟣｢الماسي｣
┊˼🩸˹┊⟣｢صحتي｣
┊˼🔫˹┊⟣｢الصيد｣
┊˼🪨˹┊⟣｢صدارة｣
┊˼🏃˹┊⟣｢هروب｣
┊˼💵˹┊⟣｢يومي｣
┊˼💸˹┊⟣｢لغم｣
┊˼💵˹┊⟣｢سرقة｣
┊˼💸˹┊⟣｢نقل｣
┊˼👤˹┊⟣｢حسابي｣
┊˼👤˹┊⟣｢بروفايل｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「❥  *الـمــــلـصقـــــات* 🔍❥」
│───────────────╰ـ
┊˼🧸˹┊⟣｢دمج｣
┊˼🧸˹┊⟣｢ملصق｣
┊˼🧸˹┊⟣｢ملصق2｣
┊˼🧸˹┊⟣｢ايموجي｣
┊˼🧸˹┊⟣｢نرد｣
┊˼🧸˹┊⟣｢تدليل｣
┊˼🧸˹┊⟣｢بطاقة｣
┊˼🧸˹┊⟣｢صفع｣
┊˼🧸˹┊⟣｢حقوق｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「❥  *أدوات مســــاعـده* 🔍❥」
│───────────────╰ـ
┊˼🌍˹┊⟣｢انترنت｣
┊˼👤˹┊⟣｢المطور｣
┊˼🌍˹┊⟣｢الدعم｣
┊˼💹˹┊⟣｢زخرفة｣
┊˼🌍˹┊⟣｢ترجم｣
┊˼💹˹┊⟣｢وتس｣
┊˼📓˹┊⟣｢تونص｣
┊˼📓˹┊⟣｢باركود｣
┊˼🎁˹┊⟣｢المزيد｣
┊˼🌦️˹┊⟣｢الطقس｣
┊˼📩˹┊⟣｢دروبميل｣
┊˼📬˹┊⟣｢شورت｣
︎╯───────────────╰ـ
╮───────────────╭ـ
│>「❥  *رسائل ونصـــوص* 🔍❥」
│───────────────╰ـ
┊˼📑˹┊⟣｢نصيحة｣
┊˼📑˹┊⟣｢مجاملة｣
┊˼📑˹┊⟣｢غزل｣
┊˼📑˹┊⟣｢تحدي｣
︎╯───────────────╰ـ
 `.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(هلا|سلام|مساعدة|كيفك|مساعده|info|الأوامر|القائمة|القائمه|معلومات|هاي|الو|مرحبا|امر)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
  }
