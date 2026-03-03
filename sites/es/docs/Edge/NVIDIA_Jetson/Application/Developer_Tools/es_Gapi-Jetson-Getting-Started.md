---
description: Este artículo presenta cómo usar Gapi en dispositivos NVIDIA Jetson, una puerta de enlace API embebible diseñada para transformar rápidamente los logros del Jetson AI Lab en aplicaciones del mundo real a través de un motor de flujo de trabajo de bajo código y un marco de microservicios.
title: Comenzando con Gapi
tags:
  - AI model optimize
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/gapi_getting_started-with_jetson
last_update:
  date: 09/20/2024
  author: Youjiang
---

# Comenzando con Gapi en Dispositivos NVIDIA® Jetson

[Gapi](https://genainerds.com/#/Gapi) es una puerta de enlace API embebible que crea integraciones de streaming entre microservicios de IA y los sistemas que los usuarios aprovechan todos los días.

El objetivo del proyecto es acelerar la velocidad de creación de pilotos y demostraciones de los logros del Jetson AI Lab en entornos del mundo real. ¡La IA generativa "En Dispositivo" no significa que tenga que vivir en una isla!

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiGIF.gif"/></div>

- Motor de flujo de trabajo con interfaz de usuario de bajo código con docenas de integraciones abiertas y clientes personalizables para móvil, web y escritorio.
- Marco de microservicios para envolver contenedores Jetson (Ollama, Whisper, Piper TTS, etc. están listos, con más por venir). O envuelve tus propios modelos/código e intégralos en Flujos de Trabajo.
- Mensajería híbrida binaria+json en tiempo real suaviza las llamadas intra-servicio y reduce la latencia.
- Un camino rápido para probar el valor de la IA generativa a las partes interesadas en su entorno real.

## Servidor Gapi

Software de puerta de enlace API embebible que se ejecuta en segundo plano con una interfaz de usuario de flujo de trabajo de bajo código para pruebas. El servidor es un centro de mensajes y máquina de estados para 'nodos' de flujo de trabajo que hablan con Microservicios. Piénsalo como tejido conectivo para aplicaciones.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiDiagram3.png"/></div>

:::note
Un Microservicio es un proceso que ejecuta algunos scripts de Python envolventes que integran código/modelos personalizados en Flujos de Trabajo usando una API de streaming.
:::

- El Servidor Gapi puede ejecutarse en cualquier Jetson Orin o realmente cualquier computadora ya que los Microservicios se conectan de salida a través de sockets web seguros. No usa ningún recurso de GPU. También hay una pequeña versión de demostración para omitir la instalación del Servidor (pero aún necesitarás ejecutar tus propios Microservicios).
- [Página del Proyecto Gapi](https://genainerds.com/#/Gapi)
- [Github de Gapi](https://github.com/GenAI-Nerds/Gapi/)
- [Documentación de Gapi](https://genainerds.com/#/Docs)
- [Demostración Alojada de Gapi](https://genaigapi.com/)

## Requisitos
- Cualquier NVIDIA Jetson Orin
- Docker
- Espacio de Almacenamiento Suficiente: 1.3GB

## Instalar Gapi en Jetson

**Ejecuta Estos Pasos para instalar Gapi en Jetson:**
```bash
mkdir ~/gapiData && cd ~/gapiData
curl -L https://raw.githubusercontent.com/genai-nerds/Gapi/main/gapiConfigs.zip -o gapiConfigs.zip
unzip -q gapiConfigs.zip
docker run -d --name gapi --network host -v ~/gapiData:/opt/gapi/vdata genainerds/gapi:arm64 /bin/bash -c "cd /opt/gapi/bin && ./startGapi.sh"
echo "Puede que necesites presionar Enter ahora. Después el contenedor Docker 'gapi' s
```

**Iniciar Sesión**
- Navega a: http://[host-device-ip]:8090
- Usuario: root
- Contraseña: !gapi2024
- ¡Cambia la contraseña en Configuración! La documentación muestra cómo añadir certificado SSL.

## Flujos de Trabajo

Los Flujos de Trabajo conectan visualmente la ejecución y el flujo de datos entre Nodos.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/gapi-diagram-pic.png"/></div>

Una Transacción (o disparo único) tiene datos de "Entrada Acumulativa" que acumula mientras los pasos de Nodo a Nodo hablan cada uno con Microservicios y APIs. Todos los Nodos disfrutan de variables y control de flujo usando conceptos familiares de json y javascript.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/switchproperties.png"/></div>

Cada Nodo puede añadir o referenciar los datos acumulativos en la Transacción mientras toma decisiones en el camino.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/visualfeedback.png"/></div>

Observa Transacciones en vivo mientras comienzan desde clientes, webhooks y mensajes publicados desde Microservicios con retroalimentación visual y depuración.

## Microservicios

Un Microservicio es un proceso que ejecuta un script de Python envolvente que integra tu código/modelos personalizados para que puedan integrarse en Flujos de Trabajo de Gapi.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices2.png"/></div>

Puedes ejecutar un Microservicio donde gustes y conectarlo a un Servidor Gapi a través del protocolo de mensajes híbrido binario+json de streaming.

Hay algunos "Microservicios de Comunidad" listos para usar que integramos, probamos y empaquetamos en imágenes Docker. Cuando los ejecutas, se auto-integran, cargan las capas NVIDIA correctamente y ofrecen registro al sistema anfitrión.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices3.png"/></div>

¡Aún mejor, crea el tuyo propio! Solo implementa un manejador Python on_message para procesar solicitudes y responder. El resto se maneja por ti.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices4.png"/></div>

Piensa en un Microservicio como un envolvente simple para algún código o modelo que tengas. Funciona igual que cualquier otro Nodo dentro de un Flujo de Trabajo. Cuando sea el turno de tu Nodo de Microservicio, tu función on_message será llamada. Tu script obtiene los datos de Transacción acumulativos para contexto y luego publicas tus datos directamente de vuelta al flujo.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices1.png"/></div>

## Ejecutando los Microservicios de Comunidad

**Requisitos para Microservicios de Comunidad**
1. Cualquier NVIDIA Jetson Orin
2. Espacio de Almacenamiento Suficiente:
    - Literalmente 4KB para tu propio Microservicio
    - Desde ~4GB hasta ~10GB para cada Microservicio de Comunidad

**Pasos:**
1. Inicia sesión y ve a la pestaña de Microservicios
2. Sigue las instrucciones en la caja azul en esa página para descargar tu configuración personalizada
3. Luego sigue las instrucciones debajo de esas para instalar el Microservicio que quieras

## ¡Felicidades! Ahora Puedes Revisar los Consejos de Flujo de Trabajo

<div align="center"><img width ="1000" src="https://genainerds.com/assets/img/WorkflowsHome.png"/></div>


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