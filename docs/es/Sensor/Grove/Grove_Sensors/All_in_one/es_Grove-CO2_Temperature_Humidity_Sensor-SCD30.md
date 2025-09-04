---
description: Grove - Sensor de CO2, Temperatura y Humedad (SCD30)
title: Grove - Sensor de CO2, Temperatura y Humedad (SCD30)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-CO2_Temperature_Humidity_Sensor-SCD30
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/main.jpg" /></div>

El Grove - Sensor de CO2, Temperatura y Humedad (SCD30) es un sensor de dióxido de carbono de alta precisión, que está basado en el Sensirion SCD30. El rango de medición de este sensor es de 0 ppm-40'000 ppm, y la precisión de medición puede alcanzar ±(30 ppm + 3%) entre 400ppm a 10'000ppm.

Además de la tecnología de medición Infrarroja No Dispersiva (NDIR) para la detección de CO2, el SCD30 integra sensores de humedad y temperatura de Sensirion en el mismo módulo sensor.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para el sensado ambiental. Por favor, consulta el Sensor Inalámbrico de CO2, Temperatura y Humedad S2103 con mayor rendimiento y robustez para el monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2103 Temp. y Humedad del Aire y CO2</strong></a></td>
    </tr>
  </tbody>
</table>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Sensor de CO2, Temperatura y Humedad (SCD30) V1.0 | Inicial                                                                                               | Dic 2018      |


## Ideas de Aplicación

- Purificador de Aire
- Monitoreo Ambiental
- Monitoreo Ambiental de Plantas

## Características

- Tecnología de sensor de CO2 NDIR
- Sensor integrado de temperatura y humedad
- Mejor relación rendimiento-precio
- Detección de doble canal para estabilidad superior
- Interfaz digital I2C
- Bajo consumo de energía
- Vida útil ultra larga del sensor (15 años)

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura de operación| 0 – 50℃|
|Temperatura de almacenamiento|- 40°C – 70°C|
|Condiciones de humedad de operación|0 – 95 %RH|
|Vida útil del sensor|15 años|
|Interfaz|I2C|
|Dirección I2C|0x61|
|Tamaño|L: 61mm A: 42mm H: 19mm|
|Peso|19.7g|
|Tamaño del Paquete|L: 110mm A: 70mm H: 40mm|
|Peso bruto| 27g|

<div align="center"><b>Tabla 1.</b><i>Especificación General</i></div>

|Parámetro|Condiciones|Valor|
|---|---|----|
|Rango de medición de CO2||0 – 40'000 ppm|
|Precisión| 400ppm – 10'000ppm| ± (30 ppm + 3%)|
|Repetibilidad|400ppm – 10'000ppm|10ppm|
|Tiempo de respuesta|τ63%|20 s|


<div align="center"><b>Tabla 2.</b><i>Especificaciones del Sensor de CO2</i></div>

|Parámetro|Condiciones|Valor|
|---|---|----|
|Rango de medición de humedad||0 %RH – 100 %RH|
|Precisión| 0 – 50°C, 0 – 100%RH| ±2 %RH|
|Repetibilidad||0.1 %RH|
|Tiempo de respuesta|τ63%|8 s|

<div align="center"><b>Tabla 3.</b><i>Especificaciones del Sensor de Humedad</i></div>

|Parámetro|Condiciones|Valor|
|---|---|----|
|Rango de medición de temperatura||-40°C – 120°C|
|Precisión| 0 – 50°C| ±0.5°C|
|Repetibilidad||0.1°C|
|Tiempo de respuesta|τ63%|> 2 s|


<div align="center"><b>Tabla 4.</b><i>Especificaciones del Sensor de Temperatura</i></div>

|Parámetro|Condiciones|Valor|
|---|---|----|
|Corriente promedio|Intervalo de actualización 2 s|19 mA|
|Corriente máx.| Durante la medición| 75 mA|
|Consumo de energía|1 medición|120 mJ|

<div align="center"><b>Tabla 5.</b><i>Especificaciones Eléctricas</i></div>

## Descripción General del Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center' }}><a href="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" /></a></p>
</figure>
</div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Comenzando

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove-CO2 & T&H SCD30|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
  **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

  **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

**Conexión de Hardware**

- **Paso 1.** Conecta el Grove - CO2 & Temperature & Humidity Sensor (SCD30) al puerto **I2C** del Base Shield.

- **Paso 2.** Conecta Grove - Base Shield en Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/connect.png" /></div>

#### Software

:::caution
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la [Librería Seeed SCD30](https://github.com/Seeed-Studio/Seeed_SCD30) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    a. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples -->Grove_scd30_co2_sensor-->SCD30_Example**.

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c1.jpg" /></div>

    b. Ábrelo en tu computadora haciendo clic en **SCD30_Example.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_SCD30-master\examples\SCD30_Example**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c3.jpg" /></div>

    c. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "SCD30.h"

#if defined(ARDUINO_ARCH_AVR)
 #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
 #define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.") 
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
 #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
 #define SERIAL SerialUSB
#else
 #pragma message("Not found any architecture.")
 #define SERIAL Serial
#endif


void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    SERIAL.println("SCD30 Raw Data");
    scd30.initialize();
}

