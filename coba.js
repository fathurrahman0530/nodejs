function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama : 'Andito',
  umur : 22,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan umur saya ${this.umur}`;
  },
}

class Orang {
  constructor() {
    console.log('Objek orang telah dibuat...!!!');
  }
}

// console.log(cetakNama('Fathur Rahman Abdullah'));
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang
// }

module.exports = {
  cetakNama, PI, mahasiswa, Orang
}