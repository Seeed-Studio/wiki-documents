---
description: Comienza con la SenseCAP MeshPager X2 Serie usando botones físicos, MUI y Base UI, emparejamiento por Bluetooth, mensajería, GNSS y mapas en microSD.
title: Primeros pasos con Meshtastic
keywords:
  - MeshPager X2 Series
  - Meshtastic
slug: /x2_get_started_for_meshtastic
sidebar_position: 1
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-08-28'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/es/x2_get_started_for_meshtastic/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

La SenseCAP MeshPager X2 Serie usa botones físicos para manejar dos interfaces Meshtastic: **MUI**, con páginas gráficas y mapas, y **Base UI**, con pantallas de información y menús.

Para especificaciones, conectores y asignaciones de pines, consulta la [Introducción a SenseCAP MeshPager X2 Series](/es/meshpager_x2_intro/).

:::caution Antes de encender
Conecta una antena LoRa adaptada a la banda de operación. Usa la batería X2 especificada, clasificada para **carga de 4,4 V**; una celda clasificada para un voltaje máximo de carga de 4,2 V no es adecuada.
:::

## Flashear firmware

Si el firmware ya está instalado, continúa en [Primeros pasos](/es/x2_get_started_for_meshtastic/#primeros-pasos).

1. Conecta X2 a un ordenador usando un cable de datos USB.
2. Abre el [Meshtastic Web Flasher](https://flasher.meshtastic.org/) en un navegador que admita Web Serial, como Chrome o Edge de escritorio.
3. Abre **Select Target Device** y busca **Seeed MeshPager X2**. Si está disponible, selecciónalo y elige una versión de firmware compatible.
4. Haz clic en **Flash** y sigue las indicaciones para entrar en modo de descarga y seleccionar el puerto USB actual de X2. Mantén el USB conectado hasta que termine la programación.

:::info Si X2 no aparece en la lista
X2 no estaba presente en la lista de dispositivos del Web Flasher público cuando se revisó esta guía. Si no puedes encontrar **Seeed MeshPager X2**, usa la imagen de fábrica de X2 y la [Instalación manual de firmware](/es/x2_get_started_for_meshtastic/#instalación-manual-de-firmware). No selecciones otro modelo de dispositivo para X2.
:::

Para forzar que X2 entre en modo de flasheo de firmware, **mantén pulsados Power y Return al mismo tiempo** y luego **conecta el cable USB**. Mantén ambos botones pulsados durante **1 segundo** y después suéltalos.

Para flashear un `.factory.bin` de X2 descargado, sigue la [Instalación manual de firmware con esptool](/es/x2_get_started_for_meshtastic/#instalación-manual-de-firmware).

:::caution Usa solo firmware para X2
Usa firmware para **Seeed MeshPager X2** (`seeed_meshpager_x2`) y sigue las instrucciones suministradas con la imagen. Activa el borrado completo solo cuando sea necesario y haz una copia de seguridad de tu configuración primero.
:::

## Primeros pasos

### Encender y navegar

1. Conecta una **fuente USB regulada de 5 V** al puerto USB-C para cargar la batería.
2. Usa la tecla **Power** para iniciar X2. Para salir de la pantalla de solo carga, suelta Power y luego mantenla pulsada durante aproximadamente **5 segundos**.
3. Espera a que se cargue Base UI o MUI.

Con el USB conectado, al apagar puede que X2 vuelva a la pantalla de solo carga.

#### Reinicio forzado

Para forzar el reinicio de X2, **pulsa Power y conecta al mismo tiempo un cable USB-C (Tipo C) con alimentación**.

### Controles de botones

| Tecla | Base UI | MUI |
| --- | --- | --- |
| Arriba / Abajo | Navega por elementos de menú, nodos o hilos de mensajes. Desde Inicio, abre el editor de mensajes. | Resalta iconos de navegación o controles. |
| Izquierda / Derecha | Cambia de pantallas de información o muévete entre teclas del teclado. | Derecha entra en una página resaltada. Dentro de una página, cambia de pestañas, ajusta deslizadores o muévete entre teclas del teclado. |
| Confirmar (tecla naranja izquierda) | Abre el menú de una pantalla o selecciona un elemento. | Activa el elemento resaltado. |
| Mantener Confirmar | Ejecuta la acción de pulsación prolongada del control seleccionado, cuando se admita. | Ejecuta la acción de pulsación prolongada del control seleccionado, cuando se admita. |
| Return | Cancela la entrada o cierra un menú. | Cierra un teclado, lista o diálogo, o vuelve un nivel atrás. |
| Power | Pulsación corta: apagar/encender pantalla. Mantener aproximadamente 4 segundos: apagado. | Pulsación corta: apagar/encender pantalla. Mantener aproximadamente 4 segundos: apagado. |

En esta guía, **seleccionar** significa resaltar un elemento con las teclas de dirección y pulsar **Confirmar**. **Confirmar** es la tecla naranja situada debajo de la pantalla a la izquierda, marcada con una línea horizontal. **Izquierda/Derecha** se refieren al pad direccional.

### Cambio de interfaz

Elige la dirección de cambio a continuación. No es necesario reflashear.

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142916.png" alt="Close-up of MeshPager X2 Base UI showing battery, node, satellite, and channel-utilization information" width={1276} height={1010} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Base UI</strong> — pantallas de información y menús.</figcaption>
  </figure>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142835.png" alt="Close-up of MeshPager X2 MUI showing the Home page and navigation icons along the left edge" width={1546} height={1172} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>MUI</strong> — páginas gráficas y mapas.</figcaption>
  </figure>
</div>

<Tabs groupId="x2-ui-switch">
<TabItem value="base-to-mui" label="Base UI a MUI">

1. Usa Izquierda/Derecha para llegar a **System** y luego pulsa Confirmar.
2. Selecciona **Reboot/Shutdown → Switch to MUI → Yes**.
3. Espera a que X2 se reinicie en MUI.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: select Switch to MUI in Base UI and confirm the restart">
    <source src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui.mp4" type="video/mp4" />
    <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui.mp4">Descarga la demostración de Base UI a MUI.</a>
  </video>
  <figcaption>Base UI a MUI. El vídeo termina durante el reinicio.</figcaption>
</figure>

</TabItem>
<TabItem value="mui-to-base" label="MUI a Base UI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Abre el menú.</strong> Resalta Settings en la barra de navegación y pulsa Derecha para entrar. Selecciona Reboot / Shutdown y pulsa Confirmar.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="X2 reboot menu with red outlines around the Bluetooth icon and left orange Confirm key used to switch to Base UI" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Mantén Confirmar para cambiar la interfaz.</strong> Usa Izquierda/Derecha para resaltar el icono de Bluetooth. <strong>Mantén pulsado Confirmar (la tecla naranja izquierda)</strong> hasta que aparezca el diálogo <strong>Reboot into BaseUI?</strong> y luego suelta la tecla.</figcaption>
  </figure>
</div>

**3. Confirma el reinicio.** Selecciona **OK** y espera a que X2 se reinicie en Base UI.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: hold Confirm on the MUI Bluetooth icon and confirm the switch to Base UI">
    <source src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base.mp4" type="video/mp4" />
    <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base.mp4">Descarga la demostración de MUI a Base UI.</a>
  </video>
  <figcaption>MUI a Base UI. El vídeo termina durante el reinicio.</figcaption>
</figure>

</TabItem>
</Tabs>

### Conexión con el teléfono

**Paso 1. Activa Bluetooth en X2.**

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

Bluetooth se activa después de cambiar desde MUI. Para activarlo manualmente, abre **System**, pulsa Confirmar y selecciona **Bluetooth Toggle**. Reinicia si se te solicita. Si Wi-Fi impide el emparejamiento por Bluetooth, desactiva primero Wi-Fi.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-home.png" alt="X2 Base UI Home screen with BT off and the example node name outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Comprueba el estado de Bluetooth.</strong> <code>BT off</code> significa que Bluetooth está desactivado. El nombre de nodo que se muestra aquí es un ejemplo; busca tu propio X2 en la app.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-bluetooth-toggle.png" alt="X2 Base UI System Action menu with Bluetooth Toggle and the left orange Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Activa Bluetooth.</strong> En la pantalla System, pulsa Confirmar, selecciona Bluetooth Toggle y sigue cualquier aviso de reinicio.</figcaption>
  </figure>
</div>

</TabItem>
<TabItem value="mui" label="MUI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Abre el menú.</strong> Entra en Settings, selecciona Reboot / Shutdown y pulsa Confirmar.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="Menú de reinicio de X2 con contornos rojos alrededor del icono de Bluetooth y la tecla Confirmar naranja izquierda" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Entra en el modo de conexión Bluetooth.</strong> Usa Izquierda/Derecha para resaltar el icono de Bluetooth y luego pulsa brevemente Confirmar (la tecla naranja izquierda).</figcaption>
  </figure>
</div>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-145102.png" alt="Pantalla de conexión Bluetooth de MeshPager X2 MUI que muestra el icono de Bluetooth, la etiqueta Programming mode y un PIN de emparejamiento de seis dígitos" width={480} height={341} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption><strong>3. Espera el PIN de emparejamiento.</strong> La pantalla de conexión Bluetooth muestra Programming mode y un PIN de seis dígitos.</figcaption>
</figure>

:::caution Volver a MUI
Después de la configuración, pulsa **Confirmar** para volver a MUI.
:::

</TabItem>
</Tabs>

**Paso 2. Descarga la app Meshtastic**

[Haz clic aquí](https://meshtastic.org/downloads/) para descargar la app Meshtastic para **iOS** o **Android**.

**Paso 3. Emparejar con el dispositivo**

Activa Bluetooth en tu teléfono, abre la app Meshtastic y concede los permisos solicitados de Bluetooth o Dispositivos cercanos. Las capturas de pantalla siguientes ilustran el flujo de trabajo de la app; selecciona el nombre de dispositivo de tu X2 en la lista.

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. Abre el panel **Bluetooth** en la app Meshtastic y selecciona tu X2 en **Available Radios**.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="Panel Bluetooth de la app Meshtastic para iOS con una radio de ejemplo resaltada en Available Radios" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

2. Introduce el código que se muestra en la pantalla del X2 y luego toca **Pair** para conectar. Si configuraste un PIN fijo, usa ese PIN.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="Solicitud de emparejamiento Bluetooth en iOS que muestra el campo de entrada del PIN y el botón Pair" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. Abre el panel **Connection** en la app Meshtastic, elige **BLE** y selecciona tu X2 en la lista de dispositivos.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="Panel Connection de la app Meshtastic para Android con BLE seleccionado y radios cercanas listadas" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

2. Introduce el código que se muestra en la pantalla del X2 y luego toca **OK** para conectar. Si configuraste un PIN fijo, usa ese PIN.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="Solicitud de emparejamiento Bluetooth en Android con un campo de entrada de PIN y el botón OK resaltado" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

Espera a que se cargue la configuración del dispositivo antes de cambiar ajustes.

### Configurar LoRa

Antes de comunicarte a través de la malla, establece tu **región**. Este ajuste controla el rango de frecuencias que usa tu dispositivo y debe coincidir con tu ubicación, el hardware de radio **863–928 MHz** del X2 y su antena.

**Lista de regiones**

| **Region Code** | **Descripción** | **Rango de frecuencias (MHz)** | **Ciclo de trabajo (%)** | **Límite de potencia (dBm)** |
| :---: | :---: | :---: | :---: | :---: |
| UNSET | Sin establecer | N/D | N/D | N/D |
| US | Estados Unidos | 902.0 - 928.0 | 100 | 30 |
| EU_868 | Unión Europea 868MHz | 869.4 - 869.65 | 10 | 27 |

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa. Los límites de potencia anteriores son límites de región de Meshtastic; la potencia de transmisión real del X2 también depende de su hardware y firmware.

:::info Ciclo de trabajo de EU_868
EU_868 tiene un **límite de ciclo de trabajo del 10%**, calculado cada minuto sobre una hora móvil. Si el dispositivo alcanza este límite, deja de transmitir hasta que se permita de nuevo la transmisión.
:::

<Tabs groupId="x2-lora-method">
<TabItem value="base" label="Base UI">

1. Usa Izquierda/Derecha para llegar a **LoRa** y luego pulsa Confirmar.
2. Selecciona **LoRa Region**, elige tu región y confirma cualquier aviso.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-lora-region.png" alt="Menú LoRa Actions de la Base UI del X2 con LoRa Region y la tecla Confirmar delineadas en rojo" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Abre los ajustes de región.</strong> Selecciona LoRa Region y luego elige la región correspondiente a tu ubicación en la siguiente pantalla.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-lora-info.png" alt="Pantalla LoRa Info de la Base UI del X2 que muestra la región de ejemplo US, el preset LongTurbo, la frecuencia y un identificador BLE" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Comprueba la configuración actual.</strong> LoRa Info muestra la región, el preset del módem y la frecuencia. Este ejemplo usa US / LongTurbo; usa los ajustes apropiados para tu ubicación y grupo.</figcaption>
  </figure>
</div>

La etiqueta **BLE** de cuatro caracteres en LoRa Info es un identificador del dispositivo, no el PIN de emparejamiento Bluetooth. Al emparejar, usa el PIN que muestra el aviso de emparejamiento del X2 o tu PIN fijo configurado.

</TabItem>
<TabItem value="mui" label="MUI">

1. Entra en **Settings → Region**.
2. Elige tu región y selecciona **OK**. Reinicia si se te indica.

</TabItem>
<TabItem value="phone" label="Configure on Phone">

Conecta la app Meshtastic al X2 y espera a que se cargue su configuración. Elige las instrucciones para tu teléfono:

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. Si la app muestra **Set LoRa Region** en la página de conexión, tócala. De lo contrario, abre **LoRa** desde la configuración del dispositivo en **Settings**.
2. Establece la **Region** correspondiente a tu ubicación y luego guarda la configuración.
3. Vuelve a conectar si el X2 se reinicia y comprueba que la región ya no sea **UNSET**.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="Configuración y selección de región LoRa en la app Meshtastic para iOS" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. Abre **Radio Configuration → LoRa** desde el menú de la app.
2. Elige tu **Region** y guarda la configuración.
3. Vuelve a conectar si el X2 se reinicia y comprueba la región seleccionada.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="Ajustes LoRa de la app Meshtastic para Android con el selector de región" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

Las capturas de pantalla ilustran el flujo de trabajo de la app del teléfono. Selecciona tu X2 conectado; los nombres de los menús pueden variar entre versiones de la app.

</TabItem>
</Tabs>

Para comunicarte con otros nodos, haz coincidir su **preset de módem, ranura de frecuencia, nombre de canal y clave precompartida**. Puedes configurar estos ajustes o importar la configuración de canal de tu grupo en la app del teléfono.

La potencia de transmisión y los ajustes de ciclo de trabajo deben cumplir la normativa local. Consulta la [configuración LoRa de Meshtastic](https://meshtastic.org/docs/configuration/radio/lora/) para más detalles.

### Uso de mapas

<span id="microsd-and-offline-maps"></span>
<span id="wi-fi"></span>

Usa MUI para ver mapas. Para tu ubicación actual, activa el GPS y espera una fijación en exteriores; consulta [Configure GPS](/es/x2_get_started_for_meshtastic/#configure-gps).

<Tabs groupId="x2-map-mode">
<TabItem value="offline" label="Offline Map">

Los mapas sin conexión requieren **MUI** y una tarjeta microSD.

**Paso 1. Prepara la tarjeta.**

1. Haz una copia de seguridad de la tarjeta antes de formatearla; el formateo borra su contenido. Prepara la tarjeta con **particionado MBR y FAT32**.
2. Descarga un ZIP de estilo del [Meshtastic UI map starter kit](https://github.com/meshtastic/device-ui/tree/master/maps), como `osm.zip` o `atlas.zip`.
3. Extrae el archivo en la raíz de la tarjeta, conservando las carpetas que contiene. Comprueba la ruta resultante en lugar de añadir otra carpeta `maps` alrededor de los archivos extraídos:

```text
microSD root/
└── maps/
    └── <style>/
        └── <zoom>/
            └── <x>/
                └── <y>.png
```

Por ejemplo, un estilo llamado `osm` debe estar bajo `/maps/osm/`. Evita un nivel extra de carpeta como `/maps/maps/osm/`.

4. Expulsa la tarjeta de forma segura después de que termine la copia.

:::tip Empieza con un mapa de vista general
Los archivos oficiales del starter kit contienen teselas de todo el mundo en los **niveles de zoom 1–6**. Aleja hasta el nivel 6 o inferior para comprobar que el mapa se carga. Para obtener detalles a nivel de calle, descarga teselas que cubran tu zona a niveles de zoom más altos; el starter kit por sí solo no incluye esos detalles. Consulta las [instrucciones de descarga de mapas](https://github.com/meshtastic/device-ui/tree/master/maps#downloading-tiles).
:::

**Paso 2. Inserta la tarjeta y abre el mapa.**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="MeshPager X2 microSD card slot with the outer cover removed" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Ranura para tarjeta microSD de X2.</figcaption>
</figure>

1. Apaga el X2 y desconecta el USB antes de insertar o retirar la tarjeta.
2. Inserta completamente la tarjeta microSD, luego enciende el X2 y entra en MUI.
3. Para tu ubicación actual, habilita GNSS y espera una fijación de posición en exteriores.
4. Entra en **Map** y selecciona el estilo que coincida con tus teselas.

Las teselas descargadas funcionan sin servicio Wi‑Fi ni celular.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151638.png" alt="MeshPager X2 MUI Locations Map showing street tiles, location markers, zoom buttons, and navigation controls" width={600} height={455} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Mapa MUI con marcadores de ubicación, zoom y controles de navegación.</figcaption>
</figure>

**Paso 3. Navega con los botones.**

| Estado del mapa | Operación |
| --- | --- |
| Explorar | Usa las teclas de dirección para desplazarte. |
| Abrir controles | Pulsa Confirm. |
| Zoom o posición | Usa Arriba/Abajo para resaltar un control y luego Confirm. |
| Volver al mapa | Pulsa Return. |
| Volver a la barra de navegación | Pulsa Return de nuevo. |

</TabItem>
<TabItem value="online" label="Mapa en línea">

**Paso 1. Habilita el GPS.**

Abre **Home**, resalta el **control de ubicación/GPS** y mantén pulsado Confirm para habilitar GNSS si está deshabilitado. Reinicia si se te solicita y luego espera una fijación de posición en exteriores.

**Paso 2. Configura y habilita el Wi‑Fi.**

En MUI, abre **Settings → Wi-Fi**, introduce el nombre de la red Wi‑Fi (**WiFi SSID**) y la contraseña (**WiFi pre-shared Key**), luego selecciona **OK**. Puedes configurar ambos directamente en el dispositivo.

:::tip
Conéctate a una red Wi‑Fi de **2.4 GHz**. No se admite Wi‑Fi de **5 GHz**.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="MUI Wi-Fi settings with the network name, password, and OK button highlighted" width={450} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

En **Home**, un icono de Wi‑Fi gris con **0.0.0.0** muestra el estado deshabilitado. Un icono de Wi‑Fi blanco con una dirección IP asignada muestra el estado conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="MUI Home screen comparing disabled Wi-Fi with 0.0.0.0 and connected Wi-Fi with an assigned IP address" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

Mantén pulsado el **icono de Wi‑Fi** para activar o desactivar Wi‑Fi. En el X2, resalta el icono con las teclas de dirección y luego **mantén pulsado Confirm (la tecla naranja izquierda)** para realizar la pulsación prolongada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="MUI Home screen with the Wi-Fi icon highlighted for a long press to change its state" width={450} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

El modo de conexión Bluetooth deshabilita el Wi‑Fi. Vuelve a habilitarlo después de regresar a MUI si es necesario. Los mapas en línea requieren que la red Wi‑Fi tenga acceso a internet.

**Paso 3. Ver el mapa.**

Abre **Map** y espera a que se carguen las teselas del mapa. Mantén el Wi‑Fi conectado a internet mientras se cargan nuevas áreas.

</TabItem>
</Tabs>

### Enviar y leer mensajes

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

**Redactar un mensaje**

1. Usa Izquierda/Derecha para llegar a la pantalla de información de **Home**.
2. Pulsa Arriba o Abajo para abrir el editor de mensajes.
3. Selecciona **[Select Destination]** y luego elige un canal o nodo.
4. Selecciona un mensaje predefinido para enviarlo, o **[-- Free Text --]** para abrir el teclado.
5. Usa las teclas de dirección y Confirm para introducir caracteres. Usa la tecla de retroceso del teclado para borrar.
6. Selecciona la tecla **Enter** del teclado para enviar. **Return** cancela la entrada.

También puedes abrir el editor desde la pantalla **Messages**: pulsa Confirm y selecciona **New Preset Msg** en el menú **Message Action**. Comprueba el destino antes de elegir un mensaje predefinido o introducir texto libre.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-new-preset-message.png" alt="X2 Base UI Message Action menu with New Preset Msg and the Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Abre el editor de mensajes.</strong> En Messages, pulsa Confirm y selecciona New Preset Msg. Elige el destino y un mensaje predefinido, o selecciona Free Text para abrir el teclado.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-keyboard.png" alt="X2 Base UI free-text keyboard with the character keys and ENTER outlined in red, addressed to the example LongTurbo channel" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Escribe y envía.</strong> Comprueba el destinatario junto a <code>To:</code>, usa las teclas de dirección y Confirm para escribir y luego selecciona ENTER para enviar. LongTurbo es el destino de ejemplo.</figcaption>
  </figure>
</div>

Si el editor no está disponible, habilita el módulo **Canned Message** en la app del teléfono y usa firmware con compatibilidad para teclado en pantalla.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151656.png" alt="MeshPager X2 Base UI showing the Message sent to LongFast confirmation" width={480} height={390} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Base UI: mensaje enviado al canal LongFast.</figcaption>
</figure>

**Leer mensajes**

Usa Izquierda/Derecha para llegar a la pantalla de mensajes, Arriba/Abajo para explorar los hilos y Confirm para abrir las acciones de conversación.

</TabItem>
<TabItem value="mui" label="MUI">

**Iniciar un mensaje directo desde la lista de nodos**

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-node-select.png" alt="X2 node list with red outlines around the Nodes icon, selected node 9028, direction Right, and the left orange Confirm key" width={940} height={1270} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Selecciona un nodo.</strong> Resalta Nodes en la barra de navegación y pulsa Derecha para entrar en la lista. Usa Arriba/Abajo para seleccionar un nodo y luego mantén pulsado Confirm (la tecla naranja izquierda) hasta que se abra su conversación.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-open-keyboard.png" alt="X2 conversation with red outlines around recipient Meshtastic 9028, the keyboard icon, and the orange Confirm key" width={925} height={1215} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Abre el teclado.</strong> Comprueba el nombre del destinatario en la parte superior. Mueve el foco a la entrada de texto, pulsa Derecha para resaltar el icono del teclado y luego pulsa Confirm para abrirlo.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-type-send.png" alt="X2 on-screen keyboard with red outlines around the typed letter w, the keyboard, and the lower-right submit checkmark" width={825} height={1085} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. Escribe y envía.</strong> Usa las teclas de dirección para seleccionar caracteres y pulsa Confirm para introducirlos. Selecciona la marca de verificación inferior derecha y pulsa Confirm para enviar.</figcaption>
  </figure>
</div>

<figure style={{maxWidth: 320, margin: '1.5rem auto', textAlign: 'center'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-message-sent.png" alt="X2 conversation after submission, with red outlines around recipient Meshtastic 9028 and the outgoing message w" width={770} height={1065} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>4. Ver el mensaje saliente.</strong> El teclado se cierra y el mensaje saliente aparece en la conversación. En este ejemplo se envía <code>w</code> a Meshtastic 9028.</figcaption>
</figure>

Para una conversación de canal, abre **Channels** y selecciona un canal. Para volver a una conversación existente, abre **Messages** y selecciona el chat.

**Return** cierra el teclado sin enviar; púlsalo de nuevo para volver a la lista de chats.

<h4 id="mute-and-unmute-a-channel">Silenciar y reactivar un canal</h4>

1. Resalta **Channels** en la barra de navegación y pulsa **Right** para entrar en la lista de canales. Usa Arriba/Abajo para resaltar un canal configurado, como **LongTurbo** en este ejemplo.
2. **Mantén pulsado Confirm** (la tecla naranja izquierda) hasta que el icono de campana cambie a una **campana naranja tachada** y luego suelta la tecla. Las notificaciones del canal ahora están silenciadas.
3. Para reactivar el mismo canal, **mantén pulsado Confirm de nuevo** hasta que vuelva la **campana blanca** y luego suelta la tecla.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-select.png" alt="X2 Group Channels page with red outlines around the Channels icon, selected LongTurbo channel, and left orange Confirm key" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Selecciona el canal.</strong> Mantén pulsada la tecla naranja izquierda Confirm para cambiar su estado de silencio.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-muted.png" alt="Selected LongTurbo channel with an orange crossed-out bell outlined in red after holding Confirm" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Silenciado.</strong> La campana naranja tachada indica que las notificaciones del canal están silenciadas.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-unmuted.png" alt="Selected LongTurbo channel with a white bell outlined in red after holding Confirm again" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. Con sonido.</strong> Mantén pulsado Confirm de nuevo para restaurar la campana blanca y activar las notificaciones del canal.</figcaption>
  </figure>
</div>

</TabItem>
</Tabs>

La mensajería directa requiere que los dispositivos intercambien primero la información de nodo y las claves públicas.

## Uso avanzado

<span id="advanced-tutorial"></span>

### Conectar a través de la página web

<span id="connect-via-web-client"></span>

Usa el [Meshtastic Web Client](https://client.meshtastic.org/) para leer mensajes, enviar texto y configurar tu nodo desde un navegador. Usa **Chrome o Edge** de escritorio con firmware que admita el método de conexión seleccionado. La compatibilidad del navegador varía; consulta la [guía de compatibilidad del Web Client](https://meshtastic.org/docs/software/web-client/).

**Paso 1. Abre el Web Client.**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="Meshtastic Web Client landing page" width={1000} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

**Paso 2. Añade una conexión.** Selecciona **New Connection**. Las capturas de pantalla ilustran el flujo de trabajo del cliente; los nombres de los dispositivos y los números de puerto son ejemplos. Selecciona tu propio X2 al conectarte.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="New Connection button in the Meshtastic Web Client" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

**Paso 3. Elige un método de conexión.**

<Tabs groupId="x2-web-connection">
<TabItem value="bluetooth" label="Bluetooth">

1. Activa Bluetooth en X2. En MUI, entra en el modo de conexión Bluetooth descrito en [Phone Connection](/es/x2_get_started_for_meshtastic/#phone-connection).
2. Desconecta la app del teléfono de X2 para que el navegador pueda conectarse.
3. Selecciona **Bluetooth** en el Web Client y elige X2 en el selector de dispositivos del navegador. Completa el emparejamiento si se te solicita.
4. Espera a que se cargue la configuración del nodo y luego abre un canal o una conversación.

</TabItem>
<TabItem value="serial" label="USB Serial">

1. Inicia X2 con Meshtastic en ejecución y conéctalo usando un cable USB de **datos**. El modo de descarga de firmware es para flashear, no para usar el Web Client.
2. Cierra el Web Flasher, los monitores serie y otras aplicaciones que usen el puerto serie de X2.
3. Selecciona **Serial** en el Web Client, elige **New device** si se te solicita y selecciona el puerto USB de X2 en el selector de puertos del navegador.
4. Espera a que se cargue la configuración del nodo y luego abre un canal o una conversación.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="Meshtastic Web Client serial connection and browser serial-port picker" width={1000} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

El dispositivo USB puede aparecer como **USB JTAG/serial debug unit**. Si vuelves a conectar X2 o cambias de puerto USB, selecciona de nuevo su puerto actual.

</TabItem>
</Tabs>

**Paso 4. Comprueba la conexión.** Selecciona el dispositivo añadido para conectarte si aún no está conectado. El cliente mostrará entonces el estado del nodo y cargará su configuración. Abre la vista de mensajes para seleccionar un canal o una conversación de nodo.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="Example node shown as connected in the Meshtastic Web Client" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

### Configurar el GPS

<span id="gnss-positioning"></span>

Usa X2 al aire libre con una vista despejada del cielo y espera a que obtenga una posición por satélite.

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

Usa Izquierda/Derecha para llegar a **Position**, pulsa Confirm y selecciona **On/Off Toggle → Enabled**.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151648.png" alt="MeshPager X2 Base UI Position screen showing satellite count, latitude, longitude, and altitude" width={480} height={407} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Pantalla de posición de la Base UI.</figcaption>
</figure>

</TabItem>
<TabItem value="mui" label="MUI">

Entra en **Home** y resalta el **location/GPS control**. Si GNSS está desactivado, mantén pulsado Confirm para activarlo. Reinicia si se te solicita.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151629.png" alt="MeshPager X2 MUI Home page with the location control selected and coordinates, satellite count, and altitude displayed" width={480} height={385} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Estado de ubicación MUI en la página Home.</figcaption>
</figure>

</TabItem>
</Tabs>

**Configurar en el teléfono**

Conecta la app Meshtastic a X2, abre **Position** en la configuración de radio del dispositivo y ajusta las siguientes opciones. Guarda los cambios y vuelve a conectar si el dispositivo se reinicia.

| Setting | What it controls |
| --- | --- |
| GPS Mode | Enable or disable X2's GNSS receiver. |
| GPS Update Interval | How often the device requests a new GNSS position. |
| Position Broadcast Interval | How often the device broadcasts its position over the mesh. |
| Smart Position | Allow position broadcasts based on movement, subject to the configured thresholds. |
| Fixed Position | Use a fixed location. Disable this when you want the device's location to follow its movement. |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="Meshtastic phone app Position settings for GPS updates and position broadcasts" width={500} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

Los intervalos más cortos pueden proporcionar actualizaciones más frecuentes, pero aumentan el consumo de energía o el tráfico de la malla. Elige intervalos adecuados a la frecuencia con la que se mueve el dispositivo. Consulta la [configuración de Position de Meshtastic](https://meshtastic.org/docs/configuration/radio/position/).

**Permiso de ubicación en iOS**

Si usas la **ubicación del teléfono** en la app Meshtastic o la compartes con un nodo, permite el acceso a la ubicación y activa **Precise Location** para Meshtastic en los ajustes de iOS. Este permiso controla la ubicación proporcionada por el teléfono; el receptor GNSS integrado de X2 obtiene su propia posición de forma independiente.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="iOS location permission settings with Precise Location enabled for Meshtastic" width={250} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

### Conexión de sensores

X2 tiene sensores integrados para lecturas ambientales, rumbo de la brújula y detección de movimiento. Configúralos según la función que quieras usar:

| Sensor | Function | Configuration |
| --- | --- | --- |
| SPA06-003 barometer | Pressure and sensor temperature readings. | **Telemetry → Environment** en la app del teléfono. |
| BMM350 magnetometer | Compass heading. | **Position → Compass** y **Compass Calibrate** en la Base UI. |
| Six-axis IMU | Acceleration and angular velocity measurements. | Usado por las funciones de firmware compatibles; la página de Telemetry ambiental no muestra lecturas en bruto de seis ejes. |

**Activar la telemetría ambiental**

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. Conéctate a X2 y abre **Settings → Module Configuration → Telemetry**.
2. Activa **Environment Metrics Enabled** y establece el intervalo de **Environment Metrics**.
3. Activa **Show on device screen** si quieres lecturas ambientales compatibles en la Base UI y luego guarda la configuración.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="Meshtastic iOS app Telemetry settings for environmental measurements and on-screen display" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. Conéctate a X2 y abre **Module Configuration → Telemetry**.
2. Activa **Environment metrics module enabled** y establece su intervalo de actualización.
3. Activa **Environment metrics on-screen enabled** para mostrar las lecturas ambientales compatibles en la Base UI y luego guarda la configuración.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="Meshtastic Android app Telemetry settings with environment metrics and on-screen display options" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

Las capturas de pantalla usan nodos y lecturas de ejemplo. La telemetría ambiental de X2 muestra las lecturas compatibles según su sensor detectado y el firmware instalado. No habilita la calibración de la brújula ni transmite lecturas en bruto del acelerómetro y el giroscopio. Para el funcionamiento de la brújula, usa la pestaña **Position** en [Other Function](/es/x2_get_started_for_meshtastic/#other-function).

### Other Function

<span id="sensors-display-and-audio"></span>

Usa las teclas de dirección para resaltar un control. **Pulsa Confirm** para seleccionarlo o **mantén pulsado Confirm** para su acción de pulsación prolongada. Pulsa **Return** para cerrar un cuadro de diálogo o volver atrás. La disponibilidad del menú depende del firmware instalado y de los módulos activados.

<Tabs groupId="x2-other-ui">
<TabItem value="mui" label="MUI">

<Tabs groupId="x2-mui-function-page">
<TabItem value="menu" label="Barra de menú">

| Operación en X2 | Efecto |
| --- | --- |
| Mantener Confirmar en **Home** | Resincronizar MUI con la configuración y los datos del nodo. |
| Mantener Confirmar en **Nodes** | Abrir los filtros de nodos. |
| Mantener Confirmar en **Settings** | Bloquear la pantalla. Usa Power para activarla e introduce el PIN de pantalla si está configurado. |

</TabItem>
<TabItem value="home" label="Página de inicio">

| Control resaltado | Operación en X2 | Efecto |
| --- | --- | --- |
| Icono de mensaje | Pulsar Confirmar | Abrir la lista de mensajes. |
| Icono de nodo | Pulsar Confirmar | Abrir la lista de nodos en línea. |
| Reloj | Pulsar Confirmar | Cambiar entre fecha/hora y tiempo de actividad. |
| Icono de LoRa | Mantener Confirmar | Activar o desactivar la transmisión LoRa. |
| Icono de notificación | Mantener Confirmar | Activar o desactivar las notificaciones. |
| Icono de notificación | Pulsar Confirmar | Alternar entre sonido, banner y sonido más banner. |
| Icono de GPS | Mantener Confirmar | Activar o desactivar GNSS. Reinicia si se te solicita. |
| Icono de Wi-Fi | Mantener Confirmar | Activar o desactivar Wi-Fi, u abrir la configuración de Wi-Fi si faltan credenciales. |
| Icono de MQTT | Mantener Confirmar | Activar o desactivar el módulo MQTT. Reinicia si se te solicita. |
| Icono de código QR | Pulsar Confirmar | Mostrar el código QR del dispositivo. |

Configura el servidor MQTT y los ajustes relevantes de subida/bajada de canal en la app del teléfono antes de usar MQTT. El acceso directo de Home enciende o apaga el módulo; consulta [Meshtastic MQTT configuration](https://meshtastic.org/docs/configuration/module/mqtt/) para la configuración.

</TabItem>
<TabItem value="node" label="Página de nodo">

| Operación en X2 | Efecto |
| --- | --- |
| Resaltar un nodo y pulsar Confirmar | Abrir sus detalles. |
| Resaltar un nodo y mantener Confirmar | Abrir su conversación de mensajes directos. |
| Seleccionar el control de posición de un nodo | Mostrar su posición reportada en el mapa, cuando haya datos de posición disponibles. |

Usa [Enviar y leer mensajes](/es/x2_get_started_for_meshtastic/#send-and-read-messages) para ver el flujo de trabajo ilustrado del teclado de X2.

</TabItem>
<TabItem value="channel" label="Página de canal">

Selecciona un canal y pulsa Confirmar para abrir su conversación. Mantén Confirmar en el canal para silenciar o reactivar sus notificaciones. La campana cambia entre una **campana blanca** y una **campana naranja tachada**; consulta [Silenciar y reactivar un canal](/es/x2_get_started_for_meshtastic/#mute-and-unmute-a-channel).

</TabItem>
<TabItem value="message" label="Página de mensajes">

Selecciona una conversación y pulsa Confirmar para abrirla. Para eliminar una conversación, **mantén Confirmar** sobre ella para mostrar el botón de **delete**, y luego selecciona ese botón. Esto elimina el historial de conversación local.

</TabItem>
<TabItem value="settings" label="Página de configuración">

Abre **Settings** desde la barra de navegación, resalta el ajuste y pulsa Confirmar. Guarda o confirma el cambio antes de salir de su cuadro de diálogo.

| Ajuste | Efecto |
| --- | --- |
| User Short Name / User Long Name | Cambiar los nombres mostrados del nodo. |
| Lock: Screen / Settings | Configurar los bloqueos de PIN de pantalla y de ajustes. |
| Region | Seleccionar la región LoRa. |
| Modem Preset | Seleccionar el preset del módem de radio. |
| Channel | Editar los ajustes del canal. |
| Device Role | Seleccionar el rol del nodo. |
| Wi-Fi | Establecer el nombre de la red y la contraseña. |
| Screen Timeout | Establecer cuánto tiempo permanece activa la pantalla. |
| Screen Brightness | Ajustar la retroiluminación. |
| Theme | Cambiar entre apariencia clara y oscura. |
| Language | Cambiar el idioma mostrado. |
| Configuration Reset → Factory Reset | Restaurar la configuración predeterminada. |
| Configuration Reset → NodeDB Reset | Borrar la información almacenada de nodos. |
| Configuration Reset → Clear Chat History | Borrar el historial de chat local. |
| Reboot / Shutdown → Green restart icon | Reiniciar X2. |
| Reboot / Shutdown → Red power icon | Apagar X2. Con USB conectado, puede volver a la pantalla de carga. |

Para instrucciones de restablecimiento y capturas de pantalla, consulta [Factory Reset](/es/x2_get_started_for_meshtastic/#factory-reset) y [NodeDB Reset](/es/x2_get_started_for_meshtastic/#nodedb-reset).

</TabItem>
<TabItem value="tools" label="Herramienta">

Abre **Settings & Tools** y luego cambia a **Tools**. Resalta una herramienta y pulsa Confirmar. Selecciona un nodo cuando la herramienta pida un objetivo.

| Herramienta | Función |
| --- | --- |
| Mesh Detector | Ver los nodos detectados recientemente. |
| Signal Scanner | Inspeccionar la información de señal recibida, incluyendo RSSI y SNR. |
| Trace Route | Solicitar la ruta a un nodo seleccionado y ver la respuesta. |
| Statistic | Ver estadísticas de paquetes y decodificación. |
| Packet Log | Inspeccionar la actividad de paquetes de la malla. |

Un resultado de ruta o de señal requiere tráfico del nodo relevante. Deja tiempo para las respuestas y revisa [Calidad de la señal](/es/x2_get_started_for_meshtastic/#signal-quality) al evaluar el enlace.

</TabItem>
</Tabs>

</TabItem>
<TabItem value="base" label="Base UI">

Usa Izquierda/Derecha para llegar a la pantalla de información, pulsa Confirmar para abrir su menú de acciones y luego usa Arriba/Abajo y Confirmar para seleccionar un elemento.

<Tabs groupId="x2-base-function-page">
<TabItem value="home" label="Home">

| Acción | Efecto |
| --- | --- |
| Sleep Screen / Toggle Backlight | Apagar la pantalla o alternar su retroiluminación, según el firmware. Usa Power para activar X2. |
| Send Position | Difundir la posición actual cuando GNSS esté activado y haya una posición válida disponible. |
| Send Node Info | Anunciar la información del nodo; esta opción se muestra cuando GNSS está desactivado. |

</TabItem>
<TabItem value="node" label="Node">

Abrir el menú **Node Action** del nodo seleccionado.

| Acción | Efecto |
| --- | --- |
| Favorite / Unfavorite | Añadir o quitar el nodo de favoritos. |
| Trace Route | Solicitar la ruta al nodo seleccionado. |
| Mute Notifications / Unmute Notifications | Cambiar las notificaciones para ese nodo. |

</TabItem>
<TabItem value="position" label="Position">

| Acción | Efecto |
| --- | --- |
| On/Off Toggle | Activar o desactivar GNSS. |
| Format | Seleccionar el formato de visualización de coordenadas. |
| Smart Position | Configurar las difusiones basadas en el movimiento. |
| Update Interval | Establecer el intervalo de actualización de GNSS. |
| Broadcast Interval | Establecer el intervalo de difusión de posición. |
| Compass | Elegir **Dynamic**, **Fixed Ring** o **Freeze Heading**. |
| Compass Calibrate | Iniciar una calibración de la brújula de **30-second**. |

Para la calibración, selecciona **Compass Calibrate** y sigue las indicaciones en pantalla mientras giras X2 a través de diferentes orientaciones. Manténlo alejado de imanes y objetos metálicos grandes, y deja que la cuenta regresiva termine. La opción de calibración requiere que el firmware detecte un sensor compatible.

</TabItem>
<TabItem value="lora" label="LoRa">

| Acción | Efecto |
| --- | --- |
| LoRa Region | Seleccionar la región de operación. |
| Device Role | Seleccionar el rol del nodo. |
| Radio Preset | Elegir un preset de módem. |
| Frequency Slot | Elegir la ranura de frecuencia para la región y el preset seleccionados. |
| Transmit Enabled | Activar o desactivar la transmisión por radio. |

Coordina los cambios del preset y de la ranura de frecuencia con los nodos con los que quieras comunicarte.

</TabItem>
<TabItem value="system" label="System">

| Acción | Efecto |
| --- | --- |
| Notifications | Configurar las notificaciones y los sonidos del sistema. |
| Display Options | Ajustar la configuración de pantalla disponible en el firmware. |
| Bluetooth Toggle | Activar o desactivar Bluetooth. |
| WiFi Toggle | Activar o desactivar Wi-Fi. Configura primero sus credenciales de red. |
| Reboot/Shutdown | Reiniciar, apagar o cambiar la UI. |

</TabItem>
</Tabs>

</TabItem>
</Tabs>

El micrófono y el altavoz proporcionan hardware para futuras actualizaciones de mensajería de voz. Los sonidos de notificación se pueden configurar usando los controles anteriores.

## Preguntas frecuentes

### El dispositivo no puede emparejarse con el teléfono vía BLE

<span id="x2-is-not-listed-in-the-phone-app"></span>

- **En MUI**, entra en el modo de emparejamiento Bluetooth antes de buscar X2 en la app del teléfono. Abre **Settings → Reboot / Shutdown**, resalta el **icono de Bluetooth** y **pulsa brevemente Confirmar**. Espera la pantalla de emparejamiento y usa el PIN mostrado en X2.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="Configuración de MUI, menú Reboot / Shutdown y modo de emparejamiento Bluetooth" width={800} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

En X2, usa las teclas de dirección para resaltar controles y pulsa **Confirmar** para seleccionarlos. Para las ilustraciones de los botones de X2, consulta [Conexión con el teléfono](/es/x2_get_started_for_meshtastic/#phone-connection).

- **En Base UI**, activar Wi-Fi desactiva Bluetooth. Para seguir usando Wi-Fi, conecta el teléfono a la misma red y elige **Network** en la app Meshtastic, usando la dirección IP de X2. Para emparejar por BLE en su lugar, desactiva Wi-Fi y activa **System → Bluetooth Toggle** en X2.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" alt="Ajustes de conexión de red de la app Meshtastic en el teléfono" width={350} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

- Activa Bluetooth en el teléfono y concede a la app sus permisos de **Bluetooth / Nearby Devices**. Desconecta cualquier otro teléfono o navegador ya conectado a X2 y luego vuelve a escanear.
- Si el emparejamiento sigue fallando, olvida el emparejamiento antiguo de X2 en los ajustes de Bluetooth del teléfono y vuelve a conectarte desde la app Meshtastic. Introduce el PIN actual en pantalla o tu PIN fijo configurado.

### El dispositivo no puede conectarse a mi Wifi

<span id="wi-fi-does-not-connect-or-turns-off"></span>

1. Usa una red **Wi-Fi de 2.4 GHz**. X2 no es compatible con Wi-Fi de 5 GHz. Para probar la conexión, intenta con un hotspot del teléfono configurado para 2.4 GHz.
2. Comprueba el nombre y la contraseña de la red Wi-Fi, incluyendo mayúsculas y minúsculas, y luego activa Wi-Fi después de guardarlos. Sigue la pestaña **Online Map** en [Uso del mapa](/es/x2_get_started_for_meshtastic/#map-usage).
3. Comprueba el icono de Wi-Fi y la dirección IP en la página Home de MUI. Un icono gris y un campo de IP vacío indican que Wi-Fi está desactivado o no se ha conectado. Un icono blanco con una dirección IP indica una conexión.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="Página de inicio de MUI que muestra el icono de Wi‑Fi y la dirección IP antes y después de conectarse" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

Entrar en el modo de conexión Bluetooth desactiva el Wi‑Fi. Después de volver a MUI, habilita de nuevo el Wi‑Fi cuando necesites mapas en línea. La red Wi‑Fi también debe proporcionar acceso a internet para descargar los mosaicos del mapa.

### El dispositivo se apaga automáticamente

**Descripción**

- X2 se apaga o se reinicia repetidamente poco después de encenderse.
- El registro serie se detiene y el dispositivo deja de responder.

**Solución de problemas**

1. Comprueba la carga de la batería y la conexión de alimentación USB. Si solo la pantalla se ha oscurecido, pulsa brevemente **Power** para comprobar si X2 sigue funcionando. El tiempo de espera de la pantalla es diferente de un apagado.
2. Si X2 solo muestra la pantalla de carga, suelta Power y luego mantenlo pulsado durante aproximadamente **5 segundos** para iniciar Meshtastic. Evita interrumpir la alimentación mientras se guardan los ajustes o se escribe el firmware.
3. Si el dispositivo sigue sin responder, sigue [Forced Restart](/es/x2_get_started_for_meshtastic/#reinicio-forzado). Si después de eso se reinicia repetidamente, captura el registro serie de arranque para ayudar a identificar la causa.
4. Si el problema persiste con una fuente de alimentación estable, realiza una instalación limpia de firmware X2 compatible. Sigue [Manual Firmware Installation](/es/x2_get_started_for_meshtastic/#instalación-manual-del-firmware) para el procedimiento de imagen de fábrica con borrado completo.

:::caution Instalación limpia
Un borrado completo elimina ajustes, canales, claves y datos guardados. Guarda todo lo que necesites antes de continuar. Después de reinstalar, configura de nuevo la región y los canales LoRa.
:::

### Restablecimiento de fábrica

Un restablecimiento de fábrica restaura la configuración predeterminada. Guarda los ajustes e información de canales que quieras conservar antes de restablecer.

<Tabs groupId="x2-faq-reset-method">
<TabItem value="mui" label="Configurar en MUI">

1. Abre **Settings → Configuration Reset**.
2. Selecciona **Factory Reset** y luego selecciona **OK** usando las teclas de dirección y Confirm.
3. Espera a que X2 se reinicie con la configuración predeterminada.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="Menú Configuration Reset de MUI con Factory Reset y su cuadro de diálogo de confirmación" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="phone" label="Configurar en el teléfono">

Conéctate a X2 en la app Meshtastic, abre los ajustes del dispositivo y selecciona **Factory Reset**. Confirma el restablecimiento y espera a que X2 se reinicie.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="Botón Factory Reset en la app Meshtastic para teléfono" width={400} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

Vuelve a conectar con X2 después del reinicio y establece la **región LoRa** y los **canales** correctos antes de usar la malla.

### Fallo de mensaje directo

<span id="direct-messages-fail"></span>

Primero comprueba que ambos nodos usan ajustes LoRa compatibles y están dentro del alcance, directa o indirectamente a través de la malla. Intenta enviar un mensaje de canal compartido. Si los mensajes de canal funcionan pero los mensajes directos fallan, comprueba la información de nodo y las claves almacenadas a continuación.

#### Restablecer NodeDB

NodeDB almacena información sobre los nodos descubiertos en la malla. Una entrada desactualizada, como una guardada antes de que el otro nodo cambiara sus claves, puede impedir la mensajería directa. Restablecer NodeDB borra la base de datos de nodos local para que el dispositivo pueda descubrir los nodos de nuevo.

<Tabs groupId="x2-faq-reset-method">
<TabItem value="mui" label="Configurar en MUI">

Abre **Settings → Configuration Reset**, selecciona **NodeDB Reset** y selecciona **OK**. Usa las teclas de dirección y Confirm en X2. El dispositivo se reiniciará.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="Menú Configuration Reset de MUI con NodeDB Reset y su cuadro de diálogo de confirmación" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="phone" label="Configurar en el teléfono">

Conecta la app Meshtastic al nodo cuya base de datos quieres restablecer. Abre **Settings → Device → Device Config → Reset NodeDB** y confirma. Los nombres de los menús pueden variar entre versiones de la app.

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Ajustes de la app Meshtastic con Device seleccionado" width={300} style={{maxWidth: '100%', height: 'auto', alignSelf: 'flex-start'}} loading="lazy" />
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Botón Reset NodeDB en la página Device Config de la app Meshtastic" width={300} style={{maxWidth: '100%', height: 'auto', alignSelf: 'flex-start'}} loading="lazy" />
</div>

</TabItem>
</Tabs>

Da tiempo a que la lista de nodos se vuelva a rellenar y luego intercambia la información de usuario antes de volver a intentar el mensaje directo.

#### Intercambiar información de usuario

Los nodos emiten periódicamente su información de usuario, incluida la **clave pública** necesaria para los mensajes directos cifrados. Si falta la información de un nodo o está desactualizada, abre su entrada en la app del teléfono y selecciona **Exchange User Info**. Deja que el intercambio se complete; repite desde el otro nodo si es necesario.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Menú de nodo de la app Meshtastic con Exchange User Info" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

Vuelve a intentar el mensaje directo y comprueba su estado de entrega. Que un mensaje aparezca solo en la conversación del remitente no confirma su recepción.

#### Regenerar clave privada

Si la mensajería directa sigue fallando después de actualizar la información de los nodos, puedes regenerar el par de claves del nodo afectado desde los ajustes de **Security** de la app del teléfono. Usa **Regenerate Private Key**, guarda el cambio y reinicia el dispositivo cuando se te indique.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Ajustes de Security de la app Meshtastic para regenerar la clave privada" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

:::note Después de regenerar las claves
La clave pública del nodo cambia, por lo que otros nodos deben aprender su nueva información. Elimina la entrada obsoleta de la lista del otro nodo si es necesario y luego intercambia de nuevo la información de usuario. Mantén la **clave privada confidencial**; solo la **clave pública** se comparte con otros nodos. Consulta [Meshtastic Security configuration](https://meshtastic.org/docs/configuration/radio/security/).
:::

### Calidad de la señal

- **SNR (signal-to-noise ratio)** mide cuán fuerte es la señal recibida en relación con el ruido de fondo. Un valor más alto generalmente indica un enlace más claro. LoRa puede recibir señales con SNR negativo; el límite utilizable depende del preset del módem.
- **RSSI (received signal strength indicator)** mide la potencia de la señal recibida en dBm. Un valor menos negativo significa una señal más fuerte: por ejemplo, **−90 dBm** es más fuerte que **−110 dBm**.

Comprueba ambos valores junto con la entrega real de mensajes. Una sola lectura de SNR o RSSI no demuestra que un dispositivo esté defectuoso. Para mejorar el enlace, usa una antena adaptada a la banda de funcionamiento, comprueba su conexión y muévete a un lugar más alto y abierto, lejos de obstrucciones e interferencias.

### El ordenador no encuentra X2 o no puede conectarse a su puerto serie

1. Usa un cable USB de **datos** y comprueba la lista de puertos del ordenador antes y después de conectar X2. Una pantalla de carga por sí sola no confirma una conexión de datos USB.
2. Vuelve a comprobar el puerto después de reconectar X2, cambiar de conector USB o entrar en modo de descarga. En macOS, el sufijo `/dev/cu.usbmodem...` puede cambiar.
3. Cierra otros flasheadores, monitores serie o conexiones del navegador que estén usando el puerto. En Linux, comprueba también los [permisos de acceso USB](/es/x2_get_started_for_meshtastic/#acceso-usb-en-linux).
4. Si el dispositivo no aparece en la lista de puertos, prueba con otro cable de datos o conéctalo directamente al ordenador para comprobar la conexión USB.
5. Para la instalación de firmware, entra en modo de flasheo como se describe en [Flash Firmware](/es/x2_get_started_for_meshtastic/#flashear-firmware). Para el Web Client, ejecuta Meshtastic normalmente.

Si un flasheador informa **No serial data received**, no ha establecido comunicación con el bootloader. Solo con ese mensaje no se puede identificar un problema de capacidad de Flash ni un dispositivo defectuoso.

### Acceso USB en Linux

Compara los puertos serie antes y después de conectar X2:

```bash
ls /dev/ttyACM* /dev/ttyUSB* 2>/dev/null
```

Si se deniega el acceso, comprueba los permisos del puerto detectado (sustituye `/dev/ttyACM0` según sea necesario):

```bash
ls -l /dev/ttyACM0
```

En Ubuntu/Debian, si el puerto pertenece a `dialout`, añade tu usuario a ese grupo:

```bash
sudo usermod -aG dialout "$USER"
```

Cierra sesión y vuelve a iniciarla, luego inténtalo de nuevo. Cierra otras aplicaciones que estén usando el puerto. Vuelve a comprobar el nombre del puerto después de entrar en modo de descarga.

### GNSS no muestra una posición

- Habilita GNSS usando [Configure GPS](/es/x2_get_started_for_meshtastic/#configurar-gps).
- Sal al exterior con una vista despejada del cielo y deja tiempo para adquirir una fijación. Una primera fijación tras un largo periodo de inactividad puede tardar más que una fijación posterior.
- Comprueba el estado de los satélites y de la ubicación en X2 antes de esperar que su posición aparezca en el mapa.
- Si la posición permanece fija mientras te mueves, comprueba el ajuste **Fixed Position** de la app del teléfono y el intervalo de actualización de GNSS. Consulta [Meshtastic Position configuration](https://meshtastic.org/docs/configuration/radio/position/).

### El mapa sin conexión aparece en blanco

1. Comprueba el formato **MBR/FAT32** de la tarjeta y la estructura de carpetas `/maps/<style>/<zoom>/<x>/<y>.png`.
2. Selecciona en MUI el mismo estilo que el copiado en la tarjeta.
3. Comprueba que los mosaicos descargados cubren la ubicación y el nivel de zoom que se está viendo. Con solo el kit de inicio oficial instalado, aleja el zoom hasta el nivel **6 o inferior**.
4. Para tu ubicación actual, espera a una fijación GNSS. Si la tarjeta no se detecta, apaga X2 y desconecta el USB antes de volver a insertarla.

Consulta [Uso del mapa](/es/x2_get_started_for_meshtastic/#uso-del-mapa) para los pasos de preparación.

### Instalación manual de firmware

Usa [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32s3/) para flashear el X2 **`.factory.bin`** en **`0x0`**. Esta imagen combinada contiene el bootloader, la tabla de particiones y la aplicación. Un `.bin` solo de aplicación no es adecuado para este procedimiento.

:::caution Borrado completo
El comando de flasheo de abajo borra toda la memoria flash interna, incluyendo ajustes, canales y datos guardados. Haz una copia de seguridad de todo lo que necesites antes de continuar.
:::

1. Descarga el [firmware de fábrica X2 2.8.1.0046b50](https://files.seeedstudio.com/wiki/MeshPagerX2/firmware-seeed_meshpager_x2-2.8.1.0046b50.factory%20copy.bin). Cambia el nombre del archivo descargado de **`firmware-seeed_meshpager_x2-2.8.1.0046b50.factory copy.bin`** a **`x2.factory.bin`** y colócalo en una carpeta de tu ordenador.
2. Instala [Python 3.10 o posterior](https://www.python.org/downloads/).
3. Conecta el X2 al ordenador usando un cable de datos USB. Cierra el Web Flasher, el Web Client y cualquier monitor serie que pueda estar usando el puerto.
4. Abre una terminal en la carpeta que contiene `x2.factory.bin` y sigue los comandos para tu sistema. Envía primero el **reset a 1200 bps** y luego usa esptool con **`--before usb-reset`**.

El paso de 1200 bps dispara un reinicio; esptool realiza la escritura del firmware. **1200 bps no es la velocidad de transferencia del firmware.** Es posible que el puerto USB desaparezca y vuelva a aparecer con un nombre diferente después del reinicio, así que vuelve a listar los puertos antes de flashear.

<Tabs groupId="x2-manual-flash-os">
<TabItem value="windows" label="Windows">

En **PowerShell**, instala esptool y lista los puertos serie:

```powershell
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade "esptool>=5,<6"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

Sustituye `COM5` por el puerto actual del X2 y envía el **reset a 1200 bps**:

```powershell
.\.venv\Scripts\python.exe -c "import serial,time; s=serial.Serial('COM5',1200,timeout=0.2); s.dtr=True; time.sleep(0.5); s.dtr=False; s.close(); time.sleep(2)"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

Vuelve a comprobar el puerto. Sustituye `COM5` abajo por el puerto que el X2 usa ahora y luego flashea:

```powershell
.\.venv\Scripts\python.exe -m esptool --chip esp32s3 --port COM5 --baud 460800 --before usb-reset write-flash --erase-all 0x0 x2.factory.bin
```

</TabItem>
<TabItem value="linux-macos" label="Linux / macOS">

Instala esptool y lista los puertos serie:

```bash
python3 -m venv .venv
./.venv/bin/python -m pip install --upgrade "esptool>=5,<6"
./.venv/bin/python -m serial.tools.list_ports
```

En Ubuntu/Debian, instala `python3-venv` con `sudo apt install python3-venv` si el primer comando indica que falta.

Sustituye `/dev/ttyACM0` por el puerto actual del X2. En macOS, usa el puerto `/dev/cu.usbmodem...` correspondiente. Envía el **reset a 1200 bps** y luego vuelve a listar los puertos:

```bash
./.venv/bin/python -c "import serial,time; s=serial.Serial('/dev/ttyACM0',1200,timeout=0.2); s.dtr=True; time.sleep(0.5); s.dtr=False; s.close(); time.sleep(2)"
./.venv/bin/python -m serial.tools.list_ports
```

Sustituye `/dev/ttyACM0` abajo por el puerto que el X2 usa ahora y luego flashea:

```bash
./.venv/bin/python -m esptool --chip esp32s3 --port /dev/ttyACM0 --baud 460800 --before usb-reset write-flash --erase-all 0x0 x2.factory.bin
```

Si Linux informa de un error de permisos, sigue [Acceso USB en Linux](/es/x2_get_started_for_meshtastic/#acceso-usb-en-linux).

</TabItem>
</Tabs>

Mantén el USB conectado hasta que esptool informe **`Hash of data verified`** y termine. Reinicia el X2 con Power y Return ambos liberados y luego configura de nuevo la región LoRa y los canales.

Si esptool informa **No serial data received**, comprueba si hay otra aplicación usando el puerto, repite el reset a 1200 bps y selecciona el puerto recién enumerado. Reducir solo la velocidad de transferencia no pone el X2 en modo de descarga.

Si el reset por software no está disponible, usa el procedimiento con botones del X2 descrito en [Flashear firmware](/es/x2_get_started_for_meshtastic/#flashear-firmware) y luego vuelve a comprobar el puerto. El comportamiento de reset requerido puede depender del firmware instalado y de la revisión de hardware.

Si se establece una conexión pero la escritura falla repetidamente, vuelve a intentar el comando de escritura con `--baud 115200`.

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="Únete a la comunidad Meshtastic de Seeed Studio en Facebook"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Foro técnico de Seeed Studio"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contactar con el soporte de Seeed Studio"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Comunidad de Seeed Studio en Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Debate sobre el Wiki de Seeed Studio"></a>
</div>
