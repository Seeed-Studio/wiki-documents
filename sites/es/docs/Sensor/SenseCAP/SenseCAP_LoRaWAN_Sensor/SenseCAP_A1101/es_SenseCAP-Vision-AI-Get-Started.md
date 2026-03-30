---
description: Primeros pasos con SenseCAP Vision AI
title: Primeros pasos con SenseCAP Vision AI
keywords:
  - Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP-Vision-AI-Get-Started
last_update:
  date: 1/31/2023
  author: Kewei Li
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/SenseCAP-Vision-AI-Get-Started/
---

<div align="center"><img width ={400} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

# Introducción

SenseCAP A1101 - Sensor de Visión AI LoRaWAN es un sensor inteligente de imagen habilitado con Edge AI TinyML. Soporta una variedad de modelos de AI como reconocimiento de imágenes, conteo de personas, detección de objetivos, reconocimiento de medidores, etc. También soporta el entrenamiento de modelos con TensorFlow Lite. <br />

# Características
- Cámara Himax Ultra-Baja Potencia y Potente: DSP de 400Mhz, Velocidad máxima de fotogramas de cámara 640*480*VGA 60 FPS, Inferencia local

- Transmisión de Baja Potencia y Largo Alcance: Consumo de energía en modo de suspensión de hasta 2.3uWh, alimentado por Módulos LoRaWAN Wio-E5, transfiere datos hasta millas de distancia

- Alta Seguridad de Datos mediante Edge Computing: Inferencia de imagen local y transfiere los datos de resultado final a la Nube, adecuado para aplicaciones que requieren transmisión de datos limitada y alta privacidad de datos.

- Fácil Visualización de Datos: Pocos clics para mostrar y gestionar datos a través de la App SenseCAP Mate y el Panel SenseCAP, amplia compatibilidad con otras herramientas de terceros

- Alto Grado de Protección Industrial: Temperatura de operación de -40 ~ 85℃ y clasificación IP66, adecuado para despliegue interior y exterior

- Fácil para Despliegue Escalable: 1 minuto para agregar y configurar el dispositivo escaneando el código QR del dispositivo, bajo costo de red LoRaWAN y costo de mantenimiento aseguran la escalabilidad del negocio.

# Especificación

Por favor diríjase a [especificación](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf) para más detalles.

# Primeros Pasos

1. Hay varios modelos de AI integrados para A1101, y los usuarios pueden seleccionar modelos según sus necesidades. Actualmente, los siguientes algoritmos y modelos están disponibles:

|**Algoritmo**|**Modelo AI**|
|---|---|
|Detección de Objetos|Detección de Cuerpo Humano;Definido por el usuario|
|Conteo de Objetos|Conteo de Personas;Definido por el usuario|
|Clasificación de Imágenes|Reconocimiento de Persona y Panda;Definido por el usuario|

La selección y configuración del modelo también se realiza en la interfaz de Configuración. Primero seleccione el Algoritmo, diferentes algoritmos logran diferentes funciones y muestran diferentes resultados en la vista previa de la APP. Hacer clic en el triángulo desplegable detrás del algoritmo mostrará el cuadro de selección. Luego seleccione el modelo AI, haga clic en el modelo, aparece el cuadro de selección, seleccione el modelo.

2. Si desea entrenar su propio modelo AI, hay dos formas. por favor consulte:

**1.[Entrenamiento de Modelo Todo en Uno con Edge Impulse](https://wiki.seeedstudio.com/es/One-Stop-Model-Training-with-Edge-Impulse)** Rápido de seguir.

**2.[Entrenar Modelo AI con Roboflow, YOLOv5, TensorFlow Lite](https://wiki.seeedstudio.com/es/Train-Deploy-AI-Model-A1101)** Lento de seguir.

# Conectar al LoraWAN®
LoRaWAN® (Red de Área Amplia de Largo Alcance) es un protocolo de comunicación inalámbrica diseñado para comunicaciones de baja potencia y largo alcance entre dispositivos IoT (Internet de las Cosas) y gateways. Utiliza espectro de radio sin licencia en la banda Industrial, Científica y Médica (ISM), típicamente a 868 MHz en Europa y 915 MHz en Estados Unidos. LoRaWAN® proporciona una solución de bajo costo y eficiente en energía para conectar dispositivos IoT a largas distancias. La tecnología permite comunicación bidireccional entre dispositivos y gateways, y soporta un rango de velocidades de datos para acomodar diferentes tipos de aplicaciones.

## Cómo Seleccionar Gateway y LoraWAN®
Se requiere cobertura de red LoRaWAN® al usar sensores, hay dos opciones.
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## Cómo usar el Sensor
Además de conectarse directamente a una computadora para ver datos de detección en tiempo real, también puede transmitir estos datos a través de LoraWAN® y finalmente subirlos a la [plataforma en la nube SenseCAP](https://sensecap.seeed.cc/) o una plataforma en la nube de terceros. En la plataforma en la nube SenseCAP, puede ver los datos en un ciclo y mostrarlos gráficamente a través de su teléfono móvil o computadora. La plataforma en la nube SenseCAP y la App SenseCAP Mate usan el mismo sistema de cuentas.

Dado que nuestro enfoque aquí es describir el proceso de entrenamiento del modelo, no entraremos en los detalles de la visualización de datos de la plataforma en la nube. ¡Pero si está interesado, siempre puede visitar la plataforma en la nube SenseCAP para probar agregar dispositivos y ver datos. Es una excelente manera de obtener una mejor comprensión de las capacidades de la plataforma!

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## Soporte Técnico


¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>