---
title: LCD_16-2_Characters-Green_Yellow_back_light
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/LCD_8-2_Characters-Blue_back_light/
slug: /ja/LCD_16-2_Characters-Green_Yellow_back_light
last_update:
  date: 05/15/2025
  author: matthew
---


![](http://bz.seeedstudio.com/depot/images/product/lcd1621n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-162-characters-green-yellow-back-light-p-62.html?cPath=163_164)

## 注意事項

---

1. LCD パネルはガラスで作られています。機械的な衝撃（例：高い場所からの落下）は LCD モジュールを損傷させる可能性があります。

2. ディスプレイの表面に過度の力を加えないでください。表示色が異常に変化する可能性があります。

3. LCD の偏光板は傷つきやすいです。可能であれば、取り付けの最終段階まで LCD 保護フィルムを剥がさないでください。

4. LCD モジュールを分解または再加工しようとしないでください。

5. LCD を清掃する際は、イソプロピルアルコールまたはエチルアルコールのみを使用してください。他の溶剤（例：水）は LCD を損傷する可能性があります。

6. LCD モジュールを取り付ける際は、ねじれ、歪み、変形がないことを確認してください。

7. ケースと LCD パネルの間に十分なスペース（クッション付き）を確保し、外部からの力が加わらないようにしてください。そうしないと、LCD が損傷したり、表示結果が劣化する可能性があります。

8. LCD モジュールは側面を持って取り扱ってください。ヒートシールや TAB に力を加えて持たないでください。

9. LCD モジュールの部品に力を加えないでください。目に見えない損傷や信頼性の低下を引き起こす可能性があります。

10. LCD モジュールは静電気によって簡単に損傷する可能性があります。最適な静電気防止作業環境を維持して LCD モジュールを保護してください。

11. LCD から保護フィルムを剥がす際、静電気により異常な表示パターンが発生する場合があります。これは正常であり、短時間で元に戻ります。

12. LCD パネルの鋭利なエッジで怪我をしないよう注意してください。

13. LCD モジュールを絶対最大定格を超えて操作しないでください。

14. 信号線をできるだけ短くして、ノイズ信号が LCD モジュールに適用されるのを防いでください。

15. 電源供給なしで LCD モジュールに信号を適用しないでください。

16. IC チップ（例：TAB または COG）は光に敏感です。強い照明環境では誤動作を引き起こす可能性があります。光を遮断する構造のケースを推奨します。

17. 温度ショックにより LCD モジュールの信頼性が低下する可能性があります。

18. LCD モジュールを保管する際は、直射日光、高湿度、高温または低温への露出を避けてください。これらは LCD モジュールを損傷または劣化させる可能性があります。

## 回路図

---

### ブロック図

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-wbl-block-162.JPG)

## 仕様

---

* LCD 表示モード: STN、ポジティブ、トランスフレクティブ

* 表示色: ディープブルー/イエローグリーン

* 視野角: 6H

* 駆動方式: 1/16 デューティ、1/5 バイアス

* バックライト: イエローグリーン LED バックライト

* 外形寸法: 80*36*15.8 MAX

:::note

1. 色調は温度や駆動条件によってわずかに変化する場合があります。<br />
2. 色は非アクティブ/背景色として定義されます。
:::

### AC 特性

V<sub>ss</sub>=0V,V<sub>DD</sub>=5V,T<sub>OP</sub>=25℃

