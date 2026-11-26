---
title: Seeed Studio XIAO nRF54L15 シリーズ向け NFC
description: nRF Connect SDK を使用して、XIAO nRF54L15 および XIAO nRF54L15 Sense の NFC インターフェースを利用します。
keywords:
  - xiao
  - nrf54l15
  - nfc
  - ncs
slug: /xiao_nrf54l15_nfc
url: https://wiki.seeedstudio.com/ja/xiao_nrf54l15_nfc/
---

<div className="get_one_now_container" style={{textAlign: 'center'}}>
  <a
    className="get_one_now_item"
    href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html"
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

## はじめに

近距離無線通信（NFC）は、2 つのデバイス間で少量のデータをワイヤレスで転送するための技術です。非常にシンプルなプロトコルを使用するため、Bluetooth Low Energy よりも高速に接続できますが、磁気誘導に依存しているため、接続するには 2 つのデバイスを 10 cm 未満まで近づける必要があります。XIAO nRF54L15 は、nRF54L15 のオンチップ NFCT ペリフェラルを 2 本のピンに引き出しており、ボードを NFC タグとして使用して、スマートフォンやリーダーがタップして読み書きできるようにします。このペリフェラルは Type 2 と Type 4 の両方のタグをサポートします。以下のテキストレコードサンプルは Type 2 の読み取り専用テキストタグであり、書き込み可能な NDEF サンプルは Type 4 の読み書きタグです。

Nordic の NFC プロトコルリファレンスについては [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/nfc/index.html) を、仕様そのものについては [NFC Forum specification overview](https://nfc-forum.org/build/specifications) を参照してください。


## ハードウェアの準備

XIAO nRF54L15 と NFC アンテナが必要です。L15 のベアボードには**オンボードの NFC コイルはありません**。NFC ピンは N1 と N2 パッドにのみ配線されているため、以下のサンプルをスキャンするには外部アンテナが必須です。

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html"
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

:::tip
Nordic の NFC アンテナは Seeed Studio Bazaar では単体販売されていないため、他の販売元から購入する必要があります。
:::


### アンテナをはんだ付けする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/0.png" style={{width:600, height:'auto'}}/></div>

XIAO nRF54L15 では、NFC ピンは P1.02 と P1.03 です。外部アンテナを N1 と N2 のパッドにはんだ付けしてください。基板上での位置は上図のとおりです。

:::caution
NFC ピンには極性（プラス・マイナス）の区別はありません。細ピッチのテストポイントのはんだ付けは難易度が高いため、人身事故や機器の損傷を避けるために安全対策を講じるか、代わりにフライングワイヤーを使用してください。
:::

## ソフトウェア

### NFC テキストレコード（Type 2 読み取り専用テキストタグ）

この例では、NFC を介してテキスト情報を読み取る方法を示します。

1. 拡張機能内で空のルーチンを作成し、既存のルーチンをコピーするオプションを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. nfc と入力し、NFC text Records サンプルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/1.png" style={{width:800, height:'auto'}}/></div>

3. 保存先パスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/2.png" style={{width:800, height:'auto'}}/></div>

4. プロジェクトを開き、対応する拡張機能の下に XIAO nRF54L15 の設定を追加してコンパイルします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/1.png" alt="Adding the XIAO nRF54L15 board configuration and compiling" style={{width:1000, height:'auto'}}/></div>


5. ターミナルを開き、`west flash` コマンドを入力して、XIAO nRF54L15 にファームウェアを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/2.png" alt="Flashing the XIAO nRF54L15 with west flash" style={{width:1000, height:'auto'}}/></div>


#### 結果

この実験を行うには、NFC 機能を備えたスマートフォンを用意してください。

1. NFC 読み取り情報をより詳細に確認するには、お使いのシステムに対応したアプリをダウンロードする必要があります。

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. スマートフォンの NFC エリアを NFC アンテナに近づけて、詳細な NFC 情報を読み取ります。

スマートフォンに表示されるテキスト情報は次のとおりです。

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/10.gif"
    alt="NFC tag read on a phone"
    style={{width: 800, height: 'auto'}}
  />
</div>

### NFC 読み書きサンプル：書き込み可能な NDEF メッセージ（Type 4 読み書きタグ）

これは Nordic Connect SDK の **[writable NDEF message](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/nfc/writable_ndef_msg/README.html)** サンプルを XIAO nRF54L15 向けにビルドしたものです。



1. 公式の nRF Connect SDK からサンプルを取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/1.png" style={{width:600, height:'auto'}}/></div>




2. サンプルをビルドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/4.png" alt="Building the writable NDEF message sample" style={{width:1000, height:'auto'}}/></div>


3. 書き込みを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/5.png" alt="Flashing the writable NDEF message sample" style={{width:1000, height:'auto'}}/></div>
<br/>


#### 結果

1. NFC の内容を詳しく確認するには、お使いのスマートフォンに対応したアプリをインストールします。

- iOS: [NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android: [nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. ボードに電源を入れ、スマートフォンの NFC エリアをアンテナに近づけます。ブラウザが `http://www.nordicsemi.com` を開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-4.jpg" style={{width:200, height:'auto'}}/></div>



3. NFC Tools（または同等のアプリ）を使用して、自分の NDEF メッセージでタグを上書きします。これは読み書き可能なサンプルなので、自分の別の URL を入力してタグにタップして書き込むことができ、次にタグを読み取ったときには内容が変更されています。

<div className="table-center">
<table align="center">
<tr>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-2.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-5.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-1.jpg" style={{width:200, height:'auto'}}/></div></td>
</tr>
</table>
</div>




## まとめ

NFC は、データの受け渡し、低消費電力でのウェイクアップ、ペアリングなど、多くのシナリオで再利用できます。nRF Connect SDK には、それぞれに対応したサンプルが同梱されています。この読み書きサンプルを拡張して、たとえば NFC による低消費電力ウェイクアップとモーター制御を組み合わせたシンプルなスマートロックなど、実際のアプリケーションを構築することもできます。アンテナのはんだ付けとサンプルの実行が完了したら、あとはあなた自身のアイデアと、オープンソースコミュニティへの貢献次第です。




## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
