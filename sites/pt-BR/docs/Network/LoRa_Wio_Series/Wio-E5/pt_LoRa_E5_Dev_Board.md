---
description: Primeiros passos com a Wio-E5 Dev Board.
title: Kit de Desenvolvimento Wio-E5
keywords:
  - wio
image: https://wiki.seeedstudio.com/pt-br/wio_gps_board/
slug: /LoRa_E5_Dev_Board
sku: 113990934, 113991157
last_update:
  date: 01/30/2023
  author: hushuxu
createdAt: '2023-01-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LoRa_E5_Dev_Board/
---

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

> LoRaWAN® é uma marca utilizada sob licença da LoRa Alliance®.
A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.

O Kit de Desenvolvimento Wio-E5 é um conjunto de ferramentas de desenvolvimento compacto para você liberar o poderoso desempenho do [Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html). Ele consiste em uma Wio-E5 Dev Board, uma antena (EU868/US915), um cabo USB tipo C e um suporte para bateria 2*AA 3V.

A Wio-E5 Dev Board incorpora o módulo Wio-E5 STM32WLE5JC que suporta o protocolo LoRaWAN® na banda de frequência global. Ela expõe todos os GPIOs da Wio-E5, suportando vários protocolos e interfaces de dados, incluindo RS-485, Grove, conectores macho/fêmea, etc. Será uma escolha perfeita para testes rápidos e prototipagem rápida dos seus projetos IoT com LoRa®.

A Wio-E5 Dev Board incorpora o [Módulo Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), que é a primeira combinação mundial de RF LoRa e chip MCU em um único chip minúsculo e possui certificações FCC e CE. É alimentada por um núcleo ARM Cortex-M4 e pelo chip Semtech SX126X LoRa®, suporta tanto os protocolos LoRaWAN® e LoRa® na frequência mundial quanto as modulações (G)FSK, BPSK, (G)MSK e LoRa®.

