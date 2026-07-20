---
title: Arduino で使う XIAO nRF54LM20A Sense
description: この記事では、Arduino IDE を使用して Seeed Studio XIAO nRF54LM20A Sense を開発する方法を紹介します。
keywords:
  - xiao
  - nrf54lm20a
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_arduino
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-07-15'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_arduino/
---

# Seeed Studio XIAO nRF54LM20A Sense を Arduino で使う

このセクションでは、Arduino 開発に必要なハードウェアおよびソフトウェアの準備について説明します。以下の手順に従うことで、開発環境をセットアップし、Arduino IDE を設定し、XIAO ボードをプログラミングできる状態にします。セットアップが完了すれば、提供されているサンプルスケッチをすばやくビルド、書き込み、テストできます。

## はじめに

### ハードウェアの準備

次のものを用意してください：

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
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
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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


### ソフトウェア

XIAO nRF54LM20A は Arduino IDE での開発をサポートしています。始める前に、Arduino IDE をインストールして設定してください。

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くおすすめします。
:::

- **Step 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
  </div>
  <br></br>

- **Step 2.** Arduino アプリケーションを起動します。

- **Step 3.** **Arduino IDE** > **Settings** を開き、**Additional Boards Manager URLs** を見つけて、次の URL を追加します：

```shell
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/1.png" style={{width:800, height:'auto'}}/></div>

- **Step 4.** **Tools** > **Board** > **Boards Manager** に移動し、**nRF54L15 Boards** を検索してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/2.png" style={{width:800, height:'auto'}}/></div>

- **Step 5.** ボードを接続した後、Arduino IDE で次のボードを選択します：

**Tools** > **Board** > **nRF54L15 Boards** > **XIAO nRF54LM20A**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/3.png" style={{width:800, height:'auto'}}/></div>

### プログラムの書き込み

次の例では、シンプルな点滅プログラムを使用します。

**Step 1.** テスト用に **Blink** のサンプルコードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/4.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** **Upload** をクリックして、スケッチをコンパイルして書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/6.png" style={{width:800, height:'auto'}}/></div><br/>

動作デモ：

プログラムを書き込んでリセットボタンを押すと、L インジケータが 1 秒間隔で点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/7.gif" style={{width:800, height:'auto'}}/></div>

## 特別な感謝

XIAO nRF54LM20A 用の Arduino 対応を提供してくださった **lolren** 氏に特別な感謝を申し上げます。コードと README は分かりやすく、とても参考になります。XIAO nRF54LM20A を Arduino と一緒に使う方法についてさらに知りたい場合は、以下の GitHub リンクを参照してください。

- [Arduino Core リポジトリ](https://github.com/lolren/nrf54-arduino-core)
- [作者の GitHub ホームページ](https://github.com/lolren)


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
