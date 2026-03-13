---
description: Xadow - BLE (Dual Model) v1.0
title: Xadow - BLE (Dual Model) v1.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_BLE_Dual_Model_V1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_BLE_Dual_Model_V1.0/
---

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_PhotoBottom.jpg" alt="some_text"/>

Xadow - BLE (dual model) v1.0 usa o chip Bluetooth de modo duplo CSR, com o microcontrolador de arquitetura ARM que suporta instruções AT. Os usuários podem desenvolver de forma flexível de acordo com a taxa de baud serial, nome do dispositivo e senha de pareamento.

<a href="https://www.seeedstudio.com/Xadow-BLE-(dual-model)-p-2405.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>

## Recursos

---

- Versão BT: Especificação Bluetooth V4.0 e BLE
- O número máximo de bytes enviados e recebidos por UART é 512
- Outro dispositivo para o módulo no modo SPP: 90 bytes por pacote
- Outro dispositivo para o módulo no modo BLE: 20 bytes por pacote
- Dois modos de transmissão de dados, modo balanceado e modo de alta velocidade
- Frequência de trabalho: banda ISM de 2,4GHz
- Método de modulação: GFSK (Gaussian Frequency Shift Keying)
- Potência de RF: -23dbm, -6dbm, 0dbm, 6dbm.
- Velocidade: Assíncrona: 3K Bytes
- Síncrona: 3K Bytes
- Segurança: Autenticação e criptografia
- Serviço: Escravo SPP, Periférico BLE, UUID FFE0, FFE1
- Alimentação: +3,3VDC 50mA
- Longo alcance: SPP 30 metros, BLE 60 metros
- Consumo: SPP 13,5mA, BLE 9,5mA
- Temperatura de trabalho: –5 ~ +65 graus Celsius

## Especificação

---
<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/600px-Xadow_-_BLE_(dual_model)_v1.0.png" alt="some_text"/>

- **K2**: Durante o estado conectado, será desconectado ao pressionar K2 por mais de 100ms. Durante o modo de suspensão, é possível restaurar as configurações de fábrica pressionando K2.
- **D1**: O LED exibe dois modos de trabalho: em modo de suspensão ele pisca lentamente; em estado conectado ele permanece aceso continuamente.
- **J1&J2**: O conector Xadow padrão.

:::caution
    A tensão de alimentação deste módulo é 2,5V ~ 3,7V, maior que isso pode causar danos permanentes ao dispositivo. A velocidade de transmissão BLE é mais lenta do que a transmissão SPP, então selecionamos a menor na concepção, de acordo com o planejamento de velocidade de um produto BLE de modo duplo.
:::

## Instalação de Hardware

---
**Conectando o Bluetooth ao PC através do Uart Bee**

