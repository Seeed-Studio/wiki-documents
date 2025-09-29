---
description: LoRaノードとAIoTs GPS
title: LoRaノードとAIoTs GPS
keywords:
- Wio_terminal 
- Embedded_ML 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/AIoTs_GPS_state_tester
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal上のLoRaノードとAIoTs GPS

## はじめに

AIoTs GPS & 状態テスターは、Wio Terminalシャーシ-LoRa-E5およびGNSSを基に開発されています。従来のIoTsと比較して、より簡潔で知的な機能を備えています。従来のIoTsは基本的にデータを受信し、そのデータが正しいかどうかに関係なくコマンドアクションを実行します。一方、AIoTsはニューラルネットワークアルゴリズムを使用して不要なデータをフィルタリングし、正しいデータを取得することができます。

このプロジェクトでは、内蔵された3軸加速度センサーとニューラルネットワークアルゴリズムを使用して、インテリジェントな認識システムを構築します。Wio Terminalの動きに基づいて、リアルタイムでその状態を表示できます。一般的に、この例では3つの訓練された状態が含まれています：停止（WTアイドル状態）、回転（WTデバイスの転倒）、および振る（WTを手で振る）。[Edge Impulse](https://www.edgeimpulse.com/)のウェブサイトにアクセスして、さらに多くの訓練アクションを追加することをお勧めします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## 特徴

- LoRaデバイスは、DevEui、APPEui、Appkeyを最初のページに表示できます。
- ニューラルネットワークアルゴリズムによる正確なデータ取得
- Wio Terminalの状態を高精度で検出
- 経度、緯度、衛星数を表示
- デバイスとTTN接続の状態を表示

## 始め方

### ハードウェア

**必要なハードウェア**

このデモでは以下のデバイスが必要です：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminalシャーシ - LoRa-E5およびGNSS](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)
- [Wio Terminalシャーシ - バッテリー（オプション）](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**ハードウェア接続**

Type-Cケーブルを使用してコンピュータに接続します。

![](https://files.seeedstudio.com/wiki/Alots/connectpc.jpg)

### Wio Terminalでの機械学習

ここでは、Wio Terminalを使用して機械学習モデルを訓練し、使用する方法を紹介します。このプロジェクトはArduinoプラットフォームに基づいており、Arduino IDEとさまざまなArduinoライブラリが必要です。初めてWio Terminalを使用する場合は、[Wio Terminalのクイックスタートガイド](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)を参照することをお勧めします。

Arduinoライブラリをダウンロードしてインストールしてください：

- [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)

#### Edge Impulseでの訓練開始

まず、Edge Impulseのアカウントを作成し、プロジェクトを作成する必要があります。

- **ステップ1**. [Edge Impulseのウェブサイト](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)を開き、アカウントを登録します。

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **ステップ2**. 新しいプロジェクトを作成します。

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### Wio Terminalとのウェブサイト接続

- **ステップ3**. 接続準備のためにファームウェア[wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2)をダウンロードします。

[Wio Terminalのクイックスタートガイド](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)の指示に従ってください：

Wio Terminal（すでにPCに接続済み）の左下をダブルクリックすると、コンピュータにドライバ（以下のような`Arduino (F:)`）がポップアップ表示されます。その後、[wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2)ファームウェアをドライバにドラッグします。ドライバが消えるのを確認したら、ファームウェアがプログラムされたことを意味します。これでウェブサイトにアクセスしてWio Terminalを接続できます。

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **ステップ4**. ファームウェアが設定されたら、`connect using WebUSB`をクリックしてWio Terminalをウェブサイトに接続します。

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

以下のように`Device`、`Label`、`Sensor`が表示されたら、接続が完了し、データ収集を開始できます。

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### データ収集

Edge Impulseでデータを収集できます。

- **ステップ5**. `Label`、`Sample length (ms.)`を入力し、`Start sampling`をクリックします。

  - `Label`は分類したいカテゴリを意味します。
  - `Sample length`はサンプリングの時間を意味します。

異なる`Sensor`や`Frequency`を選択して、結果を確認することもできます。

![](https://files.seeedstudio.com/wiki/Alots/Alots8.png)

データを10回以上サンプリングすることを強くお勧めします。

![](https://files.seeedstudio.com/wiki/Alots/Alots9.png)

#### 機械学習モデルの生成

データが収集されたら、それを使用してMLモデルを訓練できます。

- **ステップ6**. データをサンプリングした後、`create impulse`をクリックしてデータを処理します。

![](https://files.seeedstudio.com/wiki/Alots/Alots10.png)

ここで選択した処理ブロックと学習ブロックはウェブサイトで推奨されているものと同じです。ただし、他のブロックを選択して違いを確認することを強くお勧めします。ブロックが設定されたら、`Save Impulse`をクリックしてインパルスを保存します。

![](https://files.seeedstudio.com/wiki/Alots/Alots11.png)

- **ステップ7**. `Spectral features`ページに移動し、下部で`Save parameters`をクリックすると、自動的に`Generate feature`側に移動します。

![](https://files.seeedstudio.com/wiki/Alots/Alots12.png)

ここが`Generate feature`側で、機械学習に必要な特徴にデータを変換するのを助けます。

![](https://files.seeedstudio.com/wiki/Alots/Alots13.png)

`Generate feature`をクリックすると、右側に結果が表示されます：

![](https://files.seeedstudio.com/wiki/Alots/Alots15.png)

- **ステップ 8**. `NN Classifier` ページに移動し、特徴量を使用して機械学習モデルをトレーニングします。ページの下部にある `Start training` をクリックしてください。

![](https://files.seeedstudio.com/wiki/Alots/Alots16.png)

トレーニングの出力はページの右側に表示されます。出力が表示されたら、モデルが生成されたことを意味します。

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

#### 機械学習モデルのデプロイ

これで、機械学習モデルを Wio Terminal にデプロイすることができます。

- **ステップ 9**. 左側の `Deployment` カラムを選択してクリックします。

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

次に `Arduino Library` を選択し、下部の `build` をクリックしてArduinoで必要なライブラリを作成します。これにより、サードパーティライブラリを含むzipファイルが自動的にダウンロードされます。

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

必要なライブラリの名前はプロジェクトの名前に基づいており、**ステップ 2** でプロジェクトに記載した名前がここに表示されます。これにより、必要な正しいファイルを見つけることができます。

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **ステップ 10**. Githubから[コード](https://github.com/0hotpotman0/AIoTs_GPS_state_tester)ファイルをダウンロードし、Arduino IDEで開きます。上記のようにサードパーティライブラリを変更し、コードを実行します。

![](https://files.seeedstudio.com/wiki/Alots/Alots22.png)

:::note
地域による違いのため、ファイル内のコードを少し変更する必要があります：
:::

![](https://files.seeedstudio.com/wiki/Alots/Alots35.png)

アメリカのサーバーに接続している場合、例のコードについて心配する必要はありませんが、他の地域では以下のように設定する必要があります（`CN_470_510` は中国の場合、値が470から510の範囲であることを意味します）：

![](https://files.seeedstudio.com/wiki/Alots/Alots36.png)

最終的な結果は以下のようになります：

![](https://files.seeedstudio.com/wiki/Alots/connect1.jpg)

:::note
Edge Impulseについてもっと知りたい場合や、まだ不明な点がある場合は、[Wio Terminal Edge Impulse Getting Started](https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-1/) を参照してください。
:::

### LoRaを使用してTheThingsNetworkにデータを表示する

機械学習モデルをトレーニングし、データを収集した後、データをクラウドに送信することでさらに楽しむことができます。このプロジェクトでは、LoRaを通じて[TheThingsNetwork](https://www.thethingsnetwork.org/)プラットフォーム（クラウド）にデータを表示できるようになります。

**必要なハードウェア**

- ゲートウェイ

まずゲートウェイを設定する必要があります。これにより、Wio Terminal と TTN(TheThingsNetwork)クラウドを接続できます。

#### TheThingsNetworkでデータを表示する手順

**ステップ 1** [TTNウェブサイト](https://id.thethingsnetwork.org/oidc/interaction/3v59Li6ZEHe8cq1O0Ft1w) にアクセスしてアカウントを作成し、`go to gateways` をクリックしてデバイスを設定します。

![](https://files.seeedstudio.com/wiki/Alots/Alots24a.png)

**ステップ 2** ゲートウェイページで `Add gateway` をクリックします。

![](https://files.seeedstudio.com/wiki/Alots/Alots25.png)

自分のゲートウェイ情報を追加します：

- オーナー（あなたの名前）
- ゲートウェイID（ゲートウェイに依存）
- ゲートウェイEUI（ゲートウェイに依存、時にはゲートウェイIDと同じ）
- ゲートウェイ名（任意）

![](https://files.seeedstudio.com/wiki/Alots/Alots26.png)

LoRaWAN オプションの `Frequence plan` は居住地に依存します。`Add gateway` の前に、いくつかのクラスターを含むページが表示される場合があります。`Frequence Plan` とクラスターの選択は一致している必要があり、居住地に最も近いエリアを選択してください。

![](https://files.seeedstudio.com/wiki/Alots/Alots27.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots27a.png)

**ステップ 3** ゲートウェイが設定されたら、Applicationsページで Wio Terminal ノードを追加して接続できます。`Add application` をクリックします：

![](https://files.seeedstudio.com/wiki/Alots/Alots28.png)

以下の情報を任意で入力します：

- オーナー
- アプリケーションID
- アプリケーション名

![](https://files.seeedstudio.com/wiki/Alots/Alots29.png)

**ステップ 4** アプリケーションを作成すると、右下に `Add end device` が表示され、Wio Terminal デバイスを追加できます。

![](https://files.seeedstudio.com/wiki/Alots/Alots30.png)

- **`Brand`** を **`Select Sense CAP`** に選択
- **`Model`** を **`LoRa-E5`** に選択
- Hardware Ver と Firmware Ver はデフォルトで設定
- Profile(Region) は居住地に基づく（`Frequncy plan` と同じ地域）
- Frequency plan は **ステップ 2** で選択したものと同じ
- AppEUI、DevEUI、AppKey は異なる LoRa-E5 デバイスごとにユニークです。これらは、ファームウェア [Gateway_Tester.uf2](https://files.seeedstudio.com/wiki/Alots/Gateway_Tester.uf2) をデバイスにプログラムすることで簡単に見つけることができます。Edge Impulseのチュートリアルのように、ファームウェアをプログラムするには、Wio Terminal の左ボタンを押しながらuf2ファイルをドライブにドラッグするだけです。

![](https://files.seeedstudio.com/wiki/Alots/Alots37.png)

- End Device ID は DevEUI を入力すると自動的に入力されます。

![](https://files.seeedstudio.com/wiki/Alots/Alots31.png)

**ステップ 5** デバイスを接続した後、`Payload formatters` を選択し、データをデコードするためのコードを追加する必要があります（フォーマッタータイプを 'Javascript' に選択）：

![](https://files.seeedstudio.com/wiki/Alots/Alots32.png)

``` c++
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.Stop   = bytes[1];
    decoded.Turn   = bytes[3];
    decoded.Wave   = bytes[5];
  }
 
  return decoded;
}
```

**ステップ 6** 最後にゲートウェイに移動し、`Live data` をクリックします。結果が表示されるはずです：

![](https://files.seeedstudio.com/wiki/Alots/Alots33a.png)