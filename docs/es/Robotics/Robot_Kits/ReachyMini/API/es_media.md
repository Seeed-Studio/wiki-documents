---
description: Referencia completa de la API para el gestor de medios de Reachy Mini, incluyendo audio, cámara, utilidades y constantes para transmisión de video y audio.
title: Referencia de la API de Medios
slug: /es/reachymini_api_media
keywords:
- api
- media
- camera
- audio
- streaming
- webrtc
- gstreamer
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# Medios

## Gestor de Medios

### `reachy_mini.media.media_manager.MediaManager`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L56)**

Gestor de Medios para manejar dispositivos de cámara y audio.

Esta clase proporciona una interfaz unificada para gestionar tanto los dispositivos de cámara como de audio a través de diferentes backends. Se encarga de la inicialización, configuración y liberación de los recursos de medios.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L153)**

Cierra el gestor de medios y libera los recursos.

Este método debe llamarse cuando el gestor de medios ya no sea necesario para limpiar correctamente y liberar todos los recursos de medios. Detiene cualquier grabación/reproducción de audio en curso y cierra el dispositivo de cámara.

:::note

Después de llamar a este método, el gestor de medios puede reutilizarse llamando de nuevo a los métodos de inicialización apropiados, pero en general se recomienda crear una nueva instancia de MediaManager si es necesario.

:::

**Ejemplo:**

```python
media = MediaManager()
try:
    # Use media devices
    frame = media.get_frame()
finally:
    media.close()
```

---

#### `get_DoA`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L410)**

Obtiene la Dirección de Llegada (DoA) desde la matriz de micrófonos.

**Devuelve:**

| Type | Description |
|------|-------------|
| `tuple[float, bool] \| None` | Una tupla (angle_radians, speech_detected), o None si el sistema de audio no está disponible. |

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L313)**

Obtiene una muestra de audio desde el dispositivo de audio.

**Devuelve:**

| Type | Description |
|------|-------------|
| `Optional[np.ndarray]` | La muestra de audio grabada, o None si no hay datos disponibles. |

---

#### `get_frame`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L216)**

Obtiene un fotograma de la cámara.

:::note

Este método devuelve None si la cámara no está inicializada o si hay un error al capturar el fotograma. Comprueba siempre el valor devuelto antes de usar el fotograma.

:::

**Ejemplo:**

```python
frame = media.get_frame()
if frame is not None:
    # Process the frame
    cv2.imshow("Camera", frame)
    cv2.waitKey(1)

    # Convert to RGB if needed
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
```

**Devuelve:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | El fotograma BGR capturado como un array de numpy con forma (height, width, 3), o None si la cámara no está disponible o se produjo un error. La imagen está en formato BGR (convención de OpenCV) y puede utilizarse directamente con funciones de OpenCV o convertirse a RGB si es necesario. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L325)**

Obtiene la frecuencia de muestreo de entrada del dispositivo de audio.

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L339)**

Obtiene el número de canales de entrada del dispositivo de audio.

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L332)**

Obtiene la frecuencia de muestreo de salida del dispositivo de audio.

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L346)**

Obtiene el número de canales de salida del dispositivo de audio.

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L294)**

Reproduce un archivo de sonido.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `sound_file` | `str` | Ruta al archivo de sonido que se va a reproducir. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L367)**

Envía datos de audio al dispositivo de salida.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `data` | `npt.NDArray[np.float32]` | Los datos de audio que se enviarán al dispositivo de salida (formato mono). |

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L360)**

Inicia la reproducción de audio.

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L306)**

Inicia la grabación de audio.

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L403)**

Detiene la reproducción de audio.

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L353)**

Detiene la grabación de audio.

---

## Audio

### `reachy_mini.media.audio_base.AudioBase`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L25)**

Clase abstracta para abrir y gestionar dispositivos de audio.

Esta clase define la interfaz que deben seguir todas las implementaciones de audio. Proporciona parámetros de audio comunes y métodos para gestionar dispositivos de audio, incluyendo funcionalidad de entrada de micrófono y salida de altavoz.

### Métodos

