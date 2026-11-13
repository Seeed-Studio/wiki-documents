---
description: "Guía completa de introducción para la pasarela HaLowLink 2 Wi‑Fi HaLow: conexión de hardware, interfaz web, modos de red, configuración de enlace HaLow entre dos dispositivos, configuración avanzada, mantenimiento de firmware, preguntas frecuentes y resolución de problemas"
title: Introducción a HaLowLink 2
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - Introducción
  - Punto de acceso
  - Extensor
  - Emparejamiento
  - OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_getting_started
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/es/halowlink2_getting_started/
---

# Introducción a HaLowLink 2

<!-- Internal note: all procedures on this page are sourced from the official Morse Micro HaLowLink User Guide, which states it applies to both HaLowLink 1 and HaLowLink 2. Items not yet re-verified on Seeed retail hardware carry internal "Requires Verification" comments — confirm them, with screenshots and the tested firmware version recorded, before publication. No simulated results anywhere on this page. -->
<!-- Internal note (source check 2026-11-11, official HaLowLink User Guide PDF, 58 pp.): default state = "Router with a HaLow Access Point" — §1.3.1 p.9 ("This is the default mode of operation"), §2.5 p.13 ("When you first power on your HaLowLink it will be a Router with a HaLow Access Point"); factory reset returns to it — §5 p.24. USB-C carries Ethernet: §2.1.3 p.10 (initial-connection method), §6.4 p.28 ("A new Ethernet adapter should appear on your computer… DHCP Client"), §12.2.1 Table 6 p.44 (USB-C row: computer gets a 192.168.12.x IP and reaches https://192.168.12.1). Spec-table wording agreed by Seeed product page and Product Brief Rev 9 ("1x USB-C port (power and Ethernet data)"). -->

Desde el desempaquetado hasta un enlace HaLow de largo alcance funcional en cuatro etapas: conecta el hardware, inicia sesión en la interfaz web, elige un modo de red y empareja dos unidades. Especificaciones y características: [Introducción](/es/halowlink2_introduction).

Las capturas de pantalla de la interfaz web en esta guía se tomaron en **software HaLowLink 2.11.8**; los nombres de los menús y el diseño de las tarjetas pueden diferir en otras versiones de firmware.

<!-- Video Required: unboxing + first login + two-device pairing walkthrough (Optional, P1). To be produced by Seeed; embed here when available. -->

## Preparación

### Lo que necesitas

- **Un HaLowLink 2** (Router / Punto de acceso), o **dos unidades** para un enlace de largo alcance con un Extensor ([configuración de dos dispositivos](#conectar-dos-dispositivos-halowlink-2))
- Elementos del paquete minorista: adaptador de corriente, cable USB-C a USB-C, cable Ethernet, antena, base
- Un ordenador o smartphone para la configuración; opcionalmente, un router existente como enlace ascendente a Internet

:::tip
La etiqueta inferior contiene el **nombre de usuario y contraseña de la interfaz web** y el **SSID/contraseña Wi‑Fi de 2,4 GHz** predeterminados (además de un código QR). Los necesitas para iniciar sesión.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-lan-connection.jpg" alt="HaLowLink 2 sobre su base con la antena, un cable Ethernet LAN y el cable de alimentación USB-C conectados" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Lado del dispositivo: antena en el conector SMA, cable Ethernet en el puerto LAN, cable de alimentación USB-C. El puerto WAN está vacío en esta foto; el extremo del ordenador no se muestra.</em></p>

### Conectar el hardware

1. Atornilla la **antena** al conector SMA **antes** de encender.
2. Alimenta el dispositivo mediante **USB-C** con el **adaptador de corriente incluido**. No uses un adaptador USB-A a USB-C.
3. Conecta tu ordenador; elige un método:
   - **Cable Ethernet al puerto LAN**: recomendado para la primera configuración
   - **Wi‑Fi de 2,4 GHz**: SSID y contraseña en la etiqueta (conéctate después del arranque)
   - **Cable USB-C a USB-C**: el dispositivo aparece como un adaptador de red en tu ordenador
4. ¿Necesitas Internet aguas abajo? Conecta tu router al puerto **WAN**.

**Resultado esperado:** LED de estado **verde fijo**: el dispositivo ejecuta su **configuración de Router con un punto de acceso Wi‑Fi HaLow** de fábrica.

## Acceder a la interfaz web

1. Abre un navegador y ve a:

   ```text
   https://192.168.12.1
   ```

   La interfaz de gestión es **solo HTTPS**; al escribir `http://` se redirige automáticamente.
2. En la primera visita aparece una **advertencia de certificado**: el dispositivo usa un certificado autofirmado. Acéptalo; la conexión sigue cifrada.
3. Inicia sesión con el **nombre de usuario y contraseña impresos en la etiqueta del dispositivo**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-login.png" alt="Página de inicio de sesión de la interfaz web de HaLowLink 2 con campos de nombre de usuario y contraseña" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Página de inicio de sesión: introduce el nombre de usuario y la contraseña de la etiqueta del dispositivo y luego elige Log in.</em></p>

4. Se abre la **página de inicio** con estas tarjetas: **Access Point (HaLow)**, **Access Point (2.4 GHz)**, **Local Network**, **Uplink (Ethernet)**, **Mode**, **Network Interfaces**, **System**. La versión de firmware se encuentra en la **esquina inferior izquierda**; la tarjeta **System** añade modelo, versión de OpenWrt y cualquier aviso de actualización ([Firmware](#actualización-de-firmware-y-restablecimiento-de-fábrica)).

**Resultado esperado:** la página de inicio se carga; la versión de firmware es visible en la esquina inferior izquierda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-home-2.11.8.png" alt="Página de inicio de la interfaz web de HaLowLink 2 en el software 2.11.8" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Página de inicio (2.11.8), valores de fábrica: la tarjeta Mode muestra "Router with HaLow Access Point", 0 clientes conectados, Uplink (Ethernet) Disconnected (sin cable WAN). Muestra el diseño, no un enlace HaLow en funcionamiento.</em></p>

## Configuración de red

El HaLowLink 2 funciona en una de tres configuraciones:

- **Router** / **Punto de acceso**: ambos alojan un **AP HaLow**; se diferencian en dónde obtienen las direcciones IP los clientes. Se configura en el **Wizard**.
- **Extensor**: se une a ese AP mediante un enlace cliente HaLow. Se configura con el **botón Mode** físico.

Un LED de estado verde por sí solo no distingue Router de Punto de acceso.

| Modo | LED de estado | Los clientes obtienen direcciones IP de | Dirección de gestión | Cuándo usarlo |
|:----:|:----:|:----|:----|:----|
| **Router** (predeterminado de fábrica) | Verde fijo | El propio dispositivo: subred `192.168.12.x`, con su propio servidor DHCP, NAT y cortafuegos | `https://192.168.12.1` | Una red HaLow independiente o un entorno de pruebas aislado |
| **Punto de acceso** (recomendado) | Verde fijo | El servidor DHCP de tu router existente, sin NAT | La IP asignada por el enlace ascendente, más `https://192.168.12.1` en el puerto LAN | Añadir dispositivos HaLow a una LAN existente para que todo pueda comunicarse con todo |
| **Extensor** | Aguamarina fija | La red detrás del Punto de acceso, a través del enlace HaLow | Ninguna: se gestiona a través del Punto de acceso | La unidad remota de un despliegue con dos dispositivos |

Cuando el dispositivo aloja el AP HaLow (configuración de Router o Punto de acceso):

- La **dirección de gestión `192.168.12.1` sigue disponible en el puerto LAN** (y USB-C), incluso después de que el dispositivo obtenga una IP ascendente diferente. Excepciones: un Extensor emparejado o la [configuración totalmente en puente](#ip-estática-y-dhcp).
- El **Wizard parte de la configuración predeterminada**: al ejecutarlo sobrescribe los cambios realizados fuera del Wizard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-wizard-2.11.8.png" alt="Página del asistente de HaLowLink 2 con las opciones HaLow Mode y Network Mode en el software 2.11.8" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Wizard (2.11.8). HaLow Mode: Access Point, EasyMesh Controller o 802.11s Mesh. Network Mode: dónde obtienen IP los dispositivos HaLow; la captura muestra la selección predeterminada (red local de este dispositivo); la opción recomendada de router existente es el segundo botón de opción. Los cambios se aplican con Save &amp; Apply.</em></p>

Estados transitorios del LED de estado: parpadeo verde o aguamarina = arrancando; parpadeo amarillo = restablecimiento de fábrica en curso; amarillo fijo = bootloader ([Recuperación](#actualización-de-firmware-y-restablecimiento-de-fábrica)); **parpadeo azul = actualización de firmware: no desconectes la alimentación**.

### Modo Router (predeterminado)

Recién salido de la caja, el dispositivo enruta el tráfico: su propia subred `192.168.12.x`, servidor DHCP y cortafuegos, puerto **WAN** como enlace ascendente. No hay nada que configurar. La interfaz web responde solo en las redes propias del dispositivo (LAN, USB-C, Wi‑Fi de 2,4 GHz, HaLow), nunca desde el lado WAN.

### Modo Punto de acceso (recomendado)

Usa este modo para que los dispositivos HaLow sean miembros de primera clase de tu red existente:

1. Conecta con un cable el puerto **WAN** a tu router. En la página de inicio, comprueba que **Uplink (Ethernet)** muestra una IP asignada.
2. Abre el **Wizard**. Selecciona *"Wi-Fi HaLow devices will get an IP on your existing router's network"* (marcado como *(Recommended)*).

**Resultado esperado:** los clientes HaLow obtienen IP de tu router y alcanzan a todos los dispositivos de tu LAN. La interfaz web sigue siendo accesible en la dirección ascendente y en `https://192.168.12.1` en el puerto LAN.

### Modo Extensor

El modo Extensor es para la unidad *remota* de un despliegue con dos dispositivos. Actívalo con el **botón Mode** físico, sin necesidad de interfaz web:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mode-button.jpg" alt="Botón Mode en el lateral de la carcasa del HaLowLink 2" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>El botón Mode en el lateral de la carcasa, entre las ranuras de ventilación. No es un interruptor de encendido.</em></p>

1. Enciende. Espera hasta que el LED de estado esté fijo (verde o aguamarina).
2. **Mantén pulsado el botón Mode.** El LED de estado parpadea **verde lentamente** y luego **aguamarina rápidamente**. Suelta cuando esté en aguamarina rápida.
   (Si lo sueltas durante el verde lento, se realiza un [restablecimiento de fábrica](#actualización-de-firmware-y-restablecimiento-de-fábrica) en su lugar).
3. Espera hasta que el LED de estado esté **aguamarina fija**.

**Resultado esperado:** aguamarina fija = modo Extensor. La unidad ahora necesita emparejamiento ([siguiente sección](#conectar-dos-dispositivos-halowlink-2)). Una vez emparejada, no tiene interfaz web propia: se gestiona a través del Punto de acceso. Sus puertos LAN, WAN, USB-C y Wi‑Fi de 2,4 GHz sirven a la red extendida.

## Conectar dos dispositivos HaLowLink 2

Unidad n.º 1 = **Punto de acceso HaLow** junto a tu router. Unidad n.º 2 = **Extensor** en el emplazamiento remoto. Cualquier cosa conectada al Extensor —Ethernet, USB-C o Wi‑Fi de 2,4 GHz— se une a tu red a través del enlace HaLow sub‑1 GHz. Cada escenario de aplicación se basa en este procedimiento.

### Topología de red

```text
[ Router / LAN ] --Ethernet(WAN)-- [ HaLowLink 2 #1: HaLow AP (green LED) ]
                                        )))  Wi-Fi HaLow link ( sub-1 GHz )  (((
[ Remote devices ] --Ethernet/USB-C/2.4 GHz Wi-Fi-- [ HaLowLink 2 #2: Extender (aqua LED) ]
```

<!-- Image Required: verified two-device topology diagram with real photos. Priority P1. -->

### Emparejar los dispositivos

Prepara las dos unidades:

1. ¿La unidad ya estaba configurada antes? Hazle primero un [restablecimiento de fábrica](#firmware-update-and-factory-reset) para que ambas partan del estado predeterminado.
2. Unidad n.º 1 = **Punto de acceso** cerca de tu router: puerto WAN conectado por cable al router, Asistente ejecutado con la opción recomendada ([pasos](#access-point-mode-recommended)). LED de estado en verde fijo.
3. Unidad n.º 2 = **Extensor** en la ubicación remota ([pasos](#extender-mode)). LED de estado en color aguamarina fijo.
4. ¿Mismo firmware en ambas? Comprueba la versión en la **esquina inferior izquierda** de cada página de inicio **antes** de que la unidad n.º 2 entre en modo Extensor y pierda su interfaz web.

<!-- Requires Verification (internal): confirm whether units from different regional variants can pair, and whether HaLowLink 1 and HaLowLink 2 interoperate. Not stated in the official guide — do not publish an answer until confirmed with Morse Micro or on hardware. -->

Luego emparejarlas: configuración por pulsación, sin credenciales que escribir:

1. En el **Punto de acceso**: pulsa y **suelta inmediatamente** el botón Mode. El LED de Wi-Fi HaLow empieza a parpadear lentamente.
2. En el **Extensor**: pulsa y **suelta inmediatamente** el botón Mode. Su LED de Wi-Fi HaLow empieza a parpadear lentamente.
3. Espera a que termine el intercambio de credenciales (normalmente unos pocos segundos).

**Resultado esperado:** el LED de Wi-Fi HaLow del Extensor pasa a **morado fijo**: credenciales recibidas, enlace conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-led-indicators.jpg" alt="Front of the HaLowLink 2 showing the labelled Status, Wi-Fi HaLow and 2.4 GHz LEDs" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Los tres LEDs frontales etiquetados. Aquí: Estado aguamarina + Wi-Fi HaLow morado = un Extensor emparejado. Una foto estática solo muestra los colores, no el patrón de parpadeo.</em></p>

¿Falló el emparejamiento? Ambos LEDs HaLow **parpadean rápidamente durante 120 segundos**: un retardo de reintento por seguridad. Espera a que el parpadeo se detenga en ambas unidades y luego repite desde el paso 1.

:::note
Si el Punto de acceso funciona como **EasyMesh Controller**, los Extensores emparejados se convierten automáticamente en EasyMesh Agents (malla: **no compatible en la UE ni en el Reino Unido**; rara vez necesaria). Credenciales manuales en su lugar: restablece a valores de fábrica el Extensor y usa su portal de configuración en `https://192.168.12.1`. Detalles: la [Guía de usuario de HaLowLink](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) oficial.
:::

## Verificar la conexión

1. **Página de inicio del Punto de acceso → Dispositivos conectados:** aquí aparecen el Extensor y los dispositivos detrás de él; haz clic en la tarjeta para ver la intensidad de la señal.
2. **En el Extensor:** el LED de Wi-Fi HaLow está **morado fijo** (morado intermitente = actividad de tráfico).
3. **Conecta un dispositivo de prueba** al Extensor: Ethernet, USB-C o su Wi-Fi de 2,4 GHz. Las credenciales Wi-Fi están en la **propia etiqueta del Extensor**, no en la del Punto de acceso.
4. **Comprueba su dirección IP:** asignada por DHCP; en la configuración recomendada, desde tu router principal (consulta su tabla de concesiones).
5. **Haz ping** a tu router u otro host de la LAN desde el dispositivo de prueba, o usa **Network → Diagnostics** en la interfaz web del Punto de acceso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-associated-client.jpg" alt="Expanded Access Point (HaLow) card on the Home page listing one associated HaLow client with signal and RX/TX rates" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Tarjeta de Punto de acceso (HaLow) expandida en la página de inicio del AP: un cliente HaLow asociado — el Extensor emparejado — con señal de −32 dBm. Las cifras RX/TX son velocidades del enlace de radio informadas por la interfaz, no el rendimiento medido de la aplicación.</em></p>

**Resultado esperado:** el dispositivo de prueba mantiene una dirección IP de la LAN principal y accede a tu red a través del enlace HaLow.

<!-- Resolved 2026-11-11: screenshot inserted above. The device owner confirmed it shows the successful AP–Extender link and approved publishing the client MAC visible in it (0C:BF:74:00:50:AC). Same screen records firmware context: OpenWrt 23.05.6, hostname halowlink2-74e7, channel 28 (916.0 MHz, 8 MHz), WPA3 SAE. -->

## Configuración avanzada

Más allá del Asistente: **Quick Config** (ajustes comunes, mostrados en directo en un diagrama) y **Advanced Config** (acceso granular: interfaces, inalámbrico, cortafuegos, sistema, paquetes, terminal). Con Advanced Config activado, el indicador **Unsaved Changes** previsualiza los comandos `uci` exactos que genera cada cambio antes de aplicarlo.

:::caution
Un ajuste de red incorrecto puede dejarte sin acceso a la interfaz web. Vía de rescate: en un ordenador en el puerto LAN o WAN, configura una IP estática `10.22.121.110` (máscara `255.255.255.254`, o `255.255.255.0` si tu SO no puede configurar /31). El dispositivo siempre responde en **`https://10.22.121.111`**. Último recurso: [restablecimiento de fábrica](#firmware-update-and-factory-reset).
:::

### Ajustes inalámbricos

- **Quick Config → Wireless** configura SSID, contraseña, canal y ancho de banda.
- El ancho de banda es 1 / 2 / 4 / 8 MHz: más ancho = mayor rendimiento, más estrecho = mejor alcance y robustez.
- **La región regulatoria está bloqueada.** El canal, el ancho de banda y la potencia de transmisión siguen la variante regional (UE/Reino Unido: 14 dBm; Japón: 16 dBm; capacidad: hasta 26 dBm). No hay malla en la UE ni en el Reino Unido. Usa el dispositivo solo en la región para la que se vendió.
- ¿Espacio radioeléctrico saturado? **Status → Channel Analysis** (Advanced Config) encuentra un canal más silencioso; **Status → Realtime Graphs** muestra la calidad del enlace en tiempo real.

<!-- Requires Verification (internal): capture the actual Quick Config → Wireless options on retail firmware (TX power exposure, bandwidth dropdown per region) before adding screenshots. -->

### IP estática y DHCP

- **Quick Config → Network Interfaces** configura cada interfaz lógica con una IP estática (opcionalmente con servidor DHCP) o como cliente DHCP; los puertos en la misma red se puentean automáticamente. Los cambios se aplican con **Save & Apply**.
- **Punto de acceso totalmente puenteado (avanzado):** elimina la subred de gestión `192.168.12.1` independiente moviendo las interfaces LAN, 2,4 GHz y USB desde la red `lan` a `wlan`. Hazlo **desde la dirección asignada por el upstream** (no desde `192.168.12.1`), o usa **Apply Unchecked**; de lo contrario, se revierte automáticamente. Detalles: la [Guía de usuario de HaLowLink](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) oficial.
- CLI: `uci set … && uci commit`, luego `reload_config` (no se necesita reinicio); sigue el registro con `logread -l 100 -f`.

### SSH y diagnósticos

- **SSH está desactivado de forma predeterminada.** Actívalo en **Advanced Config → Administration → SSH Access**; inicia sesión con las credenciales de la etiqueta. **Services → Terminal** es una consola basada en navegador (solo HTTP sin cifrar: sigue el enlace de advertencia del navegador).
- **Network → Diagnostics** ejecuta ping, traceroute, arp-scan e iperf3, y muestra el comando exacto utilizado.
- **Services → Range Test** (Advanced Config) automatiza iperf3 entre dos dispositivos HaLowLink: mismo firmware en ambos, selecciona la unidad remota en la lista desplegable, introduce su **contraseña de la etiqueta** y pulsa Start Test. Exporta los resultados como CSV/JSON. Extras de CLI: `morse_cli` (acceso de bajo nivel al chip HaLow) y `wavemon` (monitor de señal).

:::caution
Los resultados de Range Test son **volátiles**: un reinicio los borra, así que expórtalos primero. Un resultado de ~40 Mbps UDP **y** más de 900 Mbps TCP significa que la prueba se ejecutó sobre **Ethernet**, no sobre el enlace HaLow: recoloca los dispositivos y vuelve a probar.
:::

<!-- Requires Verification (internal): run a real Range Test on Seeed hardware and capture screenshots + a CSV export. Real results only — never publish throughput numbers that were not captured from a real test. -->

### Actualización de firmware y restablecimiento de fábrica

**Comprobar y actualizar el firmware.** La versión instalada aparece en la **esquina inferior izquierda** de la página de inicio. Cuando está en línea, la tarjeta **System** muestra un aviso de actualización (por ejemplo, *Upgrade to 3.2.3 available*): solo un aviso, hasta que la instales. Instala desde la página **Upgrade** en la barra lateral: actualización automática (descarga desde los servidores oficiales de actualización; requiere Internet) o carga manual de archivo. Durante una actualización el LED de estado **parpadea en azul — no desconectes la alimentación**.

<!-- Requires Verification (internal): confirm whether Seeed will distribute firmware separately from the Morse Micro servers; only official Morse Micro / Seeed Studio download sources may ever be linked here. -->

**Restablecimiento de fábrica.** Devuelve el dispositivo a la **configuración de Router con un Punto de acceso Wi-Fi HaLow** predeterminada (verde fijo):

1. Enciende. Espera hasta que el LED de estado esté fijo (verde o aguamarina).
2. **Mantén pulsado el botón Mode hasta que el LED de estado parpadee lentamente en verde y luego suéltalo.** (Si lo mantienes hasta aguamarina rápida, entra en modo Extensor).
3. El LED parpadea brevemente en amarillo y luego pasa a **verde fijo** = listo. Inicia sesión de nuevo en `https://192.168.12.1` con las credenciales de la etiqueta.

**Recuperación.** Si se pierde la alimentación durante una actualización, el firmware puede corromperse: entonces el LED de estado permanece **amarillo fijo** y el dispositivo no arranca con normalidad. La recuperación se realiza a través del bootloader: sigue con atención la sección "Recovering From Failed Updates" de la [Guía de usuario de HaLowLink](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) oficial y contacta con el soporte de Seeed antes de intentarlo.

<!-- Requires Verification (internal): the full bootloader recovery procedure (User Guide §14.1: hold Mode while powering on → yellow + 5 white blinks → release → static IP 192.168.12.2/24 on the PC → http://192.168.12.1 → upload firmware → 10+ min LED sequence) is deliberately NOT published as executable steps until it has been reproduced on Seeed retail hardware. The previous full transcription is kept in D:\SeeedWiki\notes\halowlink2\old-drafts\. -->

## Preguntas frecuentes

### ¿Qué es Wi-Fi HaLow?

Wi-Fi HaLow (IEEE 802.11ah) es Wi-Fi en la banda sub-1 GHz, diseñada para largo alcance y bajo consumo. En el HaLowLink 2: hasta 1 km en línea de vista, mejor penetración de obstáculos que el Wi-Fi de 2,4 GHz, con menores velocidades de datos por enlace.

### ¿Necesito dos dispositivos HaLowLink 2?

Una unidad es suficiente para añadir un punto de acceso Wi‑Fi HaLow para clientes compatibles con HaLow (por ejemplo, nodos basados en Wio-WM6108 / Wio-WM6180). Dos unidades conectan dispositivos **no HaLow** — teléfonos, portátiles, equipos Ethernet — a través de un enlace de largo alcance: un punto de acceso y un extensor.

### ¿Cuál es la dirección de gestión y el inicio de sesión predeterminados?

`https://192.168.12.1` (solo HTTPS; la advertencia de certificado en la primera visita es esperada), con el nombre de usuario y la contraseña impresos en la etiqueta del dispositivo. En modo Extender el dispositivo no es accesible en esta dirección.

### ¿Cuál es la diferencia entre el modo Access Point y el modo Extender?

**Access Point** (verde fijo): aloja la red HaLow, se conecta a tu router, interfaz web completa. **Extender** (aguamarina fija): un cliente HaLow que extiende la red del AP mediante Ethernet, USB-C y su propio Wi‑Fi de 2,4 GHz; no tiene interfaz web propia una vez emparejado. Cambia al modo Extender con el botón Mode; un restablecimiento de fábrica devuelve la unidad al modo Access Point.

### ¿Puede un smartphone normal conectarse directamente a Wi‑Fi HaLow?

No — los teléfonos de consumo no tienen radio 802.11ah por debajo de 1 GHz. Usa un segundo HaLowLink 2 como **Extender**: vuelve a emitir el enlace como un punto de acceso Wi‑Fi normal de 2,4 GHz (credenciales en su propia etiqueta) y en sus puertos Ethernet/USB-C.

### ¿Son 43,3 Mbps el rendimiento real?

No — es la **velocidad PHY (de capa física)** máxima de la radio MM8108 a 8 MHz de ancho de banda. El rendimiento real es menor y depende del ancho de banda, la distancia, la calidad de la señal y las interferencias. Mide tu propio enlace con las [herramientas de diagnóstico / prueba de alcance](#ssh-y-diagnostics).

### ¿Puedo cambiar la región de funcionamiento?

No. El dispositivo está certificado para la región en la que se vendió (EE. UU., Canadá, Australia, Reino Unido, Europa, Japón); las bandas, canales y límites de potencia de transmisión se ajustan a ella. Cambiar o eludir la región no es compatible y violaría la normativa de radio.

<!-- Requires Verification (internal): confirm with Morse Micro whether any region-selection mechanism exists in retail firmware at all before expanding this answer. -->

## Solución de problemas

| Síntoma | Comprobación | Solución |
|:----|:----|:----|
| **No se puede acceder a la interfaz web** en `https://192.168.12.1` | ¿Color del LED de estado? ¿Ordenador en **LAN o USB-C** (no en WAN)? ¿El ordenador tiene una dirección `192.168.12.x` (cliente DHCP)? | Aguamarina fija = modo Extender — esperado; gestiona la red desde el AP o realiza un [restablecimiento de fábrica](#firmware-update-and-factory-reset) para salir del modo Extender. Verde fijo pero inalcanzable: [restablecimiento de fábrica](#firmware-update-and-factory-reset). Bloqueado tras un cambio de configuración: usa la [IP de diagnóstico](#advanced-settings) `10.22.121.111`. |
| **Los dispositivos no pueden emparejarse** (los LED HaLow parpadean rápidamente) | ¿Ambos botones *pulsados y soltados inmediatamente* (no mantenidos)? ¿AP en verde fijo, Extender en aguamarina fija? ¿Dispositivos dentro del alcance? | Parpadeo rápido = el **retraso de reintento de 120 segundos** — espera hasta que se detenga en ambas unidades y luego vuelve a emparejar. Modo AP cambiado después del emparejamiento: apaga y enciende el Extender (cambio de Network Mode) o repite el [emparejamiento](#pair-the-devices) (cambio de HaLow Mode). |
| **Sin dirección IP** en un cliente conectado | ¿En qué modo está el dispositivo? ¿Quién ejecuta DHCP? (Consulta la [tabla comparativa](#network-configuration).) | Modo Router: el dispositivo sirve `192.168.12.x`. Modo Access Point: tu **router principal** asigna las IP — revisa su tabla de concesiones; los clientes *no* aparecen en la tarjeta Local Network del dispositivo. Clientes del Extender: servidos a través de la red del AP — apaga y enciende el Extender si se reconfiguró el AP. |
| **Conectado pero sin Internet** | Página de inicio del AP: ¿**Uplink (Ethernet)** muestra una IP? ¿Puerto WAN conectado al router? | Primero corrige el enlace ascendente WAN. Si Internet solo se degrada mientras un ordenador está conectado por cable a un Extender/AP: tu sistema operativo prefiere el enlace por cable — ajusta la prioridad/métrica de la ruta para que tu conexión habitual mantenga la ruta predeterminada. |
| **Bajo rendimiento** en el enlace HaLow | Intensidad de la señal (tarjeta Connected Devices), gráficos en tiempo real, análisis de canal; distancia y obstáculos; configuración de ancho de banda | Reposiciona o reorienta los dispositivos; elige un canal menos saturado; revisa la configuración de ancho de banda. Cada salto adicional de malla reduce a la mitad el rendimiento. En Range Test, ~40 Mbps UDP + más de 900 Mbps TCP = el tráfico fue por **Ethernet**, no por HaLow. Un LED HaLow parpadeando rápidamente de forma constante = **bucle de red** — elimina cualquier segundo cable entre ambos lados. |

Para cualquier cosa no cubierta aquí: actualiza primero el firmware y luego prueba un restablecimiento de fábrica. Para informar de un problema, abre **Help → Support → Create Archive** en la interfaz web y conserva el archivo para soporte. Más detalles: la [Guía de usuario de HaLowLink](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) oficial.

<!-- Requires Verification (internal): reproduce each troubleshooting row on retail hardware and record the firmware version. Full 11-entry Symptom/Checks/Resolution/Verification version is kept in D:\SeeedWiki\notes\halowlink2\old-drafts\ for reference. -->

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
