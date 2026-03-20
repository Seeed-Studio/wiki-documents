---
description: Referência completa da API para o gerenciador de mídia do Reachy Mini, incluindo áudio, câmera, utilitários e constantes para streaming de vídeo e áudio.
title: Referência da API de Mídia
slug: /reachymini_api_media
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_media/
---
# Mídia

## Gerenciador de Mídia

### `reachy_mini.media.media_manager.MediaManager`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L56)**

Gerenciador de Mídia para lidar com dispositivos de câmera e áudio.

Esta classe fornece uma interface unificada para gerenciar dispositivos de câmera e áudio em diferentes backends. Ela cuida da inicialização, configuração e limpeza dos recursos de mídia.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L153)**

Fecha o gerenciador de mídia e libera os recursos.

Este método deve ser chamado quando o gerenciador de mídia não for mais necessário, para limpar adequadamente e liberar todos os recursos de mídia. Ele interrompe qualquer gravação/reprodução de áudio em andamento e fecha o dispositivo de câmera.

:::note

Após chamar este método, o gerenciador de mídia pode ser reutilizado chamando novamente os métodos de inicialização apropriados, mas geralmente é recomendado criar uma nova instância de MediaManager se necessário.

:::

**Exemplo:**

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

Obtém a Direção de Chegada (DoA) a partir do array de microfones.

**Retorna:**

| Type | Description |
|------|-------------|
| `tuple[float, bool] \| None` | Uma tupla (angle_radians, speech_detected), ou None se o sistema de áudio não estiver disponível. |

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L313)**

Obtém uma amostra de áudio do dispositivo de áudio.

**Retorna:**

| Type | Description |
|------|-------------|
| `Optional[np.ndarray]` | A amostra de áudio gravada, ou None se nenhum dado estiver disponível. |

---

#### `get_frame`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L216)**

Obtém um frame da câmera.

:::note

Este método retorna None se a câmera não estiver inicializada ou se houver um erro na captura do frame. Sempre verifique o valor de retorno antes de usar o frame.

:::

**Exemplo:**

```python
frame = media.get_frame()
if frame is not None:
    # Process the frame
    cv2.imshow("Camera", frame)
    cv2.waitKey(1)

    # Convert to RGB if needed
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
```

**Retorna:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | O frame BGR capturado como um array numpy com forma (height, width, 3), ou None se a câmera não estiver disponível ou se ocorreu um erro. A imagem está no formato BGR (convenção do OpenCV) e pode ser usada diretamente com funções do OpenCV ou convertida para RGB se necessário. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L325)**

Obtém a taxa de amostragem de entrada do dispositivo de áudio.

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L339)**

Obtém o número de canais de entrada do dispositivo de áudio.

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L332)**

Obtém a taxa de amostragem de saída do dispositivo de áudio.

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L346)**

Obtém o número de canais de saída do dispositivo de áudio.

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L294)**

Reproduz um arquivo de som.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `sound_file` | `str` | Caminho para o arquivo de som a ser reproduzido. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L367)**

Envia dados de áudio para o dispositivo de saída.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `data` | `npt.NDArray[np.float32]` | Os dados de áudio a serem enviados para o dispositivo de saída (formato mono). |

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L360)**

Inicia a reprodução de áudio.

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L306)**

Inicia a gravação de áudio.

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L403)**

Interrompe a reprodução de áudio.

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L353)**

Interrompe a gravação de áudio.

---

## Áudio

### `reachy_mini.media.audio_base.AudioBase`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L25)**

Classe abstrata para abrir e gerenciar dispositivos de áudio.

Esta classe define a interface que todas as implementações de áudio devem seguir. Ela fornece parâmetros de áudio comuns e métodos para gerenciar dispositivos de áudio, incluindo funcionalidade de entrada de microfone e saída de alto-falante.

### Métodos

#### `cleanup`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L64)**

Limpa os recursos antes da destruição.

Este método deve ser chamado para liberar quaisquer recursos mantidos pela implementação de áudio antes que o objeto seja destruído.

**Parâmetros:**

| Name | Type | Description |
|------|------|-------------|
| `SAMPLE_RATE` | `int` | Taxa de amostragem padrão para operações de áudio (16000 Hz). |
| `CHANNELS` | `int` | Número padrão de canais de áudio (2 para estéreo). |
| `logger` | `logging.Logger` | Instância de logger para mensagens relacionadas a áudio. |
| `_respeaker` | `Optional[ReSpeaker]` | Manipulador do dispositivo de array de microfones ReSpeaker. |

