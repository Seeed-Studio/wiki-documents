---
sidebar_position: 1
description: Get a SenseCraft Data Platform API access key and make your first HTTP API request.
title: HTTP API Quickstart
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
url: https://wiki.seeedstudio.com/sensecraft-data-platform/api/http-api/quick-start/
---

## Prerequisite

If you do not have an account, register for SenseCraft Data Platform (formerly SenseCAP Portal) on the service for your region:

  - [China Station](https://sensecap.seeed.cn)
  - [Global Station](https://sensecap.seeed.cc)

:::note
LoRaWAN devices are used with the Global Station.
:::

## Get an Access Key

1. Log in to SenseCraft Data Platform.
2. Navigate to `Security` → `Access API keys`.
3. Click `Create Access Key`.
4. Enter your password, then copy the `API ID` and `Access API Key`.

![Access API keys page in SenseCraft Data Platform](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![API ID and Access API Key dialog](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## Get all the Device Groups
Use curl to make an HTTP request. The following example gets all device groups under the account.

- username = API ID
- password = Access API keys

```bash
curl --user "username":"password" \
  https://sensecap.seeed.cc/openapi/list_groups
```

Replace `username` and `password` with the API ID and Access API Key obtained above. The command returns a response similar to the following:

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

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
