---
description: Este artículo presenta cómo usar Gapi en dispositivos NVIDIA Jetson, una puerta de enlace API integrable diseñada para transformar rápidamente los logros del Jetson AI Lab en aplicaciones del mundo real a través de un motor de flujo de trabajo de bajo código y un marco de microservicios.
title: Primeros pasos con Gapi
tags:
  - AI model optimize
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/gapi_getting_started-with_jetson
last_update:
  date: 09/20/2024
  author: Youjiang
---

# Primeros pasos con Gapi en dispositivos NVIDIA® Jetson

[Gapi](https://genainerds.com/#/Gapi) es una puerta de enlace API integrable que crea integraciones de transmisión entre microservicios de IA y los sistemas que los usuarios aprovechan todos los días.

El objetivo del proyecto es acelerar la velocidad de creación de pilotos y demostraciones de los logros de Jetson AI Lab en entornos del mundo real. ¡La IA generativa "en el dispositivo" no significa que tenga que vivir en una isla!

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiGIF.gif"/></div>

- Motor de flujo de trabajo con interfaz de usuario de código reducido con docenas de integraciones abiertas y clientes personalizables para la web móvil y de escritorio.
- Marco de microservicios para envolver contenedores Jetson (Ollama, Whisper, Piper TTS, etc. ya están listos, y habrá más por venir). O empaqueta tus propios modelos/código e intégralos en flujos de trabajo.
- La mensajería híbrida binaria+json en tiempo real suaviza las llamadas dentro del servicio y reduce la latencia.
- Un camino rápido para demostrar el valor generativo de la IA a las partes interesadas en tu entorno real.

## Servidor Gapi

Software de puerta de enlace API integrable que se ejecuta en segundo plano con una interfaz de usuario de flujo de trabajo con poco código para realizar pruebas. El servidor es un centro de mensajes y una máquina de estado para los 'nodos' de flujo de trabajo que se comunican con Micro Services. Piensa en ello como tejido conectivo para aplicaciones.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiDiagram3.png"/></div>

:::nota
Un microservicio es un proceso que ejecuta algunos scripts de Python wrapper que integran códigos/modelos personalizados en flujos de trabajo mediante una API de transmisión.
:::

- Gapi Server puede ejecutarse en cualquier Jetson Orin o realmente en cualquier computadora, ya que los Micro Servicios se conectan salientes a través de sockets web seguros. No utiliza ningún recurso de GPU. También hay una pequeña versiones de demostración para omitir la instalación del servidor (pero aún necesitarás ejecutar tus propios microservicios).
- [Página del proyecto Gapi](https://genainerds.com/#/Gapi)
- [Gapi Github](https://github.com/GenAI-Nerds/Gapi/)
- [Gapi Docs](https://genainerds.com/#/Docs)
- [Gapi Hosted Demo](https://genaigapi.com/)

## Requerimiento
- Nvidia Jetson Orin
- Docker
- 1.3GB de almacenamiento disponibles

## Instalar Gapi en la Jetson

**Sigue estos pasos para instalar Gapi en la Jetson:**
```bash
mkdir ~/gapiData && cd ~/gapiData
curl -L https://raw.githubusercontent.com/genai-nerds/Gapi/main/gapiConfigs.zip -o gapiConfigs.zip
unzip -q gapiConfigs.zip
docker run -d --name gapi --network host -v ~/gapiData:/opt/gapi/vdata genainerds/gapi:arm64 /bin/bash -c "cd /opt/gapi/bin && ./startGapi.sh"
echo "You may need to hit Enter now. Afterwards the Docker container 'gapi' s
```

**Iniciar sesión**
- Pega esta dirección en el navegador: http://[host-device-ip]:8090
- Usuario: root
- Contraseña: !gapi2024
- ¡Cambia la contraseña en Configuración! Docs muestra cómo agregar un certificado SSL.

## Flujos de trabajo

Los flujos de trabajo conectan visualmente la ejecución y el flujo de datos entre nodos.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/gapi-diagram-pic.png"/></div>

Una transacción (o disparo único) tiene datos de "entrada continua" que se acumulan a medida que los pasos de nodo a nodo se comunican con microservicios y la API. Todos los nodos disfrutan de variables y control de flujo utilizando conceptos familiares de json y javascript.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/switchproperties.png"/></div>

Cada Nodo puede agregar o hacer referencia a los datos continuos en la Transacción mientras toma decisiones a lo largo del camino.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/visualfeedback.png"/></div>

Observa las transacciones en vivo a medida que comienzan desde los clientes, los webhooks y los mensajes publicados de los microservicios con comentarios visuales y depuración.

## Micro Servicios

Un microservicio es un proceso que ejecuta un script Python wrapper que integra tu código/modelos personalizados para que puedan integrarse en los flujos de trabajo de Gapi.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices2.png"/></div>

Puedes ejecutar un Micro Servicio donde quieras y conectarlo a un Servidor Gapi a través del protocolo de transmisión de mensajes híbrido binario+json.

Hay algunos "microservicios comunitarios" listos para usar que integramos, probamos y empaquetamos en imágenes de Docker. Cuando los ejecutas, se integran automáticamente, cargan las capas de NVIDIA correctamente y ofrecen registro en el sistema host.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices3.png"/></div>

Aún mejor, ¡crea el tuyo propio! Simplemente implementa un controlador Python on_message para procesar solicitudes y responder. El resto lo manejamos por ti.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices4.png"/></div>

Pienss en un microservicio como un simple contenedor de algún código o modelo que tengas. Funciona igual que cualquier otro Nodo dentro de un Workflow. Cuando sea el turno de tu Micro Nodo de Servicio, se llamará a su función on_message. Su secuencia de comandos obtiene los datos continuos de la transacción para el contexto y luego tu publicas sus datos directamente nuevamente en el flujo.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices1.png"/></div>

## Ejecución de los microservicios comunitarios

**Requisitos para microservicios comunitarios**
1. Cualquier Nvidia Jetson Orin
2. Suficiente espacio de almacenamiento:
    - Literalmente 4 KB para tu propio Micro Servicio
    - Entre ~4 GB y ~10 GB para cada microservicio comunitario

**Pasos:**
1. Inicia sesión y ve a la pestaña Micro Servicios
2. Sigue las instrucciones en el cuadro azul en esa página para descargar tu configuración personalizada.
3. Luego sigue las instrucciones a continuación para instalar el Micro Servicio que deseas

## ¡Felicitaciones! Puedes seguir los consejos sobre el flujo de trabajo ahora

<div align="center"><img width ="1000" src="https://genainerds.com/assets/img/WorkflowsHome.png"/></div>


## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

