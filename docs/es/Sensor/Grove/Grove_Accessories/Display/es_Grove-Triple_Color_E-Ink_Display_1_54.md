---
description: Grove - Pantalla E-Ink de Triple Color 1.54"
title: Grove - Pantalla E-Ink de Triple Color 1.54"
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Triple_Color_E-Ink_Display_1_54
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/main.jpg" alt="pir" width={600} height="auto" /></p>

El Grove - Pantalla E-Ink de Triple Color 1.54'' es una pantalla que aún puede mostrar contenido después de apagarse, la llamamos E-Paper (papel electrónico) o E-Ink. La pantalla es una pantalla electroforética de matriz activa TFT, con interfaz y un
diseño de sistema de referencia. El área activa de 1.54 pulgadas contiene 152x152 píxeles, y tiene capacidades de visualización completa de 1-bit blanco/negro y 1-bit rojo.

Debido a las ventajas como el consumo de energía ultra bajo, amplio ángulo de visión, visualización clara sin electricidad, es una opción ideal para aplicaciones como etiquetas de estante, instrumentos industriales, y así sucesivamente.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)

## Características

- Alto contraste
- Alta reflectancia
- Ángulo de visión ultra amplio
- Consumo de energía ultra bajo
- RAM de pantalla integrada

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura de funcionamiento| 0～40℃|
|Temperatura de almacenamiento| -25～60℃|
|Rango de humedad|40~70%RH|
|Resolución de pantalla|152(H) x 152(V) píxeles|
|DPI|140|
|Interfaz|UART|
|Velocidad de baudios con Arduino|230400|

:::note
        La actualización continua frecuente causará daños irreparables al E-Ink. Se recomienda que el intervalo de actualización sea mayor a 180s.
:::

## Pinout

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/pinout.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' pinout" title="Pinout" />
    <figcaption><b>Figura 1</b>. <i>pinout</i></figcaption>
  </figure>
</div>

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Demo de Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Pantalla E-Ink de Triple Color 1.54''|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove - Base Shield en Seeeduino.

- **Paso 2.** Conecta Seeeduino a la PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Conecta el Grove - Pantalla E-Ink de Triple Color 1.54'' al puerto **UART** del Grove-Base Shield.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/connect.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' connect" title="connection" />
    <figcaption><b>Figura 2</b>. <i>conexión</i></figcaption>
  </figure>
</div>

:::note
      Este módulo se comunica con la placa de control a través de la interfaz UART. Si usas la placa Atmega328p como Arduino UNO o Seeeduino V4.2, necesitas desconectar este módulo antes de descargar el código, porque solo hay un puerto serie por hardware.
      Si este módulo ocupa el puerto UART, el programa de descarga no puede usar el puerto serie. Sin embargo, si usas una placa SAMD, como seeeduino Lotus, Arduino Mega, hay dos o más puertos serie por hardware disponibles. Por lo tanto, no es necesario desconectar el módulo antes de la descarga.  
:::

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga el [código Demo](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_1.54/tree/master/examples/E_ink154_factoryCode) desde Github.

- **Paso 2.** Abre el archivo **E_ink154_factoryCode.ino** con tu IDE de Arduino.

- **Paso 3.** Sube el demo. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::success
  Si todo va bien, verás la pantalla parpadeando, y la pantalla mostrará el logo de seeed
:::

### DIY

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/demo_wiki.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title="DIY demo" />
    <figcaption><b>Figura 3</b>. <i>Demo DIY</i></figcaption>
  </figure>
</div>

Será muy divertido mostrar tu propia imagen, ahora, te mostraremos cómo hacer tu propio E-paper DIY.

Antes de empezar, por favor revisa el **E_ink154_factoryCode.ino** nuevamente. Puedes encontrar los dos arrays fácilmente.