O Xadow - BLE possui uma interface Xadow padrão com passo de derivação; usamos um [Xadow - Breakout](https://wiki.seeedstudio.com/pt-br/Xadow_Breakout) para convertê-la em soquete Grove.

Como a interface Xadow é uma porta de simetria axial, é necessário obedecer à direção de montagem. Consulte a imagem abaixo.

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToPC.jpg" alt="some_text"/>

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToPCConnect.jpg" alt="some_text"/>

**Conectando o Bluetooth à Xadow - Main Board**

Conecte o Xadow BLE Slave à [Xadow - Main Board](https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board) e conecte a Main Board ao PC com um cabo USB.

Nota: ao conectar Xadow - BLE à Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto chanfrado de um módulo Xadow precisa se conectar ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToArduino.jpg" alt="some_text"/>

## Instruções de Software

---
**Convenções**

- No modo EDR, apenas o escravo pode ser configurado, enquanto no modo BLE tanto o mestre quanto o escravo podem ser configurados.
- Configuração padrão de fábrica:
  - Nome EDR HMSoft, papel de escravo, PinCode 1234
  - Nome BLE HMSoft, papel de escravo, PinCode 000000
  - Baud: 115200, N, 8, 1;
- Formato de comando AT:
  - Formato de comando AT em maiúsculas, formato de string, sem qualquer outro símbolo (por exemplo, \r ou \n).
  - Qualquer comando incorreto não terá resposta.

**Comandos AT**

**1. Comando de teste**

|Send| Receive| Parameter|
|---|---|---|
|AT |OK/ER/Disconnect link |None|

- Se o módulo não estiver conectado a um dispositivo remoto, receberá: “OK”
- Se o módulo tiver um erro, receberá: “ER”
- Se o módulo estiver conectado, o módulo será desconectado do dispositivo remoto; se “AT + NOTI” estiver configurado como 1, receberá uma string de informação.

**2. Consultar endereço EDR do módulo**

|Send| Receive| Parameter|
|---|---|---|
|AT+ADDE? |OK+ Get: MAC| None|

**3. Consultar endereço BLE do módulo**

|Send| Receive| Parameter|
|---|---|---|
|AT+ADDB?| OK+ Get: MAC |None|

**4. Consultar/Definir modo de autenticação**

|Send| Receive| Parameter|
|---|---|---|
|Q: AT+AUTH? |OK+ Get:[P1] |P1: 0, 1, (Default: 0) / 0 – Sem autenticação / 1 – Deve ter autenticação|
|S: AT+AUTH[P1] |OK+ Set:[P1]|P1: 0, 1, (Default: 0)/ 0 – Sem autenticação / 1 – Deve ter autenticação|

- AT+AUTH0: permite fazer uma conexão insegura.
- AT+AUTH1: toda conexão deve ter autenticação.

**5. Consultar/Definir modo A para B**

|Send| Receive| Parameter|
|---|---|---|
|Q: AT+ATOB? |OK+ Get:[P1] |P1: 0, 1, (Default: 0)/ 0 – Não abrir ATOB/ 1 – Abrir modo ATOB|
|S: AT+ATOB[P1] |OK+ Set:[P1]|P1: 0, 1, (Default: 0)/ 0 – Não abrir ATOB/ 1 – Abrir modo ATOB|

Este comando deve funcionar com o comando AT+MODE0. Quando o dispositivo A (modo SPP) se conecta ao módulo e o dispositivo B (modo BLE) também se conecta ao módulo, a string de dados do dispositivo A enviada ao módulo será enviada ao dispositivo B. A string de dados do dispositivo B enviada ao módulo também será enviada ao dispositivo A.

**6. Consultar/Definir taxa de baud**

|Send| Receive| Parameter|
|---|---|---|
|Q: AT+BAUD?| OK+ Get:[P1] |P1: 1~7, (Default: 6)./  1 - 4800  / 2 – 9600 / 3 – 19200 / 4 – 38400 / 5 – 57600 / 6 – 115200 / 7 - 230400 |
|S: AT+BAUD[P1]| OK+ Set:[P1]|P1: 1~7, (Default: 6). / 1 - 4800 / 2 – 9600 / 3 – 19200 / 4 – 38400 / 5 – 57600 / 6 – 115200 / 7 - 230400|

**7. Limpar informações de pareamento**

|Send| Receive| Parameter|
|---|---|---|
|AT+BONDE| OK+BONDE |Limpar informações de pareamento EDR|
|AT+BONDB| OK+BONDB |Limpar informações de pareamento BLE|

O modo BLE ainda não oferece suporte a isso.

**8. Limpar endereço do último dispositivo EDR conectado**

|Send| Receive| Parameter|
|---|---|---|
|AT+CLEAE| OK+CLEAE |None|

**9. Limpar endereço do último dispositivo BLE conectado**

|Send| Receive| Parameter|
|---|---|---|
|AT+CLEAB| OK+CLEAB| None|

**10. Consultar/Definir modo de trabalho DUAL do módulo**

|Send| Receive| Parameter|
|---|---|---|
|Q: AT+DUAL? |OK+ Get:[P1]| P1: 0, 1, (Default: 0) / 0 – Permitir conexão dupla. / 1 – Permitir uma conexão.|
|S: AT+DUAL[P1] |OK+ Set:[P1]|P1: 0, 1, (Default: 0) / 0 – Permitir conexão dupla.  / 1 – Permitir uma conexão.|

- AT+DUAL0: permite duas conexões ao mesmo tempo (SPP e BLE).
- AT+DUAL1: permite apenas uma conexão ao mesmo tempo (SPP ou BLE)

**11. Consultar/Definir chave de controle de fluxo por hardware**

|Send| Receive| Parameter|
|---|---|---|
|AT+FIOW?| OK+ Get:[P1] |P1: 0, 1,(Default: 0) / 0: Controle de fluxo por hardware desligado / 1: Controle de fluxo por hardware ligado|
|AT+FIOW[P1]| OK+ Set:[P1]|P1: 0, 1,(Default: 0) / 0: Controle de fluxo por hardware desligado / 1: Controle de fluxo por hardware ligado|

**12. Consultar/Definir modo de velocidade de transmissão de dados do módulo**

|Send| Receive| Parameter|
|---|---|---|
|AT+HIGH? |OK+ Get:[P1]| P1: 0, 1,(Default: 0)/ 0: Modo balanceado / 1: Modo de alta velocidade|
|AT+HIGH[P1]| OK+ Set:[P1]|P1: 0, 1,(Default: 0) / 0: Modo balanceado / 1: Modo de alta velocidade|

- No modo balanceado, equilibramos SPP e BLE com uma velocidade estável.
- No modo de alta velocidade, não controlamos a velocidade, portanto o modo SPP terá alta velocidade.
- No modo de alta velocidade, o módulo perde a função do pino RESETB, mas você ainda pode usar
- o comando “AT+RESET” para reiniciar o módulo.

**13. Informações de ajuda do sistema**

|Send| Receive |Parameter|
|---|---|---|
|AT+HELP? |Help Information| None|

**14. Consultar/Definir notificação de carregamento do módulo**

|Send| Receive |Parameter|
|---|---|---|
|AT+INIT? |OK+ Get:[P1] |P1: 0, 1,?, (Default: 0) / 0: Notificação de carregamento desligada / 1: Notificação de carregamento ligada|
|AT+INIT[P1]| OK+ Set:[P1]|P1: 0, 1,?, (Default: 0) / 0: Notificação de carregamento desligada / 1: Notificação de carregamento ligada|

Quando “AT+INIT1” está configurado, após o módulo carregar, o módulo irá enviar a string “OK+INIT” pela UART.

**15. Consultar/Definir modo de trabalho do módulo**

|Send| Receive |Parameter|
|---|---|---|
|Q: AT+MODE? |OK+ Get:[P1] |P1: 0, 1, (Default: 0) / 0 – Transmissão de dados. / 1 – Controle remoto.|
|S: AT+MODE[P1]| OK+ Set:[ P1]|P1: 0, 1, (Default: 0) / 0 – Transmissão de dados. / 1 – Controle remoto.|

- AT+MODE0: apenas transfere dados quando a conexão é estabelecida.
- AT+MODE1: transfere dados e responde a comandos AT.

**16. Consultar/Definir informações de notificação**

|Send| Receive |Parameter|
|---|---|---|
|Q: AT+NOTI? |OK+ Get:[P1]| P1: 0, 1, (Default: 0) / 0: Não notificar / 1: Notificar|
|S: AT+NOTI[P1]| OK+ Set:[ P1]|P1: 0, 1, (Default: 0) / 0: Não notificar / 1: Notificar|

- Após AT+NOTI1, o módulo enviará strings de conexão ou desconexão através da
- UART quando o estado do módulo mudar:
- OK+CONE ======== EDR conectado
- OK+LSTE ========= EDR desconectado
- OK+CONB========= BLE conectado
- OK+LSTB ========= BLE desconectado
- OK+LSTA ========= exceto desconectar, o módulo será reiniciado após 500 ms.

**17. Consultar/Definir modo de notificação**

|Send| Receive |Parameter|
|---|---|---|
|Q: AT+NOTP? |OK+ Get:[P1] |P1: 0, 1; default: 0 / 0: sem endereço / 1: com endereço|
|Q: AT+NOTP[P1] |OK+ Set:[ P1]|P1: 0, 1; default: 0 / 0: sem endereço / 1: com endereço|

Este comando deve funcionar com “AT+NOTI1”; se essa chave estiver ligada, quando o módulo conectar ou desconectar, a string de aviso incluirá o endereço remoto.

**18. Consultar/Definir nome EDR do módulo**

|Send| Receive |Parameter|
|---|---|---|
|Q: AT+NAME?| OK+ Get:[P1] |P1: nome EDR do módulo, / Comprimento máximo é 12. / Padrão: HMSoft|
|Q: AT+NAME[P1] |OK+ Set:[ P1]|P1: nome EDR do módulo, / Comprimento máximo é 12. / Padrão: HMSoft|

**19. Consultar/Definir nome BLE do módulo**

|Send| Receive |Parameter|
|---|---|---|
|Q: AT+NAMB? |OK+ Get:[P1]| P1: nome BLE do módulo,  / Comprimento máximo é 12. / Padrão: HMSoft|
|S: AT+NAMB[P1] |OK+ Set:[ P1]|P1: nome BLE do módulo, / Comprimento máximo é 12. / Padrão: HMSoft|

**20. Consultar/Definir status de saída de PIO1 (LED do sistema)e**

|Send| Receive |Parameter|
|---|---|---|
|Q: AT+PIO1?| OK+ Get:[P1]| P1: 0, 1 / 0: Saída desconectada 500ms High 500ms Low, saída conectada High. / 1: Saída desconectada Low, saída conectada High. / Padrão: 0|
|S: AT+ PIO1 [P1]| OK+ Set:[ P1]|P1: 0, 1 / 0: Saída desconectada 500ms High 500ms Low, saída conectada High. / 1: Saída desconectada Low, saída conectada High. / Padrão: 0|

**21. Consultar/Definir status de saída PIO**

|Enviar| Receber |Parâmetro|
|---|---|---|
|Q: AT+PIO[P1]? |OK+ Get:[P1][P2]| P1: 2~B (HM-12) / P2: 2~3 (HM-13) / 0: Saída em nível baixo / 1: Saída em nível alto / ?: Consultar|
|S: AT+ PIO[P1][P2]| OK+ Set:[P1][P2]|P1: 2~B (HM-12) / P2: 2~3 (HM-13) / 0: Saída em nível baixo / 1: Saída em nível alto / ?: Consultar|

**22. Consultar/Definir código PIN EDR**

|Enviar| Receber |Parâmetro|
|---|---|---|
|Q: AT+PINE? |OK+ Get:[P1]| P1: código EDR do módulo / Comprimento máximo: 6 / Padrão: 1234|
|S: AT+PINE[P1] |OK+ Set:[P1]|P1: código EDR do módulo / Comprimento máximo: 6 / Padrão: 1234|

**23. Consultar/Definir código PIN BLE**

|Enviar| Receber |Parâmetro|
|---|---|---|
|Q: AT+PINB? |OK+ Get:[P1]| P1: código BLE do módulo / 000000~999999 / Padrão: 000000|
|S: AT+PINB[P1] |OK+ Set:[P1]|P1: código BLE do módulo / 000000~999999 / Padrão: 000000|

**24. Consultar/Definir bit de paridade UART**

|Enviar| Receber |Parâmetro|
|---|---|---|
|Q: AT+PARI? |OK+ Get:[P1]| P1: 0, 1, 2, (Padrão: 0) / 0: Sem paridade / 1: Paridade par / 2: Paridade ímpar|
|S: AT+PARI[P1] |OK+ Set:[P1]|P1: 0, 1, 2, (Padrão: 0) / 0: Sem paridade / 1: Paridade par / 2: Paridade ímpar|

**25. Restaurar todos os valores de configuração para as configurações de fábrica**

|Enviar| Receber |Parâmetro|
|---|---|---|
|AT+RENEW |OK+RENEW| Nenhum|

**26. Reiniciar módulo**

|Enviar| Receber |Parâmetro|
|---|---|---|
|AT+RESET| OK+RESET| Nenhum|

**27. Consultar valor de RSSI BLE**

|Enviar| Receber |Parâmetro|
|---|---|---|
|AT+RSSB?| OK+RSSB: [P1]| P1: valor de RSSI / 9999: Sem conexão / 9998: Tente mais tarde / 9997: Erro de leitura / Xxxx: valor de RSSI|

Este comando deve ser usado depois que “AT+MODE1” estiver configurado. Este comando é usado somente pelo dispositivo Bluetooth remoto.

**28. Consultar valor de RSSI EDR**

|Enviar| Receber |Parâmetro|
|---|---|---|
|AT+RSSE? |OK+RSSE: |[P1] P1: valor de RSSI / 9999: Sem conexão / 9998: Tente mais tarde / 9997: Erro de leitura / Xxxx: valor de RSSI|

**29. Consultar endereço do último dispositivo EDR conectado**

|Enviar| Receber |Parâmetro|
|---|---|---|
|AT+RADE? |OK+Get:MAC Address |Nenhum|

**30. Consultar endereço do último dispositivo BLE conectado**

|Enviar| Receber |Parâmetro|
|---|---|---|
|AT+RADB? |OK+Get:MAC Address |Nenhum|

**31. Consultar/Definir função Master e Slave**

|Enviar| Receber |Parâmetro|
|---|---|---|
|AT+ROLB?| OK+ Get:[P1] |P1: 0, 1 (padrão: 0) /0: Peripheral / 1: Central|
|AT+ROLB[P1] |OK+ Set:[P1]|P1: 0, 1 (padrão: 0) / 0: Peripheral /1: Central|

Este comando terá efeito após o próximo acionamento de energia do módulo ou reset.

**32. Consultar/Definir modo de trabalho EDR**

|Enviar| Receber |Parâmetro|
|---|---|---|
|Q: AT+SCAN? |OK+ Get:[P1] |P1: 0, 1, (Padrão: 0) / 0: Descoberta e conectável / 1: Somente conectável|
|S: AT+SCAN[P1] |OK+ Set:[P1]|1: 0, 1, (Padrão: 0) / 0: Descoberta e conectável / 1: Somente conectável|

**33. Consultar/Definir bit de parada UART**

|Enviar| Receber |Parâmetro|
|---|---|---|
|Q: AT+STOP? |OK+ Get:[P1] |P1: 0, 1, (Padrão: 0) / 0: 1 bit de parada / 1: 2 bits de parada|
|S: AT+STOP[P1] |OK+ Set:[P1]|P1: 0, 1, (Padrão: 0) / 0: 1 bit de parada / 1: 2 bits de parada|

**34. Consultar versão do software**

|Enviar| Receber |Parâmetro|
|---|---|---|
|AT+VERR? |Informações da versão |Nenhum|
|AT+VERS?|Informações da versão |Nenhum|

## Programação

---
Configurar o módulo Bluetooth com Serial no Windows

Esta seção mostra como configurar o Bluetooth com PC, alguns métodos básicos de configuração podem ser aprendidos. Configure a conexão de hardware consultando a seção “Instalação de Hardware”. Você verá o LED azul no módulo piscar, indicando que nenhuma conexão está configurada.

Abra um terminal serial e configure Baud Rate:115200, Databits: 8, Stopbits: 1 e No Flow Control. Envie “AT” para o Bluetooth com o terminal serial e “OK” será retornado se tudo correr bem. O
Bluetooth só responde a comandos AT quando nenhuma conexão foi configurada, caso contrário todos os comandos serão vistos como string e enviados. Você pode distinguir o status pelos LEDs indicadores.
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-AT.png)

