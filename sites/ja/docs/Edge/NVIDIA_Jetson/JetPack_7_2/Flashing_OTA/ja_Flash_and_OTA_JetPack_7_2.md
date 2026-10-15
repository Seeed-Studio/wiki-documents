---
description: 推奨されるフルフラッシュワークフローとして Seeed Jetson DevelopTool を使用し、管理されたデプロイ向けには検証済みのイメージベース OTA ペイロードを用いて、対応する Seeed Studio Jetson デバイスを JetPack 7.2 へフラッシュまたは移行します。
title: JetPack 7.2 へのフラッシュと OTA アップグレード
keywords:
  - JetPack 7.2
  - Jetson Linux 39.2
  - Seeed Jetson DevelopTool
  - Flash Center
  - OTA
  - NVIDIA Jetson
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png
slug: /flash_and_ota_jetpack_7.2
last_update:
  date: 07/31/2026
  author: Seeed Studio
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/flash_and_ota_jetpack_7.2/
---

# JetPack 7.2 へのフラッシュと OTA アップグレード

このガイドは、Seeed Studio の対応する NVIDIA Jetson 製品向け JetPack 7.2 インストールのメインエントリです。クリーンフラッシュを実行すべきタイミング、イメージベース OTA アップデートが適切なタイミング、そしてガイド付きフラッシュの例として **Seeed Jetson DevelopTool Flash Center** を使用する方法を説明します。

:::info JetPack 7.2 ベースライン
JetPack 7.2 は **Jetson Linux 39.2**、**Ubuntu 24.04**、および **Linux カーネル 6.8** をベースとしています。必ず、使用する Jetson モジュールと Seeed キャリアボードの組み合わせに正確に対応したイメージを選択してください。
:::

## まずアップグレード方法を選択する

| 方法 | 推奨される用途 | データへの影響 | JetPack 7.2 における位置付け |
| --- | --- | --- | --- |
| Seeed Jetson DevelopTool によるフルフラッシュ | 新規デバイス、開発システム、JetPack 6.x から 7.2 への移行、リカバリ、または BSP の置き換え | 対象システムストレージは消去される | **推奨されるデフォルト** |
| 手動 BSP フラッシュ | カスタム BSP 開発、工場自動化、または GUI を使用しないトラブルシューティング | 対象システムストレージは消去される | 正しい Seeed/NVIDIA BSP とボード設定を使用する場合にサポート |
| イメージベース OTA | 検証済みのソースイメージ、ターゲットイメージ、ボード設定、パーティションレイアウト、およびロールバック計画を持つ管理された本番フリート | 明示的に設計・テストされている場合、アプリケーションデータを保持可能 | 対象製品とソースリリースに対して JetPack 7.2 OTA ペイロードが検証されている場合にのみ使用 |
| JetPack メジャーバージョンをまたぐ `apt upgrade` | 非推奨 | 予測不能 | JetPack 6.x から 7.2 への移行方法としては使用しないでください |

:::caution
JetPack 6.x から JetPack 7.2 へのようなメジャー移行では、対象製品、ソース L4T リリース、ストレージデバイス、およびパーティションレイアウトに対して Seeed が明示的に OTA ペイロードを公開または検証していない限り、フルフラッシュを使用してください。
:::

## ビデオ: Seeed Jetson DevelopTool フラッシュワークフロー

次のビデオでは、NVIDIA Jetson AGX Thor プラットフォームでの Seeed Jetson DevelopTool を紹介します。Flash Center のワークフローは、対応する Seeed Jetson 製品にも共通していますが、利用可能なデバイスモデルとファームウェアバージョンは、現在の DevelopTool カタログに依存します。

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/SjXyQ3abxms" title="Seeed Jetson DevelopTool with AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## パート 1: Seeed Jetson DevelopTool によるフルフラッシュ

### 開始前の準備

