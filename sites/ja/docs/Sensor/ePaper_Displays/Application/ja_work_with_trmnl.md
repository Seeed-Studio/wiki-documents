---
description: 任意の互換性のある Seeed ePaper 製品（reTerminal E1001、E1002、E1003、TRMNL 7.5" (OG) DIY Kit、または XIAO 7.5" ePaper Panel）で TRMNL を使用します。
title: TRMNL を使う
keywords:
  - ePaper ディスプレイ
  - TRMNL
  - reTerminal
  - reTerminal E1003
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sidebar_position: 3
last_update:
  date: 06/22/2026
  author: dimo
aliases:
  - /ogdiy_kit_works_with_trmnl
  - /xiao_7_5_inch_epaper_panel_with_trmnl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl/
updatedAt: '2026-06-22'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TRMNL を使う

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

このガイドは、互換性のある任意の Seeed ePaper 製品で **TRMNL** を使用するための唯一の信頼できる情報源です。各ステップで必要なときに一度だけハードウェアを選択すれば、残りのワークフローはすべて同じです。

:::caution ハードウェアサポート
TRMNL は公式に **reTerminal E1001**、**reTerminal E1002**、**reTerminal E1003**、**TRMNL 7.5" (OG) DIY Kit**、および **XIAO 7.5" ePaper Panel** をサポートしています。**E1002** では現在、コンテンツは **モノクロモード** で描画されます — フルカラー描画は今後のリリースで提供される予定です。**E1003** の静電容量式タッチパネルは SenseCraft HMI ファームウェアでのみ利用可能であり、TRMNL ファームウェアでは本体の物理ボタンを使用します。
:::

## [TRMNL](https://trmnl.app/) とは？

TRMNL は、ますます気が散りやすくなっているデジタル世界の中で、人々が集中力と落ち着きを保てるように設計された革新的なプラットフォームです。2023 年に設立されて以来、TRMNL は E Ink® ダッシュボード管理のリーディングソリューションとなり、従来の画面のような絶え間ない通知や気晴らしなしに情報を表示する、ユニークなアプローチを提供しています。

TRMNL の中核にあるのは、テクノロジーは常に注意を要求するのではなく、私たちの生活を向上させるべきだという哲学です。このプラットフォームは、E Ink® ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、よりマインドフルで侵入性の低いテクノロジー体験を実現します。

### なぜ TRMNL を使うのか？

- **ダッシュボード作成の簡素化**：TRMNL の拡大し続けるアプリと連携機能のライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます。
- **低消費電力**：TRMNL の効率的なソフトウェアと E Ink® の最小限の電力要件を組み合わせることで、非常に省エネルギーなソリューションを実現します。
- **気が散らない情報表示**：通知や目の疲れに悩まされることなく、必要な情報を取得できます。
- **定期的なアップデート**：TRMNL は活発に開発されており、新機能や連携機能が毎週追加されています。
- **開発者フレンドリー**：TRMNL のオープンな API と開発者ツールにより、カスタムプラグインや連携機能を実装できます。

## 対応ハードウェア

### reTerminal E シリーズ

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:160, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:160, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:160, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" モノクロ<br/>一体型ターミナル</td>
      <td align="center">7.3" Spectra 6（カラー）<br/>一体型ターミナル<br/>TRMNL ではモノクロモード</td>
      <td align="center">10.3" モノクロ<br/>16 階調グレースケール<br/>一体型ターミナル</td>
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
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### TRMNL DIY Kit と XIAO パネル

<div class="table-center">
  <table align="center">
    <tr>
      <th>TRMNL 7.5" (OG) DIY Kit</th>
      <th>XIAO 7.5" ePaper Panel</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" モノクロ + DIY ケース<br/>XIAO ESP32-S3 Plus ドライバ</td>
      <td align="center">7.5" モノクロ裸パネル<br/>XIAO ESP32-C3 へ直接接続</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ 1: TRMNL アカウントのセットアップと BYOD アクセス

デバイスを TRMNL に接続する前に、TRMNL アカウントと BYOD（Bring Your Own Device）アクセスが必要です — ハードウェアに関係なくフローは同じです。

