---
description: "USB KVM Capture Kit を reComputer Jetson と一緒に使用して、キーボードとマウスの共有接続を行い、HDMI または DisplayPort 映像をキャプチャし、OSRBOT Link を使い始めましょう。"
title: USB KVM Capture Kit 入門ガイド
keywords:
  - Edge
  - NVIDIA Jetson
  - reComputer
  - USB KVM
  - Video Capture
  - OSRBOT Link
image: https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/product.png
slug: /usb_kvm_capture_kit_getting_start
last_update:
  date: '2026-11-13'
  author: zibo
createdAt: '2026-11-13'
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/ja/usb_kvm_capture_kit_getting_start/
---

<div align="center">
  <img alt="OSRBOT Link USB keyboard and mouse sharing device" width="600" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/product.png" />
</div>

USB KVM Capture Kit は、**OSRBOT Link キーボード・マウス共有デバイス**に、オプションのビデオキャプチャ用アクセサリを組み合わせたものです。PC 側のキーボードとマウスを使って reComputer Jetson を操作し、キャプチャカードを接続すると OSRBOT Link アプリケーション上で Jetson の映像出力を表示できます。これは、別途モニタ・キーボード・マウスを用意せずに、現場でのセットアップやトラブルシューティングを行う際に便利です。

本ガイドでは、**コントローラ**は OSRBOT Link を実行しているコンピュータ、**ターゲット**は操作対象の reComputer Jetson を指します。ターゲット側に OSRBOT Link をインストールする必要はありませんが、USB キーボードとマウス入力をサポートしている必要があります。

## 特長

- ターゲット側にソフトウェアをインストールせずに USB キーボードとマウスを制御可能。
- Windows、macOS、Ubuntu 向けのコントローラ用ソフトウェア。
- オプションの HDMI ビデオキャプチャ機能、および DisplayPort 出力を持つターゲット向けの DP-HDMI 変換アダプタ。
- スクリーンショット、ビデオ録画、GIF キャプチャ、ASCII コマンド貼り付け。
- コントローラ側とターゲット側で独立した USB 拡張ポート。
- OSRBOT Link Pro によるオプションの Ethernet ネットワーク共有と LAN ブラウザ制御。

:::info
キーボード／マウス入力、ビデオキャプチャ、ネットワーク共有はそれぞれ別の接続を使用します。共有デバイス単体ではビデオキャプチャは行われず、その USB データケーブルはネットワークトラフィックを運びません。ビデオの解像度、フレームレート、レイテンシは、キャプチャカードと映像経路に依存します。
:::

## 仕様

### キーボード・マウス共有デバイス

<div class="table-center">

| 項目 | 仕様 |
| --- | --- |
| 製品 | OSRBOT Link キーボード・マウス共有デバイス |
| ハウジング | アルミニウム合金およびエンジニアリングプラスチック |
| コントローラ接続 | USB 3.0、コントローラ側 USB 3.0 拡張ポートを 1 つ搭載 |
| ターゲット接続 | USB 2.0、ターゲット側 USB 2.0 拡張ポートを 1 つ搭載 |
| 付属データケーブル | USB-A オス - USB-A オス、1 m |
| コントローラ用ソフトウェア | OSRBOT Link |
| コントローラ対応プラットフォーム | Windows、macOS、Ubuntu |
| 映像表示 | 外付けキャプチャカードが必要 |

</div>

### キャプチャカード

以下の仕様は、OSRBOT Link v1.1 マニュアルに記載されているキャプチャカードについてのものです。すべてのサードパーティ製キャプチャカードに当てはまるわけではありません。

<div align="center">
  <img alt="Capture card with HDMI input and USB-A output" width="300" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/capture-card.png" />
</div>

<div class="table-center">

