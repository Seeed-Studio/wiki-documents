---
title: Grove - Relé SPDT de 4 Canales
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-4-Channel_SPDT_Relay/
slug: /es/Grove-4-Channel_SPDT_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/main.jpg" /><figcaption><b /><i /></figcaption>
</div>

El relé SPDT (Single Pole Double Throw) es bastante útil en ciertas aplicaciones porque tiene un terminal común y 2 contactos que son excelentes para seleccionar entre dos opciones. El Grove - Relé SPDT de 4 Canales tiene cuatro interruptores de polo simple - doble tiro (SPDT). Solo requiere señales de bajo voltaje y baja corriente para controlar esos interruptores. Específicamente, puedes usar 5V DC para controlar máx. 250V AC o 110V DC. La dirección I2C es cambiable para que puedas usar múltiples módulos de relé en el mismo proyecto. El Grove - Relé SPDT de 4 Canales tiene cuatro interruptores de polo simple - doble tiro (SPDT). Solo requiere señales de bajo voltaje y baja corriente para controlar esos interruptores. Específicamente, puedes usar 5V DC para controlar máx. 250V AC o 110V DC.

Usamos un STM32F030F4P6 integrado para controlar los canales por separado. El comando de Arduino u otras placas se transmite a través de la interfaz I2C, el STM32F030F4P6 integrado analizará el comando, para que puedas controlar el interruptor que desees.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## Lectura previa

Se recomienda encarecidamente leer una introducción de **Qué es un Módulo de Relé Grove** y **Cómo funciona un Relé** si no estás familiarizado con ellos. Por favor visita nuestro **[blog](https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/)** a continuación para información detallada:

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/" target="_blank"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-50-768x384.png" border={0} /></a></p>

## Características

+ Carcasa de plástico resistente a altas temperaturas
+ Carga de alto voltaje
+ Bajo consumo de energía
+ Larga duración
+ Dirección I2c opcional
  + 0x00 ~ 0x7F

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de trabajo|5V|
|Corriente Nominal de Bobina|89.3mA|
|Carga con Certificación TUV |10A 250VAC/  10A 30VDC|
|Carga con Certificación UL|10A 125VAC  28VDC|
|Voltaje Máximo Permitido|250VAC/110VDC|
|Consumo de Energía|aprox. 0.45W|
|Resistencia de Contacto|100mΩ Máx.|
|Resistencia de Aislamiento|100MΩ Mín. (500VDC)|
|Máx. Conmutación ON/OFF|30 operaciones/min|
|Temperatura Ambiente|-40°C a +85°C|
|Humedad de Operación|45% a 85% h.r.|
|Material de Contacto|AgCdO|
|Interfaz de Entrada|I^2^C|
|Dirección I^2^C por Defecto|0x11 o 0x12|
|Dirección I^2^C Disponible |0x00 ~ 0x7F|
|Interfaz de salida|Terminal de Tornillo Hembra DIP de 3 Pines-Verde|

:::tip
        Para el parámetro de carga, proporcionamos dos conjuntos de datos de certificación. En realidad, la carga máxima es 10A 250VAC/10A 30VDC.
:::

## Aplicaciones

+ Electrodomésticos
+ máquina de oficina
+ Receptor de TV con control remoto
+ pantalla de monitor
+ equipo de audio aplicación de uso de alta corriente de arranque

## Primeros Pasos

### Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - Relé SPDT de 4 Canales |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank">Obtener Uno Ahora</a>|

:::note
     * Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

     * Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

**Descripción General del Hardware**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/8.22%E8%BF%9E%E6%8E%A51.jpg" /><figcaption><b /><i /></figcaption>
</div>

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo a Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove - 4-Channel SPDT Relay           |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

**Mapa de Pines**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_front.jpg" /><figcaption><b /><i /></figcaption>
</div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_back.jpg" /><figcaption><b /><i /></figcaption>
</div>

:::note
    - Los interruptores 1-4 tienen la misma función de pin, por lo que para los otros interruptores, puedes referirte a **NC1**/**COM1**/**NO1**.
    - En la parte posterior de la PCB, hay dos interfaces: SWD e I^2^C. La interfaz SWD se usa por defecto al programar firmware, si quieres usar el I^2^C (que en realidad funciona como UART de arranque), debes configurar el
    **BOOT** en Alto.
:::
+ **Paso 1.** Conecta el Grove - 4-Channel SPDT Relay al puerto **I^2^C** del Base Shield.

+ **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

+ **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

+ **Paso 1.** Descarga la librería [Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) desde Github.

+ **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

+ **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo a través de la ruta: **File --> Examples --> Multi Channel Relay Arduino Library --> four_channel_relay_control**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/path.jpg" /><figcaption><b /><i /></figcaption>
</div>