#### `cleanup`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L64)**

Limpia los recursos antes de la destrucción.

Este método debe llamarse para liberar cualquier recurso retenido por la implementación de audio antes de que el objeto sea destruido.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `SAMPLE_RATE` | `int` | Frecuencia de muestreo predeterminada para operaciones de audio (16000 Hz). |
| `CHANNELS` | `int` | Número predeterminado de canales de audio (2 para estéreo). |
| `logger` | `logging.Logger` | Instancia de logger para mensajes relacionados con audio. |
| `_respeaker` | `Optional[ReSpeaker]` | Manejador del dispositivo de matriz de micrófonos ReSpeaker. |

---

#### `clear_output_buffer`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L210)**

Limpia el búfer de salida.

Este método vacía el búfer de salida para evitar que se reproduzcan muestras enviadas. Sobrescribir si es necesario. Parece que set_max_output_buffers con un valor bajo puede ser suficiente para el backend gstreamer.

---

#### `get_DoA`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L285)**

Obtiene el valor de la Dirección de Llegada (DoA) desde el dispositivo ReSpeaker.

El ángulo espacial se da en radianes:
- 0 radianes es izquierda
- π/2 radianes es frente/atrás
- π radianes es derecha

:::info

La matriz de micrófonos requiere la versión de firmware 2.1.0 o superior para admitir esta función. El firmware se encuentra en `src/reachy_mini/assets/firmware/*.bin`. Consulta https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#update-firmware para el proceso de actualización.

:::

**Devuelve:**

| Type | Description |
|------|-------------|
| `tuple` | Una tupla que contiene el valor DoA como float (radianes) y la detección de voz como bool, o None si no se encuentra el dispositivo. |

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L94)**

Lee datos de audio desde el dispositivo. Devuelve los datos o None si hay un error.

:::note

Este método debe llamarse después de que se haya llamado a `start_recording()`. La frecuencia de muestreo y el número de canales pueden obtenerse mediante `get_input_audio_samplerate()` y `get_input_channels()` respectivamente.

:::

**Ejemplo:**

```python
audio.start_recording()
samples = audio.get_audio_sample()
if samples is not None:
    print(f"Got {len(samples)} audio samples")
```

