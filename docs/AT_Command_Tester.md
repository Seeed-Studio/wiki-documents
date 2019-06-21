---
name: AT Command Tester
category: Tutorial
oldwikiname:  AT Command Tester
prodimagename:
surveyurl: https://www.research.net/r/AT_Command_Tester
---

[AT Command Tester](http://m2msupport.net/m2msupport/module-tester/)   is an online tool for testing AT commands and other module functionalities such as [data call](http://m2msupport.net/m2msupport/data-call-at-commands-to-set-up-gprsedgeumtslte-data-call/), [voice call](http://m2msupport.net/m2msupport/voice-call-at-commands-to-set-up-voice-call/),[HTTP](http://m2msupport.net/m2msupport/at-command-for-http-functions-for-remote-server-data-access/), [network registration](http://m2msupport.net/m2msupport/network-registration/), [SMS](http://m2msupport.net/m2msupport/sms-at-commands/), [Phonebook](http://m2msupport.net/m2msupport/sim-phonebook-at-commands/), [signal quality](http://m2msupport.net/m2msupport/signal-quality/), [SIM interface](http://m2msupport.net/m2msupport/sim-at-commands-for-sim-presense-and-status/), [device info](http://m2msupport.net/m2msupport/at-commands-to-get-device-information/) etc.

AT Command Tester can be used with [2G Modules](http://m2msupport.net/m2msupport/category/devices/gprs-modem/) (GPRS/EDGE/1x) or [3G Modules](http://m2msupport.net/m2msupport/category/devices/3g-modules/) (HSDPA/HSPA/EVDO) or [4G modules](http://m2msupport.net/m2msupport/search-page/?Max!Download!Speed=100%20Mbps) (LTE)

First select 'Find Ports' to search for available ports. Then select the modem port and press 'Connect'. Once connected to the module, you can send AT commands from the 'Command Mode' tab

![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/M2m_img1.PNG)

 In script mode, you can send multiple AT commands at a same time as shown below. You can create your own script and save it on the local machine.Then load the script and execute.

 ![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Script_mode.PNG)

 To perform basic diagnostics on the SIM900 module, choose the 'Diagnostics' tab,
![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Diagnistics_mode.PNG)
 The diagnostics commands and the results are shown an below, AT+CGMI SIMCOM_Ltd OK
Manufacturer: SIMCOM_Ltd
[AT+CGMM](http://m2msupport.net/m2msupport/atcgmm-request-model-identificaiton/)

SIMCOM_SIM900

OK
Model Number : SIMCOM_SIM900

[AT+CGMR](http://m2msupport.net/m2msupport/atcgmr-request-revision-identification/)

Revision:1137B03SIM900M64_ST_MMS

OK
Revision: Revision:1137B03SIM900M64_ST_MMS

[AT+CSQ](http://m2msupport.net/m2msupport/atcsq-signal-quality/)

+CSQ: 8,0

OK
Signal level is -97 dbm. Signal condition is marginal.The signal strength range is -53 dbm (Excellent) to -109 dbm (Marginal).

[AT+CREG?](http://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
The device is registered in home network.

[AT+CGACT?](http://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

+CGACT: 1,0
+CGACT: 2,0
+CGACT: 3,0

OK
Device is NOT connected.

[AT+COPS?](http://m2msupport.net/m2msupport/atcops-plmn-selection/)

+COPS: 0,0,"T-Mobile"

OK
Device is currently on "T-Mobile" network.

[AT+CPIN?](http://m2msupport.net/m2msupport/atcpin-enter-pin/)

+CPIN: READY OK

SIM is ready.

##   Voice Call with SIM900

Select the 'Voice Call' tab to test outgoing and incoming voice calls. The 'AT Command Tester' will check whether the device is registered before dialing the call,

![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Voicecall.PNG)

The AT command sequence for outgoing call is shown below, Checking registration status... AT+CREG? +CREG: 0,1 OK
The device is registered in home network. Dialing number 858xxxxxxx

[ATD](http://m2msupport.net/m2msupport/atd-dial-voice-call/)858XXXXXXX;

OK
Voice call successfull Hanging up the call..

ATH

OK
Call sucessfully dis-connected..

[AT+CNUM](http://m2msupport.net/m2msupport/atcnum-subscriber-number/)

+CNUM: "","1858XXXXXXX",129,7,4 OK

##   GPRS Data call with SIM900

To setup GPRS call with the SIM900 modem, select the 'Data Call' tab. Here you can get all the PDP context stored on the device. The PDP context has carrier APN and other information that are required to set up a GPRS call.

![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Datacall.PNG)
 Here is the sequence of AT commands to set up data call

[AT+CGDCONT?](http://m2msupport.net/m2msupport/atcgdcont-define-pdp-context/)

+CGDCONT: 1,"IP","epc.tmobile.com","0.0.0.0",0,0
+CGDCONT: 2,"IP","test5","0.0.0.0",0,0
+CGDCONT: 3,"IP","","0.0.0.0",0,0

OK
Checking registration status...

[AT+CREG?](http://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
The device is registered in home network.

Checking if device is already connected...

[AT+CGACT?](http://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

+CGACT: 1,0
+CGACT: 2,0
+CGACT: 3,0

OK
[AT+CMEE=1](http://m2msupport.net/m2msupport/atcmee-report-mobile-termination-error/)

OK
Attaching to network...
AT+CGATT=1

OK

Connecting...

[AT+CGACT=1, 1](http://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

OK
Connect Sucessful

##   SMS with SIM900

Select the 'SMS' to send SMS messages. You can also read and delete SMS messages stored on the SIM.

![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Sms.PNG)

Here is the sequence of AT commands to send SMS message,

Checking registration status...

[AT+CREG?](http://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
The device is registered in home network.

AT+CMGS="858XXXXXXX"

&gt; Test Message with AT Command Tester�

+CMGS: 19

OK
SMS Send successful

##   Network Selection

Network selection enables the user to select the network that is available. Use the 'Network Selection' tab for this feature

![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Network_selection.PNG)

Here are the commands for Network Selection,

Finding Networks. Please wait..

[AT+COPS=?](http://m2msupport.net/m2msupport/atcops-plmn-selection/)

+COPS: (2,"T-Mobile","T-Mobile","310260"),(1,"AT&amp;T","AT&amp;T","310410"),,(0,1,4),(0,1,2)

OK
Networks found

##   Phonebook

With the 'Phone Book' tab, you can add/delete/read phone book entries stored on the SIM,

![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Phone_book.PNG)

Getting phonebook entries..

[AT+CPBR=1,99](http://m2msupport.net/m2msupport/atcpbr-read-phonebook-entries/)

+CPBR: 1,"*233",129,"Refill Now"

+CPBR: 2,"#999#",255,"Check Balance"

+CPBR: 3,"8878878878",129,"Test"

OK

##   SIM900 HTTP

With the 'HTTP' tab, you can read the bearer profiles and test HTTP GET and HTTP POST,

![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Http.PNG)

Getting Bearer profiles..

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

Checking registration status...

[AT+CREG?](http://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
The device is registered in home network.

Querying bearer 1 .

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"

OK
Bearer 1 is Connected.IP address is "162.184.222.162"

Bearer 1 is Connected.

Initializing HTTP service...

[AT+HTTPINIT](http://m2msupport.net/m2msupport/athttpinit-initialize-http-service/)

OK
Error initializing HTTP service.

Setting up HTTP parameters..

[AT+HTTPPARA](http://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="URL","[http://www.m2msupport.net/m2msupport/http_get_test.php](http://www.m2msupport.net/m2msupport/http_get_test.php)"

OK
[AT+HTTPPARA](http://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="CID",1[[|]]

OK
[AT+HTTPACTION](http://m2msupport.net/m2msupport/athttpaction-perform-getposthead-http-action/)=0

OK

HTTP GET is sucessful

[AT+HTTPREAD](http://m2msupport.net/m2msupport/athttpread-get-response-from-http-server/)

+HTTPREAD:58
Sucessful HTTP GET test. Data received from m2msupport.net
OK
Terminating HTTP session..

[AT+HTTPTERM](http://m2msupport.net/m2msupport/athttpterm-terminate-the-http-session/)

OK

##   SIM900 FTP

FTP Get and Put with SIM900 module can be tested as shown below,

![](https://github.com/SeeedDocument/AT_Command_Tester/raw/master/img/Ftp.PNG)

Checking registration status...

AT+CREG?

+CREG: 0,1

OK
The device is registered in home network.

Querying bearer 1 .

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"

OK
Bearer 1 is Connected.IP address is "162.184.222.162"

Bearer 1 is Connected.

Setting up FTP parameters..

[AT+FTPCID](http://m2msupport.net/m2msupport/atftpcid-set-ftp-bearer-profile-identifier/)=1

OK

[AT+FTPSERV](http://m2msupport.net/m2msupport/atftpserv-set-up-ftp-server-address/)="ftp.m2msupport.net"

OK
[AT+FTPUN](http://m2msupport.net/m2msupport/atftpun-set-up-ftp-user-name/)="xxxxxx"

OK
[AT+FTPPW](http://m2msupport.net/m2msupport/atftppw-sets-up-ftp-password/)="xxxxxxx"

OK
[AT+FTPGETNAME](http://m2msupport.net/m2msupport/atftpgetname-set-download-file-name/)="ftptest.txt"

OK
[AT+FTPGETPATH](http://m2msupport.net/m2msupport/atftpgetpath-set-the-ftp-download-file-path/)="/www/m2msupport/"

OK
[AT+FTPGET](http://m2msupport.net/m2msupport/atftpget-set-download-file/)=1

OK

+FTPGET:1,1
FTP session sucessfully started

[AT+FTPGET](http://m2msupport.net/m2msupport/atftpget-set-download-file/)=2,1024

+FTPGET:2,784
2-11-16 10:53:34.769 -----------------------------------------------
eclipse.buildId=M20120914-1800
java.version=1.6.0_16
java.vendor=Sun Microsystems Inc.
BootLoader constants: OS=win32, ARCH=x86, WS=win32, NL=en_US
Framework arguments: -product org.eclipse.epp.package.java.product
Command-line arguments: -os win32 -ws win32 -arch x86 -product org.eclipse.epp.package.java.product

!ENTRY org.eclipse.m2e.logback.appender 4 0 2012-11-16 12:11:54.493
!MESSAGE Unable to update index for central|[http://repo.maven.apache.org/maven2](http://repo.maven.apache.org/maven2): C:\Users\sgobi\.m2\repository\.cache\m2e\1.2.0\26522e0d83a422eed93329ece7565cfc\nexus-maven-repository-index.zip (The system cannot find the file specified)

!ENTRY org.eclipse.jdt.ui 4 10001 2012-11-16 13:21:21.138
!MESSAGE Internal Error
!STACK 1
OK
[AT+FTPGET](http://m2msupport.net/m2msupport/atftpget-set-download-file/)=2,1024

+FTPGET:2,0

OK
FTP data transfer is complete

+FTPGET:1,0
FTP session end

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>