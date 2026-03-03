---
description: Este wiki describe cómo usar herramientas de escritorio remoto VNC en reComputer Jetson paso a paso.
title: Usando VNC en reComputer Jetson
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/vnc_for_recomputer
last_update:
  date: 9/30/2024
  author: YaoHui Zhu
---

# Cómo usar herramientas de escritorio remoto VNC en el reComputer Nvidia Jetson

## Introducción

VNC es una herramienta de escritorio remoto que te permite controlar remotamente tu reComputer Nvidia Jetson desde otros dispositivos PC, con acceso en tiempo real al escritorio gráfico. Este wiki describe cómo instalar y usar VNC en el reComputer Nvidia Jetson.

## Prerrequisitos

- Un dispositivo Jetson: adecuado para [todos los dispositivos Nvidia de Seeed Studio](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

- [Un Conector Ficticio HDMI](https://www.cytron.io/p-full-size-hdmi-dummy-plug-for-headless-setup).

:::note
Si no quieres conectar un monitor, debes usar un **`Conector Ficticio HDMI`** para habilitar el control de escritorio remoto.
:::

<div align="center">
    <img width={300}
     src="https://static.cytron.io/image/cache/catalog/products/CA-HDMI-DMP/HDMI%20USB%20(a)-800x800.png" />
</div>

## Comenzando

### Instalar VNC

 **Paso 1.** Instalar VNC en Jetson:

 ```bash
  sudo apt update
  sudo apt install vino
 ```

 **Paso 2.** Habilitar el servidor VNC para que inicie cada vez que inicies sesión:

 ```bash
  cd /usr/lib/systemd/user/graphical-session.target.wants
  sudo ln -s ../vino-server.service ./.
 ```

 **Paso 3.** Configurar el Servidor VNC

 ```bash
  gsettings set org.gnome.Vino prompt-enabled false
  gsettings set org.gnome.Vino require-encryption false
 ```

 **Paso 4.** Establecer una contraseña para acceder al servidor VNC

 ```bash
 # Reemplaza thepassword con tu contraseña deseada
  gsettings set org.gnome.Vino authentication-methods "['vnc']"
  gsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)
 ```

 **Paso 5.** Editar `org.gnome` para añadir un parámetro para la `clave enabled`

 ```bash
  cd /usr/share/glib-2.0/schemas
  sudo cp org.gnome.Vino.gschema.xml org.gnome.Vino.gschema.xml.old
  sudo vi org.gnome.Vino.gschema.xml 
 ```

Pegue el siguiente código en la ubicación indicada, asegurándose de que el formato sea el mismo que el que se muestra a continuación.

  ```bash
  <key name='enabled' type='b'>
        <summary>Enable remote access to the desktop</summary>
        <description>
                If true, allows remote access to the desktip via the RFB
                protocol. Users on remote machines may then connect to the
                desktop using a VNC viewer.
        </description>
        <default>false</default>
      </key>
  ```

<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig1.png" />
  </div>

### Compilar e iniciar

 Compilar:

 ```bash
  sudo glib-compile-schemas /usr/share/glib-2.0/schemas
  sudo reboot
 ```

 iniciar:

 ```bash
  /usr/lib/vino/vino-server
 ```

## Conectándose al servicio VNC desde otra computadora

Necesitarás conocer la dirección IP de tu kit de desarrollo Jetson para conectarte desde otra computadora. Ejecuta el comando ifconfig en tu kit de desarrollo y anota la dirección IP asignada a la interfaz eth0 si usas ethernet, interfaz wlan0 si usas inalámbrico, o l4tbr0 si usas la conexión Ethernet en modo dispositivo USB. Luego, necesitas conectar un conector ficticio HDMI al Jetson.

- Windows:
  - Paso 1: Descarga e instala VNC viewer desde [aquí](https://www.realvnc.com/en/connect/download/viewer/).
  - Paso 2: Inicia el visor VNC y escribe la dirección IP de tu kit de desarrollo.
  - Paso 3: Si has configurado el servidor VNC para autenticación, proporciona la contraseña VNC.

- MacOS:
  - Paso 1. Abre Finder y elige Ir | Ir a la Carpeta desde la barra de menú.
  - Paso 2: Ingresa "/System/Library/CoreServices/Applications" y haz clic en Ir.
  - Paso 3: Abre la aplicación llamada Screen Sharing e ingresa la información de conexión. Por ejemplo: username@.
  - Paso 4: Haz clic en conectar.
  - Paso 5: Si has configurado el servidor VNC para autenticación, proporciona la contraseña VNC.

- Linux: El ejemplo de abajo usa gvncviewer, sin embargo cualquiera de tus clientes vnc favoritos debería funcionar también. Una alternativa popular es remmina.
  - Paso 1. Instala gvncviewer ejecutando los siguientes comandos:

    ```bash
    sudo apt update
    sudo apt install gvncviewer
    ```

  - Paso 2: Inicia gvncviewer.

      ```bash
    gvncviewer 
    ```

  - Paso 3: Si has configurado el servidor VNC para autenticación, proporciona la contraseña VNC.

## Habilitar el servidor VNC para que inicie cada vez que inicies sesión

**Paso 1.** Busca `Startup Application Preferences` en la aplicación.
<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig2.png" />
  </div>

**Paso 2.** Haz clic en el botón `Add`, y puedes llenar los campos `Name` y `Comment` con cualquier texto. En el campo `Command`, añade la siguiente instrucción:

```bash
nohup /usr/lib/vino/vino-server > /dev/null 2>&1 &
```

<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig3.png" />
  </div>

Haz clic en `Save` y reinicia el reComputer. Desconecta el monitor y conecta el **Conector Ficticio HDMI** al Jetson. Ahora, puedes verificar a través de VNC.

<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig4.png" />
  </div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