**Devuelve:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.float32]]` | Un array de numpy que contiene muestras de audio en formato float32, o None si no hay datos disponibles o se produjo un error. La forma del array suele ser (num_samples,) para mono o (num_samples, num_channels) para audio multicanal. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L121)**

Obtiene la frecuencia de muestreo de entrada del dispositivo de audio.

:::note

Este valor representa el número de muestras de audio capturadas por segundo para cada canal.

:::

**Devuelve:**

| Type | Description |
|------|-------------|
| `int` | La frecuencia de muestreo en Hz a la que se está capturando el audio. El valor predeterminado es 16000 Hz. |

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L149)**

Obtiene el número de canales de entrada del dispositivo de audio.

:::note

Para la matriz de micrófonos ReSpeaker, esto normalmente devuelve 2 canales que representan la configuración de micrófono estéreo.

:::

**Devuelve:**

| Type | Description |
|------|-------------|
| `int` | El número de canales de entrada de audio (por ejemplo, 1 para mono, 2 para estéreo). El valor predeterminado es 2 canales. |

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L135)**

Obtiene la frecuencia de muestreo de salida del dispositivo de audio.

:::note

Este valor representa el número de muestras de audio reproducidas por segundo para cada canal.

:::

**Devuelve:**

| Type | Description |
|------|-------------|
| `int` | La frecuencia de muestreo en Hz a la que se está reproduciendo el audio. El valor predeterminado es 16000 Hz. |

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L163)**

Obtiene el número de canales de salida del dispositivo de audio.

:::note

Esto determina cómo deben formatearse los datos de audio cuando se pasan al método `push_audio_sample()`.

:::

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `int` | El número de canales de salida de audio (por ejemplo, 1 para mono, 2 para estéreo). El valor predeterminado es 2 canales. |

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L263)**

Reproduce un archivo de sonido.

:::note

Este es un método de conveniencia que gestiona la reproducción completa de un archivo de sonido de principio a fin. Para tener más control sobre la reproducción de audio, utiliza los métodos `start_playing()`, `push_audio_sample()` y `stop_playing()`.

:::

**Ejemplo:**

```python
audio.play_sound("/path/to/sound.wav")
```

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `sound_file` | `str` | Ruta al archivo de sonido que se va a reproducir. Los formatos compatibles dependen de la implementación específica. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L230)**

Envía datos de audio al dispositivo de salida.

:::note

Este método debe llamarse después de haber llamado a `start_playing()`. Los datos de audio se reproducirán a la frecuencia de muestreo devuelta por `get_output_audio_samplerate()`.

:::

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `data` | `npt.NDArray[np.float32]` | Muestras de audio que se van a reproducir. El array debe contener valores float32 normalmente en el rango [-1.0, 1.0]. Para audio mono: la forma debe ser (num_samples,). Para audio estéreo: la forma debe ser (num_samples, 2). |

---

#### `set_max_output_buffers`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L220)**

Establece el número máximo de búferes de salida en cola en el reproductor.

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `max_buffers` | `int` | Número máximo de búferes que se pondrán en cola. |

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L191)**

Inicia la reproducción de audio.

Este método debe inicializar el sistema de reproducción de audio y prepararlo para recibir datos de audio mediante `push_audio_sample()`.

:::note

Las implementaciones deben gestionar toda la asignación de recursos necesaria y la comprobación de errores. Si no se puede iniciar la reproducción, las implementaciones deben registrar mensajes de error apropiados.

:::

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L74)**

Inicia la grabación de audio.

Este método debe inicializar el sistema de grabación de audio y prepararlo para capturar datos de audio. Después de llamar a este método, `get_audio_sample()` debe poder recuperar los datos de audio grabados.

:::note

Las implementaciones deben gestionar toda la asignación de recursos necesaria y la comprobación de errores. Si no se puede iniciar la grabación, las implementaciones deben registrar mensajes de error apropiados.

:::

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L249)**

Detiene la reproducción de audio y libera los recursos.

Este método debe detener cualquier reproducción de audio en curso y liberar todos los recursos asociados. Después de llamar a este método, las llamadas a `push_audio_sample()` no tendrán efecto hasta que se vuelva a llamar a `start_playing()`.

:::note

Las implementaciones deben garantizar una limpieza adecuada para evitar fugas de recursos.

:::

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L177)**

Cierra el dispositivo de audio y libera los recursos.

Este método debe detener cualquier grabación de audio en curso y liberar todos los recursos asociados. Después de llamar a este método, `get_audio_sample()` debe devolver None hasta que se vuelva a llamar a `start_recording()`.

:::note

Las implementaciones deben garantizar una limpieza adecuada para evitar fugas de recursos.

:::

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L76)**

Implementación de audio usando GStreamer.

### Métodos

#### `clear_player`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L398)**

Vacía el appsrc del reproductor para descartar inmediatamente cualquier audio en cola.

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L253)**

Lee una muestra de la tarjeta de audio. Devuelve la muestra o None si hay un error.

Consulta `AudioBase.get_audio_sample()` para la documentación completa.

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `Optional[npt.NDArray[np.float32]]` | La muestra capturada en formato bruto, o None si hay un error. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L267)**

Obtiene la frecuencia de muestreo de entrada del dispositivo de audio.

Consulta `AudioBase.get_input_audio_samplerate()` para la documentación completa.

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L281)**

Obtiene el número de canales de entrada del dispositivo de audio.

Consulta `AudioBase.get_input_channels()` para la documentación completa.

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L274)**

Obtiene la frecuencia de muestreo de salida del dispositivo de audio.

Consulta `AudioBase.get_output_audio_samplerate()` para la documentación completa.

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L288)**

Obtiene el número de canales de salida del dispositivo de audio.

Consulta `AudioBase.get_output_channels()` para la documentación completa.

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L330)**

Reproduce un archivo de sonido.

Consulta `AudioBase.play_sound()` para la documentación completa.

:::tip

TODO: por ahora esta función está pensada para usarse en la versión inalámbrica.

:::

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `sound_file` | `str` | Ruta al archivo de sonido que se va a reproducir. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L317)**

Envía datos de audio al dispositivo de salida.

Consulta `AudioBase.push_audio_sample()` para la documentación completa.

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L302)**

Abre la salida de audio usando GStreamer.

Consulta `AudioBase.start_playing()` para la documentación completa.

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L233)**

Abre la tarjeta de audio usando GStreamer.

Consulta `AudioBase.start_recording()` para la documentación completa.

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L310)**

Detiene la reproducción de audio y libera los recursos.

Consulta `AudioBase.stop_playing()` para la documentación completa.

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L295)**

Libera el recurso de la cámara.

Consulta `AudioBase.stop_recording()` para la documentación completa.

---

## Funciones de Utilidades de Audio

### `reachy_mini.media.audio_utils.get_respeaker_card_number`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L67)**

Devuelve el número de tarjeta de la tarjeta de sonido ReSpeaker, o 0 si no se encuentra.

:::note

Esta función ejecuta 'arecord -l' para listar los dispositivos de captura de audio disponibles y procesa la salida para encontrar dispositivos Reachy Mini Audio o ReSpeaker. Se utiliza principalmente en sistemas Linux con configuración de audio ALSA.

La función devuelve:
- Entero positivo: número de tarjeta del dispositivo Reachy Mini Audio detectado
- 0: No se encontró ningún dispositivo Reachy Mini Audio, se usa la tarjeta de sonido predeterminada
- -1: Se produjo un error al intentar detectar los dispositivos de audio

:::

**Ejemplo:**

```python
card_num = get_respeaker_card_number()
if card_num > 0:
    print(f"Using Reachy Mini Audio card {card_num}")
