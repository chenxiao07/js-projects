#!/usr/bin/env sh

cat tags.yml | ./script/convert/yaml2json.pl > tags.json

