---
description: 互換性のある任意の Seeed ePaper 製品（reTerminal E1001、E1002、E1003、E1004、TRMNL 7.5" (OG) DIY Kit、XIAO 7.5" ePaper Panel）で TRMNL を使用します。
title: TRMNL を使う
keywords:
  - ePaper ディスプレイ
  - TRMNL
  - reTerminal
  - reTerminal E1003
  - reTerminal E1004
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sidebar_position: 3
last_update:
  date: 08/05/2026
  author: dimo
aliases:
  - /ogdiy_kit_works_with_trmnl
  - /xiao_7_5_inch_epaper_panel_with_trmnl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl/
updatedAt: '2026-08-05'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TRMNL を使う

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

このガイドは、互換性のある任意の Seeed ePaper 製品で **TRMNL** を使用するための唯一の信頼できる情報源です。各ステップで必要な箇所だけ一度ハードウェアを選択すれば、残りのワークフローはすべて同一です。

:::caution ハードウェアサポート
TRMNL は公式に **reTerminal E1001**、**reTerminal E1002**、**reTerminal E1003**、**reTerminal E1004**、**TRMNL 7.5" (OG) DIY Kit**、**XIAO 7.5" ePaper Panel** をサポートしています。**E1002** と **E1004** はフルカラーの Spectra™ 6 パネルを搭載していますが、TRMNL ファームウェアはそのコンテンツを**モノクロモード**で描画します。**E1003** の静電容量式タッチパネルは SenseCraft HMI ファームウェアでのみ利用可能であり、TRMNL ファームウェアではデバイス上の物理ボタンを使用します。
:::

## [TRMNL](https://trmnl.app/) とは？

TRMNL は、ますます気が散りやすくなっているデジタル世界の中で、人々が集中と心の落ち着きを保てるよう設計された革新的なプラットフォームです。2023 年に設立されて以来、TRMNL は E Ink® ダッシュボード管理のリーディングソリューションとなり、従来の画面のような絶え間ない通知や気を散らす要素なしに情報を表示する、ユニークなアプローチを提供しています。

TRMNL の中核には、「テクノロジーは絶えず注意を要求することなく、私たちの生活を向上させるべきだ」という哲学があります。このプラットフォームは、E Ink® ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、よりマインドフルで侵入性の低いテクノロジー体験を実現します。

### なぜ TRMNL を使うのか？

- **ダッシュボード作成の簡素化**: TRMNL の拡大し続けるアプリと連携機能のライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます。
- **低消費電力**: TRMNL の効率的なソフトウェアと E Ink® の最小限の電力要件を組み合わせることで、非常に省エネルギーなソリューションになります。
- **気が散らない情報表示**: 通知や目の疲れに悩まされることなく、必要な情報だけを取得できます。
- **定期的なアップデート**: TRMNL は活発に開発されており、新機能や連携機能が毎週追加されています。
- **開発者フレンドリー**: TRMNL のオープンな API と開発者ツールにより、カスタムプラグインや連携機能を作成できます。

## 対応ハードウェア

