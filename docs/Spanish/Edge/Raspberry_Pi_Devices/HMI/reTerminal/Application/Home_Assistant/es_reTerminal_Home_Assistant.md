---
description: Cómo instalar Home Assistant en reTerminal
title: Comenzando con Home Assistant
image: https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4
slug: /es/reTerminal_Home_Assistant_spanish
last_update:
  date: 02/17/2025
  author: Erick González
---


# Comenzando con Home Assistant en reTerminal

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/94.jpg" /></center>

## Introducción

Este wiki te guiará paso a paso sobre cómo puedes convertir tu casa ordinaria en una casa inteligente solo utilizando un reTerminal. Al final de este wiki, podrás ver un hermoso panel de control en la pantalla LCD del reTerminal y controlar tus electrodomésticos y ver otra información, como datos de sensores, directamente al alcance de tu mano. ¡Así que, empecemos!

## ¿Qué es Home Assistant?

[Home Assistant](https://www.home-assistant.io) es un software gratuito y de código abierto para la automatización del hogar, diseñado para ser un sistema de control central para dispositivos inteligentes del hogar, lo que se conoce como un hub de hogar inteligente. Ofrece automatización del hogar sin necesidad de la nube, lo que significa que tu sistema de automatización del hogar no depende de servidores remotos ni de una conexión a Internet. Este control local garantiza una mejor seguridad que los dispositivos conectados a la nube. Además, ofrece mayor fiabilidad para mantener el sistema en funcionamiento 24/7.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></center>

Es flexible y muy fácil de comenzar, incluso para principiantes, gracias a la excelente documentación que ofrece Home Assistant. También existe una comunidad activa en el [Foro de Home Assistant](https://community.home-assistant.io) con muchos miembros dispuestos a ayudarte si encuentras problemas al construir y ejecutar Home Assistant. 
Una vez configurado Home Assistant, puedes acceder a través de una interfaz de usuario basada en la web, utilizando aplicaciones complementarias para Android e iOS, o mediante comandos de voz a través de un asistente virtual compatible como Google Assistant o Amazon Alexa.
Si deseas probar una demostración rápidamente en tu navegador web, por favor [haz clic aquí](https://demo.home-assistant.io).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></center>

## Métodos de instalación diferentes

Home Assistant es compatible con diferentes hardware como Raspberry Pi, ODROID, ASUS Tinkerboard, Intel NUC, PCs con Windows/Linux/Mac. Y con esto, vienen diferentes métodos de instalación en diferentes hardware. Para aprender más sobre todos estos métodos de instalación, por favor visita [esta página](https://www.home-assistant.io/installation).
Como puedes ver a continuación, hay 4 métodos principales de instalación y no todos los métodos de instalación son compatibles con todas las funciones de Home Assistant.

<center><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></center>

## Método de instalación para reTerminal

Según Home Assistant, los dos métodos recomendados para la instalación de Home Assistant son **Método de OS y Contenedor**. Sin embargo, no utilizaremos estos dos métodos para instalarlo en reTerminal. ¿Por qué es esto?

### ¿Por qué no el sistema operativo Home Assistant?

Si instalamos el sistema operativo Home Assistant en reTerminal, no podremos ver la interfaz del panel de control de Home Assistant en la pantalla LCD de reTerminal. Esto se debe a que el sistema operativo Home Assistant solo mostrará una interfaz de línea de comandos (CLI) en cualquier pantalla conectada, como se muestra a continuación.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/5.png" /></center>

Por lo tanto, la interfaz del panel de control solo puede accederse a través de **homeassistant.local:8123** en otro dispositivo. Sin embargo, si prefieres instalarlo de esta manera y no deseas ver el panel en la pantalla LCD de reTerminal, puedes seguir [esta guía](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system). Sigue los mismos métodos de instalación que en un Raspberry Pi, ya que reTerminal está basado en el Raspberry Pi Compute Module 4.

### ¿Por qué no el contenedor de Home Assistant?

Si instalamos el contenedor de Home Assistant en reTerminal, perderemos varias funciones de Home Assistant. Así que omitiremos esta instalación. Sin embargo, si deseas explorar este método de instalación, puedes seguir [esta guía](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container). Sigue los mismos métodos de instalación que en un Raspberry Pi, ya que reTerminal está basado en el Raspberry Pi Compute Module 4.

### ¿Por qué Home Assistant Supervised?

Si instalamos Home Assistant Supervised en reTerminal, podremos utilizar todas las funciones de Home Assistant y además podremos ver la interfaz del panel de control en la pantalla LCD de reTerminal. ¡Pero la instalación de este método implicará más pasos en comparación con los métodos OS y Contenedor! Sin embargo, si sigues cuidadosamente este wiki, ¡podrás lograrlo con éxito!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Método 1" label="Bullseye">

## Vamos a construirlo

:::note
En algunos pasos, si estás conectado a través de Wi-Fi, puedes perder la conexión. Se recomienda utilizar una conexión LAN en su lugar.

:::

Ahora, sigamos el proceso para instalar Home Assistant Supervised en reTerminal.

- **Paso 1.** Prepara un reTerminal con Raspberry Pi OS ya instalado. reTerminal viene con RPi OS de 32 bits preinstalado. Sin embargo, si deseas instalarlo nuevamente, por favor sigue [este wiki](https://wiki.seeedstudio.com/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

**Nota:** Asegúrate de usar la versión de 32 bits porque la interfaz del panel de control de Home Assistant en la pantalla LCD de reTerminal será mucho más fluida en la versión de 32 bits.

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

- **Paso 4.** Arreglar instalaciones rotas

```sh
sudo apt --fix-broken install
```

- **Paso 5.** Reinicia el reTerminal

```sh
sudo reboot
```

- **Paso 6.** Descargar el script oficial de Docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
```

- **Paso 7.** Ejecutar el script de Docker

```sh
sudo sh get-docker.sh
```

- **Paso 8.** Añadir el usuario de Docker al sistema

```sh
sudo usermod -aG docker pi
```

- **Paso 9.** Verificar si Docker está funcionando correctamente

```sh
docker --version
```

Si ves una salida como la siguiente, significa que Docker está instalado correctamente

```sh
Docker version 20.10.18, build b40c2f6
```

:::note

La compatibilidad del Supervisor de Home Assistant depende de un CGroup v1 específico de Docker. Para asegurar esta compatibilidad, se deben realizar los siguientes cambios:

:::
- **Abrir este archivo usando un editor**

```sh
sudo nano /etc/default/grub
```

- **Añadir esta línea y guardarla.**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **Abrir este archivo**
```sh
sudo nano /boot/cmdline.txt
```

- **Añadir esta línea al final de la frase y guardarla.**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

- **Paso 10.** Visitar [página de Home Assistant OS Agent](https://github.com/home-assistant/os-agent/releases), bajo la última versión, haz clic derecho en el archivo que termina en ***linux_armv7.deb** y copia el enlace

:::note
La versión estable y probada hasta ahora para Home Assistant Agent en reTerminal(CM4) es V1.3.0.
:::

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/4.jpg" /></center>

- **Paso 11.** Descargar el archivo ingresando en el siguiente formato

```sh
wget <copied_link>
```

Por ejemplo:

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_armv7.deb
```

- **Paso 12.** Instalar el agente de Home Assistant

```sh
sudo dpkg -i os-agent_<version_number>_linux_armv7.deb
```

Por ejemplo:

```sh
sudo dpkg -i os-agent_1.3.0_linux_armv7.deb
```

- **Paso 13.** Descargar el script de instalación de Home Assistant-Supervised

:::note
De manera similar, la versión estable y probada para Home Assistant-Supervised en reTerminal(CM4) es también V1.3.0.
:::

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

- **Paso 14.** Instalar Home Assistant-Supervised

```sh
sudo dpkg -i homeassistant-supervised.deb
```

- **Paso 15.** Si hay errores en la instalación, por favor ejecuta el siguiente comando para corregir instalaciones rotas

```sh
sudo apt --fix-broken install
```

- **Paso 16.** En la ventana de **Configuración del paquete**, selecciona **raspberrypi4** y presiona **ENTER**

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

- Reinicia el Raspberry Pi para aplicar los cambios:
```sh
sudo reboot
```

:::note

Para resolver los "problemas del Administrador de Red," (encuéntralo en la configuración) puedes solucionar el problema iniciando y luego habilitando el Administrador de Red. Utiliza el siguiente comando para hacerlo:

:::
```sh
sudo systemctl enable NetworkManager
```

## Ver la interfaz del panel de control de Home Assistant en el navegador web

- **Paso 1.** En un navegador web, escribe la siguiente URL

```sh
homeassistant.local:8123
```

Tomará algo de tiempo completar el proceso de inicio.

- **Paso 2.** Una vez completado el inicio, crea una cuenta y sigue las instrucciones de configuración inicial

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></center>

Después de eso, verás tu panel de bienvenida de la siguiente manera

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></center>

## Ver la interfaz del panel de control de Home Assistant en modo Kiosk en reTerminal

Para poder ver la interfaz del panel de control de Home Assistant en la pantalla LCD de reTerminal, utilizaremos el navegador web Chromium, que ya viene con Raspberry Pi OS. Configuraremos Chromium para que se inicie automáticamente en modo de pantalla completa después de que reTerminal se inicie.

- **Paso 1.** Navega al siguiente directorio

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **Paso 2.** Abre el archivo **autostart** con el **editor de texto nano**

```sh
sudo nano autostart
```

- **Paso 3.** Añade la siguiente línea al final del archivo

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **Paso 4.** Reinicia el reTerminal

```sh
sudo reboot 
```

Ahora, cuando reTerminal se inicie, ¡la interfaz del panel de control de Home Assistant se abrirá en ventana completa!

## Extra

Después de integrar luces inteligentes, sensores de temperatura, humedad, CCTV y más, el panel completo de Smart Home en Home Assistant se verá de la siguiente manera:

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></center>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>
<br />

</TabItem>

<TabItem value="Método 2" label="Bookworm">

:::note
Durante el proceso de instalación de HA, probamos utilizando conectividad inalámbrica.
:::

## Instalación de Home Assistant Supervised - Bookworm

#### Paso 1: Actualizar e instalar dependencias

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### Paso 2: Iniciar y habilitar Network Manager

Verifica el estado del Network Manager

```bash
sudo systemctl status NetworkManager.service
```

Si NetworkManager no está iniciado, inícialo y habilítalo

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### Paso 3: Modificar parámetros de inicio

Edita el archivo `cmdline.txt`:
```bash
sudo nano /boot/firmware/cmdline.txt
```

Añade lo siguiente al final de la línea:

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

Después de corregir cualquier error, aparecerá una pantalla azul donde podrás seleccionar el modelo **Raspberry Pi4 64**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

Después de unos minutos, comenzará la instalación.

Luego podrás ver la interfaz de Home Assistant Dashboard en un navegador web usando `<tu_reTerminal_ip>:8123`.

Tomará algo de tiempo completar el proceso de inicio. Una vez que haya terminado de iniciarse, crea una cuenta y sigue las instrucciones de configuración inicial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
Si hay advertencias en las notificaciones, por favor reinicia el reTerminal.
:::


</TabItem>

</Tabs>

## Soporte Técnico
Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