| 項目 | 仕様 |
| --- | --- |
| 接続 | HDMI 入力 - USB-A 出力 |
| MJPG キャプチャ | 4K 60 fps / 2K 60 fps / 1080p 144 fps |
| NV12 キャプチャ | 4K 30 fps / 2K 60 fps / 1080p 60 fps |
| YUY2 キャプチャ | 4K 25 fps / 2K 50 fps / 1080p 60 fps |
| XRGB (RGB24)、マニュアル記載 | 2K 30 fps / 1080p 60 fps |
| オーディオ出力 | デフォルトでステレオ、48 kHz / 24 bit |
| オーディオキャプチャ | 5.1 / 7.1 チャンネル対応 |
| プレビュー遅延 | 40～80 ms、通常は約 60 ms |
| ビデオプロトコル | UVC |

</div>

:::note
これらのキャプチャカード仕様およびレイテンシ値は、Jetson でのテスト結果ではなくサプライヤ提供の情報です。記載されているレイテンシ条件は、USB 3.0、1080p 60 fps、PC 上での RGB24 プレビューです。利用可能なモードは、実際のキャプチャカード、ソース出力、USB 接続、およびソフトウェアによって異なります。カードのオーディオ機能だけでは、すべてのアプリケーションワークフローでのオーディオ対応が保証されるわけではありません。
:::

## パッケージ内容

<div class="table-center">

| アクセサリ | Basic | HDMI | HDMI + DP |
| --- | --- | --- | --- |
| キーボード・マウス共有デバイス | 同梱 | 同梱 | 同梱 |
| USB-A - USB-A データケーブル | 同梱 | 同梱 | 同梱 |
| キャプチャカード | — | 同梱 | 同梱 |
| HDMI ケーブル | — | 同梱 | 同梱 |
| DP-HDMI 変換アダプタ | — | — | 同梱 |

</div>

<div align="center">
  <img alt="USB-A data cable, HDMI cable, and DP-to-HDMI adapter" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/accessories.png" />
</div>

マニュアルには、1 m の USB-A データケーブル、0.6 m の HDMI オス-オスケーブル（HDMI 2.0、19+1）、および DP オス - HDMI メス変換アダプタが記載されています。パッケージ内容やアクセサリ仕様は変更される場合があります。注文時に同梱品を確認してください。

## 対応デバイスと要件

次のものを準備します：

- **コントローラ：** USB 接続が可能な Windows、macOS、または Ubuntu コンピュータ。キャプチャカードの公称性能を得るには USB 3.0 を使用してください。ビデオを使用する場合、共有デバイスとキャプチャカードの両方をコントローラに接続する必要があります。
- **ターゲット：** キーボード／マウス入力をサポートする USB ホストポートを備えた、電源投入済みの reComputer Jetson。ビデオ用には、動作する HDMI または DisplayPort 出力も必要です。
- **ソフトウェア：** コントローラの OS とプロセッサアーキテクチャに対応した OSRBOT Link パッケージ。
- **アクセサリ：** 付属の USB-A データケーブル、およびビデオ用にキャプチャカード、HDMI ケーブル、必要に応じて DP-HDMI 変換アダプタ。
- **オプションのネットワーク：** ネットワーク共有用の Ethernet ケーブルと適切なネットワークアダプタ、ブラウザアクセス用の信頼できる到達可能な LAN。

本ガイドでは、すべての reComputer モデルや JetPack リリースに対する検証済み互換リストではなく、接続要件を説明します。お使いのデバイスの USB ホストポートやディスプレイコネクタについては、ハードウェアドキュメントを確認してください。ここでは Jetson はターゲットであり、Ubuntu を実行しているという理由だけでコントローラ用パッケージをインストールしないでください。

## ハードウェア接続

### ポートの確認

<div align="center">
  <img alt="Controller side: port 1 is the built-in USB-A plug and port 2 is the blue USB 3.0 expansion port" width="400" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/controller-ports.png" />
  <img alt="Target side: port 3 is the upper USB 2.0 expansion port and port 4 is the lower target connection port" width="400" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/target-ports.png" />
</div>

| ポート | 用途 | 接続 |
| --- | --- | --- |
| 1 | コントローラ接続 | 内蔵 USB-A プラグを OSRBOT Link を実行しているコンピュータに挿入します。 |
| 2 | コントローラ側 USB 3.0 拡張 | USB ドライブやキーボードレシーバーなど、コントローラに属する周辺機器を接続します。 |
| 3 | ターゲット側 USB 2.0 拡張 | Jetson に属する USB 周辺機器を接続します。 |
| 4 | ターゲット接続 | 付属の USB-A - USB-A データケーブルを使用して、この下側ポートと Jetson の USB ホストポートを接続します。 |