### reTerminal E シリーズ

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
      <td align="center">7.5" モノクロ<br/>一体型ターミナル</td>
      <td align="center">7.3" Spectra 6（カラー）<br/>一体型ターミナル<br/>TRMNL ではモノクロモード</td>
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
      <td align="center">10.3" モノクロ<br/>16 階調グレースケール<br/>一体型ターミナル</td>
      <td align="center">13.3" Spectra 6（カラー）<br/>一体型ターミナル<br/>TRMNL ではモノクロモード</td>
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
   - [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) にアクセスして仮想デバイスを有効化します（購入後、反映まで最大 10 分かかる場合があります）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **TRMNL アカウントを作成する**

   - [TRMNL の Web サイト](https://usetrmnl.com) にアクセスします
   - "Sign Up" をクリックして新しいアカウントを作成します。
   - 画面の指示に従って登録プロセスを完了します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
あなたの TRMNL 認証情報は機密情報です。決して公開したり、バージョン管理システムにコミットしたりしないでください。
:::

問題が発生した場合は、[team@usetrmnl.com](mailto:team@usetrmnl.com) から TRMNL チームに直接連絡してください。

## ステップ 2: ハードウェアのセットアップ

reTerminal E シリーズと XIAO 7.5" パネルはあらかじめ組み立て済みであり、電源を入れるだけで使用できます。TRMNL DIY Kit は組み立てが必要です。

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

reTerminal E シリーズは完全に一体化されています。USB-C ケーブルを接続し、電源スイッチを **ON** にスライドして電源を入れるだけです。組み立て作業は不要です。

:::tip reTerminal E1003 のみ
デバイスがスリープ状態で反応しない場合は、USB 接続や書き込みモードに入る前に、本体上部の **Refresh** ボタンを押してウェイクアップしてください。
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**ステップ 1. ディスプレイをドライバボードに接続する**  
FPC ケーブルを XIAO ePaper Display Board 上のコネクタに合わせ、ラッチを固定して確実に接続されていることを確認します。

:::tip
FPC ケーブルの金属面は上向きにする必要があります。向きが逆だと何も表示されません。多くの人がここで間違えるため、必ず以下の取り付け動画に従ってください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーを取り付ける**  
バッテリーケーブルをドライバボード上の JST コネクタに接続し、極性が正しいことを確認します（赤い線を +、黒い線を - へ）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 3. エンクロージャの組み立て（任意）**

:::tip
画面のフレキシブルケーブルは非常に繊細です。作業時は十分注意してください。損傷すると画面全体が動作しなくなります。
:::

[Resources](#resources) セクションからオープンソースのエンクロージャ部品を印刷し、その中に各コンポーネントを組み込んでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

まず、ドライバーボードとバッテリーを組み立てます：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

TRMNL キットをテストします：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

画面をケースに差し込み、FPC ケーブルを外側に取り回します：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

FPC 延長ケーブルを接続し、ケース全体を組み立てます：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

L 字型エンクロージャの組み立てもほぼ同様です：

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

:::tip
TRMNL キットがルーターから遠い場合は、アンテナをケースの外に取り回すことで、電波状態を改善できます。
:::

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; パネル">

XIAO 7.5" ePaper Panel は、XIAO ESP32-C3 がパネルに直接接続された状態で出荷されます。USB-C で接続するだけで使用でき、追加の組み立ては不要です。

</TabItem>
</Tabs>

## ステップ 3: TRMNL ファームウェアを書き込む

3 つの書き込み方法が利用できます。**方法 1（Web Flasher）** が最も簡単で、サポートされているすべてのハードウェアで動作します。**方法 2（reTerminal E-Series Firmware Flasher）** は reTerminal E シリーズ専用です。**方法 3（ソースからビルド）** は上級ユーザー向けです。

:::tip 新品の TRMNL DIY キットにはすでに TRMNL ファームウェアが書き込まれています
新品の TRMNL 7.5"（OG）DIY キットを購入した場合、すでに TRMNL ファームウェアがプリインストールされているため、この書き込みステップを完全にスキップしてステップ 4 に進むことができます。
:::

### 方法 1: TRMNL Web Flasher（推奨）

TRMNL Web Flasher はブラウザ上で直接動作し、このページにあるすべてのデバイスをサポートします。

1. [https://usetrmnl.com/flash](https://usetrmnl.com/flash) にアクセスします。
2. デバイスを USB-C で接続し、画面の指示に従います。
3. 使用しているハードウェアに合ったファームウェアを選択します：

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **reTerminal E1001 / E1002**: Seeed との互換性のために **FW 1.6.7 以降**を使用してください。
- **reTerminal E1003**: ファームウェア一覧で **reTerminal E1003** を選択し、**FW 1.8.7 以降**を使用してください。
- **reTerminal E1004**: ファームウェア一覧で **reTerminal E1004** を選択し、**FW 1.8.10 以降**を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/258.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY キット">

TRMNL DIY キットで Seeed との互換性を確保するには、**FW 1.5.12 以降**を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/259.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; パネル">

XIAO 7.5" ePaper Panel で Seeed との互換性を確保するには、**FW 1.5.12 以降**を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/260.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 方法 2: reTerminal E-Series Firmware Flasher で書き込む（reTerminal E シリーズのみ）

:::info
この方法は **reTerminal E1001 / E1002 / E1003 / E1004** に適用できます。（**FW 1.8.10** 以降）。
:::

:::caution 新しい TRMNL ファームウェアには方法 1 を優先してください
reTerminal E-Series Firmware Flasher は、reTerminal E シリーズ向けに Seeed がホストする TRMNL ファームウェアチャンネルを提供します。ただし、このチャンネルは公式の TRMNL Web Flasher ほど頻繁には更新されず、すべての上流 TRMNL ファームウェアリリースがここに同期されるわけではありません。

より新しい TRMNL ファームウェアリリースが必要な場合は、まず [方法 1: TRMNL Web Flasher](#method-1-trmnl-web-flasher-recommended) を使用してください。Seeed ホストの reTerminal E シリーズ向け書き込みフローが必要な場合に、この方法を使用します。
:::

<details>
<summary>クリックして reTerminal E-Series Firmware Flasher の手順を展開</summary>

1. [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) にアクセスします。E1004 TRMNL への直接リンクとして、[E1004 TRMNL 1.8.10 Hub link](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/?platform=trmnl&device=E1004&firmware=TRMNL_reTerminal_E1004&version=1.8.10) を開くこともできます。

2. **Select platform** で、公式プラットフォームセクションから **TRMNL** カードを選択します。

3. デバイスを選択します：

   - **reTerminal E1001**
   - **reTerminal E1002**
   - **reTerminal E1003**
   - **reTerminal E1004**

4. 2 ページ目で、選択したデバイス向けに利用可能な TRMNL ファームウェアバージョンを確認します（E1004 の場合は **1.8.10 以降**を使用してください）。

5. デバイスを USB データケーブルでコンピュータに接続します。

6. **Flash to device** で、初回インストール時は **Erase flash + flash** を選択し、**Connect & flash** をクリックします。

7. ブラウザのプロンプトでデバイスのシリアルポートを選択し、書き込みプロセスを開始します。

:::tip 初回の書き込み
初回インストールでは **Erase flash + flash** を選択し、デバイスをクリーンなファームウェア状態から起動させてください。
:::

:::tip reTerminal E1003 のみ
電源スイッチが **ON** になっていることを確認してください。デバイスがスリープ状態で書き込みが開始されない場合は、本体上部の **Refresh** ボタンを押してウェイクアップし、再試行してください。
:::

:::note reTerminal E1002 / E1004 の表示動作
reTerminal E1002 はフルカラー ePaper スクリーンを使用していますが、TRMNL ファームウェアは現在、E1002 のコンテンツをモノクロモードで描画します。Wi-Fi プロビジョニング中、E1002 の AP 画面には右下に TRMNL ロゴがあるコンパクトなレイアウトが表示されます。この画面が表示されたら、E1002 のホットスポットを検索して接続し、他のデバイスと同じ Wi-Fi セットアップフローを続行してください。

reTerminal E1004 もフルカラーの Spectra™ 6 パネルを使用していますが、TRMNL ファームウェアは同様にコンテンツをモノクロモードで描画します。正しいパネルが使用されるよう、フラッシャーで **reTerminal E1004** を選択してください。
:::

書き込みが完了したら、[ステップ 4: デバイスを Wi-Fi に接続](#step-4-connect-device-to-wi-fi) に進みます。

</details>

### 方法 3: ソースからビルドして書き込む（上級者向け）

1. **ファームウェアリポジトリをクローンする**

   - [公式ファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware) にアクセスし、クローンします：

     ```bash
     git clone https://github.com/usetrmnl/trmnl-firmware.git
     ```

   :::tip
   当社から TRMNL 上流への PR がレビュー中の場合があります。最新の Seeed 側パッチが必要な場合は、代わりに [OSHW-reTerminal-Series-E-D](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D) リポジトリ内の Seeed 管理のソーススナップショットを使用してください：

   ```bash
   git clone https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D.git
   ```

   - **reTerminal E1001 / E1002 / E1003** の場合は、[`examples/official/TRMNL`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL) を使用します。
   - **reTerminal E1004** の場合は、専用プロジェクト [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004) を使用します。
   :::

2. VS Code の拡張機能またはコマンドラインとして **[PlatformIO](https://platformio.org/)** をインストールします。

3. **プロジェクトを開く**: クローンした `firmware` フォルダを VS Code で開きます。

4. **ハードウェアに合った PlatformIO 環境を選択**します：

   <Tabs groupId="trmnl-hardware">
   <TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

   `platformio.ini` で：

   - **reTerminal E1001** の場合は、`seeed_reTerminal_E1001` 環境を選択します。
   - **reTerminal E1002** の場合は、`seeed_reTerminal_E1002` 環境を選択します（TRMNL は E1002 上でコンテンツをモノクロで描画します）。
   - **reTerminal E1003** の場合は、[公式 TRMNL ファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware) 内の `TRMNL_X_E1003` 環境を選択します。
   - **reTerminal E1004** の場合は、専用の [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004) PlatformIO プロジェクトを開き、`seeed_reTerminal_E1004` 環境を選択します（ファームウェア ID は `TRMNL_reTerminal_E1004`）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="trmnl-diy-kit" label="TRMNL DIY キット">

   `platformio.ini` で、`TRMNL_7inch5_OG_DIY_Kit` 環境を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="xiao-075-panel" label="XIAO 7.5&quot; パネル">

   `platformio.ini` で、`seeed_xiao_esp32c3` 環境を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. デバイスを USB-C で**接続**します。

6. **ビルドして書き込む**: PlatformIO の **Upload** ボタンをクリックするか、次を実行します：

   ```bash
   pio run --target upload
   ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4: Wi-Fi を設定してデバイスをプロビジョニングする

Wi-Fi プロビジョニングのワークフローは、サポートされているすべてのハードウェアで同一です。

> 💡 **Wi-Fi に接続できない場合？** [TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) を参照してください。

### 電源を入れてプロビジョニングモードに入る

TRMNL ファームウェアを書き込み、デバイスの電源を入れると、まだ Wi-Fi に接続されていない場合は自動的にプロビジョニングモードに入ります。

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### TRMNL の Wi-Fi に接続する

スマートフォンまたはコンピュータで、利用可能な Wi-Fi ネットワーク一覧を開きます。**TRMNL** という名前のネットワークを探して接続します（デフォルトではパスワード不要です）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

接続したら、Web ブラウザを開きます。デバイスは自動的に TRMNL の設定ページへリダイレクトされるはずです。そうならない場合は、手動で [http://4.3.2.1](http://4.3.2.1) にアクセスしてください。

### Wi-Fi の認証情報を入力する

- **2.4 GHz Wi-Fi ネットワーク** を選択します（5 GHz ネットワークはサポートされていません）。
- Wi-Fi パスワードを入力し、**Save** / **Connect** をクリックします。

> ⚠️ **重要:** 必ず 2.4 GHz の Wi-Fi ネットワークを使用してください。これらのデバイス上の ESP32-C3 / ESP32-S3 チップは 5 GHz ネットワークをサポートしていません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスがネットワークに参加する

デバイスは TRMNL の Wi-Fi から切断され、自宅のネットワークに参加します。キャプティブポータルのウィンドウにはデバイスの MAC アドレスが表示されます。**MAC アドレスを記録しておいてください** — 次のステップで必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意:** MAC アドレスはキャプティブポータル上に 1～2 秒間しか表示されません。見逃してしまった場合は、次の方法でも確認できます：
>
> - VS Code → PlatformIO のビルド／アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash) の方法を使用し、書き込み中にブラウザのデベロッパーコンソールを確認する。
> - ルーターまたはメッシュネットワークアプリの接続デバイス一覧から探す。
>
> 公式ガイドも参照してください: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)。

## ステップ 5: TRMNL 上でデバイスを登録する

デバイスが Wi-Fi に接続され、MAC アドレスが分かったら、TRMNL の Web インターフェースで登録します：

1. [https://trmnl.app](https://trmnl.app) で **TRMNL の Web インターフェースを開きます**。
2. **Devices ページに移動します**。
3. **新しいデバイスを追加します**（右上またはページ中央のボタン）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. BYOD アクセスを購入したときに受け取った **Device ID** を入力します（これは MAC アドレスではありません — Device ID は購入確認メールまたは TRMNL ダッシュボードで確認できます）。**Add new device** をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. デバイス設定ページで **デバイスの MAC アドレスを紐付けます**：

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   ここではカスタム名を設定したり、その他の設定を調整したりすることもできます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

これでデバイスはあなたの TRMNL アカウントにリンクされました！TRMNL インターフェースからプレイリスト、画像、その他のコンテンツを直接送信できるようになります。

> 💡 **ヒント:** 複数のデバイスがある場合は、それぞれ固有の Device ID を使用して、上記の手順を繰り返してください。

:::caution Firmware Early Release と OTA Updates を無効にする
TRMNL の Web インターフェースでデバイスを追加したら、デバイスの設定ページに移動し、**Firmware Early Release** と **OTA Updates Enabled** の両方を **オフ** にします。

有効のままにしておくと、Seeed デバイスと**互換性のない**公式 TRMNL ハードウェア向けのファームウェアアップデートを自動的にダウンロードしてしまう可能性があります。互換性のないファームウェアをインストールすると、デバイスが誤動作したり、応答しなくなったりするおそれがあります。

安定した動作を確保するため、常に両方のオプションを無効のままにしておいてください。
:::

## ボタンの使い方

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1004" default>

reTerminal E1001 と E1002 では、TRMNL ファームウェアの下でユーザーが操作できるボタンは 1 つだけです：

- **緑のボタン — 長押し 5 秒**: Wi-Fi 再設定モードに入ります。
- **Reset ボタン**: シングルクリックでデバイスを再起動します。

reTerminal E1004 では、TRMNL ファームウェアの下で前面の物理ボタンを使用します。これらのボタンを使ってパネルをウェイクまたはリフレッシュし、電源スイッチを **OFF** にしてから **ON** にスライドして再起動します。Wi-Fi を再設定するには、ファクトリーフラッシュまたはネットワークリセット後にデバイス画面に表示される、長押し／プロビジョニングのフローに従ってください。

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

reTerminal E1003 では、TRMNL ファームウェアの下で上部に 3 つのボタンがあります：

- **Refresh ボタン — シングルプレス**: デバイスをウェイクするか、現在の画面を即座にリフレッシュします。
- **Page Up + Page Down — 2 秒間長押し**: Wi-Fi 再設定モードに入ります。
- **電源スイッチ**: **OFF** にしてから **ON** にスライドしてデバイスを再起動します。

:::note
静電容量式タッチは SenseCraft HMI ファームウェアでのみサポートされています。TRMNL ファームウェアではタッチパネルは使用せず、すべての操作は上記の物理ボタンで行います。
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

XIAO ePaper Display Board には 4 つのボタン（RESET / KEY1 / KEY2 / KEY3）があります。**TRMNL ファームウェアで使用されるのは RESET と KEY3 のみです。**

**KEY3 の使い方:**

1. **シングルクリック**: ページを即座にリフレッシュします。
2. **ダブルクリック**: カスタム機能 — TRMNL の設定ページから設定します。
3. **長押し（約 5 秒）**: ネットワークを再設定します。

**RESET の使い方**: シングルクリックでデバイスをリセットします。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO ESP32-C3 には標準的な **RESET** と **BOOT** ボタンがあります。

- **Reset → 離す → BOOT を 5 秒間押し続ける**: ネットワークを再設定します（TRMNL のプロビジョニングポータルに戻ります）。
- **RESET シングルクリック**: デバイスを再起動します。

</TabItem>
</Tabs>

## TRMNL プレイリストを理解する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL プレイリストは、ePaper デバイスに「何を」「いつ」表示するかを正確に制御します。

### プレイリストの概要

- **Playlist Title**: TRMNL デバイスの名前。
- **Display Time Range**: プレイリストが有効になる時間帯（例: 00:00–23:45）。
- **Update Interval**: ディスプレイを更新する頻度（例: 5 分ごと）。
- **Add a Group / Add a Plugin**: プレイリストをグループに整理したり、新しいコンテンツプラグインを追加したりします。

### プレイリストアイテム

各行は、デバイスに表示される画面またはウィジェットです。例：

1. **Weather** — 現在地の天気情報。
2. **Days Left This Year** — 今年残りの日数のカウントダウン。
3. **Custom Text** — 任意のメッセージを表示（例: "Hello World"）。

各アイテムについて：

- **Settings（歯車アイコン）**: プラグインのオプションを設定します。
- **Delete（X アイコン）**: プレイリストからアイテムを削除します。
- **Preview（目のアイコン）**: 画面がどのように表示されるかをプレビューします。
- **Reorder（バーのアイコン）**: ドラッグして順序を変更します。

### Smart Playlist

一番下で、内容が変化していない画面を自動的にスキップするかどうかを選択できます。詳細は [Smart Playlists のブログ記事](https://usetrmnl.com/blog/smart-playlists) を参照してください。

## TRMNL プラグインを探索する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

プラグインはモジュール式のコンテンツブロックで、天気、カレンダーイベント、株価、RSS フィード、モチベーションを高める名言、GitHub のアクティビティなど、さまざまな情報を表示できます。

### 接続済みプラグイン

Plugins ページの上部には、すでにあなたの TRMNL アカウントに接続されているすべてのプラグインが表示されます。例として、Weather、Days Left This Year、Stock Price、RSS Feed、Reddit、Hacker News、Language Learning、Motivational Quote、Custom Text などがあります。

### プラグインマーケットプレイス

接続済みプラグインの下にはマーケットプレイスがあります。プラグインはカテゴリやタグ（#productivity、#news、#ecommerce など）ごとに整理されています。ブラウズや検索を行い、任意のプラグインをクリックしてアカウントに接続します。

開発者は独自のプラグインを作成して公開することもできます。詳細は [plugin marketplace docs](https://docs.usetrmnl.com/go/plugin-marketplace/introduction) を参照してください。

より高度な機能については、公式の TRMNL ドキュメント [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go) を参照してください。

## FAQ

### Q1: ネットワークを再設定するにはどうすればよいですか？

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

**Green Button** を 5 秒間長押しします。デバイスは初期の TRMNL インターフェースに戻り、AP が有効になります。

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

**Page Up** と **Page Down** を同時に 2 秒間長押しします。デバイスは初期の TRMNL インターフェースに戻り、AP が有効になります。

画面がスリープ状態の場合は、まず **Refresh** ボタンを 1 回押してデバイスを起こしてください。

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**KEY3**（Reset ボタンの横）を 5 秒間長押しします。デバイスは初期の TRMNL インターフェースに戻り、AP が有効になります。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO 上の **Reset** ボタンを押して離し、その後 **BOOT** ボタンを 5 秒間長押しします。デバイスは初期の TRMNL インターフェースに戻り、AP が有効になります。

</TabItem>
</Tabs>

### Q2: 画面に常にバッテリー残量低下の警告が表示される場合はどうすればよいですか？

この画面が表示される原因として、次の 2 つの状況が考えられます：

1. **実際にバッテリー電圧が低い場合。** これが最も一般的なケースです — デバイスが本当に充電を必要としています。電源に接続するか、バッテリーを交換／充電すると、電圧が回復した時点で警告は消えるはずです。

2. **TRMNL のサーバー側の問題。** バッテリー残量はデバイスだけでなく TRMNL のサーバー側でも評価されます。サーバーのバグや最近のプラットフォーム更新により、ハードウェアに問題がなくても一時的にバッテリー状態が誤って報告され、警告が表示され続けることがあります。

**バッテリーが本当に低下している場合** は、まずデバイスを充電してください — バッテリーパックが健全であることを確認するまでは、警告を非表示にしないでください。

**バッテリーに問題がないと確信できるのに** 警告が消えない場合でも、ファームウェアを変更する必要は **ありません**。TRMNL では、Web ダッシュボードから画面上のプロンプトを抑制できます：

**ステップ 1.** [TRMNL web interface](https://trmnl.app) を開き、**Devices** に移動します。

**ステップ 2.** 対象のデバイスを選択し、その **Battery** 設定を開きます。

**ステップ 3.** **Hide Low Battery Screen** をオンにします。これにより、TRMNL のサーバー側のバッテリー検出が回復するまで、またはプレイリストを表示し続けたい場合に、デバイス上にバッテリー残量低下の警告画面が表示されなくなります。

**ステップ 4.** （任意）表示を中断せずにメールによる通知だけを受け取りたい場合は、**Low Battery Email Notification** を有効のままにしておきます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/261.png" style={{width:800, height:'auto'}}/></div>

### Q3: Web Flasher / PlatformIO がデバイスを認識しない、または書き込みに失敗する

誤ったプログラムが原因で、XIAO のポートが認識されなくなったり、正しく動作しなくなることがあります：

- XIAO は接続されているが、**ポート番号** が見つからない。
- XIAO は接続されておりポートは表示されるが、**書き込みに失敗する**。

XIAO を BootLoader モードにして復旧します：

- **ステップ 1**：XIAO ESP32-S3 / ESP32-C3 上の `BOOT` ボタンを離さずに押し続けます。
- **ステップ 2**：`BOOT` を押したまま、USB-C でデバイスをコンピュータに接続します。デバイスが接続されたら `BOOT` を離します。
- **ステップ 3**：再度アップロード／フラッシュを実行します。ほとんどの「デバイスが認識されない」または「書き込みに失敗した」という問題は、これで解決します。

## 謝辞

このインテグレーション全体にわたり、多大なサポートと貴重な支援をいただいた **TRMNL チーム全員** に心より感謝いたします。特に、開発およびドキュメント作成の期間を通じて尽力してくださった **Bogdan**、**Ryan Kulp**、**Fr3d**、**Schappi**、および他のすべてのチームメンバーの皆様に感謝いたします。

彼らの専門知識により、このインテグレーションが実現し、reTerminal E シリーズ（E1001、E1002、E1003、E1004）、TRMNL DIY Kit、そして XIAO 7.5" ePaper Panel コミュニティの体験が大きく向上しました。

## リソース

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **[GitHub]** [E1001 / E1002 / E1003 向け TRMNL ファームウェアソース](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL)
- **[GitHub]** [E1004 向け TRMNL ファームウェアソース](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004)
- **[GitHub]** [公式 TRMNL ファームウェア](https://github.com/usetrmnl/trmnl-firmware)
- **[Wiki]** [Getting Started with reTerminal E1003](/ja/getting_started_with_reterminal_e1003)
- **[Wiki]** [Getting Started with reTerminal E1004](/ja/getting_started_with_reterminal_e1004)

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

- **[Firmware]** [TRMNL ePaper ライブラリ (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Printable]** [三角形ベース](https://www.printables.com/model/1354873)
- **[Printable]** [保護付き三角形ベース](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)
- **[Printable]** [L 字型ベース](https://www.printables.com/model/1354879)
- **[Thingiverse]** [三角形ベース](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [保護付き三角形ベース](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L 字型ベース](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [三角形ベース](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [保護付き三角形ベース](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L 字型ベース](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

- **[STP]** [3D モデル筐体](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]** [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GitHub]** [TRMNL ファームウェアリポジトリ](https://github.com/usetrmnl/firmware)
- **[GitHub]** [Seeed_TRMNL_Eink_Project リポジトリ](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

</TabItem>
</Tabs>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
