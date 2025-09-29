---
title: DSO Nano v3
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/DSO_Nano_v3
last_update:
  date: 05/15/2025
  author: gunengyu
---


<!-- ---
name: DSO Nano v3
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html
oldwikiname:  DSO Nano v3
prodimagename:  Nano_v3.jpg
surveyurl: https://www.research.net/r/DSO_Nano_v3
sku:     109990013
--- -->
![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Nano_v3.jpg)

DSO Nano v3は、ポータブルなデジタルストレージオシロスコープです。32ビットARM Cortex-M3マイクロコントローラーをベースにしており、320×240のカラーディスプレイ、USBポート、充電機能を備えています。コンパクトで操作が簡単であり、学校の実験室、電気修理、エンジニアリングの基本的なニーズを満たします。DSO Nanoのバージョン3は、バージョン2とは異なり、白いプラスチックケースを使用していません。その代わりに、より耐久性があり頑丈な黒い金属ケースを採用しています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)

## 特徴

---

* ポータブルで軽量
* カラーディスプレイ
* 波形の保存と再生
* 6つのトリガーモード
* 200KHzのアナログ帯域幅
* 完全な測定マーカーと信号特性
* 内蔵信号ジェネレーター
* アクセサリーが利用可能
* オープンソースのハードウェアとファームウェア

## 一般的な安全規則

---
安全を確保し、製品や接続されたデバイスへの損害を避けるために、以下の安全規則をよくお読みください。可能な危険を避けるため、この製品を規則に従って使用してください。

* **適切な電源コードを使用してください。** 国や地域で認証された専用の電源コードを使用してください。
* **正しく接続/切断してください。** プローブやテストリードが電源に接続されている状態でプラグを抜き差ししないでください。電流プローブを抜き差しする前に、テスト対象回路の電源を切ってください。
* **すべての端子定格を守ってください。** 火災や感電を避けるため、DC100V以上の信号を測定しないでください。そうしないと、デバイスが破損する可能性があります。接続前に、関連する定格の詳細情報を知るためにマニュアルをよくお読みください。
* **湿気の多い環境で操作しないでください。**

* **可燃性/爆発性の環境で操作しないでください。**

* **製品の表面を清潔で乾燥した状態に保ってください。**

## 仕様

---

### 主な仕様

| 項目 | 仕様 |
|------|------|
| ディスプレイ | フルカラー 2.8インチ TFT LCD 65K 320×240 |
| アナログ帯域幅 | 0 - 200KHz |
| 最大サンプルレート | 1Msps 12ビット |
| サンプルメモリ深度 | 4096ポイント |
| 水平感度 | 1uS/Div~10S/Div |
| 水平位置 | インジケーターで調整可能 |
| 垂直感度 | 10mV/Div~10V/Div (×1プローブ使用時)<br/>0.5V/Div~100V/Div (×10プローブ使用時) |
| 垂直位置 | インジケーターで調整可能 |
| 入力インピーダンス | >500KΩ |
| 最大入力電圧 | 40Vpp (×1プローブ使用時) |
| カップリング | DC |
| トリガーモード | オート、ノーマル、シングル、なし、スキャン、フィット<br/>上昇/下降エッジ/レベルトリガー<br/>トリガーレベルはインジケーターで調整可能<br/>トリガー感度はインジケーターで調整可能 |
| 波形機能 | 自動測定：周波数、周期、デューティサイクル、ピーク電圧、RMS電圧、平均電圧、DC電圧<br/>マーカーを使用した正確な垂直測定<br/>マーカーを使用した正確な水平測定<br/>ホールド/ラン |
| 信号ジェネレーター | 10Hz~1MHz 方形波 |
| 波形保存 | Micro SDカード |
| USB経由でPC接続 | SDカードリーダーとして |
| アップグレード | USB |
| 電源供給 | 500mAh 3.7V リチウムバッテリー / USB |
| 寸法 (プローブなし) | 91mm×62mm×13mm |

