---
description: Tesserae というオープンソースのセルフホスト型電子ペーパーダッシュボードサーバーを、reTerminal E1001、E1002、E1003、E1004 および reTerminal Sticky で使用します。Spectra 6 ではフルカラー、E1003 では16階調グレースケール、E1003 と Sticky ではタッチ操作に対応します。
title: Tesserae を使う
keywords:
  - 電子ペーパーディスプレイ
  - Tesserae
  - Home Assistant
  - reTerminal
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - reTerminal E1004
  - reTerminal Sticky
image: https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/cover.webp
slug: /reterminal_e10xx_tesserae
sidebar_position: 12
last_update:
  date: 11/13/2026
  author: Kayden D'Mello
createdAt: '2026-11-09'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_tesserae/
updatedAt: '2026-11-13'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tesserae を使う

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/cover.jpg" style={{width:700, height:'auto'}}/></div>

このガイドでは、reTerminal E シリーズデバイスまたは reTerminal Sticky を箱から取り出してから、壁に掛けた **Tesserae** のダッシュボードとして動かせるようにするまでを説明します。ブラウザから一度だけファームウェアを書き込み、デバイスを自分の Tesserae サーバーに接続し、Web エディタでページを設計します。手順はどのデバイスでも同じで、異なる部分はタブから自分のデバイスを選びます。

:::tip フルカラーとグレースケール
Tesserae は各パネルをその持つ能力いっぱいまで駆動します。**E1002** と **E1004** は Spectra™ 6 の 6 色すべてで描画し、**E1003** は 16 階調のグレーで、**Sticky** は 4 階調で描画します。サーバーは各フレームをパネルが期待するバイト列に正確にレンダリングするため、デバイス側はそれを描画するだけで済みます。
:::

## [Tesserae](https://tesserae.ink/) とは？

Tesserae は電子ペーパーディスプレイ向けのオープンソース・セルフホスト型ダッシュボードサーバーです。Home Assistant App、Docker コンテナ、または macOS、Linux、Windows、Raspberry Pi 上の通常インストールとして自宅で動かします。ブラウザ上でウィジェットを組み合わせてダッシュボードを作成し、各デバイスは自分のフレームを取得して描画し、再びスリープに戻ります。あなたが選ばない限り、ネットワークの外に何も出ていきません。

このプロジェクトは reTerminal E シリーズとともに始まり、それと並行して成長してきました。E1001 は Tesserae がサポートした最初期のデバイスの 1 つであり、E シリーズは今でもプロジェクトの Web フラッシャーで最も多くフラッシュされているハードウェアの一つです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/15-editor-html-view.png" style={{width:700, height:'auto'}}/></div>

### Tesserae を使う理由

