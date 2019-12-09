---
title: KUP
description: Kumpulan resume perpajakan dari A sampai R
slug: resume-kup
icon:
- https://raw.githubusercontent.com/all-contributors/all-contributors/master/docs/assets/bot-usage.png
authors:
- lesssummer
repository: all-contributors/all-contributors-bot
stars: 
updated: 2019-12-07 10:13:02 UTC
host: https://gkioebvccg.execute-api.us-east-1.amazonaws.com/prod
installations: 300
organizations:
- nuxt-community
- testing-library
- virgili0
svg-images: bug.png
fitur : 2
categories: "resume"
---

✨ Resume UU perpajakan yang disusun dari aturan perpajakan tertinggi hingga aturan pelaksanaan
{% assign docs = site.docs | where: "tagging","kup" %}
{% assign docs = site.docs | sort: 'topik' | reverse %}
{% for docs in docs %}
  <h2>
    <a href="{{ docs.link }}">
      {{ docs.title }} - {{ docs.categories }}
    </a>
  </h2>
  <p>{{ docs.content | markdownify }}</p>
{% endfor %}