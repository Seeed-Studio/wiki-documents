---
description: Experimenta el poder del ReSpeaker XVF3800 USB 4-Mic Array—un arreglo de micrófonos circular avanzado con AEC, beamforming, supresión de ruido y captura de voz de 360°. Emparejado con el compacto XIAO ESP32S3, ofrece control de voz de alto rendimiento para dispositivos inteligentes, robótica y aplicaciones IoT. Únete a nosotros mientras demostramos la integración perfecta con Home Assistant para controlar dispositivos usando comandos de voz.

title: Control de Voz para Hogar Inteligente con Home Assistant

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Home Assistant
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /es/respeaker_xvf3800_xiao_home_assistant
last_update:
  date: 9/17/2025
  author: Kasun Thushara
---

## Descripción General

Habla con espacios inteligentes con el nuevo **ReSpeaker XMOS XVF3800 con XIAO ESP32S3** enciende las luces, sube el volumen de la música, o incluso pregunta sobre el clima usando la voz

En este capítulo usaremos el ReSpeaker XMOS XVF3800 con XIAO ESP32S3 HA Voice Assistant para conectar el interruptor inteligente Sonoff y realizar control de voz del interruptor de luz.

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/iqlsNezHYuE"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## Hardware Requerido

<table align="center">
  <tr>
      <th>ReSpeaker XVF3800 con XIAO ESP32S3</th>
        <th>Dispositivo Home Assistant</th>
        <th>Sonoff BASICR2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home_Assistant_Green/HAyellow.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991074-sonoff-basicr2-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## Actualización de Firmware

Para obtener la mejor experiencia de reproducción, necesitamos actualizar el firmware XMOS a
Descarga el firmware desde aquí. En tu computadora, conecta el ReSpeaker XMOS XVF3800 con XIAO ESP32S3 y ejecuta el en nuestra guía:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/firmware_1.png" alt="pir" width={800} height="auto" /></p>

:::note
El arreglo de micrófonos XVF3800 necesita un MCLK de 12.288 MHz para funcionar, pero ESPHome (usado en Home Assistant) no puede generarlo debido a limitaciones del API. Este firmware hace que el XVF3800 actúe como el maestro I2S en su lugar, para que pueda generar sus propios relojes sin necesitar MCLK del ESP32.
Nuestro firmware corrige esta limitación, por lo que el micrófono funciona correctamente con Home Assistant.
:::

Puedes descargar el Firmware desde [Aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)

