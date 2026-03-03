---
description: Ethernet Shield V2.0
title: Ethernet Shield V2.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Ethernet_Shield_V2.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Ethernet Shield V2.0‏‎
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V2.0‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V2-0
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/IMG_0042.jpg)

¡Tu Ethernet Shield ahora recibe una renovación total! Este shield te proporciona conectividad instantánea a Internet con un controlador Ethernet de alta especificación, W5200, con el doble del tamaño de buffer que la v1.0 y soporte para hasta ocho conexiones TCP/UDP simultáneas. Una ranura SD incluida permite aplicaciones que requieren almacenar grandes cantidades de datos, como el registro de datos IoT. Gracias a un puerto RJ45 más bajo, puedes agregar flexiblemente la mayoría de shields encima de este Ethernet Shield.

Modelo:[SLD91000P](https://www.seeedstudio.com/depot/w5200-ethernet-shield-p-1577.html)

## Características ##

- Controlador Ethernet de alta velocidad W5200

- Interfaz SPI

- Buffer interno de 32 Kbytes

- Puerto Ethernet RJ45 mínimo

- Soporte para hasta ocho conexiones TCP/UDP simultáneas

- Función práctica de tarjeta SD

- Puertos Grove para I2C y UART preformados

## Interfaz ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Ethernet_Interface.jpg)

**Configuración de Hardware**

- RJ45: Puerto Ethernet;

- IC HX1198: puerto de señal 10/100BASE-T;

- IC W5200: un Controlador Ethernet TCP/IP cableado;

- U3: IC CJ117, regulador lineal de baja caída;

- U6: IC 74VHC125PW, buffer cuádruple;

- Tecla Reset: Reinicia el Ethernet shield y Arduino cuando se presiona;

- Tarjeta SD: soporta tarjeta Micro SD en FAT16 o FAT32; almacenamiento máximo es 2GB.

**Uso de pines en Arduino**

- D4: Selección de chip de tarjeta SD

- D10: Selección de Chip W5200

- D11: SPI MOSI

- D12: SPI MISO

- D13: SPI SCK

**Aviso:**

Tanto W5200 como la tarjeta SD se comunican con Arduino a través del bus SPI. Los pines 10 y 4 son pines de selección de chip para W5200 y la ranura SD. No pueden usarse como E/S general.

## Uso ##

Vamos a construir un servidor web simple que responda solicitudes de un cliente y almacene las lecturas de A0 a A5 en la tarjeta SD.

**Paso 1: Conexión**

1. Monta el Ethernet Shield v2.0 en tu Arduino;

2. Conecta el shield a tu computadora o un hub de red o un router con un cable Ethernet estándar;

3. Conecta Arduino a PC vía cable USB;

4. Inserta una tarjeta SD en la ranura de tarjeta SD.

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/IMG_0039.jpg)

**Paso 2: Subir el programa**

1.Descarga la librería：[Ethernet Shield V2.0 Library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)  
Nota: Librería Obsoleta/Antigua para IDE 1.0.x: [Enlace](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_Library.zip).

2.Descomprime y ponla en el archivo de librerías del IDE de Arduino por la ruta: ..\arduino-1.0.1\libraries.

3.Reinicia el IDE de Arduino.

4.Abre el ejemplo "WebServerWithSD" a través de la ruta: File --> Examples --> EthernetV2.0 --> WebServerWithSD. Este ejemplo te muestra cómo construir un servidor web simple que muestra las lecturas de los pines analógicos A0 a A5 cuando se solicita. Después de eso, almacena esas lecturas en la tarjeta SD.

**Nota:**

Esta nueva librería cubre todas las funciones incluidas en la librería Ethernet incorporada del IDE de Arduino. Puedes usar otros ejemplos de la misma manera que en la librería Ethernet anterior.

5.Sube el programa a Arduino. Si no sabes cómo subir código, por favor haz clic aquí.

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Open_WebSeverWithSD_code.jpg)

En este código, hemos definido el pin 4 como puerto de selección de chip de tarjeta SD y el pin 10 como puerto de selección de chip W5200.

Primero, enviará un enlace a este cliente si hay un cliente solicitando acceso a este servidor. Luego envía el valor de cada pin de entrada analógica a la red.

Finalmente puedes ver cada pin analógico abriendo el archivo de la tarjeta SD.

**Paso 3: Resultados**

Abre un navegador web e ingresa la dirección IP de tu controlador. Depende de tu red local pero solía ser 192.168.168.178. Entonces deberías encontrar las lecturas de A0 a A5 apareciendo como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Ethernet_Score.jpg)

