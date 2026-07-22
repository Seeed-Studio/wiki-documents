---
description: Esta página abrange as regras comuns aplicáveis a todas as interfaces, incluindo formatos de resposta, convenções de nomenclatura de campos e métodos de concatenação de URL. Recomenda-se que você leia esta página primeiro. Assim, ao analisar interfaces específicas depois, você não precisará retornar com frequência a esta página para consulta.
title: Convenções Comuns
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_common_conventions
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_api_common_conventions/
---

# Convenções Comuns

## Formato de Resposta

### Endpoints de Leitura

Endpoints de leitura (GET) normalmente retornam diretamente o objeto de dados de negócio, sem um campo `code`. Por exemplo:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10"
}
```

### Endpoints de Operação

Endpoints de operação (POST, PUT, DELETE) retornam um objeto contendo `code` e `message`:

```json
{
  "code": 0,
  "message": "success"
}
```

`code=0` significa sucesso. Um `code` diferente de zero indica um erro, e `message` fornece uma descrição.

### Resposta de Erro

Quando uma solicitação falha, o dispositivo retorna:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## Nomenclatura de Campos

Os nomes de campos JSON usam camelCase. A primeira letra indica o tipo de dado:

| Prefixo | Tipo | Exemplo |
|---|---|---|
| `i` | Inteiro | `iCpuUsage` |
| `f` | Ponto flutuante | `fTemperature` |
| `s` | String | `sSerialNumber` |
| `b` | Booleano | `bRunning` |
| `l` | Lista | `lDetection` |
| `d` | Objeto | `dIpv4` |

## Construção de URL

### Endpoints CGI

A maioria dos endpoints requer o caminho base CGI:

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<API_PATH>
```

### Endpoints de Caminho Direto

Alguns endpoints ignoram a camada CGI e são acessados diretamente:

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## Autenticação

Com poucas exceções (`/system/key`, `/system/login`, `/system/check`), todos os endpoints exigem o Token no cabeçalho da requisição:

```text
Cookie: token=<JWT_TOKEN>
```

Consulte [Authentication](https://wiki.seeedstudio.com/pt-br/recamera_pro_api_authentication) para saber como obter um Token.

## Códigos de Erro

Os códigos de erro são segmentados por módulo funcional:

| Prefixo | Módulo |
|---|---|
| `100xx` | Dispositivo e Sistema |
| `200xx` | Visualização ao Vivo |
| `300xx` | Gravação |
| `400xx` | Inferência de IA |
| `500xx` | Terminal e Logs |

Códigos de erro comuns:

| Código | Descrição |
|---:|---|
| `10001` | Senha muito fraca |
| `10002` | Token expirado |
| `10003` | Um download de firmware já está em andamento |
| `10004` | Número de porta fora do intervalo |
| `10005` | Número de porta já em uso |

Consulte [Error Codes](https://wiki.seeedstudio.com/pt-br/recamera_pro_api_error_codes) para a lista completa.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos múltiplos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
