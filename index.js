// const nama = 'Fathur Rahman';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// console.log(window);

// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); // third party module / npm module / node_module

// console.log('Halo Fathur Rahman');
// console.log(cetakNama('Fathur Rahman Abdullah'));

const coba = require('./coba');

console.log(coba.cetakNama('Fathur Rahman Abdullah'));
console.log(coba.PI);
console.log(coba.mahasiswa.cetakMhs());
console.log(new coba.Orang());