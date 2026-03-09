---
description: Reachy Mini のマイクアセンブリ内の破損した FPC ケーブルを交換するためのステップバイステップチュートリアルです。
title: マイクの FPC ケーブルを交換する
slug: /reachymini_troubleshooting_change_mic_fpc_cable
keywords:
  - fpc cable
  - microphone
  - replacement
  - repair
  - tutorial
  - damaged cable
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_troubleshooting_change_mic_fpc_cable/
---

# チュートリアル：Reachy Mini のマイクの FPC ケーブルを交換する方法

## はじめに
マイクの FPC ケーブルが破損していると、マイクが動作しなくなる場合があります。このチュートリアルでは、Reachy Mini のマイクの FPC ケーブルを交換する手順を説明します。

## 破損した FPC ケーブルの例
以下は、マイクの破損した FPC ケーブルの一例です：
![Damaged FPC cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/fpc_collage.jpg)

## マイク用の新しい FPC ケーブル
マイクの FPC ケーブルを交換するには、元のケーブルと同じ仕様の新しい FPC ケーブルを用意する必要があります。

マイクケーブルの仕様は次のとおりです：
- FFC/FPC フラットフレキシブルケーブル
- 12 ピン
- 0.5mm ピッチ
- Type A（コネクタが同じ面）
- 長さ 15mm

マイクケーブルの交換品を探す際の参考例をいくつか挙げます：
- [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
- [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

## マイクの FPC ケーブルを交換する手順
1. Reachy Mini の電源を切り、電源ケーブルを抜きます。
2. 組み立てガイドの手順に従って、Reachy Mini の頭部を開きます。
3. マイクと、それに接続されている FPC ケーブルの位置を確認します。
4. 頭部のボードから FPC ケーブルを慎重に取り外します。

これで、下の写真のように、破損した FPC ケーブルが付いたマイク＋頭部上側アセンブリが手元にある状態になります：
![Microphone assembly with damaged FPC cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/microphone_assembly.jpg)

5. まず片側から、ゴム製の防振ケースをそっと開きます。工具は不要で、指でつまんでめくるだけで構いません。
![Peeling off the rubber isolation case](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/peeling_rubber_case_1.jpg)
6. 反対側も同様に、ゴム製の防振ケースをめくります。急に強く引っ張らないよう注意してください。
![Peeling off the rubber isolation case](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/peeling_rubber_case_2.jpg)
7. ゴム製の防振ケースを取り外し、脇に置いておきます。
![Rubber isolation case removed](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/rubber_case_removed.jpg)
8. これで FPC ケーブルとマイク基板が見えるようになります。黒いテープをそっと剥がし、マイク基板から FPC ケーブルを外します。コネクタを傷つけないよう注意してください。
![Disconnecting the FPC cable from the microphone board](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/disconnect_fpc_microphone.jpg)
9. 新しい FPC ケーブルを取り、先ほどとは逆の手順でマイク基板に接続します。しっかりと接続されていることを確認しますが、力を入れすぎないようにしてください。
10. マイクアセンブリにゴム製の防振ケースを戻し、軽く押して所定の位置に固定します。

最後に、新しい FPC ケーブルを頭部のボードに接続し、組み立てガイドの手順に従って Reachy Mini の頭部を再組み立てします。
