#!/bin/bash

cwd=$(pwd)
build=".build"
wiki="DevWiki"
src="src"

plugins="$build/$wiki/plugins"

# Setup build directory if not setup.
if [ ! -d "$build" ]; then
    mkdir -p "$build"
    cd "$build"
    tiddlywiki "$wiki" --init server
    mkdir -p "$wiki/plugins"
    cd "$cwd"
fi


# Clean build directory
rm -rf "$plugins/*"

# Copy src to build directory
cp -r "$src"/* "$plugins"

# Start the server
tiddlywiki "$build/$wiki/" --listen port=8080