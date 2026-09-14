---
description: Comenzar con SenseCAP Card Tracker T1000-E para LoRaWAN a través de SES
title: Comenzar con SES
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/LoRaWAN_Tracker/lorawan_opensource.webp
slug: /open_source_lorawan
sidebar_position: 3
last_update:
  date: 9/1/2026
  author: Advent Jiang
createdAt: '2025-09-03'
updatedAt: '2026-02-04'
url: https://wiki.seeedstudio.com/es/open_source_lorawan/
---


## Preparación

:::caution note
Antes de flashear el firmware, asegúrese de que su dispositivo sea la versión `T1000-E for LoRaWAN` y por favor no flashee otro firmware Meshtastic o MeshCore a este modelo de tracker, puede causar que el dispositivo quede completamente inoperativo.
:::

### Preparación de Hardware

- SenseCAP T1000-E x 1
- Cable USB x 1
- Computadora x 1

### Preparación de Software

Antes de poder comenzar a desarrollar, se requieren las siguientes herramientas de software.

#### SEGGER Embedded Studio (SES)

SES es una solución todo en uno para gestionar, construir, probar e implementar aplicaciones embebidas. Esto significa operaciones de desarrollo fluidas y eficientes gracias a su amplia gama de características. El potente gestor de proyectos permite la gestión de proyectos grandes y pequeños. Las características de control de versiones permiten el despliegue automático de aplicaciones.

Descarga el paquete de instalación correspondiente según tu sistema operativo.

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-Descarga</span></a>

:::tip
Se recomienda usar la versión 5.68.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### nRF5 SDK

El nRF5 SDK proporciona un entorno de desarrollo rico para dispositivos nRF5 Serie al incluir una amplia selección de controladores, bibliotecas, ejemplos para periféricos, SoftDevices y protocolos de radio propietarios.

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-Descarga</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Paquete de Ejemplo Seeed T1000-E

Seeed proporciona un proyecto de ejemplo para que los desarrolladores puedan comenzar más rápidamente. Este ejemplo incluye comunicación LoRaWAN, adquisición de información de posicionamiento, adquisición de datos de sensores a bordo, etc.

<a  href="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Seeed_T1000_E_Dev_Board_Alpha-main.zip" target="_blank"><span>Ejemplo de Seeed-Descarga</span></a>

**Agregar archivo de Ejemplo de Seeed al nRF5 SDK**

Copia el `archivo de Ejemplo Seeed T1000-E` a la siguiente ruta del nRF5 SDK:
`.../nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/file-path.png" alt="pir" width={600} height="auto" /></p>

### Verificar la información del Bootloader

Antes de comenzar, por favor verifica primero la información del bootloader.

- **Paso 1:** Entrar al modo DFU

 Conecta el cable USB a tu PC, mantén presionado el botón del dispositivo, luego conecta rápidamente el cable de carga, debería aparecer un controlador llamado `T1000-E`.

:::danger note
Si no aparece una ventana de controlador después de mantener presionado el botón del dispositivo al conectar el cable, por favor toca rápidamente dos veces el cable de carga como se muestra en la operación a continuación.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={400} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2:** Verificar el INFO_UF2.TXT

 La información correcta del bootloader se muestra en la figura:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/bootloader-info.png" alt="pir" width={600} height="auto" /></p>

### Ejecutar Proyecto de Ejemplo LoRaWAN

**Importar Proyecto de Ejemplo**

Aquí tomamos el proyecto `08_ses_lorawan_gnss` como ejemplo.
Abre SES y abre el proyecto de ejemplo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

**Modificar los Parámetros LoRaWAN**

Define la REGION/DEVICE_EUI/JOIN_EUI/APP_KEY en `lorawan_key_config.h`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={800} height="auto" /></p>

**Construir el proyecto modificado**

Selecciona el proyecto requerido en el Project Explorer.<br/>
Elige `Build` > `Build` o presiona `F7`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/build-done.png" alt="pir" width={800} height="auto" /></p>

#### Convertir a archivo UF2

Después de que la construcción sea exitosa, habrá un archivo `.hex` en la carpeta de salida, hemos incluido un script de Python `uf2conv.py` en la carpeta `Firmware` para convertir el archivo hex a archivo uf2.

Navega a la ruta del archivo y ejecuta el script:

```py
python uf2conv.py filename.hex -c -f 0xADA52840 -o filename.uf2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/convert-uf2.png" alt="pir" width={600} height="auto" /></p>

#### Flashear el Firmware de la Aplicación

- **Paso 1:** Entrar al modo DFU

 Conecta el cable USB a tu PC, mantén presionado el botón del dispositivo, luego conecta el cable de carga, debería aparecer un controlador llamado `T1000-E`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2:** Flashear Firmware de Aplicación LoRaWAN

 Copia el archivo `UF2` a la unidad DFU. El firmware debería ser flasheado después de que el archivo se descargue y el dispositivo se reinicie.

### Conectar a un LNS

En esta sección, conectaremos el dispositivo al LNS (aquí tomamos TTN como ejemplo) para ver los datos, y verificar la ubicación a través de TTN Mapper.

Para comenzar, regístrate para una cuenta con The Things Industries o The Things Network.

#### Paso 1: Crear una aplicación

Navega a la página Applications, haz clic en "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Ingresa un Application ID, haz clic en Create Application para guardar tus cambios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Registrar el Dispositivo

Haz clic en "Register end device".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Establece los siguientes parámetros:

**Frequency Plan**: Selecciona el plan de frecuencia apropiado para la región objetivo

**LoRaWAN version**:LoRaWAN Specification 1.0.4

**Regional Parameters version**: PR002 Regional Parameters V1.0.3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI: Los cuales definiste en el archivo 'lorawan_key_config.h' en la configuración anterior.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={600} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

**Verificar Datos en Vivo**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/payload-data.png" alt="pir" width={800} height="auto" /></p>

### Restaurar el Firmware de Fábrica

- Usar el firmware de fábrica de vuelta, flashea el firmware `t1000_e_dev_kit_11_lorawan_tracker.uf2`.
- Usar la nube SenseCAP, necesita importar las claves SenseCAP escaneando el código QR en la etiqueta del dispositivo.
