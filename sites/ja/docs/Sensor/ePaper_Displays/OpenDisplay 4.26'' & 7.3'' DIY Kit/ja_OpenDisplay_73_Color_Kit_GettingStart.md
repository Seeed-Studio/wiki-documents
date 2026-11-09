---
description: OpenDisplay 7.3" Color Kit のはじめかた — Seeed Studio と OpenDisplay が共同開発した、すぐに使える Spectra 6 カラー電子ペーパーディスプレイ
title: OpenDisplay 7.3" Color Kit のはじめかた
sidebar_position: 2
image: https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.webp
slug: /opendisplay_73_color_kit
sku: 100091514
last_update:
  date: 10/22/2026
  author: Nemo
createdAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/opendisplay_73_color_kit/
updatedAt: '2026-10-22'
---

# OpenDisplay 7.3" Color Kit のはじめかた

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.webp" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OpenDisplay-7-3-Color-Kit-p-7031.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

OpenDisplay 7.3" Color Kit は、Seeed Studio と OpenDisplay が共同開発した、すぐに使える電子ペーパーディスプレイです。7.3 インチ 800×480 Spectra 6 カラーパネル、Seeed [XIAO ePaper Display Board EN04](https://wiki.seeedstudio.com/ja/epaper_EN04/)（XIAO nRF52840 Plus）、2000 mAh バッテリー、3D プリントケースが **すべて組み立て済み** で出荷され、ファームウェアもあらかじめインストールされています。

ブラウザまたは Home Assistant から **Bluetooth Low Energy** 経由で使用します。Wi-Fi は不要です。無線は低消費電力のリッスンモードのままなので、ディスプレイの電源が入っていて通信範囲内にあるときはいつでも新しい画像を送信できます（ディープスリープからのウェイクウィンドウはありません）。おおよそ 2 時間に 1 回の更新で、充電間隔は約 **1 年** を見込めます。

### 必要なもの

- 電源が入っていて、Bluetooth の通信範囲内にあるキット本体
- Bluetooth 搭載のスマートフォンまたはコンピュータ
- Chrome または Edge（デスクトップ / Android）、もしくは iPhone / iPad では Bluefy

## 概要

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>MCU</th>
      <td>Seeed <a href="https://wiki.seeedstudio.com/ja/epaper_EN04/">XIAO ePaper Display Board EN04</a>（XIAO nRF52840 Plus）</td>
    </tr>
    <tr>
      <th>ディスプレイ</th>
      <td>7.3 インチ Spectra 6 カラー電子ペーパー</td>
    </tr>
    <tr>
      <th>色</th>
      <td>黒、白、黄、赤、青、緑（ディザリング；フル RGB ではありません）</td>
    </tr>
    <tr>
      <th>解像度</th>
      <td>800 × 480</td>
    </tr>
    <tr>
      <th>バッテリー</th>
      <td>2000 mAh 充電式リチウムイオン</td>
    </tr>
    <tr>
      <th>接続方式</th>
      <td>Bluetooth Low Energy のみ（Wi-Fi なし）</td>
    </tr>
    <tr>
      <th>筐体</th>
      <td>3D プリントケース付属</td>
    </tr>
  </tbody>
</table>

## 電源を入れる

1. キットを開封し、電源を入れます。
2. 起動時のリフレッシュが終わるまで待ちます — 通常、Spectra 6 では **15〜20 秒** 程度です。ちらつきは正常です。
3. 終了すると、起動画面にデバイス名（**OD** で始まります）、**KEY1:** / **KEY2:**、QR コードが表示されます。

暗号化は出荷時は **オフ** なので、キー行には **not set** と表示されます。箱から出して通常使用するだけであれば、キーは不要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.png" style={{width:800, height:'auto'}}/></div>

## 最初の画像を送る