---

#### `clear_output_buffer`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L210)**

Limpa o buffer de saída.

Este método esvazia o buffer de saída para evitar que amostras enviadas sejam reproduzidas. Sobrescreva se necessário. Parece que set_max_output_buffers com um valor baixo pode ser suficiente para o backend gstreamer.

---

#### `get_DoA`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L285)**

Obtém o valor de Direção de Chegada (DoA) do dispositivo ReSpeaker.

O ângulo espacial é dado em radianos:
- 0 radianos é esquerda
- π/2 radianos é frente/trás
- π radianos é direita

:::info

O array de microfones requer firmware versão 2.1.0 ou superior para suportar este recurso. O firmware está localizado em `src/reachy_mini/assets/firmware/*.bin`. Consulte https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#Atualizar-firmware para o processo de atualização.

:::

**Retorna:**

| Type | Description |
|------|-------------|
| `tuple` | Uma tupla contendo o valor DoA como um float (radianos) e a detecção de fala como um bool, ou None se o dispositivo não for encontrado. |

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L94)**

Lê dados de áudio do dispositivo. Retorna os dados ou None em caso de erro.

:::note

Este método deve ser chamado depois que `start_recording()` tiver sido chamado. A taxa de amostragem e o número de canais podem ser obtidos via `get_input_audio_samplerate()` e `get_input_channels()`, respectivamente.

:::

**Exemplo:**

```python
audio.start_recording()
samples = audio.get_audio_sample()
if samples is not None:
    print(f"Got {len(samples)} audio samples")
```

