---
description: Primeros pasos con SenseCAP Vision AI V2
title: Primeros pasos con SenseCAP Vision AI V2
keywords:
  - SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /sensecap_a1102
sidebar_position: 1
last_update:
  date: 6/9/2026
  author: Janet
createdAt: '2025-01-03'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/es/sensecap_a1102/
---

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Modelos TinyML de IA de forma local, transmitiendo solo los resultados de la inferencia a través de LoRaWAN® (863-928MHz) para mejorar la privacidad y la eficiencia energética. Funcionando a una resolución de 480×480 con 10 FPS, viene con tres modelos preimplementados para detección de personas, conteo de personas y lectura de medidores, mientras ofrece acceso sin código a más de 300 modelos preentrenados o entrenamiento de modelos personalizados a través de la plataforma [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home). También admite la implementación de modelos desde los frameworks [TensorFlow Lite](https://www.tensorflow.org/) y [PyTorch](https://pytorch.org/). Los usuarios pueden configurar el dispositivo y las bandas de frecuencia mediante la [SenseCraft App](https://sensecap-mate-download.seeed.cn/), y desplegar el sensor con clasificación IP66 en entornos interiores o exteriores hostiles. Con una batería integrada, lo que lo hace ideal para diversas aplicaciones de IA que requieren comunicación de largo alcance.

## Características

- Cámara avanzada de Edge AI: Equipada con un potente procesador de cámara de visión basado en MCU que realiza inferencia local a una resolución de 480×480 a 10 FPS. Al transmitir solo los resultados de la inferencia, garantiza la privacidad de los datos y minimiza el uso del ancho de banda de la red.

- Implementación y entrenamiento de modelos de IA sin código: Viene precargada con tres modelos de IA en el dispositivo (detección de personas, conteo de personas y lectura de medidores) para aplicaciones de visión listas para usar. Se integra de forma nativa con SenseCraft AI, una plataforma web que ofrece más de 300 modelos preentrenados para implementación instantánea y un flujo de trabajo de entrenamiento sencillo en 3 pasos para modelos de clasificación y detección. Esto permite un entrenamiento y una implementación rápidos de modelos sin necesidad de experiencia en programación. Además, los dispositivos también admiten modelos de IA personalizados convertidos desde los frameworks TensorFlow y PyTorch para implementación en el borde.

- Conectividad LoRaWAN®: Admite bandas de frecuencia globales (863-928 MHz) con un alcance de transmisión de hasta 10 km en condiciones óptimas, lo que permite una comunicación fiable a larga distancia.

- 2 opciones de alimentación y vida útil de la batería: Equipado con una batería SOCl2 tipo D de 19Ah y también compatible con una fuente de alimentación de CC externa a través de una caja de conexiones opcional.

- Durabilidad ambiental con clasificación IP66: Presenta protección con clasificación IP66 contra la entrada de polvo y chorros de agua fuertes. Funciona de forma fiable a temperaturas de 0°C a 70°C, adecuado para diversos despliegues en interiores y exteriores.

- Integración con SenseCraft Cloud: Incluye la aplicación móvil SenseCraft Mate y un portal web para una fácil configuración del dispositivo, gestión del dispositivo y visualización rápida de datos. Cuenta con compatibilidad con API abierta y acceso de prueba GRATUITO durante 3 meses, y es compatible con plataformas IoT de terceros.

## Especificación

<table align="center">
 <tr>
     <th>Modelo de producto</th>
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
            <strong>Tamaño de lente:</strong>1/4"<br />
            <strong>Longitud focal:</strong>3.4 mm (ajustable)<br />
            <strong>Resolución:</strong> 2592 × 1944 píxeles<br />
            <strong>Tamaño de píxel:</strong> 1.4 µm × 1.4 µm<br />
            <strong>Velocidad de fotogramas máxima:</strong> 1080p @ 30 fps, 720p @ 60 fps<br />
            <strong>FOV:</strong>62°
        </td>
    </tr>
    <tr>
     <th>Ejecución e inferencia de modelos</th>
        <th>480 * 480  >10 fps</th> 
    </tr>
    <tr>
        <th>Transmisión LoRaWAN®</th>
        <td align="center">
        <strong>Protocolo:</strong> LoRaWAN v1.0.3 Class A<br />
        <strong>Frecuencia LoRaWAN®:</strong> IN865/EU868/US915/AU915/ AS923<br />
        <strong>Distancia de comunicación:</strong> 2 a 10km (dependiendo del entorno)<br />
        <strong>Potencia máxima transmitida:</strong> 19dBm<br />
        </td>
    </tr>
    <tr>
        <th>Fuente de alimentación</th>
        <td align="center">
        Batería integrada o CC 12V/1A (con cableado de caja de conexiones externa)
        </td>
    </tr>
 <tr>
     <th>Consumo de energía</th>
        <th>102mA</th>
 </tr>
 <tr>
       <th>Batería</th>
        <td align="center">
        <strong>Capacidad:</strong> 19Ah (no recargable)<br />
        <strong>Tipo:</strong> Batería estándar SOCl2 tamaño D<br />
        </td>
 </tr>
 <tr>
     <th>Memoria de almacenamiento local</th>
        <th>Tarjeta MicroSD de 8GB (Clase 10) para almacenar hasta 20,000 imágenes con marca de tiempo y admite exportación </th>
 </tr>
 <tr>
     <th>Grado de protección IP</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>Temperatura de funcionamiento</th>
        <th>0-70 °C</th>
 </tr>
 <tr>
     <th>Humedad de funcionamiento</th>
        <th>0-100% RH (sin condensación)</th>
 </tr>
 <tr>
     <th>Longitud del cable</th>
        <th>2 metros</th>
 </tr>
 <tr>
     <th>Peso del dispositivo</th>
        <th>719g</th>
 </tr>
 <tr>
     <th>Dimensiones del dispositivo</th>
        <td align="center">
        <strong>Cámara:</strong>180mm*75mm*70mm<br />
        <strong>DTU: </strong> 144.5mm*63mm*57mm<br />
        </td>
 </tr>
</table>

## Opciones de alimentación

- Opción 1: El SenseCAP A1102 funciona en modo cíclico utilizando una batería interna Li-SOCl2 tipo D de 19Ah. La batería está disponible comercialmente para un fácil reemplazo y permite el despliegue autónomo en exteriores sin necesidad de alimentación externa.

- Opción 2: El SenseCAP A1102 admite funcionamiento constante mediante una conexión a una fuente de alimentación de CC de 12V. Se necesita una caja de conexiones adicional a juego para una instalación y montaje sencillos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## Descripción general del hardware

- Foto de la placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>

## Conectar a la LoraWAN®

LoRaWAN® (Long Range Wide Area Network) es un protocolo de comunicación inalámbrica diseñado para comunicaciones de bajo consumo y largo alcance entre dispositivos IoT (Internet of Things) y gateways. Utiliza espectro de radio sin licencia en la banda Industrial, Científica y Médica (ISM), normalmente a 868 MHz en Europa y 915 MHz en Estados Unidos. LoRaWAN® proporciona una solución de bajo coste y alta eficiencia energética para conectar dispositivos IoT a largas distancias. La tecnología permite comunicación bidireccional entre dispositivos y gateways, y admite una variedad de tasas de datos para adaptarse a diferentes tipos de aplicaciones.

## Cómo seleccionar Gateway y LoraWAN®

Se requiere cobertura de red LoRaWAN® al utilizar sensores, hay dos opciones.
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## Cómo usar el sensor

Además de conectarse directamente a un ordenador para ver los datos de detección en tiempo real, también puedes transmitir estos datos a través de LoraWAN® y finalmente subirlos a la [plataforma en la nube SenseCAP](https://sensecap.seeed.cc/) o a una plataforma en la nube de terceros. En la plataforma en la nube SenseCAP, puedes ver los datos de forma cíclica y mostrarlos gráficamente a través de tu teléfono móvil u ordenador. La plataforma en la nube SenseCAP y la SenseCAP Mate App utilizan el mismo sistema de cuentas.

Dado que nuestro enfoque aquí es describir el proceso de entrenamiento del modelo, no entraremos en detalles sobre la visualización de datos en la plataforma en la nube. Pero si te interesa, siempre puedes visitar la plataforma en la nube SenseCAP para probar a añadir dispositivos y ver datos. ¡Es una excelente manera de comprender mejor las capacidades de la plataforma!

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## Registros Modbus

| Registro | Dirección | Tipo de dato | Acceso | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| **Dirección del dispositivo** | 0x0000 | uint16_t | R/W | Dirección del dispositivo Modbus. Predeterminado = 1, máximo = 247, configurable |
| **Baud Rate** | 0x0001 | uint16_t | R/W | Baud rate de Modbus. Predeterminado = 96 (significa 9600). Configurable. De forma predeterminada solo admite 8N1 |
| **Versión del dispositivo** | 0x0002 | uint32_t | R | Información de la versión del dispositivo |
| **ID del dispositivo** | 0x8000 | uint32_t | R | ID del dispositivo |
| **Resultado 1** | 0x1000 | int32_t | R | Ejemplo: 1800 significa 1.8 (Objetivo 1: confianza 80) |
| **Resultado 2** | 0x1002 | int32_t | R |  |
| **Resultado 3** | 0x1004 | int32_t | R |  |
| **Resultado 4** | 0x1006 | int32_t | R |  |
| **Resultado 5** | 0x1008 | int32_t | R |  |
| **Resultado 6** | 0x100A | int32_t | R |  |
| **Resultado 7** | 0x100C | int32_t | R |  |
| **Resultado 8** | 0x100E | int32_t | R |  |

## Preguntas frecuentes

**¿Cuáles son los ajustes ideales de la cámara para la captura de imágenes?**

- Para una cámara de 5 megapíxeles, se recomienda capturar imágenes dentro de un rango de 1 m a 5 m para lograr una calidad de imagen óptima. Durante la captura de imágenes, asegúrate de que la cámara esté directamente frente al sujeto, con iluminación suficiente (sin reflejos ni sobreexposición) y evita movimientos o vibraciones significativos.

**¿A qué distancia puede la cámara SenseCAP Vision AI detectar objetos y obtener buenos resultados?**

- Según nuestras pruebas con un modelo de detección de personas, la cámara puede alcanzar un nivel de confianza del 70% para resultados dentro de un rango de 1 m a 5 m.

**¿Cuáles son las diferencias entre SenseCAP A1102 y SenseCAP A1101?**

- El SenseCAP A1102 tiene un rendimiento más potente en comparación con el [SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html), ofreciendo mejores capacidades de Vision AI, más modelos y frameworks compatibles, y la capacidad de transmitir imágenes de fotogramas clave vía Wi‑Fi (requiere que los usuarios desarrollen firmware basado en la XIAO).

**¿Es posible reemplazar la cámara o tener una versión personalizada del sensor SenseCAP Vision AI?**

- Sí, si tienes un requisito de gran volumen, ponte en contacto con nosotros en sensecap@seeed.cc.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
