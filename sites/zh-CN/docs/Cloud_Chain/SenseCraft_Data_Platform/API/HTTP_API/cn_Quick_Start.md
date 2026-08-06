---
sidebar_position: 1
description: 获取 SenseCraft Data Platform API 访问密钥，并发出你的第一个 HTTP API 请求。
title: HTTP API 快速入门
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
updatedAt: '2025-07-10'
url: https://wiki.seeedstudio.com/cn/sensecraft-data-platform/api/http-api/quick-start/
---

## 前置条件

如果你还没有账号，请在你所在区域的服务站点注册 SenseCraft Data Platform（原 SenseCAP Portal）：

  - [中国站](https://sensecap.seeed.cn)
  - [全球站](https://sensecap.seeed.cc)

:::note
LoRaWAN 设备需使用全球站。
:::

## 获取访问密钥

1. 登录 SenseCraft Data Platform。
2. 进入 `Security` → `Access API keys`。
3. 点击 `Create Access Key`。
4. 输入你的密码，然后复制 `API ID` 和 `Access API Key`。

![SenseCraft Data Platform 中的 Access API keys 页面](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![API ID 和 Access API Key 对话框](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## 获取所有设备分组
使用 curl 发起 HTTP 请求。下面的示例会获取该账号下的所有设备分组。

- username = API ID
- password = Access API keys

```bash
curl --user "username":"password" \
  https://sensecap.seeed.cc/openapi/list_groups
```

将 `username` 和 `password` 替换为上面获取到的 API ID 和 Access API Key。该命令会返回类似如下的响应：

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

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