**Retorna:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.float32]]` | Um array numpy contendo amostras de áudio em formato float32, ou None se nenhum dado estiver disponível ou se ocorreu um erro. O formato do array é tipicamente (num_samples,) para mono ou (num_samples, num_channels) para áudio multicanal. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L121)**

Obtém a taxa de amostragem de entrada do dispositivo de áudio.

:::note

Esse valor representa o número de amostras de áudio capturadas por segundo para cada canal.

:::

**Retorna:**

| Type | Description |
|------|-------------|
| `int` | A taxa de amostragem em Hz na qual o áudio está sendo capturado. O padrão é 16000 Hz. |

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L149)**

Obtém o número de canais de entrada do dispositivo de áudio.

:::note

Para o array de microfones ReSpeaker, isso normalmente retorna 2 canais representando a configuração estéreo de microfones.

:::

**Retorna:**

| Type | Description |
|------|-------------|
| `int` | O número de canais de entrada de áudio (por exemplo, 1 para mono, 2 para estéreo). O padrão é 2 canais. |

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L135)**

Obtém a taxa de amostragem de saída do dispositivo de áudio.

:::note

Esse valor representa o número de amostras de áudio reproduzidas por segundo para cada canal.

:::

**Retorna:**

| Type | Description |
|------|-------------|
| `int` | A taxa de amostragem em Hz na qual o áudio está sendo reproduzido. O padrão é 16000 Hz. |

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L163)**

Obtém o número de canais de saída do dispositivo de áudio.

:::note

Isso determina como os dados de áudio devem ser formatados quando passados para o método `push_audio_sample()`.

:::

**Retorna:**

| Tipo | Descrição |
|------|-------------|
| `int` | O número de canais de saída de áudio (por exemplo, 1 para mono, 2 para estéreo). O padrão é 2 canais. |

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L263)**

Reproduz um arquivo de áudio.

:::note

Este é um método de conveniência que lida com a reprodução completa de um arquivo de áudio do início ao fim. Para ter mais controle sobre a reprodução de áudio, use os métodos `start_playing()`, `push_audio_sample()` e `stop_playing()`.

:::

**Exemplo:**

```python
audio.play_sound("/path/to/sound.wav")
```

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `sound_file` | `str` | Caminho para o arquivo de áudio a ser reproduzido. Os formatos compatíveis dependem da implementação específica. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L230)**

Envia dados de áudio para o dispositivo de saída.

:::note

Este método deve ser chamado depois que `start_playing()` tiver sido chamado. Os dados de áudio serão reproduzidos na taxa de amostragem retornada por `get_output_audio_samplerate()`.

:::

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `data` | `npt.NDArray[np.float32]` | Amostras de áudio a serem reproduzidas. O array deve conter valores float32 tipicamente no intervalo [-1.0, 1.0]. Para áudio mono: a forma deve ser (num_samples,). Para áudio estéreo: a forma deve ser (num_samples, 2). |

---

#### `set_max_output_buffers`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L220)**

Define o número máximo de buffers de saída a serem enfileirados no player.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `max_buffers` | `int` | Número máximo de buffers a serem enfileirados. |

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L191)**

Inicia a reprodução de áudio.

Este método deve inicializar o sistema de reprodução de áudio e prepará-lo para receber dados de áudio via `push_audio_sample()`.

:::note

As implementações devem lidar com qualquer alocação de recursos necessária e verificação de erros. Se a reprodução não puder ser iniciada, as implementações devem registrar mensagens de erro apropriadas.

:::

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L74)**

Inicia a gravação de áudio.

Este método deve inicializar o sistema de gravação de áudio e prepará-lo para capturar dados de áudio. Após chamar este método, `get_audio_sample()` deve ser capaz de recuperar os dados de áudio gravados.

:::note

As implementações devem lidar com qualquer alocação de recursos necessária e verificação de erros. Se a gravação não puder ser iniciada, as implementações devem registrar mensagens de erro apropriadas.

:::

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L249)**

Para a reprodução de áudio e libera recursos.

Este método deve interromper qualquer reprodução de áudio em andamento e liberar todos os recursos associados. Após chamar este método, chamadas para `push_audio_sample()` não terão efeito até que `start_playing()` seja chamado novamente.

:::note

As implementações devem garantir uma limpeza adequada para evitar vazamentos de recursos.

:::

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L177)**

Fecha o dispositivo de áudio e libera recursos.

Este método deve interromper qualquer gravação de áudio em andamento e liberar todos os recursos associados. Após chamar este método, `get_audio_sample()` deve retornar None até que `start_recording()` seja chamado novamente.

:::note

As implementações devem garantir uma limpeza adequada para evitar vazamentos de recursos.

:::

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L76)**

Implementação de áudio usando GStreamer.

### Métodos

#### `clear_player`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L398)**

Esvazia o appsrc do player para descartar imediatamente qualquer áudio enfileirado.

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L253)**

Lê uma amostra da placa de áudio. Retorna a amostra ou None em caso de erro.

Veja `AudioBase.get_audio_sample()` para a documentação completa.

**Retorna:**

| Tipo | Descrição |
|------|-------------|
| `Optional[npt.NDArray[np.float32]]` | A amostra capturada em formato bruto, ou None em caso de erro. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L267)**

Obtém a taxa de amostragem de entrada do dispositivo de áudio.

Veja `AudioBase.get_input_audio_samplerate()` para a documentação completa.

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L281)**

Obtém o número de canais de entrada do dispositivo de áudio.

Veja `AudioBase.get_input_channels()` para a documentação completa.

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L274)**

Obtém a taxa de amostragem de saída do dispositivo de áudio.

Veja `AudioBase.get_output_audio_samplerate()` para a documentação completa.

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L288)**

Obtém o número de canais de saída do dispositivo de áudio.

Veja `AudioBase.get_output_channels()` para a documentação completa.

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L330)**

Reproduz um arquivo de áudio.

Veja `AudioBase.play_sound()` para a documentação completa.

:::tip

TODO: por enquanto esta função deve ser usada na versão sem fio.

:::

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `sound_file` | `str` | Caminho para o arquivo de áudio a ser reproduzido. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L317)**

Envia dados de áudio para o dispositivo de saída.

Veja `AudioBase.push_audio_sample()` para a documentação completa.

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L302)**

Abre a saída de áudio usando GStreamer.

Veja `AudioBase.start_playing()` para a documentação completa.

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L233)**

Abre a placa de áudio usando GStreamer.

Veja `AudioBase.start_recording()` para a documentação completa.

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L310)**

Para a reprodução de áudio e libera recursos.

Veja `AudioBase.stop_playing()` para a documentação completa.

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L295)**

Libera o recurso da câmera.

Veja `AudioBase.stop_recording()` para a documentação completa.

---

## Funções Utilitárias de Áudio

### `reachy_mini.media.audio_utils.get_respeaker_card_number`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L67)**

Retorna o número da placa da placa de som ReSpeaker, ou 0 se não for encontrada.

:::note

Esta função executa 'arecord -l' para listar os dispositivos de captura de áudio disponíveis e processa a saída para encontrar dispositivos Reachy Mini Audio ou ReSpeaker. Ela é utilizada principalmente em sistemas Linux com configuração de áudio ALSA.

A função retorna:
- Inteiro positivo: número da placa do dispositivo Reachy Mini Audio detectado
- 0: nenhum dispositivo Reachy Mini Audio encontrado, usando a placa de som padrão
- -1: ocorreu um erro ao tentar detectar dispositivos de áudio

:::

**Exemplo:**

```python
card_num = get_respeaker_card_number()
if card_num > 0:
    print(f"Using Reachy Mini Audio card {card_num}")
