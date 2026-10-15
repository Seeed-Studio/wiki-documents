---
description: SenseCAP S1000 V2 10-in-1 コンパクト気象センサー向け CO₂ キャリブレーション手順。
title: SenseCAP S1000 V2 CO₂ キャリブレーション
keywords:
  - SenseCAP
  - SenseCAP S1000 V2
  - CO2 キャリブレーション
  - コンパクト気象センサー
image: https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg
slug: /sensecap_s1000_v2_co2_calibration
sku: 101991024
last_update:
  date: 09/09/2026
  author: Zhai Chenyang
createdAt: '2026-09-09'
updatedAt: '2026-09-09'
url: https://wiki.seeedstudio.com/ja/sensecap_s1000_v2_co2_calibration/
---

# SenseCAP S1000 V2 CO₂ キャリブレーション

:::note
この CO₂ キャリブレーション手順は **SKU 101991024** のみに適用され、IAP バージョンのマルチインワン CO₂ 気象ステーションとは互換性がありません。
:::
   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg"/></div>
## キャリブレーション方法

- **ABC 自動ベースライン補正:** センサーは、指定期間内に検出された最も低い安定した CO₂ 濃度を特定し、それを通常 400 ppm 前後の ABC ターゲットに調整します。この方法は、定期的に換気され、定期的に屋外の新鮮な空気の CO₂ レベルに達するオフィス、住宅などの環境に適しています。S1000 では、自動補正周期は `SA_ABC` を使用して時間単位で設定できます。
- **ターゲット 1 点キャリブレーション:** センサーの読み値を、認証済みのキャリブレーションガスまたは信頼できる基準機器で確認された 1,000 ppm などの既知の CO₂ 濃度に合わせて調整します。この方法は、現場での高精度なキャリブレーション、CO₂ レベルが一貫して高い環境、または新鮮な空気に定期的にさらされない場所に適しています。S1000 では、`SA_TC` を使用してターゲット濃度を入力し、値を入力すると直ちに 1 点キャリブレーションが実行されます。

## 詳細なキャリブレーション手順

### ABC 自動キャリブレーション手順

#### ABC 有効化前の注意事項

- 各 ABC サイクル中に、環境は一定時間、屋外バックグラウンド濃度に近い CO₂ レベルに達し、かつ比較的安定している必要があります。
- ABC は、定期的に換気される住宅、オフィス、教室、会議室に適しています。
- 温室、畜産施設、常時占有または密閉された空間、CO₂ が意図的に添加される環境には適していません。
- ABC は、検出された最も低い濃度とその安定性の両方を評価し、単純に最も低い読み値を 400 ppm と見なすわけではありません。
- 測定値の大きなずれを補正するには、複数回の ABC サイクルが必要になる場合があります。

#### ABC の設定と有効化

`SA_ABC` は、SenseCAP S1000 V2 10-in-1 コンパクト気象センサーに内蔵された CO₂ センサーの ABC キャリブレーションサイクルを設定します。

<div class="table-center">

| パラメータ | 値 |
| --- | --- |
| 単位 | 時間 |
| 対応範囲 | 0–65535 |
| デフォルト値 | 0（ABC 無効） |
| ABC を無効にする値 | 0 および 65535 |
| 推奨設定 | 180 時間（約 7.5 日） |

</div>

1. サービス用シリアルポートを介してデバイスに接続します。

