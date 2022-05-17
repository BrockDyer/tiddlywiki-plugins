#!/bin/bash

sed '/<path.*Text/ s/$/ class="svg-path-text"/' PartySheet.svg > PartySheetHtml.txt
sed -i '' '/<path.*Banner/ s/$/ class="svg-banner"/' PartySheetHtml.txt