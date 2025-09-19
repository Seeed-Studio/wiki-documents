---
description: この記事では主にfuxaを使用してWebAPI通信を行う方法について紹介します。

title: reComputer R1000でfuxaを使用してWebAPIを利用する
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - WebAPI
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_web_api
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## はじめに
FUXAはWebベースのプロセス可視化（SCADA/HMI/ダッシュボード）ソフトウェアです。FUXAを使用すると、機械用の個別設計による最新のプロセス可視化とリアルタイムデータ表示を作成できます。Modbus RTU/TCP、Siemens S7プロトコル、OPC-UA、BACnet IP、MQTT、その他のプロトコルをサポートしています。

[postman](https://www.postman.com/downloads/?utm_source=postman-home)はhttpプロトコルをサポートするインターフェースデバッグおよびテストツールです。その主な特徴は強力な機能、シンプルな使用方法、使いやすさであり、WebAPIのインターフェースデバッグによく使用されます。

この記事では主にfuxaを使用してWebAPI通信を行う方法について紹介します。現段階では、fuxaは`GET`機能のみをサポートしており、データパケットはJson形式です。fuxaの`GET`機能を使用して`postman`のデータグラムを取得します。

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

* Python 3.11はfuxaと互換性がない可能性があります。Pythonバージョンが3.11の場合は、別のPythonバージョンへの変更を検討してください。
* reComputer R1000で[fuxa](https://github.com/frangoteam/FUXA)を使用します。以下の手順を参考にしてreComputer R1000にfuxaをインストールできます
  ```shell
    ## Node Version 14 || 16 || 18がインストールされている必要があります。
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## 次にnpmからFUXAをインストールします
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

## WebAPI通信手順
**ステップ1**: `fuxa`インターフェースの右下角の`+`記号をクリックし、`Name`を入力し、`Type`で`WebAPI`を選択し、`Method`で`GET`を選択し、`Format`で`JSON`を選択します。次に`URL`で`https://postman-echo.com/get`を入力し、最後に`OK`をクリックします。fuxaが`postman`との接続を正常に確立できることが確認できます

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_webapi.gif" /></center>

**ステップ2**: 設定インターフェースに入り、左上角または右下角の`+`ボタンをクリックすると、`GET`機能を通じて`postman`から取得したデータを確認できます。各データを選択してタグを作成し、最後に`OK`をクリックします。これにより、`GET`機能を通じて`postman`データをリアルタイムで読み取ることができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>