---
description: Reachy Mini のモーターに関する問題を検出して修復するために、Testbench アプリを使用した包括的なモーター診断およびトラブルシューティングガイドです。
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
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# モーター診断とトラブルシューティングガイド

このドキュメントでは、Reachy Mini ロボットのモーターに関連する一般的な問題を診断およびトラブルシューティングするためのガイドを提供します。

## Reachy Mini Testbench アプリ
モーターの問題を診断しやすくするために、[Reachy Mini Testbench app](https://huggingface.co/spaces/pollen-robotics/reachy_mini_testbench) を開発しました。このアプリを使用すると、個々のモーターをテストし、その状態を確認し、潜在的な問題を特定できます。
このアプリは使用前にロボットへインストールする必要があります。Lite バージョンの場合は、以下で説明するように、ターミナルで自動起動なしでデーモンを実行し、ダッシュボードにアクセスする必要があります。
<details>
<summary>Lite バージョン向け手順</summary>

- _Virtual Environment:_ 仮想環境（`.venv`, `reachy_mini_env` など）の中で実行していることを確認してください。
- _SDK Update:_ 最新バージョンになっていることを確認してください。
    `pip` を使う場合、次を実行します：
    ```bash
    pip install -U reachy-mini
    ```
    `uv` を使う場合、次を実行します：
    ```bash
    uv pip install -U reachy-mini
    ```

- _Daemon:_ デーモン `reachy-mini-daemon --no-autostart` を実行します
- _Access Dashboard:_ Web ブラウザを開き、`http://localhost:8000/` にアクセスします。
そこで "Apps" セクションに Testbench アプリがあるので、インストールしてから実行します。


</details>

## モーターの典型的なトラブルシューティング手順
以下のいずれかの症状がある場合は、次の診断手順に従ってください。
- モーターが赤く点滅し、反応／動作しない。
- エラーは出ていないが、モーターがコマンドに反応しない。
- "Overload Error" のようなエラーがモーターに表示される。
- モーターが見つからない："No motor found on port"、"Missing motor" など。

### 診断
- ロボットの電源を入れます。
- Reachy Mini Testbench アプリを開きます。
- "Scan Motors" ボタンをクリックしてモータースキャンを行います。

### 想定される結果

**1. すべてのモーターが検出された場合：**
すべてのモーターが物理的に接続され、動作していることを意味します。

![All_motors_detected](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/all_motors_found.png)

それでも問題がある場合は、モーターの順番や設定が正しくない可能性があります。
すべてのモーター設定が期待される値と一致しているか確認するために、"Check all motors" をクリックしてください。

![Check_all_motors](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/check_motor_configuration.png)

=> 何かが正しくない場合は、デーモンを再起動するときにすべてのモーターが再フラッシュされます。
すべてが正しいにもかかわらず問題が続く場合は、以下の確認事項を参照してください。

**モーターの入れ違い：** ロボットを**初めて**起動してから数秒後に "Motor hardware errors: ['Overload Error']" が表示され、LED が点滅し、2 つのアームモーターが上向きになっている場合。
モーターが正しいスロットに配置されていない（例：モーター 1 がスロット 2 にある）可能性が非常に高いです。

![Motors inversion symptom](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/motors_upward.png)

**モーターのホーン上のアームの向きを確認する：**
問題のあるモーターを取り外し、添付の写真のようにアームを上向きに配置します。そのうえで、図のように 2 本のラインマークが一直線に揃っているか確認してください。

![Marks_aligned](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/marks_aligned.png)

揃っていない場合は、アームを固定している 2 本のネジを外し、2 本のラインが一致するように付け直してください。


**頭部内部の USB ケーブルの余長を確認する：**
頭部内部の長さが長すぎると、下側に余裕がなくなり、頭部が自由に動かなくなる可能性があります。
その結果、モーターに過度な負荷がかかり、損傷するおそれがあります。

![usb_cable_length](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/usb_cable_length.jpg)

頭部が自由に、最大高さの位置まで動けるように、USB ケーブルに十分なたるみを持たせてください。



**モーターが壊れているように感じる場合：**
Reachy Mini ロボットの一部の製造ロットにおいて、不良なロットの Dynamixel モーターに起因する問題が確認されています。

報告された多くのケースでは、問題はモーター番号 4、または QC ラベル n°2544 が貼られたモーターに発生しています。

モーターの 1 つが **赤く点滅し、電源オフ時に異常に動かしづらい** 場合で、かつそのモーターが正しいスロットに入っていたことに 100% 確信がある場合は、[(こちらの動画例)](https://drive.google.com/file/d/1UHTqUcb21aFThqlr2Qcx23VWqvj_y-ly/view?usp=sharing) も参照してください。

そのモーターは故障している可能性が高いです。

まず、ロボットを最新のソフトウェアバージョンにアップデートし、その後再起動してください。これによりモーターが再フラッシュされます。
それでも問題が解決しない場合は、サポートにお問い合わせください。

**2. 一部のモーターが検出されない場合：**

![Some_motors_missing](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/missing_motors.png)

- 1 つだけモーターが見つからない場合：組み立て手順に従って、そのモーターの物理的な接続を確認してください。
接続が問題ないことに 100% 確信がある場合は、そのモーターが正しくフラッシュされていない可能性もあります。以下の **Flashing issue** セクションを参照してください。

- 連番の ID を持つモーターが見つからない場合（例：モーター 1-2-3、4-5-6、17-18 が見つからない）、足部の電源ボードとモーター 3 および 4 の間の物理的な接続を確認してください。問題が 17-18 で発生している場合は、"R" モーターと頭部の PCB ボード間の接続を確認してください。

- **2 つのモーターが見つからない** が接続は問題ない場合、キット内に同じ ID のモーターが 2 つ含まれている可能性があります。3 つ同じ ID である可能性は非常に低いです。以下の "Flashing issue" セクションを確認してください。

- **すべてのモーターが見つからない** 場合は、中央の "F" モーター（ID10）の接続を確認してください。このモーターはチェーンの最初のモーターであり、これが検出されないと、その後ろに続くすべてのモーターも検出されません。
このモーターは、足部とは 100mm ケーブルで、頭部とは 300mm ケーブルで接続されている必要があります。これらのケーブルが両端で確実に接続され、損傷していないことを確認してください。

### Flashing issue
1 つ以上のモーターが検出されない場合、モーターの ID またはボーレートに影響するフラッシングの問題が原因である可能性があります。

これを解決するには、次の操作が必要です。
1. Testbench アプリで "Scan all baudrates" ボタンをクリックします。
モーターはボーレート 1000000 で検出される必要があります。
モーター ID は 10 から 18 までで、欠番や重複がない必要があります。

2. 誤ったボーレートや ID を持つモーターがある場合は、正しいパラメータで再フラッシュする必要があります。
そのためには、以下のフラッシング手順に従ってください。
- モーター再フラッシュセクションで、ID またはボーレートが誤っているモーターを選択します。
- そのモーターが本来どれであるべきかのプリセットを選択します（例：ベース回転用のモーター 10）。
- "Reflash motor" をクリックします。

![Reflash_motor](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reflash_motors.png)

3. 複数のモーターが見つからず、接続にも問題がない場合は、ID の競合を避けるために他の不良モーターをすべて取り外しながら、上記と同じ手順で不良／未検出のモーターを 1 つずつ再フラッシュする必要があります。