elif card_num == 0:
    print("Using default sound card")
else:
    print("Error detecting audio devices")
```

**Retorna:**

| Tipo | Descrição |
|------|-------------|
| `int` | O número da placa do dispositivo ReSpeaker/Reachy Mini Audio detectado. Retorna 0 se nenhum dispositivo específico for encontrado (usa a placa de som padrão), ou -1 se houver um erro ao executar o comando de detecção. |

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L110)**

Verifica se ~/.asoundrc existe e contém reachymini_audio_sink e reachymini_audio_src.

:::note

Esta função verifica a presença do arquivo de configuração ALSA ~/.asoundrc e confirma se ele contém as entradas de configuração necessárias para dispositivos de áudio Reachy Mini (reachymini_audio_sink e reachymini_audio_src). Essas entradas são necessárias para o roteamento adequado de áudio e gerenciamento de dispositivos.

:::

**Exemplo:**

```python
if has_reachymini_asoundrc():
    print("Reachy Mini audio configuration is properly set up")
else:
    print("Need to configure Reachy Mini audio devices")
    write_asoundrc_to_home()  # Create the configuration
```

**Retorna:**

| Tipo | Descrição |
|------|-------------|
| `bool` | True se ~/.asoundrc existir e contiver as entradas de configuração de áudio Reachy Mini necessárias, False caso contrário. |

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L141)**

Verifique se ~/.asoundrc existe e está corretamente configurado para o Reachy Mini Audio.

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L160)**

Grava o arquivo .asoundrc com a configuração de áudio do Reachy Mini no diretório home do usuário.

Essa função cria um arquivo de configuração ALSA (.asoundrc) no diretório home do usuário que configura a placa de som ReSpeaker para o roteamento adequado de áudio e suporte a múltiplos clientes. A configuração permite acesso simultâneo à entrada e saída de áudio, o que é essencial para a funcionalidade de áudio da versão Reachy Mini Wireless.

A configuração gerada inclui:
- Configurações de dispositivo de áudio padrão apontando para a placa de som ReSpeaker
- Plugin dmix para saída de áudio de múltiplos clientes (reachymini_audio_sink)
- Plugin dsnoop para entrada de áudio de múltiplos clientes (reachymini_audio_src)
- Configurações adequadas de buffer e taxa de amostragem para desempenho ideal

:::info

Essa função detecta automaticamente o número da placa ReSpeaker e cria uma configuração adaptada ao hardware detectado. Ela é usada principalmente para a versão Reachy Mini Wireless.

O arquivo de configuração será criado em ~/.asoundrc e substituirá qualquer arquivo existente com o mesmo nome. As configurações de áudio existentes devem ser salvas em backup antes de chamar esta função.

:::

---

## Funções de Utilitários de Controle de Áudio

### `reachy_mini.media.audio_control_utils.ReSpeaker`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L172)**

Classe para interfacear com o dispositivo USB ReSpeaker XVF3800.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L317)**

Fecha a interface.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L240)**

Lê dados de um parâmetro especificado no dispositivo ReSpeaker.

---

#### `write`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L181)**

Grava dados em um parâmetro especificado no dispositivo ReSpeaker.

---

### `reachy_mini.media.audio_control_utils.find`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L322)**

[LINE[73]]Encontra e retorna o dispositivo USB ReSpeaker com o Vendor ID e Product ID fornecidos.

:::note

Essa função procura por dispositivos USB com o Vendor ID e Product ID especificados usando o backend libusb. Os valores padrão visam dispositivos XMOS XVF3800 usados em matrizes de microfones ReSpeaker.

:::

**Exemplo:**

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

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `vid` | `int` | USB Vendor ID a ser procurado. Padrão: 0x2886 (XMOS). |
| `pid` | `int` | USB Product ID a ser procurado. Padrão: 0x001A (XMOS XVF3800). |

**Retorno:**

| Tipo | Descrição |
|------|-------------|
| `ReSpeaker \| None` | Um objeto ReSpeaker se o dispositivo for encontrado, None caso contrário. |

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L360)**

Inicializa o dispositivo USB ReSpeaker. Procura por IDs de dispositivo novos e beta.

:::info

Essa função tenta inicializar uma matriz de microfones ReSpeaker procurando por dispositivos USB com Vendor e Product IDs conhecidos. Ela tenta:
1. Novo firmware Reachy Mini Audio (0x38FB:0x1001) - preferido
2. Firmware antigo ReSpeaker (0x2886:0x001A) - com aviso para atualizar

A função lida com erros do backend USB de forma robusta e retorna None se nenhum dispositivo compatível for encontrado ou se a inicialização falhar.

:::

**Exemplo:**

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

**Retorno:**

| Tipo | Descrição |
|------|-------------|
| `Optional[ReSpeaker]` | Um objeto ReSpeaker se um dispositivo compatível for encontrado, None caso contrário. |

---

## Câmera

### `reachy_mini.media.camera_base.CameraBase`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L39)**

Classe abstrata para abrir e gerenciar uma câmera.

Esta classe define a interface que todas as implementações de câmera devem seguir. Ela fornece parâmetros comuns de câmera e métodos para gerenciar dispositivos de câmera, incluindo captura de imagem, gerenciamento de resolução e calibração da câmera.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L275)**

Fecha a câmera e libera os recursos.

Este método deve interromper qualquer captura de imagem em andamento e liberar todos os recursos associados. Depois de chamar este método, `read()` deve retornar None até que `open()` seja chamado novamente.

:::note

As implementações devem garantir a limpeza adequada para evitar vazamento de recursos.

:::

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `logger` | `logging.Logger` | Instância de logger para mensagens relacionadas à câmera. |
| `_resolution` | `Optional[CameraResolution]` | Configuração atual de resolução da câmera. |
| `camera_specs` | `Optional[CameraSpecs]` | Especificações da câmera, incluindo resoluções suportadas e parâmetros de calibração. |
| `resized_K` | `Optional[npt.NDArray[np.float64]]` | Matriz intrínseca da câmera redimensionada para corresponder à resolução atual. |

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L227)**

Abre a câmera.

Este método deve inicializar o dispositivo de câmera e prepará-lo para capturar imagens. Após chamar este método, `read()` deve ser capaz de recuperar quadros da câmera.

:::note

As implementações devem lidar com qualquer alocação de recursos necessária, configuração da câmera e verificação de erros. Se a câmera não puder ser aberta, as implementações devem registrar mensagens de erro apropriadas.

:::

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L247)**

Lê uma imagem da câmera. Retorna a imagem ou None em caso de erro.

:::note

Este método deve ser chamado após `open()` ter sido chamado. A resolução da imagem pode ser obtida por meio da propriedade de resolução.

:::

**Exemplo:**

```python
camera.open()
frame = camera.read()
if frame is not None:
    cv2.imshow("Camera Frame", frame)
    cv2.waitKey(1)
