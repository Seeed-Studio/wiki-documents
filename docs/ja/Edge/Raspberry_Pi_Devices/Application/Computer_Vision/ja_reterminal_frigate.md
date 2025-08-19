---
description: Frigate を reTerminal と統合する
title: Frigate を reTerminal と統合する
keywords:
  - reTerminal
  - はじめに
  - Frigate
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal_frigate
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

スマート技術が私たちの日常生活にシームレスに統合される現代において、インテリジェントで安全なホームオートメーションの需要はこれまで以上に高まっています。自宅があなたのニーズを満たすだけでなく、裏庭での不審な活動を即座に検知し、警告してくれるシナリオを想像してみてください。ここで、先進的なハードウェアとオープンソースソフトウェアの組み合わせが重要な役割を果たします。本記事では、Seeed Studio reTerminal、Home Assistant OS、および Coral AI USB TPU を使用した Frigate アドオンのシナジーについて探ります。この3つの組み合わせにより、集中管理型でプライバシーを重視し、AI駆動のホームオートメーションセットアップが実現し、ライフスタイルを向上させながら安全性を確保します。この現代的なスマートライフの最前線での融合の利点と無限の可能性を一緒に探求しましょう。

### Frigate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png" alt="pir" width="200" height="auto"/></p>

Frigate は、リアルタイムの AI 駆動型オブジェクト検出に特化した、注目すべきオープンソースのネットワークビデオレコーダー (NVR) として登場しました。Frigate の特徴的な点は、ローカルでの処理を行う点にあります。すべての計算が個人のハードウェア上で行われるため、カメラフィードが自宅の外に出ることはありません。このアプローチにより、最大限のプライバシーが保証されます。Frigate を使用することで、データを完全に管理しながら、先進的なオブジェクト認識技術を通じてセキュリティと監視を強化する強力なツールを手に入れることができます。

### Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png" alt="pir" width="200" height="auto"/></p>

Home Assistant OS は、オープンソースのホームオートメーションプラットフォームである Home Assistant を実行するために特別に設計されたオペレーティングシステムです。Home Assistant を使用すると、自宅のさまざまなスマートデバイスやサービスを制御および自動化することができます。
Home Assistant OS は、Home Assistant を実行するための効率的で最適化された環境を提供します。スマートホームデバイスのセットアップと管理、さまざまなプロトコルやプラットフォームとの統合、自動化ルーチンの作成に必要なコンポーネントが事前にインストールされています。

