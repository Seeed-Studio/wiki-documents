---
description: ESPHome と Home Assistant で互換性のあるすべての Seeed ePaper 製品を駆動するためのリファレンスガイド - 書き込みパス、汎用 YAML スケルトン、および各製品のクックブックの所在。
title: ESPHome で使う
keywords:
  - ePaper ディスプレイ
  - ESPHome
  - Home Assistant
  - YAML
  - reTerminal
  - XIAO
  - TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_esphome
sidebar_position: 2
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/epaper_work_with_esphome/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome で使う

このページは、[ESPHome](https://esphome.io/) を通じて互換性のある任意の Seeed ePaper 製品を駆動し、[Home Assistant](https://www.home-assistant.io/) と連携させるための**リファレンスマニュアル**です。ここでは、すべてのハードウェアで共通な部分を扱います：

1. ePaper ディスプレイを駆動する手段として ESPHome を選ぶ理由。
2. 2 つの書き込みパス：**ESPHome Web Installer**（ゼロ設定・ブラウザベース）と **ESPHome CLI / HA Add-on**（YAML を完全制御）。
3. すべての製品が独自のピンマップで特化させる汎用 YAML スケルトン — `wifi`、`api`、`ota`、`display`。
4. 製品ごとのクックブックの所在（ペリフェラル、ハードウェア固有の lambda、ダッシュボードレシピ）。

**「フラッシュ → 接続 → 最初のダッシュボード」までのエンドツーエンドの手順**を知りたい場合は、以下からお使いのハードウェアのクックブックに直接進んでください。これらのページは、このリファレンスで示したボイラープレートを再利用し、製品固有のサンプルを追加しています。

## 対応ハードウェア

[メインハブページ](/ja/seeed_epaper_displays) 上で **ESPHome** 列にチェックが付いているすべての Seeed ePaper 製品は、このワークフローを実行できます：

<div class="table-center">
  <table align="center">
    <tr>
      <th>製品</th>
      <th>MCU</th>
      <th>クックブック</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3</td>
      <td><a href="/ja/reterminal_e10xx_with_esphome">Basic</a> · <a href="/ja/reterminal_e10xx_with_esphome_advanced">Advanced (peripherals)</a></td>
    </tr>
    <tr>
      <td><strong>EE04 driver board</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/ja/EE04_with_esphome_advanced">EE04 ESPHome クックブック</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="/ja/xiao_075inch_epaper_panel_esphome">XIAO Panel ESPHome クックブック</a></td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/ja/ogdiy_kit_works_with_esphome">TRMNL DIY Kit ESPHome クックブック</a></td>
    </tr>
  </table>
</div>

:::tip
代わりに **TRMNL クラウドダッシュボード**（YAML 不要・プラグインベース）をお探しですか？[Work with TRMNL](/ja/reterminal_e10xx_trmnl) を参照してください。**Seeed のノーコードビジュアル HMI** をお探しの場合は、[Work with SenseCraft HMI](/ja/EE04_with_hmi) を参照してください。
:::

## なぜ ePaper に ESPHome なのか？

- **省エネルギー** — ePaper は画面を更新しているときだけ電力を消費するため、（ESP32 + ESPHome のディープスリープ + ePaper）の組み合わせは、バッテリーで数週間〜数か月動作させることができます。
- **日光下での視認性** — LCD と異なり、ディスプレイは日光下でも読みやすく、壁掛けの Home Assistant パネルに最適です。
- **ネイティブな HA 市民** — デバイスが Home Assistant に現れれば、あらゆるエンティティ（climate、calendar、sensor、person、weather）を、Jinja テンプレート 1 つで壁に表示できます。
- **ローカルファースト** — クラウドもベンダーロックインもありません。すべてが自宅の LAN 上で動作します。

## ステップ 1: 書き込みパスを選ぶ

ESPHome ファームウェアは 2 通りの方法でデバイスに書き込むことができます。どちらを選ぶかは、YAML を一から書きたいのか、とにかく早く動くダッシュボードを手に入れたいのかによって決まります。

<Tabs groupId="esphome-flash-path">
<TabItem value="web-installer" label="パス A: ESPHome Web Installer（初めての方に推奨）" default>

事前ビルド済みのファームウェア ZIP が Seeed によってホストされており、WebSerial を介してブラウザからデバイスに書き込みます。

1. デバイスを USB-C ケーブルで PC に接続します。
2. お使いの製品のクックブックからリンクされている製品別の書き込みページを **Chrome** または **Edge** で開きます。
3. **Connect** をクリックし、シリアルポートを選択してから **Install** をクリックします。
4. 書き込み後、デバイスは Wi-Fi キャプティブポータル（`ESPHome-XXXX`）で起動します。接続して Wi-Fi を設定すると、デバイスは ESPHome インテグレーション経由で Home Assistant に表示されます。

このパスでは **YAML の編集は一切不要** です。後から ESPHome ダッシュボードでデバイスを「採用」して、カスタマイズを始めることもできます。

</TabItem>
<TabItem value="yaml-cli" label="パス B: YAML + ESPHome ダッシュボード（フルコントロール）">

ファームウェアを完全に制御したい場合（カスタムディスプレイレイアウト、カスタムセンサー、マルチページダッシュボード、ディープスリープ調整、OTA アップデートなど）、**ESPHome ダッシュボード** を次のいずれかとして実行します：

- Home Assistant の **Add-on**（すでに HA OS / HA Supervised を運用している場合に推奨）、または
- スタンドアロンの **Python CLI**（`pip install esphome` の後に `esphome dashboard config/`）。

ワークフロー：

1. ESPHome ダッシュボードで **+ New device** をクリック → 名前を入力 → 適切な ESP バリアント（ESP32-S3 / ESP32-C3 / など — どれかは製品クックブックに記載）を選択します。
2. ダッシュボードがスターターの `<device-name>.yaml` を生成します。その本体を、クックブックにある製品固有の YAML に置き換えます（形については後述のステップ 2 を参照）。
3. **Install** をクリック → 初回の書き込みでは **ESPHome を実行しているコンピュータにデバイスを接続** します。2 回目以降の書き込みは OTA による無線更新になります。
4. デバイスは自動的に Home Assistant の ESPHome インテグレーションに参加します。

</TabItem>
</Tabs>

## ステップ 2: 汎用 YAML スケルトン

すべての Seeed ePaper ESPHome 設定は、同じアウトラインに従います。お使いの製品のクックブックが、**製品固有の部分**（substitutions、ピンマップ、画面モデル）を埋めますが、全体の形は常に次のようになります：

```yaml
substitutions:
  device_name: my-epaper

esphome:
  name: ${device_name}
  friendly_name: ${device_name}

# Pick the right platform for your hardware.
# - reTerminal E Series & EE04 & TRMNL Kit: esp32 with framework: arduino (S3 variant)
# - XIAO 7.5" Panel: esp32 with framework: arduino (C3 variant)
esp32:
  board: seeed_xiao_esp32s3   # see your cookbook
  framework:
    type: arduino

logger:
api:
  encryption:
    key: !secret api_key
ota:
  - platform: esphome
    password: !secret ota_password
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "${device_name} Fallback"

# SPI bus that drives the ePaper - exact pins come from the cookbook
spi:
  clk_pin: GPIO13
  mosi_pin: GPIO11

# The display block - the model + pin map are the part that's
# different per product. The cookbook gives you the right values.
display:
  - platform: waveshare_epaper
    id: epaper
    cs_pin: GPIO9
    dc_pin: GPIO15
    busy_pin: GPIO12
    reset_pin: GPIO14
    model: 7.50inv2
    update_interval: never   # we'll trigger refreshes from automations
    lambda: |-
      it.print(0, 0, id(roboto_24), "Hello, ePaper!");

font:
  - file: "fonts/Roboto-Regular.ttf"
    id: roboto_24
    size: 24
```

製品固有の内容（各クックブックに記載）：

- `esp32.board` — E1001/E1002/EE04/TRMNL Kit には `seeed_xiao_esp32s3`、XIAO 7.5" Panel には `esp32-c3-devkitm-1` など。
- `spi` と `display` のピンマップ。
- `model` の値（`7.50in-bwr`、`13.3in-spectra6` など）。
- 任意のオンボードペリフェラル（ボタン / ブザー / バッテリー / SHT4x）— 関連するクックブックの **Advanced** セクションで扱います。

## ステップ 3: Home Assistant に接続する

ファームウェアが起動して Wi-Fi に参加すると、Home Assistant が自動的にデバイスを検出します：

1. **Settings → Devices & services**
2. ESPHome インテグレーションに、デバイスの "Discovered" カードが表示されます。
3. **Configure** をクリックし、API 暗号化キー（`secrets.yaml` から）を貼り付けて送信します。
4. これでデバイスとそのすべてのエンティティ（sensors、binary_sensors、display）が HA で利用可能になります。

これでエンティティを Lovelace ダッシュボードにドラッグできますし、あるいは — ePaper ではより面白い方法として — `display.lambda` ブロックを使い、[`homeassistant`](https://esphome.io/components/homeassistant.html) コンポーネント経由で任意の HA エンティティを直接画面に描画できます。

## 次のステップ — クックブック

このページは意図的にボイラープレートまでで止めています。製品固有の YAML、ペリフェラルのサンプル、エンドツーエンドのレシピは、各製品のクックブックにあります：

- **[reTerminal E シリーズ — Basic ESPHome](/ja/reterminal_e10xx_with_esphome)** — 最初のダッシュボード、Wi-Fi 設定、E1001/E1002/E1003/E1004 用の事前ビルド済みファームウェア ZIP。
- **[reTerminal E シリーズ — Advanced ESPHome](/ja/reterminal_e10xx_with_esphome_advanced)** — ボタン、ブザー、バッテリー監視、SHT4x センサー、ディープスリープ、マルチページダッシュボード。
- **[EE04 driver board — ESPHome](/ja/EE04_with_esphome_advanced)** — XIAO ESP32-S3 + EE04 + 任意の ePaper スクリーンによる完全な Home Assistant 連携。
- **[XIAO 7.5" ePaper Panel — ESPHome](/ja/xiao_075inch_epaper_panel_esphome)** — 最小限の ESP32-C3 ダッシュボード。
- **[TRMNL 7.5" DIY Kit — ESPHome](/ja/ogdiy_kit_works_with_esphome)** — TRMNL クラウドプラットフォームの代わりに ESPHome でキットハードウェアを使う方法。

新しい ePaper 製品が出荷されると、対応するクックブックが各製品のフォルダに追加され、このメインページからのリンクも更新されます。

## よくある問題

### 書き込み後もディスプレイが真っ白のまま

- `display.platform` と `model` の文字列が画面に合っているか確認してください。モデルが間違っていると、何も表示されない更新が静かに行われます。
- `busy_pin` と `reset_pin` が正しく配線されているか確認してください。busy ラインが浮いていると、すべての更新がブロックされます。
- カラー ePaper（`spectra6`、`7-color`、`bwr`）では、最初の更新に 25〜45 秒かかることがあります。デバッグを続ける前に待ってください。

### デバイスが Home Assistant に表示されない

- デバイスが Wi-Fi に参加しているか確認します（ESPHome ダッシュボードのログを確認）。
- YAML に `api:` が含まれていること、そして HA 側の暗号化キーが `secrets.yaml` と一致していることを確認します。
- インテグレーションを手動で追加します：**Settings → Devices & services → Add Integration → ESPHome** を開き、デバイスの IP を入力します。

### バッテリーの減りが想定より早い

ePaper が省電力になるのは、SoC の残りの部分もスリープしている場合だけです。`deep_sleep` ブロックを追加し（お使いの製品の Advanced クックブックを参照）、`update_interval` を長くしてください。

特定の製品についてより詳しくトラブルシュートする場合は、そのハードウェアのクックブックを確認してください。

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
