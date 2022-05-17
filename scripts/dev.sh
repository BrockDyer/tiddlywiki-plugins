#!/bin/bash

build=".build"

# Prepare the build environment
./scripts/prepare.sh "$build"

# .build/
# ├─ plugins/
# │  ├─ PluginName/
# ├─ tiddlers/
# ├─ tiddlywiki.info


# Start the server
tiddlywiki "$build/" --listen port=8080