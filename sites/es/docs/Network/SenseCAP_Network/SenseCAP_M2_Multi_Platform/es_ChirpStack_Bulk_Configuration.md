---
description: Este wiki le guiará para crear y configurar instancias de dispositivos de forma masiva en el LNS local del M2 Gateway utilizando un script de Python.
title: Configuración masiva de ChirpStack en M2 Gateway
keywords:
  - M2 gateway
  - LoRaWAN
  - Configuration
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /bulk_configuration_chirpstack
sku: 114992982, 114993135, 114992983, 114993088, 114992981, 114993080, 114993079
sidebar_position: 6
last_update:
  date: 6/12/2026
  author: David Du
createdAt: '2026-06-12'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/bulk_configuration_chirpstack/
---

Este tutorial le guiará en el uso de un script de Python para añadir y activar en lote dispositivos LoRaWAN en modo ABP (Activation By Personalization) a través de la interfaz gRPC en la plataforma ChirpStack integrada en el gateway. Este método es ideal para escenarios que requieren el despliegue de un gran número de dispositivos (como nodos sensores) de una sola vez, mejorando significativamente la eficiencia de configuración.

## 1. Preparación

Antes de comenzar, asegúrese de cumplir los siguientes requisitos:

- Un **gateway M2 indoor** ejecutando ChirpStack, y que conozca su dirección IP.

- Ha creado al menos una **Application** y ha obtenido su **Application ID**.

- Ha creado un **Device Profile** (tipo ABP) y ha obtenido su **Device Profile ID**.

- Ha preparado un lote de dispositivos que se van a configurar y ha registrado la siguiente información para cada dispositivo:

    `dev_eui` (identificador único del dispositivo)

    `name` (nombre del dispositivo, opcional)

    `description` (descripción del dispositivo, opcional)

    `dev_addr` (dirección del dispositivo)

    `nwk_s_key` (clave de sesión de red)

    `app_s_key` (clave de sesión de aplicación)

:::note
Usted es responsable de asignar las claves a los dispositivos ABP. Asegúrese de que el `dev_addr` de cada dispositivo sea único dentro de la red y de que las claves cumplan con la especificación LoRaWAN (una cadena hexadecimal de 32 caracteres, es decir, 16 bytes).
:::

## 2. Configuración del entorno

1. **Obtener los archivos del script**
Descargue o cree los siguientes dos archivos y colóquelos en el mismo directorio:

    `chirpstack-v3-bulk-deploy.py` – Script principal de Python

    `device_list.xlsx` – Archivo de Excel que contiene la lista de dispositivos (a rellenar más tarde)

También puede descargar los scripts desde [HERE](https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/chirpstack-v3-bulk-deploy.py).

2. **Instalar las dependencias de Python**
Este script requiere Python 3.7 o posterior y depende de `grpcio`, `openpyxl` y `chirpstack-api`. Recomendamos usar un entorno virtual para evitar contaminar la instalación de Python de su sistema.

**Para usuarios de macOS/Linux:**

```bash 
# create project directory
mkdir chirpstack-bulk-deploy && cd chirpstack-bulk-deploy

# create virtual environment
python3 -m venv .venv

# activate the virtual environment
source .venv/bin/activate

# install dependencies
pip install chirpstack-api openpyxl
```

**Para usuarios de Windows:**

```bash 
# create project directory
mkdir chirpstack-bulk-deploy
cd chirpstack-bulk-deploy

# create virtual environment
python -m venv .venv

# activate the virtual environment
.venv\Scripts\activate

# install dependencies
pip install chirpstack-api openpyxl
```

## 3. Preparar la lista de equipos (archivo de Excel)

Cree un archivo llamado `device_list.xlsx` usando Excel, WPS o LibreOffice. La primera fila debe contener los encabezados de columna; el script usará estos encabezados para identificar las columnas. Los nombres de las columnas (**sensibles a mayúsculas y minúsculas**) son los siguientes:

|dev_eui|    name|    description|    dev_addr|    nwk_s_key|    app_s_key|
|---|---|---|---|---|---|
|0016c001f0abcde1|abp-device-1|test device|02010101|2B7E151628AED2A6ABF7158809CF4F31|2B7E151628AED2A6ABF7158809CF4F41|
|...|abp-device-2|test device|...|...|...|

<br />

:::note
`dev_eui` debe ser una cadena hexadecimal de 16 dígitos (por ejemplo, 0101010101010101).

`nwk_s_key` y `app_s_key` deben ser cadenas hexadecimales de 32 dígitos (es decir, 16 bytes).

Si el dev_eui de un dispositivo está vacío, el script omitirá automáticamente esa línea.

Si name o description están vacíos, el script rellenará una cadena vacía.
:::

## 4. Modificar la configuración del script
Abra `chirpstack-v3-bulk-deploy.py` y modifique los parámetros de configuración en la parte superior del archivo para que coincidan con su entorno real.

```python
# ===== Configuration =====
GRPC_SERVER = "192.168.x.x:8080"   # replace with the real IP of the gateway + ChirpStack gRPC port（default 8080）
API_TOKEN = "YOUR API TOKEN"
APPLICATION_ID = "YOUR APPLICATION ID"
DEVICE_PROFILE_ID = "YOUR DEVICE PROFILE ID"
EXCEL_FILE = "device_list.xlsx"
# =================
```

**Descripción de los parámetros:**

- **GRPC_SERVER**: La dirección IP del gateway y el puerto gRPC de ChirpStack. El puerto gRPC predeterminado de ChirpStack es 8080. Asegúrese de que su ordenador esté en la misma subred que el gateway o tenga acceso enrutable a él.

- **API_TOKEN**: Clave de API de ChirpStack. Para obtenerla: Inicie sesión en la interfaz web de ChirpStack → Menú de usuario en la esquina superior derecha → “API Keys” → Cree una nueva clave de API y asígnele al menos los siguientes permisos: Device: create, Device: activate y Device keys: create.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/get-api.png" style={{width:900, height:'auto'}}/></div></td>

<br />

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/api-token.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **APPLICATION_ID**: El UUID de la aplicación de destino. En la interfaz web de ChirpStack → Applications → seleccione su aplicación.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/application-id.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **DEVICE_PROFILE_ID**: El UUID del perfil de dispositivo. Ruta: Device profiles → Seleccione su perfil ABP → Obténgalo desde la URL.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/device-profile-id.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **EXCEL_FILE**: El nombre del archivo de Excel; de forma predeterminada, se encuentra en el mismo directorio que el script.

:::caution
Los tokens de API tienen permisos de alto nivel; no los revele ni los suba a repositorios públicos.
:::

## 5. Ejecutar el script para el despliegue masivo

Asegúrese de que el entorno virtual esté activo y de que `chirpstack-v3-bulk-deploy.py` y `device_list.xlsx` estén en el mismo directorio, luego ejecute:

```bash
python3 chirpstack-v3-bulk-deploy.py
```

El proceso de ejecución imprime registros en tiempo real. A continuación se muestra un ejemplo de una ejecución correcta:

```bash
Starting batch configuration of ABP devices...
✓ Successfully read 2 devices from device_list.xlsx
✓ Device 0101010101010101 created 
✓ Device 0101010101010101 keys configured 
✓ Device 0101010101010101 ABP activated 
----------------------------------------
✓ Device 0202020202020202 created 
✓ Device 0202020202020202 keys configured 
✓ Device 0202020202020202 ABP activated 
----------------------------------------
...
Batch configuration completed.
```

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerle diferentes tipos de soporte y garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>