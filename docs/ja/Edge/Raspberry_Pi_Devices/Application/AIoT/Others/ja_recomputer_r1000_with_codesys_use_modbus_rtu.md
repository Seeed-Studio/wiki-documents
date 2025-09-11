---
description: 本記事では、CODESYS を使用して reComputer R1000 の Modbus RTU 機能を利用する方法を主に紹介します。

title: CODESYS を使用して R1000 の Modbus RTU 機能を構成する方法
keywords:
  - エッジコントローラー
  - reComputer R1000
  - CODESYS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_use_modbus_rtu_with_codesys
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
本記事では、CODESYS を使用して reComputer R1000 の Modbus RTU 機能を利用する方法を主に紹介します。reComputer R1000 の 2 つの RS485 ポートを使用し、1 つのポートを Modbus マスターとして、もう 1 つのポートを Modbus スレーブとして使用します。本記事では、CODESYS 上で Modbus マスターと Modbus スレーブを構成する方法を詳しく説明し、それらを reComputer R1000 にデプロイする方法を示します。

## ハードウェア準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## ソフトウェア準備

* [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
* [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## 開始する前に

開始する前に、reComputer R1000 がホストと同じネットワークセグメントにあることを確認し、reComputer R1000 に `CODESYS ランタイム` をデプロイしていることを確認してください。`CODESYS ランタイム` のデプロイ方法については、[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_install_codesys/) を参照してください。

### ハードウェア構成

R1000 の 2 つの RS485 ポートを接続し、1 つを Modbus マスターとして、もう 1 つを Modbus スレーブとして使用します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" /></center>

### R1000 の設定ファイルを変更する
以下のコマンドを入力します：
```shell
    sudo nano /etc/codesyscontrol/CODESYSControl.cfg
```
次の内容を追加します：
```shell
# ファイルの末尾に以下の内容を追加します。ttyAMAx は reComputer R1000 のシリアルポート番号です。Linux.Devicefile.1~3 は CODESYS 内のシリアルポート番号を表します。ここでは、CODESYS のシリアルポート番号を reComputer R1000 のシリアルポート番号にバインドします。これを行わないと、CODESYS は正しいシリアルポートを認識できません。
    [SysCom]
    Linux.Devicefile.1=/dev/ttyAMAx
    Linux.Devicefile.2=/dev/ttyAMAx
    Linux.Devicefile.3=/dev/ttyAMAx
```
その後、以下のコマンドを入力して CODESYS サービスを再起動します：
```shell
    sudo systemctl restart codesyscontrol.service
    sudo systemctl restart codesysedge.service
```

### Modbus マスターの構成
**ステップ 1**: CODESYS を開き、`File` ---> `NEW Project` をクリックして新しいプロジェクトを作成します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/1.png" /></center>

**ステップ 2**: プロジェクト名を入力し、`Standard project` を選択して `OK` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/2.png" /></center>

**ステップ 3**: `Device` 列で `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` を選択し、`PLC_PRG in` で `Structured Text (ST)` を選択して `OK` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/3.png" /></center>

**ステップ 4**: プロジェクトを右クリックして `Add Device` を選択し、デバイスを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/4.png" /></center>

**ステップ 5**: `Modbus` ---> `Modbus serial Port` ---> `Modbus COM` をクリックして Modbus シリアルポートデバイスを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/5.png" /></center>

**ステップ 6**: 新しく追加された `Modbus_COM` をダブルクリックし、`General` をクリックしてシリアルポート番号やボーレートなどの情報を設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/7.png" /></center>

**ステップ 7**: `Modbus_COM` を右クリックして `Add Device` をクリックし、このポートに Modbus デバイスを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/8.png" /></center>

**ステップ 8**: `Modbus Serial Master` ---> `Modbus Client, COM Port` を選択して、このシリアルポートに Modbus マスターデバイスをバインドします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/9.png" /></center>

**ステップ 9**: `Modbus_Clent_COM_Port` を右クリックして `Add Device` を選択し、この Modbus マスターが操作するスレーブデバイスを追加します。ここで複数のスレーブデバイスを追加できます。このスレーブデバイスは、マスターが操作したいスレーブデバイスを表します。後でこれらのスレーブに対してマスターが実行する操作を構成する必要があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/10.png" /></center>

**ステップ 10**: `Modbus Serial Slave` ---> `Modbus Server, COM Port` を選択して Modbus スレーブデバイスを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/11.png" /></center>

**ステップ 11**: 新しく追加したスレーブデバイスをダブルクリックし、`General`で`Server address`と`Response timeout`のプロパティを設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/12.png" /></center>

**ステップ 12**: `Modbus Server Channel`をクリックし、右下の`Add Channel`をクリックして、マスターステーションがスレーブステーションに対して実行する操作を設定します。例えば、ファンクションコードの選択や操作するレジスタの数などを設定できます。`Add Channel`をクリックして複数の操作を追加することができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/13.png" /></center>

**ステップ 13**: `ModbusGenericSerialServer I/O Mapping`をクリックし、データを指定された変数にマッピングします。右下の`Always update variables`列で`Enable 1`を選択します。この時点で、Modbusマスターの設定が完了します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/14.png" /></center>

### Modbusスレーブの設定

**ステップ 1**: プロジェクトを右クリックし、`Add Device`を選択してデバイスを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/1.png" /></center>

**ステップ 2**: `Modbus` ---> `Modbus Serial Port` ---> `Modbus COM`を選択して、Modbusシリアルポートを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/2.png" /></center>

**ステップ 3**: 新しく追加したModbusシリアルポートをクリックし、`General`を選択してシリアルポート番号、ボーレートなどの情報を設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/3.png" /></center>

**ステップ 4**: 新しく追加したModbusシリアルポートを右クリックし、`Add Device`を選択してModbusスレーブデバイスを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/4.png" /></center>

**ステップ 5**: `Modbus` ---> `Modbus Serial Device` ---> `Modbus Serial Device`を選択してスレーブデバイスを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/5.png" /></center>

**ステップ 6**: 新しく追加したスレーブデバイスをダブルクリックします。`General`で、このスレーブのプロパティ（レジスタとコイルの数、アドレスなど）を設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/6.png" /></center>

**ステップ 7**: `Modbus Serial Device I/O Mapping`をクリックし、右下の`Always update variable`で`Enable 1`を選択します。これでModbusスレーブの設定が完了します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/7.png" /></center>

### Modbusのデプロイ

**ステップ 1**: プロジェクトをダブルクリックし、`Scan Network`をクリックしてデバイスを選択し、`OK`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/1.png" /></center>

**ステップ 2**: reComputer R1000のユーザー名とパスワードを入力してデバイスに接続します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/2.png" /></center>

**ステップ 3**: 表示されているボタンをクリックしてプロジェクトをreComputer R1000にデプロイします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/3.png" /></center>

**ステップ 4**: スタートボタンをクリックしてプロジェクトを開始します。Modbusマスターとスレーブのインジケーターライトが両方とも緑色であることが確認できれば、Modbus通信が正常であることを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/5.png" /></center>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>