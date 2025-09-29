---
description: Edge Impulseを使用して独自のAIモデルをトレーニングおよびデプロイ
title: Edge Impulseを使用して独自のAIモデルをトレーニングおよびデプロイ
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/edge-impulse-vision-ai
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Edge Impulseを使用したGrove Vision AIのモデル高速トレーニング

[Grove - Vision AI Module](https://wiki.seeedstudio.com/ja/Grove-Vision-AI-Module)は、Himax HX6537-Aプロセッサをベースにした親指サイズのボードで、2メガピクセルのOV2640カメラ、マイク、3軸加速度計、3軸ジャイロスコープを搭載しています。32 MBのSPIフラッシュストレージを提供し、顔認識や人物検出のための機械学習アルゴリズムがプリインストールされており、カスタマイズされたモデルもサポートしています。このモジュールはXIAOエコシステムやArduinoと互換性があり、AI対応カメラプロジェクトを始めるのに最適です！

このモジュールはEdge Impulseに完全対応しており、カメラからの生データをサンプリングし、モデルを構築し、トレーニング済みの機械学習モデルをスタジオから直接モジュールにデプロイすることができます。プログラミングは不要です。[Seeed Studio Bazaar](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html)から直接購入可能です。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/1.jpg"/></div>

このボード用のEdge Impulseファームウェアはオープンソースで、GitHubにホストされています：[edgeimpulse/firmware-seeed-vision-ai-internal](https://github.com/edgeimpulse/firmware-seeed-vision-ai-internal/tree/edge-impulse-firmware)

クイックリンク：

- ファームウェアのソースコード：[GitHubリポジトリ](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)
- 事前コンパイル済みファームウェア：[seeed-grove-vision-ai.zip](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip)

## 依存関係のインストール

このボードをEdge Impulseでセットアップするには、以下のソフトウェアをインストールする必要があります：

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)。
2. Linuxの場合：
   - GNU Screen：例えば`sudo apt install screen`でインストール。
3. 最新の[Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)をダウンロード。

:::tip
**Edge Impulse CLIのインストールに問題がありますか？**
[インストールとトラブルシューティングガイド](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)を参照してください。
:::

## Edge Impulseへの接続

すべてのソフトウェアが揃ったら、ボードをEdge Impulseに接続します。

### ステップ1. BL702チップのファームウェアを更新

BL702は、PCとHimaxチップ間の通信を可能にするUSB-UARTチップです。Edge Impulseファームウェアが正しく動作するように、このファームウェアを更新する必要があります。

1. 以下のリンクから最新バージョンのブートローダーファイルをダウンロードします。ブートローダーの名前は通常`tinyuf2-grove_vision_ai_vx.x.x.bin`です。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ファームウェアをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

2. ボードをUSB Type-CケーブルでPCに接続し、ボード上の**Boot**ボタンを押しながら接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/2.jpg" /></div>

3. 事前にインストールしたBouffalo Lab Dev Cubeソフトウェアを開き、**BL702/704/706**を選択し、**Finish**をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/3.png" /></div>

4. **MCU**タブに移動します。**Image file**の下で**Browse**をクリックし、先ほどダウンロードしたファームウェアを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/4.png" /></div>

5. **Refresh**をクリックし、接続されたボードに関連する**Port**を選択します。**Chip Erase**を**True**に設定し、**Open UART**をクリックしてから**Create & Download**をクリックし、プロセスが完了するのを待ちます。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/5.png"/></div>

プロセスが成功すると、**All Success**と表示されます。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/6.png"/></div>

:::note
フラッシング中にエラーが発生した場合は、**Create & Download**を複数回クリックして、**All Success**メッセージが表示されるまで試してください。
:::

### ステップ2. Edge Impulseファームウェアを更新

ボードにはまだ適切なEdge Impulseファームウェアが搭載されていません。ファームウェアを更新するには：

1. [最新のEdge Impulseファームウェア](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip)をダウンロードし、解凍して**firmware.uf2**ファイルを取得します。

2. 再度USB Type-CケーブルでボードをPCに接続し、ボード上の**Boot**ボタンをダブルクリックして**マスストレージモード**に入ります。

3. これにより、ファイルエクスプローラーに**GROVEAI**という新しいストレージドライブが表示されます。**firmware.uf2**ファイルをGROVEAIドライブにドラッグ＆ドロップします。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/7.jpg"/></div>

コピーが完了すると、**GROVEAI** ドライブは消えます。これにより、コピーが成功したかどうかを確認できます。

### ステップ 3. キーの設定

コマンドプロンプトまたはターミナルで以下を実行します：

```
edge-impulse-daemon
```

これによりウィザードが開始され、ログインと Edge Impulse プロジェクトの選択を求められます。プロジェクトを切り替えたい場合は、`--clean` オプションを付けてコマンドを実行してください。

また、Google Chrome や Microsoft Edge の最近のバージョンでは、Edge Impulse CLI を使用せずにボードから直接データを収集することができます。詳細については、[このブログ記事](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser)をご覧ください。

### ステップ 4. デバイスが接続されていることを確認する

これで完了です！デバイスは Edge Impulse に接続されました。これを確認するには、[Edge Impulse プロジェクト](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1)にアクセスし、**Devices** をクリックしてください。ここにデバイスが表示されます。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/8.png"/></div>

## Grove - Vision AI からデータを収集する

すべての設定が完了したら、以下のチュートリアルを使用して最初の機械学習モデルを構築して実行できます：

- [センサーに視覚を追加する](https://docs.edgeimpulse.com/docs/tutorials/image-classification)
- [物体検出](https://docs.edgeimpulse.com/docs/tutorials/object-detection)
- [FOMO を使用した物体のカウント](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo)

オンボードカメラからのフレームは、スタジオから直接キャプチャできます：

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/9.png"/></div>

最後に、モデルがトレーニングされたら、それを Grove – Vision AI モジュールに簡単にデプロイして推論を開始できます！

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/10.png"/></div>

## Grove - Vision AI にモデルをデプロイする

機械学習モデルを構築し、Edge Impulse Studio から Edge Impulse ファームウェアをダウンロードした後、[Edge Impulse ファームウェアの更新セクション](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-grove-vision-ai#2.-update-edge-impulse-firmware)のステップ 1 と 2 に従って、モデルの uf2 を Grove - Vision AI にデプロイします。

## Edge Impulse ファームウェアをソースからコンパイルする

Edge Impulse ファームウェアをソースコードからコンパイルしたい場合は、[この GitHub リポジトリ](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)を訪問し、README に記載されている手順に従ってください。公式ファームウェアで使用されているモデルは、この[公開プロジェクト](https://studio.edgeimpulse.com/public/87291/latest)で確認できます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>