---
title: Grove - Relé SPDT de 4 Canais
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-4-Channel_SPDT_Relay/
slug: /Grove-4-Channel_SPDT_Relay
sku: 103020133
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-4-Channel_SPDT_Relay/
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/main.jpg" /><figcaption><b /><i /></figcaption>
</div>

O relé Single Pole Double Throw (SPDT) é bastante útil em certas aplicações porque possui um terminal comum e 2 contatos, o que é ótimo para selecionar entre duas opções. O Grove - Relé SPDT de 4 Canais possui quatro chaves de single pole - double throw (SPDT). Ele requer apenas sinais de baixa tensão e baixa corrente para controlar essas chaves. Especificamente, você pode usar 5V DC para controlar até 250V AC ou 110V DC. O endereço I2C é alterável, para que você possa usar vários módulos de relé no mesmo projeto. O Grove - Relé SPDT de 4 Canais possui quatro chaves de single pole - double throw (SPDT). Ele requer apenas sinais de baixa tensão e baixa corrente para controlar essas chaves. Especificamente, você pode usar 5V DC para controlar até 250V AC ou 110V DC.

Nós usamos um STM32F030F4P6 on-board para controlar os canais separadamente. O comando vindo do Arduino ou de outras placas é transmitido via interface I2C, o STM32F030F4P6 on-board irá interpretar o comando, para que você possa controlar a chave que desejar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## Leitura prévia

Uma introdução de **O que é um Módulo de Relé Grove** e **Como funciona um Relé** é leitura fortemente recomendada antes, se você não estiver familiarizado com eles. Visite nosso **[blog](https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/)** abaixo para informações detalhadas:

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/" target="_blank"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-50-768x384.png" border={0} /></a></p>

## Características

+ Caixa plástica resistente a alta temperatura
+ Carga de alta tensão
+ Baixo consumo de energia
+ Longa durabilidade
+ Endereço I2C opcional
  + 0x00 ~ 0x7F

## Especificação

|Item|Valor|
|---|---|
|Tensão de trabalho|5V|
|Corrente nominal da bobina|89.3mA|
|Carga com certificação TUV |10A 250VAC/  10A 30VDC|
|Carga com certificação UL|10A 125VAC  28VDC|
|Tensão máxima permitida|250VAC/110VDC|
|Consumo de energia|aprox. 0.45W|
|Resistência de contato|100mΩ máx.|
|Resistência de isolamento|100MΩ mín. (500VDC)|
|Comutação máxima LIGA/DESLIGA|30 operações/min|
|Temperatura ambiente|-40°C a +85°C|
|Umidade de operação|45% a 85% r.h.|
|Material de contato|AgCdO|
|Interface de entrada|I^2^C|
|Endereço I^2^C padrão|0x11 ou 0x12|
|Endereço I^2^C disponível |0x00 ~ 0x7F|
|Interface de saída|Terminal de parafuso fêmea DIP de 3 pinos - Verde|

:::tip
        Para o parâmetro de carga, fornecemos dois conjuntos de dados de certificação. Na verdade, a carga máxima é 10A 250VAC/10A 30VDC.
:::

## Aplicações

+ Eletrodoméstico
+ Máquina de escritório
+ Receptor de TV com controle remoto
+ Monitor
+ Aplicações de equipamento de áudio com alta corrente de surto

## Primeiros Passos

### Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários têm que escrever sua própria biblioteca de software.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - Relé SPDT de 4 Canais |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank">Adquira agora</a>|

:::note
     * Conecte o cabo USB suavemente, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

     * Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

**Visão geral do hardware**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/8.22%E8%BF%9E%E6%8E%A51.jpg" /><figcaption><b /><i /></figcaption>
</div>

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove - Relé SPDT de 4 Canais           |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

**Mapa de pinos**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_front.jpg" /><figcaption><b /><i /></figcaption>
</div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_back.jpg" /><figcaption><b /><i /></figcaption>
</div>

:::note
    - As chaves 1-4 têm a mesma função de pino, então, para as outras chaves, você pode se referir a **NC1**/**COM1**/**NO1**.
    - Na parte de trás da PCB, há duas interfaces: SWD e I^2^C. A interface SWD é usada por padrão ao programar o firmware; se você quiser usar o I^2^C (na verdade funciona como a UART de boot), você deve definir o
    **BOOT** em nível alto.
:::
+ **Passo 1.** Conecte o Grove - Relé SPDT de 4 Canais à porta **I^2^C** do Base Shield.

+ **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

+ **Passo 3.** Conecte o Seeeduino ao PC via cabo USB.

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

+ **Passo 1.** Baixe a biblioteca [Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) do Github.

+ **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

