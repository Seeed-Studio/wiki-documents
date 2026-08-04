---
sidebar_position: 1
description: SenseCraft Data Platform API のアクセスキーを取得し、最初の HTTP API リクエストを実行します。
title: HTTP API クイックスタート
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
url: https://wiki.seeedstudio.com/ja/sensecraft-data-platform/api/http-api/quick-start/
---

## 前提条件

アカウントをお持ちでない場合は、お住まいの地域のサービスで SenseCraft Data Platform（旧 SenseCAP Portal）に登録してください：

  - [中国ステーション](https://sensecap.seeed.cn)
  - [グローバルステーション](https://sensecap.seeed.cc)

:::note
LoRaWAN デバイスはグローバルステーションで使用されます。
:::

## アクセスキーを取得する

1. SenseCraft Data Platform にログインします。
2. `Security` → `Access API keys` に移動します。
3. `Create Access Key` をクリックします。
4. パスワードを入力し、`API ID` と `Access API Key` をコピーします。

![SenseCraft Data Platform の Access API keys ページ](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![API ID と Access API Key のダイアログ](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## すべてのデバイスグループを取得する
curl を使用して HTTP リクエストを送信します。次の例では、アカウント配下のすべてのデバイスグループを取得します。

- username = API ID
- password = Access API keys

```bash
curl --user "username":"password" \
  https://sensecap.seeed.cc/openapi/list_groups
```

上で取得した API ID と Access API Key で `username` と `password` を置き換えます。コマンドは次のようなレスポンスを返します：

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

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
