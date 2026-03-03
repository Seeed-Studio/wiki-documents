---
description: Este tutorial introduce el uso de la función de placa de expansión de la pantalla circular.
title: Uso del Hardware
keywords:
- Round display
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/seeedstudio_round_display_usage
last_update:
  date: 04/27/2023
  author: Citric
---

# Uso de la extensión Seeed Studio Round Display

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

Este tutorial explicará en detalle cómo usar las funciones extendidas en el Round Display, incluyendo el uso de la función RTC, función de tarjeta SD y función de pantalla.

## Comenzando

El contenido de este tutorial es compatible con todos los productos de la serie XIAO. Por lo tanto, puedes usar cualquier XIAO para completar el contenido de este Wiki.

Si estás usando Round Display por primera vez, es posible que quieras leer el contenido de preparación que escribimos anteriormente y configurar el entorno de la biblioteca según este contenido para asegurarte de que puedas usar Round Display sin problemas.

- **[Preparación para usar Seeed Studio Round Display para XIAO](https://wiki.seeedstudio.com/es/get_start_round_display#getting-started)**

### Instalar una tarjeta microSD

Round Display admite el uso de tarjetas microSD con formato **FAT32** no mayores a **32GB**. Al instalar una tarjeta microSD, el contacto dorado de la tarjeta microSD debe insertarse hacia el interior de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### Instalar la batería RTC

Round Display admite función RTC, y tiene un chip PCF8563T integrado. Si necesitas usar la función RTC, es posible que necesites una batería de celda de moneda para mantener el RTC funcionando.

Recomendamos usar baterías de celda tipo botón de la serie CR927 con el terminal positivo (plano) hacia afuera y el terminal negativo (superficie ligeramente sobresaliente) hacia adentro cuando se instale.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

:::note
La imagen anterior solo muestra la dirección de instalación de la batería, no la batería completamente instalada. La instalación correcta de la batería debe estar completamente insertada en el soporte de la batería.
:::

### Instalar batería de alimentación

Round Display admite batería de litio externa de 3.7V. Y con un chip de gestión de energía integrado, la batería puede cargarse a través del puerto USB de XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

El Round Display también tiene un indicador de carga. Tiene tres estados:

1. La luz indicadora está siempre encendida con baja intensidad cuando la batería de litio no está conectada.
2. Conecta la batería de litio y la luz roja está siempre encendida con alta intensidad cuando se carga la batería de litio.
3. La batería de litio está conectada y la luz se apaga cuando la batería está completamente cargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>

### Interruptor del Round Display

También hay un interruptor en el Round Display. El interruptor se usa para controlar el encendido/apagado de la pantalla y la alimentación al XIAO. Cuando cambias el interruptor a OFF, la batería no alimentará el XIAO y la pantalla se apagará. Cuando cambias el interruptor a ON, la pantalla se encenderá y la batería alimentará el XIAO (siempre que esté instalada una batería de alimentación) para asegurar que el programa funcione.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

:::note
Alimentar el XIAO en la descripción aquí se refiere a alimentar el XIAO a través del Round Display. Si estás alimentando el XIAO directamente, entonces el interruptor en el Round Display no puede desconectar la alimentación al XIAO. Si quieres controlar todo el dispositivo a través del interruptor en el Round Display, necesitas instalar la batería de alimentación en el Round Display.

También ten en cuenta que algunos XIAOs (como el XIAO ESP32C3) pueden requerir presionar el botón Reset en el XIAO para comenzar a funcionar cuando se apaga y se enciende nuevamente para ejecutar un programa.
:::

### Diseño del circuito del Round Display

En esta sección, interceptaremos el esquema del circuito del hardware del Round Display e informaremos a los usuarios qué pines IO en XIAO se usan en el hardware del Round Display para evitar conflictos en el uso de IO.

#### Pines para medir voltaje de batería

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

Para el diseño del Round Display, usamos los pines **A0/D0** en el XIAO para conectar al circuito de la batería integrada. La carga restante de la batería se puede obtener leyendo el valor analógico de este pin.

#### Pines del circuito de tarjeta SD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

La sección de tarjeta SD usa los cuatro puertos IO en el XIAO, que se usan como se muestra en la tabla a continuación.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">Ranura de tarjeta microSD</th>
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

#### Pines del circuito de pantalla táctil

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/69.png" style={{width:400, height:'auto'}}/></div>

La sección de pantalla táctil utiliza los cuatro puertos IO del XIAO, que se usan como se muestra en la tabla a continuación.

<div class="table-center">
  <table align="center">
    <tr>
        <th align="center">XIAO GPIO</th>
        <th align="center">Pantalla táctil</th>
    </tr>
    <tr>
        <td align="center">D4 (SDA)</td>
        <td align="center">IIC de pantalla táctil</td>
    </tr>
    <tr>
        <td align="center">D5 (SCL)</td>
        <td align="center">IIC de pantalla táctil</td>
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
        <td align="center">Retroiluminación de pantalla</td>
    </tr>
  </table>
</div>

## Descripción general de la biblioteca Round Display

La gran mayoría del desarrollo de software de Round Display se basa en el soporte de hardware propio de XIAO. Los gráficos se basan en la biblioteca TFT, la biblioteca LVGL, y la biblioteca Arduino GFX.

Para facilitar a los usuarios el uso de las funciones en Round Display, escribimos una biblioteca separada que principalmente llama a las interfaces de las bibliotecas mencionadas anteriormente para reducir el umbral de desarrollo independiente por parte de los usuarios cuando lleguen a una etapa posterior. En este capítulo, nos enfocaremos en cuáles son las funciones de estas bibliotecas que preparé para Round Display y cómo usarlas respectivamente.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

El archivo `lv_xiao_round_screen.h` es un archivo de cabecera en la biblioteca Round Display, que controla las funciones de pantalla y táctil de la pantalla.

Se realiza una verificación de definición de macro al comienzo del archivo y está destinada a requerir que los desarrolladores que usen Round Display necesiten seleccionar la biblioteca de gráficos que desean desarrollar al dibujar patrones de pantalla. Hay dos opciones, **TFT** y **Arduino GFX**. Si eliges la biblioteca **TFT**, entonces es la que puede soportar **LVGL**.

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

La razón de este diseño es que ciertos XIAO tienen sus propias ventajas al dibujar patrones en diferentes bibliotecas gráficas. Por ejemplo, si estás usando el XIAO nRF52840, entonces podrías ser más eficiente en memoria y estable usando la biblioteca Arduino GFX. Para el XIAO ESP32S3, un XIAO de gran memoria tiene una ventaja inherente en el manejo de bibliotecas gráficas como LVGL, y también es capaz de dibujar patrones y UI más complejos.

Así que si necesitas dibujar un patrón usando Round Display, no olvides seleccionar la biblioteca gráfica que quieres usar y definirla al comienzo de tu programa Arduino.

- Si quieres usar la biblioteca TFT o la biblioteca LVGL:

```cpp
#define USE_TFT_ESPI_LIBRARY
```

- Si quieres usar la biblioteca Arduino GFX:

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1. `void xiao_disp_init(void)`: Esta función se utiliza para inicializar la retroiluminación de la pantalla y rotar la pantalla a su posición inicial, con el color del plano posterior de la pantalla del dispositivo siendo negro sólido. Esta función generalmente no se usa sola, y se utiliza la función `lv_xiao_disp_init()` en su lugar cuando se necesita inicialización.

2. `void lv_xiao_disp_init(void)`: Inicializa la retroiluminación e inicializa el controlador de la pantalla. Típicamente utilizada para la inicialización de la pantalla.

3. `bool chsc6x_is_pressed(void)`: Esta función se utiliza para verificar si la pantalla está siendo tocada, y devuelve `True` si la pantalla está siendo tocada.

4. `void lv_xiao_touch_init(void)`: Esta función se utiliza para inicializar la pantalla táctil y su controlador.

5. `void chsc6x_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )`: Esta función se utiliza para obtener los puntos de coordenadas de la pantalla táctil.

### lv_hardware_test.h

El archivo `lv_hardware_test.h` es el archivo de cabecera en el ejemplo **HardwareTest** en la biblioteca Round Display. Este archivo de cabecera prepara la mayoría de las funciones de uso de hardware para Round Display.

Si deseas usar las funciones dentro de este archivo de cabecera, puedes copiar el archivo directamente al mismo directorio de archivos de tu archivo Arduino.

1. `int32_t battery_level_percent(void)`: Al llamar a esta función, puedes leer y calcular el porcentaje de carga de la batería para mostrar el nivel de batería en la aplicación.

2. `void lv_hardware_test(void)`: Esta función se utiliza para probar todas las funciones de hardware, incluyendo la pantalla, el toque de pantalla, el reloj RTC y el nivel de batería. Puedes referirte a este método de escritura de función para completar el desarrollo de la función Round Display que desees.

## Botón KE & GPIO

En la nueva versión del Round Display, hemos diseñado un interruptor KE para liberar selectivamente ciertos GPIOs para uso selectivo por parte del usuario.

El interruptor KE está diseñado en el medio de la ranura de la tarjeta microSD y la fila de pines que se conectan al XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

El diseño del circuito para este interruptor se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

Esto significa que cuando el interruptor está cerrado **(cambiado al lado ON)** entonces la función de lectura de voltaje de batería del Round Display y la función de retroiluminación de la pantalla se vuelven disponibles.

Cuando el interruptor está desconectado **(cambiado al lado digital)**, entonces los pines A0 y D6 en el XIAO están en estados disponibles.

## Medir voltaje de batería

Debido a la falta de pines IO en el XIAO, la mayoría de los XIAOs no pueden medir el voltaje de la batería, aunque el chip de gestión de energía está configurado en algunos XIAOs para permitir baterías externas.

Pero si eliges usar Round Display y alimentar el XIAO a través de la pantalla, entonces medir el voltaje de la batería se convertirá en una realidad.

El siguiente es un programa de ejemplo para medir el voltaje de la batería. La función `battery_level_percent()` está seleccionada del archivo `lv_hardware_test.h`.

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
Este programa no es un programa universal, y el porcentaje de batería medido puede no ser preciso. Esto se debe a que cada persona usa diferentes baterías, chips y placas de desarrollo, por lo que es posible que necesites modificar el programa según la situación real al ejecutar este programa. Por favor, consulta la sección de [anotación del programa](#program-annotation) de esta sección para el método de modificación.
:::

Selecciona la placa XIAO que estés usando, sube el programa, abre el monitor serie y establece la velocidad de baudios a **115200**. Si tienes la batería conectada y encendida, deberías poder ver el voltaje de la batería en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### Anotación del programa

Este código utiliza un ADC para medir el voltaje de la batería y calcular el porcentaje del nivel de batería. La implementación varía dependiendo de la plataforma de hardware:

- Para las plataformas ESP32-S3 y ESP32-C3, se utiliza la función `analogReadMilliVolts` para leer los valores de voltaje analógico, y luego se toma el valor promedio de múltiples muestras para obtener el voltaje promedio de la batería.
- Para las plataformas Seeeduino XIAO NRF52840, primero se utiliza la función `analogReference` para especificar el voltaje de referencia como 2.4V, y luego se utiliza la función analogRead para leer los valores de voltaje analógico, y se calcula el voltaje promedio de la batería.
- Para la plataforma Seeeduino XIAO RP2040, se utiliza la función `analogRead` para leer los valores de voltaje analógico, y se calcula el voltaje promedio de la batería.

En cualquier caso, se calcula el voltaje promedio de la batería, y luego se calcula el porcentaje del nivel de batería usando la fórmula `(mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL - BATTERY_DEFICIT_VOL)`, donde mvolts es el voltaje promedio de la batería, `BATTERY_DEFICIT_VOL` es el voltaje mínimo de operación de la batería, y `BATTERY_FULL_VOL` es el voltaje máximo de la batería. Finalmente, el código limita el porcentaje del nivel de batería para asegurar que esté entre 0 y 100.

En resumen, los siguientes parámetros determinan la precisión de la medición de voltaje al usar este programa.

```c
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge
```

Lo primero que necesitas hacer es obtener el valor analógico de la batería que compraste cuando está descargada/completamente cargada.

Puedes obtener el valor analógico de la batería usando esta función. Necesitas obtener el valor una vez en ambos estados de batería: completa y deficitaria.

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

Luego simplemente modifica el valor del programa correspondiente al valor que mediste.

Si estás usando el **XIAO RP2040**, entonces un paso adicional que necesitarás hacer es usar un voltímetro para medir el voltaje real en el pin de 3.3V del XIAO RP2040. El valor de voltaje medido se convierte a unidades de **mV**, y se modifica el programa correspondiente.

Por ejemplo, aquí están las mediciones reales que tomé usando mi XIAO RP2040 y batería.

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```

## Función RTC

En la parte de la función RTC, principalmente la dividimos en las siguientes cuatro secciones para introducir su aplicación.

1. Primero es para XIAO sin función de red, puedes corregir el RTC configurando manualmente el tiempo inicial.
2. Luego alimentar el RTC con la ayuda de una batería de celda de moneda para obtener el tiempo preciso continuamente.
3. Para XIAO con función de red, puedes usar la función de red para corregir el tiempo.
4. Dibujar una esfera de reloj simple combinando la función RTC.

### Calibración manual fuera de línea del RTC

El siguiente es un programa de muestra para calibrar manualmente el tiempo del RTC. Las configuraciones se colocan en la función `Setup()` para asegurar que el programa de configuración se ejecute solo una vez. Este procedimiento es la forma más eficiente de establecer el tiempo inicial del RTC para XIAO sin capacidad de red.

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

Después de cargar el programa y activar el monitor serie, el tiempo del RTC comenzará a calibrarse. Cuando aparezca **¡Calibración del tiempo RTC completa!**, la calibración estará completa.

### Obtener el tiempo del RTC

El siguiente programa obtiene el tiempo del RTC cada segundo y lo imprime en el monitor serie.

:::tip
El procedimiento para obtener el tiempo del RTC se puede usar después del procedimiento de calibración manual anterior. El procedimiento de calibración del tiempo necesita realizarse solo una vez y el reloj RTC podrá funcionar continuamente bajo la alimentación de la batería de moneda, después de lo cual solo necesitas usar el procedimiento para obtener el tiempo para conseguir la hora exacta.

No recomendamos usar el programa para calibrar el tiempo y obtener el tiempo juntos, de modo que cuando el XIAO se encienda, ambos se reiniciarán una vez según el tiempo que configuraste, entonces nunca obtendrás el tiempo preciso.
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

### Calibración de tiempo RTC por red

Para XIAO, que tiene capacidades de red, las cosas parecen volverse mucho más fáciles. Con una red, ni siquiera necesitas usar una batería de celda de moneda para mantener el RTC funcionando desde el primer momento, solo necesitas sincronizar la hora por red cada vez que lo enciendas.

El siguiente es un programa de ejemplo para sincronización de tiempo por red y mostrar la lectura de tiempo RTC en el monitor serie.

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

Cuando uses este programa, por favor completa el nombre y la contraseña de la red según tu situación actual. Después de cargar el programa, abre el monitor serie y establece la velocidad de baudios a 115200, entonces podrás ver la hora exacta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>

### Esfera simple basada en tiempo RTC

El siguiente programa es un programa de esfera basado en el dibujo de reloj RTC.

:::caution
El siguiente programa solo es compatible con XIAO excepto para XIAO nRF52840. XIAO nRF52840 actualmente tiene problemas con la compatibilidad TFT. Pero puedes considerar usar la biblioteca Arduino GFX o LVGL para dibujar las esferas.
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

El código anterior necesitará algunas modificaciones menores dependiendo del tipo de placa de desarrollo que estés usando. Si estás usando un XIAO con capacidades de red, necesitarás configurar el nombre y contraseña del WiFi. Si no, necesitas ajustar manualmente la hora real.

Sube el programa y verás el dial que va automáticamente según la hora establecida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## Función de tarjeta SD

La Pantalla Redonda soporta el uso de tarjetas microSD para leer y escribir datos. Antes de usar la tarjeta microSD, por favor formatea la tarjeta microSD al formato **FAT32** para asegurar que pueda ser reconocida y usada correctamente.

### Toda la serie XIAO (Además de la serie XIAO nRF52840)

Esta sección aplica a todos los XIAO (Además de la serie XIAO nRF52840), que es un programa simple para leer y escribir archivos.

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

Este programa creará un nuevo programa llamado **test.txt** en tu tarjeta microSD y escribirá el contenido de **testing 1, 2, 3.**. Finalmente, lee el archivo e imprime el contenido del archivo a través del monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

:::caution
Encontrarás que la inicialización TFT de la pantalla se usa en el programa para la tarjeta SD. Por favor no pienses que esto es inútil y se puede eliminar, pero de hecho es necesario para usar la tarjeta SD, de lo contrario obtendrás un mensaje de error de que la tarjeta microSD falló al montar.

Debido al diseño del hardware, algunos de los pines están en bajo por defecto, lo que causará que el programa de montaje de la microSD piense que no hay resistencia pull-up causando que el montaje falle. Así que cuando uses la función de tarjeta SD con Round Display, por favor asegúrate de inicializar la pantalla antes de inicializar la tarjeta SD.
:::

### XIAO nRF52840

Si estás usando la serie XIAO nRF52840 entonces puede que necesites descargar la [librería SdFat](https://github.com/greiman/SdFat) por separado para poder usar la función de tarjeta SD.

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

Dado que la serie ESP32 tiene un soporte muy potente para sistemas de archivos, hemos escrito una serie de ejemplos para el XIAO ESP32 sobre cómo usar el sistema de archivos y guardar en la tarjeta microSD, los cuales puedes aprender a usar en los enlaces a continuación.

- **[Sistema de Archivos y XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem)**

Los tutoriales en esta Wiki se aplican a la serie XIAO ESP32, pero dado que ahora quieres usar la ranura de tarjeta SD del Round Display, y el tutorial anterior se enfoca en usar la ranura de tarjeta SD en el XIAO ESP32S3 Sense, necesitarás modificar la inicialización de la tarjeta SD a la línea de abajo.

```c
// Display initialization
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

:::tip
No olvides que también necesitas inicializar primero la pantalla TFT para usar la función de tarjeta SD.
:::

## Función de pantalla

En la parte de uso de la pantalla, los dos componentes principales se dividen en táctil y visualización.

### Función táctil

La función táctil es una característica especial del Round Display. Puedes usar la función táctil para realizar algunas operaciones de visualización de tocar y mantener presionado.

El siguiente programa se puede usar para mostrar el resultado de si la pantalla fue tocada o no.

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

El siguiente programa es un ejemplo simple de una función táctil combinada con una función de pantalla. Sube el siguiente programa y luego toca la pantalla, se dibujará un pequeño círculo en la ubicación donde se toque la pantalla.

:::caution
Si estás usando XIAO nRF52840, entonces el siguiente programa basado en la biblioteca TFT de pantalla puede no funcionar correctamente, necesitas modificar el programa para usar la biblioteca Arduino GFX.
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

### Funciones de Pantalla

Sobre la parte de la pantalla, principalmente introducimos el uso de la biblioteca LVGL y la biblioteca TFT. Debido al problema de espacio, entraremos en detalles sobre cómo dibujar esferas complejas usando las bibliotecas gráficas compatibles en un nuevo Wiki.

[Usando LVGL y TFT en el Seeed Studio Round Display para XIAO](https://wiki.seeedstudio.com/es/using_lvgl_and_tft_on_round_display)

Por supuesto, si solo quieres implementar algunos ejemplos simples, la biblioteca gráfica también tiene un conjunto muy rico de ejemplos para tu uso de referencia.

- [Ejemplo de biblioteca TFT](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Ejemplo de biblioteca Arduino GFX](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [Ejemplo de biblioteca LVGL](https://github.com/lvgl/lvgl/tree/master/examples)

Si ya tienes estas bibliotecas instaladas, puedes encontrar fácilmente los ejemplos dentro de **Archivo->Ejemplo->nombre de biblioteca** en el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

:::tip
Los ejemplos aquí son solo para referencia y no todos los ejemplos funcionarán necesariamente. Es posible que necesites modificar el programa para que sea compatible con el pinout y la definición de hardware del Round Display.
:::

## Soporte Técnico y Discusión del Producto

### P1: ¿Por qué obtengo un error cuando uso XIAO nRF52840 (Sense)?

Al usar el contenido de este tutorial, pueden ocurrir dos tipos diferentes de problemas para el XIAO nRF52840.

1. Problemas de compatibilidad entre nRF52840 y la biblioteca TFT.

  Si estás usando la biblioteca TFT, compilas y subes sin ningún error, muy fluido. Pero cuando lo estás mostrando, encuentras que no hay imagen. Entonces puedes haber encontrado un problema de compatibilidad entre nRF52840 y la biblioteca TFT. Esto significa que solo puedes reemplazar XIAO o usar la biblioteca Arduino GFX para terminar la imagen.

2. Error de compilación causado por elegir la placa de desarrollo incorrecta.

Si estás teniendo problemas con el proceso de compilación. El mensaje de error es usualmente sobre un error de SPI, por ejemplo `'SPI_X' was not declared in this scope`
. Entonces significa que estás eligiendo el tipo incorrecto de placa de desarrollo. Para usar todo este tutorial, necesitas usar la versión **no-mbed** del XIAO nRF52840. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### P2: Al subir un programa para XIAO RP2040, ocurre un error: ¿unaligned opcodes detected in executable segment?

Por favor modifica las opciones de subida de XIAO RP2040 según la configuración en la imagen de abajo. Todas las opciones funcionan bien excepto la predeterminada **Small (-Os) (standard)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

### P3: ¿Por qué obtengo un error de definición de pin cuando compilo un programa de pantalla circular para el XIAO SAMD21?

Cuando encuentres este error, por favor actualiza tu paquete de placa de desarrollo **Seeed SAMD** a la versión más reciente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### P4: ¿Por qué la pantalla no se muestra después de que subo el programa a XIAO ESP32C3?

Si no hay problema con el programa y no se muestra después de subirlo, puede ser que necesite ser reiniciado. Solo presiona el botón de reset en el XIAO ESP32C3.

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
