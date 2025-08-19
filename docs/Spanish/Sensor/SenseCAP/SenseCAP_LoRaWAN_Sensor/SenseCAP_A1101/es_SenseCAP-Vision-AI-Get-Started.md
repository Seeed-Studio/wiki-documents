---
description: Getting Started with SenseCAP Vision AI
title: Primeros Pasos con SenseCAP Vision AI
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP-Vision-AI-Get-Started
last_update:
  date: 07/22/2025
  author: Guillermo
---

<div align="center"><img width ={400} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

# Introducción

SenseCAP A1101 - Sensor de Visión AI con LoRaWAN es un sensor de imagen inteligente con tecnología Edge AI TinyML. Es compatible con una variedad de modelos de IA como reconocimiento de imágenes, conteo de personas, detección de objetos, reconocimiento de medidores, entre otros. También admite el entrenamiento de modelos con TensorFlow Lite. <br />

# Características

- **Cámara Himax potente y de ultra bajo consumo**: DSP a 400 MHz, frecuencia máxima de fotogramas de cámara 640×480 VGA a 60 FPS, inferencia local.

- **Transmisión de bajo consumo y largo alcance**: Consumo en modo de suspensión tan bajo como 2.3 uWh, alimentado por módulos LoRaWAN Wio-E5, transmite datos a varios kilómetros.

- **Alta seguridad de datos mediante cómputo en el borde**: Realiza inferencias localmente y solo transmite resultados finales a la nube, ideal para aplicaciones con restricciones de transmisión y alta privacidad de datos.

- **Fácil visualización de datos**: Visualiza y gestiona datos con unos pocos clics a través de la app SenseCAP Mate y el panel SenseCAP Dashboard, amplia compatibilidad con herramientas de terceros.

- **Grado de protección industrial elevado**: Temperatura operativa de -40 ~ 85 ℃ y clasificación IP66, apto para despliegue interior y exterior.

- **Fácil despliegue a escala**: Configuración en 1 minuto escaneando el código QR del dispositivo; bajo costo de red y mantenimiento LoRaWAN asegura escalabilidad empresarial.

# Especificaciones

Consulta las [especificaciones técnicas](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf) para más detalles.

# Primeros pasos

1. El A1101 cuenta con varios modelos de IA preinstalados que los usuarios pueden seleccionar según sus necesidades. Actualmente, se encuentran disponibles los siguientes algoritmos y modelos:

|**Algoritmo**|**Modelo de IA**|
|---|---|
|Detección de objetos|Detección de cuerpos humanos; Definido por el usuario|
|Conteo de objetos|Conteo de personas; Definido por el usuario|
|Clasificación de imágenes|Reconocimiento de persona y panda; Definido por el usuario|

La selección y configuración del modelo también se realiza en la interfaz de configuración (**Settings**). Primero selecciona el algoritmo; distintos algoritmos cumplen funciones diferentes y muestran distintos resultados en la vista previa de la app. Al hacer clic en el triángulo desplegable junto al algoritmo se abrirá el selector. Luego selecciona el modelo de IA, haz clic sobre él y elige el modelo deseado.

2. Si deseas entrenar tu propio modelo de IA, hay dos formas disponibles. Consulta:

**1. [Entrenamiento de modelos en un solo paso con Edge Impulse](https://wiki.seeedstudio.com/One-Stop-Model-Training-with-Edge-Impulse)** (Fácil de seguir)

**2. [Entrenar modelo de IA con Roboflow, YOLOv5, TensorFlow Lite](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101)** (Más avanzado)

# Conexión a LoRaWAN®

LoRaWAN® (Red de Área Amplia de Bajo Consumo) es un protocolo de comunicación inalámbrico diseñado para comunicaciones de largo alcance y bajo consumo entre dispositivos IoT y gateways. Utiliza espectro no licenciado en la banda ISM (Industrial, Científica y Médica), típicamente a 868 MHz en Europa y 915 MHz en EE. UU. LoRaWAN® ofrece una solución de bajo costo y eficiente en energía para conectar dispositivos IoT a grandes distancias. Soporta comunicación bidireccional y varios niveles de tasa de datos para ajustarse a diferentes aplicaciones.

## Cómo seleccionar un Gateway y red LoRaWAN®

Se requiere cobertura de red LoRaWAN® para usar los sensores. Hay dos opciones disponibles:

![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## Cómo usar el sensor

Además de conectarlo directamente a una computadora para ver los datos de detección en tiempo real, también puedes transmitir estos datos mediante LoRaWAN® y subirlos al [portal en la nube SenseCAP](https://sensecap.seeed.cc/) o a una plataforma en la nube de terceros. En el portal SenseCAP, puedes visualizar los datos en ciclos y mostrarlos gráficamente desde tu teléfono móvil o computadora. SenseCAP Mate App y la nube usan el mismo sistema de cuentas.

Como aquí nos enfocamos en describir el proceso de entrenamiento de modelos, no entraremos en detalle sobre la visualización en la nube. Pero si estás interesado, puedes visitar la plataforma y probar añadir dispositivos para visualizar los datos. ¡Es una excelente manera de comprender mejor sus capacidades!

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

# Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos canales de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos múltiples vías de comunicación que se adaptan a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


