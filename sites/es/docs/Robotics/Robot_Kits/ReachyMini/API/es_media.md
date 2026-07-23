---
description: Referencia de la API de medios para Reachy Mini que cubre el gestor de medios, audio, cámara y componentes WebRTC.
title: API de medios
slug: /reachymini_api_media
keywords:
  - media
  - api
  - audio
  - camera
  - webrtc
  - gstreamer
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/es/reachymini_api_media/
---

# Medios

## Gestor de medios

### `reachy_mini.media.media_manager.MediaManager`

Clase MediaManager para gestionar flujos de audio y vídeo en el robot Reachy Mini.

### Métodos

#### `start_audio`

Inicia el flujo de audio.

---

#### `stop_audio`

Detiene el flujo de audio.

---

#### `start_video`

Inicia el flujo de vídeo.

---

#### `stop_video`

Detiene el flujo de vídeo.

---

## Audio

### `reachy_mini.media.audio_base.AudioBase`

Clase base para la gestión de audio en Reachy Mini.

### Métodos

#### `play_sound`

Reproduce un archivo de sonido.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `file_path` | `str` | Path to the sound file to play. |

---

#### `set_volume`

Establece el volumen de audio.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Nivel de volumen (0-100). |

---

#### `get_volume`

Obtiene el volumen de audio actual.

**Devuelve:**

`int` — Nivel de volumen actual (0-100).

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`

Implementación de audio basada en GStreamer para Reachy Mini.

### Métodos

#### `start_recording`

Inicia la grabación de audio.

---

#### `stop_recording`

Detiene la grabación de audio.

---

#### `get_audio_stats`

Obtiene estadísticas de audio.

**Devuelve:**

`Dict` — Diccionario que contiene estadísticas de audio.

---

## Funciones de utilidades de audio

### `reachy_mini.media.audio_utils.get_respeaker_card_number`

Obtiene el número de tarjeta para el dispositivo ReSpeaker.

**Devuelve:**

`int` — El número de tarjeta ALSA para el ReSpeaker.

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`

Comprueba si existe el archivo de configuración asoundrc de Reachy Mini.

**Devuelve:**

`bool` — True si el archivo de configuración existe.

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`

Comprueba si la configuración asoundrc de Reachy Mini es válida.

**Devuelve:**

`bool` — True si la configuración es válida.

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`

Escribe la configuración asoundrc en el directorio home del usuario.

---

## Funciones de utilidades de control de audio

### `reachy_mini.media.audio_control_utils.ReSpeaker`

Controlador de matriz de micrófonos USB ReSpeaker.

### Métodos

#### `set_channel`

Establece el canal activo para el ReSpeaker.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `channel` | `int` | Número de canal a establecer como activo. |

---

#### `get_volume`

Obtiene el volumen del micrófono.

**Devuelve:**

`int` — Volumen actual del micrófono (0-100).

---

#### `set_volume`

Establece el volumen del micrófono.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Nivel de volumen (0-100). |

---

### `reachy_mini.media.audio_control_utils.find`

Busca dispositivos ReSpeaker conectados.

**Devuelve:**

`List[ReSpeaker]` — Lista de dispositivos ReSpeaker encontrados.

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`

Inicializa el micrófono USB ReSpeaker.

**Devuelve:**

`ReSpeaker` — Dispositivo ReSpeaker inicializado.

---

## Cámara

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`

Implementación de cámara basada en GStreamer para Reachy Mini.

### Métodos

#### `start`

Inicia el flujo de la cámara.

---

#### `stop`

Detiene el flujo de la cámara.

---

#### `get_frame`

Obtiene el fotograma actual de la cámara.

**Devuelve:**

`np.ndarray` — Fotograma actual de la cámara como un array de numpy.

---

#### `undistort_points`

Corrige la distorsión de puntos de imagen usando parámetros de calibración de la cámara.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `points` | `np.ndarray` | Puntos de entrada a corregir. |
| `camera_matrix` | `np.ndarray` | Matriz intrínseca de la cámara. |
| `dist_coeffs` | `np.ndarray` | Coeficientes de distorsión. |

**Devuelve:**

`np.ndarray` — Puntos corregidos.

---

