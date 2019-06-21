
# Luat API interface

There are 3 kinds of API in Luat: the first one is implemented directly using Lua, it is under lib directory and visible to developers, the second one is implemented using C language, it is under lod directiry and invisible to developers. We name the former API and the latter extended API, these two libraries are used by Luat only. The third one is Lua standard library which comes with Lua language and can be used by all Lua language.

## aLiYun

The current product node type only supports "device", and the device authentication mode supports "one machine, one key" and "one type, one key" only.

### aLiYun.setup()

Configure product information and device information for the Alibaba Cloud IoT Suite

* Syntax

  `aLiYun.setup(productKey[, productSecret=nil], getDeviceNameFnc, getDeviceSecretFnc[, setDeviceSecretFnc=nil])`

* Arguments

  | Argument           | Description                                                 |
  | ------------------ | ------------------------------------------------------------ |
  | productKey         | String, Product Identification                                             |
  | productSecret      | String, optional, default value： nil.<br>product key<br>when use one-machine-one secret, the parameter will be nil<br>, when use one-type-one-secret, the parameter will be the actual product password |
  | getDeviceNameFnc   | function which can obtain the name of device                        |
  | getDeviceSecretFnc | function which can obtain the secret of device                      |
  | setDeviceSecretFnc | function, the argument is option, the default is nil. Only when using one-type-one-secret authentication scheme, the argument is needed to set the key |

* Return Value

  None

* Example

```lua
aLiYun.setup("b0FMK1Ga5cp",nil,getDeviceNameFnc,getDeviceSecretFnc)
aLiYun.setup("a1AoVqkCIbG","7eCdPyR6fYPntFcM",getDeviceNameFnc,getDeviceSecretFnc,setDeviceSecretFnc)

```

-----

### aLiYun.setMqtt()

Set the parameters of the MQTT data channel.

* Syntax

  `aLiYun.setMqtt([cleanSession=1][, will=nil][, keepAlive=240])`

* Arguments

  | Argument     | Description                                  |
  | ------------ | -------------------------------------- |
  | cleanSession | number, the argument is optional, the default is 1. 1/0 |
  | will         | table, the argument is optional, the default is 240.    |
  | keepAlive    | number, the argument is optional, the default is 240.   |

* Return Value

  nil

* Example

```lua
aLiYun.setMqtt(0)
aLiYun.setMqtt(1,{qos=0,retain=1,topic="/willTopic",payload="will payload"})
aLiYun.setMqtt(1,{qos=0,retain=1,topic="/willTopic",payload="will payload"},120)
```

----

### aLiYun.subscribe()

Subscribe Topic

* Syntax

  `aLiYun.subscribe(topic, qos)`

* Arguments

  | Argument | Description                                                        |
  | ----- | ------------------------------------------------------------ |
  | topic | type string or table, type string when only one topic, type table when multiple topic, the content is UTF8 encoded |
  | qos   | type number or nil, when topic is one topic, qos is type number(0/1/2, default 0); when there are multiple topics, qos is nil |

* Return Value

  nil

* Example

```lua
aLiYun.subscribe("/b0FMK1Ga5cp/862991234567890/get", 0)
aLiYun.subscribe({["/b0FMK1Ga5cp/862991234567890/get"] = 0, ["/b0FMK1Ga5cp/862991234567890/get"] = 1})
```

-----

### aLiYun.publish()

post a message

* Syntax

  `aLiYun.publish(topic, payload[, qos=0][, cbFnc=nil][, cbPara=nil])`

* Arguments

  | Argument  | Description                                                        |
  | ------- | ------------------------------------------------------------ |
  | topic   | String, topic encoded with UTF8                                   |
  | payload | String, data pack                                             |
  | qos     | number, the argument is optional, default: 0. quality level, 0/1/2。          |
  | cbFnc   | function, the argument si optional, default: 0.<br>callback function when the message is posted. The form of the callback function is cbFnc(result,cbPara). If result is true, publishing succeeded. If result is false or nil means subcription failed; cbPara is the fifth argument in the interface |
  | cbPara  | the argumet is optional, default: nil. Callback function when the message is published. |

* Return Value

  nil

* Example

```lua
aLiYun.publish("/b0FMK1Ga5cp/862991234567890/update","test",0)
aLiYun.publish("/b0FMK1Ga5cp/862991234567890/update","test",1,cbFnc,"cbFncPara")
```

-----

### aLiYun.on()

Register event handler


* Syntax

  `aLiYun.on(evt, cbFnc)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | evt   | String, event <br>"connect" indicates the result of the connection <br>"receive" indicates that a message event was received |
  | cbFnc | function, event handler <br>when evt is "connect", callback format of cbFnc is: cbFnc(result),result being true means connected successfully, being false or nil means connection failed.<br>when evt is "receive", callback format of cbFnc is: cbFnc(topic,qos,payload), topic is encoded in UTF8(type string),qos is quality level(type number), payload is the load for the original encoding(type string) |

* Return Value

  nil

* Example

```lua
aLiYun.on("b0FMK1Ga5cp",nil,getDeviceNameFnc,getDeviceSecretFnc)
```

----

## aLiYunOta

Alibaba Cloud IoT Suite client OTA function, the current firmware signature algorithm only supports MD5.

### aLiYun.setVer()

Set the current firmware version number.

* Syntax

  `aLiYun.setVer(version)`

* Argument

  | Argument    | Description                   |
  | ------- | ---------------------- |
  | version | String, current firmware version number |

* Return Value

  nil

* Example

```lua
aLiYunOta.setVer("MCU_VERSION_1.0.0")
```

----

### aLiYun.setName()

Set the file name saved by the new firmware.

* Syntax

  `aLiYun.setName(name)`

* Syntax

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | name | String, filename saved when new firmware is downloaded; note that the file name is not the complete directory, the complete directory can be obtained with callback function ser by setCb |

* Return Value

  nil

* Example

```lua
aLiYunOta.setName("MCU_FIRMWARE.bin")
```

----

### aLiYun.setCb()

Set the callback function after the new firmware download.

* Syntax

  `aLiYun.setCb(cbFnc)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | cbFnc | function, callback function when firmware is downloaded, the callback format is: cbFnc(result,filePath)，result is the outcome of download, true represent download successfully, false or nilmeans it failed. filePath is the complete directory saved by new firmware.|

* Return Value

  nil
  
----

## audio

Play audio.

support MP3  and amr file;
Support local TTS playback, TTS playback to the peer during the call (requires core software that supports TTS function)

**Note: 4G module does not have this function**

-----

### audio.play()

Plau audio.

* Syntax

  `audio.play(priority, type, path[, vol=4][, cbFnc=nil][, dup=nil][, dupInterval=0])`

* Argument

  | Argument        | Description                                                         |
  | ----------- | ------------------------------------------------------------ |
  | priority    | number, the priority of audio file, bigger the bumber, higher the priority        |
  | type        | string, type of audio, currently support "FILE", "TTS", "TTSCC","RECORD"  |
  | path        | string, directory of audio file, related to typ <br/>typ being "FILE" indicates the directory of audio file<br/> typ being "TTS" indicates the UTF8 encoded data going to be played <br/>  typ being "TTSCC" indicates the data to be played to the UTF8 encoding format of the opposite end of the call. |
  | vol         | number, the argument is optional, default: 4. Volume range from 0 to 7, 0 means muted |
  | cbFnc       | function, the argument is optional, default: nil. Callback function is called when audio play done, the format is: cbFnc(result). result show the outcome: <br/>0-play successfully ended;   <br/>1-play goes wrong    <br/>2-priority not high enough, not played yet <br/>3-the argument is wrong, not played   <br/>4-Suspended by new play request |
  | dup         | bool, the argument is optional,default: nil, Whether to loop: true-loop, false or nil-not loop |
  | dupInterval | number, the argument is optional, default: 0, Loop interval(unit:millisecond), this value is only valid when dup is true |

* Return Value

  result, type bool or nil. Return true is callback successful, else return nil.

* Example

```lua
audio.play(0,"FILE","/ldata/call.mp3")
audio.play(0,"FILE","/ldata/call.mp3",7)
audio.play(0,"FILE","/ldata/call.mp3",7,cbFnc)
```

---

### audio.setVolume()

Set the speaker volume level

* Syntax

  `audio.setVolume(vol)`

* Argument

  | Argument | Description                         |
  | ---- | ---------------------------- |
  | vol  | number, volume range from 0 t o7, 0 being muted |

* Return Value

  bool result, return true if set successful, else return false

---

### audio.setMicVolume()

Set the microphone volume level

* Syntax

  `audio.setMicVolume(vol)`

* Argument

  | Argument | Description                            |
  | ---- | ------------------------------- |
  | vol  | number, volume range from 0 to 15, 0 being muted|

* Return Value

  bool result, return true when set went successfully, return false when set failed.
---

### audio.setStrategy()

Set playing strategy when priority levels are the same.

* Syntax

  `audio.setStrategy(strategy)`

* Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | strategy | number, playing strategy when priority level are the same; <br/>0：continue playing what is played now, ignore new request to play; <br/>1：stop what's being played now, play new audio has sent the new request|

* Return Value

  nil
----

### audio.stop()

Stop playing

* Syntax

  `audio.stop()`

* Argument

  None

* Return Value

  nil

----


## cc

Call management 

**Note: 4G module does not have this function**

-----

### cc.anyCallExist()

Whether there is a call

* Syntax

  `cc.anyCallExist()`

* Argument

  None

* Return Value

  bool result return true if there is a call, else return false

----

### cc.getState()

Query the call status of a number

* Syntax

  `cc.getState(num)`

* Argument

  | Argument | Description             |
  | ---- | ---------------- |
  | num  | string, get the number |

* Return Value

  number state, call status, specific meaning refers to definition of Fields

* Example

```lua
state = cc.getState('10086')
```

---

### cc.dial()

Outgoing call

* Syntax

  `cc.dial(num[, delay=0])`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | num   | string=, outgoing call number                             |
  | delay | number, the argument is optional, default: 0, call after miliseconds of delay|

* Return Value

  bool result, true means to allow the at command to be dialed and send at, false means that the at command is not allowed to dial

---

### cc.hangUp()

Hang up the call

* Syntax

  `cc.hangUp(num)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | num  | string, number, if the specified number is not in the right state, it will exit without hang up. If it hangs up, it will hang up all calls. |

* Return Value

  None

----

### cc.accept()

Answer the phone

* Syntax

  `cc.accept(num)`

* Argument

  | Argument | Description                                                        |
  | ---- | ----------------------------------------------------------- |
  | num  | string, number, if the specified number is not in the correct call state, it will exit directly and will not be connected. |

* Return Value

  None

----

### cc.transVoice()

Send the voice to the peer during the call, it must be 12.2K AMR format.

* Syntax

  `cc.transVoice(data[, loop=nil][, downLinkPlay=nil])`

* Argument

  | Argument         | Description                                                         |
  | ------------ | ------------------------------------------------------------ |
  | data         | string, 12.2K data in AMR format                                 |
  | loop         | bool, the argument is optional, default: nil, whether loop sending: true-yes, else-no|
  | downLinkPlay | bool, the argument is optional, default: nil, whether the sound is played on the local end, true is for playback, and the rest is not for playback. |

* Return Value

  bool result: true means succeeded, false means failed

* Example

```lua
cc.transVoice("#!AMR\010\060*********")
cc.transVoice("#!AMR\010\060*********",true)
cc.transVoice("#!AMR\010\060*********",true,true)
```

----

### cc.dtmfDetect()

Set dtmf detection to enable and sensitivity

* Syntax

  `cc.dtmfDetect([enable=nil][, sens=3])`

* Argument

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | enable | bool, the argument is optional, default: nil, true means enabled, false and nil means not enabled   |
  | sens   | number, the argument is optional, default: 3. Sensitivity, 1 represent the most sensitive.   |

* Return Value

  nil

-----

### cc.sendDtmf()

Send dtmf to the peer

* Syntax

  `cc.sendDtmf(str[, playtime=100][, intvl=100])`

* Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | str      | string, dtmf string, support numbers, ABCD*# only           |
  | playtime | number, the argument is optional, default: 100, the play time of every dtmf, unit as milisecond |
  | intvl    | number, the argument is optional, default: 100, interval between twoo dtmf, unit as milisecond |

* Return Value

  nil

-----

## common

General library functions, encoding format conversion, time zone time conversion

-----

### common.ucs2ToAscii()

General library functions, encoding format conversion, time zone time conversion


* Syntax

  `common.ucs2ToAscii(inNum)`

* Argument

  | Argument  | Description                   |
  | ----- | ---------------------- |
  | inNum | string, string needed to be converted |

* Return Value

  string data, string converted

* Example

```lua
local data = common.ucs2ToAscii("0031003200330034")
--data is "1234"
```

---

### common.nstrToUcs2Hex()

Ascii string converted to ascii string unicode encoded hex string(only numbers and + are supported)

* Syntax

  `common.nstrToUcs2Hex(inNum)`

* Argument

  | Argument  | Description                   |
  | ----- | ---------------------- |
  | inNum | string, string needed to be converted|

* Return Value

  string data, converted string 

* Example

```lua
local data = common.nstrToUcs2Hex("+1234")
--data is "002B0031003200330034"
```

----

### common.numToBcdNum()

Convert ASCII string to BCD encoded format string (only numbers supported)

* Syntax

  `common.numToBcdNum(inStr, destLen)`

* Argument

  | Argument    | Description                                                    |
  | ------- | ------------------------------------------------------- |
  | inStr   | string, string needs to be converted           |
  | destLen | number, the expected length of converted string, if not enough, fill F|

* Return Value

  string data, converted string

* Example

```lua
local data = common.numToBcdNum("8618126324567")
--data is "688121364265f7" (means first byte is 0x68, sencond byte is 0x81,......)
```

----

### common.bcdNumToNum()

BCD encoded format string converted to number ASCII string (only numbers supported)

* Syntax

  `common.bcdNumToNum(num)`

* Argument

  | Argument | Description           |
  | ---- | ---------------------- |
  | num  | string, string needs to be converted  |

* Return Value

  string data, converted string

* Example

```lua
local data = common.bcdNumToNum(common.fromHex("688121364265f7")) --means first byte is 0x6, second byte is 0x81，......
--data is "8618126324567"
```

-----

### common.ucs2ToGb2312()

Unicode small endian encoding converted to gb2312 encoding.


* Syntax

  `common.ucs2ToGb2312(ucs2s)`

* Argument

  | Argument  | Description                          |
  | ----- | ----------------------------- |
  | ucs2s | string, unicode small endian encoded data |

* Return Value

  string data, Gb2312 encoded data

* Example

```lua
local data = common.ucs2ToGb2312(ucs2s)
```

------

### common.gb2312ToUcs2()

Gb2312 encoding converted to unicode little endian encoding.

* Syntax

  `common.gb2312ToUcs2(gb2312s)`

* Argument

  | Argument    | Description                     |
  | ------- | ------------------------ |
  | gb2312s | string, Gb2312 encoded data |

* Return Value

  string data, unicode small endian encoded data

* Example

```lua
local data = common.gb2312ToUcs2(gb2312s)
```

------

### common.ucs2beToGb2312()

unicode big endian encoding converted to gb2312 encoding

* Syntax

  `common.ucs2beToGb2312(ucs2s)`

* Argument

  | Argument  | Description                          |
  | ----- | ----------------------------- |
  | ucs2s | string, unicode big endian encoded data |

* Return Value

  string data, gb2312 encoded data

* Example

```lua
local data = common.ucs2beToGb2312(ucs2s)
```

-----

### common.gb2312ToUcs2be()

gb2312 encoding converted to unicode big endian encoding

* Syntax

  `common.gb2312ToUcs2be(gb2312s)`

* Argument

  | Argument    | Description                     |
  | ------- | ------------------------ |
  | gb2312s | string, gb2312 encoded data |

* Return Value

  string data, unicode big endian encoded data

* Example

```lua
local data = common.gb2312ToUcs2be(gb2312s)
```

------

### common.ucs2ToUtf8()

unicode small endian encoding converted to utf8 encoding

* Syntax

  `common.ucs2ToUtf8(ucs2s)`

* Argument

  | Argument  | Description               |
  | ----- | ----------------------------- |
  | ucs2s | string, unicode small endian encoded data |

* Return Value

  string data, utf8 encoded data

------

### common.utf8ToUcs2()

utf8 encoding converted to unicode little endian encoding

* Syntax

  `common.utf8ToUcs2(utf8s) `

* Argument

  | Argument  | Description                   |
  | ----- | ---------------------- |
  | utf8s | string， utf8 encoded data |

* Return Value

  string data, unicode small endian encoded data

------

### common.ucs2beToUtf8()

unicode big endian encoding converted to utf8 encoding

* Syntax

  `common.ucs2beToUtf8(ucs2s)`

* Argument

  | Argument  | Description                          |
  | ----- | ----------------------------- |
  | ucs2s | string, unicode big endian encode data|

* Return Value

  string data, utf8 encoded data

-----

### common.utf8ToUcs2be()

utf8 encoding converted to unicode big endian encoding

* Syntax

  `common.utf8ToUcs2be(utf8s)`

* Argument

  | Argument  | Description                   |
  | ----- | ---------------------- |
  | utf8s | string, utf8 encoded data |

* Return Value

  string data, unicode big endian encoded data

----

### common.utf8ToGb2312()

utf8 encoding converted to gb2312 encoding

* Syntax

  `common.utf8ToGb2312(utf8s)`

* Argument

  | Argument  | Description         |
  | ----- | ---------------------- |
  | utf8s | string, utf8 encoded data |

* Return Value

  string data, gb2312 encoded data

------

### common.gb2312ToUtf8()

gb2312 encoding converted to utf8 encoding

* Syntax

  `common.gb2312ToUtf8(gb2312s)`

* Argument

  | Argument    | Description                     |
  | ------- | ------------------------ |
  | gb2312s | string, gb2312 encoded data|

* Return Value

  string data, utf8 encoded data

-----

### common.timeZoneConvert()

Time zone time conversion

* Syntax

  `common.timeZoneConvert(y, m, d, hh, mm, ss, srcTimeZone, dstTimeZone)`

* Argument

  | Argument        | Description               |
  | ----------- | ------------------ |
  | y           | number, source time zone year |
  | m           | number, source time zone month |
  | d           | number, source time zone date  |
  | hh          | number, source time zone hour  |
  | mm          | number, source time zone minute   |
  | ss          | number, source time zone second|
  | srcTimeZone | number, souce time zone |
  | dstTimeZone | number, destination time zone   |

* Return Value

  table dstZoneTime, Returns the time corresponding to the destination time zone, {year,month,day,hour,min,sec}

* Example

```lua
local dstZoneTime = common.timeZoneConvert(2018,1,1,18,00,00,0,8)
--dstZoneTime为{year=2018,month=1,day=2,hour=2,min=0,sec=0}
```

-----
## console

Luat console

------

### console.setup()

Configure the serial port argument used by the console to create a console coroutine.

* Syntax

  `console.setup(id[, baudrate=115200]) `

* Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | id       | number, serial port ID used by the console: 1 means serial port 1, 2 means serial port 2  |
  | baudrate | number, the argument is optional, default: 115200. Serial port baud rate used by the console supports 1200,2400,4800,9600,10400，14400,19200,28800,38400,57600,76800,115200,230400,460800,576000,921600,1152000,4000000 |

* Return Value

  nil

-----

## clib

Improve luat's c library interface.

----

### uart.on()

Register the processing function of the serial port event.

* Syntax

  `uart.on(id, event[, callback=nil])`

* Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | id       | number, ID of serial port: 1 represents serial port 1, 2 represents serial port 2, uart.ATC represents a virtual AT port |
  | event    | string. <br/>Serial port event: "recieve" means serial port receives the message. <br/>Caution：When use uart.setup to set the serial port, the sixth argument should be nil or 0, only when data is received, "receive" event will occur. <br/>"sent" means serial port data tranmission finished. Caution: when use uart.setup to set up serial port, the seventh argument should be 1, the "sent" event is generated after the data is sent by calling the uart.write interface. |
  | callback | function, Serial event handler              |

* Return Value

  nil

* Example

```lua
uart.on(1,"receive",rcvFnc)
uart.on(1,"sent",sentFnc)
```

---

## errDump

System error log management (users are strongly recommended to enable the "error log escalation server" function of this module). <br/>

The error log includes three types:<br/>
 1. Error log when the system main task runs.
    Such errors can cause the software to restart, and the error log is saved in the /luaerrinfo.txt file.
 2. Call the error log during the running of the coroutine created by sys.taskInit.
    Such an error will terminate the running of the current coroutine, but will not cause the software to restart. The error log is saved in /lib_err.txt.
 3. Call the error log saved by errDump.appendErr or sys.restart interface.
    This type of error log is saved in /lib_err.txt

The error log saved in 2 and 3 supports up to 5K bytes.
The saved log will be cleared each time the error log is reported to the debug server.

-----

### errDump.appendErr()

Append error message to LIB_ERR_FILE file (file can store up to 5K bytes of data)

* Syntax

  `errDump.appendErr(s)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | s    | string, user-defined error message, the errDump function module will handle this error message as follows: <br/>1. after the restart will download the debugging tool output through Luat, search for errDump.libErr in the trace, you can search for the error message <br/> 2. If the user calls the errDump.request interface to set the debug server address and port to be reported by the error message, the error message will be automatically reported to the debug server each time the restart is performed. <br/> 3. If the user calls the errDump.request interface to set the timed report, the error message will be reported to the debug server when the report is sent periodically. The second and third cases will automatically clear the error message after the report is successful. |

* Return Value

  bool result, true means success, false or nil means failure

* Example

```lua
errDump.appendErr("net working timeout!")
```

----

### errDump.request()

Configure the debugging server address and start the function of reporting the error information to the debugging server. After the report is successful, the error message will be cleared.

* Syntax

  `errDump.request(addr[, period=600000)`

* Argument

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | addr   | string. <br/>1. If the debugging server uses the http protocol, the terminal will use the POST command to report the error information to the URL specified by addr. The format of addr is as follows (except for protocol and hostname, the rest of the fields are optional; the current implementation does not support hash). <br/>2. If the debugging server uses the udp protocol, the terminal reports the error information directly to the debugging server. After receiving the information, the debugging server must reply to the uppercase OK.<br/>3. If the debugging server uses the tcp protocol, the terminal directly reports the error information to the debugging server. |
  | period | number, this argument is optional. The default value is 600000. Unit millisecond, interval check error message and reported interval|

