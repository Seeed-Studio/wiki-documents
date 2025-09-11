---
description: APIキーの設定方法
title: APIキーの設定方法
keywords:
- SenseCAP Indicator の使い方
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **APIキーの設定方法**

:::caution ジオブロッキング
**注意**: OpenAI APIサービスは、中国、イラン、ロシアなど一部の国では利用できない場合があります。詳細については、[サポートされている国と地域のリスト](https://platform.openai.com/docs/supported-countries)をご参照ください。

ネットワーク環境がOpenAI APIへの接続を許可していることを確認してください。
:::

### APIキーを取得する

- **ステップ1:** https://platform.openai.com/signup にログインします。
  まだアカウントをお持ちでない場合は、新規登録が必要です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/login.png"/></div>

- **ステップ2:** [OpenAIキーのページ](https://platform.openai.com/account/api-keys)にアクセスするか、メニュー項目「View API keys」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/key1.png"/></div>

- **ステップ3:** 「Create new secret key」ボタンをクリックして新しいキーを作成します。以下の画像を参考にしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/newkey.png"/></div>

> **レート制限:**
> OpenAIは、APIへのリクエストに対してレート制限を設けています。これらは、リクエスト数/分、トークン数/分、または画像モデルの場合は画像数/分で適用されます。
>
> 詳細は[レート制限](https://platform.openai.com/docs/guides/rate-limits/overview)のドキュメントをご覧ください。また、モデルごとの[デフォルトのレート制限](https://platform.openai.com/docs/guides/rate-limits/what-are-the-rate-limits-for-our-api)も参照してください。

### キーを設定する

- **ステップ4:** **シリアルポート**を介してIndicatorに接続します（ここでは、Arduino IDEが提供するシリアルモニターツールを使用します）。

ボードとポートを選択します。

- **ボード**: Seeed INDICATOR RP2040
- **ポート**: usbserialポート

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/chooseboard.png"/></div>

- **ステップ5:** ポートモニターを開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/monitor.png"/></div>

- **ステップ6:** 次のコマンドをデバイスに送信してAPIキーを設定します:

```sh
openai_api -k {sk-your apikey}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setkey.png"/></div>

ログに「`openai_api_key read successful`」と表示されれば、設定完了です。これでAIの旅をお楽しみいただけます！

# **技術サポート**
**SenseCAP Indicatorに関するサポートが必要ですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>