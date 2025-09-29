---
description: Grove - Matriz LED RGB con Controlador
title: Grove - Matriz LED RGB con Controlador
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-RGB_LED_Matrix_w-Driver
last_update:
  date: 1/9/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg" alt="pir" width={600} height="auto" /></p>

La matriz LED RGB de 8x8 es increíble para mostrar imágenes simples, 64 píxeles LED y 255 colores para cada píxel significa posibilidades casi infinitas. Sin embargo, el cableado complicado de la matriz es desalentador. Ahora te presentamos el Grove - Matriz LED RGB con Controlador, deja atrás todo el cableado complejo y variable y la soldadura, solo un único conector grove para controlar fácilmente la matriz LED RGB de 8x8. ¿Increíble? Pruébalo tú mismo y te encantará.

<iframe width={800} height={450} src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<!-- <p style=":center"><a href="https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html)

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Barra LED RGB (10 WS2813 Mini) | Inicial                                                                                               | Dic 2018      |

## Características

- 8x8 píxeles, **<font color="red">R</font><font color="green">G</font><font color="blue">B</font>** 255 colores
- MCU integrado
- Precisión de corriente LED de ±1%(típ.) entre canales
- Soporte para mostrar imágenes personalizadas

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Temperatura de Operación|-40℃ ~ +85℃|
|Interfaz|I2C|
|Dirección I2C|0x65|
|Tamaño|L: 40mm A: 40mm H: 21mm|
|Peso|17.3g|
|Tamaño del Paquete|L: 120mm A: 100mm H: 33mm|
|Peso Bruto|28g|

## Aplicaciones Típicas

- Visualización de imágenes simples
- Juguetes

## Descripción del Hardware

### Distribución de Pines

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg" alt="pir" width={600} height="auto" /></p>

---
**Interfaz Grove**  

Usamos la interfaz I2C para controlar la matriz LED:

>GND: conecta este módulo al GND del sistema  
>VCC: puedes usar 5V para este módulo  
>SDA: datos serie I2C  
>SCL: reloj serie I2C

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg" alt="pir" width={600} height="auto" /></p>

---

**Módulo DC-DC**

Usamos MP-2155 para proporcionar un 3.3V estable para el MCU y el chip controlador LED.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg" alt="pir" width={600} height="auto" /></p>

---

**Interfaz de Descarga de Firmware**  

Se conecta a los pines SDA y SCL, funciona como UART cuando se descarga el firmware.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg" alt="pir" width={600} height="auto" /></p>

---

**Controlador LED**

El [MY9221](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf) es un controlador LED APDM (Modulación de Densidad de Pulso Adaptativa) de corriente constante de 12 canales (R/G/B x 4). Dado que este módulo es una matriz de 8x8,
necesitamos canales de salida **<font color="red">R</font><font color="green">G</font><font color="blue">B</font>** X8, por lo tanto, usamos dos MY9221.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg" alt="pir" width={600} height="auto" /></p>

---
**Matriz LED 8x8**

Usamos 64 LEDs KTR-3528RGB para formar una matriz LED de 8x8

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg" alt="pir" width={600} height="auto" /></p>

Usamos la señal V para la selección de columna y la señal RGB para la selección de fila.  
Nombramos los leds como **D**, D1 - D64. R1/G1/B1 - R8/G8/B8 es controlado por dos MY9221, **V1 - V8** es controlado por el chip 74HC183PW. Si todos los LEDs están apagados, V1 -V9 deberían estar en bajo por defecto, y todas las líneas de canal RGB estarán en alto.  

ej.

**D8** está en la primera fila, octava columna. Si queremos hacer que **D8** sea Verde-255, entonces deberíamos poner V8 en alto, y poner R1/B1 en alto, poner G1 a tierra. Entonces solo el led verde se encenderá, verás que D8 se vuelve verde puro.

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de hardware o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Matrix w/Driver |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

:::important
    **1**. Si usas Arduino UNO como placa madre, se recomienda que uses la fuente de alimentación DC. De lo contrario, la ondulación máxima de VCC puede exceder 100mV. Si usas Seeeduino V4.2 como placa madre, no necesitas conectar alimentación DC.

    **2**. El intercambio en caliente no es compatible.
:::

- **Paso 1.** Conecta el Grove - RGB LED Matrix w/Driver al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - RGB LED Matrix w/Driver |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
|SDA           | Blanco              | SDA |
|SCL            | Amarillo             | SCL |

#### Software

