---
description: Primeros Pasos con SenseCAP Vision AI V2
title: Primeros Pasos con SenseCAP Vision AI V2
keywords:
- SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /es/sensecap_a1102
sidebar_position: 1
last_update:
  date: 3/12/2025
  author: Zeke
---

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

TinyML modelos de IA localmente, transmitiendo solo resultados de inferencia vía LoRaWAN® (863-928MHz) para mayor privacidad y eficiencia energética. Operando a resolución 480×480 con 10 FPS, viene con tres modelos pre-desplegados para detección humana, conteo de personas y lectura de medidores, mientras ofrece acceso sin código a más de 300 modelos pre-entrenados o entrenamiento de modelos personalizados a través de la plataforma [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home). También soporta despliegue de modelos desde los frameworks [TensorFlow Lite](https://www.tensorflow.org/) y [PyTorch](https://pytorch.org/). Los usuarios pueden configurar el dispositivo y las bandas de frecuencia vía la [SenseCraft App](https://sensecap-mate-download.seeed.cn/), y desplegar el sensor con clasificación IP66 en entornos interiores o exteriores adversos. Con una batería integrada, lo hace ideal para diversas aplicaciones de IA que requieren comunicación de largo alcance.

## Características

- Cámara de IA Edge Avanzada: Equipada con un potente procesador de cámara de visión basado en MCU que realiza inferencia local a resolución 480×480 a 10 FPS. Al transmitir solo resultados de inferencia, asegura la privacidad de datos y minimiza el uso de ancho de banda de red.

- Despliegue y Entrenamiento de Modelos de IA Sin Código: Pre-cargado con tres modelos de IA en dispositivo (detección humana, conteo de personas y lectura de medidores) para aplicaciones de visión listas para usar. Se integra nativamente con SenseCraft AI, una plataforma basada en web que ofrece más de 300 modelos pre-entrenados para despliegue instantáneo y un flujo de trabajo de entrenamiento simple de 3 pasos para modelos de clasificación y detección. Esto permite entrenamiento y despliegue rápido de modelos sin experiencia en codificación. Además, los dispositivos también soportan modelos de IA personalizados convertidos desde los frameworks TensorFlow y PyTorch para despliegue edge.

- Conectividad LoRaWAN®: Soporta bandas de frecuencia globales (863-928 MHz) con rango de transmisión hasta 10 km en condiciones óptimas, habilitando comunicación confiable de larga distancia.

- 2 Opciones de Energía y Vida de Batería: Equipado con una batería SOCl2 de 19Ah tamaño D y también compatible con suministro de energía DC externo vía caja de conexiones opcional.

- Durabilidad Ambiental Clasificación IP66: Cuenta con protección clasificada IP66 contra ingreso de polvo y chorros de agua fuertes. Opera confiablemente en temperaturas de 0°C a 70°C, adecuado para diversos despliegues interiores y exteriores.

- Integración SenseCraft Cloud: Incluye la aplicación móvil SenseCraft Mate y portal web para fácil configuración de dispositivo, gestión de dispositivos y visualización rápida de datos. Cuenta con soporte de API abierta y acceso de prueba GRATUITO de 3 meses, es compatible con plataformas IoT de terceros.

## Especificación

<table align="center">
 <tr>
     <th>Modelo del Producto</th>
        <th>SenseCAP A1102</th>
 </tr>
 <tr>
     <th>Microcontrolador</th>
        <td align="center">
            <strong>Vision AI:</strong>Himax-6538 <br></br>
            <strong>Red LoRaWAN:</strong>Wio-E5 (STM32WLE5JC)<br></br>
            <strong>Bluetooth:</strong> XIAO ESP32C3<br></br>
        </td>
 </tr>
    <tr>
        <th>Cámara</th>
        <td align="center">
            <strong>Módulo:</strong>OV5647<br />
            <strong>Tamaño del lente:</strong>1/4"<br />
            <strong>Distancia focal:</strong>3.4 mm (ajustable)<br />
            <strong>Resolución:</strong> 2592 × 1944 píxeles<br />
            <strong>Tamaño del píxel:</strong> 1.4 µm × 1.4 µm<br />
            <strong>Velocidad de fotogramas máxima:</strong> 1080p @ 30 fps, 720p @ 60 fps<br />
            <strong>FOV:</strong>62°
        </td>
    </tr>
    <tr>
     <th>Ejecución e Inferencia del Modelo</th>
        <th>480 * 480  >10 fps</th> 
    </tr>
    <tr>
        <th>Transmisión LoRaWAN®</th>
        <td align="center">
        <strong>Protocolo:</strong> LoRaWAN v1.0.3 Clase A<br />
        <strong>Frecuencia LoRaWAN®:</strong> IN865/EU868/US915/AU915/ AS923<br />
        <strong>Distancia de Comunicación:</strong> 2 a 10km (dependiendo del entorno)<br />
        <strong>Potencia Máxima Transmitida:</strong> 19dBm<br />
        </td>
    </tr>
    <tr>
        <th>Fuente de Alimentación</th>
        <td align="center">
        Batería integrada o DC 12V/1A (con cableado de caja de conexiones externa)
        </td>
    </tr>
 <tr>
     <th>Consumo de Energía</th>
        <th>102mA</th>
 </tr>
 <tr>
       <th>Batería</th>
        <td align="center">
        <strong>Capacidad:</strong> 19Ah (no recargable)<br />
        <strong>Tipo:</strong> Batería SOCl2 estándar tamaño D<br />
        </td>
 </tr>
 <tr>
     <th>Memoria de Almacenamiento Local</th>
        <th>Tarjeta MicroSD de 8GB (Clase 10) para almacenar hasta 20,000 imágenes con marca de tiempo y soporta exportación</th>
 </tr>
 <tr>
     <th>Clasificación IP</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>Temperatura de Operación</th>
        <th>0-70 °C</th>
 </tr>
 <tr>
     <th>Humedad de Operación</th>
        <th>0-100% RH (sin condensación)</th>
 </tr>
 <tr>
     <th>Longitud del Cable</th>
        <th>2 metros</th>
 </tr>
 <tr>
     <th>Peso del Dispositivo</th>
        <th>719g</th>
 </tr>
 <tr>
     <th>Dimensiones del Dispositivo</th>
        <td align="center">
        <strong>Cámara:</strong>180mm*75mm*70mm<br />
        <strong>DTU: </strong> 144.5mm*63mm*57mm<br />
        </td>
 </tr>
</table>

## Opciones de Alimentación

- Opción 1: El SenseCAP A1102 opera en modo cíclico utilizando una batería Li-SOCl2 tipo D de 19Ah incorporada. La batería está disponible comercialmente para un fácil reemplazo y permite el despliegue independiente en exteriores sin requerir alimentación externa.

- Opción 2: El SenseCAP A1102 soporta operación constante a través de una conexión de alimentación de 12V DC. Se necesita una caja de conexiones adicional compatible para una instalación y ensamblaje sencillos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## Descripción General del Hardware

- Foto de la Placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>

## Conectar a LoraWAN®

LoRaWAN® (Long Range Wide Area Network) es un protocolo de comunicación inalámbrica diseñado para comunicaciones de bajo consumo y largo alcance entre dispositivos IoT (Internet de las Cosas) y gateways. Utiliza espectro de radio sin licencia en la banda Industrial, Científica y Médica (ISM), típicamente a 868 MHz en Europa y 915 MHz en Estados Unidos. LoRaWAN® proporciona una solución de bajo costo y eficiente en energía para conectar dispositivos IoT a largas distancias. La tecnología permite comunicación bidireccional entre dispositivos y gateways, y soporta un rango de velocidades de datos para acomodar diferentes tipos de aplicaciones.

## Cómo Seleccionar Gateway y LoraWAN®

Se requiere cobertura de red LoRaWAN® al usar sensores, hay dos opciones.
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## Cómo usar el Sensor

Además de conectarse directamente a una computadora para ver datos de detección en tiempo real, también puedes transmitir estos datos a través de LoraWAN® y finalmente subirlos a la [plataforma en la nube SenseCAP](https://sensecap.seeed.cc/) o una plataforma en la nube de terceros. En la plataforma en la nube SenseCAP, puedes ver los datos en un ciclo y mostrarlos gráficamente a través de tu teléfono móvil o computadora. La plataforma en la nube SenseCAP y la App SenseCAP Mate usan el mismo sistema de cuentas.

Dado que nuestro enfoque aquí es describir el proceso de entrenamiento del modelo, no entraremos en los detalles de la visualización de datos de la plataforma en la nube. ¡Pero si estás interesado, siempre puedes visitar la plataforma en la nube SenseCAP para probar agregar dispositivos y ver datos. Es una excelente manera de obtener una mejor comprensión de las capacidades de la plataforma!

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## FAQ

**¿Cuáles son las configuraciones ideales de cámara para la captura de imágenes?**

- Para una cámara de 5 megapíxeles, se recomienda capturar imágenes dentro de un rango de 1m a 5m para lograr una calidad de imagen óptima. Durante la captura de imágenes, asegúrate de que la cámara esté directamente enfrentando al sujeto, con iluminación suficiente (sin deslumbramiento o sobreexposición), y evita movimiento significativo o vibración.

**¿Qué tan lejos puede la cámara SenseCAP Vision AI detectar objetos y lograr buenos resultados?**

- Basado en nuestras pruebas con un modelo de detección humana, la cámara puede lograr un nivel de confianza del 70% para resultados dentro de un rango de 1m a 5m.

**¿Es posible reemplazar la cámara o tener una versión personalizada del sensor SenseCAP Vision AI?**

- Sí, si tienes un requerimiento de gran volumen, por favor contáctanos en sensecap@seeed.cc.

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
