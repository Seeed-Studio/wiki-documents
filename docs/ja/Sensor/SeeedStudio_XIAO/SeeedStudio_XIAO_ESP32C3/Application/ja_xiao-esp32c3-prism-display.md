---
description: XIAO ESP32C3を使用したプリズムディスプレイ
title: XIAO ESP32C3 プリズムディスプレイ
keywords:
- Xiao
- プリズム
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-esp32c3-prism-display
last_update:
  date: 05/15/2025
  author: timo614
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C3 プリズムディスプレイ

<iframe class="youtube-video" src="https://www.youtube.com/embed/wSJa8HP0BkM" title="YouTube動画プレイヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## はじめに

このチュートリアルをすべて実行するには、以下のものを準備する必要があります。

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>Grove Shield for XIAO <br />（バッテリーマネジメントチップ付き）</th>
      <th>Grove Smart IR Gesture <br />センサー（PAJ7660）</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/assembled.jpg" />
</div>

このプロジェクトでは、ESP32C3を使用してスプリッタープリズムを用いた三次元ディスプレイを作成します。このガイドでは、エンクロージャーの組み立て、関連する電子部品の接続、ファームウェアのインストールに必要な手順を説明します。また、追跡する暗号通貨リストの更新や、画像ブラウザで使用するアニメーション画像の縮小および処理に関する追加のドキュメントも提供しています。

主要な手順

