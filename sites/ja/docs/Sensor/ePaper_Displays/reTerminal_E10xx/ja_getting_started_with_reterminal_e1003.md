---
description: reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備えた 10.3 インチのオープンソース白黒 ePaper ディスプレイで、HMI ファームウェア v1.1.2 上でタッチ操作をサポートします。
sku: 100090602
title: reTerminal E1003 入門ガイド
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
sidebar_position: 4
last_update:
  date: 3/19/2026
  author: Jackson.Li
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1003/
updatedAt: '2026-03-31'
---
# reTerminal E1003 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備え、最大 6 か月のバッテリー駆動が可能な 10.3 インチのオープンソース白黒 ePaper ディスプレイです。タッチ操作は現在、SenseCraft HMI ファームウェア v1.1.2 でサポートされています。ESP32-S3 を搭載し、ダッシュボードを簡単に作成できるノーコード UI プラットフォームである SenseCraft HMI をネイティブにサポートするほか、Arduino や PlatformIO によるさらなる開発にも対応しています。Home Assistant（ESPHome および Open Display 経由）への対応は今後のリリースで提供予定です。スマートホームのダッシュボードの可視化と制御、オフィスの情報表示、教育プロジェクトなど、あらゆる用途において、このすぐに使えるデバイスは美しい表示と柔軟なカスタマイズ性を提供し、あらゆるニーズに応えます。

:::tip
reTerminal E1003 のタッチ操作は、SenseCraft HMI ファームウェア v1.1.2 以降でサポートされています。
タッチ関連ライブラリのサポートは、パネルをより柔軟にカスタマイズできるよう、今後のオープンソースリリースで提供予定です。最新情報は追って共有されます。


reTerminal E1003 向け ESPHome サポートは開発中で、今後のリリースで利用可能になる予定です。
:::
### 特長

- **最大 16 階調のグレースケール表示:** 16 階調の繊細なグレースケールにより、テキストやグラフィックスのあらゆるディテールが非常にシャープかつ鮮明に表示されます。
- **超低消費電力:** ePaper は画面更新時のみ電力を消費するため、バッテリー寿命が長く、エネルギー効率にも優れています。
- **SenseCraft HMI 対応:** reTerminal E シリーズ ディスプレイは、デフォルトのファームウェアで SenseCraft HMI をサポートします。
- **幅広いアプリケーション:** TTL パラレルインターフェース（マルチライン・高スループット）による高速リフレッシュをサポートし、低レイテンシな更新が可能なため、スマートホーム用コントロールパネルに最適です。
- **高解像度タッチ対応 ePaper ディスプレイ:** 10.3 インチ 1404×1872 白黒 ePaper ディスプレイに高感度タッチスクリーンを内蔵しており、タッチ操作は現在 SenseCraft HMI ファームウェア v1.1.2 でサポートされています。
- **インテリアニーズへの適応:** 配線不要で自由度が高く、壁掛けとデスクトップ設置の両方に対応し、縦向き・横向きの柔軟な切り替えが可能です。



### 仕様

