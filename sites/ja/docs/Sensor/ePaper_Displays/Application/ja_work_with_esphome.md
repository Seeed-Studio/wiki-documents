---
description: ESPHome と Home Assistant で互換性のあるすべての Seeed ePaper 製品を駆動するためのリファレンスガイド - YAML ワークフロー、汎用スケルトン、および各製品のクックブックの所在。
title: ESPHome で動作させる
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
updatedAt: '2026-06-15'
---

# ESPHome で動作させる

:::tip 開発環境を用意せずにデモを試す
開発環境をセットアップする前に、プロジェクトの結果をすばやくプレビューしたり、基本的なデモファームウェアを試したい場合は、**[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** を開きます。対応する reTerminal E シリーズデバイスを選択し、ブラウザから直接デモファームウェアを書き込むことができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

このページは、[ESPHome](https://esphome.io/) を通じて互換性のある Seeed ePaper 製品を駆動し、[Home Assistant](https://www.home-assistant.io/) と統合するための**リファレンスマニュアル**です。ここでは、すべてのハードウェアで共通の部分を扱います：

1. ePaper ディスプレイを駆動する手段として ESPHome を選ぶ理由。
2. クックブックの YAML サンプルを使い、自分の用途に合わせて調整し、ESPHome ダッシュボードからフラッシュする方法。
3. すべての製品が独自のピンマップで特化させる汎用 YAML スケルトン — `wifi`、`api`、`ota`、`display`。
4. 製品ごとのクックブックの所在（ペリフェラル、ハードウェア固有の lambda、ダッシュボードレシピ）。

**「フラッシュ → 接続 → 最初のダッシュボード」までのエンドツーエンドの手順**が必要な場合は、以下の自分のハードウェア向けクックブックに直接進んでください。これらのページは、このリファレンスで説明する定型部分を再利用し、製品固有のサンプルを追加しています。

## 対応ハードウェア

[メインハブページ](/ja/seeed_epaper_displays)で **ESPHome** 列にチェックが付いているすべての Seeed ePaper 製品は、このワークフローで動作させることができます：

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
      <td>
        <a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome/">ディスプレイの基本、HA 連携 & 描画</a><br/>
        <a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_advanced/">ボタン、ブザー、LED、バッテリー、SHT4x & ディープスリープ</a><br/>
        <a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone/">RTC、SD カード & マイク</a>
      </td>
    </tr>
    <tr>
      <td><strong>EE04 driver board</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/ja/EE04_with_esphome_advanced/">EE04 ESPHome クックブック</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_esphome/">XIAO パネル ESPHome クックブック</a></td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_esphome/">TRMNL DIY キット ESPHome クックブック</a></td>
    </tr>
  </table>
</div>


## なぜ ePaper に ESPHome を使うのか？

- **省エネルギー** — ePaper は画面を更新しているときだけ電力を消費するため、（ESP32 + ESPHome のディープスリープ + ePaper）の組み合わせは、バッテリーで数週間〜数か月動作させることができます。
- **日光下での視認性** — LCD と異なり、ディスプレイは日光下でも読みやすく、壁掛けの Home Assistant パネルに最適です。
- **ネイティブな HA 市民** — デバイスが Home Assistant に現れれば、あらゆるエンティティ（空調、カレンダー、センサー、人物、天気）は、壁に表示するまで `Jinja` テンプレート 1 つ分の距離になります。
- **ローカルファースト** — クラウドもベンダーロックインもありません。すべてが自宅 LAN 上で動作します。

## ステップ 1: ESPHome YAML を生成してファームウェアを書き込む

最も簡単な始め方は、**[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** を使うことです。ハブは、デバイスと有効化したい機能の選択から ESPHome YAML ファイルを生成できるため、最初の設定を手作業で組み立てる必要がありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/257.png" style={{width:1000, height:'auto'}}/></div>

推奨ワークフロー：

1. デスクトップ版 Chrome または Edge で [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) を開きます。
2. プラットフォームとして **ESPHome** を選択します。
3. 自分のデバイスを選択します。
4. セットアップ手順で、ディスプレイ、ボタン、バッテリー、センサー、RTC、SD カード、マイク、ディープスリープなど、デバイスで利用可能な機能を有効化するよう選択します。
5. ページに対応する ESPHome YAML を生成させます。
6. **Copy to clipboard** または **Download file** を使って、生成された YAML をエクスポートします。
7. ESPHome ダッシュボードに YAML を貼り付けるか、インポートします。
8. プロジェクトで最も重要な部分、つまり ePaper ディスプレイのコンテンツ、Home Assistant エンティティ、レイアウト、フォント、リフレッシュ動作に手動編集の焦点を当てます。

:::tip
Firmware Hub は、デバイス固有の YAML 構造の多くを処理してくれるため、新規ユーザーにとって推奨される出発点です。生成された設定を理解したいとき、高度な機能を組み合わせたいとき、あるいは小さなサンプルからカスタムレイアウトを構築したいときには、クックブックを利用してください。
:::

ESPHome ダッシュボードは次のいずれかの形で実行します：

- Home Assistant アドオン（すでに HA OS / HA Supervised を運用している場合に推奨）、または
- スタンドアロンの Python CLI（`pip install esphome` の後に `esphome dashboard config/` を実行）。

手動クックブックワークフロー：

1. 自分のハードウェア向けクックブック（上の表を参照）を開き、必要な YAML サンプルをコピーします。
2. ESPHome ダッシュボードで + New device をクリックし、名前を入力して、クックブックに記載されている ESP バリアント（ESP32-S3、ESP32-C3 など）を選択します。
3. 生成されたスターターファイルを自分の設定で置き換えます。1 台のデバイスで複数の機能が必要な場合にのみ、クックブックのセクションを組み合わせてください。
4. 最初の USB フラッシュでは Install → Plug into this computer をクリックします。`wifi`、`api`、`ota` が設定されれば、その後の更新は Wi-Fi 経由で行えます。
5. デバイスがオンラインになると、ESPHome 連携を通じて Home Assistant に表示されます。

## ステップ 2: 生成された YAML 構造を理解する

すべての Seeed ePaper ESPHome 設定は同じ基本構造に従いますが、ハードウェアの値は共通ではありません。ボードタイプ、バスピン、電源イネーブルピン、ディスプレイプラットフォーム、ディスプレイモデル、オンボードペリフェラルについては、Firmware Hub または自分の製品向けクックブックを信頼できる情報源として使用してください。

以下のブロックは、**構造ガイド**であり、そのままフラッシュできる設定ではありません。製品固有の YAML ファイルを生成またはコピーした後に、各種設定が通常どこに現れるかを示しています：

```yaml
substitutions:
  device_name: my-epaper
  friendly_name: My ePaper Display

esphome:
  name: ${device_name}
  friendly_name: ${friendly_name}
  # Optional. Some products enable power rails or read sensors during boot.
  # Keep this section from the generated YAML if your device needs it.
  on_boot:
    priority: 600
    then:
      - output.turn_on: <power_enable_output_id>
      - delay: 200ms

# Board and framework come from the Firmware Hub or your cookbook.
esp32:
  board: <board_from_generated_yaml>
  framework:
    type: arduino

logger:
  # Some ESP32-S3 products use a USB-to-UART bridge.
  # Keep hardware_uart from the generated YAML if it is present.
  # hardware_uart: UART0

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

captive_portal:

# Buses are hardware-specific. Do not reuse pins from another product.
spi:
  clk_pin: <spi_clk_from_generated_yaml>
  mosi_pin: <spi_mosi_from_generated_yaml>
  miso_pin: <spi_miso_if_required>

i2c:
  scl: <i2c_scl_if_required>
  sda: <i2c_sda_if_required>

i2s_audio:
  # Only needed when your generated YAML enables a microphone.
  i2s_lrclk_pin: <i2s_clock_if_required>

font:
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 24

# Outputs are often used for LEDs, buzzers, or power-enable circuits.
output:
  - platform: gpio
    id: <output_id_from_generated_yaml>
    pin: <gpio_from_generated_yaml>

light:
  - platform: binary
    name: "Onboard LED"
    output: <output_id_from_generated_yaml>

time:
  - platform: homeassistant
    id: ha_time

sensor:
  # Add Home Assistant, onboard, or template sensors here.
  - platform: homeassistant
    id: outdoor_temperature
    entity_id: sensor.outdoor_temperature

binary_sensor:
  # Add buttons or status inputs here if your hardware provides them.
  - platform: gpio
    id: button_1
    pin: <button_gpio_from_generated_yaml>

display:
  - platform: <display_platform_from_generated_yaml>
    id: epaper_display
    # Keep the model and pin map from the generated YAML or cookbook.
    model: <display_model_from_generated_yaml>
    cs_pin: <display_cs_from_generated_yaml>
    dc_pin: <display_dc_from_generated_yaml>
    reset_pin: <display_reset_from_generated_yaml>
    busy_pin: <display_busy_from_generated_yaml>
    update_interval: never
    lambda: |-
      it.print(0, 0, id(font_medium), "Hello, ePaper!");
```

Firmware Hub またはクックブックから、次の値を維持してください：

- `esp32.board` と、`hardware_uart` などの logger 設定。
- `spi`、`i2c`、`i2s_audio` のピン。
- ディスプレイ、バッテリー測定、SD カード、マイク、その他オンボード回路用の電源イネーブル `output` ブロック。
- ボタン、バッテリー、RTC、SHT4x、SD カード、マイク、ブザー、LED の定義。
- `display.platform`、`model`、ピンマップ、リセット動作、busy ピンの動作、更新間隔。

通常カスタマイズする部分は次のとおりです：

- `substitutions`、デバイス名、フレンドリーネーム。
- `wifi`、`api`、`ota` のシークレット。
- `font` の種類とサイズ。
- 描画したいデータを提供する Home Assistant の `sensor`、`binary_sensor`、`text_sensor`、または `time` エンティティ。
- `display.lambda` ブロック。ここで実際の電子ペーパー画面レイアウトを設計します。
- `update_interval`、ボタンによるリフレッシュ、ディープスリープのタイミングなどのリフレッシュ動作。

## ステップ 3: Home Assistant に接続する

ファームウェアが起動して Wi-Fi に接続されると、Home Assistant が自動的にデバイスを検出します：

1. **Settings → Devices & services**
2. ESPHome インテグレーションに、あなたのデバイス用の「Discovered」カードが表示されます。
3. **Configure** をクリックし、API 暗号化キー（`secrets.yaml` から）を貼り付けて送信します。
4. デバイスと、そのすべてのエンティティ（sensors、binary_sensors、display）が HA で利用可能になります。

これでエンティティを Lovelace ダッシュボードにドラッグすることもできますし、電子ペーパーではさらに面白いことに、`display.lambda` ブロックを使って [`homeassistant`](https://esphome.io/components/homeassistant.html) コンポーネント経由で任意の HA エンティティを直接画面に描画することもできます。

## 次のステップ — クックブック

このページは意図的にボイラープレートまでで止めています。製品固有の YAML、周辺機器の例、エンドツーエンドのレシピは、各製品のクックブックにまとめられています：

- **[reTerminal E シリーズ — ESPHome Display](/ja/reterminal_e10xx_with_esphome)** — E1001/E1002/E1003/E1004 向けの最初のダッシュボード、Wi-Fi 設定、電子ペーパー描画の例。
- **[reTerminal E シリーズ — ESPHome I/O, Battery & Power](/ja/reterminal_e10xx_with_esphome_advanced)** — ボタン、ブザー、オンボード LED、バッテリー監視、SHT4x センサ、ディープスリープ、マルチページダッシュボード。
- **[reTerminal E1001 / E1002 — ESPHome RTC, SD & Microphone](/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone)** — PCF8563 RTC の時刻同期、microSD カードの電源/検出ピン、オンボード PDM マイクのセットアップ。
- **[EE04 driver board — ESPHome](/ja/EE04_with_esphome_advanced)** — XIAO ESP32-S3 + EE04 + 任意の電子ペーパー画面による完全な Home Assistant 連携。
- **[XIAO 7.5" ePaper Panel — ESPHome](/ja/xiao_075inch_epaper_panel_esphome)** — 最小構成の ESP32-C3 ダッシュボード。
- **[TRMNL 7.5" DIY Kit — ESPHome](/ja/ogdiy_kit_works_with_esphome)** — TRMNL クラウドプラットフォームの代わりに、ESPHome でキットのハードウェアを使用する方法。

新しい電子ペーパー製品が出荷されると、対応するクックブックが各製品フォルダの下に追加され、このメインページからのリンクも更新されます。

## よくある問題



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
