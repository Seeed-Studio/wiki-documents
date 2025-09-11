---
description: Conectar SenseCAP M2 Multi-Platform Gateway a AWS
title: Conectando a AWS IoT
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 08/29/2023
  author: Jessie
---


## Configuración de AWS IoT

Inicia sesión en [AWS](https://signin.aws.amazon.com).
Si no tienes una cuenta de AWS, por favor crea una nueva cuenta primero.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar Gateway


Navega a **Internet of Things** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

Selecciona **LPWAN devices** > **Gateway** para agregar un gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**EUI del Gateway:** El EUI del gateway se puede encontrar en la etiqueta del dispositivo o en la [Consola Local](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Banda de frecuencia:** Selecciona el plan de frecuencia según la elección real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>


#### Crear certificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

Descarga los archivos de certificado y los certificados de confianza del servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

Elige el Rol: **IoT Wireless Gateway Cert Manager Role**, luego envía la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar el estado de conexión del gateway

Navega a la página de Gateways y elige el gateway que has agregado.

En la sección de detalles específicos de LoRaWAN de la página de detalles del Gateway, verás el estado de conexión y la fecha y hora en que se recibió el último uplink.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar Perfiles

Los perfiles de dispositivo y servicio se pueden definir para describir configuraciones comunes de dispositivos. Estos perfiles describen parámetros de configuración que son compartidos por dispositivos para facilitar la adición de esos dispositivos. AWS IoT Core para LoRaWAN soporta perfiles de dispositivo y perfiles de servicio.

#### Agregar perfiles de dispositivos

Navega a **Devices** > **Profiles**, haz clic en Add device profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Proporciona un nombre de perfil de dispositivo, selecciona la banda de frecuencia (RfRegion) que estás usando para el dispositivo y gateway, y mantén las otras configuraciones con los valores predeterminados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### Agregar perfiles de servicio

Navega a **Devices** > **Profiles**, haz clic en Add service profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

Se recomienda que dejes la configuración AddGWMetaData habilitada para que recibas metadatos adicionales del gateway para cada payload, como RSSI y SNR para la transmisión de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar Destino

Navega a **Devices** > **Destination**, haz clic en Add destination

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Publicar en el broker de mensajes de AWS IoT Core

**Permisos**: Selecciona un rol de servicio existente > IoT Wireless Gateway Cert Manager Role

:::tip Nota
Un nombre de destino solo puede tener caracteres alfanuméricos, - (guión) y _ (guión bajo) y no puede tener espacios.
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar Dispositivos LoRaWAN

#### Agregar dispositivo inalámbrico

Navega a **LPWAN devices** > **Devices**, haz clic en Add wireless device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### Configurar dispositivo

**Especificación del dispositivo inalámbrico**: OTAAv1.0x 

**DevEUI:** El `device EUI/APP EUI/APP` key se puede encontrar en la etiqueta del dispositivo.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>


#### Verificar el estado de conexión del dispositivo

Navega a la página **Devices** y elige el dispositivo que has agregado.

En la sección de Detalles de la página de detalles de dispositivos inalámbricos, verás la fecha y hora en que se recibió el último uplink.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## Configuración del Gateway

Inicia sesión en la Consola Local. Consulta la [Guía de Inicio Rápido](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) del dispositivo para iniciar sesión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### Configuración de Red LoRaWAN

Navega a **LoRa** > **Red LoRa**

**Modo**: Basics Station

**EUI del Gateway**: Obtendrá automáticamente el EUI del gateway conectado

**Servidor**: Elige Servidor CUPS o Servidor LNS (Para CUPS, el puerto es 443; para LNS, el puerto es 8887)

Aprende más sobre [Servidor CUPS y LNS](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Modo de Autenticación**: Autenticación TLS de Servidor y Cliente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>


Haz clic en Guardar y Aplicar cuando termines la configuración.

