---
description: Configura cómo se comporta reCamera Pro en tu red durante el funcionamiento diario - hora del sistema, acceso SSH/HTTP, velocidad en baudios del puerto serie y la contraseña de administrador.
title: Red, hora y control de acceso
keywords:
  - reCamera
  - reCamera Pro
  - network settings
  - SSH
  - time settings
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_device_info
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_device_info/
---

# Red, hora y control de acceso

El área **Device Info** de la interfaz web cubre los ajustes que determinan cómo se comporta una reCamera Pro desplegada en tu red: su reloj, qué servicios de acceso remoto están abiertos y quién puede iniciar sesión. La conexión Wi‑Fi inicial se trata en [Access the device over Wi-Fi](/es/recamera_pro_wifi_access/); esta página trata sobre la **configuración a largo plazo** una vez que el dispositivo ya está en tu red.

Device Info también informa de las versiones de hardware/software y del uso de recursos; consulta [Basic information](#basic-information) al final, y [Back up and restore](/es/recamera_pro_backup_restore/) y [Firmware update and recovery](/es/recamera_pro_firmware_update/) para los elementos restantes de System Settings.

## Ajustes de hora

La hora del sistema controla los horarios de grabación, las marcas de tiempo de los archivos y las entradas de registro. Ajústala en **Device Info → Time Settings**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_F3jLNlVu0W.png" />

- Verifica el reloj después de cada reinicio y después de mover el dispositivo a una red sin acceso a Internet.
- Si los horarios o los directorios de grabación caen en horas incorrectas, comprueba primero la hora: un reloj incorrecto es la causa más común.

{/* TODO(verify): document whether the device syncs time via NTP automatically when connected to the Internet, which NTP servers/regions are used, and how time behaves after reboot without network. */}

## Ajustes de red (a largo plazo)

**Device Info → Network Settings** muestra el estado del módulo Wi‑Fi, la red conectada e información de red detallada (haz clic en el signo de exclamación junto a la red conectada para ver los detalles de IP/MAC).

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_GJspvgAFdl.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png" />

Para una instalación permanente:

- Reserva una IP fija para la dirección MAC del dispositivo en tu router (reserva DHCP), o registra la dirección asignada en tu inventario de activos.
- Mantén el dispositivo en un segmento de red donde solo los clientes previstos puedan acceder a la interfaz web y a los servicios abiertos.

## Ajustes de conexión: SSH, HTTP, serie

**Device Info → Connection Settings** controla cómo te conectas al dispositivo:

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZH9JMcsCen.png" />

| Ajuste | Efecto | Guía de despliegue |
| --- | --- | --- |
| SSH remote connection | Activa/desactiva el acceso SSH al sistema | Actívalo para desarrollo y mantenimiento; desactívalo en dispositivos en producción a los que no necesites acceder por consola |
| HTTP settings | Configura el servicio HTTP del dispositivo | Restringe su exposición a redes de confianza |
| Serial port baud rate | Establece la velocidad en baudios del puerto serie | Debe coincidir con el controlador/MCU externo con el que lo integres |

:::caution Los cambios de acceso tienen efecto inmediato
Desactivar SSH o cambiar los ajustes HTTP puede bloquear tu sesión remota actual. Mantén disponible la interfaz web (o la conexión directa por USB en `192.168.42.1`) como vía de respaldo mientras cambias los ajustes de conexión.
:::

{/* TODO(verify): confirm exact HTTP settings fields exposed in Connection Settings on current firmware (port, enable switch, TLS) and document them here. */}

## Gestión de contraseñas

La contraseña de administrador se cambia en **Device Info → System Settings**. El inicio de sesión en la interfaz web usa el nombre de usuario `admin`; la contraseña inicial en un dispositivo nuevo es `recamera` (se te pedirá que establezcas una nueva en el primer inicio de sesión).

- **Cambia la contraseña predeterminada antes del despliegue**: de lo contrario, cualquiera que conozca la predeterminada puede acceder a la interfaz web, y el [web terminal](/es/recamera_pro_terminal/) / inicio de sesión SSH como root (`root` / `recamera` por defecto) comparten el estado de credenciales del dispositivo.
- Cambiar la contraseña afecta al inicio de sesión en la interfaz web; registra dónde se almacena la nueva contraseña.

{/* TODO(verify): confirm the exact relationship between the Web UI admin password, the root SSH/terminal password, and whether changing one changes the other, on current firmware. */}

## Información básica

**Device Info → Basic Information** muestra las versiones de hardware y software y el uso en tiempo real de los recursos del sistema: lo primero que soporte te pedirá.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

Cita la versión de firmware de esta página cuando [actualices el firmware](/es/recamera_pro_firmware_update/) o [recojas registros para soporte](/es/recamera_pro_collect_logs/).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
