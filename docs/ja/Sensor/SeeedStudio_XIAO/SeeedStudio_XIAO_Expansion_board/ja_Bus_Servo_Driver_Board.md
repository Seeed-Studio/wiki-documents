---
description: |
  Seeed Studioによる汎用性の高いドライバボードで、ロボット用途のシリアルバスサーボを制御するために設計されています。接続方法（USBまたは直接UART）に応じて調整が必要な重要なジャンパ設定を備えています。
title: バスサーボドライバボード
image: https://files.seeedstudio.com/wiki/Bus_Servo_Driver/bus_servo_driver_board_main.webp
slug: /ja/bus_servo_driver_board
keywords:
    - バスサーボ
    - ロボティクス
    - UART
    - USB接続
    - ジャンパ設定
# sidebar_position: 2
last_update:
  author: w0x7ce
  date: 05/15/2025
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

### バスサーボドライバボードの使い方

<div class="table-center">
  <table align="center">
    <tr>
        <th>XIAO ESP32S3 Sense用OV5640カメラ</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/board.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


### 概要

バスサーボドライバボードは、Seeed Studioによるコンパクトで強力なハードウェアソリューションで、ロボティクスや自動化プロジェクト向けにシリアルバスサーボを駆動するよう設計されています。UART通信をサポートしており、複数のST/SCシリーズサーボからの正確な制御とフィードバックを可能にします。これにより、ロボットアーム、ヘキサポッド、ヒューマノイドロボット、サーボ角度や負荷フィードバックを必要とする車輪型ロボットなどの用途に最適です。

このガイドでは、ハードウェアのセットアップ、物理的な接続、主要な仕様、そして**重要なジャンパ設定**に焦点を当て、ユーザーがボードをプロジェクトに効果的に統合できるようにします。

:::warning 安全上の注意

サーボや配線を接続または取り外す前に必ず電源を切断してください。入力電圧がサーボの要件に一致していることを確認し、損傷を防いでください。

:::

### 物理レイアウトと接続

バスサーボドライバボードには、いくつかの重要な接続ポイントがあります：

**入力:**

* **DC IN (5.5 * 2.1mm):** これはボードおよび接続されたサーボの電源入力です。ここに5～12Vの電源を接続してください。*特に、この電源の電圧はサーボの要件に一致している必要があります。* 例えば、STシリーズサーボは通常9Vで動作し、SCシリーズサーボは12Vを必要とする場合があります。

**出力:**

* **サーボインターフェース:** この専用ポートは、ST/SCシリーズバスサーボを接続する場所です。コネクタが正しく整列していることを確認してください。

**制御インターフェース:**

* **UART (RX/TX):** これらのピンは、サーボを制御するためのシリアル通信を提供します。接続方法とジャンパ設定はホストデバイスによって異なります。詳細は以下をご覧ください。

### 接続方法とジャンパ設定

バスサーボドライバボードは、直接UART接続とUSB接続（USB-to-UARTアダプタ経由）の2つの主要な接続方法を提供します。*正しいジャンパ設定は、適切な動作に不可欠です。*

**1. 直接UART接続（MCU、XIAO、ESP32などの場合）**

この方法は、ESP32、Arduino、Seeed Studio XIAO、またはシングルボードコンピュータのようなマイクロコントローラ（MCU）のUARTピンに直接接続する場合に使用されます。

* **配線:**
    * ドライバボードの`RX`ピンをホストデバイスの`TX`ピン（D7）に接続します。
    * ドライバボードの`TX`ピンをホストデバイスの`RX`ピン（D6）に接続します。
    * Seeed Studio XIAOのようなデバイスの場合、提供されたヘッダーにXIAOを直接差し込むことができ、UART接続のための別途デュポンワイヤが不要になります。

* **ジャンパ設定（重要）:** UARTピン付近のはんだジャンパを探します。**直接UART通信の場合、2つのパッドが接続されている（はんだ付けされている）ことを確認してください。**

* **ホストの電源供給:** ホストデバイス（例：Raspberry Pi Zero、ESP32、XIAO）には、別途電源供給が必要です。

**2. USB接続**

この方法は、USBポートを備えたコンピュータやシングルボードコンピュータ（例：PCやRaspberry Pi 4B）に接続する場合に使用されます。制御ボードをUSBケーブルでコンピュータに接続するだけです。

* **配線:**
    * 制御ボードをUSBケーブルでコンピュータに接続します。

* **ジャンパ設定（重要）:** 

**ステップ1:** ボードの裏側にあるはんだジャンパを探します。**USB通信の場合、2つのパッドが接続されている（はんだブリッジがある）ことを確認してください。**

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-1.png"   
        style={{   
            width: '400px',   
            height: '400px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

**ステップ2:** ボードの表側にある2ピンピンを2.54mmジャンパキャップで短絡させます。

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png"   
        style={{   
            width: '400px',   
            height: '400px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

### 必要なコンポーネント（開始前に）

接続する前に、以下を準備してください：

* **バスサーボドライバボード**
* **互換性のあるST/SCシリーズバスサーボ**
* **5～12V電源:** バッテリーまたは電源アダプタ。*電圧はサーボの仕様に一致している必要があります。*
* **ホストデバイス:**
    * **直接UARTの場合:** Raspberry Pi、Arduino、ESP32、またはSeeed Studio XIAOのようなUART対応デバイス。
    * **USBの場合:** コンピュータ（PC、Mac、Linux）またはRaspberry Pi 4Bのようなシングルボードコンピュータ、*さらに*USB-to-UARTアダプタ。
* **接続用ワイヤ/アダプタ:** 直接UARTを使用する場合はジャンパワイヤ（デュポンワイヤ）（XIAOを直接ヘッダー接続する場合を除く）。USB接続方法を使用する場合はUSB-to-UARTアダプタ。

:::caution

SCシリーズのサーボを使用する場合、電源がサーボの電圧要件に一致していることを確認してください。ボードのDC入力ラベルはSTシリーズサーボ用に設計されていますが、SCシリーズの電圧にも対応しています。**ジャンパー設定が正しくないと、ドライバーボードとの通信ができなくなります。**

:::

### 安全性とメンテナンス

- サーボおよび電源接続部を定期的に点検し、摩耗や接触不良がないか確認してください。
- ボードを湿気や極端な温度にさらさないようにしてください。
- 接続されているすべてのサーボをサポートできる十分な電流容量を持つ電源を使用してください。

### よくある質問 (FAQs)

:::tip

プロジェクトを開始する前に、これらのFAQを一読することをお勧めします。よくある質問や潜在的な問題に対応しています。

:::

<details>
<summary>電源電圧がサーボに合わない場合はどうすればよいですか？</summary>

ボードやサーボが誤動作したり、損傷を受ける可能性があります。必ず入力電圧をサーボの要件に合わせてください。
</details>

<details>
<summary>複数のサーボを同時に接続できますか？</summary>

はい、複数のサーボをサポートしています。ただし、電源が合計の電流消費量に対応できることを確認してください。

</details> <br/>

### リソース

* **回路図:** [Bus_Servo_Driver_Board_SCH.pdf](https://files.seeedstudio.com/wiki/bus_servo_driver_board/202004237_Servo_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_250225.pdf) *(このPDFがDocusaurusプロジェクト内のこの相対パスでアクセス可能であることを確認してください。)*
<!-- * **3Dモデル:** [Bus_Servo_Driver_Board_STEP.stp](Bus_Servo_Driver_Board_STEP.stp) *(このSTEPファイルがDocusaurusプロジェクト内のこの相対パスでアクセス可能であることを確認してください。)* -->

### 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>