---
description: 任意の互換性のある Seeed ePaper 製品（reTerminal E1001、E1002、TRMNL 7.5" (OG) DIY Kit、XIAO 7.5" ePaper Panel）で TRMNL を使用します。
title: TRMNL を使う
keywords:
  - ePaper ディスプレイ
  - TRMNL
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sidebar_position: 3
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /ogdiy_kit_works_with_trmnl
  - /xiao_7_5_inch_epaper_panel_with_trmnl
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TRMNL を使う

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

このガイドは、互換性のある任意の Seeed ePaper 製品で **TRMNL** を使用するための唯一の信頼できる情報源です。各ステップで必要な箇所だけ自分のハードウェアを選択すれば、それ以外のワークフローはすべて同一です。

:::caution ハードウェアサポート
TRMNL は公式に **reTerminal E1001**、**reTerminal E1002**、**TRMNL 7.5" (OG) DIY Kit**、**XIAO 7.5" ePaper Panel** をサポートしています。**E1002** では現在、コンテンツは **モノクロモード** で描画されます — フルカラー描画は今後のリリースで対応予定です。
:::

## [TRMNL](https://trmnl.app/) とは？

TRMNL は、ますます気が散りやすくなっているデジタル世界の中で、人々が集中力と落ち着きを保てるように設計された革新的なプラットフォームです。2023 年に設立されて以来、TRMNL は E Ink® ダッシュボード管理のリーディングソリューションとなり、従来の画面のような絶え間ない通知や気を散らす要素なしに情報を表示する、ユニークなアプローチを提供しています。

TRMNL の中核にあるのは、「テクノロジーは常に注意を要求するのではなく、生活を豊かにするものであるべきだ」という哲学です。このプラットフォームは、E Ink® ディスプレイを通じて重要な情報を一目で確認できるエレガントな方法を提供し、よりマインドフルで侵入性の低いテクノロジー体験を実現します。

### なぜ TRMNL を使うのか？

- **シンプルなダッシュボード作成**：TRMNL の拡大し続けるアプリと連携機能のライブラリにより、複雑なプログラミングなしでカスタム情報ディスプレイを簡単に作成できます。
- **低消費電力**：TRMNL の効率的なソフトウェアと E Ink® の最小限の電力要件を組み合わせることで、非常に省エネルギーなソリューションになります。
- **気が散らない情報表示**：通知や目の疲れに悩まされることなく、必要な情報だけを得られます。
- **定期的なアップデート**：TRMNL は活発に開発されており、新機能や連携機能が毎週追加されています。
- **開発者フレンドリー**：TRMNL のオープンな API と開発者ツールにより、カスタムプラグインや連携機能を作成できます。

## 対応ハードウェア

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>TRMNL 7.5" (OG) DIY Kit</th>
      <th>XIAO 7.5" ePaper Panel</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" モノクロ<br/>一体型ターミナル</td>
      <td align="center">7.3" Spectra 6（カラー）<br/>一体型ターミナル<br/>TRMNL ではモノクロモード</td>
      <td align="center">7.5" モノクロ + DIY ケース<br/>XIAO ESP32-S3 Plus ドライバ</td>
      <td align="center">7.5" モノクロ裸パネル<br/>XIAO ESP32-C3 直結</td>
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

## ステップ 1: TRMNL アカウントの作成と BYOD アクセス

デバイスを TRMNL に接続する前に、TRMNL アカウントと BYOD（Bring Your Own Device）アクセスが必要です — ハードウェアに関係なく手順は同じです。

1. **TRMNL アクセスを購入する**

   - TRMNL Web アプリ + デバイス機能へのアクセスを次のサイトで購入します: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
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

reTerminal E シリーズと XIAO 7.5" Panel はあらかじめ組み立て済みで出荷されるため、電源を入れるだけで使用できます。TRMNL DIY Kit は組み立てが必要です。

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

reTerminal E シリーズは完全に一体化されています。USB-C ケーブルを接続して電源を入れるだけです。組み立て作業は不要です。

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
画面のフレキシブルケーブルは非常に繊細です。作業時は十分注意してください。損傷すると画面全体が動作しなくなります。
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

FPC 延長ケーブルを接続し、ケース全体を組み立てます：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

L 字型エンクロージャの組み立てもほぼ同様です：

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

:::tip
TRMNL キットがルーターから離れた場所にある場合は、アンテナをケースの外に取り回すことで、電波状態を改善できます。
:::

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO 7.5" ePaper Panel は、XIAO ESP32-C3 がパネルに直接接続された状態で出荷されます。USB-C を接続するだけで使用でき、追加の組み立ては不要です。

</TabItem>
</Tabs>