* Return Value

  bool result, success returns true, failure returns nil

* Example

```lua
errDump.request("http://www.user_server.com/errdump")
errDump.request("udp://www.user_server.com:8081")
errDump.request("tcp://www.user_server.com:8082")
errDump.request("tcp://www.user_server.com:8082",6*3600*1000)
```

-----

## gps

GPS module management

----

### gps.open()


Open a "GPS app"<br/>

 "GPS application": refers to an application that uses the GPS function<br/>
 For example, suppose there are three kinds of requirements. To turn on GPS, there are three "GPS applications":<br/>
 "GPS Application 1": Open GPS every 1 minute<br/>
 "GPS Application 2": Turn on the GPS when the device vibrates.<br/>
 "GPS Application 3": Turn on GPS when a special message is received.<br/>
 Only when all "GPS applications" are turned off will the GPS be turned off.<br/>
 When each GPS application turns GPS on or off, there are up to 4 Arguments, where the GPS application mode and the GPS application tag together determine a unique "GPS application":<br/>
 1. GPS application mode (required)<br/>
 2. GPS application mark (required)<br/>
 3. GPS open maximum time [optional]<br/>
 4. callback function [optional]<br/>

* Syntax

  `gps.open(mode, para)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | mode | number, GPS application mode, supports gps.DEFAULT, gps.TIMERORSUC, gps.TIMER |
  | para | type table, arguments for GPS <br/>para.tag：type string, GPS application tag <br/>para.val：type number, GPS application open maximum duration, only when mode argument is gps.TIMERORSUC or gps.TIMER, this value is valid   <br/>Para.cb: callback function at the end of the GPS application. The callback function is called para.cb(para.tag) |

* Return Value

  nil

* Example

```lua
gps.open(gps.DEFAULT,{tag="TEST1",cb=test1Cb})
gps.open(gps.TIMERORSUC,{tag="TEST2",val=60,cb=test2Cb})
gps.open(gps.TIMER,{tag="TEST3",val=120,cb=test3Cb})
```

---

### gps.close()

Close a "GPS app"
Just logically shutting down a GPS app doesn't necessarily turn off the GPS. It's all the GPS apps are off, only to go back and actually turn off the GPS.


* Syntax

  `gps.close(mode, para)`

* Argument

  | Argument | Description                                              |
  | ---- | ------------------------------------------------------------ |
  | mode | number, GPS application mode, supports gps.DEFAULT，gps.TIMERORSUC，gps.TIMER |
  | para | type table, GPS application argument<br/>para.tag：type string, GPS application tag<br/>para.val：type number, GPS application maximum operation duration, only when mode argument is gps.TIMERORSUCor gps.TIMER, the value is valid; when using close interface, not need to pass in this argument<br/>para.cb：The callback function at the end of the GPS application, the callback function is called para.cb(para.tag); when using the close interface, you do not need to pass this argument |

* Return Value

  nil

* Example

```lua
--The GPS application mode and the GPS application tag uniquely identify a "GPS application". When the interface is closed, the mode and para.tag are consistent with the incoming mode and para.tag when gps.open opens a "GPS application".

gps.close(gps.DEFAULT,{tag="TEST1"})
gps.close(gps.TIMERORSUC,{tag="TEST2"})
gps.close(gps.TIMER,{tag="TEST3"})
```

------

### gps.closeAll()

close all GPS application

* Syntax

  `gps.closeAll()`

* Argument

  None

* Return Value

  None

-----

### gps.isActive()

Determine if a "GPS application" is active

* Syntax

  `gps.isActive(mode, para)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | mode | number, GPS application mode, support gps.DEFAULT, gps.TIMERORSUC, and gps.TIMER |
  | para | type table, GPS application argument<br/>para.tag：type string, GPS application tag <br/>para.val：type number, GPS application maximum operation duration, only when mode argument is gps.TIMERORSUC or gps.TIMER, the value has a meaning; when using isActive interface, no need to pass in the argument<br/>para.cb：The callback function at the end of the GPS application, the callback function is called para.cb(para.tag); when using the isActive interface, you do not need to pass this Argument |

* Return Value

  bool result, returns true if it is active, otherwise returns nil

* Example

```lua
--The GPS application mode and the GPS application tag uniquely identify a "GPS application". When calling this interface to query the status, the mode and para.tag should be consistent with the incoming mode and para.tag when gps.open opens a "GPS application".
gps.isActive(gps.DEFAULT,{tag="TEST1"})
gps.isActive(gps.TIMERORSUC,{tag="TEST2"})
gps.isActive(gps.TIMER,{tag="TEST3"})
```



---

### gps.setPowerCbFnc()

Set the callback function of the GPS module power supply control<br/>
If you are using the Air800, or if the power control is using LDO_VCAM, you do not need to call this interface to set up before turning on the GPS application.
Otherwise, before calling gps.open, use this interface, pass the custom power control function cbFnc, gps.lua automatically executes cbFnc(true) when GPS is turned on, gps.lua automatically executes cbFnc(false) when GPS is off.

* Syntax

  `gps.setPowerCbFnc(cbFnc)`

* Argument

  | Argument  | Description                                      |
  | ----- | ----------------------------------------- |
  | cbFnc | type function, user-defined GPS power control function |

* Return Value

  nil

---

### gps.setUart()

Serial port argument for setting data communication between GPS module and GSM module<br/>
 If you are using Air800, or use UART2 (baud rate 115200, data bit 8, no check digit, stop bit 1), you do not need to call this interface to set up before turning on the GPS application.
 Otherwise, before using gps.open, use this interface to pass in UART argument

* Syntax

  `gps.setUart(id, baudrate, databits, parity, stopbits)`

* Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | id       | number, UART ID, support 1 and 2, 1 represents UART1, 2 represents UART2   |
  | baudrate | number, baud rate, support 1200, 2400, 4800, 9600, 10400, 14400, 19200, 28800, 38400, 57600, 76800, 115200, 230400, 460800, 576000, 921600, 1152000, and 4000000 |
  | databits | number, digital bits, supports 7 and 8       |
  | parity   | number, check digit, support uart.PAR_NONE, uart.PAR_EVEN, and uart.PAR_ODD |
  | stopbits | number, stop bit, support uart.STOP_1 and uart.STOP_2           |

* Return Value

```lua
gps.setUart(2,115200,8,uart.PAR_NONE,uart.STOP_1)
```

----

### gps.setAerialMode()

Set the GPS module search star mode.
If you are using Air800 or Air530, not calling this interface configuration, then GPS is turned on and Beidou positioning by default.

* Syntax

  `gps.setAerialMode(gps, beidou, glonass, galieo)`

* Argument

  | Argument    | Description                                             |
  | ------- | ------------------------------------------------ |
  | gps     | number, GPS positioning system, 1 is open, 0 is off     |
  | beidou  | number, China Beidou Positioning System, 1 is open, 0 is off   |
  | glonass | number, China Beidou Positioning System, 1 is open, 0 is off |
  | galieo  | number, EU Galileo Positioning System, 1 is open, 0 is off  |

* Return Value

  nil

---

### gps.setNmeaMode()

Set the NMEA data processing mode.
 If this interface configuration is not called, the default is only gps.lua internally processing NMEA data.

* Syntax

  `gps.setNmeaMode(mode, cbFnc)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | mode  | number, NMEA data processing mode, 0 means only gps.lua internal processing, 1 means that only the user handles it, 2 means gps.lua and the user simultaneously handles |
  | cbFnc | type function, The user processes a callback function for NMEA data. This value is meaningful when mode is 1 and 2. |

* Return Value

  nil

----

### gps.setRunMode()

Set the operating mode of the GPS module.
 If this interface configuration is not called, the default is normal operation mode.

* Syntax

  `gps.setRunMode(mode, runTm, sleepTm)`

* Argument

  | Argument    | Description                                                         |
  | ------- | ------------------------------------------------------------ |
  | mode    | number, running mode. <br/>0：Normal operation mode  <br/>1：Cycle ultra low power tracking mode  <br/>2：Cycle low power mode  <br/>4：Direct access to ultra low power tracking mode  <br/>8：Automatic low power mode, can wake up through the serial port  <br/>9：Automatic ultra low power tracking mode, requires force on to wake up |
  | runTm   | number, unit as milisecond, When mode is 0, it indicates the reporting interval of NMEA data. When mode is 1 or 2, it indicates the running time. For other modes, this value is meaningless. |
  | sleepTm | number, unit as milisecond, When mode is 1 or 2, it means the running time. When the mode is the same, this value is meaningless. |

* Return Value

  nil

----

### gps.isOpen()

Get the on/off status off GPS module.

* Syntax

  `gps.isOpen()`

* Argument

  None.

* Return Value

  bool result, true means open state, false or nil means closed state

-----

### gps.isFix()

Get whether is the GPS module successfully positioned.

* Syntax

  `gps.isFix()`

* Argument

  None

* Return Value

  bool result, true means the positioning is successful, false or nil means the positioning failed.

-----

### gps.getLocation()

Longitude and latitude information of the degree format.

* Syntax

  `gps.getLocation([typ=nil])`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | typ  | string, this argument is optional. The default value is: nil. The latitude and longitude format returned, when typ is "DEGREE_MINUTE", it means returning the degree format, and the rest is the return degree format.|

* Return Value

   table location<br>For example, when is typ "DEGREE_MINUTE", return {lngType="E",lng="12128.44954",latType="N",lat="3114.50931"}<br> When typ is not "DEGREE_MINUTE", return {lngType="E",lng="121.123456",latType="N",lat="31.123456"}<br>lngType：type string, indicates the longitude type, taking the value "E", "W"<br>lng：type string, indicates the longitude value of the degree format, when invalid is ""<br>latType：type string, indicates the latitude type, which takes the value "N" and "S"<br>lat：type string, The latitude value of the degree format, when invalid is""<br>

------

### gps.getAltitude()

Get altitude

* Syntax

  `gps.getAltitude()`

* Argument

  None

* Return Value

  number altitude, altitude, unit as meter

----

### gps.getSpeed()

Get speed

* Syntax

  `gps.getSpeed()`

* Argument

  None

* Return Value

  number kmSpeed, the first return value is the speed per hour<br/>

  number nmSpeed, the second return value is the speed per hour in nautical mile

----

### gps.getOrgSpeed()

Get the original speed, string with floating point

* Syntax

  `gps.getOrgSpeed()`

* Argument

  None

* Return Value

  number speed nautical miles per hour

--------

### gps.getCourse()

Get the direction angle

* Syntax

  `gps.getCourse()`

* Argument

  None

* Return Value

  number course, direction angle

----

### gps.getViewedSateCnt()

Get the number of visible satellites

* Syntax

  `gps.getViewedSateCnt()`

* Argument

  None

* Return Value

  number count, number of satellites visible

-----

### gps.getUsedSateCnt()

Get the number of satellites used for targeting

* Syntax

  `gps.getUsedSateCnt()`

* Argument

  None

* Return Value

  number count, number of satellites used for positioning

----

### gps.getGgaloc()

Get the latitude and longitude information of the degree format in the GGA statement

* Syntax

  `gps.getGgaloc()`

* Argument

  None

* Return Value

  string lng, the longitude value of the degree format (ddmm.mmmm), the west will add a - prefix, if it is invalid, it is ""; for example, "12112.3456" means 121 degrees 12.3456 minutes, "-12112.3456" means 121 degrees 12.3456 minutes.<br/>

  string lat, the latitude value of the degree format (ddmm.mmmm), the south latitude will add a - prefix, if it is invalid, it is ""; for example, "3112.3456" means latitude 31 degrees 12.3456 minutes, "-3112.3456" means south latitude 31 degrees 12.3456 points

----

### gps.getUtcTime()

Get UTC time in RMC statement<br/>
Return Value is valid only if both of the following conditions are met at the same time.
1. GPS is turned on and the positioning is successful.
2. call the setParseItem interface, the first argument is set to true

* Syntax

  `gps.getUtcTime()`

* Argument

  None

* Return Value

  table utcTime, UTC time, nil means invalid, for example {year=2018,month=4,day=24,hour=11,min=52,sec=10}

----

### gps.getSep()

Get the height of the land used for positioning

* Syntax

  `gps.getSep()`

* Argument

  None

* Return Value

  number sep, the height of the land

----

### gps.getSateSn()

Get the visible satellite number in the GSA statement<br/>
Return Value is valid only if both of the following conditions are met at the same time.
1. GPS is turned on and the positioning is successful.
2. call the setParseItem interface, the third argument is set to true

* Syntax

  `gps.getSateSn()`

* Argument

  None

* Return Value

  string viewedSateId, available satellite number, "" means invalid

-----

### gps.getGsv()

Obtaining the signal-to-noise ratio of visible satellites in the GSV statement<br/>
Return Value is valid only if both of the following conditions are met at the same time.
1. GPS is turned on and the positioning is successful.
2. call the setParseItem interface, the second argument is set to true

* Syntax

  `gps.getGsv()`

* Argument

  None

* Return Value

  string gsv, signal-to-noise ratio

-----

### gps.setParseItem()

Set whether to parse the field

* Syntax

  `gps.setParseItem([utcTime=nil][, gsv=nil][, gsaId=nil])`

* Argument

  | Argument    | Description                                                         |
  | ------- | ------------------------------------------------------------ |
  | utcTime | bool, this argument is optional. The default value is: nil, whether to parse the UTC time in the RMC statement, true means parsing, false or nil means not parsing |
  | gsv     | bool, this argument is optional. The default value is: nil, whether to parse the GSV statement, true means parsing, false or nil means not parsing |
  | gsaId   | bool, this argument is optional. The default value is: nil, whether to resolve the satellite ID in the GSA statement, true means parsing, false or nil does not parse |

* Return Value

  None

-----

### Fields

| Argument       | Description                                              |
| ---------- | ------------------------------------------------------------ |
| DEFAULT    | GPS application mode 1.<br/>After the GPS is turned on, if the GPS positioning is successful, if there is a callback function, the callback function will be called. To use this application mode to call the "GPS application" opened by gps.open, you must call gps.close or gps.closeAll to close this "GPS application". When the system is actively closed, the callback function will not be called even if there is a callback function. |
| TIMERORSUC | GPS application mode 2。<br/>After turning on the GPS, if the maximum time of GPS on is reached, no positioning is successful. If there is a callback function, the callback function will be called, and then the "GPS application" will be automatically closed. After turning on the GPS, if the GPS is enabled for the maximum duration, the positioning is successful. If there is a callback function, the callback function will be called, and then the GPS application will be automatically closed. After turning on the GPS, you can call gps.close or gps.closeAll to close this "GPS application" actively before automatically closing this "GPS application". When the system is actively closed, the callback function will not be called even if there is a callback function. |
| TIMER      | GPS application mode 3。<br/> After turning on the GPS, when the GPS is turned on for a long time, regardless of whether the positioning is successful or not, if there is a callback function, the callback function will be called, and then the "GPS application" will be automatically closed. After turning on the GPS, you can call gps.close or gps.closeAll to close this "GPS application" actively before automatically closing this "GPS application". When the system is actively closed, even if there is a callback function, the callback function will not be called.|

----

## gizwits

Wit Cloud IoT Suite Client Features

----

### gizwits.setup()

Initialize the data required for wit cloud registration

* Syntax

  `gizwits.setup(PRODUCT_KEY, PRODUCT_SECRET, getDeviceName, getDeviceSecret)`

* Argument

  | Argument            | Description                                      |
  | --------------- | ----------------------------------------- |
  | PRODUCT_KEY     | string, Product Key of Wit Cloud application  |
  | PRODUCT_SECRET  | string, Product Secret of Wit Cloud application|
  | getDeviceName   | function, get the mac address of the device       |
  | getDeviceSecret | function, get the passcode of the device       |

* Return Value

  nil

* Example

```lua
gizwits.setup("PRODUCT_KEY","PRODUCT_SECRET",getDeviceName,getDeviceSecret)
```

-----



### gizwits.publish()

  publish a message
 Manually write and send a mqtt message

* Syntax

  `gizwits.publish(topic, payload[, qos=0][, cbFnc=nil], cbPara)`

* Argument

  | Argument    | Description                                              |
  | ------- | ------------------------------------------------------------ |
  | topic   | string, topic UTF8 encoded                                   |
  | payload | string, load                                                 |
  | qos     | number, [argument optional, default value：0], quality level, 0/1/2, defaul value: 0   |
  | cbFnc   | function,[argument optional, default value：nil], callback function of message publishing  |
  | cbPara  | string, tag                                                  |

* Return Value

  nil

* Example

```lua
gizwits.publish(topic,msg,0)
gizwits.publish(topic,msgbody,0,{cb=cbFnc,para=cbPara})
```

-----

### gizwits.transmissionSend() 

Post a transparent message
 Send a message in the format of wit cloud ack

* Argument

  `gizwits.transmissionSend(flag, ccmd, sn, cmd, topic)`

* Argument

  | Argument  | Description               |
  | ----- | ----------------------------- |
  | flag  | number, flag in the communication protocal manual |
  | ccmd  | string, command word, ack returns to 0094 |
  | sn    | string, pacakge number        |
  | cmd   | string， bussiness instruction|
  | topic | string, topic encoded with UTF8  |

* Return Value

  nil

* Example

```lua
gizwits.transmissionSend(0,string.fromHex("0094"),string.fromHex("000000001"),"cmd","dev2app/12345/67890"))  --reply ack
```

---

### on()

register event handler

* Syntax

  `on(evt,cbFnc)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | evt   | string, event, "connect" represent connection event, "receive" represent receiving evert|
  | cbFnc | function, event handler  <br>when evt is "connect", the calling form of cbFnc is：cbFnc(result), result is true, the connection is successful, false or nil means the connection failed.<br> when evt is "receive", the calling form of cbFnc is：cbFnc(topic,qos,payload), topic is UTF8 encoded(type string), qos is quality level(type number), payload is the load of original code(type string)  <br>when evt为 is "transmissionRev", the calling form of cbFnc is：cbFnc(flag,ccmd,sn,cmd,topic), flag is a value of type number, ccmd is the command, sn is the package number, cmd is transparent message content, topic is UTF8 encoded topic(type string) |

* Return Value

  nil

* Example

```lua
gizwits.on("transmissionRev",rcvTransCbFnc)
```

-----


## http

HTTP client

----

### http.request()

send HTTP request

* Syntax

  `http.request(method, url[, cert=nil][, head=nil][, body=nil][, timeout=30000][, cbFnc=nil][, rcvFileName=nil])`

* Argument

  | Argument    | Description                                                  |
  | ----------- | ------------------------------------------------------------ |
  | method      | string, HTTP request method, support "GET", "HEAD", "POST", "OPTIONS", "PUT", "DELETE", "TRACE", "CONNECT" |
  | url         | string, HTTP requests url. url format(Except for hostname, the remaining fields are optional; the current implementation does not support hash) |
  | cert        | table, this a rgument is optional. The default value is: nil, table or nil type, ssl certificate. This argument is only valid when the url is of type https. The cert format is as follows:</br>  {    <br/>  caCert = "ca.crt", --CA certificate file (Base64 encoded X.509 format). If this argument exists, the client will check the server's certificate; if it does not exist, it will not be verified.      clientCert = "client.crt", --Client certificate file (Base64 encoded X.509 format), which is used by the server to verify the client's certificate.      clientKey = "client.key", --client key file(Base64 encoded X.509format)      clientPassword = "123456", --Client certificate file password [optional]  <br/>} |
  | head        | table, this argument is optional. The default value is: nil, nil or table type, custom request header</br> http.lua will automatically add Host: XXX, Connection: short, Content-Length: XXX three request headers<br /> If these three request headers do not meet the requirements, head argument passes the custom request header. If there are three request headers, Host, Connection, and Content-Length, in the custom request header, the same name request automatically added in http.lua will be overwritten. The header format is as follows: <br/>If there is no custom request header, pass nil or {}; otherwise pass {head1="value1", head2="value2", head3="value3"}, There can't be \r\n in value |
  | body        | This argument is optional. The default value is: nil, nil, string or table type, request entity. If the body is just a string of data, you can directly pass in a body of string type.<br/> If the body data is more complex, including string data and files, the data of the table type is passed in the following format: { <br/> [1] = "string1", <br/>[2] = {file="/ldata/test.jpg"}, <br/>[3] = "string2" <br/>} } <br/> For example, the above body, the index must be a continuous number (starting from 1). In actual transmission, the string "string1" is sent first, then the contents of the file /ldata/test.jpg are sent, and finally the string "string2" is sent. " |
  | timeout     | Number, this argument is optional. The default value is: 30000. The timeout period in which the receiving server returns the response data after the request is successfully sent, in milliseconds, the default is 30 seconds. |
  | cbFnc       | function, this argument is optional. The default value is: nil. <br/>The callback function for executing the HTTP request (the request transmission result and the response data reception result are notified to the user through this function), and the callback function is called in the form: <br/>cbFnc(result,prompt,head,body) <br />result: true or false, true means that the server received a successful response, false means that the request failed to send or the receiving server failed to respond. <br/>prompt: string type, result is true, the server's response code; result is false When the error message is indicated. <br/>head:table or nil type indicates the response header of the server; when the result is true, the argument is {head1="value1", head2="value2", head3="value3"}, Value does not contain \r\n; when result is false, this argument is nil. <br/>body:string type. If rcvFileName is passed in when the request interface is called, this argument indicates the full path of the downloaded file; otherwise, it indicates that it is received. Response entity data |
  | recFileName | String, this argument is optional. The default value is: nil. <br/>Save the file name of "Server Response Entity Data", you can pass in the complete file path, or you can pass in a separate file name. If it is a file name, http.lua will automatically generate a complete path, through cbFnc argumentbody outgoing |

* Return Value

  String rcvFilePath, if the rcvFileName is passed, the corresponding full path is returned; the rest returns nil
* Example

