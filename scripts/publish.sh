#!/bin/bash

branch=$(git symbolic-ref --short HEAD)

git checkout main

# Prepare untracked build directory.
./scripts/prepare.sh ".build"

# [<newversion> | major | minor | patch | premajor | preminor 
# | prepatch | prerelease | from-git]
version="$1"

# Update version and commit to main
npm version "$version" --no-commit-hooks --no-git-tag-version
version=$(grep version package.json | sed 's/.*"version": "\(.*\)".*/\1/')

git add package.json
git commit -m "Publish plugins v$version"

# Checkout gh-pages
git checkout gh-pages

# Build and publish wiki
./scripts/build.sh
git add index.html
git commit -m "Publish plugins v$version"
git push
git checkout "$branch"
