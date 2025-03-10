---
description: This tutorial introduces the use of the expansion board function of the circular screen.
title: Uso del Display Redondo de Seeed Studio para XIAO
keywords:
- Round display
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/seeedstudio_round_display_usage
last_update:
  date: 02/15/2025
  author: Guillermo
---

# Uso del Display Redondo de Seeed Studio para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

Este tutorial explicará en detalle cómo utilizar las funciones extendidas del Round Display, incluyendo el uso de la función RTC, la función de tarjeta SD y la función de pantalla.

## Empezando

El contenido de este tutorial es compatible con todos los productos de la serie XIAO. Por lo tanto, puedes utilizar cualquier XIAO para completar el contenido de esta Wiki.

Si es la primera vez que usas el Round Display, es posible que desees leer el contenido de preparación que escribimos anteriormente y configurar el entorno de la biblioteca según ese contenido para asegurarte de que puedas usar el Round Display sin problemas.

- **[Preparación para usar el Seeed Studio Round Display para XIAO](https://wiki.seeedstudio.com/get_start_round_display_spanish)**

### Instalar una tarjeta microSD

El Round Display es compatible con tarjetas microSD con formato **FAT32** de no más de **32GB**. Al instalar la tarjeta microSD, el contacto dorado de la tarjeta debe insertarse hacia el interior de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### Instalar la batería RTC

El Round Display es compatible con la función RTC y tiene un chip PCF8563T integrado. Si necesitas utilizar la función RTC, puede ser necesario una batería de botón para mantener el RTC en funcionamiento.

Recomendamos usar baterías de botón de la serie CR927, con el terminal positivo (plano) hacia afuera y el terminal negativo (con superficie ligeramente elevada) hacia adentro al instalarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

:::note
La imagen anterior solo muestra la dirección de instalación de la batería, no la batería completamente instalada. La instalación correcta de la batería debe ser con la batería completamente insertada en el soporte de la batería.
:::

### Instalar la batería de alimentación

El Round Display es compatible con una batería de litio externa de 3.7V. Y, con un chip de gestión de energía integrado, la batería puede ser cargada a través del puerto USB de XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

El Round Display también tiene un indicador de carga. Tiene tres estados:

1. La luz del indicador está siempre encendida a baja intensidad cuando la batería de litio no está conectada.
2. Conectada la batería de litio, la luz roja está siempre encendida a alta intensidad mientras se carga la batería de litio.
3. Conectada la batería de litio, la luz se apaga cuando la batería está completamente cargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>


### Interruptor del Round Display

El Round Display también tiene un interruptor. El interruptor se utiliza para controlar el encendido/apagado de la pantalla y el suministro de energía al XIAO. Cuando colocas el interruptor en la posición OFF, la batería no alimentará al XIAO y la pantalla se apagará. Cuando colocas el interruptor en la posición ON, la pantalla se encenderá y la batería alimentará al XIAO (siempre que se haya instalado una batería de alimentación) para asegurar que el programa funcione.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

:::note
Al referirse a alimentar al XIAO en la descripción aquí, se habla de alimentarlo a través del Round Display. Si estás alimentando al XIAO directamente, el interruptor del Round Display no puede desconectar la alimentación al XIAO. Si deseas controlar todo el dispositivo a través del interruptor del Round Display, necesitas instalar la batería de alimentación en el Round Display.

También ten en cuenta que algunos XIAOs (como el XIAO ESP32C3) pueden requerir presionar el botón de Reset en el XIAO para que comience a funcionar al apagar y volver a encender para ejecutar un programa.
:::

### Diseño del circuito del Round Display

En esta sección, interceptaremos el esquema del circuito del hardware del Round Display e informaremos a los usuarios qué pines IO del XIAO se utilizan en el hardware del Round Display para evitar conflictos en el uso de los pines IO.

#### Pines para medir el voltaje de la batería

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

Para el diseño del Round Display, utilizamos los pines **A0/D0** en el XIAO para conectarlos al circuito de la batería integrada. El estado de carga restante de la batería se puede obtener leyendo el valor analógico de este pin.

#### Pines del circuito de la tarjeta SD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

La sección de la tarjeta SD utiliza los cuatro puertos IO del XIAO, que se usan como se muestra en la siguiente tabla.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">microSD Card Slot</th>
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

La sección de la pantalla táctil utiliza los cuatro puertos IO del XIAO, que se usan como se muestra en la siguiente tabla.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">Pantalla táctil</th>
        </tr>
        <tr>
            <td align="center">D4 (SDA)</td>
            <td align="center">Pantalla táctil IIC</td>
        </tr>
        <tr>
            <td align="center">D5 (SCL)</td>
            <td align="center">Pantalla táctil IIC</td>
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
            <td align="center">Screen backlight</td>
        </tr>
    </table>
</div>


## Descripción general de la biblioteca de Round Display

La gran mayoría del desarrollo de software de Round Display se basa en el soporte de hardware propio del XIAO. Los gráficos se basan en las bibliotecas TFT, LVGL y Arduino GFX.

Para facilitar a los usuarios el uso de las funciones del Round Display, escribimos una biblioteca separada que principalmente llama a las interfaces de las bibliotecas mencionadas, con el fin de reducir el umbral de desarrollo independiente que los usuarios deben enfrentar cuando lleguen a una etapa más avanzada. En este capítulo, nos centraremos en cuáles son las funciones de estas bibliotecas que preparé para Round Display y cómo usarlas respectivamente.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

El archivo `lv_xiao_round_screen.h` es un archivo de encabezado en la biblioteca de Round Display, que controla las funciones de la pantalla y el táctil del dispositivo.

Se realiza una verificación de definición de macros al principio del archivo, con el fin de requerir que los desarrolladores que usen Round Display seleccionen la biblioteca gráfica con la que desean desarrollar al dibujar patrones en la pantalla. Hay dos opciones: **TFT** y **Arduino GFX**. Si se elige la biblioteca **TFT**, esta es la que puede soportar **LVGL**.

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

La razón de este diseño es que ciertos modelos de XIAO tienen ventajas propias al usar diferentes bibliotecas gráficas para dibujar patrones. Por ejemplo, si estás utilizando el XIAO nRF52840, podrías lograr una mayor eficiencia en memoria y estabilidad usando la biblioteca **Arduino GFX**. Por otro lado, el XIAO ESP32S3, con más memoria, tiene una ventaja inherente al manejar bibliotecas gráficas como **LVGL**, permitiendo dibujar patrones y interfaces de usuario más complejos.

Así que, si necesitas dibujar un patrón usando Round Display, no olvides seleccionar la biblioteca gráfica que deseas usar y definirla al principio de tu programa en Arduino.

- Si deseas usar la biblioteca **TFT** o **LVGL**:

```cpp
#define USE_TFT_ESPI_LIBRARY
```

- Si deseas usar la biblioteca Arduino GFX:

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1. `void xiao_disp_init(void)`: Esta función se utiliza para inicializar la retroiluminación de la pantalla y rotar la pantalla a su posición inicial, con el color de fondo del dispositivo siendo negro sólido. Generalmente, no se usa por sí sola, y en su lugar se utiliza la función `lv_xiao_disp_init()` cuando se necesita la inicialización.

2. `void lv_xiao_disp_init(void)`: Inicializa la retroiluminación y el controlador de la pantalla. Se utiliza principalmente para la inicialización de la pantalla.

3. `bool chsc6x_is_pressed(void)`: Esta función se utiliza para comprobar si la pantalla está siendo tocada, y devuelve `True` si la pantalla está siendo tocada.

4. `void lv_xiao_touch_init(void)`: Esta función se utiliza para inicializar la pantalla táctil y su controlador.

5. `void chsc6x_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )`: Esta función se utiliza para obtener los puntos de coordenadas de la pantalla táctil.

### lv_hardware_test.h

El archivo `lv_hardware_test.h` es el archivo de encabezado del ejemplo **HardwareTest** de la biblioteca Round Display. Este archivo de encabezado prepara la mayoría de las funciones de uso del hardware para Round Display.

Si deseas utilizar las funciones de este archivo, puedes copiar el archivo directamente al mismo directorio que tu archivo de Arduino.

1. `int32_t battery_level_percent(void)`: Llamando a esta función, puedes leer y calcular el porcentaje de carga de la batería para mostrar el nivel de la batería en la aplicación.

2. `void lv_hardware_test(void)`: Esta función se utiliza para probar todas las funciones de hardware, incluida la pantalla, la pantalla táctil, el reloj RTC y el nivel de la batería. Puedes referirte a este método de función para completar el desarrollo de la función de Round Display que desees.

## Botón KE y GPIO

En la nueva versión de Round Display, hemos diseñado un interruptor KE para liberar selectivamente ciertos GPIOs para su uso selectivo por parte del usuario.

El interruptor KE está diseñado en el medio de la ranura para microSD y la fila de pines que se conecta al XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

El diseño del circuito para este interruptor se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

Esto significa que cuando el interruptor está cerrado **(posicionado en la parte ON)**, las funciones de lectura de voltaje de la batería y retroiluminación de la pantalla del Round Display estarán disponibles.

Cuando el interruptor está desconectado **(posicionado en el lado digital)**, los pines A0 y D6 en el XIAO son los estados disponibles.

## Medir el voltaje de la batería

Debido a la falta de pines IO en la mayoría de los modelos de XIAO, no es posible medir el voltaje de la batería. Sin embargo, en algunos XIAOs, el chip de gestión de energía está configurado para permitir baterías externas.

Pero si eliges usar Round Display y alimentar el XIAO a través de la pantalla, medir el voltaje de la batería se convierte en una posibilidad.

A continuación, se muestra un programa de ejemplo para medir el voltaje de la batería. La función `battery_level_percent()` se selecciona del archivo `lv_hardware_test.h`.

```cpp
#define NUM_ADC_SAMPLE 20           // Frecuencia de muestreo
#define RP2040_VREF 3300            // Cuando uses el XIAO RP2040, necesitas medir el voltaje real en el pin de 3.3V y modificar ese valor. (unidad: mV)
#define BATTERY_DEFICIT_VOL 1850    // Valor de voltaje de la batería en la pérdida de carga
#define BATTERY_FULL_VOL 2450       // Valor de voltaje de la batería a carga completa

int32_t battery_level_percent(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // Referencia de 0.6V  Ganancia 1/4
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
  // pon tu código de configuración aquí, para que se ejecute una vez:
  Serial.begin(115200);
  while(!Serial);

  analogReadResolution(12);
}

void loop() {
  // pon tu código principal aquí, para que se ejecute repetidamente:
  int32_t batteryVal = battery_level_percent();
  Serial.print("El porcentaje de energía restante es: ");
  Serial.print(batteryVal);
  Serial.print(" %");
  Serial.println();
  delay(1000);
}
```

:::tip
Este programa no es universal, y el porcentaje de batería medido puede no ser preciso. Esto se debe a que cada persona utiliza diferentes baterías, chips y placas de desarrollo, por lo que es posible que necesites modificar el programa según la situación real al ejecutar este código. Para más detalles sobre cómo hacer estas modificaciones, por favor consulta la sección de **[anotaciones del programa](#program-annotation)** en esta sección.
:::


Selecciona la placa XIAO que estás utilizando, sube el programa, abre el monitor serial y establece la velocidad en baudios a **115200**. Si tienes la batería conectada y encendida, deberías poder ver el voltaje de la batería en el monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### Anotación del programa

Este código utiliza un ADC para medir el voltaje de la batería y calcular el porcentaje de carga de la batería. La implementación varía según la plataforma de hardware:

- Para las plataformas ESP32-S3 y ESP32-C3, se utiliza la función `analogReadMilliVolts` para leer los valores de voltaje analógico, y luego se toma el valor promedio de múltiples muestras para obtener el voltaje promedio de la batería.
- Para las plataformas Seeeduino XIAO NRF52840, primero se utiliza la función `analogReference` para especificar el voltaje de referencia como 2.4V, luego se usa la función `analogRead` para leer los valores de voltaje analógico y se calcula el voltaje promedio de la batería.
- Para la plataforma Seeeduino XIAO RP2040, se usa la función `analogRead` para leer los valores de voltaje analógico y se calcula el voltaje promedio de la batería.

En cualquier caso, se calcula el voltaje promedio de la batería y luego se calcula el porcentaje de carga de la batería utilizando la fórmula `(mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL - BATTERY_DEFICIT_VOL)`, donde mvolts es el voltaje promedio de la batería, `BATTERY_DEFICIT_VOL` es el voltaje mínimo de operación de la batería, y `BATTERY_FULL_VOL` es el voltaje máximo de la batería. Finalmente, el código limita el porcentaje de carga de la batería para asegurar que esté entre 0 y 100.

En resumen, los siguientes parámetros determinan la precisión de la medición del voltaje al usar este programa.

```c
#define RP2040_VREF 3300            // Cuando uses el XIAO RP2040, necesitas medir el voltaje real en el pin de 3.3V y modificar ese valor. (unidad: mV)
#define BATTERY_DEFICIT_VOL 1850    // Valor de voltaje de la batería en la pérdida de carga
#define BATTERY_FULL_VOL 2450       // Valor de voltaje de la batería a carga completa
```

Lo primero que debes hacer es obtener el valor analógico de la batería que compraste cuando está en estado de carga baja (deficit) y en estado de carga completa.

Puedes obtener el valor analógico de la batería utilizando esta función. Necesitas obtener el valor una vez en ambos estados, cuando la batería esté completamente cargada y cuando tenga poco carga.

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
  analogReference(AR_INTERNAL2V4);  // Referencia de 0.6V  Ganancia de 1/4
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
La función `battery_test()` es en realidad la función `battery_level_percent()` con las últimas dos líneas de código para calcular el porcentaje eliminadas.
:::

Luego, simplemente modifica el valor del programa correspondiente al valor que mediste.

Si estás utilizando el **XIAO RP2040**, entonces un paso adicional que deberás realizar es utilizar un voltímetro para medir el voltaje real en el pin de 3.3V del XIAO RP2040. El valor de voltaje medido se convierte a unidades **mV** y se modifica el programa correspondiente.

Por ejemplo, aquí están las mediciones reales que tomé utilizando mi XIAO RP2040 y la batería.

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```


## Función RTC

La parte de la función RTC la dividimos principalmente en las siguientes cuatro secciones para introducir su aplicación:
1. Primero, para los XIAO sin función de red, puedes corregir el RTC configurando manualmente la hora inicial.
2. Luego, alimenta el RTC con la ayuda de una batería de celda botón para obtener la hora precisa de manera continua.
3. Para los XIAO con función de red, puedes utilizar la función de red para corregir la hora.
4. Dibuja un simple dial de reloj combinando la función RTC.

### Calibración manual fuera de línea del RTC

El siguiente es un programa de ejemplo para calibrar manualmente la hora del RTC. Los ajustes se colocan en la función `Setup()` para garantizar que el programa de configuración se ejecute solo una vez. Este procedimiento es la forma más eficiente de establecer la hora inicial del RTC para los XIAO sin capacidad de red.

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Inicio Serial
  Serial.begin(115200);
  while(!Serial);
  delay(50);

  // Inicio I2C
  Wire.begin();

  // Inicio RTC
  rtc.begin();

  // Establecer fecha de RTC
  I2C_BM8563_DateTypeDef dateStruct;
  dateStruct.weekDay = 3;
  dateStruct.month = 4;
  dateStruct.date = 26;
  dateStruct.year = 2023;
  rtc.setDate(&dateStruct);

  // Establecer el horario RTC
  I2C_BM8563_TimeTypeDef timeStruct;
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);

  Serial.println("RTC calibración de tiempo completa!");
}

void loop() {

}
```

Después de cargar el programa y encender el monitor serial, el tiempo del RTC comenzará a calibrarse. Cuando aparezca **¡Calibración de la hora del RTC completa!**, la calibración estará completa.

### Obtener la hora del RTC

El siguiente programa obtiene la hora del RTC cada segundo y la imprime en el monitor serial.

:::tip
El procedimiento para obtener la hora del RTC se puede utilizar después del procedimiento de calibración manual descrito anteriormente. La calibración de la hora solo necesita realizarse una vez, y el reloj RTC podrá seguir funcionando continuamente con la alimentación de la batería de botón. Después de eso, solo necesitarás usar el procedimiento para obtener la hora y obtener la hora exacta.

No recomendamos usar el programa para calibrar la hora y obtener la hora al mismo tiempo, ya que cuando el XIAO se encienda, ambos procedimientos se reiniciarán según la hora que configuraste, lo que hará que nunca obtengas la hora precisa.
:::

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Inicializar Serial
  Serial.begin(115200);
  delay(50);

  // Inicializar I2C
  Wire.begin();

  // Inicializar RTC
  rtc.begin();
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // Obtener datos del RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Imprimir fecha y hora del RTC
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

  // Esperar
  delay(1000);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/71.png" style={{width:700, height:'auto'}}/></div>


### Calibración de la hora del RTC a través de red

Para los XIAO que tienen capacidades de red, las cosas parecen ser mucho más fáciles. Con una red, ni siquiera necesitas usar una batería de botón para mantener el RTC funcionando de manera continua, solo necesitas sincronizar la hora a través de la red cada vez que lo enciendas.

El siguiente es un programa de ejemplo para sincronizar la hora a través de la red y mostrar la lectura de la hora del RTC en el monitor serial.

:::caution
Este programa solo es aplicable a la serie XIAO ESP32, ya que solo esta serie tiene función de red.
:::

```cpp
#include "I2C_BM8563.h"
#include <WiFi.h>

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

const char* ntpServer = "time.cloudflare.com";  // Servidor NTP
const char *ssid     = "YOUR_SSID";            // Nombre de la red Wi-Fi
const char *password = "YOUR_PASSWORD";        // Contraseña de la red Wi-Fi

void setup() {
  // Inicializar Serial
  Serial.begin(115200);
  delay(50);

  // Conectar a un punto de acceso
  WiFi.begin(ssid, password);
  Serial.print("Conectando a Wi-Fi ");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" CONECTADO");

  // Configurar hora NTP local
  configTime(9 * 3600, 0, ntpServer);

  // Inicializar I2C
  Wire.begin();

  // Inicializar RTC
  rtc.begin();

  // Obtener hora local
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    // Establecer hora en el RTC
    I2C_BM8563_TimeTypeDef timeStruct;
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);

    // Establecer fecha en el RTC
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

  // Obtener datos del RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Imprimir fecha y hora del RTC
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

  // Esperar
  delay(1000);
}
```

Cuando uses este programa, por favor completa el nombre y la contraseña de la red según tu situación actual. Después de cargar el programa, abre el monitor serial y establece la velocidad en baudios a 115200. Entonces podrás ver la hora exacta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>


### Reloj simple basado en la hora RTC

El siguiente programa es un programa de reloj basado en la hora del RTC para dibujar un dial.

:::caution
Este programa es compatible solo con XIAO, excepto con el XIAO nRF52840. El XIAO nRF52840 actualmente tiene problemas de compatibilidad con TFT. Sin embargo, podrías considerar usar la biblioteca Arduino GFX o LVGL para dibujar los diales.
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


//TFT_eSPI tft = TFT_eSPI();  // Invocar la librería, los pines se definen en User_Setup.h
TFT_eSprite face = TFT_eSprite(&tft);

#define CLOCK_X_POS 0
#define CLOCK_Y_POS 0

#define CLOCK_FG   TFT_SKYBLUE
#define CLOCK_BG   TFT_NAVY
#define SECCOND_FG TFT_RED
#define LABEL_FG   TFT_GOLD

#define CLOCK_R       240.0f / 2.0f // Radio de la carátula del reloj (tipo float)
#define H_HAND_LENGTH CLOCK_R/2.0f
#define M_HAND_LENGTH CLOCK_R/1.4f
#define S_HAND_LENGTH CLOCK_R/1.3f

// Calcular los ángulos de incremento de 1 segundo. Los ángulos de las manecillas de horas y minutos
// cambian cada segundo para que se vea un movimiento suave a nivel de subpíxeles
#define SECOND_ANGLE 360.0 / 60.0
#define MINUTE_ANGLE SECOND_ANGLE / 60.0
#define HOUR_ANGLE   MINUTE_ANGLE / 12.0

// Ancho y alto del sprite
#define FACE_W CLOCK_R * 2 + 1
#define FACE_H CLOCK_R * 2 + 1

// Hora: minutos: segundos
uint8_t h = 0, m = 0, s = 0;

float time_secs = h * 3600 + m * 60 + s;

// Tiempo para el siguiente tic
uint32_t targetTime = 0;

// =========================================================================
// Configuración
// =========================================================================
void setup() {
  Serial.begin(115200);
  Serial.println("Iniciando...");

  // Inicializar la pantalla
  tft.init();

  // Idealmente, establecer la orientación para un buen rango de ángulo de visión porque
  // la efectividad del anti-aliasing varía con el ángulo de visión de la pantalla
  // Normalmente esto es cuando el conector de la cinta de la pantalla está en la parte inferior
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);

  // Crear el sprite para la carátula del reloj
  //face.setColorDepth(8); // 8 bits funcionarán, pero reducen la efectividad del anti-aliasing
  face.createSprite(FACE_W, FACE_H);

  // Dibujar todo el reloj - El tiempo NTP aún no está disponible
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

// En caso de la serie XIAO ESP32, usar la sincronización de red.
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);
  }
