---
description: Esta página fornece uma visão geral da API, informando sobre o endereço base, protocolo e método de autenticação. Comece consultando esta página para obter uma compreensão abrangente.
title: Introdução
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_introduction
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_api_introduction/
---

# Introdução

A reCamera RV1126B fornece um conjunto de Web APIs baseadas em HTTP que permitem obter informações do dispositivo, configurar parâmetros do sistema, gerenciar redes, controlar áudio e vídeo, executar inferência de IA, gerenciar arquivos e realizar atualizações de firmware.

## Informações básicas

| Item | Descrição |
|---|---|
| IP do dispositivo | Padrão `192.168.42.1`; o endereço real depende da sua rede |
| Protocolo | HTTP ou HTTPS |
| Caminho base | `/cgi-bin/entry.cgi` |
| Tipo de conteúdo | `application/json` |
| Autenticação | Token JWT via Cookie |

## Estrutura da URL

Todos os endpoints CGI da API seguem esta estrutura:

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<api_category>/<resource>/<sub_resource>
```

Por exemplo, para obter informações do dispositivo:

```text
http://192.168.42.1/cgi-bin/entry.cgi/system/device-info
```

Alguns endpoints não passam pelo caminho base CGI e são acessados diretamente, como as APIs de porta serial e de arquivos:

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## Visão geral da documentação

| Documento | Conteúdo |
|---|---|
| Início rápido | Fazer login e chamar sua primeira API do zero |
| Autenticação | Fluxo de login, uso de Token e alteração de senha |
| Convenções comuns | Formato de resposta, nomenclatura de campos, códigos de erro |
| Referência da API | Descrições detalhadas dos endpoints organizadas por função |
| Códigos de erro | Referência de códigos de erro |
| FAQ | Perguntas frequentes |


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
