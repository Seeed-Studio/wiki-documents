---
description: Probador de Comandos AT
title: Probador de Comandos AT
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/AT_Command_Tester
last_update:
  date: 1/13/2023
  author: shuxu hu
---
[AT Command Tester](https://m2msupport.net/m2msupport/module-tester/) es una herramienta en línea para probar comandos AT y otras funcionalidades de módulos como [llamada de datos](https://m2msupport.net/m2msupport/data-call-at-commands-to-set-up-gprsedgeumtslte-data-call/), [llamada de voz](https://m2msupport.net/m2msupport/voice-call-at-commands-to-set-up-voice-call/),[HTTP](https://m2msupport.net/m2msupport/at-command-for-http-functions-for-remote-server-data-access/), [registro de red](https://m2msupport.net/m2msupport/network-registration/), [SMS](https://m2msupport.net/m2msupport/sms-at-commands/), [Agenda telefónica](https://m2msupport.net/m2msupport/sim-phonebook-at-commands/), [calidad de señal](https://m2msupport.net/m2msupport/signal-quality/), [interfaz SIM](https://m2msupport.net/m2msupport/sim-at-commands-for-sim-presense-and-status/), [información del dispositivo](https://m2msupport.net/m2msupport/at-commands-to-get-device-information/) etc.

AT Command Tester puede usarse con [Módulos 2G](https://m2msupport.net/m2msupport/category/devices/gprs-modem/) (GPRS/EDGE/1x) o [Módulos 3G](https://m2msupport.net/m2msupport/category/devices/3g-modules/) (HSDPA/HSPA/EVDO) o [módulos 4G](https://m2msupport.net/m2msupport/search-page/?Max!Download!Speed=100%20Mbps) (LTE)

Primero selecciona 'Find Ports' para buscar puertos disponibles. Luego selecciona el puerto del módem y presiona 'Connect'. Una vez conectado al módulo, puedes enviar comandos AT desde la pestaña 'Command Mode'

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/M2m_img1.PNG)

 En modo script, puedes enviar múltiples comandos AT al mismo tiempo como se muestra a continuación. Puedes crear tu propio script y guardarlo en la máquina local. Luego cargar el script y ejecutarlo.

 ![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Script_mode.PNG)

 Para realizar diagnósticos básicos en el módulo SIM900, elige la pestaña 'Diagnostics',
![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Diagnistics_mode.PNG)
 Los comandos de diagnóstico y los resultados se muestran a continuación, AT+CGMI SIMCOM_Ltd OK
Fabricante: SIMCOM_Ltd
[AT+CGMM](https://m2msupport.net/m2msupport/atcgmm-request-model-identificaiton/)

SIMCOM_SIM900

OK
Número de Modelo : SIMCOM_SIM900

[AT+CGMR](https://m2msupport.net/m2msupport/atcgmr-request-revision-identification/)

Revision:1137B03SIM900M64_ST_MMS

OK
Revisión: Revision:1137B03SIM900M64_ST_MMS

[AT+CSQ](https://m2msupport.net/m2msupport/atcsq-signal-quality/)

+CSQ: 8,0

OK
El nivel de señal es -97 dbm. La condición de la señal es marginal. El rango de intensidad de señal es -53 dbm (Excelente) a -109 dbm (Marginal).

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
El dispositivo está registrado en la red doméstica.

[AT+CGACT?](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

+CGACT: 1,0
+CGACT: 2,0
+CGACT: 3,0

OK
El dispositivo NO está conectado.

[AT+COPS?](https://m2msupport.net/m2msupport/atcops-plmn-selection/)

+COPS: 0,0,"T-Mobile"

OK
El dispositivo está actualmente en la red "T-Mobile".

[AT+CPIN?](https://m2msupport.net/m2msupport/atcpin-enter-pin/)

+CPIN: READY OK

SIM está listo.

##   Llamada de Voz con SIM900

Selecciona la pestaña 'Voice Call' para probar llamadas de voz salientes y entrantes. El 'AT Command Tester' verificará si el dispositivo está registrado antes de marcar la llamada,

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Voicecall.PNG)

La secuencia de comandos AT para llamada saliente se muestra a continuación, Verificando estado de registro... AT+CREG? +CREG: 0,1 OK
El dispositivo está registrado en la red doméstica. Marcando número 858xxxxxxx

[ATD](https://m2msupport.net/m2msupport/atd-dial-voice-call/)858XXXXXXX;

OK
Llamada de voz exitosa Colgando la llamada..

ATH

OK
Llamada desconectada exitosamente..

[AT+CNUM](https://m2msupport.net/m2msupport/atcnum-subscriber-number/)

+CNUM: "","1858XXXXXXX",129,7,4 OK

##   Llamada de Datos GPRS con SIM900

Para configurar una llamada GPRS con el módem SIM900, selecciona la pestaña 'Data Call'. Aquí puedes obtener todos los contextos PDP almacenados en el dispositivo. El contexto PDP tiene el APN del operador y otra información que se requiere para establecer una llamada GPRS.

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Datacall.PNG)
 Aquí está la secuencia de comandos AT para establecer una llamada de datos

[AT+CGDCONT?](https://m2msupport.net/m2msupport/atcgdcont-define-pdp-context/)

+CGDCONT: 1,"IP","epc.tmobile.com","0.0.0.0",0,0
+CGDCONT: 2,"IP","test5","0.0.0.0",0,0
+CGDCONT: 3,"IP","","0.0.0.0",0,0

OK
Verificando estado de registro...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
El dispositivo está registrado en la red doméstica.

Verificando si el dispositivo ya está conectado...

[AT+CGACT?](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

+CGACT: 1,0
+CGACT: 2,0
+CGACT: 3,0

OK
[AT+CMEE=1](https://m2msupport.net/m2msupport/atcmee-report-mobile-termination-error/)

OK
Conectando a la red...
AT+CGATT=1

OK

Conectando...

[AT+CGACT=1, 1](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

OK
Conexión Exitosa

##   SMS con SIM900

Selecciona 'SMS' para enviar mensajes SMS. También puedes leer y eliminar mensajes SMS almacenados en la SIM.

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Sms.PNG)

Aquí está la secuencia de comandos AT para enviar un mensaje SMS,

Verificando estado de registro...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
El dispositivo está registrado en la red doméstica.

AT+CMGS="858XXXXXXX"

&gt; Test Message with AT Command Tester�

+CMGS: 19

OK
SMS enviado exitosamente

##   Selección de Red

La selección de red permite al usuario seleccionar la red que está disponible. Usa la pestaña 'Network Selection' para esta función

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Network_selection.PNG)

Aquí están los comandos para Selección de Red,

Buscando Redes. Por favor espera..

[AT+COPS=?](https://m2msupport.net/m2msupport/atcops-plmn-selection/)

+COPS: (2,"T-Mobile","T-Mobile","310260"),(1,"AT&amp;T","AT&amp;T","310410"),,(0,1,4),(0,1,2)

OK
Redes encontradas

##   Agenda Telefónica

Con la pestaña 'Phone Book', puedes agregar/eliminar/leer entradas de la agenda telefónica almacenadas en la SIM,

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Phone_book.PNG)

Obteniendo entradas de la agenda telefónica..

[AT+CPBR=1,99](https://m2msupport.net/m2msupport/atcpbr-read-phonebook-entries/)

+CPBR: 1,"*233",129,"Refill Now"

+CPBR: 2,"#999#",255,"Check Balance"

+CPBR: 3,"8878878878",129,"Test"

OK

##   SIM900 HTTP

Con la pestaña 'HTTP', puedes leer los perfiles bearer y probar HTTP GET y HTTP POST,

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Http.PNG)

Obteniendo perfiles Bearer..

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

Verificando estado de registro...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
El dispositivo está registrado en la red doméstica.

Consultando bearer 1 .

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"

OK
Bearer 1 está Conectado. La dirección IP es "162.184.222.162"

Bearer 1 está Conectado.

Inicializando servicio HTTP...

[AT+HTTPINIT](https://m2msupport.net/m2msupport/athttpinit-initialize-http-service/)

OK
Error inicializando servicio HTTP.

Configurando parámetros HTTP..

[AT+HTTPPARA](https://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="URL","[http://www.m2msupport.net/m2msupport/http_get_test.php](http://www.m2msupport.net/m2msupport/http_get_test.php)"

OK
[AT+HTTPPARA](https://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="CID",1[[|]]

OK
[AT+HTTPACTION](https://m2msupport.net/m2msupport/athttpaction-perform-getposthead-http-action/)=0

OK

HTTP GET es exitoso

[AT+HTTPREAD](https://m2msupport.net/m2msupport/athttpread-get-response-from-http-server/)

+HTTPREAD:58
Prueba HTTP GET exitosa. Datos recibidos de m2msupport.net
OK
Terminando sesión HTTP..

[AT+HTTPTERM](https://m2msupport.net/m2msupport/athttpterm-terminate-the-http-session/)

OK

##   SIM900 FTP

FTP Get y Put con el módulo SIM900 pueden probarse como se muestra a continuación,

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Ftp.PNG)

Verificando estado de registro...

AT+CREG?

+CREG: 0,1

OK
El dispositivo está registrado en la red doméstica.

Consultando bearer 1 .

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"

OK
Bearer 1 está Conectado. La dirección IP es "162.184.222.162"

Bearer 1 está Conectado.

Configurando parámetros FTP..

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
Sesión FTP iniciada exitosamente

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
La transferencia de datos FTP está completa

+FTPGET:1,0
Fin de sesión FTP

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