2. 以下のデフォルトシリアル設定を使用して、デバイスの ASCII アドレスを確認します。

   <div class="table-center">

   | パラメータ | デフォルト値 |
   | --- | --- |
   | ボーレート | 9600 |
   | ストップビット | 1 |
   | データビット | 8 |
   | パリティ | None |

   </div>

   シリアルターミナルが自動的に CRLF を付加する場合は、`?` のみ入力します。

   **送信:**

   ```text
   ?
   ```

   **応答:**

   ```text
   0XA
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration1.png"/></div>

3. 以降のコマンドでは、返されたアドレスを使用します。アドレスが `0` の場合、以下のコマンドを送信して ABC サイクルを推奨値の 180 時間に設定します。

   **送信:**

   ```text
   0XA;SA_ABC=180
   ```

   **応答:**

   ```text
   0XA;SA_ABC=180
   ```

   この応答は、設定が正常に書き込まれたことを示します。

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration2.png"/></div>
4. 現在の設定を確認します。

   **送信:**

   ```text
   0XA;SA_ABC=?
   ```

   **応答:**

   ```text
   SA_ABC=180
   ```

   `SA_ABC=180` を含む応答が返ってくれば、ABC が有効になっていることが確認できます。


   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration3.png"/></div>

### ターゲット 1 点キャリブレーション手順

#### キャリブレーション前の準備

1. キャリブレーション前の CO₂ 読み値を記録します。
2. デバイスの電源が入り、正常に通信していることを確認します。
3. 参照ガスが測定チャンバー内の元のガスを完全に置換し、安定状態に達するまで待ちます。
4. 人がセンサーに向かって直接息を吹きかけないようにします。
5. 温度、湿度、気圧をできるだけ安定させます。

**推奨される安定性の基準**

- 参照ガスが元のガスを完全に置換できるだけの十分な時間を確保します。
- 少なくとも 3～5 回連続した測定で、変動がごくわずかであることを確認します。
- キャリブレーションガスとセンサーの両方が安定した温度にあることを確認します。
- キャリブレーションチャンバーは大気圧を保つように開放状態にします。
- 加圧ガスをセンサーに直接吹き付けないでください。ガスボンベを使用する場合は、減圧弁と適切なチューブを使用して流量を制御してください。

#### ターゲットキャリブレーション

ターゲットキャリブレーションは、SenseCAP S1000 V2 10-in-1 コンパクト気象センサーに内蔵された CO₂ センサー向けの 1 点キャリブレーション方法です。400、800、1,000、1,500 ppm など、既知の CO₂ 濃度を持つ認証済みキャリブレーションガス、または信頼できる基準機器が必要です。

`SA_TC` は ppm 単位のターゲットキャリブレーション値を指定します。デフォルト値はなく、0～10000 ppm の範囲をサポートします。有効な値が書き込まれると、デバイスは直ちに 1 点キャリブレーションを実行します。

#### キャリブレーション手順

デフォルトのシリアルパラメータおよびデバイスアドレスの確認方法については、[ABC の設定と有効化](#ABC-の設定と有効化) を参照してください。

1. デバイスを適切なキャリブレーションチャンバー内に設置します。

2. キャリブレーションチャンバーの動作要件に従って、既知濃度の CO₂ 混合ガスを導入します。

3. チャンバーを開放状態に保ち、大気圧を維持します。CO₂ の読み値を継続的に監視し、チャンバー内のガス濃度が安定するまで待ちます。現在の読み値を確認するには、次のコマンドを使用します。

   **送信:**

   ```text
   0XA;G5?
   ```

   :::note
   シリアルターミナルが自動的に CRLF を付加する場合は、コマンドをそのまま入力します。そうでない場合は、コマンドの末尾に `<CR><LF>` を追加してください。
   :::

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration4.png"/></div>

4. 既知のターゲット濃度を入力します。たとえば、認証済み 1,000 ppm キャリブレーションガスを使用する場合は、次のコマンドを送信します。

   **送信:**

   ```text
   0XA;SA_TC=1000
   ```

   **応答:**

   ```text
   0XA;SA_TC=1000
   ```

   この応答は、コマンドが正常に受信されたことを示します。デバイスは値が書き込まれた直後に 1 点キャリブレーションを実行します。

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration5.png"/></div>

5. 少なくとも 1 回分の CO₂ データ更新サイクル（デフォルトでは約 16 秒）を待ってから、再度読み値を確認します。

   **送信:**

   ```text
   0XA;G5?
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration6.jpg"/></div>

:::note
必ず、検証済みのキャリブレーションガスまたは基準機器の濃度のみを入力してください。ターゲットキャリブレーションに推定値を入力しないでください。
:::