## はじめに
このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。また、このプロジェクトに対応する IP カメラが必要です。対応するカメラについては、Frigate の[公式サイト](https://docs.frigate.video/frigate/hardware)をご覧ください。

### ハードウェアの準備
<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note

USB Coral アクセラレータの電力要件を考慮すると、高品質な USB 電源ハブへの投資を強くお勧めします。このハブは Coral アクセラレータのニーズを満たす十分な電力を提供し、安定した最適なパフォーマンスを確保します。

:::

### ソフトウェアの準備

公式ウェブサイトから最新バージョンの Raspberry Pi 64 ビット OS をインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この[ガイド](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)に記載されている手順に従ってください。

## Raspberry Pi に Home Assistant Supervised OS をインストールする

Raspberry Pi 4 に Home Assistant Supervised をインストールするプロセスは、成功するセットアップを確実にするためにいくつかの重要なステップを組み合わせた包括的な手順です。

:::note
一部のステップでは、Wi-Fi 経由で接続している場合に接続が切れる可能性があります。LAN 接続を使用することをお勧めします。
:::

### ステップ 1: システムの強化

- **以下のコマンドを使用してシステムの更新ログを実行します:**

```sh
sudo apt update
```

- **次に、以下の依存関係をインストールします:**

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

- **壊れたインストールを修正します**

```sh
sudo apt --fix-broken install
```

- **reTerminal を再起動します**

```sh
sudo reboot
```

### ステップ 2: Docker の統合

Docker のインストールは重要です。Portainer をインストールしないようにしてください。これは全体のインストールプロセスに悪影響を及ぼす可能性があります。以下のコマンドを実行してください:

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

- **Docker ユーザーをシステムに追加します**

```sh
sudo usermod -aG docker pi
```

- **Docker が正常に動作しているか確認します**

```sh
docker --version
```

### ステップ 3: CGroup バージョンの対応

- **Home Assistant Supervisor の互換性は特定の Docker CGroup v1 に依存しています。この互換性を確保するために、以下の変更を行います:**

```sh
sudo nano /etc/default/grub
```

- **この行を追加して保存します。**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **次に、このファイルを開きます**

```sh
sudo nano /boot/cmdline.txt
```

- **フレーズの末尾に以下の行を追加して保存します。**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

### ステップ 4: OS-Agent のインストール (バージョン 1.3)

CPU アーキテクチャに基づいて適切な OS-Agent をダウンロードし、インストールを進めます。**Raspberry Pi 64 ビット OS の場合、linux aarch64 を選択します。**

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb
```

- **Home Assistant OS Agent をインストールします**

```sh
sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb
```

- **インストールが成功したことを確認するには、以下を実行します**

```sh
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
```

### ステップ 5: Home Assistant Supervised の取得

- **最新の Home Assistant Supervised パッケージをダウンロードします:**

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

### ステップ 6: Home Assistant Supervised のインストール

重要: このステップでは、Wi-Fi がプロセス中に中断される可能性があるため、LAN 接続が必要です。

```sh
sudo dpkg -i homeassistant-supervised.deb
```

### ステップ 7: インストールエラーへの対応

インストールエラーが発生した場合は、以下を実行して修正します:

```sh
sudo apt --fix-broken install
```

修正が成功すると、青い画面が表示され、**Raspberry Pi4 64** モデルを選択できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" /></center>

### ステップ 8: インストールの最終化と Wi-Fi 設定

数分待つと、Home Assistant に http://[your_raspberry_IP]:8123 でアクセスできるようになります。

:::note
再起動後に Wi-Fi 接続の問題が発生した場合は、以下の手順に従ってください。
:::

- **'dhcpcd' を有効にするには、以下のコマンドを実行します:**

```sh
sudo systemctl enable dhcpcd
```

- **ネットワークサービスを無効にするには、以下のコマンドを実行します:**

```sh
sudo systemctl disable networking
```

- **変更を適用するには、Raspberry Pi を再起動します:**

```sh
sudo reboot
```

:::note
"Network Manager の問題" を解決するには (設定で確認)、Network Manager を開始して有効にすることで状況を修正できます。以下のコマンドを使用してください:
:::

```sh
sudo systemctl enable NetworkManager
```

## MQTTブローカーのインストール

- 設定 > アドオン > MQTTブローカーをクリックします。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png" /></center>

- インストールを押し、インストール後に起動時に自動開始を有効にします。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG" /></center>

- 設定 > デバイスとサービス > MQTTブローカーを構成します。

## Frigate（フルアクセス）のインストール

### ステップ 1: リポジトリをクローン

- 設定 > アドオン > アドオンストア > メニュー > リポジトリに移動します。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png" /></center>

- リポジトリURLを追加します: https://github.com/blakeblackshear/frigate-hass-addons。これで、アドオンストアにFrigateアドオンが表示されます。

### ステップ 2: フルアクセスFrigate NVRアドオンをインストール

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG" /></center>

### ステップ 3: frigate.ymlを作成

- このステップを進めるには、ファイルエディタが必要です。ファイルエディタの左上にある「Browse File System」オプションにアクセスします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png" /></center>

- 新しいファイルを作成し、名前をfrigate.ymlとします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png" /></center>

- 次に、以下のコードスニペットを使用して、IPカメラからRTSPビデオフィードを正常に取得できるかどうかを確認します。提供されたコードをコピーして`frigate.yml`ファイルに貼り付けます。詳細な手順については、[Frigate公式サイト](https://docs.frigate.video/guides/getting_started)のガイドラインに従うことを強くお勧めします。プレースホルダーを特定のカメラ名、解像度、カメラストリームIPに置き換えることを忘れないでください。このカスタマイズにより、カメラ設定との正確な統合が可能になります。

```sh
mqtt:
  enabled: False
  

cameras:
  RPIcam: # <------ カメラの名前
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- 検出に使用するストリーム
          roles:
            - detect
    detect:
      enabled: False # <---- カメラフィードが動作するまで検出を無効化
      width: 1280 # <---- カメラの解像度に合わせて更新
      height: 720 # <---- カメラの解像度に合わせて更新
      fps: 5
```

### ステップ 4: Frigateを開始

- Frigateを起動する前に、保護モードが無効になっていることを確認してください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG" /></center>

- Frigateを起動したら、ログを注意深く監視し、問題が発生していないか確認してください。問題がなければ、サイドバーにあるFrigateアイコンをクリックします。この操作でFrigateのインターフェースと機能にアクセスできます。

### ステップ 5: ストリームを確認

すべてが正しく動作していれば、ストリームが表示されます。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png" /></center>

### ステップ 6: オブジェクト検出を有効化

これを実現するには、Coral USB Accelerator Edge TPUが必要です。USBポートに直接接続することも可能ですが、消費電力が高いため、期待通りに動作しない場合があります。そのため、信頼性の高いUSB電源ハブを使用することを強くお勧めします。これにより、安定した電力供給と最適なパフォーマンスが確保され、Coral USB Acceleratorの互換性と効果が向上します。

- 以下のソースコードでfrigate.ymlファイルを変更します。

```sh
mqtt:
  enabled: False
  
detectors: # <---- 検出器を追加
  coral:
    type: edgetpu
    device: usb

cameras:
  RPIcam: # <------ カメラの名前
    ffmpeg:
      input_args: preset-rtsp-udp
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- 検出に使用するストリーム
          roles:
            - detect
    detect:
      enabled: True # <---- カメラフィードが動作するまで検出を無効化
      width: 1280 # <---- カメラの解像度に合わせて更新
      height: 720 # <---- カメラの解像度に合わせて更新
      fps: 5
```

- Frigateアドオンを再起動します。その後、サイドバーのFrigateアイコンをクリックします。次にストリームをクリックすると、ストリーム全体が表示されます。デフォルトでは、人を検出し、バウンディングボックスを描画することができます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg" /></center>

そして、こちらがデモです。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" /></center>

さまざまなオブジェクトを検出し、モバイル電話に通知を送信することも可能です。そのためには、frigate.ymlを変更する必要があります。以下のガイドを一読することを強くお勧めします。

## リソース

- **[ウェブページ]** [Frigate公式ドキュメント](https://docs.frigate.video/)

- **[ウェブページ]** [Home Assistantフォーラム](https://community.home-assistant.io/)

# 技術サポート

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>