+ **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo pelo caminho: **File --> Examples --> Multi Channel Relay Arduino Library --> four_channel_relay_control**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/path.jpg" /><figcaption><b /><i /></figcaption>
</div>

Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o seguinte código em um novo sketch na Arduino IDE.

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

:::note
        O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto, recomendamos que você use os primeiros métodos.
:::

+ **Etapa 4.** Faça o upload do demo. Se você não sabe como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

+ **Etapa 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo.

:::tip
     Se tudo correr bem, você obterá o resultado. Enquanto isso, você verá os LEDs on-board acendendo e apagando alternadamente.
:::

```
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

:::tip
        O Grove - 4-Channel SPDT Relay estará funcionando como abaixo se tudo correr bem.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/_DAS5552.MOV_20180822_104218.gif" /><figcaption><b /><i /></figcaption>
</div>

:::note
        Nós não adicionamos carga neste demo, se você quiser verificar como adicionar carga, consulte o [Grove - 2-Channel SPDT Relay](https://wiki.seeedstudio.com/pt-br/Grove-2-Channel_SPDT_Relay/).
:::

#### Descrição das funções

<table style={{tableLayout: 'fixed', width: 749}}>
  <colgroup>
    <col style={{width: 233}} />
    <col style={{width: 516}} />
  </colgroup>
  <tbody><tr>
      <th>Função</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>changeI2CAddress(uint8_t old_addr, uint8_t new_addr)</span></td>
      <td>altera o endereço do dispositivo, o <span style={{fontWeight: 'bold'}}>old_addr </span>é o endereço atual; o <span style={{fontWeight: 'bold'}}>new_addr </span>é o endereço que você quer usar. O novo endereço só pode ser configurado com sucesso inserindo o endereço antigo correto.</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td>obter o <span style={{fontWeight: 700}}>old_addr </span>(endereço atual)</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>obter o estado de cada canal, por exemplo "State: 1111", o que significa que todos os relés estão ligados</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>obter a versão do firmware gravada no MCU on-board</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>para alterar imediatamente todos os canais que você selecionou, a <span style={{fontWeight: 600}}>lista de parâmetros state:</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>ou  <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>  ou  <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>  ou  <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>  ou  <span style={{fontWeight: 'bold'}}>0x08</span><br /><br />por exemplo. <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>irá ligar o canal 2 e o canal 3<br /><span style={{fontWeight: 600}}>        channelCtrl(01|02|08), </span>irá ligar o canal 1, canal 2 e canal 4.<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>irá desligar todos os canais.</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>para ligar um único canal.<br />por exemplo.<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>irá ligar o canal 3</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>para desligar um único canal.<br />por exemplo.<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>irá desligar o canal 3</td>
    </tr>
  </tbody></table>

Caso você queira alterar o endereço, é necessário configurá-lo antes de usar. Por exemplo, queremos alterá-lo para 0x2f. Podemos usar o seguinte código.

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

[Firmware de fábrica](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)

Recomendamos que você use o J-flash como software:

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

:::note

Como os chips da série ST32 estão em falta globalmente, os preços aumentaram várias vezes e não há uma data de entrega clara. Não tivemos escolha a não ser mudar para o chip MM32. Os modelos de substituição específicos são os seguintes: STM32F030F4P6TR é substituído por MM32F031F6P6. Após a substituição do chip, as funções do produto, características, métodos de uso e códigos permanecem inalterados. Deve-se notar que a versão do firmware mudou, e o firmware de fábrica foi ajustado de acordo com diferentes chips. Se você precisar regravar o firmware, faça o download do firmware correspondente ao chip.
:::

## Recursos

+ **[Zip]** [Arquivos eagle do Grove-4-Channel SPDT Relay](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip)
+ **[Bin]** [Firmware STM32F030F4P6TR](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)
+ **[Bin]** [Firmware MM32F031F6P6](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/firmware-spdt-4-channels.ino.bin)
+ **[PDF]** [Datasheet do relé SRD 05VDC-SL-C](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
+ **[PDF]** [Datasheet do S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)
+ **[PDF]** [Datasheet do STM32](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)
+ **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/MM32F031F6P6_Datasheet.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demos simples que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5NBdUr5D-8M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Automação e Monitoramento Residencial:** Um sistema baseado em RSL10 Sense DB que pode monitorar e controlar a temperatura, umidade e intensidade de luz por aplicativo de smartphone e Alexa.

<iframe width="560" height="315" src="https://www.hackster.io/taifur/home-automation-and-monitoring-powered-by-rsl10-and-alexa-2439df" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Grove - 4-Channel SPDT Relay:** Ei Seeekers!!! Esta é a segunda semana do nosso segmento #newproductsTuesday. Haverá uma demonstração de produto do nosso novo Grove - 4-Channel SPDT Relay neste vídeo e também um demo bem interessante.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=5NBdUr5D-8M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
