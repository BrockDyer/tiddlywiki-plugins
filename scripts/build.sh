#!/bin/bash

build=".build"

# Prepare the build environments
./scripts/prepare.sh "$build"

# .build/
# ├─ plugins/
# │  ├─ PluginName/
# ├─ tiddlers/
# ├─ tiddlywiki.info

# Build TiddlyWiki
tiddlywiki "$build/" --build index