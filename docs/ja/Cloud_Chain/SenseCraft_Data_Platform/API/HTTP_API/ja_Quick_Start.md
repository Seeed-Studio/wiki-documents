---
sidebar_position: 1
description: HTTP API クイックスタート
title: HTTP API クイックスタート
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft-data-platform/api/http-api/quick-start
aliases:
  - /ja/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## 前提条件
  アカウントをお持ちでない場合は、SenseCAP Portal にご登録ください。
  - [China Station](https://sensecap.seeed.cn)
  - [China Station](https://sensecap.seeed.cc)

:::note
   LoRaWAN デバイスは Global Station で使用されます
:::

## アクセスキーの取得

1. SenseCAP Portal にログインします。
2. 「Security/Access API keys」に移動します
3. 「Create Access Key」をクリックします
4. 「API ID」をクリックし、パスワードを入力後に「API ID」と「Access API keys」を取得します。

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## すべてのデバイスグループの取得
curl を使用して HTTP リクエストを作成します。以下の例では、API を呼び出してアカウント配下のすべてのデバイスグループを取得します。

- username = API ID
- password = Access API keys

curl --user "username":"password" \
     https://sensecap.seeed.cc/openapi/list_groups

先ほど取得したものに置き換えてください。コマンドは以下のような出力を行います

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

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>