---
description: この記事では主にCODESYSのインストール方法と、R1000での新しいプロジェクトのデプロイ方法について紹介します

title: reComputer R1000用CODESYSのインストール方法
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_install_codesys
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## はじめに

CODESYSは産業制御および自動化システムで広く使用されている人気の自動化ソフトウェア開発プラットフォームです。正式名称はController Development Systemで、ドイツの3S-Smart Software Solutions社によって最初に開発されました。
この記事では主にCODESYSのダウンロードとインストール方法を紹介し、最終的にCODESYSプロジェクトをreComputer R1000にデプロイします。

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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

### CODESYS のインストール

**ステップ 1**: CODESYS ストアにアクセスし、`CODESYS Development System V3` を見つけてダウンロードし、次に `CODESYS Control for Raspberry Pi SL` を見つけてダウンロードします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/1.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/2.png" /></center>

**ステップ 2**: ダウンロードした `CODESYS 64 3.5.20.30.exe` ファイルをダブルクリックし、`install` をクリックして `CODESYS Installer` をダウンロードします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/3.png" /></center>

**ステップ 3**: `CODESYS Installer` がダウンロードされた後、`InstallShield Wizard` が自動的にポップアップします。`Next` をクリックして `CODESYS` のインストールを開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" /></center>

**ステップ 4**: ライセンスに同意するをクリックし、`Next` をクリックして次のステップに進みます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/5.png" /></center>

**ステップ 5**: `I have read the information` をクリックし、`Next` をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/6.png" /></center>

**ステップ 6**: インストールディレクトリを変更し、変更完了後に `Next` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/7.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/8.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/9.png" /></center>

**ステップ 7**: `Complete` を選択して CODESYS を完全にインストールし、`Next` をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/10.png" /></center>

**ステップ 8**: `Install` をクリックしてインストールを開始します。時間がかかりますので、インストールが完了するまでお待ちください

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/11.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/12.png" /></center>

### 依存パッケージの更新

**ステップ 1**: インストール完了後、`CODESYS V3.5 SP20 Patch 3` を開き、`Tools`--->`CODESYS Installer..` をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p1.png" /></center>

**ステップ 2**: 新しいウィンドウで `Install File(s)` をクリックし、インストールするパッケージを選択します。選択後、パッケージが解析されます

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p2.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p3.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p4.png" /></center>

**ステップ 3**: `I accept the license agreement(s)` をクリックし、`Continue` をクリックしてインストールを開始します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p5.png" /></center>

**ステップ 4**: ポップアップウィンドウが表示され、`CODESYS V3.5 SP20 Patch 3` を閉じるよう求められます。CODESYS を閉じてから `OK` をクリックします。CODESYS が新しいパッケージのインストールを開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p7.png" /></center>

**ステップ 5**: インストールが完了するまでお待ちください

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p8.png" /></center>

### CODESYS ランタイムの展開

CODESYS Runtime は CODESYS ランタイムシステムを指し、CODESYS 開発環境で作成された PLC プログラムを実行するためにターゲットデバイスにインストールされるソフトウェアです。CODESYS Runtime は、ターゲットデバイス（組み込みシステム、産業用コンピュータ、Raspberry Pi など）をプログラマブルロジックコントローラ（PLC）に変換します。

**ステップ 1**: reComputer R1000 とホストコンピュータが同じネットワークセグメントにあることを確認します

**ステップ 2**: `Tools`--->`Update Raspberry Pi` をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r1.png" /></center>

**ステップ 3**: reComputer R1000 のユーザー名とパスワード、IP アドレスを入力し、Install をクリックして `run time` を reComputer R1000 にダウンロードし、最後に `Start` をクリックして `run time` を開始します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r2.png" /></center>

**ステップ 4**: メッセージバーに以下のメッセージが表示されると、reComputer R1000 が `run time` の実行に成功したことを意味します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r3.png" /></center>

### 新しいプロジェクトの展開

**ステップ 1**: `File`--->`New project` をクリックして新しいプロジェクトを作成します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n1.png" /></center>

**ステップ 2**: プロジェクト名を入力し、`Project`--->`Standard project` を選択し、最後に `OK` をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n2.png" /></center>

**ステップ 3**: `Device` 列で `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` を選択し、`PLC_PRG in` で `Structured Text (ST)` を選択し、最後に `OK` をクリックします。新しいプロジェクトが作成されます。後ほど、プロジェクトのデプロイ方法をデモンストレーションします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n3.png" /></center>

**ステップ 4**: プロジェクトを作成した後、それをダブルクリックします。新しくポップアップしたウィンドウで、`Scan Network` をクリックします。これにより、同じネットワークセグメント内の reComputer R1000 を見つけることができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n5.png" /></center>

**ステップ 5**: R1000 を選択し、`OK` をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n6.png" /></center>

**ステップ 6**: `Add Device User` ウィンドウで、reComputer R1000 のユーザー名とパスワードを入力し、最後に `OK` をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n7.png" /></center>

**ステップ 7**: その後、`Device User Login` ウィンドウがポップアップするので、reComputer R1000 のユーザー名とパスワードを再度入力し、最後に OK をクリックします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n8.png" /></center>

**ステップ 8**: 接続が成功すると、ステータスライトがすべて緑色になっているのが確認できます

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n9.png" /></center>

**ステップ 9**: 図に示すように、ツールバーの Deploy ボタンをクリックして、現在のプロジェクトをコンパイルし、reComputer R1000 にデプロイします

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n10.png" /></center>

**ステップ 10**: ツールバーの Start ボタンをクリックして、reComputer R1000 で現在のプロジェクトを開始します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n11.png" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