## ステップ 3: TRMNL ファームウェアを書き込む

3 つの書き込み方法が利用できます。**方法 1（Web Flasher）** が最も簡単で、サポートされているすべてのハードウェアで動作します。**方法 2（SenseCraft HMI）** は reTerminal E シリーズ専用です。**方法 3（ソースからビルド）** は上級ユーザー向けです。

:::tip 新品の TRMNL DIY キットにはすでに TRMNL ファームウェアが搭載されています
新品の TRMNL 7.5" (OG) DIY キットを購入した場合、すでに TRMNL ファームウェアがプリインストールされています — このフラッシュ手順は完全にスキップして、Step 4 に進むことができます。
:::

### 方法 1: TRMNL Web Flasher（推奨）

TRMNL Web Flasher はブラウザ上で直接動作し、このページにあるすべてのデバイスをサポートします。

1. [https://usetrmnl.com/flash](https://usetrmnl.com/flash) にアクセスします。
2. デバイスを USB-C で接続し、画面の指示に従います。
3. お使いのハードウェアに対応するファームウェアを選択します：

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

reTerminal E シリーズで Seeed との互換性を確保するには、**FW 1.6.7 以降**を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/160.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

TRMNL DIY Kit で Seeed との互換性を確保するには、**FW 1.5.12 以降**を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO 7.5" ePaper Panel で Seeed との互換性を確保するには、**FW 1.5.12 以降**を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 方法 2: SenseCraft HMI Platform からフラッシュ（reTerminal E シリーズのみ）

:::info
この方法は **reTerminal E1001 / E1002** にのみ適用されます。SenseCraft HMI flasher は、同じデバイス上で SenseCraft HMI ファームウェアと TRMNL ファームウェアを切り替える方法を理解しています。
:::

1. [SenseCraft HMI device page](https://sensecraft.seeed.cc/hmi/device) にアクセスします。
2. 自分のデバイスを選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/164.jpg" style={{width:700, height:'auto'}}/></div>

3. **TRMNL** ファームウェアを選択します（ここから後で HMI ファームウェアに戻すこともできます）。**Full Flash** をクリックし、その後 **Flash** をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/162.jpg" style={{width:700, height:'auto'}}/></div>

4. デバイスをコンピュータに接続し、シリアルポートを選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/163.jpg" style={{width:700, height:'auto'}}/></div>

5. 画面がリフレッシュされ、TRMNL ロゴと MAC アドレスが表示されます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/165.jpeg" style={{width:700, height:'auto'}}/></div>

### 方法 3: ソースからビルドしてフラッシュ（上級者向け）

1. **ファームウェアリポジトリをクローンする**

   - [公式ファームウェアリポジトリ](https://github.com/usetrmnl/trmnl-firmware) にアクセスし、クローンします：

     ```bash
     git clone https://github.com/usetrmnl/trmnl-firmware.git
     ```

   :::tip
   当社から TRMNL upstream への PR が、まだレビュー中の場合があります。最新の Seeed 側パッチが必要な場合は、代わりに Seeed ミラーを使用してください：

   ```bash
   git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
   ```
   :::

2. VS Code の拡張機能として、またはコマンドライン経由で **[PlatformIO](https://platformio.org/)** をインストールします。

3. **プロジェクトを開く**: クローンした `firmware` フォルダを VS Code で開きます。

4. **ハードウェアに合った PlatformIO 環境を選択します**：

   <Tabs groupId="trmnl-hardware">
   <TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

   `platformio.ini` 内で：

   - **reTerminal E1001** の場合は、`seeed_reTerminal_E1001` 環境を選択します。
   - **reTerminal E1002** の場合は、`seeed_reTerminal_E1002` 環境を選択します（TRMNL は E1002 上ではコンテンツをモノクロでレンダリングします）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

   `platformio.ini` 内で、`TRMNL_7inch5_OG_DIY_Kit` 環境を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

   `platformio.ini` 内で、`seeed_xiao_esp32c3` 環境を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. **デバイスを接続** します（USB-C 経由）。

6. **ビルドしてアップロード** します：PlatformIO の **Upload** ボタンをクリックするか、次を実行します：

   ```bash
   pio run --target upload
   ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

## Step 4: Wi-Fi を設定し、デバイスをプロビジョニングする

Wi-Fi プロビジョニングのワークフローは、サポートされているすべてのハードウェアで同一です。

> 💡 **Wi-Fi 接続で問題がありますか？** [TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) を参照してください。

### 電源を入れてプロビジョニングモードに入る

TRMNL ファームウェアを書き込み、デバイスの電源を入れると、まだ Wi-Fi に接続されていない場合は自動的にプロビジョニングモードに入ります。

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### TRMNL Wi-Fi に接続する

スマートフォンまたはコンピュータで、利用可能な Wi-Fi ネットワーク一覧を開きます。**TRMNL** という名前のネットワークを探して接続します（デフォルトではパスワード不要です）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### キャプティブポータルを開く

接続後、Web ブラウザを開きます。デバイスは自動的に TRMNL の設定ページへリダイレクトするはずです。そうならない場合は、手動で [http://4.3.2.1](http://4.3.2.1) にアクセスしてください。

### Wi-Fi 認証情報を入力する

- **2.4 GHz Wi-Fi ネットワーク** を選択します（5 GHz ネットワークはサポートされていません）。
- Wi-Fi パスワードを入力し、**Save** / **Connect** をクリックします。

> ⚠️ **重要:** 必ず 2.4 GHz の Wi-Fi ネットワークを使用してください。これらのデバイス上の ESP32-C3 / ESP32-S3 チップは 5 GHz ネットワークをサポートしていません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### デバイスがネットワークに参加する

デバイスは TRMNL Wi-Fi から切断され、自宅のネットワークに参加します。キャプティブポータルのウィンドウには、デバイスの MAC アドレスが表示されます。**MAC アドレスを記録しておいてください** — 次のステップで必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意:** MAC アドレスはキャプティブポータル上に 1〜2 秒間しか表示されません。見逃してしまった場合は、次の方法でも取得できます：
>
> - VS Code → PlatformIO のビルド／アップロードログから取得する。
> - [usetrmnl.com/flash](https://usetrmnl.com/flash) の方法を使用し、フラッシュ中にブラウザの開発者コンソールを確認する。
> - ルーターまたはメッシュネットワークアプリの接続デバイス一覧から探す。
>
> 公式ガイドも参照してください: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)。

## Step 5: TRMNL 上でデバイスを登録する

デバイスが Wi-Fi に接続され、MAC アドレスが分かったら、TRMNL の Web インターフェース上で登録します：

1. **TRMNL Web インターフェース** を [https://trmnl.app](https://trmnl.app) で開きます。
2. **Devices ページに移動します**。
3. **新しいデバイスを追加** します（右上またはページ中央のボタン）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. BYOD アクセスを購入した際に受け取った **Device ID** を入力します（これは MAC アドレスでは **ありません** — Device ID は購入確認メールまたは TRMNL ダッシュボードで確認できます）。**Add new device** をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. デバイス設定ページで、**デバイスの MAC アドレスを紐付け** ます：

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   ここでカスタム名を設定したり、その他の設定を調整したりすることもできます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

これでデバイスはあなたの TRMNL アカウントにリンクされました！TRMNL インターフェースから、プレイリストや画像、その他のコンテンツを直接送信できるようになります。

> 💡 **ヒント:** 複数のデバイスがある場合は、それぞれ固有の Device ID を使用して、上記の手順を繰り返してください。

:::caution Firmware Early Release と OTA Updates を無効化
TRMNL の Web インターフェースでデバイスを追加したら、そのデバイスの設定ページに移動し、**Firmware Early Release** と **OTA Updates Enabled** の両方を**オフ**にします。

これらを有効のままにしておくと、Seeed デバイスとは**互換性のない**公式 TRMNL ハードウェア向けのファームウェア更新を自動的にダウンロードしてしまう可能性があります。互換性のないファームウェアをインストールすると、デバイスが誤動作したり、応答しなくなったりするおそれがあります。

安定した動作を確保するため、常に両方のオプションを無効のままにしておいてください。
:::

## ボタンの使い方

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

reTerminal E シリーズは、TRMNL ファームウェアの下でユーザーが操作できるボタンを 1 つだけ公開します：

- **緑のボタン — 長押し 5 秒**：Wi-Fi 再設定モードに入ります。
- **Reset ボタン**：1 回押してデバイスを再起動します。

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

XIAO ePaper Display Board には 4 つのボタン（RESET / KEY1 / KEY2 / KEY3）があります。**TRMNL ファームウェアで使用されるのは RESET と KEY3 のみです。**

**KEY3 の使い方：**

1. **1 回押し**：ページを即座にリフレッシュします。
2. **2 回押し**：カスタム機能 — TRMNL の設定ページから設定します。
3. **長押し（約 5 秒）**：ネットワークを再設定します。

**RESET の使い方**：1 回押してデバイスをリセットします。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO ESP32-C3 には標準的な **RESET** ボタンと **BOOT** ボタンがあります。

- **Reset → 離す → BOOT を 5 秒間押し続ける**：ネットワークを再設定します（TRMNL のプロビジョニングポータルに戻ります）。
- **RESET を 1 回押し**：デバイスを再起動します。

</TabItem>
</Tabs>

## TRMNL プレイリストを理解する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL プレイリストは、ePaper デバイスに「何を」「いつ」表示するかを正確に制御します。

### プレイリストの概要

- **Playlist Title**：TRMNL デバイスの名前。
- **Display Time Range**：プレイリストが有効になる時間帯（例：00:00–23:45）。
- **Update Interval**：ディスプレイを更新する頻度（例：5 分ごと）。
- **Add a Group / Add a Plugin**：プレイリストをグループに整理したり、新しいコンテンツプラグインを追加したりします。

### プレイリスト項目

各行は、デバイスに表示される画面またはウィジェットです。例：

1. **Weather** — 現在地の天気情報。
2. **Days Left This Year** — 今年残りの日数のカウントダウン。
3. **Custom Text** — 任意のメッセージを表示（例："Hello World"）。

各項目について：

- **Settings（歯車アイコン）**：プラグインのオプションを設定します。
- **Delete（X アイコン）**：プレイリストから項目を削除します。
- **Preview（目のアイコン）**：画面がどのように表示されるかをプレビューします。
- **Reorder（バーのアイコン）**：ドラッグして順序を変更します。

### スマートプレイリスト

一番下で、内容が変化していない画面を自動的にスキップするかどうかを選択できます。詳しくは [Smart Playlists のブログ記事](https://usetrmnl.com/blog/smart-playlists)を参照してください。

## TRMNL プラグインを探る

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

プラグインはモジュール式のコンテンツブロックで、天気、カレンダーイベント、株価、RSS フィード、モチベーションを高める名言、GitHub のアクティビティなど、さまざまな情報を表示できます。

### 接続済みプラグイン

Plugins ページの上部には、すでに TRMNL アカウントに接続されているすべてのプラグインが表示されます。例として、Weather、Days Left This Year、Stock Price、RSS Feed、Reddit、Hacker News、Language Learning、Motivational Quote、Custom Text などがあります。

### プラグインマーケットプレイス

接続済みプラグインの下にマーケットプレイスがあります。プラグインはカテゴリやタグ（#productivity、#news、#ecommerce など）ごとに整理されています。ブラウズや検索を行い、任意のプラグインをクリックしてアカウントに接続できます。

開発者は独自のプラグインを作成して公開することもできます。詳しくは [plugin marketplace docs](https://docs.usetrmnl.com/go/plugin-marketplace/introduction) を参照してください。

さらに高度な機能については、公式 TRMNL ドキュメントを参照してください：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)。

## トラブルシューティング

### ネットワークを再設定するには？

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

**Green Button** を 5 秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP を有効にします。

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**KEY3**（Reset ボタンの隣）を 5 秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP を有効にします。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO の **Reset** ボタンを押して離し、その後 **BOOT** ボタンを 5 秒間押し続けます。デバイスは初期の TRMNL インターフェースに戻り、AP を有効にします。

</TabItem>
</Tabs>

### Web Flasher / PlatformIO がデバイスを見つけられない、またはアップロードに失敗する

誤ったプログラムが原因で、XIAO のポートが認識されなくなったり、正しく動作しなくなったりすることがあります：

- XIAO は接続されているが、**ポート番号が**見つからない。
- XIAO は接続されておりポートも表示されるが、**アップロードに失敗する**。

XIAO を BootLoader モードにして復旧します：

- **Step 1**：XIAO ESP32-S3 / ESP32-C3 上の `BOOT` ボタンを離さずに押し続けます。
- **Step 2**：`BOOT` を押したまま、USB-C でデバイスをコンピュータに接続します。接続が完了したら `BOOT` を離します。
- **Step 3**：アップロード / フラッシュを再実行します。ほとんどの「デバイスが認識されない」または「アップロードに失敗した」という問題は、これで解決します。

## 謝辞

このインテグレーション全体にわたり、多大なサポートと貴重な助力をいただいた **TRMNL チーム全員** に心より感謝いたします。特に、開発およびドキュメント作成の期間を通じて尽力してくださった **Bogdan**、**Ryan Kulp**、**Fr3d**、**Schappi**、そして他のすべてのチームメンバーの皆様に感謝いたします。

彼らの専門知識により、このインテグレーションが実現し、reTerminal E シリーズ、TRMNL DIY Kit、XIAO 7.5" ePaper Panel の各コミュニティにとっての体験が大きく向上しました。

## リソース

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

- **[GitHub]** [Seeed_TRMNL_Eink_Project](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[GitHub]** [Official TRMNL firmware](https://github.com/usetrmnl/trmnl-firmware)

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

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
