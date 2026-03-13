---
description: BLE (dual) Bee v1.0
title: BLE (dual) Bee v1.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BLE_dual_Bee_v1.0
sku: 113050013
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BLE_dual_Bee_v1.0/
---

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_PhotoBottom.jpg)

BLE (dual) Bee v1.0 usa o chip Bluetooth de modo duplo CSR, com o microcontrolador de arquitetura ARM que suporta instruções AT. Os usuários podem desenvolver com flexibilidade de acordo com a taxa de baud serial, o nome do equipamento e a senha de pareamento.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE(dual-model)-Bee-p-2406.html)

## Recursos

- Versão BT: Bluetooth Specification V4.0 & BLE
- O máximo de bytes de envio e recebimento UART é 512
- Outro dispositivo para o módulo em modo SPP: 90 bytes por pacote
- Outro dispositivo para o módulo em modo BLE: 20 bytes por pacote
- Dois modos de transmissão de dados, modo balanceado e modo de alta velocidade
- Frequência de trabalho: banda ISM de 2,4 GHz
- Método de modulação: GFSK (Gaussian Frequency Shift Keying)
- Potência de RF: -23 dBm, -6 dBm, 0 dBm, 6 dBm.
- Velocidade: Assíncrona: 3K bytes
- Síncrona: 3K bytes
- Segurança: Autenticação e criptografia
- Serviço: Escravo SPP, Periférico BLE, UUID FFE0, FFE1
- Alimentação: +3,3VDC 50mA
- Longo alcance: SPP 30 metros, BLE 60 metros
- Consumo de energia: SPP 13,5mA, BLE 9,5mA
- Temperatura de trabalho: –5 ~ +65 graus Celsius

## Especificação

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/BLE-dual-Bee_v1.0.png)

- **U1**: U1 é o módulo sem fio, ele inclui circuito automático de reset de energização.
- **D3**: O LED exibe dois modos de trabalho: dormindo com ele piscando lentamente; status conectado com ele aceso continuamente.
- **JP1&JP3**: O conector Bee padrão.

## Cuidados

A tensão de alimentação deste módulo é 2,5V ~ 3,7V, maior que isso pode causar danos permanentes ao dispositivo. A velocidade de transmissão BLE é mais lenta do que a transmissão SPP, então selecionamos a mais baixa no projeto, de acordo com o planejamento de velocidade de um produto BLE de modo duplo.

## Instalação de Hardware

### Conectando o Bluetooth ao PC através do Uart Bee

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToPCSet.jpg)|
|---|---|

### Conectando o Bluetooth ao Arduino

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduinoSet.jpg)|
|---|---|

## Instruções de Software

### Convenções

- No modo EDR, apenas o escravo pode ser configurado, enquanto no modo BLE tanto mestre quanto escravo podem ser usados.
- Configuração padrão de fábrica:
  - Nome EDR HMSoft, função Escravo, PinCode 1234
  - Nome BLE HMSoft, função Escravo, PinCode 000000
  - Baud: 115200, N, 8, 1;
- Formato de comando AT:
  - Formato de comando AT em maiúsculas, formato de string, sem qualquer outro símbolo (por exemplo, \r ou \n).
  - Qualquer comando incorreto não terá resposta.

### Comandos AT

**1. Comando de Teste**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK/ER/Disconnect link</td>
<td width="300">None</td>
</tr>
</table>

Se o módulo não estiver conectado a um dispositivo remoto, receberá: "OK"

Se o módulo tiver um erro, receberá: "ER"

Se o módulo estiver conectado, o módulo será desconectado do dispositivo remoto; se "AT + NOTI" estiver configurado para 1, receberá uma string de informação

**2. Consultar endereço EDR do módulo**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+ADDE?</td>
<td width="300">OK+ Get: MAC</td>
<td width="300">None</td>
</tr>
</table>

**3. Consultar endereço BLE do módulo**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+ADDB?</td>
<td width="300">OK+ Get: MAC</td>
<td width="300">None</td>
</tr>
</table>

