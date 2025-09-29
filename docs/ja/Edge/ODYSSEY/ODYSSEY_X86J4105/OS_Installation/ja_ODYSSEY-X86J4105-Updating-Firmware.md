---
description: ODYSSEY - X86J41x5
title: ファームウェアアップグレード
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Updating-Firmware
last_update:
  date: 05/15/2025
  author: Lakshantha

---


<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl:
--- -->

このチュートリアルでは、ODYSSEY - X86 の BIOS および EC (Embedded Controller) ファームウェアを更新する方法を説明します。

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="注意アイコン" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 15}}> <b>Wikiで提供されているファームウェアはJ4105/J4125-V1をサポートしています</b>。J4125-V2ボードでWikiのBIOSファームウェアを更新すると、ボードが使用不能になります。必ず正しいバージョンのODYSSEYを使用してください。</p>
  </div>
</div>

## ハードウェア要件

- 動作するコンピュータ

- USBドライブ

- モニター

- キーボード

## BIOSのアップグレード方法

BIOSはOSのようなものであり、バグ修正やODYSSEY - X86J41x5の性能向上のためにアップグレードすることができます。以下はODYSSEY - X86J41x5のBIOSバージョンをアップグレードする手順です。

### 最新のBIOSバージョンと変更履歴

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="注意アイコン" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>重要な注意事項</p>
    <p style={{color: '#000000', fontSize: 14}}> 1. <b>古いBIOS設定が消去されます</b>ので、Windowsを使用している場合は再度<b>アクティベーション</b>が必要になります（アクティベーションキーが消去され、再度インターネット接続が必要）。 <br /><br /> 2. <b>ODYSSEY-X86の非EMMCバージョン</b>をお持ちの場合、BIOSを更新する前に、BIOS設定で<b>EMMCを無効化</b>する必要があります。更新後も同様です。</p>
  </div>
</div>

> BIOSのメインページでBIOSおよびECファームウェアのバージョンを確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-OS/SD-BS-CJ41G-300-101-H.jpg" /></div>

### 最新のBIOSファームウェア

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="注意アイコン" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 15}}> <b>Wikiで提供されているファームウェアはJ4105/J4125-V1をサポートしています</b>。J4125-V2ボードでWikiのBIOSファームウェアを更新すると、ボードが使用不能になります。必ず正しいバージョンのODYSSEYを使用してください。</p>
  </div>
</div>

<br />

**[SD-BS-CJ41G-300-101-K 07/26/2022 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-K.zip)**

- 全体的な安定性を向上。

**注意:** 上記のBIOSで**分岐機能が有効**なものを希望する場合は、techsupport@seeed.ioまでお問い合わせください。

分岐機能を使用すると、M.2 M-Keyを4つのPCIe x1として使用できます。これにより、複数のネットワークポート、複数のSSD、その他の拡張デバイスなど、4つの異なるPCIe x1デバイスをM.2に接続することが可能になります。分岐機能がない通常のBIOSでは、M.2 M-Keyは1つのPCIe x4としてのみ使用できます。

>**過去のBIOS:**

**[SD-BS-CJ41G-300-101-H 08/16/2021 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip)**

- **SHA256:** 9ea30178b4ef8453c6f24f037b4b3352ac6d214c7c22f94985428bcb23a178c2

- 全体的な安定性を向上。

> **[SD-BS-CJ41G-300-101-F 04/16/2021 01:20:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-F.zip)**

> - **SHA256:** 53711DBF9FB6ABE564BE1C7A870840F8B87CAA42239448869D87C08C1BDF0EC5

>    1. 全体的な安定性を向上。

> **[SD-BS-CJ41G-300-101-C 03/11/2021 16:28:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-C.zip)**

> - **SHA256:** 12f4ce1ab81008525138fcd7d830e18dc13936f3ce4a51e17c314fc55debe480

>    1. バグ修正: Windows以外のOSにロードする際の問題を修正。

> **[SD-BS-CJ41G-M-101-K 12/31/2020 20:34:37](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-K.zip)**

> - **SHA256:** 7208d39c4f77a4837a0a1072dce45c7bc8feba28597522ea036778a9c09aa61a

>    1. **セキュアブート**を追加。
>    2. **Wake on LAN**を追加。
>    3. Linux環境でBIOS設定ページに再起動する問題を修正 (例: `systemctl reboot --firmware-setup`)。
>    4. LinuxのWake on LANライト問題を修正。

