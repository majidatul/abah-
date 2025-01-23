//object soal no 1

const mobil = {
    merk:'Toyota',
    model:'Avanzaa',
    tahun:2024
};
console.log(mobil);

//soal no 2
const buku = {
    judul:'pemrograman javaScript',
    penulis:'Zio Alfinois',
    harga:'85000'
}
{
    buku.penerbit = 'BazmaMedia',
    buku.harga = '90000'
};
console.log(buku)

//soal no 3
const orang = {
nama:'Rafka Aditya Ramadhan',
umur:20,
hobi:'programming'
}
console.log (`halo, nama saya ${orang.nama}, umur saya ${orang.umur}, dan hobi saya adalah ${orang.hobi}`);



//soal aray.js
//soal 1 push pop

let bahasa_pemrograman = []
bahasa_pemrograman.push('javaScript')
bahasa_pemrograman.push('python')
bahasa_pemrograman.push('HTML')
bahasa_pemrograman.push('Java')
bahasa_pemrograman.push('PHP')
console.log (bahasa_pemrograman);
 bahasa_pemrograman.pop();
 console.log(bahasa_pemrograman);

 //soal no 2 unshift shift

 let number = [3, 6, 9, 12, 15];
 number.unshift(0);
 console.log (number);
 number.shift()
 console.log(number);
 console.log(number [0])

 //soal no 3 filter
const ages = [18, 22, 16, 25, 30, 14, 17, 15, 24];
const umurDewasa = ages.filter( ages=> ages => 18);
const ankgaBaru = [18, 22, 25, 30, 24];
console.log(ankgaBaru)
//soal no 4 sort

