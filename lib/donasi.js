exports.donasi = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `🐼{ *MENU DONASI ${BotName}* }🐼
  
  
TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
TELAH MEMBUKA MENU DONASI
🐼🐼


🗓*${tampilTanggal}* 🐼
⏰*${tampilWaktu}* 🐼
(Waktu Server)

KALIAN BISA DONASI MENGGUNAKAN
   
🛡 *PULSA*: 085779386736
🛡 *INSTAGRAM*: ${Instagram}

📺 *IKLAN* : *INSTAGRAM: @serenyemnyem*
  
♨️ GROUP NGOBROL [1] : ${grupch1}

♨️ CHILL GROUP [2] : ${grupch2}

😊 MERENUNG : ${telegram}

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *085779386736*

⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
FOLLOW INSTAGRAM SAYA
${instagram}

🐔FACEBOOK : ${youtube}

`
}
