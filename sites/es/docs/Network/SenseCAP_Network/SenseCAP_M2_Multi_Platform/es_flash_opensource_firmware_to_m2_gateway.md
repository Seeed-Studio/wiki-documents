---
description: Esta wiki te guiará sobre cómo flashear firmware LoRaWAN® de código abierto para tu gateway M2. Basado en el firmware LoRaWAN® de código abierto, puedes personalizar profundamente tu gateway M2.
title: Flashear Firmware de Código Abierto al Gateway M2
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /flash_opensource_firmware_to_m2_gateway
last_update:
  date: 4/22/2025
  author: Leo
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/flash_opensource_firmware_to_m2_gateway/
---

Los gateways SenseCAP M2 representan una solución rentable para gateways LoRa, impulsados por la solución de hardware madura MT7628 y el chip de banda base de largo alcance Semtech SX1302. Los modelos específicos se distinguen por la banda de frecuencia configurada en fábrica (EU868/US915/AS923/AU915), módulo opcional (4G/GPS) y red LoRa compatible (LoRaWAN®/red Helium)

Esta wiki te guiará sobre cómo flashear firmware de código abierto para tu gateway M2. Basado en el firmware de código abierto, puedes personalizar profundamente tu gateway M2, como agregar características adicionales o cambiar la banda de operación (las antenas necesitan adaptarse a la banda)

:::danger Advertencia
Después de flashear el firmware de código abierto, **NO PUEDES** revertir al **firmware de fábrica**.

Seeed studio **NO es responsable** por cualquier daño al dispositivo causado por el usuario **usando firmware de código abierto o firmware de terceros**.
:::

## Lista de Productos Compatibles

- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><span> <b>Gateway Interior LoRaWAN Multi-Plataforma M2 (SX1302)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-4G-EU868-p-5599.html" target="_blank"><span> <b>Gateway Interior LoRaWAN Multi-Plataforma M2 (SX1302-4G)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><span> <b>Gateway Interior LoRaWAN Solo Datos M2 (SX1302)</b></span></a>

:::note
Debido a variaciones en el hardware, flashear el gateway M2 para Helium (modelos: `114992751`, `114992752`, `114992755`, `114992808`, `114992826`, `114992828`) con firmware de código abierto requiere no solo la imagen del firmware sino también el cargador U-Boot correspondiente. Para instrucciones detalladas, consulta la sección **Flashear el U-Boot**.
:::

## Preparar el firmware

### Descargar el firmware pre-compilado

Si quieres experimentar el firmware de código abierto a tu conveniencia, proporcionamos algunos firmwares compilados. Puedes descargar desde <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT/releases" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT/Release</span></a>

:::tip Nota
Verifica el sufijo del archivo .bin para confirmar que el firmware es compatible con tu gateway M2

Por ejemplo, el firmware **openwrt-...-EU868-4G.bin** está compilado para gateways M2 que operan en la **banda EU868 con un módulo 4G**
:::

### Construir tu firmware

Si tu gateway no es compatible con nuestro firmware pre-compilado o si quieres desarrollarlo más, puedes construir tu propio firmware como sigue

Para construir tu propio firmware necesitas un **sistema GNU/Linux, BSD o MacOSX** (se requiere sistema de archivos sensible a mayúsculas). Cygwin no es compatible debido a la falta de un sistema de archivos sensible a mayúsculas

**Paso 1:** clona el código fuente desde <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT</span></a>

```git
git clone https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT.git
```

**Paso 2:** Instala los paquetes prerequisitos consulta <a  href="https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem" target="_blank"><span> Configuración del sistema de construcción</span></a>

:::caution Nota
Por favor realiza los siguientes pasos con un usuario **no-root**.
:::

**Paso 3:** Ve a la carpeta del código fuente, ejecuta `./scripts/feeds update -a` para obtener todas las definiciones de paquetes más recientes definidas en feeds.conf / feeds.conf.default

