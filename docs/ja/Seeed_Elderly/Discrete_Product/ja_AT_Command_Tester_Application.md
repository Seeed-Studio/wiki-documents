---
description: ATコマンドテスターアプリケーション
title: ATコマンドテスターアプリケーション
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/AT_Command_Tester_Application
last_update:
  date: 05/15/2025
  author: shuxu hu
---


[AT Command Tester](https://m2msupport.net/m2msupport/module-tester/)は、ATコマンドやその他のモジュール機能（[データコール](https://m2msupport.net/m2msupport/data-call-at-commands-to-set-up-gprsedgeumtslte-data-call/)、[音声通話](https://m2msupport.net/m2msupport/voice-call-at-commands-to-set-up-voice-call/)、[HTTP](https://m2msupport.net/m2msupport/at-command-for-http-functions-for-remote-server-data-access/)、[ネットワーク登録](https://m2msupport.net/m2msupport/network-registration/)、[SMS](https://m2msupport.net/m2msupport/sms-at-commands/)、[電話帳](https://m2msupport.net/m2msupport/sim-phonebook-at-commands/)、[信号品質](https://m2msupport.net/m2msupport/signal-quality/)、[SIMインターフェース](https://m2msupport.net/m2msupport/sim-at-commands-for-sim-presense-and-status/)、[デバイス情報](https://m2msupport.net/m2msupport/at-commands-to-get-device-information/)など）のテストを行うためのオンラインツールです。

AT Command Testerは、[2Gモジュール](https://m2msupport.net/m2msupport/category/devices/gprs-modem/)（GPRS/EDGE/1x）、[3Gモジュール](https://m2msupport.net/m2msupport/category/devices/3g-modules/)（HSDPA/HSPA/EVDO）、または[4Gモジュール](https://m2msupport.net/m2msupport/search-page/?Max!Download!Speed=100%20Mbps)（LTE）で使用できます。

まず「Find Ports」を選択して利用可能なポートを検索します。その後、モデムポートを選択して「Connect」を押します。モジュールに接続されると、「Command Mode」タブからATコマンドを送信できます。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/M2m_img1.PNG)

スクリプトモードでは、以下のように複数のATコマンドを同時に送信できます。独自のスクリプトを作成してローカルマシンに保存し、そのスクリプトをロードして実行することができます。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Script_mode.PNG)

SIM900モジュールの基本的な診断を行うには、「Diagnostics」タブを選択します。
![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Diagnistics_mode.PNG)
診断コマンドと結果は以下の通りです：

```
AT+CGMI
SIMCOM_Ltd
OK
Manufacturer : SIMCOM_Ltd
```

