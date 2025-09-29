---
title: Bluetooth マルチメーター
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Bluetooth_Multimeter/
slug: /ja/Bluetooth_Multimeter
last_update:
  date: 05/15/2025
  author: gunengyu
---


Bluetooth マルチメーターは、エンジニア向けに特別に設計された Android スマートフォン用のインテリジェントな周辺機器です。このマルチメーターは、電圧、電流、抵抗などのデータを簡単に収集できるだけでなく、Bluetooth を介してスマートフォンと通信することができます。そのため、収集されたデータはスマートフォン上に表示されます。ハードウェアとソフトウェアの継続的な最適化により、このマルチメーターの測定精度が保証されています。

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bluetooth_Multimeter.jpg)

ハードウェアとソフトウェアの両方がオープンソースです！さらに、API と詳細な説明書も提供しており、この Bluetooth マルチメーターを開発者がより便利に利用し、再開発できるオープンプラットフォームにしています。このデバイスは、心拍数などのさまざまなセンサーのデータを収集し、それをスマートフォンに送信してデータを監視することができます。ハードウェアとソフトウェアの完璧な組み合わせにより、アプリケーションと開発の無限の可能性が提供されます。

この Bluetooth マルチメーターは、内蔵リチウムバッテリーと充電回路を備えています。ソフトウェアでの消費電力の厳密な制御により、この製品の簡単な使用が可能です。アクリル製のシェルは、一方で組み立てを容易にし、他方で製品を安定かつ信頼性の高いものにします。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Multimeter-p-1535.html)

## 仕様
---
<table cellspacing="0" width="80%">
<tr>
<th scope="col"> 項目 </th>
<th scope="col"> 最小 </th>
<th scope="col"> 標準 </th>
<th scope="col"> 最大 </th>
<th scope="col"> 単位 </th>
</tr>
<tr>
<th scope="row"> 電圧測定範囲 </th>
<td> -30 </td>
<td> - </td>
<td> 30 </td>
<td> VDC </td>
</tr>
<tr>
<th scope="row"> 電圧測定精度 </th>
<td colspan="3"> 3 </td>
<td> % </td>
</tr>
<tr>
<th scope="row"> 電流測定範囲（最大） </th>
<td colspan="3"> 1 </td>
<td> A </td>
</tr>
<tr>
<th scope="row"> 電流測定精度 </th>
<td colspan="3"> 3 </td>
<td> % </td>
</tr>
<tr>
<th scope="row"> 抵抗測定範囲 </th>
<td> 10 </td>
<td> - </td>
<td> 1,000,000 </td>
<td> Ω </td>
</tr>
<tr>
<th scope="row"> 電圧測定精度 </th>
<td colspan="3"> 5 </td>
<td> % </td>
</tr>
<tr>
<th scope="row"> 動作温度 </th>
<td> 0 </td>
<td> - </td>
<td> 45 </td>
<td> ℃ </td>
</tr>
</table>

## 製品概要
---
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/产品视图.png)

*   ①： USB インターフェース。電源供給だけでなく、内蔵バッテリーの充電も可能です。500mAh のリチウムバッテリーを採用しており、約 10 時間の使用が期待されます。
*   ②：シリアル Bluetooth 用のプログラミングコネクタ。
*   ③：Bluetooth マルチメーターの電源スイッチ。
*   ④：ペアリングインジケータ。
    - 赤色インジケータと青色インジケータが交互に点滅 --- ペアリング中
    - 青色インジケータが点滅 --- ペアリング完了

*   ⑤：充電インジケータ。
    - 赤色インジケータ点灯 - 充電中
    - 緑色インジケータ点灯 - 充電完了

*   ⑥：データ転送インジケータ。データ転送中に点滅します。
*   ⑦：抵抗測定用のオーディオコネクタ。
*   ⑧：電圧測定用のオーディオコネクタ。
*   ⑨：電流測定用のオーディオコネクタ。
*   ⑩：電流ギア選択スイッチ。

