---
title: Grove - Multiplexador I2C/Hub I2C de 8 Canais (TCA9548A)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/
slug: /Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A
sku: 103020293
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/
---


![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-wiki.jpg)

Nós já lançamos o [Grove - I2C Hub (4 Port)](https://www.seeedstudio.com/Grove-I2C-Hub.html) e o [Grove - I2C Hub (6 Port)](https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html). Espera, ainda não é suficiente? Bem, sabemos que você está buscando mais. Aqui está, apresentamos o Grove - 8 Channel I2C Hub.

Mais importante ainda, isto é mais do que apenas uma superposição da quantidade de portas. Como todos sabemos, dispositivos I2C devem usar endereços diferentes no mesmo barramento, mesmo usando o Grove I2C Hub (4 ou 6 portas), a regra continua valendo. Porém, com a ajuda do Grove - 8 Channel I2C Hub, você pode conectar até 8 dispositivos I2C com o mesmo endereço ao mesmo sistema Grove I2C. Tudo graças ao chip multiplexador I2C TCA9548A. Ele adota tecnologia de multiplexação por divisão de tempo para que o mesmo controlador possa controlar 8 dispositivos I2C com o mesmo endereço. Nunca mais se preocupe com conflitos de endereço.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Recursos

- 8 portas Grove I2C
- Suporta múltiplos dispositivos com o mesmo endereço I2C
- Suporta sistema 3.3V/5V

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Ler o endereço I2C dos dispositivos conectados ao Grove - 8 Channel I2C Hub

#### Materiais Necessários

|Seeeduino XIAO|Grove Breadboard|Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Adquira agora](https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html)|

Também precisamos de até 8 dispositivos I2C, clique [aqui](https://www.seeedstudio.com/catalogsearch/result/?q=i2c) para encontrar os dispositivos Grove I2C de que você gostar.
Neste exemplo, usamos três dispositivos I2C.

#### Conexão de hardware

![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-example.jpg)

Conecte o I2C Hub à interface I2C do Seeeduino XIAO e conecte cada dispositivo I2C a cada hub.

#### Código de software

```cpp
#include "TCA9548A.h"

// if you use the software I2C to drive, you can uncommnet the define SOFTWAREWIRE which in TCA9548A.h. 
#ifdef SOFTWAREWIRE
  #include <SoftwareWIRE.h>
  SoftwareWire myWIRE(3, 2);
  TCA9548A<SoftwareWire> TCA;
  #define WIRE myWIRE
#else   
  #include <Wire.h>
  TCA9548A<TwoWire> TCA;
  #define WIRE Wire
#endif

#define SERIAL Serial

void setup()
{
  SERIAL.begin(115200);
  while(!SERIAL){};

  //WIRE.begin();
  TCA.begin(WIRE);
  //defaut all channel was closed
  //TCA.openAll();
  //TCA.closeAll();

  // Select the channels you want to open. You can open as many channels as you want
  TCA.openChannel(TCA_CHANNEL_0);   //TCA.closeChannel(TCA_CHANNEL_0);
  TCA.openChannel(TCA_CHANNEL_1); //TCA.closeChannel(TCA_CHANNEL_1);
  TCA.openChannel(TCA_CHANNEL_2); //TCA.closeChannel(TCA_CHANNEL_2);
  TCA.openChannel(TCA_CHANNEL_3); //TCA.closeChannel(TCA_CHANNEL_3);
  TCA.openChannel(TCA_CHANNEL_4); //TCA.closeChannel(TCA_CHANNEL_4);
  TCA.openChannel(TCA_CHANNEL_5); //TCA.closeChannel(TCA_CHANNEL_5);
  TCA.openChannel(TCA_CHANNEL_6); //TCA.closeChannel(TCA_CHANNEL_6);
  TCA.openChannel(TCA_CHANNEL_7); //TCA.closeChannel(TCA_CHANNEL_7); 

}

void loop()
{

  uint8_t error, i2cAddress, devCount, unCount;

  SERIAL.println("Scanning...");

  devCount = 0;
  unCount = 0;
  for(i2cAddress = 1; i2cAddress < 127; i2cAddress++ )
  {
    WIRE.beginTransmission(i2cAddress);
    error = WIRE.endTransmission();

    if (error == 0)
    {
      SERIAL.print("I2C device found at 0x");
      if (i2cAddress<16) SERIAL.print("0");
      SERIAL.println(i2cAddress,HEX);
      devCount++;
    }
    else if (error==4)
    {
      SERIAL.print("Unknow error at 0x");
      if (i2cAddress<16) SERIAL.print("0");
      SERIAL.println(i2cAddress,HEX);
      unCount++;
    }    
  }

  if (devCount + unCount == 0)
    SERIAL.println("No I2C devices found\n");
  else {
    SERIAL.print(devCount);
    SERIAL.print(" device(s) found");
    if (unCount > 0) {
      SERIAL.print(", and unknown error in ");
      SERIAL.print(unCount);
      SERIAL.print(" address");
    }
    SERIAL.println();
  }
  SERIAL.println();
  delay(1000); 
}
```

- **Passo 1** Baixe a biblioteca a partir do recurso e adicione a biblioteca "zip" à sua IDE do Arduino. Consulte [How to install an Arduino Library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

- **Passo 2** Encontre o código de exemplo e faça o upload para sua placa. Consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 3** Após enviar o código, você verá o endereço I2C de cada dispositivo no monitor serial. O endereço 0x70 é o endereço I2C do I2C Hub.
![](https://files.seeedstudio.com/products/103020293/img/Grove-8-channel-I2C-Hub-test-result.png)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [TCA9548A_DATASHEET](https://files.seeedstudio.com/products/103020293/document/TCA9548A_datasheet.pdf)
- **[PDF]** [Esquemático de hardware](https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-TCA9548A_v1.0_SCH_190814.pdf)
- **[ZiP]** [Biblioteca Grove 8 Channel I2C Hub](https://files.seeedstudio.com/products/103020293/document/Grove_8Channel_I2C_Hub_test_library.zip)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
