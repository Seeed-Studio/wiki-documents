---
title: Crie um sistema de despertar visual e reconhecimento de fala offline com reCamera Pro
description: Aprenda a implantar um sistema de reconhecimento de fala em streaming bilíngue, acionado pelo olhar e totalmente no dispositivo, na reCamera Pro, com visualizações de status no terminal, na web e via RTSP.
keywords:
  - reCamera Pro
  - RV1126B
  - RKNN
  - visual wake
  - speech recognition
  - Zipformer
  - edge AI
image: https://raw.githubusercontent.com/yyling0101-a11y/recamera_pro_face_stt/main/images/gpt_images.png
slug: /recamera_pro_visual_wake_stt
last_update:
  date: 2026-08-24
  author: yylin
createdAt: '2026-08-24'
updatedAt: '2026-08-24'
sidebar_position: 1
url: https://wiki.seeedstudio.com/cn/recamera_pro_visual_wake_stt/
---

# Crie um sistema de despertar visual e reconhecimento de fala offline com reCamera Pro

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/gpt_images.png" /></div>

## Introdução

Este projeto implementa um fluxo de interação natural e totalmente no dispositivo para a reCamera Pro (RV1126B). A câmera detecta um rosto e estima a pose da cabeça. Somente depois que uma pessoa olha para a câmera de forma contínua o aplicativo abre o microfone e inicia o reconhecimento de fala em streaming. Em seguida, ele entra em um breve período de resfriamento para evitar disparos repetidos.

Ele é adequado para assistentes de voz, quiosques de exposição e pontos de entrada de voz na borda com foco em privacidade. Visão, avaliação de pose, extração de características de fala e inferência Zipformer são executadas localmente. O painel web não requer serviço em nuvem, processo Node.js, CDN nem fonte externa.

