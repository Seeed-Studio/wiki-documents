---
title: ミニはんだごて
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Mini_Soldering_Iron/
slug: /ja/Mini_Soldering_Iron
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_product_view.jpg)

ミニはんだごては、スリムで軽量、正確な温度制御と高速加熱（室温から300℃まで10秒）のはんだごてで、OLEDディスプレイを備えています。これは、開発キットに欠かせないツールとなるでしょう。また、スリープモードや過熱通知機能も備えています。さらに、組み立てが簡単で、ESD（静電気放電）対策も施されています（アースクランプを通じて）。このはんだごての温度範囲は100～400℃（212～752℉）で、異なる状況に対応するための2種類の一体型（ヒーター付き）コンパクトなはんだごてチップが含まれています。USBマイクロタイプBインターフェースを使用して設定を構成することができます。<sup>[1]</sup>

<sup>[1]</sup>このページでは、迅速なスタート方法と主要な情報のみを示しています。詳細な情報については、付属のマニュアルを参照してください。

|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0Europe-Standard-p-2592.html?ref=newInBazaar)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0US%C2%A0Standard-p-2593.html?ref=newInBazaar)|
|:---:|:---:|
|EUエディション用|USエディション用|

## 特徴
---
*   正確な温度制御（温度安定性±2%以内）

*   スリムで軽量なデザイン、長時間作業でも疲れにくい

*   高効率の高速加熱

*   個人の安全性を高めるための分離型電源アダプター

*   アースクランプによるESD対策

*   USBマイクロタイプBインターフェースによるカスタマイズ可能なシステム設定とファームウェア更新

*   手動キャリブレーション不要

*   温度単位の切り替え可能（℃または℉）

## 仕様
---
| 項目 | 仕様 |
|------|------|
| 画面 | OLED |
| USBインターフェース | USBマイクロタイプB |
| 重量 | 33g（電源アダプターを除く） |
| 電力 | 65W |
| 入力電圧（電源アダプター用） | 100 ~ 240 V |
| 温度範囲 | 100 ~ 400 ℃（212 ~ 752 ℉） |
| チップからアースまでのインピーダンス | 2 Ω |
| 温度安定性 | ± 2% |
| スリープモード温度 | 200℃（392℉）、調整可能 |

## 部品リスト
---

| 部品名 | 数量 |
|--------|------|
| ミニはんだごて（本体） | 1個 |
| PCBはんだ付けキット | 1個 |
| はんだごてチップタイプ-BC2 | 1個 |
| はんだごてチップタイプ-B2 | 1個 |
| はんだごてホルダー | 1個 |
| PCBはんだ付けキット | 1個 |
| DC5525電源アダプター | 1個 |
| アースクランプ | 1個 |
| 六角レンチ（予備ネジ2本付き） | 1個 |
| マニュアル | 1個 |

## はじめに
---
**注意:** ここでは一般的な開発環境を例として示しています。  
このセクションでは、このはんだごての基本的な操作方法を説明します。詳細については、パッケージに含まれているマニュアルを参照してください。

### 分解図

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_exploded_view_s.jpg)
1. はんだごて先端固定ネジ
2. ボタンA
3. ボタンB
4. セットネジ
5. 電源ポート
6. Micro USB
7. DC5525 12-24Vポート
8. はんだごて先端接続ポート
9. はんだごて接続側
10. はんだごて加熱要素

### はんだごての組み立て

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_installation_guide.jpg)

1.  先端セットネジを緩め、はんだごて先端を接続ポートに挿入し、ネジを締めます。

2.  アース線をアースセットネジに接続します。

3.  DCコネクタをミニはんだごてに接続し、電源コードを差し込み、デバイスをオンにします。

### 基本操作

**温度調整**

ボタンを押して温度を調整します。

ボタンAを押すと温度が上昇し、ボタンBを押すと温度が下降します。

**キャリブレーション**

1.  待機モード（加熱していない状態）でボタンBを押して温度計モードに入ります。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_1.jpg)

2.  ボタンBとボタンAを同時に押して温度計モードに入ります。キャリブレーション操作は自動的に実行され、手動操作は不要です。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_2.jpg)

3.  約30秒後、いずれかのボタンを押し続けてキャリブレーションモードを終了します。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_3.jpg)

4.  左の図は自動キャリブレーションが成功した場合を示し、右の図は自動キャリブレーションが失敗した場合を示します。自動キャリブレーションが失敗した場合は、前の手順を再度繰り返してください。

### 簡単な練習

パッケージに含まれている葉の形をしたPCBボードにLEDと抵抗をはんだ付けするクイズを試すことができます。

1.  上記の手順に従ってはんだごてを組み立てます。
2.  PCBボードに4つのLEDと4つの抵抗をはんだ付けします。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice_s.JPG)

_**注意**_：LEDは双極性部品であるため、正しい方向に合わせる必要があります。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice-directions-s.jpg)

_**注意**_：電子部品をはんだ付けする際には、以下の基本的な手順に従う必要があります：

- はんだ付け箇所に少量のはんだを塗り、ピンの特定の箇所にもはんだを塗ります。
- はんだごてを使用して、2つの箇所を接合します。

## リソース
---
[ユーザーマニュアル](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/res/Mini_Soldering_Iron_manual.zip)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>