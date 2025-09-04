---
description: Grove - Sensor de Proximidad, Color, Gesto y Luz (TMG39931)
title: Grove - Sensor de Proximidad, Color, Gesto y Luz (TMG39931)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/main.jpg" /></div>

El sensor Grove - Luz, Gesto, Color y Proximidad es un producto basado en TMG39931, que cuenta con detección avanzada de gestos, detección de proximidad, sensor de luz ambiental digital (ALS), sensor de color (RGBC), y generación/transmisión de patrones ópticos para difusión. Este sensor cuatro en uno te permite recopilar datos del entorno ambiental y transferirlos a través del bus I2C.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar en detección ambiental. Por favor, consulta el Sensor de Intensidad de Luz Inalámbrico S2102 con mayor rendimiento y robustez para la detección de intensidad de luz. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 Luz</strong></a></td>
    </tr>
  </tbody>
</table>

## Característica

- Solución óptica integrada de dispositivo único
- Detección de luz ambiente
- Filtros de bloqueo UV e IR
- Detección de gestos complejos
- Ideal para operación detrás de vidrio oscuro - Alta sensibilidad
- Detección de proximidad
- Generación y transmisión de patrones de código de barras
- Uso dual de un solo LED interno
- Ajustado para proporcionar lectura consistente

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura de operación| -30～85℃|
|Temperatura de almacenamiento| -40～85℃|
|Lux máximo [klx]|60|
|Interfaz|I2C|
|Dirección I2C|0x39|

## Aplicaciones típicas

- Detección de gestos
- Sensor de color
- Detección de luz ambiental
- Desactivación de pantalla táctil de teléfono celular
- Reemplazo de interruptor mecánico
- Emulación de código de barras impreso

## Principio de funcionamiento

**Detección de gestos**

La detección de gestos utiliza cuatro fotodiodos direccionales para detectar energía IR reflejada (proporcionada por el LED integrado) para convertir información de movimiento físico en información digital.

**Detección de proximidad**

La función de detección de proximidad proporciona detección de objetos mediante la detección por fotodiodo de energía IR reflejada (proporcionada por el LED integrado).

**Sensor digital de luz ambiental y sensor de color**

La función de detección de color y ALS proporciona datos de intensidad de luz roja, verde, azul y clara. Cada uno de los canales R, G, B, C tiene un filtro de bloqueo UV e IR y un convertidor de datos dedicado que produce datos de 16 bits simultáneamente. Esta arquitectura permite a las aplicaciones medir con precisión la luz ambiental y detectar el color, lo que permite a los dispositivos calcular la iluminancia y la temperatura de color, controlar la retroiluminación de la pantalla y la cromaticidad.

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Comenzando

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Light&Gesture&Color&Proximity Sensor(TMG39931)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com)|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/withard.jpg" /></div>

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

:::tip
La funcionalidad de gestos aún no está soportada, ya que esta funcionalidad necesita algoritmos proporcionados por AMS. Actualizaremos esta biblioteca tan pronto como obtengamos el soporte de AMS.
:::

**Ejemplo 1**

