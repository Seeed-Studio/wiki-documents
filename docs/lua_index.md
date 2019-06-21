# Overview

Luat = Lua + AT, The IoT open source architecture introduced by Luat relies on the communication module for simple and rapid development. The traditional AT commands are encapsulated into APIs in Lua, and demos of various functional applications are provided, which greatly reduces the development cost for users.

<!-- Luat = Lua + AT,  Luat推出的物联网开源架构，依托于通信模块做简易快捷的开发，将传统的AT命令用Lua语言封装成API，并提供各种功能应用的demo，大大减少用户的开发成本。 -->


Developers can easily and conveniently implement functions like TTS, GPS, SOCKER, MQTT, and OTA. For example, with these code, you can implement GPS and MQTT.
<!-- 开发者可以通过调用API轻松，便捷的实现TTS、GPS、SOCKET、MQTT、OTA等功能。例如下面通过几条代码既可以实现GPS，MQTT功能。 -->

`GPS`

````lua
--import gps.lua、sys.lua
require"gps"
require"sys"

--define function prtgps, which output the gps information in trace
--get 3D positioning, latitude and longitude, speed, direction angle, altitude or not
local function prtgps()
    print("gps", gps.is3dfix(), gps.getgpslocation(), gps.getgpsspd(), gps.getgpscog(), gps.getaltitude())	
end

--set the timer to call the prtgps function every 10 seconds
sys.timer_loop_start(prtgps, 10000)
--after booting, initialize gps; gps timing synchronization clock
gps.init()
gps.settimezone(gps.GPS_BEIJING_TIME)

````

`MQTT`

```lua
--import mqtt.lua
require"mqtt"

--mqtt connect callback funcition successfully
local function connectedcb()
    --subscribe the topic
    mqttclient:subscribe({topic="/event0",qos=1})
    --publish notifications
    mqttclient:publish("/event0", "qos1data", 1)
end

--create mqtt client
mqttclient = mqtt.create("TCP", "lbsmqtt.airm2m.com", 8083)
--connect to the mqtt server
mqttclient:connect("clientID", 240, "username", "password", connectedcb)
```



----

## Introduction of Luat

<!-- Lua脚本是内嵌在模块基础软件core中运行的（core编译生成的文件是.lod文件），Lod中有支持Lua运行的环境，Lua脚本就在这个环境中运行。脚本实现功能是通过API（对AT命令进行了封装）实现的。

在模块内部，Lua发出AT命令，并通过虚拟的uart.ATC 口和Lod之间进行AT命令的交互。即Lua发出AT命令，Lod接收后进行解析并返回AT命令运行结果，不需要上位机（一般是单片机）通过物理串口给模块发AT命令，这样就节省了单片机的花费。 -->

The Lua script is embedded in the core which is the basic module software (the core compiled file is a .lod file). Lod has an environment that supports Lua running and the Lua script runs in this environment. The script implementation functionality is realized through the API (which encapsulates the AT commands).

Inside the module, Lua issues an AT command and interacts with the AT command through the virtual uart.ATC port and Lod. That is, Lua issues an AT command. After Lod receives the parsing and returns the result of the AT command, the host computer (usually a single-chip microcomputer) does not need to send an AT command to the module through the physical serial port, thus saving the cost of the single-chip microcomputer.


![coreLua](img/coreLua.jpg)



---

## Terminology Explanation

下载[github](https://github.com/openLuat/Luat_2G_RDA_8955)上的Luat开发包。开发包的目录为下：
Download Luat SDK from [github](https://github.com/openLuat/Luat_2G_RDA_8955). The directory of the SDK is:

```
├── core

	└──Luat_VXXXX_8955.lod：does not support LCD function of SSL, TTS, or SPI
	768KB available for Luat script and resource(files burned with burner, like lua script, mp3 files)
	860KB available for file system(like argument files, recording files, and remote upgrate files created while the script is running)

	└──Luat_VXXXX_8955_SSL.lod：supports SSL
	768KB available for LuaDB script and resources(files burned with burner, like lua script, mpe3 files)
	796KB available for file system(like argument files, recording files, and remote update files created while the script is running)

	└──Luat_VXXXX_8955_SSL_TTS.lod：supports SSL and TTS, does not MP3, MIDI, or recording
	324KB available for LuaDB script and resources(files burned with burner, like lua script, mpe3 files)
	344KB available for file system(like argument files, recording files, and remote update files created while the script is running)
	

	└──Luat_VXXXX_8955_SSL_UI.lod：supports LCD function with interface of SSL and SPI
	704KB available for LuaDB script and resources(files burned with burner, like lua script, mpe3 files)
	540KB available for file system(like argument files, recording files, and remote update files created while the script is running)

	└──Luat_VXXXX_8955_TTS_UI.lod：supports LCD function with interface of TTS and SPI
	152KB available for LuaDB script and resources(files burned with burner, like lua script, mpe3 files)
	132KB available for file system(like argument files, recording files, and remote update files created while the script is running)

	└──Luat_VXXXX_8955_TTS1.lod：supports TTS function
	216KB available for LuaDB script and resources(files burned with burner, like lua script, mpe3 files)
	260KB available for file system(like argument files, recording files, and remote update files created while the script is running)
	
	└──Luat_VXXXX_8955_UI.lod：supports LCD function with SPI interface
	512KB available for LuaDB script and resources(files burned with burner, like lua script, mpe3 files)
	796KB available for file system(like argument files, recording files, and remote update files created while the script is running)
	
	└──Luat_VXXXX_8955_SSL_FLOAT.lod：support SSL,float number
	
	└──Luat_VXXXX_8955_SSL_UI_FLOAT.lod：support SSL, LCD with PI interface, and float number
	
	└──Luat_VXXXX_8955F.lod：64M flash version(Air202F), support LCD function with SSL、TTS、SPI interface
	

├── script_LuaTask Lua-based coroutines implement multi-threaded support

	└── demo
	└── lib
	└── product/LuatBoard_Air202  LuatBoard

```


The underlying software (also known as the underlying software, located at /core) is developed in C language to support the operation of Lua.

"Library script" in the lib directory (all projects should be used),

User-written "application scripts" (such as scripts in the demo directory)


## LuaTools

Use the Luat debug development tool to download lod and script for the module. The tool functions as follows:

Encrypt lod function;

Download the official lod bottom layer;

Download the Lua script for secondary development;

Use the App to verify that the development board is good;

Output analysis of the module print trace;

Generate mass production files for remote upgrade/mass production.

**This took does not support code editing, if you want to edit the code, you need to download other editor liek sublime text 3, vscode, notepad++ etc.**

[User guide](http://wiki.openluat.com/doc/tools/)

[Download](http://wiki.openluat.com/doc/tools/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>