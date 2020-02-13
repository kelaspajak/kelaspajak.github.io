# FROM pajakresources/kelaspajak:1.0
FROM jekyll/builder:latest
COPY Gemfile .
RUN /bin/sh -c bundle install