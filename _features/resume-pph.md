---
title: PPh
description: Kumpulan resume perpajakan dari A sampai R
slug: resume-pph
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
svg-images: undraw_Design_process_68d0.png
fitur : 2
categories: "resume"
---

✨Thus the question I ended up asking myself: was there a tool I could use to help people quickly model content in a platform-agnostic manner and simultaneously build an artifact that was ideal for communicating intent to a client or team?

A High-Level Theory Of Content Modeling
Let’s divert a bit before we get into Jekyll. I believe you can remove all the conventions and platform-specific language from the content modeling discussion and define it as a three part system:

The core idea is that of an object: some unit of content that holds together across a site. For example, a blog post or a person would be an object on a site.
Objects have attributes that define them. A blog post could have a title, a body of content, an author. A person could have a name, a photo, a bio.
Objects have relationships that determine where they end up on a site, and layouts have logic that defines which attributes of an object are used and where. Our example blog post object is connected to a person object because its author is a person. We output the author’s name and a link to their profile on the post page, and we output their full bio on their profile page.