elif card_num == 0:
    print("Using default sound card")
else:
    print("Error detecting audio devices")
```

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `int` | El número de tarjeta del dispositivo ReSpeaker/Reachy Mini Audio detectado. Devuelve 0 si no se encuentra ningún dispositivo específico (usa la tarjeta de sonido predeterminada), o -1 si hay un error al ejecutar el comando de detección. |

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L110)**

Comprueba si ~/.asoundrc existe y contiene tanto reachymini_audio_sink como reachymini_audio_src.

:::note

Esta función comprueba la presencia del archivo de configuración ALSA ~/.asoundrc y verifica que contenga las entradas de configuración necesarias para los dispositivos de audio Reachy Mini (reachymini_audio_sink y reachymini_audio_src). Estas entradas son necesarias para un enrutamiento de audio y una gestión de dispositivos adecuados.

:::

**Ejemplo:**

```python
if has_reachymini_asoundrc():
    print("Reachy Mini audio configuration is properly set up")
else:
    print("Need to configure Reachy Mini audio devices")
    write_asoundrc_to_home()  # Create the configuration
```

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `bool` | True si ~/.asoundrc existe y contiene las entradas de configuración de audio Reachy Mini requeridas, False en caso contrario. |

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L141)**

Comprueba si ~/.asoundrc existe y está correctamente configurado para Reachy Mini Audio.

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L160)**

Escribe el archivo .asoundrc con la configuración de audio de Reachy Mini en el directorio home del usuario.

Esta función crea un archivo de configuración ALSA (.asoundrc) en el directorio home del usuario que configura la tarjeta de sonido ReSpeaker para un enrutamiento de audio adecuado y soporte multicliente. La configuración habilita el acceso simultáneo a la entrada y salida de audio, lo cual es esencial para la funcionalidad de audio de la versión Reachy Mini Wireless.

La configuración generada incluye:
- Ajustes predeterminados del dispositivo de audio apuntando a la tarjeta de sonido ReSpeaker
- Plugin dmix para salida de audio multicliente (`reachymini_audio_sink`)
- Plugin dsnoop para entrada de audio multicliente (`reachymini_audio_src`)
- Ajustes adecuados de búfer y frecuencia de muestreo para un rendimiento óptimo

:::info

Esta función detecta automáticamente el número de tarjeta ReSpeaker y crea una configuración adaptada al hardware detectado. Se utiliza principalmente para la versión Reachy Mini Wireless.

El archivo de configuración se creará en ~/.asoundrc y sobrescribirá cualquier archivo existente con el mismo nombre. Las configuraciones de audio existentes deben respaldarse antes de llamar a esta función.

:::

---

## Funciones de utilidades de control de audio

### `reachy_mini.media.audio_control_utils.ReSpeaker`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L172)**

Clase para interactuar con el dispositivo USB ReSpeaker XVF3800.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L317)**

Cierra la interfaz.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L240)**

Lee datos de un parámetro especificado en el dispositivo ReSpeaker.

---

#### `write`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L181)**

Escribe datos en un parámetro especificado en el dispositivo ReSpeaker.

---

### `reachy_mini.media.audio_control_utils.find`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L322)**

Busca y devuelve el dispositivo USB ReSpeaker con el Vendor ID y Product ID dados.

:::note

Esta función busca dispositivos USB con el Vendor ID y Product ID especificados usando el backend libusb. Los valores predeterminados apuntan a dispositivos XMOS XVF3800 utilizados en matrices de micrófonos ReSpeaker.

:::

**Ejemplo:**

```python
from reachy_mini.media.audio_control_utils import find