**4. Consultar/Definir modo de Autenticação**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">Q: AT+AUTH?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Default: 0)<br/>0 – Sem autenticação<br/>1 – Deve ter autenticação</td>
</tr>
<tr>
<td width="300">S: AT+AUTH[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+AUTH0: permite fazer uma conexão insegura.

AT+AUTH1: toda conexão deve ter autenticação.

**5. Consultar/Definir modo A para B**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">Q: AT+ATOB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Default: 0)<br/>0 – Não abrir ATOB<br/>1 – Abrir modo ATOB</td>
</tr>
<tr>
<td width="300">S: AT+ATOB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

Este comando deve funcionar com o comando AT+MODE0. Quando o dispositivo A (modo SPP) se conecta ao módulo e o dispositivo B (modo BLE) também se conecta ao módulo, a string de dados enviada do dispositivo A para o módulo será enviada para o dispositivo B. A string de dados enviada do dispositivo B para o módulo também será enviada para o dispositivo A.

**6. Consultar/Definir taxa de baud**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">Q: AT+BAUD?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 1~7, (Default: 6).<br/>1 - 4800<br/>2 – 9600<br/>3 – 19200<br/>4 – 38400<br/>5 – 57600<br/>6 – 115200<br/>7 - 230400</td>
</tr>
<tr>
<td width="300">S: AT+BAUD[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**7. Limpar informações de vinculação**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+BONDE</td>
<td width="300">OK+BONDE</td>
<td width="300">Limpar informação de vinculação EDR</td>
</tr>
<tr>
<td width="300">AT+BONDB</td>
<td width="300">OK+BONDB</td>
<td width="300">Limpar informação de vinculação BLE</td>
</tr>
</table>

O modo BLE ainda não oferece suporte a isso.

**8. Limpar endereço do último dispositivo EDR conectado**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+CLEAE</td>
<td width="300">OK+CLEAE</td>
<td width="300">None</td>
</tr>
</table>

**9. Limpar endereço do último dispositivo BLE conectado**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+CLEAB</td>
<td width="300">OK+CLEAB</td>
<td width="300">None</td>
</tr>
</table>

**10. Consultar/Definir modo de trabalho DUAL do módulo**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">Q: AT+DUAL?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Default: 0)<br/>0 – Permitir conexão dupla.<br/>1 – Permitir uma conexão.</td>
</tr>
<tr>
<td width="300">S: AT+DUAL[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+DUAL0: permite duas conexões ao mesmo tempo (SPP e BLE).

AT+DUAL1: permite apenas uma conexão ao mesmo tempo (SPP ou BLE)

**11. Consultar/Definir chave de controle de fluxo de hardware**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+FIOW?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,(Default: 0)<br/>0: Controle de fluxo de hardware desligado<br/>1: Controle de fluxo de hardware ligado</td>
</tr>
<tr>
<td width="300">AT+FIOW[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**12. Consultar/Definir modo de velocidade de transmissão de dados do módulo**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+HIGH?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,(Default: 0)<br/>0: Modo balanceado<br/>1: Modo de alta velocidade</td>
</tr>
<tr>
<td width="300">AT+HIGH[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

No modo balanceado, equilibramos SPP e BLE com uma velocidade estável.

No modo de alta velocidade, não controlamos a velocidade, então o modo SPP terá alta velocidade.

No modo de alta velocidade, o módulo perde a função do pino RESETB, mas você ainda pode usar o comando "AT+RESET" para reiniciar o módulo.

**13. Informações de Ajuda do Sistema**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+HELP?</td>
<td width="300">Help Information</td>
<td width="300">None</td>
</tr>
</table>

**14. Consultar/Definir notificação de carregamento do módulo**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">AT+INIT?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,?, (Default: 0)<br/>0: Notificação de carregamento desligada<br/>1: Notificação de carregamento ligada</td>
</tr>
<tr>
<td width="300">AT+INIT[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

Quando "AT+INIT1" estiver configurado, após o módulo carregar, o módulo irá enviar a string "OK+INIT" pela UART.

**15. Consultar/Definir modo de trabalho do módulo**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">Q: AT+MODE?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Default: 0)<br/>0 – Transmissão de dados.<br/>1 – Controle remoto.</td>
</tr>
<tr>
<td width="300">S: AT+MODE[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

AT+MODE0: apenas transfere dados quando a conexão é estabelecida.

AT+MODE1: Transfere dados e responde a comandos AT.

**16. Consultar/Definir informações de notificação**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">Q: AT+NOTI?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Default: 0)<br/>0: Não notificar<br/>1: Notificar</td>
</tr>
<tr>
<td width="300">S: AT+NOTI[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

Após AT+NOTI1, o módulo enviará a string de conexão ou desconexão através da

UART quando o estado do módulo mudar:

OK+CONE ======== conexão EDR

OK+LSTE ========= desconexão EDR

OK+CONB========= conexão BLE

OK+LSTB ========= desconexão BLE

OK+LSTA ========= exceto desconexão, o módulo será reiniciado após 500 ms.

**17. Consultar/Definir modo de notificação**

<table>
<tr>
<th>Send</th>
<th>Receive</th>
<th>Parameter</th>
</tr>
<tr>
<td width="300">Q: AT+NOTP?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1; default: 0<br/>0: sem endereço<br/>1: com endereço</td>
</tr>
<tr>
<td width="300">Q: AT+NOTP[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

Este comando deve funcionar com "AT+NOTI1", se esta chave estiver aberta, quando o módulo conectar ou desconectar, a string de aviso incluirá o endereço remoto.

**18. Consultar/Configurar nome EDR do módulo**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+NAME?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: nome EDR do módulo,<br/>Comprimento máximo é 12.<br/>Padrão: HMSoft</td>
</tr>
<tr>
<td width="300">Q: AT+NAME[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**19. Consultar/Configurar nome BLE do módulo**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+NAMB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: nome BLE do módulo,<br/>Comprimento máximo é 12.<br/>Padrão: HMSoft</td>
</tr>
<tr>
<td width="300">S: AT+NAMB[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**20. Consultar/Configurar status de saída de PIO1 (LED do Sistema)e**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+PIO1?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1<br/>0: Saída desconectada 500 ms Alta 500 ms Baixa, Saída conectada Alta.<br/>1: Saída desconectada Baixa, Saída conectada Alta.<br/>Padrão: 0</td>
</tr>
<tr>
<td width="300">S: AT+ PIO1 [P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**21. Consultar/Configurar status de saída de PIO**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+PIO[P1]?</td>
<td width="300">OK+ Get:[P1][P2]</td>
<td rowspan="2" width="300">P1: 2~B (HM-12)<br/>P2: 2~3 (HM-13)<br/>0: Saída Baixa<br/>1: Saída Alta<br/>?: Consultar</td>
</tr>
<tr>
<td width="300">S: AT+ PIO[P1][P2]</td>
<td width="300">OK+ Set:[P1][P2]</td>
</tr>
</table>

**22. Consultar/Configurar código PIN EDR**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+PINE?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: Código EDR do módulo<br/>Comprimento máximo: 6<br/>Padrão: 1234</td>
</tr>
<tr>
<td width="300">S: AT+PINE[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table]

**23. Consultar/Configurar código PIN BLE**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+PINB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: Código BLE do módulo<br/>000000~999999<br/>Padrão: 000000</td>
</tr>
<tr>
<td width="300">S: AT+PINB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**24. Consultar/Configurar bit de paridade da UART**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+PARI?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, 2, (Padrão: 0)<br/>0: Sem paridade<br/>1: Paridade par<br/>2: Paridade ímpar</td>
</tr>
<tr>
<td width="300">S: AT+PARI[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**25. Restaurar todos os valores de configuração para os de fábrica**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">AT+RENEW</td>
<td width="300">OK+RENEW</td>
<td width="300">Nenhum</td>
</tr>
</table>

**26. Reiniciar módulo**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">AT+RESET</td>
<td width="300">OK+RESET</td>
<td width="300">Nenhum</td>
</tr>
</table>

**27. Consultar valor de RSSI BLE**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">AT+RSSB?</td>
<td width="300">OK+RSSB: [P1]</td>
<td width="300">P1: valor RSSI<br/>9999: Sem conexão<br/>9998: Tente mais tarde<br/>9997: Erro de leitura<br/>Xxxx: valor RSSI</td>
</tr>
</table>

Este comando deve ser usado depois que "AT+MODE1" estiver configurado.
Este comando é usado apenas por dispositivo Bluetooth remoto.
**28. Consultar valor de RSSI EDR**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">AT+RSSE?</td>
<td width="300">OK+RSSE: [P1]</td>
<td width="300">P1: valor RSSI<br/>9999: Sem conexão<br/>9998: Tente mais tarde<br/>9997: Erro de leitura<br/>Xxxx: valor RSSI</td>
</tr>
</table>

**29. Consultar endereço do último dispositivo EDR conectado**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">AT+RADE?</td>
<td width="300">OK+Get:MAC Address</td>
<td width="300">Nenhum</td>
</tr>
</table>

**30. Consultar endereço do último dispositivo BLE conectado**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">AT+RADB?</td>
<td width="300">OK+Get:MAC Address</td>
<td width="300">Nenhum</td>
</tr>
</table>

**31. Consultar/Configurar papel de Mestre e Escravo**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">AT+ROLB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1 (padrão: 0)<br/>0: Peripheral<br/>1: Central</td>
</tr>
<tr>
<td width="300">AT+ROLB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

Este comando terá efeito após o próximo energizar ou resetar o módulo.
**32. Consultar/Configurar modo de trabalho EDR**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+SCAN?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Padrão: 0)<br/>0: Descoberta e conectável<br/>1: Apenas conectável</td>
</tr>
<tr>
<td width="300">S: AT+SCAN[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**33. Consultar/Configurar bit de parada da UART**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">Q: AT+STOP?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Padrão: 0)<br/>0: 1 bit de parada<br/>1: 2 bits de parada</td>
</tr>
<tr>
<td width="300">S: AT+STOP[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**34. Consultar versão do Software**

<table>
<tr>
<th>Enviar</th>
<th>Receber</th>
<th>Parâmetro</th>
</tr>
<tr>
<td width="300">AT+VERR?<br/>AT+VERS?</td>
<td width="300">Informações da Versão</td>
<td width="300">Nenhum</td>
</tr>
</table>

## Programação

### Configurar o módulo Bluetooth com Serial no Windows

Esta seção mostra como configurar o Bluetooth com PC, alguns métodos básicos de configuração podem ser aprendidos.
Configure a conexão de hardware consultando a seção "Instalação de Hardware". Você verá que o LED azul no módulo pisca indicando que nenhuma conexão está estabelecida.

Abra um terminal serial e configure Baud Rate:115200, Databits: 8, Stopbits: 1 e No Flow Control. Envie "AT" para o Bluetooth com o terminal serial e "OK" será retornado se tudo correr bem. O Bluetooth só responde a comandos AT quando nenhuma conexão foi estabelecida, caso contrário todos os comandos serão vistos como string e enviados. Você pode distinguir o status através da indicação do LED.

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-AT.png)

Então algumas configurações úteis podem ser enviadas. Aqui estão alguns exemplos de comandos e respostas.

1. Testar conexão serial, enviar "AT", retornará "OK".

2. Restaurar configurações de fábrica, enviar "AT+RENEW", retornará "OK+RENEW".

3. Redefinir baud rate da porta serial, enviar "AT+BAUD2", retornará "OK+Set:2".

4. Habilitar autenticação, enviar "AT+AUTH1", retornará "OK+Set:1".

5. Resetar o Bluetooth, enviar "AT+RESET", retornará "OK+RESET".

6. Consultar versão do firmware, enviar "AT+VERS?", retornará "OK+Get:HMSoftV217".

7. Consultar MAC de EDR, enviar "AT+ADDE?", retornará "OK+Get:000E0E002074".

8. Consultar MAC de BLE, enviar "AT+ADDB?", retornará "OK+Get:000E0B002074".

9. Configurar o nome de EDR, enviar "AT+NAMEHM-13-EDR", retornará "OK+Set:HM-13-EDR".

10. Configurar o nome de BLE, enviar "AT+NAMEHM-13-BLE", retornará "OK+Set:HM-13-BLE".

11. Configurar a senha de EDR, enviar "AT+PINE123451", retornará "OK+Set:123451".

12. Configurar a senha de BLE, enviar "AT+PINB123451", retornará "OK+Set:123451".

13. Habilitar descoberta e conexão, enviar "AT+SCAN0", retornará "OK+Set:0".

14. Habilitar informações de notificação de conexão, enviar "AT+NOTI1", retornará "OK+Set:1".

15. Informações de notificação incluem endereço, enviar "AT+NOTP1", retornará "OK+Set:1".

16. Habilitar tecla de usuário, enviar "AT+PIO01", retornará "OK+Set:1".

17. Configurar para modo Central, enviar "AT+ROLB1", retornará "AT+ROLB1".

Ou configurar para modo Peripheral, enviar "AT+ROLB0", retornará "AT+ROLB0".

Usamos dois módulos Bluetooth conectados ao PC, um foi configurado como Central enquanto o outro é Peripheral. Alguns segundos depois eles se encontram e o LED para de piscar, conectado!

### Comunicar com iPhone

Este tipo de módulo Bluetooth possui dois protocolos: Bluetooth EDR (Enhanced Data Rate) e Bluetooth Low Energy. Ele pode se comunicar com qualquer dispositivo que tenha um desses protocolos. Alguns telefones Android com SO superior a 4.3 e iPhone4 ou posterior têm capacidade BLE. Usamos um iPhone para demonstrar como usar um celular para interagir com o Bluetooth.

Alimente o Bluetooth e configure-o como papel Peripheral. Procure por LightBlue na Apple Store e instale-o. Inicie o aplicativo, você poderá encontrar "HM-13-BLE", que acabamos de renomear. Toque nele para conectar, depois toque em "Properties" para controlá-lo. A tecla "Hex" no canto superior direito serve para mudar o formato dos dados, talvez String seja mais fácil de visualizar. Toque em "Listen for notifications" para habilitar o recebimento de dados. Então podemos enviar dados para o PC através de BLE, toque em "Write new value" e escreva algumas palavras. Também o PC pode transferir dados para o iPhone com o terminal serial.

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0108.PNG)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0109.PNG)|
|---|---|
|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0111.PNG)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0114.PNG)|

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-DialogWithIOS.png)

### Transmissão de dados entre dois Arduinos

Pronto para programar? É hora de fazer algo depois da prática. Prepare um par de módulos Bluetooth e Arduino ou outra plataforma para controlá-los. Aqui usamos dois Arduino Uno.
Configure a conexão como mencionado na seção "Instalação de Hardware".

O programa de Central e Peripheral usa o mesmo código, a única diferença é o micro define no início do programa. Para atribuir o papel Central ao Bluetooth, só é necessário modificar o texto para "#define MASTER 1", ou "#define MASTER 1" se o papel Peripheral for atribuído.

O fluxo do programa de inicialização pode ser consultado no fluxograma a seguir. Primeiro, precisamos distinguir a taxa de baud predefinida do Bluetooth. Depois disso, envie comandos para restaurar as configurações de fábrica e altere a taxa de baud de 115200 para 9600, pois a serial por software não funcionará bem em taxa de baud alta. Em seguida, outros parâmetros são configurados no Bluetooth, finalizando com o comando Reset.

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Init-flowchat.png)

Após a inicialização, o Central e o Peripheral farão coisas diferentes: o Central enviará mensagens para o Peripheral em intervalos e imprimirá o que recebeu do Peripheral, enquanto o Peripheral apenas responderá ao Central.

<!-- Click [here](https://github.com/Seeed-Studio/HM-13_SW) to download the test code and open HM-13_SW.ino with Arduino IDE, compile and download to Arduino Uno. Remember to configure the Bluetooth to different role by modify the macro at the beginning. If you have any problem about how to start Arduino, please click [here](/pt-br/Getting_Started_with_Seeeduino) for some help. -->

Após baixar o programa, abra duas janelas de terminal serial, os LEDs no Bluetooth piscarão; alguns segundos depois, eles param de piscar e permanecem acesos, o que indica que estão conectados um ao outro. De acordo com o programa escrito, o Central envia mensagens continuamente ao Peripheral e obtém um retorno todas as vezes.

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Debug_Output_Slave.png)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-Bee_V1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [HM-13 Bluetooth Datasheet](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/Bluetooth_HM-13_en.pdf)

- [Código Arduino](https://github.com/Seeed-Studio/HM-13_SW)

- [Eagle_BLE(dual)_Bee_V1.0_sch_pcb](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-Bee_V1.0_sch_pcb.zip)

- [PDF_BLE(dual)_bee_v1.0](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-bee_v1.0.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
