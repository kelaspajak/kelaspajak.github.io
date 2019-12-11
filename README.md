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


{% assign topiks = site.data.resum.kup | group_by: 'topik' %}
{% for topiks in topiks %}
    <h4>{{ topiks.name }}</h4>    
{% endfor %}

<--berhasil untuk subtopik -->
{% assign subtopik = site.data.resum.kup | group_by: 'subtopik' %}
{% for subtopik in subtopik %}
<h4>{{ subtopik.name }}</h4>
    <ul>
        {% assign titles = site.data.resum.kup | where: "subtopik", subtopik.name %}
        {% for titles in titles %}
            <li><a href="{{ titles.url }}">{{ titles.title }}</a></li>
        {% endfor %}
    </ul>
{% endfor %}

<--bisa tapi gak sorting-->

{% assign topiks = site.data.resum.kup | group_by: 'topik' %}
{% for topiks in topiks %}
<h4>{{ topiks.name }}</h4> 
    <ul>
        {% assign subtopiks = site.data.resum.kup | where: "subtopik", topiks.name %}
            {% for subtopik in subtopiks %}
            <li>{{ subtopik.subtopik }}</li>
            {% endfor %}
    </ul> 
{% endfor %}



{% assign subtopik = site.data.resum.kup | group_by: 'subtopik' %}
{% for subtopik in subtopik %}
    {% if subtopik.name %}
        <h4>-----{{ subtopik.name }}----</h4>
        <ul>
            {% assign titles = site.data.resum.kup | where: "subtopik", subtopik.name %}
            {% for titles in titles %}
                <li><a href="{{ titles.url }}">{{ titles.title }}</a></li>
            {% endfor %}
        </ul>
    {% endif %}
{% endfor %}

<!-- bisa jalan topik dan title -->
{% assign topik = site.data.resum.kup | group_by: 'topik' %}
{% for topik in topik %}
    <h3>###{{ topik.name }}</h3>
    {% assign titles = site.data.resum.kup | where: "topik", topik.name %}
    {% for titles in titles %}
        <li><a href="{{ titles.url }}">{{ titles.title }}</a></li>
    {% endfor %}
{% endfor %}