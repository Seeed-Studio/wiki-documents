---
description: reSpeaker Clip es una grabadora de IA portátil y abierta con captación de audio de 360 grados, pantalla OLED de estado, retroalimentación por vibración, conectividad BLE y Wi‑Fi, y firmware abierto y compatibilidad con SDK para transcripción, notas con IA, resúmenes de reuniones y aplicaciones empresariales de voz con IA.
title: Introducción a reSpeaker Clip
keywords:
  - reSpeaker
  - Grabadora de IA
  - SenseCraft Voice
  - Grabadora de IA portátil
  - Voz a texto
  - Resumen con LLM
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip
sku: 100020126
last_update:
  date: 6/30/2026
  author: Ray
createdAt: '2026-06-30'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/es/respeaker_clip/
---

# Introducción a reSpeaker Clip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

reSpeaker Clip es una grabadora de IA portátil y abierta diseñada para comercio minorista, reuniones, entrevistas, aulas, formación en servicios y otros escenarios que requieren grabación de voz de alta calidad y organización posterior del contenido. Integra micrófonos PDM duales para captación omnidireccional de 360 grados hasta 3 metros, grabación independiente, gestión de archivos en el móvil, transcripción con IA y resumen con IA, ayudando a los usuarios a completar el flujo de trabajo completo desde la grabación in situ hasta el contenido estructurado.

reSpeaker Clip también está diseñada como un hardware abierto y un producto amigable para desarrolladores. Proporciona firmware de código abierto, una aplicación de demostración y compatibilidad con SDK, lo que permite a los desarrolladores personalizar el comportamiento del dispositivo y los flujos de trabajo de la aplicación. Las empresas también pueden integrarlo con sistemas internos de oficina, LLM implementados de forma privada o canalizaciones de análisis de voz para crear aplicaciones de voz con IA que cumplan sus requisitos de seguridad de datos.

reSpeaker Clip funciona con la aplicación SenseCraft Voice y servicios en la nube, y también puede integrarse con modelos de IA locales o en la nube. A través de la aplicación, los usuarios pueden emparejar el dispositivo, gestionar grabaciones, exportar archivos, transcribir audio, generar resúmenes con IA, personalizar plantillas y realizar recuperación de preguntas y respuestas.

:::note
Este documento es un borrador inicial de la Wiki para reSpeaker Clip. Algunas URL del SDK, documentos de protocolo y enlaces a paquetes de recursos se añadirán después de que se confirmen los materiales del producto.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>

## Descripción del producto

reSpeaker Clip está posicionada como una grabadora de IA portátil y abierta. No solo puede utilizarse como un dispositivo de grabación portátil, sino también como un punto de entrada de datos de voz para formación en servicios empresariales, registros de entrevistas, actas de reuniones y revisión de comunicaciones in situ.

El dispositivo utiliza un factor de forma compacto y portátil e incluye 2 GB de almacenamiento interno, lo que le permite grabar de forma independiente sin depender de un teléfono. También incorpora una pantalla OLED programable de 0,5 pulgadas y retroalimentación por vibración, ayudando a los usuarios a comprobar rápidamente el estado de la grabación, marcar segmentos importantes y cambiar entre flujos de trabajo de grabación mediante la pantalla, el botón y la retroalimentación háptica.

### Características clave

- **Captación de 360 grados, hasta 3 metros**: Los micrófonos PDM duales de alto rendimiento admiten captación omnidireccional para reuniones, entrevistas, conversaciones en comercios y otros escenarios con múltiples interlocutores.
- **Flujos de trabajo de grabación duales**: Selecciona el comportamiento de grabación adecuado según el entorno, desde notas diarias portátiles hasta reuniones de varias personas.
- **Grabación independiente y almacenamiento local**: El almacenamiento integrado de 2 GB permite que el dispositivo funcione como una grabadora independiente incluso cuando el teléfono no está cerca.
- **Pantalla OLED y retroalimentación por vibración**: La pantalla OLED de 0,5 pulgadas muestra el estado del dispositivo, mientras que la retroalimentación por vibración hace que el control de la grabación sea más intuitivo.
- **Firmware abierto y SDK**: Los desarrolladores pueden personalizar el comportamiento del dispositivo, la lógica de los botones, el contenido de la pantalla y los flujos de trabajo del lado de la aplicación.
- **Transcripción y resumen con IA**: Utiliza modelos de IA en la nube o locales para conversión de voz a texto, notas con IA, actas de reuniones y preguntas y respuestas por voz.
- **Listo para integración empresarial**: Conéctalo a sistemas empresariales internos o LLM implementados de forma privada para flujos de trabajo que requieren seguridad de datos y personalización.