```

**Retorno:**

| Tipo | Descrição |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | Um array numpy contendo a imagem capturada em formato BGR (convenção do OpenCV), ou None se nenhuma imagem estiver disponível ou se ocorrer um erro. O formato do array é (altura, largura, 3), onde a última dimensão representa os canais de cor BGR. |

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L175)**

Define a resolução da câmera.

:::note

Este método atualiza a resolução da câmera e redimensiona automaticamente a matriz intrínseca da câmera (K) para corresponder à nova resolução. O redimensionamento preserva o campo de visão da câmera e a posição do ponto principal em relação às dimensões da imagem.

:::

**Exemplo:**

```python
from reachy_mini.media.camera_constants import CameraResolution
camera.set_resolution(CameraResolution.R1280x720at30fps)
```

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `resolution` | `CameraResolution` | A resolução desejada da câmera a partir do enum CameraResolution. |

---

### `reachy_mini.media.camera_opencv.OpenCVCamera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L76)**

Implementação de câmera usando OpenCV.

Esta classe implementa a interface CameraBase usando OpenCV, fornecendo suporte de câmera multiplataforma para robôs Reachy Mini. Ela detecta e configura automaticamente modelos de câmera suportados.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L173)**

Libera o recurso de câmera.

Veja `CameraBase.close()` para a documentação completa.

