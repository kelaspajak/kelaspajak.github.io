FROM jekyll/jekyll:latest
COPY Gemfile .
RUN /bin/sh -c bundle install
docker run --rm --volume="$PWD:/srv/jekyll" -it kelaspajak new .