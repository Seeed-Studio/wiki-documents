---
description: Primeiros passos com o módulo Wio-E5 STM32WLE5JC.
title: Módulo Wio-E5 STM32WLE5JC
keywords:
  - wio
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/wio_gps_board/
slug: /LoRa-E5_STM32WLE5JC_Module
sku: 317990687,317990829
last_update:
  date: 01/30/2023
  author: hushuxu
createdAt: '2023-01-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LoRa-E5_STM32WLE5JC_Module/
---

<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

> LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.

## Introdução ao Produto

<iframe width={560} height={315} src="https://www.youtube.com/embed/XIksiHEXT3A?si=UNm6zmbeUVhgfWh4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

:::note
Lançamos recentemente a Série Wio-E5 baseada no módulo Wio-E5. Clique [aqui](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conhecer novos membros da família Wio-E5, desde o [módulo Grove](https://wiki.seeedstudio.com/pt-br/Grove_LoRa_E5_New_Version/), [placas mini Dev](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/) até o [Kit de Desenvolvimento](https://wiki.seeedstudio.com/pt-br/LoRa_E5_Dev_Board/). Para saber mais sobre como criar um nó final LoRaWAN com o pacote STM32Cube MCU para a série STM32WL (SDK), para ingressar e enviar dados para a rede LoRaWAN, leia mais nas páginas wiki das [placas mini Dev](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/) e do [Kit de Desenvolvimento](https://wiki.seeedstudio.com/pt-br/LoRa_E5_Dev_Board/).
:::

Wio-E5 é um módulo LoRaWAN® de baixo custo, consumo ultrabaixo de energia, extremamente compacto e de alto desempenho, projetado pela Seeed Technology Co., Ltd. **Ele contém o chip em nível de sistema ST STM32WLE5JC, que é o primeiro SoC do mundo integrado com a combinação de RF LoRa® e chip MCU.** Este módulo também incorpora o MCU ARM Cortex M4 de ultrabaixo consumo e LoRa® SX126X e, portanto, suporta modo (G)FSK e LoRa®. Larguras de banda de 62.5kHz, 125kHz, 250kHz e 500kHz podem ser usadas no modo LoRa®, tornando-o adequado para o projeto de vários nós de IoT, suportando EU868 e US915.

Este módulo Wio E5 é projetado com padrões industriais, portanto é altamente adequado para ser usado no projeto de produtos de IoT industrial, com ampla faixa de temperatura de operação de -40℃ ~ 85℃.

Se você não está muito familiarizado com LoRa® e LoRaWAN®, consulte este artigo [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) para mais detalhes.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![SIZE COMPARE](https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg" alt="pir" width={600} height="auto" /></p>

*(tamanho extremamente compacto, menor que uma moeda de 1 euro)*

## Recursos

- **Consumo ultrabaixo de energia**: corrente de sono tão baixa quanto 2.1uA (modo WOR)

- **Tamanho extremamente compacto**: 12mm *12mm* 2.5mm 28 pinos SMT

- **Alto desempenho**: TXOP=22dBm@868/915MHz; sensibilidade de -136.5dBm para SF12 com 125KHz BW

- **Uso em longa distância**: orçamento de enlace de 158dB

- **Conectividade sem fio**: protocolo LoRaWAN® incorporado, comando AT, suporta plano de frequência global LoRaWAN®

- **Compatibilidade mundial**: ampla faixa de frequência; EU868 / US915 / AU915 / AS923 / KR920 / IN865

- **Grande flexibilidade**: Para usuários que desejam desenvolver software no MCU do módulo, outros GPIOs do MCU podem ser facilmente manipulados, incluindo UART, I2C, ADC, etc. Essas ricas interfaces GPIO são úteis para usuários que precisam expandir periféricos.

- **Certificações FCC, CE, IC e Telec**

## Aplicações

- Funciona para nós de sensores LoRaWAN® e qualquer aplicação de comunicação sem fio.

![applications](https://files.seeedstudio.com/products/317990687/image/application.png)

## Notas de Aplicação

**1. Firmware AT de Fábrica**

A série Wio-E5 possui um firmware de comando AT incorporado, que suporta o protocolo LoRaWAN® Classe A/B/C e um amplo plano de frequência: EU868/US915/AU915/AS923/KR920/IN865. Com este firmware de comando AT, os desenvolvedores podem construir seu protótipo ou aplicação de forma fácil e rápida.

O firmware de comando AT contém um bootloader para DFU e a aplicação AT. O pino "PB13/SPI_SCK/BOOT" é usado para controlar o Wio-E5 para permanecer no bootloader ou pular para a aplicação AT. Quando PB13 está em nível ALTO, o módulo irá pular para a aplicação AT após o reset, com taxa de baud padrão de 9600. Quando PB13 está em nível BAIXO (pressione o botão "Boot" no Wio-E5 mini/ Wio-E5 Development Kit), o módulo permanecerá no bootloader e continuará transmitindo o caractere "C" a cada 1S na taxa de baud 115200.

:::note

- O Firmware AT de Fábrica é programado com RDP(Read Protection) Nível 1, os desenvolvedores precisam remover o RDP primeiro com o STM32Cube Programmer. Observe que reverter o RDP para o nível 0 causará um apagamento em massa da memória flash e o Firmware AT de Fábrica não poderá ser restaurado novamente.

- O pino "PB13/SPI_SCK/BOOT" no módulo Wio-E5 é apenas um GPIO normal, não o pino "BOOT0" do MCU. Este pino "PB13/SPI_SCK/BOOT" é usado no bootloader do firmware AT de Fábrica para decidir pular para a APP ou permanecer no bootloader (para DFU). O verdadeiro pino "BOOT0" não está exposto no módulo, portanto os usuários precisam ter cuidado ao desenvolver aplicações de baixo consumo de energia.

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

## Pinagem de Hardware

<!-- ![](https://files.seeedstudio.com/products/317990687/image/pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/pin.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/products/317990687/image/pinout.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/pinout.png" alt="pir" width={600} height="auto" /></p>

## Especificações

<table class="tg">
<thead>
  <tr>
    <th >ITEMs</th>
    <th >Parâmetro</th>
    <th colspan="4">Especificações</th>
    <th >Unidade</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td  rowspan="2">Estrutura</td>
    <td >Tamanho</td>
    <td  colspan="4">12(W)*12(L)*2.5(H)</td>
    <td >mm</td>
  </tr>
  <tr>
    <td >Encapsulamento</td>
    <td  colspan="4">28 pinos, SMT</td>
    <td ></td>
  </tr>
  <tr>
    <td  rowspan="18">Características Elétricas</td>
    <td >fonte de alimentação</td>
    <td  colspan="4">3.3V tipo</td>
    <td >V</td>
  </tr>
  <tr>
    <td >corrente em modo de sono</td>
    <td  colspan="4">2.1uA(WDT ligado)</td>
    <td >uA</td>
  </tr>
  <tr>
    <td rowspan="3">Corrente de operação (Transmissor+MCU)</td>
    <td  colspan="4">50mA @10dBm em 434MHz tipo</td>
    <td  rowspan="3">mA</td>
  </tr>
  <tr>
    <td  colspan="4">111mA @22dBm em 470MHz tipo</td>
  </tr>
  <tr>
    <td  colspan="4">111mA @22dBm em 868MHz tipo</td>
  </tr>
  <tr>
    <td rowspan="3">Corrente de operação (Receptor+MCU)</td>
    <td  colspan="4">6.7mA @BW125kHz, 868MHz tipo</td>
    <td rowspan="3">mA</td>
  </tr>
  <tr>
    <td  colspan="4">6.7mA @BW125kHz, 434MHz tipo</td>
  </tr>
  <tr>
    <td  colspan="4">6.7mA @BW125kHz, 470MHz tipo</td>
  </tr>
  <tr>
    <td  rowspan="3">Potência de saída</td>
    <td  colspan="4">10dBm máx @434MHz</td>
    <td  rowspan="3">dBm</td>
  </tr>
  <tr>
    <td colspan="4">22dBm máx @470MHz</td>
  </tr>
  <tr>
    <td colspan="4">22dBm máx @868MHz</td>
  </tr>
  <tr>
    <td  rowspan="5">Sensibilidade</td>
    <td  colspan="4">@SF12, BW125kHz</td>
    <td  rowspan="5">dBm</td>
  </tr>
  <tr>
    <td >Fr(MHz)</td>
    <td >mín</td>
    <td >tipo</td>
    <td >máx</td>
  </tr>
  <tr>
    <td >434</td>
    <td >-</td>
    <td >-134.5</td>
    <td >-136</td>
  </tr>
  <tr>
    <td >470</td>
    <td >-</td>
    <td >-136.5</td>
    <td >-137.5</td>
  </tr>
  <tr>
    <td >868</td>
    <td >-</td>
    <td >-135</td>
    <td >-137</td>
  </tr>
  <tr>
    <td rowspan="2">Harmônicos</td>
    <td  colspan="4">&lt; -36dBm abaixo de 1GHz</td>
    <td >dBm</td>
  </tr>
  <tr>
    <td  colspan="4">&lt; -40dBm acima de 1GHz</td>
    <td >dBm</td>
  </tr>
  <tr>
    <td rowspan="6">Interface </td>
    <td >RFIO</td>
    <td colspan="4">Porta RF</td>
    <td ></td>
  </tr>
  <tr>
    <td >UART</td>
    <td colspan="4">3 grupos de UART, incluindo 2 pinos</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td >I2C</td>
    <td colspan="4">1 grupo de I2C, incluindo 2 pinos</td>
    <td ></td>
  </tr>
  <tr>
    <td >ADC</td>
    <td colspan="4">1 entrada ADC, incluindo 1 pino, 12-bit 1Msps</td>
    <td ></td>
  </tr>
  <tr>
    <td >NRST</td>
    <td  colspan="4">Pino de entrada de reset manual</td>
    <td ></td>
  </tr>
  <tr>
    <td >SPI</td>
    <td colspan="4">1 grupo de SPI, incluindo 4 pinos</td>
    <td ></td>
  </tr>
</tbody></table>

## Fontes

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Datasheet e especificações do Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Especificação de Comandos AT do Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">Datasheet do STM32WLE5JC</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/RHF0M0E5-HF22-BOM20211111.pdf"> Wio-E5 BOM</a></p>

Certificações:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Certificação Wio-E5-HF CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Certificação Wio-E5-HF FCC -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Certificação Wio-E5-HF FCC -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Certificação Wio-E5-HF TELEC</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Certificação Wio-E5-HF IC</a></p>

Biblioteca:

- [Biblioteca kicad Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5_kicad_Library.zip)

- [Arquivo 3D Wio-E5 HF](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF_3D_File.stp)

- [Biblioteca Eagle Wio-E5](https://files.seeedstudio.com/wiki/Wio-E5/LORA-E5_Eagle_Library.lbr)

SDK relevante:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">Pacote STM32Cube MCU para a série STM32WL</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## Primeiros Passos

### 1. Início rápido dos Comandos AT

#### 1.1 Preparação

- **Passo 1.** Conecte a Placa de Desenvolvimento Wio-E5 ao PC através de um cabo Type-C

- **Passo 2.** Abra uma ferramenta serial (por exemplo, Arudino Serial Monitor), selecione a porta COM correta, defina a taxa de baud para 9600 e selecione Both NL & CR

- **Passo 3.** Tente enviar "AT" e você verá a resposta.

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 1.2 Comandos AT básicos

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

- AT+JOIN // Enviar solicitação JOIN

- AT+MSG="Data to send" // Usado para enviar quadro em formato string que não precisa ser confirmado pelo servidor

- AT+CMSG="Data to send" // Usado para enviar quadro em formato string que deve ser confirmado pelo servidor

- AT+MSGHEX="xx xx xx xx" // Usado para enviar quadro em formato hex que não precisa ser confirmado pelo servidor

- AT+CMSGHEX="xx xx xx xx" // Usado para enviar quadro em formato hex que deve ser confirmado pelo servidor

#### 1.3 Conectar e enviar dados para The Things Network

- **Passo 1.** Visite o site [The Things Network](https://www.thethingsnetwork.org) e crie uma nova conta

- **Passo 2.** Depois de fazer login, clique no seu perfil e selecione **Console**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Selecione um cluster para começar a adicionar dispositivos e gateways

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Clique em **Go to applications**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Clique em **+ Add application**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width="400" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Preencha **Application ID** e clique em **Create application**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aqui **Application name** e **Description** não são campos obrigatórios. Se **Application name** for deixado em branco, ele usará o mesmo nome que **Application ID** por padrão

A seguir está o aplicativo recém-criado

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"></p> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Clique em **+ Add end device**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **Passo 8.** Clique em **Manually**, para inserir as credenciais de registro manualmente

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width="420" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** Selecione o **Frequency plan** de acordo com a sua região. Certifique-se também de usar a mesma frequência do gateway ao qual você irá conectar este dispositivo. Selecione **MAC V1.0.2** como **LoRaWAN® version** e **PHY V1.0.2 REV B** como **Regional Parameters version**. Essas configurações estão de acordo com a pilha LoraWAN® do Wio-E5.

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width="450" height="auto"></p> -->
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

- **Passo 11.** Copie e cole as informações acima nos campos **DevEUI**, **AppEUI** e **AppKey**. O campo **End device ID** será preenchido automaticamente quando preenchermos **DevEUI**. Finalmente clique em **Register end device**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width="450" height="auto"></p> -->
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

Se você vir **+JOIN: Network joined** no seu console serial, isso significa que seu dispositivo foi conectado com sucesso ao TTN!

Você também pode verificar o status do seu dispositivo na página **End devices**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **Passo 14.** Digite os seguintes comandos AT para enviar dados para o TTN

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

Para mais informações sobre Comandos AT, consulte [WIo-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### Desenvolver com STM32Cube MCU Package

Esta seção é para Wio-E5 mini/ Kit de Desenvolvimento Wio-E5 com o objetivo de construir várias aplicações com o STM32Cube MCU Package para a série STM32WL (SDK).

**Nota:** Agora atualizamos a biblioteca para suportar a v1.1.0 que é a versão mais recente do STM32Cube MCU Package para a série STM32WL.

:::note
Por favor, leia primeiro a seção [Erase Factory AT Firmware](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/#21-erase-factory-at-firmware), pois precisamos apagar o Factory AT Firmware antes de programar com o SDK. Depois de apagar o Factory AT Firmware ele NÃO PODE ser recuperado.
:::

#### Preparações

Software:

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): para compilação e depuração

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): para programar dispositivos STM32

Hardware:

- Gateway LoRaWAN® conectado a um LoRaWAN® Network Server (por exemplo, TTN)

- Um cabo USB Tipo-C e um ST-LINK. Conecte o cabo Tipo-C à porta Tipo-C da placa para alimentação e comunicação serial. Conecte o ST-LINK aos pinos SWD como a seguir

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### Visão geral da configuração dos GPIO

- Como o projeto de hardware da série Wio-E5 é um pouco diferente do NUCLEO-WL55JC, a placa de desenvolvimento oficial STM32WL55JC da ST, os desenvolvedores precisam reconfigurar alguns gpios para adaptar o exemplo do SDK à série Wio-E5. Nós já reconfiguramos os GPIOs, mas achamos necessário apontar a diferença.

|Rótulo do Exemplo do SDK|GPIO do NUCLEO-WL55JC|GPIO do Wio-E5 mini/ Wio-E5 Development Kit|
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
|USART|USART2(PA2/PA3)|USART1: PB6=TX , PB7=RX|

### Aplicações

Agora vamos explorar várias aplicações para Wio-E5 mini/ Wio-E5 Development Kit com o STM32Cube MCU Package para a série STM32WL (SDK).

#### LoRaWAN® End Node

Esta aplicação irá conectar o Wio-E5 mini/ Wio-E5 Development Kit ao TTN (The Things Network) e enviar dados após conectar a um gateway LoRaWAN®.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e baixá-lo como um arquivo ZIP

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **Passo 3.** Dê um clique duplo no arquivo **.project**

  **Nota:** Para MAC, você deve usar uma das opções abaixo para abrir o projeto:

  - **1.** Navegue até `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`. Dê um clique duplo no arquivo "LoRaWAN_End_Node.ioc".

  - **2.** Use "Import Projects from File System or Archieve" como nas imagens abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Clique com o botão direito no projeto e clique em **Properties**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width="280" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Navegue até `C/C++ Build > Settings > MCU Post build outputs`, marque **Convert to Intel Hex file (-O ihex)** e clique em **Apply and Close**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Clique em **Build 'Debug'**, e ele deve compilar sem nenhum erro

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width="520" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

Agora vamos modificar nosso **Device EUI**, **Application EUI**, **Application KEY** e **LoRawan Region**

- **Passo 7.** Siga o [guia](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network) aqui para configurar sua aplicação TTN, obter seu **Application EUI** e copiá-lo para a definição de macro `LORAWAN_JOIN_EUI` em `LoRaWAN/App/se-identity.h`, por exemplo, o Application EUI aqui é `80 00 00 00 00 00 00 0x07` :

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **Passo 8.** Além disso, você pode modificar seu **Device EUI** e **Application Key**, definindo as macros `LORAWAN_DEVICE_EUI` e `LORAWAN_NWK_KEY` em `LoRaWAN/App/se-identity.h`. Certifique-se de que `LORAWAN_DEVICE_EUI` e `LORAWAN_NWK_KEY` são iguais ao `Device EUI` e `App Key` no console do TTN.

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

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** A LoRaWAN® Region padrão é `EU868`, você pode modificá-la definindo a macro `ACTIVE_REGION` em `LoRaWAN/App/lora_app.h`

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **Passo 10.** Após as modificações acima, **reconstrua** o exemplo e programe-o no seu Wio-E5. Abra o `STM32CubeProgrammer`, conecte o ST-LINK ao seu PC, mantenha pressionado o `RESET Button` do seu Dispositivo, depois clique em `Connect` e solte o `RESET Button`:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 11.** Certifique-se de que a Read Out Protection está como `AA`, se aparecer como `BB`, selecione `AA` e clique em `Apply`:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 12.** Agora, vá para a página `Erasing & Programming`, selecione o caminho do seu arquivo hex (por exemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex` ), selecione as opções de programação como na imagem a seguir e clique em `Start Programming`!

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Você verá a mensagem **Download verified successfully**, quando a programação for concluída.

- **Passo 13.** Se o seu Gateway LoRaWAN® e o TTN estiverem configurados, o Wio-E5 irá ingressar com sucesso após o reset! Um pacote LoRaWAN® confirmado será enviado ao TTN a cada 30 segundos. O seguinte log será impresso no monitor serial (Arduino Serial Monitor é utilizado aqui) se o ingresso for bem-sucedido:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width="600" height="auto"></p> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

- Saúde! Agora você conectou o Wio-E5 à rede LoRaWAN®! Você pode agora prosseguir para desenvolver aplicações LoRaWAN® End Node mais empolgantes!

**Nota:** Wio-E5 só suporta modo de saída de alta potência, portanto você não pode usar estas definições de macro em `radio_board_if.h` :

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

Embora **RBI_CONF_RFO** seja definido como **RBI_CONF_RFO_LP_HP** em `radio_board_if.h`, ele não será usado porque **USE_BSP_DRIVER** está definido e a função **BSP_RADIO_GetTxConfig()** retorna **RADIO_CONF_RFO_HP**

#### FreeRTOS LoRaWAN®

Esta aplicação também irá conectar o Wio-E5 mini/ Wio-E5 Development Kit ao TTN (The Things Network) e enviar dados após conectar a um gateway LoRaWAN®. A diferença entre a aplicação anterior LoRaWAN End Node e esta aplicação FreeRTOS LoRaWAN® é que a anterior roda em bare metal enquanto esta roda sob FreeRTOS.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download dele como um arquivo ZIP

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **Passo 3.** Clique duas vezes no arquivo **.project**

- **Passo 4.** Consulte do **passo 4 ao passo 13** do aplicativo anterior **LoRaWAN® End Node** para conectar o Wio-E5 mini/ Wio-E5 Development Kit com o TTN!  

#### FreeRTOS LoRaWAN® AT

Este aplicativo também conectará o Wio-E5 mini/ Wio-E5 Development Kit ao TTN (The Things Network) e enviará dados após conectar a um gateway LoRaWAN®. A diferença entre o aplicativo anterior FreeRTOS LoRaWAN® e este aplicativo é que, aqui, você pode usar comandos AT.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download dele como um arquivo ZIP

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **Passo 3.** Clique duas vezes no arquivo **.project**

- **Passo 4.** Consulte do **passo 4 ao passo 12** do aplicativo anterior **LoRaWAN® End Node**

- **Passo 5.** Abra um monitor serial como o **Arduino Serial Monitor** e você verá a seguinte saída

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Digite **AT?** e pressione **ENTER** para ver todos os comandos AT disponíveis

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Se você ainda quiser mudar o **Device EUI**, **Application EUI**, **Application KEY** e a **LoRawan Region**, você pode alterá-los usando comandos AT. Entretanto, esses parâmetros já estão definidos em **se-identity.h** e **lora_app.h** neste exemplo

- **Passo 8.** Digite **AT+JOIN=1** e você verá a seguinte saída assim que a associação for bem-sucedida!

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width="400" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aqui o formato **AT+JOIN=(Mode)** deve ser usado. **Mode** corresponde a **0 para ABP** ou **1 para OTAA**

#### FreeRTOS LowPower

Este aplicativo habilitará o modo de baixo consumo de energia no Wio-E5 mini/ Wio-E5 Development Kit. Assim que o aplicativo for gravado, a placa consumirá energia normalmente por 2 segundos e entrará no modo de baixo consumo por 2 segundos e assim sucessivamente.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download dele como um arquivo ZIP

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **Passo 3.** Clique duas vezes no arquivo **.project**

- **Passo 4.** Clique com o botão direito no projeto e clique em **Properties**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width="280" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Navegue até `C/C++ Build > Settings > MCU Post build outputs`, marque **Convert to Intel Hex file (-O ihex)** e clique em **Apply and Close**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Clique em **Build 'Debug'** e ele deve compilar sem nenhum erro

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width="460" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Abra o `STM32CubeProgrammer`, conecte o ST-LINK ao seu PC, mantenha pressionado o `RESET Button` do seu dispositivo, então clique em `Connect` e solte o `RESET Button`:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 8.** Certifique-se de que o Read Out Protection está em `AA`; se aparecer como `BB`, selecione `AA` e clique em `Apply`:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** Agora, vá para a página `Erasing & Programming`, selecione o caminho do seu arquivo hex (por exemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`), selecione as opções de programação como na figura a seguir e clique em `Start Programming`!

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
Você verá a mensagem **Download verified successfully**, assim que a programação for concluída.

- **Passo 10.** Conecte o Wio-E5 mini/ Wio-E5 Development Kit a um PC anexando um medidor de energia. Você notará que o LED vermelho na placa pisca a cada segundo e a placa alterna entre estados de energia normal e baixa (a corrente no medidor de energia diminui por 1 segundo para o estado de menor consumo de energia e volta a subir por 1 segundo para o estado normal de funcionamento)

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Low Power

Este aplicativo também habilitará o modo de baixo consumo de energia no Wio-E5 mini/ Wio-E5 Development Kit. A diferença entre o aplicativo anterior FreeRTOS LowPower e este aplicativo Low Power é que o anterior é executado sob FreeRTOS, enquanto este é executado em bare metal.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download dele como um arquivo ZIP

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **Passo 3.** Clique duas vezes no arquivo **.project**

- **Passo 4.** Consulte do **passo 4 ao passo 10** do aplicativo anterior **FreeRTOS LowPower** e você verá a mesma saída ao final no medidor de energia!

## Suporte Técnico e Discussão de Produtos

Envie qualquer problema técnico para o nosso [fórum](http://forum.seeedstudio.com/).

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
