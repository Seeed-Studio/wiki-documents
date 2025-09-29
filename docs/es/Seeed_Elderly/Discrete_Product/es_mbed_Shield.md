---
description: Mbed Shield
title: Mbed Shield
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/mbed_Shield
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Shield_01.jpg)

El Mbed Shield es la placa de aplicación Mbed basada en la Placa de Prototipado Mbed LPC1768. Solo trata de imaginar controlar dispositivos Ethernet usando datos ambientales de sensores. Integra una serie de interfaces externas, como CAN, Ethernet, USB y 4 conectores estándar Grove, todo junto en una sola placa. El Mbed Shield también es compatible con otros Shields estándar de Arduino, proporcionándote una extensión aún más poderosa para tu Mbed.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/mbed-shield-p-1390.html?cPath=132_134)

##   Características
---
*   Diseño de forma de shield estándar
*   Pines base compatibles con Arduino
*   Varias interfaces integradas: CAN, Ethernet, USB, Grove

##   Descripción General del Hardware
---
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/mBed_Shield_Hardware_Overview.jpg)

##   Primeros Pasos
---
Aquí hay una breve descripción de cómo leer los datos de Ethernet y los datos de un disco extraíble.
### Conexión

- Conecta el conector USB de la Placa Mbed Protyboard al puerto USB de la computadora.
- Espera el aviso de nuevo hardware encontrado.
- Descarga [el Controlador del puerto serie Mbed](https://files.seeedstudio.com/wiki/mbed_Shield/res/MbedDriver.zip) e instálalo.
- Conecta la Placa Mbed Protyboard al Mbed Base Shield.

### Leer una unidad USB

El Bus Serie Universal (USB) es el bus más ampliamente utilizado en las computadoras actuales. USB ha sido particularmente diseñado para estandarizar las conexiones entre la computadora y los periféricos. Por ejemplo, teclados, ratones, dispositivos de audio USB, impresoras, escáneres, unidades de disco o cámaras pueden usar el mismo bus para intercambiar datos con una computadora. Se ha desarrollado una pila de dispositivos USB para proporcionar todas las grandes capacidades de USB a mbed.

- Conecta una unidad USB en la interfaz USB.
- Descarga [MSCUsbHost.bin](https://files.seeedstudio.com/wiki/mbed_Shield/res/MSCUsbHost.zip) y copia el archivo en el Disco Mbed.

:::note
    1) El archivo MSCUsbHost.bin es generado por el compilador en línea de Mbed. 2) Elimina cualquier archivo bin no relacionado que aparezca en el disco Mbed.
:::
- Presiona el botón Reset. El puerto serie debería recibir la siguiente información.

![](https://files.seeedstudio.com/wiki/mbed_Shield/img/MSCUsbHost.jpg)

### Leer datos de Ethernet

El ejemplo demuestra cómo comenzar con la función Ethernet.

- Conecta un cable Ethernet disponible en la interfaz Ethernet.
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Shield1.jpg)
- Descarga [TCPSocket_HelloWorld.bin](https://files.seeedstudio.com/wiki/mbed_Shield/res/TCPSocket_HelloWorld.zip) y copia el archivo en el Disco MBED.

:::note
    Elimina cualquier archivo bin no relacionado que aparezca en el disco Mbed.
:::
- Presiona el botón Reset. El puerto serie debería recibir la siguiente información.
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Ethernet_Connector_Data.jpg)
- Abre la página web y puedes ver la información devuelta.
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Ethernet.jpg)


## Visor de Esquemas en Línea
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/mbed_Shield/res/Mbed_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos
---
- **[Eagle]**[Archivo Eagle del Mbed Shield](https://files.seeedstudio.com/wiki/mbed_Shield/res/Mbed_Shield_Eagle_File.zip)
- **[PDF]**[Archivo de Esquema del Mbed Shield](https://files.seeedstudio.com/wiki/mbed_Shield/res/mbed%20shield%20v0.9b%20Sch.pdf)
- **[PDF]**[Archivo PCB del Mbed Shield](https://files.seeedstudio.com/wiki/mbed_Shield/res/mbed%20shield%20v0.9b%20PCB.pdf)
- **[Herramientas]**[MSCUsbHost](https://files.seeedstudio.com/wiki/mbed_Shield/res/MSCUsbHost.zip)
- **[Herramientas]**[MbedDriver](https://files.seeedstudio.com/wiki/mbed_Shield/res/MbedDriver.zip)
- **[Herramientas]**[TCPSocket_HelloWorld](https://files.seeedstudio.com/wiki/mbed_Shield/res/TCPSocket_HelloWorld.zip)

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