#else
  // Establecer la hora del RTC, Otros XIAOs no tienen funciones de red y requieren una alineación manual del tiempo.
  // Ten en cuenta que la hora solo debe configurarse una vez.
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
// Bucle
// =========================================================================
void loop() {
  // Actualizar el tiempo periódicamente
  if (targetTime < millis()) {

    // Actualizar el tiempo del siguiente tic en 100 milisegundos para un movimiento suave
    targetTime = millis() + 100;

    // Incrementar el tiempo en 100 milisegundos
    time_secs += 0.100;

    // Cambio de medianoche
    if (time_secs >= (60 * 60 * 24)) time_secs = 0;

    // Todos los gráficos se dibujan en el sprite para evitar parpadeos
    renderFace(time_secs);

    I2C_BM8563_DateTypeDef dateStruct;
    I2C_BM8563_TimeTypeDef timeStruct;

    // Obtener la hora del RTC
    rtc.getTime(&timeStruct);
  
    // Imprimir la hora del RTC
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
// Dibujar la carátula del reloj en el sprite
// =========================================================================
static void renderFace(float t) {
  float h_angle = t * HOUR_ANGLE;
  float m_angle = t * MINUTE_ANGLE;
  float s_angle = t * SECOND_ANGLE;

  // La carátula se redibuja completamente - esto se puede hacer rápidamente
  face.fillSprite(TFT_BLACK);

  // Dibujar el círculo de la carátula
  face.fillSmoothCircle( CLOCK_R, CLOCK_R, CLOCK_R, CLOCK_BG );

  // Establecer el datum del texto en el centro medio y el color
  face.setTextDatum(MC_DATUM);

  // El color de fondo se leerá durante el renderizado del carácter
  face.setTextColor(CLOCK_FG, CLOCK_BG);

  // Ajuste de desplazamiento del texto
  constexpr uint32_t dialOffset = CLOCK_R - 10;

  float xp = 0.0, yp = 0.0; // Usar posición en píxeles de tipo float para un movimiento suave con AA

  // Dibujar los dígitos alrededor del perímetro del reloj
  for (uint32_t h = 1; h <= 12; h++) {
    getCoord(CLOCK_R, CLOCK_R, &xp, &yp, dialOffset, h * 360.0 / 12);
    face.drawNumber(h, xp, 2 + yp);
  }

  // Agregar texto (podría ser la hora digital...)
  face.setTextColor(LABEL_FG, CLOCK_BG);
  face.drawString("TFT_eSPI", CLOCK_R, CLOCK_R * 0.75);

  // Dibujar la manecilla de los minutos
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, M_HAND_LENGTH, m_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Dibujar la manecilla de las horas
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, H_HAND_LENGTH, h_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Dibujar el círculo central del pivote
  face.fillSmoothCircle(CLOCK_R, CLOCK_R, 4, CLOCK_FG);

  // Dibujar la manecilla de los segundos
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, S_HAND_LENGTH, s_angle);
  face.drawWedgeLine(CLOCK_R, CLOCK_R, xp, yp, 2.5, 1.0, SECCOND_FG);
  face.pushSprite(0, 0, TFT_TRANSPARENT);
}

// =========================================================================
// Obtener las coordenadas del extremo de una línea, pivote en x,y, longitud r, ángulo a
// =========================================================================
// Las coordenadas se devuelven al llamante a través de los punteros xp y yp
#define DEG2RAD 0.0174532925
void getCoord(int16_t x, int16_t y, float *xp, float *yp, int16_t r, float a)
{
  float sx1 = cos( (a - 90) * DEG2RAD);
  float sy1 = sin( (a - 90) * DEG2RAD);
  *xp =  sx1 * r + x;
  *yp =  sy1 * r + y;
}
```

El código anterior necesitará algunas modificaciones menores dependiendo del tipo de placa de desarrollo que estés utilizando. Si estás usando un XIAO con capacidades de red, necesitarás configurar el nombre y la contraseña del WiFi. Si no, tendrás que ajustar manualmente la hora en tiempo real.

Sube el programa y verás el dial que avanzará automáticamente según la hora configurada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## Función de tarjeta SD

El **Round Display** admite el uso de tarjetas microSD para leer y escribir datos. Antes de usar la tarjeta microSD, asegúrate de formatearla en formato **FAT32** para garantizar que sea reconocida y utilizada correctamente.

### Toda la serie XIAO (excepto la serie XIAO nRF52840)

Esta sección aplica para toda la serie XIAO (excepto la serie XIAO nRF52840), y presenta un programa simple para leer y escribir archivos.

```cpp
#include <SPI.h>
#include <SD.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

File myFile;

void setup() {
  // Abrir la comunicación serial y esperar a que el puerto se abra:
  Serial.begin(115200);
  while(!Serial);

  // Inicialización de la pantalla
  tft.init();

  Serial.print("Inicializando la tarjeta SD...");

  pinMode(D2, OUTPUT);
  if (!SD.begin(D2)) {
    Serial.println("¡La inicialización falló!");
    return;
  }
  Serial.println("Inicialización completada.");

  // Abrir el archivo. Ten en cuenta que solo se puede abrir un archivo a la vez,
  // por lo que debes cerrar este antes de abrir otro.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // Si el archivo se abrió correctamente, escribe en él:
  if (myFile) {
    Serial.print("Escribiendo en test.txt...");
    myFile.println("testing 1, 2, 3.");
    // Cerrar el archivo:
    myFile.close();
    Serial.println("Hecho.");
  } else {
    // Si el archivo no se abrió, imprimir un error:
    Serial.println("Error al abrir test.txt");
  }

  // Volver a abrir el archivo para lectura:
  myFile = SD.open("/test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // Leer del archivo hasta que no haya más contenido:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // Cerrar el archivo:
    myFile.close();
  } else {
    // Si el archivo no se abrió, imprimir un error:
    Serial.println("Error al abrir test.txt");
  }
}

void loop() {
  // No ocurre nada después de la configuración
}
```

Este programa creará un nuevo archivo llamado **test.txt** en tu tarjeta microSD y escribirá el contenido **testing 1, 2, 3.**. Finalmente, leerá el archivo e imprimirá su contenido a través del monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

:::caution
Encontrarás que la inicialización de la pantalla TFT se utiliza en el programa para la tarjeta SD. No pienses que esto es innecesario y se puede eliminar, ya que en realidad es necesario para usar la tarjeta SD. De lo contrario, recibirás un mensaje de error indicando que la tarjeta microSD no se pudo montar.

Debido al diseño del hardware, algunos de los pines están en bajo por defecto, lo que hace que el programa de montaje de la tarjeta microSD piense que no hay resistencia pull-up, lo que provoca que el montaje falle. Por lo tanto, al usar la función de tarjeta SD con Round Display, asegúrate de inicializar la pantalla antes de inicializar la tarjeta SD.
:::

### XIAO nRF52840

Si estás utilizando la serie XIAO nRF52840, es posible que necesites descargar la [biblioteca SdFat](https://github.com/greiman/SdFat) por separado para poder usar la función de la tarjeta SD.

```cpp
#include <SPI.h>
#include "SdFat.h"
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Abrir la comunicación serial y esperar a que el puerto se abra:
  Serial.begin(9600);
  while (!Serial) {
    ; // esperar a que el puerto serial se conecte. Necesario solo para puertos USB nativos
  }

  // Inicialización de la pantalla
  tft.init();

  Serial.print("Inicializando la tarjeta SD...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("¡La inicialización falló!");
    return;
  }
  Serial.println("Inicialización completada.");

  // Abrir el archivo. Ten en cuenta que solo se puede abrir un archivo a la vez,
  // por lo que debes cerrar este antes de abrir otro.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // Si el archivo se abrió correctamente, escribe en él:
  if (myFile) {
    Serial.print("Escribiendo en test.txt...");
    myFile.println("testing 1, 2, 3.");
    // Cerrar el archivo:
    myFile.close();
    Serial.println("Hecho.");
  } else {
    // Si el archivo no se abrió, imprimir un error:
    Serial.println("Error al abrir test.txt");
  }

  // Volver a abrir el archivo para lectura:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // Leer del archivo hasta que no haya más contenido:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // Cerrar el archivo:
    myFile.close();
  } else {
    // Si el archivo no se abrió, imprimir un error:
    Serial.println("Error al abrir test.txt");
  }
}

