/*
function hello() {
  let messsage = "Hello World!";
  console.log(messsage);
}
console.log(messsage);
*/

/*
let metin = "Hello";
let sayi = 100;
let durum = true;
let tanimsiz;
let bos = null; // normalde typeof'u null olarak çıkmalıydı ama object olarak çıktı.

console.log(typeof metin);
console.log(typeof sayi);
console.log(typeof durum);
console.log(typeof tanimsiz);
console.log(typeof bos);
*/

/*
let a = 5;
let b = 10;
console.log(a + b); // 15
console.log(a == b); // false
console.log(a < b && b > 8); // true (true && true → true)
console.log(a < b && b > 20); // false (true && false → false)
console.log(a < b || b > 20); // true (true || false → true)
*/

/*
// if - else örneği
let yas = 18;
if (yas >= 18) {
  console.log("Tebrikler, ehliyet alabilirsiniz !");
} else {
  console.log("Üzgünüz, ehliyet alamazsınız :(");
}
*/

/*
// if - else if örneği
let not = 85;
if (not >= 90) {
  console.log("Harf Notunuz: AA | Tebrikler, Dersten Üstün Başarıyla Geçtiniz !");
} else if (not >= 80) {
  console.log("Harf Notunuz: BB | Tebrikler, Dersten Başarıyla Geçtiniz !");
} else if (not >= 70) {
  console.log("Harf Notunuz: CC | Tebrikler, Dersten Geçtiniz !");
} else if (not >= 60) {
  console.log("Harf Notunuz: DD | Dersten Sınırda Geçtiniz, Biraz Daha Çalışmalısınız...");
} else {
  console.log("Harf Notunuz: FF | Üzgünüz, Dersten Kaldınız :(");
}
*/

/*
let havaDurumu = "güneşli";
let mesaj = havaDurumu === "güneşli" ? "Gözlük takmayı unutmayın!" : "Şemsiye almayı unutmayın!";
console.log(mesaj); // Gözlük takmayı unutmayın!
*/

/*
// for örneği
// let yerine const kullanılsaydı i'nin değeri değiştirilemezdi.
for (let i = 0; i < 5; i++) {
  console.log("Bu bir döngüdür", i);
}
// 0 1 2 3 4
*/

/*
// while örneği
let sayac = 0;
while (sayac < 5) {
  console.log("Sayaç: ", sayac);
  sayac++;
}
// 0 1 2 3 4
*/

/*
// do while örneği
let sayi = 5;
do {
  console.log("Sayı: ", sayi);
  sayi--;
} while (sayi > 0);
// 5 4 3 2 1
*/

/*
let meyveler = ["Elma", "Armut", "Muz"];
console.log(meyveler);

meyveler.push("Kivi");
console.log(meyveler);

meyveler.pop();
console.log(meyveler);

console.log(meyveler.length);
*/

/*
let araba = {
  marka: "Audi",
  model: 2024,
  renk: "Siyah",
};
console.log(araba.marka);
console.log(araba["model"]);
// console.log(araba["marka"]); // aynı işleve gelir
*/

/*
let soz = new Promise((resolve, reject) => {
  let durum = true;
  if (durum) {
    resolve("İşlem tamamlandı !");
  } else {
    reject("İşlem başarısız...");
  }
});

soz.then((mesaj) => console.log(mesaj)).catch((hata) => console.log(hata));
*/

/*
async function getUserData() {
  return { id: 1, name: "John Doe" };
}

async function fetchUser() {
  const user = await getUserData();
  console.log(user);
}

fetchUser();
*/

function randomPasswordGenerator(length) {
  let characters =
    "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuoplkjhgfdsazxcvbnm123456789+-/*?=|_}][{&%$#^£><€ßæ~;,.:";

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

let generatedPassword = randomPasswordGenerator(30);
console.log("Generated Password: ", generatedPassword);