**Parâmetros:**

| Nome | Descrição |
|------|-------------|
| Herda todos os atributos de CameraBase. | - |
| Gerencia adicionalmente objetos OpenCV VideoCapture e conexões de câmera. | - |

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L117)**

Abre a câmera usando OpenCV VideoCapture.

Veja `CameraBase.open()` para a documentação completa.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L151)**

Lê um quadro da câmera.

Veja `CameraBase.read()` para a documentação completa.

**Retorno:**

O quadro como um array numpy uint8, ou None se nenhum quadro puder ser lido.

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L108)**

Define a resolução da câmera.

---

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L79)**

Implementação de câmera usando GStreamer.

### Métodos

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L292)**

Libera o recurso da câmera.

---

#### `get_video_device`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L297)**

Use `Gst.DeviceMonitor` para encontrar o caminho da câmera Unix /dev/videoX.

Retorna o caminho do dispositivo (por exemplo, '/dev/video2') ou '' se não for encontrado.

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L255)**

Abre a câmera usando GStreamer.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L276)**

Lê um frame da câmera. Retorna o frame ou None em caso de erro.

**Retorna:**

| Tipo | Descrição |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | O frame BGR capturado como um array NumPy, ou None em caso de erro. |

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L230)**

Define a resolução da câmera.

---

## Funções de Utilitários da Câmera

### `reachy_mini.media.camera_utils.find_camera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_utils.py#L44)**

Encontra e retorna a câmera Reachy Mini.

Procura primeiro pela câmera Reachy Mini, depois Arducam, depois a câmera Raspberry Pi mais antiga. Retorna None se nenhuma câmera for encontrada. Faz fallback para uma webcam genérica se nenhuma câmera específica for detectada.

:::info

Esta função tenta detectar câmeras na seguinte ordem:
1. Reachy Mini Lite Camera (preferida)
2. Câmera Raspberry Pi mais antiga
3. Arducam
4. Webcam genérica (fallback)

A função define automaticamente o codec de vídeo apropriado (MJPG) para as câmeras Reachy Mini e Raspberry Pi para garantir compatibilidade.

:::

**Exemplo:**

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

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `apiPreference` | `int` | Backend de API preferido para a câmera. O padrão é `cv2.CAP_ANY`. As opções incluem `cv2.CAP_V4L2` (Linux), `cv2.CAP_DSHOW` (Windows), `cv2.CAP_MSMF` (Windows), etc. |
| `no_cap` | `bool` | Se True, fecha a câmera após encontrá-la. Útil para testar a detecção da câmera sem mantê-la aberta. O padrão é False. |

**Retorna:**

| Tipo | Descrição |
|------|-------------|
| `Tuple[Optional[cv2.VideoCapture], Optional[CameraSpecs]]` | Uma tupla contendo: `cv2.VideoCapture` (um objeto VideoCapture se a câmera for encontrada e aberta com sucesso, caso contrário None) e `CameraSpecs` (as especificações da câmera detectada ou None se nenhuma câmera for encontrada). |

---

### `reachy_mini.media.camera_utils.find_camera_by_vid_pid`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_utils.py#L128)**

Encontra e retorna uma câmera com o VID e PID especificados.

:::note

Esta função usa o pacote `cv2_enumerate_cameras` para enumerar as câmeras disponíveis e encontrar uma com o USB Vendor ID e Product ID especificados. Isso é útil para selecionar modelos específicos de câmera quando múltiplas câmeras estão conectadas ao sistema.

A câmera Arducam cria dois dispositivos /dev/videoX que o `enumerate_cameras` não consegue diferenciar, portanto esta função tenta abrir cada dispositivo potencial até encontrar um que funcione.

:::

