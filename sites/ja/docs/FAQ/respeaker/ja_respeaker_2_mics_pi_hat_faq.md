---
title: reSpeaker 2-Mics Pi HAT V2.0 FAQ
description: reSpeaker 2-Mics Pi HAT V2.0 の V2.0 コーデック I2C アドレスおよびハードウェア使用に関するよくある質問。
slug: /respeaker_2_mics_pi_hat_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker 2-Mics Pi HAT FAQ
  - reSpeaker 2-Mics Pi HAT V2.0
  - TLV320AIC3104
  - codec I2C address
---

<div class="respeaker-faq-page">

# reSpeaker 2-Mics Pi HAT V2.0 FAQ

このページでは、reSpeaker 2-Mics Pi HAT V2.0 に関する検証済みの回答をまとめています。各回答には、対象となる製品バリアントとファームウェアモード（適用対象）、および最新の公式情報源と照合した最終検証日が記載されています。

## 始める前に

- デバイスが動作している正確な製品バリアントとファームウェアモード（USB または I2S）を確認してください。
- バージョン固有の手順を適用する前に、現在のファームウェアバージョンを確認してください。
- このページの回答は 2026-09-01 時点で検証されています。これ以降に閲覧している場合は、リンクされている公式情報源を再確認してください。

<!-- RESPEAKER_FAQ_AUTO_START -->
## ハードウェアの問題 {#hardware-issues}

### ReSpeaker 2-Mics Pi HAT V2.0 のコーデック I2C アドレスは何ですか？ {#v2-codec-i2c-address}

**適用対象:** ReSpeaker 2-Mics Pi HAT V2.0 のみ。V1.x は異なるコーデックハードウェアを使用します

**最終検証日:** 2026-09-01

ReSpeaker 2-Mics Pi HAT V2.0 は、7 ビット I2C アドレス `0x18` の TLV320AIC3104 コーデックを使用します。公式の V2.0 デバイスツリーオーバーレイでは、`reg = <0x18>` を持つ `tlv320aic3104@18` が宣言されており、公開されている V2.0 回路図でも同じコーデックが示されています。

**前提条件:**

- 公式のハードウェアリビジョンガイドを用いて、ボードが V2.0 であることを確認する
- リビジョン固有の V2.0 ドライバとデバイスツリーオーバーレイを使用する

1. 公式の V2.0 Raspberry Pi ガイドに従って、`respeaker-2mic-v2_0-overlay.dtbo` をインストールします。
2. V2.0 オーバーレイが、7 ビットアドレス `0x18` にコーデックを宣言していることを確認します。
3. 再起動し、`arecord -l` または `aplay -l` を使用して、`tlv320aic3x-hifi` サウンドデバイスが正常にバインドされていることを確認します。

**成功条件:**

- V2.0 オーバーレイがロードされ、TLV320AIC3104 を搭載したサウンドカードが ALSA デバイス一覧に表示される

**注意事項:**

- このアドレスを、異なるコーデックハードウェアを使用する ReSpeaker 2-Mics Pi HAT V1.x に流用しないでください。
- アドレス情報だけでは、ESP32-S3 の配線およびコーデック初期化の完全な、またはサポート対象のガイドにはなりません。

**参考情報:**

- [ReSpeaker 2-Mics Pi HAT V2.0 Raspberry Pi ガイド](https://wiki.seeedstudio.com/ja/respeaker_2_mics_pi_hat_raspberry_v2/)
- [公式 V2.0 Raspberry Pi デバイスツリーオーバーレイ](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/rpi/respeaker-2mic-v2_0-overlay.dts)
- [公式 ReSpeaker 2-Mics Pi HAT V2.0 回路図](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/202004059_ReSpeaker-2-Mics-Pi-HAT-V2.0_SCH_PDF_241121.pdf)

<!-- RESPEAKER_FAQ_AUTO_END -->

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
