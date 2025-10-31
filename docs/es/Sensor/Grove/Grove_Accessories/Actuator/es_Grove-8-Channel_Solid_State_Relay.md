---
title: Grove - Relé de Estado Sólido de 8 Canales
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-8-Channel_Solid_State_Relay/
slug: /es/Grove-8-Channel_Solid_State_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/main.jpg)

En lugar de usar bobinas, los relés de estado sólido (SSR) empaquetados utilizan dispositivos semiconductores de potencia como tiristores y transistores, que proporcionan una velocidad de conmutación mucho más rápida que los relés mecánicos. El **Grove - Relé de Estado Sólido de 8 Canales** está basado en el módulo de alta calidad **G3MC202P**, que te permite usar 5VDC para controlar MÁX. 240VAC. Con la ayuda de la interfaz Grove, se vuelve muy conveniente usar el SSR con tu arduino.

Utilizamos un [STM32F030F4P6](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf) integrado para controlar los canales por separado. El comando desde Arduino u otras placas se transmite a través de la interfaz I2C, el STM32F030F4P6 integrado analizará el comando, para que puedas controlar el interruptor que desees.

Según diferentes escenarios de aplicación, hemos preparado una serie de relés de estado sólido para ti.

[Grove - Relé de Estado Sólido V2](https://wiki.seeedstudio.com/es/Grove-Solid_State_Relay_V2)

[Grove - Relé de Estado Sólido de 2 Canales](https://wiki.seeedstudio.com/es/Grove-2-Channel_Solid_State_Relay)

[Grove - Relé de Estado Sólido de 4 Canales](https://wiki.seeedstudio.com/es/Grove-4-Channel_Solid_State_Relay)

[Grove - Relé de Estado Sólido de 8 Canales](https://wiki.seeedstudio.com/es/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

+ Bajo consumo de energía
+ Larga duración
+ Dirección I2c opcional

+ Ventajas sobre los relés mecánicos:

  + Los relés de estado sólido tienen velocidades de conmutación mucho más rápidas comparados con los relés electromecánicos, y no tienen contactos físicos que se desgasten
  + Operación totalmente silenciosa
  + Sin contactos físicos significa sin chispas, permite su uso en ambientes explosivos, donde es crítico que no se genere chispa durante la conmutación
  + Mayor vida útil, incluso si se activa muchas veces, ya que no hay partes móviles que se desgasten y no hay contactos que se piquen o acumulen carbón
  + Compacto, SSR de perfil delgado de construcción monobloque con un marco de terminales todo en uno que incorpora una PCB, terminales y disipador de calor, que es mucho más pequeño que los relés mecánicos, y puede integrar más canales

+ Desventajas:

  + Cuando está cerrado, mayor resistencia (generando calor), y mayor ruido eléctrico
  + Cuando está abierto, menor resistencia, y corriente de fuga inversa
  + Solo funciona para carga AC

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de entrada de operación|4~6V|
|Voltaje de Entrada Nominal|5V|
|Voltaje de Carga Nominal|100 a 240 VAC 50/60 Hz|
|Rango de Voltaje de Carga|75 a 264 VAC 50/60 Hz||
|Corriente de carga|0.1 a 2 A|
|Corriente de fuga|1.5 mA máx. (a 200 VAC)|
|Resistencia de Aislamiento|1,000 MΩ mín. (a 500 VDC)|
|Tiempo de Operación|1/2 del ciclo de fuente de alimentación de carga +1 ms máx.|
|Tiempo de Liberación|1/2 del ciclo de fuente de alimentación de carga + 1 ms máx.|
|Temperatura de Almacenamiento|-30°C a 100°C (sin formación de hielo o condensación)|
|Temperatura de Operación|-30°C a 80°C (sin formación de hielo o condensación)|
|Humedad de Operación| 45% a 85%RH|
|Interfaz de Entrada|I^2^C|
|Dirección I^2^C Predeterminada|0x11 o 0x12|
|Dirección I^2^C Disponible |0x00 ~ 0x7F|
|Interfaz de salida|DIP Hembra Azul 2 pines x8|
|Cruce por Cero|compatible|
|Certificación|UL /  CSA|

:::note
        Puedes prestar atención a la **Corriente de fuga**, 1.5mA es lo suficientemente fuerte para alimentar un LED de baja potencia, por lo que cuando el relé está apagado, el LED aún puede emitir una luz tenue.
:::

## Aplicaciones

+ Operaciones que requieren conmutación de baja latencia, por ejemplo, control de luces de escenario
+ Dispositivos que requieren alta estabilidad, por ejemplo, dispositivos médicos, señales de tráfico
+ Situaciones que requieren a prueba de explosiones, anticorrosión, a prueba de humedad, por ejemplo, industrias del carbón y química.

## Descripción del Hardware

### Mapa de Pines

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/pin_map_back.jpg)

:::note
    - Los interruptores 1-8 tienen la misma función de pin, por lo que para los otros interruptores, puedes referirte a **LOAD1**/**LOAD2**.
    - En la parte posterior de la PCB, hay dos interfaces: SWD e I^2^C. La interfaz SWD se usa por defecto al programar firmware, si quieres usar el I^2^C (que en realidad funciona como el UART de arranque), debes configurar el
    **BOOT** en Alto.
:::

### Esquemático

**Control del relé**

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1** es el módulo de relé. Cuando se aplica un voltaje de 5V entre **INT+** e **INT-**, el relé se encenderá. Entonces **LOAD1** se conectará a **LOAD2**. Usamos un transistor NPN **Q1**(BC817-40) para controlar el voltaje entre **INT+** e **INT-**.

**CTR** es la señal de control del Arduino u otra placa. Es bajada por la resistencia de 10k R2, si no hay señal, la 'Compuerta'(puerto 1) de **Q1** será 0v, y Q1 se apaga, por lo que K1 se apagará. Si **CTR** se convierte en 5v, entonces Q1 se encenderá. **INT-** de k1 se conectará al GND del sistema, para K1 habrá 5V entre **INT+** e **INT-**, por lo que K1 se encenderá, y **LOAD1** se conectará a **LOAD2**.

**Circuito elevador de nivel bidireccional**
![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/schematic_1.jpg)

Este es un circuito elevador de nivel bidireccional típico para conectar dos secciones de voltaje diferentes de un bus I^2^C. El bus I<sup>2</sup>C de este sensor usa 3.3V, si el bus I<sup>2</sup>C del Arduino usa 5V, este circuito será necesario. En el esquemático anterior, **Q17** y **Q18** son MOSFET de Canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes referirte al [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

:::note
        En esta sección solo te mostramos parte del esquemático, para el documento completo por favor consulta los [Recursos](#resources)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - 8-Channel Solid State Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB suavemente, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

+ **Paso 1.** Conecta el Grove - 8-Channel Solid State Relay al puerto **I^2^C** del Base Shield.

+ **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

+ **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/connect.jpg)

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove - 8-Channel Solid State Relay           |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

+ **Paso 1.** Descarga la librería [Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) desde Github.

+ **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

+ **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo a través de la ruta: **Archivo --> Ejemplos --> Multi Channel Relay Arduino Library --> eight_channel_relay_control**.

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/path.jpg)

O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include <multi_channel_relay.h>

#define USE_8_CHANNELS (1)

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* Scan I2C device detect device address */
   relay.begin();
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
#if(1==USE_8_CHANNELS)  
  Serial.println("Channel 5 on");
  relay.turn_off_channel(4);
  relay.turn_on_channel(5);  
  delay(500);
  Serial.println("Channel 6 on");
  relay.turn_off_channel(5);
  relay.turn_on_channel(6);  
  delay(500);
  Serial.println("Channel 7 on");
  relay.turn_off_channel(6);
  relay.turn_on_channel(7);  
  delay(500);
  Serial.println("Channel 8 on");
  relay.turn_off_channel(7);
  relay.turn_on_channel(8);  
  delay(500);
  relay.turn_off_channel(8);
#endif

  relay.channelCtrl(CHANNLE1_BIT | 
                    CHANNLE2_BIT | 
                    CHANNLE3_BIT | 
                    CHANNLE4_BIT | 
                    CHANNLE5_BIT | 
                    CHANNLE6_BIT |
                    CHANNLE7_BIT |
                    CHANNLE8_BIT);
  Serial.print("Turn all channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT | 
                    CHANNLE5_BIT | 
                    CHANNLE7_BIT);
  Serial.print("Turn 1 3 5 7 channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT | 
                    CHANNLE6_BIT |
                    CHANNLE8_BIT);
  Serial.print("Turn 2 4 6 8 channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);


  relay.channelCtrl(0);
  Serial.print("Turn off all channels, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);
}
```

+ **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

+ **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo.

:::tip
     Si todo va bien, obtendrás el resultado. Mientras tanto, verás los LEDs de la placa encenderse y apagarse alternativamente.
:::

```cpp
Scanning...
I2C device found at address 0x11 !
Found 1 I2C devices
Start write address
End write address
firmware version: 0x1
Channel 1 on
Channel 2 on
Channel 3 on
Channel 4 on
Channel 5 on
Channel 6 on
Channel 7 on
Channel 8 on
Turn all channels on, State: 11111111
Turn 1 3 5 7 channels on, State: 1010101
Turn 2 4 6 8 channels on, State: 10101010
Turn off all channels, State: 0
Channel 1 on
Channel 2 on

```

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/gif.gif)

:::note
        No añadimos carga en esta demostración, si quieres verificar cómo añadir carga, por favor consulta el [Grove - 2-Channel Solid State Relay](https://wiki.seeedstudio.com/es/Grove-2-Channel_Solid_State_Relay).
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
      <td>para cambiar inmediatamente todos los canales que seleccionaste, la <span style={{fontWeight: 600}}>lista de parámetros de estado:</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>o  <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x08</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE5_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x10</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE6_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x20</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE7_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x40</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE8_BIT</span>  o  <span style={{fontWeight: 'bold'}}>0x80</span><br />
        <br />ej. <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>encenderá el canal 2, canal 3<br /><span style={{fontWeight: 600}}>        channelCtrl(0x01|0x02|0x08), </span>encenderá el canal 1, canal 2 y canal 4.<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>apagará todos los canales.</td>
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

[Firmware de fábrica](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove-8-Channel-Solid-Relay-Firmware.bin)

Recomendamos que uses J-flash para el software:

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

+ **[Zip]** [Archivos eagle de Grove-8-Channel SPDT Relay](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip)
+ **[Zip]** [Librería Arduino Multi Channel Relay](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library/archive/master.zip)
+ **[Bin]** [Firmware de fábrica](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove-8-Channel-Solid-Relay-Firmware.bin)
+ **[PDF]** [Hoja de datos de G3MC202P](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)
+ **[PDF]** [Hoja de datos de STM32](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