```lua
http.request("GET","www.lua.org",nil,nil,nil,30000,cbFnc)
http.request("GET","http://www.lua.org",nil,nil,nil,30000,cbFnc)
http.request("GET","http://www.lua.org:80",nil,nil,nil,30000,cbFnc,"download.bin")
http.request("GET","www.lua.org/about.html",nil,nil,nil,30000,cbFnc)
http.request("GET","www.lua.org:80/about.html",nil,nil,nil,30000,cbFnc)
http.request("GET","http://wiki.openluat.com/search.html?q=123",nil,nil,nil,30000,cbFnc)
http.request("POST","www.test.com/report.html",nil,{Head1="ValueData1"},"BodyData",30000,cbFnc)
http.request("POST","www.test.com/report.html",nil,{Head1="ValueData1",Head2="ValueData2"},{[1]="string1",[2] ={file="/ldata/test.jpg"},[3]="string2"},30000,cbFnc)
http.request("GET","https://www.baidu.com",{caCert="ca.crt"})
http.request("GET","https://www.baidu.com",{caCert="ca.crt",clientCert = "client.crt",clientKey = "client.key"})
http.request("GET","https://www.baidu.com",{caCert="ca.crt",clientCert = "client.crt",clientKey = "client.key",clientPassword = "123456"})
```

-----



## lbsLoc

Based on base station information, query latitude and longitude.

-----

### lbsLoc.request()

Send latitude and longitude request according to base station (only support location query in China)

* Syntax

  `lbsLoc.request(cbFnc[, reqAddr=nil][, timeout=20000][, productKey=nil][, host=nil][, port=nil][, reqTime=nil])`

* Argument

  | Argument       | Description                                                         |
  | ---------- | ------------------------------------------------------------ |
  | cbFnc      | function, user callback function, callback function call form: <br/>cbFnc (result, lat, lng, addr) <br/>result: number type, 0 means success, 1 means the network environment is not ready, 2 means connection The server fails, 3 means that the data is sent failed, 4 means that the receiving server responds with a timeout, 5 means that the server returns the query failed; when 0, the last 3 arguments only make sense <br/>lat: string type or nil, latitude, integer part 3 bits, 7 decimal places, for example "031.2425864" <br/>lng: string type or nil, longitude, integer part 3 bits, fractional part 7 bits, for example "121.4736522" <br/>addr: string type, UCS2 large The end-encoded position string. This argument is returned when the second argument passed in when lbsLoc.request is called is true. |
  | reqAddr    | bool, this argument is optional. The default value is: nil. Whether the server needs to return the address string information, true return, false or nil does not return |
  | timeout    | number, this argument is optional. The default value is 20000. Request timeout, in milliseconds, default 20000 milliseconds |
  | productKey | string, this argument is optional. The default value is: nil. The product certificate on the IOT website, this argument is optional. If the user defines the PRODUCT_KEY variable in main.lua, you do not need to pass in this argument. |
  | host       | string, this argument is optional. The default value is: nil. The server domain name, this argument is optional. Currently, only the agps.lua in lib uses this argument. No need to pass in this argument in the user script |
  | port       | string, this argument is optional. The default value is: nil. Server port, this argument is optional. Currently, only Args aggs.lua uses this argument. No need to pass in this argument in the user script |
  | reqTime    | bool, this argument is optional. The default value is: nil. Whether the server needs to return time information, true return, false or nil does not return, this argument is optional, currently only lib aggs.lua uses this argument. No need to pass in this argument in the user script |

* Return Value

  nil

* Example

```lua
lbsLoc.request(cbFnc)
lbsLoc.request(cbFnc,true)
lbsLoc.request(cbFnc,nil,20000)
```

----

## log

System logging, hierarchical logging tool 

---

### log.trace()

Output trace at the trace level

* Syntax

  `log.trace(tag,...)`

* Argument

  | Argument | Description                         |
  | ---- | ---------------------------- |
  | tag  | Module or feature name as a log prefix |
  | ...  | Log content, variable argument           |

* Return Value

  nil

* Example

```lua
log.trace('moduleA', 'log content')
```

---

### log.debug()

Output debug level logs

* Syntax

  `log.debug(tag,...)`

* Argument

  | Argument | Description                         |
  | ---- | ---------------------------- |
  | tag  | Module or feature name as a log prefix |
  | ...  | Log content, variable argument           |

* Return Value

  nil

-----

### log.info()

Output info level log

* Syntax

  `log.info(tag,...)`

* Argument

  | Argument | Description                         |
  | ---- | ---------------------------- |
  | tag  | Module or feature name as a log prefix |
  | ...  | Log content, variable argument           |

* Return Value

  nil

----

### log.warn()

Output warn level log

* Syntax

  `log.warn(tag,...)`

* Argument

  | Argument | Description                         |
  | ---- | ---------------------------- |
  | tag  | Module or feature name as a log prefix |
  | ...  | Log content, variable argument           |

* Return Value

  nil

------

### log.error()

Output error level log

* Syntax

  `log.error(tag,...)`

* Argument

  | Argument | Description                         |
  | ---- | ---------------------------- |
  | tag  | Module or feature name as a log prefix |
  | ...  | Log content, variable argument           |

* Return Value

  nil

------

### log.fatal()

Output the log at the fatal level

* Syntax

  `log.fatal(tag,...)`

* Argument

  | Argument | Description                         |
  | ---- | ---------------------------- |
  | tag  | Module or feature name as a log prefix |
  | ...  | Log content, variable argument           |

* Return Value

  nil

----

### log.openTrace()

Swith on/off the printout function of print

* Syntax

  `log.openTrace(v, uartid, baudrate)`

* Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | v        | Bool, false or nil is off, the rest is on                           |
  | uartid   | Output Luatrace port: nil means host port, 1 means uart1, 2 means uart2     |
  | baudrate | number, type number. If the uartid is not nil, the argument is meaningful, indicating the baud rate. The default is 115200.\  supports 1200, 2400, 4800, 9600, 10400, 14400, 19200, 28800, 38400, 57600, 76800, 115200, 230400, 460800, 576000, 921600, 1152000, 4000000 |

* Return Value

  nil

-----



## link

Module function: data link activation (create, connect, status maintenance)

----

## misc

Module function: configuration management - serial number, IMEI, underlying software version number, clock, calibration, flight mode, query battery power, etc.

----

### misc.getStatus()

Get the status of the sim card

* Syntax

  `misc.getStatus()`

* Argument

  None

* Return Value

  bool , true means that the sim card is working well, false or nil means that the card is not detected or the card is abnormal.<br/>
  After the boot lua script is run, the at command is sent to query the status, so it takes a certain amount of time to get the status. Call this interface immediately after booting, basically returning nil.
---

### misc.setClock()

Set system time

* Syntax

  `misc.setClock(t)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | t    | table, system time, format：{year=2017,month=2,day=14,hour=14,min=2,sec=58} |

* Return Value

  None

* Example

```lua
misc.setClock({year=2017,month=2,day=14,hour=14,min=2,sec=58})
```

---

### misc.getClock()

Get system time

* Syntax

  `misc.getClock()`

* Argument

  None

* Return Value

  table time,{year=2017,month=2,day=14,hour=14,min=19,sec=23}

----

### misc.getWeek()

Get week

* Syntax

  `misc.getWeek()`

* Argument

  None

* Return Value

  number week, 1-7 corresponds to Monday to Sunday respectively

----

### misc.getCalib()

Get calibration mark

* Syntax

  `misc.getCalib()`

* Argument

  None

* Return Value

  bool calib, true means calibrated, false or nil means not calibrated

------

### misc.setSn()

Set SN

* Syntax

  `misc.setSn(s,cbFnc)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | s     | string, new sn string                                   |
  | cbFnc | function, this argument is optional. The default value is: nil. Set the result callback function, the callback function is called: cnFnc(result), result is true to indicate success, false or nil indicates failure. |

* Return Value

  nil

----

### misc.getSn()

Get serial number of the module

* Syntax

  `misc.getSn()`

* Argument

  None

* Return Value

  string sn, serial number, if didn't get, return""<br/>

  Note: After the boot lua script runs, it will send an at command to query sn, so it takes a certain time to get sn. Call this interface immediately after booting, basically returning ""

-----

### misc.setImei()

Set IMEI

* Syntax

  `misc.setImei(s[, cbFnc=nil])`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | s     | string, new IMEI string                               |
  | cbFnc | function, this argument is optional, the default value is: nil. Set the result callback function, the callback function is called: cnFnc(result), result is true to indicate success, false or nil indicates failure. |

* Return Value

  None

---

### misc.getImei()

Get IMEI of the module

* Syntax

  `misc.getImei()`

* Argument

  None

* Return Value

  string, IMEI number, if didn't get one, return""<br/>

  Note: After the boot lua script is run, the at command will be sent to query imei, so it takes a certain time to get the imei. Call this interface immediately after booting, basically returning ""

-----

### misc.getVbatt()

Get the battery voltage of VBAT

* Syntax

  `misc.getVbatt()`

* Argument

  None

* Return Value

  number, battery voltage, unit mv

----

### misc.openPwm()

Turn on and configure PWM (supports 2 channels of PWM, only supports output)<br/>
 Description:<br/>
 When the id is 0: when the period is in the range of 80-1625 Hz, the level duty ratio ranges from 1-100; <br/>
 When the period value is in the range of 1626-65535 Hz, set x=162500/period, y=x * level / 100, the closer the x and y are to positive integers, the more accurate the output waveform is.

* Syntax

  `misc.openPwm(id, period, level)`

* Argument

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | id     | number, PWM output channel, supports 0 and 1 only, 0 means using uart2 tx, 1 means using uart2 rx|
  | period | number, <br/>When id is 0, period indicates the frequency, the unit is Hz, and the value ranges from 80 to 1625. Only integers are supported. <br/>When the id is 1, the value ranges from 0 to 7. It only supports integers, indicating the clock period in milliseconds, and 0-7 corresponds to 125, 250, 500, 1000, 1500, 2000, 2500, and 3000 respectively. millisecond |
  | level  | number, <br/>When id is 0, level indicates the duty ratio, the unit is level%, and the value ranges from 1-100. Only integers are supported.<br/> When the id is 1, the value ranges from 1 to 15, and only supports integers, indicating a high-level time in one clock cycle, in milliseconds, and 1-15 corresponds to 15.6, 31.2, 46.9, and 62.5, respectively. 78.1, 93.7, 110, 125, 141, 156, 172, 187, 203, 219, 234 milliseconds|

* Return Value

  None

------

### misc.closePwm()

close PWM