ディスプレイ上の QR コードをスキャンします。すると、このデバイス用のショートカットが用意された [opendisplay.org](https://opendisplay.org/l/) のパーソナライズされたページが開きます：

<table>
  <thead>
    <tr>
      <th>ショートカット</th>
      <th>機能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Send an image</th>
      <td>ブラウザからテスト画像を送信するための BLE Tester を開きます</td>
    </tr>
    <tr>
      <th>Add to Home Assistant</th>
      <td>Home Assistant へのデバイス追加を開始します</td>
    </tr>
    <tr>
      <th>Advanced → Toolbox</th>
      <td>設定変更やファームウェアの書き換えを行います（開発者 / 復旧用）</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Landing_page.png" style={{width:600, height:'auto'}}/></div>

### 対応ブラウザ

<table>
  <thead>
    <tr>
      <th>ブラウザ</th>
      <th>サポート状況</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome または Edge（デスクトップ、Android）</th>
      <td>サポートされています</td>
    </tr>
    <tr>
      <th>iPhone / iPad</th>
      <td>Bluefy を使用（App Store id1492822055）</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>サポートされていません</td>
    </tr>
  </tbody>
</table>

ランディングページから **Send an image** を選択します（または [opendisplay.org](https://opendisplay.org/firmware/display/index.html) を開きます）。**Connect** をクリックし、ブラウザのリストからデバイスを選択します（名前は **OD** で始まります — 例：**ODCA6020**）。その後、写真を選ぶかお絵描きし、**Send to device** をタップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/BLE_Tester.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Browser_Bluetooth_pairing.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/BLE_Tester_connected.png" style={{width:600, height:'auto'}}/></div>

**完了の目安：電子ペーパーディスプレイに画像が表示されます。**

## Home Assistant（任意）

このキットは **BLE のみ** を使用します。Home Assistant には動作する Bluetooth 経路が必要です：

- **Home Assistant ホスト上の Bluetooth** — 内蔵アダプタまたは USB ドングル
- **ESPHome Bluetooth プロキシ** — ディスプレイが HA ホストから離れている場合（アクティブ / 接続可能な接続をサポートしている必要があります）

:::note
Shelly BLE プロキシは **サポートされていません** — このディスプレイに必要なアクティブ接続を確立できません。ローカルアダプタか ESPHome プロキシを使用してください。
:::

ディスプレイの電源を入れ、Bluetooth の通信範囲内に置きます。Home Assistant が自動的に検出するはずです — **Settings → Devices & Services → Discovered** に **OD** で始まる名前が表示されるので、それを探して **Add**、続いて **Submit** をタップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_1.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_2.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_3.png" style={{width:600, height:'auto'}}/></div>

デバイスページには、バッテリー、ボタン、ファームウェアの状態、ディスプレイ内容が表示されます。詳細はこちら： [Home Assistant integration](https://github.com/OpenDisplay/Home_Assistant_Integration)

## さらに活用する

### 暗号化を有効にする

暗号化は出荷時は **オフ** です。Toolbox → More options で Encryption を **Locked** に設定し、**Configure over Bluetooth** を実行します。再起動後、キーが **KEY1:** / **KEY2:** と QR ランディングページに表示されます。キーを見失った場合は、ディスプレイの電源を入れ直すと再びキーが表示されます。

### 再書き込みや復旧

1. Toolbox を開きます — 7.3" Color Kit プリセット：[Toolbox (7.3" Color Kit preset)](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-73-color-kit)
2. **Install firmware (USB)** — デスクトップ / ノート PC 上の Chrome または Edge を使用
3. **Configure over Bluetooth** — 書き込み後に設定を書き戻します

### py-opendisplay

独自の Python プロジェクト向けには、pip install py-opendisplay でインストールします — [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)

### バッテリー寿命

同梱の 2000 mAh バッテリーを使用し、おおよそ 2 時間に 1 回の更新であれば、典型的な使用条件で充電間隔は約 **1 年** を見込めます。実際の動作時間は、更新頻度、画像サイズ、温度によって変動します。

[Battery calculator](https://opendisplay.org/firmware/battery/index.html) でスケジュールをシミュレーションできます（7.3" Color Kit / nRF52840 / 2000 mAh を選択）。

## リソース

- **[Web]** [OpenDisplay website](https://opendisplay.org)
- **[Tool]** [Toolbox (7.3" Color Kit preset)](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-73-color-kit)
- **[Tool]** [BLE Tester](https://opendisplay.org/firmware/display/index.html)
- **[Tool]** [Battery calculator](https://opendisplay.org/firmware/battery/index.html)
- **[GitHub]** [OpenDisplay Firmware](https://github.com/OpenDisplay/Firmware)
- **[GitHub]** [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)
- **[GitHub]** [Home Assistant Integration](https://github.com/OpenDisplay/Home_Assistant_Integration)
- **[Discord]** [OpenDisplay Discord](https://discord.gg/XmTHz8RfJE)
- **[Wiki]** [In-depth OpenDisplay guide](https://wiki.seeedstudio.com/ja/EN04_opendisplay/)

## トラブルシューティング

**Q1: 起動画面や QR コードをもう一度表示したい。**

*   **ディスプレイの電源を入れ直します**：電源を切り、10 秒待ってから再度電源を入れます。起動画面（デバイス名、KEY1:/KEY2: 行、QR コード）は、完全な電源オン後のリフレッシュ時にのみ表示されます。
*   **リフレッシュが完了するまで待ちます**：Spectra 6 カラーの起動リフレッシュには約 15〜20 秒かかります。ちらつきや途中のカラーパターンは正常です。リフレッシュ中にディスプレイの電源を切らないでください。
*   **QR コードをもう一度スキャンする** か、暗号化キーが必要な場合は画面上の KEY1:/KEY2: を直接読み取ります。
*   **再書き込みや再設定は不要です** — 電源を入れ直すたびに起動画面は必ず再表示されます。
*   **注意**：このディスプレイが許可するアクティブな Bluetooth 接続は 1 つだけです。別のデバイスがまだ接続中の場合は、先に切断してください。

**Q2: ディスプレイの電源が入らない、または反応しない。**

*   **まず USB で充電します**：バッテリー残量が非常に少ないと、デバイスが完全に故障している、またはフリーズしているように見えることがあります。キットを USB 電源に接続し、しばらく充電してから再試行してください。
*   **充電後**：電源を切り、10 秒待ってから電源を入れ、起動画面が表示されるまで待ちます。
*   **電源スイッチがオンになっていることを確認します**：スイッチをしっかりと ON 位置までスライドさせてください。
*   **バッテリーコネクタを確認します**：ケースを開け、バッテリーの JST コネクタが奥までしっかり挿さっていることを確認します。赤い線は「+」マーク側、黒い線は「−」マーク側を向いている必要があります。コネクタの向きが逆だとボードが破損するおそれがあります。
*   **他のデバイスが BLE 接続を保持していないことを確認します** — このディスプレイがサポートするアクティブ接続は 1 つだけです。

**Q3: Home Assistant がディスプレイを検出しない。**

*   **統合バージョンを確認する**：Home Assistant 2026.4 以降には、OpenDisplay の組み込み統合が含まれています。古いバージョンや drawcustom ワークフローの場合は、HACS のカスタム統合をインストールします（`opendisplay` フォルダを `custom_components/` にコピー）、その後 Home Assistant を再起動します。
*   **他の Bluetooth クライアントを先に切断する**：BLE Tester、ブラウザタブ、Bluefy を閉じてください — このディスプレイは同時に 1 つのアクティブな BLE 接続しか許可しません。別のデバイスが接続されていると、Home Assistant は検出や接続ができません。
*   **Bluetooth 経路を確認する**：Home Assistant ホスト上の内蔵または USB Bluetooth アダプタ、もしくはアクティブ / 接続可能な接続をサポートする ESPHome Bluetooth プロキシを使用してください。Shelly BLE プロキシはサポートされません — このディスプレイに必要なアクティブ接続を確立できません。
*   **まだ見つからない場合**：1 分ほど待ち、ディスプレイを近づけてから、Settings → Devices & Services → Discovered を開き、「OD」で始まる名前がないか確認します。
*   **手動で追加する**：ディスプレイが自動検出されない場合は、Settings → Devices & Services に移動し、Add Integration をクリックして "OpenDisplay" を検索し、セットアップフローに従います。

**Q4: ブラウザがディスプレイを検出・接続できません。**

*   **サポートされているブラウザを使用する**：Web Bluetooth は Chrome と Edge（デスクトップおよび Android）で動作します。iPhone または iPad では Bluefy ブラウザ（App Store id 1492822055）を使用してください。Firefox と Safari（デスクトップ）は Web Bluetooth をサポートしていません。
*   **Bluetooth をオンにする**：スマートフォンまたはコンピュータで Bluetooth が有効になっていることを確認してください。Android では、Location もオンにします — Chrome が BLE スキャンに必要とします。
*   **デバイスをキットの近くに保つ**。
*   **他のすべてのクライアントを先に切断する**：このディスプレイは同時に 1 つのアクティブな BLE 接続しか許可しません。Home Assistant や別のブラウザがすでに接続されている場合は、再試行する前に切断してください。
*   **"OD" で始まるデバイス名を選択する**（例：OD592B4A）。
*   **表示されない場合**：ディスプレイのボタンを 1 回押すか、電源を入れ直します（10 秒オフ → オン）。その後、起動時のリフレッシュが完了してから再試行してください。
*   **何も反応しない場合**：まず USB 経由でキットを充電してください。

**Q5: 画像のアップロードが失敗する、またはタイムアウトします。**

*   **ディスプレイの電源が入り、範囲内にあることを確認する**：このキットはディープスリープのウェイクウィンドウなしで常に BLE 受信待ち状態ですが、電源が入っており、Bluetooth の有効範囲内にある必要があります。
*   **他のすべてのクライアントを切断する**：同時に 1 つのアクティブな BLE 接続のみ可能です。BLE Tester だけを再接続して、再度試してください。
*   **暗号化がオンの場合**：起動画面または QR ランディングページに表示されるキーを入力します。
*   **より小さい画像を試す**、または次の画像を送信する前にフルリフレッシュが完了するまで待ちます。
*   **セッション途中でデバイスが反応しなくなった**：USB で充電してから、電源を入れ直します（10 秒オフ → オン）。

**Q6: 暗号化キーが拒否される、または "not set" と表示されます。**

*   **工場出荷時のキットは暗号化オフ**：KEY1: と KEY2: は出荷時には "not set" と表示されます — キーフィールドは空白のままにします。
*   **暗号化を有効にしたがキーを失った場合**：ディスプレイの電源を入れ直します（10 秒オフ → オン） — 再起動後、起動画面にキーが表示されます。QR コードをスキャンすることもでき、ランディングページに同じキーが表示されます。
*   **キーを失い、画面も読めない場合**：Toolbox を開き、Encryption を Unlocked に設定し、Configure over Bluetooth を実行します。これにより暗号化が解除され、再設定できるようになります。それでも解決しない場合は、ファームウェアを書き換えて再設定してください。

**Q7: 送信後に画面がフリーズしたように見える、色がおかしい、または真っ白（真っ黒）のままです。**

*   **リフレッシュが完了するまで待つ**：更新の途中でディスプレイの電源を切らないでください。Spectra 6 のフルリフレッシュには約 15〜20 秒かかります。
*   **色のレンダリングに注意する**：画像は 6 色（フル RGB ではない）にディザリングされます — テキストやシンプルなグラフィックが最もきれいに表示され、写真は粒状のパターンになります。これは想定された動作であり、不具合ではありません。
*   **10 秒オフ → オンで電源を入れ直し**、起動画面に戻してから BLE が応答することを確認します。
*   **他に接続されているデバイスがないか確認する**：同時に別のデバイスが接続されている場合は、それを切断し、1 つのクライアントだけで再試行してください。
*   **それでも起動や接続ができない場合**：まず USB で充電し、その後もう一度電源を入れ直します。
*   **ファームウェアを書き換える**：上記をすべて試してもディスプレイがフリーズしたまま、または表示がない場合は、Toolbox を使用して USB 経由で再フラッシュします（「Going further」セクションの "Reflash or recover" を参照）。

## 技術サポート & 製品ディスカッション

*Seeed Studio と OpenDisplay による共同開発。*

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、サポートをご提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
