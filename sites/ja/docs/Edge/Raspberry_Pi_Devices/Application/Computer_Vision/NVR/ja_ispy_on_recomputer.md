---
description: このwikiでは、recomputer上でmoonfire nvrをデプロイする方法を説明します。
title: reComputer上のiSpy
keywords:
  - reComputer
  - iSpy
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_5.webp
slug: /ispy_on_recomputer
last_update:
  date: 11/10/2025
  author: Jiahao
no_comments: false # for Disqus
---

# reComputer上のiSpy

## はじめに

[iSpy](https://www.ispyconnect.com/)は、コンシューマー向けウェブカメラやIPカメラと連携するように設計されたオープンソースのビデオ監視アプリケーションです。2007年に最初にリリースされ、フル機能の監視ソリューションに進化しました。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/ispy_1.png" alt="pir" width="800" height="auto"/></p>


## 前提条件

### ハードウェア要件

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## iSpyのダウンロード

### システムの更新

以下のコマンドを使用して実行してください。

```bash
sudo apt update
sudo apt upgrade -y
```

### dockerとdocker composeのダウンロード

以下のコマンドを使用してdockerをインストールしてください。

```bash
wget https://get.docker.com -O get-docker.sh
chmod +x 
sudo sh get-docker.sh
sudo systemctl start docker
sudo systemctl enable docker
docker --version
```
結果は以下のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/docker_install.png" alt="pir" width="800" height="auto"/></p>


以下のコマンドを使用してdocker composeをインストールしてください。

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r .tag_name)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

結果は以下のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/docker_compose_version.png" alt="pir" width="800" height="auto"/></p>


### `docker-compose.yaml`の作成


以下のコマンドを使用して`docker-compose.yaml`を作成してください。

```bash
cd ~ && nano docker-compose.yaml
```

次に、以下の内容を`YAML`ファイルに入力してください。

```bash
services:
  agentdvr:
    image: mekayelanik/ispyagentdvr:latest
    container_name: AgentDVR
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
      - AGENTDVR_WEBUI_PORT=8090
    ports:
      - "8090:8090"
      - "3478:3478/udp"
      - "50000-50100:50000-50100/udp"
    volumes:
      - /appdata/AgentDVR/config/:/AgentDVR/Media/XML/
      - /appdata/AgentDVR/media/:/AgentDVR/Media/WebServerRoot/Media/
      - /appdata/AgentDVR/commands:/AgentDVR/Commands/
```

以下のコマンドを使用して必要なフォルダを作成してください。

```bash
sudo mkdir -p /appdata/AgentDVR/config /appdata/AgentDVR/media /appdata/AgentDVR/commands
```

## iSpyの設定

### docker composeの実行

以下のコマンドを使用してデータベースを初期化してください。

```bash
sudo docker compose up -d
```

結果は以下のように表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/ispy_docker.png" alt="pir" width="800" height="auto"/></p>


### 設定

`localhost:8090`ポートを開いてください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/ispy_windows.png" alt="pir" width="800" height="auto"/></p>

以下の手順に従ってカメラを追加してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_1.png" alt="pir" width="800" height="auto"/></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_2.png" alt="pir" width="800" height="auto"/></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_3.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_4.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_5.png" alt="pir" width="800" height="auto"/></p>

## 結果

すべてを設定したら、現在のカメラからのライブフィードを表示できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/result.gif" alt="pir" width="800" height="auto"/></p>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
