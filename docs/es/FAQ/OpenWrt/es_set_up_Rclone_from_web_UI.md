---
description: OpenWrt-FAQ
title: Cómo configurar Rclone desde la interfaz web
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/set_up_Rclone_from_web_UI
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q3: I cannot successfully set up Rclone from web UI -->

Rclone es un programa para gestionar archivos en unidades de almacenamiento en la nube. Puedes usarlo para asegurarte de que tus archivos en la nube estén siempre sincronizados con el almacenamiento local.

Aunque hay una interfaz de usuario para configurar Rclone dentro de la interfaz Luci de OpenWrt, primero necesitas hacer todas las configuraciones dentro de una línea de comandos. Después de eso solo podrás ver tus archivos usando la interfaz web.

Por favor sigue los pasos a continuación:

- **Paso 1.** Visita la **interfaz web Luci de OpenWrt** y navega a `Services > Terminal`

- **Paso 2.** Inicia sesión con tus credenciales de OpenWrt

- **Paso 3.** Inicia el **proceso de configuración de rclone** escribiendo lo siguiente

```sh
rclone config
```

- **Paso 4.** Presiona **n** y presiona **Enter** para crear un nuevo remoto.

- **Paso 5.** Escribe un nombre de tu elección para el nuevo remoto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-1.1.png" alt="pir" width="600" height="auto"/></p>

- **Paso 6.** Encuentra el **tipo de almacenamiento** al que estás creando una conexión remota, e ingresa el número correspondiente de la larga lista

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-2.png" alt="pir" width="450" height="auto"/></p>

**Nota:** Aquí se elige el número **13** para **Google Drive** como ejemplo

- **Paso 7.** Cuando se te solicite un **Client ID**, presiona **Enter** para aceptar el valor predeterminado

- **Paso 8.** Cuando se te solicite un **Client Secret**, presiona **Enter** para aceptar el valor predeterminado

- **Paso 9.** Elige **1** como el alcance que rclone debe usar cuando solicite acceso desde la unidad

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-3.png" alt="pir" width="550" height="auto"/></p>

**Nota:** Esto dará acceso completo a todos los archivos en la unidad

- **Paso 10.** Cuando se te solicite el **root folder ID**, presiona **Enter** para aceptar el valor predeterminado

- **Paso 11.** Cuando se te solicite la **ruta del archivo JSON de credenciales de cuenta de servicio**, presiona **Enter** para aceptar el valor predeterminado

- **Paso 12.** En la solicitud **Edit advanced config**, presiona **Enter** que selecciona **No** por defecto

- **Paso 13.** En el menú **Use auto config**, presiona **n** y luego presiona **Enter**

- **Paso 14.** Copia y pega el enlace mostrado en un navegador web

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-4.png" alt="pir" width="500" height="auto"/></p>

- **Paso 15.** Inicia sesión en tu cuenta de Google y **Permite** el acceso

- **Paso 16.** **Copia** el código mostrado en la **página de inicio de sesión de Google** y **pégalo** dentro de la **línea de comandos** que usamos antes

- **Paso 17.** En **Configure as a team drive** presiona **Enter** para aceptar el valor predeterminado

- **Paso 18.** Presiona **Enter** para confirmar la creación del remoto

Verás la salida como sigue:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-5.png" alt="pir" width="300" height="auto"/></p>

- **Paso 19.** Escribe **q** para salir de la configuración

- **Paso 20.** Navega a `NAS > Rclone`, marca la casilla junto a **run Rclone as daemon** y haz clic en **SAVE & APPLY**

- **Paso 21.** Copia la **dirección de rclone**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-6.png" alt="pir" width="600" height="auto"/></p>

- **Paso 22.** Haz clic en **WEBUI REACT** y se abrirá una nueva página web

- **Paso 23.** Pega la **dirección de rclone** previamente copiada en la primera columna en blanco

- **Paso 24.** Escribe **admin** tanto para el nombre de usuario como para la contraseña, y presiona **Verify**

Verás la siguiente salida si la conexión es verificada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-7.png" alt="pir" width="300" height="auto"/></p>

- **Paso 25.** Haz clic en **Login** y ve a **Explore** desde el menú lateral

- **Paso 26.** Escribe el nombre del remoto que creamos antes y haz clic en **Open**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-8.png" alt="pir" width="1000" height="auto"/></p>

Ahora verás todos tus archivos disponibles en tu unidad