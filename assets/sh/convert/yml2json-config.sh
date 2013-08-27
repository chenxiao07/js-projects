#!/usr/bin/env sh

cat assets/yml/_config.yml | ./assets/pl/convert/yml2json.pl > assets/json/_config.json

