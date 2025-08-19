---
description: このプロジェクトでは、SenseCAP Indicator を使用してシングルチャネル LoRa ゲートウェイ (LoRaHub) を実装する方法を示します。
title: シングルチャネルゲートウェイ - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- LoRaWAN
- ESP32S3
- シングルチャネルゲートウェイ
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.webp
slug: /ja/SenseCAP_Indicator_Single_Channel_Gateway
toc_max_heading_level: 4
sidebar_position: 5
last_update:
  date: 05/15/2025
  author: Leo Liu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# シングルチャネル LoRaWAN ゲートウェイ - SenseCAP Indicator

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.png" style={{width:800, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Indicator D1Pro</th>
      <th>SenseCAP Indicator D1L</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1Pro-p-5644.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-p-5646.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

このプロジェクトでは、ESP32S3 をホスト MCU として使用し、SX1262 LoRa ラジオを組み合わせた SenseCAP Indicator を使用してシングルチャネル LoRaWAN ゲートウェイ (LoRaHub) を実装する方法を示します。そして、The Things Network (TTN) 上で LoRaWAN アプリケーションを構築します。ファームウェアをアップグレードすることで、LoRa 技術を深く掘り下げ、LNS (LoRa ネットワークサーバー) への接続を確立したい方に実用的なソリューションを提供します。

シングルチャネルゲートウェイ (One-Channel Hub) は、LoRa の世界を探索し始めるための低コストツールです。これらのゲートウェイは特定の拡散率とチャネルで LoRa パケットを受信し、これらのパケットをネットワークと交換することができます。その手頃な価格のため、多くのユーザーが独自のシングルチャネルゲートウェイを構築し、LoRa を試験することに取り組んでいます。

こちらが GitHub プロジェクトです: [SenseCAP Indicator LoRaHub Demonstration](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/examples/indicator_lorahub).

## ファームウェアの書き込み

ファームウェアはインストールの準備が整っています。最新バージョンを [bin ライブラリ](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo) からダウンロードしてください。

:::tip
GitHub ではファームウェアの統合バージョンも提供しています。以下の説明は初心者がより理解しやすいように分割バージョンに基づいています。もし [統合バージョン](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo) を直接書き込みたい場合は、フラッシュアドレスを 0x0 に設定してください。
:::

完全な ESP-IDF 環境を使用しない場合でも、提供されたバイナリファイルを **esptool** ユーティリティを使用して書き込むことが可能です。

ファームウェアをダウンロードするには以下をクリックしてください:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241106.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬ </font></span></strong></a>
</div>

## ファームウェアのカスタマイズとビルド

設定をリセットしたい場合は、以下の手順に従ってESP-IDF環境で自分でファームウェアをビルドすることができます。

### 環境のセットアップ

このプロジェクトはEspressif ESP-IDF開発に基づいています。環境をセットアップするには、この[ガイド](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation)を参照してください。

#### ESP-IDFの取得

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### ツールのセットアップ

```linux
cd esp-idf/
./install.sh
```

### One Channel Hubのインストール

**ステップ1**: Hubをローカルリポジトリにクローンし、プロジェクトのパスに移動します。

```linux
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32.git

cd ~/this_project_directory/
```

**ステップ2**: 必要なドライバーをインストールします。

- ラジオドライバーを取得します:

```
cd ~/this_project_directory/components/radio_drivers
```