> **[SD-BS-CJ41G-M-101-G 08/31/2020 14:01:20](http://files.seeedstudio.com/wiki/X86-BIOS/SD-BS-CJ41G-M-101-G.zip)**

> **SHA256:** eb932b69435d26a5b076c485c90e4289a697681ac092c18e85c86804e3fe4206

>1. BIOSメニューの **Setup** -> **Chipset** -> **Fan Control** に **Always On** オプションを追加しました。

>**[SD-BS-CJ41G-M-101-E 01/07/2020 14:03:11](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-E.zip)**

>**SHA256:** 98bb25d6d32250fb10bf047f5902630b82a8560020fb4336d7723b4dfb3f9df2

>1. 起動時のSeeedロゴ画面が完全に表示されない問題を修正しました。

:::note
最新のBIOSは**自動フラッシュ機能**をサポートしており、ファイルを**FAT32形式のUSBのルートディレクトリ**に配置し、**USBドライブを起動オプションとして選択**するだけで、自動的にフラッシュが開始されます。
:::

### ステップ 1 - 最新バージョンのBIOSをダウンロード

[**こちら**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip)から最新バージョンのBIOSをダウンロードしてください。

### ステップ 2 - 起動可能なUSBを準備

OSをインストールするための起動可能なUSBを作成するのと同様に、USBを`FAT32`ファイルシステムでフォーマットします。今回は、ダウンロードしたファイルを解凍し、その内容をUSBにコピーするだけです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios-files.png
" /></div>

### ステップ 3 - BIOSのアップグレード

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>BIOSアップグレード後の最初の起動は<b>比較的長時間</b>かかります。忍耐強く待ってください。インストールされたOSは最終的に起動します。このプロセスには<b>約3〜5分</b>かかります。</p>
  </div>
</div>

USBをODYSSEY - X86J41x5に接続し、以下の手順に従って起動してください：

- `F7`キーを押し続けて**ブートマネージャ画面**に入ります。`UEFI: Built-in EFI Shell`をブートデバイスとして選択し、`Enter`を押します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios1.jpg" /></div>

- 数秒待つとEFIシェルに入ります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios2.jpg" /></div>

- 以下のメッセージが表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios3.jpg" /></div>

- **BIOS.nsh**と入力し、**ENTER**を押してアップデートプロセスを開始します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios4.jpg" /></div>

- BIOSのアップデートが成功すると、以下の出力が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios5.jpg" /></div>

### ステップ 4 - 再起動

- BIOSがアップグレードされたら、**ON/OFFボタンを押して**、青いライトが消えるのを確認してください。

- ODYSSEY-X86から**DC電源ジャックとRTCバッテリーを取り外します**。

- 数分待ちます。

- RTCバッテリーとDC電源ジャックをODYSSEY-X86に再接続します。

- **ON/OFFボタンを押して忍耐強く待ちます**。青いライトが点灯するはずです。

### ステップ 5 - 忍耐強く待つ

忍耐強く待ち、更新プロセスを破損させないように**電源（またはハードウェア）を抜かないでください**。このプロセスには**6〜8分**かかりますので、コーヒーブレイクを取っても構いません！

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>BIOSアップグレード後の最初の起動は<b>比較的長時間</b>かかります。忍耐強く待ってください。インストールされたOSは最終的に起動します。このプロセスには<b>約6〜8分</b>かかります。</p>
  </div>
</div>

## 組み込みコントローラーの更新方法

X86には組み込みコントローラー（EC）も搭載されており、これを更新することができます。ECの更新手順はBIOSの更新（自動更新）と同じです：

1. ファームウェアファイルをダウンロードします。

2. FAT32でフォーマットされたUSBドライブのルートディレクトリに保存します。

3. ODYSSEY-X86を起動し、**F7**を押して**ブートセレクトモード**に入ります。

4. 接続されたUSBドライブを選択します（USBドライブのオプションが2つ表示される場合は、**UEFI**で始まる方を選択してください）。

5. 待機すると、自動的にフラッシュプロセスが開始されます。

6. 完了後、デバイスを再起動します。

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/r7M4T-HOZ20" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### 最新のECファームウェア

[**SD-EC-CJ41G-M-101-R 2022/07/26 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-R.zip)

1. **バグ修正**: 全体的な安定性を向上。

>**過去のECファームウェア:**

[**SD-EC-CJ41G-M-101-Q 2021/10/12 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-Q.zip)

- **SHA256:** 6009005FF61A64A580F0862343CED1E1E8B4DE8625E326510582063D6E20BCE4

1. **バグ修正**: 全体的な安定性を向上。

[**SD-EC-CJ41G-M-101-O 2021/08/16 15:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-O.zip)

> - **SHA256:** a08605b8b76bda6a50b64e64c4a9b256297d393f7139ffb2525cc93b28556f13

> 1. **バグ修正**: 全体的な安定性を向上。

> [**SD-EC-CJ41G-M-101-M 2021/04/16 01:20:07**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-M.zip)

> - **SHA256:** DB6E1F77D6EB4B9A79DDAF6E7A55052B7BE6E63B8339C7B948FF111E5C9CA8AD

> 1. **バグ修正**: 全体的な安定性を向上。

> [**SD-EC-CJ41G-M-101-K 2021/03/23 10:57:32**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-K.zip)

> - **SHA256:** 5e479185398121b1913ada3cff03264ea1522196b53f34c9ace77bd1f3ecc47e

> 1. **バグ修正**: ECファームウェアの安定性を向上。

> [**SD-EC-CJ41G-M-101-J 2021/02/02 15:39:11**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-J.zip)

> - **SHA256:** 4ab099f45439f8f6ec14e25ae50a64f878eed4c998e39000e17f2047df6bbb83

> 1. **バグ修正**: BIOS設定ページでシャットダウンすると、ODYSSEYが再び電源を入れるためにリセットが必要になる問題を修正。

> [**SD-EC-CJ41G-M-101-I 2020/12/31 20:34:37**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-I.zip)

> - **SHA256:** 94f664401120183238c5eaa41ea267b240dd5836fa879c568bf3275bca508c52

> 1. ファン制御ロジックを最適化。

>**[SD-EC-CJ41G-M-101-C 2020/08/31 14:01:20](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-C.zip)**

>- **SHA256:** 4b7ed82357eb608c3ec00f6f5f0358a35e63b327ae33855eb5e7608814f8df6a

> 1. ファンの起動温度と停止温度の誤りを最適化。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>