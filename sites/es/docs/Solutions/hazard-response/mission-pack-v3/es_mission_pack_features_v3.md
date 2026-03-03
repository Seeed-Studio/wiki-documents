---
description: introducción
title: Características
keywords:
    - paquete-de-misión
# image: 
slug: /es/mission_pack_features_v3
sidebar_position: 1
last_update:
    date: 07/08/2025
    author: Spencer
---

El **Hazard Response Mission Pack** es una solución versátil diseñada específicamente para abordar los desafíos en entornos donde los peligros son una preocupación constante. Al combinar hardware y software de vanguardia, este pack ofrece una plataforma integral para la monitorización, las alertas y la respuesta en tiempo real, permitiendo a los usuarios gestionar eficazmente los riesgos y garantizar la seguridad.

## Hardware - Diseñado para escenarios específicos

El **Mission Pack** incluye una selección cuidadosa de componentes de hardware, cada uno optimizado para escenarios de peligro específicos. Estos dispositivos están diseñados para ofrecer un rendimiento y una fiabilidad óptimos en situaciones críticas:

- **Basecamp**: **Basecamp** actúa como el centro neurálgico del sistema, integrando varios componentes y gestionando tareas de computación en el borde. Consta de **Wi-Fi Router**, **R1000 ReComputer with LoRaWAN Gateway** y **Meshtastic Router Client**. Estos componentes trabajan juntos para crear un sistema de alerta local y resiliente, habilitando el procesamiento de datos y la toma de decisiones en tiempo real sin depender de servidores remotos, lo que garantiza capacidades de respuesta rápida.
  - **RS485 Communication Interface**: **RS485 Communication Interface** amplía la capacidad del sistema para integrarse con sensores y dispositivos adicionales, lo cual es especialmente útil para Integradores de Sistemas (SI). Esta interfaz permite la conexión de dispositivos externos que usan el estándar RS485, como sensores y actuadores, posibilitando que el sistema supervise un rango más amplio de condiciones ambientales y mejore la detección y respuesta ante peligros. Por ejemplo, se puede integrar **RS485 Sound & Light Alarm** para escenarios en los que se requieran alertas audiovisuales.
  - **Ethernet**: La conexión **Ethernet** proporciona una opción de red cableada estable que asegura una transmisión de datos ininterrumpida y un control seguro del sistema. Al usar Ethernet, los dispositivos dentro de **Basecamp** pueden mantener un canal de comunicación consistente y fiable, especialmente importante en entornos donde las señales inalámbricas pueden ser poco fiables o propensas a interferencias. Esta configuración cableada es ideal para aplicaciones críticas que requieren gran ancho de banda y baja latencia, lo que la hace adecuada para tareas que demandan procesamiento de datos en tiempo real.
  - **Wi-Fi IP Network**: La **Wi-Fi IP Network** dentro de **Basecamp** ofrece conectividad inalámbrica flexible, permitiendo que los dispositivos se conecten sin cables físicos. Esto es especialmente ventajoso en instalaciones donde es necesaria la movilidad o en áreas donde tender cables Ethernet es impracticable. La red Wi-Fi admite una comunicación fluida entre dispositivos, habilitando el acceso y control remotos del sistema. También permite ampliar la red con facilidad, incorporando dispositivos adicionales según sea necesario para mejorar las capacidades de monitorización y respuesta del sistema.
- **LoRaWAN Nodes**: **SenseCAP Datalogger** proporciona comunicación fiable a larga distancia, esencial en situaciones de emergencia, especialmente en áreas con cobertura de red limitada. Este dispositivo admite comunicación de emergencia para el personal y seguimiento de activos, garantizando asistencia oportuna y una gestión eficiente de recursos. También actúa como un sensor universal de peligros, capaz de monitorizar diversas condiciones ambientales y activar alarmas cuando se detectan situaciones anómalas, lo que resulta crucial para proteger activos valiosos y alertar al personal sobre posibles amenazas.
- **Meshtastic Nodes**: **T1000-E Tracker** es un dispositivo versátil dentro de la red Meshtastic que ofrece funciones esenciales de localización y comunicación en entornos donde la cobertura de red convencional no está disponible o es poco fiable.
- **Vision AI Module**: **Grove Vision AI 2** es un módulo de IA de visión basado en MCU que funciona como un “Ojo de Monitorización de Peligros”. Utiliza IA para vigilar áreas críticas y detectar amenazas como intrusos, incursión de fauna o acceso no autorizado. Sus capacidades de IA proporcionan alertas inmediatas y respuestas rápidas, minimizando el riesgo de daños o lesiones.

Además, el pack incluye una **pantalla HDMI de 10"** y un **teclado**, que ofrecen una interfaz visual clara para monitorizar datos y el estado del sistema, mejorando la interacción del usuario con el Mission Pack.

## Software - Integración fluida con Node-RED

El **Mission Pack** está equipado con un potente entorno de software centrado en **Node-RED**, una herramienta de programación visual de código abierto que simplifica la integración y automatización de dispositivos IoT. La interfaz intuitiva de arrastrar y soltar de Node-RED permite crear con facilidad flujos de trabajo para el procesamiento de datos, alertas y control del sistema, haciéndolo accesible tanto para usuarios técnicos como no técnicos.

Para optimizar aún más la experiencia, el entorno de software se empaqueta con **contenedores Docker** listos para desplegar, garantizando que todas las dependencias y configuraciones necesarias estén preinstaladas. Esta configuración reduce el tiempo y el esfuerzo necesarios para poner el sistema en funcionamiento, permitiendo a los usuarios centrarse en personalizar y ampliar sus capacidades de respuesta ante peligros.
