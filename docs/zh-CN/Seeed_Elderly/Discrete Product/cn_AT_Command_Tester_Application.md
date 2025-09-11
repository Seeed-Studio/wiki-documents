---
description: AT指令测试应用程序
title: AT指令测试应用程序
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/AT_Command_Tester_Application
last_update:
  date: 1/13/2023
  author: shuxu hu
---

[AT指令测试器](https://m2msupport.net/m2msupport/module-tester/) 是一个在线工具，用于测试AT指令以及其他模块功能，例如 [数据呼叫](https://m2msupport.net/m2msupport/data-call-at-commands-to-set-up-gprsedgeumtslte-data-call/)、[语音呼叫](https://m2msupport.net/m2msupport/voice-call-at-commands-to-set-up-voice-call/)、[HTTP](https://m2msupport.net/m2msupport/at-command-for-http-functions-for-remote-server-data-access/)、[网络注册](https://m2msupport.net/m2msupport/network-registration/)、[短信](https://m2msupport.net/m2msupport/sms-at-commands/)、[电话簿](https://m2msupport.net/m2msupport/sim-phonebook-at-commands/)、[信号质量](https://m2msupport.net/m2msupport/signal-quality/)、[SIM接口](https://m2msupport.net/m2msupport/sim-at-commands-for-sim-presense-and-status/)、[设备信息](https://m2msupport.net/m2msupport/at-commands-to-get-device-information/)等。

AT指令测试器可以与[2G模块](https://m2msupport.net/m2msupport/category/devices/gprs-modem/)（GPRS/EDGE/1x）、[3G模块](https://m2msupport.net/m2msupport/category/devices/3g-modules/)（HSDPA/HSPA/EVDO）或[4G模块](https://m2msupport.net/m2msupport/search-page/?Max!Download!Speed=100%20Mbps)（LTE）一起使用。

首先选择“Find Ports”以搜索可用端口。然后选择调制解调器端口并按“Connect”。连接到模块后，可以从“Command Mode”选项卡发送AT指令。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/M2m_img1.PNG)

在脚本模式下，可以同时发送多个AT指令，如下所示。您可以创建自己的脚本并将其保存在本地机器上。然后加载脚本并执行。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Script_mode.PNG)

要对SIM900模块进行基本诊断，请选择“Diagnostics”选项卡。
![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Diagnistics_mode.PNG)
诊断指令及结果如下所示：

