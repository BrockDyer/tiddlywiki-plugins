#!/bin/bash

build="$1"
src="src"
doc="docs"
plugins="$build/plugins"

# Setup build directory if not setup.
if [ ! -d "$build" ]; then
    mkdir -p "$build"
fi

# Cleanup
rm -rf "$build"/*
[ -e "$doc/index.html" ] && rm "$doc/index.html"

mkdir -p "$plugins"

# Copy sources to build directory
cp -r "$doc"/* "$build/"
cp -r "$src"/* "$plugins/"