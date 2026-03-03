---
description: reTerminal-FAQ
title: Iniciar sesión en Raspberry Pi OS/ Ubuntu OS u otros OS usando SSH a través de Wi-Fi/ Ethernet
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/log_rpios_use_ssh_over_wifi_ethernet
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Iniciar sesión en Raspberry Pi OS/ Ubuntu OS u otros OS usando SSH a través de Wi-Fi/ Ethernet -->

Si deseas iniciar sesión en el Raspberry Pi OS usando **SSH a través de Wi-Fi/ Ethernet**, puedes seguir los pasos a continuación. Primero configura Wi-Fi/Ethernet en el reTerminal y luego SSH usando Windows/Mac/Linux.

## Paso 1: Configurar Wi-Fi/Ethernet en el reTerminal

:::caution
Si has configurado WiFi y habilitado SSH usando Raspberry Pi Imager, puedes omitir el paso 1
:::

- **1.** Si **tienes una conexión Wi-Fi**, haz clic en el **ícono de Wi-Fi** en la esquina superior derecha del escritorio de Raspberry Pi OS, selecciona tu red Wi-Fi e ingresa la contraseña usando el teclado virtual en pantalla

**Nota:** La ubicación de la configuración de Wi-Fi puede ser diferente para otros OS

- **2.** Si **no tienes una conexión Wi-Fi**, puedes conectar un cable ethernet desde tu router al puerto ethernet del reTerminal

**Nota:** Asegúrate de que el reTerminal y tu computadora estén conectados a la misma red

- **3.** Toca el ícono de Raspberry Pi en la esquina superior izquierda y navega a `Preferences > Raspberry Pi Configuration` y haz clic en la pestaña **Interfaces**

- **4.** Selecciona **Enable** que está junto a **SSH** y haz clic en **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

Ahora configuremos el software en la computadora. Por favor sigue según tu sistema operativo

## Paso 2: Configurar SSH usando Windows/Mac/Linux

### Para Windows

- **1.** Abre **Command Prompt** y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **2.** Escribe **yes** para la solicitud

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **3.** Ingresa la contraseña como sigue

```sh
raspberry
```

- **4.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

### Para Mac/Linux

- **1.** Abre **Terminal** en la computadora y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **2.** Escribe **yes** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **3.** Cuando solicite la contraseña, escribe lo siguiente

```sh
raspberry
```

- **4.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>