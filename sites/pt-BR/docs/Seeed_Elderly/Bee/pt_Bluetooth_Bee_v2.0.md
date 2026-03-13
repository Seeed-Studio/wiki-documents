---
description: Bluetooth Bee v2.0
title: Bluetooth Bee v2.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bluetooth_Bee_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
sku: 113050014
type: gettingstarted
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Bluetooth_Bee_v2.0/
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee é um módulo Bluetooth SPP fácil de usar, compatível com os soquetes Xbee existentes, projetado para configuração de conexão serial sem fio transparente.

O módulo Bluetooth de porta serial é totalmente qualificado Bluetooth V2.0+EDR (Enhanced Data Rate) com modulação de 3 Mbps, incluindo transceptor de rádio completo de 2,4 GHz e banda base.

Ele usa o sistema Bluetooth de chip único CSR Bluecore 04-External com tecnologia CMOS e com AFH (Adaptive Frequency Hopping Feature). Ele ainda possui a menor área, tão pequena quanto 12,7 mm x 27 mm. Esperamos que isso simplifique seu ciclo geral de projeto/desenvolvimento.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

## Recursos

---

### Recursos de Hardware

- Sensibilidade típica de -80 dBm.

- Potência de transmissão de RF de até +4 dBm.

- Bluetooth V2.0+EDR totalmente qualificado com modulação de 3 Mbps.

- Baixo consumo com operação em 1,8 V, I/O de 1,8 a 3,6 V.

- Controle PIO.

- Interface UART com taxa de baud programável.

- Antena PCB integrada.

- Conectores compatíveis com Bee.

### Recursos de Software

- Taxa de baud padrão: 38400, bits de dados: 8, bit de parada: 1, paridade: sem paridade, controle de dados: possui.

- Taxas de baud suportadas: 9600,19200,38400,57600,115200,230400,460800.

- Usa CTS e RTS para controlar o fluxo de dados.

- Quando um pulso de subida é detectado em PIO0, o dispositivo será desconectado.

- Porta de instrução de status PIO1: nível baixo — desconectado, nível alto — conectado;

- PIO10 está conectado ao LED vermelho, PIO11 está conectado ao LED verde. Quando mestre e escravo estão pareados, os LEDs vermelho e verde piscam 1 vez a cada 2 s de intervalo, enquanto desconectado apenas o LED verde pisca 2 vezes por segundo.

- Conexão automática ao último dispositivo ao ligar, por padrão.

- Permite que o dispositivo pareado conecte por padrão.

- PINCODE padrão: 0000.

- Reconexão automática em 30 min quando desconectado como resultado de estar além do alcance da conexão.

:::caution
    A tensão de alimentação deste módulo é 3,3 V; valores superiores a este podem causar danos permanentes ao dispositivo.
c;;;

## Instalação de Hardware

---

### Conectando o Bluetooth ao PC por meio do Uart Bee

<!-- The Bluetooth provides a standard XBee socket. In here we use a [UartSBee V5](/pt-br/UartSBee_v5) to connect Bluetooth and PC, ensure the supply voltage was selected as 3.3V by slider. -->

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|

### Conectando o Bluetooth ao Arduino

<!-- Here we use [XBee Shield](/pt-br/XBee_Shield_V2.0) as a bridge between Bluetooth and [Seeeduino Lotus](/pt-br/Seeeduino_Lotus). -->

Como a UART de hardware do Seeeduino foi usada como debug com o PC, escolhemos D2 e D3 para simular uma UART por software para se comunicar com o Bluetooth. Veja a configuração dos jumpers na figura abaixo.

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

## Instruções de Software

---

### Convenções

- Configuração padrão de fábrica:

  - Nome: HMSoft;

    - Baud: 9600, N, 8, 1;

    - Código PIN: 1234;

    - Versão de transmissão.

