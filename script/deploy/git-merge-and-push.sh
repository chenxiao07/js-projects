#!/usr/bin/env sh

git checkout master
git merge dev
git push origin master
git push github master

git checkout gh-pages
git merge master
git push github gh-pages

git checkout dev
git push github dev
