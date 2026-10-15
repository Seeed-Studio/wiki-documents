---
description: Este tutorial presenta el uso de la función de placa de expansión de la pantalla circular.
title: Uso de hardware
keywords:
  - Pantalla redonda
  - XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /seeedstudio_round_display_usage
sidebar_position: 2
last_update:
  date: 04/27/2023
  author: Citric
createdAt: '2023-04-27'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/es/seeedstudio_round_display_usage/
---

# Uso de la extensión Seeed Studio Round Display

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

Este tutorial explicará en detalle cómo utilizar las funciones extendidas en la Round Display, incluyendo el uso de la función RTC, la función de tarjeta SD y la función de pantalla.

## Introducción

El contenido de este tutorial es compatible con todos los productos de la serie XIAO. Así que puedes usar cualquier XIAO para completar el contenido de este Wiki.

Si estás usando la Round Display por primera vez, quizá quieras leer el contenido de preparación que escribimos anteriormente para ella y configurar el entorno de la biblioteca según este contenido para asegurarte de que puedas usar la Round Display sin problemas.

- **[Prep for using Seeed Studio Round Display for XIAO](https://wiki.seeedstudio.com/es/get_start_round_display#getting-started)**

### Instalar una tarjeta microSD

Round Display admite el uso de tarjetas microSD con formato **FAT32** y no mayores de **32GB**. Al instalar una tarjeta microSD, el conector dorado de la tarjeta microSD debe insertarse hacia el interior de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### Instalar la batería del RTC

Round Display admite la función RTC y tiene un chip PCF8563T integrado. Si necesitas usar la función RTC, es posible que necesites una batería de botón para mantener el RTC en funcionamiento.

Recomendamos usar baterías de botón de la serie CR927 con el terminal positivo (plano) orientado hacia afuera y el negativo (superficie ligeramente sobresaliente) orientado hacia adentro al instalarlas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

:::note
La imagen anterior solo muestra la dirección de instalación de la batería, no una batería completamente instalada. La instalación correcta de la batería debe ser completamente insertada en el portabaterías.
:::

### Instalar la batería de alimentación

Round Display admite una batería de litio externa de 3,7 V. Y con un chip de gestión de energía integrado, la batería se puede cargar a través del puerto USB del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

La Round Display también tiene un indicador de carga. Tiene tres estados:

1. El indicador luminoso permanece siempre encendido con bajo brillo cuando la batería de litio no está conectada.
2. Conecta la batería de litio y la luz roja permanece siempre encendida con alto brillo cuando se está cargando la batería de litio.
3. La batería de litio está conectada y la luz se apaga cuando la batería está completamente cargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>

### Interruptor de la Round Display

También hay un interruptor en la Round Display. El interruptor se utiliza para controlar el encendido/apagado de la pantalla y la alimentación del XIAO. Cuando cambias el interruptor a OFF, la batería no alimentará al XIAO y la pantalla se apagará. Cuando cambias el interruptor a ON, la pantalla se encenderá y la batería alimentará al XIAO (siempre que se haya instalado una batería de alimentación) para garantizar que el programa se ejecute.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

:::note
La alimentación del XIAO en la descripción aquí se refiere a alimentar el XIAO a través de la Round Display. Si estás alimentando el XIAO directamente, entonces el interruptor de la Round Display no puede desconectar la alimentación del XIAO. Si quieres controlar todo el dispositivo mediante el interruptor de la Round Display, necesitas instalar la batería de alimentación en la Round Display.

Ten en cuenta también que algunos XIAO (como el XIAO ESP32C3) pueden requerir pulsar el botón Reset en el XIAO para empezar a funcionar cuando se apaga y se vuelve a encender para ejecutar un programa.
:::

### Diseño del circuito de la Round Display

En esta sección, interceptaremos el esquema del circuito del hardware de la Round Display e informaremos a los usuarios qué pines IO en el XIAO se utilizan en el hardware de la Round Display para evitar conflictos en el uso de los IO.

#### Pines de medición del voltaje de la batería

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

Para el diseño de la Round Display, utilizamos los pines **A0/D0** en el XIAO para conectarlos al circuito de la batería integrada. La carga restante de la batería se puede obtener leyendo el valor analógico de este pin.

#### Pines del circuito de la tarjeta SD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

La sección de la tarjeta SD utiliza los cuatro puertos IO del XIAO, que se usan como se muestra en la tabla siguiente.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">Ranura para tarjeta microSD</th>
        </tr>
        <tr>
            <td align="center">D2</td>
            <td align="center">CS</td>
        </tr>
        <tr>
            <td align="center">D8</td>
            <td align="center">SCK</td>
        </tr>
        <tr>
            <td align="center">D9</td>
            <td align="center">MISO</td>
        </tr>
        <tr>
            <td align="center">D10</td>
            <td align="center">MOSI</td>
        </tr>
    </table>
</div>

#### Pines del circuito RTC

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/68.png" style={{width:500, height:'auto'}}/></div>

La función RTC utiliza el protocolo IIC, por lo que ocupa los pines **D5 (SCL)** y **D4 (SDA)**.

#### Pines del circuito de la pantalla táctil

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/69.png" style={{width:400, height:'auto'}}/></div>

La sección de la pantalla táctil utiliza los cuatro puertos IO del XIAO, que se usan como se muestra en la tabla siguiente.

<div class="table-center">
  <table align="center">
    <tr>
        <th align="center">XIAO GPIO</th>
        <th align="center">Pantalla táctil</th>
    </tr>
    <tr>
        <td align="center">D4 (SDA)</td>
        <td align="center">IIC de la pantalla táctil</td>
    </tr>
    <tr>
        <td align="center">D5 (SCL)</td>
        <td align="center">IIC de la pantalla táctil</td>
    </tr>
    <tr>
        <td align="center">D3</td>
        <td align="center">LCD_DC</td>
    </tr>
    <tr>
        <td align="center">D1</td>
        <td align="center">LCD_CS</td>
    </tr>
    <tr>
        <td align="center">D7</td>
        <td align="center">TP_INT</td>
    </tr>
    <tr>
        <td align="center">D6</td>
        <td align="center">Retroiluminación de la pantalla</td>
    </tr>
  </table>
</div>

## Descripción general de la biblioteca Round Display

La gran mayoría del desarrollo de software de la Round Display se basa en el propio soporte de hardware de XIAO. Los gráficos se basan en la biblioteca TFT, la biblioteca LVGL y la biblioteca Arduino GFX.

Para facilitar a los usuarios el uso de las funciones de la Round Display, escribimos una biblioteca independiente que principalmente llama a las interfaces de las bibliotecas anteriores para reducir el umbral de desarrollo independiente por parte de los propios usuarios cuando lleguen a una etapa posterior. En este capítulo, nos centraremos en cuáles son las funciones de estas bibliotecas que preparé para la Round Display y cómo utilizarlas respectivamente.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

El archivo `lv_xiao_round_screen.h` es un archivo de cabecera en la biblioteca Round Display, que controla las funciones de visualización y táctiles de la pantalla.

Al principio del archivo se realiza una comprobación de definición de macro y está destinada a exigir que los desarrolladores que utilicen la Round Display necesiten seleccionar la biblioteca gráfica con la que quieren desarrollar al dibujar patrones en la pantalla. Hay dos opciones, **TFT** y **Arduino GFX**. Si eliges la biblioteca **TFT**, entonces es la que puede admitir **LVGL**.

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

La razón de este diseño es que ciertos XIAO tienen sus propias ventajas al dibujar patrones en diferentes bibliotecas gráficas. Por ejemplo, si estás usando el XIAO nRF52840, entonces puedes ser más eficiente en memoria y estable usando la biblioteca Arduino GFX. Para XIAO ESP32S3, un XIAO con gran memoria tiene una ventaja inherente al manejar bibliotecas gráficas como LVGL, y también puede dibujar patrones y interfaces de usuario más complejos.

Así que si necesitas dibujar un patrón usando Round Display, no olvides seleccionar la biblioteca gráfica que quieres usar y definirla al principio de tu programa de Arduino.

- Si quieres usar la biblioteca TFT o la biblioteca LVGL:

```cpp
#define USE_TFT_ESPI_LIBRARY
```

- Si quieres usar la biblioteca Arduino GFX:

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1. `void xiao_disp_init(void)`: Esta función se utiliza para inicializar la retroiluminación de la pantalla y rotar la pantalla a su posición inicial, con el color del plano posterior de la pantalla del dispositivo en negro sólido. Esta función generalmente no se usa sola, y en su lugar se utiliza la función `lv_xiao_disp_init()` cuando se necesita inicialización.

2. `void lv_xiao_disp_init(void)`: Inicializa la retroiluminación e inicializa el controlador de pantalla. Normalmente se utiliza para la inicialización de la pantalla.

3. `bool chsc6x_is_pressed(void)`: Esta función se utiliza para comprobar si la pantalla está siendo tocada y devuelve `Ture` si la pantalla está siendo tocada.

4. `void lv_xiao_touch_init(void)`: Esta función se utiliza para inicializar la pantalla táctil y su controlador.

5. `void chsc6x_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )`: Esta función se utiliza para obtener los puntos de coordenadas de la pantalla táctil.

### lv_hardware_test.h

El archivo `lv_hardware_test.h` es el archivo de cabecera en el ejemplo **HardwareTest** de la biblioteca Round Display. Este archivo de cabecera prepara la mayoría de las funciones de uso de hardware para Round Display.

Si quieres usar las funciones dentro de este archivo de cabecera, puedes copiar el archivo directamente al mismo directorio de archivos de tu archivo de Arduino.

1. `int32_t battery_level_percent(void)`: Llamando a esta función, puedes leer y calcular el porcentaje de carga de la batería para mostrar el nivel de batería en la aplicación.

2. `void lv_hardware_test(void)`: Esta función se utiliza para probar todas las funciones de hardware, incluyendo la visualización en pantalla, el toque de pantalla, el reloj RTC y el nivel de batería. Puedes consultar este método de escritura de función para completar el desarrollo de la función de Round Display que desees.

## Botón KE y GPIO

En la nueva versión de Round Display, hemos diseñado un interruptor KE para liberar selectivamente ciertos GPIO para su uso selectivo por parte del usuario.

El interruptor KE está diseñado en el medio de la ranura para tarjeta microSD y la fila de pines que se conectan al XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

El diseño del circuito para este interruptor se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

Esto significa que cuando el interruptor está cerrado **(cambiado al lado ON)** entonces la función de lectura de voltaje de la batería y la función de retroiluminación de la pantalla de Round Display se vuelven disponibles.

Cuando el interruptor está desconectado **(cambiado al lado digital)**, entonces los pines A0 y D6 en el XIAO están en estado disponible.

## Medir el voltaje de la batería

Debido a la falta de pines IO en el XIAO, la mayoría de los XIAO no pueden medir el voltaje de la batería, aunque el chip de gestión de energía está configurado en algunos XIAO para permitir baterías externas.

Pero si eliges usar Round Dislay y alimentar el XIAO a través de la pantalla, entonces medir el voltaje de la batería se hará realidad.

A continuación se muestra un programa de ejemplo para medir el voltaje de la batería. La función `battery_level_percent()` se selecciona del archivo `lv_hardware_test.h`.

```cpp
#define NUM_ADC_SAMPLE 20           // Sampling frequency
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge

int32_t battery_level_percent(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V ref  1/4 Gain
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = 2400 * adc_raw / (1<<12);
#elif defined(ARDUINO_SEEED_XIAO_RP2040)
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = RP2040_VREF * adc_raw / (1<<12);
#endif
  int32_t level = (mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL-BATTERY_DEFICIT_VOL); // 1850 ~ 2100
  level = (level<0) ? 0 : ((level>100) ? 100 : level); 
  return level;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while(!Serial);

  analogReadResolution(12);
}

void loop() {
  // put your main code here, to run repeatedly:
  int32_t batteryVal = battery_level_percent();
  Serial.print("The percentage of power remaining is: ");
  Serial.print(batteryVal);
  Serial.print(" %");
  Serial.println();
  delay(1000);
}
```

:::tip
Este programa no es un programa universal, y el porcentaje de batería medido puede no ser preciso. Esto se debe a que cada uno utiliza diferentes baterías, chips y placas de desarrollo, por lo que es posible que necesites modificar el programa de acuerdo con la situación real al ejecutar este programa. Por favor, consulta la sección [program annotation](#program-annotation) de esta sección para el método de modificación.
:::

Selecciona la placa XIAO que estás utilizando, sube el programa, abre el monitor serie y ajusta la velocidad en baudios a **115200**. Si tienes la batería conectada y encendida, deberías poder ver el voltaje de la batería en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### Anotación del programa

Este código utiliza un ADC para medir el voltaje de la batería y calcular el porcentaje de nivel de batería. La implementación varía según la plataforma de hardware:

- Para las plataformas ESP32-S3 y ESP32-C3, se utiliza la función `analogReadMilliVolts` para leer los valores de voltaje analógico, y luego se toma el valor promedio de múltiples muestras para obtener el voltaje promedio de la batería.
- Para las plataformas Seeeduino XIAO NRF52840, primero se utiliza la función `analogReference` para especificar el voltaje de referencia como 2.4V, y luego se utiliza la función analogRead para leer los valores de voltaje analógico, y se calcula el voltaje promedio de la batería.
- Para la plataforma Seeeduino XIAO RP2040, se utiliza la función `analogRead` para leer los valores de voltaje analógico, y se calcula el voltaje promedio de la batería.

En cualquier caso, se calcula el voltaje promedio de la batería y luego se calcula el porcentaje de nivel de batería usando la fórmula `(mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL - BATTERY_DEFICIT_VOL)`, donde mvolts es el voltaje promedio de la batería, `BATTERY_DEFICIT_VOL` es el voltaje mínimo de funcionamiento de la batería y `BATTERY_FULL_VOL` es el voltaje máximo de la batería. Finalmente, el código limita el porcentaje de nivel de batería para asegurar que esté entre 0 y 100.

En resumen, los siguientes parámetros determinan la precisión de la medición de voltaje cuando se utiliza este programa.

```c
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge
```

Lo primero que necesitas hacer es obtener el valor analógico de la batería que compraste cuando está en estado de pérdida de carga/carga completa.

Puedes obtener el valor analógico de la batería usando esta función. Necesitas obtener el valor una vez tanto en estado de batería llena como en estado de batería en déficit.

```cpp
int32_t battery_test(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V ref  1/4 Gain
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = 2400 * adc_raw / (1<<12);
#elif defined(ARDUINO_SEEED_XIAO_RP2040)
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = RP2040_VREF * adc_raw / (1<<12);
#endif
  return mvolts;
}
```

:::tip
La función `battery_test()` es en realidad la función `battery_level_percent()` con las dos últimas líneas de código para calcular el porcentaje eliminadas.
:::

Luego solo tienes que modificar el valor del programa correspondiente al valor que mediste.

Si estás usando el **XIAO RP2040**, entonces un paso adicional que tendrás que hacer es usar un voltímetro para medir el voltaje real en el pin de 3.3V del XIAO RP2040. El valor de voltaje medido se convierte en unidades de **mV**, y se modifica el programa correspondiente.

Por ejemplo, aquí están las mediciones reales que tomé usando mi XIAO RP2040 y batería.

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```

## Función RTC

En la parte de la función RTC, principalmente la dividimos en las siguientes cuatro secciones para introducir su aplicación.

1. Primero, para XIAO sin función de red, puedes corregir el RTC configurando manualmente la hora inicial.
2. Luego alimenta el RTC con la ayuda de una batería de botón para obtener la hora precisa de forma continua.
3. Para XIAO con función de red, puedes usar la función de red para corregir la hora.
4. Dibuja una esfera de reloj sencilla combinando la función RTC.

### Calibración manual fuera de línea del RTC

El siguiente es un programa de ejemplo para calibrar manualmente la hora del RTC. Los ajustes se colocan en la función `Setup()` para garantizar que el programa de configuración se ejecute solo una vez. Este procedimiento es la forma más eficiente de establecer la hora inicial del RTC para XIAO sin capacidad de red.

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Init Serial
  Serial.begin(115200);
  while(!Serial);
  delay(50);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();

  // Set RTC Date
  I2C_BM8563_DateTypeDef dateStruct;
  dateStruct.weekDay = 3;
  dateStruct.month = 4;
  dateStruct.date = 26;
  dateStruct.year = 2023;
  rtc.setDate(&dateStruct);

  // Set RTC Time
  I2C_BM8563_TimeTypeDef timeStruct;
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);

  Serial.println("RTC time calibration complete!");
}

void loop() {

}
```

Después de cargar el programa y encender el monitor serie, el tiempo del RTC comenzará a calibrarse. Cuando aparezca **RTC time calibration complete!**, la calibración estará completa.

### Obtener la hora del RTC

El siguiente programa obtiene la hora del RTC cada segundo y la imprime en el monitor serie.

:::tip
El procedimiento para obtener la hora del RTC se puede utilizar después del procedimiento de calibración manual anterior. El procedimiento de calibración de la hora solo necesita ejecutarse una vez y el reloj RTC podrá funcionar continuamente bajo la alimentación de la batería de botón, después de lo cual solo necesitas usar el procedimiento para obtener la hora y así obtener la hora exacta.

No recomendamos usar el programa para calibrar la hora y obtener la hora juntos, de modo que cuando el XIAO se encienda, ambos se restablecerán una vez según la hora que configuraste, y entonces nunca obtendrás la hora precisa.
:::

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Init Serial
  Serial.begin(115200);
  delay(50);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // Get RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  Serial.printf("%04d/%02d/%02d %02d:%02d:%02d\n",
              dateStruct.year,
              dateStruct.month,
              dateStruct.date,
              timeStruct.hours,
              timeStruct.minutes,
              timeStruct.seconds
              );
#else
  Serial.print(dateStruct.year);
  Serial.print(", ");
  Serial.print(dateStruct.month);
  Serial.print(", ");
  Serial.print(dateStruct.date);
  Serial.print(", ");
  Serial.print(timeStruct.hours);
  Serial.print(", ");
  Serial.print(timeStruct.minutes);
  Serial.print(", ");
  Serial.print(timeStruct.seconds);
  Serial.println();
#endif

  // Wait
  delay(1000);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/71.png" style={{width:700, height:'auto'}}/></div>

### Calibración de la hora del RTC mediante red

Para XIAO, que tiene capacidades de red, las cosas parecen volverse mucho más fáciles. Con una red, ni siquiera necesitas usar una batería de botón para mantener el RTC funcionando desde el primer momento, solo necesitas sincronizar la hora por red cada vez que lo enciendas.

El siguiente es un programa de ejemplo para la sincronización horaria por red y la salida de la lectura de la hora del RTC en el monitor serie.

:::caution
Este programa solo es aplicable a la serie XIAO ESP32. Porque solo esta serie tiene función de red.
:::

```cpp
#include "I2C_BM8563.h"
#include <WiFi.h>

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

const char* ntpServer = "time.cloudflare.com";
const char *ssid     = "YOUR_SSID";
const char *password = "YOUR_PASSWORD";

void setup() {
  // Init Serial
  Serial.begin(115200);
  delay(50);

  // Connect to an access point
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi ");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" CONNECTED");

  // Set ntp time to local
  configTime(9 * 3600, 0, ntpServer);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();

  // Get local time
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    // Set RTC time
    I2C_BM8563_TimeTypeDef timeStruct;
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);

    // Set RTC Date
    I2C_BM8563_DateTypeDef dateStruct;
    dateStruct.weekDay = timeInfo.tm_wday;
    dateStruct.month   = timeInfo.tm_mon + 1;
    dateStruct.date    = timeInfo.tm_mday;
    dateStruct.year    = timeInfo.tm_year + 1900;
    rtc.setDate(&dateStruct);
  }
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // Get RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
    Serial.printf("%04d/%02d/%02d %02d:%02d:%02d\n",
                dateStruct.year,
                dateStruct.month,
                dateStruct.date,
                timeStruct.hours,
                timeStruct.minutes,
                timeStruct.seconds
               );
#else
     Serial.print(dateStruct.year);
     Serial.print(", ");
     Serial.print(dateStruct.month);
     Serial.print(", ");
     Serial.print(dateStruct.date);
     Serial.print(", ");
     Serial.print(timeStruct.hours);
     Serial.print(", ");
     Serial.print(timeStruct.minutes);
     Serial.print(", ");
     Serial.print(timeStruct.seconds);
     Serial.println();
#endif

  // Wait
  delay(1000);
}
```

Cuando uses este programa, rellena el nombre y la contraseña de la red según tu situación real. Después de cargar el programa, abre el monitor serie y ajusta la velocidad en baudios a 115200, entonces podrás ver la hora exacta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>

### Esfera sencilla basada en la hora del RTC

El siguiente programa es un programa de esfera basado en el dibujo del reloj RTC.

:::caution
El siguiente programa solo es compatible con XIAO excepto con XIAO nRF52840. XIAO nRF52840 actualmente tiene problemas de compatibilidad con TFT. Pero puedes considerar usar la biblioteca Arduino GFX o LVGL para dibujar las esferas.
:::

```cpp
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "I2C_BM8563.h"
#include <Wire.h>

#define USE_TFT_ESPI_LIBRARY

#include "lv_xiao_round_screen.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
#include "esp_wifi.h"
#include "WiFi.h"

  const char *ntpServer = "time.cloudflare.com";
  const char *ssid     = "YOUR_SSID";
  const char *password = "YOUR_PASSWORD";
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "This procedure is not applicable to XIAO nRF52840 series, please replace other XIAO and try again."
#endif


//TFT_eSPI tft = TFT_eSPI();  // Invoke library, pins defined in User_Setup.h
TFT_eSprite face = TFT_eSprite(&tft);

#define CLOCK_X_POS 0
#define CLOCK_Y_POS 0

#define CLOCK_FG   TFT_SKYBLUE
#define CLOCK_BG   TFT_NAVY
#define SECCOND_FG TFT_RED
#define LABEL_FG   TFT_GOLD

#define CLOCK_R       240.0f / 2.0f // Clock face radius (float type)
#define H_HAND_LENGTH CLOCK_R/2.0f
#define M_HAND_LENGTH CLOCK_R/1.4f
#define S_HAND_LENGTH CLOCK_R/1.3f

// Calculate 1 second increment angles. Hours and minute hand angles
// change every second so we see smooth sub-pixel movement
#define SECOND_ANGLE 360.0 / 60.0
#define MINUTE_ANGLE SECOND_ANGLE / 60.0
#define HOUR_ANGLE   MINUTE_ANGLE / 12.0

// Sprite width and height
#define FACE_W CLOCK_R * 2 + 1
#define FACE_H CLOCK_R * 2 + 1

// Time h:m:s
uint8_t h = 0, m = 0, s = 0;

float time_secs = h * 3600 + m * 60 + s;

// Time for next tick
uint32_t targetTime = 0;

// =========================================================================
// Setup
// =========================================================================
void setup() {
  Serial.begin(115200);
  Serial.println("Booting...");

  // Initialise the screen
  tft.init();

  // Ideally set orientation for good viewing angle range because
  // the anti-aliasing effectiveness varies with screen viewing angle
  // Usually this is when screen ribbon connector is at the bottom
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);

  // Create the clock face sprite
  //face.setColorDepth(8); // 8 bit will work, but reduces effectiveness of anti-aliasing
  face.createSprite(FACE_W, FACE_H);

  // Draw the whole clock - NTP time not available yet
  renderFace(time_secs);

#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  WiFi.begin(ssid, password);
  while ( WiFi.status() != WL_CONNECTED ) 
  {
    delay ( 500 );
    Serial.print ( "." );
  }
  configTime(8 * 3600, 0, ntpServer);
#endif

  Wire.begin();
  rtc.begin();

//  struct tm timeInfo;
  I2C_BM8563_TimeTypeDef timeStruct;
  I2C_BM8563_DateTypeDef dateStruct;

// In case of XIAO ESP32 series, use network timing.
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);
  }
#else
  // Set RTC time, Other XIAOs do not have network functions and require manual time alignment.
  // Please note that the setting time should be set only once.
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);
#endif

  targetTime = millis() + 100;
  rtc.getTime(&timeStruct);
  time_secs = timeStruct.hours * 3600 + timeStruct.minutes * 60 + timeStruct.seconds;
}

// =========================================================================
// Loop
// =========================================================================
void loop() {
  // Update time periodically
  if (targetTime < millis()) {

    // Update next tick time in 100 milliseconds for smooth movement
    targetTime = millis() + 100;

    // Increment time by 100 milliseconds
    time_secs += 0.100;

    // Midnight roll-over
    if (time_secs >= (60 * 60 * 24)) time_secs = 0;

    // All graphics are drawn in sprite to stop flicker
    renderFace(time_secs);

    I2C_BM8563_DateTypeDef dateStruct;
    I2C_BM8563_TimeTypeDef timeStruct;

    // Get RTC
    rtc.getTime(&timeStruct);

    // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
    Serial.printf("%02d:%02d:%02d\n",
                timeStruct.hours,
                timeStruct.minutes,
                timeStruct.seconds
               );
#else
     Serial.print(timeStruct.hours);
     Serial.print(", ");
     Serial.print(timeStruct.minutes);
     Serial.print(", ");
     Serial.print(timeStruct.seconds);
     Serial.println();
#endif
  }
}

// =========================================================================
// Draw the clock face in the sprite
// =========================================================================
static void renderFace(float t) {
  float h_angle = t * HOUR_ANGLE;
  float m_angle = t * MINUTE_ANGLE;
  float s_angle = t * SECOND_ANGLE;

  // The face is completely redrawn - this can be done quickly
  face.fillSprite(TFT_BLACK);

  // Draw the face circle
  face.fillSmoothCircle( CLOCK_R, CLOCK_R, CLOCK_R, CLOCK_BG );

  // Set text datum to middle centre and the colour
  face.setTextDatum(MC_DATUM);

  // The background colour will be read during the character rendering
  face.setTextColor(CLOCK_FG, CLOCK_BG);

  // Text offset adjustment
  constexpr uint32_t dialOffset = CLOCK_R - 10;

  float xp = 0.0, yp = 0.0; // Use float pixel position for smooth AA motion

  // Draw digits around clock perimeter
  for (uint32_t h = 1; h <= 12; h++) {
    getCoord(CLOCK_R, CLOCK_R, &xp, &yp, dialOffset, h * 360.0 / 12);
    face.drawNumber(h, xp, 2 + yp);
  }

  // Add text (could be digital time...)
  face.setTextColor(LABEL_FG, CLOCK_BG);
  face.drawString("TFT_eSPI", CLOCK_R, CLOCK_R * 0.75);

  // Draw minute hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, M_HAND_LENGTH, m_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Draw hour hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, H_HAND_LENGTH, h_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Draw the central pivot circle
  face.fillSmoothCircle(CLOCK_R, CLOCK_R, 4, CLOCK_FG);

  // Draw cecond hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, S_HAND_LENGTH, s_angle);
  face.drawWedgeLine(CLOCK_R, CLOCK_R, xp, yp, 2.5, 1.0, SECCOND_FG);
  face.pushSprite(0, 0, TFT_TRANSPARENT);
}

// =========================================================================
// Get coordinates of end of a line, pivot at x,y, length r, angle a
// =========================================================================
// Coordinates are returned to caller via the xp and yp pointers
#define DEG2RAD 0.0174532925
void getCoord(int16_t x, int16_t y, float *xp, float *yp, int16_t r, float a)
{
  float sx1 = cos( (a - 90) * DEG2RAD);
  float sy1 = sin( (a - 90) * DEG2RAD);
  *xp =  sx1 * r + x;
  *yp =  sy1 * r + y;
}
```

En el código anterior necesitarás hacer algunas pequeñas modificaciones dependiendo del tipo de placa de desarrollo que estés utilizando. Si estás utilizando un XIAO con capacidades de red, tendrás que configurar el nombre y la contraseña de la red WiFi. Si no, tendrás que ajustar manualmente la hora en tiempo real.

Sube el programa y verás la esfera que avanza automáticamente según la hora establecida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## Función de tarjeta SD

La Round Display admite el uso de tarjetas microSD para leer y escribir datos. Antes de usar la tarjeta microSD, formatea la tarjeta microSD al formato **FAT32** para asegurarte de que pueda ser reconocida y utilizada correctamente.

### Toda la serie XIAO (además de la serie XIAO nRF52840)

Esta sección se aplica a todos los XIAO (además de la serie XIAO nRF52840), y es un programa sencillo para leer y escribir archivos.

```cpp
#include <SPI.h>
#include <SD.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);

  // Display initialization
  tft.init();

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);
  if (!SD.begin(D2)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("/test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

Este programa creará un nuevo archivo llamado **test.txt** en tu tarjeta microSD y escribirá el contenido **testing 1, 2, 3.**. Finalmente, leerá el archivo e imprimirá el contenido del archivo a través del monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

:::caution
Verás que en el programa para la tarjeta SD se utiliza la inicialización de la pantalla TFT. Por favor, no pienses que esto es inútil y que se puede eliminar, en realidad es necesario para usar la tarjeta SD, de lo contrario obtendrás un mensaje de error indicando que no se pudo montar la tarjeta microSD.

Debido al diseño del hardware, algunos de los pines están en bajo por defecto, lo que hará que el programa de montaje de la microSD piense que no hay una resistencia pull-up, provocando que el montaje falle. Así que cuando utilices la función de tarjeta SD con la Round Display, asegúrate de inicializar la pantalla antes de inicializar la tarjeta SD.
:::

### XIAO nRF52840

Si estás utilizando la serie XIAO nRF52840, es posible que necesites descargar por separado la [biblioteca SdFat](https://github.com/greiman/SdFat) para poder utilizar la función de tarjeta SD.

```cpp
#include <SPI.h>
#include "SdFat.h"
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // Display initialization
  tft.init();

  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

### XIAO ESP32S3 & XIAO ESP32S3 Sense & XIAO ESP32C3

Dado que la serie ESP32 tiene un soporte de sistema de archivos muy potente, hemos escrito una serie de ejemplos para el XIAO ESP32 sobre cómo utilizar el sistema de archivos y guardar en la tarjeta microSD, que puedes aprender a usar en los enlaces siguientes.

- **[File System and XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem)**

Los tutoriales de este Wiki se aplican a la serie XIAO ESP32, pero como ahora quieres utilizar la ranura para tarjeta SD de la Round Display, y el tutorial anterior se centra en el uso de la ranura para tarjeta SD del XIAO ESP32S3 Sense, tendrás que modificar la inicialización de la tarjeta SD a la siguiente línea.

```c
// Display initialization
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

:::tip
No olvides que también necesitas inicializar primero la pantalla TFT para utilizar la función de tarjeta SD.
:::

## Función de pantalla

En la parte de uso de la pantalla, los dos componentes principales se dividen en táctil y visualización.

### Función táctil

La función táctil es una característica especial de la Round Display. Puedes utilizar la función táctil para realizar algunas operaciones de pulsar y mantener en la pantalla.

El siguiente programa se puede utilizar para mostrar el resultado de si la pantalla ha sido tocada o no.

```cpp
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  if(chsc6x_is_pressed()){
    Serial.println("The display is touched.");
  }
  else
    Serial.println("The display is not touched.");
  delay(50);
}
```

El siguiente programa es un ejemplo sencillo de una función táctil combinada con una función de visualización. Sube el siguiente programa y luego toca la pantalla; se dibujará un pequeño círculo en la ubicación donde se toque la pantalla.

:::caution
Si estás utilizando XIAO nRF52840, es posible que el siguiente programa basado en la visualización de la biblioteca TFT no funcione correctamente; tendrás que modificar el programa para utilizar la biblioteca Arduino GFX.
:::

```cpp
#include <TFT_eSPI.h>
#include <SPI.h>
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