### Especificaciones

Esta sección resume las especificaciones relacionadas con hardware, audio, parámetros físicos y batería de reSpeaker Clip.

#### Especificaciones de hardware

| Especificación | Detalles |
| --- | --- |
| Control principal | nRF5340+nRF7002 |
| Pantalla | OLED de 0,5 pulgadas 88*48 |
| Micrófono | PDM dual, hasta 16 kHz de frecuencia de muestreo |
| Salida de audio | Audio con reducción de ruido |
| Conectividad | Bluetooth (BLE 5.3),<br />Wi‑Fi (para exportación de audio de alta velocidad) |
| Almacenamiento interno | 2 GB (almacena aprox. 250+ horas<br />de audio comprimido) |
| Autonomía de la batería | 14‑18 horas de grabación continua |
| Interacción | Botón de acción, motor de vibración |
| Interfaz de carga | Magnética de 4 pines |

#### Parámetros de audio

| Elemento | Parámetro |
| --- | --- |
| Micrófono | Micrófonos PDM duales |
| Frecuencia de muestreo | Hasta 16 kHz |
| Dirección de captación | Captación omnidireccional de 360 grados |
| Alcance de captación | Hasta 3 metros |
| Salida de audio | Audio mono con reducción de ruido |
| Formato de audio comprimido | Opus mono, 32 kbps |
| Almacenamiento de audio | 2 GB almacenan aprox. 250+ horas de audio comprimido |
| Tiempo de grabación continua | 14‑18 horas |

#### Parámetros físicos

| Elemento | Parámetro |
| --- | --- |
| Pantalla | OLED de 0,5 pulgadas 88*48 |
| Almacenamiento interno | 2 GB |
| Interacción | Botón de acción, motor de vibración |
| Método de carga | Base de carga magnética |
| Interfaz de carga | Magnética de 4 pines |
| Entrada de alimentación de la base de carga | USB‑C |
| Métodos de uso | Fijación magnética, clip de solapa, cordón para el cuello |
| Nota sobre temperatura | Evita el uso en temperaturas extremas de -20 °C a 60 °C |

### Escenarios objetivo

- Grabación de servicio minorista y revisión de formación
- Grabación de audio de larga duración para reuniones, entrevistas y clases
- Comunicación con clientes, visitas comerciales, inspección de calidad de servicio y otros escenarios empresariales
- Flujos de trabajo que necesitan convertir contenido de voz en texto estructurado y resúmenes

### Capacidades principales

- Micrófonos PDM duales con captación de 360 grados
- Grabación independiente
- 2 GB de almacenamiento interno
- Pantalla de estado OLED de 0,5 pulgadas
- Retroalimentación por vibración
- Conectividad BLE y Wi‑Fi
- Transcripción de audio con IA
- Resumen con IA y extracción estructurada
- Múltiples métodos de uso
- Gestión de archivos desde el móvil
- Compatibilidad con la aplicación y el servicio en la nube SenseCraft Voice
- Firmware de código abierto, aplicación de demostración y compatibilidad con SDK

### Descripción general del hardware

reSpeaker Clip utiliza un factor de forma portátil con clip. La parte superior integra una pantalla OLED, micrófonos duales y un botón de acción. La parte inferior y la base de carga incluyen contactos de carga magnéticos. La base de carga se alimenta mediante USB‑C, lo que facilita cambiar entre carga en escritorio y grabación portátil.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_hardware_cropped.jpg" alt="reSpeaker Clip hardware overview" width={680} height="auto" /></p>

### Contenido del paquete

<div style={{width: '100%', overflowX: 'auto'}}>
  <table style={{display: 'table', width: '680px', maxWidth: '100%', margin: '0 auto'}}>
    <thead>
      <tr>
        <th>Elemento</th>
        <th style={{textAlign: 'center'}}>Cantidad</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dispositivo reSpeaker Clip</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Dispositivo de grabación portátil</td>
      </tr>
      <tr>
        <td>Clip de solapa magnético</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para fijar el dispositivo a la ropa</td>
      </tr>
      <tr>
        <td>Parche magnético</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para fijación magnética</td>
      </tr>
      <tr>
        <td>Base de carga</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para cargar el dispositivo</td>
      </tr>
      <tr>
        <td>Cable Type‑C de 0,5 m</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para alimentar la base de carga</td>
      </tr>
      <tr>
        <td>Cordón para el cuello</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para colgar al cuello</td>
      </tr>
    </tbody>
  </table>
