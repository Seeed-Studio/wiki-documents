---
description: Cómo instalar Home Assistant en reTerminal
title: Primeros pasos con Home Assistant
image: https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4
slug: /es/reTerminal_Home_Assistant
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Primeros pasos con Home Assistant en reTerminal

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/94.jpg" /></center>

## Introducción

Esta wiki te guiará paso a paso sobre cómo puedes convertir tu casa ordinaria en una inteligente simplemente usando un reTerminal. Al final de esta wiki, podrás ver un hermoso panel de control en la pantalla LCD del reTerminal y podrás controlar tus electrodomésticos y ver otra información como datos de sensores al alcance de tus dedos. ¡Así que comencemos!

## ¿Qué es Home Assistant?

[Home Assistant](https://www.home-assistant.io) es un software gratuito y de código abierto para automatización del hogar diseñado para ser un sistema de control central para dispositivos domésticos inteligentes, que puede ser referido como un hub de hogar inteligente. Te ofrece automatización del hogar sin necesidad de la nube, lo que significa que tu sistema de automatización del hogar no depende de servidores remotos o una conexión a internet. Este control local significa que puedes tener una seguridad mucho mejor que los dispositivos conectados a la nube. Además, ofrece mayor confiabilidad cuando se trata de mantenerlo funcionando 24x7.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></center>

Es flexible de usar y muy fácil de comenzar incluso para principiantes con la excelente documentación ofrecida por Home Assistant. Además, hay una comunidad activa en [Home Assistant Forum](https://community.home-assistant.io) con muchos miembros que estarán ahí para ayudarte si encuentras algún problema al construir y ejecutar Home Assistant.
Después de configurar Home Assistant, se puede acceder a través de una interfaz de usuario basada en web usando aplicaciones complementarias para Android e iOS, o por comandos de voz a través de un asistente virtual compatible como Google Assistant o Amazon Alexa.
Si quieres experimentar rápidamente una demostración en tu navegador web, por favor [haz clic aquí](https://demo.home-assistant.io).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></center>

## Diferentes métodos de instalación

Home Assistant es compatible para ejecutarse en diferentes hardware como Raspberry Pi, ODROID, ASUS Tinkerboard, Intel NUC, PCs con Windows/Linux/Mac. Y con esto, vienen diferentes métodos de instalación en diferentes hardware. Para aprender más sobre todos estos métodos de instalación por favor visita [esta página](https://www.home-assistant.io/installation).
Como puedes ver a continuación, hay 4 tipos principales de métodos de instalación y no todas las características de Home Assistant son compatibles con todos los métodos de instalación.

<center><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></center>

## Método de instalación para reTerminal

Según Home Assistant, los dos métodos recomendados de instalación de Home Assistant son **OS y método de Contenedor**. Sin embargo, no usaremos estos 2 métodos para instalar en reTerminal. ¿Por qué es eso?

### ¿Por qué no Home Assistant Operating System?

Si instalamos Home Assistant Operating System en reTerminal, no podremos ver la interfaz de usuario del panel de control de Home Assistant en la pantalla LCD del reTerminal. Esto es porque Home Assistant OS solo mostrará una interfaz CLI a cualquier pantalla conectada como se muestra a continuación.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/5.png" /></center>

Así que la interfaz de usuario del panel de control solo se puede acceder a través de **homeassistant.local:8123** en otro dispositivo. Sin embargo, si quieres instalar de esta manera y no quieres ver el panel de control en la pantalla LCD del reTerminal, puedes seguir [esta guía](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system). Sigue los mismos métodos de instalación que una Raspberry Pi porque reTerminal está basado en Raspberry Pi Compute Module 4.

### ¿Por qué no Home Assistant Container?

Si instalamos Home Assistant Container en reTerminal, nos perderemos varias características de Home Assistant. Así que omitiremos esa instalación. Sin embargo, si quieres explorar este método de instalación, puedes seguir [esta guía](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container). Sigue los mismos métodos de instalación que una Raspberry Pi porque reTerminal está basado en Raspberry Pi Compute Module 4.

### ¿Por qué Home Assistant Supervised?

Si instalamos Home Assistant Supervised en reTerminal, podremos usar todas las características de Home Assistant y también podremos ver la interfaz de usuario del panel de control en la pantalla LCD del reTerminal. Pero la instalación de esto involucrará más pasos en comparación con los métodos OS y Container. Sin embargo, si sigues cuidadosamente esta wiki, podrás lograrlo exitosamente.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Method 1" label="Bullseye">

## Construyámoslo

:::note
In some steps, if you are connected through Wi-Fi, you **may lose connection**. It is recommended to use a **LAN (Ethernet) connection** instead for improved stability.
:::

Ahora vamos a repasar el proceso de instalación de Home Assistant Supervised en reTerminal.

- **Paso 1.** Prepara un reTerminal con Raspberry Pi OS ya instalado. reTerminal viene con RPi OS de 32 bits preinstalado. Sin embargo, si quieres instalarlo de nuevo, por favor sigue [esta wiki](https://wiki.seeedstudio.com/es/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

**Nota:** Asegúrate de usar la versión de 32 bits porque la interfaz de usuario del Dashboard de Home Assistant en la pantalla LCD de reTerminal será mucho más fluida en la versión de 32 bits.

- **Paso 2.** Actualiza la lista del gestor de paquetes

```sh
sudo apt update
```

- **Paso 3.** Instalar dependencias

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **Paso 4.** Reparar instalaciones dañadas

```sh
sudo apt --fix-broken install
```

- **Paso 5.** Reinicia reTerminal

```sh
sudo reboot
```

- **Paso 6.** Descargar el script oficial de Docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
```

- **Paso 7.** Ejecuta el script de Docker

```sh
sudo sh get-docker.sh
```

- **Paso 8.** Agregar el usuario Docker al sistema

```sh
sudo usermod -aG docker pi
```

- **Paso 9.** Verificar si Docker está funcionando correctamente

```sh
docker --version
```

Si ves una salida como la siguiente, eso significa que Docker está instalado correctamente

```
Docker version 20.10.18, build b40c2f6
```

:::note

La compatibilidad del Supervisor de Home Assistant depende de un Docker CGroup v1 específico. Para garantizar esta compatibilidad, es necesario realizar los siguientes cambios:

:::

- **Abrir este archivo usando el editor**

```sh
sudo nano /etc/default/grub
```

- **Añade esta línea y guárdala.**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **Abrir este archivo**

```sh
sudo nano /boot/cmdline.txt
```

- **Agrega esta línea al final de la frase y guárdala.**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

- **Paso 10.** Visita la [página de Home Assistant OS Agent](https://github.com/home-assistant/os-agent/releases), bajo la última versión, haz clic derecho en el archivo que termina con ***linux_armv7.deb** y copia el enlace

:::note
La versión estable y probada que funciona hasta ahora para Home Assistant Agent en reTerminal (CM4) es la V1.3.0.
:::

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/4.jpg" /></center>

- **Paso 11.** Descarga el archivo ingresando en el siguiente formato

```sh
wget <copied_link>
```

Por ejemplo:

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_armv7.deb
```

- **Paso 12.** Instalar el Agente del SO de Home Assistant

```sh
sudo dpkg -i os-agent_<version_number>_linux_armv7.deb
```

Por ejemplo:

```sh
sudo dpkg -i os-agent_1.3.0_linux_armv7.deb
```

- **Paso 13.** Descargar el script de instalación de Home Assistant-Supervised

:::note
De manera similar, la versión estable y probada que funciona hasta ahora para Home Assistant-Supervised en reTerminal (CM4) también es la V1.3.0.
:::

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

- **Paso 14.** Instalar Home Assistant-Supervised

```sh
sudo dpkg -i homeassistant-supervised.deb
```

- **Paso 15.** Si hay algún error en la instalación, ejecute el siguiente comando para reparar las instalaciones dañadas

```sh
sudo apt --fix-broken install
```

- **Paso 16.** En la ventana **Package configuration**, selecciona **raspberrypi4** y presiona **ENTER**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/6.png" /></center>

La salida será la siguiente

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/7.png" /></center>

:::note

Si encuentras problemas de conectividad Wi-Fi después de reiniciar, sigue estos pasos

:::

- Para habilitar 'dhcpcd', ejecuta el siguiente comando:

```sh
sudo systemctl enable dhcpcd
```

- Deshabilita el servicio de red con el comando:

```sh
sudo systemctl disable networking
```

- Reinicia la Raspberry Pi para aplicar los cambios:

```sh
sudo reboot
```

:::note

Para resolver los "problemas de Network Manager" (que se encuentran en la configuración), puedes rectificar la situación iniciando y posteriormente habilitando el Network Manager. Utiliza el siguiente comando para lograrlo:

:::

```sh
sudo systemctl enable NetworkManager
```

## Ver la interfaz del panel de Home Assistant en el navegador web

- **Paso 1.** En un navegador web, escribe la siguiente URL

```sh
homeassistant.local:8123
```

Tomará algún tiempo completar el proceso de inicio inicial

- **Paso 2.** Una vez que termine de iniciarse, crea una cuenta y sigue las instrucciones de configuración inicial

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></center>

Después de eso verás tu panel de bienvenida como se muestra a continuación

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></center>

## Ver la interfaz del panel de Home Assistant en modo Kiosk en reTerminal

Para poder ver la interfaz del panel de Home Assistant en la pantalla LCD de reTerminal, usaremos el navegador web Chromium que ya viene con Raspberry Pi OS. Configuraremos Chromium para que se inicie automáticamente en modo pantalla completa después de que reTerminal arranque.

- **Paso 1.** Navega al siguiente directorio

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **Paso 2.** Abrir el archivo **autostart** con el **editor de texto nano**

```sh
sudo nano autostart
```

- **Paso 3.** Añade la siguiente línea al final del archivo

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **Paso 4.** Reinicia reTerminal

```sh
sudo reboot 
```

Ahora cuando reTerminal se inicie, ¡la interfaz de usuario del panel de Home Assistant se abrirá en ventana de pantalla completa!

## Bonus

Después de integrar luces inteligentes, sensores de temperatura, humedad, CCTV y más, un panel completo de Smart Home en Home Assistant se verá como se muestra a continuación

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></center>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>
<br />

</TabItem>

<TabItem value="Method 2" label="Bookworm">

:::note
Durante el proceso de instalación de HA, probamos utilizando la conectividad inalámbrica.
:::

## Instalación Supervisada de Home Assistant - Bookworm

#### Paso 1: Actualizar e Instalar Dependencias

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### Paso 2: Iniciar y Habilitar Network Manager

Verificar el estado de Network Manager

```bash
sudo systemctl status NetworkManager.service
```

NetworkManager no se inicia, iniciar y habilitar

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### Paso 3: Modificar los Parámetros de Arranque

Edita el archivo `cmdline.txt`:

```bash
sudo nano /boot/firmware/cmdline.txt
```

Agrega lo siguiente al final de la línea:

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

Reinicia el sistema:

```bash
sudo reboot
```

#### Paso 4: Instalar Docker

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### Paso 5: Instalar OS Agent

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### Paso 6: Instalar Home Assistant Supervised

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

Tras una corrección exitosa, aparecerá una pantalla azul que te permitirá seleccionar el modelo **Raspberry Pi4 64**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

Después de unos minutos, comenzará la instalación.

Luego puedes ver la interfaz del Dashboard de Home Assistant en un navegador web usando `<tu_ip_del_reTerminal>:8123`.

Tomará algo de tiempo completar el proceso de inicio inicial. Una vez que haya terminado de iniciarse, crea una cuenta y sigue las instrucciones de configuración inicial

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
Si aparecen advertencias en las notificaciones, por favor reinicia el reTerminal.
:::

</TabItem>

</Tabs>

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