# Find default ReSpeaker device
respeaker = find()
if respeaker is not None:
    print("Found ReSpeaker device")
    respeaker.close()

# Find specific device
custom_device = find(vid=0x1234, pid=0x5678)
```

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `vid` | `int` | USB Vendor ID a buscar. Predeterminado: 0x2886 (XMOS). |
| `pid` | `int` | USB Product ID a buscar. Predeterminado: 0x001A (XMOS XVF3800). |

**Devuelve:**

| Type | Description |
|------|-------------|
| `ReSpeaker \| None` | Un objeto ReSpeaker si se encuentra el dispositivo, None en caso contrario. |

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L360)**

Inicializa el dispositivo USB ReSpeaker. Busca tanto los IDs de dispositivo nuevos como los beta.

:::info

Esta función intenta inicializar una matriz de micrófonos ReSpeaker buscando dispositivos USB con Vendor y Product IDs conocidos. Intenta:
1. Nuevo firmware Reachy Mini Audio (0x38FB:0x1001) - preferido
2. Firmware antiguo de ReSpeaker (0x2886:0x001A) - con advertencia para actualizar

La función gestiona los errores del backend USB de forma segura y devuelve None si no se encuentra ningún dispositivo compatible o si la inicialización falla.

:::

**Ejemplo:**

```python
from reachy_mini.media.audio_control_utils import init_respeaker_usb

# Initialize ReSpeaker device
respeaker = init_respeaker_usb()
if respeaker is not None:
    print("ReSpeaker initialized successfully")
    # Use the device...
    doa = respeaker.read("DOA_VALUE_RADIANS")
    respeaker.close()
else:
    print("No ReSpeaker device found")
