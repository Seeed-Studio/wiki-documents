---
description: "Primeros pasos con el OpenDisplay 4.26\" Mono Kit: una pantalla de papel electrónico BLE lista para usar, desarrollada conjuntamente por Seeed Studio y OpenDisplay"
title: Primeros pasos con OpenDisplay 4.26" Mono Kit
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.webp
slug: /opendisplay_426_mono_kit
sku: 100036064
last_update:
  date: 10/22/2026
  author: Nemo
createdAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/opendisplay_426_mono_kit/
updatedAt: '2026-10-22'
---

# Primeros pasos con OpenDisplay 4.26" Mono Kit

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.webp" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OpenDisplay-4-26-Mono-Kit-p-7032.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El OpenDisplay 4.26" Mono Kit es una pantalla de papel electrónico lista para usar, desarrollada conjuntamente por Seeed Studio y OpenDisplay. Se envía **totalmente ensamblado** con un panel en blanco y negro de 4,26 pulgadas y 800×480, una placa Seeed [XIAO ePaper Display Board EN05](https://wiki.seeedstudio.com/es/epaper_en05/) (XIAO nRF52840 Plus), una batería de 2000 mAh y una carcasa impresa en 3D, con el firmware ya instalado.

Úsalo mediante **Bluetooth Low Energy** desde tu navegador o Home Assistant. No se requiere Wi‑Fi. La radio permanece en un modo de escucha de bajo consumo, por lo que puedes enviar una nueva imagen siempre que la pantalla esté encendida y dentro del alcance. La actualización parcial está disponible en modo blanco y negro. Con aproximadamente una actualización cada 15 minutos, se estima hasta **dos años** entre cargas.

### Lo que necesitas

- El kit, encendido y dentro del alcance de Bluetooth
- Un teléfono u ordenador con Bluetooth
- Chrome o Edge (escritorio/Android), o Bluefy en iPhone/iPad

## De un vistazo

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>MCU</th>
      <td>Seeed <a href="https://wiki.seeedstudio.com/es/epaper_en05/">XIAO ePaper Display Board EN05</a> (XIAO nRF52840 Plus)</td>
    </tr>
    <tr>
      <th>Pantalla</th>
      <td>Papel electrónico monocromo de 4,26 pulgadas</td>
    </tr>
    <tr>
      <th>Colores</th>
      <td>Blanco y negro (predeterminado); 4 niveles de gris opcionales</td>
    </tr>
    <tr>
      <th>Actualización parcial</th>
      <td>Compatible solo en modo blanco y negro</td>
    </tr>
    <tr>
      <th>Resolución</th>
      <td>800 × 480</td>
    </tr>
    <tr>
      <th>Batería</th>
      <td>Batería recargable de ion‑litio de 2000 mAh</td>
    </tr>
    <tr>
      <th>Conectividad</th>
      <td>Solo Bluetooth Low Energy (sin Wi‑Fi)</td>
    </tr>
    <tr>
      <th>Carcasa</th>
      <td>Incluye carcasa impresa en 3D</td>
    </tr>
  </tbody>
</table>

## Encendido

1. Desempaqueta el kit y enciéndelo.
2. Espera a la actualización de arranque; normalmente **unos pocos segundos** para blanco y negro. El parpadeo es normal.
3. Cuando termine, la pantalla de arranque muestra el nombre de tu dispositivo (empieza por **OD**), **KEY1:** / **KEY2:** y un código QR.

El cifrado viene **desactivado**, por lo que las líneas de clave muestran **not set**. No necesitas una clave para el uso normal recién sacado de la caja.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.png" style={{width:800, height:'auto'}}/></div>

## Envía tu primera imagen

Escanea el código QR en la pantalla. Se abrirá una página personalizada en [opendisplay.org](https://opendisplay.org/l/) con accesos directos para este dispositivo:

<table>
  <thead>
    <tr>
      <th>Acceso directo</th>
      <th>Qué hace</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Send an image</th>
      <td>Abre el BLE Tester para enviar una imagen de prueba desde tu navegador</td>
    </tr>
    <tr>
      <th>Add to Home Assistant</th>
      <td>Inicia la adición del dispositivo a Home Assistant</td>
    </tr>
    <tr>
      <th>Advanced → Toolbox</th>
      <td>Cambiar ajustes o volver a flashear el firmware (desarrolladores / recuperación)</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Landing_page.png" style={{width:600, height:'auto'}}/></div>

### Compatibilidad del navegador

<table>
  <thead>
    <tr>
      <th>Navegador</th>
      <th>Compatibilidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome o Edge (escritorio, Android)</th>
      <td>Compatible</td>
    </tr>
    <tr>
      <th>iPhone / iPad</th>
      <td>Usa Bluefy (App Store id1492822055)</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>No compatible</td>
    </tr>
  </tbody>
</table>

Desde la página de destino, elige **Send an image** (o abre [opendisplay.org](https://opendisplay.org/firmware/display/index.html)). Haz clic en **Connect**, selecciona tu dispositivo en la lista del navegador (el nombre empieza por **OD**, por ejemplo **OD592B4A**), luego elige una foto o dibuja y toca **Send to device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/BLE_Tester.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Browser_Bluetooth_pairing.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/BLE_Tester_connected.png" style={{width:600, height:'auto'}}/></div>

:::note
El BLE Tester puede etiquetar el panel como 4.3"; el nombre del producto del kit es 4.26" Mono Kit.
:::

**Terminado cuando: la imagen aparece en la pantalla de papel electrónico.**

## Home Assistant (opcional)

Este kit usa **solo BLE**. Home Assistant necesita una ruta Bluetooth funcional:

- **Bluetooth en el host de Home Assistant**: adaptador integrado o dongle USB
- **Proxy Bluetooth ESPHome**: si la pantalla está lejos del host de HA (debe admitir conexiones activas / conectables)

:::note
Los proxies Shelly BLE **no son compatibles**: no pueden establecer la conexión activa que esta pantalla necesita. Usa un adaptador local o un proxy ESPHome.
:::

Enciende la pantalla dentro del alcance de Bluetooth. Home Assistant debería descubrirla automáticamente; busca un nombre que empiece por **OD** en **Settings → Devices & Services → Discovered**, luego toca **Add** y **Submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_1.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_2.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_3.png" style={{width:600, height:'auto'}}/></div>

La página del dispositivo muestra la batería, los botones, el estado del firmware y el contenido de la pantalla. Más detalles: [Home Assistant integration](https://github.com/OpenDisplay/Home_Assistant_Integration)

## Ir más allá

### Activar el cifrado

El cifrado viene **desactivado**. En Toolbox → More options, establece Encryption en **Locked** y luego **Configure over Bluetooth**. Tras el reinicio, la clave aparece en **KEY1:** / **KEY2:** y en la página de destino del QR. Apaga y enciende de nuevo la pantalla para mostrar la clave otra vez si la pierdes.

### Volver a flashear o recuperar

1. Abre Toolbox — preset 4.26" Mono Kit: [Toolbox](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-426-mono-kit)
2. **Install firmware (USB)**: Chrome o Edge en un ordenador de escritorio/portátil
3. **Configure over Bluetooth**: vuelve a escribir la configuración después de flashear

### py-opendisplay

Para proyectos personalizados en Python, instala con pip install py-opendisplay — [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)

### Duración de la batería

Con la batería incluida de 2000 mAh y aproximadamente una actualización cada 15 minutos, se estima hasta **dos años** entre cargas en un uso típico. El tiempo de funcionamiento real depende de la frecuencia de actualización, el tamaño de la imagen, el uso de la actualización parcial y la temperatura.

Modela tu programación en la [Battery calculator](https://opendisplay.org/firmware/battery/index.html) (selecciona 4.26" Mono Kit / nRF52840 / 2000 mAh).

## Recursos

- **[Web]** [Sitio web de OpenDisplay](https://opendisplay.org)
- **[Tool]** [Toolbox (preset 4.26" Mono Kit)](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-426-mono-kit)
- **[Tool]** [BLE Tester](https://opendisplay.org/firmware/display/index.html)
- **[Tool]** [Battery calculator](https://opendisplay.org/firmware/battery/index.html)
- **[GitHub]** [OpenDisplay Firmware](https://github.com/OpenDisplay/Firmware)
- **[GitHub]** [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)
- **[GitHub]** [Home Assistant Integration](https://github.com/OpenDisplay/Home_Assistant_Integration)
- **[Discord]** [OpenDisplay Discord](https://discord.gg/XmTHz8RfJE)
- **[Wiki]** [Guía detallada de OpenDisplay](https://wiki.seeedstudio.com/es/EN04_opendisplay/)
- **[ZIP]** [Archivos de la carcasa impresa en 3D](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Resources/OpenDisplay_4.26_Mono_Kit_3D_Files.zip)
- **[UF2]** [Firmware de fábrica (4.26" Mono Kit)](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Resources/OpenDisplay_4.26_Mono_Kit_Factory_Firmware.uf2)

## Solución de problemas

**P1: Necesito de nuevo la pantalla de arranque o el código QR.**

*   **Apaga y enciende la pantalla**: Apaga, espera 10 segundos y vuelve a encender. La pantalla de arranque — con el nombre del dispositivo, las líneas KEY1:/KEY2: y el código QR — solo aparece después de una actualización completa al encender.
*   **Espera a que termine la actualización**: Una actualización de arranque monocroma suele tardar unos segundos. El parpadeo y los patrones grises intermedios son normales. No apagues la pantalla durante la actualización.
*   **Escanea de nuevo el código QR** o lee KEY1:/KEY2: directamente de la pantalla si necesitas la clave de cifrado.
*   **No es necesario volver a flashear ni reconfigurar**: la pantalla de arranque siempre reaparece después de un ciclo de encendido.
*   **Nota**: La pantalla solo permite una conexión Bluetooth activa a la vez. Si otro dispositivo sigue conectado, desconéctalo primero.

**P2: La pantalla no se enciende o no responde.**

*   **Primero, cárgala por USB**: Una batería muy baja puede hacer que el dispositivo parezca muerto o bloqueado. Conecta el kit a una fuente de alimentación USB, cárgalo un rato y vuelve a intentarlo.
*   **Después de cargar**: Apaga, espera 10 segundos, enciende y espera la pantalla de arranque.
*   **Confirma que el interruptor de encendido está activado**: Desliza el interruptor firmemente a la posición ON.
*   **Comprueba el conector de la batería**: Abre la carcasa y confirma que el conector JST de la batería está completamente insertado. El cable rojo debe mirar hacia la marca "+", y el cable negro debe mirar hacia la marca "−". Un conector invertido puede dañar la placa.
*   **Asegúrate de que ningún otro dispositivo mantenga una conexión BLE abierta**: la pantalla solo admite una conexión activa a la vez.

**P3: Home Assistant no detecta la pantalla.**

*   **Comprueba la versión de la integración**: Home Assistant 2026.4 y posteriores incluyen la integración OpenDisplay incorporada. Para versiones anteriores o el flujo de trabajo drawcustom, instala la integración personalizada de HACS (copia la carpeta `opendisplay` en `custom_components/`), luego reinicia Home Assistant.
*   **Desconecta primero otros clientes Bluetooth**: Cierra BLE Tester, pestañas del navegador y Bluefy: la pantalla solo permite una conexión BLE activa a la vez. Si otro dispositivo está conectado, Home Assistant no podrá descubrirla ni conectarse.
*   **Comprueba la ruta de Bluetooth**: Usa un adaptador Bluetooth integrado o USB en el host de Home Assistant, o un proxy Bluetooth de ESPHome que admita conexiones activas / conectables. Los proxies Shelly BLE no son compatibles: no pueden establecer la conexión activa que esta pantalla necesita.
*   **¿Sigue sin aparecer?** Espera un minuto, acerca la pantalla y revisa en Settings → Devices & Services → Discovered si hay un nombre que empiece por "OD".
*   **Añadir manualmente**: Si la pantalla no se descubre automáticamente, ve a Settings → Devices & Services, haz clic en Add Integration, busca "OpenDisplay" y sigue el flujo de configuración.

**P4: Mi navegador no puede encontrar o conectarse a la pantalla.**

*   **Usa un navegador compatible**: Web Bluetooth funciona en Chrome y Edge (escritorio y Android). En iPhone o iPad, usa el navegador Bluefy (id de App Store 1492822055). Firefox y Safari (escritorio) no admiten Web Bluetooth.
*   **Activa el Bluetooth**: Asegúrate de que Bluetooth esté activado en tu teléfono u ordenador. En Android, activa también Location: Chrome lo necesita para el escaneo BLE.
*   **Mantén el dispositivo cerca del kit**.
*   **Desconecta primero todos los demás clientes**: La pantalla solo permite una conexión BLE activa. Si Home Assistant u otro navegador ya está conectado, desconéctalo antes de intentarlo de nuevo.
*   **Elige el nombre de dispositivo que empiece por "OD"** (por ejemplo, OD592B4A).
*   **Si no aparece**: Pulsa un botón en la pantalla una vez, o apágala y enciéndela (apagado 10 segundos → encendido) y vuelve a intentarlo después de que termine la actualización de arranque.
*   **Si nada responde**: Carga primero el kit por USB.

**P5: La carga de la imagen falla o se agota el tiempo de espera.**

*   **Confirma que la pantalla está encendida y dentro del alcance**: El kit permanece listo para BLE sin ventana de activación de deep-sleep, pero debe estar encendido y dentro del alcance de Bluetooth.
*   **Desconecta todos los demás clientes**: Solo una conexión BLE activa a la vez. Vuelve a conectar solo desde BLE Tester e inténtalo de nuevo.
*   **Si el cifrado está activado**: Introduce la clave de la pantalla de arranque o de la página de destino del QR.
*   **Prueba con una imagen más pequeña**, o espera a que se complete la actualización completa antes de enviar la siguiente.
*   **El dispositivo dejó de responder a mitad de la sesión**: Carga por USB y luego apágalo y enciéndelo (apagado 10 segundos → encendido).

**P6: La clave de cifrado se rechaza o muestra "not set".**

*   **Los kits de fábrica se envían con el cifrado desactivado**: KEY1: y KEY2: muestran "not set" de fábrica: deja el campo de clave en blanco.
*   **¿Activaste el cifrado pero perdiste la clave?** Apaga y enciende la pantalla (apagado 10 segundos → encendido): la clave aparece en la pantalla de arranque después del reinicio. También puedes escanear el código QR; la página de destino muestra la misma clave.
*   **Perdiste la clave y no puedes leer la pantalla**: Abre Toolbox → establece Encryption en Unlocked → Configure over Bluetooth. Esto elimina el cifrado para que puedas configurarlo de nuevo. Si eso no funciona, vuelve a flashear el firmware y reconfigura.

**P7: La pantalla parece bloqueada, muestra artefactos o permanece en blanco después de un envío.**

*   **Espera a que termine la actualización**: No apagues la pantalla a mitad de la actualización. Una actualización completa en blanco y negro tarda unos segundos.
*   **La actualización parcial es solo en blanco y negro**: La actualización parcial funciona en modo monocromo. Si estás usando el modo opcional de 4 grises, la actualización parcial no es compatible: usa siempre la actualización completa para evitar imágenes fantasma o píxeles atascados.
*   **Apaga durante 10 segundos → enciende** para volver a la pantalla de arranque y luego confirma que BLE responde.
*   **Comprueba si hay otros dispositivos conectados**: Si otro dispositivo está conectado al mismo tiempo, desconéctalo y vuelve a intentarlo con un solo cliente.
*   **¿Aún no arranca ni se conecta?** Carga primero por USB y luego vuelve a apagar y encender.
*   **Vuelve a flashear el firmware**: Si la pantalla sigue bloqueada o en blanco después de todo lo anterior, vuelve a flashear por USB usando Toolbox (consulta "Reflash or recover" en la sección Going further).

## Soporte técnico y debate sobre el producto

*Desarrollado conjuntamente por Seeed Studio y OpenDisplay.*

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
