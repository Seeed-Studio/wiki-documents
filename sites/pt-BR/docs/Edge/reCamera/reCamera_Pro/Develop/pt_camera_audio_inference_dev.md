---
description: Desenvolva pipelines de captura de câmera, captura e reprodução de áudio, inferência RKNN e streaming RTSP em seus próprios aplicativos reCamera Pro.
title: Desenvolvimento de Câmera, Áudio e Inferência
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - GStreamer
  - RKNN
  - ALSA
  - RTSP
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_media_dev
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_media_dev/
---

# Desenvolvimento de Câmera, Áudio e Inferência

Esta página aborda os blocos de construção de um aplicativo nativo reCamera Pro: captura de câmera com GStreamer, captura e reprodução de áudio com ALSA, inferência RKNN e saída de vídeo RTSP. Todos os fatos aqui são extraídos de projetos em funcionamento no dispositivo — a maioria dos exemplos vem do aplicativo [Reconhecimento Visual de Presença e Fala Offline](/pt-br/recamera_pro_visual_wake_stt/).

Para configuração de ambiente e implantação, consulte [SDK e Aplicativo Minimalista](/pt-br/recamera_pro_sdk_setup/).

## Pipeline de Referência

Um aplicativo completo de IA no dispositivo encadeia as etapas abaixo. Este é o pipeline real do projeto Visual Wake:

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

O ponto-chave para o seu próprio aplicativo: quadros de câmera fluem através do GStreamer, cada quadro (ou uma cópia reduzida) é alimentado para um ou mais modelos RKNN, e a lógica do aplicativo consome as saídas do modelo. A captura de áudio começa somente quando a lógica do aplicativo a solicita — o app não grava continuamente.

## Captura de Câmera

- Dispositivo de câmera: `/dev/video13`, lido pelo GStreamer (`v4l2src`)
- Formato de captura padrão: `1920x1080` a até 30 fps; a taxa de processamento real depende do tempo de inferência
- Elementos GStreamer do firmware usados por projetos em funcionamento: `appsrc`, `videoconvert`, `jpegenc`, `rtpjpegpay`

Capture quadros no seu aplicativo por meio de um pipeline GStreamer e, em seguida, realize o pré-processamento exato que o seu modelo exige.

:::warning
Não alimente bytes de câmera NV12 diretamente em um modelo RGB ou BGR. O pipeline ou o aplicativo deve realizar a conversão NV12-para-RGB/BGR e a normalização exigidas pelo modelo; ordem de cores ou normalização incompatíveis produzem cores erradas e resultados de inferência incorretos.
:::

## Captura e Reprodução de Áudio

### Entrada de Microfone

O firmware fornece um dispositivo de áudio PCM dedicado para aplicativos:

- Nome do dispositivo: `ai_asr` — 16 kHz, S16_LE, quatro canais; o canal 0 é normalmente selecionado
- Usar `ai_asr` evita competir com o processo do fornecedor que possui `hw:0,0`

Grave um clipe de teste diretamente no dispositivo para verificar o caminho de entrada de áudio:

```bash
arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav
```

### Saída do Alto-falante

O alto-falante onboard é acionado por meio da interface padrão ALSA do Linux. Reproduza um arquivo WAV com:

```bash
aplay test.wav
```

`aplay` é um player PCM ALSA: ele só pode reproduzir dados PCM/WAV e não consegue decodificar MP3. Converta antes, se necessário:

```bash
ffmpeg -i test.mp3 test.wav
```

O controle de volume e a listagem de dispositivos (`aplay -l`, `amixer`) são descritos em [Reproduzir Áudio e Controlar Volume](/pt-br/recamera_pro_speaker_usage/).

{/* TODO(verify): document how the vendor audio service coexists with user applications — which processes hold hw:0,0, how to release audio/camera resources safely, and how to restore vendor services after stopping them */}

## Inferência RKNN

- Use a **RKNN Runtime C API** para aplicativos nativos em C/C++; `rknn-toolkit-lite2` não é usado neste fluxo de trabalho
- Versão do toolkit e do runtime: **RKNN-Toolkit2 2.3.2 / RKNN Runtime 2.3.2**, alvo `rv1126b`
- Faça o link contra um RKNN Runtime compatível com a placa e use o runtime já instalado no dispositivo — seu aplicativo não deve substituí-lo
- Uma conversão de modelo bem-sucedida não garante inferência correta: compare a saída numérica RKNN com o modelo ONNX de origem e mantenha o pré-processamento explícito

A conversão de modelo a partir de ONNX (incluindo quantização FP16 e INT8 com imagens de calibração) é abordada em [Desenvolver com Agentes de Codificação de IA](/pt-br/recamera_pro_development_cpp_skill/) e na seção de implantação de modelos deste wiki.

## Saída de Vídeo RTSP

Os aplicativos podem publicar um stream de vídeo anotado via RTSP para monitoramento remoto. O projeto Visual Wake executa um servidor RTSP com estes padrões:

| Item | Padrão |
| --- | --- |
| Porta | `8554` |
| Caminho de montagem | `/visual-wake` |
| Resolução de saída | `960x540` |
| Taxa de quadros declarada | 15 fps (a taxa real depende da vazão de inferência) |

Reproduza o stream a partir de um computador host usando transporte TCP:

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

O firmware padrão também fornece seu próprio stream RTSP para o pipeline configurado pela WebUI — consulte a documentação de RTSP na seção Construa Seu Próprio App.

{/* TODO(verify): document whether a user application's RTSP server can run at the same time as the stock firmware's RTSP service, and which ports each uses by default */}

## Recursos de Monitoramento e Depuração

Aplicativos em funcionamento expõem status por vários canais; adote aqueles que se encaixam no seu projeto:

- **Eventos no terminal** — imprima eventos acionáveis (por exemplo `VISUAL_WAKE track=1`, `STT_RESULT ...`) em stdout
- **Logging de depuração** — logs de inicialização, pose por quadro, nível de áudio, RTSP e desempenho de inferência atrás de uma flag `--debug`
- **Dashboard web** — um serviço HTTP/WebSocket (porta padrão `8080`, endpoint de saúde `/health`) sem dependência de nuvem
- **Dashboard no terminal** — uma visualização interativa no próprio terminal (mínimo de 80×18 caracteres)

## Solução Rápida de Problemas

| Problema | Causa provável | Solução |
| --- | --- | --- |
| Sem quadros de câmera | Dispositivo de vídeo incorreto | Verifique se `/dev/video13` existe e não está sendo usado por outro processo |
| Cores erradas ou detecções ruins | Incompatibilidade na conversão NV12-para-RGB/BGR ou na normalização | Verifique novamente o contrato do modelo; torne o pré-processamento explícito |
| Falha na captura de áudio | `ai_asr` indisponível ou formato diferente | Execute o comando de teste `arecord` acima no dispositivo |
| RTSP não pode ser reproduzido | Problema de rede, porta ou plugin GStreamer | Use reprodução via TCP e verifique os elementos GStreamer de firmware necessários |

Para problemas em todo o dispositivo, consulte [Solução de Problemas](/pt-br/recamera_pro_faqs/).

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