### 構造

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Structure.jpg)

注意: 私のデバイス（シリアル番号 E1C5A0C1）には、示されている「TFカードスロット」がありません。金属ケースにはスロットがなく、ケースを開けても基板上にコネクタが存在せず、コネクタを取り付ける場所すらありません。

## 使用方法

---

### 基本操作

**左/右ボタン**は主にメニュー項目をナビゲートするために使用されます。選択されたメニュー項目はハイライトされ、その対応する画面要素が点滅します。**上/下ボタン**を押して調整します。**OKボタン**はマーカーの表示/非表示を制御したり、操作を確定したりします。

**A（実行/停止）ボタン**を1回押すと、現在の表示がフリーズします。再度「A」を押すと再開します。**B（シフト）ボタン**はクイック機能に使用されます。

このテキスト全体で、調整可能な項目は<span style={{color: 'red'}}>赤</span>でラベル付けされています。

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2-user-interface-1.jpg)

### ユーザーインターフェース概要

画面は中央の表示エリアとその周囲の3つの操作バーに分かれています。上部のメニューは、信号表示のための最も頻繁に使用される調整を提供します。下部のステータスバーは、正確な測定結果とモニタリング状態を提供します。右側の機能アイコン列を使用して、より高度な機能を調整します。

### 信号のズーム

カーソルを<font color="red">垂直スケール</font>および<font color="red">時間基準</font>に移動して、信号表示を探索し始めます。上下ボタンを押して、電圧/目盛りまたは時間/目盛りを調整します。各「目盛り（div）」は画面のグリッド単位「ディビジョン」を指します。目盛りを数えて、簡単な測定を推定します。垂直スケールは10mV/divから10V/divまで、時間基準は1uS/divから10S/divまでの範囲です。時間基準が大きい場合、10S/divは画面全体を更新するのに120秒（12目盛り幅）かかるため、表示がフリーズしているように見えることがあります。

適切な電圧/目盛り設定でも波形が表示範囲外になる場合があります。波形を上下に移動して画面中央に配置するには、Y位置を変更します。<font color="red">Y位置マーカー</font>は、基準として0Vを示します。

ボタンAを押して現在の表示をフリーズ（<font color="red">状態</font>をHOLDに設定）し、再度押して更新を再開します（状態RUN）。状態がHOLDのとき、<font color="red">T0</font>アイコンを選択して上下ボタンを押すと、前後にパンできます。OKボタンを押して、X位置マーカー（黄色の点線の垂直線）を表示または非表示にします。

### トリガーモード

Nanoには6つのトリガーモードがあり、画面の左上隅からアクセスできます。これらは以下の通りです：

**AUTO**: 常に表示を更新し、トリガー時に同期します。  
**NORM（通常）**: トリガー時に同期波形を表示し、トリガーされない場合は空白になります。  
**SING（単一）**: トリガーされた波形を表示して保持し、次のトリガー前に再び空白になります。  
**SCAN**: 波形を画面上で左から右に繰り返しスイープします。  
**NONE**: トリガーを無視して非同期波形を更新します。  
**FIT**: 波形を表示するために垂直および水平スケールを自動調整します。

<table>
<caption> トリガーモードの比較表 </caption>
<tr>
<th> モード </th>
<th> トリガー </th>
<th> 波形表示 </th>
<th> 同期 </th>
<th> 使用例 </th>
</tr>
<tr>
<td width="150px"> AUTO </td>
<td width="150px"> はい </td>
<td width="200px"> 常に </td>
<td width="200px"> はい </td>
<td width="300px"> 一般的な使用 </td>
</tr>
<tr>
<td> NORM </td>
<td> はい </td>
<td> トリガー時 </td>
<td> はい </td>
<td> 周期信号の観察 </td>
</tr>
<tr>
<td> SING </td>
<td> はい </td>
<td> トリガー時 </td>
<td> 自動保持 </td>
<td> ランダムパルスのキャプチャ </td>
</tr>
<tr>
<td> SCAN </td>
<td> いいえ </td>
<td> 常に </td>
<td> いいえ </td>
<td> 信号の継続的なモニタリング </td>
</tr>
<tr>
<td> NONE </td>
<td> いいえ </td>
<td> 常に </td>
<td> いいえ </td>
<td> 非同期波形の観察 </td>
</tr>
<tr>
<td> FIT </td>
<td> はい </td>
<td> 自動調整 </td>
<td> はい </td>
<td> 周期信号の簡単な観察 </td>
</tr>
</table>