```

**Devuelve:**

| Type | Description |
|------|-------------|
| `Optional[ReSpeaker]` | Un objeto ReSpeaker si se encuentra un dispositivo compatible, None en caso contrario. |

---

## Cámara

### `reachy_mini.media.camera_base.CameraBase`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L39)**

Clase abstracta para abrir y gestionar una cámara.

Esta clase define la interfaz que todas las implementaciones de cámara deben seguir. Proporciona parámetros comunes de cámara y métodos para gestionar dispositivos de cámara, incluyendo captura de imágenes, gestión de resolución y calibración de la cámara.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L275)**

Cierra la cámara y libera los recursos.

Este método debe detener cualquier captura de imagen en curso y liberar todos los recursos asociados. Después de llamar a este método, `read()` debe devolver None hasta que se llame de nuevo a `open()`.

:::note

Las implementaciones deben garantizar una limpieza adecuada para evitar fugas de recursos.

:::

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `logger` | `logging.Logger` | Instancia de logger para mensajes relacionados con la cámara. |
| `_resolution` | `Optional[CameraResolution]` | Ajuste actual de resolución de la cámara. |
| `camera_specs` | `Optional[CameraSpecs]` | Especificaciones de la cámara, incluidas las resoluciones compatibles y los parámetros de calibración. |
| `resized_K` | `Optional[npt.NDArray[np.float64]]` | Matriz intrínseca de la cámara redimensionada para coincidir con la resolución actual. |

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L227)**

Abre la cámara.

Este método debe inicializar el dispositivo de cámara y prepararlo para capturar imágenes. Después de llamar a este método, `read()` debe poder recuperar fotogramas de la cámara.

:::note

Las implementaciones deben gestionar cualquier asignación de recursos necesaria, la configuración de la cámara y la comprobación de errores. Si la cámara no se puede abrir, las implementaciones deben registrar mensajes de error apropiados.

:::

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L247)**

Lee una imagen de la cámara. Devuelve la imagen o None si hay un error.

:::note

Este método debe llamarse después de que se haya llamado a `open()`. La resolución de la imagen se puede obtener a través de la propiedad `resolution`.

:::

**Ejemplo:**

```python
camera.open()
frame = camera.read()
if frame is not None:
    cv2.imshow("Camera Frame", frame)
    cv2.waitKey(1)
```

**Devuelve:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | Un array de numpy que contiene la imagen capturada en formato BGR (convención de OpenCV), o None si no hay imagen disponible o si se produjo un error. La forma del array es (height, width, 3) donde la última dimensión representa los canales de color BGR. |

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L175)**

Establece la resolución de la cámara.

:::note

Este método actualiza la resolución de la cámara y vuelve a escalar automáticamente la matriz intrínseca de la cámara (K) para que coincida con la nueva resolución. El reescalado preserva el campo de visión de la cámara y la posición del punto principal en relación con las dimensiones de la imagen.

:::

**Ejemplo:**

```python
from reachy_mini.media.camera_constants import CameraResolution
camera.set_resolution(CameraResolution.R1280x720at30fps)
```

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `resolution` | `CameraResolution` | La resolución de cámara deseada del enum `CameraResolution`. |

---

### `reachy_mini.media.camera_opencv.OpenCVCamera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L76)**

Implementación de cámara usando OpenCV.

Esta clase implementa la interfaz `CameraBase` usando OpenCV, proporcionando soporte de cámara multiplataforma para los robots Reachy Mini. Detecta y configura automáticamente los modelos de cámara compatibles.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L173)**

Libera el recurso de la cámara.

Consulta `CameraBase.close()` para la documentación completa.

**Parámetros:**

| Name | Description |
|------|-------------|
| Hereda todos los atributos de CameraBase. | - |
| Además gestiona objetos OpenCV VideoCapture y conexiones de cámara. | - |

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L117)**

Abre la cámara usando OpenCV VideoCapture.

Consulta `CameraBase.open()` para la documentación completa.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L151)**

Lee un fotograma de la cámara.

Consulta `CameraBase.read()` para la documentación completa.

**Devuelve:**

El fotograma como un array de numpy de tipo uint8, o None si no se pudo leer ningún fotograma.

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L108)**

Establece la resolución de la cámara.

---

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L79)**

Implementación de cámara usando GStreamer.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L292)**

Libera el recurso de la cámara.

---

#### `get_video_device`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L297)**

Usa Gst.DeviceMonitor para encontrar la ruta de la cámara en Unix /dev/videoX.

Devuelve la ruta del dispositivo (por ejemplo, '/dev/video2'), o '' si no se encuentra.

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L255)**

Abre la cámara usando GStreamer.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L276)**

Lee un fotograma de la cámara. Devuelve el fotograma o None si hay un error.

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | El fotograma BGR capturado como un array de NumPy, o None si hay un error. |

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L230)**

Configura la resolución de la cámara.

---

## Funciones de Utilidades de Cámara

### `reachy_mini.media.camera_utils.find_camera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_utils.py#L44)**

Busca y devuelve la cámara Reachy Mini.

Busca primero la cámara Reachy Mini, luego Arducam, luego la cámara Raspberry Pi más antigua. Devuelve None si no se encuentra ninguna cámara. Recurre a una cámara web genérica si no se detecta ninguna cámara específica.

