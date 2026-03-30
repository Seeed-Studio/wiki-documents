---
description: Configurações avançadas para ajuste fino da câmera e do array de microfones do Reachy Mini, incluindo controles do libcamerasrc, configuração do GStreamer e parâmetros de áudio do XMOS XVF3800.
title: Controles Avançados de Mídia
slug: /reachymini_platforms_reachy_mini_media_advanced_controls
keywords:
  - mídia
  - câmera
  - microfone
  - alto-falante
  - libcamerasrc
  - gstreamer
  - xmos
  - xvf3800
  - áudio
  - dof
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_media_advanced_controls/
---

# Controles Avançados de Mídia

Esta página descreve configurações avançadas para ajustar com precisão a câmera e o sistema de som.


## Câmera

A câmera do Raspberry Pi pode ser detectada usando o seguinte comando:

```bash
rpicam-hello --list
# Available cameras
# -----------------
# 0 : imx708_wide [4608x2592 10-bit RGGB] (/base/soc/i2c0mux/i2c@0/imx708@1a)
#     Modes: 'SRGGB10_CSI2P' : 1536x864 [120.13 fps - (768, 432)/3072x1728 crop]
#                             2304x1296 [56.03 fps - (0, 0)/4608x2592 crop]
#                              4608x2592 [14.35 fps - (0, 0)/4608x2592 crop]
```

Para tirar uma foto com o Reachy Mini:

```bash
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592
# Copy the picture to your computer
# scp pollen@reachy-mini.local:/home/pollen/test.jpg .
```

Todos os controles da câmera estão detalhados [na documentação oficial](https://www.raspberrypi.com/documentation/computers/camera_software.html). Por exemplo, você pode alterar as configurações de foco automático:

```bash
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592 --autofocus-mode manual --lens-position 0
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592 --autofocus-mode manual --lens-position 1000
```

No nível do SDK, a câmera é controlada pelo GStreamer usando o componente [libcamerasrc](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/webrtc_daemon.py). Você pode ver os parâmetros disponíveis com o seguinte comando:

```bash
gst-inspect-1.0 libcamerasrc
```

Em seguida, o código pode ser adaptado da seguinte forma:

```python
def _configure_video(
    self, cam_path: str, pipeline: Gst.Pipeline, webrtcsink: Gst.Element
) -> None:
    self._logger.debug(f"Configuring video {cam_path}")
    camerasrc = Gst.ElementFactory.make("libcamerasrc")
    # camerasrc.set_property("af-mode", "manual")
    # camerasrc.set_property("lens-position", 1000)
```


## Microfones e Alto-falantes

O array de 4 microfones é baseado no [reSpeaker XMOS XVF3800 da Seeed](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/). Ele também fornece saída de áudio. Por padrão, o processador de áudio executa cancelamento de eco acústico (AEC), portanto, a saída do alto-falante é cancelada na entrada do microfone. Dessa forma, o robô não se escuta.

Ele aparece como `Pollen Robotics Reachy Mini Audio` no sistema. O controle de volume pode ser ajustado com `alsamixer`. Pressione F6 para selecionar a placa de áudio e F5 para visualizar os volumes de entrada e saída. É recomendado deixar tudo em 100%, exceto o PCM (volume de saída), que você pode ajustar conforme necessário.

O AEC e outros filtros de áudio podem ser ajustados graças ao XMOS XVF3800. Usuários avançados podem consultar a [documentação oficial](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/01_overview.html) para entender melhor o processamento de som. Um resumo dos parâmetros está listado [nesta página](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/AA_control_command_appendix.html).

Para acessar esses parâmetros, use nosso script auxiliar em Python [audio_control_utils.py](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/audio_control_utils.py):

```bash
# Read a parameter
python src/reachy_mini/media/audio_control_utils.py PP_MIN_NS
# Output:
# PP_MIN_NS: (0.15000000596046448,)

# Write a parameter
python src/reachy_mini/media/audio_control_utils.py PP_MIN_NS --values 0
# Output:
# Writing to PP_MIN_NS with values: [0.0]
# Write operation completed successfully
```

O array de microfones fornece uma saída estéreo, portanto não é possível obter a saída bruta de todos os 4 microfones ao mesmo tempo. No entanto, você pode obter dois microfones brutos por vez:

```bash
# mic 0 - left channel
python audio_control_utils.py AUDIO_MGR_OP_L --values 3 0
# mic 1 - right channel
python audio_control_utils.py AUDIO_MGR_OP_R --values 3 1

# mic 2 - left channel
python audio_control_utils.py AUDIO_MGR_OP_L --values 3 2
# mic 3 - right channel
python audio_control_utils.py AUDIO_MGR_OP_R --values 3 3
```

A disposição do array linear é a seguinte:

![Layout do Array Linear](https://www.xmos.com/documentation/XM-014888-PC/html/_images/03_DoA_azimuth_linear.png)

A antena direita do Reachy Mini está próxima ao mic 0, enquanto a antena esquerda está próxima ao mic 3.


### Direção de Chegada do Som

Graças aos 4 microfones, o sistema pode estimar a direção de chegada (DoA) do som. A direção é dada com base na disposição acima.

```bash
python src/reachy_mini/media/audio_control_utils.py DOA_VALUE
# Output
# DOA_VALUE: [0, 133, 0, 0, 0, 1, 0, 0, 0]
python src/reachy_mini/media/audio_control_utils.py DOA_VALUE_RADIANS
# Output
# DOA_VALUE_RADIANS: (0.5410520434379578, 1.0)
```
Esse recurso também está disponível diretamente a partir [do SDK](/pt-br/reachymini_sdk_python-sdk#sensors--media).