| 項目 | 説明 |
| :--- | :--- |
| **製品名** | reTerminal E1003 |
| **プロセッサ** | ESP32-S3（8MB PSRAM 搭載） |
| **ストレージ** | 32MB Flash、Micro SD カード対応 |
| **ディスプレイ** | 10.3 インチ 白黒 / 16 階調グレースケール |
| **解像度** | 1404x1872 ピクセル |
| **Micro SD カード** | 最大 32GB SD カード対応、FAT32 フォーマット |
| **無線接続** | 2.4GHz 802.11 b/g/n Wi-Fi、Bluetooth 5.0 |
| **センサー** | 温度・湿度センサー |
| **マイク** | 音声インタラクション用途向けに予約 |
| **オーディオ** | サウンドアラート用ブザー |
| **バッテリー** | 3000mAh |
| **電源入力** | USB-C 5V/1A |
| **ソフトウェアサポート** | デフォルトファームウェアで SenseCraft HMI(https://sensecraft.seeed.cc/hmi/) をサポート<br />Arduino / PlatformIO 開発プラットフォームをサポート |
| **動作温度** | 0〜40°C |
| **寸法** | 224mm×187mm×18.6mm |

### ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2.jpg" style={{width:1000, height:'auto'}}/></div>

1. **画面リフレッシュボタン**
2. **ページアップ / ダウンボタン**
3. **Wi-Fi アンテナエリア**
4. **MicroSD カード / TF カードポート**
5. **電源スイッチ**
6. **赤色電源 LED**
7. **緑色ステータス LED**
8. **USB-C データ・充電ポート**
9. **拡張ポート**
10. **スタンド取り付け用ネジ穴**
11. **スタンド**
12. **スタンド取り付けネジ**

### アプリケーション

- **ホームオートメーションダッシュボード:** Home Assistant を介して、温度、湿度、空気質などのスマートホームデータをリアルタイムに表示します（E1003 向け ESPHome ドライバサポートは今後のリリースで提供予定です）。
- **低消費電力白黒電子フォトフレーム:** SenseCraft HMI またはアプリを使用して、アルバム内の写真をオンラインでリモートアップロードできます。大型・高解像度の白黒電子ペーパー画面と組み合わせることで、超低消費電力の画像表示を実現し、バッテリー寿命を心配する必要がなくなります。
- **スマートオフィスディスプレイ:** 会議室の空き状況、オフィスのスケジュール、案内表示などを、低消費電力で常時表示可能な ePaper ディスプレイに表示します。
- **小売・公共情報ディスプレイ:** メニュー、時刻表、在室状況表示などに適した、長時間駆動の低消費電力 ePaper サインとして利用できます。

## SenseCraft HMI を使い始める

reTerminal E1003 には、ノーコードプラットフォーム **SenseCraft HMI** をサポートするファームウェアがプリインストールされており、パーソナライズされたダッシュボードを簡単に設計・デプロイできます。

### ステップ 1. 電源オンとネットワーク設定

1. **電源ボタン** をオンにして reTerminal E1003 の電源を入れます。
2. スマートフォンを使用してデバイスのホットスポット（AP モード）に接続し、Wi-Fi の認証情報を設定します。
3. 画面に「Network Configuration」の QR コードが表示されるか、ブラウザで 192.168.4.1 ページを開きます。
4. インターネットに接続されると、デバイスに **Device Code** または **Binding QR Code** が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### ステップ 2. デバイスをバインドする

1. パソコンのブラウザで [SenseCraft HMI Platform](https://sensecraft.seeed.cc/) にアクセスします。
2. アカウントにログインします（未作成の場合は新規作成します）。
3. **Device Management** セクションに移動し、**Add Device** をクリックします。
4. reTerminal E1003 の画面に表示されている **Device Code** を入力して、バインド処理を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. プラットフォーム上でコンテンツを作成する

1. **Home Page** で使用したいテンプレートを選択するか、**Workspace** で一から作品を作成します。
2. [HMI Platform の使い方に関して質問がある場合は、このリンクをクリックして学習してください。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ 4. コンテンツをデバイスにデプロイする

1. デザインが完成したら、**Preview** ボタンをクリックして見た目を確認します。
2. **Save** または **deploy** ボタンをクリックします。
3. 一覧からバインド済みの reTerminal E1003 を選択します。
4. プラットフォームが Wi-Fi 経由でデータをデバイスに送信します。ePaper 画面がリフレッシュされ、新しいダッシュボードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

## トラブルシューティング

### Q1: デバイスの電源が入らない

- 電源スイッチが ON の位置になっていることを確認します
- USB-C ケーブルを接続してデバイスを充電します
- 赤色 LED が常時点灯しているか確認します（充電中を示します）
- バッテリー駆動の場合は、バッテリーが正しく接続され、充電されていることを確認します

### Q2: Wi-Fi に接続できない

- 正しい Wi-Fi パスワードを入力しているか確認します
- Wi-Fi ネットワークが正常に動作しているか確認します
- Wi-Fi ルーターが 2.4GHz ネットワークをサポートしているか確認します（5GHz はサポートされていません）
- デバイスを Wi-Fi ルーターの近くに移動してみます

### Q3: 画面が更新されない

- リフレッシュボタンを押して手動で更新をトリガーします
- デバイスが Wi-Fi に接続されているか確認します（隅に切断アイコンが表示されていないこと）
- SenseCraft アカウントで、ダッシュボードが正しくデプロイされているか確認します
- 問題が解決しない場合は、デバイスを再起動してみます
- 再起動後もデバイスが反応しない場合は、SenseCraft HMI プラットフォームで対応するファームウェアを書き込み直し、デバイスが正常にリフレッシュできるか確認します

### Q4: ネットワーク接続が切れた

- デバイスは既知のネットワークへの再接続を自動的に試行します
- 再接続されると、Wi-Fi 切断アイコンは消えます
- 再接続できない場合は、上記のネットワークリセット手順に従ってください

### Q5: macOS でシリアルポート（COM）が見つからない

Mac が USB 経由で reTerminal を認識しない場合は、次の簡易ガイドに従って CH340/CH340K ドライバをインストールしてください。

**ステップ 1. ドライバのダウンロードとインストール**
[official WCH page](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) からドライバをダウンロードし、`CH34xVCPDriver.pkg` を実行します。 
:::tip
macOS によってインストールがブロックされた場合は、**System Settings → Privacy & Security** に移動し、ブロックされた WCH ソフトウェアを探して **Allow** をクリックします。
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 2. ドライバ拡張機能を有効化する（重要）**
Launchpad から **CH34xVCPDriver** アプリを開き、**Install** をクリックしてから、**System Settings → General → Login Items & Extensions → Driver Extensions** に移動します。**CH34xVCPDriver Extensions** を **ON**（青）に切り替えます。
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 3. 接続と確認**
デバイスの**電源スイッチが ON になっていること**を確認し、**データ通信対応の USB-C ケーブル**（充電専用ではないもの）を使用してください。Terminal を開き、次を実行します：
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

出力にデバイスパスが表示されれば、ドライバは正しくインストールされており、reTerminal を使用する準備が整っています！

## リソース

- [reTerminal E1003 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