- [JetPack フラッシュセレクタ](/ja/flash/jetpack_to_selected_product/) または製品 wiki に、使用するデバイス向けの JetPack 7.2 / L4T 39.2 イメージが掲載されていることを確認します。
- 安定した Ubuntu ホストを使用します。最も信頼性の高い USB リカバリ接続のため、ネイティブ Linux を推奨します。
- 少なくとも 20 GB のホスト空きストレージを用意します。ダウンロードおよび展開される BSP パッケージによっては、さらに多くの容量が必要になる場合があります。
- 正しいリカバリ/フラッシュポートに直接接続された USB データケーブルを使用します。
- ユーザーデータ、コンテナ、キャリブレーションファイル、アプリケーション設定、暗号鍵、およびカスタム BSP ソースをバックアップします。
- 誤ったターゲットが選択されないよう、不要な Jetson リカバリモードデバイスを切断します。

:::warning
フラッシュを行うと、選択した Jetson システムストレージは消去されます。開始前に、ターゲットデバイス、キャリアボード、モジュール SKU、およびストレージの宛先を必ず確認してください。
:::

### ステップ 1: DevelopTool をインストールして起動する

公開されている Python パッケージをインストールします:

```bash
python3 -m pip install --upgrade seeed-jetson-developer
seeed-jetson-developer
```