* Syntax

  `misc.closePwm(id)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | id   | number, PWM output channel, supports 0 and 1 only, 0 means using uart2 tx, 1 means using uart2rx.|

* Return Value

  nil

------

### misc.getMuid()

Get MUID of the module

* Syntax

  `misc.getMuid()`

* Argument

  None

* Return Value

  string, MUID number, if not returned to return "". <br>Note: After the boot lua script is run, the at command will be sent to query the muid, so it takes a certain time to get the muid. Call this interface immediately after booting, basically returning ""

-----

## mqtt

MQTT client

-----

### mqtt.client()

create an mqtt client instance

* Syntax

  `mqtt.client(clientId[, keepAlive=300][, username=""][, password=""][, cleanSession=1][, will={flag=0])`

* Argument

  | Argument         | Description                                                         |
  | ------------ | ------------------------------------------------------------ |
  | clientId     | string, number of client                                             |
  | keepAlive    | number, optional, default value is 300. Heartbeat interval(unit second), default calue is 300 seconds. |
  | username     | string, optional, default value is "". Username, username is null configured as "" or nil |
  | password     | string, optional, default value is "". Password is null configured or nil. |
  | cleanSession | number, optional, default value is 1.1/0                        |
  | will         | table, optional, default value is {flag=0}. Will argument, format: {qos=, retain=, topic=, payload=} |

* Return Value

  table mqttc client instance

* Example

```lua
mqttc = mqtt.client("clientid-123")
mqttc = mqtt.client("clientid-123",200)
mqttc = mqtt.client("clientid-123",nil,"user","password")
```

-----

### mqttc:connect()

connect to mqtt server

* Syntax

  `mqttc:connect(host, port[, transport="tcp"][, cert=nil])`

* Argument

  | Argument      | Description                                                         |
  | --------- | ------------------------------------------------------------ |
  | host      | string, address of server                                    |
  | port      | string or number type, server port                           |
  | transport | string, this argument is optional. The default value is: "tcp". "tcp" or "tcp_ssl"   |
  | cert      | table, argument optional, default vaule is: nil, table or nil type, ssl certificate, This argument only makes sense when the transport is "tcp_ssl". <br/>The cert format is as follows: <br/>{ <br/>caCert = "ca.crt", --CA certificate file (Base64 encoded X.509 format). If this argument exists, the client will The server's certificate is verified; if it does not exist, clientCert = "client.crt" is not verified, -- the client certificate file (Base64 encoded X.509 format), which is used by the server to verify the client's certificate. clientKey = "client.key", -- client private key file (Base64 encoded X.509 format) clientPassword = "123456", -- client certificate file password [optional]} |

* Return Value

  result true indicates success while false and nil indicates failure

* Example

```lua
mqttc = mqtt.client("clientid-123", nil, nil, false); mqttc:connect("mqttserver.com", 1883, "tcp")
```

----

### mqttc:subscribe()

Subscribe a topic/topics

* Syntax

  `mqttc:subscribe(topic[, qos=0])`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | topic | string or table type, use type string when only one topic, use table type when multiple topics, the content is UTF8 encoded|
  | qos   | the argument is optional, default value is: 0, number or nil, when only one topic, qos is type number(0/1/2, default 0); when multiple topics, qos is nil |

* Return Value

  bool true indicates success while false and nil indicates failure

* Example

```lua
mqttc:subscribe("/abc", 0) -- subscribe topic "/abc" with qos = 0
mqttc:subscribe({["/topic1"] = 0, ["/topic2"] = 1, ["/topic3"] = 2}) -- subscribe multi topic
```

----

### mqttc:unsubscribe()

Unsubscribe topic

* Syntax

  `mqttc:unsubscribe (topic)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | topic | string or table type, when only one topic use type string, when multiple topics use type table, the content is UTF8 encodeds |

* Return Value

  bool true indicates success while false and nil indicates failure

* Example

````lua
mqttc:unsubscribe("/abc") -- unsubscribe topic "/abc"
mqttc:unsubscribe({"/topic1", "/topic2", "/topic3"}) -- unsubscribe multi topic
````

--------

### mqttc:publish()

Publish a message

* Syntax

  `mqttc:publish(topic, payload[, qos=0][, retain=0])`

* Argument

  | Argument    | Description                                                         |
  | ------- | ------------------------------------------------------------ |
  | topic   | string, string UTF8 encoded                                   |
  | payload | string, the user controls the payload of the payload, mqtt.lua does not do any transcoding for the payload. |
  | qos     | number, the argument is optional, default value is:  0. 0/1/2, default 0           |
  | retain  | number, this argument is optional, default value is: 0. 0 or 1                    |

* Return Value

  bool if publishing succeeded, return true, else return false.

* Example

```lua
mqttc = mqtt.client("clientid-123", nil, nil, false)
mqttc:connect("mqttserver.com", 1883, "tcp")
mqttc:publish("/topic", "publish from luat mqtt client", 0)
```

-----

### mqttc:receive()

Recieve message.

* Syntax

  `mqttc:receive(timeout,msg)`

* Argument

  | Argument    | Description                                                   |
  | ------- | ------------------------------------------------------ |
  | timeout | number, timeout interval, unit milisecond                 |
  | msg     | msg is message argument, publish msg can wake up mqtt thread waited by recv|

* Return Value

  result, true indicates success, false indicates failure

  data
   If the package received by the server is received when it returns successfully,<br/>
   If the failure returns an error message, if it is a timeout failure, return "timeout"

------

### mqttc:disconnect ()

disconnect with server

* Syntax

  `mqttc:disconnect()`

* Argument

  None

* Return Value

  nil

* Example

```lua
mqttc = mqtt.client("clientid-123", nil, nil, false)
mqttc:connect("mqttserver.com", 1883, "tcp")
--process data
mqttc:disconnect()
```

----

## net

Network management, signal query, GSM network status query, network indicator control, neighbor cell information query

----

### net.switchFly()

Set flight mode

* Syntax

  `net.switchFly(mode)`

* Argument

  | Argument | Description                                      |
  | ---- | ----------------------------------------- |
  | mode | bool, true: flight mode on, false: flight mode off |

* Return Value

  nil

----

### net.getState()

Get GSM network registration status

* Syntax

  `net.getState()`

* Argument

  None

* Return Value

   string state, GSM network registration status<br>
   "INIT" means being initiating<br>
   "REGISTERED" means already registered<br>
   "UNREGISTER" means not registered<br>

------

### net.getMcc()

Get mcc of the cell

* Syntax

  `net.getMcc()`

* Argument

  None

* Return Value

  string mcc, mcc of the cell, is GSM network is unregistered, turn mcc of sim card.
-----


### net.getLac()

Get the ID of the current area

* Syntax

  `net.getLac()`

* Argument

  None

* Return Value

  string lac, the current location area ID (hexadecimal string, such as "18be"), or "" if no GSM network has been registered yet

-----

### net.getCi()

Get the ID of the current cell.

* Syntax

  `net.getCi()`

* Argument

  None

* Return Value

  string ci, current cell ID (hexadecimal string, eg "93e1"), return "" if the GSM network has not been registered yet

---

### net.getRssi()

Get signal strength

* Syntax

  `net.getRssi()`

* Argument

  None

* Return Value

  number rssi, current signal strength(range 0-31)

----

### net.getCellInfo()

Get the spliced ​​string of current and neighboring location areas, cells, and signal strength

* Syntax

  `net.getCellInfo()`

* Argument

  None

* Return Value

  string cellInfo, a spliced ​​string of current and adjacent location areas, cells, and signal strength, for example: "6311.49234.30; 6311.192323.23; 6322.49232.18;"

-----

### net.getCellInfoExt()

Get the current and adjacent location area, cell, mcc, mnc, and signal strength stitching string

* Syntax

  `net.getCellInfoExt()`

* Argument

  None

* Return Value

  string cellInfo, spliced ​​strings of current and adjacent location areas, cells, mcc, mnc, and signal strength, for example: "460.01.6311.49234.30;460.01.6311.49233.23;460.02.6322.49232.18;"

----

### net.getTa()

Get the value of TA

* Syntax

  `net.getTa()`

* Argument

  None

* Return Value

  number ta, TA value

----

### net.getMultiCell()

Read "current and neighbor cell information" in real time

* Syntax

  `net.getMultiCell(cbFnc)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | cbFnc | function, callback function, when the cell information is read, the callback function is called. The callback function is called: <br>cbFnc(cells), where cells are of string type, and the format is: current and adjacent location area, cell, Mcc, mnc, and spliced ​​string of signal strength, for example: "460.01.6311.49234.30; 460.01.6311.49233.23; 460.02.6322.49232.18;"|

* Return Value

  nil

----

### net.cengQueryPoll()

Request to query base station information (current and neighbor cell information)

* Syntax

  `net.cengQueryPoll(period)`

* Argument

  | Argument   | Description                       |
  | ------ | -------------------------- |
  | period | number, query intervals, unit milisecond |

* Return Value

  bool result, true: succeeded，false: failed

----

### net.csqQueryPoll()

Initiate a request for query signal strength

* Syntax

  `net.csqQueryPoll(period)`

* Argument

  | Argument   | Description                       |
  | ------ | -------------------------- |
  | period | number, query intervals, unit milisecond |

* Return Value

  bool, true: succeeded, false: query stopped

------

### net.startQueryAll()

Query signal strength and base station information (flight mode, simple mode will return query failure)

* Syntax

  `net.startQueryAll(...)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | ...  | number, query period, argument variable, argument is only 1 query for nil, argument1 is the signal strength query period, argument2 is the base station query period |

* Return Value

  bool ，true：succeeded，false：failed

* Example

```lua
net.startQueryAll()
net.startQueryAll(60000) --Query 1 signal strength and base station information in 6 minutes
net.startQueryAll(60000,600000) --1 minute to check the signal strength, 1 minute to query the base station information
```

-----

### net.stopQueryAll()

Stop querying signal strength and base station information

* Syntax

  `net.stopQueryAll()`

* Argument

  None

* Return Value

  None

----

## netLed

Network indicator module

---

### netLed.setup()

Configure the network indicator and perform the configured action immediately

* Syntax

  `netLed.setup(flag,pin)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | flag | bool, whether to turn on the network indicator function, true is on, false is off   |
  | pin  | number, the GPIO pin that controls the flashing of the network indicator, for example, pio.P1_1 indicates GPIO33 |

* Return Value

  nil

* Example

```lua
netLed.setup(true,pio.P1_1)  --Indicates that the network indicator function is turned on, and the GPIO33 control indicator
netLed.setup(false)	--Indicates that the network indicator is off.
```

----

### netLed.updateBlinkTime()

Configure the duration of the indicator light on and off in a certain working state (if the user does not configure, use the default value of ledBlinkTime configuration in netLed.lua)

* Syntax

  `netLed.updateBlinkTime(state, on, off)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | state | string, some working state, only supports "FLYMODE", "SIMERR", "IDLE", "GSM", "GPRS", "SCK" |
  | on    | number, the duration of the indicator light, in milliseconds, 0xFFFF means always on, 0 means constant off  |
  | off   | numberr, the duration of the indicator off, in milliseconds, 0xFFFF means constant off, 0 means always on |

* Return Value

  nil

* Example

```lua
netLed.updateBlinkTime("FLYMODE",1000,500)  -- Indicates that the blinking pattern of the indicator light is in the working mode of the airplane mode: 1 second on, 0 seconds off.
netLed.updateBlinkTime("SCK", 0xFFFF, 0) -- Indicates that there is a working condition in the background of the socket connection. The indicator blinks regularly:
netLed.updateBlinkTime("SIMERR",0,0xFFFF) -- Indicates that the flashing pattern of the indicator is abnormal when the SIM card is abnormal:
```



------

## ntp

Module function: network timing <br>

Important reminder! ! ! ! ! ! <br>
This function module uses multiple free public NTP servers to synchronize time<br>
There is no guarantee that 100% of the time can be synchronized to the right time at any time <br>
So, if the business logic in the user project is strictly dependent on the time synchronization function<br>
Do not use this function module, it is recommended to use your own application server to synchronize time.

-----

### ntp.getServers()

Get the NTP server address list.

* Syntax

  `ntp.getServers()`

* Argument

  None

* Return Value

  table, server address list

----

### ntp.setServers()

Set the NTP server address list

* Syntax

  `ntp.setServers(st)`

* Argument

  | Argument | Description                    |
  | ---- | ----------------------- |
  | st   | type tab, server address list |

* Return Value

  None

* Example

```lua
ntp.getServers({"1edu.ntp.org.cn","cn.ntp.org.cn"})
```

----

### ntp.isEnd()

NTP synchronization flags

* Syntax

  `ntp.isEnd()`

* Argument

  None

* Return Value

  boole, NTP synchronization status true is successful, fasle is failed

-----

### ntp.ntpTime()

Synchronization time, each NTP server tries 3 times, timeout 8 seconds, suitable for being called by the task function.

* Syntax

  `ntp.ntpTime(ts, fnc)`

* Argument

  | Argument | Description               |
  | ---- | ------------------ |
  | ts   | Synchronize once every ts hour  |
  | fnc  | Callback function after successful synchronization |

* Return Value

  None

* Example

```lua
ntp.ntpTime() -- Only sync 1 time
ntp.ntpTime(1) -- 1 time sync 1 time
ntp.ntpTime(nil,fnc) -- Synchronize only once, execute fnc() after successful synchronization
ntp.ntpTime(24,fnc) -- Synchronize once every 24 hours, execute fnc() after successful synchronization
```

----

### ntp.timeSync()

 Automatic synchronization time tasks are suitable for independent execution.<br>
 Important reminder! ! ! ! ! ! <br>
 This function module uses multiple free public NTP servers to synchronize time<br>
 There is no guarantee that 100% of the time can be synchronized to the right time at any time <br>
 So, if the business logic in the user project is strictly dependent on the time synchronization function<br>
 Do not use this function module, it is recommended to use your own application server to synchronize time

* Syntax

  `ntp.timeSync(ts, fnc)`

* Argument

  | Argument | Description               |
  | ---- | ------------------ |
  | ts   | Sychronize once every ts hour  |
  | fnc  | Callback function after successful synchronization |

* Return Value

  None

* Example

```lua
ntp.timeSync() -- Only sync 1 time
ntp.timeSync(1) -- 1 time sync 1 time
ntp.timeSync(nil,fnc) -- Synchronize only once, execute fnc() after successful synchronization
ntp.timeSync(24,fnc) -- Synchronize once every 24 hours, execute fnc() after successful synchronization
```



----

## nvm

Argument management

---

### nvm.init()		

Initialize the argument storage module

* Syntax

  `nvm.init(defaultCfgFile)`

* Argument

  | Argument           | Description                   |
  | -------------- | ---------------------- |
  | defaultCfgFile | string, default configuration file name |

* Return Value

  nil

* Example

```lua
nvm.init("config.lua")
```

----

### nvm.set()

Set the value of a specific argument

* Syntax

  `nvm.set(k, v, r, s)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | k    | string，name of the argument                                            |
  | v    | Could be any type, new value of the argument                                  |
  | r    | Set the reason, if a non-nil valid argument is passed in, and the v value changes compared with the old value, a PARA_CHANGED_IND message will be generated, carrying k, v, r these 3 arguments |
  | s    | Whether it is immediately written to the file system, false is not written, the rest are written|

* Return Value

  bool or nil, return true if succeded, else return nil

* Example

```lua
nvm.set("name","Luat")  --Argumentname is assigned to Luat and is immediately written to the file system
Nvm.set("age",12,"SVR") --Argumentage is assigned a value of 12 and is immediately written to the file system. If the old value is not 12, a PARA_CHANGED_IND message will be generated, carrying "age", 12, "SVR" 3 Argument
Nvm.set("class","Class2",nil,false) --Argumentclass assignment is Class2, not written to the file system
Nvm.set("score",{chinese=100,math=99,english=98}) --Argumentscore is assigned {chinese=100,math=99,english=98}, immediately written to the file system
```

----

### nvm.sett()

Set the value of an index of a table type argument

* Syntax

  `nvm.sett(k, kk, v, r, s)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | k    | string，table type name of argument                                   |
  | kk   | table type index name of the argument                                |
  | v    | table type new value of argument index                       |
  | r    | Set the reason, if a non-nil valid argument is passed in, and the v value is changed compared with the old value, a TPARA_CHANGED_IND message will be generated, carrying 4 arguments of k, kk, v, r |
  | s    | 是否立即写入到文件系统中，false不写入，其余的都写入          |

* Return Value

  bool or nil, return true is succeeded, else return nil

* Example

```lua
nvm.sett("score","chinese",100) --Argumentscore["chinese"] is assigned a value of 100 and is immediately written to the file system
Nvm.set("score","chinese",100,"SVR") --Argumentscore["chinese"] is assigned to 100 and is immediately written to the file system. If the old value is not 100, a TPARA_CHANGED_IND message will be generated, carrying " Score","chinese",100,"SVR" 4 Arguments
Nvm.set("score","chinese",100,nil,false) --Argumentclass assignment is Class2, not written to the file system
```

----

### nvm.flush()

Write all arguments into file system immediately

* Syntax

  `nvm.flush()`

* Argument

  None

* Return Value

  nil

-----

### nvm.get()

Get the value of the argument

* Syntax

  `nvm.get(k)`

* Argument

  | Argument | Description           |
  | ---- | -------------- |
  | k    | string, name of the argument |

* Return Value

  The value of the argument

----

### nvm.gett()

Read the value of an index of a table type argument

* Syntax

  `nvm.gett(k,kk)`

* Argument

  | Argument | Description                        |
  | ---- | --------------------------- |
  | k    | string, table type name of argument |
  | kk   | an index name of the table type argument |

* Return Value

  index value

----

### nvm.restore()

factiry reset argument

* Syntax

  `nvm.restore()`

* Argument

  None

* Return Value

  nil

-------


## pb

Phone book management 

----

### pb.setStorage()

Set the phonebook storage area

* Syntax

  `pb.setStorage(storage, cb)`

* Argument

  | Argument    | Description                                                         |
  | ------- | ------------------------------------------------------------ |
  | storage | string, storage area string, supports "ME" and "SM" only                |
  | cb      | After setting the callback function, the callback method is cb(result), the result is true indicates success while false and nil indicates failure |

* Return Value

  None

----

### pb.read()

Read a phone book record

* Syntax

  `pb.read(index, cb)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | index | number, the location of the phone book in the storage area                                |
  | cb    | function, callback function after reading, call back method is cb(result,name,number): result ebing true indicates success while false and nil indicates failure |

* Return Value

  None

---

### pb.write()

Write a phone book record

* Syntax

  `pb.write(index, name, num, cb)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | index | number, the location of the phone book in the storage area                             |
  | name  | string, name                                                |
  | num   | string, number                                                |
  | cb    | function, callback function after reading, callback method is cb(result)：result being ture indicates success while false and nil indicates failure |

* Return Value

  None

* Example

```lua
pb.write(1,"zhangsan","13233334444",cb)
```

-----

### pb.delete()

Delete a phone book record

* Syntax

  `pb.delete(index,cb)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | index | number, the location of the phone book in the storage area                      |
  | cb    | function, the callback function after the deletion. The callback method is cb(result): result being true indicates success while false and nil indicates failure |

* Return Value

  None

------

## pins

GPIO function configuration, including input and output IO and rising and falling edge interrupt IO

------

### pins.setup()

Configuring GPIO mode

* Syntax

  `pins.setup(pin,val,pull)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | pin  | number，GPIO ID。 <br/>GPIO 0 to GPIO 31 are represented as pio.P0_0 to pio.P0_31. <br/>GPIO 32 to GPIO XX is represented as pio.P1_0 to pio.P1_(XX-32), for example, GPIO33 is represented as pio.P1_1 |
  | val  | number, nil or function type. <br/>When configured as output mode, it is number type, indicating the default level, 0 is low level, and 1 is high level. <br/>When configured as input mode, it is nil. <br/>When configured as interrupt mode, it is a function type, indicating an interrupt handler. |
  | pull | The IO port status can be selected when setting the input and interrupt modes: pio.PULLUP: Pull-up mode. pio.PULLDOWN: Pulldown mode. pio.NOPULL: High impedance state, default pull-up. |

* Return Value

  function<br/>

  When configured as an output mode, the returned function can set the level of IO.

  When configured as input or interrupt mode, the returned function can acquire the level of IO in real time.

* Example

```lua
setOutputFnc = pins.setup(pio.P1_1,0) --[[Configure GPIO 33, output mode, default output is low;
Execute setOutputFnc(0) to output low level, execute setOutputFnc(1) to output high level]]--

getInputFnc = pins.setup(pio.P1_1, intFnc) --[[Configure GPIO33, interrupt mode
The intFnc(msg) function is automatically called when an interrupt is generated: when the rising edge is interrupted: msg is cpu.INT_GPIO_POSEDGE; when the falling edge is interrupted: msg is cpu.INT_GPIO_NEGEDGE
GetInputFnc() can get the current level; if it is low, getInputFnc() returns 0; if it is high, getInputFnc() returns 1]]--

getInputFnc = pins.setup(pio.P1_1) --[[Configure GPIO33, input mode
GetInputFnc() can get the current level; if it is low, getInputFnc() returns 0; if it is high, getInputFnc() returns 1]]--
```

----

### pins.close()

clsoe GPIO mode

* Syntax

  `pins.close(pin)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | pin  | number, GPIO ID <br/>GPIO 0 to GPIO 31 is expressed as pio.P0_0 to pio.P0_31. <br/>GPIO 32 to GPIO XX is represented as pio.P1_0 to pio.P1_(XX-32), for example, GPIO33 is represented as pio.P1_1 |

* Return Value

  nil

* Example

```lua
pins.close(pio.P1_1)  --clsoe GPIO33
```

----

## pm

Dormant management

----

### pm.wake()

a Lua application wake-up system

* Syntax

  `pm.wake(tag)`

* Argument

  | Argument | Description                                          |
  | ---- | --------------------------------------------- |
  | tag  | string type, wakeup tag for a Lua app, user defined |

* Return Value

  nil

-----

### pm.sleep()

a Lua application sleep system

* Syntax

  `pm.sleep(tag)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | tag  | string type, a wake-up tag of a Lua application, user-defined, consistent with the markup in wake |

* Return Value

  None

----

### pm.isSleep()

pm.isSleep([tag]) read a Lua application or global sleep state

* Syntax

  `pm.isSleep(tag)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | tag  | optional argument, if the sleep state of a tag is queried, it is consistent with the tag in wake; if the global sleep state is queried, the argument is not needed. |

* Return Value

  true means is sleep, else not

* Example

```lua
pm.isSleep() --Query global sleep state
pm.isSleep('lcd') --Query the sleep state of the lcd
```

-----


## powerKey

Power button function configuration

-----

### powerKey.setup()

Configure the power button to press and hold the pop-up and short-press function.<br>
 How to define long and short buttons, for example, the long button determines the duration is 3 seconds: <br>
 Press for more than or equal to 3 seconds and then bounce to determine the long button; <br>
 After pressing, it bounces within 3 seconds and is judged as a short button<br>

* Syntax

  `powerKey.setup([longPrd=3000][, longCb=nil][, shortCb=nil])`

* Argument

  | Argument    | Description                                                         |
  | ------- | ------------------------------------------------------------ |
  | longPrd | number [this argument is optional，default value is:  3000], long press to determine the length of time in miliseconds |
  | longCb  | function [this argument is optional，default value is:  nil], the callback function when long press bounced, if it is nil, use the default processing function, it will automatically shut down |
  | shortCb | function [this argument is optional，default value is:  nil], callback function when short pressed|

* Return Value

  nil

* Example

```lua
powerKey.setup(nil,longCb,shortCb)
powerKey.setup(5000,longCb)
powerKey.setup()
```

----

## record

Recording processing 

-----

### record.start()

Start recording

* Syntax

  `record.start(seconds, cb)`

* Argument

  | Argument    | Description               |
  | ------- | ------------------ |
  | seconds | recording time in seconds |
  | cb      | callback recording results   |

* Return Value

  result true - start recording else - failed

----

### record.stop()

Stop recording

* Syntax

  `record.stop()`

* Argument

  None

* Return Value

  None

-----

### record.getFilePath()

Read the full path to the recording file

* Syntax

  `record.getFilePath()`

* Argument

  None

* Return Value

  string, full path of the recording file

----

### record.getData()

Read the data of recording

* Syntax

  `record.getData(offset, len)`

* Argument

  | Argument   | Description     |
  | ------ | -------- |
  | offset | offset position |
  | len    | length     |

* Return Value

  data of recording

-----

### record.getSize()

Read the total length of the recording file, the recording duration

* Syntax

  `record.getSize()`

* Argument

  None

* Return Value

  fileSize: file size of recording file

  duration: duration of the recording

----

### record.exists ()

judge whether the recording exists

* Syntax

  `record.exists()`

* Argument

  None

* Return Value

  result true - recording exists false - None

----

### record.isBusy()

Whether the recording is being processed

* Syntax

  `record.isBusy()`

* Argument

  None

* Return Value

  result true - yes false - no

-----


## rtos

Register rtos message callback handler

* Syntax

  `rtos.on(id, handler)`

* Argument

  | Argument    | Description              |
  | ------- | ----------------- |
  | id      | number, ID of message type |
  | handler | message processing function      |

* Return Value

  None

* Example

```lua
rtos.on(rtos.MSG_KEYPAD, function(param) handle keypad message end)
```

----


## ril

Virtual serial port AT command interaction management

-----

### ril.regRsp()

Register a handler for an AT command response

* Syntax

  `ril.regRsp(head, fnc, typ, formt)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | head  | The AT command header corresponding to this response removes the first two characters of the AT.   |
  | fnc   | AT command response handler                                   |
  | typ   | The response type of the AT command, range in NORESULT,NUMBERIC,SLINE,MLINE,STRING,SPECIAL |
  | formt | when typ is STRING, further define the detailed format in STRING            |

* Return Value

  bool, return true if succeeded, else return false

* Example

```lua
ril.regRsp("+CSQ", rsp)
```

----

### ril.regUrc()

Register a urc handler

* Syntax

  `ril.regUrc(prefix, handler)`

* Argument

  | Argument    | Description                                                     |
  | ------- | -------------------------------------------------------- |
  | prefix  | urc prefix, the first consecutive string, containing a combination of +, uppercase characters, numbers |
  | handler | urc processing function                                           |

* Return Value

  None

* Example

```lua
ril.regUrc("+CREG", neturc)
```

----

### ril.deRegUrc()

unregister a urc handler

* Syntax

  `ril.deRegUrc(prefix)`

* Argument

  | Argument   | Description                                                     |
  | ------ | -------------------------------------------------------- |
  | prefix | urc prefix, the first continuous string, containing a combination of +, uppercase characters, numbers |

* Return Value

  None

-----

### ril.request()

Send AT commands to the underlying software

* Syntax

  `ril.request(cmd, arg, onrsp, delay)`

* Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | cmd   | AT command content                                                   |
  | arg   | after the AT command argument, for example, the AT+CMGS=12 command is executed, the argument will be sent next; after the AT+CIPSEND=14 command is executed, the argument will be sent next. |
  | onrsp | the processing function of the AT command response, only the currently sent AT command response is valid, and the processing is invalid. |
  | delay | this AT command is sent after a delay of delay milliseconds.                              |

* Return Value

  None

* Example

```lua
ril.request("AT+CENG=1,1")
ril.request("AT+CRSM=214,28539,0,0,12,\"64f01064f03064f002fffff\"", nil, crsmResponse)
```

---------


## sms

SMS function


### sms.send()

send SMS

* Syntax

  `sms.send(num, data, cbFnc, idx)`

* Argument

  | Argument  | Description                                                   |
  | ----- | ------------------------------------------------------ |
  | num   | string, SMS recipient number, ASCII string format              |
  | data  | string, SMS content, GB2312 encoded string                   |
  | cbFnc | function, the callback function used when the short message is sent asynchronously, optional  |
  | idx   | number, location of the SMS send to buffer, optional, default position is at the end|

* Return Value

  nil

----

### sms.setNewSmsCb()

Set user processing function for new SMS

* Syntax

  `sms.setNewSmsCb(cbFnc)`

* Argument

  | Argument  | Description                             |
  | ----- | -------------------------------- |
  | cbFnc | function, user processing function for new SMS |

* Return Value

  nil

-------



## sim

Query sim card status, iccid, imsi, mcc, mnc

-------

### sim.getIccid()

Get the iccid of the sim card

* Syntax

  `sim.getIccid()`

* Argument

  None

* Return Value

  string, return iccid, if haven't read out yet, return nil<br/>

  Note: After the boot lua script is run, the at command will be sent to query the iccid, so it takes a certain time to get the iccid. Call this interface immediately after booting, basically returning nil

-----

### sim.getImsi()

Get the imsi of the sim card

* Syntax

  `sim.getImsi()`

* Argument

  None

* Return Value

  string , returns imsi, if not already read, returns nil<br/>

  After the boot lua script is run, the at command is sent to query the imsi, so it takes a certain time to get the imsi. Call this interface immediately after booting, basically returning nil

----

### sim.getMcc()

Get the mcc of the sim card.

* Syntax

  `sim.getMcc()`

* Argument

  None

* Return Value

  string ,Return Value：mcc，如果还没有读取出来，则返回""<br/>

  Note: After the boot lua script is run, it will send an at command to query mcc, so it takes a certain time to get mcc. Call this interface immediately after booting, basically returning ""

-----

### sim.getMnc()

Get the mnc of the sim card

* Syntax

  `sim.getMnc()`

* Argument

  None

* Return Value

  string, return mnc, if haven't read out yet, return ""<br/>

  Note: After the boot lua script is run, the at command is sent to query the mnc, so it takes a certain time to get the mnc. Call this interface immediately after booting, basically returning ""

----

---


## sys

Luat Coroutine Scheduling Framework

-----

### sys.powerOn()

Start the GSM protocol stack. For example, if the charging is turned on and the GSM protocol stack is not started, if the user presses the button normally, the interface is called to start the GSM protocol stack.

* Syntax

`sys.powerOn()`

* Argument

  None

* Return Value

  None

-------

### sys.restart()


Software restart

* Syntax

  `sys.restart(r)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | r    | string, reason of restart, defined by user, noramally type string, the reason will be printed out in the trace after restarting.|

* Return Value

  None

* Example

```lua
sys.restart('Program timeout software restart')
```

---

### sys.wait()

Task delay function, can only be used in the task function

* Syntax

  `sys.wait(ms)`

* Argument

  | Argument | Description                                |
  | ---- | ----------------------------------- |
  | ms   | number, integer, maximun wait time 126322567 miliseconds |

* Return Value

  number return 1 under normal condition, return nil if failed

----

### sys.waitUntil()

The conditional wait function of the task(including conditions such as event messages and timer messages) can only be used in task functions.

* Syntax

  `sys.waitUntil(id, ms)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | id   | message ID                                                       |
  | ms   | timeout waiting time in ms, maximun wait time is 126322567 ms. ms could be nil, ms being nil is block waiting, that is infinite time.|

* Return Value

  result: received message returns true, timeout returns false

  data: reveive massege and return argument

* Example

```lua
result, data = sys.waitUntil("SIM_IND", 120000)
```

| 消息            | Description                       |
| --------------- | -------------------------- |
| SN_READY_IND    | can successfully acquire SN             |
| IMEI_READY_IND  | can successfully acquire IMEI           |
| TIME_UPDATE_IND | set the current time the correct time |
| NET_STATE_REGISTERED  | GSM network register success  |
| GSM_SIGNAL_REPORT_IND | read the intensity of signal|
| NET_STATE_UNREGISTER  | GSM networl register failing |
| NTP_SUCCEED | NTP synchronization succeeded |
| IP_READY_IND | IP data phase |
| TIME_CLK_IND | Clock allotment notification |

----

### sys.taskInit()

Create a task thread, call the function at the end of the module and register the task function in the module. Main.lua can import the module.

* Syntax

  `sys.taskInit(fun, ...)`

* Argument

  | Argument | Description                             |
  | ---- | -------------------------------- |
  | fun  | task function name, used to recall when resume wakes up |
  | ...  | variable argument of task function fun            |

* Return Value

  co: return the thread number of the task

* Example

```lua
sys.taskInit(task1,'a','b')
```

---

### sys.init() 

Luat platform initialization

* Syntax

  `sys.init(mode, lprfnc)`

* Argument

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | mode   | Whether charging starts the GSM protocol stack, 1 does not start, otherwise it starts               |
  | lprfnc | The "low power shutdown processing function" defined in the user application script, if there is a function name, the run interface in this file will not perform any action when the power is low, otherwise, it will automatically shut down after 1 minute delay. |

* Return Value

  None

* Example

```lua
sys.init(1,0)
```

----

### sys.timerStop()

Close the timer

* Syntax

  `sys.timerStop(val, ...)`

* Argument

  | Argument | Description                                                     |
  | ---- | -------------------------------------------------------- |
  | val  | when the value is number type, it is recognized as the timer ID. When the value is a callback function, the argument needs to be transmitted. |
  | ...  | variable argument of function when val is a function                           |

* Return Value

  None

---

### sys.timerStopAll()

Close all timers of the same callback function

* Syntax

  `sys.timerStopAll(fnc)`

* Argument

  | Argument | Description           |
  | ---- | -------------- |
  | fnc  | timer callback function |

* Return Value

  None

----

### sys.timerStart()

Start a timer

* Syntax

  `sys.timerStart(fnc, ms, ...)`

* Argument

  | Argument | Description                                |
  | ---- | ----------------------------------- |
  | fnc  | timer callback function                      |
  | ms   | number, integer, maximum time is 126322567 ms |
  | ...  | argument of variable argument fnc               |

* Return Value

  number: timer ID, return nil if failed

---

### sys.timerLoopStart()

Turn on a loop timer

* Syntax

  `sys.timerLoopStart(fnc, ms, ...)`

* Argument

  | Argument | Description                               |
  | ---- | ---------------------------------- |
  | fns  | timer callback function                     |
  | ms   | number, integer, maximum time is 126322567 ms |
  | ...  | argument of variable fnc          |

* Return Value

  number: timer ID, return nil if failed

----

### sys.timerIsActive()

Determine if a timer is on

* Syntax

  `sys.timerIsActive(val, ...)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | val  | There are two forms: </br> One is the timer id returned when the timer is turned on. In this form, you don't need to pass in the variable argument... you can uniquely mark a timer.</br> Is the callback function when the timer is turned on. In this form, you must pass in the variable argument... to uniquely mark a timer.|
  | ...  | variable argument                                                   |

* Return Value

  number, return true is status is on, else return nil

----

### sys.subscribe()

Subscribe message

* Syntax

  `sys.subscribe(id, callback)`

* Argument

  | Argument     | Description         |
  | -------- | ------------ |
  | id       | message ID      |
  | callback | Message callback processing |

* Return Value

  None

* Example

| Message                 | Description                       |
| --------------------- | -------------------------- |
| SN_READY_IND          | can ontain SN successfully             |
| IMEI_READY_IND        | can obtain IMEI successfully        |
| TIME_UPDATE_IND       | set the current time to the correct time |
| NET_STATE_REGISTERED  | successful GSM network registration            |
| GSM_SIGNAL_REPORT_IND | read the signal strength           |
| NET_STATE_UNREGISTER  | GSM network registration failed            |
| NTP_SUCCEED           | NTP synchronization succeeded                |
| IP_READY_IND          | IP data phase                 |
| TIME_CLK_IND          | Clock allotment notification           |

```lua
sys.subscribe("NET_STATUS_IND", callback)
```

----

### sys.unsubscribe()

Unsubscribe message

* Syntax

  `sys.unsubscribe(id, callback)`

* Argument

  | Argument     | Description         |
  | -------- | ------------ |
  | id       | message ID       |
  | callback | Message callback processing |

* Return Value

  None

* Example

```lua
sys.unsubscribe("NET_STATUS_IND", callback)
```

---

### sys.publish()

Publish internal messages, stored in the internal message queue

* Syntax

  `sys.publish(...)`

* Argument

  | Argument | Description                 |
  | ---- | -------------------- |
  | ...  | variable argument, defined by user |

* Return Value

  None

* Example

```lua
sys.publish("NET_STATUS_IND")
```

----


## socket

Data link activation, SOCKET management (creation, connection, data transceiving, status maintenance)

-----

### socket.tcp()

创建基于TCP的socket对象

* Syntax

  `socket.tcp([ssl=nil][, cert=nil])`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | ssl  | bool, this argument is optional, default value is:  nil, is ssl connection or not, true means yes else no |
  | cert | table, this argument is optional, default value is:  nil, sThe certificate configuration required for ssl connection. argument only makes sense if ssl argument is true. The cert format is as follows: </br>{ <br/>caCert = "ca.crt", --CA certificate file (Base64 coded X.509) Format), if this argument exists, the client will check the server's certificate; if it does not exist, it will not verify clientCert = "client.crt", -- the client certificate file (Base64 encoded X.509 format), The client will use this argument clientKey = "client.key" when verifying the client's certificate. -- Client private key file (Base64 encoded X.509 format) clientPassword = "123456", -- Client certificate file password [optional] <br/>}|

* Return Value

  tcp object

* Example

```lua
c = socket.tcp()
c = socket.tcp(true)
c = socket.tcp(true, {caCert="ca.crt"})
c = socket.tcp(true, {caCert="ca.crt", clientCert="client.crt", clientKey="client.key"})
c = socket.tcp(true, {caCert="ca.crt",clientCert="client.crt",clientKey="client.key",clientPassword="123456"})
```

-----

### socket.udp()

socket object created based on UDP

* Syntax

  `socket.udp()`

* Argument

  None

* Return Value

  udp object

-----

### mt.__index:connect()

Connect to server

* Syntax

  `mt.__index:connect (address, port)`

* Argument

  | Argument    | Description                             |
  | ------- | -------------------------------- |
  | address | string, server address, support ip and domain name|
  | port    | string or number type, server port |

* Return Value

  bool result true - success，false - failure

* Example

```lua
c = socket.tcp(); 
c:connect();
```

----

### mt.__index:send()

Send data

* Syntax

  `mt.__index:send(data)`

* Argument

  | Argument | Description |
  | ---- | ---- |
  | data | data |

* Return Value

  result true - success，false - failure

* Example

```lua
c = socket.tcp(); c:connect(); c:send("12345678");
```

-----

### mt.__index:recv()

Receive message

* Syntax

  `mt.__index:recv([timeout=0],msg)`

* Argument

  | Argument    | Description                                                     |
  | ------- | -------------------------------------------------------- |
  | timeout | number, this argument is optional, default value is: 0, receive timeout time |
  | msg     | msg, optional argument, waiting the message to quit receive  |

* Return Value

  result true - success，false - failure

  data, if succeeded, return data received, when timeout, return error "timeout"

* Example

```lua
c = socket.tcp(); c:connect(); result, data = c:recv()
```

---

### mt.__index:close()

destroy a socket

* Syntax

  `mt.__index:close()`

* Argument

  None

* Return Value

  nil

* Example

```lua
c = socket.tcp(); c:connect(); c:send("123"); c:close()
```

----

### socket.setTcpResendPara()

Set the argument of the TCP layer automatic retransmission

* Syntax

  `socket.setTcpResendPara([retryCnt=4][, retryMaxTimeout=16])`

* Argument

  | Argument            | Description                                                         |
  | --------------- | ------------------------------------------------------------ |
  | retryCnt        | number，[this argument is optional，default value is:  4], number of retransmissions; value range 0 to 12  |
  | retryMaxTimeout | number，[this argument is optional，default value is:  16], limit the maximum timeout allowed in each retransmission (in seconds), ranging from 1 to 16 |

* Return Value

  nil

* Example

```lua
socket.setTcpResendPara(3,8)
socket.setTcpResendPara(4,16)
```



### Fields

| Argument    | Description              |
| ------- | ----------------- |
| isReady | is SOCKET ready |



-------

## utils

Common tool class interface

-----

### string.toHex()

The character is converted to hexadecimal, such as "123abc" to "313233616263"

* Syntax

  `string.toHex(str[, separator=""])`

* Argument

  | Argument      | Description                                                        |
  | --------- | ----------------------------------------------------------- |
  | str       | string, entering string                                        |
  | separator | string, this argument is optional, default value is: "". Output hex string separator |

* Return Value

  hexstring: hexadecimal string

  len: length of the input string

* Example

```lua
string.toHex("\1\2\3") -- "010203" 3
string.toHex("123abc") -- "313233616263" 6
string.toHex("123abc"," ") -- "31 32 33 61 62 63 " 6
```

-----

### string.fromHex()

The hexadecimal character, such as "313233616263" is changed to "123abc", and the filter separator is added to the function to filter out most of the separators (see the range of \s and \p in regular expressions).

* Syntax

  `string.fromHex(hex)`

* Argument

  | Argument | Description                     |
  | ---- | ------------------------ |
  | hex  | string, hexadecimal string|

* Return Value

  charstring, string of characters

  len, print the length of the string

* Example

```lua
string.fromHex("010203")       --  "\1\2\3"
string.fromHex("313233616263:) -- "123abc"
```

----

### string.toValue()

Returns the escaped string of the string tonumber (used to support conversions beyond 31-bit integers)

* Syntax

  `string.toValue(str)`

* Argument

  | Argument | Description       |
  | ---- | ---------- |
  | str  | input string |

* Return Value

 Str converted lua binary string <br>str converted lua binary string

* Example

```lua
string.toValue("123456") -> "\1\2\3\4\5\6"  6
string.toValue("123456") -> "\1\2\3\4\5\6"  6
```



---------

### string.utf8Len()

return the length of utf8 encoded string

* Syntax

  `string.utf8Len(str)`

* Argument

  | Argument | Description                              |
  | ---- | --------------------------------- |
  | str  | string, utf8 encoded string, supports Chinese|

* Return Value

  number, return the length of the string

* Example

```lua
local cnt = string.utf8Len("中国")  --str = 2
```

----

### string.urlEncode()

return the urlEncode code of the string

* Syntax

  `string.urlEncode(str)`

* Argument

  | Argument | Description                       |
  | ---- | -------------------------- |
  | str  | string needed to be transferred |

* Return Value

  str,urlEncode encoded string

* Example

```lua
string.urlEncode("####133")
```

------

### string.formatNumberThousands()

Returns the kilobit format of the number

* Syntax

  `string.formatNumberThousands(num)`

* Argument

  | Argument | Description         |
  | ---- | ------------ |
  | num  | number|

* Return Value

  string, a numeric string of kilobit

* Example

```lua
loca s = string.formatNumberThousands(1000)  --s = "1,000"
```

----

### string.split()

Split the string by the specified separator

* Syntax

  `string.split(str, delimiter)`

* Argument

  | Argument      | Description               |
  | --------- | ------------------ |
  | str       | string, input string |
  | delimiter | string, separator     |

* Return Value

  string list after seperation

* Example

```lua
"123,456,789":split(',') -- {'123','456','789'}
```

---

### io.exists()

Tell whether the file exists or not 

* Syntax

  `io.exists(path)`

* Argument

  | Argument | Description                                    |
  | ---- | --------------------------------------- |
  | path | string, full name of file such as："/ldata/call.mp3" |

* Return Value

  boole, return true if it exists, else return false

* Example

```lua
local ex = io.exists("/ldata/call.mp3")
```

---

### io.readFile()

Read and return the content of the file.

* Syntax

  `io.readFile(path)`

* Argument

  | Argument | Description                                    |
  | ---- | --------------------------------------- |
  | path | string, fullname of the file such as："/ldata/call.txt" |

* Return Value

  string, the content of file, if there's no content, return nil

----

### io.writeFile()

Write the content specified by the file, the default is to override the binary mode

* Syntax

  `io.writeFile(path, content, mode)`

* Argument

  | Argument    | Description                                    |
  | ------- | --------------------------------------- |
  | path    | string, full name of the file such as："/ldata/call.txt" |
  | content | string, the content of the file                       |
  | mode    | string, file write mode default "w+b"         |

* Return Value

  string, the content of the file

* Example

```lua
local c = io.writeFile("/ldata/call.txt","test")
```

---

### io.pathInfo()

Decompose the file path into table information

* Syntax

  `io.pathInfo(path)`

* Argument

  | Argument | Description                                       |
  | ---- | ------------------------------------------ |
  | path | string, full name of the file path such as:"/ldata/call.txt" |

* Return Value

  table,{dirname="/ldata/",filename="call.txt",basename="call",extname=".txt"}

---

### io.fileSize()

The size of the file returned.

* Syntax

  `io.fileSize(path)`

* Argument

  | Argument | Description                                       |
  | ---- | ------------------------------------------ |
  | path | string, the path of the file such as:"/ldata/call.txt" |

* Return Value

  number, the size of the file

------

## uiWin

UI window management

----

### uiWin.add()

add a new window

* Syntax

  `uiWin.add(wnd)`

* Argument

  | Argument | Description                                |
  | ---- | ----------------------------------- |
  | wnd  | table, window elements and message handler tables |

* Return Value

  number, ID of the window

* Example

```lua
uiWin.add({onUpdate=refresh})
```

---

### uiWin.remove()

remove a window

* Syntax

  `uiWin.remove(winId)`

* Argument

  | Argument  | Description           |
  | ----- | -------------- |
  | winId | number, ID of the window|

* Return Value

  nil

----

### uiWin.isActive()

Determine if a window is at the top

* Syntax

  `uiWin.isActive(winId)`

* Argument

  | Argument  | Description           |
  | ----- | -------------- |
  | winId | number, ID of the window |

* Return Value

  bool，true means window is at the top, else means the opposite

--------

## update

Remote upgrade 

----

### update.request()

Start remote upgrade function

* Syntax

  `update.request(cbFnc, url, period)`

* Argument

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | cbFnc  | function, optional, everytime the remote call function is executed, the callback function is called in the format: <br/>cbFnc(result), If the result is true, the upgrade package is successfully downloaded, and the rest indicates that the download fails. If the argument is not set, the upgrade package will be automatically restarted after the download is successful. |
  | url    | string, optional, Use the http get command to download the url of the upgrade package. If this argument is not set, the url of the Luat iot platform is used by default if the user sets the url.<br/>Note: Only the first half of the full url is passed in (if there is an argument, the part before ? is passed in), http.lua will add the part after ? automatically, and the following argument. <br/>For example: set url="www.userserver.com/api/site/firmware_upgrade", then http.lua will add the following argument after this url"?project_key=".._G.PRODUCT_KEY  .."&imei="..misc.getimei()  .."&device_key="..misc.getsn()  .."&firmware_name=".._G.PROJECT.."_"..rtos.get_version().."&version=".._G.VERSION |
  | period | number, optional, unit as milisecond, the interval for starting the remote upgrade function periodically. If this argument is not set, only the remote upgrade function is executed. |

* Return Value

  nil

* Example

```lua
update.request()
update.request(cbFnc)
update.request(cbFnc,"www.userserver.com/update")
update.request(cbFnc,nil,4*3600*1000)
```

----


## wdt

External hardware watchdog 

----

### wdt.setup()

Configure the module to communicate with the watchdog IO and start the task

* Syntax

  `wdt.setup(rst,wd)`

* Argument

  | Argument | Description                                |
  | ---- | ----------------------------------- |
  | rst  | Module reset microcontroller pin (pio.P0_31)       |
  | wd   | Module and MCU feed the dog pins(pio.P0_29) |

* Return Value

  None

----
## Luat Extended Library

## adc

------

### adc.open()

Open ADC channel according to ID

- Syntax

  `result = adc.open( id )`

- Argument

  | Argument | Description      |
  | ---- | --------- |
  | id   | ID of ADC channel |

- Return Value

  1：open adc channel successfully

  0：else

- Example

```lua
--adc id
local ADC_ID = 0
--open adc
adc.open(ADC_ID)
```

------

### adc.read()

Extended reading of raw measurement data and voltage values, the unit of voltage value is mv library

- Syntax

  `adcValue,voltValue = adc.read( id )`

- Argument

  | Argument | Description      |
  | ---- | --------- |
  | id   | ID of adc channel |

- Return Value

  | adcValue      | Raw data ad value, invalid value is 0xFFFF         |
  | ------------- | ------------------------------------ |
  | **voltValue** | **Voltage value in mv, invalid value 0xFFFF** |

- Example

```lua
--adcval is a number type, indicating the original value of adc, invalid value is 0xFFFF
--voltval is a number type, indicating the converted voltage value in millivolts, the invalid value is 0xFFFF; the voltval returned by the adc.read interface is amplified by 3 times, so it needs to be divided by 3 to restore the original voltage.
local adcval,voltval = adc.read(ADC_ID)
```

-----

### adc.colse()

close adc

* Syntax

  `adc.close(id)`

* Argument

  | Argument | Description     |
  | ---- | -------- |
  | id   | ID of adc|

* Return Value

  None



------

## apn

Apn read library

------



### apn.get_default_apn()

obtain default apn by mcc and mnc

- Syntax

`apn,user,password = apn.get_default_apn( mcc,mnc )`

- Argument

| Argument | Description         |
| ---- | ------------ |
| mcc  | mobile country code |
| mnc  | mobile network coding |

- Return Value

| **apn **      | name of apn |
| ------------- | ---------- |
| **user **     | **name of user** |
| **password ** | **password**   |

------



### audiocore

Audio operation interface

------



### audiocore.play()

Play music.

- Syntax

`ret = audiocore.play( filename )` 

- Argument

| Argument     | Description       |
| -------- | ---------- |
| filename | filename of audio |

- Return Value

  true: play succeeded

  false: play failed

------



### audiocore.stop()

Stop the audio being played

- Syntax

`audiocore.stop()`

- Argument

  None

- Return Value

  None

------



### audiocore.setchannel()

Set the audio playback channel

- Syntax

  ` result = audiocore.setchannel( channel )`

- Argument

  | channel | audio playback channel (optional argument see list below)                             |
  | ------- | ------------------------------------------------------------ |
  |         | **audiocore.HANDSET ,  audiocore.EARPIECE ,  audiocore.LOUDSPEAKER , audiocore.BLUETOOTH ,  audiocore.FM ,  audiocore.FM_LP ,  audiocore.TV , audiocore.AUX_HANSET ,  audiocore.AUX_LOUDSPEAKER , audiocore.AUX_EARPIECE ,  audiocore.DUMMY_HANDSET , audiocore.DUMMY_AUX_HANDSET ,  audiocore.DUMMY_LOUDSPEAKER , audiocore.DUMMY_AUX_LOUDSPEAKER** |
  |         |                                                              |

### audiocore.setvol()

Set the audio playback volume

- Syntax

  `result = audiocore.setvol( vol )`

- Argument


| vol  | audio player volume (optional argument see list below)                           |
| ---- | ------------------------------------------------------------ |
|      | **audiocore. VOL0,  audiocore. VOL1,  audiocore. VOL2,  audiocore. VOL3,  audiocore. VOL4, audiocore. VOL5,  audiocore. VOL6,  audiocore. VOL7** |

- Return Value

  1: success

  0: else

### audiocore.setmicvol()

Set the volume of the microphone

- Syntax

  `result = audiocore.setmicvol( vol )`

- Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | vol  | microphone volume (optional argument see list below)                               |
  |      | audiocore.MIC_VOL0, audiocore. MIC_VOL1, audiocore. MIC_VOL2, audiocore.MIC_VOL3, audiocore. MIC_VOL4, audiocore. MIC_VOL5, audiocore. MIC_VOL6, audiocore. MIC_VOL7 ,  audiocore.MIC_VOL8 ,  audiocore.MIC_VOL9 , audiocore.MIC_VOL10 ,  audiocore.MIC_VOL11 ,  audiocore.MIC_VOL12 , audiocore.MIC_VOL13, audiocore.MIC_VOL14, audiocore.MIC_VOL15 |

- Return Value

  1: success

  0: else

------

### audiocore.setloopback()

Set the loopback test specified by the channel

- Syntax

  `result = audiocore.setloopback( status,channel )`

- Argument

  | Argument    | Description                                                         |
  | ------- | ------------------------------------------------------------ |
  | status  | 1 turns on the loopback test, 0 turns off the loopback test                                 |
  | channel | audio channel (optional argument see list below)                                  |
  |         | audiocore. LOOPBACK_HANDSET ,  audiocore. LOOPBACK_EARPIECE ,  audiocore.LOOPBACK_LOUDSPEAKER ,  audiocore. LOOPBACK_AUX_HANDSET ,  audiocore.LOOPBACK_AUX_LOUDSPEAKER |

- Return Value

  1: success

  0: else

------

## bit

Bit manipulation library

------



### bit.bit()

Left shift operation, is equal to 1 << position in C programming language

- Syntax

  `number = bit.bit( position )`

- Argument

  | Argument     | Description           |
  | -------- | -------------- |
  | position | position needs to be shifted |

- Return Value

  Result after shift operation

- Example

```lua
print(bit.bit(2))--argument is the number of digits, the effect is 1 to the left to move two, print out 4
```

------



### bit.isset()

Whether the number of test bits is set to 1

- Syntax

  `flag = bit.isset( value, position )`

- Argument

  | Argument     | Description         |
  | -------- | ------------ |
  | value    | tested value   |
  | position | tested position |

- Return Value

  true: digit set to 1

  false: else

- Example

```lua
print(bit.isset(5,0))--The first argument is the test number and the second is the test position. Count 0 to 7 from right to left. if 1 returns true, otherwise returns false, which returns true
Print(bit.isset(5,1))--Print false
Print(bit.isset(5,2))--Print true
Print(bit.isset(5,3))--Returns false
```

------



### bit.isclear()

Whether the number of test bits is set to 0

- Syntax

  `flag = bit.isclear( value, position )`

- Argument

  | Argument     | Description         |
  | -------- | ------------ |
  | value    | tested value   |
  | position | tested position |

- Return Value

  true: the digit set to 0

  false: else

- Example

```lua
print(bit.isclear(5,0))--the opposite of above
print(bit.isclear(5,1))
print(bit.isclear(5,2))
print(bit.isclear(5,3))
```

------



### bit.set()

Set to 1

- Syntax

  `number = bit.set( value, pos1, pos2, ..., posn )`

- Argument

  | Argument  | Description                 |
  | ----- | -------------------- |
  | value | base number (value to be changed) |
  | pos1  | first position            |
  | pos2  | second position             |
  | posn  | nth position              |

- Return Value

  Result after some digits been set to 1

- Example

```lua
print(bit.set(0,0,1,2,3))--Set the corresponding bit number to 1 and print 15
```

------



### bit.clear()

Set to 0

- Syntax

  `number = bit.clear( value, pos1, pos2, ..., posn )`

- Argument

  | Argument  | Description                 |
  | ----- | -------------------- |
  | value | base number (value to be changed) |
  | pos1  | first position             |
  | pos2  | second position             |
  | posn  | nth position              |

- Return Value

  Result after some digits been set to 0

- Example

```lua
print(bit.clear(5,0,2)) --Set 0 to the corresponding position, print 0
```

------



### bit.bnot()

Inversion, equivalent to ~ in C programming language

- Syntax

  `number = bit.bnot( value )`

- Argument

  | Argument  | Description         |
  | ----- | ------------ |
  | value | Value needs inversion |

- Return Value

  Result after inversion

- Example

```lua
print(bit.bnot(5))--Inverted by bit, output -6
```

------



### bit.band()

And operation, equivalent to val1 & val2 & ... & valn in C

- Syntax

  ` number = bit.band( val1, val2, ... valn )`

- Argument

  | Argument | Description       |
  | ---- | ---------- |
  | val1 | first argument |
  | val2 | second argument |
  | valn | nth argument  |

- Return Value

  Result after and operation

- Example

```lua
print(bit.band(1,1))--and, --output 1
```

------



### bit.bor()

Or operation, equivalent to val1 in C | val2 | ... | valn

- Syntax

  `number = bit.bor( val1, val2, ... valn )`

- Argument

  | Argument | Description       |
  | ---- | ---------- |
  | val1 | first argument |
  | val2 | second argument |
  | valn | nth argument  |

- Return Value

  Result after or operation

- Example

```lua
print(bit.bor(1,2))--or, --output 3
```

------



### bit.bxor()

XOR operation, equivalent to val1 ^ val2 ^ ... ^ valn in C language

- Syntax

  `number = bit.bxor( val1, val2, ... valn )`

- Argument

  | Argument | Description       |
  | ---- | ---------- |
  | val1 | first argument |
  | val2 | second argument |
  | valn | nth argument  |

- Return Value

  Result after XOR operation

- Example

```lua
print(bit.bxor(1,2))--XOR, the same is 0, the difference is 1
```

------



### bit.lshift()

Logical left shift, equivalent to value in shift C << shift

- Syntax

  `number = bit.lshift( value, shift )`

- Argument

  | Argument  | Description       |
  | ----- | ---------- |
  | value | value shifted   |
  | shift | position shifted |

- Return Value

  Result after logical left shift

- Example

```lua
print(bit.lshift(1,2))--Logical left shift, "100", output is 4
```

------



### bit.rshift()

Logic right shift, equivalent to value in C language >> shift

- Syntax

  `number = bit.rshift( value, shift )`

- Argument

  | Argument  | Description       |
  | ----- | ---------- |
  | value | Value shifted   |
  | shift | Position shifted |

- Return Value

  Result after logic right shift

- Example

```lua
print(bit.rshift(4,2))--Logical right shift, "001", output is 1
```

------



### bit.arshift()

Arithmetic right shift

- Syntax

  `number = bit.arshift( value, shift )`

- Argument

  | Argument  | Description       |
  | ----- | ---------- |
  | value | value shifted   |
  | shift | position shifted |

- Return Value

  Result after arithmetic right shift

- Example

```lua
print(bit.arshift(2,2))--Arithmetic shifts right, the number added on the left is related to the symbol, and the output is 0.
```

------

## crypto

Common encryption, check algorithm

------

### crypto.aes_encrypt()

aes algorithm(refer to http://tool.chacuo.net/cryptaes)

* Syntax

  `crypto.aes_encrypt(mode,padding,originStr,password)`

* Argument

  | Argument      | Description       |
  | --------- | ---------- |
  | mode      | encryption mode   |
  | padding   | filling method   |
  | originStr | encrypted string |
  | password  | password       |

* Return Value

  string encrypted

* Example

```lua
--The following example is LuaTask. If you need LuaScript, please refer to the LuaScript crypto demo.
local originStr = "AES128 ECB ZeroPadding test"
--Encryption mode：ECB；Filling method: ZeroPadding；password： 1234567890123456；length of password： 128 bit
local encodeStr = crypto.aes_encrypt("ECB","ZERO",originStr,"1234567890123456")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","ZERO",encodeStr,"1234567890123456"))    
originStr = "AES128 ECB Pkcs5Padding test"
--Encryption mode：ECB；Filling method: Pkcs5Padding；password： 1234567890123456；length of password： 128 bit
encodeStr = crypto.aes_encrypt("ECB","PKCS5",originStr,"1234567890123456")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","PKCS5",encodeStr,"1234567890123456"))    
originStr = "AES128 ECB Pkcs7Padding test"
--Encryption mode：ECB；Filling method: Pkcs7Padding；password： 1234567890123456；length of password： 128 bit
encodeStr = crypto.aes_encrypt("ECB","PKCS7",originStr,"1234567890123456")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","PKCS7",encodeStr,"1234567890123456"))
originStr = "AES192 ECB ZeroPadding test"    
--Encryption mode：ECB；Filling method: ZeroPadding；password： 123456789012345678901234；length of password： 192 bit
local encodeStr = crypto.aes_encrypt("ECB","ZERO",originStr,"123456789012345678901234")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","ZERO",encodeStr,"123456789012345678901234"))    
originStr = "AES192 ECB Pkcs5Padding test"
--Encryption mode：ECB；Filling method: Pkcs5Padding；password： 123456789012345678901234；length of password： 192 bit
encodeStr = crypto.aes_encrypt("ECB","PKCS5",originStr,"123456789012345678901234")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","PKCS5",encodeStr,"123456789012345678901234"))    
originStr = "AES192 ECB Pkcs7Padding test"
--Encryption mode：ECB；Filling method: Pkcs7Padding；password： 123456789012345678901234；length of password： 192 bit
encodeStr = crypto.aes_encrypt("ECB","PKCS7",originStr,"123456789012345678901234")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","PKCS7",encodeStr,"123456789012345678901234"))
originStr = "AES256 ECB ZeroPadding test"    
--Encryption mode：ECB；Filling method: ZeroPadding；password： 12345678901234567890123456789012；length of password： 256 bit
local encodeStr = crypto.aes_encrypt("ECB","ZERO",originStr,"12345678901234567890123456789012")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","ZERO",encodeStr,"12345678901234567890123456789012"))    
originStr = "AES256 ECB Pkcs5Padding test"
--Encryption mode：ECB；Filling method: Pkcs5Padding；password： 12345678901234567890123456789012；length of password： 256 bit
encodeStr = crypto.aes_encrypt("ECB","PKCS5",originStr,"12345678901234567890123456789012")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","PKCS5",encodeStr,"12345678901234567890123456789012"))    
originStr = "AES256 ECB Pkcs7Padding test"
--Encryption mode：ECB；Filling method: Pkcs7Padding；password： 12345678901234567890123456789012；length of password： 256 bit
encodeStr = crypto.aes_encrypt("ECB","PKCS7",originStr,"12345678901234567890123456789012")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("ECB","PKCS7",encodeStr,"12345678901234567890123456789012"))
originStr = "AES128 CBC ZeroPadding test"
--Encryption mode：CBC；Filling method: ZeroPadding；password： 1234567890123456；length of password： 128 bit；offset： 1234567890666666
local encodeStr = crypto.aes_encrypt("CBC","ZERO",originStr,"1234567890123456","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","ZERO",encodeStr,"1234567890123456","1234567890666666"))    
originStr = "AES128 CBC Pkcs5Padding test"
--Encryption mode：CBC；Filling method: Pkcs5Padding；password： 1234567890123456；length of password： 128 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CBC","PKCS5",originStr,"1234567890123456","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","PKCS5",encodeStr,"1234567890123456","1234567890666666"))    
originStr = "AES128 CBC Pkcs7Padding test"
--Encryption mode：CBC；Filling method: Pkcs7Padding；password： 1234567890123456；length of password： 128 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CBC","PKCS7",originStr,"1234567890123456","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","PKCS7",encodeStr,"1234567890123456","1234567890666666"))
originStr = "AES192 CBC ZeroPadding test"    
--Encryption mode：CBC；Filling method: ZeroPadding；password： 123456789012345678901234；length of password： 192 bit；offset： 1234567890666666
local encodeStr = crypto.aes_encrypt("CBC","ZERO",originStr,"123456789012345678901234","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","ZERO",encodeStr,"123456789012345678901234","1234567890666666"))    
originStr = "AES192 CBC Pkcs5Padding test"
--Encryption mode：CBC；Filling method: Pkcs5Padding；password： 123456789012345678901234；length of password： 192 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CBC","PKCS5",originStr,"123456789012345678901234","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","PKCS5",encodeStr,"123456789012345678901234","1234567890666666"))    
originStr = "AES192 CBC Pkcs7Padding test"
--Encryption mode：CBC；Filling method: Pkcs7Padding；password： 123456789012345678901234；length of password： 192 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CBC","PKCS7",originStr,"123456789012345678901234","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","PKCS7",encodeStr,"123456789012345678901234","1234567890666666"))
originStr = "AES256 CBC ZeroPadding test"    
--Encryption mode：CBC；Filling method: ZeroPadding；password： 12345678901234567890123456789012；length of password： 256 bit；offset： 1234567890666666
local encodeStr = crypto.aes_encrypt("CBC","ZERO",originStr,"12345678901234567890123456789012","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","ZERO",encodeStr,"12345678901234567890123456789012","1234567890666666"))    
originStr = "AES256 CBC Pkcs5Padding test"
--Encryption mode：CBC；Filling method: Pkcs5Padding；password： 12345678901234567890123456789012；length of password： 256 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CBC","PKCS5",originStr,"12345678901234567890123456789012","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","PKCS5",encodeStr,"12345678901234567890123456789012","1234567890666666"))    
originStr = "AES256 CBC Pkcs7Padding test"
--Encryption mode：CBC；Filling method: Pkcs7Padding；password： 12345678901234567890123456789012；length of password： 256 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CBC","PKCS7",originStr,"12345678901234567890123456789012","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CBC","PKCS7",encodeStr,"12345678901234567890123456789012","1234567890666666"))
originStr = "AES128 CTR ZeroPadding test"
--Encryption mode：CTR；Filling method: ZeroPadding；password： 1234567890123456；length of password： 128 bit；offset： 1234567890666666
local encodeStr = crypto.aes_encrypt("CTR","ZERO",originStr,"1234567890123456","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","ZERO",encodeStr,"1234567890123456","1234567890666666"))    
originStr = "AES128 CTR Pkcs5Padding test"
--Encryption mode：CTR；Filling method: Pkcs5Padding；password： 1234567890123456；length of password： 128 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","PKCS5",originStr,"1234567890123456","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","PKCS5",encodeStr,"1234567890123456","1234567890666666"))    
originStr = "AES128 CTR Pkcs7Padding test"
--Encryption mode：CTR；Filling method: Pkcs7Padding；password： 1234567890123456；length of password： 128 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","PKCS7",originStr,"1234567890123456","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","PKCS7",encodeStr,"1234567890123456","1234567890666666"))
originStr = "AES128 CTR NonePadding test"
--Encryption mode：CTR；Filling method: NonePadding；password： 1234567890123456；length of password： 128 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","NONE",originStr,"1234567890123456","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","NONE",encodeStr,"1234567890123456","1234567890666666"))
originStr = "AES192 CTR ZeroPadding test"    
--Encryption mode：CTR；Filling method: ZeroPadding；password： 123456789012345678901234；length of password： 192 bit；offset： 1234567890666666
local encodeStr = crypto.aes_encrypt("CTR","ZERO",originStr,"123456789012345678901234","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","ZERO",encodeStr,"123456789012345678901234","1234567890666666"))    
originStr = "AES192 CTR Pkcs5Padding test"
--Encryption mode：CTR；Filling method: Pkcs5Padding；password： 123456789012345678901234；length of password： 192 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","PKCS5",originStr,"123456789012345678901234","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","PKCS5",encodeStr,"123456789012345678901234","1234567890666666"))    
originStr = "AES192 CTR Pkcs7Padding test"
--Encryption mode：CTR；Filling method: Pkcs7Padding；password： 123456789012345678901234；length of password： 192 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","PKCS7",originStr,"123456789012345678901234","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","PKCS7",encodeStr,"123456789012345678901234","1234567890666666"))
originStr = "AES192 CTR NonePadding test"
--Encryption mode：CTR；Filling method: NonePadding；password： 123456789012345678901234；length of password： 192 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","NONE",originStr,"123456789012345678901234","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","NONE",encodeStr,"123456789012345678901234","1234567890666666"))
originStr = "AES256 CTR ZeroPadding test"    
--Encryption mode：CTR；Filling method: ZeroPadding；password： 12345678901234567890123456789012；length of password： 256 bit；offset： 1234567890666666
local encodeStr = crypto.aes_encrypt("CTR","ZERO",originStr,"12345678901234567890123456789012","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","ZERO",encodeStr,"12345678901234567890123456789012","1234567890666666"))    
originStr = "AES256 CTR Pkcs5Padding test"
--Encryption mode：CTR；Filling method: Pkcs5Padding；password： 12345678901234567890123456789012；length of password： 256 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","PKCS5",originStr,"12345678901234567890123456789012","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","PKCS5",encodeStr,"12345678901234567890123456789012","1234567890666666"))    

