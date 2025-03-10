---
description: Esta wiki describe cómo utilizar las herramientas de escritorio remoto VNC en una reComputer Jetson paso a paso.
title: Uso de VNC en una reComputer Jetson
tags:
  - Despliegue de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/vnc_for_recomputer
last_update:
  date: 9/30/2024
  author: YaoHui Zhu
---

# Cómo utilizar las herramientas del escritorio remoto VNC Viewer en la reComputer Nvidia Jetson

## Introducción

VNC Viewer es una herramienta de escritorio remoto que te permite controlar de forma remota tu computadora Nvidia Jetson desde otros dispositivos de PC, con acceso en tiempo real al escritorio gráfico. Esta wiki describe cómo instalar y usar VNC en la reComputer Nvidia Jetson.

## Prerequisitos
-  Un dispositivo Jetson: adecuado para [todos los dispositivos Seeed Stuido Nvidia](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)


<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

-  [Un Hdmi Dummy Plug](https://www.cytron.io/p-full-size-hdmi-dummy-plug-for-headless-setup). 
:::nota
Si no deseas conectar un monitor, debes usar un **`HDMI Dummy Plug`** para habilitar el control de escritorio remoto.
:::


<div align="center">
    <img width={300} 
     src="https://static.cytron.io/image/cache/catalog/products/CA-HDMI-DMP/HDMI%20USB%20(a)-800x800.png" />
</div>


## Primeros pasos
### Insatll VNC
 **Paso 1.** Instala VNC Viewer en tu Jetson:
 ```bash
  sudo apt update
  sudo apt install vino
 ```

 **Paso 2.** Habilita el servidor VNC para inicializarse cada vez que inicies sesión:
 ```bash
  cd /usr/lib/systemd/user/graphical-session.target.wants
  sudo ln -s ../vino-server.service ./.
 ```

 **Step 3.** Configura el servidor VNC
 ```bash
  gsettings set org.gnome.Vino prompt-enabled false
  gsettings set org.gnome.Vino require-encryption false
 ```

 **Step 4.** Configura una contraseña para acceder al servidor VNC
 ```bash
 # Replace thepassword with your desired password
  gsettings set org.gnome.Vino authentication-methods "['vnc']"
  gsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)
 ```

 **Step 5.** Edita`org.gnome` para añadir el parámetro `enabled key`
 ```bash
  cd /usr/share/glib-2.0/schemas
  sudo cp org.gnome.Vino.gschema.xml org.gnome.Vino.gschema.xml.old
  sudo vi org.gnome.Vino.gschema.xml 
 ```
Pega el siguiente código en la ubicación siguiente, asegurándote de que el formato sea el mismo que se muestra a continuación.

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

### Compilar e iniciar:
 Compilación:

 ```bash
  sudo glib-compile-schemas /usr/share/glib-2.0/schemas
  sudo reboot
 ```
 Inicio:

 ```bash
  /usr/lib/vino/vino-server
 ```

## Conexión al servicio VNC desde otra computadora

Necesitarás saber la dirección IP de tu kit de desarrollador Jetson para conectarte desde otra computadora. Ejecuta el comando ifconfig en tu kit de desarrollador y anota la dirección IP asignada a la interfaz eth0 si usas Ethernet, la interfaz wlan0 si usas conexión inalámbrica o l4tbr0 si usas la conexión Ethernet en modo de dispositivo USB. Luego, necesitas conectar un HDMI Dummy Plug a tu dispositivo Jetson.

- Windows:
  - Paso 1: Descarga e instala VNC Viewer de [aquí](https://www.realvnc.com/en/connect/download/viewer/).
  - Paso 2: Inicia VNC Viewer y escribe la dirección IP de tu kit de desarrollador.
  - Paso 3: Si has configurado el servidor VNC para la autenticación, proporciona la contraseña de tu VNC.

- MacOS:
  - Paso 1. Abre FINder y da click en Ir | Ve al folder desde la barra de menú.
  - Paso 2: Ingresa "/System/Library/CoreServices/Applications" y haz click en Ir.
  - Paso 3: Abre la aplicación llamada Screen Sharing e ingresa la información de conexión. Por ejemplo: nombre de usuario@.
  - Paso 4: Haz click en conectar.
  - Paso 5: Si configuraste el servidor VNC para la autenticación, proporciona la contraseña del VNC.

- Linux: El siguiente ejemplo utiliza gvncviewer; sin embargo, cualquiera de tus clientes vnc también debería funcionar. Una alternativa popular es remmina.
  - Paso 1. Instala gvncviewer ejecutando los siguientes comandos:

    ```bash
    sudo apt update
    sudo apt install gvncviewer
    ```
  - Paso 2: Inicia gvncviewer.
      ```bash
    gvncviewer 
    ```
  - Paso 3: Si configuraste el servidor VNC para la autenticación, proporciona la contraseña del VNC.

## Habilita el servidor VNC para que se inicie cada vez que inicies sesión:
**Paso 1.** Busca "Startup Application Preferences" en la aplicación.
<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig2.png" />
  </div>

**Paso 2.** Haz click en el botón "Add" y podrás completar los campos "Name" y "Comment" con cualquier texto. En el campo "Command", agrega la siguiente instrucción:
```bash
nohup /usr/lib/vino/vino-server > /dev/null 2>&1 &
```

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig3.png" />
  </div>

Haz click en "Save" (Guardar) y reinicia la computadora. Desconecta el monitor y conecta el **HDMI Dummy Plug** a la Jetson. Ahora puedes verificar a través del VNC.

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig4.png" />
  </div>

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>