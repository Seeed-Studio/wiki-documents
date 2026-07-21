---
description: Referência da API de mídia para o Reachy Mini, cobrindo o gerenciador de mídia, áudio, câmera e componentes WebRTC.
title: API de Mídia
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
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_media/
---

# Mídia

## Gerenciador de Mídia

### `reachy_mini.media.media_manager.MediaManager`

Classe MediaManager para gerenciar fluxos de áudio e vídeo no robô Reachy Mini.

### Métodos

#### `start_audio`

Inicia o fluxo de áudio.

---

#### `stop_audio`

Interrompe o fluxo de áudio.

---

#### `start_video`

Inicia o fluxo de vídeo.

---

#### `stop_video`

Interrompe o fluxo de vídeo.

---

## Áudio

### `reachy_mini.media.audio_base.AudioBase`

Classe base para manipulação de áudio no Reachy Mini.

### Métodos

#### `play_sound`

Reproduz um arquivo de áudio.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `file_path` | `str` | Path to the sound file to play. |

---

#### `set_volume`

Define o volume do áudio.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Nível de volume (0-100). |

---

#### `get_volume`

Obtém o volume de áudio atual.

**Retorna:**

`int` — Nível de volume atual (0-100).

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`

Implementação de áudio baseada em GStreamer para o Reachy Mini.

### Métodos

#### `start_recording`

Inicia a gravação de áudio.

---

#### `stop_recording`

Interrompe a gravação de áudio.

---

#### `get_audio_stats`

Obtém estatísticas de áudio.

**Retorna:**

`Dict` — Dicionário contendo estatísticas de áudio.

---

## Funções Utilitárias de Áudio

### `reachy_mini.media.audio_utils.get_respeaker_card_number`

Obtém o número da placa para o dispositivo ReSpeaker.

**Retorna:**

`int` — O número de placa ALSA para o ReSpeaker.

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`

Verifica se o arquivo de configuração asoundrc do Reachy Mini existe.

**Retorna:**

`bool` — True se o arquivo de configuração existir.

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`

Verifica se a configuração asoundrc do Reachy Mini é válida.

**Retorna:**

`bool` — True se a configuração for válida.

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`

Grava a configuração asoundrc no diretório home do usuário.

---

## Funções Utilitárias de Controle de Áudio

### `reachy_mini.media.audio_control_utils.ReSpeaker`

Controlador da matriz de microfones USB ReSpeaker.

### Métodos

#### `set_channel`

Define o canal ativo para o ReSpeaker.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `channel` | `int` | Número do canal a ser definido como ativo. |

---

#### `get_volume`

Obtém o volume do microfone.

**Retorna:**

`int` — Volume atual do microfone (0-100).

---

#### `set_volume`

Define o volume do microfone.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Nível de volume (0-100). |

---

### `reachy_mini.media.audio_control_utils.find`

Encontra dispositivos ReSpeaker conectados.

**Retorna:**

`List[ReSpeaker]` — Lista de dispositivos ReSpeaker encontrados.

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`

Inicializa o microfone USB ReSpeaker.

**Retorna:**

`ReSpeaker` — Dispositivo ReSpeaker inicializado.

---

## Câmera

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`

Implementação de câmera baseada em GStreamer para o Reachy Mini.

### Métodos

#### `start`

Inicia o fluxo da câmera.

---

#### `stop`

Interrompe o fluxo da câmera.

---

#### `get_frame`

Obtém o quadro atual da câmera.

**Retorna:**

`np.ndarray` — Quadro atual da câmera como um array numpy.

---

#### `undistort_points`

Remove a distorção de pontos de imagem usando parâmetros de calibração da câmera.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `points` | `np.ndarray` | Pontos de entrada para remover a distorção. |
| `camera_matrix` | `np.ndarray` | Matriz intrínseca da câmera. |
| `dist_coeffs` | `np.ndarray` | Coeficientes de distorção. |

**Retorna:**

`np.ndarray` — Pontos sem distorção.

---

## Funções Utilitárias de Câmera

