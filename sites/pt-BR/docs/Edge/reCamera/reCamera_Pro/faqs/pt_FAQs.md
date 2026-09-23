---
title: reCamera Pro FAQ
description: Este artigo resume problemas comuns da reCamera Pro e suas soluções, ajudando você a localizar e corrigir rapidamente problemas como falha da WebUI ao pré-visualizar fluxos de vídeo e travamentos do sistema causados pelo envio de modelos.
keywords:
  - reCamera Pro
  - FAQ
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs_legacy
draft: true
sku: 10003420
sidebar_position: 1
last_update:
  date: 2026-08-05
  author: Sizhaozhou
createdAt: '2026-08-05'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_faqs_legacy/
---
<!-- PÁGINA LEGADA (reestruturação do wiki da reCamera Pro, fase 2): esta página foi substituída por Troubleshooting/troubleshooting.md (https://wiki.seeedstudio.com/pt-br/recamera_pro_faqs/), que agora utiliza o slug original /recamera_pro_faqs. Este arquivo é mantido para histórico como rascunho (slug /recamera_pro_faqs_legacy) e é excluído das compilações de produção. Não crie links para esta página. -->

## Índice de Migração de Conteúdo (Página Legada)

| Seção original | Novo local |
| --- | --- |
| Q1 Erros de conexão Wi-Fi / sem pré-visualização de vídeo | [Troubleshooting](https://wiki.seeedstudio.com/pt-br/recamera_pro_faqs/) (este slug) |
| Q2 Envio de modelo FP16 faz a Web UI travar | [Troubleshooting](https://wiki.seeedstudio.com/pt-br/recamera_pro_faqs/), [Validate Your Model](https://wiki.seeedstudio.com/pt-br/recamera_pro_model_validate/) |

# reCamera Pro FAQ


## 1. WebUI Exibe Repetidamente Erros de Conexão Wi-Fi e Não Consegue Pré-visualizar Fluxos de Vídeo

**Sintoma**: A interface WebUI exibe repetidamente avisos de erro de conexão Wi-Fi e não consegue pré-visualizar corretamente os fluxos de vídeo.

**Solução**:

- Primeiro, verifique se o dispositivo está sendo alimentado corretamente.
- Se estiver usando uma interface Type-C para alimentação, certifique-se de usar um adaptador de energia que suporte o protocolo PD.
- Recomenda-se usar o cabo de alimentação DC fornecido de fábrica para garantir uma alimentação estável.

## 2. Envio de Modelos com Precisão FB16 Faz a WebUI Travar

**Sintoma**: Nas versões V1.1.1 e anteriores, o envio de modelos com precisão FB16 faz o processo principal do sistema travar.

**Solução**: Você pode corrigir isso usando um dos dois métodos a seguir:

1. **Restaurar Configurações de Fábrica**: Pressione e segure o botão na lateral do dispositivo por 15 segundos para restaurar as configurações de fábrica.
2. **Modificar o Arquivo de Configuração do Sistema**:
   - Conecte o dispositivo via cabo USB e faça login no dispositivo usando SSH.
   - Modifique o arquivo `/userdata/config/rkipc.ini`.
   - Altere o campo `model` na seção de configuração `[rc_model.0]` para `yolox_s.rknn`.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>