</div>

## Inicio rápido

Esta sección presenta el flujo de trabajo básico desde la preparación del dispositivo y la conexión de la aplicación hasta la grabación y el resumen con IA. Para el primer uso, sigue los pasos en orden.

### Preparación del dispositivo

1. Coloca reSpeaker Clip en la base de carga.
2. Utiliza un cable Type‑C para conectar la base de carga a un adaptador de corriente o a un puerto USB de un ordenador.
3. Espera a que el dispositivo se cargue.
4. Mantén pulsado el botón de encendido para encender el dispositivo.
5. Selecciona el método de uso según tu caso de uso.

### Métodos de uso

reSpeaker Clip admite tres métodos de uso: fijación magnética, clip de solapa y cordón para el cuello. Elige el método más adecuado para reuniones, entrevistas, formación en servicios o grabación en movimiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_wearing_methods.jpg" alt="reSpeaker Clip wearing methods" width={640} height="auto" /></p>

### Aplicación SenseCraft Voice

#### Descargar la aplicación

Escanea el código QR siguiente con tu teléfono, o abre la [página de descarga de la aplicación SenseCraft Voice](https://sensecraft-voice-download.seeed.cc/) para descargar e instalar la aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_download_qr.png" alt="SenseCraft Voice App download QR code" width={360} height="auto" /></p>

#### Conectar el dispositivo

1. Abre la aplicación SenseCraft Voice e inicia sesión.
2. Mantén pulsado el botón lateral del dispositivo para encenderlo y, a continuación, espera hasta que el dispositivo esté listo para conectarse.
3. Toca **Add Device** en la página de inicio de la aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_add_device.jpg" alt="Tap Add Device" width={320} height="auto" /></p>

4. La aplicación busca automáticamente dispositivos cercanos. Haz coincidir el identificador que se muestra en el dispositivo con el nombre del dispositivo que se muestra en la aplicación, como `Clip EAE0`. Después de confirmar que los nombres coinciden, toca **Connect** para el dispositivo correspondiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_scan_device.jpg" alt="Selecciona y conéctate al dispositivo reSpeaker Clip correspondiente" width={320} height="auto" /></p>

5. Cuando aparezca la solicitud de emparejamiento Bluetooth en tu teléfono, vuelve a confirmar el nombre y toca **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_pair_device.jpg" alt="Confirm the Bluetooth pairing request" width={320} height="auto" /></p>

6. Después de completar el emparejamiento, sigue las instrucciones de la app para finalizar la configuración restante.

:::tip
Si la app no puede encontrar el dispositivo, primero confirma que el dispositivo esté encendido y tenga suficiente batería. Si la batería está baja, carga el dispositivo antes de emparejarlo de nuevo. Asegúrate también de que el dispositivo esté en estado de emparejamiento Bluetooth, acerca el teléfono al dispositivo y vuelve a escanear.
:::

### Operaciones de grabación

reSpeaker Clip puede controlar rápidamente la grabación mediante el botón lateral.

- Mantén presionado el botón para iniciar o detener la grabación.
- Durante la grabación, pulsa brevemente el botón una vez para marcar el segmento actual como importante.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_recording_operation.png" alt="reSpeaker Clip recording operations" width={640} height="auto" /></p>

Durante la grabación, el dispositivo utiliza la pantalla y la retroalimentación por vibración para indicar el estado actual.

### Gestión de archivos

Después de grabar, puedes gestionar los archivos de audio en la SenseCraft Voice App.

- Reproducir grabaciones
- Recortar audio
- Transferir archivos mediante Wi-Fi o BLE
- Exportar resultados de audio o texto
- Ver segmentos importantes marcados

### Funciones de IA

reSpeaker Clip puede trabajar con la SenseCraft Voice App y servicios en la nube para el procesamiento inteligente de audio.

#### Confirmar la configuración de los servicios STT / LLM

Antes de usar transcripción de audio, resumen con IA o recuperación de preguntas y respuestas, abre la página **AI CONFIG** en la parte inferior de la app y confirma que tanto **STT Service** como **LLM Service** estén configurados. El servicio STT se utiliza para la transcripción de audio, mientras que el servicio LLM se utiliza para la generación de resúmenes y el procesamiento de preguntas y respuestas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_ai_config_stt.jpg" alt="Confirm STT Service configuration" width={320} height="auto" /></p>

Si **STT Service** muestra `Not configured`, toca la entrada de configuración en el lado derecho de STT Service para entrar en la página de STT Providers. Rellena Provider, Base URL, API Key y Language de acuerdo con el servicio de transcripción que utilices. Toca **Test Connection** y, después de que la prueba sea exitosa, toca **Save Configuration**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_stt_provider_form.png" alt="Fill in and save STT service configuration" width={320} height="auto" /></p>

Si **LLM Service** muestra `Not configured`, continúa a la página de LLM Providers y toca **Add New Configuration** o el botón `+` en la esquina superior derecha para añadir una nueva configuración de servicio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_add.jpg" alt="Add LLM service configuration" width={320} height="auto" /></p>

Después de rellenar API Key, Base URL y Model Name, toca **Test Connection**. Después de que la prueba sea exitosa, toca **Save Configuration**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_form.png" alt="Fill in and save LLM service configuration" width={320} height="auto" /></p>

#### Transcripción de audio

Después de subir o sincronizar una grabación, toca la grabación que quieras procesar en la lista de archivos para entrar en la página de detalles de la grabación. Si la grabación aún no tiene transcripción, la página muestra un botón **Transcribe & Summarize**. Tócalo para entrar en la página de configuración de transcripción y resumen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_entry.png" alt="Open a recording and tap Transcribe & Summarize" width={320} height="auto" /></p>

#### Resumen con IA

En la página **Transcribe & Summarize**, puedes seleccionar una plantilla de resumen y confirmar Audio Language, STT Model y LLM Model. La plantilla controla la estructura de la salida del resumen, como resumen de reunión, resumen de clase o resumen de conversación diaria. Después de confirmar la configuración, toca **Generate Now** para iniciar la transcripción y el resumen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_summary_options.png" alt="Select a template and start transcription and summarization" width={320} height="auto" /></p>

#### Recuperación de preguntas y respuestas con IA

Los usuarios pueden realizar recuperación de preguntas y respuestas basada en la transcripción de la grabación, como consultar tareas, puntos de tiempo, problemas de producto o comentarios de clientes mencionados en una reunión.

### Gestión del dispositivo

En la app, puedes ver y gestionar el estado del dispositivo.

- Monitorización de la batería
- Comprobación de la versión de firmware
- Actualización OTA
- Desvinculación del dispositivo
- Restablecimiento de fábrica

### Guía de actualización de firmware

reSpeaker Clip admite dos métodos de actualización de firmware que no requieren un programador de depuración:

1. **Bluetooth OTA**: Envía el paquete de firmware al dispositivo mediante BLE. Es adecuado para actualizaciones diarias.
2. **Flasheo en modo Recovery**: Pon el dispositivo en modo de recuperación serie USB y transfiere el paquete de firmware a través de un puerto serie USB.

Ambos métodos utilizan el protocolo Simple Management Protocol (SMP) de MCUboot mcumgr. Bluetooth OTA utiliza transporte BLE, mientras que el flasheo en modo Recovery utiliza transporte serie USB CDC-ACM. reSpeaker Clip no utiliza flujos nativos de USB DFU como `dfu-util`.

#### Tipos de archivos de firmware

Las versiones de firmware pueden incluir los siguientes archivos:

| File Type | Description | Usage |
| --- | --- | --- |
| `clip-<version>-*-single.*` | Paquete de actualización de una sola partición de aplicación, adecuado para actualizar solo la partición Clip SDK / app | USB serial DFU |
| `clip-<version>-*-signed.bin` | Imagen de firmware de aplicación firmada | USB serial DFU, BLE OTA |
| `clip-<version>-*-ota.zip` | Paquete de actualización multi-imagen, normalmente incluye app y núcleo de red | USB serial DFU, BLE OTA |
| `clip-<version>-*-merged.hex` | Imagen completa que incluye MCUboot, app y núcleo de red | Requiere un depurador como J-Link |
| `clip-<version>-*-merged_CPUNET.hex` | Solo imagen del núcleo de red | Requiere un depurador como J-Link |

Para actualizaciones regulares por Bluetooth OTA, utiliza primero `-ota.zip`. Para flasheo de desarrollador mediante el modo Recovery, da preferencia a los paquetes de firmware con el sufijo `single`. Los cambios típicos del Clip SDK solo afectan a la partición de la aplicación y no requieren actualizar el núcleo de red. `-merged.hex` y `-merged_CPUNET.hex` se utilizan principalmente para desarrollo, producción o flasheo basado en depurador.

#### Método 1: Bluetooth OTA

Bluetooth OTA es adecuado cuando el dispositivo puede arrancar normalmente y puede ser descubierto por un teléfono mediante BLE. Se recomienda usar la app móvil nRF Connect para OTA. La herramienta BLE en nRF Connect for Desktop normalmente requiere un adaptador BLE adicional de Nordic.

Flujo de trabajo básico:

1. Prepara el paquete de firmware `clip-<version>-*-ota.zip`.
2. Envía el paquete de firmware a tu teléfono.
3. Abre nRF Connect en tu teléfono.
4. Busca y conéctate a reSpeaker Clip mediante BLE.
5. Después de la conexión, confirma que **SMP Service** sea visible.
6. Toca el icono **DFU** en la esquina superior derecha y selecciona el paquete de firmware `-ota.zip` o `-signed.bin`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_dfu_button.png" alt="Tap the DFU button in mobile nRF Connect" width={320} height="auto" /></p>

7. Mantén el modo predeterminado **Test and Confirm** y toca **OK** para iniciar la actualización.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_mode.png" alt="Select Test and Confirm for Bluetooth OTA" width={320} height="auto" /></p>

8. Espera a que se completen la transferencia, la verificación y el reinicio automático del dispositivo.
9. Vuelve a conectarte al dispositivo y comprueba la versión de firmware.

:::tip
Durante la OTA, mantén el teléfono cerca del dispositivo, no envíes nRF Connect a segundo plano y asegúrate de que el dispositivo no esté conectado a la SenseCraft Voice App al mismo tiempo.
:::

#### Método 2: Flasheo en modo Recovery

El modo Recovery es un modo de flasheo USB orientado a desarrolladores. Transfiere firmware a través de un puerto serie USB CDC-ACM utilizando el protocolo MCUboot / mcumgr SMP. Se recomienda usar el flujo de trabajo de línea de comandos `nrfutil mcu-manager`.

##### Entrar en modo Recovery

El modo Recovery proporciona capacidad de flasheo mediante la recuperación serie USB de MCUboot. Para entrar en él:

1. Confirma que el cable USB admite transferencia de datos.
2. Conecta el cable USB a la base de carga.
3. Coloca reSpeaker Clip sobre la base de carga y gira suavemente el dispositivo para que los contactos de carga queden firmemente conectados.
4. Después de que la pantalla muestre el icono de USB / carga, mantén presionado el **Action Button** hasta que la pantalla muestre **Recovery Mode**.
5. Cuando se muestre **Recovery Mode**, el dispositivo habrá entrado correctamente en el modo de recuperación serie USB y debería enumerarse como un puerto serie:
   - Windows: `COMx`
   - macOS: `/dev/cu.usbmodem*`
   - Linux: `/dev/ttyACM0`

En Windows, el dispositivo puede enumerar múltiples puertos serie virtuales, por ejemplo:

```text
Product         reSpeaker Clip DFU
Ports           COM10, vcom: 0
                COM11, vcom: 1
Traits          serialPorts, usb
```

Para el flasheo, prueba primero el puerto serie correspondiente a `vcom: 1`, como `COM11` en el ejemplo anterior. Si la conexión o la carga fallan, prueba con el otro puerto serie.

:::note
El modo Recovery requiere detección USB/VBUS. Antes de entrar en este modo, asegúrate de que los contactos de la base de carga estén firmemente conectados. Si la pantalla no muestra un icono de USB / carga, es posible que el dispositivo esté físicamente colocado en la base pero no esté realmente conectado por USB.
:::

##### Flashear con nrfutil mcu-manager

nrfutil es la herramienta de línea de comandos de Nordic. Usa la versión 8.x o posterior e instala el plugin `mcu-manager`.

Las versiones más recientes de nrfutil utilizan un mecanismo de subcomandos mediante plugins. Para el primer uso, instala los subcomandos `device` y `mcu-manager`:

```bash
nrfutil install device
nrfutil install mcu-manager
```

Si `nrfutil device list` informa `nrfutil command device not found`, el subcomando `device` no se ha instalado. Ejecuta primero `nrfutil install device`.

Lista los dispositivos serie actuales:

```bash
nrfutil device list
```

Sube el firmware de la partición de la aplicación. Da preferencia al paquete de firmware con el sufijo `single`:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-single.zip \
    --serial-port COMx
```

Si el paquete de lanzamiento proporciona una imagen de aplicación firmada, también puedes subir `-signed.bin`:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-signed.bin \
    --serial-port COMx
```

Para una actualización completa de app + núcleo de red, sube `-ota.zip`:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-ota.zip \
    --serial-port COMx
```

Después de subir, reinicia el dispositivo para aplicar el nuevo firmware:

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

Sustituye `COMx` por el puerto serie real que se muestra en el Administrador de dispositivos de Windows o en `nrfutil device list`. Si el dispositivo muestra varios puertos `vcom`, prueba primero el puerto correspondiente a `vcom: 1`. Si la conexión o la carga falla, cambia al otro puerto y vuelve a intentarlo. En macOS / Linux, usa `/dev/cu.usbmodem*` o `/dev/ttyACM0`.

:::tip
Si el progreso de flasheo se queda en 100% y la herramienta no sale automáticamente, no desconectes y vuelvas a conectar el dispositivo repetidamente. Ejecuta:

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

Luego comprueba la versión del firmware después de que el dispositivo se reinicie.
:::

#### Más métodos de actualización de firmware

Para flasheo basado en depurador o más métodos de solución de problemas en modo Recovery, consulta la Guía avanzada de actualización de firmware de reSpeaker Clip (próximamente).

## Guía de desarrollo

Para escenarios de integración de desarrolladores y empresas, reSpeaker Clip se puede ampliar mediante el SDK de firmware, el SDK de aplicaciones y los protocolos de comunicación.

### SDK de firmware

El firmware de reSpeaker Clip está construido sobre nRF Connect SDK / Zephyr RTOS y se ejecuta en la plataforma nRF5340 + nRF7002. No es un ejemplo de controlador único, sino un framework del lado del dispositivo organizado en torno a la captura de audio, la máquina de estados, la comunicación BLE / Wi-Fi, la gestión de archivos, la actualización de firmware y la gestión de bajo consumo.

Arquitectura del sistema de firmware:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_system_architecture.png" alt="Arquitectura del sistema de firmware de reSpeaker Clip" width={900} height="auto" /></p>

Desde la perspectiva del desarrollo, el firmware se divide principalmente en las siguientes capas:

- **Capa de aplicación**: Gestiona la distribución de eventos, el servidor AT, el procesamiento de botones y los estados de interacción con el usuario.
- **Capa de servicio**: Gestiona la abstracción del transporte BLE / UDP, la transferencia de archivos, la gestión de configuración y el almacenamiento NVS.
- **Capa de procesamiento**: Gestiona la captura de audio, la reducción de ruido / procesamiento de rango dinámico SpeexDSP y la codificación Opus.
- **Capa de abstracción de hardware**: Encapsula el micrófono PDM, SD FAT32, BLE, Wi-Fi, PMIC y otras capacidades de hardware.
- **Kernel Zephyr RTOS**: Proporciona primitivas de kernel como `k_msgq`, `k_sem`, `k_mutex`, `k_thread` y `k_mem_slab`.

Un flujo de trabajo de desarrollo típico es: configurar el entorno Zephyr / nRF Connect SDK, obtener el proyecto de firmware de reSpeaker Clip, confirmar la tarjeta objetivo y los archivos de configuración, compilar y flashear el firmware, comprobar los registros serie y, por último, verificar la grabación, la sincronización de archivos y la actualización de firmware a través de la app SenseCraft Voice o de los protocolos BLE / Wi-Fi.

Ve a la documentación del SDK de firmware para los siguientes pasos:

- [Primeros pasos con el SDK de firmware de reSpeaker Clip](/es/respeaker_clip_firmware_quick_start/) cubre la configuración del entorno, compilación, flasheo y pruebas básicas.
- [Guía de desarrollo de firmware de reSpeaker Clip](/es/respeaker_clip_firmware_development_guide/) explica la arquitectura del firmware, el protocolo de comunicación, las rutas de actualización y recuperación, la validación y la publicación en producción.
- [Personalización: añadir un comando AT personalizado](/es/respeaker_clip_customization_at_command/) muestra cómo añadir y validar un nuevo comando AT, incluyendo un prompt de IA que utiliza la Skill de firmware del repositorio.

### SDK de aplicaciones

El SDK de aplicaciones se puede utilizar para la integración de apps móviles o aplicaciones del lado del host.

| Plataforma | Lenguaje | Estado |
| --- | --- | --- |
| iOS | Swift | Próximamente |
| Android | Kotlin | Próximamente |
| Escritorio / Servidor | Python | [Disponible](/es/respeaker_clip_basic_sdk_guide) |

## Aplicaciones

reSpeaker Clip se puede utilizar en escenarios de negocio To B e integrarse con cadenas de herramientas empresariales, formando un flujo de trabajo completo desde la captura y transcripción de audio hasta el resumen inteligente y el archivado en sistemas de negocio.

### Formación en servicios de retail

El personal de ventas y servicio de retail puede llevar reSpeaker Clip para grabar conversaciones con clientes. Después de la conversación, la IA puede generar resúmenes de los requisitos del cliente y listas de tareas accionables a partir de la grabación, ayudando a los equipos a mejorar la calidad del servicio, la eficiencia del seguimiento y las tasas de conversión.

### Actas de reuniones

En escenarios de reuniones, la captación omnidireccional de 360 grados de reSpeaker Clip puede cubrir discusiones de varias personas. Los usuarios pueden marcar momentos importantes con el botón durante la grabación y generar automáticamente actas estructuradas, puntos destacados y elementos de acción después de la reunión.

### Entrevistas e investigación

Para entrevistas de usuarios, estudios de mercado y visitas a clientes, reSpeaker Clip ayuda a capturar datos de voz en bruto y a organizar las grabaciones en materiales de texto que se pueden buscar y revisar.

### Personalización empresarial

Las empresas pueden utilizar el SDK abierto para integrar reSpeaker Clip con sistemas internos de oficina, CRM, bases de conocimiento, herramientas de gestión de proyectos o LLM desplegados de forma privada. Las organizaciones con requisitos de cumplimiento de datos también pueden crear asistentes de voz de IA dedicados y flujos de trabajo privados de analítica de voz.

## Elige la guía adecuada de reSpeaker Clip

La documentación de reSpeaker Clip está organizada por capa de desarrollo. Comienza con **Getting Started** para la configuración del producto y los flujos de trabajo normales. Usa el **Basic SDK** cuando una aplicación host necesite controlar el dispositivo o descargar grabaciones. Continúa con **Service Integration** cuando un servicio de larga duración necesite poseer la conexión del dispositivo y exponer APIs. Usa el **Firmware SDK** solo cuando necesites cambiar el comportamiento del lado del dispositivo, los protocolos o el procesamiento de audio.

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <a [LINE_125]      href="/es/respeaker_clip/"
      aria-label="Open the reSpeaker Clip Getting Started guide"
      aria-current="page"
      className="card shadow--md respeaker-clip-nav-card respeaker-clip-nav-card--active"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
      >
    <img
      src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_getting_started.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
        />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
      <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Getting Started</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Descripción general del producto, configuración de hardware y flujos de trabajo de primer uso.</p>
        </div>
      </a>
    </div>

  <div className="col col--6 margin-bottom--lg">
  <a [LINE_145]      href="/es/respeaker_clip_basic_sdk_guide/"
    aria-label="Open the reSpeaker Clip Basic SDK guide"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
      >
      <img
    src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_basic_sdk.png"
      alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
        />
        <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
      <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Basic SDK</h3>
      <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Controla el dispositivo, gestiona las grabaciones y descarga audio sin cambiar el firmware.</p>
        </div>
        </a>
      </div>

  <div className="col col--6 margin-bottom--lg">
    <a [LINE_164]      href="/es/respeaker_clip_service_integration/"
  aria-label="Open the reSpeaker Clip Service Integration guide"
    className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
      >
      <img
      src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_service_integration.png"
    alt=""
      style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
        />
        <div style={{position: 'absolute', top: '50%', right: '4%', left: '54%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Service Integration</h3>
      <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Añade reSpeaker Clip a un servicio Python de larga duración mediante un adaptador y rutas de API.</p>
      </div>
        </a>
        </div>

    <div className="col col--6 margin-bottom--lg">
  <a [LINE_183]      href="/es/respeaker_clip_firmware_quick_start/"
      aria-label="Open the reSpeaker Clip Firmware SDK quick start"
  className="card shadow--md respeaker-clip-nav-card"
    style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
      >
      <img
      src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_firmware_sdk.png"
      alt=""
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_firmware_sdk.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>SDK de firmware</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Compila, flashea, depura y personaliza el comportamiento del dispositivo.</p>
      </div>
    </a>
  </div>
</div>

## Preguntas y respuestas

### No se puede encender / cargar

Si el dispositivo no se puede encender o cargar, comprueba lo siguiente:

- Confirma que el dispositivo está correctamente colocado en la base de carga y que los contactos magnéticos no están desalineados.
- Comprueba si el cable USB-C y el adaptador de corriente funcionan correctamente.
- Limpia los contactos magnéticos de carga en la parte inferior del dispositivo y en la base de carga para evitar que el polvo u objetos extraños afecten al contacto.
- Carga durante 10 minutos y, a continuación, mantén pulsado de nuevo el botón de encendido.
- Si el dispositivo sigue sin responder, registra el estado del dispositivo y ponte en contacto con el soporte técnico.

### Error al emparejar por Bluetooth

Si el teléfono no puede emparejarse con reSpeaker Clip, prueba lo siguiente:

- Confirma que el dispositivo está encendido y no está conectado a otro teléfono.
- Activa los permisos de Bluetooth en tu teléfono y permite que la app SenseCraft Voice use Bluetooth.
- Acerca el teléfono al dispositivo y vuelve a escanear.
- Elimina los registros antiguos de emparejamiento de reSpeaker Clip de la lista de Bluetooth del sistema del teléfono y vuelve a emparejar.
- Reinicia el dispositivo y la app, y vuelve a intentarlo.

### Transferencia de archivo de grabación interrumpida

Si se interrumpe la transferencia de un archivo de grabación, comprueba lo siguiente:

- Mantén el teléfono y el dispositivo cerca el uno del otro.
- Confirma que el dispositivo tiene suficiente batería.
- Comprueba si la conectividad Wi-Fi o BLE es estable.
- Mantén la app ejecutándose en primer plano.
- Vuelve a conectar el dispositivo y transfiere el archivo de nuevo. Para archivos grandes, utiliza un entorno Wi-Fi estable.

### Error en la provisión de Wi-Fi

Si el dispositivo no puede completar la provisión de Wi-Fi, confirma lo siguiente:

- El nombre y la contraseña de la red Wi-Fi son correctos.
- El router no bloquea nuevos dispositivos.
- El teléfono y el dispositivo están cerca del router.
- La red actual puede acceder a Internet con normalidad.
- Si utilizas una red corporativa o una red pública que requiere autenticación web, cambia a una red doméstica normal o al hotspot del teléfono para hacer la prueba.

### La app no puede encontrar el dispositivo

Si la app SenseCraft Voice no puede encontrar el dispositivo, prueba lo siguiente:

- Confirma que el dispositivo está encendido y listo para conectarse.
- Confirma que se han concedido a la app los permisos de Bluetooth, ubicación o dispositivos cercanos.
- Acerca el teléfono al dispositivo y vuelve a escanear.
- Cierra y vuelve a abrir la app.
- Reinicia reSpeaker Clip y añade el dispositivo de nuevo.

### Error en la actualización de firmware

Si falla la actualización OTA o de firmware, prueba lo siguiente:

- Asegúrate de que el dispositivo tiene suficiente batería y no lo apagues durante la actualización.
- Mantén estables la conexión entre el teléfono, el dispositivo y la red.
- No cierres la app ni cambies de red durante la actualización.
- Si el dispositivo aún puede arrancar con normalidad después de que falle la actualización, abre la app e inicia la actualización de nuevo.
- Si el dispositivo no puede arrancar con normalidad, sigue la documentación posterior sobre modo de recuperación o flasheo de firmware y ponte en contacto con el soporte técnico.

## Recursos

| Recurso | Enlace |
| --- | --- |
| Página del producto | [reSpeaker Clip Wearable AI Recorder](https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html) |
| Descarga de la app SenseCraft Voice | [Página de descarga](https://sensecraft-voice-download.seeed.cc/) |
| Descarga de firmware | Próximamente |
| Documentación del SDK de firmware | [Introducción al SDK de firmware](/es/respeaker_clip_firmware_quick_start) |
| Repositorio del SDK | [GitHub de reSpeaker Clip](https://github.com/Seeed-Studio/reSpeaker_Clip) |
| Manual de usuario | <a href="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_user_manual.pdf" target="_blank" rel="noopener noreferrer">Manual de usuario de reSpeaker Clip</a> |
| Hoja de datos | Próximamente |
| Dibujo mecánico | Próximamente |

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
