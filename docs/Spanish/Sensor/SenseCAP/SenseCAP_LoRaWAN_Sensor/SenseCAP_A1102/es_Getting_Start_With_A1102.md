---
description: Getting Started with SenseCAP Vision AI V2
title: Primeros Pasos con el SenseCAP Vision AI V2
keywords:
- SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /es/sensecap_a1102
sidebar_position: 1
last_update:
  date: 07/23/2025
  author: Guillermo
---

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Modelos TinyML AI funcionando localmente, transmitiendo únicamente los resultados de inferencia vía LoRaWAN® (863-928 MHz) para mayor privacidad y eficiencia energética. Opera a una resolución de 480×480 con 10 FPS, e incluye tres modelos precargados para detección de personas, conteo de personas y lectura de medidores. Además, ofrece acceso sin código a más de 300 modelos preentrenados o la posibilidad de entrenar modelos personalizados mediante la plataforma [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home). También admite la implementación de modelos desde los frameworks [TensorFlow Lite](https://www.tensorflow.org/) y [PyTorch](https://pytorch.org/). Los usuarios pueden configurar el dispositivo y las bandas de frecuencia mediante la [App SenseCraft](https://sensecap-mate-download.seeed.cn/), e instalar el sensor con clasificación IP66 en entornos adversos tanto interiores como exteriores. Incluye una batería integrada, lo que lo convierte en una solución ideal para diversas aplicaciones de IA que requieren comunicación de largo alcance.

## Características

- **Cámara avanzada de IA en el borde**: Equipada con un potente procesador de visión basado en MCU que realiza inferencia local a resolución 480×480 a 10 FPS. Al transmitir solo los resultados de inferencia, garantiza la privacidad de los datos y minimiza el uso del ancho de banda de red.

- **Implementación y entrenamiento de modelos sin código**: Viene precargado con tres modelos de IA (detección de humanos, conteo de personas y lectura de medidores) listos para usar. Se integra de forma nativa con SenseCraft AI, una plataforma web con más de 300 modelos preentrenados para despliegue instantáneo y un flujo de trabajo de entrenamiento en 3 pasos para modelos de clasificación y detección, sin necesidad de conocimientos de programación. Además, admite modelos personalizados convertidos desde TensorFlow y PyTorch para ejecución en el borde.

- **Conectividad LoRaWAN®**: Compatible con bandas de frecuencia globales (863–928 MHz) y un rango de transmisión de hasta 10 km en condiciones óptimas, permitiendo una comunicación confiable a larga distancia.

- **2 opciones de alimentación y batería de larga duración**: Incluye batería SOCl₂ tipo D de 19Ah y es compatible con alimentación externa de 12 V mediante una caja de conexiones opcional.

- **Durabilidad ambiental con clasificación IP66**: Protección IP66 contra polvo y chorros de agua. Opera en temperaturas de 0 °C a 70 °C, adecuado para instalaciones en interiores o exteriores.

- **Integración con la nube SenseCraft**: Incluye la app móvil SenseCAP Mate y el portal web para configuración, gestión de dispositivos y visualización de datos. Compatible con plataformas IoT de terceros y API abierta. Incluye prueba gratuita de 3 meses.

## Especificaciones

<table align="center">
  <tr>
    <th>Modelo</th>
    <th>SenseCAP A1102</th>
  </tr>
  <tr>
    <th>Microcontrolador</th>
    <td align="center">
      <strong>Visión AI:</strong> Himax-6538<br />
      <strong>Red LoRaWAN:</strong> Wio-E5 (STM32WLE5JC)<br />
      <strong>Bluetooth:</strong> XIAO ESP32C3
    </td>
  </tr>
  <tr>
    <th>Cámara</th>
    <td align="center">
      <strong>Módulo:</strong> OV5647<br />
      <strong>Tamaño del lente:</strong> 1/4"<br />
      <strong>Longitud focal:</strong> 3.4 mm (ajustable)<br />
      <strong>Resolución:</strong> 2592 × 1944 píxeles<br />
      <strong>Tamaño del píxel:</strong> 1.4 µm × 1.4 µm<br />
      <strong>FPS máximo:</strong> 1080p @ 30 fps, 720p @ 60 fps<br />
      <strong>FOV:</strong> 62°
    </td>
  </tr>
  <tr>
    <th>Ejecución e inferencia</th>
    <th>480 × 480 >10 fps</th>
  </tr>
  <tr>
    <th>Transmisión LoRaWAN®</th>
    <td align="center">
      <strong>Protocolo:</strong> LoRaWAN v1.0.3 Clase A<br />
      <strong>Frecuencia:</strong> IN865/EU868/US915/AU915/AS923<br />
      <strong>Distancia de comunicación:</strong> 2 a 10 km (según entorno)<br />
      <strong>Potencia máxima:</strong> 19 dBm
    </td>
  </tr>
  <tr>
    <th>Alimentación</th>
    <td align="center">
      Batería integrada o DC 12 V/1 A (con caja de conexiones externa)
    </td>
  </tr>
  <tr>
    <th>Consumo de energía</th>
    <th>102 mA</th>
  </tr>
  <tr>
    <th>Batería</th>
    <td align="center">
      <strong>Capacidad:</strong> 19 Ah (no recargable)<br />
      <strong>Tipo:</strong> Batería SOCl₂ tipo D estándar
    </td>
  </tr>
  <tr>
    <th>Memoria de almacenamiento local</th>
    <th>MicroSD de 8 GB (Clase 10) para hasta 20,000 imágenes con marca de tiempo y exportación</th>
  </tr>
  <tr>
    <th>Protección IP</th>
    <th>IP66</th>
  </tr>
  <tr>
    <th>Temperatura de operación</th>
    <th>0–70 °C</th>
  </tr>
  <tr>
    <th>Humedad de operación</th>
    <th>0–100 % HR (sin condensación)</th>
  </tr>
  <tr>
    <th>Longitud del cable</th>
    <th>2 metros</th>
  </tr>
  <tr>
    <th>Peso del dispositivo</th>
    <th>719 g</th>
  </tr>
  <tr>
    <th>Dimensiones</th>
    <td align="center">
      <strong>Cámara:</strong> 180 mm × 75 mm × 70 mm<br />
      <strong>DTU:</strong> 144.5 mm × 63 mm × 57 mm
    </td>
  </tr>
</table>

## Opciones de Alimentación

- **Opción 1:** El SenseCAP A1102 opera en modo cíclico con una batería integrada tipo D de 19 Ah (Li-SOCl₂). Es reemplazable y permite implementación autónoma al aire libre sin fuente externa.

- **Opción 2:** El SenseCAP A1102 admite operación continua mediante fuente de 12 V DC. Requiere una caja de conexiones adicional para instalación sencilla.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png"
    style={{ width: '900px', height: 'auto' }}
  />
</div>

## Vista General de Hardware

- Foto del dispositivo:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png"
    style={{ width: '900px', height: 'auto' }}
  />
</div>

## Conexión a LoRaWAN®

LoRaWAN® (Red de Área Amplia de Largo Alcance) es un protocolo inalámbrico diseñado para comunicaciones de largo alcance y bajo consumo entre dispositivos IoT y gateways. Opera en bandas ISM no licenciadas (como 868 MHz en Europa y 915 MHz en EE. UU.). Permite comunicación bidireccional con diferentes tasas de datos, lo cual lo hace ideal para una variedad de aplicaciones.

## Cómo seleccionar Gateway y LoRaWAN®

Se requiere cobertura LoRaWAN® para usar los sensores. Hay dos opciones:

![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## Cómo usar el Sensor

Además de conectarlo directamente a una computadora para visualizar detección en tiempo real, también se pueden transmitir los datos vía LoRaWAN® y subirlos a la [plataforma en la nube SenseCAP](https://sensecap.seeed.cc/) o a plataformas de terceros. En SenseCAP Cloud se puede visualizar y graficar los datos desde móvil o PC. La app SenseCAP Mate y el portal web usan el mismo sistema de cuenta.

Como aquí el enfoque es el proceso de entrenamiento de modelos, no detallaremos la visualización en la nube. Pero puedes explorar la plataforma SenseCAP y agregar tu dispositivo para monitorear datos.

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## Preguntas Frecuentes (FAQ)

**¿Cuáles son los ajustes ideales de la cámara para capturar imágenes?**  
- Para una cámara de 5 MP, se recomienda capturar entre 1 m y 5 m. Asegúrate de que la cámara apunte directamente al objeto, con buena iluminación (sin reflejos) y sin vibraciones ni movimiento.

**¿A qué distancia puede detectar objetos la cámara SenseCAP Vision AI con buenos resultados?**  
- En nuestras pruebas con un modelo de detección humana, se alcanzó un 70 % de confianza entre 1 m y 5 m.

**¿Se puede reemplazar la cámara o solicitar una versión personalizada del sensor SenseCAP Vision AI?**  
- Sí, para pedidos a gran escala, contáctanos en: sensecap@seeed.cc

## Soporte Técnico y Comunidad

¡Gracias por elegir nuestros productos! Estamos disponibles para brindarte soporte a través de diversos canales de comunicación según tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


