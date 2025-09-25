---
description: この記事では、主にCODESYSベースのreComputer R1000のmodbus rtu機能の使用方法を紹介します

title: CODESYSを使用してR1000のModbus rtu機能を設定する方法
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_use_modbus_rtu_with_codesys
last_update:
  date: 10/10/2024
  author: ShuishengPeng
---
## はじめに

この記事では、主にCODESYSベースのreComputer R1000のmodbus rtu機能の使用方法を紹介します。reComputer R1000の2つのrs485ポートを使用し、1つのポートをModbusマスター用、もう1つのポートをModbusスレーブ用として使用します。この記事では、CODESYSでModbusマスターとModbusスレーブを設定する方法を詳しく説明し、それらをreComputer R1000にデプロイする方法を示します。

## ハードウェアの準備

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## ソフトウェア準備

- [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
- [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## はじめに

開始する前に、reComputer R1000がホストと同じネットワークセグメントにあり、reComputer R1000に`CODESYS run-time`がデプロイされていることを確認してください。`CODESYS run-time`のデプロイ方法については、[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_install_codesys/)を参照してください。

### ハードウェア構成

R1000の2つのRS485ポートを接続し、一方をModbusマスター、もう一方をModbusスレーブとして使用します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" /></center>

### R1000の設定ファイルを変更

次のコマンドを入力します：

```shell
    sudo nano /etc/codesyscontrol/CODESYSControl.cfg
```

以下の内容を追加してください：

```shell
# Add the following content to the end of the file, where ttyAMAx is the serial port number of reComputer R1000. Linux.Devicefile.1~3 represents the serial port number in CODESYS. Here, the serial port number of CODESYS is bound to the serial port number of reComputer R1000, otherwise CODESYS cannot identify the correct serial port
    [SysCom]
    Linux.Devicefile.1=/dev/ttyAMAx
    Linux.Devicefile.2=/dev/ttyAMAx
    Linux.Devicefile.3=/dev/ttyAMAx
```

次に、以下のコマンドを入力してCODESYSサービスを再起動します：

```shell
    sudo systemctl restart codesyscontrol.service
    sudo systemctl restart codesysedge.service
```

### Modbus マスター設定

**ステップ 1**: CODESYSを開き、`File`--->`NEW Project`をクリックして新しいプロジェクトを作成します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/1.png" /></center>

**ステップ 2**: プロジェクト名を入力し、`Standard project`を選択して、`OK`をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/2.png" /></center>

**ステップ 3**: `Device`列で`CODESYS Control for Raspberry Pi 64 SL (CODESYS)`を選択し、`PLC_PRG in`で`Structured Text (ST)`を選択して、`OK`をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/3.png" /></center>

**ステップ 4**: プロジェクトを右クリックして`Add Device`を選択し、デバイスを追加します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/4.png" /></center>

**ステップ 5**: `Modbus`--->`Modbus serial Port`--->`Modbus COM`をクリックして、Modbusシリアルポートデバイスを追加します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/5.png" /></center>

**ステップ 6**: 新しく追加された`Modbus_COM`をダブルクリックし、`General`をクリックすると、シリアルポート番号とボーレートなどの情報を設定できます

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/7.png" /></center>

**ステップ 7**: `Modbus_COM`を右クリックして`Add Device`をクリックし、このポートにModbusデバイスを追加します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/8.png" /></center>

**ステップ 8**: `Modbus Serial Master` ---> `Modbus Client, COM Port`を選択して、このシリアルポートにModbusマスターデバイスをバインドします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/9.png" /></center>

**ステップ 9**: `Modbus_Clent_COM_Port`を右クリックして`Add Device`を選択し、このModbusマスターが操作するスレーブデバイスを追加します。ここでは複数のスレーブデバイスを追加できます。ここのスレーブデバイスは、マスターステーションが操作したいスレーブデバイスを表します。後でマスターステーションがこれらのスレーブに対して実行する操作を設定する必要があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/10.png" /></center>

**ステップ 10**: `Modbus Serial Slave` ---> `Modbus Server, COM Port`を選択して、Modbusスレーブデバイスを追加します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/11.png" /></center>

**ステップ 11**: 新しく追加されたスレーブデバイスをダブルクリックし、`General`で`Server address`と`Response timeout`プロパティを設定できます

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/12.png" /></center>

**ステップ 12**: `Modbus Server Channel`をクリックし、右下の`Add Channel`をクリックして、マスターステーションがスレーブステーションに対して実行する操作を設定します。例えば、ファンクションコードの選択、操作するレジスタ数などです。`Add Channel`をクリックして複数の操作を追加できます

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/13.png" /></center>

**ステップ 13**: `ModbusGenericSerialServer I/O Mapping`をクリックします。ここでデータを指定された変数にマップでき、右下の`Always update variables`列で`Enable 1`を選択します。これでModbusマスターの設定が完了しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/14.png" /></center>

### Modbus スレーブ設定

**ステップ 1**: プロジェクトを右クリックして`Add Device`を選択し、デバイスを追加します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/1.png" /></center>

**ステップ 2**: `Modbus` ---> `Modbus Serial Port` ---> `Modbus COM`を選択して、Modbusシリアルポートを追加します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/2.png" /></center>

**ステップ 3**: 新しく追加されたModbusシリアルポートをクリックし、`General`を選択して、シリアルポート番号、ボーレートなどの情報を設定します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/3.png" /></center>

**ステップ 4**: 新しく追加されたModbusシリアルポートを右クリックし、`Add Device`を選択して、Modbusスレーブデバイスを追加します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/4.png" /></center>

**ステップ 5**: `Modbus` ---> `Modbus Serial Device` ---> `Modbus Serial Device`を選択して、スレーブデバイスを追加します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/5.png" /></center>

**ステップ 6**: 新しく追加されたスレーブデバイスをダブルクリックします。`General`で、このスレーブのプロパティ（レジスタとコイルの数、アドレスなど）を設定できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/6.png" /></center>

**ステップ 7**: `Modbus Serial Device I/O Mapping`をクリックし、右下の`Always update variable`で`Enable 1`を選択します。これでModbusスレーブの設定が完了しました

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/7.png" /></center>

### Modbus デプロイメント

**ステップ 1**: プロジェクトをダブルクリックし、`Scan Network`をクリックして、デバイスを選択し、`OK`をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/1.png" /></center>

**ステップ 2**: reComputer R1000のユーザー名とパスワードを入力してデバイスに接続します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/2.png" /></center>

**ステップ 3**: 図に示すボタンをクリックして、プロジェクトをreComputer R1000にデプロイします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/3.png" /></center>

**ステップ 4**: Startボタンをクリックしてプロジェクトを開始します。Modbusマスターとスレーブの両方のインジケーターライトが緑色になっていることが確認でき、これはModbus通信が正常であることを示しています

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/5.png" /></center>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