O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

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
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros métodos.
:::

+ **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

+ **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo.

:::tip
     Si todo va bien, obtendrás el resultado. Mientras tanto, verás los LEDs de la placa encenderse y apagarse alternativamente.
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
        El Grove - 4-Channel SPDT Relay funcionará como se muestra a continuación si todo va bien.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/_DAS5552.MOV_20180822_104218.gif" /><figcaption><b /><i /></figcaption>
</div>

:::note
        No agregamos carga en esta demostración, si quieres verificar cómo agregar carga, por favor consulta el [Grove - 2-Channel SPDT Relay](https://wiki.seeedstudio.com/es/Grove-2-Channel_SPDT_Relay/).
:::

#### Descripción de funciones

<table style={{tableLayout: 'fixed', width: 749}}>
  <colgroup>
    <col style={{width: 233}} />
    <col style={{width: 516}} />
  </colgroup>
  <tbody><tr>
      <th>Función</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>changeI2CAddress(uint8_t old_addr, uint8_t new_addr)</span></td>
      <td>cambia la dirección del dispositivo, el <span style={{fontWeight: 'bold'}}>old_addr </span>es la dirección actual; el <span style={{fontWeight: 'bold'}}>new_addr </span>es la dirección que quieres usar. La nueva dirección solo se puede establecer exitosamente ingresando la dirección antigua correcta.</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td>obtiene el <span style={{fontWeight: 700}}>old_addr </span>(dirección actual)</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>obtiene el estado de cada canal, por ejemplo "State: 1111", lo que significa que todos los relés están encendidos</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>obtiene la versión del firmware grabada en el MCU de la placa</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>para cambiar inmediatamente todos los canales que seleccionaste, la <span style={{fontWeight: 600}}>lista de parámetros de estado:</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>o  <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x08</span><br /><br />ej. <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>encenderá el canal 2, canal 3<br /><span style={{fontWeight: 600}}>        channelCtrl(01|02|08), </span>encenderá el canal 1, canal 2 y canal 4.<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>apagará todos los canales.</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>para encender un solo canal.<br />ej.<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>encenderá el canal 3</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>para apagar un solo canal.<br />ej.<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>apagará el canal 3</td>
    </tr>
  </tbody></table>


En caso de que quieras cambiar la dirección, necesitas establecer la dirección antes de usar. Por ejemplo, queremos cambiarla a 0x2f. Podemos usar el siguiente código.

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

**P1: ¿Cómo grabar el firmware?**

**R1:** Recomendamos que uses el grabador J-Link y la interfaz WSD para grabar el firmware.

Puedes descargar el firmware aquí:

[Firmware de fábrica](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)

Recomendamos que uses J-flash para el software:

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

:::note

Debido a que los chips de la serie ST32 están agotados globalmente, los precios han aumentado varias veces y no hay una fecha de entrega clara. No tenemos más opción que cambiar al chip MM32. Los modelos de reemplazo específicos son los siguientes: STM32F030F4P6TR es reemplazado por MM32F031F6P6. Después del reemplazo del chip, las funciones del producto, características, métodos de uso y códigos permanecen sin cambios. Cabe señalar que la versión del firmware ha cambiado, y el firmware de fábrica ha sido ajustado según los diferentes chips. Si necesitas volver a grabar el firmware, por favor descarga el firmware correspondiente al chip.
:::

## Recursos

+ **[Zip]** [Archivos eagle de Grove-4-Channel SPDT Relay](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip)
+ **[Bin]** [STM32F030F4P6TR-Firmware](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)
+ **[Bin]** [MM32F031F6P6-Firmware](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/firmware-spdt-4-channels.ino.bin)
+ **[PDF]** [Hoja de datos del Relé SRD 05VDC-SL-C](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
+ **[PDF]** [Hoja de datos del S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)
+ **[PDF]** [Hoja de datos del STM32](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)
+ **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/MM32F031F6P6_Datasheet.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5NBdUr5D-8M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Automatización y Monitoreo del Hogar:** Un sistema basado en RSL10 Sense DB que puede monitorear y controlar la temperatura, humedad e intensidad de luz mediante una aplicación de smartphone y Alexa.

<iframe width="560" height="315" src="https://www.hackster.io/taifur/home-automation-and-monitoring-powered-by-rsl10-and-alexa-2439df" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Grove - 4-Channel SPDT Relay:** ¡¡¡Hola Seeekers!!! Esta es la segunda semana de nuestro segmento #newproductsTuesday. Habrá una presentación del producto de nuestro nuevo Grove - 4-Channel SPDT Relay en este video y también una demostración genial e interesante.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=5NBdUr5D-8M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
