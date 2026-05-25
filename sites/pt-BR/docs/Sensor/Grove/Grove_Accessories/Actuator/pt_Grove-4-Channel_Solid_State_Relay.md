---
title: Grove - Relé de Estado Sólido de 4 Canais
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-4-Channel_Solid_State_Relay/
slug: /Grove-4-Channel_Solid_State_Relay
sku: 103020135
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-4-Channel_Solid_State_Relay/
---


![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/5.jpg)

Em vez de usar bobina, relés de estado sólido (SSR) encapsulados usam dispositivos semicondutores de potência como tiristores e transistores, que fornecem uma velocidade de comutação muito mais rápida do que os relés mecânicos. O **Grove - 4-Channel Solid State Relay** é baseado no módulo de alta qualidade **G3MC202P**, que permite usar 5VDC para controlar MÁX. 240VAC. Com a ajuda da interface Grove, torna-se muito conveniente usar o SSR com seu Arduino.

Usamos um [STM32F030F4P6](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf) on-board para controlar os canais separadamente. O comando do Arduino ou de outras placas é transmitido via interface I2C, o STM32F030F4P6 on-board irá analisar o comando, para que você possa controlar a chave que desejar.

De acordo com diferentes cenários de aplicação, preparamos uma série de relés de estado sólido para você.

