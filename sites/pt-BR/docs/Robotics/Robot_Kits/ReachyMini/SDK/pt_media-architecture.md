---
description: Guia detalhado da arquitetura de mídia do Reachy Mini, explicando os recursos de transmissão de áudio e vídeo entre diferentes modelos de robô usando GStreamer e WebRTC.
title: Arquitetura de Mídia
slug: /reachymini_sdk_media-architecture
keywords:
  - media
  - audio
  - video
  - gstreamer
  - webrtc
  - streaming
  - camera
  - microphone
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_media-architecture/
---

# Arquitetura de Mídia

Compreender a arquitetura de mídia do Reachy Mini é essencial para utilizar de forma eficaz seus recursos de áudio e vídeo. Eles funcionam de maneira diferente dependendo do modelo específico de Reachy Mini que você está usando.

> **Observação** : Há um trabalho em andamento para unificar a arquitetura de mídia em todos os modelos de Reachy Mini. As informações abaixo refletem o estado atual de acordo com a atualização mais recente.

## Reachy Mini

Os fluxos de vídeo e áudio podem ser acessados localmente no caso de um aplicativo embarcado ou remotamente (por meio do protocolo WebRTC) com o SDK em Python a partir de uma máquina remota. O GStreamer é usado para gerenciar esse aspecto.

Os fluxos são gerenciados pelo Daemon para que vários aplicativos possam acessá-los simultaneamente. Tecnicamente, o fluxo de vídeo é compartilhado entre um socket Unix e um servidor WebRTC. A placa de áudio é configurada com `.asoundrc` para ser acessível por vários aplicativos, sob os nomes `reachymini_audio_src` e `reachymini_audio_sink`.

![Reachy Mini Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_daemon.png)

![Reachy Mini Media Client](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_client.png)

Graças ao webrtc, os fluxos de áudio e vídeo também podem ser acessados diretamente a partir de um navegador web. Por exemplo, o [aplicativo desktop](/pt-br/reachymini_platforms_reachy_mini_lite_get_started#3--baixar-reachy-mini-control) utiliza esse recurso.

![Reachy Mini Media Web](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_web.png)

## Reachy Mini Lite

No caso do Reachy Mini Lite, o Daemon não gerencia a câmera, o microfone e o alto-falante. Ele apenas reproduz um som durante a inicialização e o encerramento ou se movimentos forem acionados a partir do dashboard.

> **Observação:** Sounddevice bloqueia a placa de áudio ao reproduzir um som. Tenha isso em mente quando você usar o som a partir do SDK e acionar um movimento a partir do dashboard.

![Reachy Mini Lite Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachyminilite_media_daemon.png)

Dois backends estão disponíveis. O padrão baseia-se na combinação de OpenCV para a câmera e sounddevice para a placa de áudio.

Um backend experimental em GStreamer também está disponível. Embora seja principalmente ajustado para sistemas Linux, ele deve funcionar em outras plataformas. No momento, ele exige uma instalação mais manual (consulte [gstreamer-installation](/pt-br/reachymini_sdk_gstreamer-installation))

![Reachy Mini Lite Media Client](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachyminilite_media_client.png)

## Controles Avançados

Consulte as páginas dedicadas para ajustar com precisão os parâmetros da câmera e do microfone para o [Reachy Mini](/pt-br/reachymini_platforms_reachy_mini_media_advanced_controls) e o [Reachy Mini Lite](/pt-br/reachymini_platforms_reachy_mini_lite_media_advanced_controls).