[AT+CGMM](https://m2msupport.net/m2msupport/atcgmm-request-model-identificaiton/)

```
SIMCOM_SIM900
OK
Model Number : SIMCOM_SIM900
```

[AT+CGMR](https://m2msupport.net/m2msupport/atcgmr-request-revision-identification/)

```
Revision:1137B03SIM900M64_ST_MMS
OK
Revision : Revision:1137B03SIM900M64_ST_MMS
```

[AT+CSQ](https://m2msupport.net/m2msupport/atcsq-signal-quality/)

```
+CSQ: 8,0
OK
Signal level is -97 dbm. Signal condition is marginal. The signal strength range is -53 dbm (Excellent) to -109 dbm (Marginal).
```

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

```
+CREG: 0,1
OK
The device is registered in home network.
```

[AT+CGACT?](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

```
+CGACT: 1,0
+CGACT: 2,0
+CGACT: 3,0
OK
Device is NOT connected.
```

[AT+COPS?](https://m2msupport.net/m2msupport/atcops-plmn-selection/)

```
+COPS: 0,0,"T-Mobile"
OK
Device is currently on "T-Mobile" network.
```

[AT+CPIN?](https://m2msupport.net/m2msupport/atcpin-enter-pin/)

```
+CPIN: READY
OK
SIM is ready.
```

### SIM900での音声通話

「Voice Call」タブを選択して、発信および着信の音声通話をテストします。「AT Command Tester」は、通話をダイヤルする前にデバイスが登録されているかどうかを確認します。
![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Voicecall.PNG)

発信通話のATコマンドシーケンスは以下の通りです：

```
Checking registration status...
AT+CREG?
+CREG: 0,1
OK
The device is registered in home network.
Dialing number 858xxxxxxx
```

[ATD](https://m2msupport.net/m2msupport/atd-dial-voice-call/)858XXXXXXX;

```
OK
Voice call successful
Hanging up the call..
ATH
OK
Call successfully disconnected..
```

[AT+CNUM](https://m2msupport.net/m2msupport/atcnum-subscriber-number/)

```
+CNUM: "","1858XXXXXXX",129,7,4
OK
```

### SIM900でのGPRSデータコール

SIM900モデムでGPRSコールを設定するには、「Data Call」タブを選択します。ここでは、デバイスに保存されているすべてのPDPコンテキストを取得できます。PDPコンテキストには、キャリアAPNやGPRSコールを設定するために必要なその他の情報が含まれています。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Datacall.PNG)

データコールを設定するためのATコマンドシーケンスは以下の通りです：

[AT+CGDCONT?](https://m2msupport.net/m2msupport/atcgdcont-define-pdp-context/)

```
+CGDCONT: 1,"IP","epc.tmobile.com","0.0.0.0",0,0
+CGDCONT: 2,"IP","test5","0.0.0.0",0,0
+CGDCONT: 3,"IP","","0.0.0.0",0,0
OK
```

登録状況を確認中...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

```
+CREG: 0,1
OK
The device is registered in home network.
```

デバイスがすでに接続されているか確認中...

[AT+CGACT?](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

```
+CGACT: 1,0
+CGACT: 2,0
+CGACT: 3,0
OK
```

[AT+CMEE=1](https://m2msupport.net/m2msupport/atcmee-report-mobile-termination-error/)

```
OK
```

ネットワークに接続中...
```
AT+CGATT=1
OK
```

接続中...

[AT+CGACT=1, 1](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

```
OK
Connect Successful
```

### SIM900でのSMS

「SMS」タブを選択してSMSメッセージを送信します。また、SIMに保存されているSMSメッセージを読み取ったり削除したりすることもできます。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Sms.PNG)

SMSメッセージを送信するためのATコマンドシーケンスは以下の通りです：

登録状況を確認中...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

```
+CREG: 0,1
OK
The device is registered in home network.
```

```
AT+CMGS="858XXXXXXX"
> Test Message with AT Command Tester�
+CMGS: 19
OK
SMS Send successful
```

### ネットワーク選択

ネットワーク選択では、利用可能なネットワークをユーザーが選択できます。この機能を使用するには、「Network Selection」タブを使用します。
![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Network_selection.PNG)

ネットワーク選択のコマンドは以下の通りです：

ネットワークを検索中です。お待ちください...

[AT+COPS=?](https://m2msupport.net/m2msupport/atcops-plmn-selection/)

+COPS: (2,"T-Mobile","T-Mobile","310260"),(1,"AT&amp;T","AT&amp;T","310410"),,(0,1,4),(0,1,2)

OK  
ネットワークが見つかりました。

電話帳

「電話帳」タブを使用すると、SIMに保存されている電話帳エントリを追加/削除/読み取りできます。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Phone_book.PNG)

電話帳エントリを取得中...

[AT+CPBR=1,99](https://m2msupport.net/m2msupport/atcpbr-read-phonebook-entries/)

+CPBR: 1,"*233",129,"今すぐリフィル"

+CPBR: 2,"#999#",255,"残高確認"

+CPBR: 3,"8878878878",129,"テスト"

OK

SIM900 HTTP

「HTTP」タブを使用すると、ベアラープロファイルを読み取り、HTTP GETおよびHTTP POSTをテストできます。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Http.PNG)

ベアラープロファイルを取得中...

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

登録状況を確認中...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1  

OK  
デバイスはホームネットワークに登録されています。

ベアラー1を照会中...

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"  

OK  
ベアラー1は接続されています。IPアドレスは "162.184.222.162" です。

ベアラー1は接続されています。

HTTPサービスを初期化中...

[AT+HTTPINIT](https://m2msupport.net/m2msupport/athttpinit-initialize-http-service/)

OK  
HTTPサービスの初期化に失敗しました。

HTTPパラメータを設定中...

[AT+HTTPPARA](https://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="URL","[http://www.m2msupport.net/m2msupport/http_get_test.php](http://www.m2msupport.net/m2msupport/http_get_test.php)"

OK  
[AT+HTTPPARA](https://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="CID",1[[|]]

OK  
[AT+HTTPACTION](https://m2msupport.net/m2msupport/athttpaction-perform-getposthead-http-action/)=0

OK  

HTTP GETが成功しました。

[AT+HTTPREAD](https://m2msupport.net/m2msupport/athttpread-get-response-from-http-server/)

+HTTPREAD:58  
HTTP GETテストが成功しました。m2msupport.netからデータを受信しました。  
OK  
HTTPセッションを終了中...

[AT+HTTPTERM](https://m2msupport.net/m2msupport/athttpterm-terminate-the-http-session/)

OK  

SIM900 FTP

SIM900モジュールを使用したFTP GetおよびPutは、以下のようにテストできます。

![](https://files.seeedstudio.com/wiki/AT_Command_Tester_Application/img/Ftp.PNG)

登録状況を確認中...

AT+CREG?

+CREG: 0,1  

OK  
デバイスはホームネットワークに登録されています。

ベアラー1を照会中...

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"  

OK  
ベアラー1は接続されています。IPアドレスは "162.184.222.162" です。

ベアラー1は接続されています。

FTPパラメータを設定中...

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
FTPセッションが正常に開始されました。

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
!MESSAGE Unable to update index for central|[http://repo.maven.apache.org/maven2](http://repo.maven.apache.org/maven2): C:\Users\sgobi.m2\repository.cache\m2e\1.2.0\26522e0d83a422eed93329ece7565cfc\nexus-maven-repository-index.zip (The system cannot find the file specified)  

!ENTRY org.eclipse.jdt.ui 4 10001 2012-11-16 13:21:21.138  
!MESSAGE Internal Error  
!STACK 1  
OK  
[AT+FTPGET](https://m2msupport.net/m2msupport/atftpget-set-download-file/)=2,1024

+FTPGET:2,0  

OK  
FTPデータ転送が完了しました。

+FTPGET:1,0  
FTPセッション終了  

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>