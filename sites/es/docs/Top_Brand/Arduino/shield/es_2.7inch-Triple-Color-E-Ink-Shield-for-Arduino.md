---
description: Shield E-link Tricolor de 2.7 pulgadas para Arduino
title: Shield E-link Tricolor de 2.7 pulgadas para Arduino
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
nam2.7'' Triple-color E-link Shield for Arduinoe: 2.7'' Triple-Color E-Ink Shield for Arduino
category: Shield
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 104030067
tags:
--- -->

![](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/2.7-Triple-Color-E-Ink-Shield-for-Arduino-all.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/2-7-Triple-Color-E-Ink-Shield-for-Arduino-p-4069.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

La pantalla E-Ink también conocida como pantalla E-paper, hemos lanzado varias pantallas E-Ink de varios tamaños, incluyendo el módulo grove E-Ink, el hat E-Ink para raspberry pi. Ahora te presentamos al nuevo miembro de la familia Seeed E-Ink -- la Pantalla E-Ink Tricolor de 2.7'' para Arduino.

La Pantalla E-Ink Tricolor de 2.7'' es un shield de pantalla E-Ink para Arduino, que contiene 264x176 píxeles, y puede mostrar blanco/negro/rojo para cada píxel. Este shield se comunica con Arduino a través de la interfaz SPI y reserva una interfaz Grove I2C para usar con otros módulos. Con la ayuda de un circuito de comparación, el módulo logra la auto-adaptación del sistema de voltaje de 3.3V y 5V.

Comparado con las pantallas LCD tradicionales, E-Ink elimina la necesidad de retroiluminación y por lo tanto el consumo de energía es ultra bajo. Y el E-Ink tiene un ángulo de visión extremadamente amplio con muy alto contraste de modo que incluso puede mostrarse claramente bajo la luz solar directa. Además de eso, el E-Ink puede mostrar imágenes configuradas por el usuario durante mucho tiempo (por semanas o incluso meses) sin ningún suministro de energía. ¡Qué pantalla tan increíble!

Si estás interesado, puedes hacer clic en la imagen de abajo para ver los diferentes tamaños de E-Ink para Arduino o E-Ink para Raspberry Pi.

## Características

- Consumo de energía ultra bajo
- Ángulo de visión ultra amplio
- Alto contraste

## Aplicaciones

- Escena de pantalla de bajo consumo
- Escena de pantalla exterior
- Instrumento industrial
- Etiqueta de estante

## Plataforma Soportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

#### Materiales Requeridos

| Seeeduino Lotus | 2.7''Triple Color E-Ink Shield para Arduino|
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![enter image description here](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/2.7-Triple-Color-E-Ink-Shield-for-Arduino-integrate-thumbnail.png)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/2-7-Triple-Color-E-Ink-Shield-for-Arduino-p-4069.html)|

#### Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/hardware_overview.png)

:::note
**1** Por favor conecta el cable USB, la interfaz FPC E-Ink y el Triple-Color E-Ink Shield al Seeeduino con cuidado, de lo contrario podrías dañar el puerto.
:::

- **Paso 1.** Conecta el Triple-Color E-Ink Shield al Seeeduino.

- **Paso 2.** Conecta el Seeeduino a la PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Ejecuta el código e incluso tu propia imagen se mostrará en la pantalla.

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/connection.jpg" alt="Triple-Color E-Ink Shield for Arduino' connect" title="connection" />
<figcaption><b>Figura 2</b>. <i>conexión</i></figcaption>
</figure>
</div>

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga el [código de demostración](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/Seeed_Elink_Shield.zip).

- **Paso 2.** Abre el archivo **epd2in7b-demo.ino** con tu IDE de Arduino.

- **Paso 3.** Copia todo el archivo **Seeed_Elink_Shield** y pégalo en tu archivo de biblioteca del IDE de Arduino.

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
Si todo va bien, verás que la pantalla parpadea, y la pantalla mostrará el logo de Seeed
:::

### DIY

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/5.jpg" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="DIY demo" />
<figcaption><b>Figura 3</b>. <i>demostración DIY</i></figcaption>
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