- **セルフホストでプライベート**：サーバーは自分のハードウェア上で動作し、アカウントもサブスクリプションも不要です。サーバーを自分で運用したくない場合は、ホスト型オプションの [Tesserae Cloud](https://cloud.tesserae.ink) も利用できます。
- **Home Assistant 向けに設計**：Tesserae は Home Assistant App としてインストールできます。パネル上にエンティティを表示し、タッチ対応デバイスではサービスを呼び出すこともできます。MQTT ディスカバリを有効にすると、各パネルは Home Assistant 上にデバイスとして現れます。
- **パネルが持つすべての色を活用**：E1002 と E1004 では Spectra™ 6 カラー、E1003 では 16 階調グレースケールに対応します。写真はサーバー側でディザリングされるため、各パネルで正しく見えるようになります。
- **ウィジェットとテンプレート**：天気、カレンダー、交通機関、タスク、写真、Home Assistant などに加え、コミュニティ製ウィジェット、テーマ、カタログから入手できる完成済みダッシュボードテンプレートがあります。
- **タッチとボタン**：前面ボタンやタッチスクリーンでページの回転、ダッシュボードへのジャンプ、強制リフレッシュ、Webhook の発火ができます。Sticky と E1003 では、ページ上のタップ領域を操作用コントロールとして使えます。
- **バッテリー優先のファームウェア**：デバイスはリフレッシュの合間はディープスリープ状態を維持します。ファームウェア更新は署名され、自分のサーバーから OTA で配信されるため、ブラウザからのフラッシュは一度きりで済みます。
- **オープンソース**：[サーバー](https://github.com/dmellok/tesserae) と [デバイスファームウェア](https://github.com/dmellok/tesserae-device-firmware) は GitHub 上で公開されています。

## 対応ハードウェア

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5インチ モノクロ<br/>800 × 480</td>
      <td align="center">7.3インチ Spectra™ 6（カラー）<br/>800 × 480<br/>Tesserae でフルカラー表示</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10.3インチ モノクロ<br/>16階調グレースケール、1872 × 1404<br/>タッチ対応</td>
      <td align="center">13.3インチ Spectra™ 6（カラー）<br/>1200 × 1600<br/>Tesserae でフルカラー表示</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal Sticky</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-product.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">4階調グレースケール、480 × 800 縦向き<br/>タッチ対応</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-Sticky-p-6861.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
同じファームウェアは XIAO ePaper ファミリでも動作します。EE02 13.3インチ Spectra™ 6 キット、EE03 10.3インチキット、XIAO 7.5インチ ePaper Panel、TRMNL 7.5インチ（OG）DIY Kit などです。サポートされているすべてのボードについては、[Tesserae compatibility list](https://docs.tesserae.ink/compatibility/) を参照してください。
:::

## 必要なもの

- reTerminal E シリーズデバイスまたは reTerminal Sticky
- データ通信に対応した USB-C ケーブル（充電専用ケーブルでも電源は入りますが、コンピュータからは認識されません）
- デスクトップ版 Chrome または Edge（フラッシャーは Web Serial を使用します。Firefox と Safari は対応していません）
- 2.4 GHz Wi-Fi ネットワーク
- Tesserae サーバーを動かすためのコンピュータ、Raspberry Pi、または Home Assistant 環境

## ステップ 1: Tesserae サーバーをインストールする

自分の環境に合った方法を選んでください。どの方法でも、最終的にはブラウザでポート **8765** 上の Tesserae Web UI が開きます。そのアドレス（例：`http://192.168.1.50:8765`）を控えておいてください。ステップ 3 でデバイスがそのアドレスを必要とします。

| ルート | 最適な用途 |
|---|---|
| [Home Assistant App](#home-assistant-app) | すでに Home Assistant OS または Supervised を運用している場合 |
| [Docker](#docker) | すでにコンテナを動かしている Raspberry Pi、NAS、または Linux マシン |
| [Proxmox VE](#proxmox-ve) | Proxmox を実行しているホームラボサーバー |
| [macOS, Linux or Raspberry Pi](#macos-linux-or-raspberry-pi) | コンテナを使わず常時稼働しているコンピュータ |
| [Windows](#windows) | 常時稼働している Windows PC |
| [Tesserae Cloud](#tesserae-cloud) | 自前のサーバーを用意しない場合 |

:::caution 自宅ネットワーク内に留める
Tesserae は 1 つのパスワードで保護されており、信頼できるホームネットワーク向けに設計されています。インターネットへ直接公開しないでください。リモートアクセスには、Tailscale や WireGuard などの VPN を使用してください。
:::

### Home Assistant App

1. Home Assistant で **Settings → Apps → App store** を開きます。
2. 右上のメニューを開き、**Repositories** を選択して、次を追加します：

```text
https://github.com/dmellok/homeassistant-tesserae-addon
```

3. App store で **Tesserae** を探し、**Install** をクリックしてから **Start** をクリックし、サイドバーから開きます。Home Assistant が自動的にサインインします。

デバイスは、ポート 8765 上の Home Assistant 自身のアドレス、たとえば `http://homeassistant.local:8765` で Tesserae にアクセスします。Mosquitto broker App を実行している場合、Tesserae はそれを自動的に使用するため、後でパネルを Home Assistant に表示できます（ステップ 5 を参照）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/26-ha-app-store-tesserae.png" style={{width:400, height:'auto'}}/></div>

### Docker

Docker がインストールされた Raspberry Pi、NAS、または Linux マシン上で実行します：

```bash
mkdir ~/tesserae && cd ~/tesserae
curl -fsSLO https://raw.githubusercontent.com/dmellok/tesserae/main/docker-compose.yml
docker compose up -d
```

認証情報を保存する前に、シークレットキーを設定しておくと、コンテナを再作成した場合でも可読な状態を保てます。次のように生成します：

```bash
python3 -c "import secrets; print(secrets.token_hex(32))"
```

これを `docker-compose.yml` の `environment:` の下に追加します：

```yaml
TESSERAE_SECRET_KEY: "<the key>"
```

再度 `docker compose up -d` を実行し、そのマシンのポート 8765 にブラウザでアクセスしてパスワードを設定します。

### Proxmox VE

Proxmox ホスト上で 1 つのコマンドを実行すると、非特権の Debian 13 コンテナが作成され、最新の Tesserae リリースがインストールされ、サービスとして起動されます：

```bash
COMMUNITY_SCRIPTS_URL=https://raw.githubusercontent.com/dmellok/tesserae/main/scripts/proxmox \
  bash -c "$(curl -fsSL https://raw.githubusercontent.com/dmellok/tesserae/main/scripts/proxmox/ct/tesserae.sh)"
```

1. リリースチャネルを尋ねられたら、Enter を押すか 10 秒待って **stable** を選択します。
2. コンテナダイアログでは、スクリプトのサイズを使うには **Default** を、CPU・RAM・ディスク・ネットワークを自分で設定するには **Advanced** を選びます。スクリプトのデフォルトのリソースサイズ（Chromium もレンダリング用にインストールされるため、16 GB ディスクを含む）をそのまま使うことを推奨します。**Advanced** を使う場合は、アプリケーション、ブラウザ依存関係、および将来のアップデートに十分なディスク容量を確保してください。
3. 終了すると、スクリプトはコンテナのアドレスを表示します。`http://<container-ip>:8765` を開き、パスワードを選択します。

後でアップデートするには、コンテナ内で `update` を実行します。

### macOS、Linux または Raspberry Pi

ターミナルで：

```bash
curl -fsSL https://raw.githubusercontent.com/dmellok/tesserae/main/install.sh | bash
```

マシンのアドレスの 8765 番ポートにブラウザでアクセスし、パスワードを選択します。Raspberry Pi では、64 ビット OS と少なくとも 2 GB の RAM を推奨します。

### Windows

PowerShell で：

```powershell
iwr https://raw.githubusercontent.com/dmellok/tesserae/main/install.ps1 -UseBasicParsing | iex
```

PC のアドレスの 8765 番ポートにブラウザでアクセスし、パスワードを選択します。後でデバイスがサーバーに到達できない場合は、Windows ファイアウォールのプライベートネットワークでポート 8765 を許可してください。

### Tesserae Cloud

[Tesserae Cloud](https://cloud.tesserae.ink) はサーバーを代わりにホストし、同じデバイスで動作します。メールアドレスでサインインし、**Settings → Panels → Add a panel** でクレームコードを作成します。ステップ 3 では **Cloud** を選び、サーバーアドレスの代わりにクレームコードを入力します。

### 初回起動

Tesserae を初めて開くとき（サインインを自動で行う Home Assistant App を除く）、パスワードを選択します。続いて短いセットアップウィザードが表示されます：

1. **Help out**：匿名のインストール数を Tesserae プロジェクトに送信するか、インストールをオフラインのままにするかを選びます。
2. **Timezone**：検出されたタイムゾーンを確認し、スケジュールがローカル時間で動作するようにします。
3. **Transport**：**REST API** を選択したままにします。これは reTerminal や Sticky のようなバッテリ駆動デバイスに最適な選択です。
4. **Device**：このページはパネルが自分自身をアナウンスするのを待ちます。**Skip for now** をクリックしてステップ 4 でデバイスを承認するか、フラッシュしている間このページを開いたままにします。デバイスが **Discovered** の下に現れたら、名前を付けて **Register** をクリックします。ペアリングコードは不要です。
5. **Dashboard**：**I'll set this up later** を選ぶか、ステップ 4 の後に戻って、デバイスに紐づいたスターターダッシュボードを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/01-first-run-set-password.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/02-wizard-welcome.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/05-wizard-transport.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/06b-wizard-device-discovered.png" style={{width:700, height:'auto'}}/></div>

## ステップ 2: Tesserae ファームウェアを書き込む

<Tabs groupId="tesserae-hardware">
<TabItem value="e-series" label="reTerminal E シリーズ" default>

:::caution macOS: 先に CH340 ドライバをインストールしてください
reTerminal E シリーズは WCH CH340 USB-シリアルチップ経由で接続されますが、macOS にはその組み込みドライバがありません。[WCH の CH34x ドライバ](https://github.com/WCHSoftGroup/ch34xser_macos) をインストールし、**システム設定 → 一般 → ログイン項目と拡張機能 → ドライバ拡張機能** で有効にしてください。Linux と現在の Windows バージョンでは、通常は互換ドライバが自動的にインストールされます。Windows がシリアルポートを検出しない場合は、[WCH CH341SER ドライバ](https://www.wch-ic.com/downloads/CH341SER_EXE.html) をインストールしてください。Windows 10 以前では必要になる場合があります。Linux でポートが現れない場合は、`sudo usermod -aG dialout $USER` を実行し、ログアウトして再度ログインしてください。
:::

1. デバイスを USB-C データケーブルでコンピュータに接続します。
2. Chrome または Edge で **[tesserae.ink/flash](https://tesserae.ink/flash)** を開きます。
3. **Choose your panel** で reTerminal のモデルを選択し、**Firmware build** で最新バージョンを選びます。
4. **Next: plug it in** をクリックし、続いて **Connect & flash** をクリックして、デバイスのシリアルポートを選択します。
5. 60〜90 秒待ちます。フラッシャーが成功を確認するまでケーブルは接続したままにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/20-flasher-reterminal-selected.png" style={{width:700, height:'auto'}}/></div>

フラッシュが完了すると、フラッシャーの **Connect it** ステップから、同じケーブル経由で Wi-Fi 情報とサーバーアドレスをデバイスに送信できます。**My own Tesserae server** を選び、ステップ 1 のアドレスを入力してステップ 4 に進みます。

</TabItem>
<TabItem value="sticky" label="reTerminal Sticky">

Sticky のユーザーは、Sticky Playground から直接 Tesserae をフラッシュできます。

1. [Sticky Playground の Tesserae ページ](https://www.seeedstudio.com/sticky/playground/tesserae/) を開くか、Playground 内で **Tesserae** カードを見つけて **Flash Now** をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/21-playground-tesserae-card.png" style={{width:300, height:'auto'}}/></div>

2. Sticky を USB-C データケーブルでコンピュータに接続し、フラッシュが完了するまで接続したままにします。
3. **Version and setup** で、ページに表示されている Tesserae ファームウェアバージョンを選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/22-playground-tesserae-page.png" style={{width:700, height:'auto'}}/></div>

4. **Flash to device** でフラッシュモードを選びます：
   - **Standard flash** はファームウェアを書き込み、Sticky に保存されている Wi-Fi 設定を保持します。
   - **Erase flash + flash** は最初にフラッシュ全体を消去します。別のファームウェアから移行する場合に使用します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/23-playground-flash-mode.png" style={{width:500, height:'auto'}}/></div>

5. **Connect & flash** をクリックします。Chrome または Edge に尋ねられたら、**USB Single Serial** として表示される Sticky のシリアルポートを選択し、**Connect** をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/24-playground-serial-port.png" style={{width:300, height:'auto'}}/></div>

6. 進行バーと **Device Log** にフラッシュ完了と表示されるまで待ちます。Playground がデバイスを自動的にリセットします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/25-playground-device-log.png" style={{width:350, height:'auto'}}/></div>

Playground は [tesserae.ink/flash](https://tesserae.ink/flash) と同じファームウェアパッケージを使用しているため、どちらを使っても構いません。

</TabItem>
</Tabs>

:::note
Tesserae をフラッシュすると、現在デバイス上にあるファームウェアは置き換えられます。別のファームウェアを書き込めば、いつでも元に戻すことができます。
:::

## ステップ 3: Wi-Fi に接続する

フラッシュ後、デバイスには QR コード、セットアップネットワーク名、そのパスワードが表示された **Setup mode** 画面が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-setup-mode.jpg" style={{width:300, height:'auto'}}/></div>

1. スマートフォンまたはコンピュータで、Wi-Fi ネットワーク **Tesserae-Setup**（パスワード `tesserae`）に接続します。QR コードをスキャンするか、一覧から選択します。
2. セットアップページは自動的に開きます。開かない場合は、`http://192.168.4.1` にアクセスします。
3. 2.4 GHz Wi-Fi の名前とパスワードを入力するか、デバイスがスキャンした一覧からネットワークを選択します。
4. デバイスが Tesserae に接続する方法を選びます：
   - **Local**（デフォルト）：Tesserae サーバーのアドレスを入力します（例：`http://192.168.1.50:8765`）。**Pairing code** は空欄のままにし、ステップ 4 でデバイスを承認します。
   - **Cloud**：Tesserae Cloud の **Settings → Panels → Add a panel** にある 8 桁のクレームコードを入力します。
   - **Relay**：サーバーとは別のネットワーク上にあるデバイス向けです。サーバーの **Settings → Cloud relay → Add a remote panel** にあるペアリングコードを入力します。
5. **Save & restart** をタップします。デバイスは Wi-Fi に参加し、サーバーに自分自身をアナウンスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/07-device-setup-portal-phone.png" style={{width:300, height:'auto'}}/></div>

:::tip
セットアップネットワークは、最後の訪問者が離れてから 15 分間有効です。タイムアウトしている場合は、デバイスを再起動するか、フロントボタンがあるボードではそのボタンを押して、セットアップ画面を再表示してください。
:::

## ステップ 4: Tesserae でデバイスを登録する

新しいデバイスはあなたの承認を待つため、他人のデバイスがあなたのサーバーに勝手に接続することはできません。承認するまで、デバイスには **Almost done** と表示され、Tesserae の **Settings → Devices** で承認するよう求められます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-almost-done.jpg" style={{width:300, height:'auto'}}/></div>

1. Tesserae の Web UI では、サイドバーに **New device** バッジが表示されます。**Settings → Devices** を開くと、「1 device has been heard but is not registered」というバナーが表示されます。
2. バナーの **Register** をクリックします。Tesserae はデバイスのモデル、パネルサイズ、ファームウェアバージョンを表示し、モデルはすでに選択されています。
3. 「Kitchen」や「Hallway」などの表示名を付け、**Register** をクリックします。
4. デバイスは次回のチェックイン時にアクセストークンを取得し、**Devices** リストに移動します。そのカードには、表示内容、バッテリ、ファームウェアバージョン、次回のスケジュール更新が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/08-devices-discovered.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/09-register-name-device.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/10-device-registered.png" style={{width:700, height:'auto'}}/></div>

## ステップ 5: ダッシュボードを作成してプッシュする

1. **Dashboards → New dashboard** を開くか、**Settings → Widgets → Browse catalog** から既製テンプレートをインストールします。
2. レイアウトをウィジェットで埋めます。プレビューを **Panel view** に切り替えると、デバイスが描画するフレームを、その色またはグレースケールで正確に確認できます。
3. **Target devices** でデバイスにチェックを入れ、**Push** をクリックします。デバイスは次回のウェイク時に新しいフレームを描画します。

:::tip 最速で作る最初のダッシュボード
セットアップウィザードの **Dashboard** ステップに戻り、**Create a starter dashboard** を選ぶと、デバイスのサイズに合わせてそのデバイスに紐づいた時計が作成されます。**Push to panel** をクリックしてすべてが接続されていることを確認し、その後エディタで開いて自分用にカスタマイズします。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/16-editor-panel-view.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/13-device-card-after-push.png" style={{width:700, height:'auto'}}/></div>

各パネル向けのヒント:

- **E1001 と Sticky**: 太字でコントラストの高い書体が最も読みやすくなります。
- **E1002 と E1004**: 各要素に独自のカラーブロックを与えます。フル Spectra™ 6 リフレッシュには、E1002 で約 30 秒、E1004 で約 40 秒かかります。これはパネルとしては正常な動作です。
- **E1003**: 写真やグラデーションは 16 階調のグレーでレンダリングされ、縦長のキャンバスはリストやアジェンダに適しています。

一日の中でデバイスに表示する内容を変更するには、**Lineups** を開き、**Set up a display** を選択します。ページの選択、更新頻度、夜間にデバイスを静音にする時間帯を設定できます。バッテリー駆動のデバイスでは、**Smart sync** が各フレームをデバイスのウェイク直前にレンダリングするため、バッテリーを無駄にすることなく、常に新しいコンテンツを描画できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-dashboard-desk.jpg" style={{width:700, height:'auto'}}/></div>

### データを接続する

- **Home Assistant**: **Settings → Widgets → Home Assistant Core** に、長期有効なアクセストークンと Home Assistant の URL を追加します。各パネルを Home Assistant 上のデバイスとして表示させるには、**Settings → Server** で **Home Assistant discovery** をオンにします。App は、あなたが Mosquitto ブローカーを運用している場合、すでに Home Assistant の Mosquitto ブローカーを使用します。
- **カレンダー**: **Settings → Widgets → Calendar Feeds** に iCal URL を追加します。
- **その他のウィジェット**: コミュニティ製ウィジェット、テーマ、テンプレートは **Settings → Widgets → Browse catalog** にあります。

## ボタンとタッチ

<Tabs groupId="tesserae-hardware">
<TabItem value="e-series" label="reTerminal E シリーズ" default>

前面の 3 つのボタンは、何もしなくてもすぐに使えます:

| ボタン | デフォルトの動作 |
|---|---|
| Left | 前のダッシュボード |
| Right | 次のダッシュボード |
| Refresh | 現在のダッシュボードを再レンダリングして再描画 |

各デバイスのマッピングは、そのデバイスカードの **Controls → Button map** で変更できます。ボタンは特定のダッシュボードへ直接ジャンプさせたり、webhook を発火させることもできます。**Refresh** を約 **3 秒** 長押しして離すと、Tesserae コンパニオンアプリ経由で Bluetooth セットアップに切り替わります。**20 秒** 間押し続けるとファクトリーリセットが行われ、保存された Wi-Fi とサーバー設定が消去され、デバイスはセットアップ画面に戻ります。

**E1003** はタッチにも対応しています。Sticky タブの Touch セクションを参照してください。両方のデバイスで同じように動作します。

</TabItem>
<TabItem value="sticky" label="reTerminal Sticky">

- **電源ボタン** を 1 回押すと Sticky が起動し、すぐに現在のページを取得します。
- 電源ボタンを約 **3 秒** 間押し続けてから離すと、Tesserae コンパニオンアプリ経由で Bluetooth セットアップに切り替わります。
- 電源ボタンを **20 秒** 間押し続けるとファクトリーリセットが行われます。これにより保存された Wi-Fi とサーバー設定が消去され、Sticky はセットアップ画面に戻ります。

### タッチ

タッチはバッテリー節約のためデフォルトでオフになっています。オンにするには、デバイスカードを開き **General** に移動して **Touch input** をオンにします。ページ上のタッチ領域はボタンとして機能します。Home Assistant のライトをトグルしたり、ページを切り替えたり、アクションをトリガーでき、パネルは 1 秒未満の部分リフレッシュで各タップを確認します。

タッチはディープスリープ中もタッチコントローラに電源を供給します。バッテリー寿命を延ばすには、**Touch wake** を **Double tap or swipe** に設定します。この設定では約 1 mA を消費します。この設定時にはシングルタップではパネルは起動せず、ダブルタップまたはスワイプで起動します。タッチは USB 電源使用時に最も良好に動作します。

パネルが再描画される前に、各タップやボタン押下をブザーで確認したい場合は、**Beep on interaction** をオンにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-touch-lights.png" style={{width:300, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ファームウェアのアップデート

ファームウェアのアップデートは OTA（無線）で配信されます。Tesserae の Web UI の **Settings → Firmware** には、各デバイスのインストール済みバージョンと利用可能なバージョンが表示されます。**Queue update** をクリックするか **Auto** をオンにすると、デバイスは次回のウェイク時に署名付きアップデートをダウンロード、検証、インストールします。再インストールやリカバリが必要な場合のみ、ブラウザから再度フラッシュする必要があります。

Tesserae は、オンライン機能がオンのとき（**Settings → System → Online features**）に新しいファームウェアをチェックします。オフラインインストールの場合は、[firmware release](https://github.com/dmellok/tesserae-device-firmware/releases) から `descriptor-<kind>.json` ファイルをダウンロードし、**Manual import** からインポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/19b-firmware-update-available-crop.png" style={{width:700, height:'auto'}}/></div>

## FAQ

### Q1: フラッシャーがデバイスを見つけられません

- データ通信に対応した USB-C ケーブルと、データ通信に対応した USB ポートを使用してください。一部のデスクトップタワーのフロントパネルポートは対応していません。
- Chrome または Edge を使用してください。Firefox と Safari は Web Serial をサポートしていません。
- macOS で reTerminal E シリーズを使用する場合は、CH340 ドライバをインストールして有効にしてください（ステップ 2 を参照）。
- シリアルポートを使用している可能性のある他のプログラムをすべて閉じてください。

### Q2: デバイスが Discovered に表示されません

- デバイスがセットアップモードを終了しているか確認してください。まだセットアップ画面が表示されている場合は、Wi-Fi 情報をもう一度入力してください。
- Wi-Fi ネットワークが 2.4 GHz であることを確認してください。
- 同じネットワーク上の別のデバイスからサーバーアドレスにアクセスできるか確認してください。例えばブラウザで `http://<your-server>:8765` を開いてみてください。

### Q3: デバイスに「Can't reach the server」または「Wi-Fi unavailable」と表示されます

デバイスはパネル上に問題内容を表示し、自動的に再試行します。Wi-Fi が切断された場合、約 12 分間は 1 分ごとに再試行し、その後 1 回だけ 15 分間セットアップポータルを開きます。その後はバックグラウンドで保存済みネットワークへの再接続を続け、ネットワークが復旧すると再参加します。セットアップポータルを再度開くには、デバイスを再起動するか前面ボタンを押してください。

### Q4: フレームはダウンロードされるのにパネルが描画されません

パネルをリフレッシュするにはバッテリー残量が不足している可能性があります。USB 電源を接続し、1 時間ほど充電してから再度お試しください。

## スペシャルサンクス

reTerminal E シリーズおよび Sticky の立ち上げ全般にわたりサポートしてくださった **Seeed Studio** チーム、特に **Mason Cao** 氏と **Lily Li** 氏に心より感謝いたします。

また、このプロジェクトの実現に貢献してくださった Tesserae コントリビューターの皆様、特に **[skynet01](https://github.com/skynet01)**、**[charmmmz](https://github.com/charmmmz)**、**[theiereman](https://github.com/theiereman)**、**[vaibhav8a](https://github.com/vaibhav8a)**、**[partridgeworks](https://github.com/partridgeworks)**、**[bablokb](https://github.com/bablokb)**、**[varanu5](https://github.com/varanu5)**、**[Frankynov](https://github.com/Frankynov)** の皆様、そしてこのインテグレーションの背景にあるウィジェット、ファームウェアテスト、ハードウェアレポートで支えてくださった幅広いコミュニティの皆様にも感謝いたします。

## リソース

- **[Website]** [Tesserae](https://tesserae.ink): プロジェクトのホーム、互換性リスト、ブラウザフラッシャー
- **[Docs]** [Tesserae documentation](https://docs.tesserae.ink/): サーバーインストール、デバイス、タッチ、ボタン、Lineups、Home Assistant
- **[Docs]** [Seeed ePaper quickstart](https://docs.tesserae.ink/quickstart/seeed-unified/): 各デバイス向けの注意点付きで、ここで説明したのと同じ手順
- **[GitHub]** [Tesserae server](https://github.com/dmellok/tesserae)
- **[GitHub]** [Tesserae device firmware](https://github.com/dmellok/tesserae-device-firmware): ソースコード、リリース、issue トラッカー
- **[GitHub]** [Tesserae Home Assistant App](https://github.com/dmellok/homeassistant-tesserae-addon)
- **[Community]** [GitHub Discussions](https://github.com/dmellok/tesserae/discussions)
- **[Wiki]** [Getting Started with reTerminal E1003](/ja/getting_started_with_reterminal_e1003)
- **[Wiki]** [Getting Started with reTerminal E1004](/ja/getting_started_with_reterminal_e1004)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
