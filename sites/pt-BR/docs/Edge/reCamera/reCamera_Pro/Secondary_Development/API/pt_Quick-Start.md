---
description: Esta página é um guia de início rápido. São necessários apenas três passos para colocá-lo em funcionamento: fazer login, obter o Token e chamar a primeira API. Basta seguir as instruções e você estará pronto para usar.
title: Início Rápido
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_quick_start
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_api_quick_start/
---

# Início Rápido

Esta página orienta você desde o zero até concluir um login e chamar sua primeira API.

## Pré-requisitos

* O dispositivo está ligado e conectado à sua rede
* Você sabe o endereço IP do dispositivo (este guia usa `192.168.7.200` como exemplo)
* Você sabe o nome de usuário e a senha de login (o nome de usuário padrão é `admin`)

## Passo 1: Verificar a Acessibilidade do Dispositivo

Abra esta URL em um navegador web:

```text
https://192.168.7.200
```

Se o dispositivo tiver HTTPS habilitado com um certificado autoassinado, o navegador avisará que o certificado não é confiável. Para testes locais, você pode prosseguir ignorando o aviso.

## Passo 2: Fazer Login para Obter um Token

O endpoint de login não requer autenticação. Envie uma solicitação de login para o dispositivo:

```text
POST https://192.168.7.200/cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

:::note
A senha de login é transmitida em texto simples. Se o HTTPS estiver habilitado, a senha é protegida por TLS durante a transmissão.
:::

Em caso de sucesso, a resposta é:

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| Campo | Descrição |
|---|---|
| `iStatus` | `0` = senha correta, `-1` = senha incorreta, `-3` = bloqueado temporariamente após falhas repetidas |
| `iAuth` | `1` = login bem-sucedido, `0` = login falhou, `2` = alteração de senha necessária |
| `sWaittime` | Tempo de espera em segundos quando bloqueado |

Os cabeçalhos da resposta também conterão:

```text
Set-Cookie: token=<JWT_TOKEN>; Max-Age=86400; Path=/
```

Este `token` é a credencial de autenticação para todas as solicitações de API subsequentes.

## Passo 3: Chamar uma API com o Token

Recupere as informações do dispositivo:

```text
GET https://192.168.7.200/cgi-bin/entry.cgi/system/device-info
Cookie: token=<JWT_TOKEN>
```

Resposta:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10",
  "sSensorModel": "SC850SL",
  "sBasePlateModel": "Base Board-V1.0,Expand Board-V1.0"
}
```

Se a requisição não carregar um Token ou se o Token tiver expirado, o dispositivo retornará:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## Tempo de Vida do Token

O Token é válido por 24 horas por padrão (`Max-Age=86400`). Após expirar, faça login novamente para obter um novo Token.

## Próximas Etapas

* Consulte [Authentication](https://wiki.seeedstudio.com/pt-br/recamera_pro_api_authentication) para a referência completa de login e alteração de senha
* Consulte [Common Conventions](https://wiki.seeedstudio.com/pt-br/recamera_pro_api_common_conventions) para formatos de resposta e regras de nomenclatura de campos
* Consulte [API Reference](https://wiki.seeedstudio.com/pt-br/recamera_pro_api_reference) para descrições de endpoints organizadas por função

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
