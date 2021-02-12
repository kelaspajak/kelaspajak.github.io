---
id: 1
title: ETAX-API-10001
linkurl: /fitur/efaktur/error10001/
fitur: resume
category: efaktur
topik: error
icon: far fa-file-word
type: word
modifiedTime: 21/01/2020
---
### ETAX-API-10001

Jika mengalami ETAX-API-10001 : Upload Faktur Corrupt, silakan upload ulang.
Biasanya error tersebut terjadi karena ada karakter yang tidak standar (UTF-8), dan hanya dapat dilihat melalui Aplikasi Notepad++ => Menu Encoding => Encode in UTF-8.
Solusi :
Ikuti Langkah - Lankah Berikut :
1.  Ekspor CSV Faktur Keluaran yang reject
2.  Hapus Faktur yang reject dari daftar Administrasi Faktur Keluaran
3.  Install Aplikasi Notepad++
4.  Buka csv Faktur dengan Notepad++ (CSV yang telah terbentuk pada Langkah 1).
5.  Pilih Menu Encoding => Encode In UTF - 8
6.  Hapus karakter yang diblok hitam termasuk karakter tanda tanya (?)
7.  Simpan csv dan impor kembali ke dalam eFaktur
8.  Upload Ulang Faktur Pajak tersebut.