void loop() {
  // No ocurre nada después de la configuración
}
```

### XIAO ESP32S3 & XIAO ESP32S3 Sense & XIAO ESP32C3

Dado que la serie ESP32 tiene un soporte muy potente para sistemas de archivos, hemos escrito una serie de ejemplos para el XIAO ESP32 sobre cómo utilizar el sistema de archivos y guardar en la tarjeta microSD, lo cual puedes aprender a usar en los siguientes enlaces.

- **[Sistema de Archivos y XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem)**

Los tutoriales en esta Wiki aplican para la serie XIAO ESP32, pero como ahora quieres usar la ranura para la tarjeta SD del Round Display, deberás modificar la inicialización de la tarjeta SD con la siguiente línea.

```c
// Display initialization
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

:::tip
No olvides que también necesitas inicializar primero la pantalla TFT para poder usar la función de la tarjeta SD.
:::

## Función de pantalla

En la parte de uso de la pantalla, los dos componentes principales se dividen en táctil y visualización.

### Función táctil

La función táctil es una característica especial de Round Display. Puedes usar la función táctil para realizar algunas operaciones de toque y mantener en la pantalla.

El siguiente programa puede ser utilizado para mostrar el resultado de si la pantalla fue tocada o no.

```cpp
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

void setup() {
  // Coloca tu código de configuración aquí, que se ejecutará una vez:
  Serial.begin(115200);
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
}

void loop() {
  // Coloca tu código principal aquí, que se ejecutará repetidamente:
  if(chsc6x_is_pressed()){
    Serial.println("La pantalla está tocada.");
  }
  else
    Serial.println("La pantalla no está tocada.");
  delay(50);
}
```

