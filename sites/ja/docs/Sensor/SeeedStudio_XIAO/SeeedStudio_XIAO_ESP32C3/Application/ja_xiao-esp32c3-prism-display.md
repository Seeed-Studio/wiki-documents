---
description: ESP32C3を使用したXIAO Prism Display
title: XIAO ESP32C3 Prism Display
keywords:
- Xiao
- Prism
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-esp32c3-prism-display
last_update:
  date: 02/01/2024
  author: timo614
---

# XIAO ESP32C3 プリズムディスプレイ

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/wSJa8HP0BkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


## はじめに

このチュートリアルを最後まで進めたい場合は、以下を準備する必要があります。

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>バッテリー管理チップ付き<br />XIAO用Grove Shield</th>
      <th>Grove Smart IR Gesture <br />Sensor (PAJ7660)</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/assembled.jpg" />
</div>

このプロジェクトはESP32C3を使用して、分光プリズムを使った三次元ディスプレイを作成します。このガイドでは、エンクロージャーの構築、関連する電子部品の取り付け、ファームウェアのインストールに必要な手順を説明します。追跡する暗号通貨のリストの更新と、画像ブラウザで使用するためのアニメーション画像の縮小・処理に関する追加ドキュメントも提供されています。

主要な手順

1. [エンクロージャーのダウンロードと3Dプリント](#download-and-3d-print-enclosure)
2. [関連する電子部品の取り付け](#attach-associated-electronics)
3. [環境のセットアップ](#setup-environment)
4. [XIAO ESP32C3の設定](#configure-the-xiao-esp32c3)

追加ドキュメント

1. [新しい暗号通貨の追加](#adding-new-cryptocurrencies)
2. [アニメーション画像の縮小と処理](#downsizing-and-processing-animated-images)

## エンクロージャーのダウンロードと3Dプリント

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/3d-render-bottom.png" />
</div>

3Dエンクロージャーは2つの半分で構成されており、内部部品の組み立て後に圧入で組み合わせるように設計されています。構造が正しく組み立てられるように、部品の印刷時にはサポートを使用する必要があります。

部品はgithubリポジトリで見つけることができ、STLビューアーでプレビューできます：<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-top.stl<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-bottom.stl<br />

## 関連する電子部品の取り付け

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/xiao_screwed_in.jpg" />
</div>

Groveシールドは、はんだ付けの必要なく簡単なブレッドボード用ワイヤーを使用して組み立てを完了できるため、プリズムディスプレイのセットアップを簡素化します。Groveシールドには、Xiaoピンに隣接する開いたピンに2番目のメスヘッダーセットをはんだ付けする必要があります。このシールドは、エンクロージャーにある2つのネジ穴にネジで固定する必要があります。これは少し難しい場合があるため、最初にネジを入れてからシールドを下ろして各ネジを締めると役立ちます。

ここから主に2つの接続があります：
- ジェスチャーセンサーへのi2c接続
- ディスプレイへのspi接続

i2c接続には、シールドからジェスチャーセンサーへのGrove 4ピンコネクタが使用されます。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/inward_bend_install.jpg" style={{width:400, height:'auto'}}/></div>

エンクロージャーは、ジェスチャーセンサーがぴったりと収まり、そのネジがエンクロージャーの外側に対してしっかりと固定されるように設計されています。ジェスチャーセンサーを適切に配置するには、まずUSB側を配置し、本体が平らになったらネジを取り付ける必要があります。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/sensor_screwed_in.jpg" style={{width:400, height:'auto'}}/></div>

spi接続は、より多くのピンが必要になるため、少し複雑です。

```
3V3 on the Xiao is connected to the display's VCC Pin
GND on the Xiao is connected to the display's GND Pin
D0 on the Xiao is connected to the display's CS Pin
D1 on the Xiao is connected to the display's BL Pin
D2 on the Xiao is connected to the display's DC Pin
D3 on the Xiao is connected to the display's RST Pin
D8 (SCK) on the Xiao is connected to the display's SCL Pin
D10 (MOSI) on the Xiao is connected to the display's SDA Pin
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:700, height:'auto'}}/></div>

すべてのコンポーネントにワイヤーが接続されたら、デバイスを完全に組み立てることができます。エンクロージャーは、同様の公差で印刷された場合に圧入式の閉鎖を可能にするように設定されています。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/press_fit_close.jpg" style={{width:400, height:'auto'}}/></div>

組み立てが完了したら、プリズムを画面の上に置きます。

## 環境のセットアップ

ローカル環境をセットアップする最も簡単なアプローチは、Visual Studio Codeを使用することです。これによりマシンの設定が簡素化されます。

- GitHubからリポジトリをクローンします：https://github.com/Timo614/xiao-prism-buddy
- Visual Studio Codeでリポジトリを開きます
- ESP-IDF拡張機能をインストールします
- ESP-IDF 5.0.4をインストールします
- ESP-IDF Espressif Device Targetをesp32c3に設定します
- wifiネットワークの環境変数を設定します（以下のステップを参照）
- デバイスをビルド、フラッシュ、モニターします

## XIAO ESP32C3の設定

アプリケーションを準備する次のステップは、wifiネットワークの認証情報を設定することです。

`Ctrl` + `Shift` + `P`を押してクイックメニューを開き、`menuconfig`と入力します。これにより、リストが絞り込まれて`ESP-IDF: SDK Configuration editor (Menuconfig)`のエントリが含まれます。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/menuconfig.png" style={{width:400, height:'auto'}}/></div>

このメニューで、wifiネットワーク名とそれにアクセスするためのパスワードを設定してください。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/config.png" style={{width:400, height:'auto'}}/></div>

## 新しい暗号通貨の追加

Xiao Prism BuddyはCoinGeckoによって動作しているため、異なる暗号通貨を表示するように変更できます。CoinGeckoは、ユーザーがレート制限付きでアクセスできる無料ティアをAPIに提供しています。

アプリケーションは15分ごとに`/simple/price`エンドポイントにアクセスし、設定された暗号通貨のセットを更新します。呼び出しで使用される通貨は、アプリで表示される通貨記号と共に`config.h`[リポジトリ内のファイル](https://github.com/Timo614/xiao-prism-buddy/blob/main/main/config.h#L26)を介して設定可能です。呼び出し自体の詳細については、[APIドキュメント](https://www.coingecko.com/api/documentation)を参照できます。

新しい暗号通貨を追加するプロセスは現在少し複雑ですが、以下のステップで実現できます：

1. 暗号通貨の総数を正しい数を反映するように更新します（このハードコードされた値は、ページ自体でのサイクリングに使用されます）
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp#L29
2. 暗号通貨モデルファイルで既存の暗号通貨の1つ（例：bitcoin）を検索し、コードの各関連セグメント（データ初期化、coingeckoレスポンス解析、coingecko getリクエスト文字列など）に新しいエントリを追加します
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/model/prism_cryptocurrency.c
3. 新しい暗号通貨を反映するように暗号通貨ビューデータ構造体を更新します https://github.com/Timo614/xiao-prism-buddy/blob/main/main/view_data.h#L54
4. コントローラーロジックで既存の暗号通貨（例：bitcoin）を検索し、イベントデータの処理とレンダリングのための関連ロジックをそこにコピーします https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp
5. 新しい暗号通貨用の適切なサイズのpngファイルを提供し、LVGLオンライン画像コンバーターを使用してPNGをCファイルに変換し、上記の必要に応じてコントローラーで参照します https://lvgl.io/tools/imageconverter

## アニメーション画像のダウンサイジングと処理

マイクロコントローラーで作業する際の制限の一つは、利用可能なフラッシュメモリの不足です。GIFファイルはかなりの量のフラッシュメモリを消費するため、これらの組み込みがより困難になります。アプリケーションで使用される画像を変換するために従った一連のプロセスをここに文書化します。これは、他の人が画像ブラウザで使用される画像を自分の選択したものに変更するために同じ手順を実行したい場合に備えてのものです。

1. 適切なアニメーション画像を選択します。理想的には透明で、ループするように設定され、適切な寸法を持つものです。プロセスを簡単にするために、特にLottieファイルを探すことが役立つことがわかりました。アプリケーションでは、https://lottiefiles.com/ を通じていくつかの有用な画像を見つけることができました。
2. LottieからGIFへのコンバーターを使用して、Lottieファイルを透明なGIFファイルに変換します（https://lottiefiles.com/lottie-to-gif など）

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/convert-lottie.png" style={{width:400, height:'auto'}}/></div>

3. 選択したGIFエディターを使用して以下の変更を行います（オンラインツール https://ezgif.com がGIF用の最適化スイートでこれらの機能を提供していることがわかり、このアプリケーションの目的で使用しました）：

3.1. フレーム間のフレーム数を約20フレームが残るまで減らします

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/remove-frames.png" style={{width:400, height:'auto'}}/></div>

3.2. 画像を100x100以下にリサイズします

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/resize.png" style={{width:400, height:'auto'}}/></div>

3.3. 追加フレームがないと非常に高速になるため、画像を遅くします

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/slow-speed.png" style={{width:400, height:'auto'}}/></div>

3.4. GIFのサイズを縮小するために色構成を減らします

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/reduce-colors.png" style={{width:400, height:'auto'}}/></div>

3.5. 必要に応じてGIFをさらに圧縮します

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/compress.png" style={{width:400, height:'auto'}}/></div>

4. [LVGL オンライン画像コンバーター](https://lvgl.io/tools/imageconverter)を使用して、[LVGLのドキュメント](https://docs.lvgl.io/8.3/libs/gif.html#convert-gif-files-to-c-array)に従ってGIFファイルをC配列に変換します。注意：`「Raw」カラーフォーマットと「C array」出力フォーマットを選択してください。`

これらの手順に従うことで、Prismデバイスでの表示用に処理された、ファイルサイズが縮小されながらも効果的なGIF画像が得られます。最も簡単なアプローチは、テスト用に既存の炎やスイカの画像を置き換えることです。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