void loop()
{
    float result[3] = {0};
    
    if(scd30.isAvailable())
    {
        scd30.getCarbonDioxideConcentration(result);
        SERIAL.print("Carbon Dioxide Concentration is: ");
        SERIAL.print(result[0]);
        SERIAL.println(" ppm");
        SERIAL.println(" ");
        SERIAL.print("Temperature = ");
        SERIAL.print(result[1]);
        SERIAL.println(" ℃");
        SERIAL.println(" ");
        SERIAL.print("Humidity = ");
        SERIAL.print(result[2]);
        SERIAL.println(" %");
        SERIAL.println(" ");
        SERIAL.println(" ");
        SERIAL.println(" ");
    }
    
    delay(2000);
}

```

:::caution
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
  Si todo va bien, los datos en bruto del Grove - Sensor de CO2, Temperatura y Humedad (SCD30) deberían poder leerse desde el Monitor Serie.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c2.jpg" /></div>

## Calibración y Colocación

Para obtener resultados más precisos en un escenario práctico, necesitas prestar atención a los siguientes dos puntos:  

- 1. La colocación correcta  
- 2. Calibración

### Colocación

Por favor consulta las [Directrices de Diseño SCD30](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf) para la colocación correcta.

### Calibración

Cuando se activa por primera vez se necesita un período mínimo de 7 días para que el algoritmo pueda encontrar su conjunto inicial de parámetros para ASC. El sensor debe estar expuesto al aire fresco durante al menos 1 hora cada día. También durante ese período, el sensor no debe desconectarse de la fuente de alimentación, de lo contrario el procedimiento para encontrar parámetros de calibración se aborta y debe reiniciarse desde el principio. Los parámetros calculados exitosamente se almacenan en la memoria no volátil del SCD30 teniendo el efecto de que después de un reinicio los parámetros previamente encontrados para ASC siguen presentes. Para más detalles sobre la calibración, por favor consulta la [Descripción de Interfaz del Módulo Sensor Sensirion SCD30](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

Hay dos muestras ino en la carpeta de biblioteca SCD30, puedes ejecutar el `SCD30_auto_calibration.ino` para iniciar la calibración.

### Jugar Con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

| Wio Terminal | Grove-CO2 & T&H SCD30 |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **Paso 2.** Conecta Grove-CO2 & T&H SCD30 al puerto Grove **I2C** del Wio Terminal.

- **Paso 3.** Conecta el Wio Terminal a la PC a través del cable USB Type-C.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/WT-SCD30.png"/></div>

#### Software

- **Paso 1.** Sigue [**ArduPy Getting Started**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy esté flasheado en Wio Terminal. Para más información, por favor sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip install Seeed-Studio/seeed-ardupy-scd30
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-scd30.py`:

```python
from arduino import grove_scd30
from machine import LCD
from machine import Sprite
import time

scd30 = grove_scd30()
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("SCD30 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- CO2 Level: ", 20, 50)
        spr.drawString("- Temperature: ", 20, 80)
        spr.drawString("- Humidity: ", 20, 110)

        if(scd30.isAvailable()):
            data = scd30.getCarbonDioxideConcentration()
            spr.drawFloat(data[0], 2,220,50) # CO2
            spr.drawFloat(data[1], 2, 220,80)
            spr.drawFloat(data[2], 2, 220,110)
            spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("\nCarbon Dioxide Concentration:", data[0])
        print("Temperature:", data[1])
        print("Humidity:", data[2])

if __name__ == "__main__":
    main()
```

- **Paso 4.** Guarda el `ArduPy-scd30.py` en una ubicación que conozcas. Ejecuta el siguiente comando y **reemplaza** `<YourPythonFilePath>` con la ubicación de tu `ArduPy-scd30.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
```

- **Paso 5.** Veremos los 3 valores de datos mostrados en la terminal como se muestra a continuación, y mostrándose en la pantalla LCD del Wio Terminal.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy
Carbon Dioxide Concentration: 2360.639
Temperature: 29.18707
Humidity: 66.88538

Carbon Dioxide Concentration: 2360.639
Temperature: 29.18707
Humidity: 66.88538

Carbon Dioxide Concentration: 2500.573
Temperature: 29.17372
Humidity: 66.61072
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/Ardupy-SCD30.png"/></div>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - Sensor de CO2, Temperatura y Humedad (SCD30) Archivo de esquemas](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip)
- **[PDF]** [Guía de Diseño SCD30](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)
- **[PDF]** [Hoja de Datos SCD30](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf)
- **[PDF]** [Descripción de Interfaz SCD30](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

