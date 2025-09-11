---
description: この記事では、CODESYS のインストール方法と R1000 に新しいプロジェクトを展開する方法について主に紹介します。

title: reComputer R1000 に CODESYS をインストールする方法
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_install_codesys
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
CODESYS は、産業用制御およびオートメーションシステムで広く使用されている人気のあるオートメーションソフトウェア開発プラットフォームです。その正式名称は Controller Development System であり、ドイツの企業 3S-Smart Software Solutions によって初めて開発されました。
この記事では、CODESYS のダウンロードとインストール方法を主に紹介し、最後に CODESYS プロジェクトを reComputer R1000 に展開する方法を説明します。

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## ソフトウェアの準備

* [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
* [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## 始めましょう

### CODESYS のインストール
**ステップ 1**: CODESYS ストアにアクセスし、`CODESYS Development System V3` を見つけてダウンロードし、次に `CODESYS Control for Raspberry Pi SL` を見つけてダウンロードします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/1.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/2.png" /></center>

**ステップ 2**: ダウンロードした `CODESYS 64 3.5.20.30.exe` ファイルをダブルクリックし、`install` をクリックして `CODESYS Installer` をダウンロードします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/3.png" /></center>

**ステップ 3**: `CODESYS Installer` のダウンロードが完了すると、`InstallShield Wizard` が自動的にポップアップします。`Next` をクリックして `CODESYS` のインストールを開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" /></center>

**ステップ 4**: ライセンスを承諾するをクリックし、次に `Next` をクリックして次のステップに進みます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/5.png" /></center>

**ステップ 5**: `I have read the information` をクリックし、次に `Next` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/6.png" /></center>

**ステップ 6**: インストールディレクトリを変更し、変更が完了したら `Next` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/7.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/8.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/9.png" /></center>

**ステップ 7**: `Complete` を選択して CODESYS を完全にインストールし、次に `Next` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/10.png" /></center>

**ステップ 8**: `Install` をクリックしてインストールを開始します。インストールが完了するまでしばらく待ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/11.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/12.png" /></center>

### 依存パッケージの更新

**ステップ 1**: インストールが完了したら、`CODESYS V3.5 SP20 Patch 3` を開き、`Tools` ---> `CODESYS Installer..` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p1.png" /></center>

**ステップ 2**: 新しいウィンドウで `Install File(s)` をクリックし、インストールするパッケージを選択します。選択後、パッケージが解析されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p2.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p3.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p4.png" /></center>

**ステップ 3**: `I accept the license agreement(s)` をクリックし、次に `Continue` をクリックしてインストールを開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p5.png" /></center>

**ステップ 4**: ポップアップウィンドウが表示され、`CODESYS V3.5 SP20 Patch 3` を閉じるように求められます。CODESYS を閉じてから `OK` をクリックします。CODESYS は新しいパッケージのインストールを開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p7.png" /></center>

**ステップ 5**: インストールが完了するまで待ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p8.png" /></center>

### CODESYS ランタイムの展開


CODESYS Runtime は、CODESYS 開発環境で作成された PLC プログラムを実行するためにターゲットデバイスにインストールされるソフトウェアを指します。CODESYS Runtime は、ターゲットデバイス（組み込みシステム、産業用コンピュータ、Raspberry Pi など）をプログラマブルロジックコントローラ（PLC）に変換します。

**ステップ 1**: reComputer R1000 とホストコンピュータが同じネットワークセグメント内にあることを確認します。

**ステップ 2**: `Tools` ---> `Update Raspberry Pi` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r1.png" /></center>

**ステップ 3**: reComputer R1000 のユーザー名、パスワード、IP アドレスを入力し、`Install` をクリックして reComputer R1000 に `run time` をダウンロードします。最後に `Start` をクリックして `run time` を開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r2.png" /></center>

**ステップ 4**: メッセージバーに以下のメッセージが表示されたら、reComputer R1000 が `run time` を正常に実行していることを意味します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r3.png" /></center>


### 新しいプロジェクトのデプロイ

**ステップ 1**: `File` ---> `New project` をクリックして新しいプロジェクトを作成します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n1.png" /></center>

**ステップ 2**: プロジェクト名を入力し、`Project` ---> `Standard project` を選択して、最後に `OK` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n2.png" /></center>

**ステップ 3**: `Device` 列で `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` を選択し、`PLC_PRG in` で `Structured Text (ST)` を選択して、最後に `OK` をクリックします。これで新しいプロジェクトが作成されます。後ほどプロジェクトのデプロイ方法を説明します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n3.png" /></center>

**ステップ 4**: プロジェクトを作成した後、それをダブルクリックします。新しいポップアップウィンドウで `Scan Network` をクリックすると、同じネットワークセグメント内の reComputer R1000 を見つけることができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n5.png" /></center>

**ステップ 5**: R1000 を選択して `OK` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n6.png" /></center>

**ステップ 6**: `Add Device User` ウィンドウで、reComputer R1000 のユーザー名とパスワードを入力し、最後に `OK` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n7.png" /></center>

**ステップ 7**: 次に `Device User Login` ウィンドウがポップアップします。再度 reComputer R1000 のユーザー名とパスワードを入力し、最後に `OK` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n8.png" /></center>

**ステップ 8**: 接続が成功すると、ステータスライトがすべて緑色で表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n9.png" /></center>

**ステップ 9**: ツールバーの `Deploy` ボタンをクリックして、現在のプロジェクトをコンパイルし、reComputer R1000 にデプロイします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n10.png" /></center>

**ステップ 10**: ツールバーの `Start` ボタンをクリックして、reComputer R1000 で現在のプロジェクトを開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n11.png" /></center>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>