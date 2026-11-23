---
description: Seeed Studio と OpenDisplay が共同開発した、すぐに使える BLE 電子ペーパー表示機 OpenDisplay 4.26" Mono Kit のはじめかた
title: OpenDisplay 4.26" Mono Kit のはじめかた
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.webp
slug: /opendisplay_426_mono_kit
sku: 100036064
last_update:
  date: 10/22/2026
  author: Nemo
createdAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/opendisplay_426_mono_kit/
updatedAt: '2026-10-22'
---

# OpenDisplay 4.26" Mono Kit のはじめかた

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.webp" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OpenDisplay-4-26-Mono-Kit-p-7032.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

OpenDisplay 4.26" Mono Kit は、Seeed Studio と OpenDisplay が共同開発した、すぐに使える電子ペーパー表示機です。4.26 インチ 800×480 の白黒パネル、Seeed [XIAO ePaper Display Board EN05](https://wiki.seeedstudio.com/ja/epaper_en05/)（XIAO nRF52840 Plus）、2000 mAh バッテリー、3D プリントケースが **すべて組み立て済み** の状態で出荷され、ファームウェアもあらかじめインストールされています。

ブラウザまたは Home Assistant から **Bluetooth Low Energy** 経由で使用します。Wi-Fi は不要です。無線は低消費電力のリッスンモードで待機しており、ディスプレイの電源が入っていて通信範囲内にあるときに、いつでも新しい画像を送信できます。白黒モードでは部分更新が利用できます。おおよそ 15 分に 1 回の更新で、充電間隔は最大 **約 2 年** を見込めます。

### 必要なもの

- 電源が入っており、Bluetooth の通信範囲内にあるキット本体
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
      <td>Seeed <a href="https://wiki.seeedstudio.com/ja/epaper_en05/">XIAO ePaper Display Board EN05</a>（XIAO nRF52840 Plus）</td>
    </tr>
    <tr>
      <th>ディスプレイ</th>
      <td>4.26 インチ モノクロ ePaper</td>
    </tr>
    <tr>
      <th>色</th>
      <td>白黒（デフォルト）；オプションで 4 階調グレー</td>
    </tr>
    <tr>
      <th>部分更新</th>
      <td>白黒モードでのみサポート</td>
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
2. 起動時のリフレッシュが終わるまで待ちます — 白黒の場合は通常 **数秒** です。ちらつきは正常です。
3. 終了すると、起動画面にデバイス名（**OD** で始まる）、**KEY1:** / **KEY2:**、および QR コードが表示されます。

暗号化は出荷時は **オフ** なので、キー行には **not set** と表示されます。箱から出して通常使用するだけならキーは不要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.png" style={{width:800, height:'auto'}}/></div>

## 最初の画像を送る