originStr = "AES256 CTR Pkcs7Padding test"
--Encryption mode：CTR；Filling method: Pkcs7Padding；password： 12345678901234567890123456789012；length of password： 256 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","PKCS7",originStr,"12345678901234567890123456789012","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","PKCS7",encodeStr,"12345678901234567890123456789012","1234567890666666"))

originStr = "AES256 CTR NonePadding test"
--Encryption mode：CTR；Filling method: NonePadding；password： 12345678901234567890123456789012；length of password： 256 bit；offset： 1234567890666666
encodeStr = crypto.aes_encrypt("CTR","NONE",originStr,"12345678901234567890123456789012","1234567890666666")
print(originStr,"encrypt",string.toHex(encodeStr))
log.info("testCrypto.decrypt",crypto.aes_decrypt("CTR","NONE",encodeStr,"12345678901234567890123456789012","1234567890666666"))
```



------

### crypto.crc16()

CRC16 check algorithm

- Syntax

  `crypto.crc16(crcMethod,originstr)`

- Argument

  | Argument      | Description                         |
  | --------- | ---------------------------- |
  | crcMethod | string type, calibration method        |
  | originstr | string type, calculate the checked string |

- Return Value

  Check calculation result

- Example

```lua
local originStr = "sdfdsfdsfdsffdsfdsfsdfs1234"
print("testCrypto.crc16_MODBUS",string.format("%04X",crypto.crc16("MODBUS",originStr)))
print("testCrypto.crc16_IBM",string.format("%04X",crypto.crc16("IBM",originStr)))
print("testCrypto.crc16_X25",string.format("%04X",crypto.crc16("X25",originStr)))
print("testCrypto.crc16_MAXIM",string.format("%04X",crypto.crc16("MAXIM",originStr)))
print("testCrypto.crc16_USB",string.format("%04X",crypto.crc16("USB",originStr)))
print("testCrypto.crc16_CCITT",string.format("%04X",crypto.crc16("CCITT",originStr)))
print("testCrypto.crc16_CCITT-FALSE",string.format("%04X",crypto.crc16("CCITT-FALSE",originStr)))
print("testCrypto.crc16_XMODEM",string.format("%04X",crypto.crc16("XMODEM",originStr)))
print("testCrypto.crc16_DNP",string.format("%04X",crypto.crc16("DNP",originStr)))
```

![crc](../img/crc.png)

-----


### crypto.xxtea_encrypt()

xxtea encryption algorithm

* Syntax

  `crypto.xxtea_encrypt(text,key)`

* Argument

  | Argument | Description                     |
  | ---- | ------------------------ |
  | text | string type, string needs to be encrypted |
  | key  | string type, password        |

* Return Value

  Encrypt/decrypt data

* Example

```lua
local text = "Hello World!";
local key = "07946";
local encrypt_data = crypto.xxtea_encrypt(text, key);
print("testCrypto.xxteaTest","xxtea_encrypt:"..encrypt_data)
local decrypt_data = crypto.xxtea_decrypt(encrypt_data, key);
print("testCrypto.xxteaTest","decrypt_data:"..decrypt_data)
```

-------

### crypto.crc32()

CRC32 calibration algorithm

- Syntax

  `crypto.crc32(originstr,len)`

- Argument

  | Argument      | Description                          |
  | --------- | ----------------------------- |
  | originstr | string type, string needs to be checked |
  | len       | number type, length of string      |

- Return Value

  Check calculation result

- Example

```lua
local originstr = "sdfdsfdsfdsffdsfdsfsdfs1234"
print("crc32",string.format("%08X",crypto.crc32(originstr,slen(originstr))))
--crc32	2FC153F9
```

------

### crypto.sha256()

sha256 algorithm

* Syntax

  `crypto.sha256(originStr)`

* Argument

  | Argument      | Description                          |
  | --------- | ----------------------------- |
  | originStr | string type, string that needs to be encrypted|

* Return Value

  Encrypted data

* Example

```lua
local originStr = "sdfdsfdsfdsffdsfdsfsdfs1234"
print("testCrypto.sha256",crypto.sha256(originStr))
```



-----

### crypto.sha1()

sha1 algorithm

- Syntax

  `crypto.sha1(originstr,len)`

- Argument

  | Argument      | Description                          |
  | --------- | ----------------------------- |
  | originstr | string type, string needs to be encryted |
  | len       | number type, length of string       |

- Return Value

  Encrypted data

- Example

```lua
local originstr = "sdfdsfdsfdsffdsfdsfsdfs1234"
print("sha1",crypto.sha1(originstr,slen(originstr)))
-- sha1	16EBE919119B9B54C8AF6B4F2A09C18B6B6D8218
```

------

### crypto.hmac_sha1()

hmac_sha1 algorithm

- Syntax

  `hmac_sha1(originstr,len_str,signkey,len_key)`

- Argument

  | Argument      | Description                        |
  | --------- | --------------------------- |
  | originstr | string type, data needs to be encrypted. |
  | len_str   | number type, length of string  |
  | signkey   | string type, password           |
  | len_key   | number type, length of pasword      |

- Return Value

  Data encrypted

- Example

```lua
local originstr = "asdasdsadasweqcdsjghjvcb"
local signkey = "12345689012345"
print("hmac_sha1",crypto.hmac_sha1(originstr,slen(originstr),signkey,slen(signkey)))
--hmac_sha1	E3BB109BA59AF6A1F677157E8EC6B21349B9220F
```

------

### crypto.flow_md5()

Streaming md5 algorithm

* Syntax

  `crypto.flow_md5()`

* Argument

  None

* Return Value

  None

* Example

```lua
local fmd5Obj=crypto.flow_md5()
local testTable={"lqlq666lqlq946","07946lq94607946","lq54075407540707946"}
for i=1, #(testTable) do  
    fmd5Obj:update(testTable[i])
