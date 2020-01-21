# kelaspajak.github.io
Front matter di collection features:

#### fitur : 1 menandakan fitur utama
#### fitur : 2 menandakan turunan/sub dari fitur

- https://caseconverter.co/ -- Easily Convert Case with our Case Converter.co Online Tool. Case converter tools is designed to convert one text case to another case online. Just put the text below form and click on below button to convert your text to appropriate case.


Find resources by:
Topic `AWS CI Data Science DevOps Enterprise Cloud Enterprise Server InnerSource Open Source Security`
Industry `Automotive Federal Financial Services`
Type `ideos Webcasts Whitepapers`

#### icon
- https://www.flaticon.com/free-icon/file_595496?term=file&page=1&position=29 file

#### Submodule untuk fitur
- cd _docs 
- https://stackoverflow.com/questions/12898278/issue-with-adding-common-code-as-git-submodule-already-exists-in-the-index
- git submodule add https://github.com/kelaspajak/kup.git
- git submodule add https://github.com/kelaspajak/aspekpajak.git
- git submodule add https://github.com/kelaspajak/lainlain.git
- git submodule add https://github.com/kelaspajak/ppn.git
- git submodule add https://github.com/kelaspajak/pph.git

```cd submodule_name
git checkout master && git pull
cd ..
git add submodule_name
git commit -m "updating submodule to latest"
git push
```

#### hasilnya 


```
[submodule "_docs/aspekpajak"]
	path = _docs/aspekpajak
	url = https://github.com/kelaspajak/aspekpajak.git
[submodule "_docs/kup"]
	path = _docs/kup
	url = https://github.com/kelaspajak/kup.git
[submodule "_docs/lainlain"]
	path = _docs/lainlain
	url = https://github.com/kelaspajak/lainlain.git
```

##### jika baru pertama kali dan isinya kosong maka

`git submodule update --init`

##### untuk update data
git submodule update --init --recursive
git submodule foreach --recursive git fetch
git submodule foreach git merge origin master

https://stackoverflow.com/questions/10168449/git-update-submodules-recursively