### `reachy_mini.media.camera_utils.undistort_points`

Remove a distorção de pontos usando parâmetros de calibração da câmera.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `points` | `np.ndarray` | Pontos de entrada para remover a distorção. |
| `camera_matrix` | `np.ndarray` | Matriz intrínseca da câmera. |
| `dist_coeffs` | `np.ndarray` | Coeficientes de distorção. |

**Retorna:**

`np.ndarray` — Pontos sem distorção.

---

### `reachy_mini.media.camera_utils.scale_intrinsics`

Redimensiona parâmetros intrínsecos da câmera para diferentes resoluções de imagem.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `intrinsics` | `np.ndarray` | Matriz intrínseca original da câmera. |
| `scale_factor` | `float` | Fator de escala para os parâmetros intrínsecos. |

**Retorna:**

`np.ndarray` — Matriz intrínseca da câmera redimensionada.

---

## Constantes de Câmera

### `reachy_mini.media.camera_constants.CameraResolution`

Classe de configuração de resolução de câmera.

### Propriedades

| Property | Type | Description |
|----------|------|-------------|
| `width` | `int` | Largura da imagem em pixels. |
| `height` | `int` | Altura da imagem em pixels. |

---

### `reachy_mini.media.camera_constants.CameraSpecs`

Classe base para especificações de câmera.

### Propriedades

| Property | Type | Description |
|----------|------|-------------|
| `resolution` | `CameraResolution` | Resolução da câmera. |
| `frame_rate` | `int` | Taxa de quadros em fps. |
| `camera_matrix` | `np.ndarray` | Matriz intrínseca da câmera. |
| `dist_coeffs` | `np.ndarray` | Coeficientes de distorção. |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`

Especificações para o módulo de câmera Arducam.

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`

Especificações para a câmera Reachy Mini Lite.

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`

Especificações para a câmera Reachy Mini Wireless.

---

### `reachy_mini.media.camera_constants.OlderRPiCamSpecs`

Especificações para módulos de câmera Raspberry Pi mais antigos.

---

### `reachy_mini.media.camera_constants.MujocoCameraSpecs`

Especificações para a câmera de simulação MuJoCo.

---

### `reachy_mini.media.camera_constants.GenericWebcamSpecs`

Especificações para webcams USB genéricas.

---

## WebRTC

### `reachy_mini.media.webrtc_client_gstreamer.GstWebRTCClient`

Cliente WebRTC usando GStreamer para transmissão de áudio e vídeo.

### Métodos

#### `connect`

Conecta ao servidor de sinalização.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `signaling_url` | `str` | URL do servidor de sinalização. |
| `token` | `str` | Token de autenticação. |

---

#### `disconnect`

Desconecta do servidor de sinalização.

---

#### `start_stream`

Inicia a transmissão de áudio e vídeo.

---

#### `stop_stream`

Interrompe a transmissão de áudio e vídeo.

---

#### `attach_video`

Anexa um elemento de vídeo para receber o fluxo.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `video_element` | `HTMLVideoElement` | Elemento de vídeo a ser anexado. |

---

#### `set_audio_muted`

Silencia ou reativa o áudio.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `muted` | `bool` | Se deve silenciar o áudio. |

---

### `reachy_mini.media.media_server.GstMediaServer`

Servidor de mídia baseado em GStreamer para lidar com fluxos WebRTC.

### Métodos

#### `start`

Inicia o servidor de mídia.

---

#### `stop`

Interrompe o servidor de mídia.

---

#### `create_offer`

Cria uma oferta WebRTC para conexões de entrada.

**Retorna:**

`str` — String de oferta SDP.

---

#### `handle_answer`

Lida com uma resposta WebRTC de um cliente.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `answer` | `str` | Resposta SDP do cliente. |

---

#### `add_track`

Adiciona uma trilha de mídia à conexão.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `track` | `MediaStreamTrack` | Trilha de mídia a ser adicionada. |

---

#### `remove_track`

Remove uma trilha de mídia da conexão.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `track` | `MediaStreamTrack` | Trilha de mídia a ser removida. |