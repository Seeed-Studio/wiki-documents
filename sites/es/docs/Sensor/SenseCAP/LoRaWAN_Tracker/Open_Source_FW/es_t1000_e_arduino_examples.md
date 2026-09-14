---
description: Ejemplos de Arduino para la guía de usuario del T1000-E
title: Comenzar con Arduino
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/tracker-t1000-e-for-meshtastic.webp
slug: /t1000_e_arduino_examples
sidebar_position: 4
last_update:
  date: 9/1/2026
  author: Advent Jiang
createdAt: '2025-09-03'
updatedAt: '2026-02-04'
url: https://wiki.seeedstudio.com/es/t1000_e_arduino_examples/
---


:::caution note
Antes de flashear el firmware, asegúrese de que su dispositivo sea la versión `T1000-E for LoRaWAN` y por favor no flashee otro firmware de Meshtastic o MeshCore a este modelo de tracker, ya que puede causar que el dispositivo quede completamente inoperativo.
:::

Los siguientes ejemplos de Arduino están disponibles:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Ejemplo</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>Blinky</td>
      <td>Parpadeo de LED - Controla pines GPIO para hacer parpadear un LED, usado para pruebas de función e indicación de estado.</td>
    </tr>
    <tr>
      <td>Button</td>
      <td>Imprimir evento de botón - Detecta cambios de estado del botón e imprime información del evento para interacción del usuario.</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>Reproducir sonido en bucle - Controla un buzzer para producir sonidos para recordatorios o alarmas.</td>
    </tr>
    <tr>
      <td>Sensor</td>
      <td>Imprimir valor de temp/lux/batería - Lee e imprime datos de temperatura, intensidad de luz y voltaje de batería.</td>
    </tr>
    <tr>
      <td>Accelerometer</td>
      <td>Imprimir valor de ax/ay/az/evento - Recopila datos de aceleración para detección de movimiento y reconocimiento de postura.</td>
    </tr>
    <tr>
      <td>GNSS</td>
      <td>Imprimir valor de latitud/longitud - Obtiene e imprime datos de ubicación basados en GNSS.</td>
    </tr>
    <tr>
      <td>LoRaWAN</td>
      <td>Unirse a través de OTAA, enviar datos de prueba a LNS - Se conecta a LoRaWAN y envía datos de prueba.</td>
    </tr>
    <tr>
      <td>LoRaWAN Sensor</td>
      <td>Unirse a través de OTAA, leer temp/lux/bat/ax/ay/az, enviar datos a LNS - Recopila y transmite varios datos de sensores vía LoRaWAN.</td>
    </tr>
    <tr>
      <td>LoRaWAN GNSS</td>
      <td>Unirse a través de OTAA, escanear lat/lon, enviar datos a LNS - Captura y transmite datos de ubicación GNSS en tiempo real.</td>
    </tr>
    <tr>
      <td>LoRaWAN WiFi</td>
      <td>Unirse a través de OTAA, escanear MAC WiFi, enviar datos a LNS - Escanea direcciones MAC WiFi y transmite datos para posicionamiento.</td>
    </tr>
    <tr>
      <td>LoRaWAN Beacon</td>
      <td>Unirse a través de OTAA, escanear MAC Beacon, enviar datos a LNS - Escanea y transmite datos MAC Beacon para seguimiento e identificación.</td>
    </tr>
  </table>
</div>

## Preparación

### Preparación de Hardware

- SenseCAP T1000-E x 1
- Cable USB x 1
- Computadora x 1

### Preparación de Software

Antes de poder comenzar a desarrollar, se requieren las siguientes herramientas de software.

Consulte aquí para [Comenzar con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).

:::tip
La versión debe ser más nueva que v1.6.12.
:::

## Comenzar

### Prerrequisitos

1. Agregar URL

Navegue a `File` -> `Preferences`, y agregue la siguiente URL a `Additional Boards Manager URLs`:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/add-url.png" alt="pir" width={800} height="auto" /></p>

2. Instalar Placa

Navegue a `Boards Manager`, busque `seeed nrf52`, seleccione la última versión e instálela.

### Construir un Ejemplo