AT+CGMI SIMCOM_Ltd OK  
制造商：SIMCOM_Ltd  
[AT+CGMM](https://m2msupport.net/m2msupport/atcgmm-request-model-identificaiton/)  

SIMCOM_SIM900  

OK  
型号：SIMCOM_SIM900  

[AT+CGMR](https://m2msupport.net/m2msupport/atcgmr-request-revision-identification/)  

版本：1137B03SIM900M64_ST_MMS  

OK  
版本：1137B03SIM900M64_ST_MMS  

[AT+CSQ](https://m2msupport.net/m2msupport/atcsq-signal-quality/)  

+CSQ: 8,0  

OK  
信号强度为 -97 dbm。信号状况为边缘。信号强度范围为 -53 dbm（优秀）到 -109 dbm（边缘）。

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)  

+CREG: 0,1  

OK  
设备已注册到本地网络。

[AT+CGACT?](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)  

+CGACT: 1,0  
+CGACT: 2,0  
+CGACT: 3,0  

OK  
设备未连接。

[AT+COPS?](https://m2msupport.net/m2msupport/atcops-plmn-selection/)  

+COPS: 0,0,"T-Mobile"  

OK  
设备当前在“T-Mobile”网络上。

[AT+CPIN?](https://m2msupport.net/m2msupport/atcpin-enter-pin/)  

+CPIN: READY OK  

SIM已准备好。

使用SIM900进行语音呼叫,选择“Voice Call”选项卡以测试拨出和接入语音呼叫。“AT指令测试器”将在拨打电话前检查设备是否已注册。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Voicecall.PNG)

拨出电话的AT指令序列如下所示：  
检查注册状态...  
AT+CREG?  
+CREG: 0,1  
OK  
设备已注册到本地网络。  
拨打号码 858xxxxxxx  

[ATD](https://m2msupport.net/m2msupport/atd-dial-voice-call/)858XXXXXXX;  

OK  
语音呼叫成功  
挂断电话...  

ATH  

OK  
电话成功断开连接。  

[AT+CNUM](https://m2msupport.net/m2msupport/atcnum-subscriber-number/)  

+CNUM: "","1858XXXXXXX",129,7,4 OK  

使用SIM900进行GPRS数据呼叫  
要使用SIM900调制解调器设置GPRS呼叫，请选择“Data Call”选项卡。在这里可以获取设备上存储的所有PDP上下文。PDP上下文包含运营商APN及其他设置GPRS呼叫所需的信息。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Datacall.PNG)

以下是设置数据呼叫的AT指令序列：

[AT+CGDCONT?](https://m2msupport.net/m2msupport/atcgdcont-define-pdp-context/)  

+CGDCONT: 1,"IP","epc.tmobile.com","0.0.0.0",0,0  
+CGDCONT: 2,"IP","test5","0.0.0.0",0,0  
+CGDCONT: 3,"IP","","0.0.0.0",0,0  

OK  
检查注册状态...  

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)  

+CREG: 0,1  

OK  
设备已注册到本地网络。  

检查设备是否已连接...  

[AT+CGACT?](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)  

+CGACT: 1,0  
+CGACT: 2,0  
+CGACT: 3,0  

OK  
[AT+CMEE=1](https://m2msupport.net/m2msupport/atcmee-report-mobile-termination-error/)  

OK  
连接到网络...  
AT+CGATT=1  

OK  

连接中...  

[AT+CGACT=1, 1](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)  

OK  
连接成功  

使用SIM900发送短信,选择“SMS”选项卡以发送短信。您还可以读取和删除SIM上存储的短信。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Sms.PNG)

以下是发送短信的AT指令序列：  

检查注册状态...  

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)  

+CREG: 0,1  

OK  
设备已注册到本地网络。  

AT+CMGS="858XXXXXXX"  

&gt; 使用AT指令测试器发送测试消息  

+CMGS: 19  

OK  
短信发送成功  

网络选择,网络选择功能允许用户选择可用的网络。使用“Network Selection”选项卡来实现此功能。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Network_selection.PNG)

以下是网络选择的指令：  


寻找网络。请稍候...

[AT+COPS=?](https://m2msupport.net/m2msupport/atcops-plmn-selection/)

+COPS: (2,"T-Mobile","T-Mobile","310260"),(1,"AT&amp;T","AT&amp;T","310410"),,(0,1,4),(0,1,2)

OK  
已找到网络

电话簿

在“电话簿”标签中，您可以添加/删除/读取存储在 SIM 卡上的电话簿条目。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Phone_book.PNG)

正在获取电话簿条目...

[AT+CPBR=1,99](https://m2msupport.net/m2msupport/atcpbr-read-phonebook-entries/)

+CPBR: 1,"*233",129,"立即充值"

+CPBR: 2,"#999#",255,"检查余额"

+CPBR: 3,"8878878878",129,"测试"

OK

SIM900 HTTP

在“HTTP”标签中，您可以读取承载配置文件并测试 HTTP GET 和 HTTP POST。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Http.PNG)

正在获取承载配置文件...

AT+SAPBR=4,1

+SAPBR:  
CONTYPE: GPRS  
APN:  
PHONENUM:  
USER:  
PWD:  
RATE: 2  

OK  
AT+SAPBR=4,2

+SAPBR:  
CONTYPE: GPRS  
APN:  
PHONENUM:  
USER:  
PWD:  
RATE: 2  

OK  
AT+SAPBR=4,3

+SAPBR:  
CONTYPE: GPRS  
APN:  
PHONENUM:  
USER:  
PWD:  
RATE: 2  

OK  

正在检查注册状态...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK  
设备已注册到本地网络。

查询承载 1。

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"

OK  
承载 1 已连接。IP 地址为 "162.184.222.162"

承载 1 已连接。

初始化 HTTP 服务...

[AT+HTTPINIT](https://m2msupport.net/m2msupport/athttpinit-initialize-http-service/)

OK  
初始化 HTTP 服务时出错。

设置 HTTP 参数...

[AT+HTTPPARA](https://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="URL","[http://www.m2msupport.net/m2msupport/http_get_test.php](http://www.m2msupport.net/m2msupport/http_get_test.php)"

OK  
[AT+HTTPPARA](https://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="CID",1[[|]]

OK  
[AT+HTTPACTION](https://m2msupport.net/m2msupport/athttpaction-perform-getposthead-http-action/)=0

OK  

HTTP GET 成功

[AT+HTTPREAD](https://m2msupport.net/m2msupport/athttpread-get-response-from-http-server/)

+HTTPREAD:58  
成功的 HTTP GET 测试。从 m2msupport.net 接收到数据  
OK  
终止 HTTP 会话...

[AT+HTTPTERM](https://m2msupport.net/m2msupport/athttpterm-terminate-the-http-session/)

OK  

SIM900 FTP

使用 SIM900 模块进行 FTP Get 和 Put 测试，如下所示：

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Ftp.PNG)

正在检查注册状态...

AT+CREG?

+CREG: 0,1

OK  
设备已注册到本地网络。

查询承载 1。

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"

OK  
承载 1 已连接。IP 地址为 "162.184.222.162"

承载 1 已连接。

设置 FTP 参数...

[AT+FTPCID](https://m2msupport.net/m2msupport/atftpcid-set-ftp-bearer-profile-identifier/)=1

OK  

[AT+FTPSERV](https://m2msupport.net/m2msupport/atftpserv-set-up-ftp-server-address/)="ftp.m2msupport.net"

OK  
[AT+FTPUN](https://m2msupport.net/m2msupport/atftpun-set-up-ftp-user-name/)="xxxxxx"

OK  
[AT+FTPPW](https://m2msupport.net/m2msupport/atftppw-sets-up-ftp-password/)="xxxxxxx"

OK  
[AT+FTPGETNAME](https://m2msupport.net/m2msupport/atftpgetname-set-download-file-name/)="ftptest.txt"

OK  
[AT+FTPGETPATH](https://m2msupport.net/m2msupport/atftpgetpath-set-the-ftp-download-file-path/)="/www/m2msupport/"

OK  
[AT+FTPGET](https://m2msupport.net/m2msupport/atftpget-set-download-file/)=1

OK  

+FTPGET:1,1  
FTP 会话成功启动

[AT+FTPGET](https://m2msupport.net/m2msupport/atftpget-set-download-file/)=2,1024

+FTPGET:2,784  
2-11-16 10:53:34.769 -----------------------------------------------  
eclipse.buildId=M20120914-1800  
java.version=1.6.0_16  
java.vendor=Sun Microsystems Inc.  
BootLoader constants: OS=win32, ARCH=x86, WS=win32, NL=en_US  
Framework arguments: -product org.eclipse.epp.package.java.product  
Command-line arguments: -os win32 -ws win32 -arch x86 -product org.eclipse.epp.package.java.product  

!ENTRY org.eclipse.m2e.logback.appender 4 0 2012-11-16 12:11:54.493  
!MESSAGE 无法更新中央索引 | [http://repo.maven.apache.org/maven2](http://repo.maven.apache.org/maven2): C:\Users\sgobi.m2\repository.cache\m2e\1.2.0\26522e0d83a422eed93329ece7565cfc\nexus-maven-repository-index.zip (系统找不到指定的文件)  

!ENTRY org.eclipse.jdt.ui 4 10001 2012-11-16 13:21:21.138  
!MESSAGE 内部错误  
!STACK 1  
OK  
[AT+FTPGET](https://m2msupport.net/m2msupport/atftpget-set-download-file/)=2,1024

+FTPGET:2,0  

OK  
FTP 数据传输完成

+FTPGET:1,0  
FTP 会话结束

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>