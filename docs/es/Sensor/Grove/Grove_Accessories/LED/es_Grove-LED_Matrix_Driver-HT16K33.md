---
description: Grove - LED Matrix Driver (HT16K33)
title: Grove - LED Matrix Driver (HT16K33)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-LED_Matrix_Driver-HT16K33
last_update:
  date: 1/7/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg" alt="pir" width={600} height="auto" /></p>

La Matriz LED es de bajo costo y se usa comúnmente para mostrar números e imágenes simples. El Grove - LED Matrix Driver es un producto basado en I2C que te permite controlar la matriz LED con nuestras librerías preparadas y fáciles de usar, o puedes crear tu propia librería para controlarlo según tus necesidades. La Matriz LED de 8*8 se puede ensamblar y desensamblar fácilmente de la placa del controlador, por lo que es conveniente cambiar diferentes matrices LED de colores según tus necesidades.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
<!-- [<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Versión

<!-- | Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - LED Matrix Driver (HT16K33) | Initial                                                                                               | Sep 2018      | -->

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>Versión del Producto</th>
            <th>Cambios</th>
            <th>Fecha de Lanzamiento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Grove - LED Matrix Driver (HT16K33)</td>
            <td>Inicial</td>
            <td>Sep 2018</td>
        </tr>
    </tbody>
</table>
</div>

## Características

- Oscilador RC integrado
- Incremento automático de dirección R/W
- Máx. 8 x 8 patrones
- Interfaz de bus I2C

## Especificaciones

<!-- |Item|Value|
|---|---|
|Supply Voltage|3.3V / 5V|
|LED Matrix Dot NO.|8 * 8|
|Operating temperature|-40～85℃|
|Storage temperature|-50～125℃|
|Interface|I2C|
|I2C address|0x70(defult) 0x71~0x77(configurable)|
|size|L: 40mm W: 40mm H: 17mm| 
|Weight|8.8g|
|Package size|L: 140mm W: 90mm H: 18mm|
|Gross Weight|15g| -->

<div class="table-center">  
    <table align="center">  
        <thead>  
            <tr>  
                <th>Elemento</th>  
                <th>Valor</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td>Voltaje de alimentación</td>  
                <td>3.3V / 5V</td>  
            </tr>  
            <tr>  
                <td>Número de puntos de matriz LED</td>  
                <td>8 * 8</td>  
            </tr>  
            <tr>  
                <td>Temperatura de funcionamiento</td>  
                <td>-40～85℃</td>  
            </tr>  
            <tr>  
                <td>Temperatura de almacenamiento</td>  
                <td>-50～125℃</td>  
            </tr>  
            <tr>  
                <td>Interfaz</td>  
                <td>I2C</td>  
            </tr>  
            <tr>  
                <td>Dirección I2C</td>  
                <td>0x70 (predeterminada) 0x71~0x77 (configurable)</td>  
            </tr>  
            <tr>  
                <td>Tamaño</td>  
                <td>L: 40mm W: 40mm H: 17mm</td>  
            </tr>  
            <tr>  
                <td>Peso</td>  
                <td>8.8g</td>  
            </tr>  
            <tr>  
                <td>Tamaño del paquete</td>  
                <td>L: 140mm W: 90mm H: 18mm</td>  
            </tr>  
            <tr>  
                <td>Peso bruto</td>  
                <td>15g</td>  
            </tr>  
        </tbody>  
    </table>
</div>  

:::note
Hay 8 posibles direcciones I2C para este grove, desde 0x70 hasta 0x77. La dirección I2C por defecto es 0x77. Puedes cambiar la dirección I2C haciendo algunas soldaduras como se indica en la tabla siguiente.
:::
<!-- |I2C address|Connection|
|---|---|
|0x70|Disconnect: A0 A1 A2|
|0x71|Disconnect: A1 A2, Connect: A0|
|0x72|Disconnect: A0 A2, Connect: A1|
|0x73|Disconnect: A2, Connect: A1 A0|
|0x74|Disconnect: A0 A1, Connect: A2|
|0x75|Disconnect: A1, Connect: A0 A2|
|0x76|Disconnect: A0, Connect: A1 A2|
|0x77|Connect: A0 A1 A2| -->

<div class="table-center">  
    <table align="center">  
        <thead>  
            <tr>  
                <th>Dirección I2C</th>  
                <th>Conexión</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td>0x70</td>  
                <td>Desconectar: A0 A1 A2</td>  
            </tr>  
            <tr>  
                <td>0x71</td>  
                <td>Desconectar: A1 A2, Conectar: A0</td>  
            </tr>  
            <tr>  
                <td>0x72</td>  
                <td>Desconectar: A0 A2, Conectar: A1</td>  
            </tr>  
            <tr>  
                <td>0x73</td>  
                <td>Desconectar: A2, Conectar: A1 A0</td>  
            </tr>  
            <tr>  
                <td>0x74</td>  
                <td>Desconectar: A0 A1, Conectar: A2</td>  
            </tr>  
            <tr>  
                <td>0x75</td>  
                <td>Desconectar: A1, Conectar: A0 A2</td>  
            </tr>  
            <tr>  
                <td>0x76</td>  
                <td>Desconectar: A0, Conectar: A1 A2</td>  
            </tr>  
            <tr>  
                <td>0x77</td>  
                <td>Conectar: A0 A1 A2</td>  
            </tr>  
        </tbody>  
    </table>
</div>  

Por ejemplo, si quiero cambiar la dirección a 0x73, necesito conectar los pads A1, A0 y desconectar el pad A2. Entonces obtendré la dirección 0b01110011, que es 0x73.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png" alt="pir" width={600} height="auto" /></p>

## Aplicaciones típicas

- Indicadores de control industrial
- Relojes digitales, termómetros, contadores, multímetros
- Conjuntos combinados
- Conjuntos VCR
- Lecturas de instrumentación
- Otras aplicaciones de consumo
- Pantallas LED

## Descripción general del hardware

### Distribución de pines

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield|Grove-LED Matrix Driver| matrix LED - Red|
|--------------|-------------|-----------------|---------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/LED_matrix.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/20mm-8-8-square-matrix-LED-Red-p-36.html)