- SX126xドライバー(sx1261, sx1262, sx1268):
```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- llcc68ドライバー:
```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- lr11xxドライバー(lr1121):
```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### ファームウェアのビルド

**ステップ1**: lorahubディレクトリに移動します。
```
cd ~/this_project_directory/lorahub
```

Linux/MAC端末でESP-IDFを使用してコマンドラインからビルドする準備をします。このステップはWindowsではスキップできます。Windowsではインストール済みの「ESP-IDF x.x CMD」ツールが環境を自動的に準備します。

```
. ~/esp/esp-idf/export.sh
```

ESP32ターゲットを設定してビルドします。

```
idf.py set-target esp32s3
```

必要に応じてビルドをカスタマイズします:

```
idf.py menuconfig
```

プロジェクトをビルドします:

```
idf.py all
```

### esp-idfを使用したフラッシュ

フラッシュするOne-Channel Hubに関連するシリアルデバイスを特定します。
LinuxおよびMacでは、シリアルポートを以下のコマンドで確認できます。

```
ls /dev/cu*
```

その後、`idf.py`を使用してフラッシュします。**port**を置き換えてください。

```
idf.py -p port flash
```

**権限エラー**が返された場合は、現在のユーザーがdialoutグループのメンバーであることを確認してください。そうでない場合は以下を実行し、Linuxマシンを再起動して再試行してください。

```
sudo usermod -a -G dialout $USERNAME
```

**Windows**環境では、デバイスがCOM14としてマウントされていると仮定すると、上記のコマンドは以下のようになります。

```
idf.py -p COM14 flash
```

ログを確認するためにモニターコンソールを起動します（オプション）。

```
idf.py -p port monitor
```

### esptoolを使用したフラッシュ

完全なESP-IDF環境を使用しない場合は、`esptool`ユーティリティを使用して提供されたバイナリファイルをフラッシュすることも可能です。

https://docs.espressif.com/projects/esptool/en/latest/esp32/

```cpp
// マージバージョン
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// 分割バージョン
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

Windows環境でのesptoolコマンドは以下のようになります。