end 
print("testCrypto.flowMd5Test",fmd5Obj:hexdigest())
```



------

### crypto.md5()

md5 algorithm, support for calculating the md5 value of a file

- Syntax

  `crypto.md5(originstr,len)`

- Argument

  | Argument      | Description                          |
  | --------- | ----------------------------- |
  | originstr | string type, string needs to be encrypted |
  | len       | number type, length of string        |

- Return Value

   Data encrypted

- Example

```lua
local originstr = "sdfdsfdsfdsffdsfdsfsdfs1234"
print("md5",crypto.md5(originstr,slen(originstr)))
--md5	235B69FBC9E75C4FD5E8C59F9CB16500
```

------

### crypto.hmac_md5()

hmac_md5 algorithm test

- Syntax

  `crypto.hmac_md5(originstr,len_str,signkey,len_key)`

- Argument

  | Argument      | Description                          |
  | --------- | ----------------------------- |
  | originstr | string type, string needs to be encrypted |
  | len_str   | number type, length of string        |
  | signkey   | string type, password           |
  | len_key   | number type, length of password         |

- Return Value

   Data encrypted

- Example

```lua
local originstr = "asdasdsadas"
local signkey = "123456"
print("hmac_md5",crypto.hmac_md5(originstr,slen(originstr),signkey,slen(signkey)))
-- hmac_md5	38A7B18DC5F6543849DC49F06FADE3CC
```

------

### crypto.base64_encode()

base64 encryption

- Syntax

  `crypto.base64_encode(originstr,len)`

- Argument

  | Argument      | Description                          |
  | --------- | ----------------------------- |
  | originstr | string type, string needs to be encrypted |
  | len       | number type, length of string        |

- Return Value

   Data encrypted

- Example

```lua
local originstr = "123456"
local encodestr = crypto.base64_encode(originstr,slen(originstr))
print("base64_encode",encodestr)
--base64_encode	MTIzNDU2
```

------

### crypto.base64_decode()

base64 decryption

- Syntax

  `crypto.base64_decode(originstr,len)`

- Argument

  | Argument      | Description                          |
  | --------- | ----------------------------- |
  | originstr | string type, string needs to be encrypted |
  | len       | number type, length of string        |

- Return Value

   Data decrypted

- Example

```lua
print("base64_decode",crypto.base64_decode(encodestr,slen(encodestr)))
-- base64_decode	123456
```

------

## disp

lcd display

------

### disp.init()

Initialize the display interface Syntax

- `disp.init(param)`

- Argument

  param：display argument, type table, includes:

  | Argument        | Description                                                         |
  | ----------- | ------------------------------------------------------------ |
  | width       | resolution width                                                   |
  | height      | resolution height                                                   |
  | bpp         | Bit depth, currently supports 16-bit color screen (bpp=16) black and white screen (bpp=1)|
  | xoffset     | x offset, the default is 0 if the field is not set                                 |
  | yoffset     | y offset, the default is 0 if the field is not set                                 |
  | freq        | spi clock frequency, supporting integers between 110K and 13M (ie 110000 to 13000000) (including 110000 and 13000000) |
  | hwfillcolor | fill color                                                       |
  | pinrst      | reset, reset pin                                             |
  | pincs       | command/data select pin                                            |
  | initcmd     | initialization instruction list                                                 |

- Return Value

  None

------

### disp.puttext()

Display string

- Syntax

  `disp.puttext(str,x,y)`

- Argument

  | Argument | Description                     |
  | ---- | ------------------------ |
  | str  | string type, string displayed |
  | x    | number type, X-axis coordinate      |
  | y    | number type, Y-axis coordinate      |

- Return Value

  None

- Example

```lua
disp.puttext("Welcome to Luat",16,0) --"Welcome to Luat" is displayed starting from the coordinates 16,0.
```

------

### disp.clear()

Clear the contents of the buffer, note that it will not be refreshed to the screen, and will only show the swipe action when updating.

- Syntax

  `disp.clear()`

- Argument

  None

- Return Value

  None

------

### disp.update()

Refresh the buffer contents to the screen

- Syntax

  `disp.update()`

- Argument

  None

- Return Value

  None

------

### disp.putimage()

Display the image at the coordinates (x, y). Currently only supports bmp and png formats. This interface will only write the display data to the buffer. It will only be swiped after the update is executed. The last four arguments are specified to intercept a partial area from the file.

- Syntax

  `disp.putimage(file,x,y,transcolor,left,top,right,bottom)`

- Argument

  | Argument       | Description                                           |
  | ---------- | ---------------------------------------------- |
  | file       | path of the picture                                       |
  | x          | display starting horizontal coordinate x(this argument is optional, the default value is 0)         |
  | y          | display starting angular coordinate y(this argument is optional, the default value is 0)|
  | transcolor | transparency (this argument is optional, the default value is -1, indicating no transparent color) |
  | left       | intercept area upper left corner abscissa(this argument is optional, the default value is 0)    |
  | top        | intercept area upper left ordinate(this argument is optional, the default value is 0)    |
  | right      | intercept area lower right corner abscissa(this argument is optional, the default value is 0)    |
  | bottom     | intercept area lower right ordinate(this argument is optional, the default value is 0)    |

- Return Value

  None

------

### disp.drawrect()

Draw a rectangle and fill in the color. Fill color can be set by itself or not by color value format RGB565。

- Syntax

  `disp.drawrect(left,top,right,bottom,color)`

- Argument

  | Argument   | Description                                                  |
  | ------ | ------------------------------------------------------------ |
  | left   | The abscissa of upper left corner of the rectangle               |
  | top    | The ordinate of upper left corner of the rectangle               |
  | right  | The abscissa of lower right corner of the rectangle              |
  | bottom | The ordinate of lower right corner of the rectangle              |
  | color  | Filling color of the rectangle (this argument is optional, the default value is-1, no color is filled. You need to set the color value to fill in the color) |

- Return Value

  None

------

### disp.setcolor()

Setting the foreground color

- Syntax

  `disp.setcolor(color)`

- Argument

  | Argument  | Description                                            |
  | ----- | ----------------------------------------------- |
  | color | Color value, filled with red, green and blue with rgb565 as 0xF800 0x07E0 0x001F |

- Return Value

  None

------

### disp.setbkcolor()

Set the background color

- Syntax

  `disp.setbkcolor(color)`

- Argument

  | Argument  | Description                                            |
  | ----- | ----------------------------------------------- |
  | color | Color value, filled with red, green and blue with rgb565 as 0xF800 0x07E0 0x001F |

- Return Value

  None

------

### disp.loadfont()

Load font

- Syntax

  `fontid=disp.loadfont(path)`

- Argument

  | Argument | Description         |
  | ---- | ------------ |
  | path | font file path |

- Return Value

  fontid-Returns the loaded font id for setfont to set the font

------

### disp.setfont()

Set font

- Syntax

  `oldfontid=disp.setfont(fontid)`

- Argument

  | Argument   | Description   |
  | ------ | ------ |
  | fontid | id of font |

- Return Value

  oldfontid-return id of the old font 

------

### disp.sleep()

Sleep display module

- Syntax

  `disp.sleep()`

- Argument

  None

- Syntax

  None

----

### disp.getlcdinfo()

Get the width and height of the LCD resolution (in pixels)

* Syntax

  `disp.getlcdinfo() `

* Argument

  None

* Return Value

  WIDTH ：width<br>

  HEIGHT : height

----

### disp.putqrcode()

Display QR code 

* Syntax

  `disp.putqrcode(data, width, display_width, x, y) `

* Argument

  | Argument          | Description                              |
  | ------------- | --------------------------------- |
  | data          | returned QR data from qrencode.encode |
  | width         | the actual width of QR data              |
  | display_width | the actual height of QR display                |
  | x             | QR code shows the starting coordinate x               |
  | y             | QR code shows the starting coordinate y            |

* Return Value

  None

-----

## json

json compilation parsing

------

### json.encode()

Json encoding

- Syntax

  `json.encode(torigin)`

- Argument

  | Argument    | Description                      |
  | ------- | ------------------------- |
  | torigin | table type, source character to be encoded |

- Return Value

  json format string

- Example

```lua
local torigin =
{
    KEY1 = "VALUE1",
    KEY2 = "VALUE2",
    KEY3 = "VALUE3",
    KEY4 = "VALUE4",
    KEY5 = {KEY5_1="VALU5_1",KEY5_2="VALU5_2"},
    KEY6 = {1,2,3},
}