トリガーレベルを設定するには、カーソルを<font color="red">Vt = ??.?mV</font>に移動し、上下ボタンを押します。OKボタンを押してトリガーレベルマーカー（緑色の点線の水平線）を表示または非表示にします。トリガーを微調整するには、トリガー感度範囲<font color="red">TR</font>や<font color="red">トリガータイプ</font>を調整します。デフォルトでは、トリガータイプは<font color="red">up S</font>に設定されており、信号が下位トリガーラインから上位トリガーラインを越えるときにトリガーが発生します。<font color="red">Down S</font>は下降信号エッジでトリガーします。

これは特に高速で低振幅の信号を測定する際、ノイズによる誤トリガーを防ぐのに役立ちます。感度を0に設定すると、2つのトリガーレベルマーカーが重なり、レベルトリガーが得られます。詳細については、[オシロスコープのトリガーに関するWikipedia](https://en.wikipedia.org/wiki/Oscilloscope#Triggered_sweeps)を参照してください。

### 測定

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2measurement.jpg)

自動測定は、信号特性を迅速に探索するのに便利です。測定オプションには、周波数、周期、デューティサイクル、ピーク電圧、RMS電圧、平均電圧、DC電圧が含まれます。なお、周波数、周期、デューティサイクルはトリガー中のみ測定可能です。

より正確な測定を行うには、測定マーカーを使用します。T2とT1は時間マーカーを制御し、2本の垂直点線です。2つのマーカー位置間の正確な時間差は、画面下部の「時間測定」に表示されます。V1マーカーとV2マーカーは、画面中央下部の「電圧測定」結果パネル（「V1-V2=? V」）から直接調整できます。

メニュー項目でOKボタンを押すと、対応する線を画面上に表示または非表示にします。

### 波形の保存

波形はmicro SDカードに保存したり、ディスプレイに読み込んだりできます。この操作にはmicro SDカードが必要です（付属していません）。現在、SDHCカード（2GBを超える高速カード）はサポートされていないことに注意してください。以下の手順に従ってmicro SDカードをセットアップしてください：

1. SDカードがSPIモードをサポートしていることを確認します（最大メモリ：2GB）。
2. SDカードをFAT16ファイルシステムでフォーマットします。

microSDカードが準備されると、**FS**（ファイル保存）、**FL**（ファイル読み込み）、**SI**（画像保存）アイコンが有効になります。**FS**を選択してOKボタンを押すと波形を保存できます。また、**FL**を選択してOKボタンを押すとmicroSDカードから波形を読み込むことができます。さらに、**SI**を選択すると、オシログラムをPNG形式で保存することができます。

### 信号発生器

mini USBポートの下にある3.5mmオーディオジャックは信号発生器として使用されます。このジャックは10Hzから1MHzまでの矩形波を出力します。周波数はFo（周波数出力）を介して調整可能です。ピーク電圧は供給電力と同じであり、バッテリー駆動の場合は約3.7V、USB駆動の場合は5Vです。

### 電源供給

DSO Nanoは内部の500mAh LiPoバッテリーまたは外部のmini-USBポートから電力を供給できます。充電には約2時間20分かかり、4.12Vに達します。新品のユニットはバッテリーで約1時間しか動作しませんが、LiPoバッテリーが完全に充電されるとバッテリー寿命が延びます。

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2-charging.JPG)