```cpp
// マージバージョン
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// 分割バージョン
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

使用するシリアルポートの名前を`port`および`COM`に置き換えてください。接続に失敗した場合は、[トラブルシューティング](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting)を参照してください。

### esptool-JSを使用したフラッシュ

[オンラインesptool](https://espressif.github.io/esptool-js/)が推奨されます。

**ステップ1**: ボーレートを115200に設定し、正しいポートに接続します。

**ステップ2**: binファイルを選択し、対応するフラッシュアドレスを入力します。

- マージバージョン:

|**フラッシュアドレス**|**ファイル**|
|----|----|
|0x0|Indicator_Lorahub_v1.0.0.bin|

- 分割バージョン:

|**フラッシュアドレス**|**ファイル**|
|----|----|
|0x0|bootloader.bin|
|0x10000|indicator_lorahub.bin|
|0x8000|partition-table.bin|

## インジケーター設定

**ステップ1**. ネットワークを設定するために **Wi-Fi** ページに入り、適切なSSIDを選択し、パスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image.png" style={{width:480, height:'auto'}}/></div>

**ステップ2**. **LoRa Gateway** ページでパラメータを設定し、LNSとポートを「1700」に設定します。「configure」をクリックし、その後「reboot」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/62.png" style={{width:480, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" style={{width:480, height:'auto'}}/></div>

## The Things Network(TTN)への接続

**ステップ1:** TTNプラットフォームにログインし、`console`に移動して、`Gateways->Register gateway`をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image2.png" style={{width:600, height:'auto'}}/></div>

**ステップ2:** インジケーターの`Gateway ID`を`Gateway EUI`に入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image3.png" style={{width:600, height:'auto'}}/></div>

**ステップ3:** カスタムゲートウェイ名を入力した後、対応する周波数プランを選択します（インジケーターの設定と一致する必要があります）。その後、`Register gateway`をクリックします。この時点で、インジケーターのシングルチャネルゲートウェイがTTNに追加されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image4.png" style={{width:600, height:'auto'}}/></div>

**ステップ4:** インジケーターのシングルチャネルゲートウェイを追加した後、`Applications`をクリックしてデバイスを追加します。この例では、`SenseCAP T1000 Tracker`をノードデバイスとして使用します。詳細な接続手順については、Wiki: https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN/ を参照してください。`End devices`->`General settings`->`Network layer`->`Advanced MAC settings`で、`Adaptive data rate (ADR)`を**Static mode**に設定し、`ADR data rate index`をインジケーターで設定された`spreading factor`に応じて構成する必要があります。例えば、`spreading factor`が9に設定されている場合、`ADR data rate index`は3に設定する必要があります。他の値についても同様です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image5.png" style={{width:600, height:'auto'}}/></div>

**ステップ5:** 以下のように、追加されたノードデバイスのライブデータで`EVENT DETAILS`を確認して関連ログを表示できます。ノードデバイスが新しく追加されたインジケーターのシングルチャネルゲートウェイを通じてデータを報告していることが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image6.png" style={{width:600, height:'auto'}}/></div>

## ChirpStackへの接続

**ステップ1:** ChirpStackをインストールします。詳細は<a href="https://www.chirpstack.io/docs/getting-started/debian-ubuntu.html" target="_blank"><span> Ubuntu/DebianでのChirpStackセットアップ</span></a>を参照してください。

**ステップ2:** ChirpStackをインストールした後、`/etc/chirpstack`ディレクトリにシングルチャネルの地域定義を追加する必要があります。

このWikiでは、EU868バンドの下にシングルチャネル定義を作成し、868.1Mhzチャネルを使用します。
<details>
<summary>region_eu868_1ch.toml</summary>

```toml
# このファイルはEU868設定の例を含みます。
[[regions]]

  # IDはこの地域のユーザー定義識別子です。
  id="eu868_1ch"

  # 説明はこの地域の簡単な説明です。
  description="EU868_1CH"

  # Common-nameはLoRa Allianceによって定義されたこの地域の共通名を指します。
  common_name="EU868"

  # ゲートウェイ設定。
  [regions.gateway]

    # ゲートウェイをプライベートとして強制する。
    #
    # 有効にすると、ゲートウェイは同じテナントのデバイスでのみ使用できます。
    force_gws_private=false

    # ゲートウェイバックエンド設定。
    [regions.gateway.backend]

      # 有効なバックエンドタイプ。
      enabled="mqtt"

      # MQTT設定。
      [regions.gateway.backend.mqtt]

        # トピックプレフィックス。
        #
        # トピックプレフィックスはゲートウェイの地域を定義するために使用できます。
        # 注意: プレフィックスに末尾の'/'を追加する必要はありません。末尾の'/'は
        # 設定されている場合、自動的にプレフィックスに追加されます。
        topic_prefix="eu868"

        # MQTTサーバー (例: scheme://host:port、schemeはtcp, sslまたはws)
        server="tcp://$MQTT_BROKER_HOST:1883"

        # 指定されたユーザー名で接続 (オプション)
        username=""

        # 指定されたパスワードで接続 (オプション)
        password=""

        # サービス品質レベル
        #
        # 0: 少なくとも1回
        # 1: 確実に1回
        # 2: 正確に1回
        #
        # 注意: この値を増やすとパフォーマンスが低下します。
        # 詳細については: https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels
        qos=0

        # クリーンセッション
        #
        # このクライアントがMQTTブローカーに接続する際に、接続メッセージで
        # "クリーンセッション"フラグを設定します。このフラグを設定することで、
        # このクライアントのためにブローカーに保存されたメッセージが配信されないことを示します。
        clean_session=false

        # クライアントID
        #
        # MQTTブローカーに接続する際にこのクライアントが使用するクライアントIDを設定します。
        # クライアントIDは23文字以内でなければなりません。空白の場合、ChirpStackによってランダムなIDが生成されます。
        client_id=""

        # キープアライブ間隔。
        #
        # クライアントとサーバー間で通信が行われない最大時間を定義します。
        keep_alive_interval="30s"

        # CA証明書ファイル (オプション)
        #
        # セキュア接続を設定する際に使用します (サーバーがssl://...を使用している場合)。
        # ただし、サーバーによって使用される証明書がサーバー上のCA証明書によって信頼されていない場合 (例: 自己生成の場合)。
        ca_cert=""

        # TLS証明書ファイル (オプション)
        tls_cert=""

        # TLSキー ファイル (オプション)
        tls_key=""

  # 地域固有のネットワーク設定。
  [regions.network]
    
    # ADRエンジンによって使用されるインストールマージン (dB)。
    #
    # 数値が高いほど、ネットワークサーバーはより多くのマージンを保持し、
    # データレートが低下しますが、周囲のゲートウェイに到達できないために
    # デバイスが切断される可能性が減少します。
    installation_margin=10

    # RXウィンドウ (Class-A)。
    #
    # 以下に設定:
    # 0: RX1 / RX2
    # 1: RX1のみ
    # 2: RX2のみ
    rx_window=0

    # RX1遅延 (1 - 15秒)。
    rx1_delay=1

    # RX1データレートオフセット
    rx1_dr_offset=0

    # RX2データレート
    rx2_dr=0

    # RX2周波数 (Hz)
    rx2_frequency=869525000

    # RX1データレートが以下の場合にRX2を優先。
    #
    # RX1データレートが設定値より小さい場合、ネットワークサーバーは
    # 最初にRX2でダウンリンクをスケジュールしようとします。
    rx2_prefer_on_rx1_dr_lt=0

    # リンクバジェットに基づいてRX2を優先。
    #
    # リンクバジェットがRX1よりもRX2の方が良い場合、ネットワークサーバーは
    # 最初にRX2でダウンリンクをスケジュールしようとします。
    rx2_prefer_on_link_budget=false

    # ダウンリンク送信電力 (dBm)
    #
    # -1に設定すると、設定されたバンドからダウンリンク送信電力が使用されます。
    #
    # 有効で合法的なオプションについては、LoRaWAN地域パラメータおよび
    # 地域規制を参照してください。設定された送信電力はゲートウェイによって
    # サポートされている必要があります。
    downlink_tx_power=-1

    # ADRが無効です。
    adr_disabled=true

    # 最小データレート。
    min_dr=5

    # 最大データレート。
    max_dr=5

    # min_dr/max_dr設定の後に以下を追加
    enabled_uplink_channels=[0] 