**Exemplo:**

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

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `vid` | `int` | Vendor ID da câmera. O padrão é `ReachyMiniLiteCamSpecs.vid` (0x38FB). |
| `pid` | `int` | Product ID da câmera. O padrão é `ReachyMiniLiteCamSpecs.pid` (0x1002). |
| `apiPreference` | `int` | Backend de API preferido para a câmera. O padrão é `cv2.CAP_ANY`. No Linux, isso usa automaticamente `cv2.CAP_V4L2` para melhor compatibilidade. |

**Retorna:**

| Tipo | Descrição |
|------|-------------|
| `cv2.VideoCapture \| None` | Um objeto VideoCapture se a câmera com VID/PID correspondentes for encontrada e aberta com sucesso, caso contrário None. |

---

## Constantes da Câmera

### `reachy_mini.media.camera_constants.CameraResolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L34)**

Classe base para resoluções de câmera.

Enumeração de resoluções de câmera padronizadas e taxas de quadros suportadas pelas câmeras Reachy Mini. Cada valor do enum contém uma tupla de (largura, altura, fps).

:::note

Os valores do enum são tuplas contendo (largura, altura, frames_por_segundo). Nem todas as resoluções são suportadas por todos os modelos de câmera – verifique as especificações da câmera específica para as resoluções disponíveis.

:::

**Exemplo:**

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

**Resoluções Disponíveis:**

| Resolução | Descrição |
|------------|-------------|
| `R1536x864at40fps` | Resolução de 1536x864 a 40 fps |
| `R1280x720at60fps` | Resolução de 1280x720 a 60 fps (HD) |
| `R1280x720at30fps` | Resolução de 1280x720 a 30 fps (HD) |
| `R1920x1080at30fps` | Resolução de 1920x1080 a 30 fps (Full HD) |
| `R1920x1080at60fps` | Resolução de 1920x1080 a 60 fps (Full HD) |
| `R2304x1296at30fps` | Resolução de 2304x1296 a 30 fps |
| `R1600x1200at30fps` | Resolução de 1600x1200 a 30 fps |
| `R3264x2448at30fps` | Resolução de 3264x2448 a 30 fps |
| `R3264x2448at10fps` | Resolução de 3264x2448 a 10 fps |
| `R3840x2592at30fps` | Resolução de 3840x2592 a 30 fps |
| `R3840x2592at10fps` | Resolução de 3840x2592 a 10 fps |
| `R3840x2160at30fps` | Resolução de 3840x2160 a 30 fps (4K UHD) |
| `R3840x2160at10fps` | Resolução de 3840x2160 a 10 fps (4K UHD) |
| `R3072x1728at10fps` | Resolução de 3072x1728 a 10 fps |
| `R4608x2592at10fps` | Resolução de 4608x2592 a 10 fps |

---

### `reachy_mini.media.camera_constants.CameraSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L107)**

Especificações básicas da câmera.

Dataclass contendo especificações para um modelo de câmera, incluindo resoluções suportadas, parâmetros de calibração e informações de identificação USB.

:::note

A matriz intrínseca K tem o formato:
```
[[fx,  0, cx],
 [ 0, fy, cy],
 [ 0,  0,  1]]
```

Onde fx, fy são comprimentos focais em pixels e cx, cy são as coordenadas do ponto principal (tipicamente perto do centro da imagem).

:::

**Exemplo:**

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

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `name` | `str` | Nome legível por humanos do modelo de câmera. |
| `available_resolutions` | `List[CameraResolution]` | Lista de resoluções e taxas de quadros suportadas para este modelo de câmera. |
| `default_resolution` | `CameraResolution` | Resolução padrão usada quando a câmera é inicializada. |
| `vid` | `int` | USB Vendor ID para identificar este modelo de câmera. |
| `pid` | `int` | USB Product ID para identificar este modelo de câmera. |
| `K` | `npt.NDArray[np.float64]` | Matriz intrínseca da câmera 3x3 contendo comprimentos focais e coordenadas do ponto principal. |
| `D` | `npt.NDArray[np.float64]` | Array de 5 elementos contendo coeficientes de distorção (k1, k2, p1, p2, k3) para distorção radial e tangencial. |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L163)**

Especificações da câmera Arducam.

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L182)**

Especificações da câmera Reachy Mini Lite.

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L229)**

Especificações da câmera Reachy Mini Wireless.