### ファームウェアのアップグレード

ファームウェアをアップグレードするには、以下の手順を実行してください：

1. 最新の適用可能なファームウェアをPCにダウンロードします。

2. **"Down Key"**を押しながら電源をオンにして、DFUファームウェアアップグレードモードに入ります。

3. USBケーブルを使用してDSO Nano v3をPCに接続します。PC上にDFU V3_11_Aという名前のリムーバブルディスクが表示されます。このディスクのルートディレクトリにhexファームウェアをコピーします。ファームウェアの拡張子が「hex」から「rdy」に変わったら、DSO Nano v3を再起動します。これでファームウェアがアップグレードされます。

**注意**：複数のhexファイル（例：BenFファームウェア）がある場合は、各ファイルを1つずつコピーし、「RDY」に変わるのを待ってから次のファイルをコピーする必要があります。例えば、file1.hexとfile2.hexがある場合、以下の手順を実行します：

1. file1.hexをコピーする

2. file1.rdyを待つ

3. file2.hexをコピーする

4. file2.rdyを待つ

Windowsでは、各hexファイルをコピーした後に「ドライブ」が消え、rdyファイルとともに再表示されます。

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Firmware_Upgrades1.png)

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Firmware_Upgrades2.png)

## FAQ

---

* DSO Nano v3のハードウェアバージョンとファームウェアバージョンは何ですか？

  DSO Nano v3はハードウェアv2.6およびファームウェアapp v2.6です。これらはリソースで確認できます。

* DSO Nano v2とv3の主な違いは何ですか？

  実際には、両者は同じハードウェアとファームウェアを持ち、ファームウェアのアップグレードに使用されるDFUのバージョンも同じです。主な違いは筐体であり、DSO Nano v3は黒い金属製の筐体を持ち、DSO Nano v2は白いプラスチック製の筐体を持っています。

## リソース

---

* [DSO_Nano_V3_User_Manual v4.22.pdf](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DS201V_4.22%20User%20Manual%EF%BC%88Increase%20the%20alignment%20and%20hidden%20reference%20line%EF%BC%89.pdf)
* [DSO Nano Official Firmware V4.32](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DS201.V4.32.zip)
* [DSO Nano Official Firmware App2.6](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_2.6_firmware.zip)

* [BenF Firmware v3.64](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/BenF364_LIB353.zip)  
  **BenF**にこの素晴らしいファームウェアを共有していただき、**Alf**にDFU Ver3.22で動作するように調整していただきありがとうございます。なお、BenFファームウェアv3.64はV3の内部メモリに保存することができません。V3に外部カードスロットがない場合、画像やデータを保存することはできません。

* [DSO Nano Hardware v2.6 Layout.pdf](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V2.6_VCT_PCB_Layout.pdf)

* [DSO Nano Hardware v2.6 Shcematic.pdf](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V2.6_VCT_Schematic.pdf)

* [DSO_Nano_V3_User_Manual.pdf](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V3_User_Manual.pdf)

### DFU Hex/Binaries

DSOが壊れた場合に使用できます。

* [DFU_D329_VB_2M_SEEED_for_nano_v3.hex.zip](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_D329_VB_2M_SEEED_for_nano_v3.hex.zip)

* [DFU_A322_for_nano_v3.hex.zip](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_A322_for_nano_v3.hex.zip)

* [Bootloader_for_nano_v2.bin.zip](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/Bootloader_for_nano_v2.bin.zip)

* [DFU_D326_SD_MINI_for_hw1.7.hex.zip](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_D326_SD_MINI_for_hw1.7.hex.zip)

## 外部リンク

* [DSO Nano に関する SeeedStudio フォーラム](https://forum.seeedstudio.com/viewforum.php?f=22)

* [ポケットオシロスコープ-DS0201 フォーラム](http://www.minidso.com/bbs/thread.php?fid=6)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>