- Formato de comando AT:
  - Formato de comando AT em maiúsculas, no formato de string, sem qualquer outro símbolo (por exemplo, \r ou \n).

    - Qualquer comando incorreto não terá resposta.

### Comandos AT (a ser continuado...)

**1. Comando de teste**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK</td>
<td width="300">None</td>
</tr>
</table>

**2. Consultar/definir taxa de baud**

<!-- <table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+BAUD?</td>
<td width="300">OK+Set:[para1]</td>
<td rowspan="2" width="300">Para1: Baud rate No.

<dl>1---------1200</dl>
<dl>2---------2400</dl>
<dl>3---------4800</dl>
<dl>4---------9600</dl>
<dl>5---------19200</dl>
<dl>6---------38400</dl>
<dl>7---------57600</dl>
<dl>8---------115200</dl>
<dl>9---------230400</dl>
<dl>A---------460800</dl>
<dl>B---------921600</dl>
<dl>C---------1382400</dl>

Default: 4(9600)
</td>
</tr>
<tr>
<td width="300">AT+BAUD[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table> -->

**3. Consultar/definir bit de paridade**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> Query: AT+CHK?
</td>
<td width="300"> OK+CHK:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0,1,2

<dl>0:None

<dl>1:ODD

<dl>2:EVEN

<dl>Default: 0 (None)

</td></tr>
<tr>
<td width="300"> Set: AT+CHK[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**4. Consultar/definir bit de parada**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+STOP?
</td>
<td width="300"> OK+STOP:[para1]
</td>
<td rowspan="2" width="300"> Para1:1, 2

<dl>1: One stop bit

<dl>2: Two stop bit

<dl>Default: 1 (One stop bit)

</td></tr>
<tr>
<td width="300"> AT+STOP[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**5. Consultar/definir taxa de baud, bit de paridade, bit de parada**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+UART?
</td>
<td width="300"> OK+UART:[para1],[para2],[para3]
</td>
<td rowspan="2" width="300"> Para1: Baud rate

<dl>Value: 1~C

<dl>Default: 4(9600)

<dl>Para2: Parity bit

<dl>Value: 0,1,2

<dl>Default: 0 (None)

<dl>Para3: Stop Bit

<dl>Value: 1, 2

<dl>Default: 1(One Bit)

</td></tr>
<tr>
<td width="300"> AT+UART[para1][para2][para3]
</td>
<td width="300"> OK+Set:[para1] [para2] [para3]
</td></tr></table> -->

**6. Comando de autoverificação do módulo**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+SECH?
</td>
<td width="300"> OK+SECH:OKAY or

OK+SECH:FAIL

</td>
<td width="300"> None
</td></tr></table>

**7. Module application sectors check command**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+APCH?
</td>
<td width="300"> OK+APCH:OKAY or

OK+APCH:FAIL

</td>
<td width="300"> None
</td></tr></table> -->

**8. Comando de consulta de temperatura do módulo**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+TEMP?
</td>
<td width="300"> OK+TEMP:[temp value]
</td>
<td width="300"> None
</td></tr></table>

**9. Query/Set module discoverable status**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+DISC?
</td>
<td width="300"> OK+DISC:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0,1,2

<dl>0: discoverable and connectable

<dl>1: only discoverable not connectable

<dl>2: only connectable

<dl>Default: 0

</td></tr>
<tr>
<td width="300"> AT+DISC [para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**10. Consultar/definir função do PIO0 (System KEY)**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+KEY?
</td>
<td width="300"> OK+KEY:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0: Cancel current status.

<dl>1: Cancel current status and restore factory setup.

<dl>Default: 0

</td></tr>
<tr>
<td width="300"> AT+ KEY[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**11. Query/Set PIO1 output status (System LED)**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+LED?
</td>
<td width="300"> OK+LED:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0:Unconnected Output 500ms High 500ms Low, Connected output High.

<dl>1:Unconnected output Low, Connected output High.

<dl>Default: 0

</td></tr>
<tr>
<td width="300"> AT+ LED [para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**12. Query/Set module PIO Pins output status**

<!-- <table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+PIO?
</td>
<td width="300"> OK+PIO:[para1]
</td>
<td rowspan="2" width="300"> Para1: Length 10, every bit value is 1 or 0.

<dl>0: output low; 1:output high

<dl>Default: 0000000000

</td></tr>
<tr>
<td width="300"> AT+PIO[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**13. Consultar/definir se os pinos PIO saem em nível alto ou baixo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+PIO[para1]?
</td>
<td width="300"> OK+PIO:[para1][para2]
</td>
<td rowspan="2" width="300"> Para1: 2~B Para2: 0, 1

<dl>Para1 is which PIO pin you want to Query/Set Value:2,3,4,5,6,7,8,9,A,B.

<dl>Para2 is Query or setup value. 0 is low and 1 is high

</td></tr>
<tr>
<td width="300"> AT+PIO[para1][para2]
</td>
<td width="300"> OK+Set:[para1][para2]
</td></tr></table>

**14. Consultar/definir nome do módulo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+NAME?
</td>
<td width="300"> OK+NAME[para1]
</td>
<td rowspan="2" width="300"> Para1: module name,Max length is 12.

Default: HMSoft

</td></tr>
<tr>
<td width="300"> AT+NAME[para1]
</td>
<td width="300"> OK+Set[para1]
</td></tr></table>

**15. Restaurar todos os valores de configuração para os padrões de fábrica**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+DEFAULT
</td>
<td width="300"> OK+DEFAULT
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**16. Reiniciar módulo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RESTART
</td>
<td width="300"> OK+RESTART
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**17.Query/Set Master and Slaver Role**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+ROLE?
</td>
<td width="300"> OK+ROLE:[para1]
</td>
<td rowspan="2" width="300"> Para1: M, S

<dl>M: Master

<dl>S: Slaver

<dl>Default: S

</td></tr>
<tr>
<td width="300"> AT+ROLE[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**18. Consultar/Definir código PIN**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+PIN?
</td>
<td width="300"> OK+PIN:[para1]
</td>
<td rowspan="2" width="300"> Para1 é o código PIN, o comprimento máximo é 12, permite A~Z, a~z, 0~9

Padrão: 1234

</td></tr>
<tr>
<td width="300"> AT+PIN[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**19. Limpar endereço do dispositivo conectado**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+CLEAR
</td>
<td width="300"> OK+CLEAR
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**20. Procurar dispositivo escravo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+SCAN?
</td>
<td width="300"> OK+SCANS

OK+SCAN[MAC]

……………

OK+SCANE

</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**21. Conectar ao endereço MAC de um dispositivo escravo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+LNK[para1]
</td>
<td width="300"> OK+CONNS(start conn)

<dl>OK+CONN(conn ok)

<dl>OK+CONNF(conn failed)

</td>
<td rowspan="2" width="300"> Para1 é a string de endereço MAC.
</td></tr></table>

**22.Query Software Version**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+VERSION

AT+VERSION?

</td>
<td width="300"> Version Information
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**23.System Help Information**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+HELP?
</td>
<td width="300"> Help Information
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**24. Consultar endereço do último dispositivo conectado**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+RADD?
</td>
<td width="300"> OK+ADDR:MAC Address
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**25. Consultar endereço do módulo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+LADD?

<dl>AT+ADDR?

</td>
<td width="300"> OK+LADD:MAC Address
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**26. Consultar/Definir tipo de trabalho do módulo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+IMME?
</td>
<td width="300"> OOK+IMME:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0: Quando o módulo é ligado, apenas responde ao comando AT, não faz nada, até que AT + WORK seja recebido

<dl>1: Ao ligar, trabalha imediatamente

<dl>Padrão: 1

</td></tr>
<tr>
<td width="300"> AT+IMME[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**27. Trabalhar imediatamente**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+WORK
</td>
<td width="300"> OK+WORK
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**28. Consultar/Definir valor de tempo limite de conexão do módulo ao dispositivo remoto**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+TCON?
</td>
<td width="300"> OK+TCON:[para1]
</td>
<td rowspan="2" width="300"> Para1 é o valor de tempo limite. Quando o tempo expira, o módulo não conectará mais a este endereço e então entrará no modo de busca.

<dl>Valor permitido de Para1: 0000~9999. A unidade é segundo.

<dl>Padrão: 0000 conectar para sempre

</td></tr>
<tr>
<td width="300"> AT+TCON[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**27. Trabalhar imediatamente**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+WORK
</td>
<td width="300"> OK+WORK
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**29 .Consultar/Definir modo de trabalho do módulo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+TYPE?
</td>
<td width="300"> OK+TYPE:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0~2

<dl>0: Modo de transmissão

<dl>1: Modo de controle remoto

<dl>2: Modo de coleta de PIO
Default: 0

</td></tr>
<tr>
<td width="300"> AT+TYPE[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**30. Consultar/Definir tempo de atraso da string de estados de PIO (unidade ms)**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+TPIO?
</td>
<td width="300"> OK+TPIO:[para1]
</td>
<td rowspan="2" width="300"> O valor de Para1 está entre 0000 e 9999 ms. Se o valor for >0, quando o estado do PIO for alterado, o módulo enviará a string de estados de PIO ao dispositivo remoto com este atraso.

<dl>Padrão: 0 enviar uma vez

</td></tr>
<tr>
<td width="300"> AT+TPIO[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**31. Alternar modo de controle remoto para modo de transmissão (apenas esta vez)**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+START
</td>
<td width="300"> OK+START
</td>
<td rowspan="2" width="300"> None
</td></tr></table>

**32. Consultar/Definir parâmetro de salvamento em buffer**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+BUFF?
</td>
<td width="300"> OK+BUFF:[para1]
</td>
<td width="300"> None
</td></tr>
<tr>
<td width="300"> AT+BUFF[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> Para1: 0~1

<dl>0: Não salvar

<dl>1:Salvar

<dl>Padrão: 0

</td></tr></table>

**33. Consultar/Definir filtro de busca**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+FILT?
</td>
<td width="300"> OK+FILT:[para1]
</td>
<td rowspan="2" width="300"> Para1: Tipo permitido

<dl>Valor: 0~C

<dl>Padrão: C (Todos)

</td></tr>
<tr>
<td width="300"> AT+FILT[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**34. Consultar/Definir notificação do módulo**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+NOTI?
</td>
<td width="300"> OK+NOTI:[para1]
</td>
<td width="300"> None
</td></tr>
<tr>
<td width="300"> AT+NOTI[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> O valor de Par1 é 0, 1.

<dl>0: Não notificar (padrão)

<dl>1:Notificar quando conectado ou desconectado

</td></tr></table>

**35.Query/Set Module Class Of Device**

<table >
<tr>
<th> Send
</th>
<th> Receive
</th>
<th> Parameter
</th></tr>
<tr>
<td width="300"> AT+COD?
</td>
<td width="300"> OK+COD:[para1]
</td>
<td width="300"> None
</td></tr>
<tr>
<td width="300"> AT+COD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> Par1 é o valor COD.

<dl>Valor: 0000~0xFFFF

<dl>Padrão: 0x1F00 (unknown device)

</td></tr></table> -->

## Programação

### Configurar o módulo Bluetooth com porta serial no Windows

Esta seção mostra como configurar o Bluetooth com o PC; alguns métodos básicos de configuração podem ser aprendidos.

Configure a conexão de hardware consultando a seção "Hardware Installation". Você verá que o LED azul no módulo pisca, indicando que nenhuma conexão foi estabelecida.
