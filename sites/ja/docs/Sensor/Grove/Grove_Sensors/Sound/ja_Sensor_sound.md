---
title: センサー - サウンド（概要）
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Sensor_sound/
slug: /ja/Sensor_sound
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Seeed サウンドセンサー選択ガイド

近年、さまざまな種類のサウンドセンサーをリリースしてきました。それらの中からどれを選ぶべきか迷うことがあるかもしれません。その悩みを解消するために、各センサーを詳しく見て、どれがあなたに最適かを見極めましょう！

当社のバザールにあるすべてのサウンドセンサーについては、[Bazaar Sound タグ](https://www.seeedstudio.com/tag/Sound.html)をクリックしてご確認ください。

## サウンドセンサーとは

音は私たちの日常生活に広く存在しており、音を利用して多くのインタラクティブな制御を行うことができます。例えば、廊下の音声認識ライトなどです。サウンドセンサーを使用すると、黒い検出ヘッド（マイク）の前で手を叩いたり、大きな声で話したりすることで、音を通じてライトを制御することができます。サウンドセンサーはマイクに相当し、音を感知して感知した音を対応するアナログ信号に変換して出力します。これは、携帯電話、録音機、音声認識照明、医療機器、深海測定、交通騒音監視、産業企業の騒音検出など、さまざまな用途で広く使用されています。

サウンドセンサーの発展に伴い、サウンドセンサーを使用したより創造的で有望な製品が次々と登場しています。例えば、人間の目には見えない光を撮影できるカメラや、サーマルカメラについては聞いたことがあるかもしれませんが、音を撮影できるカメラについてはどうでしょうか？その通りです。韓国の科学者たちは、写真のエリアを感知して色でマークすることができるカメラを開発しました。とても興味深いですね。

このユニークな「サウンドカメラ」は SeeSV-S205 と呼ばれ、中央に通常のカメラがあり、その周囲に高度なサウンドセンサーが配置されています。これにより、音を撮影することが光を撮影するのと同じくらい簡単になります。音源に向けてカメラを構えるだけで、最終的な画像で音源の位置を確認することができます。

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/sound sensor.jpg" />
  <figcaption><b>図 1</b>. <i>SeeSV-S205 サウンドカメラ（画像提供：SinaTech, 2013）</i></figcaption>
</div>

### サウンドセンサーの仕組み

サウンドセンサーには、音に敏感なコンデンサエレクトレットマイクが内蔵されています。音波がマイク内のエレクトレット膜を振動させることで、静電容量が変化し、それに対応する小さな電圧が発生します。この電圧は 0-5V の電圧に変換され、A/D 変換後にデータ収集装置によって受信され、コンピュータに送信されます。

#### サウンド＆ライトインタラクティブケーキ

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/birthday cake.png" />
  <figcaption><b>図 2</b>. <i>サウンド＆ライトインタラクティブケーキの動作原理（画像提供：Dfrobot, 2019）</i></figcaption>
</div>

サウンドセンサーには黒いピックアップヘッド（マイク）が付いています。黒いピックアップヘッドの前で誕生日の歌が大きな音で再生されると、サウンドセンサーは音の振動を感知し、電気信号を生成してケーキのライトを点灯させます。

## 応用分野

これらの音センサーには多くの用途があります。特に、この種のセンサーを使用することで、人間を監視し、さまざまな状況から恩恵を受けたり、救助したりすることが可能です。そのため、音センサーは日常生活、産業、医療、軍事など、さまざまな分野で重要な役割を果たしています。

| 応用分野                                          | 内容 |
|--------------------------------|-----------------------------------------|
| 日常生活  | センサーは音信号をサンプリングし、それをマイク、録音機、携帯電話などのデバイスに適用します。音声制御ランプは音声センサーを搭載しており、誰かが1秒間摩擦音を出すと、壁ランプが約10秒間自動的に点灯します。また、音声制御テレビは2人の声を記録することができます。|
| 産業 | 音波センサーは、鉛ジルコン酸チタン（PZT）圧電セラミックの電気エネルギーと機械エネルギーの間の変換における正および逆圧電効果を利用して距離を測定します。圧電セラミックに電気信号を加えると、機械的振動を生成し、超音波を放射します。途中で障害物に遭遇すると、超音波は即座に反射され、セラミックに作用すると電気信号が出力されます。その結果、車と障害物の間の距離が計算され、時間差を測定して表示されます。|
| 医療 | 従来の補聴器の動作原理は次の通りです：マイク（マイクロフォン）が受信した音信号を電気信号に変換し、それをアンプに送ります。アンプは電気信号を増幅し、それを受信機（ヘッドフォン）に送ります。受信機は電気信号を音信号に変換します。この時点での音信号は、マイクが受信した信号よりもはるかに強力であり、これにより難聴者の聴力損失をさまざまな程度で補うことができます。|
| 軍事 | 音センサーは音波を使用して密閉容器内の材料の化学組成を特定し、港のセキュリティを強化します。また、音センサーシステムは狙撃手の火力を位置特定し、方位、仰角、距離、口径、誤差距離を提供します。|

## Seeedの音センサー

### あなたの好みはどれですか？

|名前|サムネイル|動作電圧|測定範囲|感度|出力|信号周波数|購入リンク|
|----|-----|-----|------|------|------|-----|------|
|[Grove - Sound Sensor](https://wiki.seeedstudio.com/ja/Grove-Sound_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small.jpg"/>|5V|/|48dB-52dB|/|16kHz-20 kHz|[購入する](https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM386-amplifier-Arduino-Compatible.html)|
|[Grove - Speech Recognizer](https://wiki.seeedstudio.com/ja/Grove-Speech_Recognizer/)|<img src="https://files.seeedstudio.com/wiki/Grove-Speech_Recognizer/img/stuff1.jpg" />|3V-5V|/|-43dB-(-37dB)|/|32.768MHz-50MHz|[購入する](https://www.seeedstudio.com/Grove-Speech-Recognizer.html)|
|[Grove - Loudness Sensor](https://wiki.seeedstudio.com/ja/Grove-Loudness_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg" />|3.5V-10VDC|/|-48dB~66 dB|アナログ信号|50Hz~2000 Hz|[購入する](https://www.seeedstudio.com/Grove-Loudness-Sensor.html)|
|[Grove - Heelight Sensor](https://wiki.seeedstudio.com/ja/Grove-Heelight_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight sensor.png" />|3.3V-5V|0.1m-10m|/|TTLロジックレベル|/|[購入する](https://www.seeedstudio.com/Grove-Heelight-Sensor.html)|
|[Grove - Sound Recorder](https://wiki.seeedstudio.com/ja/Grove-Sound_Recorder/)|<img src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sound recorder.png" />|3V-5.5V|±1.5g|/|/|/|[購入する](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)|

### 注意事項

上記の表は、各音センサーの測定範囲、感度、信号周波数などのさまざまな属性を示しています。あなたに最も適したものを選ぶことができます。

個々の製品に関する詳細情報については、製品画像の横にあるリンクをクリックして、それぞれのページをご覧ください。

## リソース

- 参考資料
  - [マジックサウンドカメラ：カメラと音センサーで構成](http://tech.sina.com.cn/digi/dc/2013-05-14/00188334966.shtml)
  - [Boson: サウンドセンサー](http://wiki.dfrobot.com.cn/index.php?title=%E5%A3%B0%E9%9F%B3%E4%BC%A0%E6%84%9F%E5%99%A8)

## プロジェクト

**Seeedの新オフィスで階段をハッキング**: オフィスの階段をインタラクティブなインスタレーションに変え、訪問者に「STAFF ONLY」というメッセージを伝えるクールな方法を実現。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**ダ・ヴィンチ・コード**: この作品はアートとエレクトロニクスを組み合わせたものです。アート部分はスケルトンを作成し、中密度繊維板（MDF）の11層で構成されています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>