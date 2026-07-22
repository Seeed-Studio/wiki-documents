---
description: Este wiki fornecerá uma breve introdução sobre como usar o alto-falante do dispositivo para reproduzir áudio.
title: Uso do alto-falante
keywords:
  - reCamera
  - reCamera Pro
  - Speaker
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_speaker_usage
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_speaker_usage/
---

# Uso do alto-falante do reCamera Pro

- O alto-falante é um modelo de 8Ω / 1W acionado pelo amplificador de potência de áudio Classe D NS4150B integrado.
- O dispositivo fornece uma interface de saída para alto-falante. Os usuários não precisam configurar o amplificador de potência separadamente e podem configurar diretamente o canal de reprodução de áudio por meio das ferramentas ALSA do Linux.

## Consultar dispositivos de áudio

Primeiro confirme se o sistema reconheceu o dispositivo de áudio:

``` bash
aplay -l
```

Saída de exemplo:

```
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprv1126b [rockchip,rv1126b-acodec], device 0: dailink-multicodecs multicodec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

## Ajustar volume

1. Verificar o Mixer atual:

``` bash
amixer
```

2. Ver os itens de controle suportados:

``` bash
amixer scontrols
```

Saída de exemplo:

```
Simple mixer control 'Headphone',0
Simple mixer control 'Speaker',0
Simple mixer control 'ACodec ADC',0
Simple mixer control 'ACodec Digital Gain',0
```

3. Definir volume:

``` bash
amixer set 'DAC Digital' 50%
```

:::note

- Volume definido acima de 80% causará estalos.
- Ajuste o volume de acordo com as condições reais para evitar sobrecarga.

:::

## Reproduzir áudio

Primeiro copie o arquivo de áudio que você precisa reproduzir para o dispositivo. Suponha que o caminho do arquivo de áudio seja `/sdcard/audio.wav3`, use o seguinte comando para reproduzir o áudio:

``` bash
aplay /sdcard/audio.wav3
```

Se o seu arquivo de áudio estiver em formato MP3, converta-o primeiro para o formato WAV usando o comando abaixo e, em seguida, reproduza-o conforme descrito acima:

```bash
ffmpeg -i test.mp3 test.wav
```

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