:::caution
付属のデータケーブルは、**共有デバイスのポート 4** と Jetson の間を接続してください。コントローラの USB ポートと Jetson の USB ホストポートを直接接続する用途には使用しないでください。ポート 2 と 3 は拡張ポートであり、ポート 4 の代用にはなりません。
:::

### reComputer 接続概要

<div align="center">
  <img alt="reComputer Jetson connection diagram: keyboard and mouse travel from the controller through the OSRBOT sharing device to a Jetson USB host port; Jetson HDMI or DP video returns through a capture card to the controller; optional network sharing uses a separate Ethernet cable" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/recomputer-connection.svg" />
</div>

この図は論理的な配線ガイドであり、コネクタの位置はお使いの reComputer モデルによって異なります。Jetson には通常の電源アダプタで給電してください。以下の 3 つの構成のいずれかを選択します。

### オプション 1：キーボードとマウスのみ

1. 共有デバイスの**ポート 1** をコントローラに挿入します。
2. 付属のデータケーブルを使用して、**ポート 4** を Jetson の USB ホストポートに接続します。
3. 必要に応じてターゲット側の既存ディスプレイを使用します。キャプチャカードがない場合、OSRBOT Link は入力制御のみを提供し、ターゲット映像のプレビューは行いません。

<div align="center">
  <img alt="Keyboard and mouse only: controller USB to the sharing device, then port 4 and the data cable to the target USB port" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/keyboard-mouse-connection.png" />
</div>

### オプション 2：キーボードとマウス + HDMI ビデオ

1. 上記のキーボード／マウス接続を完了します。
2. Jetson の**HDMI 出力**を HDMI ケーブルでキャプチャカードの**HDMI 入力**に接続します。
3. キャプチャカードの**USB 出力**をコントローラに接続します。

<div align="center">
  <img alt="HDMI setup with separate USB input control and HDMI-to-USB video capture paths" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/hdmi-connection.png" />
</div>

### オプション 3：キーボードとマウス + DisplayPort ビデオ

1. オプション 1 のキーボード／マウス接続を完了します。
2. DP-HDMI 変換アダプタを Jetson の**DisplayPort 出力**に接続します。
3. アダプタからキャプチャカードの**HDMI 入力**まで HDMI ケーブルを接続します。
4. キャプチャカードの**USB 出力**をコントローラに接続します。

<div align="center">
  <img alt="DisplayPort setup: target DP output through a DP-to-HDMI adapter and HDMI cable to the capture card, with capture-card USB connected to the controller" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/dp-connection.png" />
</div>

アダプタの方向は、**DP ソースから HDMI キャプチャ入力**です。共有デバイスは、どちらのビデオ構成でも接続されたままにします。

## ソフトウェアのインストール

### OSRBOT Link のダウンロード

