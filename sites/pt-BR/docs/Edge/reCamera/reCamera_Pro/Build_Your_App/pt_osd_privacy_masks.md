---
description: Sobreponha nome do canal, data/hora e número de série no vídeo (OSD) e oculte áreas sensíveis com máscaras de privacidade na reCamera Pro.
title: Sobreposições OSD e Máscaras de Privacidade
keywords:
  - reCamera
  - reCamera Pro
  - OSD
  - privacy mask
  - image masking
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_osd_masks
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_osd_masks/
---

# Sobreposições OSD e Máscaras de Privacidade

Ambos os recursos são configurados na página de visualização ao vivo na interface Web: **OSD Settings** adiciona sobreposições de texto ao vídeo e **Image Masking** oculta áreas sensíveis.

## OSD Settings

**OSD (On-Screen Display)** sobrepõe informações como o nome do canal, data e hora e número de série do dispositivo no vídeo — útil para vigilância, revisão de gravações e identificação de dispositivos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

| Configuration Item | Description |
|---|---|
| Font Size | Tamanho do texto do OSD |
| Font Color | Cor do texto do OSD |
| Color Mode | Modo de cor do OSD, com opção de cor personalizada |
| Channel Name Overlay | Mostrar o nome do canal na tela |
| Channel Name | Nome de canal personalizado, por exemplo Camera 01 |
| Channel Name Coordinates | Onde o nome do canal aparece na tela |
| Date and Time Overlay | Mostrar data e hora na tela |
| Date Format | Formato de exibição da data |
| Time Format | Formato de exibição da hora, por exemplo 24 horas |
| Show Weekday | Se o dia da semana será exibido |
| Date and Time Coordinates | Onde a data/hora aparece na tela |
| Serial Number Overlay | Se o número de série do dispositivo será exibido |

As posições do OSD usam coordenadas relativas, então você pode colocar o texto em qualquer lugar permitido pelo layout — ou simplesmente **arrastar o texto** para a posição desejada na visualização.

Após configurar, clique em **Save Settings** para aplicar os parâmetros de OSD.

## Image Masking (máscaras de privacidade)

**Image Masking** configura áreas de máscara de privacidade que obscurecem partes sensíveis da cena, para que informações privadas nunca apareçam em visualizações ao vivo, gravações ou streams.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

Você pode adicionar máscaras manualmente ou deixar que a interface Web as desenhe automaticamente. Depois de adicioná-las, salve as configurações — o efeito aparece imediatamente na visualização.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

Cenários típicos:

- Mascarar informações sensíveis em áreas de escritório
- Mascarar áreas privadas como residências, números de porta e telas
- Atender a requisitos de proteção de privacidade de vídeo em espaços públicos ou compartilhados

## Verificar o resultado

Após salvar, verifique os dois lugares onde a imagem pode aparecer:

1. **Visualização ao vivo** — confirme que o texto do OSD está legível e que as máscaras cobrem totalmente as áreas pretendidas na resolução atual.
2. **Gravações e streams** — tire uma foto, faça uma gravação curta e (se habilitado) assista ao stream RTSP para confirmar que as sobreposições/máscaras estão gravadas na saída, e não apenas exibidas no navegador.

{/* TODO(verify): confirm whether privacy masks and OSD apply identically to snapshots, event recordings, and RTSP output on production firmware, and whether masks affect AI detection in masked areas */}

## Páginas relacionadas

- [Visualizar, Capturar e Gravar Manualmente](/pt-br/recamera_pro_live_preview/)
- [Qualidade de Imagem e Baixa Luminosidade](/pt-br/recamera_pro_image_quality/)
- [Configurar Detecção: Classes, Limiares e Taxa](/pt-br/recamera_pro_ai_inference/)

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