El siguiente programa es un ejemplo sencillo de la función táctil combinada con la función de visualización. Carga el siguiente programa y luego toca la pantalla, un pequeño círculo se dibujará en el lugar donde se toque la pantalla.

:::caution
Si estás utilizando el XIAO nRF52840, es posible que el siguiente programa basado en la librería TFT no funcione correctamente. Necesitarás modificar el programa para usar la librería **Arduino GFX**.
:::

```cpp
#include <TFT_eSPI.h>
#include <SPI.h>
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

lv_coord_t touchX, touchY;

void setup() {
  // Coloca tu código de configuración aquí, que se ejecutará una vez:
  Serial.begin(115200);

  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  
  // Inicializa la pantalla
  tft.init();

  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
}

void loop() {
  // Coloca tu código principal aquí, que se ejecutará repetidamente:
  if(chsc6x_is_pressed())
  {
    Serial.println("La pantalla está tocada.");
    chsc6x_get_xy(&touchX, &touchY);
    tft.drawCircle(touchX, touchY, 15, TFT_WHITE);
  }
  
  delay(50);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/81.gif" style={{width:500, height:'auto'}}/></div>

### Funciones de la pantalla

En cuanto a la parte de la pantalla, principalmente se introduce el uso de la librería LVGL y la librería TFT. Debido a limitaciones de espacio, se entrará en detalles sobre cómo dibujar diales complejos utilizando las librerías gráficas soportadas en un nuevo Wiki.

[Uso de LVGL y TFT en la Seeed Studio Round Display para XIAO](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display)

Por supuesto, si solo deseas implementar algunos ejemplos sencillos, la librería gráfica también tiene un conjunto muy amplio de ejemplos para tu referencia.

- [Ejemplo de la librería TFT](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Ejemplo de la librería Arduino GFX](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [Ejemplo de la librería LVGL](https://github.com/lvgl/lvgl/tree/master/examples)

Si ya tienes estas librerías instaladas, puedes encontrar fácilmente los ejemplos dentro de **Archivo->Ejemplo->nombre de la librería** en el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

:::tip
Los ejemplos aquí son solo de referencia y no todos los ejemplos necesariamente funcionarán. Es posible que necesites modificar el programa para que sea compatible con la distribución de pines y la definición de hardware de la Round Display.
:::


## Soporte Técnico y Discusión del Producto

### P1: ¿Por qué obtengo un error al usar XIAO nRF52840 (Sense)?

Al usar el contenido de este tutorial, pueden ocurrir dos tipos de problemas diferentes para el XIAO nRF52840.

1. **Problemas de compatibilidad entre nRF52840 y la biblioteca TFT.**

   Si estás usando la biblioteca TFT, compilas y subes sin ningún error, muy bien. Pero cuando intentas mostrar algo en la pantalla, te das cuenta de que no aparece ninguna imagen. Es probable que hayas encontrado un problema de compatibilidad entre nRF52840 y la biblioteca TFT. Esto significa que solo puedes reemplazar XIAO o utilizar la biblioteca Arduino GFX para completar la imagen.

2. **Error de compilación debido a la selección incorrecta de la placa de desarrollo.**

   Si tienes problemas con el proceso de compilación y el mensaje de error usualmente es sobre un error SPI, como `'SPI_X' no declarado en este ámbito`, significa que estás seleccionando el tipo incorrecto de placa de desarrollo. Para usar todo este tutorial, necesitas usar la versión **no-mbed** del XIAO nRF52840. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### P2: Cuando subo un programa para XIAO RP2040, aparece un error: ¿opcodes desalineados detectados en el segmento ejecutable?

Por favor, modifica las opciones de carga de XIAO RP2040 según la configuración en la imagen siguiente. Todas las opciones funcionan correctamente, excepto la opción predeterminada **Small (-Os) (estándar)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

### P3: ¿Por qué obtengo un error de definición de pines cuando compilo un programa para la pantalla circular en el XIAO SAMD21?

Cuando encuentres este error, actualiza el paquete de la placa **Seeed SAMD** a la versión más reciente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### P4: ¿Por qué no se muestra la pantalla después de subir el programa al XIAO ESP32C3?

Si no hay ningún problema con el programa y no se muestra nada después de cargarlo, puede ser que necesites reiniciar el dispositivo. Simplemente presiona el botón de reinicio en el XIAO ESP32C3.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




























