---
description: Ejemplos de Arduino para la guía de usuario del T1000-E
title: Comenzar con Arduino
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/tracker-t1000-e-for-meshtastic.webp
slug: /es/t1000_e_arduino_examples
sidebar_position: 3
last_update:
  date: 03/24/2025
  author: Frederik Funk
---


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
      <td>Reproducir sonido en bucle - Controla un zumbador para producir sonidos para recordatorios o alarmas.</td>
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

Consulta aquí para [Comenzar con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).

:::tip
La versión debe ser más reciente que v1.6.12.
:::

## Comenzar

### Prerrequisitos

1. Agregar URL

Navega a `Archivo` -> `Preferencias`, y agrega la siguiente URL a `URLs adicionales del Gestor de Placas`:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/add-url.png" alt="pir" width={800} height="auto" /></p>

2. Instalar Placa

Navega a `Boards Manager`, busca `seeed nrf52`, selecciona la versión más reciente e instálala.

### Construyendo un Ejemplo

1. Seleccionar placa y puerto

**Placa**: Seeed Tracker T1000 E <br/>
**Puerto**: El puerto de tu dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/board-select.png" alt="pir" width={800} height="auto" /></p>

2. construir ejemplo

Navega a `File` -> `Examples` -> `Seeed Tracker T1000 E LoRaWAN`, Luego abre un ejemplo de tu elección (en este caso el ejemplo del acelerómetro):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

### Subiendo al dispositivo objetivo

Como el bootloader del T1000-E _solo_ soporta flasheo vía arrastrar y soltar `.uf2`, no es posible subir los ejemplos directamente vía el IDE de Arduino.
En su lugar, sigue estos pasos:

1. Exporta el binario compilado desde el IDE de Arduino. Lo encontrarás en la misma carpeta que el sketch `.ino`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. Convierte el archivo `.hex` en un archivo `.uf2`. Esto se hace usando un script de python que puede descargarse [aquí](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py). Descarga y ejecuta el script con los siguientes parámetros desde una terminal:  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <tu_archivo_hex>.hex`

3. Pon el dispositivo en modo DFU presionando y manteniendo el botón del dispositivo, luego conecta rápidamente el cable de carga dos veces, el LED verde estará encendido fijo. Ahora deberías encontrar el T1000-E como dispositivo de almacenamiento masivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. Copia el archivo `.uf2` al almacenamiento masivo. Después de que haya sido copiado, el dispositivo automáticamente comienza a ejecutarlo.

## Leyendo mensajes serie

Los mensajes del dispositivo que se imprimen usando `Serial.println` y `Serial.printf` pueden leerse usando el terminal integrado del IDE de Arduino.
Asegúrate de haber habilitado y seleccionado USB-CDC:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

Luego abre el monitor serie usando `Tools -> Serial Monitor` y comienza a observar los mensajes:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## Ejemplos LoRaWAN

Los ejemplos que incluyen mensajería LoRaWAN necesitan dos pasos adicionales.

### Configurar un LNS

Necesitas un servidor de red LoRaWAN (LNS) donde tu rastreador pueda conectarse. En este ejemplo usamos The Things Network (TTN), pero cualquier otro debería funcionar bien.
Para trabajar con TTN, necesitas tener una cuenta con The Things Industries o The Things Network y acceso a un gateway (ya sea uno público o el tuyo propio si no hay ninguno disponible).

#### Paso 1: Crear una aplicación

Navega a la página de Applications y haz clic en "+ Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Ingresa un Application ID y haz clic en "Create application" para guardar tus cambios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Registrar el Dispositivo

Haz clic en "+ Register end device".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Configura los siguientes parámetros:

**Frequency Plan**: Selecciona el plan de frecuencia apropiado para la región objetivo  
**LoRaWAN version**: LoRaWAN Specification 1.0.4  
**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

Ahora, crea las credenciales para tu dispositivo. Ya sea genera un nuevo conjunto o ingresa las existentes.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### Ajustar código de ejemplo

Para que funcione, configura las credenciales del paso anterior en el código de ejemplo. También especifica la región, por ejemplo `SMTC_MODEM_REGION_AS_923_GRP1`, `SMTC_MODEM_REGION_EU_868`, o `SMTC_MODEM_REGION_US_915`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

Si tu región tiene restricciones de ciclo de trabajo, asegúrate de habilitar la limitación en el manejador de reset:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### Ejecutando código de ejemplo

Compila y flashea el ejemplo LoRaWAN de la misma manera que se describe para los otros ejemplos (crear archivo `.uf2` y flashear vía arrastrar y soltar).
Después deberías ver mensajes entrantes en la interfaz de TTN:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ Proyecto de Colaboradores

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Un agradecimiento especial a [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144) por sus esfuerzos dedicados. Tu trabajo será [exhibido](https://wiki.seeedstudio.com/contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
