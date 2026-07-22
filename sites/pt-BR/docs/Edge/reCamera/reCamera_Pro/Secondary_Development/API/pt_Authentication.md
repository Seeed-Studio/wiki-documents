---
description: Apresenta como fazer login no dispositivo via API.
title: Autenticação
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_authentication
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_api_authentication/
---

# Autenticação

A reCamera usa autenticação por Token JWT. Após um login bem-sucedido, o dispositivo retorna um Token por meio do cabeçalho de resposta `Set-Cookie`. As requisições subsequentes devem carregar esse Token.

## Visão geral dos endpoints

| Método | Caminho | Finalidade | Requer login |
|---|---|---|---|
| GET | `/system/key` | Obter chave pública RSA (para alteração de senha) | Não |
| POST | `/system/login` | Fazer login e obter um Token | Não |
| GET | `/system/check` | Verificar se é o primeiro login | Não |
| PUT | `/system/password` | Alterar senha de administrador | Sim |

## Login

### Requisição

```text
POST /cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

| Campo | Descrição |
|---|---|
| `sUserName` | Nome de usuário de login, padrão é `admin` |
| `sPassword` | Senha de login, transmitida em texto simples |

### Resposta

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| Campo | Descrição |
|---|---|
| `iStatus` | `0` = senha correta, `-1` = senha incorreta, `-3` = bloqueado temporariamente |
| `iAuth` | `1` = login bem-sucedido, `0` = login falhou, `2` = é necessário alterar a senha |
| `sWaittime` | Tempo de espera em segundos quando bloqueado |

### Obtenção do Token

Em caso de login bem-sucedido, os cabeçalhos de resposta contêm `Set-Cookie`:

```text
Set-Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...; Max-Age=86400; Path=/
```

O tempo de vida do Token é determinado por `Max-Age`, com valor padrão de 86400 segundos (24 horas).

### Uso do Token

Todas as requisições autenticadas devem incluir o Token no cabeçalho Cookie:

```text
Cookie: token=<JWT_TOKEN>
```

Por exemplo, para obter informações do dispositivo:

```text
GET /cgi-bin/entry.cgi/system/device-info
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...
```

Se o Token estiver ausente ou expirado, o dispositivo retorna:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

### Bloqueio de login

O dispositivo aplica um limite de tentativas malsucedidas baseado em IP. Após repetidas senhas incorretas, `iLoginAttempts` é incrementado. Quando o limite é atingido, o dispositivo retorna `iStatus=-3` com um valor `sWaittime`. Você deve aguardar o fim do bloqueio antes de tentar novamente.

## Verificar primeiro login

```text
GET /cgi-bin/entry.cgi/system/check
```

Resposta:

```json
{
  "bFirst": false
}
```

`bFirst=true` indica que o dispositivo está no fluxo de primeiro login e que a senha padrão deve ser alterada.

## Alterar senha

Alterar a senha requer obter primeiro uma chave pública RSA, depois criptografar as senhas antiga e nova antes de enviar.

### Obter chave pública

```text
GET /cgi-bin/entry.cgi/system/key
```

Resposta:

```json
{
  "sPublicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA...\n-----END RSA PUBLIC KEY-----"
}
```

| Campo | Descrição |
|---|---|
| `sPublicKey` | Chave pública RSA, usada para criptografia de senha durante a alteração de senha |

### Criptografia de senha

Calcule o hash SHA256 da senha como uma string hexadecimal, depois criptografe-o com a chave pública usando preenchimento RSA PKCS1v15 e, por fim, codifique o resultado em Base64.

### Enviar alteração

```text
PUT /cgi-bin/entry.cgi/system/password
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "sUserName": "admin",
  "sOldPassword": "<encrypted_old_password>",
  "sNewPassword": "<encrypted_new_password>"
}
```

| Campo | Descrição |
|---|---|
| `sUserName` | Nome de usuário |
| `sOldPassword` | Senha antiga criptografada |
| `sNewPassword` | Nova senha criptografada |

Resposta de sucesso:

```json
{
  "code": 0,
  "message": "success"
}
```

Códigos de erro:

| Código | Descrição |
|---:|---|
| `10001` | Nova senha é muito fraca |
| `10002` | Token expirado, faça login novamente |

Após alterar a senha, o Token atual pode se tornar inválido. Faça login novamente para obter um novo Token.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>