## 作業図
---
BluetoothマルチメーターとAndroidデバイスの作業スケッチマップは以下の通りです：

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Multimater_Work_Principle_1.jpg)

## デモンストレーション
---
このBluetoothマルチメーターは、電圧、抵抗、電流を測定するポータブルマルチメーターです。そして、これらのデータをBluetoothを介して他のデバイスに送信することができるため、他のデバイスを通じてデータを観察することができます。次に、このデバイスの使用方法をデモンストレーションします。

**スマートフォンとBluetoothマルチメーターのペアリング**

*   1) [アプリケーションプログラムパッケージ：SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip)をダウンロードしてインストールします。

*   2) 次に、SmartMeterのアプリアイコンをクリックして実行します。この時点で、スマートフォンのBluetoothがオンになっていない場合、Bluetooth許可リクエストが表示されます。「YES」をクリックしてBluetoothをオンにします。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_request.JPG)

*   3) UIインターフェースに入った後、赤いアプリケーションスイッチをオンにすると、画面に0.0が表示されます。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Switch.jpg)

*   4) Bluetoothアイコンをクリックしてデバイスを選択します。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_device.jpg)

*   5) BT MULTIMETERデバイスを選択してスマートフォンとペアリングしてください。BT MULTIMETERデバイスが表示されない場合は、「Scan for device」をクリックして検索してください。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bt_list_device.JPG)

注意：BT MULTIMETERデバイスが選択できない場合や「Scan for device」オプションが表示されない場合は、まずスマートフォンを使用してBluetoothマルチメーターとペアリングし、その後アプリを実行してください。

*   6) Bluetoothペアリングには「0000」（Bluetoothマルチメーターのデフォルト）または「1234」を入力してください。また、ペアリングインジケーターを観察して、ペアリングが成功したかどうかを確認することをお勧めします。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Pair.JPG)

*   7) ペアリングが完了しました。おめでとうございます！
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_Interface.jpg)

**測定**

他のマルチメーターと同様に、Bluetoothマルチメーターを使用する際にはいくつかの注意点があります。例えば、電源を供給している状態で抵抗を測定しないでください。そのため、デバイスが正常に使用できなくなるのを防ぐために、マルチメーターの注意事項をよく読むことを強くお勧めします。

**抵抗の測定**
次に、抵抗を測定してみましょう。Androidアプリとマルチメーターが接続されている状態で、抵抗を選択します（つまり、カーソルをΩに移動します）。オーディオラインをBluetoothマルチメーターのコネクタ（Rとマークされている）に接続します。

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Om.JPG)

**電圧の測定**
電圧を測定するのは非常に簡単です。AndroidアプリのカーソルをVに移動し、オーディオラインをVOLコネクタに移動するだけで、電圧の値を見ることができます。

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/V.JPG)

電流を測定する方法は他のマルチメーターと同じです。正しい電流範囲を選択することを忘れないでください。

<font color="blue">注意：正確なデータを得るためには、オーディオラインが対応するコネクタに接続されているか、カーソルが正しい位置にあるかを確認する必要があります。</font>

## 参考
---
### UIインターフェース

Bluetoothマルチメーター用のAndroidアプリUIが3種類あります。

|UI 1.jpg|UI 2.jpg|UI 3.jpg|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_1.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_2.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_3.jpg)

以前の2つのバージョンの色が明るくないという意見が一致しました。そのため、オレンジと黒、または赤と黒の2つのマルチメーターの一般的な配色を使用するべきです。同時に、黄色バージョンではHoldボタン、Rangeボタン、ダイヤル（mA、A、Ω、V、OFF（オプション）の5つの設定）を追加しました。また、どのバージョンが好みかについて投稿しました。以下はフィードバック情報です：

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Red_Version.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/GreenSumsung.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Yellow.jpg)

### 構造と外観

**効果図**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_effect.jpg)

**印刷された画像**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Printed_Picture.jpg)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
- [Bluetooth Multimater Eagle File](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip)
- [ファイル: Bluetooth Multimeter Library](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMultimeter_Library.zip)
- [アプリケーションプログラムパッケージ: SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>