:::note
**1.** Por favor conecta el cable USB suavemente, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2.** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el LED de matriz cuadrada roja al Grove-LED Matrix Driver.

- **Paso 2.** Conecta el Grove - LED Matrix Driver al puerto **I2C** del Grove-Base Shield.

- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples -->Grove - LED Matrix Driver(HT16K33 with 8*8 LED Matrix) --> display_bars**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Ábrelo en tu computadora haciendo clic en **basic_demo.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png" alt="pir" width={600} height="auto" /></p>

    3. O, puedes simplemente hacer clic en el icono
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include <Wire.h>
#include "Grove_LED_Matrix_Driver_HT16K33.h"

#include "SoftI2C.h"
#include "I2Cdev.h"

Default_IIC_Adapter hard_ware_iic;
Matrix_8x8 matrix;

void setup() {
    hard_ware_iic.begin();
    matrix.init(&hard_ware_iic,0x70);
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
}

void loop() {
    for (int i = 0; i < 33; i++) {
        // The input range of writeBar is [0-32]
        matrix.writeBar(i);
        matrix.display();
        delay(150);
    }
}
```

:::note
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

:::success
Si todo va bien, podrás ver varias barras mostrándose en la matriz LED.
:::

Si deseas ejecutar otros ejemplos, puedes hacer procesos similares y podrás ver diferentes pantallas.

### DIY

¿Estás dispuesto a hacer que la matriz LED muestre el emoji? Ahora, es tu turno de diseñar el tuyo propio. Prepárate con los requisitos de Hardware y Software listados anteriormente.

- **Paso 1.** Usa el [Editor de Matriz LED](http://xantorohara.github.io/led-matrix-editor/#) en línea para editar y crear animaciones para matrices LED de 8*8.

- **Paso 2.** Selecciona el color de los LEDs en la esquina superior derecha. En mi caso, elijo 'rojo' ya que estoy usando la Matriz LED Roja.

- **Paso 3.** Crea tu propio diseño simplemente haciendo clic en el punto en blanco.

- **Paso 4.** Copia el archivo hex generado según tu diseño. Hay dos formas de hacer esto:
  - copia el valor hex en la caja hex en la esquina inferior izquierda.
  - copia el código correspondiente en la sección de código Arduino/C.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Crea el nuevo archivo '.ino' bajo la misma carpeta con otros ejemplos de Matriz LED y copia el código de abajo.

```cpp
#include "Grove_LED_Matrix_Driver_HT16K33.h"
#include <Wire.h>

#include "SoftI2C.h"
#include "I2Cdev.h"

//put your own design hex group here.
const uint64_t Emoji[] = {
  0x3c4299a581a5423c,
  0x3c4281bd81a5423c,
  0x3c42a59981a5423c,
};

Default_IIC_Adapter hard_ware_iic;
Matrix_8x8 matrix;

void setup() {
  Wire.begin();
  matrix.init(&hard_ware_iic, 0x70);
  matrix.setBrightness(0);
  matrix.setBlinkRate(BLINK_OFF);
  /*************************************************************
    * Description
    *    Setting the blink rate of matrix
    * Parameter
    *    blink_type: BLINK_OFF, BLINK_2HZ, BLINK_1HZ
    * Return
    *    Null.
    *************************************************************/
}

void loop() {
  for (int i = 0; i < 3; i++) {
    matrix.writeOnePicture(Emoji[i]);
    /*************************************************************
        * Description
        *    Write a picture in display buffer.
        *    Call display() to show display buffer.
        * Parameter
        *    pic: A uint64_t type 8x8 matrix picture, you can make it at
        *         https://xantorohara.github.io/led-matrix-editor/#
        * Return
        *    Null.
        *************************************************************/
    matrix.display();
    /*************************************************************
        * Description
        *    Clear the display buffer.
        *    This function will display nothing on 8x8 Matrix after call display().
        * Parameter
        *    Null.
        * Return
        *    Null.
        *************************************************************/
    delay(500);
  }
}
```

- **Paso 6.** Sube tu proyecto a tu seeeduino.

:::success
Si todo va bien, tu Matriz LED se mostrará como se ve a continuación.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - LED Matrix Driver(HT16K33) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip)

- **[Zip]** [Biblioteca de Software Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [Hoja de Datos HT16K33](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/310040349,SMD-IC-Driver;SOP-28-1.pdf)

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
