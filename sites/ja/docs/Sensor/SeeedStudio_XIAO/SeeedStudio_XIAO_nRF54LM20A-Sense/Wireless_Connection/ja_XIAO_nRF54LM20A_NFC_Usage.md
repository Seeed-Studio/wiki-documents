---
title: XIAO nRF54LM20A Sense 向け NFC
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - nfc
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.webp
slug: /xiao_nrf54lm20a_with_nfc
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-25'
updatedAt: '2026-05-25'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_nfc/
---

# XIAO nRF54LM20A Sense 向け NFC

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.png" style={{width:400, height:'auto'}}/></div>
<br/>
近距離無線通信（NFC）は、2 つのデバイス間で少量のデータをワイヤレス転送するための技術です。非常にシンプルな通信プロトコルを使用するため、Bluetooth® Low Energy よりも素早く接続できます。ただし、NFC は磁気誘導を利用して通信を行うため、デバイス同士が接続するには非常に近く（10 cm 未満）にある必要があります。】

- *Nordic シリーズチップ向けの NFC チュートリアルおよびリファレンスについては、[Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-3.2.0/page/nrf/protocols/nfc/index.html) を参照してください。*
- *NFC の技術仕様は [NFC Forum specification overview](https://nfc-forum.org/build/specifications) から入手できます。*

XIAO nRF54LM20A には、NFC 機能をさらに探索・活用するための NFC インターフェースが予約されています。

:::tip

このチュートリアルは VS Code と nRF Connect Extension を前提としています。これらに不慣れな場合は、[XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_ncs/) を参照してください。

:::

## ハードウェアの準備

実験を始める前に、XIAO nRF54LM20A と Nordic NFC アンテナを用意する必要があります。

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

:::tip

Nordic NFC アンテナは Seeed Studio Bazaar では単体販売されていないため、他の販売元から購入する必要があります。

:::

### アンテナのはんだ付け

XIAO nRF54LM20A では、外部 NFC アンテナ用のデフォルトピンは P1.01 と P1.02 で、シルク印刷上では N1 と N2 と表示されています。以下のはんだ付け例を参照してください。

- 接続前の回路図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_1.png" style={{width:600, height:'auto'}}/></div>
<br/>
- 実配線図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_2.jpg" style={{width:600, height:'auto'}}/></div>
<br/>
:::caution

このはんだ付け作業は比較的難しく、高度なはんだ付けスキルが必要です。人身事故やデバイスの損傷を避けるため、安全対策に十分注意してください。

:::

## ソフトウェア

:::tip

- このセクションでは、Nordic Connect SDK のサンプルコードに基づいて NFC の使用方法を説明します。
<!-- - 由于 Platfrom IO 下我们没有编写NFC的设备树支持，所以无法使用 -->

:::

### NFC Records text

この例では、NFC を介してテキスト情報を読み取る方法を示します。

1. 拡張機能内で空のルーチンを作成し、既存のルーチンをコピーするオプションを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. nfc と入力し、NFC Records text を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_5.png" style={{width:800, height:'auto'}}/></div>

3. 保存先パスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_4.png" style={{width:800, height:'auto'}}/></div>

4. プロジェクトを開き、対応する拡張機能の下に XIAO nRF54LM20A の設定を追加してコンパイルします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_6.png" style={{width:800, height:'auto'}}/></div>

5. ターミナルを開き、`west flash` コマンドを入力して、ファームウェアを XIAO nRF54LM20A に書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_7.png" style={{width:800, height:'auto'}}/></div>

#### 結果

この実験を行うには、NFC 機能を備えたスマートフォンを用意してください。

1. NFC 読み取り情報をより詳細に確認するには、お使いのシステムに対応したアプリをダウンロードする必要があります。

- iOS ：[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. スマートフォンの NFC エリアを NFC アンテナに近づけて、詳細な NFC 情報を読み取ります。

スマートフォンに表示されるテキスト情報は次のとおりです：

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```

<div className="table-center">
<table align="center">
<tr>
      <td>NFC Tools</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_8.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_9.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

### NFC Launch App

このセクションでは NFC 機能を扱います。**nRF Toolbox for Bluetooth LE** を検索してください。

1. 拡張機能内で空のサンプルプロジェクトを作成し、既存のサンプルをコピーするオプションを選択してから **NFC Launch App** を選択します。[NFC Records text](#NFC-Records-text) を参照して設定およびコンパイルを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_10.png" style={{width:800, height:'auto'}}/></div>

2. ターミナルを開き、`west flash` コマンドを入力して XIAO nRF54LM20A に書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_11.png" style={{width:800, height:'auto'}}/></div>

#### 結果

1. NFC 読み取り情報をより詳細に確認するには、お使いのシステムに対応したアプリをダウンロードする必要があります。

- iOS ：[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. スマートフォンの NFC センサーを NFC アンテナに近づけます。ブラウザが起動して「no.nordicsemi.android.nrftoolbox」を検索し、読み取り履歴が nRF NFC Toolbox に表示されます。

<div className="table-center">
<table align="center">
<tr>
      <td>Chrome</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_12.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_13_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

## まとめ

NFC 機能は、データ書き込みや低消費電力でのウェイクアップなど、さまざまなシナリオで再利用できます。nRF Connect SDK には対応するサンプルコードが用意されています。これらのサンプルを拡張して実際のアプリケーションに応用できます。例えば、NFC の低消費電力ウェイクアップとモーター制御を組み合わせることで、日常使用に適したシンプルなスマートロックを実現できます。

さらに、上記の例を通じて、XIAO nRF54LM20A 上での NFC 実装について基本的な理解が得られたと考えています。皆さまの創造的なアイデアやオープンソースコミュニティへの貢献を楽しみにしています。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