Então algumas configurações úteis podem ser enviadas. Aqui estão alguns exemplos de comandos e respostas.

1. Testar conexão serial, enviar “AT”, retornará “OK”.
2. Restaurar configurações de fábrica, enviar “AT+RENEW”, retornar “OK+RENEW”.
3. Redefinir baud rate da porta serial, enviar “AT+BAUD2”, retornar “OK+Set:2”.
4. Habilitar autenticação, enviar “AT+AUTH1”, retornar “OK+Set:1”.
5. Reiniciar o Bluetooth, enviar “AT+RESET”, retornar ”OK+RESET”.
6. Consultar versão do firmware, enviar “AT+VERS?”, retornar “OK+Get:HMSoftV217”.
7. Consultar MAC do EDR, enviar “AT+ADDE?”, retornar “OK+Get:000E0E002074”.
8. Consultar MAC do BLE, enviar “AT+ADDB?”, retornar “OK+Get:000E0B002074”.
9. Definir o nome do EDR, enviar “AT+NAMEHM-13-EDR”, retornar “OK+Set:HM-13-EDR”.
10. Definir o nome do BLE, enviar “AT+NAMEHM-13-BLE”, retornar “OK+Set:HM-13-BLE”.
11. Definir a senha do EDR, enviar “AT+PINE123451”, retornar “OK+Set:123451”.
12. Definir a senha do BLE, enviar “AT+PINB123451”, retornar “OK+Set:123451”.
13. Habilitar descoberta e conectável, enviar “AT+SCAN0”, retornar “OK+Set:0”.
14. Habilitar informação de notificação de conexão, enviar “AT+NOTI1”, retornar “OK+Set:1”.
15. Informação de notificação inclui endereço, enviar “AT+NOTP1”, retornar “OK+Set:1”.
16. Habilitar chave de usuário, enviar “AT+PIO01”, retornar “OK+Set:1”.
17. Definir para modo Central, enviar “AT+ROLB1”, retornar “AT+ROLB1”.
Ou definir para modo Peripheral, enviar “AT+ROLB0”, retornar “AT+ROLB0”.

