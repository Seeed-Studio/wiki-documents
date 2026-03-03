---
description: Guía para restablecer la conexión inalámbrica de Reachy Mini usando la app nRF Connect o un navegador con Bluetooth Web API para restablecer el punto de acceso Wi‑Fi o el daemon.
title: Restablecer Reachy Mini vía Bluetooth
slug: /es/reachymini_platforms_reachy_mini_reset
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
  skip: [zh-CN]
---

# Panel sencillo de Bluetooth para smartphone

Con un smartphone y un navegador compatible con Bluetooth Web API (basado en Chrome/Opera/Edge) simplemente ve aquí 👉 [Bluetooth tool](https://pollen-robotics.github.io/reachy_mini/) y restablece el hotspot, comprueba el estado de la red u otras tareas.

Si tu dispositivo/navegador no es compatible, por favor revisa la otra solución.


# Guía de ReachyMini con nRF Connect

Reachy Mini wireless emite una señal Bluetooth que te permite restablecer el punto de acceso Wi‑Fi o el daemon.

## 1. Instalar nRF Connect
- **Android**: [Download here](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en-US&pli=1)
- **iOS**: [Download here](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)


## 2. Escanear y conectar
1. Abre nRF Connect.
2. Escanea los dispositivos y selecciona **ReachyMini**.
![bluetooth_1.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_1.jpg)
3. Conéctate al dispositivo.



## 3. Unknown Service y sección WRITE
- Navega hasta **Unknown Service**.
- Localiza la sección **WRITE**.
- También puedes usar la sección **READ** de arriba para comprobar la respuesta del robot.
![bluetooth_2.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_2.jpg)



## 4. Envío de comandos
Los comandos se envían como **cadenas hexadecimales**. Usa [this tool](https://www.rapidtables.com/convert/number/ascii-to-hex.html) para convertir ASCII a hex si es necesario.
Los comandos también se pueden enviar usando el formato de texto original, como "STATUS" o "CMD_HOTSPOT".

**Antes de enviar cualquier comando, asegúrate de enviar primero el código PIN.**

### Comandos disponibles
| Command                | Hex Value (send after `0x`)       |
|------------------------|-----------------------------------|
| STATUS                 | 535441545553                      |
| PIN_00018              | 50494E5F3030303138                |
| CMD_HOTSPOT            | 434D445F484F5453504F54            |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |


### Código PIN

El PIN son los **últimos 5 dígitos** del número de serie del robot. Por ejemplo, si el número de serie es `xxxxxxxx4918400018`, el PIN será `00018`, así que envía `PIN_00018` o el valor hexadecimal correspondiente.

### Comandos disponibles
| Command                | Hex Value (send after `0x`)       |
|------------------------|-----------------------------------|
| STATUS                 | 535441545553                      |
| PIN_00018              | 50494E5F3030303138                |
| CMD_HOTSPOT            | 434D445F484F5453504F54            |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |

Nota: Si usas el comando de software reset, el robot se reiniciará y tendrás que esperar unos 5 minutos para que vuelva a estar disponible.

### Consejos

Es una buena práctica guardar los comandos para usarlos más tarde.
![bluetooth_3.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_3.jpg)
![bluetooth_4.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_4.jpg)