local jsondata = json.encode(torigin)
--[[
{"KEY3":"VALUE3","KEY4":"VALUE4","KEY2":"VALUE2","KEY1":"VALUE1","KEY5":{"KEY5_2":"VALU5_2","KEY5_1":"VALU5_1"}},"KEY6":[1,2,3]}
]]
```

------

### json.decode()

json decoding

- Syntax

  `json.decode(origin)`

- Argument

  | Argument   | Description               |
  | ------ | ------------------ |
  | origin | json string to be decoded |

- Return Value

  The content to be decoded, table type

  The result of decoding, true is success, false is failure

  Error message parsing in json string

- Example

```lua
-- Correct json string
local wrongOrigin = "{\":\"VALUE3\",\"KEY4\":\"VALUE4\",\"KEY2\":\"VALUE2\",\"KEY1\":\"VALUE1\",\"KEY5\":{\"KEY5_2\":\"VALU5_2\",\"KEY5_1\":\"VALU5_1\"},\"KEY6\":[1,2,3]}"
local origin = "{\"KEY3\":\"VALUE3\",\"KEY4\":\"VALUE4\",\"KEY2\":\"VALUE2\",\"KEY1\":\"VALUE1\",\"KEY5\":{\"KEY5_2\":\"VALU5_2\",\"KEY5_1\":\"VALU5_1\"},\"KEY6\":[1,2,3]}"
local tjsondata,result,errinfo = json.decode(origin)
if result then
    print(tjsondata["KEY1"])
    print(tjsondata["KEY2"])
    print(tjsondata["KEY3"])
    print(tjsondata["KEY4"])
    print(tjsondata["KEY5"]["KEY5_1"],tjsondata["KEY5"]["KEY5_2"])
    print(tjsondata["KEY6"][1],tjsondata["KEY6"][2],tjsondata["KEY6"][3])
else
	print("json.decode error",errinfo)
end
--origin：correct output
--wrongOrigin：json.decode error	Expected colon but found invalid token at character 5
```

------

## i2c

i2c operation interface

### i2c.setup()

open i2c interface

- Syntax

  ` speed = i2c.setup( id, speed [,slaveaddr] )`

- Argument

  | Argument      | Description                                         |
  | --------- | -------------------------------------------- |
  | id        | i2c interface id, currently supports i2c id=2 ie module I2C3 |
  | speed     | i2c.FAST (400KHz), i2c.SLOW (100KHz)         |
  | slaveaddr | optional, i2c peropheral address is 0x00-0x7f                 |

- Return Value

  Can judge whether the i2c is successfully opened according to the returned frequency value

- Example

```lua
--Use i2c.send and i2c.recv setup
if i2c.setup(i2cid,i2c.SLOW) ~= i2c.SLOW then
  print("init fail")
  return
end

--Use i2c.write and i2c.read setup
if i2c.setup(i2cid,i2c.SLOW,i2cslaveaddr) ~= i2c.SLOW then
  print("init1 fail")
  return
end
```



------

### i2c.send()

Write data to the slave

- Syntax

  `wrote = i2c.send( id,slave, data )`

- Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | id    | id of i2c interface, supports i2c id=2 that is module's i2c3 currently        |
  | slave | i2c peripheral address is 0x00-0x7f                                       |
  | data  | number / string / table, automatically write data according to the argument type, num only writes 1 byte,string/table |

- Return Value

  The number of bytes successfully transferred

- Example

```lua
local cmd,i = {0x1B,0x00,0x6A,0x01,0x1E,0x20,0x21,0x04,0x1B,0x00,0x1B,0xDA,0x1B,0xDA}
for i=1,#cmd,2 do
  --Send register address cmd[i] to slave device i2cslaveaddr
  i2c.send(i2cid,i2cslaveaddr,cmd[i])
  --Send data to the slave device i2cslaveaddr to be written to the slave device cmd[i+1]
  i2c.send(i2cid,i2cslaveaddr,cmd[i+1])
end
```

------

### i2c.recv()

Read data from the slave

- Syntax

  `i2c.recv( id, slave,size )`

- Argument

  | Argument  | Description                                      |
  | ----- | ----------------------------------------- |
  | id    | I2c interface id, currently supports i2c id=2 ie module i2c3 |
  | slave | I2c peripheral address 0x00-0x7f                    |
  | size  |Read data bytes                            |

- Return Value

  Returns the read data, the binary data will contain non-visible characters, please use string.byte to print the data stream

- Example

```lua
--Send register address cmd[i] to slave device i2cslaveaddr
i2c.send(i2cid,i2cslaveaddr,cmd[i])
--Read 1 byte of data from the slave i2cslaveaddr register and print it out
print("testI2c.init",string.format("%02X",cmd[i]),string.toHex(i2c.recv(i2cid,i2cslaveaddr,1)))
```

------

### i2c.write()

Transfer data to the specified register address reg

- Syntax

  ` wrote = i2c.write( id, reg, data )`

- Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | id   | I2c interface id, currently supports i2c id=2 ie module i2c3                   |
  | reg  | Write the start address of the i2c slave device register                           |
  | data | number / string / table, automatically write data according to the argument type, num only writes 1 byte,string/table |

- Return Value

  The number of bytes successfully transferred

- Example

```lua
local cmd,i = {0x1B,0x00,0x6A,0x01,0x1E,0x20,0x21,0x04,0x1B,0x00,0x1B,0xDA,0x1B,0xDA}
for i=1,#cmd,2 do
  --Write 1 byte of data cmd[i+1] to the slave device's register address cmd[i]
  i2c.write(i2cid,cmd[i],cmd[i+1])
end
```



------



### i2c.read()

Read the data content of the specified register address reg

- Syntax

  ` data = i2c.read( id, reg, num )`

- Argument

  | Argument | Description                                      |
  | ---- | ----------------------------------------- |
  | id   | I2c interface id, currently supports i2c id=2 ie module i2c3 |
  | reg  | Read the register start address of the i2c slave           |
  | num  | Read data bytes                            |

- Return Value

  Returns the read data, the binary data will contain non-visible characters, please use string.byte to print the data stream

- Example

```lua
--Read 1 byte of data from the device's register address cmd[i] and print it out
    local cmd,i = {0x1B,0x00,0x6A,0x01,0x1E,0x20,0x21,0x04,0x1B,0x00,0x1B,0xDA,0x1B,0xDA}
    for i=1,#cmd,2 do
        -- Write 1 byte of data cmd[i+1] to the register address cmd[i] of the slave device
        i2c.write(i2cid,cmd[i],cmd[i+1])
        -- Read 1 byte of data from the device's register address cmd[i] and print it out
        print("testI2c.init1",string.format("%02X",cmd[i]),string.toHex(i2c.read(i2cid,cmd[i],1)))
    end
```



------



### i2c.close()

close I2C interface

- Syntax

  ` speed = i2c.close( id )`

- Argument

  | Argument | Description                                      |
  | ---- | ----------------------------------------- |
  | id   | i2c interface id, currently supports i2c id=2 ie module i2c3 |

- Return Value

  None

------

## pack

The pack library supports converting a series of data to a lua string as a format character or converting a lua string to a series of values in some format characters.

The format string format is as follows:

[endianness]< format specifier >[count]

endianness：endian

- '<' Small endian, least significant byte first, lower byte valid bits occupy the memory space of the lower address.
- '>' Large endian, the most significant byte takes precedence, and the higher byte valid bits occupy the memory space of the lower address.
- '=' Natural endian, default.

format specifier：follow the formatting symbols below

count：Take the number of bytes

| Formatting symbol | Variable type                                   |
| ---------- | ------------------------------------------ |
| 'z'        | strings end with '\0'                        |
| 'p'        | Add a byte of string length data in front of the string data |
| 'P'        | Add two bytes of string length data in front of the string data  |
| 'a'        | Add four bytes of string length data in front of the string data  |
| 'A'        | string                             |
| 'f'        | float                            |
| 'd'        | double                       |
| 'n'        | Lua number                        |
| 'c'        | char                                 |
| 'b'        | byte = unsigned char                 |
| 'h'        | short(2 bytes)                      |
| 'H'        | unsigned short(2 bytes)       |
| 'i'        | int(4 bytes)                        |
| 'I'        | unsigned int(4 bytes)          |
| 'l'        | long(8 bytes)                       |
| 'L'        | unsigned long(8 bytes)        |

------



### pack.pack()

The value of the packed string is signed at the time of the pack. The unsigned output is the same. There is a difference between unsigned and unsigned.

- Syntax

  `packed = pack.pack( format, val1, val2, ..., valn )`

- Argument

  | Argument   | Description             |
  | ------ | ---------------- |
  | format | formatting symbol       |
  | val1   | first value needs to be packed |
  | val2   | second value needs to be packed|
  | valn   | nth value needs to be packed  |

- Return Value

  a string containing all formatting variables

- Example

```lua
print("pcak.pack test：")
print(pack.pack("A",10))--When "10" is wrapped as a string, "10" will be printed.
print(common.binstohexs(pack.pack("b",0x10)))--Pack 0x01 as a string in hexadecimal and then output 0x10 in hexadecimal
print(pack.pack("A","LUAT"))
```

------

### pack.unpack()

Unpack string

- Syntax

  `nextpos, val1, val2, ..., valn = pack.unpack( string, format,[ init ] )`

- Argument

  | Argument         | Description                          |
  | ------------ | ----------------------------- |
  | string       | string needs to be unpacked                |
  | format       | formatting symbols                    |
  | init(optional) | default valeu is 1, mark the position where unpacking started |

- Return Value

  | nextpos  | position where string marked  |
  | -------- | ------------------ |
  | **val1** | **the value of the first unpacked** |
  | **val2** | **the value of the second unpacked** |
  | **valn** | **the value of the nth unpacked**  |

- Example

```lua
print("pack.unpack test:")
nextpox1,val1,val2,val3,val4=pack.unpack("luat100","c4")--"nextpos" next position to be resolved, take 4 characters (char)
print(nextpox1, val1, val2, val3, val4) --respectively correspond to ascii code data of "5", l", "u", "a", "t"
print(string.char(val1, val2, val3, val4)) -- convert ascii code data to character output
nextpox2,string1=pack.unpack("luat100","A4")--output "luat"
print(nextpox2,string1)--output 5 luat
nextpox3,number1,number2=pack.unpack(common.hexstobins("006400000064"),">H>i")--[[Output unsigned short and integer, because unsigned short is 2 bytes, shaping Is 4 bytes, the output is 100,100--]]
print(nextpox3,number1,number2)--output 7 100 100
nextpox3,number1=pack.unpack(common.hexstobins("0064"),">h")--The output is 100 because the short type is 2 bytes
print(nextpox3,number1)--output 3 100
```

------

## pio

Pin operation

### pio.pin.setdir()

Set the description of the pin

- Syntax

  `pio.pin.setdir( direction,pin1,pin2,...,pinn)`

- Argument

  | Argument       | Description                                            |
  | ---------- | ----------------------------------------------- |
  | direction  | pin description, choose from pio.INPUT ， pio.OUTPUT， pio.INT |
  | pin1       | first pin                                     |
  | pin2(optional) | second pin                                      |
  | pinn(optional) | nth pin                                       |

- Return Value

  None

------



### pio.pin.setval()

Set the value of pin

- Syntax

  `pio.pin.setval(value,pin1,pin2,...,pinn)`

- Argument

  | Argument         | Description             |
  | ------------ | ---------------- |
  | value        | value of pin, choose from 0 and 1 |
  | pin1         | first pin      |
  | pin2(optional) | second pin       |
  | pinn(optional)   | nth pin        |

- Return Value

  None

------



### pio.pin.getval()

Get the value of pin

- Syntax

  `val1, val2, ..., valn = pio.pin.getval( pin1, pin2, ..., pinn )`

- Argument

  | Argument       | Description       |
  | ---------- | ---------- |
  | pin1       | first pin |
  | pin2(optional) | second pin |
  | pinn(optional) | nth pin  |

- Return Value

  number type, 0 means low level, 1 means high level

------



### pio.pin.sethigh()

Set pin to high level(1)

- Syntax

  `pio.pin.sethigh(pin1,pin2,...,pinn)`

- Argument

  | Argument       | Description       |
  | ---------- | ---------- |
  | pin1       | first pin |
  | pin2(optional) | second pin |
  | pinn(optional) | nth pin  |

- Return Value

  None

------



### pio.pin.setlow()

Set pin to low level(0)

- Syntax

  `pio.pin.setlow(pin1,pin2,...,pinn)`

- Argument

  | Argument       | Description       |
  | ---------- | ---------- |
  | pin1       | first pin |
  | pin2(optional) | second pin |
  | pinn(optional) | nth pin  |

- Return Value

  None

----

### pio.pin.setpull()

Configure the default state of the IO port.

* Syntax

  `pio.pin.setpull(method,pin)`

* Argument

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | method | pio.PULLUP: Pull-up mode. pio.PULLDOWN: Pulldown mode. pio.NOPULL: high resistance state|
  | pin    | configure pin                                                     |

* Return Value

  None

* Example

```lua
pio.pin.setpull(pio.PULLUP,pio.P0_5)  --Configured as pull up
--pio.pin.setpull(pio.PULLDOWN, pio.P0_5) --configured to pull down
--pio.pin.setpull(pio.NOPULL, pio.P0_5) --not configured up and down
```



------

## pmd

Power management interface: ldo control, power saving management



------



### pmd.init()

Setting up power management argument <br>
Battery charge control, 3-stage current charging:<br>
First stage: the voltage is lower than the battlevelFirst charging current is currentFirst<br>
Second stage: voltage higher than battlevelFirst lower than battlevelSecond charging current is currentSecond<br>
Third stage: voltage is higher than battlevelSecond to full 4.25v charging current is currentThird<br>

- Syntax

  `result = pmd.init( param )`

- Argument

  | Argument  | Description                                                         |
  | ----- | ------------------------------------------------------------ |
  | param |argument table, current RMS: 50, 100, 150, 200, 300, 400, 500, 600, 700, 800 Voltage value in mV, optional value |
  |       | param.currentFirst - charging current when the battery voltage is less than the voltage value of one stage</br>param.battlevelFirst - one-stage voltage value node</br>param.currentSecond - when the battery voltage is greater than the voltage value of the first stage voltage is less than the two-stage voltage value Charging current</br>param.battlevelSecond - two-stage voltage value node</br>param.currentThird - charging current when the battery voltage is greater than the two-stage voltage value|

- Return Value

  1: succeeded

  0: failed

------



### pmd.ldoset()

ldo control

The correspondence between the voltage domain and the controlled GPIO is as follows:<br>

pmd.LDO_VMMC：GPIO8, GPIO9, GPIO10, GPIO11, GPIO12, GPIO13 <br>
pmd.LDO_VLCD：GPIO14, GPIO15, GPIO16, GPIO17, GPIO18<br>
pmd.LDO_VCAM：GPIO19, GPIO20, GPIO21, GPIO22, GPIO23, GPIO24<br>

Once a voltage level of a voltage domain is set, the high level of all GPIOs controlled by the voltage domain is consistent with the set voltage level.

- Syntax

  `pmd.ldoset(level,id1,[id2],...,[idn])`

- Argument

  | Argument      | Description                                                         |
  | --------- | ------------------------------------------------------------ |
  | level     | ldo brightness 0 - 7 level level 0:off <br>0--off<br>1--1.8V<br>2--1.9V<br>3--2.0V<br>4--2.6V<br>5--2.8V<br>6--3.0V<br>7--3.3V |
  | id1       | first ldo needs to be set                                           |
  | id2(optional) |second ldo needs to be set                                         |
  | idn(optional) | nth ldo needs to be set                                          |

- Return Value

  None

- Example

```lua
--When GPIO8 output level, it is required to output 2.8V, then call
pmd.ldoset(5,pmd.LDO_VMMC)
```



------



### pmd.sleep()

Power saving control

- Syntax

  `pmd.sleep(value)`

- Argument

  | Argument  | Description                       |
  | ----- | -------------------------- |
  | value | 1 - entering sleep, 0 - quit sleeping |

- Return Value

  None

------

## qrencode 

QR data

### qrencode.encode ()

encode QR data 

* Syntax

  `qrencode.encode(string)`

* Argument

  | Argument   | Description         |
  | ------ | ------------ |
  | string | QR code string |

* Return Value

  width: generated QR code information width <br>

  data: generated QR data

* Example

```lua
 local width, data = qrencode.encode("http://www.openluat.com")