または、ソースからインストールします:

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
python3 -m pip install .
seeed-jetson-developer
```

ホストセットアップの詳細については、[DevelopTool インストール](/ja/jetson_developtool_installation/) を参照してください。

### ステップ 2: Flash Center を開く

Seeed Jetson DevelopTool で **Flash Center** を開きます。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/>
</div>

### ステップ 3: 正確なデバイスと JetPack 7.2 イメージを選択する

正確な Seeed 製品またはキャリアボード構成を選択し、そのターゲットで利用可能な場合は **L4T 39.2 / JetPack 7.2** を選択します。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/>
</div>

:::caution
名前が似ているボードを選択しないでください。Jetson モジュールは、異なるデバイスツリー、ピンマックス設定、電源構成、および周辺ドライバを必要とする複数のキャリアボードに電気的に接続できる場合があります。
:::

選択した製品に対して L4T 39.2 が提供されていない場合は、いったん中断して次を確認してください:

- [JetPack を選択した Jetson にフラッシュ BSP](/ja/flash/jetpack_to_selected_product/)
- [DevelopTool 対応デバイス](/ja/jetson_developtool_supported_devices/)
- [JetPack 7.2 リソースハブ](/ja/jetpack_7_2_resource_hub/) からリンクされている製品別フラッシュ wiki

### ステップ 4: BSP をダウンロード、検証、展開する

**Download / Extract BSP** をクリックします。DevelopTool はファームウェアパッケージをダウンロードし、ダウンロードの再開をサポートし、提供されている場合はチェックサムを検証し、BSP を展開します。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/>
</div>

ダウンロードの検証または展開に失敗した場合は、先へ進まないでください。DevelopTool が再開できないことを確認してから、不完全なパッケージのみを削除してください。

### ステップ 5: Jetson を Force Recovery モードにする

製品固有のリカバリボタンまたはジャンパシーケンスを使用し、リカバリ USB ポートを接続し、ハードウェアガイドの指示に従ってデバイスの電源投入またはリセットを行います。

ホスト側で、NVIDIA リカバリ USB が存在することを確認します:

```bash
lsusb | grep 0955
```

Jetson Orin のリカバリデバイス ID は、一般的に `0955:7x23` ファミリに該当します。Jetson Thor は異なるリカバリ ID を使用します。正確な値はモジュールによって異なります。

DevelopTool の USB リカバリワークフローについては、[デバイスの接続](/ja/jetson_developtool_connect_device/) を参照してください。

### ステップ 6: ターゲットを検出して確認する

**Detect Device** をクリックします。フラッシュを開始する前に、次の点を確認します:

- 選択された Seeed 製品とキャリアボード
- Jetson モジュールとメモリ構成
- L4T 39.2 / JetPack 7.2 イメージ
- ターゲットストレージデバイス
- USB リカバリデバイス
- バックアップの完了

### ステップ 7: フラッシュを開始する

**Start Flash** をクリックし、処理が完了するまで USB と電源の両方を接続したままにします。

:::warning
失敗したフラッシュを、失敗ログを確認する前に自動的に再試行しないでください。USB エラーの場合は、デバイスを再度 Force Recovery モードにし、ホストに直接再接続してから、ターゲットを再検出してください。
:::

### ステップ 8: 初回起動を完了する

デバイスが起動したら、次を実行します:

1. Ubuntu の初回起動セットアップを完了するか、ヘッドレスデバイスの場合は [DevelopTool リモート初期化ワークフロー](/ja/jetson_developtool_remote_development/) を使用します。
2. ネットワークと SSH アクセスを設定します。
3. ベースシステムが検証に合格した後にのみ、アプリケーションデータを復元します。

### ステップ 9: JetPack 7.2 を検証する

次を実行します:

```bash
head -n 1 /etc/nv_tegra_release
cat /etc/os-release
uname -r
nvcc --version
dpkg -l | grep -E 'nvidia-jetpack|tensorrt|libnvinfer|cudnn'
```

次のベースラインを確認します:

- Jetson Linux が R39.2 リリースファミリを報告している。
- ルートファイルシステムが Ubuntu 24.04 を報告している。
- カーネルが、イメージによって提供される JetPack 7.2 のカーネル 6.8 系列を報告している。
- CUDA と TensorRT パッケージがターゲット JetPack イメージと一致している。

その後、Ethernet、Wi-Fi、カメラ、GMSL、CAN、USB、M.2、GPIO、ストレージ、ファン制御、および必要な電源モードを検証します。

## パート 2: JetPack 7.2 イメージベース OTA

イメージベース OTA は、すべてのデバイスをフラッシュ用ホストに接続することなく、展開済み Jetson を更新します。これはリリースエンジニアリングのワークフローであり、汎用的なパッケージアップグレードではありません。

:::danger 現在のリポジトリペイロードは JetPack 7.2 ペイロードではありません
現在 [Deploy OTA on reComputer](/ja/deploy_ota_on_recomputer/) で文書化されているすぐに使用可能な OTA ペイロードは、JetPack 5.1.3 システムを JetPack 6.2 にアップグレードします。これらのペイロードを JetPack 7.2 デバイスに適用したり、JetPack 6.x から 7.2 へのパッケージとして使用したりしないでください。
:::

### 必要な OTA 互換性インプット

JetPack 7.2 OTA ペイロードは、次のすべてに対して生成および検証されている必要があります:

- 正確な Seeed 製品とキャリアボード
- 正確な Jetson モジュール SKU とメモリ構成
- 正確なソース L4T リリースとルートファイルシステム状態
- 正確なターゲット L4T 39.2 BSP
- ブートストレージとパーティションレイアウト
- Secure Boot、ディスク暗号化、および鍵構成
- カスタムデバイスツリー、カーネル、カーネルモジュール、ファームウェア、およびルートファイルシステムの変更
- データ保持リストと利用可能な空き容量
- 電源断からの復旧およびロールバック動作

これらのインプットのいずれかが異なる場合は、別個のペイロードを作成して検証してください。

### 推奨される OTA 開発フロー

1. バージョン管理された BSP インプットから、ソースイメージとターゲット JetPack 7.2 イメージの両方を再現します。
2. 代表的なデバイスにソースイメージをフラッシュし、パーティション、ブートローダー、ストレージ、およびセキュリティ状態を記録します。
3. Jetson Linux 39.2 の OTA ツールと、対応する Seeed ボードサポートパッケージを使用して、イメージベース OTA ペイロードを生成します。
4. 本番のセキュリティモデルが必要とする場合は、ペイロードに署名します。
5. 更新後も保持する必要があるデータのみを定義し、最初の本番ロールアウト前にそれを別途バックアップします。
6. 通常のアップデート、中断されたダウンロード、中断されたインストール、ストレージ不足、電源断、およびロールバックの各シナリオをテストします。
7. デプロイを拡大する前に、小規模なカナリアグループへロールアウトします。
8. 再起動後に、Jetson Linux、ブートスロット、アプリケーションサービス、周辺機器、および AI ランタイムバージョンを検証します。

既存の[Deploy OTA on reComputer](/ja/deploy_ota_on_recomputer/) および [Updating Jetson Linux with Image-Based OTA](/ja/updating_jetpack_with_ota/) のページは、パッケージ生成構造とデバイス上での `nv_ota_start.sh` ワークフローに関する有用なリファレンスです。これらに記載されているバージョン固有のコマンドは、正しい Jetson Linux 39.2 パッケージ、ボード構成、およびパーティションデータに置き換える必要があります。

### OTA デバイス側検証チェックリスト

ペイロードを適用する前に：

```bash
df -h
lsblk -f
head -n 1 /etc/nv_tegra_release
systemctl --failed
```

OTA 後に再起動したら：

```bash
head -n 1 /etc/nv_tegra_release
uname -r
systemctl --failed
journalctl -b -p err
```

さらに、アプリケーションデータ、ネットワーク ID、デバイス証明書、コンテナボリューム、ハードウェアインターフェース、および本番用ウォッチドッグも検証してください。

## JetPack 6.x から 7.2 への移行チェックリスト

- JetPack 7.2 のカーネルヘッダーに対してツリー外カーネルモジュールを再ビルドします。
- 対象 BSP 向けにカメラおよび GMSL ドライバを再ビルドします。
- CUDA 13 向けに CUDA 拡張機能およびネイティブアプリケーションを再ビルドします。
- JetPack 7.2 上でシリアライズされた TensorRT エンジンを再生成します。
- JetPack 6.x の環境ディレクトリをコピーするのではなく、Python 環境を再作成します。
- JetPack 7.2 の NVIDIA コンテナランタイムに対してコンテナを再検証します。
- ハードウェア要件に応じて、[JetPack 7.2 wireless modules](/ja/jetpack72_ax210_ax200_wifi_setup_guide/) を復元します。
- `MAXN_SUPER` などのより高いパフォーマンスモードを有効にする前に、元の電源モードを検証します。
- 本番展開前に、メモリ、レイテンシ、スループット、温度、および電力を記録します。

## トラブルシューティング

### DevelopTool がリカバリデバイスを検出しない

- 使用している USB ケーブルがデータ通信に対応していることを確認します。
- 専用のリカバリ／フラッシュ用 USB ポートを使用します。
- 製品固有の Force Recovery シーケンスを繰り返します。
- ホスト上で `lsusb | grep 0955` を実行します。
- リカバリモードの他の Jetson デバイスを切断します。
- WSL2 の USB パススルーが不安定な場合は、ネイティブ Ubuntu を優先して使用します。

### 必要な JetPack 7.2 イメージが一覧に表示されない

回避策として別のキャリアボードを選択しないでください。中央のフラッシュセレクタと製品 wiki を確認し、そのハードウェアに対して検証済み BSP が提供されるのを待つか、リクエストしてください。

### フラッシュ後にデバイスが起動しない

- イメージがキャリアボードおよびモジュール SKU に一致していることを確認します。
- Force Recovery ジャンパを取り外すか、リカバリボタンを離します。
- デバイスの電源を入れ直します（電源サイクル）。
- UART シリアルブートログを取得します。
- 再度リカバリモードに入り、再フラッシュする前に DevelopTool のフラッシュログを確認します。

### OTA が失敗する、または JetPack 7.2 で再起動しない

- ペイロードのソースおよびターゲットバージョンがデバイスと完全に一致していることを確認します。
- ステージングおよびインストール用に十分な空きストレージがあることを確認します。
- 再試行する前に OTA ログを確認します。
- テスト済みロールバック経路でデバイスを復旧できない場合は、既知の正常な完全イメージを復元します。

## 関連リソース

- [JetPack 7.2 Resource Hub](/ja/jetpack_7_2_resource_hub/)
- [Flash BSP with JetPack to Selected Jetson](/ja/flash/jetpack_to_selected_product/)
- [DevelopTool Flash Firmware](/ja/jetson_developtool_flash_firmware/)
- [DevelopTool Supported Devices](/ja/jetson_developtool_supported_devices/)
- [Deploy OTA on reComputer](/ja/deploy_ota_on_recomputer/)
- [Updating Jetson Linux with Image-Based OTA](/ja/updating_jetpack_with_ota/)
- [JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive/)

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
