# kelaspajak.github.io
Front matter di collection features:

#### fitur : 1 menandakan fitur utama
#### fitur : 2 menandakan turunan/sub dari fitur

- https://caseconverter.co/ -- Easily Convert Case with our Case Converter.co Online Tool. Case converter tools is designed to convert one text case to another case online. Just put the text below form and click on below button to convert your text to appropriate case.

#### icon
- https://www.flaticon.com/free-icon/file_595496?term=file&page=1&position=29 file

#### Submodule untuk fitur
- cd _fitur 
- https://stackoverflow.com/questions/12898278/issue-with-adding-common-code-as-git-submodule-already-exists-in-the-index
- git submodule add https://github.com/kelaspajak/docs.git

```cd submodule_name
git checkout master && git pull
cd ..
git add submodule_name
git commit -m "updating submodule to latest"
git push
```

#### hasilnya 


```
[submodule "_fitur/docs"]
	path = _fitur/docs
	url = https://github.com/kelaspajak/docs.git
```

##### jika baru pertama kali dan isinya kosong maka

`git submodule update --init`

##### untuk update data
```
git submodule update --init --recursive
git submodule foreach --recursive git fetch
git submodule foreach git merge origin master
git add .
git commit -am "update submodule"
git push origin master
```


https://stackoverflow.com/questions/10168449/git-update-submodules-recursively


#### Change topik to collection
```
---
display_name: NPWP dan PKP
short_description: semua tentang NPWP dan PKP
topic: NPWP dan PKP
order: 2
---
```


kup:
  - Umum
  - NPWP dan PKP
  - SPT
  - Pembukuan
  - Pembayaran atau Penyetoran
  - Pemeriksaan
  - Penagihan Pajak
  - Keberatan
  - Banding, Gugatan, dan Peninjauan Kembali
  - Sanksi, Penetapan dan Ketetapan Pajak
  - Restitusi
  - Imbalan Bunga
  - Sunset policy
  - Akses Informasi Keuangan

