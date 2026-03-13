---
title: Grove - BLE (dual model) v1.0
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-BLE-dual_model-v1.0/
slug: /Grove-BLE-dual_model-v1.0
sku: 113020009
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2022-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-BLE-dual_model-v1.0/
---

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0.jpg)

Grove - BLE (dual model) v1.0 usa chip Bluetooth de modo duplo CSR. O chip é baseado na arquitetura ARM e suporta instruções AT. Os usuários podem desenvolver de forma flexível de acordo com a taxa de baud serial, nome do equipamento, senha de pareamento.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-BLE-dual-model-p-2407.html)

Recursos
--------

- Versão BT: Especificação Bluetooth V4.0 e BLE
- Máximo de bytes de envio e recebimento UART é 512
- Outro dispositivo para o módulo em modo SPP: 90 bytes por pacote
- Outro dispositivo para o módulo em modo BLE: 20 bytes por pacote
- Dois modos de transmissão de dados, modo balanceado e modo de alta velocidade
- Frequência de trabalho: banda ISM de 2,4GHz
- Método de modulação: GFSK (Gaussian Frequency Shift Keying)
- Potência de RF: -23dbm, -6dbm, 0dbm, 6dbm.
- Velocidade: Assíncrona: 3K Bytes
- Síncrona: 3K Bytes
- Segurança: Autenticação e criptografia
- Serviço: Escravo SPP, Periférico BLE, UUID FFE0,FFE1
- Alimentação: +3,3/+5,0VDC 50mA
- Longo alcance: SPP 30 metros, BLE 60 metros
- Consumo: SPP 13,5mA, BLE 9,5mA
- Temperatura de trabalho: –5 ~ +65 graus Celsius

:::tip
Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Visão Geral de Hardware
-------------

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_PhotoTop.jpg)

**K2**: Durante o status conectado, ele pode ser desconectado pressionando o botão K2 por mais de 100ms. Durante o modo de suspensão, ele pode ser restaurado pressionando o botão K2 (configurações de fábrica).

**U1**: U1 é o módulo sem fio, inclui circuito automático de reset de energização.

**D1**: O LED funciona em dois modos: **Sleeping** é indicado por piscar lentamente e o status **Connected** é indicado por iluminação contínua.

**J1**: O conector Grove padrão.

<div class="admonition warning">
<p class="admonition-title">Caution</p>
A velocidade de transmissão BLE é mais lenta do que a transmissão SPP, então selecionamos a menor na concepção, de acordo com o planejamento de velocidade de um produto BLE de modo duplo.
</div>

Instalação de Hardware
---------------------

### Conectando Bluetooth ao PC através do UART Bee

O Bluetooth fornece uma porta serial com soquete Grove padrão, a maioria dos conversores USB-UART pode ser usada. Aqui usamos um [UartSBee V5](/pt-br/UartSBee_v5) para conectar o Bluetooth e o PC.
![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_ConnectToPC.jpg)

### Conectando Bluetooth ao Arduino

Como o Arduino Uno não possui soquete Grove, usamos o <a href="/pt-br/Seeeduino_Lotus"><span><font color={'8DC215'} size={"3"}> Seeeduino Lotus </font></span></a> em seu lugar. Você também pode usar Arduino com **Grove Base Shield V2**.
Como exemplo, D2 e D3 são usados como UART por software. Então, conecte o cabo Grove ao soquete "D2"

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_ConnectToArduino.jpg)

Instruções de Software
--------------------

### Convenções

- No modo EDR, apenas o escravo pode ser configurado, enquanto tanto o mestre quanto o escravo podem estar em modo BLE.
- Configuração padrão de fábrica:
  - Nome EDR HMSoft, papel de Slave, PinCode 1234
  - Nome BLE HMSoft, papel de Slave, PinCode 000000
  - Baud: 115200, N, 8, 1;
