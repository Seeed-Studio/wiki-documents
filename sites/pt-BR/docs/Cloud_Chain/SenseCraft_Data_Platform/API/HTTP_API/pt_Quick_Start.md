---
sidebar_position: 1
description: Obtenha uma chave de acesso à API da SenseCraft Data Platform e faça sua primeira requisição HTTP à API.
title: Introdução rápida à API HTTP
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
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/api/http-api/quick-start/
---

## Pré-requisitos

Se você ainda não tem uma conta, registre-se na SenseCraft Data Platform (anteriormente SenseCAP Portal) no serviço da sua região:

  - [China Station](https://sensecap.seeed.cn)
  - [Global Station](https://sensecap.seeed.cc)

:::note
Dispositivos LoRaWAN são usados com a Global Station.
:::

## Obter uma Access Key

1. Faça login na SenseCraft Data Platform.
2. Navegue até `Security` → `Access API keys`.
3. Clique em `Create Access Key`.
4. Digite sua senha e, em seguida, copie o `API ID` e a `Access API Key`.

![Página Access API keys na SenseCraft Data Platform](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![Janela API ID e Access API Key](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## Obter todos os grupos de dispositivos
Use curl para fazer uma requisição HTTP. O exemplo a seguir obtém todos os grupos de dispositivos da conta.

- username = API ID
- password = Access API keys

```bash
curl --user "username":"password" \
  https://sensecap.seeed.cc/openapi/list_groups
```

Substitua `username` e `password` pelo API ID e pela Access API Key obtidos acima. O comando retorna uma resposta semelhante à seguinte:

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

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
