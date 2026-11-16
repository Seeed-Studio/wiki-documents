---
description: Usa Tesserae, el servidor de paneles de tinta electrónica autoalojado y de código abierto, con los reTerminal E1001, E1002, E1003, E1004 y reTerminal Sticky. Color completo en Spectra 6, escala de grises de 16 niveles en el E1003, y táctil en el E1003 y Sticky.
title: Trabajar con Tesserae
keywords:
  - pantalla de papel electrónico
  - Tesserae
  - Home Assistant
  - reTerminal
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - reTerminal E1004
  - reTerminal Sticky
image: https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/cover.webp
slug: /reterminal_e10xx_tesserae
sidebar_position: 12
last_update:
  date: 11/13/2026
  author: Kayden D'Mello
createdAt: '2026-11-09'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_tesserae/
updatedAt: '2026-11-13'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con Tesserae

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/cover.jpg" style={{width:700, height:'auto'}}/></div>

Esta guía lleva un dispositivo reTerminal E Serie o un reTerminal Sticky desde la caja hasta un panel en la pared con **Tesserae**. Flasheas el firmware una vez desde el navegador, conectas el dispositivo a tu propio servidor Tesserae y diseñas sus páginas en el editor web. Los pasos son los mismos en todos los dispositivos. Donde difieran, elige tu dispositivo en las pestañas.

:::tip Color completo y escala de grises
Tesserae controla cada panel a su máxima capacidad. El **E1002** y el **E1004** pintan en los seis colores Spectra™ 6, el **E1003** pinta en 16 niveles de gris y el **Sticky** en 4. El servidor renderiza cada fotograma en los bytes exactos que el panel espera, así que el dispositivo solo tiene que pintarlo.
:::

## ¿Qué es [Tesserae](https://tesserae.ink/)?

Tesserae es un servidor de paneles de control para pantallas de papel electrónico, de código abierto y autoalojado. Lo ejecutas en casa como una App de Home Assistant, un contenedor Docker o una instalación sencilla en macOS, Linux, Windows o una Raspberry Pi. Compones paneles de control a partir de widgets en el navegador, y cada dispositivo obtiene su fotograma, lo pinta y vuelve a dormir. Nada sale de tu red a menos que tú lo decidas.

El proyecto comenzó con la reTerminal E Serie y creció junto a ella. El E1001 fue uno de los primeros dispositivos que Tesserae soportó, y la E Serie sigue siendo de los hardware más flasheados en el flasher web del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/15-editor-html-view.png" style={{width:700, height:'auto'}}/></div>

### ¿Por qué usar Tesserae?

