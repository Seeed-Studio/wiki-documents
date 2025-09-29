---
description: Frigate と reTerminal DM の統合
title: Frigate と reTerminal DM の統合
keywords:
  - reTerminal Dm
  - Getting started
  - Frigate
  - Home assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal-DM-Frigate
last_update:
  date: 8/25/2023
  author: Kasun Thushara
---

## はじめに

スマートテクノロジーが日常生活にシームレスに統合される現在の時代において、インテリジェントで安全なホームオートメーションへの需要はこれまで以上に強くなっています。あなたの家があなたのニーズを満たすだけでなく、裏庭での不審な活動を迅速に検出し、警告してくれるシナリオを想像してみてください。ここで、先進的なハードウェアとオープンソースソフトウェアの組み合わせが中心的な役割を果たします。この記事では、Seeed Studio reTerminalDM、Home Assistant OS、そして Coral AI USB TPU を使用した Frigate アドオンの相乗効果について探求します。この三つ組は、ライフスタイルを向上させながら安全性を確保する、集中化された、プライバシーを重視した、AI駆動のホームオートメーションセットアップのユニークな機会を提供します。現代のスマートリビングの最前線にあるこの融合の利点と無限の可能性を掘り下げるために、私たちと一緒に参加してください。

### Frigate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png" alt="pir" width="200" height="auto"/></p>

Frigate は、リアルタイムAI駆動オブジェクト検出に特化した注目すべきオープンソースネットワークビデオレコーダー（NVR）として登場します。Frigate の特徴的な機能は、すべての計算があなたの個人的なハードウェア上で行われることを保証するローカライズされた処理にあります。このアプローチは、カメラフィードがあなたの家の境界を越えることがないため、最高のプライバシーを保証します。Frigate により、データの完全な制御を維持しながら、高度なオブジェクト認識技術を通じてセキュリティと監視を強化する強力なツールを手に入れることができます。

### Home assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png" alt="pir" width="200" height="auto"/></p>

