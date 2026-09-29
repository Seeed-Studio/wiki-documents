---
description: Ative a saída RTSP na reCamera Pro e assista ao vídeo em players externos como o VLC, ou integre-a com NVRs e sistemas de gerenciamento de vídeo.
title: Assista ao Stream em um Player Externo (RTSP)
keywords:
  - reCamera
  - reCamera Pro
  - RTSP
  - streaming
  - VLC
  - NVR
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rtsp
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_rtsp/
---

# Assista ao Stream em um Player Externo (RTSP)

A página **Streaming Settings** da interface Web configura como a reCamera Pro envia seus streams de vídeo, para que você possa assistir ao vídeo em um player de terceiros (VLC, ffplay, etc.) ou integrar a câmera com NVRs, sistemas de gerenciamento de vídeo ou suas próprias aplicações.

## 1. Ativar o streaming no dispositivo

1. Faça login na interface Web e abra a página de visualização ao vivo.
2. Vá para **Streaming Settings** à direita.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

3. Configure os seguintes itens:

| Parâmetro | Descrição |
|---|---|
| Stream Setting Switch | Ativa ou desativa o streaming para o stream atual |
| Main Stream / Sub-Stream | Seleciona qual stream configurar |
| Streaming Protocol | Protocolo de streaming, por exemplo RTSP |
| Authentication Type | Autenticação necessária para acessar o stream, por exemplo sem autenticação |

4. Clique em **Apply Settings** para salvar.

O main stream e o sub-stream são configurados separadamente, então você pode, por exemplo, enviar o main stream em alta definição para um gravador e o sub-stream com baixa taxa de bits para visualizadores remotos.

## 2. Obter o endereço do stream

{/* TODO(verify): document exactly where the RTSP URL (including port and stream path) is shown in the Web UI, and the default port/path for main stream and sub-stream */}

O endereço do stream é baseado no IP do dispositivo — `rtsp://<reCamera_IP>:<port>/<stream path>`. Verifique a página Streaming Settings depois de aplicar sua configuração para obter o endereço exato de cada stream.

## 3. Reproduzir em um player externo

**VLC**: Media → Open Network Stream → cole o endereço RTSP → Play.

**ffplay** (do FFmpeg):

```bash
ffplay rtsp://<reCamera_IP>:<port>/<stream path>
```

Se você ativou um tipo de autenticação diferente de "no authentication", forneça as credenciais solicitadas pelo player.
{/* TODO(verify): confirm how credentials are passed in the RTSP URL / player dialog for each supported authentication type */}

**NVR / VMS**: adicione a câmera como um dispositivo RTSP usando o mesmo endereço; selecione o sub-stream se o NVR gerenciar muitos canais.

## Solução de problemas

- **Nenhuma imagem no player** — confirme se o Stream Setting Switch está ligado para o stream que você está reproduzindo e se o player está na mesma rede que o dispositivo.
- **Reprodução entrecortada via Wi-Fi** — mude para o sub-stream ou reduza a taxa de bits do main stream em [Basic Settings](/pt-br/recamera_pro_image_quality/).
- **O stream funciona na visualização do navegador, mas não externamente** — verifique o Authentication Type e quaisquer controles de acesso de rede (veja [Network, Time and Access Control](/pt-br/recamera_pro_device_info/)).

## Páginas relacionadas

- [Qualidade de Imagem e Baixa Luminosidade](/pt-br/recamera_pro_image_quality/) (parâmetros de codificação por stream)
- [Configurar Gravação de Eventos](/pt-br/recamera_pro_record_settings/)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