Usamos dois módulos Bluetooth conectados ao PC, um foi configurado como Central enquanto o outro como Peripheral. Alguns segundos depois eles se encontram e o LED para de piscar, conectados!

**Comunicar com iPhone**

Este tipo de módulo Bluetooth possui dois protocolos: Bluetooth EDR (Enhanced Data Rate) e Bluetooth Low Energy. Ele pode se comunicar com qualquer dispositivo que tenha um desses protocolos. Alguns celulares Android com SO superior a 4.3 e iPhone4 ou posterior têm capacidade BLE. Usamos um iPhone para demonstrar como usar um celular para interagir com o Bluetooth.

Alimente o Bluetooth e configure-o como função Peripheral. Procure LightBlue na Apple Store e instale-o. Abra o app, você poderá encontrar “HM-13-BLE”, que acabamos de renomear. Toque nele para conectar e depois toque em “Properties” para controlá-lo. A tecla “Hex” no canto superior direito serve para alterar o formato dos dados, talvez String seja mais fácil de visualizar. Toque em “Listen for notifications” para habilitar o recebimento de dados. Então podemos enviar dados ao PC através de BLE, tocando em “Write new value” e escrevendo algumas palavras. Também o PC pode transferir dados para o iPhone com o terminal serial.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-080911.png)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-14AT.png)