- **Autoalojado y privado**: el servidor se ejecuta en tu propio hardware, sin cuenta y sin suscripción. Hay una opción alojada, [Tesserae Cloud](https://cloud.tesserae.ink), disponible si prefieres no ejecutar un servidor.
- **Creado para Home Assistant**: Tesserae se instala como una App de Home Assistant. Muestra tus entidades en el panel y, en dispositivos táctiles, puede llamar a servicios de vuelta. Con el descubrimiento MQTT activado, cada panel aparece en Home Assistant como un dispositivo.
- **Todos los colores que tiene el panel**: color Spectra™ 6 en el E1002 y el E1004, escala de grises de 16 niveles en el E1003. Las fotos se tramitan (dithering) en el servidor, para que se vean bien en cada panel.
- **Widgets y plantillas**: tiempo, calendarios, transporte, tareas, fotos, Home Assistant y más, además de widgets de la comunidad, temas y plantillas completas de paneles de control del catálogo.
- **Táctil y botones**: los botones frontales y las pantallas táctiles pueden rotar páginas, saltar a un panel, forzar una actualización o disparar un webhook. En el Sticky y el E1003, las zonas táctiles en una página actúan como controles.
- **Firmware con prioridad a la batería**: el dispositivo permanece en sueño profundo entre actualizaciones. Las actualizaciones de firmware están firmadas y se entregan por el aire desde tu propio servidor, así que solo flasheas desde el navegador una vez.
- **Código abierto**: el [servidor](https://github.com/dmellok/tesserae) y el [firmware del dispositivo](https://github.com/dmellok/tesserae-device-firmware) están en GitHub.

## Hardware compatible

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" monocromo<br/>800 × 480</td>
      <td align="center">7.3" Spectra™ 6 (color)<br/>800 × 480<br/>Color completo en Tesserae</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10.3" monocromo<br/>Escala de grises de 16 niveles, 1872 × 1404<br/>Compatible con táctil</td>
      <td align="center">13.3" Spectra™ 6 (color)<br/>1200 × 1600<br/>Color completo en Tesserae</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal Sticky</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-product.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">Escala de grises de 4 niveles, 480 × 800 en vertical<br/>Compatible con táctil</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-Sticky-p-6861.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
El mismo firmware también se ejecuta en la familia XIAO ePaper, incluyendo el kit EE02 de 13.3" Spectra™ 6, el kit EE03 de 10.3", el XIAO 7.5" ePaper Panel y el TRMNL 7.5" (OG) DIY Kit. Consulta la [lista de compatibilidad de Tesserae](https://docs.tesserae.ink/compatibility/) para ver todas las placas compatibles.
:::

## Lo que necesitas

- Un dispositivo reTerminal E Serie o reTerminal Sticky
- Un cable USB-C que transmita datos (un cable solo de carga alimenta el dispositivo pero el ordenador no puede verlo)
- Chrome o Edge de escritorio (el flasher usa Web Serial, que Firefox y Safari no soportan)
- Una red Wi‑Fi de 2,4 GHz
- Un ordenador, Raspberry Pi o una instalación de Home Assistant para ejecutar el servidor Tesserae

## Paso 1: Instalar el servidor Tesserae

Elige la ruta que se adapte a tu configuración. Cada una termina con la interfaz web de Tesserae abierta en tu navegador en el puerto **8765**. Anota esa dirección, por ejemplo `http://192.168.1.50:8765`, porque el dispositivo la necesita en el Paso 3.

| Ruta | Ideal para |
|---|---|
| [Home Assistant App](#home-assistant-app) | Ya ejecutas Home Assistant OS o Supervised |
| [Docker](#docker) | Una Raspberry Pi, NAS o máquina Linux que ya ejecute contenedores |
| [Proxmox VE](#proxmox-ve) | Un servidor homelab que ejecute Proxmox |
| [macOS, Linux o Raspberry Pi](#macos-linux-or-raspberry-pi) | Un ordenador que permanezca encendido, sin contenedores |
| [Windows](#windows) | Un PC con Windows que permanezca encendido |
| [Tesserae Cloud](#tesserae-cloud) | Sin servidor propio |

:::caution Manténlo en tu red doméstica
Tesserae está protegido por una única contraseña y está diseñado para una red doméstica de confianza. No lo expongas directamente a internet. Para acceso remoto, usa una VPN como Tailscale o WireGuard.
:::

### Home Assistant App

1. En Home Assistant, abre **Settings → Apps → App store**.
2. Abre el menú en la parte superior derecha, elige **Repositories** y añade:

```text
https://github.com/dmellok/homeassistant-tesserae-addon
```

3. Busca **Tesserae** en la App store, haz clic en **Install**, luego en **Start**, y ábrela desde la barra lateral. Home Assistant te inicia sesión.

Tus dispositivos acceden a Tesserae en la propia dirección de Home Assistant en el puerto 8765, por ejemplo `http://homeassistant.local:8765`. Si ejecutas la App del broker Mosquitto, Tesserae la usa automáticamente, de modo que tus paneles puedan aparecer en Home Assistant más tarde (ver Paso 5).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/26-ha-app-store-tesserae.png" style={{width:400, height:'auto'}}/></div>

### Docker

En una Raspberry Pi, NAS o máquina Linux con Docker instalado:

```bash
mkdir ~/tesserae && cd ~/tesserae
curl -fsSLO https://raw.githubusercontent.com/dmellok/tesserae/main/docker-compose.yml
docker compose up -d
```

Antes de guardar cualquier credencial, establece una clave secreta para que sigan siendo legibles si el contenedor se vuelve a crear alguna vez. Genera una:

```bash
python3 -c "import secrets; print(secrets.token_hex(32))"
```

Añádela a `docker-compose.yml` bajo `environment:`:

```yaml
TESSERAE_SECRET_KEY: "<the key>"
```

Ejecuta `docker compose up -d` de nuevo, navega a la dirección de la máquina en el puerto 8765 y elige una contraseña.

### Proxmox VE

Un solo comando en el host Proxmox crea un contenedor Debian 13 sin privilegios, instala la versión más reciente de Tesserae y la inicia como un servicio:

```bash
COMMUNITY_SCRIPTS_URL=https://raw.githubusercontent.com/dmellok/tesserae/main/scripts/proxmox \
  bash -c "$(curl -fsSL https://raw.githubusercontent.com/dmellok/tesserae/main/scripts/proxmox/ct/tesserae.sh)"
```

1. Cuando se te pida un canal de publicación, pulsa Enter o espera diez segundos para elegir **stable**.
2. En el diálogo del contenedor, elige **Default** para usar los tamaños del script, o **Advanced** para configurar tú mismo la CPU, la RAM, el disco y la red. Mantén los tamaños de recursos predeterminados del script, incluido su disco de 16 GB; Tesserae también instala Chromium para el renderizado. Si usas **Advanced**, deja suficiente espacio en disco para la aplicación, las dependencias del navegador y futuras actualizaciones.
3. Cuando termine, el script mostrará la dirección del contenedor. Abre `http://<container-ip>:8765` y elige una contraseña.

Para actualizar más adelante, ejecuta `update` dentro del contenedor.

### macOS, Linux o Raspberry Pi

En una terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/dmellok/tesserae/main/install.sh | bash
```

Accede a la dirección de la máquina en el puerto 8765 y elige una contraseña. En una Raspberry Pi, se recomienda un sistema operativo de 64 bits y al menos 2 GB de RAM.

### Windows

En PowerShell:

```powershell
iwr https://raw.githubusercontent.com/dmellok/tesserae/main/install.ps1 -UseBasicParsing | iex
```

Accede a la dirección del PC en el puerto 8765 y elige una contraseña. Si el dispositivo no puede llegar al servidor más tarde, permite el puerto 8765 a través del Firewall de Windows en redes privadas.

### Tesserae Cloud

[Tesserae Cloud](https://cloud.tesserae.ink) ejecuta el servidor por ti y funciona con los mismos dispositivos. Inicia sesión con tu correo electrónico y luego crea un código de reclamación en **Settings → Panels → Add a panel**. En el Paso 3, elige **Cloud** e introduce el código de reclamación en lugar de una dirección de servidor.

### Primera ejecución

La primera vez que abras Tesserae (excepto como una App de Home Assistant, que inicia sesión por ti), elige una contraseña. A continuación aparece un breve asistente de configuración:

1. **Help out**: elige si quieres enviar un recuento de instalaciones anónimo al proyecto Tesserae o mantener la instalación sin conexión.
2. **Timezone**: confirma la zona horaria detectada, para que las programaciones se ejecuten en tu hora local.
3. **Transport**: deja **REST API** seleccionado. Es la opción adecuada para dispositivos con batería como el reTerminal y el Sticky.
4. **Device**: la página espera a que un panel se anuncie. Haz clic en **Skip for now** y aprueba el dispositivo en el Paso 4, o deja esta página abierta mientras flasheas: cuando el dispositivo aparezca bajo **Discovered**, asígnale un nombre y haz clic en **Register**. No necesitas un código de emparejamiento.
5. **Dashboard**: elige **I'll set this up later**, o vuelve después del Paso 4 para crear un panel de control inicial vinculado a tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/01-first-run-set-password.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/02-wizard-welcome.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/05-wizard-transport.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/06b-wizard-device-discovered.png" style={{width:700, height:'auto'}}/></div>

## Paso 2: Flashear el firmware de Tesserae

<Tabs groupId="tesserae-hardware">
<TabItem value="e-series" label="reTerminal E Serie" default>

:::caution macOS: instala primero el controlador CH340
La reTerminal E Serie se conecta a través de un chip USB-serial WCH CH340, y macOS no tiene un controlador integrado para él. Instala el [controlador CH34x de WCH](https://github.com/WCHSoftGroup/ch34xser_macos) y luego actívalo en **System Settings → General → Login Items & Extensions → Driver Extensions**. Linux y las versiones actuales de Windows suelen instalar automáticamente un controlador compatible. Si Windows no detecta un puerto serie, instala el [controlador WCH CH341SER](https://www.wch-ic.com/downloads/CH341SER_EXE.html); Windows 10 y anteriores pueden requerirlo. En Linux, si el puerto no aparece, ejecuta `sudo usermod -aG dialout $USER` y cierra sesión y vuelve a iniciarla.
:::

1. Conecta el dispositivo a tu ordenador con el cable de datos USB-C.
2. Abre **[tesserae.ink/flash](https://tesserae.ink/flash)** en Chrome o Edge.
3. En **Choose your panel**, selecciona tu modelo de reTerminal y luego elige la versión más reciente en **Firmware build**.
4. Haz clic en **Next: plug it in**, luego en **Connect & flash**, y elige el puerto serie del dispositivo.
5. Espera de 60 a 90 segundos. Deja el cable conectado hasta que el flasher confirme el éxito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/20-flasher-reterminal-selected.png" style={{width:700, height:'auto'}}/></div>

Cuando el flasheo termine, el paso **Connect it** del flasher puede enviar los datos de tu Wi-Fi y la dirección del servidor al dispositivo por el mismo cable. Elige **My own Tesserae server**, introduce la dirección del Paso 1 y pasa al Paso 4.

</TabItem>
<TabItem value="sticky" label="reTerminal Sticky">

Los propietarios de Sticky pueden flashear Tesserae directamente desde Sticky Playground.

1. Abre la [página de Tesserae en Sticky Playground](https://www.seeedstudio.com/sticky/playground/tesserae/), o encuentra la tarjeta **Tesserae** en el Playground y haz clic en **Flash Now**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/21-playground-tesserae-card.png" style={{width:300, height:'auto'}}/></div>

2. Conecta el Sticky a tu ordenador con el cable de datos USB-C y mantenlo conectado hasta que el flasheo se complete.
3. En **Version and setup**, selecciona la versión de firmware de Tesserae que se muestra en la página.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/22-playground-tesserae-page.png" style={{width:700, height:'auto'}}/></div>

4. En **Flash to device**, elige un modo de flasheo:
   - **Standard flash** escribe el firmware y mantiene la configuración Wi-Fi guardada del Sticky.
   - **Erase flash + flash** borra primero toda la memoria flash. Úsalo cuando vengas de un firmware diferente.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/23-playground-flash-mode.png" style={{width:500, height:'auto'}}/></div>

5. Haz clic en **Connect & flash**. Cuando Chrome o Edge lo solicite, selecciona el puerto serie del Sticky, que aparece como **USB Single Serial**, y haz clic en **Connect**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/24-playground-serial-port.png" style={{width:300, height:'auto'}}/></div>

6. Espera hasta que la barra de progreso y el **Device Log** muestren que el flasheo se ha completado. El Playground reinicia el dispositivo por ti.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/25-playground-device-log.png" style={{width:350, height:'auto'}}/></div>

El Playground utiliza el mismo paquete de firmware que [tesserae.ink/flash](https://tesserae.ink/flash), así que puedes usar cualquiera de los dos.

</TabItem>
</Tabs>

:::note
Flashear Tesserae reemplaza el firmware que hay actualmente en el dispositivo. Puedes volver atrás en cualquier momento flasheando otro firmware.
:::

## Paso 3: Conectar a Wi-Fi

Después de flashear, el dispositivo muestra una pantalla de **Setup mode** con un código QR, el nombre de la red de configuración y su contraseña.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-setup-mode.jpg" style={{width:300, height:'auto'}}/></div>

1. En tu teléfono u ordenador, conéctate a la red Wi-Fi **Tesserae-Setup** (contraseña `tesserae`), ya sea escaneando el código QR o eligiéndola de la lista.
2. La página de configuración se abre sola. Si no lo hace, ve a `http://192.168.4.1`.
3. Introduce el nombre y la contraseña de tu Wi-Fi de 2,4 GHz, o elige tu red de la lista que el dispositivo ha escaneado.
4. Elige cómo llega el dispositivo a Tesserae:
   - **Local** (la opción predeterminada): introduce la dirección de tu servidor Tesserae, por ejemplo `http://192.168.1.50:8765`. Deja **Pairing code** en blanco y aprobarás el dispositivo en el Paso 4.
   - **Cloud**: introduce el código de reclamación de ocho dígitos de **Settings → Panels → Add a panel** en Tesserae Cloud.
   - **Relay**: para un dispositivo en una red diferente a la de tu servidor. Introduce el código de emparejamiento de **Settings → Cloud relay → Add a remote panel** en tu servidor.
5. Toca **Save & restart**. El dispositivo se une a tu Wi-Fi y se anuncia al servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/07-device-setup-portal-phone.png" style={{width:300, height:'auto'}}/></div>

:::tip
La red de configuración permanece activa durante 15 minutos después de que se vaya el último visitante. Si se ha agotado el tiempo, reinicia el dispositivo, o pulsa un botón frontal en las placas que lo tengan, para que vuelva a aparecer la pantalla de configuración.
:::

## Paso 4: Registrar el dispositivo en Tesserae

Los dispositivos nuevos esperan tu aprobación, para que el dispositivo de otra persona no pueda conectarse a tu servidor. Hasta que lo apruebes, el dispositivo muestra **Almost done** y te pide que lo apruebes en Tesserae en **Settings → Devices**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-almost-done.jpg" style={{width:300, height:'auto'}}/></div>

1. En la interfaz web de Tesserae, aparece una insignia de **New device** en la barra lateral. Abre **Settings → Devices**, donde un banner dice "1 device has been heard but is not registered".
2. Haz clic en **Register** en el banner. Tesserae muestra el modelo del dispositivo, el tamaño del panel y la versión de firmware, con el modelo ya seleccionado.
3. Asígnale un nombre para mostrar, como "Cocina" o "Pasillo", y haz clic en **Register**.
4. El dispositivo recoge su token de acceso en su siguiente check-in y pasa a la lista de **Devices**. Su tarjeta muestra lo que está mostrando, la batería, la versión de firmware y la próxima actualización programada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/08-devices-discovered.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/09-register-name-device.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/10-device-registered.png" style={{width:700, height:'auto'}}/></div>

## Paso 5: Crea un panel y envíalo

1. Abre **Dashboards → New dashboard**, o instala una plantilla lista para usar desde **Settings → Widgets → Browse catalog**.
2. Rellena el diseño con widgets. Cambia la vista previa a **Panel view** para ver el marco exacto que tu dispositivo pintará, con sus colores o grises.
3. Marca tu dispositivo en **Target devices** y haz clic en **Push**. El dispositivo pinta el nuevo marco en su próximo despertar.

:::tip Primer panel más rápido
De vuelta en el paso **Dashboard** del asistente de configuración, **Create a starter dashboard** crea un reloj ajustado al tamaño de tu dispositivo y vinculado a él. Haz clic en **Push to panel** para confirmar que todo está conectado y luego ábrelo en el editor para adaptarlo a tus necesidades.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/16-editor-panel-view.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/13-device-card-after-push.png" style={{width:700, height:'auto'}}/></div>

Algunos consejos para cada panel:

- **E1001 y Sticky**: los tipos de letra en negrita y de alto contraste se leen mejor.
- **E1002 y E1004**: dale a cada elemento su propio bloque de color. Una actualización completa Spectra™ 6 tarda unos 30 segundos en el E1002 y unos 40 en el E1004. Eso es normal para el panel.
- **E1003**: las fotos y los degradados se renderizan en 16 niveles de gris, y el lienzo alto es ideal para listas y agendas.

Para cambiar lo que muestra un dispositivo a lo largo del día, abre **Lineups** y elige **Set up a display**. Puedes elegir las páginas, con qué frecuencia se actualizan y cuándo el dispositivo permanece en silencio durante la noche. Para dispositivos alimentados por batería, **Smart sync** renderiza cada fotograma justo antes de que el dispositivo se despierte, de modo que siempre pinta contenido nuevo sin desperdiciar batería.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-dashboard-desk.jpg" style={{width:700, height:'auto'}}/></div>

### Conecta tus datos

- **Home Assistant**: añade un token de acceso de larga duración y la URL de tu Home Assistant en **Settings → Widgets → Home Assistant Core**. Para que cada panel aparezca como un dispositivo en Home Assistant, activa **Home Assistant discovery** en **Settings → Server**. La App ya utiliza el broker Mosquitto de Home Assistant si ejecutas uno.
- **Calendars**: añade URLs iCal en **Settings → Widgets → Calendar Feeds**.
- **More widgets**: los widgets, temas y plantillas de la comunidad están en **Settings → Widgets → Browse catalog**.

## Botones y táctil

<Tabs groupId="tesserae-hardware">
<TabItem value="e-series" label="reTerminal E Serie" default>

Los tres botones frontales funcionan desde el primer momento:

| Botón | Acción predeterminada |
|---|---|
| Izquierdo | Panel anterior |
| Derecho | Panel siguiente |
| Refresh | Renderizar y pintar de nuevo el panel actual |

Cambia la asignación para cada dispositivo en **Controls → Button map** en su tarjeta de dispositivo. Un botón también puede saltar directamente a un panel específico o disparar un webhook. Mantén pulsado **Refresh** durante unos **3 segundos** y suéltalo para cambiar a la configuración por Bluetooth mediante la app compañera Tesserae. Manténlo pulsado durante **20 segundos** para restablecer a valores de fábrica, lo que borra la Wi-Fi y la configuración del servidor guardadas y devuelve el dispositivo a la pantalla de configuración.

El **E1003** también es compatible con la función táctil. Consulta la sección Touch en la pestaña Sticky; funciona de la misma manera en ambos dispositivos.

</TabItem>
<TabItem value="sticky" label="reTerminal Sticky">

- Pulsa el **botón de encendido** una vez para activar el Sticky y obtener la página actual de inmediato.
- Mantén pulsado el botón de encendido durante unos **3 segundos** y suéltalo para cambiar a la configuración por Bluetooth mediante la app compañera Tesserae.
- Mantén pulsado el botón de encendido durante **20 segundos** para restablecer a valores de fábrica. Esto borra la Wi-Fi y la configuración del servidor guardadas y devuelve el Sticky a la pantalla de configuración.

### Táctil

La función táctil está desactivada de forma predeterminada para ahorrar batería. Para activarla, abre la tarjeta del dispositivo, ve a **General** y activa **Touch input**. Las zonas táctiles de una página actúan entonces como botones. Pueden conmutar luces de Home Assistant, cambiar de página o activar acciones, y el panel confirma cada toque con una actualización parcial en menos de un segundo.

La función táctil mantiene el controlador táctil alimentado durante la suspensión profunda. Para una mayor duración de la batería, ajusta **Touch wake** a **Double tap or swipe**, que consume alrededor de 1 mA. Con ese ajuste, un solo toque no activa el panel, pero un doble toque o un deslizamiento sí lo hace. La función táctil funciona mejor con alimentación por USB.

Activa **Beep on interaction** si quieres que el zumbador confirme cada toque o pulsación antes de que el panel se vuelva a pintar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-touch-lights.png" style={{width:300, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Actualizaciones de firmware

Las actualizaciones de firmware llegan por el aire. **Settings → Firmware** en la interfaz web de Tesserae muestra la versión instalada y disponible para cada dispositivo. Haz clic en **Queue update**, o activa **Auto**, y el dispositivo descargará, verificará e instalará la actualización firmada en su próximo despertar. Solo necesitas flashear desde el navegador de nuevo para una instalación limpia o para recuperación.

Tesserae comprueba si hay nuevo firmware cuando las funciones en línea están activadas (**Settings → System → Online features**). En una instalación sin conexión, descarga el archivo `descriptor-<kind>.json` desde la [versión de firmware](https://github.com/dmellok/tesserae-device-firmware/releases) e impórtalo en **Manual import**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/19b-firmware-update-available-crop.png" style={{width:700, height:'auto'}}/></div>

## Preguntas frecuentes (FAQ)

### P1: El flasher no puede encontrar mi dispositivo

- Usa un cable USB-C que transmita datos y un puerto USB que admita datos. Algunos puertos del panel frontal en torres de escritorio no lo hacen.
- Usa Chrome o Edge. Firefox y Safari no son compatibles con Web Serial.
- En macOS con un reTerminal E Series, instala y habilita el controlador CH340 (consulta el Paso 2).
- Cierra cualquier otro programa que pueda estar usando el puerto serie.

### P2: El dispositivo no aparece en Discovered

- Comprueba que el dispositivo haya salido del modo de configuración. Si aún muestra la pantalla de configuración, introduce de nuevo los datos de la Wi-Fi.
- Asegúrate de que tu red Wi-Fi sea de 2,4 GHz.
- Comprueba que la dirección del servidor funcione desde otro dispositivo en la misma red, por ejemplo abriendo `http://<your-server>:8765` en un navegador.

### P3: El dispositivo muestra "Can't reach the server" o "Wi-Fi unavailable"

El dispositivo muestra el problema en el panel y reintenta por sí solo. Si la Wi-Fi se cae, reintenta cada minuto durante unos 12 minutos y luego abre el portal de configuración una vez durante 15 minutos. Después de eso sigue reintentando la red guardada en segundo plano y se vuelve a unir cuando la red regresa. Para abrir de nuevo el portal de configuración, reinicia el dispositivo o pulsa un botón frontal.

### P4: El fotograma se descarga pero el panel no se pinta

Es posible que la batería esté demasiado baja para una actualización del panel. Conecta alimentación USB, deja que cargue durante una hora y vuelve a intentarlo.

## Agradecimientos especiales

Agradecimientos especiales al equipo de **Seeed Studio** por su apoyo durante todo el desarrollo de reTerminal E Series y Sticky, y en particular a **Mason Cao** y **Lily Li**.

Gracias también a los colaboradores de Tesserae que ayudaron a hacer posible el proyecto, en particular **[skynet01](https://github.com/skynet01)**, **[charmmmz](https://github.com/charmmmz)**, **[theiereman](https://github.com/theiereman)**, **[vaibhav8a](https://github.com/vaibhav8a)**, **[partridgeworks](https://github.com/partridgeworks)**, **[bablokb](https://github.com/bablokb)**, **[varanu5](https://github.com/varanu5)** y **[Frankynov](https://github.com/Frankynov)**, y a la comunidad en general por los widgets, las pruebas de firmware y los informes de hardware detrás de esta integración.

## Recursos

- **[Website]** [Tesserae](https://tesserae.ink): página principal del proyecto, lista de compatibilidad y flasher en el navegador
- **[Docs]** [Tesserae documentation](https://docs.tesserae.ink/): instalación del servidor, dispositivos, táctil, botones, Lineups y Home Assistant
- **[Docs]** [Seeed ePaper quickstart](https://docs.tesserae.ink/quickstart/seeed-unified/): los mismos pasos, con notas para cada dispositivo
- **[GitHub]** [Tesserae server](https://github.com/dmellok/tesserae)
- **[GitHub]** [Tesserae device firmware](https://github.com/dmellok/tesserae-device-firmware): código fuente, versiones y gestor de incidencias
- **[GitHub]** [Tesserae Home Assistant App](https://github.com/dmellok/homeassistant-tesserae-addon)
- **[Community]** [GitHub Discussions](https://github.com/dmellok/tesserae/discussions)
- **[Wiki]** [Primeros pasos con reTerminal E1003](/es/getting_started_with_reterminal_e1003)
- **[Wiki]** [Primeros pasos con reTerminal E1004](/es/getting_started_with_reterminal_e1004)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