Saiba mais sobre a [Wio-E5](https://wiki.seeedstudio.com/pt-br/LoRa-E5_STM32WLE5JC_Module/) aqui.

A Wio-E5 Dev Board possui um alcance de transmissão de longa distância da Wio-E5 de até 10 km em área aberta. A corrente em modo de sono dos módulos Wio-E5 na placa é tão baixa quanto 2,1 uA (modo WOR). Ela é projetada com padrões industriais, com ampla faixa de temperatura de trabalho em -40 ℃ ~ 85 ℃, alta sensibilidade entre -116,5 dBm ~ -136 dBm e potência de saída de até +20,8 dBm a 3,3 V.

A Wio-E5 Dev Board também possui interfaces ricas. Desenvolvida para liberar toda a funcionalidade do módulo Wio-E5, a Wio-E5 Dev Board expõe todos os 28 pinos da Wio-E5 e fornece interfaces ricas, incluindo conectores Grove, terminal RS-485, pinos macho/fêmea para você conectar sensores e módulos com diferentes conectores e protocolos de dados, economizando seu tempo em soldagem de fios. Você também pode alimentar facilmente a placa conectando o suporte de bateria com 2 pilhas AA, permitindo o uso temporário quando faltar uma fonte de alimentação externa. É uma placa amigável ao usuário para testes fáceis e prototipagem rápida.

Como a Wio-E5 é um chip LoRaWAN® com um MCU, existem três maneiras principais de utilizar a Wio-E5 Dev Board:

**1: Conectar a Wio-E5 Dev Board ao PC via USB e controlar por comandos AT**

Há uma função USB para UART integrada na placa, você pode simplesmente conectar a Wio-E5 Dev Board ao seu PC com um cabo USB tipo C e usar um software de comunicação serial para enviar comandos AT e ler dados da placa

**2: Conectar a Wio-E5 Dev Board a outra placa principal via UART e controlar por comandos AT**

Por exemplo, conecte a Wio-E5 Dev Board à Seeeduino XIAO e à Placa de Expansão via UART, e envie comandos AT e leia dados da Seeeduino XIAO por meio do monitor serial da Arduino IDE.

**3: Desenvolver aplicações de usuário utilizando o SDK**

Desenvolva sua própria placa de desenvolvimento LoRa® com função de MCU usando o STM32Cube Programmer, que é o SDK fornecido oficialmente pela STMicroelectronics. Para baixar este recurso de SDK, consulte os recursos na seção de aprendizagem e documentação abaixo.

Com todos os recursos excepcionais listados acima, a Wio-E5 Dev Board será uma escolha superior para desenvolvimento, testes, prototipagem e aplicações de dispositivos IoT em cenários IoT de longa distância e consumo ultrabaixo de energia, como agricultura inteligente, escritório inteligente e indústria inteligente.

Se você não estiver familiarizado com a tecnologia LoRa® e LoRaWAN®, confira este blog [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) em detalhes.

## Recursos

- Consumo de energia ultrabaixo e alto desempenho

- Testes fáceis e prototipagem rápida

- Todos os GPIOs expostos para interfaces ricas, incluindo RS-485, Grove, etc.

- Plano de frequência global LoRaWAN® e LoRa® suportado

- Alcance de transmissão de longa distância de até 10 km (valor ideal em área aberta)

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4071615359366_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/3011615286741_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## Especificações

<table class="tg">
<thead>
<tr><th class="tg-6cwf">Parâmetros</th><th class="tg-6cwf">Especificações</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">Tamanho</td>
<td class="tg-g9rn">Wio-E5 Dev Board: 85.6*54mm  Pacote: 200*130*50mm</td>
</tr>
<tr>
<td class="tg-g9rn">Tensão - alimentação</td>
<td class="tg-g9rn">3-5V (Bateria) / 5V (USB Type C)</td>
</tr>
<tr>
<td class="tg-g9rn">Tensão - saída</td>
<td class="tg-g9rn">EN 3V3 / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">Potência - saída</td>
<td class="tg-g9rn">Até +20.8dBm a 3.3V</td>
</tr>
<tr>
<td class="tg-g9rn">Frequência</td>
<td class="tg-g9rn">EU868 / US915 / AU915 / AS923 / KR920 / IN865</td>
</tr>
<tr>
<td class="tg-g9rn">Protocolo</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">Sensibilidade</td>
<td class="tg-g9rn">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Interfaces</td>
<td class="tg-g9rn">USB Type C / JST2.0 / Grove*3(IIC*2/UART*1) / RS485 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">Modulação</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">Temperatura de trabalho</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">Corrente</td>
<td class="tg-g9rn">Corrente em modo de sono do módulo LoRa-E5 tão baixa quanto 2.1uA (modo WOR)</td>
</tr>
</tbody>
</table>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">Lista de Peças:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 Dev Board *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Antena (EU868/US915)*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Suporte para bateria 2*AA 3V *1</td>
</tr>
</tbody>
</table>

## Aplicações

- Testes fáceis do módulo Wio-E5
- Prototipagem rápida de dispositivos LoRa® com Wio-E5
- Qualquer desenvolvimento de aplicação de comunicação sem fio de longa distância
- Aprendizado e pesquisa de aplicações LoRa® e LoRaWAN®

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## Notas de Aplicação

**1. Firmware AT de Fábrica**

A série Wio-E5 possui um firmware de comando AT embutido, que suporta o protocolo LoRaWAN® Classe A/B/C e um amplo plano de frequência: EU868/US915/AU915/AS923/KR920/IN865. Com esse firmware de comandos AT, os desenvolvedores podem construir facilmente e rapidamente seu protótipo ou aplicação.

O firmware de comando AT contém um bootloader para DFU e a aplicação AT. O pino "PB13/SPI_SCK/BOOT" é usado para controlar se a Wio-E5 permanece no bootloader ou salta para a aplicação AT. Quando PB13 está em HIGH, o módulo saltará para a aplicação AT após o reset, com taxa de baud padrão de 9600. Quando PB13 está em LOW (pressione o botão "Boot" no Wio-E5 Development Kit), o módulo permanecerá no bootloader e continuará transmitindo o caractere "C" a cada 1 s na taxa de baud 115200.

:::note

- O Firmware AT de Fábrica é programado com RDP (Read Protection) Nível 1, desenvolvedores precisam remover o RDP primeiro com o STM32Cube Programmer. Observe que reverter o RDP para o nível 0 causará um apagamento em massa da memória flash e o Firmware AT de Fábrica não poderá ser restaurado novamente.
- O pino "PB13/SPI_SCK/BOOT" no módulo Wio-E5 é apenas um GPIO normal, não o pino "BOOT0" do MCU. Este pino "PB13/SPI_SCK/BOOT" é usado no bootloader do firmware AT de Fábrica para decidir se deve saltar para a APP ou permanecer no bootloader (para DFU). O verdadeiro pino "BOOT0" não é exposto no módulo, portanto os usuários precisam ter cuidado ao desenvolver aplicações de baixo consumo de energia.

:::

**2. Configuração do Clock**

2.1 HSE

- TCXO de 32MHz

- Fonte de alimentação do TCXO: PB0-VDD_TCXO

2.2 LSE

- Oscilador de cristal de 32.768KHz

**3. Chave RF**

**O módulo Wio-E5 SOMENTE transmite através de RFO_HP:**

- Recepção: PA4=1, PA5=0

- Transmissão (alta potência de saída, modo SMPS): PA4=0, PA5=1

## Primeiros Passos

### Início rápido com comandos AT

#### Preparação

- **Passo 1.** Conecte o Wio-E5 Development Kit ao PC através de um cabo Type-C

- **Passo 2.** Abra uma ferramenta serial (por exemplo, Arudino Serial Monitor), selecione a porta COM correta, defina a taxa de baud para 9600 e selecione Both NL & CR

- **Passo 3.** Tente enviar "AT" e você verá a resposta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### Comandos AT básicos

- AT+ID // Ler todos, DevAddr(ABP), DevEui(OTAA), AppEui(OTAA)

- AT+ID=DevAddr // Ler DevAddr

- AT+ID=DevEui // Ler DevEui

- AT+ID=AppEui // Ler AppEui

- AT+ID=DevAddr,"devaddr" // Definir novo DevAddr

- AT+ID=DevEui,"deveui" // Definir novo DevEui

- AT+ID=AppEui,"appeui" // Definir novo AppEui

- AT+KEY=APPKEY,"16 bytes length key" // Alterar chave de sessão da aplicação

- AT+DR=band // Alterar os Planos de Banda

- AT+DR=SCHEME // Verificar banda atual

- AT+CH=NUM, 0-7 // Habilitar canal 0~7

- AT+MODE="mode" // Selecionar modo de trabalho: LWOTAA, LWABP ou TEST

- AT+JOIN // Enviar requisição JOIN

- AT+MSG="Data to send" // Usado para enviar quadro em formato string que não precisa ser confirmado pelo servidor

- AT+CMSG="Data to send" // Usado para enviar quadro em formato string que deve ser confirmado pelo servidor

- AT+MSGHEX="xx xx xx xx" // Usado para enviar quadro em formato hex que não precisa ser confirmado pelo servidor

- AT+CMSGHEX="xx xx xx xx" // Usado para enviar quadro em formato hex que deve ser confirmado pelo servidor

#### Conectar e enviar dados para The Things Network

- **Passo 1.** Visite o site [The Things Network](https://www.thethingsnetwork.org) e cadastre-se para uma nova conta

- **Passo 2.** Depois de fazer login, clique no seu perfil e selecione **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Selecione um cluster para começar a adicionar dispositivos e gateways

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Clique em **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Clique em **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Preencha o **Application ID** e clique em **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aqui **Application name** e **Description** não são campos obrigatórios. Se **Application name** for deixado em branco, ele usará o mesmo nome de **Application ID** por padrão

A seguir está o aplicativo recém-criado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Clique em **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **Passo 8.** Clique em **Manually** para inserir manualmente as credenciais de registro

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** Selecione o **Frequency plan** de acordo com a sua região. Também certifique-se de usar a mesma frequência do gateway ao qual você irá conectar este dispositivo. Selecione **MAC V1.0.2** como **LoRaWAN® version** e **PHY V1.0.2 REV B** como **Regional Parameters version**. Essas configurações estão de acordo com a pilha LoraWAN® do Wio-E5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **Passo 10.** Enquanto o módulo Wio-E5 ainda estiver acessível pelo console serial, envie os seguintes comandos AT no monitor serial:

  - `AT+ID=DevEui` para obter seu Device EUI
  - `AT+ID=AppEui`, para obter seu App EUI
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` para definir a App Key

A saída será a seguinte:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **Passo 11.** Copie e cole as informações acima nos campos **DevEUI**, **AppEUI** e **AppKey**. O campo **End device ID** será preenchido automaticamente quando preenchermos **DevEUI**. Por fim, clique em **Register end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **Passo 12.** Registre seu Gateway LoRaWAN® no TTN Console. Por favor, consulte as instruções mostradas [aqui](https://wiki.seeedstudio.com/pt-br/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

- **Passo 13.** Digite os seguintes comandos AT para conectar ao TTN

```
// If you are using US915
AT+DR=US915
AT+CH=NUM,8-15

// If you are using EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

A saída no monitor serial será a seguinte:

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

Se você vir **+JOIN: Network joined** no seu console serial, isso significa que seu dispositivo se conectou com sucesso ao TTN!

Você também pode verificar o status do seu dispositivo na página **End devices**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **Passo 14.** Digite os seguintes comandos AT para enviar dados ao TTN

```
// send string "HELLO" to TTN 
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// send hex "00 11 22 33 44" 
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

Para mais informações sobre comandos AT, consulte [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### Desenvolver com STM32Cube MCU Package

Esta seção é para o Wio-E5 Development Kit, com o objetivo de construir várias aplicações com o STM32Cube MCU Package para a série STM32WL (SDK).

**Nota:** Agora atualizamos a biblioteca para suportar a v1.1.0, que é a versão mais recente do STM32Cube MCU Package para a série STM32WL.

:::note
Por favor, leia primeiro a seção [Erase Factory AT Firmware](https://wiki.seeedstudio.com/pt-br/LoRa_E5_Dev_Board/#application-notes), pois precisamos apagar o Factory AT Firmware antes de programar com o SDK. Depois de apagar o Factory AT Firmware ele NÃO PODE ser recuperado.
:::

#### Preparativos

Software:

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): para compilação e depuração

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): para programar dispositivos STM32

Hardware:

- Gateway LoRaWAN® conectado a um LoRaWAN® Network Server (por exemplo, TTN)

- Um cabo USB Tipo-C e um ST-LINK. Conecte o cabo Tipo-C à porta Tipo-C da placa para alimentação e comunicação serial. Conecte o ST-LINK aos pinos SWD da seguinte forma

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### Visão geral da configuração de GPIO

- Como o projeto de hardware da série Wio-E5 é um pouco diferente do NUCLEO-WL55JC, a placa de desenvolvimento oficial STM32WL55JC da ST, os desenvolvedores precisam reconfigurar alguns GPIOs para adaptar o exemplo do SDK à série Wio-E5. Nós já reconfiguramos os GPIOs, mas achamos necessário apontar a diferença.

|Rótulo do Exemplo SDK|GPIO do NUCLEO-WL55JC|GPIO do Wio-E5 Development Kit|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|None|
|BUT1|PA0|PB13 (Botão de Boot)|
|BUT2|PA1|None|
|BUT3|PC6|None|
|LED1|PB15|None|
|LED2|PB9|PB5|
|LED3|PB11|None|
|DBG1|PB12|PA0 (Botão D0)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### Aplicações

Agora exploraremos várias aplicações para o Wio-E5 Development Kit com o STM32Cube MCU Package para a série STM32WL (SDK).

#### Nó Final LoRaWAN®

Esta aplicação conectará o Wio-E5 Development Kit ao TTN (The Things Network) e enviará dados após conectar-se a um gateway LoRaWAN®.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **Passo 3.** Clique duas vezes no arquivo **.project**

  **Nota:** Para MAC, deve-se utilizar uma das opções abaixo para abrir o projeto:

  - **1.** Navegue até `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`. Clique duas vezes no arquivo "LoRaWAN_End_Node.ioc".

  - **2.** Use "Import Projects from File System or Archieve" como nas imagens abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Clique com o botão direito no projeto e clique em **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Navegue até `C/C++ Build > Settings > MCU Post build outputs`, marque **Convert to Intel Hex file (-O ihex)** e clique em **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Clique em **Build 'Debug'**, e a compilação deve terminar sem erros

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

Agora vamos modificar nosso **Device EUI**, **Application EUI**, **Application KEY** e **LoRawan Region**

- **Passo 7.** Siga o [guia](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network) aqui para configurar sua aplicação TTN, obtenha seu **Application EUI** e copie-o para a definição de macro `LORAWAN_JOIN_EUI` em `LoRaWAN/App/se-identity.h`. Por exemplo, o Application EUI aqui é `80 00 00 00 00 00 00 0x07` :

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **Passo 8.** Além disso, você pode modificar seu **Device EUI** e **Application Key**, definindo as macros `LORAWAN_DEVICE_EUI` e `LORAWAN_NWK_KEY` em `LoRaWAN/App/se-identity.h`. Certifique-se de que `LORAWAN_DEVICE_EUI` e `LORAWAN_NWK_KEY` sejam os mesmos que o `Device EUI` e `App Key` no console do TTN.

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x2C, 0xF7, 0xF1, 0x20, 0x24, 0x90, 0x03, 0x63 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** A região LoRaWAN® padrão é `EU868`, você pode modificá-la definindo a macro `ACTIVE_REGION` em `LoRaWAN/App/lora_app.h`

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **Passo 10.** Depois das modificações acima, **recompile** o exemplo e programe-o no seu Wio-E5. Abra `STM32CubeProgrammer`, conecte o ST-LINK ao seu PC, segure o `RESET Button` do seu dispositivo, depois clique em `Connect` e solte o `RESET Button`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 11.** Certifique-se de que o Read Out Protection esteja em `AA`; se aparecer como `BB`, selecione `AA` e clique em `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 12.** Agora, vá para a página `Erasing & Programming`, selecione o caminho do seu arquivo hex (por exemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex` ), selecione as opções de programação como na figura a seguir e clique em `Start Programming`!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
Você verá a mensagem **Download verified successfully** assim que a programação for concluída.

- **Passo 13.** Se o seu gateway LoRaWAN® e o TTN estiverem configurados, o Wio-E5 irá se juntar com sucesso após o reset! Um pacote de confirmação LoRaWAN® será enviado ao TTN a cada 30 segundos. O seguinte log será impresso no monitor serial (o Arduino Serial Monitor é usado aqui) se o join for bem-sucedido:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>
- Saúde! Agora você conectou o Wio-E5 à rede LoRaWAN®! Você já pode começar a desenvolver aplicações de nó final LoRaWAN® ainda mais empolgantes!

**Nota:** O Wio-E5 só suporta modo de saída de alta potência, portanto você não pode usar estas definições de macro em `radio_board_if.h` :

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

Embora **RBI_CONF_RFO** esteja definido como **RBI_CONF_RFO_LP_HP** em `radio_board_if.h`, ele não será usado porque **USE_BSP_DRIVER** está definido e a função **BSP_RADIO_GetTxConfig()** retorna **RADIO_CONF_RFO_HP**

#### FreeRTOS LoRaWAN®

Esta aplicação também conectará o Wio-E5 Development Kit ao TTN (The Things Network) e enviará dados após a conexão com um gateway LoRaWAN®. A diferença entre a aplicação LoRaWAN® End Node anterior e esta aplicação FreeRTOS LoRaWAN® é que a anterior roda em bare metal enquanto esta roda sob FreeRTOS.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **Passo 3.** Dê um clique duplo no arquivo **.project**

- **Passo 4.** Consulte do **passo 4 ao passo 13** da aplicação **LoRaWAN® End Node** anterior para conectar o Wio-E5 Development Kit ao TTN!  

#### FreeRTOS LoRaWAN® AT

Esta aplicação também conectará o Wio-E5 Development Kit ao TTN (The Things Network) e enviará dados após a conexão com um gateway LoRaWAN®. A diferença entre a aplicação FreeRTOS LoRaWAN® anterior e esta aplicação é que você pode usar comandos AT.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **Passo 3.** Dê um clique duplo no arquivo **.project**

- **Passo 4.** Consulte do **passo 4 ao passo 12** da aplicação **LoRaWAN® End Node** anterior

- **Passo 5.** Abra um monitor serial como o **Arduino Serial Monitor** e você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Digite **AT?** e pressione **ENTER** para visualizar todos os comandos AT disponíveis

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Se você ainda quiser alterar **Device EUI**, **Application EUI**, **Application KEY** e **LoRawan Region**, pode alterá-los usando comandos AT. No entanto, estes parâmetros já estão definidos em **se-identity.h** e **lora_app.h** neste exemplo

- **Passo 8.** Digite **AT+JOIN=1** e você verá a seguinte saída assim que o join for bem-sucedido!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aqui o formato **AT+JOIN=(Mode)** deve ser usado. **Mode** corresponde a **0 para ABP** ou **1 para OTAA**

#### FreeRTOS LowPower

Esta aplicação ativará o modo de baixo consumo no Wio-E5 Development Kit. Assim que a aplicação for gravada, a placa consumirá energia normalmente por 2 segundos e entrará em modo de baixo consumo por 2 segundos, e assim sucessivamente.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **Passo 3.** Dê um clique duplo no arquivo **.project**

- **Passo 4.** Clique com o botão direito no projeto e clique em **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Navegue até `C/C++ Build > Settings > MCU Post build outputs`, marque **Convert to Intel Hex file (-O ihex)** e clique em **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Clique em **Build 'Debug'** e ele deverá compilar sem erros

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Abra o `STM32CubeProgrammer`, conecte o ST-LINK ao seu PC, segure o `RESET Button` do seu dispositivo, depois clique em `Connect` e solte o `RESET Button`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 8.** Certifique-se de que o Read Out Protection esteja em `AA`; se aparecer como `BB`, selecione `AA` e clique em `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** Agora, vá para a página `Erasing & Programming`, selecione o caminho do seu arquivo hex (por exemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex` ), selecione as opções de programação como na figura a seguir e clique em `Start Programming`!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Você verá a mensagem **Download verified successfully**, quando a programação for concluída.

- **Passo 10.** Conecte o Wio-E5 Development Kit a um PC conectando um medidor de energia. Você notará que o LED vermelho na placa pisca a cada segundo e a placa alterna entre estados de energia normal e baixa (a corrente no medidor de energia diminui por 1 segundo para o estado de baixa energia e volta a subir por 1 segundo para o estado de funcionamento normal)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Baixo Consumo

Este aplicativo também ativará o modo de baixo consumo no Wio-E5 Development Kit. A diferença entre o aplicativo anterior FreeRTOS LowPower e este aplicativo Low Power é que o anterior é executado sob FreeRTOS enquanto este roda em bare metal.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o branch **qian** do repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/lora-e5-qian-github.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **Passo 3.** Clique duas vezes no arquivo **.project**

- **Passo 4.** Consulte o **passo 4 - passo 10** do aplicativo anterior **FreeRTOS LowPower** e você verá a mesma saída no final no medidor de energia!

## Recursos

Datasheet da Wio-E5 Development Board:

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.brd">Wio-E5 Development Board v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.pdf">Wio-E5 Development Board v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.sch">Wio-E5 Development Board v1.0.sch</a></p>

Datasheet da Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Datasheet e especificações da Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Especificação de Comandos AT da Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">Datasheet do STM32WLE5JC</a></p>

Certificações da Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Certificação Wio-E5-HF CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Certificação Wio-E5-HF FCC -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Certificação Wio-E5-HF FCC -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Certificação Wio-E5-HF TELEC</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Certificação Wio-E5-HF IC</a></p>

SDK relevante:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">Pacote STM32Cube MCU para a série STM32WL</a></p>

## Suporte Técnico & Discussão de Produto

Envie qualquer problema técnico para o nosso [fórum](http://forum.seeedstudio.com/).

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