**Transmissão de dados entre dois Arduinos**

Pronto para programar? É hora de fazer algo após a prática. Prepare um par de módulos Bluetooth e Arduino ou outra plataforma para controlá-los. Aqui usamos dois Arduino Uno. Configure a conexão como mencionado na seção “Instalação de Hardware”.

O programa de Central e Peripheral usa o mesmo código, a única diferença é o macro definido no início do programa. Para atribuir o Bluetooth à função Central, basta modificar o texto para “#define MASTER 1”, ou “#define MASTER 1” se a função Peripheral for atribuída.

O fluxo do programa de inicialização, consulte o fluxograma a seguir. Antes de tudo precisamos distinguir o baud rate predefinido do Bluetooth. Depois disso, envie comandos para restaurar as configurações de fábrica e altere o baud rate de 115200 para 9600, já que a serial por software não funcionará bem em baud rate alto. Em seguida, outros parâmetros são configurados no Bluetooth com o comando Reset ao final.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Init-flowchat.png)

Após a inicialização, o Central e o Peripheral farão coisas diferentes, o Central enviará mensagens para o Peripheral em intervalos e imprimirá o que receber do Peripheral, enquanto o Peripheral apenas responderá ao Central.

Clique [aqui](https://github.com/Seeed-Studio/HM-13_SW) para baixar o código de teste e abra HM-13_SW.ino com a IDE do Arduino, compile e faça o download para o Arduino Uno. Lembre-se de configurar o Bluetooth para funções diferentes modificando o macro no início. Se você tiver qualquer problema sobre como começar com Arduino, clique [aqui](https://www.seeedstudio.com/wiki/Getting_Started_with_Seeeduino) para obter ajuda.

Depois de baixar o programa, abra duas janelas de terminal serial, os LEDs nos módulos Bluetooth piscarão, alguns segundos depois, eles param de piscar e ficam acesos, o que indica que estão conectados um ao outro. De acordo com o programa escrito, o Central envia mensagens continuamente para o Peripheral e obtém resposta toda vez.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Debug_Output_Slave.png)

## Recursos

---

- [HM-13 Bluetooth Datasheet](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Bluetooth_HM-13_en.pdf)
- [Código Arduino](https://github.com/Seeed-Studio/HM-13_SW)
- <a href="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Xadow-BLE_(dual_model)_v1.0_sch_pcb.zip">Eagle_Xadow-BLE_(dual_model)_v1.0_sch_pcb]</a>
- <a href="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Xadow-BLE_(dual_model)_v1.0.pdf"> PDF_Xadow-BLE_(dual_model)_v1.0</a>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
