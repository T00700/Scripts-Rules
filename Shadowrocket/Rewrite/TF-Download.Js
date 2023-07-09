#!name=TestFlight
#!desc=TestFlight下载修正
#!author=NobyDa

[Script]
TestFlight_下载修正 = type=http-request,script-path=https://raw.githubusercontent.com/Centralmatrix3/Scripts-Rules/Master/Shadowrocket/Scripts/TF-Download.Js,pattern=^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$,requires-body=1

[MITM]
hostname = %APPEND% testflight.apple.com
