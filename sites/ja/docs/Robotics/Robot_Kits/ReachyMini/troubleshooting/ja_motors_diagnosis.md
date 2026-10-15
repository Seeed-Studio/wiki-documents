---
description: Reachy Mini のモーターに関する問題を検出して修復するために、Testbench アプリを使用した包括的なモーター診断およびトラブルシューティングガイド。
title: モーターの診断とトラブルシューティング
slug: /reachymini_troubleshooting_motors_diagnosis
keywords:
  - motors
  - diagnosis
  - troubleshooting
  - testbench
  - dynamixel
  - motor detection
  - reflashing
  - repair
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_troubleshooting_motors_diagnosis/
---

# モーター診断とトラブルシューティングガイド

このドキュメントでは、Reachy Mini ロボットのモーターに関連する一般的な問題を診断およびトラブルシューティングするためのガイドを提供します。

## Reachy Mini Testbench アプリ
モーターの問題を診断しやすくするために、[Reachy Mini Testbench アプリ](https://huggingface.co/spaces/pollen-robotics/reachy_mini_testbench)を開発しました。このアプリを使用すると、個々のモーターをテストし、その状態を確認し、潜在的な問題を特定できます。

このアプリを使用する前に、Reachy Mini Control を使ってインストールする必要があります（[インストールガイド](https://huggingface.co/docs/reachy_mini/platforms/reachy_mini/usage#2-installation)を参照してください）。

![Reachy Mini Testbench app](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-testbench.png)

## モーターの典型的なトラブルシューティング手順
以下のいずれかの症状がある場合は、次の診断手順に従ってください。
- モーターが赤く点滅し、反応／動作しない。
- エラーは出ていないが、モーターがコマンドに反応しない。
- 「Overload Error」のようなエラーがモーターに表示される。
- 「No motor found on port」「Missing motor」など、モーターが見つからない。

### 診断
- ロボットの電源を入れます。
- Reachy Mini Testbench アプリを開きます。
- 「Scan Motors」ボタンをクリックしてモータースキャンを実行します。

### 想定される結果

**1. すべてのモーターが検出された場合：**
すべてのモーターが物理的に接続され、動作していることを意味します。

![All_motors_detected](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/all_motors_found.png)

それでも問題がある場合は、モーターの順番や設定が正しくない可能性があります。
「Check all motors」をクリックして、すべてのモーター設定が期待される値と一致しているか確認してください。

![Check_all_motors](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/check_motor_configuration.png)

=> 何かが正しくない場合は、デーモンは再起動時にすべてのモーターを再フラッシュします。
すべてが正しいにもかかわらず問題が続く場合は、以下の確認事項を参照してください。

**モーターの入れ違い：** ロボットを**初めて**起動してから数秒後に「Motor hardware errors: ['Overload Error']」が表示され、LED が点滅し、2 つのアーム用モーターが上向きになっている場合。
モーターが正しいスロットに配置されていない（例：モーター 1 がスロット 2 にある）可能性が非常に高いです。

![Motors inversion symptom](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/motors_upward.png)

**モーターのホーン上のアームの向きを確認する：**
不具合のあるモーターを取り外し、添付の写真のようにアームを上向きに配置します。そのうえで、図のように 2 本のラインマークが一直線に揃っているか確認してください。

![Marks_aligned](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/marks_aligned.png)

揃っていない場合は、アームを固定している 2 本のネジを外し、2 本のラインが一致するように付け直してください。


**頭部内部の USB ケーブルの余長を確認する：**
頭部内部のケーブルが長すぎると、下側に余裕が足りず、頭部が自由に動かない可能性があります。
その結果、モーターに過度な負荷がかかり、損傷するおそれがあります。

![usb_cable_length](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/usb_cable_length.jpg)

頭部が最大高さの位置まで自由に動けるように、USB ケーブルに十分なたるみを持たせてください。



**モーターが壊れているように感じる場合：**
Reachy Mini ロボットの一部の製造ロットにおいて、不良な Dynamixel モーターのロットに起因する問題が確認されています。

報告された多くのケースでは、問題はモーター番号 4、または QC ラベル n°2544 が貼られたモーターに発生しています。

モーターの 1 つが、**赤く点滅し、電源オフ時に手で動かそうとすると異常に固く感じる**場合（[こちらの動画例](https://drive.google.com/file/d/1UHTqUcb21aFThqlr2Qcx23VWqvj_y-ly/view?usp=sharing)を参照）、かつそのモーターが正しいスロットに入っていることに 100% 自信がある場合。

そのモーターは故障している可能性が高いです。

まず、ロボットを最新のソフトウェアバージョンにアップデートし、その後再起動してください。これによりモーターが再フラッシュされます。
それでも問題が解決しない場合は、サポートにお問い合わせください。

**2. 一部のモーターが検出されない場合：**

![Some_motors_missing](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/missing_motors.png)

- 1 つだけモーターが見つからない場合：組立手順に従って、そのモーターの物理的な接続を確認してください。
接続に 100% 問題がないと確信できる場合は、そのモーターが正しくフラッシュされていない可能性もあります。以下の **Flashing issue** セクションを参照してください。

- 連番の ID を持つモーターが複数見つからない場合（例：モーター 1-2-3、4-5-6、17-18 が見つからない）、足部の電源ボードとモーター 3 および 4 の間の物理的な接続を確認してください。問題が 17-18 で発生している場合は、「R」モーターと頭部の PCB ボード間の接続を確認してください。

- **2 つのモーターが見つからない**が接続に問題がない場合、キット内に同じ ID を持つモーターが 2 つ含まれている可能性があります。3 つ同じ ID である可能性は非常に低いです。以下の「Flashing issue」セクションを確認してください。

- **すべてのモーターが見つからない**場合は、「F」中央モーター（ID10）の接続を確認してください。このモーターはチェーンの最初のモーターであり、これが検出されないと、その後ろに続くすべてのモーターも検出されません。
このモーターは、足部とは 100mm ケーブルで、頭部とは 300mm ケーブルで接続されている必要があります。これらのケーブルが両端で確実に接続され、損傷していないことを確認してください。

### Flashing issue
1 つ以上のモーターが検出されない場合、モーターの ID またはボーレートに影響するフラッシュの問題が原因である可能性があります。

これを解決するには、次の操作が必要です。
1. Testbench アプリで「Scan all baudrates」ボタンをクリックします。
モーターはボーレート 1000000 で検出される必要があります。
モーター ID は 10 から 18 までで、重複や欠番がない状態でなければなりません。

2. 誤ったボーレートや ID を持つモーターがある場合は、正しいパラメータで再フラッシュする必要があります。
そのためには、以下のフラッシュ手順に従ってください。
- モーター再フラッシュセクションで、ID またはボーレートが誤っているモーターを選択します。
- そのモーターが本来どのモーターであるべきかのプリセットを選択します（例：ベース回転用のモーター 10）。
- 「Reflash motor」をクリックします。

![Reflash_motor](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reflash_motors.png)

3. 複数のモーターが見つからず、接続にも問題がないと確信できる場合は、ID の競合を避けるために、他の不良モーターをすべて取り外しながら、上記と同じ手順で不良／未検出のモーターを 1 つずつ再フラッシュする必要があります。