La guía de instalación está [Aquí](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#update-firmware)

## Preparar ReSpeaker XMOS XVF3800 con XIAO ESP32S3

Ve a **Home Assistant > Configuración > Complementos**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>

Haz clic en **Tienda de Complementos** (generalmente en la parte inferior derecha)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

Bajo **Complementos oficiales**, busca e instala **ESPHome Device Builder**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>

Después de la instalación, haz clic en **Iniciar** para ejecutar el complemento ESPHome.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_Start.PNG" alt="pir" width={800} height="auto" /></p>

Habilita **Iniciar al arrancar, Watchdog y Mostrar en la barra lateral** para un acceso más fácil.

Desde la barra lateral de Home Assistant, ve a **ESPHome Builder**.

Haz clic en **+ NUEVO DISPOSITIVO**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

Cuando se te solicite, haz clic en **OMITIR** – crearemos la configuración manualmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

Selecciona tu nueva entrada de dispositivo y haz clic en **EDITAR**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

Reemplaza el contenido con tu **configuración YAML personalizada**

### Descripción YAML

#### WiFi

Esta sección configura cómo tu dispositivo se conecta a Wi-Fi.

```yml
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
```

- **ssid & password**: Tomados de tu archivo secrets.yaml para que tu contraseña no sea visible en texto plano.
- **Eventos**: Ejecuta acciones cuando Wi-Fi se conecta o desconecta:
  - on_connect:
    - Detiene la configuración BLE improv.
    - Ejecuta el script control_leds (efecto LED para Wi-Fi conectado).

  - on_disconnect:
    - Ejecuta el script control_leds (efecto LED para Wi-Fi desconectado).

#### Bus I²C

I²C es una línea de comunicación que permite a tu ESP32 hablar con otros chips como el micrófono o el códec de audio.

```yml
i2c:
  id: internal_i2c
  sda: GPIO5
  scl: GPIO6
  scan: true
  frequency: 100kHz
```

- **id**: Un nombre para referenciar este bus en otro lugar.
- **sda** / scl: Pines usados para datos y reloj.
- **scan**: Verifica dispositivos conectados al inicio.
- **frequency**: Velocidad de comunicación (100kHz es estándar).

#### Interruptores

```yml
switch:
  # Mute Sound Switch.
  - platform: template
    id: mute_sound
    name: Mute/unmute sound
    icon: "mdi:bullhorn"
    entity_category: config
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON
    ......
    ......
```

Los interruptores son "botones" controlados por software en Home Assistant. Controlan características como sonido, temporizadores o alarmas.

**Interruptor de Sonido de Palabra de Activación**: Controla el audio de la palabra de activación.

**Interruptor Interno de Timbre de Temporizador**:

- Rastrea si un temporizador está activo.
- on_turn_on: Reduce otro audio en -20dB, inicia sonido de temporizador, actualiza LED, se detiene automáticamente después de 15 min.
- on_turn_off: Detiene temporizador, restaura volumen, actualiza LED.

**Interruptor de Alarma Activada**:

- Rastrea el estado de la alarma.
- Ejecuta script LED cuando está encendido/apagado.

**Brillo del Anillo LED**:

- Permite al usuario ajustar el brillo con un deslizador.
- min_value / max_value definen límites.
- restore_value mantiene la configuración anterior después del reinicio.

#### Sensores

**Próximo Temporizador**

- Muestra el tiempo restante para el próximo temporizador.
- Se actualiza solo cuando un temporizador cambia (ahorra recursos).

**Hora de Alarma y Hora del Dispositivo**

- Muestra la alarma actual y la hora del sistema ESP32.

#### Efectos LED en intervalo

```yml
interval:
  - interval: 50ms
    id: led_animation_interval
    then:
      - lambda: |-
          if (id(volume_display_active)) {
            id(update_volume_display_effect).execute();
            return;
          }
          std::string effect = id(current_led_effect);
          if (effect == "off") {
            return;
          } else if (effect == "breathe") {
            id(update_breathe_effect).execute();
          } else if (effect == "rainbow") {
            id(update_rainbow_effect).execute();
          } else if (effect == "comet_cw") {
            id(update_comet_cw_effect).execute();
          } else if (effect == "comet_ccw") {
            id(update_comet_ccw_effect).execute();
          } else if (effect == "twinkle") {
            id(update_twinkle_effect).execute();
          } else if (effect == "timer_tick") {
            id(update_timer_tick_effect).execute();
          } else if (effect == "led_beam") {
            id(update_led_beam_effect).execute();
          }
```

- Los intervalos ejecutan código repetidamente en segundo plano.
- 50ms: Ejecuta código 20 veces por segundo.
- Controla animaciones LED basadas en el estado del sistema o efecto seleccionado.

#### Control LED

```yml
 # =========================================================================
  # == Centralized script to control all LED effects ==
  # =========================================================================
  - id: led_set_effect
    mode: restart
    parameters:
      effect: std::string
      r: float
      g: float
      b: float
      speed: float
    then:
      - lambda: |-
          // Update global variables with the new parameters
          id(led_ring_color_r) = r;
          id(led_ring_color_g) = g;
          id(led_ring_color_b) = b;
          id(led_ring_speed) = speed;
          id(current_led_effect) = effect;

          // Handle the two types of effects: Off and Animated
          if (effect == "off") {
            uint32_t colors[12] = {0};
            id(respeaker).set_led_ring(colors);
          } else {
            id(last_led_update_time) = millis(); // Reset timer for smooth animation start
          }

  # Individual update scripts for each animated effect
  - id: update_breathe_effect
    then:
      - lambda: |-
          static float phase = 0.0f;
          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          phase += dt * id(led_ring_speed);
          while (phase >= 1.0f) phase -= 1.0f;

          float master_brightness = id(led_ring_brightness).state;
          float breath_brightness = 0.5f * (1.0f + sinf(phase * 2.0f * M_PI)) * master_brightness;
    ......
    ......
```

**Controlador Central (led_set_effect)**

- Gestiona todos los efectos LED en un solo lugar.
- Puede establecer dinámicamente el tipo de efecto, color (R/G/B) y velocidad.
- Utiliza scripts de actualización para movimiento suave.
- El efecto apagado desactiva inmediatamente los LEDs.

**Scripts Individuales**

- Cada animación (respiración, arcoíris, cometa, parpadeo, tic de temporizador, visualización de volumen, haz LED) tiene su propio script.
- Hace que el sistema sea modular y fácil de mantener.
- Activado periódicamente por led_animation_interval o por el controlador central.

| Estado del Dispositivo  | Efecto LED             |
|------------------------|----------------------|
| Fallo de inicio        | Respiración roja      |
| Modo Improv BLE        | Parpadeo cálido       |
| Inicialización         | Parpadeo azul         |
| Sin conexión HA        | Parpadeo rojo         |
| Asistente de voz esperando          | Haz púrpura           |
| Asistente de voz escuchando         | Haz púrpura brillante |
| Asistente de voz pensando           | Respiración púrpura   |
| Asistente de voz respondiendo       | Cometa púrpura        |
| Error del asistente de voz          | Respiración roja      |
| Asistente de voz inactivo           | LEDs apagados         |
| Temporizador sonando   | Respiración púrpura rápida |
| Cambio de volumen      | Visualización temporal |

#### Configuración de Audio

```yml
i2s_audio:
  - id: i2s_output
    i2s_lrclk_pin: 
      number: GPIO7
      allow_other_uses: true
    i2s_bclk_pin:  
      number: GPIO8
      ...
      ...
```

**Entrada / Salida I²S**

- Maneja la entrada del micrófono y la salida del altavoz a través de I²S.
- i2s_input: Captura audio estéreo de 48kHz, 32 bits desde micrófono/códec.
- i2s_output: Reproduce audio estéreo de 48kHz, 32 bits al DAC/altavoz.

**Mezclador**

- Combina múltiples flujos de audio (medios + anuncios) en una salida.

**Remuestreadores**

- Asegura que todas las fuentes de audio coincidan en frecuencia de muestreo y profundidad de bits.

**Reproductor de Medios**

- Controla volumen, silencio, reproducción y ducking (reduce el volumen de medios durante anuncios).
- Sonidos precargados para eventos (temporizador, palabra de activación, errores).

#### Integración Respeaker XVF3800

```yml
respeaker_xvf3800:
  id: respeaker
  address: 0x2C
  mute_switch:
    id: mic_mute_switch
    name: "Microphone Mute"
    update_interval: 1s
    on_turn_on:
    ...
    ...
```

- dirección i2c: 0x2C
- ID: respeaker
- Interruptor de Silencio del Micrófono: Se actualiza cada 1 segundo, reproduce sonido al alternar.
- Reporte de Versión DFU: Reporta firmware cada 120s.
- Sensor de Dirección del Haz: Rastrea el haz de voz (solo interno).
- Gestión de Firmware: Auto-flashea firmware XVF3800 si es necesario.

#### Referencias / Repositorios

```yml
external_components:
  - source:
      type: git
      url: https://github.com/formatBCE/esphome
      ref: respeaker_microphone
    components:
      - i2s_audio
    refresh: 0s
  - source:
      type: git
      url: https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration
      ref: main
    components: 
      - respeaker_xvf3800
      - aic3104
    refresh: 0s

```

- formatBCE/esphome: Componente de audio I²S personalizado.
- formatBCE/Respeaker-XVF3800-ESPHome-integration:
- Controlador XVF3800
- Controlador de códec de audio AIC3104
- refresh: 0s: Siempre obtiene el código más reciente de los repositorios.

#### Micro Wake Word

```yml
micro_wake_word:
  id: mww
  microphone:
    microphone: i2s_mics
    channels: 1
    # gain_factor: 4
  stop_after_detection: false
  ....
  ....
```

Detecta tus palabras de activación (como "Okay Nabu") e inicia el asistente de voz.

- id: mww → Nombre de referencia.
- microphone: i2s_mics, 1 canal.
- stop_after_detection: false → Mantiene la escucha continua.
- okay_nabu, kenobi, hey_jarvis, hey_mycroft, stop (comando de parada interno; puedes agregar el tuyo).
- vad probability_cutoff: 0.05 → Sensibilidad del habla.

**En Detección (si el micrófono no está silenciado)**

- Detiene temporizadores, anuncios o asistente de voz si está activo.
- Reproduce sonido de activación (si está habilitado).
- Inicia el asistente de voz para comandos.

#### Asistente de Voz

```yml
voice_assistant:
  id: va
  microphone:
    microphone: i2s_mics
    channels: 0
  media_player: external_media_player
  micro_wake_word: mww
  use_wake_word: false
  noise_suppression_level: 0
  ....
  ....
```

Controla el comportamiento e interacciones de tu asistente de voz (VA).

- **Micrófono y medios**: Utiliza i2s_mics y un reproductor de medios externo.
- **Palabra de activación**: Vinculado a mww pero palabra de activación no requerida (use_wake_word: false).
- **Configuración de audio**: Supresión de ruido desactivada, ganancia automática 0 dB, volumen normal.

##### Eventos / Qué sucede

- **on_client_connected**: Inicia VA, actualiza LEDs, desactiva silencio del micrófono si es necesario.
- **on_client_disconnected**: Detiene VA, reinicia LEDs.
- **on_error: Muestra estado de error en LEDs**; reproduce sonido local si falla la autenticación en la nube.
- **on_start**: Reduce el volumen de medios (ducking) cuando inicia VA.
- **on_listening / on_stt_vad_start / on_stt_vad_end**: Actualiza la fase VA y LEDs durante escucha y pensamiento.
- **on_intent_progress / on_tts_start / on_tts_end**: Maneja el habla, actualiza LEDs, puede activar script de palabra de parada.
- **on_stt_end**: Envía evento de texto reconocido.
- **on_end**: Detiene VA, reinicia LEDs, termina ducking.

##### Eventos de temporizador

- on_timer_started / on_timer_updated / on_timer_cancelled / on_timer_finished / on_timer_tick:
  - Actualiza estados y nombres de temporizadores.
  - Actualiza LEDs.
  - Reduce actualizaciones de LED a cada 5 segundos para temporizador en funcionamiento.

:::important
Puedes encontrar el archivo YAML desde [Aquí](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration/tree/main/config)
:::

Una vez que tu YAML esté guardado, haz clic en **INSTALAR**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_yaml.PNG" alt="pir" width={800} height="auto" /></p>

Elige **Descarga Manual**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_manual.PNG" alt="pir" width={800} height="auto" /></p>

Espera a que el firmware se compile.

Descarga el archivo de firmware .bin generado a tu computadora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_factory.PNG" alt="pir" width={800} height="auto" /></p>

Conecta la placa **ESP32-S3** (con XVF3800 conectado) a tu PC usando un **cable USB Type-C**.

Abre [**Web-ESPHome**](https://web.esphome.io/?dashboard_wizard) en Chrome o Edge.

Haz clic en **CONECTAR** y elige el puerto serie apropiado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>

Una vez conectado, haz clic en **INSTALAR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_install.PNG" alt="pir" width={500} height="auto" /></p>

Selecciona el archivo .bin que acabas de descargar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_bin_write.PNG" alt="pir" width={500} height="auto" /></p>

Espera a que la instalación se complete (puede tomar unos minutos).

Después del éxito, verás un mensaje de confirmación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

Regresa a **Home Assistant > Configuración > Dispositivos y Servicios**.

Deberías ver **ESPHome** listado como una integración descubierta.

Haz clic en **CONFIGURAR**, luego **Enviar** para finalizar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_discover.PNG" alt="pir" width={800} height="auto" /></p>

## Agregar tu dispositivo inteligente

Configura el dispositivo **Sonoff BASICR2** según el manual del usuario del fabricante. Necesitarás crear una cuenta eWELink.

### Instalar HACS

Si no está ya instalado, sigue la guía oficial para configurar la [**Tienda de la Comunidad de Home Assistant**](https://hacs.xyz/docs/use/):

Abre **HACS** desde la barra lateral.
Busca **Sonoff LAN** en la sección de Búsqueda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_HACS.PNG" alt="pir" width={800} height="auto" /></p>

Haz clic en **Instalar** para agregar la integración.
Reinicia Home Assistant para aplicar los cambios.

### Sonoff

Navega a **Configuración → Dispositivos y Servicios**.
Haz clic en **Agregar Integración**.
Busca y selecciona **Sonoff**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_sonoff.PNG" alt="pir" width={800} height="auto" /></p>

Ingresa tus **credenciales de cuenta eWeLink** para autenticarte.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/credentials.png" alt="pir" width={500} height="auto" /></p>

Una vez conectado exitosamente, verás las entidades asociadas listadas bajo:
**Configuración → Dispositivos y Servicios → Entidades**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## Asistente de Voz con Nabu Cloud

En esta demostración, estamos mostrando cómo conectar con **Home Assistant Cloud (Nabu Casa)** usando voz. La configuración es simple, y puedes aprovechar una **prueba gratuita de un mes** para explorar todas sus capacidades.
Con la **palabra de activación** incorporada: "Okay Nabu", puedes activar comandos de voz sin esfuerzo e **integrarte perfectamente** con dispositivos y servicios **en cualquier lugar, en cualquier momento** — todo sin configuraciones complejas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

## Agradecimientos Especiales

Queremos agradecer a FormatBCE por crear este increíble archivo YAML para el Seeed Studio ReSpeaker XVF3800.
Apóyalo en su [GitHub](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration)

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