1. **TRMNL アクセスを購入する**

   - TRMNL Web アプリとデバイス機能へのアクセスを次のサイトで購入します: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - これにより、TRMNL プラットフォームを利用するために必要な認証情報が提供されます。
   - [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) にアクセスして仮想デバイスを有効化します（購入後、有効化まで最大 10 分かかる場合があります）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **TRMNL アカウントを作成する**

   - [TRMNL の Web サイト](https://usetrmnl.com) にアクセスします
   - 新しいアカウントを作成するために "Sign Up" をクリックします。
   - 画面の指示に従って登録プロセスを完了します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
あなたの TRMNL 認証情報は機密情報です。決して公開したり、バージョン管理システムにコミットしたりしないでください。
:::

問題が発生した場合は、[team@usetrmnl.com](mailto:team@usetrmnl.com) から TRMNL チームに直接連絡してください。

## ステップ 2: ハードウェアのセットアップ

reTerminal E シリーズと XIAO 7.5" パネルはあらかじめ組み立て済みであり、電源を入れるだけで使用できます。TRMNL DIY Kit は組み立てが必要です。

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003" default>

reTerminal E シリーズは完全に一体化されています。USB-C ケーブルを接続し、電源スイッチを **ON** にスライドして電源を入れるだけです。組み立て手順は不要です。

:::tip reTerminal E1003 のみ
デバイスがスリープ状態で反応しない場合は、USB 接続やフラッシュモードに入る前に、本体上部の **Refresh** ボタンを押してウェイクアップしてください。
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**ステップ 1. ディスプレイをドライバボードに接続する**  
FPC ケーブルを XIAO ePaper Display Board 上のコネクタに合わせ、ラッチを固定して確実に接続されていることを確認します。

:::tip
FPC ケーブルの金属面は上向きにする必要があります。向きが逆だとコンテンツは表示されません。多くの人がここで間違えるため、必ず以下の取り付け動画に従ってください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーを取り付ける**  
バッテリーケーブルをドライバボード上の JST コネクタに接続し、極性が正しいことを確認します（赤い線を +、黒い線を - に接続）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 3. エンクロージャの組み立て（任意）**

:::tip
画面のフレキシブルケーブルは非常に繊細です。作業時は注意してください。損傷すると、画面全体が動作しなくなります。
:::

[Resources](#resources) セクションからオープンソースのエンクロージャ部品を印刷し、その中に各コンポーネントを組み込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

まず、ドライバボードとバッテリーを組み立てます：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

TRMNL キットをテストします：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

ケースに画面を差し込み、FPC ケーブルを外側に引き出します：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

FPC延長ケーブルを接続し、ケース全体を組み立てます：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

L字型エンクロージャの組み立てもほぼ同様です：

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

:::tip
TRMNLキットがルーターから離れている場合は、アンテナをケースの外に取り回すことで、より良い信号性能が得られます。
:::

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; パネル">

XIAO 7.5インチ ePaper パネルは、XIAO ESP32-C3がパネルに直接接続された状態で出荷されます。USB-Cで接続するだけで使用でき、追加の組み立ては不要です。

</TabItem>
</Tabs>

## ステップ3：TRMNLファームウェアを書き込む

3つの書き込み方法が利用できます。**方法1（Web Flasher）**が最も簡単で、サポートされているすべてのハードウェアで動作します。**方法2（reTerminal E-Series Firmware Flasher）**はreTerminal E シリーズ専用です。**方法3（ソースからビルド）**は上級ユーザー向けです。

:::tip 新品のTRMNL DIYキットにはすでにTRMNLファームウェアが書き込まれています
新品のTRMNL 7.5インチ（OG）DIYキットを購入した場合、すでにTRMNLファームウェアがプリインストールされています。その場合、この書き込みステップは完全にスキップしてステップ4に進むことができます。
:::

### 方法1：TRMNL Web Flasher（推奨）

TRMNL Web Flasherはブラウザ上で直接動作し、このページにあるすべてのデバイスをサポートします。

1. [https://usetrmnl.com/flash](https://usetrmnl.com/flash) にアクセスします。
2. デバイスをUSB-Cで接続し、画面の指示に従います。
3. 使用しているハードウェアに対応するファームウェアを選択します：

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003" default>

- **reTerminal E1001 / E1002**：Seeedとの互換性のために **FW 1.6.7以降** を使用してください。
- **reTerminal E1003**：ファームウェア一覧で **reTerminal E1003** を選択し、**FW 1.8.7以降** を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/258.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

TRMNL DIY Kitでは、Seeedとの互換性のために **FW 1.5.12以降** を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/259.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; パネル">

XIAO 7.5インチ ePaper パネルでは、Seeedとの互換性のために **FW 1.5.12以降** を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/260.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 方法2：reTerminal E-Series Firmware Flasherで書き込む（reTerminal E シリーズのみ）

:::info
この方法が適用できるのは **reTerminal E1001 / E1002 / E1003** のみです。reTerminal E-Series Firmware Flasherは、これら3つのreTerminal E シリーズデバイス向けのTRMNLファームウェアパッケージを提供します。
:::

:::caution 新しいTRMNLファームウェアには方法1を優先してください
reTerminal E-Series Firmware Flasherは、reTerminal E シリーズデバイス向けにSeeedがホストするTRMNLファームウェアチャネルを提供します。ただし、このチャネルは公式のTRMNL Web Flasherほど頻繁には更新されず、すべての上流TRMNLファームウェアリリースがここに同期されるわけではありません。

より新しいTRMNLファームウェアリリースが必要な場合は、まず[方法1：TRMNL Web Flasher](#方法1-trmnl-web-flasher推奨)を使用してください。SeeedホストのreTerminal E シリーズ向け書き込みフローが必要な場合に、この方法を使用します。
:::

<details>
<summary>クリックしてreTerminal E-Series Firmware Flasherの手順を展開</summary>

1. [reTerminal E-Series Firmware Flasher](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) にアクセスします。

2. **Select platform** で、公式プラットフォームセクションから **TRMNL** カードを選択します。

3. デバイスを選択します：

   - **reTerminal E1001**
   - **reTerminal E1002**
   - **reTerminal E1003**

4. 2ページ目で、選択したデバイス向けに利用可能なTRMNLファームウェアバージョンを確認します。

5. デバイスをUSBデータケーブルでコンピュータに接続します。

6. **Flash to device** で、初回インストール時は **Erase flash + flash** を選択し、**Connect & flash** をクリックします。

7. ブラウザのプロンプトでデバイスのシリアルポートを選択し、書き込みプロセスを開始します。

:::tip 初回の書き込み
初回インストール時は、デバイスをクリーンなファームウェア状態から起動させるために **Erase flash + flash** を選択してください。
:::

:::tip reTerminal E1003のみ
電源スイッチが**ON**になっていることを確認してください。デバイスがスリープ状態で書き込みが開始されない場合は、本体上部の **Refresh** ボタンを押してウェイクアップし、再試行してください。
:::

:::note reTerminal E1002のディスプレイ動作
reTerminal E1002はフルカラーのePaperスクリーンを使用していますが、TRMNLファームウェアは現在コンテンツをモノクロモードで描画します。Wi-Fiプロビジョニング中、E1002のAP画面には右下にTRMNLロゴがあるコンパクトなレイアウトが表示されます。この画面が表示されたら、E1002のホットスポットを検索して接続し、他のデバイスと同じWi-Fiセットアップフローを続行してください。
:::

書き込みが完了したら、[ステップ4：デバイスをWi-Fiに接続](#ステップ4-configure-wi-fi-and-provision-the-device)に進みます。

</details>

### 方法3：ソースからビルドして書き込む（上級者向け）

1. **ファームウェアリポジトリをクローンする**

   - [公式ファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware)にアクセスし、クローンします：

     ```bash
     git clone https://github.com/usetrmnl/trmnl-firmware.git
     ```

   :::tip
   当社からTRMNL上流へのPRがレビュー中の場合があります。最新のSeeed側パッチが必要な場合は、代わりにSeeedミラーを使用してください：

   ```bash
   git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
   ```
   :::

2. **[PlatformIO](https://platformio.org/)** をVS Code拡張機能として、またはコマンドラインからインストールします。

3. **プロジェクトを開く**：クローンした `firmware` フォルダをVS Codeで開きます。

4. **ハードウェアに合ったPlatformIO環境を選択します**：

   <Tabs groupId="trmnl-hardware">
   <TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003" default>

   `platformio.ini` で：

   - **reTerminal E1001** の場合は、`seeed_reTerminal_E1001` 環境を選択します。
   - **reTerminal E1002** の場合は、`seeed_reTerminal_E1002` 環境を選択します（TRMNLはE1002上でコンテンツをモノクロで描画します）。
   - **reTerminal E1003** の場合は、[公式TRMNLファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware)内の `TRMNL_X_E1003` 環境を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

   `platformio.ini` で、`TRMNL_7inch5_OG_DIY_Kit` 環境を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="xiao-075-panel" label="XIAO 7.5&quot; パネル">

   `platformio.ini` で、`seeed_xiao_esp32c3` 環境を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. デバイスをUSB-Cで**接続します**。

6. **ビルドして書き込む**：PlatformIOの **Upload** ボタンをクリックするか、次を実行します：

   ```bash
   pio run --target upload
   ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

## ステップ4：Wi-Fiを設定してデバイスをプロビジョニングする

Wi-Fiプロビジョニングのワークフローは、サポートされているすべてのハードウェアで同一です。

> 💡 **Wi-Fi接続で問題がありますか？** [TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) を参照してください。

### 電源を入れてプロビジョニングモードに入る

TRMNLファームウェアを書き込み、デバイスの電源を入れると、まだWi-Fiに接続されていない場合は自動的にプロビジョニングモードに入ります。

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; パネル">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### TRMNLのWi-Fiに接続する

スマートフォンまたはコンピュータで、利用可能なWi-Fiネットワーク一覧を開きます。**TRMNL** という名前のネットワークを探して接続します（デフォルトではパスワード不要）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

接続後、Webブラウザを開きます。デバイスは自動的にTRMNLの設定ページへリダイレクトするはずです。そうならない場合は、手動で [http://4.3.2.1](http://4.3.2.1) にアクセスしてください。

### Wi-Fi認証情報を入力する

- **2.4 GHz Wi-Fiネットワーク** を選択します（5 GHzネットワークはサポートされていません）。
- Wi-Fiパスワードを入力し、**Save** / **Connect** をクリックします。

> ⚠️ **重要:** 必ず 2.4 GHz の Wi-Fi ネットワークを使用してください。これらのデバイス上の ESP32-C3 / ESP32-S3 チップは 5 GHz ネットワークをサポートしません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスがネットワークに参加する

デバイスは TRMNL Wi-Fi から切断され、自宅のネットワークに参加します。キャプティブポータルウィンドウにはデバイスの MAC アドレスが表示されます。**MAC アドレスを必ず控えてください** — 次のステップで必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意:** MAC アドレスはキャプティブポータル上に 1〜2 秒間しか表示されません。見逃してしまった場合は、次の方法でも確認できます：
>
> - VS Code → PlatformIO のビルド／アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash) の方法を使い、フラッシュ中にブラウザの開発者コンソールを確認する。
> - ルーターまたはメッシュネットワークアプリの接続デバイス一覧から探す。
>
> 公式ガイドも参照してください: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)。

## ステップ 5: TRMNL 上でデバイスを登録する

デバイスが Wi-Fi に接続され、MAC アドレスが分かったら、TRMNL の Web インターフェースで登録します：

1. **TRMNL Web インターフェース** [https://trmnl.app](https://trmnl.app) を開きます。
2. **Devices ページ** に移動します。
3. **新しいデバイスを追加** します（右上またはページ中央のボタン）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. BYOD アクセスを購入したときに受け取った **Device ID** を入力します（これは MAC アドレスではありません — Device ID は購入確認メールまたは TRMNL ダッシュボードで確認できます）。**Add new device** をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. デバイス設定ページで **デバイスの MAC アドレスを紐付け** ます：

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   ここでカスタム名を設定したり、その他の設定を調整したりすることもできます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

これでデバイスは TRMNL アカウントにリンクされました！TRMNL インターフェースからプレイリスト、画像、その他のコンテンツを直接送信できるようになります。

> 💡 **ヒント:** 複数のデバイスがある場合は、それぞれ固有の Device ID を使って上記の手順を繰り返してください。

:::caution ファームウェア早期リリースと OTA アップデートを無効化する
TRMNL Web インターフェースにデバイスを追加したら、デバイスの設定ページに移動し、**Firmware Early Release** と **OTA Updates Enabled** の両方を**オフ**にします。

有効のままにしておくと、Seeed デバイスと**互換性のない**公式 TRMNL ハードウェア向けのファームウェアアップデートを自動的にダウンロードしてしまう可能性があります。互換性のないファームウェアをインストールすると、デバイスが誤動作したり、応答しなくなったりするおそれがあります。

安定した動作を確保するため、常に両方のオプションを無効のままにしておいてください。
:::

## ボタンの使い方

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

reTerminal E1001 と E1002 では、TRMNL ファームウェアの下でユーザーが操作できるボタンは 1 つだけです：

- **Green Button — 5 秒間長押し**: Wi-Fi 再設定モードに入ります。
- **Reset ボタン**: シングルクリックでデバイスを再起動します。

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

reTerminal E1003 では、TRMNL ファームウェアの下で上部に 3 つのボタンがあります：

- **Refresh ボタン — シングルプレス**: デバイスを起動するか、現在の画面を即座に更新します。
- **Page Up + Page Down — 2 秒間長押し**: Wi-Fi 再設定モードに入ります。
- **電源スイッチ**: **OFF** にしてから **ON** にスライドしてデバイスを再起動します。

:::note
静電容量式タッチは SenseCraft HMI ファームウェアでのみサポートされています。TRMNL ファームウェアはタッチパネルを使用せず、すべての操作は上記の物理ボタンで行います。
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

XIAO ePaper Display Board には 4 つのボタン（RESET / KEY1 / KEY2 / KEY3）があります。**TRMNL ファームウェアで使用されるのは RESET と KEY3 のみです。**

**KEY3 の使い方:**

1. **シングルクリック**: ページを即座に更新します。
2. **ダブルクリック**: カスタム機能 — TRMNL の設定ページから構成します。
3. **長押し（約 5 秒）**: ネットワークを再設定します。

**RESET の使い方**: シングルクリックでデバイスをリセットします。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO ESP32-C3 には標準の **RESET** ボタンと **BOOT** ボタンがあります。

- **Reset → 離す → BOOT を 5 秒間押し続ける**: ネットワークを再設定します（TRMNL プロビジョニングポータルに戻ります）。
- **RESET シングルクリック**: デバイスを再起動します。

</TabItem>
</Tabs>

## TRMNL プレイリストを理解する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL プレイリストは、ePaper デバイスに「何を」「いつ」表示するかを正確に制御します。

### プレイリストの概要

- **Playlist Title**: TRMNL デバイスの名前。
- **Display Time Range**: プレイリストが有効な時間帯（例: 00:00–23:45）。
- **Update Interval**: ディスプレイを更新する頻度（例: 5 分ごと）。
- **Add a Group / Add a Plugin**: プレイリストをグループに整理したり、新しいコンテンツプラグインを追加したりします。

### プレイリスト項目

各行は、デバイスに表示される画面またはウィジェットです。例：

1. **Weather** — 現在地の天気情報。
2. **Days Left This Year** — 今年残りの日数のカウントダウン。
3. **Custom Text** — 任意のメッセージを表示（例: "Hello World"）。

各項目について：

- **Settings（歯車アイコン）**: プラグインのオプションを設定します。
- **Delete（X アイコン）**: プレイリストから項目を削除します。
- **Preview（目のアイコン）**: 画面がどのように表示されるかをプレビューします。
- **Reorder（バーアイコン）**: ドラッグして順序を変更します。

### スマートプレイリスト

一番下で、内容が変化していない画面を自動的にスキップするかどうかを選択できます。詳細は [Smart Playlists のブログ記事](https://usetrmnl.com/blog/smart-playlists)を参照してください。

## TRMNL プラグインを探索する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

プラグインはモジュール式のコンテンツブロックで、天気、カレンダーイベント、株価、RSS フィード、モチベーションを高める名言、GitHub アクティビティなど、さまざまな情報を表示できます。

### 接続済みプラグイン

Plugins ページの上部には、すでに TRMNL アカウントに接続されているすべてのプラグインが表示されます。例として、Weather、Days Left This Year、Stock Price、RSS Feed、Reddit、Hacker News、Language Learning、Motivational Quote、Custom Text などがあります。

### プラグインマーケットプレイス

接続済みプラグインの下にはマーケットプレイスがあります。プラグインはカテゴリやタグ（#productivity、#news、#ecommerce など）ごとに整理されています。ブラウズや検索を行い、任意のプラグインをクリックしてアカウントに接続します。

開発者は独自のプラグインを作成して公開することもできます。詳細は [plugin marketplace docs](https://docs.usetrmnl.com/go/plugin-marketplace/introduction) を参照してください。

より高度な機能については、公式 TRMNL ドキュメントを参照してください: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)。

## FAQ

### Q1: ネットワークを再設定するにはどうすればよいですか？

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

**Green Button** を 5 秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP を有効にします。

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

**Page Up** と **Page Down** を同時に 2 秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP を有効にします。

画面がスリープしている場合は、まず **Refresh** ボタンを 1 回押してデバイスを起動してください。

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**KEY3**（Reset ボタンの隣）を 5 秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP を有効にします。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO 上の **Reset** ボタンを押して離し、その後 **BOOT** ボタンを 5 秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP を有効にします。

</TabItem>
</Tabs>

### Q2: 画面に常にバッテリー残量低下の警告が表示される場合はどうすればよいですか？

この画面は 2 つの異なる状況で表示される可能性があります：

1. **実際にバッテリー電圧が低い場合。** これが最も一般的なケースで、デバイスが本当に充電を必要としている状態です。電源に接続するか、バッテリーを交換／充電すると、電圧が回復した時点で警告は消えるはずです。

2. **TRMNL のサーバー側の問題。** バッテリー残量はデバイスだけでなく TRMNL のサーバー側でも評価されます。サーバーのバグや最近のプラットフォームアップデートにより、ハードウェアに問題がなくてもバッテリーステータスが誤って報告され、警告が表示され続ける場合があります。

**バッテリーが本当に低下している場合** は、まずデバイスを充電してください — バッテリーパックが健全であることを確認するまでは警告を非表示にしないでください。

**バッテリーに問題がないと確信しているのに** 警告が消えない場合でも、ファームウェアを変更する必要は**ありません**。TRMNL では、Web ダッシュボードから画面上のプロンプトを抑制できます：

**ステップ 1.** [TRMNL Web インターフェース](https://trmnl.app) を開き、**Devices** に移動します。

**ステップ 2.** 該当するデバイスを選択し、その **Battery** 設定を開きます。

**ステップ 3.** **Hide Low Battery Screen** をオンにします。これにより、TRMNL のサーバー側のバッテリー検出が回復するまで、またはプレイリスト画面を維持したい場合に、デバイス上にバッテリー残量低下の警告画面が表示されなくなります。

**ステップ 4.** （任意）ディスプレイを中断することなくメールアラートを受け取りたい場合は、**Low Battery Email Notification** を有効のままにしておきます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/261.png" style={{width:800, height:'auto'}}/></div>

### Q3: Web Flasher / PlatformIO がデバイスを検出できない、またはアップロードに失敗する

誤ったプログラムが原因で、XIAO のポートが認識されなくなったり、正しく動作しなくなることがあります：

- XIAO は接続されているが、**ポート番号** が見つからない。
- XIAO は接続されておりポートも表示されるが、**アップロードに失敗する**。

XIAO を BootLoader モードにして復旧します：

- **ステップ 1**：XIAO ESP32-S3 / ESP32-C3 上の `BOOT` ボタンを離さずに押し続けます。
- **ステップ 2**：`BOOT` を押したまま、USB-C でデバイスをコンピュータに接続します。接続が完了したら `BOOT` を離します。
- **ステップ 3**：アップロード / フラッシュを再実行します。ほとんどの「デバイスが認識されない」または「アップロードに失敗した」という問題は、これで解決します。

## 特別な謝辞

この統合全体にわたり、多大な支援と貴重な助力をいただいた **TRMNL チーム全員** に心より感謝いたします。特に、開発およびドキュメント作成の期間を通じて献身的に取り組んでくださった **Bogdan**、**Ryan Kulp**、**Fr3d**、**Schappi**、および他のすべてのチームメンバーの皆様に感謝いたします。

彼らの専門知識により、この統合が実現し、reTerminal E シリーズ（E1001、E1002、E1003）、TRMNL DIY Kit、そして XIAO 7.5" ePaper Panel コミュニティの体験が大きく向上しました。

## リソース

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003" default>

- **[GitHub]** [Seeed_TRMNL_Eink_Project](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[GitHub]** [Official TRMNL firmware](https://github.com/usetrmnl/trmnl-firmware)
- **[Wiki]** [Getting Started with reTerminal E1003](/ja/getting_started_with_reterminal_e1003)

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

- **[Firmware]** [TRMNL ePaper Library (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Printable]** [Triangular base](https://www.printables.com/model/1354873)
- **[Printable]** [Protected triangular base](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)
- **[Printable]** [L-shaped base](https://www.printables.com/model/1354879)
- **[Thingiverse]** [Triangular base](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [Protected triangular base](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L-shaped base](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [Triangular base](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [Protected triangular base](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L-shaped base](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

- **[STP]** [3D Model enclosure](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]** [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GitHub]** [TRMNL firmware repository](https://github.com/usetrmnl/firmware)
- **[GitHub]** [Seeed_TRMNL_Eink_Project repository](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

</TabItem>
</Tabs>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
