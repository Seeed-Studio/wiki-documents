---
description: ODYSSEY - X86J41x5
title: Instalación de pfSense

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-pfSense
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Installing-pfSense/
sku: 102110399
--- -->

Este tutorial demuestra cómo instalar **[pfSense](https://www.pfsense.org/)** en el [ODYSSEY-X86J41x5](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html).

**[pfSense](https://www.pfsense.org/)** es una distribución de software de computadora de firewall/router de código abierto basada en [FreeBSD](https://www.freebsd.org/). Se instala en una computadora física o una máquina virtual para crear un firewall/router dedicado para una red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-04-n.png" /></div>

Para más información, también puedes visitar los [documentos oficiales de pfSense](https://docs.netgate.com/pfsense/en/latest/) para obtener más conocimientos.

## Requisitos de Hardware

- Una Computadora Funcional

- Unidad USB x 2 (se recomienda menos de 8GB)

- Un Monitor

- Teclado

- Internet y Cable Ethernet

## Descargar la Imagen del SO pfSense

Primero, descarga la [Imagen del SO pfSense](https://www.pfsense.org/download/) en tu unidad.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/Download.png" /></div>

Para ODYSSEY-X86J41x5, elige la configuración como se muestra arriba y haz clic en descargar.

## Crear un USB de Arranque

### Paso 1 - Preparar tu USB de Arranque

Formatea una de las unidades USB. Si eres usuario de Windows, puedes formatear la unidad USB haciendo clic derecho en la Unidad USB y seleccionar `Formatear`.

**Nota:** Elige `FAT32` para el Sistema de Archivos.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Paso 2 - Descargar Grabador Flash

Descarga el grabador Flash de código abierto [balenaEtcher](https://www.balena.io/etcher/). Descarga la versión según tu sistema operativo (Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Paso 3 - Escribir la Imagen del SO en USB

Selecciona la Imagen del Sistema Operativo descargada, selecciona la Unidad USB formateada y ¡Graba! Ahora, el USB de arranque está listo para usar.

<div>
  <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div><br />
</div>

**Nota:** Si aparece una advertencia que indica que no contiene una tabla de particiones, simplemente puedes hacer clic en **continuar** para ignorar el mensaje.

## Instalar el SO pfSense

### Paso 1 - Habilitar el Modo CSM en ODYSSEY - X86J41x5

Conecta tu USB de arranque, Monitor y teclado al ODYSSEY - X86J41x5, y enciéndelo. Al arrancar, mantén presionada la tecla **`DEL`** para entrar a la pantalla de configuración. Navega a **`Advanced`** -> **`CSM Support`** y presiona Enter para habilitarlo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Paso 2 - Instalar el SO

Reinicia tu ODYSSEY - X86J41x5 y mantén presionada **`F7`** para entrar a la pantalla del administrador de arranque. Selecciona el USB de arranque (Instalador) y presiona Enter.

**Nota:** Recuerda elegir el que tiene la imagen iso de pfSense.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Paso 3 - Proceso de instalación

Debería aparecer una pantalla de arranque como la anterior. Presiona `Enter` para seleccionar Boot Multi User (Instalador pfSense).

<div>
  <div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSenseBIOS.png" /></div><br />
</div>

Entra al Instalador, y presiona `Enter` para **aceptar**.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-1.png" /></div>

Debería aparecer un menú de opciones como el siguiente, selecciona **Install** y presiona `Enter`.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-2.png" /></div>

Ahora, elige el mapa de teclas correcto para tu teclado, o simplemente selecciona **Continue with default keymap** y presiona `Enter`.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-3.png" /></div>

Aquí puedes elegir Auto para instalar automáticamente pfSense en el ODYSSEY-X86J41x5, pero es mejor usar **Manual** para elegir exactamente dónde quieres instalar pfSense.

**Nota:** En este tutorial, pfSense se instala en una unidad USB por conveniencia. Por lo tanto, otra buena razón para elegir **Manual** en lugar de Auto.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-4.png" /></div>

Aquí puedes ver todos los discos duros así como las particiones. Elige el disco duro en el que quieres instalar pfSense. Selecciona el disco duro usando las teclas de flecha. Aquí, `da1` es mi segunda unidad USB y se usará para instalar pfSense. Selecciona **Auto** aquí para particionar automáticamente para pfSense en este disco duro.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-5.png" /></div>

Bajo el disco duro correcto, selecciona **OK**.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-6.png" /></div>

Ahora, el proceso de instalación tendrá lugar.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-7.png" /></div>

Después de la instalación, aparecerá la siguiente ventana, selecciona **No**.

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-8.png" /></div>

Selecciona **Reboot** y ¡pfSense se instala exitosamente!

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-9.png" /></div>

## Configuraciones de pfSense

Reinicia ODYSSEY-X86J41x5, y elige el disco duro correcto para arrancar el SO pfSense. Conecta el cable ethernet en uno de los puertos Ethernet del ODYSSEY-X86J41x5. El pfSense debería arrancar correctamente y mostrar la siguiente pantalla.

**Nota:** Si ves que LAN ya está configurado, puedes elegir **`1`** para asignar interfaces y elegir el puerto correcto para **WAN** y deshacerte de **LAN**. Por ejemplo, en la imagen de abajo, LAN se elimina por ahora.

Junto con la **WAN**, deberías ver una IP asignada al dispositivo, y esta IP se usará más tarde. ¡Ahora puedes intentar iniciar sesión en la GUI Web usando otra PC conectada en la misma red!

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-1.png" /></div>

### Cambiar el protocolo WebGUI de pfSense (opcional)

Por algunas razones, pfSense usa el protocolo https para la GUI Web y puede causar fallas al iniciar sesión en la GUI Web. Si fallas al iniciar sesión en la GUI Web, sigue esto para cambiar el protocolo `https` al protocolo `http`.

Elige **`8`** para entrar al shell en pfSense. Escribe lo siguiente para configurar:

```sh
viconfig
```

Aparecerá un archivo de configuración como se muestra y busca la sección `<webgui>` y cambia el protocolo `https` a `http`.

**Nota:** esto está usando el editor vim, usa la tecla **x** del teclado para eliminar. Luego, presiona **Esc** y escribe `:wq!` para guardar y salir y aplicar los cambios.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-2.png" /></div>

Ahora, intenta iniciar sesión en la interfaz web de pfSense usando la dirección IP nuevamente.

## Configuraciones de la interfaz web de pfSense

Ahora puedes iniciar sesión en la interfaz web de pfSense desde otra PC usando la dirección IP mostrada anteriormente.

**Nota:** el usuario predeterminado es **`admin`** y la contraseña predeterminada es **`pfsense`**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/WebGUI.png" /></div>

¡Ahora puedes administrar fácilmente tu pfSense ejecutándose en ODYSSEY-X86J41x5!

### Instalación de paquetes

Para instalar paquetes, simplemente puedes navegar a **System** -> **Package manager** y buscar los paquetes que te gusten.

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/packages.png" /></div><br />
</div>

*Para más información sobre pfSense, ¡también visita el [Foro oficial de pfSense](https://forum.netgate.com/)!*

## Recursos

Otras aplicaciones útiles:

- [Comenzando con pfSense](https://www.pfsense.org/getting-started/)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
