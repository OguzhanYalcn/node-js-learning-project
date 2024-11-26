// console.log("Hello World");

// const a = 2;
// console.log(a);

/*
// fs modülünü kullabilmemiz için aşağıdakini yazmamız gerekiyor. (File System)
const fs = require("fs");

fs.writeFileSync("merhaba.txt", "Node.js dünyasına hoşgeldiniz :)");
// oluşturmak istediğimiz dosyanın adını giriyoruz, dosyanın içerisine yazmak istediğimizi yazıyoruz.
console.log("dosyalar oluşturuldu");
*/

/*
// path modülünü kullabilmemiz için aşağıdakini yazmamız gerekiyor.
const path = require("path");
const DosyaYolu = "/kullanici/node-app-js/app.js";
console.log("klasör yolu", path.dirname(DosyaYolu));
console.log("dosya adı", path.basename(DosyaYolu));
console.log("dosya uzantısı", path.extname(DosyaYolu));
*/

/*
// olay gerçekleşsin istiyoruz ama bir de zaman eklemek istiyoruz
console.log("birinci işlem");
setTimeout(() => {
  console.log("ikinci işlem");
}, 2000);
console.log("üçüncü işlem");
// ÇIKTI: birinci işlem → üçüncü işlem → (2 sn sonra) ikinci işlem
*/

/*
const sayHello = require("./ownModule.js"); // import etme şeklimiz.
console.log(sayHello("Node.js Eğitimi'ne Hoşgeldiniz :)")); // "Node.js Eğitimi", name'in yerini tuttu. Kendi oluşturduğumuz modülün içerisine gönderdik.
*/

/*
const fs = require("fs");
const data = fs.readFileSync("merhaba.txt", "utf-8"); // dosya adı + hangi formatta okunacağı
console.log("dosya içeriği: ", data); // dosyanın içerisini okuduk
*/

/*
// Var olan bir dosyaya veri ekleme
const fs = require("fs");
fs.appendFileSync("merhaba.txt", "  bu yeni metin, artık eklendi"); // veri eklemek istenen dosya + eklenmek istenen
console.log("dosyaya veri eklendi..");
*/

/*
// Kullanıcıdan komut satırından bir isim alıp onu da dosyaya yazdırmak istiyoruz.
const fs = require("fs");
const name = process.argv[2] || "Misafir"; // ya kullanıcının bize vermiş olduğu veriyi ya da misafir
fs.writeFileSync("merhaba.txt", `Merhaba, ${name}`);
const content = fs.readFileSync("merhaba.txt", "utf-8");
console.log("file content: ", content);
*/

/*
console.log("the directory you are in (bulunduğunuz dizin): ", __dirname);
console.log("the full path to this file (bu dosyanın tam yolu): ", __filename);
*/

/*
setTimeout(() => {
  console.log("bu mesaj, 3 saniye sonra yazdırılacak");
}, 3000);

const intervalId = setInterval(() => {
  console.log("bu mesaj, her 2 saniyede bir yazdırılacak");
}, 2000);

setTimeout(() => clearInterval(intervalId), 20000); // Bunu yazdık, 20 saniye sonra tekrar eden kısım durdu.
*/

/*
const EvenEmitter = require("events");

// Yeni bir EvenEmitter oluşturduk.
const myEmitter = new EvenEmitter();

// Olay Dinleyici
myEmitter.on("greet", (name) => {
  console.log(`hello, ${name}`);
}); // Olay dinleyici, olayı dinler ve ona göre bir işleme tabi tutar.

// Olay Tetikle
myEmitter.emit("greet", "Node.js"); // Olay tetikleme
*/

/*
// Asenkron Yapı. Node.js'in en temel kavramlarından birisi.
const fs = require("fs");
fs.readFile("merhaba.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error Occurred: ", err);
    return; // hata varsa çık
  }
  console.log("File Content: ", data);
}); // işlem tamamlandığından çalıştırılacak bir fonksiyon belirliyoruz.
*/

// Yerleşik Modüller Node.js ile birlikte gelir. Üçüncü taraflar vardır. Bunlar npm üzerinden yüklenir. Örneğin buranın oto kaydolması için nodemon'ı indirmiştik. Bir de kendi yazdığımız modüller var.

/*
const { addition, multiplication } = require("./calculation.js");
console.log("Addition: ", addition(5, 3));
console.log("Multiplication: ", multiplication(5, 3));
*/

/*
// SENKRON YAPI
const fs = require("fs");
console.log("The First Transaction Begins...");
const data = fs.readFileSync("merhaba.txt", "utf-8");
console.log("File Content: ", data);
console.log("The First Transaction Completed...");
*/

/*
// ASENKRON YAPI
const fs = require("fs");
console.log("The First Transaction Begins...");
// Burası asenkron bir yapı
fs.readFile("merhaba.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error Occurred: ", err);
    return;
  }
  console.log("File Content: ", data);
});
// Burasının tamamlanmasını beklemeden aşağısı çalışır.
console.log("The First Transaction Completed...");
*/

const http = require("http");
// Sunucu Oluştur
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js server is running!\n");
});
// Sunucuyu Başlat
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// server.close(); // server kapatmak için kullanılır.
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// }); // serveri farklı bir portta çalıştırmak için kullanılır.
// server.listen(3000, "127.0.0.1", () => {
//     console.log("Server is running on port 3000");
// }); // serveri farklı bir ip adresinde çalıştırmak için kullanılır.
