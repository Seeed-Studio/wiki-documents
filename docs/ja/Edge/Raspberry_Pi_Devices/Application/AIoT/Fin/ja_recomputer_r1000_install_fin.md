---
description: この記事では主にreComputer R1000にfinをインストールする方法を紹介します

title: reComputer R1000 FINインストール
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - fin
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_install_fin
last_update:
  date: 07/4/2024
  author: ShuishengPeng
---

## はじめに
FIN Framework（FIN）は、統合、制御、管理、分析、可視化、接続が可能なアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEMによって様々な製品やサービスに統合することができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" /></center>

この記事では主にreComputer R1000にFINをインストールする方法を紹介します。

## はじめに

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

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

### ソフトウェアの準備

* まず、FINインストールパッケージとライセンスファイルを取得するために、サプライヤーに連絡する必要があります。
* その後、`fin.service`という名前のファイルを作成してください。これはシステムでFINサービスを開始するために使用されます。インストールパッケージがzipファイルの場合、`fin.service`ファイルの内容は以下のようになります：
  ```shell
  [Unit]
  Description=FIN Framework
  After=syslog.target network.target
  StartLimitIntervalSec=0

  [Service]
  Type=simple
  Restart=always
  RestartSec=1
  WorkingDirectory=/opt/finFramework_5.1.6.55
  ExecStart=/usr/bin/java -Xmx512M -cp /opt/finFramework_5.1.6.55/lib/java/sys.jar -Dfan.home=/opt/finFramework_5.1.6.55/ fanx.tools.Fan finStackHost

  [Install]
  WantedBy=multi-user.target

  #systemctl daemon-reload
  #systemctl enable fin
  #systemctl start fin
  ```

## インストール手順
**ステップ1**: 以下のコマンドを入力してFINをインストールします：
  ```shell
  sudo apt install openjdk-17-jdk
  cd /opt/
  ## インストールパッケージを/optディレクトリに解凍
  sudo unzip ~/Desktop/FINFramework_5.1.6.55.zip
  ## バージョン番号がわかるように名前を変更
  sudo mv finFramework finFramework_5.1.6.55
  ## サービスファイルをシステムにインポート
  sudo cp ~/Desktop/fin.service /etc/systemd/system/
  sudo systemctl daemon-reload
  sudo systemctl enable fin
  sudo systemctl start fin
  sudo reboot
  ```
  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/install_fin.gif" /></center>

**ステップ2**: 再起動後、ブラウザをクリックして`http://localhost:8080/`を入力します。以下のインターフェースが表示され、インストールの最初のステップが成功したことを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/login.png" /></center>

**ステップ3**: 初期のユーザー名とパスワードは両方とも`su`です。ログインボタンをクリックしてログインします。ログインが成功すると、パスワードのリセットを求められます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/change_passwd.gif" /></center>

**ステップ4**: ログイン後、システムからライセンスファイルがないという警告が表示される場合があります。この時、ライセンスファイルをインポートする必要があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/add_license.gif" /></center>

その後、`FIN`の様々な機能を探索することができます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、様々なサポートを提供しています。様々な好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>