```cpp
const unsigned char IMAGE_BLACK[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

y

```cpp
const unsigned char IMAGE_RED[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

Como puedes ver, los dos arrays se llaman **const unsigned char IMAGE_BLACK[]** y **const unsigned char IMAGE_RED[]**,
> **const unsigned char IMAGE_BLACK[]** se usa para mostrar imágenes en negro  
> **const unsigned char IMAGE_RED[]** se usa para mostrar imágenes en rojo

En realidad, para mostrar tu propia imagen, solo necesitas reemplazar esos dos arrays de imagen. Es decir, solo necesitas obtener tu propio array de imagen. Afortunadamente, existe una herramienta **Image2LCD**, puedes buscarla en Google, no es difícil de encontrar. Supongamos que has descargado e instalado este software. A continuación, te mostraremos cómo usar este software.

- **Paso 1.** Prepara una imagen de 152*152 píxeles.

:::tip
        La pantalla de tinta electrónica solo admite imágenes con nivel de gris de segundo orden, es decir, blanco y negro. Si el nivel de gris de la imagen es demasiado alto, todo el color no se puede mostrar completamente.
:::

- **Paso 2.** Abre el software **Image2LCD** y haz clic en el icono Abrir para abrir tu imagen. Verás la siguiente ventana.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/image2LCD_1.png" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title="DIY demo" />
    <figcaption><b>Figura 4</b>. <i>Configuración de Image2LCD</i></figcaption>
  </figure>
</div>

Por favor marca la opción correspondiente como se muestra arriba.

>1. Tipo de archivo de salida -> *.C  
>2. Modo de escaneo -> Escaneo Horizontal  
>3. BitsPixel -> monocromo  
>4. Ancho y Alto Máximo -> 152 x 152  
>5. Invertir color: Si necesitas marcar esta opción depende del efecto que necesites mostrar. Para más detalles, consulta la **Tabla 1** a continuación.

- **Paso 3.** Después de configurar las opciones anteriores, solo necesitas hacer clic en el botón **Guardar** en la esquina superior izquierda para generar el array de imagen correspondiente. Luego reemplaza el array factoryCode con tu propio array de imagen.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/code.png" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title />
    <figcaption><b>Figura 5</b>. <i>Solo reemplaza la parte seleccionada con el cuadro rojo, lo que significa que debes mantener el nombre del array</i></figcaption>
  </figure>
</div>

Como mencionamos anteriormente, hay dos arrays, puedes estar confundido: ¿cuál reemplazar? Bueno, depende de qué efecto de visualización quieras. Consulta la **Tabla 1**.

|Visualización|<font color="red">Fondo negro Imagen roja</font>|<font color="red">Fondo blanco Imagen roja</font>|<font color="black">Fondo rojo Imagen negra</font>|Fondo rojo Imagen blanca |
|---|----|----|----|----|
|Array Negro|00|FF|00|FF|
|Array Rojo|Imagen(Invertida)|Imagen(Invertida)|Imagen|Imagen|
|Visualización|<font color="red">Pantalla completa      roja</font>|<font color="black">Fondo blanco Imagen negra</font>|<font color="red">Fondo rojo rojo</font>|Fondo negro Imagen blanca |
|---|----|----|----|----|
|Array Negro|Imagen(Invertida)|Imagen(Invertida)|Imagen|Imagen|
|Array Rojo|00|FF|00|FF|

<div align="center"><b>Tabla 1.</b><i>Efecto de visualización del array</i></div>

:::note
        a.**00** significa que todos los elementos del array son 0x00, en realidad necesitas 2888 0x00   
        b.**FF** significa que todos los elementos del array son 0xFF, en realidad necesitas 2888 0xFF  
        c.**Imagen(Invertida)** significa que necesitas marcar la opción **Invertir color** en el **Paso 2(Figura 4)**  
        b.**Imagen** significa no marcar la opción **Invertir color** en el **Paso 2(Figura 4)**
:::
:::tip
        *¿Crear un array de 2888 0x00 o 0xFF?*  
        *No te preocupes, entendemos tu dolor, simplemente puedes hacer clic en los archivos 0x00.c y 0xFF.c y copiarlos en tu código.*
:::

[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/FF.c)

Consideramos que el estado original es pantalla completa blanca. Al actualizar la imagen, primero se actualiza el array negro, luego se actualiza el array rojo, y la imagen del array rojo sobrescribe la imagen negra.

Esta pantalla es de 152 x 152, por lo que hay 152x152=23104 píxeles, cada píxel está controlado por un bit. El elemento en el array es un número hexadecimal de dos dígitos, como **0xF0**. Convirtiendo **0xF0** a un número binario obtendremos
**1111 0000**. Un píxel con un valor de 1 mostrará blanco, y un píxel con un valor de 0 mostrará el color del array correspondiente (rojo o negro). Lo que significa que cada elemento en el array de imagen controla 8 píxeles. Así que necesitas un array de 23104/8=2888 elementos.

**Paso 4.** Descarga el código en tu arduino, luego conecta el módulo de pantalla a la placa arduino. Después de parpadear por un momento, verás el patrón que configuraste.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Triple Color E-Ink Display 1.54'' Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip)

- **[PDF]** [Hoja de Datos E-paper 1.54inch](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/E-Ink%20152X152-Black%2CWhite%20and%20Red-1.54inch.pdf)

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
