---
sidebar_position: 1
description: HTTP API 快速入门
title: HTTP API 快速入门
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-data-platform/api/http-api/quick-start
aliases:
  - /cn/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## 前提条件
如果您还没有账户，请注册 SenseCAP Portal。
- [中国站](https://sensecap.seeed.cn)
- [全球站](https://sensecap.seeed.cc)

:::note
   LoRaWAN 设备使用全球站
:::

## 获取访问密钥

1. 登录 SenseCAP Portal。
2. 导航到"安全/访问 API 密钥"
3. 点击"创建访问密钥"
4. 点击"API ID"，输入密码后获取"API ID"和"访问 API 密钥"。

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## 获取所有设备组
使用 curl 发起 HTTP 请求。以下示例调用 API 获取账户下的所有设备组。

- username = API ID
- password = 访问 API 密钥

curl --user "username":"password" \
     https://sensecap.seeed.cc/openapi/list_groups

您应该将用户名和密码替换为之前获取的内容。该命令将输出如下内容

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

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>