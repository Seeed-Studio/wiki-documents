---
description: Guía para restablecer la conexión inalámbrica de Reachy Mini usando la app Reachy Mini Control, Web Bluetooth o nRF Connect para restablecer el punto de acceso Wi‑Fi o el daemon.
title: Restablecer Reachy Mini vía Bluetooth
slug: /reachymini_platforms_reachy_mini_reset
keywords:
  - reset
  - bluetooth
  - nrf connect
  - hotspot
  - daemon
  - wireless
  - troubleshoot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_reset/
---

# Herramientas de reinicio y restablecimiento por Bluetooth (inalámbrico)

Si necesitas restablecer el punto de acceso Wi‑Fi del robot, reiniciar el daemon o ejecutar otros comandos de mantenimiento por Bluetooth, usa una de las opciones siguientes. **Da preferencia a la app oficial Reachy Mini Control** cuando estés en un portátil o sobremesa: incluye una consola Bluetooth y evita tener que alternar entre un navegador o una app de teléfono por separado.

## 1. Reachy Mini Control — Consola Bluetooth (recomendado)

Usa la aplicación de escritorio **Reachy Mini Control** ([download](https://hf.co/reachy-mini/#/download)). El Bluetooth debe estar activado en tu ordenador.

1. Abre **Reachy Mini Control**. En la pantalla **Connect to Reachy** (antes de iniciar una sesión), desplázate hasta el pie de página y haz clic en **First time WiFi setup**.

[![control-app-first-time-wifi-setup.png](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-first-time-wifi-setup.png)](https://hf.co/reachy-mini/#/download)

2. En el asistente **First Time WiFi Setup**, usa el enlace del pie de página **Try the Bluetooth Console** (por ejemplo, si no se detecta el punto de acceso, o siempre que quieras acceder directamente a la consola).

[![control-app-wifi-wizard-bluetooth-console.png](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-wifi-wizard-bluetooth-console.png)](https://hf.co/reachy-mini/#/download)

Desde la consola Bluetooth puedes restablecer el punto de acceso, comprobar el estado de la red y ejecutar el mismo tipo de comandos que en los otros métodos siguientes.

> **Nota:** En algunas versiones de la app, el enlace de entrada puede mostrarse como **First time connecting to your WiFi...** en lugar de **First time WiFi setup**; abre el mismo flujo de configuración de Wi‑Fi.

## 2. Panel Web Bluetooth (navegador de teléfono o escritorio)

Con un smartphone o un ordenador de escritorio y un **navegador compatible con Bluetooth** (Chrome, Opera o Edge), abre la herramienta independiente: [Bluetooth tool](https://pollen-robotics.github.io/reachy_mini/). Puedes restablecer el punto de acceso, comprobar el estado de la red y más sin instalar la app de escritorio.

Si tu dispositivo o navegador no es compatible con la API Web Bluetooth, usa la app de escritorio (arriba) o el método con nRF Connect que se indica a continuación.

## 3. nRF Connect (avanzado)

Reachy Mini inalámbrico expone una interfaz Bluetooth GATT para que puedas restablecer el punto de acceso Wi‑Fi o el daemon desde un cliente BLE genérico.

### 3.1 Instalar nRF Connect

- **Android**: [Google Play](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en-US&pli=1)
- **iOS**: [App Store](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

### 3.2 Escanear y conectar

1. Abre nRF Connect.
2. Escanea dispositivos y selecciona **ReachyMini**.

[![bluetooth_1.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_1.jpg)

3. Conéctate al dispositivo.

### 3.3 Servicio desconocido y sección WRITE

- Abre el **Unknown Service**.
- Usa la sección **WRITE** para enviar comandos.
- Puedes usar la sección **READ** de arriba para inspeccionar las respuestas del robot.

[![bluetooth_2.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_2.jpg)

### 3.4 Envío de comandos

Los comandos se envían como **cadenas hexadecimales** (o como texto plano como `STATUS` o `CMD_HOTSPOT`). Usa [este conversor](https://www.rapidtables.com/convert/number/ascii-to-hex.html) si necesitas ASCII → hex.

**Envía siempre el PIN antes de cualquier otro comando.**

#### Código PIN

El PIN son los **últimos 5 dígitos** del número de serie del robot. Por ejemplo, si el número de serie es `xxxxxxxx4918400018`, el PIN es `00018` — envía `PIN_00018` (o el valor hexadecimal de abajo).

#### Referencia de comandos

| Comando                | Valor hex (después de `0x`)         |
|------------------------|-------------------------------------|
| STATUS                 | 535441545553                        |
| PIN_00018              | 50494E5F3030303138                  |
| CMD_HOTSPOT            | 434D445F484F5453504F54              |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |

Si usas **CMD_SOFTWARE_RESET**, el robot se reinicia y puede tardar **unos 5 minutos** antes de que vuelva a estar accesible.

#### Consejos

Es práctico guardar los comandos que usas con frecuencia para reutilizarlos.

[![bluetooth_3.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_3.jpg)
[![bluetooth_4.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_4.jpg)