ディスプレイ上の QR コードをスキャンします。すると、このデバイス用のショートカットが用意された [opendisplay.org](https://opendisplay.org/l/) 上のパーソナライズされたページが開きます：

<table>
  <thead>
    <tr>
      <th>ショートカット</th>
      <th>動作内容</th>
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
      <td>設定変更やファームウェアの再書き込みを行います（開発者向け / 復旧用）</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Landing_page.png" style={{width:600, height:'auto'}}/></div>

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
      <td>サポート対象</td>
    </tr>
    <tr>
      <th>iPhone / iPad</th>
      <td>Bluefy を使用（App Store id1492822055）</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>サポート対象外</td>
    </tr>
  </tbody>
</table>

ランディングページから **Send an image** を選択します（または [opendisplay.org](https://opendisplay.org/firmware/display/index.html) を開きます）。**Connect** をクリックし、ブラウザのリストからデバイスを選択します（名前は **OD** で始まります — 例：**OD592B4A**）。その後、写真を選ぶかお絵描きし、**Send to device** をタップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/BLE_Tester.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Browser_Bluetooth_pairing.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/BLE_Tester_connected.png" style={{width:600, height:'auto'}}/></div>

:::note
BLE Tester ではパネルが 4.3" と表示される場合がありますが、キットの製品名は 4.26" Mono Kit です。
:::

**完了の目安：電子ペーパーディスプレイに画像が表示されます。**

## Home Assistant（任意）

このキットは **BLE のみ** を使用します。Home Assistant には動作する Bluetooth 経路が必要です：

- **Home Assistant ホスト上の Bluetooth** — 内蔵アダプタまたは USB ドングル
- **ESPHome Bluetooth プロキシ** — ディスプレイが HA ホストから離れている場合（アクティブ / 接続可能な接続をサポートしている必要があります）

:::note
Shelly BLE プロキシは **サポートされません** — このディスプレイに必要なアクティブ接続を確立できないためです。ローカルアダプタか ESPHome プロキシを使用してください。
:::

ディスプレイの電源を入れ、Bluetooth の通信範囲内に置きます。Home Assistant が自動的に検出するはずです — **Settings → Devices & Services → Discovered** に **OD** で始まる名前が表示されるので、それを探して **Add**、続いて **Submit** をタップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_1.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_2.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_3.png" style={{width:600, height:'auto'}}/></div>

デバイスページには、バッテリー、ボタン、ファームウェアの状態、表示内容が表示されます。詳細はこちら： [Home Assistant integration](https://github.com/OpenDisplay/Home_Assistant_Integration)

## さらに活用する

### 暗号化を有効にする

暗号化は出荷時は **オフ** です。Toolbox → More options で Encryption を **Locked** に設定し、**Configure over Bluetooth** を実行します。再起動後、キーは **KEY1:** / **KEY2:** と QR ランディングページに表示されます。キーを見失った場合は、ディスプレイの電源を入れ直すと再びキーが表示されます。

### 再書き込みや復旧

1. Toolbox を開きます — 4.26" Mono Kit プリセット: [Toolbox](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-426-mono-kit)
2. **Install firmware (USB)** — デスクトップ / ノート PC 上の Chrome または Edge を使用
3. **Configure over Bluetooth** — 書き込み後に設定を書き戻します

### py-opendisplay

独自の Python プロジェクト向けには、pip install py-opendisplay でインストールします — [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)

### バッテリー寿命

付属の 2000 mAh バッテリーを使用し、おおよそ 15 分に 1 回の更新で、典型的な使用条件では充電間隔は最大 **約 2 年** を見込めます。実際の動作時間は、更新頻度、画像サイズ、部分更新の使用状況、温度によって変動します。

[Battery calculator](https://opendisplay.org/firmware/battery/index.html) でスケジュールをシミュレーションできます（4.26" Mono Kit / nRF52840 / 2000 mAh を選択）。

## リソース

- **[Web]** [OpenDisplay website](https://opendisplay.org)
- **[Tool]** [Toolbox（4.26" Mono Kit プリセット）](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-426-mono-kit)
- **[Tool]** [BLE Tester](https://opendisplay.org/firmware/display/index.html)
- **[Tool]** [Battery calculator](https://opendisplay.org/firmware/battery/index.html)
- **[GitHub]** [OpenDisplay Firmware](https://github.com/OpenDisplay/Firmware)
- **[GitHub]** [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)
- **[GitHub]** [Home Assistant Integration](https://github.com/OpenDisplay/Home_Assistant_Integration)
- **[Discord]** [OpenDisplay Discord](https://discord.gg/XmTHz8RfJE)
- **[Wiki]** [OpenDisplay 詳細ガイド](https://wiki.seeedstudio.com/ja/EN04_opendisplay/)
- **[ZIP]** [3D プリントケース用ファイル](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Resources/OpenDisplay_4.26_Mono_Kit_3D_Files.zip)
- **[UF2]** [Factory Firmware（4.26" Mono Kit）](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Resources/OpenDisplay_4.26_Mono_Kit_Factory_Firmware.uf2)

## トラブルシューティング

**Q1: 起動画面や QR コードをもう一度表示したい。**

*   **ディスプレイの電源を入れ直す**：電源を切り、10 秒待ってから再度電源を入れます。起動画面（デバイス名、KEY1:/KEY2: 行、QR コード）は、完全な電源オン時のリフレッシュ後にのみ表示されます。
*   **リフレッシュが完了するまで待つ**：モノクロの起動リフレッシュは通常数秒かかります。ちらつきや途中のグレー模様は正常です。リフレッシュ中に電源を切らないでください。
*   **QR コードをもう一度スキャンする** か、暗号化キーが必要な場合は画面上の KEY1:/KEY2: を直接読み取ります。
*   **再書き込みや再設定は不要** — 電源を入れ直すたびに起動画面は必ず再表示されます。
*   **注意**：このディスプレイは同時に 1 つのアクティブな Bluetooth 接続しか許可しません。別のデバイスがまだ接続されている場合は、先に切断してください。

**Q2: ディスプレイの電源が入らない、または反応しない。**

*   **まず USB で充電する**：バッテリー残量が非常に少ないと、デバイスが完全に故障している、またはフリーズしているように見えることがあります。キットを USB 電源に接続し、しばらく充電してから再度試してください。
*   **充電後**：電源を切り、10 秒待ってから電源を入れ、起動画面が表示されるまで待ちます。
*   **電源スイッチがオンになっていることを確認する**：スイッチをしっかりと ON 位置までスライドさせてください。
*   **バッテリーコネクタを確認する**：ケースを開けて、バッテリーの JST コネクタがしっかり奥まで差し込まれていることを確認してください。赤い線は「+」マーク側、黒い線は「−」マーク側を向いている必要があります。逆向きに接続するとボードが破損する可能性があります。
*   **他のデバイスが BLE 接続を開いたまま保持していないことを確認する** — このディスプレイは同時に 1 つのアクティブ接続しかサポートしません。

**Q3: Home Assistant がディスプレイを検出しません。**

*   **インテグレーションのバージョンを確認する**：Home Assistant 2026.4 以降には、組み込みの OpenDisplay インテグレーションが含まれています。古いバージョンや drawcustom ワークフローの場合は、HACS のカスタムインテグレーションをインストールします（`opendisplay` フォルダを `custom_components/` にコピー）、その後 Home Assistant を再起動してください。
*   **先に他の Bluetooth クライアントを切断する**：BLE Tester、ブラウザタブ、Bluefy を閉じてください — このディスプレイは同時に 1 つのアクティブな BLE 接続しか許可しません。他のデバイスが接続されていると、Home Assistant は検出や接続ができません。
*   **Bluetooth 経路を確認する**：Home Assistant ホスト上の内蔵または USB Bluetooth アダプタ、もしくはアクティブ / 接続可能な接続をサポートする ESPHome Bluetooth プロキシを使用してください。Shelly BLE プロキシはサポートされません — このディスプレイに必要なアクティブ接続を確立できないためです。
*   **まだ見つからない場合**：1 分ほど待ち、ディスプレイを近づけてから、Settings → Devices & Services → Discovered を開き、「OD」で始まる名前がないか確認してください。
*   **手動で追加する**：ディスプレイが自動検出されない場合は、Settings → Devices & Services に移動し、Add Integration をクリックして "OpenDisplay" を検索し、セットアップフローに従ってください。

**Q4: ブラウザがディスプレイを検出・接続できません。**

*   **サポートされているブラウザを使用する**：Web Bluetooth は Chrome と Edge（デスクトップおよび Android）で動作します。iPhone または iPad では Bluefy ブラウザ（App Store id 1492822055）を使用してください。Firefox と Safari（デスクトップ）は Web Bluetooth をサポートしていません。
*   **Bluetooth をオンにする**：スマートフォンまたはコンピュータで Bluetooth が有効になっていることを確認してください。Android では、Location もオンにしてください — Chrome が BLE スキャンに必要とします。
*   **デバイスをキットの近くに保つ**。
*   **先に他のすべてのクライアントを切断する**：このディスプレイは同時に 1 つのアクティブな BLE 接続しか許可しません。Home Assistant や他のブラウザがすでに接続されている場合は、再試行する前に切断してください。
*   **"OD" で始まるデバイス名を選択する**（例：OD592B4A）。
*   **表示されない場合**：ディスプレイ上のボタンを 1 回押すか、電源を入れ直します（10 秒オフ → オン）。起動時のリフレッシュが完了してから再試行してください。
*   **何も反応しない場合**：まず USB でキットを充電してください。

**Q5: 画像のアップロードが失敗する、またはタイムアウトします。**

*   **ディスプレイの電源が入っていて、範囲内にあることを確認する**：このキットはディープスリープのウェイクウィンドウなしで常に BLE 受信待ち状態ですが、電源が入っており、Bluetooth の通信範囲内にある必要があります。
*   **他のすべてのクライアントを切断する**：同時に 1 つのアクティブな BLE 接続のみです。BLE Tester から単独で再接続して、もう一度試してください。
*   **暗号化がオンの場合**：起動画面または QR ランディングページに表示されているキーを入力してください。
*   **より小さい画像を試す**、または次の画像を送信する前にフルリフレッシュが完了するまで待ってください。
*   **セッションの途中でデバイスが応答しなくなった場合**：USB で充電し、その後電源を入れ直します（10 秒オフ → オン）。

**Q6: 暗号化キーが拒否される、または "not set" と表示されます。**

*   **工場出荷時のキットは暗号化オフで出荷されます**：KEY1: と KEY2: は、出荷時は "not set" と表示されます — キーフィールドは空欄のままにしてください。
*   **暗号化を有効にしたがキーを失くした場合**：ディスプレイの電源を入れ直します（10 秒オフ → オン）— 再起動後、起動画面にキーが表示されます。QR コードをスキャンすることもでき、ランディングページに同じキーが表示されます。
*   **キーを失くし、画面も読めない場合**：Toolbox を開き、Encryption を Unlocked に設定し、Configure over Bluetooth を実行します。これにより暗号化が解除され、再設定できるようになります。それでもうまくいかない場合は、ファームウェアを書き換えて再設定してください。

**Q7: 送信後に画面が固まったように見える、ノイズが出る、または真っ白／真っ黒のままです。**

*   **リフレッシュが完了するまで待つ**：更新の途中でディスプレイの電源を切らないでください。白黒のフルリフレッシュには数秒かかります。
*   **部分リフレッシュは白黒のみ対応**：部分リフレッシュはモノクロモードで動作します。オプションの 4 階調グレーモードを使用している場合、部分リフレッシュはサポートされません — ゴーストやスタックしたピクセルを避けるため、常にフルリフレッシュを使用してください。
*   **10 秒間電源オフ → オン** にして起動画面に戻り、その後 BLE が応答することを確認します。
*   **他に接続されているデバイスがないか確認する**：同時に他のデバイスが接続されている場合は、それを切断し、単一クライアントで再試行してください。
*   **それでも起動や接続ができない場合**：まず USB で充電し、その後もう一度電源を入れ直してください。
*   **ファームウェアを書き換える**：上記をすべて試してもディスプレイが固まったまま、または真っ白／真っ黒のままの場合は、USB 経由で Toolbox を使ってファームウェアを書き換えてください（「Going further」セクションの "Reflash or recover" を参照）。

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