<table>
<tr>
<th>項目</th>
<th>記号</th>
<th>最小</th>
<th>典型</th>
<th>最大</th>
<th>単位</th>
</tr>
<tr>
<td width="200px">E サイクル時間</td>
<td width="100px">tc</td>
<td width="100px">1500</td>
<td width="100px"> -</td>
<td width="100px"> -</td>
<td width="100px">ns</td>
</tr>
<tr>
<td>E 高レベル幅</td>
<td>twh</td>
<td>700</td>
<td> -</td>
<td> -</td>
<td>ns</td>
</tr>
<tr>
<td>E 低レベル幅</td>
<td>twl</td>
<td>700</td>
<td> -</td>
<td> -</td>
<td>ns</td>
</tr>
<tr>
<td>E 立ち上がり時間</td>
<td>tr</td>
<td> -</td>
<td> -</td>
<td>18</td>
<td>ns</td>
</tr>
<tr>
<td>E 立ち下がり時間</td>
<td>tf</td>
<td> -</td>
<td> -</td>
<td>18</td>
<td>ns</td>
</tr>
<tr>
<td>アドレスセットアップ時間</td>
<td>tas</td>
<td>5</td>
<td> -</td>
<td> -</td>
<td>ns</td>
</tr>
<tr>
<td>アドレスセットアップ時間</td>
<td>tasu</td>
<td>210</td>
<td> -</td>
<td> -</td>
<td>ns</td>
</tr>
<tr>
<td>アドレス保持時間</td>
<td>tah</td>
<td>15</td>
<td> -</td>
<td> -</td>
<td>ns</td>
</tr>
<tr>
<td>データセットアップ時間</td>
<td>tdsw</td>
<td>300</td>
<td> -</td>
<td> -</td>
<td>ns</td>
</tr>
<tr>
<td>データ遅延時間</td>
<td>td</td>
<td> -</td>
<td> -</td>
<td> 480</td>
<td>ns</td>
</tr>
<tr>
<td>データ保持時間（書き込み）</td>
<td>tdhw</td>
<td>15</td>
<td> -</td>
<td> -</td>
<td>ns</td>
</tr>
<tr>
<td>データ保持時間（読み取り）</td>
<td>tdhr</td>
<td>30</td>
<td> -</td>
<td> -</td>
<td>ns</td>
</tr>
</table>
<table >
<tr>
<td><div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-WTiming.jpg" /></div>
</td>
<td><div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-RTiming.jpg" /></div>
</td></tr>
<tr>
<td><strong>ホスト書き込みタイミング図</strong></td>
<td><strong>ホスト読み取りタイミング図</strong></td>
</tr>
</table>

## ピン定義と定格

---
<table>
<tr>
<th>ピン番号</th>
<th>ピン名</th>
<th>I/O</th>
<th>説明</th>
</tr>
<tr>
<td width="100px">1</td>
<td width="100px">VSS</td>
<td width="100px">電源</td>
<td width="500px">負電源供給、グラウンド(0V)</td>
</tr>
<tr>
<td>2</td>
<td>VDD</td>
<td>電源</td>
<td>正電源供給</td>
</tr>
<tr>
<td>3</td>
<td>V0</td>
<td>電源</td>
<td>LCDコントラスト参照</td>
</tr>
<tr>
<td>4</td>
<td>RS</td>
<td>入力</td>
<td>
* RS=HIGH:DB0-DB7=表示RAMデータ
* RS=LOW:DB0-DB7=命令データ
</td>
</tr>
<tr>
<td>5</td>
<td>R/W</td>
<td>入力</td>
<td>
読み取りモードの場合 R/W=HIGH: LCDモジュールからデータを読み取り、データはDB0-DB7に表示され、E=Hでデバイスが選択されている間にホストによって読み取ることができます。
書き込みモードの場合 R/W=LOW: LCDモジュールにデータを書き込み、データはDB0-DB7に表示され、E=H->Lでデバイスが選択されている間にLCDモジュールに書き込まれます。
</td>
</tr>
<tr>
<td>6</td>
<td>E</td>
<td>入力</td>
</tr>
<tr>
<td>7</td>
<td>DB0</td>
<td>I/O</td>
<td rowspan="3">データバス; 表示データまたは命令データ用の三状態I/O端子</td>
</tr>
<tr>
<td>..</td>
<td>..</td>
<td>..</td>
</tr>
<tr>
<td>14</td>
<td>DB7</td>
<td>I/O</td>
</tr>
<tr>
<td>15</td>
<td>CS1</td>
<td>入力</td>
<td>チップ選択、CS1=1(*1)の場合 LCDモジュールの左側(64列)へのアクセスを有効にします。</td>
</tr>
<tr>
<td>16</td>
<td>CS2</td>
<td>入力</td>
<td>チップ選択、CS2=1(*1)の場合 LCDモジュールの右側(64列)へのアクセスを有効にします。</td>
</tr>
<tr>
<td>17</td>
<td> /RST</td>
<td>入力</td>
<td>リセット信号 /RST = Lの場合、表示オフ、表示開始ラインレジスタが0になる、コマンドや命令データは受け付けられない。/RST = Hの場合、通常動作</td>
</tr>
<tr>
<td>18</td>
<td>VOUT</td>
<td>出力</td>
<td>V0用の電源ブースター出力</td>
</tr>
<tr>
<td>19</td>
<td>BLA</td>
<td>電源</td>
<td>LEDバックライト用の正電源</td>
</tr>
<tr>
<td>20</td>
<td>BLK</td>
<td>電源</td>
<td>LEDバックライト用の負電源</td>
</tr>
</table>

