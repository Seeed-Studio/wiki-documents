---
description: Presenta las API básicas del equipo y los sistemas.
title: Dispositivo y sistema
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_device-and-system
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_api_device-and-system/
---

# Dispositivo y sistema

## Descripción general de endpoints

| Método | Ruta | Propósito |
|---|---|---|
| GET | `/system/device-info` | Obtener número de serie del dispositivo, versión de firmware, modelo de la placa de sensor y de la placa base |
| GET | `/system/resource-info` | Obtener uso de CPU, NPU, memoria y almacenamiento |
| GET | `/system/time` | Obtener hora del sistema, zona horaria y configuración de NTP |
| PUT | `/system/time` | Establecer la hora del sistema |
| GET | `/system/battery` | Obtener estado de la batería |
| GET | `/system/check` | Comprobar si es el primer inicio de sesión |
| GET | `/system/ssh` | Consultar el estado de ejecución de SSH |
| POST | `/system/ssh` | Iniciar o detener SSH |
| GET | `/system/secure` | Consultar el estado de HTTPS |
| POST | `/system/secure` | Habilitar o deshabilitar HTTPS |
| GET | `/config/export` | Exportar la configuración del dispositivo |
| POST | `/config/upload` | Importar la configuración del dispositivo |
| POST | `/system/reboot` | Reiniciar el dispositivo |
| POST | `/system/factory-reset` | Restaurar la configuración de fábrica |

## Obtener información del dispositivo

```text
GET /system/device-info
```

Respuesta:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10",
  "sSensorModel": "SC850SL",
  "sBasePlateModel": "Base Board-V1.0,Expand Board-V1.0"
}
```

| Campo | Descripción |
|---|---|
| `sSerialNumber` | Número de serie del dispositivo |
| `sFirmwareVersion` | Versión de firmware |
| `sSensorModel` | Modelo de la placa de sensor |
| `sBasePlateModel` | Modelo de la placa base |

## Obtener estado de los recursos del sistema

```text
GET /system/resource-info
```

Respuesta:

```json
{
  "iCpuUsage": 12,
  "iNpuUsage": 69,
  "sMem": {
    "iMemTotal": 1.94,
    "iMemUsage": 33,
    "iMemUsed": 0.65
  },
  "sStorage": {
    "iStorageTotal": 11.29,
    "iStorageUsage": 37,
    "iStorageUsed": 4.22
  }
}
```

| Campo | Descripción |
|---|---|
| `iCpuUsage` | Porcentaje de uso de CPU |
| `iNpuUsage` | Porcentaje de uso de NPU |
| `sMem.iMemTotal` | Memoria total |
| `sMem.iMemUsed` | Memoria utilizada |
| `sMem.iMemUsage` | Porcentaje de uso de memoria |
| `sStorage.iStorageTotal` | Almacenamiento total |
| `sStorage.iStorageUsed` | Almacenamiento utilizado |
| `sStorage.iStorageUsage` | Porcentaje de uso de almacenamiento |

## Hora del sistema

### Obtener hora del sistema

```text
GET /system/time
```

Respuesta:

```json
{
  "sMethod": "ntp",
  "dNtpConfig": {
    "sAddress": "pool.ntp.org",
    "sPort": "123",
    "status": 0
  },
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

| Campo | Descripción |
|---|---|
| `sMethod` | Fuente de la hora, `ntp` o `manual` |
| `dNtpConfig.sAddress` | Dirección del servidor NTP |
| `dNtpConfig.sPort` | Puerto NTP |
| `dNtpConfig.status` | Estado de NTP, `0` significa correcto |
| `iTimestamp` | Marca de tiempo Unix en segundos |
| `sTimezone` | Ciudad de la zona horaria |
| `sTz` | Zona horaria, p. ej. `UTC+8` |

### Establecer hora del sistema

```text
PUT /system/time
```

Cuerpo de la solicitud en modo NTP:

```json
{
  "sMethod": "ntp",
  "dNtpConfig": {
    "sAddress": "pool.ntp.org",
    "sPort": "123"
  },
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

Cuerpo de la solicitud en modo manual:

```json
{
  "sMethod": "manual",
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

Respuesta:

```json
{
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

## Estado de la batería

```text
GET /system/battery
```

Respuesta:

```json
{
  "isAttached": true,
  "displaySteps": 0,
  "totalSteps": 5,
  "isCharging": false
}
```

| Campo | Descripción |
|---|---|
| `isAttached` | Indica si hay una batería conectada |
| `displaySteps` | Pasos actuales del nivel de batería |
| `totalSteps` | Pasos totales del nivel de batería |
| `isCharging` | Indica si la batería se está cargando |

## Comprobar primer inicio de sesión

```text
GET /system/check
```

Respuesta:

```json
{
  "bFirst": false
}
```

`bFirst=true` indica que el dispositivo está en el flujo de primer inicio de sesión y que se debe cambiar la contraseña predeterminada.

## SSH

### Consultar estado de SSH

```text
GET /system/ssh
```

Respuesta:

```json
{
  "bRunning": true
}
```

### Iniciar o detener SSH

```text
POST /system/ssh
```

Cuerpo de la solicitud:

```json
{
  "bRunning": true
}
```

| Campo | Descripción |
|---|---|
| `bRunning` | `true` para iniciar SSH, `false` para detenerlo |

## HTTPS

### Consultar estado de HTTPS

```text
GET /system/secure
```

Respuesta:

```json
{
  "sEnable": true
}
```

### Habilitar o deshabilitar HTTPS

```text
POST /system/secure
```

Cuerpo de la solicitud:

```json
{
  "sEnable": true
}
```

Respuesta:

```json
{
  "code": 0,
  "message": "Settings applied successfully"
}
```

Después de habilitar HTTPS, utiliza `https://<DEVICE_IP>` para los accesos posteriores.

## Gestión de configuración

### Exportar configuración

```text
GET /config/export
```

Respuesta:

```json
{
  "size": 35116544,
  "url": "/download/config.tar"
}
```

| Campo | Descripción |
|---|---|
| `size` | Tamaño del archivo de configuración |
| `url` | Ruta de descarga; anteponer la IP del dispositivo para obtener una URL completa |

URL de descarga:

```text
http://<DEVICE_IP>/download/config.tar
```

### Importar configuración

```text
POST /config/upload
```

La importación de la configuración sobrescribe los ajustes actuales del dispositivo. Exporta primero la configuración actual como copia de seguridad.

## Reinicio

```text
POST /system/reboot
```

Respuesta:

```json
{
  "code": 0,
  "message": "success"
}
```

El dispositivo se reiniciará y se perderá la conexión actual. Espera a que el dispositivo vuelva a estar en línea antes de continuar.

## Restablecimiento de fábrica

El restablecimiento de fábrica requiere una confirmación en dos etapas.

Etapa 1:

```text
POST /system/factory-reset
```

Respuesta:

```json
{
  "code": 0,
  "sConfirmToken": "adfagghvshf"
}
```

Etapa 2, envía el token de confirmación dentro de su período de validez:

```text
POST /system/factory-reset
```

Cuerpo de la solicitud:

```json
{
  "sConfirmToken": "adfagghvshf"
}
```

Respuesta:

```json
{
  "code": 0,
  "message": "success"
}
```

El restablecimiento de fábrica borra toda la configuración del dispositivo. Asegúrate de tener una copia de seguridad antes de continuar.


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>