1. Seleccionar placa y puerto

**Board**: Seeed Tracker T1000 E <br/>
**Port**: El puerto de su dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/board-select.png" alt="pir" width={800} height="auto" /></p>

2. construir ejemplo

Navegue a `File` -> `Examples` -> `Seeed Tracker T1000 E LoRaWAN`, luego abra un ejemplo de su elección (en este caso el ejemplo del acelerómetro):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

### Subir al dispositivo objetivo

Como el bootloader del T1000-E _solo_ soporta flasheo vía arrastrar y soltar `.uf2`, no es posible subir los ejemplos directamente vía el IDE de Arduino.
En su lugar, siga estos pasos:

1. Exporte el binario compilado desde el IDE de Arduino. Lo encontrará en la misma carpeta que el sketch `.ino`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. Convierta el archivo `.hex` en un archivo `.uf2`. Esto se hace usando un script de python que se puede descargar [aquí](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py). Descargue y ejecute el script con los siguientes parámetros desde una terminal:  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <your_hex_file>.hex`

3. Ponga el dispositivo en modo DFU presionando y manteniendo presionado el botón del dispositivo, luego conecte rápidamente el cable de carga dos veces, el LED verde se mantendrá encendido. Ahora debería encontrar el T1000-E como dispositivo de almacenamiento masivo.

:::danger note
Si no aparece ninguna ventana de controlador después de presionar y mantener presionado el botón del dispositivo al conectar el cable, por favor toque rápidamente dos veces el cable de carga como se muestra en la operación a continuación.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={400} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. Copie el archivo `.uf2` al almacenamiento masivo. Después de que haya sido copiado, el dispositivo automáticamente comienza a ejecutarlo.

## Leer mensajes seriales

Los mensajes del dispositivo que se imprimen usando `Serial.println` y `Serial.printf` se pueden leer usando el terminal integrado del IDE de Arduino.
Asegúrese de haber habilitado y seleccionado USB-CDC:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

Luego abra el monitor serial usando `Tools -> Serial Monitor` y comience a observar los mensajes:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## Ejemplos de LoRaWAN

Los ejemplos que incluyen mensajería LoRaWAN necesitan dos pasos adicionales.

### Configurar un LNS

Necesita un servidor de red LoRaWAN (LNS) donde su tracker pueda conectarse. En este ejemplo usamos The Things Network (TTN), pero cualquier otro debería funcionar bien.
Para trabajar con TTN, necesita tener una cuenta con The Things Industries o The Things Network y acceso a un gateway (ya sea uno público o el suyo propio si no hay ninguno disponible).

#### Paso 1: Crear una aplicación

Navegue a la página Applications y haga clic en "+ Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Ingrese un Application ID y haga clic en "Create application" para guardar sus cambios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Registrar el Dispositivo

Haga clic en "+ Register end device".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Configure los siguientes parámetros:

**Frequency Plan**: Seleccione el plan de frecuencia apropiado para la región objetivo  
**LoRaWAN version**: LoRaWAN Specification 1.0.4  
**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

Ahora, cree las credenciales para su dispositivo. Ya sea genere un nuevo conjunto o ingrese las existentes.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### Ajustar código de ejemplo

Para que funcione, configure las credenciales del paso anterior en el código de ejemplo. También especifique la región, por ejemplo `SMTC_MODEM_REGION_AS_923_GRP1`, `SMTC_MODEM_REGION_EU_868`, o `SMTC_MODEM_REGION_US_915`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

Si su región tiene restricciones de ciclo de trabajo, asegúrese de habilitar la limitación en el manejador de reinicio:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### Ejecutar código de ejemplo

Compile y flashee el ejemplo de LoRaWAN de la misma manera que se describe para los otros ejemplos (crear archivo `.uf2` y flashear vía arrastrar y soltar).
Después debería ver mensajes entrantes en la interfaz de TTN:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ Proyecto Colaborador

- Este proyecto está respaldado por el [Proyecto Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Un agradecimiento especial a [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144) por sus esfuerzos dedicados. Su trabajo será [exhibido](https://wiki.seeedstudio.com/es/contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
