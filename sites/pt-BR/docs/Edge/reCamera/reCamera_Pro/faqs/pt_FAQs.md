---
title: Perguntas frequentes sobre reCamera Pro
description: Este artigo resume problemas comuns da reCamera Pro e suas soluções, ajudando você a localizar e corrigir rapidamente problemas como falha da WebUI ao pré-visualizar fluxos de vídeo e travamentos do sistema causados pelo envio de modelos.
keywords:
  - reCamera Pro
  - FAQ
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs
sku: 10003420
sidebar_position: 1
last_update:
  date: 2026-08-05
  author: Sizhaozhou
createdAt: '2026-08-05'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_faqs/
---

# Perguntas frequentes sobre reCamera Pro


## 1. A WebUI exibe repetidamente erros de conexão Wi-Fi e não consegue pré-visualizar fluxos de vídeo

**Sintoma**: A interface WebUI exibe repetidamente avisos de erro de conexão Wi-Fi e não consegue pré-visualizar corretamente os fluxos de vídeo.

**Solução**:

- Primeiro, verifique se o dispositivo está recebendo alimentação corretamente.
- Se estiver usando uma interface Type-C para alimentação, certifique-se de usar um adaptador de energia que suporte o protocolo PD.
- Recomenda-se usar o cabo de alimentação DC fornecido de fábrica para garantir uma alimentação estável.

## 2. O envio de modelos de precisão FB16 faz a WebUI travar

**Sintoma**: Nas versões V1.1.1 e anteriores, o envio de modelos de precisão FB16 faz com que o processo principal do sistema trave.

**Solução**: Você pode corrigir isso usando um dos dois métodos a seguir:

1. **Restaurar configurações de fábrica**: Pressione e segure o botão na lateral do dispositivo por 15 segundos para restaurar as configurações de fábrica.
2. **Modificar o arquivo de configuração do sistema**:
   - Conecte o dispositivo via cabo USB e faça login no dispositivo usando SSH.
   - Modifique o arquivo `/userdata/config/rkipc.ini`.
   - Altere o campo `model` na seção de configuração `[rc_model.0]` para `yolox_s.rknn`.

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