```

</details>

また、単一チャネルのリージョンをカスタマイズすることもできます。詳細は <a href="https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8" target="_blank"><span> LoRaWAN 単一チャネルハブの理論</span></a> を参照してください。

**ステップ 3:** `/etc/chirpstack/chirpstack.toml` を修正して、新しく定義したリージョンを有効にします。

```toml
enabled_regions={
  ...,
  "eu868_1ch",
  ...,
}
```

**ステップ 4:** ChirpStackのコンソールにログインし、単一チャネルゲートウェイを追加します。

ゲートウェイを追加する前に、単一チャネルリージョンが正常に有効化されていることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-1.png" alt="pir" width={600} height="auto" /></p>

単一チャネルリージョンが正常に有効化されている場合、ChirpStackに単一チャネルゲートウェイを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-2.png" alt="pir" width={600} height="auto" /></p>

**ステップ 5:** LoRaゲートウェイページでパラメータを設定し、アドレスをChirpStackサーバーのアドレスに設定します。その後、`configure` をクリックし、次に `reboot` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" alt="pir" width={600} height="auto" /></p>

再起動後、ChirpStackのコンソールでステータスがオンラインに変わったことを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-3.png" alt="pir" width={600} height="auto" /></p>

**ステップ 6:** 単一チャネルゲートウェイと同じデータレートを使用することで、エンドデバイスの接続時間を最適化できます。

単一チャネルゲートウェイの設定 `SF7 BW125` を参照し、T1000-Aのデータレートを `DR5` に調整します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-4.png" alt="pir" width={600} height="auto" /></p>

T1000-Aのデータレートを設定した後、デバイスプロファイルを作成する必要があります。

リージョンに `EU868` を選択し、リージョン設定に `EU868_1CH` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-5.png" alt="pir" width={600} height="auto" /></p>

以下の図のように、T1000-Aが単一チャネルゲートウェイを通じてChirpStackにデータを正常にアップロードしたことが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-6.png" alt="pir" width={600} height="auto" /></p>

## リソース

* [SenseCAP Indicator用単一チャネルハブファームウェア](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241031.zip)
* [Githubリポジトリ](https://github.com/Lora-net/one_channel_hub)
* [Semtechアプリケーションノート](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>