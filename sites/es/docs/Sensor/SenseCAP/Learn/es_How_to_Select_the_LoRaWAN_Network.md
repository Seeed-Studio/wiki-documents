---
description: Qué Red LoRaWAN Debo Seleccionar
title: Qué Red LoRaWAN Debo Seleccionar
keywords:
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/select_lorawan_network
last_update:
  date: 1/9/2023
  author: Jessie
---


En el ámbito en rápida expansión del IoT (Internet de las Cosas), las redes LoRaWAN han experimentado un aumento en popularidad, ofreciendo capacidades de comunicación de largo alcance y bajo consumo de energía para diversas aplicaciones de IoT. Últimamente, hemos sido inundados con consultas: "**¿Qué red LoRaWAN debo elegir para mi proyecto específico?**"

En este artículo, te guiaremos a través de los componentes de una red LoRaWAN, exploraremos las diferencias entre redes LoRaWAN públicas y privadas, y ofreceremos referencias para ayudarte a tomar una decisión informada.

### ¿Qué es una Red LoRaWAN?

**LoRaWAN** (Red de Área Amplia de Largo Alcance) es un protocolo inalámbrico diseñado para comunicaciones de bajo consumo y largo alcance que permite a los dispositivos del Internet de las Cosas (IoT) conectarse e intercambiar datos con servidores o aplicaciones.
Ofrece una solución rentable y segura para desplegar dispositivos IoT en una amplia gama de aplicaciones, incluyendo ciudades inteligentes, agricultura, seguimiento de activos, monitoreo ambiental, y más.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server.png" alt="pir" width={800} height="auto" /></p>

### ¿Cómo Funciona una Red LoRaWAN?

Una red LoRaWAN típica consiste en los siguientes elementos básicos: Dispositivos finales, gateway, servidor de red y servidor de aplicación.

Los dispositivos finales se comunican con gateways cercanos y el gateway está conectado al Servidor de Red. El Servidor de Red reenvía los datos al servidor de aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server2.png" alt="pir" width={800} height="auto" /></p>

### Diferencias entre LNS Público y LNS Privado

Las redes LoRaWAN pueden categorizarse ampliamente como públicas o privadas. Las redes LoRaWAN públicas dependen de proveedores de red como TTN, Helium, etc., mientras que las redes privadas ponen elementos de red como gateways y servidores bajo el control del usuario. Puedes seleccionar el LNS público, o construir tu propia red privada.

|Factor|Redes LoRaWAN Públicas|Redes LoRaWAN Privadas|
|--|--|--|
|Propiedad|Gestionadas por proveedores de red|Bajo control del usuario|
|Cobertura|Disponible en regiones específicas|Libre para cubrir el área que te importa|
|Seguridad|Infraestructura compartida|Control y seguridad mejorados|
|Costo de configuración|Costo de entrada relativamente bajo|Costos significativos de infraestructura al lanzamiento|
|Costo de transmisión de datos|Altas tarifas de suscripción para transmisión de datos de dispositivos finales|Sin suscripción|

La elección entre redes LoRaWAN públicas y privadas depende en gran medida de la naturaleza y los requisitos de tu proyecto. Aquí tienes una breve descripción general:

**Las Redes LoRaWAN Privadas son adecuadas para:**
- Redes de automatización industrial que requieren integridad de datos segura de extremo a extremo.
- Aplicaciones médicas que requieren comunicación ultra-segura entre dispositivos.
- Sistemas de seguridad de edificios inteligentes con información sensible.

**Las Redes LoRaWAN Públicas son adecuadas para:**
- Escenarios agrícolas como el monitoreo de cultivos.
- Ciudades inteligentes con aplicaciones como monitoreo de tráfico, iluminación inteligente y sistemas de estacionamiento inteligente.

### Si elijo Redes LoRaWAN Públicas, ¿qué debo hacer?

Si estás considerando una red LoRaWAN pública, hay varios proveedores globales para elegir, incluyendo TTN, Helium, Loriot, y Chirp Stack, etc. Para tomar una decisión final, podrías considerar los siguientes factores:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map.png" alt="pir" width={800} height="auto" /></p>

#### ¿Hay una red LoRaWAN pública disponible en mi área?

Determina si hay una red LoRaWAN pública disponible en tu área visitando la página de [Proveedores de Red](https://www.semtech.com/lora/ecosystem/networks) del Ecosistema LoRa de Semtech, o consultando el [Mapa de Cobertura Global](https://lora-alliance.org/#tabs-1) de la LoRa Alliance。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map2.png" alt="pir" width={800} height="auto" /></p>

Para ayudarte a elegir el proveedor más adecuado y el área de desarrollo, recomendamos realizar pruebas de campo, el [Probador de Campo LoRaWAN Wio Terminal](https://www.seeedstudio.com/WioField-Tester-Kit-p-5282.html) te ayudará particularmente a saber cuántos gateways alrededor pueden ser alcanzados para una posición dada, enriquecer los mapeadores de red para conocerse entre sí y compartir la cobertura real de la red.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-helium.png" alt="pir" width={700} height="auto" /></p>

### Si elijo Redes LoRaWAN Privadas, ¿qué debo hacer?

Construir una red LoRaWAN privada puede ser una opción viable, especialmente para despliegues de área rutinaria como fábricas o campus. Una red LoRaWAN privada típica involucra tres componentes principales—dispositivos LoRaWAN, gateways y servidores, aquí está lo que puedes necesitar considerar:

#### ¿Qué gateway debo elegir?

Para construir tu propia red LoRaWAN, comienza seleccionando un gateway adecuado, que juega un papel importante en conectar dispositivos finales y servidores de red. Hay muchos tipos de gateway, cuando estés tomando una decisión, considera factores como costo, funcionalidad y opciones de despliegue. Para una configuración rápida y fácil, solo echa un vistazo al [Gateway Interior LoRaWAN Multi-Plataforma SenseCAP](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) - Es tan simple como configurar un router Wi-Fi, y viene con un ChirpStack LNS integrado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-gateway.png" alt="pir" width={800} height="auto" /></p>

#### Comienza a desplegar tus dispositivos finales

Una vez que tu gateway esté configurado, ¡es hora de desplegar tu primer dispositivo! Solo prueba el [Rastreador LoRaWAN SenseCAP T1000](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), ideal para una solución de rastreo verdaderamente confiable.

Cuando se trata de desplegar dispositivos finales, podrías preguntarte cuántos dispositivos pueden conectarse a un gateway. La respuesta depende de varias variables, notablemente el tamaño de la carga de datos transmitida por los dispositivos finales y sus intervalos de transmisión especificados, las condiciones ambientales también juegan un papel en esta evaluación. Para determinar el número máximo de dispositivos soportados sin riesgo de pérdida de paquetes, la experimentación práctica en el sitio de despliegue es a menudo el enfoque más confiable.

Típicamente, un gateway puede manejar mensajes de cientos de dispositivos, para el [Gateway Interior LoRaWAN Multi-Plataforma SenseCAP](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), permite la conexión de aproximadamente 600 [Rastreadores LoRaWAN SenseCAP T1000](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) (con intervalo de carga de 5 minutos).

Ahora que estás mejor informado sobre las opciones disponibles para redes LoRaWAN, puedes tomar una decisión confiada al desplegar aplicaciones basadas en LoRa. ¡Comencemos el viaje LoRaWAN configurando tu primer gateway!
