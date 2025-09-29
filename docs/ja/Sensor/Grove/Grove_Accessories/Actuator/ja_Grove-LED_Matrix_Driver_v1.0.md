---
title: Grove - LED マトリックス ドライバ v1.0
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-LED_Matrix_Driver_v1.0/
slug: /ja/Grove-LED_Matrix_Driver_v1.0
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_view_700_s.jpg)

Grove - LED マトリックス ドライバ v1.0 は、さまざまなグラフィック機能を備えた UART (シリアル) 対応のドットマトリックス LED ドライバです。この製品は 32×64 LED マトリックスのみをサポートします。この製品は **Grove** 互換の UART インターフェースを備えており、LED ドライバハードウェアの複雑さを抽象化した簡単で豊富な API を提供します。プロジェクトで異なる機能を実装するには、これらの API をコード内で呼び出すだけです。

各ドット（つまりピクセル）はデュアルカラー LED をサポートしています。合計で 3 色（赤（基本色）、緑（基本色）、および黄（混合色））を生成できます。すべての LED の入力電流は一度に設定できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-v1.0-p-2645.html)

:::note
この Grove モジュールは、各 LED の入力電流を個別に変更することはできません。
:::

特徴
--------

- Grove 互換で使いやすい
- 高度に抽象化された完全な API
- デュアルカラー LED ピクセルをサポート。合計 3 色（3 色目は 2 つの基本色の混合色）
- インターフェース：UART（Arduino の SoftSerial）

:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

仕様
--------------

| パラメータ                              | 値                                                                                                                          |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| 動作電圧(V)                            | 3.3–5 ボルト                                                                                                                  |
| 動作電流(mA)                           | 最大：28–50 mA                                                                                                                |
| 出力電圧（マトリックスドライバから）    | 3.3 ボルト                                                                                                                    |
| サポートされるシンボル/グラフィック機能 | ドット、直線、円、文字、文字列、数字、絵文字、画像（これらのシンボルはコード内で API を直接呼び出すことで表示可能）             |
| サポートされる LED マトリックスサイズ   | 32（行）×64（列）                                                                                                             |
| 各 LED マトリックスドットでサポートされる色 | デュアル LED（緑と赤）および混合色（黄）、各 LED マトリックスドットで 1 つの LED のみ使用可能                                   |
| LED マトリックス用コネクタ              | DBSTAR_HUB 08A                                                                                                               |
| Grove ポート用プロトコル                | UART                                                                                                                           |
| 動作温度                                | -40–80 ℃                                                                                                                      |
| 寸法                                   | 46.5×44 mm                                                                                                                     |
| 重量                                   | 9 g（モジュール）、12.5 g（単一パッケージ全体）                                                                                 |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム用のソフトウェアライブラリ/デモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_components_described_1200_s.jpg)

- **Grove ソケット**：この製品をメインコントロールボードに接続します。
- **LED マトリックスポート（DBSTAR_HUB 08A）**：LED マトリックスを接続します。このようなコネクタが見つからない場合は、ジャンパーワイヤーを代替として使用できます。

### **パッケージ内容**（主要部品）

| 部品名                                                                                                                        | 数量     |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - LED Matrix Driver v1.0                                                                                                | 1 個     |
| [Grove ケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 本     |

はじめに
---------

それでは、このモジュールを使った基本的な例を実行してみましょう。

### Arduino を使用する場合

#### 必要な材料

- Grove - LED Matrix Driver v1.0 × 1
- 32×64 LED マトリックス（マトリックスドットに赤と緑の LED があるもの。単色 LED マトリックスでも可）× 1
- 電源ライン（リボン型）× 1
- LED マトリックス用の入力電圧を調整する 5 ボルト（出力）アダプター × 1
- 8 ピン（メス）リボンケーブル × 1
- Arduino UNO（他の Arduino モデルでも可）× 1
- [Grove ケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1
- Grove - Base Shield × 1

#### 接続

以下のようにすべての部品を接続してください：

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_front_3600.jpg)

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_back_3600.jpg)

#### コーディング作業

より多くのデモスケッチは [https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver) で見つけることができ、開発用ライブラリは [https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver) にあります。

1. 典型的なデモコードです。[Codebender](https://codebender.cc) を使用してメインコントロールボードにコードをアップロードできます。

<iframe frameBorder={0} height={500} src="https://codebender.cc/embed/sketch:300168" width="50%">
</iframe>

2. コードをダウンロードしてアップロードします。Arduino スケッチのアップロード方法がわからない場合は、Windows ユーザーは [https://www.arduino.cc/en/Guide/Windows](https://www.arduino.cc/en/Guide/Windows)、Mac ユーザーは [https://www.arduino.cc/en/Guide/MacOSX](https://www.arduino.cc/en/Guide/MacOSX) を参照してください。以下のような結果が確認できます。

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_result_view_s.jpg)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [回路図ファイル](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip)
- [STM32F103C8T6 データシート](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/STM32F03C8T6.pdf)
- [Github 上のライブラリ](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver)
- [この製品のファームウェア](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver/tree/master/Firmware)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_LED_Matrix_Driver_v1.0 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>