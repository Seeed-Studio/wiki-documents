---
description: Grove - Pantalla Alfanumérica Cuádruple Roja de 0.54 pulgadas
title: Grove - Pantalla Alfanumérica Cuádruple Roja de 0.54 pulgadas
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-0.54_inch_Red_Quad_Alphanumeric_Display
last_update:
  date: 1/7/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front.png" alt="pir" width={600} height="auto" /></p>

Este módulo es una pantalla alfanumérica de 4 dígitos con alto brillo y retroiluminación roja, cada dígito consiste en un tubo digital de 14 segmentos. La pantalla de 7 segmentos comúnmente utilizada, como nuestro [Grove - 4-Digit Display](https://www.seeedstudio.com/Grove-4-Digit-Display.html) solo puede mostrar los números 0-9 y un número limitado de letras. En contraste, la pantalla digital de 14 segmentos no tiene esta limitación, puede mostrar todos los caracteres, por eso la llamamos pantalla alfanumérica.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/seve-seg-compare-14-seg.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/seve-seg-compare-14-seg.png" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>Pantalla de 7 segmentos vs pantalla de 14 segmentos</b><i> </i></div>

La altura del dígito es de 0.54 pulgadas y el LED rojo utilizado en este módulo tiene un brillo súper alto, por lo que puedes verlo a unos metros de distancia.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/digit-height.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/digit-height.jpg" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>Altura de la Pantalla Alfanumérica de 0.54 pulgadas</b><i> </i></div>

Usualmente, la pantalla de 14 segmentos necesita usar 17 o más cables para controlar la pantalla, lo que significa que una gran cantidad de IO de tu placa de control principal (como Arduino) será ocupada. Con la ayuda del chip HT16K33 integrado y el conector Grove, la convertimos en una pantalla i2c, solo cuatro cables son suficientes. Sin soldadura problemática y sin cableado complicado, si estás usando [seeeduino](https://www.seeedstudio.com/seeeduino-boards-c-987.html), es realmente plug and play, muy fácil.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pins-compare.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pins-compare.jpg" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>18 pines vs 4 pines</b><i> </i></div>

Hemos lanzado muchas [pantallas](https://www.seeedstudio.com/displays-c-929.html) para Arduino, raspberry pi, Beaglebone y otros SBC(Single Board Computer), ahora te traemos el Grove - 0.54'' Red Quad Alphanumeric Display, puedes usarlo para mostrar una palabra de cuatro letras, como 'Love', o puedes convertirlo en un reloj. En resumen, la pantalla de 14 segmentos significa más posibilidades y creatividad. Esperamos que te ayude a crear proyectos más interesantes.

En caso de que solo necesites una pantalla alfanumérica de doble dígito, puedes revisar el
[Grove - 0.54" Red Dual Alphanumeric Display](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html).

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)

## Características

- Puede mostrar todas las letras y números
- Brillo ultra alto: 30mcd
- Grove I2C, solo requiere dos pines de E/S
- Controladores integrados, fácil de usar
- Pantalla de cátodo

## Especificaciones

| Parámetro                           | Valor           |
|-------------------------------------|-----------------|
| Voltaje de alimentación             | 3.3V / 5V       |
| Temperatura ambiente de operación  | -30°C a 85°C    |
| Pantalla LED                        | JM-S05442ASR-001|
| Controlador del Driver LED          | HT16K33         |
| Color del LED                       | Rojo            |
| Brillo ultra alto                   | 30mcd           |
| Altura del LED                      | 0.54 pulgadas   |
| Segmento LED                        | 14              |
| Tamaño                              | 40 * 60mm       |
| Interfaz de salida                  | I2C             |
| Dirección I2C (Seleccionable)       | 0x71(Por defecto)|

## Aplicaciones

- Indicadores de control industrial
- Relojes digitales, termómetros, contadores, multímetros
- Lecturas de instrumentación
- Otras aplicaciones de consumo
- Pantallas LED

## Pinout

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

Aquí está la tabla sobre las direcciones I2C.

| A2 | A1 | A0 | Dirección I2C |
|----|----|----|-------------|
| 0  | 0  | 0  | 0x70        |
| 0  | 0  | 1  | 0x71(Por defecto)        |
| 0  | 1  | 0  | 0x72        |
| 0  | 1  | 1  | 0x73        |
| 1  | 0  | 0  | 0x74        |
| 1  | 0  | 1  | 0x75        |
| 1  | 1  | 0  | 0x76        |
| 1  | 1  | 1  | 0x77        |

:::warning
    Si conectas múltiples pantallas, tienes que proporcionar VCC y GND externos a cada pantalla por separado y conectar SDA, SCL y GND a la placa Seeeduino.  
:::

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield |Grove - Pantalla Alfanumérica Cuádruple Roja de 0.54"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front-s.png" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
    **1** Por favor conecta el cable USB suavemente, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexión de Hardware

- **Paso 1.** Conecta el Grove - Pantalla Alfanumérica Cuádruple Roja de 0.54" al puerto **I2C** del Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/wiki_connect.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/wiki_connect.png" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Pantalla Alfanumérica Cuádruple Roja de 0.54" al Seeeduino como se muestra a continuación.

| Seeeduino       | Grove - Pantalla Alfanumérica Cuádruple Roja de 0.54" |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| SDA           | Blanco                   |
| SCL           | Amarillo                  |

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::
**1. Comenzando con display_basic**

- **Paso 1.** Descarga la [Librería Grove - 0.54" Red Quad Alphanumeric Display](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33) desde Github.
- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- **Paso 3.** Abre **Arduino IDE -> File -> Examples -> Seeed_Alphanumeric_Display_HT16K33 -> display_basic**
- **Paso 4.** Descomenta el **tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR)** como se muestra a continuación, tienes que descomentarlo para todos los otros ejemplos también.

```
    // If using four digital tubes, use this configuration.
       tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR);

    // If using two digital tubes, use this configuration.
    // tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR);
```

- **Paso 5.** Sube el ejemplo a Arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).
- **Paso 4.** Puedes ver que el led está ejecutando 12 -> 4567 -> AB -> abcd repetidamente.

**2. Otros Ejemplos**

- **display_custom:** Muestra caracteres individuales y puntos.
- **display_scroll_string:** Muestra cadena de desplazamiento más larga que 4.
- **display_scroll_number:** Muestra número de desplazamiento mayor que 9999.
- **number_increment:** Muestra número incremental (2 tubos de la derecha).
- **combine_two_displays:** Puedes conectar 2 Grove - 0.54" Red Quad Alphanumeric Displays o Grove - 0.54" Red Dual Alphanumeric Display o ambos Grove - 0.54" Red Dual Alphanumeric Display y Grove - 0.54" Red Quad Alphanumeric Display.

Si usas 2 Grove - 0.54" Red Qual Alphanumeric Displays, por favor modifica el código como se muestra a continuación.

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x75     //Grove - 0.54" Red Qual Alphanumeric Displays Changed I2C address
#define I2C_ADDR_DEFAULT_FOUR       0x71     //Grove - 0.54" Red Qual Alphanumeric Displays Default I2C address


tube1.setTubeType(TYPE_4,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

Si usas tanto Grove - 0.54" Red Dual Alphanumeric Display como Grove - 0.54" Red Qual Alphanumeric Display, por favor modifica el código como se muestra a continuación.

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x70     //Grove - 0.54" Red Dual Alphanumeric Displays Changed I2C address
#define I2C_ADDR_DEFAULT_FOUR       0x71     //Grove - 0.54" Red Qual Alphanumeric Displays Default I2C address


tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

:::warning
    Si conectas 2 módulos, el tubo rojo se verá un poco oscuro debido al suministro de energía limitado de Arduino.   
:::

**3. API**

- **Init(NUMERIC_I2C_ADDR):** inicializa el dispositivo con dirección I2C, Grove - 0.54" Red Quad Alphanumeric Display I2C la dirección por defecto es 0x71.
- **setBrightness(15):** establece el brillo, el rango es 0-15, a mayor brillo, mayor consumo de energía.
- **setBlinkRate(BLINK_OFF):** establece el intervalo de parpadeo, puedes configurarlo como BLINK_OFF/BLINK_2HZ/BLINK_1HZ.
- **displayNum(1234567,500):** muestra el número, hay 2 parámetros. El primer parámetro es el número y el segundo es el intervalo de desplazamiento(ms). Si el num &lt;10000, los tubos muestran un número estático. De lo contrario, muestra un número con desplazamiento. El intervalo de desplazamiento(ms) solo funciona en modo de desplazamiento y puedes establecer el intervalo como 0.
- **displayString("ABCDEFGHJIYZ",500):** muestra el carácter, hay 2 parámetros. El primer parámetro es el carácter y el segundo es el intervalo de desplazamiento(ms). Si el carácter tiene menos de 4 caracteres, los tubos muestran un carácter estático. De lo contrario, muestra caracteres con desplazamiento. El intervalo de desplazamiento(ms) solo funciona en modo de desplazamiento y puedes establecer el intervalo como 0. La función no admite letras minúsculas y las muestra igual que las letras mayúsculas.
- **setTubeSingleChar(FIRST_TUBE,'t'):** establece el carácter individual @ tubo específico.
- **tube.setPoint(true,false):** enciende y apaga los 2 puntos. Este ejemplo establece el primer punto encendido y el segundo apagado.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo de esquemas Grove - 0.54" Quad Dual Alphanumeric Display](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip)
- **[PDF]** [Hoja de datos del módulo LED](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/DIP-LED-4.pdf)
- **[PDF]** [Hoja de datos HT16K33](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/HT16K33.pdf)
- **[PDF]** [Hoja de datos MPS MP2155](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/MPS_MP2155%20datasheetpdf.pdf)
- **[Library]** [Librería Grove - 0.54" Qual Dual Alphanumeric Display](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)

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
