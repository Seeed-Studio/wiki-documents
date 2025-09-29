---
description: ODYSSEY - X86J41x5
title: アクセサリーの追加

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Accessories
last_update:
  date: 05/15/2025
  author: w0x7ce

---


# ODYSSEY - X86J41x5へのアクセサリー追加

このWikiでは、ODYSSEY - X86J41x5にさまざまなアクセサリーを追加して性能を向上させ、ニーズに合わせる方法を紹介します。例えば、ODYSSEY-X86J41x5をグラフィックスがより必要なシナリオで使用する場合、**高性能のために外部GPUを追加する必要があります。** また、NASのような場合には、**安定性の理由からSSDではなく2つのHDDハードドライブを使用することを好むかもしれません。**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png" /></div>

## 1. PCIeを介した追加ストレージの追加 (HDDハードドライブ)

ODYSSEY-X86J41x5には、**1つのM.2 SATA SSD、1つのM.2 PCIe SSD、1つのSATA IIIコネクタと3つのSATA III電源コネクタ**があります。標準的な使用ではこれらのコネクタで十分ですが、より産業用途ではSSDではなくHDDを使用することを好む場合があります。ここでは、ODYSSEY-X86J41x5に1つ以上のHDDを接続する方法を説明します。

### 必要な材料

- **M.2 PCIe to SATAアダプター**

- HDDハードドライブ (ODYSSEY-X86J41x5では最大3つのHDDがサポートされています)

ODYSSEY-X86J41x5にさらにHDDを接続するには、追加のコンポーネントであるM.2 PCIe to SATAアダプターが必要です。このアダプターは、M.2 PCIeスロットをSATAデータコネクタに変換することができます。このアダプターは電子部品市場で一般的に購入できます。

### ハードウェアの手順

- M.2 PCIe to SATAアダプターをODYSSEY-X86J41x5のPCIeスロットに取り付け、HDDデータケーブルを接続します。次に、HDD電源ケーブルを3つのSATA III電源コネクタのいずれかに接続します。

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD.jpg" /></div>
  <br />
</div>

- ODYSSEY-X86J41x5には最大3つのHDDハードドライブを接続できます。デバイスを起動し、オペレーティングシステムでハードドライブが表示されるか確認してください。

### 結果

OSが起動すると、ハードドライブが表示されるはずです。
<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD-OS.png" /></div>
  <br />
</div>

これでストレージの問題を心配する必要はありません！

## 2. ODYSSEY-X86J41x5への外部GPUの追加

ODYSSEY-X86J41x5に外部GPUを追加して性能を向上させるには、追加のコンポーネントが必要です。

### 必要な材料

- **M.2 PCIe x4 to PCIe x16アダプター**

- **GPU用DC電源**

これらのコンポーネントはSeeedからまだ販売されていないため、しばらくお待ちいただくか、電子部品市場で入手してください。アダプターがGPU使用に適していることを確認してください。

### 初期BIOS設定

GPUを有効にするためにBIOSでいくつかの設定が必要です：

1. 起動時に**DEL**キーを押し続けてBIOSメニューに入ります。

2. **Advanced** -> **CSM Support**に移動し、Enterキーを押して有効にします。

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/biosSetting.jpg" /></div>
  <br />
</div>

3. **Chipset** -> **Primary Display**に移動し、**PCIe**を選択してEnterキーを押します。

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/chipset.png" /></div>
  <br />
</div>

BIOS設定を保存してデバイスの電源を切ります。

### ハードウェアの手順

- GPUをアダプターのPCIe x16端に挿入します。

- アダプターをODYSSEY-X86J41x5のM.2 PCIeスロットに挿入します。

- GPUには外部電源も必要です。ここではDIYの4ピンからDCジャックを使用して12V電源を供給しました **(これを行う場合は十分な知識がある場合のみ行ってください)**。市場には4ピンからDCジャックの製品もあります。

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/GPU-connect.jpg" /></div>
  <br />
</div>

- HDMIをODYSSEY-X86J41x5ではなくGPUに接続します。

:::note
ハードウェア接続中は注意してください。電源を入れる前にすべてが正しく接続されていることを確認しないと、コンポーネントが損傷する危険があります。
:::

### GPUドライバーのインストール

すべてが正常に動作すれば、デバイスは正しく起動しOSに入ります。ただし、GPUドライバーをOSにインストールする必要があります。Windowsユーザーの場合は非常に簡単です。ここでは参考としてUbuntu(Linux)でGPU(Nvidia)ドライバーをインストールする方法を示します。

1. ターミナルを開き、以下のコマンドを入力してGPUを確認します：

```bash
lspci | grep -i vga
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/lspci.png" /></div>
  <br />
</div>

ここでは2つのGPUが表示されます。1つはオンボードGPUで、もう1つは外部GPU(GTX 750)です。

2. まず、Ubuntuで**nouveau**サービスを無効にする必要があります。ターミナルで`nano`または`vim`を使用して`/etc/modprobe.d/blacklist.conf`を開きます。

```bash
sudo nano /etc/modprobe.d/blacklist.conf
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-1.png" /></div>
  <br />
</div>

3. 以下のコードを末尾に追加して変更を保存します。

```bash
blacklist nouveau
options nouveau modeset=0
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-2.png" /></div>
  <br />
</div>

4. 以下のコマンドを実行して更新します：

```bash
sudo update-initramfs -u
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-3.png" /></div>
  <br />
</div>

5. デバイスを再起動して変更を反映させ、以下のコマンドを実行します。何も表示されなければサービスが無効化されています。

```bash
lsmod | grep nouveau
```

6. 次に、Ubuntuの組み込みコマンドを使用して外部GPUに必要なドライバーを確認します：

```bash
ubuntu-drivers devices
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/drivers.png" /></div>
  <br />
</div>

これにより、GPUモデルが判別され、適切なドライバーが推奨されます。ここでは、外部GPUに対してnvidia-driver-435が推奨されています。

7. 以下のコマンドを使用してドライバーを自動インストールし、効果を反映させるためにデバイスを再起動してください。

```bash
sudo ubuntu-drivers autoinstall
```

これで、ODYSSEY-X86J4105にドライバーがインストールされているはずです！ターミナルで以下のコマンドを実行してGPUの状態を確認できます。

```bash
nvidia-smi
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-1.png" /></div>
  <br />
</div>

または、設定画面に移動するだけでも確認できます：

<div>
  <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png" /></div>
  <br />
</div>

これで、強化されたODYSSEY-X86J41x5を楽しむ準備が整いました！AI分野に飛び込む準備ができました。AIには多くのGPUパワーが必要です！

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>