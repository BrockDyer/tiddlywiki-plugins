#!/bin/bash

# Stash changes and switch to main
echo "Stashing changes in working directory."
git stash

git checkout main

# Build
./scripts/build.sh

# [<newversion> | major | minor | patch | premajor | preminor 
# | prepatch | prerelease | from-git]
version="$1"

# Update version
npm version "$version" --no-commit-hooks --no-git-tag-version
version=$(grep version package.json | sed 's/.*"version": "\(.*\)".*/\1/')

git add package.json
git add index.html
git commit -m "Publish plugins v$version"
git push
git checkout -

echo "Restoring changes to working directory."
git stash pop