**Paso 4:** Ejecuta `./scripts/feeds install -a` para instalar enlaces simbólicos para todos los paquetes obtenidos en package/feeds/

**Paso 5:** Ejecuta `cp diffconfig-sensecap-general .config` para usar el archivo diff de SenseCAP, y ejecuta `make defconfig` para expandir la configuración completa

**Paso 6:** Ejecuta `make menuconfig` para seleccionar la información de hardware de tu SenseCAP

- SenseCAP Hardware->Have 4G (Si contiene hardware 4G)

- SenseCAP Hardware->Have GPS (Si contiene hardware GPS)

- SenseCAP Hardware->REGION (selecciona tu REGIÓN predeterminada)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource2.png" alt="pir" width={800} height="auto" /></p>

**Paso 7:** Ejecuta `make` para construir tu firmware

Esto descargará todas las fuentes, construirá la cadena de herramientas de compilación cruzada y luego compilará de forma cruzada el kernel GNU/Linux y todas las aplicaciones elegidas para tu sistema objetivo

Después de compilar, puedes encontrar el firmware llamado `openwrt-21.02.0-ramips-mt76x8-sensecap_wm7628n-squashfs-sysupgrade.bin` en el directorio `<prj>/bin/targets/ramips/mt76x8/`

## Flashear el firmware

Puedes flashear el firmware en tu gateway de una de tres maneras

### Flashear firmware vía Luci

Inicia sesión en Luci y navega a **System** > **Backup/Flash Firmware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource5.png" alt="pir" width={800} height="auto" /></p>

Desplázate hacia abajo y navega a **Local upgrade** y haz clic en **Flash image...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource6.png" alt="pir" width={800} height="auto" /></p>

Navega por las carpetas y sube el firmware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource7.png" alt="pir" width={800} height="auto" /></p>

Cuando la subida esté completa, confirma que la información del firmware subido es correcta y haz clic en **Continue**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource8.png" alt="pir" width={800} height="auto" /></p>

Después de eso, el gateway comenzará a instalar el firmware y el LED entrará en el estado de parpadeo lento naranja hasta que la instalación esté completa.

### Flashear firmware vía TFTP

Antes de comenzar, necesitarás instalar la herramienta del servidor TFTP en tu computadora y colocar el firmware en el directorio apropiado.

**Paso 1:** Usa un cable Type-C para conectar el dispositivo a la computadora, y usa un cable de red para colocar el dispositivo y la computadora en la misma LAN.

**Paso 2:** Conéctate al dispositivo usando el puerto serie llamado `USB-SERIAL CH340` con **baudrate 57600**.

**Paso 3:** Reinicia el dispositivo. Cuando el dispositivo entre en uboot, **selecciona el comando 2** para entrar en la actualización del sistema.

**Paso 4:** Ingresa **device ip**, donde el segmento de red del device ip debe ser el segmento de red de tu propia red; ingresa **server ip**, que es la IP de tu computadora, e ingresa **el nombre del firmware** a flashear (debe incluirse el sufijo del archivo).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource3.png" alt="pir" width={800} height="auto" /></p>

**Paso 5:** Espera a que la actualización del firmware se complete. El gateway comenzará a instalar el firmware y el LED entrará en el estado de parpadeo lento naranja hasta que la instalación esté completa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource4.png" alt="pir" width={800} height="auto" /></p>

### Flashear firmware vía Serial

