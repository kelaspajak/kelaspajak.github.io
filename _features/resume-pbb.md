---
title: PBB
description: Kumpulan resume UU PBB dari A sampai R
slug: resume-pbb
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
topik: ppn
categories: "resume"
---

✨ halaman ini berdasarkan navigation.yml
{% for entry in site.data.resume.[page.topik] %}

  <div>
    <div>
      <h4><a href="{{entry.url}}">{{entry.title}}</a></h4>
    </div>
    <div>
      <ul class="no-underline" class="reading-list {{entry.year}}">
        {% for subfolderitems in entry.subfolderitems %}
          <li>
            <a href="{{subfolderitems.url}}" alt="_blank" rel="nofollow noopener">{{subfolderitems.page}}</a> {% if subfolderitems.icon %}<span class="star">★</span>{% endif %}
          </li>
        {% endfor %}
      </ul>
    </div>

  </div>
  
{% endfor %}