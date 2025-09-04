---
title: Grove - Multiplexor I2C de 8 Canales/Hub I2C (TCA9548A)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/
slug: /es/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-wiki.jpg)

Ya hemos lanzado el [Grove - Hub I2C (4 Puertos)](https://www.seeedstudio.com/Grove-I2C-Hub.html) y el [Grove - Hub I2C (6 Puertos)](https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html). Espera, ¿aún no es suficiente? Bueno, sabemos que buscas más. Aquí lo tienes, te presentamos el Grove - Hub I2C de 8 Canales.

Más importante aún, esto es más que solo una superposición de cantidades de puertos. Como todos sabemos, los dispositivos I2C deben usar diferentes direcciones en el mismo sistema de bus, incluso usando el Grove Hub I2C (4 o 6 puertos), la regla sigue siendo la regla. Sin embargo, con la ayuda del Grove - Hub I2C de 8 Canales, puedes conectar hasta 8 dispositivos I2C con la misma dirección al mismo sistema Grove I2C. Todo gracias al Chip Multiplexor I2C TCA9548A. Adopta tecnología de multiplexación por división de tiempo para que el mismo controlador pueda controlar 8 dispositivos I2C con la misma dirección. No más preocupaciones por conflictos de direcciones.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Características

- 8 Puertos Grove I2C
- Soporta múltiples dispositivos con la misma dirección I2C
- Soporta Sistema 3.3V/5V

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Leer la dirección I2C de dispositivos conectados en el Grove - 8 Channel I2C Hub

#### Materiales Requeridos

|Seeeduino XIAO|Grove Breadboard|Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-thumbnail.jpg)|
|[Obtener uno ahora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html)|


También requerimos hasta 8 dispositivos I2C, por favor haz clic [aquí](https://www.seeedstudio.com/catalogsearch/result/?q=i2c) para encontrar los dispositivos I2C Grove que te gusten.
En estos ejemplos, usamos tres dispositivos I2C.

#### Conexión de hardware

![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-example.jpg)

Conecta el I2C Hub con la interfaz I2C del Seeeduino XIAO, y conecta cada dispositivo I2C con cada hub.

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

- **Paso 1** Descarga la biblioteca desde el recurso y añade la biblioteca "zip" a tu Arduino IDE. Por favor consulta [Cómo instalar una biblioteca de Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

- **Paso 2** Encuentra el código de ejemplo y súbelo a tu placa. Por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 3** Después de subir el código, verás la dirección I2C de cada dispositivo desde el monitor serie. La dirección 0x70 es la dirección I2C del I2C Hub.
![](https://files.seeedstudio.com/products/103020293/img/Grove-8-channel-I2C-Hub-test-result.png)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [TCA9548A_DATASHEET](https://files.seeedstudio.com/products/103020293/document/TCA9548A_datasheet.pdf)
- **[PDF]** [Esquemático de hardware](https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-TCA9548A_v1.0_SCH_190814.pdf)
- **[ZiP]** [Biblioteca Grove 8 Channel I2C Hub](https://files.seeedstudio.com/products/103020293/document/Grove_8Channel_I2C_Hub_test_library.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