:::info

Esta función intenta detectar cámaras en el siguiente orden:
1. Reachy Mini Lite Camera (preferida)
2. Cámara Raspberry Pi más antigua
3. Arducam
4. Cámara web genérica (recurso alternativo)

La función configura automáticamente el códec de vídeo apropiado (MJPG) para las cámaras Reachy Mini y Raspberry Pi para garantizar la compatibilidad.

:::

**Ejemplo:**

```python
cap, specs = find_camera()
if cap is not None:
    print(f"Found {specs.name} camera")
    # Set resolution
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
    # Capture a frame
    ret, frame = cap.read()
    cap.release()
else:
    print("No camera found")
```

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `apiPreference` | `int` | Backend de API preferido para la cámara. El valor predeterminado es cv2.CAP_ANY. Las opciones incluyen cv2.CAP_V4L2 (Linux), cv2.CAP_DSHOW (Windows), cv2.CAP_MSMF (Windows), etc. |
| `no_cap` | `bool` | Si es True, cierra la cámara después de encontrarla. Útil para probar la detección de la cámara sin mantenerla abierta. El valor predeterminado es False. |

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `Tuple[Optional[cv2.VideoCapture], Optional[CameraSpecs]]` | Una tupla que contiene: cv2.VideoCapture (un objeto VideoCapture si la cámara se encuentra y se abre correctamente, de lo contrario None) y CameraSpecs (las especificaciones de la cámara detectada, o None si no se encontró ninguna cámara). |

---

### `reachy_mini.media.camera_utils.find_camera_by_vid_pid`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_utils.py#L128)**

Busca y devuelve una cámara con el VID y PID especificados.

:::note

Esta función utiliza el paquete cv2_enumerate_cameras para enumerar las cámaras disponibles y encontrar una con el USB Vendor ID y Product ID especificados. Esto es útil para seleccionar modelos de cámara específicos cuando hay varias cámaras conectadas al sistema.

La cámara Arducam crea dos dispositivos /dev/videoX que enumerate_cameras no puede diferenciar, por lo que esta función intenta abrir cada dispositivo potencial hasta encontrar uno que funcione.

:::

**Ejemplo:**

```python
# Find Reachy Mini Lite Camera by its default VID/PID
cap = find_camera_by_vid_pid()
if cap is not None:
    print("Found Reachy Mini Lite Camera")
    cap.release()

# Find a specific camera by custom VID/PID
cap = find_camera_by_vid_pid(vid=0x0C45, pid=0x636D)  # Arducam
if cap is not None:
    print("Found Arducam")
```

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `vid` | `int` | Vendor ID de la cámara. El valor predeterminado es ReachyMiniLiteCamSpecs.vid (0x38FB). |
| `pid` | `int` | Product ID de la cámara. El valor predeterminado es ReachyMiniLiteCamSpecs.pid (0x1002). |
| `apiPreference` | `int` | Backend de API preferido para la cámara. El valor predeterminado es cv2.CAP_ANY. En Linux, esto utiliza automáticamente cv2.CAP_V4L2 para una mejor compatibilidad. |

**Devuelve:**

| Tipo | Descripción |
|------|-------------|
| `cv2.VideoCapture \| None` | Un objeto VideoCapture si la cámara con el VID/PID coincidente se encuentra y se abre correctamente, de lo contrario None. |

---

## Constantes de Cámara

### `reachy_mini.media.camera_constants.CameraResolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L34)**

Clase base para resoluciones de cámara.

Enumeración de resoluciones de cámara estandarizadas y tasas de fotogramas compatibles con las cámaras Reachy Mini. Cada valor del enum contiene una tupla de (ancho, alto, fps).

:::note

Los valores del enum son tuplas que contienen (ancho, alto, fotogramas_por_segundo). No todas las resoluciones son compatibles con todos los modelos de cámara; consulta las especificaciones de la cámara específica para ver las resoluciones disponibles.

:::

**Ejemplo:**