O código-fonte e versões futuras estão disponíveis no [repositório recamera_pro_face_stt no GitHub](https://github.com/yyling0101-a11y/recamera_pro_face_stt). O repositório conterá o projeto completo depois que este diretório for enviado.

## Recursos e pipeline

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

Os estados padrão são `IDLE`, `FACE_DETECTED`, `ATTENTION_PENDING`, `LISTENING` e `COOLDOWN`. Um olhar é aceito quando o valor absoluto de yaw é de no máximo 18° e o valor absoluto de pitch é de no máximo 13°. Manter essa pose por 700 ms aciona `LISTENING`. A captura de áudio começa apenas no estado de escuta, portanto o aplicativo não grava continuamente.

## Requisitos de hardware

- Uma reCamera Pro (RV1126B, aarch64)
- Um computador que possa alcançar o dispositivo por meio de Ethernet virtual via USB ou uma LAN
- Um SDK funcional da reCamera Pro
- Elementos GStreamer do firmware: `appsrc`, `videoconvert`, `jpegenc` e `rtpjpegpay`
- O dispositivo de áudio PCM `ai_asr` fornecido pelo firmware

:::note
A entrada de áudio padrão é `ai_asr`: 16 kHz, S16_LE, quatro canais, canal 0 selecionado. Isso evita competir com o processo do fornecedor que possui `hw:0,0`.
:::

## Obter o projeto

Depois que o projeto for publicado, clone-o no host de desenvolvimento:

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
```

O repositório contém modelos de visão, modelos Zipformer, o painel web e o script de cross-build. Não misture versões arbitrárias do RKNN Runtime: este projeto usa **RKNN 2.3.2** e tem como alvo `rv1126b`.

## Compilar e implantar

### 1. Configurar o SDK da reCamera Pro

O script de compilação procura o SDK em `/home/yylin/recamera_pro/recamera-pro-sdk` por padrão. Defina esta variável quando o seu estiver em outro lugar:

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

`scripts/build_recamera.sh` também valida `librknnrt.so`. Se o seu SDK ou runtime usar outro local, atualize `qualified_rknnrt` no script para um runtime RKNN 2.3.2 verificado, mantendo a etapa de validação por checksum.

### 2. Cross-compilar

A partir da raiz do projeto, execute:

```bash
bash scripts/build_recamera.sh
```

O script valida o SDK, carrega seu ambiente de compilação e cria `build-recamera/deploy/`:

```text
deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

### 3. Copiar o pacote de implantação para o dispositivo

Copie o **conteúdo** do diretório de implantação para um diretório na reCamera Pro. Para um dispositivo em `192.168.42.1`:

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
Mantenha os diretórios `models/` e `web/` nos caminhos relativos mostrados. O aplicativo usa esses caminhos relativos padrão para carregar seus recursos.
:::

## Executar o aplicativo

Execute o aplicativo a partir de seu diretório de implantação:

```bash
./visual_wake_app
```

Durante a operação normal, eventos acionáveis aparecem no terminal:

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

### Opções de inicialização

Use o seguinte comando para ver todas as opções suportadas pelo executável no dispositivo:

```bash
./visual_wake_app --help
```

As opções podem ser combinadas. Por exemplo, este comando verifica apenas o pipeline visual e desativa os serviços de rede:

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

#### Câmera e despertar visual

| Opção | Padrão | Descrição |
| --- | --- | --- |
| `--detector FILE` | `models/scrfd_500m_640_fp16.rknn` | Caminho para o modelo RKNN de detecção de rosto SCRFD. |
| `--landmark FILE` | `models/pfld_98_112_fp16.rknn` | Caminho para o modelo RKNN PFLD de 98 pontos de referência. |
| `--camera DEVICE` | `/dev/video13` | Dispositivo de câmera lido pelo GStreamer. |
| `--width N` | `1920` | Largura de captura de câmera solicitada. |
| `--height N` | `1080` | Altura de captura de câmera solicitada. |
| `--fps N` | `30` | Taxa de quadros da câmera solicitada; a taxa de processamento depende do tempo de inferência. |
| `--attention-dropout-ms N` | `250` | Período de tolerância, em milissegundos, para uma breve pose inválida após o início da atenção. Defina `0` para desativá-lo. |
| `--no-stt` | STT habilitado | Não iniciar o reconhecimento de fala; testar apenas a máquina de estados de despertar visual. |

#### Reconhecimento de fala e detecção de fim de fala

| Opção | Padrão | Descrição |
| --- | --- | --- |
| `--stt-encoder FILE` | `models/stt/encoder-epoch-99-avg-1-rv1126b.rknn` | Caminho do modelo de codificador Zipformer. |
| `--stt-decoder FILE` | `models/stt/decoder-epoch-99-avg-1-rv1126b.rknn` | Caminho do modelo de decodificador Zipformer. |
| `--stt-joiner FILE` | `models/stt/joiner-epoch-99-avg-1-rv1126b.rknn` | Caminho do modelo de junção Zipformer. |
| `--stt-vocab FILE` | `models/stt/vocab.txt` | Caminho do vocabulário. Ele deve corresponder ao conjunto de modelos selecionado. |
| `--audio-device NAME` | `ai_asr` | Nome do dispositivo de áudio ALSA/`arecord`. |
| `--audio-channels N` | `4` | Número total de canais no PCM de entrada. |
| `--audio-channel N` | `0` | Canal a ser usado; defina `-1` para fazer a média de todos os canais. |
| `--stt-chunk-ms N` | `160` | Duração de cada bloco de áudio passado para o STT, em milissegundos. |
| `--speech-rms-threshold F` | `0.006` | Limite de RMS que detecta o início da fala; aumente-o em ambientes mais ruidosos. |
| `--stt-min-speech-ms N` | `160` | Duração mínima de fala aceita em uma sessão de reconhecimento, em milissegundos. |
| `--stt-end-silence-ms N` | `2500` | Duração de silêncio que encerra o reconhecimento após o início da fala, em milissegundos. |
| `--stt-start-timeout-ms N` | `4000` | Tempo limite se a fala não começar após o despertar visual, em milissegundos. |
| `--stt-max-ms N` | `30000` | Duração máxima de uma sessão de escuta/reconhecimento, em milissegundos. |

#### RTSP, web e exibição no terminal

| Opção | Padrão | Descrição |
| --- | --- | --- |
| `--no-rtsp` | RTSP habilitado | Desativar o stream RTSP anotado com caixas de rosto, pontos de referência e pose. |
| `--rtsp-port PORT` | `8554` | Porta do servidor RTSP. |
| `--rtsp-mount PATH` | `/visual-wake` | Caminho de montagem RTSP; por exemplo, `/demo` gera `rtsp://DEVICE_IP:8554/demo`. |
| `--rtsp-width N` | `960` | Largura de saída RTSP. |
| `--rtsp-height N` | `540` | Altura de saída RTSP. |
| `--rtsp-fps N` | `15` | Taxa de quadros de saída RTSP declarada; a taxa real depende da vazão de inferência. |
| `--no-web` | Serviço web habilitado | Desativar o painel HTTP e WebSocket. |
| `--web-port PORT` | `8080` | Porta para o painel web e endpoint de saúde. |
| `--web-page PATH` | `web/dashboard.html` | Caminho para uma página de painel personalizada. |
| `--dashboard` | Desativado | Mostrar um painel no terminal interativo local. Não pode ser combinado com `--debug`. |
| `--debug` | Desativado | Imprimir logs de inicialização, por quadro de pose, nível de áudio, RTSP, contrato de tensores e desempenho de STT. Não pode ser combinado com `--dashboard`. |

## Duas maneiras de monitorar o sistema

### Painel no terminal

Use `--dashboard` em um terminal interativo:

```bash
./visual_wake_app --dashboard
```

O terminal deve ter pelo menos 80×18 caracteres. O painel esquerdo mostra o status do STT, texto parcial e resultados finais; o painel direito mostra a contagem de rostos, status de estar voltado para a câmera, ângulos de pose, status do cliente RTSP e latência de visão. Pressione `Ctrl-C` para restaurar o terminal normal. `--dashboard` não pode ser combinado com `--debug`.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/dashboard.png" /></div>

### Painel web

Por padrão, o aplicativo inicia um serviço HTTP/WebSocket em todas as interfaces de rede. Abra este endereço a partir de um computador ou telefone:

```text
http://DEVICE_IP:8080/
```

Para uma conexão de rede virtual via USB, por exemplo:

```text
http://192.168.42.1:8080/
```

A página se conecta automaticamente a `ws://DEVICE_IP:8080/ws` e se reconecta após interrupções. Ela mostra transcrições parciais e finais, estado visual, contagem de rostos, yaw/pitch/roll, status do RTSP e um gráfico de latência. O endpoint de saúde é `http://DEVICE_IP:8080/health`. Use `--web-port 8081` para outra porta ou `--web-page PATH` para uma página personalizada.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/web.png" /></div>

## Ver o stream de vídeo anotado

O aplicativo inicia um servidor RTSP por padrão:

```text
rtsp://DEVICE_IP:8554/visual-wake
```

No computador host, use:

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

A sobreposição mostra caixas de rosto, todos os 98 pontos de referência, yaw/pitch brutos, `facing=YES/NO` e o estado atual. Verde significa que a pose está dentro dos limites de entrada, laranja significa que é válida mas está fora dos limites, e vermelho significa que a pose é inválida.

## Ajustes finos

A posição da câmera, as características da lente e o ruído do ambiente afetam a experiência. Faça os ajustes nesta ordem:

1. Use `--debug` para observar yaw/pitch enquanto estiver de frente para a câmera e, em seguida, ajuste os limites de entrada.
2. Ajuste `--attention-dropout-ms` para breves oclusões; use `0` para desativar o período de tolerância.
3. Observe o RMS de áudio no ambiente-alvo e ajuste `--speech-rms-threshold`.
4. Use `--stt-end-silence-ms`, `--stt-start-timeout-ms` e `--stt-max-ms` para equilibrar a capacidade de resposta em relação a comandos mais longos.

O controlador usa suavização EMA e histerese de entrada/saída. Uma única pose inválida nunca aciona a escuta e não limpa imediatamente um temporizador de atenção ativo, enquanto a perda de rastreamento de rosto redefine o estado imediatamente.

## Solução de problemas

| Problema | Causa provável | Solução |
| --- | --- | --- |
| A compilação não encontra OpenCV ou RKNN | Ambiente do SDK ausente ou runtime incompatível | Verifique `RECAMERA_PRO_SDK`, carregue o `env.sh` do SDK e use RKNN 2.3.2. |
| Os arquivos de modelo não podem ser encontrados | Layout de implantação não foi preservado | Confirme que `models/` e `web/dashboard.html` existem no diretório de execução. |
| O despertar visual nunca é acionado | Câmera incorreta, limites rigorosos ou rosto pequeno | Use `--debug` e a sobreposição RTSP para verificar `/dev/video13`, pontos de referência e yaw/pitch. |
| STT relata um erro de áudio | `ai_asr` não está disponível ou seu formato é diferente | No dispositivo, teste `arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav`. |
| Página web indisponível | Porta inacessível ou serviço web desativado | Não use `--no-web`; teste `http://DEVICE_IP:8080/health`. |
| RTSP não pode ser reproduzido | Problema de rede, porta ou plugin do GStreamer | Use reprodução TCP e verifique os elementos GStreamer de firmware necessários. |

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
