---
description: Assista à transmissão ao vivo no navegador, tire fotos, inicie e pare gravações manuais e alterne entre o fluxo principal e o subfluxo na reCamera Pro.
title: "Pré-visualização, Captura e Gravação Manual"
keywords:
  - reCamera
  - reCamera Pro
  - live preview
  - take photo
  - record video
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_live_preview
aliases:
  - /recamera_pro_live_view
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_live_preview/
---

# Pré-visualização, Captura e Gravação Manual

A reCamera Pro possui uma interface Web integrada, então você nunca precisa instalar software cliente extra. Desde que o seu computador esteja na mesma rede local que o dispositivo, abra um navegador e acesse:

```text
http://<reCamera_IP>
```

No primeiro login, a interface Web solicita que você altere a senha. A senha inicial (senha antiga) é `recamera`; insira uma nova senha de sua escolha e, em seguida, faça login com o nome de usuário `admin`.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

Após fazer login, você pode pré-visualizar a transmissão ao vivo, tirar fotos, gravar vídeos, alternar fluxos e abrir as configurações de imagem, inferência de IA e do dispositivo — tudo o que é necessário para depuração rápida e verificação de funções.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

## Assistir à pré-visualização ao vivo

Na página de visualização ao vivo, o lado esquerdo é a área de pré-visualização de vídeo e o lado direito é a área de configuração de funções. Clique em **Start Playback** para assistir à transmissão atual da câmera no navegador.

A parte inferior da área de pré-visualização fornece controles básicos de reprodução:

- Seleção de Main Stream / Sub-Stream
- Start Playback / Stop Playback
- Ajuste de volume
- Exibição do status atual da conexão

Se o dispositivo estiver desconectado, o fluxo de vídeo estiver anormal ou a rede estiver inacessível, a janela de pré-visualização exibirá um aviso de falha de conexão para que você possa identificar rapidamente o problema com o fluxo.

## Tirar uma foto

**Take Photo** salva o quadro atual como uma imagem — útil para registro de cenas, arquivos de depuração ou coleta de dados. A imagem é baixada automaticamente para a pasta de download padrão do seu navegador.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

## Gravar um vídeo manualmente

Você pode iniciar e parar a gravação diretamente pela interface Web.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />

1. Clique em **Start Recording**. O botão muda para **End Recording**.
2. Quando terminar, clique em **End Recording** e aguarde um momento enquanto a reCamera Pro empacota o vídeo.
3. O navegador baixa automaticamente a gravação como um arquivo MP4 para a sua pasta de download padrão.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

:::note
A gravação manual a partir da página de pré-visualização é diferente da gravação baseada em IA/eventos. Para gravar automaticamente quando ocorrerem detecções, sons ou disparos externos — e para manter as gravações no armazenamento do dispositivo — consulte [Configurar gravação de eventos](/pt-br/recamera_pro_record_settings/) e [Encontrar gravações e armazenamento](/pt-br/recamera_pro_storage/).
{/* TODO(verify): confirm whether manual Web UI recordings are ever kept on device storage in addition to the browser download, and the exact firmware version behavior */}
:::

## Alternar entre fluxo principal e subfluxo

A interface Web permite alternar entre o **fluxo principal** e o **subfluxo**. Escolha com base na largura de banda da rede, nas necessidades de qualidade de imagem ou no cenário de pré-visualização:

- **Fluxo principal** — pré-visualização em alta definição, armazenamento de vídeo e análise de IA.
- **Subfluxo** — pré-visualização de baixa largura de banda, visualização remota ou acesso multicanal.

Os parâmetros de codificação do fluxo (resolução, taxa de quadros, taxa de bits, etc.) são configurados separadamente para cada fluxo; consulte [Qualidade de imagem e baixa luminosidade](/pt-br/recamera_pro_image_quality/).

## Próximas etapas

- [Ajustar a qualidade de imagem e o desempenho em baixa luminosidade](/pt-br/recamera_pro_image_quality/)
- [Assistir ao fluxo em um player externo (RTSP)](/pt-br/recamera_pro_rtsp/)
- [Adicionar sobreposições OSD e máscaras de privacidade](/pt-br/recamera_pro_osd_masks/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