```python
from reachy_mini.media.camera_constants import CameraResolution

# Get resolution information
res = CameraResolution.R1280x720at30fps
width, height, fps = res.value
print(f"Resolution: {width}x{height}@{fps}fps")

# Check if a resolution is supported by a camera
from reachy_mini.media.camera_constants import ReachyMiniLiteCamSpecs
res = CameraResolution.R1920x1080at60fps
if res in ReachyMiniLiteCamSpecs.available_resolutions:
    print("This resolution is supported")
```

**Resoluciones Disponibles:**

| Resolución | Descripción |
|------------|-------------|
| `R1536x864at40fps` | Resolución de 1536x864 a 40 fps |
| `R1280x720at60fps` | Resolución de 1280x720 a 60 fps (HD) |
| `R1280x720at30fps` | Resolución de 1280x720 a 30 fps (HD) |
| `R1920x1080at30fps` | Resolución de 1920x1080 a 30 fps (Full HD) |
| `R1920x1080at60fps` | Resolución de 1920x1080 a 60 fps (Full HD) |
| `R2304x1296at30fps` | Resolución de 2304x1296 a 30 fps |
| `R1600x1200at30fps` | Resolución de 1600x1200 a 30 fps |
| `R3264x2448at30fps` | Resolución de 3264x2448 a 30 fps |
| `R3264x2448at10fps` | Resolución de 3264x2448 a 10 fps |
| `R3840x2592at30fps` | Resolución de 3840x2592 a 30 fps |
| `R3840x2592at10fps` | Resolución de 3840x2592 a 10 fps |
| `R3840x2160at30fps` | Resolución de 3840x2160 a 30 fps (4K UHD) |
| `R3840x2160at10fps` | Resolución de 3840x2160 a 10 fps (4K UHD) |
| `R3072x1728at10fps` | Resolución de 3072x1728 a 10 fps |
| `R4608x2592at10fps` | Resolución de 4608x2592 a 10 fps |

---

### `reachy_mini.media.camera_constants.CameraSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L107)**

Especificaciones base de la cámara.

Dataclass que contiene las especificaciones de un modelo de cámara, incluidas las resoluciones compatibles, los parámetros de calibración y la información de identificación USB.

:::note

La matriz intrínseca K tiene el formato:
```
[[fx,  0, cx],
 [ 0, fy, cy],
 [ 0,  0,  1]]
```

Donde fx, fy son las distancias focales en píxeles, y cx, cy son las coordenadas del punto principal (normalmente cerca del centro de la imagen).

:::

**Ejemplo:**

```python
from reachy_mini.media.camera_constants import CameraSpecs

# Create a custom camera specification
custom_specs = CameraSpecs(
    name="custom_camera",
    available_resolutions=[CameraResolution.R1280x720at30fps],
    default_resolution=CameraResolution.R1280x720at30fps,
    vid=0x1234,
    pid=0x5678,
    K=np.array([[800, 0, 640], [0, 800, 360], [0, 0, 1]]),
    D=np.zeros(5)
)
```

**Parámetros:**

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `name` | `str` | Nombre del modelo de cámara legible por humanos. |
| `available_resolutions` | `List[CameraResolution]` | Lista de resoluciones y tasas de fotogramas compatibles para este modelo de cámara. |
| `default_resolution` | `CameraResolution` | Resolución predeterminada utilizada cuando se inicializa la cámara. |
| `vid` | `int` | USB Vendor ID para identificar este modelo de cámara. |
| `pid` | `int` | USB Product ID para identificar este modelo de cámara. |
| `K` | `npt.NDArray[np.float64]` | Matriz intrínseca de la cámara de 3x3 que contiene las distancias focales y las coordenadas del punto principal. |
| `D` | `npt.NDArray[np.float64]` | Array de 5 elementos que contiene los coeficientes de distorsión (k1, k2, p1, p2, k3) para la distorsión radial y tangencial. |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L163)**

Especificaciones de la cámara Arducam.

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L182)**

Especificaciones de la cámara Reachy Mini Lite.

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L229)**

Especificaciones de la cámara Reachy Mini Wireless.