- **Paso 1.** Descarga la biblioteca [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Reinicia el Arduino IDE. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el Arduino IDE a través de la ruta: **File --> Examples -->Seeed TMG3993(Grove - Light&Gesture&Color&Proximity Sensor)-->Example1-ProximityPullRaw**.

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard1.png" /></div>

    2. Ábrelo en tu computadora haciendo clic en **basic_demo.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_TMG3993-master⁩\⁨examples⁩\Example1-ProximityPullRaw⁩⁩\Example1-ProximityPullRaw.ino**, **XXXX** es la ubicación donde instalaste el Arduino IDE.

    ![](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard2.png)

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el Arduino IDE.

```cpp
#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Proximity Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setupRecommendedConfigForProximity();
  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_PVALID)
  {
    uint8_t proximity_raw = tmg3993.getProximityRaw();  //read the Proximity data will clear the status bit
    Serial.print("Proximity Raw: ");
    Serial.println(proximity_raw);
  }
  delay(1);
}


```

:::caution
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

:::tip
Si todo va bien, los datos en bruto (uint16_t) del sensor de proximidad deberían poder leerse desde el Monitor Serie.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg1.png" /></div>

Si deseas ejecutar otros ejemplos, puedes hacer procesos similares.

**Ejemplo 2**

Este ejemplo también se usa para detectar proximidad, pero de manera de interrupción.

Necesitan configurarse dos umbrales - bajo y alto. Cualquier valor de proximidad que esté dentro de este rango no activará nada, pero el valor fuera de este rango activará eventos. En detalle, cuando los valores del sensor de proximidad están por debajo del umbral bajo más de 10 veces, se emitirá un evento de proximidad removida, cuando los valores del sensor de proximidad son más altos que el umbral alto más de 10 veces, se emitirá un evento de proximidad detectada. Las 10 veces aquí pueden configurarse a través de setInterruptPersistenceReg (ver setupRecommendedConfigForProximity para un ejemplo).

- **Paso 1.** Descarga la Biblioteca [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, de la misma manera que en el Ejemplo 1, pero esta vez elige "Example2-ProximityInterrupt" en lugar de "Example1". O copia el siguiente código en el IDE de Arduino:

```cpp


#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;
int last_interrupt_state = -1;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Proximity Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setupRecommendedConfigForProximity();
  tmg3993.setProximityInterruptThreshold(25, 150);  //less than 5cm will trigger the proximity event
  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_PINT)
  {
    uint8_t proximity_raw = tmg3993.getProximityRaw();  //read the Proximity data will clear the status bit

    if (proximity_raw >= 150 && last_interrupt_state != 1) {
      Serial.println("Proximity detected!!!");
      Serial.print("Proximity Raw: ");
      Serial.println(proximity_raw);
      last_interrupt_state = 1;
    } else if (proximity_raw <= 25 && last_interrupt_state != 0) {
      Serial.println("Proximity removed!!!");
      Serial.print("Proximity Raw: ");
      Serial.println(proximity_raw);
      last_interrupt_state = 0;
    }

    // don't forget to clear the interrupt bits
    tmg3993.clearProximityInterrupts();
  }
  delay(10);
}

```

:::caution
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

Deberías ver algo como esto en el Monitor Serie después de subir el código al Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg2.png" /></div>

**Ejemplo 3**

Este ejemplo lee los valores del sensor R, G, B, C. C se define como el canal claro sin filtro de color en la hoja de datos del chip. Este ejemplo también calcula el valor Lux para la luz ambiental basado en la ecuación en la Nota de Aplicación de este sensor.

- **Paso 1.** Descarga la biblioteca [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, de la misma manera que en el Ejemplo 1, pero esta vez elige "Example3-Color-Light" en lugar de "Example1". O copia el siguiente código en el IDE de Arduino:

```cpp


#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Color Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setADCIntegrationTime(0xdb); // the integration time: 103ms
  tmg3993.enableEngines(ENABLE_PON | ENABLE_AEN | ENABLE_AIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_AVALID)
  {
    uint16_t r,g,b,c;
    int32_t lux, cct;
    tmg3993.getRGBCRaw(&r, &g, &b, &c);
    lux = tmg3993.getLux(r, g, b, c);
    //the calculation of CCT is just from the `Application Note`,
    //from the result of our test, it might have error.
    cct = tmg3993.getCCT(r, g, b, c);

    Serial.print("RGBC Data: ");
    Serial.print(r);
    Serial.print("\t");
    Serial.print(g);
    Serial.print("\t");
    Serial.print(b);
    Serial.print("\t");
    Serial.println(c);

    Serial.print("Lux: ");
    Serial.print(lux);
    Serial.print("\tCCT: ");
    Serial.println(cct);
    Serial.println("----");

    // don't forget to clear the interrupt bits
    tmg3993.clearALSInterrupts();
  }
  delay(100);
}

```

:::caution
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

Deberías ver algo como esto en el Monitor Serie después de subir el código al Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg3.png" /></div>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip)

- **[Zip]** [Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) Biblioteca](https://github.com/Seeed-Studio/Seeed_TMG3993/archive/master.zip)

- **[PDF]** [Hoja de Datos TMG39931](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/TMG3993.pdf)

- **[PDF]** [Versión PDF WIKI](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.pdf)

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