:::tip
Antes de comenzar el siguiente paso, recomendamos descargar la versión más reciente de [TeraTerm](https://github.com/TeraTermProject/teraterm/releases) ya que todas las operaciones siguientes en esta wiki están basadas en TeraTerm.
:::

**Paso 1:** Usa un cable Type-C para conectar el dispositivo a la computadora.

**Paso 2:** Conéctate al dispositivo usando el puerto serie llamado `USB-SERIAL CH340` con **baudrate 57600**.

**Paso 3:** Reinicia el dispositivo. Cuando el dispositivo entre en uboot, **selecciona el comando 0** para entrar en la actualización del sistema.

**Paso 4:** Cambia el baudrate a 230400, luego presiona ENTER. El dispositivo entonces mostrará `Ready for binary (kermit) download to 0x80100000 at 230400 bps...`

**Paso 5:** Sube el firmware usando el protocolo kermit. Teraterm ha proporcionado la herramienta de transmisión kermit. puedes consultar la imagen para subir el firmware a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**Paso 6:** Espera a que el firmware termine de subirse, después de lo cual el dispositivo mostrará `Switch baudrate to 57600 bps and press ESC...`. Sigue las indicaciones del dispositivo. Luego el dispositivo instalará automáticamente el firmware y se reiniciará.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource11.png" alt="pir" width={800} height="auto" /></p>

## Flashear el U-Boot

:::note
Al flashear el firmware de código abierto en el Gateway Interior LoRaWAN M2 de Helium, asegúrate de también [Descargar](https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/uboot_v1.1.3-8-general.bin) y Flashear la imagen U-Boot correspondiente al dispositivo. Este paso es requerido para que el gateway funcione correctamente.
:::

### Flashear firmware vía Serial

**Paso 1:** Usa un cable Type-C para conectar el dispositivo a la computadora.

**Paso 2:** Conéctate al dispositivo usando el puerto serie llamado `USB-SERIAL CH340` con **Baudrate 57600**.

**Paso 3:** Reinicia el dispositivo. Cuando el dispositivo entre en U-Boot, selecciona `Command 7` para entrar en la actualización del sistema.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_1.png" alt="pir" width={800} height="auto" /></p>

**Paso 4:** Sube el firmware usando el protocolo kermit. Teraterm ha proporcionado la herramienta de transmisión kermit. Puedes consultar la imagen a continuación para subir el U-Boot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**Paso 5:** Espera a que se complete el flasheo y reinicia el dispositivo. Cuando el dispositivo entre en U-Boot, selecciona `Command 4` para ingresar al comando U-Boot. Luego ingresa `spi erase 0x50000 0x1FB0000` para borrar el bloque siguiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_3.png" alt="pir" width={800} height="auto" /></p>

Luego puedes reiniciar el dispositivo y flashear la imagen del firmware como se indica en la sección **Flash the firmware**.

## Iniciar Sesión en la Consola

Después de que se instale el firmware, el dispositivo abrirá automáticamente un hotspot AP, llamado **SenseCAP_XXXX**

Usa tu teléfono o computadora para conectarte al hotspot, sin contraseña

Ingresa **192.168.168.1** en el navegador para acceder a la interfaz LuCI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource9.png" alt="pir" width={800} height="auto" /></p>

Inicia sesión en la consola con el nombre de usuario **root** y **sin contraseña**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource10.png" alt="pir" width={800} height="auto" /></p>

## Recursos

- \[**Sitio Web**\] <a  href="https://koen.vervloesem.eu/blog/how-to-install-alternative-firmware-to-the-sensecap-m2-data-only-lorawan-indoor-gateway/" target="_blank"><span> Cómo instalar firmware alternativo en el SenseCAP M2 Data Only LoRaWAN Indoor Gateway - Por Koen Vervloesem</span></a>
- \[**Sitio Web**\] <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> GitHub-Seeed-Solution/Lora_Gateway_OpenWRT</span></a>
- \[**Sitio Web**\] <a  href="https://openwrt.org/" target="_blank"><span> Sitio web oficial de OpenWrt</span></a>
- \[**PDF**\] <a  href="https://files.seeedstudio.com/products/SenseCAP/M2OpensourceHarewareDescription.pdf" target="_blank"><span> Descripción del Hardware del Gateway M2</span></a>

## Soporte Técnico

**¿Tienes problemas con el firmware de código abierto? No dudes en discutirlo con los miembros de la comunidad a través del enlace de Discord a continuación.**

<div class="button_tech_support_container">
<a href="https://discord.gg/nFByJZnC5H" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
