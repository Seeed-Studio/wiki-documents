---
description: Guía de Usuario de Sensecap LoRaWAN
title: Guía de Usuario de Sensecap LoRaWAN
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/
---


## 1.Introducción del Producto

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-1.jpg)

SenseCAP es una red de sensores inalámbricos industriales que integra hardware fácil de implementar y servicios de API de datos, permitiendo la recolección de datos ambientales de bajo consumo y larga distancia. SenseCAP incluye varias versiones, como LoRaWAN, NB-IoT, etc.
  
Los productos de la versión SenseCAP LoRaWAN incluyen Gateways LoRaWAN y Nodos Sensores. Basado en el protocolo LoRaWAN, puede realizar redes de uno a muchos, de larga distancia y comunicación bilateral. El Gateway LoRaWAN soporta Ethernet y 4G. El Nodo Sensor está alimentado por una batería de alta capacidad que dura hasta 3 años (si se cargan datos una vez cada hora). También soporta intercambio en caliente, facilitando el mantenimiento y las actualizaciones.

SenseCAP proporciona una plataforma en la nube fácil de usar. Los usuarios pueden escanear el código QR con la App SenseCAP para vincular el dispositivo con su cuenta respectiva para gestionar los dispositivos, y verificar los datos del Nodo Sensor en el Portal SenseCAP. El Portal SenseCAP proporciona API para que los usuarios desarrollen más basándose en los datos del Portal.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-c-1339.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


**Características Principales**

- Gateway: Procesador Cortex A8 de alto rendimiento de 1GHz
- Los sensores soportan protocolo LoRaWAN, consumo ultra-bajo de energía, la batería dura 3 años (si se cargan datos una vez cada hora)
- El Gateway utiliza múltiples métodos para conectarse a la red: 4G y Ethernet para soportar diferentes escenarios
- Comunicación de súper larga distancia: 10km en escenario de línea de vista, 2km en escenario urbano
- Plataforma en la nube y API fáciles de usar
- Carcasa con clasificación de protección industrial IP66, adecuada para ambiente exterior a -40℃~70℃
- Fácil de implementar, permitiendo a personas sin antecedentes de ingeniería instalar los dispositivos rápidamente
- Diseño modular para los Nodos Sensores, incluyendo un Controlador de Nodo Sensor y una Sonda Sensora, con un soporte especialmente diseñado para fácil instalación en postes o paredes.

**Gateway LoRaWAN:**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-2.png)

En la parte inferior del gateway están el puerto Ethernet y el conector de alimentación, todos los cuales cumplen con los requisitos de impermeabilidad. La luz indicadora LED indica el estado de la red. La parte superior del gateway es el conector para instalar la antena 4G/LoRa, y los otros conectores están reservados.

**Nodo Sensor LoRaWAN:**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-3.png)

Presiona para abrir el dispositivo y verás dos partes. El circuito del Controlador del Nodo Sensor muestra un interruptor de alimentación, un botón RESET, y un LED indicador así como un botón de modo y puertos serie, que se utilizarán para la actualización del firmware. Las dos partes se conectan y comunican a través de dos conectores de resorte.

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-4.png)

Cada Nodo Sensor viene con un soporte para fácil instalación en un poste o pared.

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-11.jpg)

**Portal SenseCAP：**

El Portal SenseCAP proporciona múltiples servicios, incluyendo portal de gestión basado en web y API para llamar datos. Los usuarios pueden desarrollar más la integración del sistema con la API, sin preocuparse por las tecnologías de hardware embebido, acortando así el ciclo de desarrollo.

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-7.png)

## 2.Inicio Rápido

Para esta guía de inicio rápido, por favor consulte la [Guía de Usuario del Producto SenseCAP(Serie LoRaWAN)-V1.1](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/res/SenseCAP%20Product%20User%20Guide(LoRaWAN%20Series)-V1.1.docx)