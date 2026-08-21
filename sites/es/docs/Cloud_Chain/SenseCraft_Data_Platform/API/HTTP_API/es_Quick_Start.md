---
sidebar_position: 1
description: Obtén una clave de acceso de la API de SenseCraft Data Platform y realiza tu primera solicitud HTTP API.
title: Inicio rápido de HTTP API
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
url: https://wiki.seeedstudio.com/es/sensecraft-data-platform/api/http-api/quick-start/
---

## Requisitos previos

Si no tienes una cuenta, regístrate en SenseCraft Data Platform (anteriormente SenseCAP Portal) en el servicio correspondiente a tu región:

  - [Estación de China](https://sensecap.seeed.cn)
  - [Estación Global](https://sensecap.seeed.cc)

:::note
Los dispositivos LoRaWAN se utilizan con la Estación Global.
:::

## Obtener una clave de acceso

1. Inicia sesión en SenseCraft Data Platform.
2. Ve a `Security` → `Access API keys`.
3. Haz clic en `Create Access Key`.
4. Introduce tu contraseña y luego copia el `API ID` y `Access API Key`.

![Página de Access API keys en SenseCraft Data Platform](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![Diálogo de API ID y Access API Key](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## Obtener todos los grupos de dispositivos
Usa curl para realizar una solicitud HTTP. El siguiente ejemplo obtiene todos los grupos de dispositivos de la cuenta.

- username = API ID
- password = Access API keys

```bash
curl --user "username":"password" \
  https://sensecap.seeed.cc/openapi/list_groups
```

Sustituye `username` y `password` por el API ID y la Access API Key obtenidos anteriormente. El comando devuelve una respuesta similar a la siguiente:

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

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
