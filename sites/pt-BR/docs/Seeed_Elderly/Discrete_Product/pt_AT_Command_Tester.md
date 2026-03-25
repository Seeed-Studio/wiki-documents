---
description: Testador de Comandos AT
title: Testador de Comandos AT
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /AT_Command_Tester
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/AT_Command_Tester/
---
[AT Command Tester](https://m2msupport.net/m2msupport/module-tester/)   é uma ferramenta online para testar comandos AT e outras funcionalidades do módulo, como [data call](https://m2msupport.net/m2msupport/data-call-at-commands-to-set-up-gprsedgeumtslte-data-call/), [voice call](https://m2msupport.net/m2msupport/voice-call-at-commands-to-set-up-voice-call/),[HTTP](https://m2msupport.net/m2msupport/at-command-for-http-functions-for-remote-server-data-access/), [network registration](https://m2msupport.net/m2msupport/network-registration/), [SMS](https://m2msupport.net/m2msupport/sms-at-commands/), [Phonebook](https://m2msupport.net/m2msupport/sim-phonebook-at-commands/), [signal quality](https://m2msupport.net/m2msupport/signal-quality/), [SIM interface](https://m2msupport.net/m2msupport/sim-at-commands-for-sim-presense-and-status/), [device info](https://m2msupport.net/m2msupport/at-commands-to-get-device-information/) etc.

O AT Command Tester pode ser usado com [2G Modules](https://m2msupport.net/m2msupport/category/devices/gprs-modem/) (GPRS/EDGE/1x) ou [3G Modules](https://m2msupport.net/m2msupport/category/devices/3g-modules/) (HSDPA/HSPA/EVDO) ou [4G modules](https://m2msupport.net/m2msupport/search-page/?Max!Download!Speed=100%20Mbps) (LTE)

Primeiro selecione 'Find Ports' para procurar por portas disponíveis. Em seguida, selecione a porta do modem e pressione 'Connect'. Uma vez conectado ao módulo, você pode enviar comandos AT na aba 'Command Mode'

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/M2m_img1.PNG)

 No modo de script, você pode enviar vários comandos AT ao mesmo tempo, como mostrado abaixo. Você pode criar seu próprio script e salvá-lo na máquina local. Depois, carregue o script e execute.

 ![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Script_mode.PNG)

 Para realizar diagnósticos básicos no módulo SIM900, escolha a aba 'Diagnostics',
![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Diagnistics_mode.PNG)
 Os comandos de diagnóstico e os resultados são mostrados abaixo, AT+CGMI SIMCOM_Ltd OK
Fabricante: SIMCOM_Ltd
[AT+CGMM](https://m2msupport.net/m2msupport/atcgmm-request-model-identificaiton/)

SIMCOM_SIM900

OK
Número do Modelo : SIMCOM_SIM900

[AT+CGMR](https://m2msupport.net/m2msupport/atcgmr-request-revision-identification/)

Revisão:1137B03SIM900M64_ST_MMS

OK
Revisão: Revisão:1137B03SIM900M64_ST_MMS

[AT+CSQ](https://m2msupport.net/m2msupport/atcsq-signal-quality/)

+CSQ: 8,0

OK
O nível de sinal é -97 dbm. A condição do sinal é marginal. A faixa de intensidade do sinal é de -53 dbm (Excelente) a -109 dbm (Marginal).

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
O dispositivo está registrado na rede doméstica.

[AT+CGACT?](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

+CGACT: 1,0
+CGACT: 2,0
+CGACT: 3,0

OK
O dispositivo NÃO está conectado.

[AT+COPS?](https://m2msupport.net/m2msupport/atcops-plmn-selection/)

+COPS: 0,0,"T-Mobile"

OK
O dispositivo está atualmente na rede "T-Mobile".

[AT+CPIN?](https://m2msupport.net/m2msupport/atcpin-enter-pin/)

+CPIN: READY OK

O SIM está pronto.

##   Chamada de Voz com SIM900

Selecione a aba 'Voice Call' para testar chamadas de voz de saída e entrada. O 'AT Command Tester' verificará se o dispositivo está registrado antes de discar a chamada,

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Voicecall.PNG)

A sequência de comandos AT para chamada de saída é mostrada abaixo, Verificando status de registro... AT+CREG? +CREG: 0,1 OK
O dispositivo está registrado na rede doméstica. Discando o número 858xxxxxxx

[ATD](https://m2msupport.net/m2msupport/atd-dial-voice-call/)858XXXXXXX;

OK
Chamada de voz bem-sucedida Desligando a chamada..

ATH

OK
Chamada desconectada com sucesso..

[AT+CNUM](https://m2msupport.net/m2msupport/atcnum-subscriber-number/)

+CNUM: "","1858XXXXXXX",129,7,4 OK

##   Chamada de Dados GPRS com SIM900

Para configurar uma chamada GPRS com o modem SIM900, selecione a aba 'Data Call'. Aqui você pode obter todos os contextos PDP armazenados no dispositivo. O contexto PDP possui o APN da operadora e outras informações necessárias para configurar uma chamada GPRS.

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Datacall.PNG)
 Aqui está a sequência de comandos AT para configurar a chamada de dados

[AT+CGDCONT?](https://m2msupport.net/m2msupport/atcgdcont-define-pdp-context/)

+CGDCONT: 1,"IP","epc.tmobile.com","0.0.0.0",0,0
+CGDCONT: 2,"IP","test5","0.0.0.0",0,0
+CGDCONT: 3,"IP","","0.0.0.0",0,0

OK
Verificando status de registro...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
O dispositivo está registrado na rede doméstica.

Verificando se o dispositivo já está conectado...

[AT+CGACT?](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

+CGACT: 1,0
+CGACT: 2,0
+CGACT: 3,0

OK
[AT+CMEE=1](https://m2msupport.net/m2msupport/atcmee-report-mobile-termination-error/)

OK
Anexando à rede...
AT+CGATT=1

OK

Conectando...

[AT+CGACT=1, 1](https://m2msupport.net/m2msupport/atcgact-pdp-context-activate-or-deactivate/)

OK
Conexão Bem-sucedida

##   SMS com SIM900

Selecione 'SMS' para enviar mensagens SMS. Você também pode ler e apagar mensagens SMS armazenadas no SIM.

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Sms.PNG)

Aqui está a sequência de comandos AT para enviar mensagem SMS,

Verificando status de registro...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
O dispositivo está registrado na rede doméstica.

AT+CMGS="858XXXXXXX"

&gt; Test Message with AT Command Tester

+CMGS: 19

OK
Envio de SMS bem-sucedido

##   Seleção de Rede

A seleção de rede permite ao usuário selecionar a rede que está disponível. Use a aba 'Network Selection' para este recurso

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Network_selection.PNG)

Aqui estão os comandos para Seleção de Rede,

Procurando Redes. Por favor, aguarde..

[AT+COPS=?](https://m2msupport.net/m2msupport/atcops-plmn-selection/)

+COPS: (2,"T-Mobile","T-Mobile","310260"),(1,"AT&amp;T","AT&amp;T","310410"),,(0,1,4),(0,1,2)

OK
Redes encontradas

##   Agenda Telefônica

Com a aba 'Phone Book', você pode adicionar/excluir/ler entradas da agenda telefônica armazenadas no SIM,

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Phone_book.PNG)

Obtendo entradas da agenda..

[AT+CPBR=1,99](https://m2msupport.net/m2msupport/atcpbr-read-phonebook-entries/)

+CPBR: 1,"*233",129,"Refill Now"

+CPBR: 2,"#999#",255,"Check Balance"

+CPBR: 3,"8878878878",129,"Test"

OK

##   SIM900 HTTP

Com a aba 'HTTP', você pode ler os perfis de portadora e testar HTTP GET e HTTP POST,

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Http.PNG)

Obtendo perfis de portadora..

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

Verificando status de registro...

[AT+CREG?](https://m2msupport.net/m2msupport/atcreg-network-registration/)

+CREG: 0,1

OK
O dispositivo está registrado na rede doméstica.

Consultando portadora 1 .

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"

OK
A portadora 1 está Conectada. O endereço IP é "162.184.222.162"

A portadora 1 está Conectada.

Inicializando serviço HTTP...

[AT+HTTPINIT](https://m2msupport.net/m2msupport/athttpinit-initialize-http-service/)

OK
Erro ao inicializar o serviço HTTP.

Configurando parâmetros HTTP..

[AT+HTTPPARA](https://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="URL","[http://www.m2msupport.net/m2msupport/http_get_test.php](http://www.m2msupport.net/m2msupport/http_get_test.php)"

OK
[AT+HTTPPARA](https://m2msupport.net/m2msupport/athttppara-set-paramaters-for-http-connection/)="CID",1[[|]]

OK
[AT+HTTPACTION](https://m2msupport.net/m2msupport/athttpaction-perform-getposthead-http-action/)=0

OK

HTTP GET foi bem-sucedido

[AT+HTTPREAD](https://m2msupport.net/m2msupport/athttpread-get-response-from-http-server/)

+HTTPREAD:58
Teste de HTTP GET bem-sucedido. Dados recebidos de m2msupport.net
OK
Encerrando sessão HTTP..

[AT+HTTPTERM](https://m2msupport.net/m2msupport/athttpterm-terminate-the-http-session/)

OK

##   SIM900 FTP

FTP Get e Put com o módulo SIM900 podem ser testados como mostrado abaixo,

![](https://files.seeedstudio.com/wiki/AT_Command_Tester/img/Ftp.PNG)

Verificando status de registro...

AT+CREG?

+CREG: 0,1

OK
O dispositivo está registrado na rede doméstica.

Consultando portadora 1 .

AT+SAPBR=2,1

+SAPBR: 1,1,"162.184.222.162"

OK
A portadora 1 está Conectada. O endereço IP é "162.184.222.162"

A portadora 1 está Conectada.

Configurando parâmetros FTP..

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
Sessão FTP iniciada com sucesso

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
!MESSAGE Não foi possível atualizar o índice para central|[http://repo.maven.apache.org/maven2](http://repo.maven.apache.org/maven2): C:\Users\sgobi.m2\repository.cache\m2e\1.2.0\26522e0d83a422eed93329ece7565cfc\nexus-maven-repository-index.zip (O sistema não pode encontrar o arquivo especificado)

!ENTRY org.eclipse.jdt.ui 4 10001 2012-11-16 13:21:21.138
!MESSAGE Erro Interno
!STACK 1
OK
[AT+FTPGET](https://m2msupport.net/m2msupport/atftpget-set-download-file/)=2,1024

+FTPGET:2,0

OK
A transferência de dados FTP foi concluída

+FTPGET:1,0
Sessão FTP encerrada

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