En realidad, para mostrar tu propia imagen, solo necesitas reemplazar esos dos arrays de imagen. Es decir, solo necesitas obtener tu propio array de imagen. Afortunadamente, hay una herramienta [Image2LCD](https://www.buydisplay.com/download/software/Image2Lcd.zip), puedes buscarla en Google, no es difícil de encontrar. Supongamos que has descargado e instalado este software. A continuación, te mostraremos cómo usar este software.

- **Paso 1.** Prepara una imagen de 264*176 píxeles.

:::tip
La pantalla de tinta electrónica solo admite imágenes con nivel de gris de segundo orden, es decir, blanco y negro. Si el nivel de gris de la imagen es demasiado alto, no se puede mostrar completamente todo el color.
:::

- **Paso 2.** Abre el software **Image2LCD** y haz clic en el icono Abrir para abrir tu imagen. Verás la siguiente ventana.

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/image2LCD_1.png" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="DIY demo" />
<figcaption><b>Figura 4</b>. <i>Configuración de Image2LCD</i></figcaption>
</figure>
</div>

Por favor marca la opción correspondiente como se muestra arriba.

>1. Tipo de archivo de salida -> *.C  
>2. Modo de escaneo -> Escaneo Horizontal  
>3. BitsPixel -> monocromo  
>4. Ancho y Alto Máximo -> 264 x 176  
>5. Color inverso: Si necesitas marcar esta opción depende del efecto que necesites mostrar. Para más detalles, consulta la **Tabla 1** a continuación.

- **Paso 3.** Después de configurar las opciones anteriores, solo necesitas hacer clic en el botón **Guardar** en la esquina superior izquierda para generar el array de imagen correspondiente. Luego reemplaza el array factoryCode con tu propio array de imagen.

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/image3.png" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="" />
<figcaption><b>Figura 5</b>. <i>Solo reemplaza la parte seleccionada con el cuadro rojo, lo que significa que debes mantener el nombre del array</i></figcaption>
</figure>
</div>

Como mencionamos anteriormente, hay dos arrays, puedes estar confundido: ¿cuál reemplazar? Bueno, depende de qué efecto de visualización quieras. Consulta la **Tabla 1**. Y después de elegir un color para reemplazar, recuerda eliminar el código del otro color pero debes mantener el nombre del array.

|<br />Visualización|<p style={{background: 'black'}}><font color="red">Fondo negro<br /> Imagen roja</font></p>|<p style={{background: 'white'}}><font color="red">Fondo blanco<br /> Imagen roja</font></p>|<p style={{background: 'red'}}><font color="black">Fondo rojo<br /> Imagen negra</font></p>|<p style={{background: 'red'}}><font color="white">Fondo rojo<br /> Imagen blanca</font></p>|
|---|----|----|----|----|
|Array Negro|00|FF|00|FF|
|Array Rojo|Imagen(Invertida)|Imagen(Invertida)|Imagen|Imagen|

|<br />Visualización|<p style={{background: 'red'}}><font color="black">Pantalla completa<br /> roja </font></p>|<p style={{background: 'white'}}><font color="black">Fondo blanco<br /> Imagen negra</font></p>|<p style={{background: 'red'}}><font color="black">Fondo rojo<br /> rojo</font></p>|<p style={{background: 'black'}}><font color="white">Fondo negro<br /> Imagen blanca</font></p>|
|---|----|----|----|----|
|Array Negro|Imagen(Invertida)|Imagen(Invertida)|Imagen|Imagen|
|Array Rojo|00|FF|00|FF|

<div align="center"><b>Tabla 1.</b><i>Efecto de visualización del array</i></div>

:::note
a.**00** significa que todos los elementos del array son 0x00, en realidad necesitas 2888 0x00<br />
b.**FF** significa que todos los elementos del array son 0xFF, en realidad necesitas 2888 0xFF  <br />
c.**Imagen(Invertida)** significa que necesitas marcar la opción **Invertir color** en el **Paso 2(Figura 4)** <br />  
d.**Imagen** significa no marcar la opción **Invertir color** en el **Paso 2(Figura 4)**
:::

:::tip
*¿Crear un array de 2888 0x00 o 0xFF?*  
*No te preocupes, entendemos tu dolor, puedes simplemente hacer clic en los archivos 0x00.c y 0xFF.c y copiarlos en tu código.*
:::

[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/FF.c)

Consideramos que el estado original es pantalla completa blanca. Al actualizar la imagen, el array negro se actualiza primero, luego se actualiza el array rojo, y la imagen del array rojo sobrescribe la imagen negra.

Esta pantalla es de 152 x 152, por lo que hay 152x152=23104 píxeles, cada píxel está controlado por un bit. El elemento en el array es un número hexadecimal de dos dígitos, como **0xF0**. Convirtiendo **0xF0** a un número binario obtendremos
**1111 0000**. Un píxel con un valor de 1 mostrará blanco, y un píxel con un valor de 0 mostrará el color del array correspondiente (rojo o negro). Lo que significa que cada elemento en el array de imagen controla 8 píxeles. Así que necesitas un array de 23104/8=2888 elementos.

**Paso 4.** Descarga el código en tu arduino, luego conecta el módulo de pantalla a la placa arduino. Después de parpadear por un momento, verás el patrón que configuraste.

## Visor de Esquemas Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/res/2.7-Triple-Color-E-Ink-Display-for-Arduino.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [2.7-Triple-Color-E-Ink-Display-for-Arduino.zip](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/res/2.7-Triple-Color-E-Ink-Display-for-Arduino.zip)
- **[Zip]** [Librería de Código Demo](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/Seeed_Elink_Shield.zip)

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