注意:

表示または命令データはLCDモジュールのドライバ/コントローラに個別または同時に書き込むことができます。

LCDモジュール内のドライバ/コントローラのいずれかからのみ表示または命令データを読み取る必要があります。そうしないと予期しないデータ衝突が発生する可能性があります。

## 機械的寸法

---
外形寸法: 98.0*60.0*13.7MAX  
(詳細は添付の外形図を参照してください)

## 使用方法

---

### 内部レジスタ

LCDモジュールの各セクションには3つのレジスタがあります。それぞれ独立して制御することができます。

**ページ(X)アドレスレジスタ**

Xアドレスレジスタは内部表示データRAMのページを指定します。カウント機能は利用できません。アドレスは命令によって設定する必要があります。

**列(Y)アドレスカウンタ**

Yアドレスカウンタは内部表示データRAMのアドレスを指定します。命令によって設定でき、表示データの読み取りまたは書き込み操作によって自動的に1ずつ増加します。

**表示開始ライン(Z)レジスタ**

Zアドレスレジスタは表示データRAMのLCDトップラインを示します。LCD上でスクロール表示パターンを使用するために利用できます。

### プログラミング

---
**基本設定**

LCDモジュールを正しく駆動し、正常に表示するために、以下の設定を使用してください。

* 表示開始ライン(Zアドレス)=0

* LCD表示=オン

:::note

1. これらの設定/コマンドは起動時にLCDモジュールに発行する必要があります。<br />
2. 詳細は「表示コマンド」セクションを参照してください。
:::

**LCD表示コントラストの調整**

LCDモジュールには可変抵抗器を接続してV0への参照を提供する必要があります。VRを調整することでLCD表示コントラストが変化します。推奨されるVRの値は25k～50kです。

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-162.JPG)

**LCDモジュールのリセット**

LCDモジュールは電源オン時に/RST端子を低レベルに設定することで初期化する必要があります。

/RSTが低レベルに設定されると、LCDモジュールは以下を実行します:

* 表示オフ

* 表示開始ラインレジスタが0になる。(Zアドレス=0)

/RSTが低レベルの間は、ステータス読み取りを除いて命令を受け付けることができません。そのため、ステータス読み取り命令によってDB4=0(/RSTクリア)およびDB7=0(準備完了)を確認した後に他の命令を実行してください。初期電源オン時の電源供給条件は以下の通りです:

<table >
<tr>
<th>項目</th>
<th>記号</th>
<th>最小値</th>
<th>典型値</th>
<th>最大値</th>
<th>単位</th>
</tr>
<tr>
<td width="200px">リセット時間</td>
<td width="100px">trs</td>
<td width="100px">2.0</td>
<td width="100px"> -</td>
<td width="100px"> -</td>
<td width="100px"> μs</td>
</tr>
<tr>
<td>立ち上がり時間</td>
<td>tr</td>
<td> -</td>
<td> -</td>
<td>150</td>
<td>ns</td>
</tr>
</table>

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-trtx.jpg)

## リソース

* [データシート](https://bz.seeedstudio.com/depot/datasheet/LMB162ABC-Manual-Rev0.2.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>