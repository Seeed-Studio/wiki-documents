---
description: RGBW_Stripe_WireLess_Shield_V1.0
title: RGBW Stripe WireLess Shield V1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RGBW_Stripe_WireLess_Shield_V1.0
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_rev1_face.jpg" alt="pir" width={600} height="auto" /></p>

RGBW Stripe WireLess Shieldは、RGBW LEDストリップを接続するための4つのPWM出力を備えています。
各出力は5〜24Vの電圧で1.5Aの負荷を処理できます。
Arduinoに簡単に統合され、入力電源から電力を供給します。
自己復元型ヒューズがLEDストリップの過電流を保護します。
RGBテープのリモートコントロールには、人気のあるトランシーバーnRF24L01+を使用します。
最も興味深い点は、ボードにメモリが搭載されており、Arduinoのファームウェアを無線で更新できることです！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_top.jpg" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/RGBW-Strip-WireLess-Shield-V10-p-2629.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

* Arduino互換アーキテクチャに基づく設計 (DualOptiboot)

* 12 - 24V RGB LEDストリップとの互換性

* 4つのPWM出力 (RGBW)

* オンボード64kb SPIフラッシュ / E2prom (OTAファームウェア更新用)

* 内蔵自動LED RFアクティビティ (nRF24L01+用)

* ミニトランシーバー 2.4G nRF24L01+

* 自己復元型ヒューズ

* 内蔵ボタン

* GROVE互換コネクタ: I2C

## レイアウトと回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-top.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-bottom.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/Scheme_RGBW.PNG" alt="pir" width={600} height="auto" /></p>

## ライブラリ

### 必要なライブラリ

### デモコード (例)

```cpp

int L_RED = 6;
int L_GREEN = 9;
int L_BLUE = 3;
int L_WHITE = 5;

int brightness = 0;
int fadeAmount = 5;

void setup()  {
  pinMode(L_RED, OUTPUT);
  pinMode(L_GREEN, OUTPUT);
  pinMode(L_BLUE, OUTPUT);
  pinMode(L_WHITE, OUTPUT);
}

void loop()  {
  // 赤
  analogWrite(L_RED, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // 緑
  analogWrite(L_GREEN, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // 青
  analogWrite(L_BLUE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // 白
  analogWrite(L_WHITE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
}
```

## バージョントラッカー

<table cellPadding={5} cellSpacing={0}>
  <tbody>
    <tr>
      <td width={150}> <strong>リビジョン</strong> </td>
      <td width={450}> <strong>説明</strong> </td>
      <td width={80}> <strong>リリース</strong> </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 1.0 rev 1 </td>
      <td> 公開バージョン </td>
      <td> 19.11.2015 </td>
    </tr>
  </tbody>
</table>

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>