[Grove - Solid State Relay V2](https://wiki.seeedstudio.com/pt-br/Grove-Solid_State_Relay_V2)

[Grove - 2-Channel Solid State Relay](https://wiki.seeedstudio.com/pt-br/Grove-2-Channel_Solid_State_Relay)

[Grove - 4-Channel Solid State Relay](https://wiki.seeedstudio.com/pt-br/Grove-4-Channel_Solid_State_Relay)

[Grove - 8-Channel Solid State Relay](https://wiki.seeedstudio.com/pt-br/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

+ Baixo consumo de energia
+ Longa durabilidade
+ Endereço I2C opcional

+ Vantagens sobre relés mecânicos:

  + Relés de estado sólido têm velocidades de comutação muito mais rápidas em comparação com relés eletromecânicos, e não possuem contatos físicos que se desgastam
  + Operação totalmente silenciosa
  + A ausência de contatos físicos significa ausência de faíscas, permitindo seu uso em ambientes explosivos, onde é fundamental que nenhuma faísca seja gerada durante a comutação
  + Vida útil aumentada, mesmo que seja acionado muitas vezes, pois não há partes móveis para desgastar nem contatos para formar cavidades ou acumular carbono
  + SSR compacto, de perfil fino, de construção monobloco com um lead frame tudo‑em‑um que incorpora uma PCB, terminais e dissipador de calor, o que é muito menor do que relés mecânicos, e pode integrar mais canais

+ Desvantagens:

  + Quando fechado, resistência mais alta (gerando calor) e ruído elétrico aumentado
  + Quando aberto, resistência mais baixa e corrente de fuga reversa
  + Funciona apenas para carga AC

## Especificação

|Item|Valor|
|---|---|
|Tensão de entrada de operação|4~6V|
|Tensão de entrada nominal|5V|
|Tensão de carga nominal|100 a 240 VAC 50/60 Hz|
|Faixa de tensão de carga|75 a 264 VAC 50/60 Hz||
|Corrente de carga|0,1 a 2 A|
|Corrente de fuga|1,5 mA máx. (a 200 VAC)|
|Resistência de isolamento|1.000 MΩ mín. (a 500 VDC)|
|Tempo de operação|1/2 do ciclo da fonte de alimentação de carga + 1 ms máx.|
|Tempo de liberação|1/2 do ciclo da fonte de alimentação de carga + 1 ms máx.|
|Temperatura de armazenamento|-30°C a 100°C (sem gelo ou condensação)|
|Temperatura de operação|-30°C a 80°C (sem gelo ou condensação)|
|Umidade de operação| 45% a 85%RH|
|Interface de entrada|I^2^C|
|Endereço I^2^C padrão|0x11 ou 0x12|
|Endereços I^2^C disponíveis |0x00 ~ 0x7F|
|Interface de saída|DIP fêmea azul 2 pinos x4|
|Zero Cross|suporte|
|Certificação|UL /  CSA|

:::note
        Você deve prestar atenção à **corrente de fuga**; 1,5 mA é forte o suficiente para acionar LED de baixa potência, portanto, quando o relé estiver desligado, o LED ainda poderá emitir uma luz fraca.
:::

## Aplicações

+ Operações que requerem comutação de baixa latência, por exemplo, controle de luz de palco
+ Dispositivos que exigem alta estabilidade, por exemplo, dispositivos médicos, semáforos
+ Situações que exigem à prova de explosão, anticorrosão, à prova de umidade, por exemplo, indústrias de carvão, químicas.

## Visão Geral de Hardware

### Mapa de pinos

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/pin_map_back.jpg)

:::note
    - As chaves 1-4 têm a mesma função de pino, portanto, para as outras chaves, você pode consultar **LOAD1**/**LOAD2**.
    - Na parte de trás da PCB, há duas interfaces: SWD e I^2^C. A interface SWD é usada por padrão ao programar o firmware; se você quiser usar o I^2^C (na verdade funciona como a UART de boot), você deve definir o
    **BOOT** em nível alto.
:::

### Esquemático

**Controle do relé**

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1** é o módulo de relé. Quando uma tensão de 5V é aplicada entre **INT+** e **INT-**, o relé será ligado. Então o **LOAD1** se conectará ao **LOAD2**. Usamos um transistor NPN **Q1** (BC817-40) para controlar a tensão entre **INT+** e **INT-**.

O **CTR** é o sinal de controle proveniente do Arduino ou de outra placa. Ele é puxado para baixo pelo resistor de 10k R2; se não houver sinal, o 'Gate' (porta 1) de **Q1** ficará em 0V e o Q1 ficará desligado, de modo que o K1 ficará desligado. Se **CTR** se tornar 5V, então o Q1 será ligado. O **INT-** de K1 será conectado ao GND do sistema; para o K1 haverá 5V entre **INT+** e **INT-**, então o K1 será ligado e o **LOAD1** se conectará ao **LOAD2**.

**Circuito de conversor de nível bidirecional**
![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/schematic_1.jpg)

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferentes de um barramento I^2^C. O barramento I<sup>2</sup>C deste sensor usa 3,3V; se o barramento I<sup>2</sup>C do Arduino usar 5V, este circuito será necessário. No esquemático acima, **Q17** e **Q18** são MOSFETs de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que atuam como uma chave bidirecional. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

:::note
        Nesta seção mostramos apenas parte do esquemático; para o documento completo, consulte a seção [Resources](#Recursos)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - 4-Channel Solid State Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html" target="_blank">Adquira agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

+ **Passo 1.** Conecte o Grove - 4-Channel Solid State Relay à porta **I^2^C** do Base Shield.

+ **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

+ **Passo 3.** Conecte o Seeeduino ao PC via cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/connect.jpg)

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove - 4-Channel Solid State Relay           |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

+ **Passo 1.** Baixe a biblioteca [Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) do Github.

+ **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

+ **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo pelo caminho: **File --> Examples --> Multi Channel Relay Arduino Library --> four_channel_relay_control**.

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/path.jpg)

Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na Arduino IDE.

```cpp
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* Scan I2C device detect device address */
  uint8_t old_address = relay.scanI2CDevice();
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("Start write address");
  relay.changeI2CAddress(old_address, 0x11);  /* Set I2C address and save to Flash */  
  Serial.println("End write address");

  /* Read firmware  version */
  Serial.print("firmware version: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}

void loop()
{

  /** 
   *  channle: 8 7 6 5 4 3 2 1
   *  state: 0b00000000 -> 0x00  (all off)
   *  state: 0b11111111 -> 0xff  (all on)
  */  

  /* Begin Controlling Relay */ 
  Serial.println("Channel 1 on");
  relay.turn_on_channel(1);  
  delay(500);
  Serial.println("Channel 2 on");
  relay.turn_off_channel(1);
  relay.turn_on_channel(2);
  delay(500);
  Serial.println("Channel 3 on");
  relay.turn_off_channel(2);
  relay.turn_on_channel(3);  
  delay(500);
  Serial.println("Channel 4 on");
  relay.turn_off_channel(3);
  relay.turn_on_channel(4);  
  delay(500);
  relay.turn_off_channel(4);

  relay.channelCtrl(CHANNLE1_BIT | 
                    CHANNLE2_BIT | 
                    CHANNLE3_BIT | 
                    CHANNLE4_BIT);
  Serial.print("Turn all channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT);
  Serial.print("Turn 1 3 channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT);
  Serial.print("Turn 2 4 channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);


  relay.channelCtrl(0);
  Serial.print("Turn off all channels, State: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);
}
```

+ **Passo 4.** Faça o upload da demonstração. Se você não sabe como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

+ **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo.

:::tip
  Se tudo correr bem, você obterá o resultado. Enquanto isso, você verá os LEDs on-board acendendo e apagando alternadamente.
:::

```cpp
Scanning...
I2C device found at address 0x12 !
Found 1 I2C devices
Start write address
End write address
firmware version: 0x1
Channel 1 on
Channel 2 on
Channel 3 on
Channel 4 on
Turn all channels on, State: 1111
Turn 1 3 channels on, State: 101
Turn 2 4 channels on, State: 1010
Turn off all channels, State: 0
Channel 1 on
Channel 2 on
```

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/gif.gif)

:::note
        Nós não adicionamos carga nesta demonstração, se você quiser verificar como adicionar carga, consulte o [Grove - 2-Channel Solid State Relay](https://wiki.seeedstudio.com/pt-br/Grove-2-Channel_Solid_State_Relay).
:::

#### Descrição das funções

<table style={{tableLayout: 'fixed', width: 749}}>
  <colgroup>
    <col style={{width: 233}} />
    <col style={{width: 516}} />
  </colgroup>
  <tbody><tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>changeI2CAddress(uint8_t old_addr, uint8_t new_addr)</span></td>
      <td>altera o endereço do dispositivo, o <span style={{fontWeight: 'bold'}}>old_addr </span>é o endereço atual; o <span style={{fontWeight: 'bold'}}>new_addr </span>é o endereço que você deseja utilizar. O novo endereço só pode ser definido com sucesso inserindo o endereço antigo correto.</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td>obtém o <span style={{fontWeight: 700}}>old_addr </span>(endereço atual)</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>obtém o estado de cada canal, por exemplo "State: 1111", o que significa que todos os relés estão ligados</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>obtém a versão do firmware gravada no MCU on-board</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>para alterar imediatamente todos os canais que você selecionou, a <span style={{fontWeight: 600}}>lista de parâmetros state:</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>ou  <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>  ou  <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>  ou  <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>  ou  <span style={{fontWeight: 'bold'}}>0x08</span><br /><br />por exemplo. <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>ligará o canal 2, canal 3<br /><span style={{fontWeight: 600}}>        channelCtrl(0x01|0x02|0x08), </span>ligará o canal 1, canal 2 e canal 4.<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>desligará todos os canais.</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>para ligar um único canal.<br />por exemplo.<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>ligará o canal 3</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>para desligar um único canal.<br />por exemplo.<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>desligará o canal 3</td>
    </tr>
  </tbody></table>

Caso você queira alterar o endereço, é necessário defini-lo antes do uso. Por exemplo, queremos alterá-lo para 0x2f. Podemos usar o seguinte código.

```cpp
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* Scan I2C device detect device address */
  uint8_t old_address = relay. ;
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("Start write address");
  relay.changeI2CAddress(old_address,0x2f);  /* Set I2C address as 0x2f and save it to the EEPRom */  
  Serial.println("End write address");

  /* Read firmware  version */
  Serial.print("firmware version: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}


```

## FAQ

**P1: Como gravar o firmware?**

**R1:** Recomendamos que você use o gravador J-Link e a interface WSD para gravar o firmware.

Você pode baixar o firmware aqui:

[Factory firmware](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove-4-Channel-Solid-Relay-Firmware.bin)

Recomendamos que você use o J-flash para o software:

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove%20-%204-Channel%20Solid%20State%20Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

+ **[Zip]** [Arquivos eagle do Grove-4-Channel SPDT Relay](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove%20-%204-Channel%20Solid%20State%20Relay.zip)
+ **[Zip]** [Multi Channel Relay Arduino Library](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library/archive/master.zip)
+ **[Bin]** [Factory firmware](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove-4-Channel-Solid-Relay-Firmware.bin)
+ **[PDF]** [Datasheet do G3MC202P](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)
+ **[PDF]** [Datasheet do STM32](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demos simples, que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
