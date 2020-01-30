FROM pajakresources/kelaspajak:1.0
COPY Gemfile .
RUN /bin/sh -c bundle install