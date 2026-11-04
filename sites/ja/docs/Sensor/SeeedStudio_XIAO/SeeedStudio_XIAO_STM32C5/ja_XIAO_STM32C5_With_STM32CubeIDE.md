---
title: XIAO STM32C5 と STM32CubeIDE
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - stm32cubeide
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_with_stm32cubeide
sku: 100036669
last_update:
  date: 08/17/2026
  author: Zeller
createdAt: '2026-08-14'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/ja/xiao_stm32c5_with_stm32cubeide/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_cubeide.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## 概要

[STM32CubeIDE](https://www.st.com/content/st_com/en/stm32cubeide.html#st-get-software) は、STMicroelectronics が提供する STM32 マイコン向けの公式無償クロスプラットフォーム統合開発環境です。XIAO STM32C5 向けアプリケーションの開発にも適しています。

STM32CubeIDE は GNU Arm ツールチェーンを同梱しており、CMake と Ninja に基づくビルドワークフローをサポートすることで、追加の環境構成の必要性を減らします。プロジェクト作成、ペリフェラル設定、コード編集、コンパイル、ファームウェア書き込み、ターゲット上でのデバッグまで、開発の一連のワークフローをカバーします。

## ハードウェアの準備

作業を始める前に、以下のものを準備してください。

- 1 × XIAO STM32C5
- PC と Type‑C USB ケーブル
- 1 × ST‑LINK/V2（オプション）

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

## STM32CubeIDE のインストール

1. インストールパッケージをダウンロードします。[STM32CubeIDE Software](https://www.st.com/en/development-tools/stm32cubeide.html) をクリックしてダウンロードページに移動します。トップページで **Get Software** を選択するか、ページの一番下までスクロールします。お使いの PC のオペレーティングシステムに合ったインストーラを選択してください。最新バージョンの使用を推奨します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_2.png" style={{width:600, height:'auto'}}/></div>

2. インストーラは、登録済みアカウントでもゲストとしてもダウンロードできます。この手続きにはメールアドレスなどの関連情報が必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_3.png" style={{width:600, height:'auto'}}/></div>

3. ダウンロードリンクがあなたのメールアドレス宛に送信されます。リンクをクリックしてソフトウェアインストーラを取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_4.png" style={{width:600, height:'auto'}}/></div>

4. インストーラを起動し、関連するライセンス契約を読み、**I Agree** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_5.png" style={{width:600, height:'auto'}}/></div>

5. インストール先ディレクトリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_6.png" style={{width:600, height:'auto'}}/></div>

6. 使用予定のデバッグプローブ用ドライバをインストールします。後述の UF2 書き込み手順ではプローブドライバは不要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_7.png" style={{width:600, height:'auto'}}/></div>

## XIAO STM32C5 での開発

1. XIAO STM32C5 は UF2 形式のファームウェア書き込みをネイティブにサポートしているため、開発を簡素化するためのリファレンス用サンプルプロジェクトを用意しています。以下のリンクをクリックしてサンプルをダウンロードしてください。

- **🗃️[Project]** [XIAO STM32C5 Blink Project](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)

- ダウンロード後、アーカイブを解凍します。生成されたプロジェクト構成は、下図のレイアウトと一致している必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_8.png" style={{width:800, height:'auto'}}/></div>

2. STM32CubeIDE を起動すると、下図のような画面が表示されます。本セクションの内容は **📄[PDF]** [STM32CubeIDE User Guide](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf) からの抜粋です。

:::note

初回起動時、STM32CubeIDE はワークスペースの選択を求めてきます。デフォルトのワークスペースで問題なく、後続の手順に影響することはありません。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_9.png" style={{width:800, height:'auto'}}/></div>

3. プロジェクトをインポートします。右上のツールバーで **File → STM32 Project Create/Import** に進み、**Import STM32CubeMX / STM32CubeIDE Project** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_10.png" style={{width:800, height:'auto'}}/></div>

4. 解凍した **xiao_c5_project** プロジェクトディレクトリを選択し、**Finish** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_11.png" style={{width:800, height:'auto'}}/></div>

5. インポート後のプロジェクト構成は、下図のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_12.png" style={{width:800, height:'auto'}}/></div>

- **SDK**: STM32CubeC5 SDK パッケージを含みます。これは XIAO STM32C5 ファームウェアのビルドに必要なファイルのみを含む縮小版 SDK であり、フル SDK リリースではありません。
- **Source**: ソースコードディレクトリで、`main.c` と XIAO STM32C5 用のボード定義ファイルが含まれます。
- **Startup**: XIAO STM32C5 に必須のスタートアップファイルです。
- **tools**: ビルドごとにコンパイル済み bin バイナリを UF2 形式に変換する `uf2conv.py` スクリプトが含まれます。

### ファームウェアのビルドと書き込み

1. プログラム概要。**Source → main.c** を開きます。これは XIAO STM32C5 のオンボード LED を点滅させるシンプルなサンプルです。LED の論理レベルを 500 ms ごとに切り替えることで点滅動作を実現しています。

```c
/**
 * @file    main.c
 * @brief   Minimal LED application for the Seeed XIAO STM32C5.
 *
 * SPDX-License-Identifier: MIT
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 */
#include "board.h"
#include "uart_io.h"

int main(void)
{
    if (HAL_Init() != HAL_OK) {
        Error_Handler();
    }

    board_clock_init();
    board_uart_init();
    board_led_init();

//    uprintln("[LED] PB12 onboard LED is blinking (500 ms interval)");
    uart_log_flush();

    while (1) {
        HAL_GPIO_TogglePin(LED_PORT, LED);
        uprintln("[LED] PB12 onboard LED is blinking");
        uart_log_flush();
        HAL_Delay(500U);
    }
}
```

- `board_clock_init();`: XIAO STM32C5 に必要なペリフェラルクロックを初期化します。
- `board_uart_init();`: XIAO STM32C5 の UART I/O 設定を初期化します。
- `board_led_init();`: XIAO STM32C5 のオンボードユーザー LED 用 I/O 設定を初期化します。
- `HAL_GPIO_TogglePin(LED_PORT, LED);`: STM32 HAL ライブラリの GPIO トグル関数で、ユーザー LED の GPIO 論理レベルを反転させます。

2. ツールバーで **Release** を選択して、自動的にプロジェクトビルドを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_13.png" style={{width:800, height:'auto'}}/></div>

3. ビルドが成功すると、複数のビルド成果物を含む **Release** フォルダが生成されます。この出力のうち、bin ファイルと uf2 ファイルが必要なファイルです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_14.png" style={{width:600, height:'auto'}}/></div>

:::tip

**Build** を選択してプロジェクトをビルドすることもできます。この場合、生成されたファームウェアファイルを含む **Build** フォルダが作成されます。

:::

### UF2 形式ファームウェアの書き込み

- XIAO STM32C5 のリセットボタンを素早く 2 回押します。XIAO STM32C5 のマスストレージドライブがポップアップ表示されるので、このドライブに UF2 ファイルをコピーすると書き込みが完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15.png" style={{width:800, height:'auto'}}/></div>


### [ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html) を使った書き込み

[ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html) は、STMicroelectronics が提供する公式のデバッグおよびプログラミングツールです。STM8 および STM32 マイコンファミリをサポートし、SWIM、JTAG、SWD インターフェース経由でのプログラムダウンロード、ファームウェア書き込み、オンチップデバッグを可能にします。以下では、ST‑LINK/V2 と STM32CubeIDE を併用して XIAO STM32C5 にファームウェアを書き込む方法を説明します。

- ST‑LINK/V2 を PC に接続します。IDE で **Help → ST‑LINK Upgrade** に進み、STM32C5 デバイスとの良好な互換性を確保するために、そのファームウェアを最新バージョンに更新します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15_1.png" style={{width:800, height:'auto'}}/></div>

- ST‑LINK/V2 を XIAO STM32C5 に接続します。ピン接続については以下を参照してください。この手順にははんだ付けが必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16.png" style={{width:800, height:'auto'}}/></div>

:::tip

1. 接続ピンのうち、RST は任意のインターフェースであり、未接続のままでも構いません。
2. 手動ではんだ付けを行わずに、[**XIAO Debug Mate**](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html) を使用して ST‑LINK/V2 ツールに接続することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16_1.jpg" style={{width:600, height:'auto'}}/></div>
:::
<br/>
- ツールバーの **Run** をクリックして書き込みを完了します。STM32CubeIDE は ST‑LINK/V2 プログラマを自動的に検出します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_17.png" style={{width:800, height:'auto'}}/></div>

## まとめ

- 上記の方法で対応するファームウェアを XIAO STM32C5 に書き込むと、オンボードのユーザー LED がトグルし、500 ms ごとに点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

また、D6 と D7 を TTL‑to‑UART アダプタに接続することもできます。任意のシリアルモニタを開くと、シリアルポートに 500 ms ごとに **[LED] PB12 onboard LED is blinking** という文字列が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_18.png" style={{width:800, height:'auto'}}/></div>

## ソースフォルダ内のファイル

- **board.c / board.h**

  XIAO STM32C5 用のピンマッピングおよびボード固有のリソースを定義します。クロック、GPIO、CAN、ADC などのペリフェラルに対する初期化設定を提供し、アプリケーション開発の基盤として利用できます。

- **test.c / test.h**

  IMU や LED などのオンボードペリフェラル、および CAN、SPI、I2C、ADC などのインターフェース向けの検証ルーチンを提供します。これらのルーチンはハードウェア機能の検証やコードリファレンスとして使用できます。

- **uart_io.c / uart_io.h**

  受信した UART データの文字処理およびコマンド解析を行い、テストルーチンへの対話的なエントリポイントを提供します。低レベルの通信インターフェースは他のモジュールによって実装されます。

## 参考リソース

- **🗃️[Project]** [XIAO STM32C5 Blink Project](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)
- **📄[Document]** [STM32CubeIDE User Guide](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)
- **📄[Datasheet]** [STM32C5A3CGX](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[Examples]** [STM32 Example Library](https://dev.st.com/stm32-example-library/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
