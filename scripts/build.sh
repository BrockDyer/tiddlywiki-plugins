#!/bin/bash
# Assumes the build dir is already prepared

build=".build"

# .build/
# ├─ plugins/
# │  ├─ PluginName/
# ├─ tiddlers/
# ├─ tiddlywiki.info

# Build TiddlyWiki
tiddlywiki "$build/" --build index