Para verificar qué está pasando con la tarjeta SD, abre el monitor serie. Puedes usar el monitor serie incorporado del IDE de Arduino o una herramienta de monitor serie como nosotros. Después de abrir un monitor serie, puedes leer el contenido del archivo "test.txt" que creamos para almacenar las lecturas de los pines analógicos.

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/WebServerWithSD_Result.jpg)

**Aviso:**

1） Asegúrate de que el Ethernet Shield y tu computadora estén en la misma red local.

2） Una vez que el código haya sido subido exitosamente, está bien desconectar la placa de tu computadora y aplicar alimentación independiente, dejándola funcionar sola.

## Proyectos Relacionados ##

Es una pena que no tengamos ninguna demostración sobre Ethernet Shield en la [Receta](https://www.seeedstudio.com/recipe/) aún.

¡Publica tu increíble proyecto sobre Ethernet Shield para **ganar un Cupón de $100!** No dudes en contactarnos: **recipe@seeed.cc**

Aquí presentamos algunos proyectos sobre [LinkIt ONE](https://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html).

### Qué es LinkIt ONE ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Linkit-one-page.jpg)

La placa de desarrollo LinkIt ONE es una placa de código abierto y alto rendimiento para prototipar dispositivos Wearables e IoT.

Está basada en el SoC líder mundial para Wearables, MediaTek Aster (MT2502) combinado con chipsets de alto rendimiento Wi-Fi (MT5931)

y GPS (MT3332) para proporcionarte acceso a todas las características de MediaTek LinkIt.

También proporciona características de pines similares a las placas Arduino, facilitándote la conexión a varios sensores, periféricos y shields de Arduino.

### Demo IoT de LinkIt ONE ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Seeed-recipe-77-20141020151546.jpg)

Esta es una demostración IoT hecha con LinkIt ONE.

Con esta demostración, podemos:

- Mostrar recolección de datos de temperatura doméstica, humedad, luminosidad, control de volumen en pantalla OLED

- Servicio en la nube, datos subidos a la plataforma Cloud Xively, monitoreo en tiempo real

- Retención de datos para revisar cómo cambian los datos a lo largo del tiempo

- Control remoto de Electrodomésticos enviando un mensaje

- Lámpara de Mesa, Impresión 3D, controlada por tu teléfono

[Quiero hacerlo](https://www.seeedstudio.com/recipe/77-linkit-one-iot-demo.html).

### Antena de lata de Pringles con LinkIt ONE ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/5515ae26588ec.jpg)

Haz una antena enfocada con una lata de pringles.

[Quiero hacerlo.](https://www.seeedstudio.com/recipe/177-pringles-can-antenna-with-a-linkit-one.html)

[Más Proyectos Increíbles con LinkIt ONE](https://www.seeedstudio.com/recipe/index.php?m=Home&amp;controller=Recipe&amp;action=productDetail&amp;id=2)

### Comparte Tus Proyectos Increíbles con Nosotros ###

Nacido con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.

Y solo por esto, la comunidad de código abierto puede ser tan próspera como es hoy.

No importa lo que seas y lo que hayas hecho, hacker, maker, artista o ingeniero.

Mientras comiences a compartir tus trabajos con otros, estás siendo parte de la comunidad de código abierto y estás haciendo tus contribuciones.

Ahora comparte tus proyectos increíbles con nosotros en [Recipe](https://community.seeedstudio.com/projects.html#recipe), y gana la oportunidad de convertirte en Usuario Principal de Seeed.

- Los Usuarios Principales, son aquellos que muestran alto interés en los productos Seeed y hacen contribuciones significativas en Recipe.

- Cooperamos con nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier nuevo producto de Seeed antes de su lanzamiento oficial, y a cambio esperamos comentarios valiosos de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y en la mayoría de los casos cuando nuestros Usuarios Principales tienen algunas buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios PCBA así como soporte técnico. Además, una mayor cooperación comercial con los Usuarios Principales es altamente posible.

Obtén más información sobre Usuario Principal por favor envía un email a:[recipe@seeed.cc](mailto:recipe@seeed.cc)

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Librería]**[Librería Ethernet Shield V2.0](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)
- **[Librería]**[Librería Obsoleta/Versión Antigua de Ethernet Shield V2.0](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_Library.zip)
- **[Eagle]**[Archivos eagle de Ethernet Shield V2.0](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_eagle_files.zip)
- **[PDF]**[PCB Ethernet Shield v2.0](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/Ethernet%20Shield%20v2.0.pdf)
- **[PDF]**[Esquemático Ethernet Shield v2.0](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/Ethernet%20Shield%20v2.0%20sch.pdf)
- **[Hoja de Datos]**[Hoja de Datos W5200.pdf](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