:::note
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Seeed_RGB_LED_Matrix](https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Seeed_RGB_Led_Matrix --> display_emoji**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Ábrelo en tu computadora haciendo clic en **display_emoji.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_RGB_LED_Matrix-master\examples\display_emoji**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

    3. O, simplemente puedes hacer clic en el icono
     <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)  -->
       <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "grove_two_rgb_led_matrix.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif


#define DISPLAY_COLOR    0X11


void waitForMatrixReady()
{
    delay(1000);
}

GroveTwoRGBLedMatrixClass matrix;
void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    waitForMatrixReady();
    uint16_t VID = 0;
    VID = matrix.getDeviceVID();
    if(VID != 0x2886)
    {
        SERIAL.println("Can not detect led matrix!!!");
        while(1);
    }
    SERIAL.println("Matrix init success!!!");
    
}

void loop()
{
    for(int i=0;i<35;i++)
    {
        matrix.displayEmoji(i,5000,true);
        delay(5000);
    }
}
```

:::note
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::success
        Si todo va bien, ahora puedes ver que la matriz LED muestra:
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_wiki.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_wiki.gif" alt="pir" width={600} height="auto" /></p>

### Hazlo tú mismo

Ahora hablemos sobre hacerlo tú mismo.

:::note
        En esta versión del firmware, si quieres crear tu propia imagen con el serial de UNO, necesitas modificar el archivo de arduino. Si usas mega o lotus, el cambio no será necesario.
:::

> Localiza la carpeta de configuración de arduino **xxxxx\Arduino\hardware\arduino\avr\libraries\Wire\src**, abre el archivo **Wire.h**

cambia

```
#define BUFFER_LENGTH 32
```

en

```
#define BUFFER_LENGTH 128
```

> Luego localiza la carpeta de configuración de arduino **xxxxx\Arduino\hardware\arduino\avr\libraries\Wire\src\utility**, abre el archivo **twi.h**.

cambiar

```
#define TWI_BUFFER_LENGTH 32
```

en

```
#define TWI_BUFFER_LENGTH 128
```

---

Comencemos con el DIY.

- **Paso 1.** Descarga el [editor de imágenes](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/docs.zip), es un archivo zip, descomprímelo.

- **Paso 2.** Encuentra el **index.html** en la carpeta **doc-->doc**, haz doble clic para abrirlo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/DIY.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/DIY.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Crea tus propias imágenes, cuando termines una, haz clic en **Insert** en el panel de control, entonces puedes editar otra, cuando termines toda la secuencia de imágenes puedes copiar el código en la zona de código.

- **Paso 4.** Reemplaza el bloque de código siguiente línea 9 **unit64_t example[]** con tu propio código.

```cpp
#include "grove_two_rgb_led_matrix.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

uint64_t example[] = {

  0xffff5e5e5e5effff,
  0xff5effffffff5eff,
  0x5eff5effff5eff5e,
  0x5effffffffffff5e,
  0x5eff5effff5eff5e,
  0x5effff5e5effff5e,
  0xff5effffffff5eff,
  0xffff5e5e5e5effff,
 
  0xffff29292929ffff,
  0xff29ffffffff29ff,
  0x29ff29ffff29ff29,
  0x29ffffffffffff29,
  0x29ff29292929ff29,
  0x29ffffffffffff29,
  0xff29ffffffff29ff,
  0xffff29292929ffff,
 
  0xffff00000000ffff,
  0xff00ffffffff00ff,
  0x00ff00ffff00ff00,
  0x00ffffffffffff00,
  0x00ffff0000ffff00,
  0x00ff00ffff00ff00,
  0xff00ffffffff00ff,
  0xffff00000000ffff
};

void waitForMatrixReady()
{
    delay(1000);
}

GroveTwoRGBLedMatrixClass matrix;
void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    waitForMatrixReady();
    uint16_t VID = 0;
    VID = matrix.getDeviceVID();
    if(VID != 0x2886)
    {
        SERIAL.println("Can not detect led matrix!!!");
        while(1);
    }
    SERIAL.println("Matrix init success!!!");
   
}

void loop()
{
 for (int i=0;i<3;i++) {
        matrix.displayFrames(example+i*8, 200, false, 1);
        delay(500);
    }
}
```

:::success
        Si todo va bien, ahora puedes ver que la matriz LED muestra:
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_smile.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_smile.gif" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - RGB LED Matrix Driver Eagle Files](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip)

- **[Zip]** [RGB LED Matrix 8x8 Eagle Files](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/RGB%20LED%20Matrix%208x8.zip)

- **[Zip]** [Seeed_RGB_LED_Matrix Library](https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix/archive/master.zip)

- **[PDF]** [Datasheet MY9221](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf)

- **[PDF]** [Datasheet MP2155](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MP2155.pdf)

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
