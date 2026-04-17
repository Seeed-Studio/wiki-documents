---
sidebar_position: 1
description: Guia rápido da API HTTP
title: Guia rápido da API HTTP
keywords:
  - HTTP API
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/api/http-api/quick-start
aliases:
  - /Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-03-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/api/http-api/quick-start/
---

## Pré-requisito
  Se você não tiver uma conta, registre-se no SenseCAP Portal.
  - [China Station](https://sensecap.seeed.cn)
  - [China Station](https://sensecap.seeed.cc)

:::note
   Dispositivos LoRaWAN são usados com a Estação Global
:::

## Obter uma Access Key

1. Faça login no SenseCAP Portal.
2. Navegue até “Security/Access API keys”
3. Clique em “Create Access Key”
4. Clique em “API ID” e obtenha o “API ID” e as “Access API keys” após inserir a senha.

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## Obter todos os Grupos de Dispositivos
Use curl para fazer uma solicitação HTTP. O exemplo a seguir chama a API para obter todos os Grupos de Dispositivos da conta.

- username = API ID
- password = Access API keys

curl --user "username":"password" \
     https://sensecap.seeed.cc/openapi/list_groups

Você deve substituir e pelos valores que obteve anteriormente. O comando irá gerar uma saída como a seguinte

```cpp
{
    "code": "0",
    "data": [
        {
            "group_name": "Default",
            "group_uuid": ""
        },
        {
            "group_name": "test group",
            "group_uuid": "80523B280630E611"
        },
        {
            "group_name": "demo",
            "group_uuid": "EBAD5387C4FC8711"
        }
    ]
}
```

## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
