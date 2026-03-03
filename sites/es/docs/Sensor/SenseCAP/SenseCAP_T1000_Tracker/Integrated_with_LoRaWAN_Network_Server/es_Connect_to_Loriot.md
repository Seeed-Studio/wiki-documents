---
description: Conectar el SenseCAP T1000 Tracker a Loriot
title: Conectar a Loriot
keywords:
- Tracker
- Loriot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_Tracker_Loriot
last_update:
  date: 12/12/2023
  author: KeweiLee
---


[LORIOT](https://docs.loriot.io/display/NMS/Getting+Started) LoRAWAN Network Server (LNS) es independiente del hardware y soporta todos los gateways y sensores LoRaWAN® del mercado.

:::info
Si no tienes una cuenta de Loriot, ve [aquí](https://loriot.io/register.html) selecciona uno de los servidores públicos de la comunidad LORIOT en tu región y registra uno nuevo.
:::

## Agregar una Red

Las redes son simplemente una colección de gateways LoRaWAN, y proporcionan un entorno eficiente para monitorear y gestionar tus gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddNetwork.png" alt="pir" width={800} height="auto" /></p>

Al agregar un nuevo gateway, necesita ser asignado a una red. Puede estar solo o con una colección de otros gateways.

Un método típico para agrupar gateways en redes es por ubicación geográfica, modelo, cliente, o cualquier estructura que funcione mejor para ti.

No hay restricciones sobre cuántos gateways pueden incluirse en una red (siempre que esté dentro del límite de gateways de la cuenta), pero cada gateway solo puede pertenecer a una sola red.

### Agregar tu primer Gateway

¡Inicia tu red LoRaWAN agregando tu primer gateway! También puedes seguir la guía [paso a paso](https://docs.loriot.io/display/NMS/Register+a+Gateway+or+Base+Station) de Loriot para registrar un Gateway o Estación Base para comenzar.

Creamos un gateway (Basics Station Semtech) aquí como ejemplo. Navega a `Network`, luego haz clic en la red que acabas de agregar. Haz clic en `Add Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddGateway.png" alt="pir" width={800} height="auto" /></p>

En la mitad inferior de la página aparecerá una lista de gateways, selecciona el modelo de gateway relevante haciendo clic en su imagen.
Para registrar el gateway, se necesita ingresar la dirección MAC eth0 del gateway (seis octetos separados por dos puntos).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/NInfo.png" alt="pir" width={800} height="auto" /></p>

Finalmente, su ubicación puede configurarse de dos maneras diferentes. Ya sea seleccionando una ubicación en el mapa o completando la información requerida para registrar la dirección manualmente.

### Configurar el certificado de tu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/ConfigureGateway.png" alt="pir" width={800} height="auto" /></p>

En la página `Certificate` encontrarás la dirección del servidor de red, el puerto del servidor de red, y podrás descargar o copiar el certificado TLS CA para configurar tu modelo de gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/Certificate.png" alt="pir" width={800} height="auto" /></p>

En la interfaz de usuario de tu gateway, selecciona "LoRa Basics Station" como el modo de operación. Por favor, asegúrate de configurar la dirección, puerto y certificado del servidor usando la información obtenida en el paso anterior. Esto es para establecer la conexión entre el gateway y el sistema de gestión de red LORIOT.

Regresa a la interfaz de usuario de LORIOT y verifica que tu LoRa Basics™ Station esté ahora en línea y funcionando correctamente con el sistema de gestión de red LORIOT.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/GatewayOnline.png" alt="pir" width={800} height="auto" /></p>


## Agregar una Aplicación

Las [aplicaciones](https://docs.loriot.io/display/NMS/Create+a+New+Application) son simplemente donde registramos, gestionamos y organizamos dispositivos y seleccionamos el destino de salida para los datos del dispositivo.
Al agregar nuevos dispositivos, se asignan a una aplicación, esto informa al servidor de la aplicación en la que están registrados tus dispositivos y los detalles de tu salida de datos elegida.

Siempre que el número total de dispositivos no exceda el límite de la cuenta del usuario, cualquier número de dispositivos puede agregarse a una aplicación sin importar el tipo de sensor o fabricante.

Típicamente, una aplicación contendrá todos los dispositivos de un caso de uso específico (por ejemplo, todos los sensores en un edificio inteligente) o dispositivos del mismo tipo (por ejemplo, sensores de temperatura).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddApplicaiton.png" alt="pir" width={800} height="auto" /></p>


### Agregar tu primer dispositivo (SenseCAP T1000 Tracker)


Haz clic en `Enroll Device`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddDevice.png" alt="pir" width={800} height="auto" /></p>

El servidor de red LORIOT soporta dispositivos LoRaWAN 1.0.x y 1.1. El dispositivo puede agregarse a través de dos procesos de inscripción diferentes. OTAA (Over-The-Air-Activation) es la opción recomendada para la mayoría de dispositivos, pero ABP (activation by personalization) también está disponible. Después de conectarte exitosamente al Tracker usando la aplicación SenseCAP Mate App por Bluetooth, puedes obtener información OTAA en esta pestaña.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={600} height="auto" /></p>

Configura la plataforma a otra plataforma, y luego copia el Device EUI/APP EUI/APP Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/OTAAInfo.png" alt="pir" width={400} height="auto" /></p>

Finalmente, selecciona Enroll. Una vez que hayas agregado tus dispositivos, podrás ver el flujo de datos en Loriot.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/DeviceDetails.png" alt="pir" width={800} height="auto" /></p>