- Formato de comando AT:
  - Formato de comando AT em maiúsculas, formato string, sem qualquer outro símbolo. (por exemplo, //r ou //n).
  - Qualquer comando incorreto não terá resposta.

### Comandos AT

**1. Comando de Teste**

| Enviar | Receber               | Parâmetro |
|--------|------------------------|-----------|
| AT     | OK/ER/Disconnect link  | None      |

Se o módulo não estiver conectado a um dispositivo remoto, receberá: “OK”

Se o módulo tiver um erro, receberá: “ER”

Se o módulo estiver conectado, o módulo será desconectado do dispositivo remoto; se “AT + NOTI” estiver configurado para 1, receberá uma string de informação

**2. Consultar endereço EDR do módulo**

| Enviar   | Receber      | Parâmetro |
|----------|--------------|-----------|
| AT+ADDE? | OK+ Get: MAC | None      |

**3. Consultar endereço BLE do módulo**

| Enviar   | Receber      | Parâmetro |
|----------|--------------|-----------|
| AT+ADDB? | OK+ Get: MAC | None      |

**4. Consultar/Definir modo de Autenticação**

<table border="1">
<tr>
<th>
Send
</th>
<th>
Receive
</th>
<th>
Parameter
</th>
</tr>
<tr>
<td width="300">
Q: AT+AUTH?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (Default: 0)
0 – Sem autenticação
1 – Deve autenticar

</td>
</tr>
<tr>
<td width="300">
S: AT+AUTH[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

AT+AUTH0: permite fazer uma conexão insegura.
AT+AUTH1: toda conexão deve ter autenticação.

**5. Consultar/Definir modo A para B**

<table border="1">
<tr>
<th>
Send
</th>
<th>
Receive
</th>
<th>
Parameter
</th>
</tr>
<tr>
<td width="300">
Q: AT+ATOB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (Default: 0)
0 – Não abrir ATOB
1 – Abrir modo ATOB

</td>
</tr>
<tr>
<td width="300">
S: AT+ATOB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

Este comando deve funcionar com o comando AT+MODE0. Quando o dispositivo A (modo SPP) se conecta ao módulo e o dispositivo B (modo BLE) também se conecta ao módulo, a string de dados enviada do dispositivo A para o módulo será enviada ao dispositivo B. A string de dados enviada do dispositivo B para o módulo também será enviada ao dispositivo A.

**6. Consultar/Definir taxa de baud**

<table border="1">
<tr>
<th>
Send
</th>
<th>
Receive
</th>
<th>
Parameter
</th>
</tr>
<tr>
<td width="300">
Q: AT+BAUD?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 1~7, (Default: 6).
1 - 4800
2 – 9600
3 – 19200
4 – 38400
5 – 57600
6 – 115200
7 - 230400

</td>
</tr>
<tr>
<td width="300">
S: AT+BAUD[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**7. Limpar informações de pareamento**

| Enviar   | Receber  | Parâmetro                 |
|----------|----------|---------------------------|
| AT+BONDE | OK+BONDE | Limpar informações EDR    |
| AT+BONDB | OK+BONDB | Limpar informações BLE    |

O modo BLE ainda não suporta isso.

**8. Limpar endereço do último dispositivo EDR conectado**

| Enviar   | Receber  | Parâmetro |
|----------|----------|-----------|
| AT+CLEAE | OK+CLEAE | None      |

**9. Limpar endereço do último dispositivo BLE conectado**

| Enviar   | Receber  | Parâmetro |
|----------|----------|-----------|
| AT+CLEAB | OK+CLEAB | None      |

**10. Consultar/Definir modo de trabalho DUAL do módulo**

<table border="1">
<tr>
<th>
Send
</th>
<th>
Receive
</th>
<th>
Parameter
</th>
</tr>
<tr>
<td width="300">
Q: AT+DUAL?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (Default: 0)
0 – Permitir conexão dupla.
1 – Permitir apenas uma conexão.

</td>
</tr>
<tr>
<td width="300">
S: AT+DUAL[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

AT+DUAL0: permite duas conexões ao mesmo tempo (SPP e BLE).
AT+DUAL1: Permite apenas uma conexão ao mesmo tempo (SPP ou BLE)

**11. Consultar/Definir chave de controle de fluxo de hardware**

<table border="1">
<tr>
<th>
Send
</th>
<th>
Receive
</th>
<th>
Parameter
</th>
</tr>
<tr>
<td width="300">
AT+FIOW?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,(Default: 0)
0: Controle de fluxo de hardware desligado
1: Controle de fluxo de hardware ligado

</td>
</tr>
<tr>
<td width="300">
AT+FIOW[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**12. Consultar/Definir modo de velocidade de transmissão de dados do módulo**

<table border="1">
<tr>
<th>
Send
</th>
<th>
Receive
</th>
<th>
Parameter
</th>
</tr>
<tr>
<td width="300">
AT+HIGH?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,(Default: 0)
0: Modo balanceado
1: Modo de alta velocidade

</td>
</tr>
<tr>
<td width="300">
AT+HIGH[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

No modo balanceado, equilibramos SPP e BLE com uma velocidade estável.
No modo de alta velocidade, não controlamos a velocidade, então o modo SPP terá alta velocidade.
No modo de alta velocidade, o módulo perde a função do pino RESETB, mas você ainda pode usar
o comando “AT+RESET” para resetar o módulo.

**13. Informações de Ajuda do Sistema**

| Enviar   | Receber          | Parâmetro |
|----------|------------------|-----------|
| AT+HELP? | Help Information | None      |

**14. Consultar/Definir notificação de módulo carregado**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
AT+INIT?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,?, (Padrão: 0)
0: Notificação de carregamento desligada
1: Notificação de carregamento ligada

</td>
</tr>
<tr>
<td width="300">
AT+INIT[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

Quando “AT+INIT1” estiver configurado, após o módulo ser carregado, o módulo irá enviar a string “OK+INIT” através da UART.

**15. Consultar/Definir modo de trabalho do módulo**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+MODE?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (Padrão: 0)
0 – Transmissão de dados.
1 – Controle remoto.

</td>
</tr>
<tr>
<td width="300">
S: AT+MODE[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

AT+MODE0: Apenas transfere dados quando a conexão é estabelecida.
AT+MODE1: Transfere dados e responde a comandos AT.

**16. Consultar/Definir informações de notificação**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+NOTI?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (Padrão: 0)
0: Não Notificar
1: Notificar

</td>
</tr>
<tr>
<td width="300">
S: AT+NOTI[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

Após AT+NOTI1, o módulo irá enviar uma string de conexão ou desconexão através da
UART quando o estado do módulo for alterado:

OK+CONE ======== conexão EDR

OK+LSTE ========= desconexão EDR

OK+CONB========= conexão BLE

OK+LSTB ========= desconexão BLE

OK+LSTA ========= exceto desconexão, o módulo irá reiniciar após 500 ms.

**17. Consultar/Definir modo de notificação**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+NOTP?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1; padrão: 0
0: sem endereço
1: com endereço

</td>
</tr>
<tr>
<td width="300">
Q: AT+NOTP[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

Este comando deve funcionar com “AT+NOTI1”; se esta chave estiver ligada, quando o módulo se conectar ou desconectar, a string de aviso incluirá o endereço remoto.

**18. Consultar/Definir nome EDR do módulo**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+NAME?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: nome EDR do módulo,
O comprimento máximo é 12.
Padrão: HMSoft

</td>
</tr>
<tr>
<td width="300">
Q: AT+NAME[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

**19. Consultar/Definir nome BLE do módulo**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+NAMB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: nome BLE do módulo,
O comprimento máximo é 12.
Padrão: HMSoft

</td>
</tr>
<tr>
<td width="300">
S: AT+NAMB[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

**20. Consultar/Definir status de saída de PIO1 (LED do sistema)e**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+PIO1?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1
0: Sem conexão, saída 500ms Alto 500ms Baixo; conectado, saída Alta.
1: Sem conexão, saída Baixa; conectado, saída Alta.
Padrão: 0

</td>
</tr>
<tr>
<td width="300">
S: AT+ PIO1 [P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

**21. Consultar/Definir status de saída de PIO**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+PIO[P1]?
</td>
<td width="300">
OK+ Get:[P1][P2]
</td>
<td rowspan="2" width="300">
P1: 2~B (HM-12)
P2: 2~3 (HM-13)
0: Saída Baixa
1: Saída Alta
?: Consultar

</td>
</tr>
<tr>
<td width="300">
S: AT+ PIO[P1][P2]
</td>
<td width="300">
OK+ Set:[P1][P2]
</td>
</tr>
</table>

**22. Consultar/Definir código PIN EDR**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+PINE?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: código EDR do módulo
Comprimento máximo: 6
Padrão: 1234

</td>
</tr>
<tr>
<td width="300">
S: AT+PINE[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**23. Consultar/Definir código PIN BLE**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+PINB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: código BLE do módulo
000000~999999
Padrão: 000000

</td>
</tr>
<tr>
<td width="300">
S: AT+PINB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**24. Consultar/Definir bit de paridade da UART**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+PARI?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, 2, (Padrão: 0)
0: Sem paridade
1: Paridade par
2: Paridade ímpar

</td>
</tr>
<tr>
<td width="300">
S: AT+PARI[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**25. Restaurar todos os valores de configuração para os de fábrica**

| Enviar   | Receber  | Parâmetro |
|----------|----------|-----------|
| AT+RENEW | OK+RENEW | Nenhum    |

**26. Reiniciar módulo**

| Enviar   | Receber  | Parâmetro |
|----------|----------|-----------|
| AT+RESET | OK+RESET | Nenhum    |

**27. Consultar valor de RSSI BLE**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>AT+RSSB?</td>
<td>OK+RSSB: [P1]</td>
<td>P1: valor de RSSI<br />
<p>9999: Sem conexão<br />
9998: Tente mais tarde<br />
9997: Erro de leitura<br />
Xxxx: valor de RSSI</p></td>
</tr>
</tbody>
</table>

Este comando deve ser usado depois que “AT+MODE1” estiver configurado. Este comando é usado apenas pelo dispositivo Bluetooth remoto.

**28. Consultar valor de RSSI EDR**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>AT+RSSE?</td>
<td>OK+RSSE: [P1]</td>
<td>P1: valor de RSSI<br /><p>9999: Sem conexão<br />
9998: Tente mais tarde<br />
9997: Erro de leitura<br />
Xxxx: valor de RSSI</p></td>
</tr>
</tbody>
</table>

**29. Consultar endereço do último dispositivo EDR conectado**

| Enviar   | Receber            | Parâmetro |
|----------|--------------------|-----------|
| AT+RADE? | OK+Get:MAC Address | Nenhum    |

**30. Consultar endereço do último dispositivo BLE conectado**

| Enviar   | Receber            | Parâmetro |
|----------|--------------------|-----------|
| AT+RADB? | OK+Get:MAC Address | Nenhum    |

**31. Consultar/Definir função Master e Slave**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
AT+ROLB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1 (padrão: 0)
0: Periférico
1: Central

</td>
</tr>
<tr>
<td width="300">
AT+ROLB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

Este comando terá efeito após o próximo acionamento de energia ou reinicialização do módulo.

**32. Consultar/Definir modo de trabalho EDR**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+SCAN?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (Padrão: 0)
0: Descoberta e conectável
1: Apenas conectável

</td>
</tr>
<tr>
<td width="300">
S: AT+SCAN[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**33. Consultar/Definir bit de parada da UART**

<table border="1">
<tr>
<th>
Enviar
</th>
<th>
Receber
</th>
<th>
Parâmetro
</th>
</tr>
<tr>
<td width="300">
Q: AT+STOP?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (Padrão: 0) 0: 1 bit de parada 1: 2 bits de parada
</td>
</tr>
<tr>
<td width="300">
S: AT+STOP[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**34. Consultar versão do software**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>
AT+VERR?<br />
<p>AT+VERS?</p>
</td>
<td>Informação de Versão</td>
<td>Nenhum</td>
</tr>
</tbody>
</table>

Programação
-----------

### Configurar o módulo Bluetooth com Serial no Windows

Esta seção mostra como configurar o Bluetooth com o PC; alguns métodos básicos de configuração podem ser aprendidos. Configure a conexão de hardware consultando a seção “Hardware Installation”. Você verá o LED azul no módulo piscando, indicando que nenhuma conexão está configurada.

Abra um terminal serial e configure Baud Rate:115200, Databits: 8, Stopbits: 1 e No Flow Control. Envie “AT” para o Bluetooth com o terminal serial e “OK” será retornado se tudo estiver correto. O Bluetooth só responde a comandos AT quando nenhuma conexão foi estabelecida, caso contrário todos os comandos serão vistos como string e enviados. Você pode distinguir o status através da indicação do LED.

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-AT.png)

Então algumas configurações úteis podem ser enviadas. Aqui estão alguns exemplos de comandos e respostas.

1. Testar a conexão serial, enviar “AT”, retornará “OK”.

2. Restaurar configurações de fábrica, enviar “AT+RENEW”, retornará “OK+RENEW”.

3. Redefinir a taxa de transmissão da porta serial, enviar “AT+BAUD2”, retornará “OK+Set:2”.

4. Habilitar autenticação, enviar “AT+AUTH1”, retornará “OK+Set:1”.

5. Reiniciar o Bluetooth, enviar “AT+RESET”, retornará ”OK+RESET”.

6. Consultar versão do firmware, enviar “AT+VERS?”, retornará “OK+Get:HMSoftV217”.

7. Consultar MAC de EDR, enviar “AT+ADDE?”, retornará “OK+Get:000E0E002074”.

8. Consultar MAC de BLE, enviar “AT+ADDB?”, retornará “OK+Get:000E0B002074”.

9. Definir o nome de EDR, enviar “AT+NAMEHM-13-EDR”, retornará “OK+Set:HM-13-EDR”.

10. Defina o nome do BLE, envie “AT+NAMEHM-13-BLE”, retorno “OK+Set:HM-13-BLE”.

11. Defina a senha do EDR, envie “AT+PINE123451”, retorno “OK+Set:123451”.

12. Defina a senha do BLE, envie “AT+PINB123451”, retorno “OK+Set:123451”.

13. Habilite descoberta e conectividade, envie “AT+SCAN0”, retorno “OK+Set:0”.

14. Habilite notificação de informações de conexão, envie “AT+NOTI1”, retorno “OK+Set:1”.

15. Notificação de informações inclui endereço, envie “AT+NOTP1”, retorno “OK+Set:1”.

16. Habilite a tecla do usuário, envie “AT+PIO01”, retorno “OK+Set:1”.

17. Configure para o modo Central, envie “AT+ROLB1”, retorno “AT+ROLB1”.

Ou configure para o modo Peripheral, envie “AT+ROLB0”, retorno “AT+ROLB0”.

Usamos dois módulos Bluetooth conectados ao PC, um foi configurado como Central enquanto o outro é Peripheral. Alguns segundos depois eles se encontram e o LED para de piscar, conectados!

### Comunicar com iPhone

Esse tipo de módulo Bluetooth possui dois protocolos: Bluetooth EDR (Enhanced Data Rate) e Bluetooth Low Energy. Ele pode se comunicar com qualquer dispositivo que tenha um desses protocolos. Alguns celulares Android com SO superior a 4.3 e iPhone4 ou posterior têm capacidade BLE. Usamos um iPhone para demonstrar como usar um celular para interagir com Bluetooth.

Alimente o Bluetooth e configure-o como função Peripheral. Procure por LightBlue na Apple Store e instale-o. Abra o app, você deve encontrar “HM-13-BLE”, que acabamos de renomear. Toque nele para conectar, depois toque em “Properties” para controlá-lo. A tecla “Hex” no canto superior direito serve para alterar o formato dos dados, talvez String seja mais fácil de visualizar. Toque em “Listen for notifications” para habilitar o recebimento de dados. Então podemos enviar dados para o PC através de BLE, toque em “Write new value” e escreva algumas palavras. O PC também pode transferir dados para o iPhone com o terminal serial.

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0108.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0109.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0111.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0114.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-DialogWithIOS.png)

### Transmissão de dados entre dois Arduinos

Pronto para programar? É hora de fazer algo depois da prática. Prepare um par de módulos Bluetooth e um Arduino ou outra plataforma para controlá-los. Aqui usamos dois Arduino Uno. Configure a conexão como mencionado na seção “Instalação de Hardware”.

O programa de Central e Peripheral usa o mesmo código, a única diferença é a macro definida no início do programa. Para atribuir o Bluetooth ao papel de Central, basta modificar o texto para “/#define MASTER 1”, ou “/#define MASTER 1” se o papel de Peripheral for atribuído.

Para o fluxo do programa de inicialização, consulte o fluxograma a seguir. Antes de tudo, precisamos distinguir a taxa de baud pré-configurada do Bluetooth. Depois disso, envie comandos para restaurar as configurações de fábrica e altere a taxa de baud de 115200 para 9600, já que a serial por software não funciona bem em baud rate alta. Em seguida, outros parâmetros foram configurados no Bluetooth, com o comando Reset ao final.

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Init-flowchat.png)

Após a inicialização, o Central e o Peripheral farão coisas diferentes; o Central enviará mensagens para o Peripheral em intervalos e imprimirá o que receber do Peripheral, enquanto o Peripheral apenas responde ao Central.

Clique [aqui](https://github.com/Seeed-Studio/HM-13_SW) para baixar o código de teste e abra HM-13/_SW.ino com a Arduino IDE, compile e faça o download para o Arduino Uno. Lembre-se de configurar o Bluetooth para funções diferentes modificando a macro no início. Se você tiver qualquer problema sobre como começar com o Arduino, clique <a href="/pt-br/Getting_Started_with_Seeeduino"><span><font color={'8DC215'} size={"3"}> aqui </font></span></a> para obter ajuda.

Depois de fazer o download do programa, abra duas janelas de terminal serial, os LEDs no Bluetooth piscarão; alguns segundos depois, eles param de piscar e permanecem acesos, o que indica que eles se conectaram um ao outro.
De acordo com o modo como o programa foi escrito, o Central envia mensagens continuamente para o Peripheral e recebe retorno todas as vezes.

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Debug_Output_Master.png)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Debug_Output_Slave.png)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Eagle_Grove-BLE-dual_model-v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [HM-13 Bluetooth Module Datasheet](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Bluetooth_HM-13_en.pdf)
- [Código Arduino](https://github.com/Seeed-Studio/HM-13_SW)
- [EAGLE/_Grove-BLE/_(dual/_model)/_v1.0/_sch/_pcb](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Eagle_Grove-BLE-dual_model-v1.0_sch_pcb.zip)
- [PDF/_Grove-BLE/_(dual/_model)/_v1.0/_sch](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Grove-BLE-dual_model-v1.0.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_BLE_(dual_model)_v1.0 -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
