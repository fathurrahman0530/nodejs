// Core Module
// File System

const fs = require('fs');

// console.log(fs);

// meuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync('data/text.txt', 'Hello world secara synchronous');
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/text.txt', 'Hello world secara asynchronous', (e) => {
//   console.log(e);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile('data/text.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readline
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
  rl.question('Masukkan umur anda : ', (umur) => {
    const data = {nama, umur};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(data);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(`Terima kasih sudah memasukkan data.`);

    rl.close();

  });
});