Home Assistant OS は、オープンソースのホームオートメーションプラットフォームである Home Assistant を実行するために特別に設計されたオペレーティングシステムです。Home Assistant を使用すると、家庭内のさまざまなスマートデバイスやサービスを制御し、自動化することができます。
Home Assistant OS は、Home Assistant を実行するための合理化され最適化された環境を提供します。スマートホームデバイスのセットアップと管理、さまざまなプロトコルやプラットフォームとの統合、自動化ルーチンの作成に必要なコンポーネントがプリインストールされています。

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。また、このプロジェクトをサポートするIPカメラも必要です。サポートされているカメラは、Frigate の[公式サイト](https://docs.frigate.video/frigate/hardware)で確認できます。

### ハードウェアの準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminal-dm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note

USB Coralアクセラレータの電力要件を考慮して、高品質のUSB電源ハブへの投資を強く推奨します。このハブはCoralアクセラレータのニーズに対応するのに十分な電力を提供し、安定した最適なパフォーマンスを確保します。

:::

### ソフトウェアの準備

公式ウェブサイトから最新バージョンのRaspberry Pi 64ビットOSをインストールすることを推奨します。新しいRaspbian OSをインストールしたい場合は、この[ガイド](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)に記載されている手順に従ってください。

## Raspberry piにHome Assistant Supervised OSをインストールする

Raspberry Pi CM4ベースのreTerminal DMにHome Assistant Supervisedをインストールすることは、成功したセットアップを確保するためにいくつかの重要なステップを組み合わせた包括的なプロセスです。

:::note
一部のステップでは、Wi-Fi経由で接続している場合、接続が失われる可能性があります。代わりにLAN接続を使用することを推奨します。
:::

### ステップ1：システムを強化する

- **以下のコマンドを使用してシステムアップデートログを実行することから始めます：**

```sh
sudo apt update
```

- **続いて、以下の依存関係をインストールしてください：**

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **破損したインストールを修復**

```sh
sudo apt --fix-broken install
```

- **reTerminalを再起動する**

```sh
sudo reboot
```

### ステップ 2: Docker の統合

Docker のインストールは重要です。Portainer のインストールは避けることが重要です。これは全体的なインストールプロセスに悪影響を与える可能性があるためです。以下のコマンドを実行してください：

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

- **システムにDockerユーザーを追加する**

```sh
sudo usermod -aG docker pi
```

- **Dockerが正常に動作しているかを確認する**

```sh
docker --version
```

### ステップ3: CGroupバージョンへの対応

- **Home Assistant SupervisorはDocker CGroup v1との互換性に依存しています。この互換性を確保するために、以下の変更を行う必要があります:**

```sh
sudo nano /etc/default/grub
```

- **この行を追加して保存してください。**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **このファイルを開く**

```sh
sudo nano /boot/cmdline.txt
```

- **この行をフレーズの最後に追加して保存してください。**

```sh

systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

### ステップ4: OS-Agent (ver. 1.3) をインストール

お使いのCPUアーキテクチャに適したOS-Agentをダウンロードし、インストールを進めてください：**Raspberry Pi 64ビットOSの場合はlinux aarch64です**。

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb
```

- **Home Assistant OS Agentをインストール**

```sh
sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb
```

- **以下を実行してインストールが成功したことを確認してください**

```sh
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
```

### ステップ 5: Home Assistant Supervised を取得する

- **最新の Home Assistant Supervised パッケージをダウンロードする:**

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

### ステップ 6: Home Assistant Supervised インストール

重要: このステップではLAN接続が必要です。Wi-Fiはプロセス中に中断される可能性があります：

```sh
sudo dpkg -i homeassistant-supervised.deb
```

### ステップ 7: インストールエラーの対処

インストールエラーが発生した場合は、以下を実行してエラーを修正してください：

```sh
sudo apt --fix-broken install
```

修正が正常に完了すると、青い画面が表示され、**Raspberry Pi4 64** モデルを選択できるようになります。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" /></center>

### ステップ 8: インストールの完了とWi-Fi設定

数分待つと、Home Assistant が http://[your_raspberry_IP]:8123 でアクセス可能になります。
:::note

再起動後にWi-Fi接続の問題が発生した場合は、以下の手順に従ってください

:::

- 'dhcpcd' を有効にするには、以下のコマンドを実行してください：

```sh
sudo systemctl enable dhcpcd
```

- 次のコマンドでネットワーキングサービスを無効にします：

```sh
sudo systemctl disable networking
```

- 変更を適用するためにRaspberry Piを再起動します：

```sh
sudo reboot
```

:::note

「Network Manager の問題」を解決するには（設定で確認）、Network Manager を開始してから有効化することで状況を修正できます。これを実行するには以下のコマンドを使用してください：

:::

```sh
sudo systemctl enable NetworkManager
```

## MQTT ブローカーのインストール

- 設定 > アドオン に移動し、MQTT ブローカーをクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png" /></center>

- インストールを押し、インストール後に起動時の開始を有効にします

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG" /></center>

- 設定 > デバイスとサービス に移動し、MQTT ブローカーを設定します。

## Frigate のインストール（フルアクセス）

### ステップ 1: リポジトリのクローン

- 設定 > アドオン > アドオンストア > メニュー > リポジトリ に移動します

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png" /></center>

- リポジトリ URL を追加します: https://github.com/blakeblackshear/frigate-hass-addons。その後、アドオンストアで Frigate アドオンを確認できます。

### ステップ 2: フルアクセス Frigate NVR アドオンのインストール

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG" /></center>

### ステップ 3: frigate.yml の作成

- この手順を進めるには、ファイルエディターが必要です。ファイルエディターの左上にある「ファイルシステムを参照」オプションにアクセスします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png" /></center>

- frigate.yml という名前の新しいファイルを作成します

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png" /></center>

- 次に、以下のコードスニペットを使用して、IP カメラから RTSP ビデオフィードを正常に取得できるかどうかを評価できます。提供されたコードをコピーして `frigate.yml` ファイルに貼り付けます。包括的な手順については、[Frigate 公式サイト](https://docs.frigate.video/guides/getting_started)で提供されているガイドラインに従うことを強く推奨します。プレースホルダーを特定のカメラ名、解像度、カメラストリーム IP に置き換えることを忘れないでください。このカスタマイゼーションにより、カメラセットアップとの正確な統合が保証されます。

```sh
mqtt:
  enabled: False
  

cameras:
  RPIcam: # <------ Name the camera
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection
          roles:
            - detect
    detect:
      enabled: False # <---- disable detection until you have a working camera feed
      width: 1280 # <---- update for your camera's resolution
      height: 720 # <---- update for your camera's resolution
      fps: 5
```

### ステップ 4: Frigate を開始する

- Frigate を開始する前に、保護モードが無効になっていることを確認してください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG" /></center>

- Frigate を開始したら、発生する可能性のある問題についてログを注意深く監視することが重要です。問題が発生していない場合は、サイドバーにある Frigate アイコンをクリックしてください。この操作により、Frigate のインターフェースと機能にアクセスできるようになります。

### ステップ 5: ストリームを確認する

すべてが正常に動作している場合、ストリームが取得できます。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png" /></center>

### ステップ 6: オブジェクト検出を有効にする

これを実現するには、Coral USB Accelerator Edge TPU が不可欠です。USB ポートに直接接続することもできますが、より高い電力要件のため、期待通りに機能しない場合があります。そのため、信頼性の高い USB 電源ハブの使用を強く推奨します。これにより、安定した電力供給と Coral USB Accelerator の最適なパフォーマンスが確保され、互換性と効果が向上します。

- frigate.yml ファイルを以下のソースコードで変更してください

```sh
mqtt:
  enabled: False
  
detectors: # <---- add detectors
  coral:
    type: edgetpu
    device: usb

cameras:
  RPIcam: # <------ Name the camera
    ffmpeg:
      input_args: preset-rtsp-udp
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection
          roles:
            - detect
    detect:
      enabled: True # <---- disable detection until you have a working camera feed
      width: 1280 # <---- update for your camera's resolution
      height: 720 # <---- update for your camera's resolution
      fps: 5
```

- Frigate アドオンを再起動します。次に、サイドバーの Frigate アイコンをクリックします。次にストリームをクリックすると、ストリームの全体表示が表示されます。デフォルトでは人を検出でき、バウンディングボックスを描画できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg" /></center>

そして、こちらがデモです

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" /></center>

多くの異なるオブジェクトを検出し、携帯電話に通知を送信することもできます。そのためには frigate.yml を変更する必要があります。そのため、以下のガイドを一度ご覧になることを強くお勧めします。

## リソース

- **[Web Page]** [Frigate 公式ドキュメント](https://docs.frigate.video/)

- **[Web Page]** [Home Assistant フォーラム](https://community.home-assistant.io/)

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
