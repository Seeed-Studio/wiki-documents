---
description: Conectar la puerta de enlace multi-plataforma SenseCAP M2 a AWS
title: Conexión a AWS IoT
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-04-15'
url: https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/
---


## Configuración de AWS IoT

Inicia sesión en [AWS](https://signin.aws.amazon.com).
Si no tienes una cuenta de AWS, por favor crea una nueva cuenta primero.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar puerta de enlace

Navega a **Internet de las Cosas** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

Selecciona **Dispositivos LPWAN** > **Puerta de enlace** para agregar una puerta de enlace

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**EUI de la puerta de enlace:** El EUI de la puerta de enlace se puede encontrar en la etiqueta del dispositivo o en la [Consola Local](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Banda de frecuencia:** Selecciona el plan de frecuencia según la elección real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS3.PNG" alt="pir" width={800} height="auto" /></p>

#### Crear certificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

Descarga los archivos del certificado y los certificados de confianza del servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

Elige el Rol: **IoT Wireless Gateway Cert Manager Role**, luego envía la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar el estado de conexión de la puerta de enlace

Navega a la página Puertas de enlace y elige la puerta de enlace que agregaste.

En la sección de detalles específicos de LoRaWAN de la página de detalles de la puerta de enlace, verás el estado de conexión y la fecha y hora en que se recibió la última transmisión ascendente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar perfiles

Se pueden definir perfiles de dispositivo y servicio para describir configuraciones comunes de dispositivos. Estos perfiles describen parámetros de configuración que son compartidos por dispositivos para facilitar la adición de esos dispositivos. AWS IoT Core para LoRaWAN admite perfiles de dispositivo y perfiles de servicio.

#### Agregar perfiles de dispositivos

Navega a **Dispositivos** > **Perfiles**, haz clic en Agregar perfil de dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Proporciona un Nombre de perfil de dispositivo, selecciona la Banda de frecuencia (RfRegion) que estás utilizando para el dispositivo y la puerta de enlace, y mantén los demás ajustes en los valores predeterminados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### Agregar perfiles de servicio

Navega a **Dispositivos** > **Perfiles**, haz clic en Agregar perfil de servicio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

Se recomienda dejar habilitada la configuración AddGWMetaData para que recibas metadatos adicionales de la puerta de enlace para cada carga útil, como RSSI y SNR para la transmisión de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar destino

Navega a **Dispositivos** > **Destino**, haz clic en Agregar destino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Publicar en el broker de mensajes de AWS IoT Core

**Permisos**: Selecciona un rol de servicio existente > IoT Wireless Gateway Cert Manager Role

:::tip Nota
Un nombre de destino solo puede tener caracteres alfanuméricos, - (guión) y _ (guión bajo) y no puede tener espacios.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### Agregar dispositivos LoRaWAN

#### Agregar dispositivo inalámbrico

Navega a **Dispositivos LPWAN** > **Dispositivos**, haz clic en Agregar dispositivo inalámbrico

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### Configurar dispositivo

**Especificación del dispositivo inalámbrico**: OTAAv1.0x

**DevEUI:** La clave `device EUI/APP EUI/APP` se puede encontrar en la etiqueta del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar el estado de conexión del dispositivo

Navega a la página **Dispositivos** y elige el dispositivo que agregaste.

En la sección Detalles de la página de detalles de Dispositivos inalámbricos, verás la fecha y hora en que se recibió la última transmisión ascendente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## Configuración de la puerta de enlace

Inicia sesión en la Consola Local Consulta el [Inicio Rápido del](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) dispositivo para iniciar sesión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### Configuración de la red LoRaWAN

Navega a **LoRa** > **Red LoRa**

**Modo**: Basics Station

**EUI de la puerta de enlace**: Obtendrá automáticamente el EUI de la puerta de enlace conectada

**Servidor**: Elige Servidor CUPS o Servidor LNS (Para CUPS, el puerto es 443; para LNS, el puerto es 8887)

Obtén más información sobre [Servidores CUPS y LNS](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Modo de autenticación**: Autenticación TLS de servidor y cliente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

Haz clic en Guardar y Aplicar cuando termines la configuración.
