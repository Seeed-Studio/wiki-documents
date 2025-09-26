---
description: LinkIt ONE 用 Sidekick Basic Kit
title: LinkIt ONE 用 Sidekick Basic Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sidekick_Basic_Kit_for_LinkIt_ONE
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE/img/SKP-0.jpg)


##   LinkIt ONE のクイックスタート

ここでは、LinkIt ONE の使い方について説明します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Sidekick-Basic-Kit-for-LinkIt-ONE-p-2027.html)

##   基本

トランジスタ、LED、トグルスイッチを使って簡単な回路を作りましょう。発光ダイオード（LED）は電気エネルギーを可視光に変換します。トランジスタは電子工学の基本的な部品で、スイッチや電流増幅器として機能します。ここでは、スイッチを使ってトランジスタを介して間接的にLEDをオン・オフします。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-The_Basics) をクリックしてください。 -->

##   レッスン 2: Hello World

前のセクションでは、電子部品を使ってLEDを制御する方法について学びましたが、ここではソフトウェアを使ってLEDを自動制御する方法を試してみましょう。このセクションで提供されているコードをアップロードするだけです。このコードは、最初にLEDをオンにし、3秒後にオフにするように書かれています。それでは、LinkIt ボードを使い始めましょう。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-Hello_World) をクリックしてください。 -->

##   レッスン 3: プッシュボタン

前の章でソフトウェアとハードウェアの動作について理解しました。この章では、LEDを制御するためにソフトウェアとハードウェアを統合する方法を学びます。図3.2に示されているようにブレッドボード接続を行い、コードをアップロードしてください。この回路は、左側のプッシュボタンスイッチを押すとLEDが点灯し、右側のプッシュボタンスイッチを押すとLEDが消灯する2方向スイッチとして動作します。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-Push_Button) をクリックしてください。 -->

##   レッスン 4: マーキー

前のセクションでは1つのLEDしか使用しませんでしたが、今回は3つのLEDを使って華やかな光の効果を見せましょう。図4.2に示されているように接続を行い、以下のコードをアップロードして変化を観察してください。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-Marquee) をクリックしてください。 -->

##   レッスン 5: カラフルな世界

LEDの制御方法を学んだので、次は色を組み合わせる基本的なアイデアを取り入れてみましょう。R-赤、G-緑、B-青は基本色で、これらの色を異なる割合で混ぜるとさまざまな色が得られます。RGB LEDは4つのピンを持ち、長いリードが正極で、他の3つのリードはRGB色を制御するためのものです。図5.2に示されているように接続を行い、コードをアップロードしてください。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-Colorful_World) をクリックしてください。 -->

##   レッスン 6: アナログインターフェース

前のセクションでは、デジタルインターフェースを使用して回路の入力と出力を制御する方法を学びました。このセクションでは、ポテンショメータ（可変抵抗器）と呼ばれるアナログデバイスを使用して出力を変化させる方法を学びます。ポテンショメータは0〜5Vの範囲で電圧を変化させるために使用されます。MPUは0〜1023の範囲で電圧値を読み取ります。これを使用してLEDの明るさを制御することができます（PWMシミュレーション出力インターフェース）。ポテンショメータを時計回りに回すと、LEDが徐々に明るくなります。反時計回りに回すと、明るさが徐々に減少します。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-Analog_Interface) をクリックしてください。 -->

## レッスン 7: ミニサーボ

サーボモーター（サーボ）は、小型ロボットやその他の機械で角度位置を制御するためによく使用されます。小型のギアボックスで包まれており、タイミング制御パルスによって位置が決定されます。このセクションでは、ポテンショメーターを使用してミニサーボの角度位置を制御します。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt-ONE-Tutorial---Mini-Servo) をクリックしてください。 -->

## レッスン 8: 光センサー

プロジェクトをさらに面白くする新しいセンサーについて学ぶ時が来ました。フォトレジスタ（光依存抵抗またはフォトセル）は、周囲の光の強度に基づいて抵抗値が変化する光センサーです。ブザーは、電源に接続されると標準的な音を生成する電気音響デバイスです。これらのコンポーネントを使用して実験を行いましょう。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-Light-Sensor) をクリックしてください。 -->

## レッスン 9: SMSでLEDを制御する

このセクションでは、いくつかのクールな機能を実現します。LinkIt Oneの際立った特徴は、通信モジュールが統合されていることです。GSM通信モジュールを使用してメッセージを送信し、スイッチ状態を変更してLEDを制御します。これは非常にエキサイティングです。まずアンテナを接続し、LinkIt OneのスロットにSIMカードを挿入し、回路を接続します。GSM対応の携帯電話を使用して、メッセージ内容を「ON」または「OFF」と編集し、指定された番号（SIM番号）に送信します。これでLEDのスイッチ状態を制御でき、グローバル同期が可能になります。

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-SMS_control_the_LED) をクリックしてください。 -->

## レッスン 10: Webページで温度を取得する

LinkIt OneはWi-Fi通信機能を備えています。LinkIt Oneを使用していくつかのデータを収集しました。インターネットAPとしてWebサーバーを提供し、データアクセスをサポートします。対応するIPアドレスにアクセスすると、ブラウザでデータを取得できます。次のステップでは、回路を接続し、温度センサーからデータを収集します。その後、Wi-Fiアンテナを装備し、ネットワークに接続します。ネットワークを選択し、3つのパラメータを入力してください。ネットワーク名（WiFi_AP）、アクセスパスワード（WIFI_PASSWORD）、ルーターの伝送モード（LWIFI_OPEN、LWIFI_WPA、LWIFI_WEPのオプション）。最後に、コードをLinkIt Oneにアップロードします。ネットワーク対応の端末デバイスを使用してブラウザを開き、IPアドレスを入力すると温度データを取得できます。（DHCPルーターアクセスを介してIPアドレスを割り当てます）

<!-- 完全なチュートリアルを見るには [こちら](/ja/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) をクリックしてください。 -->

## リソース

*   [LinkIt ONE用Sidekick Basic KitのGithubリポジトリ](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>