lv_coord_t touchX, touchY;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();

  // Initialise the screen
  tft.init();

  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(chsc6x_is_pressed())
  {
    Serial.println("The display is touched.");
    chsc6x_get_xy(&touchX, &touchY);
    tft.drawCircle(touchX, touchY, 15, TFT_WHITE);
  }

  delay(50);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/81.gif" style={{width:500, height:'auto'}}/></div>

### Funciones de visualización

En cuanto a la parte de visualización, presentamos principalmente el uso de la biblioteca LVGL y la biblioteca TFT. Debido a la limitación de espacio, entraremos en detalles sobre cómo dibujar esferas complejas utilizando las bibliotecas gráficas compatibles en un nuevo Wiki.

[Using LVGL and TFT on the Seeed Studio Round Display for XIAO](https://wiki.seeedstudio.com/es/using_lvgl_and_tft_on_round_display)

Por supuesto, si solo quieres implementar algunos ejemplos sencillos, la biblioteca gráfica también tiene un conjunto muy amplio de ejemplos para tu referencia.

- [Ejemplo de biblioteca TFT](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Ejemplo de biblioteca Arduino GFX](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [Ejemplo de biblioteca LVGL](https://github.com/lvgl/lvgl/tree/master/examples)

Si ya tienes instaladas estas bibliotecas, puedes encontrar fácilmente los ejemplos dentro de **File->Example->library name** en el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

:::tip
Los ejemplos aquí son solo de referencia y no todos los ejemplos funcionarán necesariamente. Es posible que tengas que modificar el programa para que sea compatible con el pinout y la definición de hardware de la Round Display.
:::

## Soporte técnico y debate sobre el producto

### P1: ¿Por qué obtengo un error cuando utilizo XIAO nRF52840 (Sense)?

Al utilizar el contenido de este tutorial, pueden producirse dos tipos diferentes de problemas para el XIAO nRF52840.

1. Problemas de compatibilidad entre nRF52840 y la biblioteca TFT.

  Si estás utilizando la biblioteca TFT, compilas y subes sin ningún error, todo muy fluido. Pero cuando estás mostrando la imagen, descubres que no aparece nada. Entonces es posible que te hayas encontrado con un problema de compatibilidad entre nRF52840 y la biblioteca TFT. Esto significa que solo puedes sustituir el XIAO o utilizar la biblioteca Arduino GFX para mostrar la imagen.

2. Error de compilación causado por elegir la placa de desarrollo equivocada.

Si tienes problemas durante el proceso de compilación, el mensaje de error suele estar relacionado con un error de SPI, por ejemplo `'SPI_X' was not declared in this scope`. Entonces significa que estás eligiendo el tipo de placa de desarrollo equivocado. Para utilizar todo el contenido de este tutorial, necesitas utilizar la versión **non-mbed** del XIAO nRF52840. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### P2: Cuando se carga un programa para XIAO RP2040, aparece un error: unaligned opcodes detected in executable segment?

Modifica las opciones de carga de XIAO RP2040 según la configuración de la imagen siguiente. Todas las opciones funcionan bien excepto la opción predeterminada **Small (-Os) (standard)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

### P3: ¿Por qué obtengo un error de definición de pin cuando compilo un programa de pantalla circular para el XIAO SAMD21?

Cuando te encuentres con este error, actualiza el paquete de placa de desarrollo **Seeed SAMD** a la última versión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### P4: ¿Por qué la pantalla no muestra nada después de cargar el programa en XIAO ESP32C3?

Si no hay ningún problema con el programa y no se muestra nada después de cargarlo, puede que necesite reiniciarse. Simplemente pulsa el botón de reinicio en el XIAO ESP32C3.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