コントローラ上で [official OSRBOT Link releases](https://github.com/osrbot/osrbot-link/releases) を開き、そのプラットフォームに対応するパッケージを選択します。

| コントローラプラットフォーム | パッケージ |
| --- | --- |
| Windows | 対応する Windows バージョンとアーキテクチャに合ったインストーラまたはポータブルパッケージ |
| macOS | Mac に対応した Apple Silicon または Intel 用パッケージ |
| Ubuntu | 対応アーキテクチャ向けの DEB または AppImage。リリースの要件を確認してください。 |

**OSRBOT Link Pro** には、後述のネットワーク共有および LAN ブラウザ制御ワークフローが含まれます。**Lite** はローカル USB 制御とキャプチャツール向けです。本ガイド全体に従うには Pro を使用し、選択したリリースのノートで対応システムとインストール手順を確認してください。

### 必要な権限を許可する

- **Windows と macOS：** キャプチャカードに対するカメラアクセスを許可します。
- **macOS：** システムショートカットを転送する場合は、アクセシビリティアクセスを許可します。このオプション機能を使用する場合は、システム設定でインターネット共有を手動で設定します。
- **Ubuntu：** HID アクセスに失敗した場合は、**Settings → Input and Shortcuts → Fix Linux HID Permissions** を開き、操作を承認してから再スキャンします。必要に応じて共有デバイスを再接続します。

インターフェースのラベルはリリースによって異なる場合があります。このガイドのスクリーンショットと動作制限は、v1.1 製品マニュアルに基づいています。

## 制御を開始する

<div align="center">
  <img alt="OSRBOT Link のメインウィンドウ。HID を接続し、オプションのビデオを開始し、その後ワークスペースをクリックする手順を表示" width="900" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/start-control.png" />
</div>

1. **HID を接続します。** OSRBOT Link を開き、**Keyboard/Mouse Sharing** リストを更新し、**OSRBOT HID** を選択して **Connect** をクリックします。ステータスが **Connected** になっていることを確認します。
2. **ビデオ接続時はビデオを開始します。** **Video Capture** でキャプチャカードを選択し（一部のインターフェースでは **Video Input** と表示）、**Capture Settings** でサポートされている解像度とフレームレートを選択してから **Start Video** をクリックします。キーボード／マウスのみで操作する場合はこの手順を省略します。
3. **マウスモードを選択します。** Jetson デスクトップなどのコンピュータを対象とする場合は **Computer** を使用します。**Android** モードは Android ターゲット向けに相対移動を使用します。
4. **入力を開始します。** ビデオまたは空のワークスペースをクリックします。コントローラ側のキーボードとマウスがターゲットを操作できるようになります。
5. **動作を確認します。** ビデオを有効にした状態で、想定どおり Jetson デスクトップが表示されることを確認します。ポインタを動かし、ターゲット上のテキストフィールドに無害なテスト文字列を入力します。

:::tip
**Shift + Esc** を押すと入力が解放され、全画面表示を終了します。再開するにはワークスペースを再度クリックします。設定を開く、モードを変更する、ウィンドウを切り替えると制御はいったん一時停止します。オプションの **Right Ctrl** による入力解放ショートカットは Settings で有効化できます。
:::

作業が終わったら、Keyboard/Mouse Sharing で **Disconnect** をクリックします。必要に応じて Control メニューから **Ctrl+Alt+Del** を送信します。予約済みシステムショートカットの転送可否はコントローラ側プラットフォームに依存します。

## 追加機能

### 表示とキャプチャ設定

| 表示モード | 動作 |
| --- | --- |
| Fit | アスペクト比を維持し、画像全体を表示します。 |
| Fill | アスペクト比を維持しますが、端が切り取られる場合があります。 |
| Original | 元のピクセル解像度で表示します。 |
| Stretch | ワークスペース全体を埋めますが、アスペクト比が変わる場合があります。 |

Display メニューを使用して全画面表示に切り替えたり、サイドバーやツールバーの表示／非表示を切り替えたりできます。キャプチャカードやキャプチャ設定を変更する前にビデオを停止してください。ステータスバーには実際の解像度とフレームレートが表示されます。カスタム解像度を入力しても、キャプチャカードの機能が増えることはありません。

### スクリーンショット、録画、GIF

ビデオを開始してから、Capture メニューまたは全画面ツールバーを使用します：

- **Screenshot：** 現在キャプチャされているフレームを任意の場所に保存します。
- **Recording：** Record をクリックし、Stop Recording をクリックして保存します。各録画は自動的に **256 MiB** で停止して保存されます。続けるには新しいセグメントを開始します。
- **GIF：** 短いクリップを録画し、停止して保存します。各クリップはおおよそ **10 秒** に制限されています。

ビデオを停止すると録画も終了します。アプリを閉じたりデバイスを抜いたりする前に、保存が完了するまで待ってください。**Settings → Capture and Watermark** で、OSRBOT Link のウォーターマークにカスタム名を追加できます。

### コマンドの貼り付け

<div align="center">
  <img alt="Paste Helper。コマンドプレビュー、送信速度、送信後に Enter を押すオプションを表示" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/paste-helper.png" />
</div>

1. HID を接続したまま、Jetson 上のターミナルまたはテキストフィールドにフォーカスを合わせます。
2. **Control → Paste Helper** を開きます。クリップボードのテキストを確認するか、コマンドを入力します。
3. **Fast**、**Standard**、**Slow** のいずれかを選択し、**Press Enter after sending** が有効かどうかを確認します。
4. **Send Paste** をクリックして完了を待ちます。中断するには **Stop Sending** を使用します。

ローカル制御中に **Ctrl + Alt + V** を押すと、**最大 256 個の印字可能な ASCII 文字** からなる 1 行を Enter を押さずに送信します。より長いテキストや複数行のテキストの場合はプレビューが開きます。Paste Helper は最大 **1,200 文字の ASCII** を受け付け、中国語テキストやファイル転送には対応していません。

:::caution
Paste Helper は、ターゲット側でフォーカスされているフィールドにキーボード入力を生成します。特に Enter を押すオプションが有効な場合は、送信前にターゲットのフォーカス位置とコマンド内容を必ず確認してください。
:::

### 設定と診断

<div align="center">
  <img alt="OSRBOT Link の設定タブ。一般設定、入力とショートカット、キャプチャとウォーターマーク、アプリ情報を表示" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/settings.png" />
</div>

設定には、英語／中国語の言語、ライト／ダーク／システム外観、スクロール方向、入力解放ショートカット、ポインタヒント、クイックペーストなどが含まれます。設定はコントローラ側に保存され、変更してもデバイスが自動的に接続されることはありません。

トラブルシューティングの際は、**Settings → General** で診断ログを有効にし、問題を再現してから **Export** を選択します。マニュアルによると、ログにはセッション状態が記録されますが、キーストローク、クリップボードの内容、ビデオは記録されず、自動アップロードも行われません。

## オプション：ネットワーク共有

OSRBOT Link Pro で **Network and Remote** を開きます。ネットワーク共有により、Jetson はコントローラの上流接続にアクセスできます。これはキーボード／マウス制御やビデオキャプチャとは独立しています。

<div align="center">
  <img alt="Windows のネットワーク共有例。上流アダプタとターゲットアダプタを個別に選択している画面" width="650" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/network-sharing.png" />
</div>

1. コントローラと Jetson の Ethernet ポートを Ethernet ケーブルで接続します。
2. コントローラを Wi-Fi または 2 つ目の Ethernet アダプタ経由で上流ネットワークに接続します。
3. **Upstream Adapter** と **Target Adapter** を選択し、**Enable Sharing** をクリックして、要求されるシステム権限を付与します。
4. 表示されるステータスと IP 情報を確認し、Jetson から必要な LAN サービスまたはインターネットアクセスを検証します。
5. 終了時は **Disable Sharing** をクリックします。

Windows では管理者権限が必要です。Linux では NetworkManager、システム認可、および上流アダプタ上のデフォルトルートが必要です。macOS では、システム設定でインターネット共有を手動で有効にします。

:::note
USB キーボード／マウスケーブルは、このネットワーク接続を提供しません。オフラインの直接 Ethernet 接続の場合は、互いに到達可能な IP アドレスを使用してください。インターネットアクセスやネットワーク共有は不要です。OSRBOT Link を閉じても、システムのネットワーク共有は **無効になりません**。スクリーンショット内のアダプタ名とアドレスは一例です。
:::

## オプション：LAN ブラウザ制御

コントローラ上で OSRBOT Link Pro を実行したままにします。到達可能で信頼できる LAN 上の他のコンピュータは、キャプチャされた Jetson 画面を閲覧し、許可されている場合はブラウザ経由で操作できます。この機能を使用するためにネットワーク共有を有効にする必要はありません。

<div align="center">
  <img alt="コントローラ側の LAN 制御設定。LAN IP、ポート、ペアリング、制御権限を表示" width="450" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/lan-control.png" />
</div>

1. コントローラ側で LAN IP とポートを選択し、**Enable LAN** をクリックします。
2. 別のコンピュータで、アプリに表示されている実際のアドレスを開き、ペアリングコードを入力して **Connect** をクリックします。各コードは 1 回限り有効で、**2 分** 後に失効します。
3. 閲覧のみの場合は、コントローラ側でビデオが実行中であることを確認します。
4. 入力も行う場合は、HID を接続し、**Allow Control** を有効にして、そのブラウザに制御権限を付与します。ブラウザ側のユーザーは **Request Control** をクリックできます。

<div align="center">
  <img alt="ブラウザのペアリングページと、表示スケーリング、ストリーミング品質、全画面制御を備えたコントロールツールバー" width="900" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/browser-control.png" />
</div>

最大 **4 つのブラウザ** が同時に閲覧でき、リモート入力が許可されるのは **1 つのブラウザ** のみです。コントローラと許可されたブラウザの両方から入力を送信できるため、操作は調整してください。**Disable Control** は閲覧を許可したままリモート入力を取り消します。LAN 制御を無効にすると、すべてのセッションが終了します。

信頼できる LAN を使用し、必要に応じてプライベートネットワーク向けのファイアウォールアクセスを許可し、ポートをインターネットに公開しないでください。再接続には新しいペアリングコードが必要です。コントローラの IP が変わった場合は、LAN 制御を再起動し、新しいアドレスを使用します。

## トラブルシューティング

| 症状 | 確認事項 |
| --- | --- |
| 共有デバイスが表示されない、または HID が接続できない | コントローラの USB 接続を確認し、リストを更新して HID デバイスを再選択します。必要に応じて Reset HID を使用するか、Linux HID 権限を修正してから再接続します。 |
| ビデオは動作するが入力ができない | HID が Connected であること、ターゲットケーブルがポート 4 を使用していること、ワークスペースをクリック済みであることを確認します。ブラウザ入力の場合は、制御権限も確認します。 |
| ビデオが表示されない、または黒い画面になる | ターゲットのビデオ出力、HDMI/DP の向き、キャプチャカードの USB 接続、カメラ権限を確認します。キャプチャカードを使用している他のアプリを閉じます。 |
| 特定の解像度またはフレームレートで開始できない | ビデオを停止し、キャプチャカードとソースの両方でサポートされているモードを選択します。USB 接続を確認します。カスタム設定はハードウェアの能力を超えることはできません。 |
| 設定を開いたりウィンドウを切り替えたりした後に入力が止まる | ワークスペースを再度クリックして制御を再開します。まだ反応しない場合は Reset HID を使用し、リストを更新して再接続します。 |
| ネットワーク共有が有効だがアクセスできない | 両方のアダプタ選択、Ethernet 配線、ターゲットのアドレス、ゲートウェイ、DNS を確認します。ターゲットから必要なサービスを検証します。ping が成功するだけでは不十分です。 |
| ブラウザのペアリングに失敗する | 新しいペアリングコードを生成し、LAN への到達性とファイアウォールアクセスを確認します。現在のコントローラアドレスを使用します。 |
| ブラウザで閲覧はできるが制御できない | HID、Allow Control、およびブラウザに付与された制御権限を確認します。リモート入力権限を保持できるブラウザは 1 つだけです。 |

**Reset HID** は自動的に制御を再開したり、ビデオ/録画を停止したりしません。再接続してから、ワークスペースをクリックしてください。

サポート依頼の際は、コントローラの OS、対象モデル、配線の写真、エラーメッセージ、再現手順、必要に応じてエクスポートした診断ログを含めてください。

## 関連リソース

- [OSRBOT Link ソフトウェアのリリースとインストールノート](https://github.com/osrbot/osrbot-link/releases)
- [reComputer Super ハードウェアおよびインターフェースの使用方法](/ja/recomputer_jetson_super_hardware_interfaces_usage/)
- [reComputer Robotics J401 インターフェースとピン配置](/ja/recomputer_jetson_robotics_j401_getting_started/)
- [Seeed Wiki リポジトリとディスカッション](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

製品情報、動作限界、およびマニュアルの図は、**OSRBOT Link Product Manual v1.1（英語および中国語、2026年11月）** に基づいています。reComputer 接続概要は本ガイド用の概略図であり、検証済みセットアップの写真ではありません。OSRBOT ソフトウェアおよびハードウェアのサポートについては、[winter@osrbot.com](mailto:winter@osrbot.com) までお問い合わせください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
