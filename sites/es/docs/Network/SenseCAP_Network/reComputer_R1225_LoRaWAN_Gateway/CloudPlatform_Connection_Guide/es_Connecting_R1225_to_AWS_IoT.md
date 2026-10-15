---
description: Conectar R1225 a AWS IoT
title: Conexión a AWS IoT
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_aws_iot
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/07/2026
  author: Kian
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/es/connecting_r1225_to_aws_iot/
updatedAt: '2026-04-15'
---

## Configuración de Gateway AWS IoT

Inicia sesión en [AWS](https://signin.aws.amazon.com).
Si no tienes una cuenta de AWS, por favor crea una nueva cuenta primero.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Añadir Gateway

Navega a **Internet de las Cosas** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws1.png" alt="pir" width={800} height="auto" /></p>

Selecciona **Dispositivos LPWAN** > **Gateway** para añadir un gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws2.png" alt="pir" width={800} height="auto" /></p>

**EUI del Gateway:** El EUI del gateway se puede encontrar en la etiqueta del dispositivo o en la [Consola Local](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Banda de frecuencia:** Selecciona el plan de frecuencia según la elección real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws3.png" alt="pir" width={800} height="auto" /></p>

#### Crear certificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws4.png" alt="pir" width={800} height="auto" /></p>

Descarga los archivos del certificado y los certificados de confianza del servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws5.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws6.png" alt="pir" width={800} height="auto" /></p>

#### Elegir el Rol

Elige **IoT Wireless Gateway Cert Manager Role**, luego envía la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws7.png" alt="pir" width={800} height="auto" /></p>

## Configuración del Gateway R1225

Inicia sesión en la Consola Local. Consulta la [Guía de Inicio Rápido](https://wiki.seeedstudio.com/es/r1225_quick_start/) del dispositivo para iniciar sesión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws9.webp" alt="pir" width={800} height="auto" /></p>

### Configuración de Red LoRaWAN

Navega a **LoRa** > **Red LoRa**

**Modo**: Basics Station

**EUI del Gateway**: Obtendrá automáticamente el EUI del gateway conectado

**Servidor**: Elige Servidor CUPS o Servidor LNS (Para CUPS, el puerto es 443; para LNS, el puerto es 8887)

Más información sobre [Servidores CUPS y LNS](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Modo de Autenticación**: Autenticación TLS de Servidor y Cliente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws10.png" alt="pir" width={800} height="auto" /></p>

Haz clic en Guardar y Aplicar cuando termines la configuración.

## Verificar estado de conexión del gateway

Navega a la página Gateways y elige el gateway que has añadido.

En la sección de detalles específicos de LoRaWAN de la página de detalles del Gateway, verás el estado de conexión y la fecha y hora en que se recibió el último uplink.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws8.png" alt="pir" width={800} height="auto" /></p>

## Configuración de Dispositivo AWS IoT

### Añadir Perfiles

Se pueden definir perfiles de dispositivo y servicio para describir configuraciones comunes de dispositivos. Estos perfiles describen parámetros de configuración que son compartidos por dispositivos para facilitar la adición de esos dispositivos. AWS IoT Core para LoRaWAN admite perfiles de dispositivo y perfiles de servicio.

#### Añadir perfiles de dispositivos

Navega a **Dispositivos** > **Perfiles**, haz clic en Añadir perfil de dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Proporciona un Nombre de perfil de dispositivo, selecciona la Banda de frecuencia (RfRegion) que estás usando para el dispositivo y el gateway, y mantén las demás configuraciones con los valores predeterminados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### Añadir perfiles de servicio

Navega a **Dispositivos** > **Perfiles**, haz clic en Añadir perfil de servicio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

Se recomienda dejar habilitada la configuración AddGWMetaData para que recibas metadatos adicionales del gateway para cada carga útil, como RSSI y SNR para la transmisión de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### Añadir Destino

Navega a **Dispositivos** > **Destino**, haz clic en Añadir destino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Publicar en el broker de mensajes de AWS IoT Core

**Permisos**: Selecciona un rol de servicio existente > IoT Wireless Gateway Cert Manager Role

:::tip Nota
Un nombre de destino solo puede tener caracteres alfanuméricos, - (guión) y _ (guión bajo) y no puede tener espacios.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### Añadir Dispositivos LoRaWAN

#### Añadir dispositivo inalámbrico

Navega a **Dispositivos LPWAN** > **Dispositivos**, haz clic en Añadir dispositivo inalámbrico

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### Configurar dispositivo

**Especificación del dispositivo inalámbrico**: OTAAv1.0x

**DevEUI:** La clave `device EUI/APP EUI/APP` se puede encontrar en la etiqueta del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar estado de conexión del dispositivo

Navega a la página **Dispositivos** y elige el dispositivo que has añadido.

En la sección Detalles de la página de detalles de Dispositivos inalámbricos, verás la fecha y hora en que se recibió el último uplink.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>
