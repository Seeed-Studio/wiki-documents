---
description: Apresenta os códigos de erro retornados pela API.
title: Códigos de erro
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_error_codes
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_api_error_codes/
---

# Códigos de erro

## Segmentos de códigos de erro

Os códigos de erro são segmentados por módulo funcional:

| Prefixo | Módulo |
|---|---|
| `100xx` | Dispositivo e sistema |
| `200xx` | Visualização ao vivo |
| `300xx` | Gravação |
| `400xx` | Inferência de IA |
| `500xx` | Terminal e logs |

## Dispositivo e sistema (100xx)

| Código | Descrição |
|---:|---|
| `10001` | Senha muito fraca |
| `10002` | Token expirado |
| `10003` | Um download de firmware já está em andamento |
| `10004` | Número da porta fora do intervalo |
| `10005` | Número da porta já está em uso |

## Códigos de status HTTP

| Status HTTP | Descrição |
|---:|---|
| `200` | Solicitação bem-sucedida |
| `401` | Não autenticado ou Token inválido |
| `404` | Endpoint não encontrado |
| `405` | Método não permitido |
| `500` | Erro interno do servidor |

## Erros de autenticação

Quando uma solicitação não carrega um Token ou o Token expirou, o dispositivo retorna:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

Solução: faça login novamente para obter um novo Token e inclua `Cookie: token=<JWT_TOKEN>` nas solicitações subsequentes.

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