## Funciones de utilidades de cámara

### `reachy_mini.media.camera_utils.undistort_points`

Corrige la distorsión de puntos usando parámetros de calibración de la cámara.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `points` | `np.ndarray` | Puntos de entrada a corregir. |
| `camera_matrix` | `np.ndarray` | Matriz intrínseca de la cámara. |
| `dist_coeffs` | `np.ndarray` | Coeficientes de distorsión. |

**Devuelve:**

`np.ndarray` — Puntos corregidos.

---

### `reachy_mini.media.camera_utils.scale_intrinsics`

Escala los parámetros intrínsecos de la cámara para diferentes resoluciones de imagen.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `intrinsics` | `np.ndarray` | Matriz intrínseca original de la cámara. |
| `scale_factor` | `float` | Factor de escala para los parámetros intrínsecos. |

**Devuelve:**

`np.ndarray` — Matriz intrínseca de la cámara escalada.

---

## Constantes de cámara

### `reachy_mini.media.camera_constants.CameraResolution`

Clase de configuración de resolución de cámara.

### Propiedades

| Property | Type | Description |
|----------|------|-------------|
| `width` | `int` | Ancho de la imagen en píxeles. |
| `height` | `int` | Alto de la imagen en píxeles. |

---

### `reachy_mini.media.camera_constants.CameraSpecs`

Clase base para especificaciones de cámara.

### Propiedades

| Property | Type | Description |
|----------|------|-------------|
| `resolution` | `CameraResolution` | Resolución de la cámara. |
| `frame_rate` | `int` | Frecuencia de fotogramas en fps. |
| `camera_matrix` | `np.ndarray` | Matriz intrínseca de la cámara. |
| `dist_coeffs` | `np.ndarray` | Coeficientes de distorsión. |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`

Especificaciones para el módulo de cámara Arducam.

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`

Especificaciones para la cámara Reachy Mini Lite.

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`

Especificaciones para la cámara Reachy Mini Wireless.

---

### `reachy_mini.media.camera_constants.OlderRPiCamSpecs`

Especificaciones para módulos de cámara Raspberry Pi antiguos.

---

### `reachy_mini.media.camera_constants.MujocoCameraSpecs`

Especificaciones para la cámara de simulación MuJoCo.

---

### `reachy_mini.media.camera_constants.GenericWebcamSpecs`

Especificaciones para webcams USB genéricas.

---

## WebRTC

### `reachy_mini.media.webrtc_client_gstreamer.GstWebRTCClient`

Cliente WebRTC que usa GStreamer para transmitir audio y vídeo.

### Métodos

#### `connect`

Conecta con el servidor de señalización.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `signaling_url` | `str` | URL del servidor de señalización. |
| `token` | `str` | Token de autenticación. |

---

#### `disconnect`

Desconecta del servidor de señalización.

---

#### `start_stream`

Inicia la transmisión de audio y vídeo.

---

#### `stop_stream`

Detiene la transmisión de audio y vídeo.

---

#### `attach_video`

Asocia un elemento de vídeo para recibir la transmisión.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `video_element` | `HTMLVideoElement` | Elemento de vídeo a asociar. |

---

#### `set_audio_muted`

Silencia o reactiva el audio.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `muted` | `bool` | Indica si se debe silenciar el audio. |

---

### `reachy_mini.media.media_server.GstMediaServer`

Servidor de medios basado en GStreamer para gestionar flujos WebRTC.

### Métodos

#### `start`

Inicia el servidor de medios.

---

#### `stop`

Detiene el servidor de medios.

---

#### `create_offer`

Crea una oferta WebRTC para conexiones entrantes.

**Devuelve:**

`str` — Cadena de oferta SDP.

---

#### `handle_answer`

Gestiona una respuesta WebRTC de un cliente.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `answer` | `str` | Respuesta SDP del cliente. |

---

#### `add_track`

Añade una pista de medios a la conexión.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `track` | `MediaStreamTrack` | Pista de medios que se va a añadir. |

---

#### `remove_track`

Elimina una pista de medios de la conexión.

**Parámetros:**

| Name | Type | Description |
|------|------|-------------|
| `track` | `MediaStreamTrack` | Pista de medios que se va a eliminar. |