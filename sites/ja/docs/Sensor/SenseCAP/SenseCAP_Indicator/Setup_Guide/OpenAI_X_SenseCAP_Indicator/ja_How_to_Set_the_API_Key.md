---
description: API キーの設定方法
title: API キーの設定方法
keywords:
- Get Started with SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key
sidebar_position: 4
last_update:
  date: 5/31/2023
  author: Thomas
---

# **API キーの設定方法**

:::caution 地域制限
**注意**: OpenAI API サービスは、中国、イラン、ロシアなどの特定の国では利用できない場合があります。詳細については、[サポートされている国と地域のリスト](https://platform.openai.com/docs/supported-countries)を参照してください。

お使いのネットワーク環境で OpenAI API への接続が可能であることを確認してください。
:::

### API キーの取得

- **ステップ 1:** https://platform.openai.com/signup にログインします
  アカウントをお持ちでない場合は、新規登録が必要です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/login.png"/></div>

- **ステップ 2:** [OpenAI キーページ](https://platform.openai.com/account/api-keys)にアクセスするか、メニュー項目「View API keys」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/key1.png"/></div>

- **ステップ 3:** 「Create new secret key」ボタンをクリックして新しいキーを作成します。参考画像をご覧ください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/newkey.png"/></div>

> **レート制限:**
> OpenAI は API に対して行うリクエストにレート制限を適用しています。これらは分あたりのリクエスト数、分あたりのトークン数、または画像モデルの場合は分あたりの画像数に適用されます。
>
> 詳細については[レート制限](https://platform.openai.com/docs/guides/rate-limits/overview)のドキュメントを参照するか、お使いのモデルの[デフォルトレート制限](https://platform.openai.com/docs/guides/rate-limits/what-are-the-rate-limits-for-our-api)を参照してください。

### キーの設定

- **ステップ 4:** **シリアルポート**経由で Indicator に接続します（ここでは、Arduino IDE が提供するシリアルモニターツールを使用します）。

ボードとポートを選択します。

- **ボード**: Seeed INDICATOR RP2040
- **ポート**: usbserial ポート

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/chooseboard.png"/></div>

- **ステップ 5:** ポートモニターを開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/monitor.png"/></div>

- **ステップ 6:** デバイスに以下のコマンドを送信して API キーを設定します：

```sh
openai_api -k {sk-your apikey}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setkey.png"/></div>

ログに「`openai_api_key read successful`」と表示されれば、設定完了です。AI の旅をお楽しみください！

# **技術サポート**
**SenseCAP Indicator でお困りですか？サポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>