1. [エンクロージャーのダウンロードと3Dプリント](#download-and-3d-print-enclosure)
2. [関連する電子部品の接続](#attach-associated-electronics)
3. [環境のセットアップ](#setup-environment)
4. [XIAO ESP32C3の設定](#configure-the-xiao-esp32c3)

追加ドキュメント

1. [新しい暗号通貨の追加](#adding-new-cryptocurrencies)
2. [アニメーション画像の縮小と処理](#downsizing-and-processing-animated-images)

## エンクロージャーのダウンロードと3Dプリント

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/3d-render-bottom.png" />
</div>

3Dエンクロージャーは2つの半分から構成されており、内部部品を組み立てた後に圧入して組み合わせるように設計されています。部品を正しく組み立てるために、印刷時にはサポート材を使用する必要があります。

部品はGitHubリポジトリで見つけることができ、STLビューアーでプレビュー可能です：<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-top.stl<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-bottom.stl<br />

## 関連する電子部品の取り付け

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/xiao_screwed_in.jpg" />
</div>

Groveシールドは、プリズムディスプレイのセットアップを簡素化します。これにより、はんだ付けを必要とせず、シンプルなブレッドボード用ワイヤーを使用して組み立てを完了できます。Groveシールドには、Xiaoピンに隣接する開いているピンに二次的なメスヘッダーをはんだ付けする必要があります。このシールドは、エンクロージャーに用意された2つのネジ穴にネジ止めする必要があります。これには少しコツが必要なので、最初にネジを入れてからシールドを下げ、各ネジを締めると便利です。

ここから、主に2つの接続があります：
- ジェスチャーセンサーへのi2c接続
- ディスプレイへのspi接続

i2c接続には、Grove 4ピンコネクタを使用してシールドからジェスチャーセンサーに接続します。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/inward_bend_install.jpg" style={{width:400, height:'auto'}}/></div>

エンクロージャーは、ジェスチャーセンサーをしっかりと固定できるように設計されており、ネジでエンクロージャーの外側にしっかりと固定されます。ジェスチャーセンサーを正しく配置するには、まずUSB側を位置決めし、本体が平らになったらネジを取り付けます。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/sensor_screwed_in.jpg" style={{width:400, height:'auto'}}/></div>

spi接続は、いくつかのピンを必要とするため、少し複雑です。

```
Xiaoの3V3はディスプレイのVCCピンに接続
XiaoのGNDはディスプレイのGNDピンに接続
XiaoのD0はディスプレイのCSピンに接続
XiaoのD1はディスプレイのBLピンに接続
XiaoのD2はディスプレイのDCピンに接続
XiaoのD3はディスプレイのRSTピンに接続
XiaoのD8 (SCK)はディスプレイのSCLピンに接続
XiaoのD10 (MOSI)はディスプレイのSDAピンに接続
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:700, height:'auto'}}/></div>

すべてのコンポーネントにワイヤーを接続したら、デバイスを完全に組み立てることができます。エンクロージャーは、同様の公差で印刷された場合、圧入で閉じることができるように設計されています。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/press_fit_close.jpg" style={{width:400, height:'auto'}}/></div>

組み立てが完了したら、プリズムをスクリーンの上に置きます。

## 環境のセットアップ

ローカル環境をセットアップする最も簡単な方法は、Visual Studio Code を使用することです。これにより、マシンの構成が簡素化されます。

- GitHub からリポジトリをクローンします: https://github.com/Timo614/xiao-prism-buddy
- リポジトリを Visual Studio Code で開きます
- ESP-IDF 拡張機能をインストールします
- ESP-IDF 5.0.4 をインストールします
- ESP-IDF Espressif Device Target を esp32c3 に設定します
- Wi-Fi ネットワーク用の環境変数を構成します（以下の手順を参照）
- デバイスをビルド、フラッシュ、モニターします

## XIAO ESP32C3 の構成

アプリケーションを準備する次のステップは、Wi-Fi ネットワークの認証情報を構成することです。

`Ctrl` + `Shift` + `P` を押してクイックメニューを開き、`menuconfig` と入力します。これにより、`ESP-IDF: SDK Configuration editor (Menuconfig)` のエントリがリストに絞り込まれます。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/menuconfig.png" style={{width:400, height:'auto'}}/></div>

このメニュー内で、Wi-Fi ネットワーク名とパスワードを設定してください。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/config.png" style={{width:400, height:'auto'}}/></div>

## 新しい暗号通貨の追加

Xiao Prism Buddy は CoinGecko によって動作しており、異なる暗号通貨を表示するように変更することができます。CoinGecko は、ユーザーにレート制限付きでアクセス可能な無料の API ティアを提供しています。

アプリケーションは `/simple/price` エンドポイントを15分ごとに呼び出し、設定された暗号通貨のセットを更新します。この呼び出しで使用される通貨は、リポジトリ内の `config.h` [ファイル](https://github.com/Timo614/xiao-prism-buddy/blob/main/main/config.h#L26)で設定可能であり、アプリ内で表示される通貨記号も同様です。呼び出し自体に関する詳細情報は [API ドキュメント](https://www.coingecko.com/api/documentation) を参照してください。

現在、新しい暗号通貨を追加するプロセスは少し手間がかかりますが、以下の手順で実現できます:

1. 暗号通貨の総数を更新して正しい数を反映させます（このハードコードされた値はページ内でのサイクル処理に使用されます）
   https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp#L29
2. 暗号通貨モデルファイル内で既存の暗号通貨（例: bitcoin）を検索し、コードの各関連セグメント（データ初期化、CoinGecko レスポンス解析、CoinGecko GET リクエスト文字列など）に新しいエントリを追加します。
   https://github.com/Timo614/xiao-prism-buddy/blob/main/main/model/prism_cryptocurrency.c
3. 暗号通貨ビューのデータ構造を更新して新しい暗号通貨を反映させます。
   https://github.com/Timo614/xiao-prism-buddy/blob/main/main/view_data.h#L54
4. コントローラーロジック内で既存の暗号通貨（例: bitcoin）を検索し、イベントデータの処理とレンダリングに関連するロジックをコピーして追加します。
   https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp
5. 新しい暗号通貨に適したサイズの PNG ファイルを提供し、LVGL Online Image Converter を使用して PNG を C ファイルに変換し、上記のコントローラーで参照します。
   https://lvgl.io/tools/imageconverter

## アニメーション画像の縮小と処理

マイクロコントローラーで作業する際の制約の1つは、利用可能なフラッシュメモリが少ないことです。GIFファイルはかなりのフラッシュメモリを消費するため、それらを含めることが難しくなります。このアプリケーションで使用される画像を変換するために一連のプロセスが実行されました。ここでは、他の人が同じ手順を実行して画像ブラウザの画像を自分の選んだものに変更したい場合のために、そのプロセスを記録しています。

1. 適切なアニメーション画像を選択します。理想的には、透明でループ設定されており、適切な寸法を持つものが望ましいです。このプロセスを簡単にするために、特にLottieファイルを探すことが役立ちました。このアプリケーションでは、以下のリンクからいくつかの有用な画像を見つけることができました: https://lottiefiles.com/
2. LottieからGIFへのコンバーターを使用して、Lottieファイルを透明なGIFファイルに変換します（例: https://lottiefiles.com/lottie-to-gif）

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/convert-lottie.png" style={{width:400, height:'auto'}}/></div>

3. 任意のGIF編集ツールを使用して以下の変更を行います（このアプリケーションの目的で使用したオンラインツール https://ezgif.com は、GIFの最適化スイートでこれらの機能を提供していました）:

3.1. フレーム間の数を減らし、約20フレームになるまで調整します

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/remove-frames.png" style={{width:400, height:'auto'}}/></div>

3.2. 画像を約100x100以下にリサイズします

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/resize.png" style={{width:400, height:'auto'}}/></div>

3.3. フレーム数が減少したため、画像の速度を遅くします

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/slow-speed.png" style={{width:400, height:'auto'}}/></div>

3.4. GIFの色構成を減らしてサイズを縮小します

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/reduce-colors.png" style={{width:400, height:'auto'}}/></div>

3.5. 必要に応じてGIFをさらに圧縮します

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/compress.png" style={{width:400, height:'auto'}}/></div>

4. [LVGL Online Image Converter](https://lvgl.io/tools/imageconverter) を使用して、GIFファイルをC配列に変換します。詳細は [LVGLのドキュメント](https://docs.lvgl.io/8.3/libs/gif.html#convert-gif-files-to-c-array) を参照してください。注意: `「Raw」カラー形式と「C array」出力形式を選択してください。`

これらの手順を実行することで、Prismデバイスで表示するための効果的なGIF画像をサイズを縮小した状態で処理できます。最も簡単な方法は、既存の火やスイカの画像を置き換えてテストすることです。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>