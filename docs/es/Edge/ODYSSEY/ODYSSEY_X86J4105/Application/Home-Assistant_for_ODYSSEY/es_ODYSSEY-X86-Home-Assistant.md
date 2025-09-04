---
description: Primeros pasos con Home Assistant en ODYSSEY-X86
title: Primeros pasos con Home Assistant
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86-Home-Assistant
last_update:
  date: 03/16/2023
  author: Lakshantha

---
# Primeros pasos con Home Assistant en ODYSSEY-X86

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/thumb.png" /></div>

## Introducción

¡Esta wiki te guiará paso a paso sobre cómo puedes convertir tu casa ordinaria en una inteligente simplemente usando un [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)! Al final de esta wiki, podrás ver un hermoso panel de control en tu PC, tablet, smartphone, reTerminal y podrás controlar tus electrodomésticos y ver otra información como datos de sensores al alcance de tus dedos. ¡Así que comencemos!

## ¿Qué es Home Assistant?

[Home Assistant](https://www.home-assistant.io) es un software gratuito y de código abierto para automatización del hogar diseñado para ser un sistema de control central para dispositivos domésticos inteligentes, que puede ser referido como un hub de hogar inteligente. Te ofrece automatización del hogar sin necesidad de la nube, lo que significa que tu sistema de automatización del hogar no depende de servidores remotos o una conexión a internet. Este control local significa que puedes tener mucha mejor seguridad que los dispositivos conectados a la nube. Además, ofrece mayor confiabilidad cuando se trata de mantenerlo funcionando 24x7.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></div>

Es flexible de usar y muy fácil de comenzar incluso para principiantes con la excelente documentación ofrecida por Home Assistant. Además, hay una comunidad activa en el [Foro de Home Assistant](https://community.home-assistant.io) con muchos miembros que estarán ahí para ayudarte si encuentras algún problema al construir y ejecutar Home Assistant.

Después de configurar Home Assistant, se puede acceder a través de una interfaz de usuario basada en web usando aplicaciones complementarias para Android e iOS, o por comandos de voz a través de un asistente virtual compatible como Google Assistant o Amazon Alexa.

Si quieres experimentar rápidamente una demostración en tu navegador web, por favor [haz clic aquí](https://demo.home-assistant.io).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></div>

## Diferentes métodos de instalación

Home Assistant es compatible para ejecutarse en diferentes hardware como una Raspberry Pi, ODROID, ASUS Tinkerboard, Intel NUC, PCs con Windows/Linux/Mac. Y con esto, vienen diferentes métodos de instalación en diferentes hardware. Para aprender más sobre todos estos métodos de instalación por favor visita [esta página](https://www.home-assistant.io/installation).

Como puedes ver a continuación, hay 4 tipos principales de métodos de instalación y no todas las características de Home Assistant son compatibles con todos los métodos de instalación.

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></div>

## Método de Instalación para ODYSSEY - X86

Según Home Assistant, los dos métodos recomendados de instalación de Home Assistant son **método OS y Container**. Aquí usaremos el **método OS** porque dará acceso a todas las características de Home Assistant.

### ¿Por qué no Home Assistant Container?

Si instalamos Home Assistant Container en ODYSSEY-X86, nos perderemos varias características de Home Assistant. Así que omitiremos esa instalación. Sin embargo, si quieres explorar este método de instalación, puedes seguir [esta guía](https://www.home-assistant.io/installation/generic-x86-64#install-home-assistant-container).

## ¡Construyámoslo

Ahora vamos a repasar el proceso de instalación de Home Assistant OS en ODYSSEY-X86.

Hay diferentes formas de instalar Home Assistant OS en ODYSSEY-X86. La forma más simple sería flashear directamente la imagen de Home Assistant OS a una unidad flash USB, conectar la unidad USB a ODYSSEY-X86 y ejecutar Home Assistant desde ella.

La otra forma sería instalar Home Assistant OS en un dispositivo de almacenamiento diferente como un HDD externo, SSD, M.2 SSD y el eMMC integrado (para la versión ODYSSEY-X86 eMMC). Este método puede garantizar que tengas un dispositivo de almacenamiento confiable en comparación con una unidad USB.

¡Explicaremos cómo instalar Home Assistant OS en ambos métodos!

### Ejecutar Home Assistant desde una unidad flash USB

- **Paso 1.** Conecta una unidad flash USB a tu PC

**Nota:** Se recomienda usar una unidad flash con al menos 16GB de capacidad de almacenamiento

- **Paso 2.** Descarga e instala [Balena Etcher](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 3.** Abre Balena Etcher y selecciona **Flash from URL**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/20.png" /></div>

- **Paso 4.** Copia y pega la siguiente URL dentro de la caja vacía y haz clic en **OK**

```sh
https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz
```

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/21.png" /></div>

- **Paso 5.** Una vez que la imagen se haya descargado, haz clic en **Select target** y selecciona la unidad flash USB conectada

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/23.png" /></div>

- **Paso 6.** Haz clic en **Flash** para comenzar a escribir la imagen en la unidad flash USB

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/24.png" /></div>

Si el proceso de grabación es exitoso, verás la siguiente salida

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/25.png" /></div>

- **Paso 7.** Conecta esta unidad flash USB a uno de los puertos USB del ODYSSEY-X86 y enciende la placa

- **Paso 8.** Mantén presionada la tecla **DELETE** para ingresar al BIOS

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png" /></div>

- **Paso 9.** Ve a la pestaña **Boot**, selecciona **Boot Option #1** y selecciona **UEFI: OS (USB)** y haz clic en **Yes** para la ventana emergente

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/27.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg" /></div>

Ahora ODYSSEY-X86 se reiniciará y usará la unidad USB conectada como dispositivo de arranque. Después del arranque exitoso en el SO de Home Assistant, verás la siguiente salida

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png" /></div>

### Ejecutar Home Assistant desde HDD/SSD externo, M.2 SSD, eMMC

En este método, primero crearemos una unidad USB de arranque con Ubuntu Desktop y luego arrancaremos ODYSSEY-X86 desde ella. Después de eso, grabaremos el SO de Home Assistant en una unidad (HDD/SSD externo, M.2 SSD, eMMC integrado) mientras estemos dentro del sistema Ubuntu y ejecutaremos Home Assistant desde esa unidad.

- **Paso 1.** Descarga la imagen más reciente de Ubuntu Desktop desde [aquí](https://ubuntu.com/download/desktop)

- **Paso 2.** Conecta una unidad flash USB a tu PC

**Nota:** Se recomienda usar una unidad flash con al menos 8GB de capacidad de almacenamiento

- **Paso 3.** Descarga e instala [Balena Etcher](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 4.** Abre Balena Etcher, selecciona **Flash from file**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/2.png" /></div>

- **Paso 5.** Haz clic en el **archivo .iso** descargado y haz clic en **Open**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/3.png" /></div>

- **Paso 6.** Haz clic en **Select target**, selecciona la unidad flash USB conectada y haz clic en **Select**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/4.png" /></div>

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/5.png" /></div>

- **Paso 7.** Haz clic en **Flash** para grabar Ubuntu server en la unidad flash USB

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/6.png" /></div>

Si el proceso de grabación es exitoso, verás la siguiente salida

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/1.png" /></div>

- **Paso 8.** Conecta esta unidad flash USB a uno de los puertos USB del ODYSSEY-X86, conecta una unidad de almacenamiento (HDD/SSD externo, M.2 SSD) y enciende la placa

**Nota:** Asegúrate de que un teclado, ratón y una pantalla estén conectados al ODYSSEY-X86

- **Paso 9.** Mantén presionada la tecla **DELETE** para ingresar al BIOS

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png" /></div>

- **Paso 10.** Ve a la pestaña **Boot**, selecciona **Boot Option #1** y selecciona **UEFI: USB, Partition 2**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/8.jpg" /></div>

- **Paso 11.** Ve a la pestaña **Save & Exit**, haz clic en **Save Changes and Reset** y haz clic en **Yes** para la ventana emergente

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/9.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg" /></div>

Ahora ODYSSEY-X86 se reiniciará y usará la unidad USB conectada como dispositivo de arranque.

- **Paso 12.** Selecciona **Try or Install Ubuntu**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/11.jpg" /></div>

- **Paso 13.** Haz clic en **Try Ubuntu**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/12.jpg" /></div>

Después de unos segundos, arrancará en Ubuntu Desktop

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/13.png" /></div>

- **Paso 14.** Abre una ventana de terminal presionando **Ctrl+Alt+T**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/14.png" /></div>

- **Paso 15.** Escribe el siguiente comando para descargar la imagen del SO de Home Assistant

```sh
wget https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz
```

- **Paso 16.** Extrae el archivo usando el siguiente comando

```sh
unxz haos_generic-x86-64-9.0.img.xz
```

Esto extraerá el archivo **.img.xz** anterior en **.img**

- **Paso 17.** Escribe **lsblk** para listar las unidades de almacenamiento conectadas. Aquí hemos conectado una unidad HDD a través del puerto SATA.

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/15.png" /></div>

Como puedes ver, la unidad que ya está ejecutando Ubuntu OS (unidad flash USB) es **sdb** con varias particiones y puntos de montaje. También podemos identificar esta unidad por el **TAMAÑO**. Esto significa que la unidad **sda** es la unidad HDD conectada.

- **Paso 18.** Ingresa el comando a continuación para flashear la imagen del SO de Home Assistant a la unidad HDD conectada. En este caso, la unidad **sda**

```sh
sudo dd if=haos_generic-x86-64-9.0.img of=/dev/sda status=progress
```

Espera unos minutos hasta que el proceso se complete

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/16.png" /></div>

- **Paso 19.** Escribe lo siguiente para reiniciar ODYSSEY-X86

```sh
sudo reboot
```

- **Paso 20.** Retire la unidad flash USB y presione **ENTER** cuando vea la siguiente solicitud

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/17.png" /></div>

- **Paso 21.** Ingrese al BIOS como se explicó anteriormente y cambie la unidad de arranque a la unidad conectada

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/18.png" /></div>

Ahora ODYSSEY-X86 se reiniciará y usará la unidad conectada como dispositivo de arranque. Después de arrancar exitosamente en el SO de Home Assistant, verá la siguiente salida

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png" /></div>

## Ver la interfaz del panel de Home Assistant en el navegador web

- **Paso 1.** Abra un navegador web en una PC, tableta, smartphone y escriba la siguiente URL

```sh
homeassistant.local:8123
```

Tomará algún tiempo completar el proceso de inicio inicial

- **Paso 2.** Una vez que termine de iniciarse, crea una cuenta y sigue las instrucciones de configuración inicial

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></div>

Después de eso verás tu panel de bienvenida como se muestra a continuación

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></div>

## Ver la interfaz del panel de Home Assistant en modo Kiosk en reTerminal

Para poder ver la interfaz del panel de Home Assistant en la pantalla LCD de [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html), usaremos el navegador web Chromium que ya viene con Raspberry Pi OS. Configuraremos Chromium para que se inicie automáticamente en modo pantalla completa después de que reTerminal arranque.

- **Paso 1.** Enciende reTerminal y asegúrate de que Raspberry Pi OS ya esté instalado. Si no, puedes seguir [esta wiki](https://wiki.seeedstudio.com/es/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

- **Paso 2.** Navega al siguiente directorio

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **Paso 3.** Abrir el archivo **autostart** con el **editor de texto nano**

```sh
sudo nano autostart
```

- **Paso 4.** Añade la siguiente línea al final del archivo

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **Paso 5.** Reinicia reTerminal

```sh
sudo reboot 
```

Ahora cuando reTerminal se inicie, ¡la interfaz del panel de Home Assistant se abrirá en ventana de pantalla completa!

## Bonus

Después de integrar luces inteligentes, sensores de temperatura, humedad, CCTV y más, un panel completo de Smart Home en Home Assistant se verá como se muestra a continuación

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></div>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
