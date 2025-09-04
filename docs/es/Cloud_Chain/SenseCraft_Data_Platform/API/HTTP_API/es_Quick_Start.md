---
sidebar_position: 1
description: Inicio Rápido de HTTP API
title: Inicio Rápido de HTTP API
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecraft-data-platform/api/http-api/quick-start
aliases:
  - /es/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## Prerrequisito
  si no tienes una cuenta, por favor regístrate en el Portal SenseCAP.
  - [Estación China](https://sensecap.seeed.cn)
  - [Estación China](https://sensecap.seeed.cc)

:::note
   Los dispositivos LoRaWAN se usan con la Estación Global
:::

## Obtener una Clave de Acceso

1. Inicia sesión en el Portal SenseCAP.
2. Navega a "Security/Access API keys"
3. Haz clic en "Create Access Key"
4. Haz clic en "API ID", y obtén el "API ID" y las "Access API keys" después de ingresar la contraseña.

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## Obtener todos los Grupos de Dispositivos
Usa curl para hacer una solicitud HTTP. El siguiente ejemplo llama a la API para obtener todos los Grupos de Dispositivos bajo la cuenta.

- username = API ID
- password = Access API keys

curl --user "username":"password" \
     https://sensecap.seeed.cc/openapi/list_groups

Debes reemplazar y con el que obtuviste antes. El comando producirá una salida como la siguiente

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

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