```

----

## rtos

Embedded system interface: receive messages, software timers

------

### rtos.receive()

receive messages

- Syntax

  `msg,msgpara = rtos.receive(timeout)`

- Argument

  | Argument    | Description                                                         |
  | ------- | ------------------------------------------------------------ |
  | timeout | timeout in miliseconds, #rtos.INF_TIMEOUT# indicates blocking wait message |

- Return Value

  If msg is type table, msg will have different msg.id data according to different message.

  is msg is type number, msg will have different data according to different msg. 

  1.rtos.MSG_TIMER timer timeout message
  Msg.timer_id or msgpara is the timer id of the timeout

  2.rtos.MSG_UART_RXDATA Serial ATC Data Reminder
  msg.uart_id or msgpara is the serial port id or atc of the received data. After receiving the message, you can pass uart.read.
  Interface read data

  3.rtos.MSG_KEYPAD keyboard message, the keyboard message must be initialized (#rtos.init_module#)

  msg.pressed: key pressed/bounced

  msg.key_matrix_row: row of key

  msg.key_matrix_col: column of key 

  4.rtos.WAIT_MSG_TIMEOUT: wait message timeout

  5.rtos.MSG_INT: interruption message
  msg.int_id interruption id 

  msg.int_resnum: interrupt pin number

  6.rtos.MSG_PMD: power management message 

  msg.present: battery in position or npt 

  msg.level: percentage 0-100 

  msg.voltage: battery voltage 

  msg.charger: harger in position  or not 

  msg.state charger state: 0-not charging 1-charging 2-charging stopped

------

### rtos.timer_start()

start timer

- Syntax

  `rtos.timer_start(timer_id, timeout)`

- Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | timer_id | the timer id can be any integer. When the timer expires, the msg.timer_id value is the timer at startup. |
  | timeout  | timer delay time in milliseconds                                   |

- Return Value

  None

------



### rtos.timer_stop()

Stop timer.

- Syntax

  `rtos.timer_stop(timer_id)`

- Argument

  | Argument     | Description                                       |
  | -------- | ------------------------------------------ |
  | timer_id | Stop the timer by entering the id defined when starting the timer |

- Return Value

  None

------



### rtos.poweron_reason()

Read the boot cause value

- Syntax

  `reason=rtos.poweron_reason()`

- Argument

  None

- Return Value

  | rtos. POWERON_KEY(=0)           | 按键开机                  |
  | ------------------------------- | ------------------------- |
  | **rtos. POWERON_CHARGER(=1)**   | **switch on charger**              |
  | **rtos. POWERON_ALARM(=2)**     | **switch on alarm**              |
  | **rtos. POWERON_RESTART(=3)**   | **restart**          |
  | **rtos. POWERON_EXCEPTION(=6)** | **abnormal boot**              |
  | **rtos. POWERON_HOST(=7)**      | **HOST tool control restarts boot** |
  | **rtos. POWERON_WATCHDOG(=8)**  | **other reasons**              |

------



### rtos.poweron()

Whether to start GSM boot

- Syntax

  `rtos.poweron(flag)`

- Argument

  | Argument | Description                             |
  | ---- | -------------------------------- |
  | flag | 0 means not starting the system; 1 means starting the system |

- Return Value

  None

------



### rtos.poweroff()

Poweroff

- Syntax

  `rtos.poweroff()`

- Argument

  None

- Return Value

  None

------



### rtos.restart()

Restart

- Syntax

  ` rtos.restart()`

- Argument

  None

- Return Value

  None

------



### rtos.tick()

Get the total count of system boot time

- Syntax

  `ticks=rtos.tick()`

- Argument

  None

- Return Value

  ticks, time count, 1/16384 seconds per tick

------



### rtos.sleep()

Delay function

- Syntax

  `rtos.sleep(millisecond)`

- Argument

  | Argument        | Description                    |
  | ----------- | ----------------------- |
  | millisecond | delay time in milisecond |

- Return Value

  None

------



### rtos.get_env_usage()

Get the percentage of usage of the lua task message queue.

- Syntax

  `percentage=rtos.get_env_usage()`

- Argument

  None

- Return Value

  Percentage, for example if you used 80%, then percentage is 80

------

### rtos.set_alarm()

Set the alarm, you must register the alarm module and register the message callback function before setting

- Syntax

  `rtos.set_alarm(mode,year,month,day,hour,min,sec)`

- Argument

  | Argument  | Description                      |
  | ----- | ------------------------- |
  | mode  | 1：set an alarm, 0：remove the alarm |
  | year  | number type, year            |
  | month | number type, month            |
  | day   | number type, date            |
  | hour  | number type, hour            |
  | min   | number type, minute            |
  | sec   | number type, second            |

- Return Value

  None

- Example

```lua
rtos.init_module(rtos.MOD_ALARM) --register alarm module
sys.regmsg(rtos.MSG_ALARM,alarmmsg) --register message callback function
rtos.set_alarm(1, 2017, 12, 7, 10, 52, 0) --set an alarm 
--alarm time 2017-17-7 10:52:0
rtos.set_alarm(0, 0, 0, 0, 0, 0, 0)  --remove an alarm

--turn on the alarm
local reason = rtos.poweron_reason()
if reason == rtos.POWERON_ALARM then
	rtos.restart()-- Restart the alarm after booting, otherwise it will not be registered on the GSM protocol stack.
end

```

------

### rtos.make_dir()

Create direction

- Syntax

  `rtos.make_dir(path)`

- Argument

  | Argument | Description       |
  | ---- | ---------- |
  | path | path of file |

- Return Value

  Boolean

  true means create successfully, false means the opposite

------

### rtos.remove_dir()

Remove direction

- Syntax

  `rtos.remove_dir(path)`

- Argument

  | Argument | Description       |
  | ---- | ---------- |
  | path | path of file |

- Return Value

  true means remove successfully, false means the opposite

------

### rtos.get_fs_free_size()

Get the remaining space of the file system

- Syntax

  `rtos.get_fs_free_size()`

- Argument

  None

- Return Value

  Free space in file system int Bytes

------


## spi

spi operation interface

------



### spi.setup

- Syntax

  `spi.setup(id,chpa,cpol,dataBits,clock,duplexMode)`

- Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | id       | SPI ID, spi.SPI_1 means SPI1, Air201, Air202, Air800 only SPI1, fixed transmission spi.SPI_1|
  | chpa     | The data is transmitted on the edge of the first clk. Only 0 and 1 are supported. 0 indicates the first and 1 indicates the second. |
  | cpol     | The state of spi_clk idle, only supports 0 and 1, 0 means low level, 1 means high level  |
  | dataBits | databit, supports 8 only                                       |
  | clock    | Spi clock frequency, supports integers between 110K and 13M (ie 110000 to 13000000) (including 110000 and 13000000)|
  | duplex   | Whether full-duplex, only supports 0 and 1, 0 means half-duplex (only supports output), 1 means full-duplex. This argument is optional, default half duplex |

- Return Value

  number type, 1 means succeeded, 0 means failed

------

### spi.send()

Send data

- Syntax

  `spi.send(id,data)`

- Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | id   | SPI ID, spi.SPI_1 means SPI1, Air201, Air202, Air800 only SPI1, fixed transmission spi.SPI_1 |
  | data | string type, data needs to be send                                    |

- Return Value

  number type, length of data sent successfully

------

### spi.recv()

Receive data

- Syntax

  `spi.recv(id,length)`

- Argument

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | id     | SPI ID, spi.SPI_1 means SPI1, Air201, Air202, Air800 only SPI1, fixed transmission spi.SPI_1 |
  | length | length of data to be read                                          |

- Return Value

  string type, received data content

-----

### spi.send_recv()

Send and receive data.

* Syntax

  `spi.send_recv(id,data)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | id   | SPI ID, spi.SPI_1 means SPI1, Air201, Air202, Air800 only SPI1, fixed transmission spi.SPI_1 |
  | data | string type, data needs to be sent                                    |

* Return Value

  string type, data content received

-----

### spi.close()

close SPI

* Syntax

  `spi.close(id)`

* Argument

  | Argument | Description                       |
  | ---- | -------------------------- |
  | id   | SPI ID, spi.SPI_1 indicates SPI1 |

* Return Value

  number type, 1 means succeeded, 0 means failed

------


## uart

uart and virtual AT interactive interface

------



### uart.setup()

uart communication

- Syntax

  `baud = uart.setup( id, baud, databits, parity, stopbits,[msgmode,txDoneReport] )`

- Argument

  | Argument         | Description                                                         |
  | ------------ | ------------------------------------------------------------ |
  | id           | serial number, choose from 0,1,2                                            |
  | baud         | baud rate, range in 1200，2400，4800，9600，10400，14400，19200，28800，38400，57600，115200，230400，460800，921600 |
  | databits     | data bit, 7 or 8                                                 |
  | parity       | parity, choose from uart.PAR_EVEN, uart.PAR_ODD, and uart.PAR_NONE       |
  | stopbits     | stop bit, choose from uart.STOP_1 and uart.STOP_2                         |
  | msgmode      | 0 or default - message information，1 - No message reports, requires user proactive polling        |
  | txDoneReport | txdone message reporting switch. 0：off，1：on                         |

- Return Value

  Real baud rate of the serial port

------

### uart.write()

Write a string or integer data to the serial port

- Syntax

  `uart.write( id, data1, [data2], ..., [datan] )`

- Argument

  | Argument        | Description                      |
  | ----------- | ------------------------- |
  | id          | serial number, choose from 0,1,2         |
  | data1       | first string or 8-bit integer data |
  | data2       | second string or 8-bit integer data |
  | datan(optional) | nth string or 8-bit integer data  |

- Return Value

  None

------



### uart.getchar()

Read a single character from the serial port

- Syntax

  `str = uart.getchar( id )`

- Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | id   | serial number, choose from 0,1,2 |

- Return Value

  Character read from the serial port

------



### uart.read()

Read string from serial port

- Syntax

  `str = uart.read( id, format)`

- Argument

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | id     | serial number                                                      |
  | format | \*l：Read end character \n or block send<br/> \*n: read integer data<br/>\*s: read to space character<br/> number, number type: read only number length The data |

- Return Value

  Data read from the serial port

------



### uart.close()

Close uart interface

- Syntax

  `uart.close(id)`

- Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | id   | serial number, choose from 0,1,2 |

- Return Value

  None

------

## Lua Standard Library

## io

### io.open()

This function opens a file in the mode specified by the string mode.

* Syntax

  `io.open(filename [, mode])`

* Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | filename | string, filename                                               |
  | mode     | string, optional <br>"r"：read mode (default)；<br>"w"：write mode；<br>"a"：append mode <br>"r+"：update mode, all previous data is retained<br>"w+"：update mode, all previous data is deleted;<br>"a+"： append update mode, all previous data is retained, only allow apending at the end of file |

* Return Value

  Returns a new file handle. When an error occurs, return nil plus error message.

* Example

```lua
file = io.open("test.lua", "r")
```

----

### file:close()

Close file handler

* Syntax

  `file:close()`

* Argument

  None

* Return Value

  None

-----

### file:flush()

Write all data in the buffer to the file 

* Syntax

  `file:flush()`

* Argument

  None

* Return Value

  None

----

### file:read()

Read file, the specified format determines what to read. 

* Syntax

  `file:read(...)`

* Argument

  | Argument     | Description                                                         |
  | -------- | ------------------------------------------------------------ |
  | "*n"     | Read a number that may return a floating point number or an integer based on Lua's conversion grammar. (Numbers can have pre- or post-spaces, as well as symbols.) As long as they can form a legal number, this format always reads the longest string; if the read prefix does not constitute a legal number (such as an empty string, " `0x`" or "`3.4e-`"), the abort function runs, returning nil. |
  | "*a"     | Read the entire file from the current location. If it is already at the end of the file, return an empty string.   |
  | "*l"     | Read a row and ignore the end of line marker. When at the end of the file, return nil which is the default format.|
  | "number" | Read a string that does not exceed this number of bytes. Returns nil when at the end of the file. If number is zero, it reads nothing and returns an empty string. Returns nil when at the end of the file. |

* Return Value

  For each format, the function returns the string or number corresponding to the character being read. If the data cannot be read in this format, return nil

* Example

```lua
local file = io.open("test.txt", "r")
print(file:read("*l"))  --this is test 1
print(file:read("*n"))  --nil
print(file:read(2))  --th
```

-----

### file:seek()

Set and obtain the current file position

* Syntax

  `file:seek([whence][,offset]) `

* Syntax

  | Argument   | Description                                                         |
  | ------ | ------------------------------------------------------------ |
  | whence | Optional <br>"set": start from the brginning of the file <br>"cur": start from current position[default] <br>"end": start from the end of the file |
  | offset | offset                                                       |

* Return Value

 If successful, return the final file location (in bytes), if it fails, return nil plus error message

* Example

```lua
local file = io.open("test.txt", "r+")
print(file:seek("end"))		--30
print(file:seek("set"))		--0
print(file:seek())	        --0
print(file:seek("cur", 10))		--10
print(file:seek("cur"))		--10
print(file:read(1))			--s
print(file:seek("cur"))		--11
file:close()
```

-----

### file:write ()

Write every value of arguments into file

* Syntax

  `file:write (...)`

* Argument

  | Argument | Description                                                         |
  | ---- | ------------------------------------------------------------ |
  | ...  | argument must be a string or a number. To output other values, you need to convert it by tostring or string.format. |

* Return Value

  On success, the function returns file. Otherwise return nil plus error description string. 

   

-----



## math

Basic math function, **Note！Only LOD with FLOAT can use math library, other LOD cannot use math library**

------

### math.abs()

Calculate the absolute value

* Syntax

  `math.abs(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns the absolute value of x 

----

### math.acos()

Calculate the inverse cosine 

* Syntax

  `math.acos(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns the inverse cosine of x (in radians).

-----

### math.asin()

  Calculate the inverse sine value. 

* Syntax

  `math.asin(X)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns the arc sine of x (in radians).

----

### math.atan()

Calculate the arctangent value.

* Syntax

  `math.atan(y[,x])`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | y    | integer/float type |
  | x    | 默认x为1          |

* Return Value

  Returns the arctangent of y/x (in radians)

----

### math.ceil()

Calculate the smallest integer value

* Syntax

  `math.ceil(x)`

* Argument

  | Argument | Description    |
  | ---- | ------- |
  | x    | integer |

* Return Value

  Returns the smallest integer value that is not less than x
-----

### math.cos()

Calculating the cosine value

* Syntax

  `math.cos(x)`

* Argument

  | Argument | Description   |
  | ---- | ------ |
  | x    | radian value |

* Return Value

  Return the cosine of x 

---

### math.deg()

Radian converted to angle

* Syntax

  `math.deg(x)`

* Argument

  | Argument | Description   |
  | ---- | ------ |
  | x    | radian |

* Return Value

  Returns the converted angle value

----

### math.exp()

Calculate the value of *ex* (*e* is the base of the natural logarithm) 

* Syntax

  `math.exp(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

   *ex* (e is the base of the natural logarithm)

-----

### math.floor()

Calculates the largest integer value that is not greater than x. 

* Syntax

  `math.floor(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns the largest integer value that is not greater than x.

------

### math.fmod()

Calculate the remainder of x divided by y and round the quotient to zero

* Syntax

  `math.fmod(x,y)`

* Argument

  | Argument | Description                      |
  | ---- | ------------------------- |
  | x    | integer/float type，除数   |
  | y    | integer/float type，被除数 |

* Return Value

  Returns the remainder of x divided by y, rounded to zero.
------

### math.huge

Floating point number HUGE_VAL, this number is larger than any numeric value.

* Syntax

  `math.huge`

* Argument

  None

* Return Value

  None

-----

### math.log()

Calculates the logarithm of x at the specified base. The default base is *e* (so this function returns the natural logarithm of x).

* Syntax

  `math.log(x[,base])`

* Argument

  | Argument | Description            |
  | ---- | --------------- |
  | x    | exponents            |
  | base | base, the default value is*e* |

* Return Value

  Returns the logarithm of x at the specified base 

----

### math.max()

Calculate the largest value in arguments, the size is determined by the Lua operation <. 

* Syntax

  `math.max(x,...)`

* Argument

  | Argument | Description                                  |
  | ---- | ------------------------------------- |
  | x    | integer/float type                     |
  | ...  | integer/float type, unspecific argument, multiple values |

* Return Value

  return the maximum number in arguments

-----

### math.min()

Returns the smallest value in argument, the size is determined by the Lua operation <. 

* Syntax

  `math.min(x,...)`

* Argument

  | Argument | Description                                  |
  | ---- | ------------------------------------- |
  | x    | integer/float type                     |
  | ...  | integer/float type, unspecific argument, multiple values |

* Return Value

  Return the minimum value in arguments.

----

### math.maxinteger

The integer of the maximum.

* Syntax

  `math.maxinteger`

* Argument

  None

* Return Value

  None

----

### math.mininteger

The integer of the minimum.

* Syntax

  `math.mininteger`

* Argument

  None

* Return Value

  None

-----

### math.modf()

Computes the integer and fractional parts of x.

* Syntax

  `math.modf(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns the integer and fractional parts of x. The second result must be a floating point number. 

-----

### math.pi

The value of *π* 

* Syntax

  `math.pi`

* Argument

  None

* Return Value

  None

-------

### math.rad()

Convert angle x from angle to radians.

* Syntax

  `math.rad(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

Angle x converted from angle to radians.

-----

### math.random()

Random number

* Syntax

  `math.random([m[,n]])`

* Argument

  | Argument | Description             |
  | ---- | ---------------- |
  | m    | left boundary value of random number |
  | n    | right boundary value of random number |

* Return Value

  When there is no argument call, it returns a floating-point pseudo-random number that is uniformly distributed in the interval [0,1). <br>When called with two integers m and n, math.random returns a uniformly distributed integer pseudorandom number in the [m, n] interval. (The value *m-n* cannot be a negative number and must be within the range of the Lua integer.) <br> Calling math.random(n) is equivalent to math.random(1,n).   

-----

### math.randomseed()

Set x to the "seed" of the pseudo-random number generator: The same seed produces the same random sequence.

* Syntax

  `math.randomseed(x)`

* Argument

  | Argument | Description       |
  | ---- | ---------- |
  | x    | random number seed |

* Return Value

  None

----

### math.sin()

Calculate the x sine (assuming argument is radians) 

* Syntax

  `math.sin(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns the sine of x

------

### math.sqrt()

Calculate x square root 

* Syntax

  `math.sqrt(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns the square root of x. 

-----

### math.tan()

Calculate the tangent of x (assuming argument is radians)

* Syntax

  `math.tan(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns the tangent of x

----

### math.tointeger()

Convert Argument to an integer

* Syntax

  `math.tointeger(x)`

* Argument

  | Argument | Description      |
  | ---- | --------- |
  | x    | float type |

* Return Value

  If x can be converted to an integer, the integer is returned. Otherwise return nil. 

------

### math.type()

Determine the type of number

* Syntax

  `math.type(x)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | x    | integer/float type |

* Return Value

  Returns "integer" if x is an integer, "float" if it is a float, or nil if x is not a number.

---------

### math.ult()

Comparing values.

* Syntax

  `math.ult(m,n)`

* Argument

  | Argument | Description              |
  | ---- | ----------------- |
  | m    | integer/float type |
  | n    | integer/float type |

* Return Value

  The integers m and n are compared as unsigned integers, m is below n, returns boolean true, or returns false. 

----

## string

Sring operation library

-----

### string.upper()

Letters in string are all converted to uppercase.

* Syntax

  `string.upper(s)`

* Argument

  | Argument | Description                 |
  | ---- | -------------------- |
  | s    | string needs to be transformed|

* Return Value

  String of uppercase letters

-----

### string.lower()

Letters in string are all converted to lowercase

* Syntax

  `string.lower(s)`

* Argument

  | Argument | Description                 |
  | ---- | -------------------- |
  | s    | string needs to be transformed|

* Return Value

  String of lowercase letters

-------

### string.gsub()

String replacement

* Syntax

  `string.gsub(s,pattern,repl[,n])`

* Argument

  | Argument    | Description         |
  | :------ | ------------ |
  | s       | new string  |
  | pattern |              |
  |         |              |
  |         |              |









-----

### string.find()

Find the matching pattern in the first string s

* Syntax

  `string.find(s,pattern[,init[,plain]])`

* Argument

  | Argument    | Description                                                         |
  | ------- | ------------------------------------------------------------ |
  | s       | target string                                                  |
  | pattern | matching character                                                     |
  | init    | optional, the starting position of search                                           |
  | plain   | optional, When argument is true, the pattern matching mechanism is turned off. At this point, the function only does the direct "find substring" operation. |

* Return Value

  Returns the exact location of the matching character. Returns nil if it does not exist

* Example

```lua
string.find("Hello Lua user", "Lua", 1)   --7   9
```

-------

### string.reverse()

Reverse string.

* Syntax

  `string.reverse(s)`

* Argument

  | Argument | Description                |
  | ---- | ------------------- |
  | s    | string, string needs to be reversed |

* Return Value

  String reversed.

* Example

```lua
string.reverse("Luat")  --tauL
```

----

### string.format()

Format string 

* Syntax

  `sting.format(formatString,...)`

* Argument

  | Argument         | Description                          |
  | ------------ | ----------------------------- |
  | formatString | format string                  |
  | ...          | Similar to placeholders in printf with C language |

* Return Value

  String

* Example

```lua
string.format("the value is:%d",4)   --the value is:4
```

-----

### string.char()

Receive ASCII code and return the corresponding control character

* Syntax

  `string.char(...)`

* Argument

  | Argument | Description          |
  | ---- | ------------- |
  | ...  | multiple ASCII code values |

* Return Value

  characters

* Example

```lua
string.char(97,98,99,100)   --abcd
```

-----

### string.byte()

Receive control characters, return ASCII code

* Syntax

  `string.byte(s[,int])`

* Argument

  | Argument | Description                    |
  | ---- | ----------------------- |
  | s    | control characters                |
  | int  | optional, character subscript, the default value is1 |

* Return Value

  ASCII code

* Example

```lua
string.byte("ABCD")  --65
string.byte("ABCD",4) --68
```

-----

### string.len()

calculate the length of the string

* Syntax

  `string.len(s)`

* Argument

  | Argument | Description   |
  | ---- | ------ |
  | s    | string |

* Return Value

  length of string

* Example

```lua
string.len("abc")  --3
```

-----

### string.rep()

Replicate string

* Syntax

  `string.rep(s,n)`

* Argument

  | Argument | Description     |
  | ---- | -------- |
  | s    | string   |
  | n    | times of replication |

* Return Value

  String

* Example

```lua
string.rep("abcd",2)   --abcdabcd
```

-----

## table

The general function flags of the characters' subscript

-----

### table.concat()

Table connection

* Syntax

  `table.concat(table [, sep [, start [, end]]])`

* Argument

  | Argument  | Description          |
  | ----- | ------------- |
  | table | specific table        |
  | sep   | seperation character        |
  | start | starting position of table |
  | end   | ending position of table |

* Return Value

  string

* Example

```lua
fruits = {"banana","orange","apple"}
--Returns the string after the table is joined
print("String after concatenation", table.concat(fruits))
--Connected string bananaorangeapple

-- Specify connection characters
print("String after concatenation", table.concat(fruits,", "))
-- connected string banana, orange, apple

-- Specify an index to connect to table
print("String after concatenation", table.concat(fruits,", ", 2,3))
-- the string after the connection orange, apple
```

-----

### table.insert()

insert tableArgument

* Syntax

  `table.insert(table, [pos,] value)`

* Argument

  | Argument  | Description                       |
  | ----- | -------------------------- |
  | table | specific table                     |
  | pos   | optional, specific position, the default position is the end of table |
  | value | value inserted                     |

* Return Value

  table

* Example

```lua
fruits = {"banana","orange","apple"}

-- insert at the end
table.insert(fruits,"mango")
print("the element of index 4 ",fruits[4])
--the element of index 4 is mango

-- insert in the key which index is 2
table.insert(fruits,2,"grapes")
print("the element of index 2 ",fruits[2])
--the element of index 2 is grapes

print("the last element is ",fruits[5])
--the last element is mango
```

-----

### table.remove()

Remove tableArgument

* Syntax

  `table.remove(table[,pos])`

* Argument

  | Argument  | Description                                    |
  | ----- | --------------------------------------- |
  | table | specific table                                  |
  | pos   | optional, table subscript, by default start from the last element |

* Return Value

  table

------








<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>