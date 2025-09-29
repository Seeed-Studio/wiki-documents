---
title: LCD 8*2 キャラクター - 青色バックライト
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/LCD_8-2_Characters-Blue_back_light/
slug: /ja/LCD_8-2_Characters-Blue_back_light
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](http://bz.seeedstudio.com/depot/images/product/lcd821n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-82-characters-blue-back-light-p-120.html?cPath=163_164)

## 回路図

---
![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-block.JPG)

## 仕様

---

### 絶対最大定格

<table>
<tr>
<th>項目</th>
<th>記号</th>
<th>最小値</th>
<th>最大値</th>
<th>単位</th>
</tr>
<tr>
<td>供給電圧 (ロジック)</td>
<td>V<sub>DD</sub>-V<sub>SS</sub></td>
<td> -0.3</td>
<td>7.0</td>
<td>V</td>
</tr>
<tr>
<td>供給電圧 (LCD)</td>
<td>V<sub>DD</sub>-V<sub>O</sub></td>
<td> -0.3</td>
<td>13.0</td>
<td>V</td>
</tr>
<tr>
<td>入力電圧</td>
<td>V<sub>I</sub></td>
<td> -0.3</td>
<td>VDD+0.3</td>
<td>V</td>
</tr>
<tr>
<td>動作温度</td>
<td>T<sub>opr</sub></td>
<td>0</td>
<td>50</td>
<td>℃</td>
</tr>
<tr>
<td>保存温度</td>
<td>T<sub>stg</sub></td>
<td> -10</td>
<td>60</td>
<td>℃</td>
</tr></table>

### 機械的データ

<table>
<tr>
<th>項目</th>
<th>標準寸法</th>
<th>単位</th>
</tr>
<tr>
<td>モジュールサイズ(W×H×T)</td>
<td>58.0×32.0×9.5</td>
<td>mm</td>
</tr>
<tr>
<td>表示エリア(W×H)</td>
<td>36.0×15.0</td>
<td>mm</td>
</tr>
<tr>
<td>キャラクターサイズ(W×H)</td>
<td>2.45×5.0</td>
<td>mm</td>
</tr>
<tr>
<td>ドットサイズ(W×H)</td>
<td>0.45×0.5</td>
<td>mm</td>
</tr>
<tr>
<td>重量</td>
<td></td>
<td>g</td>
</tr></table>

### 電気的特性

(V<sub>DD</sub>=5V±0.25V)

<table>
<tr>
<th>項目</th>
<th>記号</th>
<th>試験条件</th>
<th>最小値</th>
<th>標準値</th>
<th>最大値</th>
<th>単位</th>
</tr>
<tr>
<td>入力高電圧</td>
<td>V<sub>IH</sub></td>
<td> -</td>
<td>2.2</td>
<td> -</td>
<td>V<sub>DD</sub></td>
<td>V</td>
</tr>
<tr>
<td>入力低電圧</td>
<td>V<sub>IL</sub></td>
<td> -</td>
<td> -0.3</td>
<td> -</td>
<td> 0.6</td>
<td>V</td>
</tr>
<tr>
<td>出力高電圧</td>
<td>V<sub>OH</sub></td>
<td>I<sub>OH</sub>=0.3mA</td>
<td>2.4</td>
<td> -</td>
<td>V<sub>DD</sub></td>
<td>V</td>
</tr>
<tr>
<td>出力低電圧</td>
<td>V<sub>OL</sub></td>
<td>I<sub>OL</sub>=1.2mA</td>
<td>0</td>
<td> -</td>
<td>0.4</td>
<td>V</td>
</tr>
<tr>
<td>供給電流</td>
<td>I<sub>DD</sub></td>
<td>V<sub>DD</sub>=5.0V</td>
<td> -</td>
<td>1.2</td>
<td>3.0</td>
<td>mA</td>
</tr>
<tr>
<td>LCD駆動電圧</td>
<td>V<sub>DD</sub> - V<sub>O</sub></td>
<td>Ta=25℃</td>
<td> -</td>
<td>5.0</td>
<td> -</td>
<td>V</td>
</tr>
</table>

### LEDバックライト仕様 (Ta=25℃)

<table>
<tr>
<th>項目</th>
<th>記号</th>
<th>標準値</th>
<th>最大値</th>
<th>単位</th>
</tr>
<tr>
<td>順方向電圧</td>
<td>V<sub>f</sub></td>
<td>4.05</td>
<td>4.25</td>
<td>V</td>
</tr>
<tr>
<td>順方向電流</td>
<td>I<sub>f</sub></td>
<td>60</td>
<td> -</td>
<td>mA</td>
</tr>
<tr>
<td>発光波長</td>
<td>λ<sub>p</sub></td>
<td>568</td>
<td> -</td>
<td>nm</td>
</tr>
</table>

## ピン定義と定格

---
<table>
<tr>
<th>ピン</th>
<th>記号</th>
<th>レベル</th>
<th>機能</th>
</tr>
<tr>
<td>1</td>
<td>V<sub>SS</sub></td>
<td> -</td>
<td>GND(0V)</td>
</tr>
<tr>
<td>2</td>
<td>V<sub>DD</sub></td>
<td> -</td>
<td>ロジック用供給電圧 (+5V)</td>
</tr>
<tr>
<td>3</td>
<td>V<sub>O</sub></td>
<td> -</td>
<td>LCD駆動電圧</td>
</tr>
<tr>
<td>4</td>
<td>RS</td>
<td> H/L</td>
<td>H:データ L:命令コード</td>
</tr>
<tr>
<td>5</td>
<td>R/W</td>
<td> H/L</td>
<td>H:読み取り L:書き込み</td>
</tr>
<tr>
<td>6</td>
<td>E</td>
<td> H,H-&gt;L</td>
<td>イネーブル信号</td>
</tr>
<tr>
<td>7</td>
<td>DB0</td>
<td> H/L</td>
<td rowspan="8">データバスライン</td>
</tr>
<tr>
<td>8</td>
<td>DB1</td>
<td> H/L</td>
</tr>
<tr>
<td>9</td>
<td>DB2</td>
<td> H/L</td>
</tr>
<tr>
<td>10</td>
<td>DB3</td>
<td>H/L</td>
</tr>
<tr>
<td>11</td>
<td>DB4</td>
<td> H/L</td>
</tr>
<tr>
<td>12</td>
<td>DB5</td>
<td> H/L</td>
</tr>
<tr>
<td>13</td>
<td>DB6</td>
<td> H/L</td>
</tr>
<tr>
<td>14</td>
<td>DB7</td>
<td> H/L</td>
</tr>
<tr>
<td>15</td>
<td>LEDA</td>
<td> -</td>
<td rowspan="2">LEDバックライト電源</td>
</tr>
<tr>
<td>16</td>
<td>LEDK</td>
<td> -</td>
</tr>
</table>

## 機械的寸法

![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-dimen.JPG)

## リソース

* [Arduino用デモコード](https://www.seeedstudio.com/depot/images/product/LCD0820.pde)

* [データシート](https://www.seeedstudio.com/depot/datasheet/LMB0820-info.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>