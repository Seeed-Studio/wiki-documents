---
description: reTerminal DMは、10.1インチのオープンソース産業用ヒューマンマシンインターフェース（HMI）で、統合デバイスマスターとして機能します。このオールインワンデバイスはRaspberry Pi CM4をベースにしており、パネルPC、HMI、PLC、IIoTゲートウェイとして機能します。IP65の産業用グレードの大型スクリーンを備えたreTerminal DMは、次世代のインタラクティブセンシングハブであり、データフローと現場デバイス管理を効率化します。
title: reTerminal DM ガイド
keywords:
- reTerminal DM
- 初めての使用
image: https://wdcdn.qpic.cn/MTY4ODg1NjEyODQyNTE2Nw_928147_NLYXC-4cRuQd5Tra_1681284617?w=1200&h=713
slug: /ja/reTerminal-dm_Intro
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NjEyODQyNTE2Nw_928147_NLYXC-4cRuQd5Tra_1681284617?w=1200&h=713" style={{width:800, height:'auto'}}/></div>

## reTerminal の使い方

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM の使い方</font></th>
      <th class="table-trnobg"><font size={"4"}>ハードウェアとインターフェースの使用方法</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/reterminaldmtools.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、LoRaWAN®、WiFi、BLE、RS485/RS232、CANバス、1000Mイーサネット、USB、HDMIなどのハードウェア仕様やその他の機能について説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、SSD、カメラ、PEOモジュールなどの追加ハードウェアの取り付け、WiFi/BLEアンテナやLoRaWANアンテナの組み立てなどについて説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-dm/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しくはこちら</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-dm-hardware-guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しくはこちら</font></span></strong></a></div></td>
		</tr>
	</table>
</div>



## OSのインストール

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian OS</font></th>
      <th class="table-trnobg"><font size={"4"}>SenseCraft Edge</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Raspberry Pi OSとドライバのインストール手順を案内します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、reTerminal DMの10.1インチHMIデバイス向けに設計されたSenseCraft Edge OSを紹介します。直感的なインターフェースと統合された機能を備え、デバイスの設定と管理をスムーズに行えます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しくはこちら</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-dm-sensecraft-edge-os-intro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しくはこちら</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## アプリケーション

### データビジュアライゼーション

**このエキサイティングなセクションでは、数分で産業レベルのインタラクティブなダッシュボードを作成する方法を発見しましょう！**

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>FUXA - WebベースのSCADAツールで始める</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM & Machinechat JEDI: あなたの産業用IoTの強力なツール</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このセクションでは、SCADA、HMI、ダッシュボード、またはIIoTシステムを迅速に作成および展開するための強力なWebベースツールであるFUXAを探ります。FUXAを使用すると、カスタムプロセスの可視化を簡単に設計し、リアルタイムデータを表示し、産業環境での機器を制御できます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Machinechat JEDIはIoTデータ管理を簡素化し、リアルタイムデータの収集、可視化、監視、および応答を容易にします。SeeedのreTerminal DMと組み合わせることで、カスタムダッシュボードの作成が30分以内で可能です。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM_intro_FUXA/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_Introduction_Jedi_MachineChat/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### エッジAI

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edge ImpulseとreTerminal DMを使用した物体検出</font></th>
      <th class="table-trnobg"><font size={"4"}>Yolov5で独自のデータセットをトレーニングし、reTerminal DMにデプロイ</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    		<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" style={{width:300, height:'auto'}}/></div></td>
	</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Edge ImpulseとreTerminal DMを使用した物体検出を探ります。Edge Impulseは、開発者が実際のデータを使用して組み込み機械学習ソリューションを作成および最適化することを可能にします。詳細を見ていきましょう。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、YOLOv5を使用して独自のデータセットをトレーニングし、Raspberry PiベースのreTerminal DMにデプロイする方法を学びます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Yolo5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### ホームアシスタント

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>FrigateとreTerminal DMの統合</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> FrigateはリアルタイムAI物体検出のために設計されたオープンソースのNVRです。すべての処理はローカルのハードウェア上で行われ、カメラフィードは自宅内に留まります。このWikiでは、NVRのインストール方法を案内し、物体検出機能を紹介します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-DM-Frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### クラウドソリューション

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>AWS IoT CoreとreTerminal DMの統合</font></th>
      <th class="table-trnobg"><font size={"4"}>Azure IoT EdgeとreTerminal DMの統合</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/awslogo.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/azure.jpg" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> AWS IoT Coreは、IoTデバイスを安全に接続および管理し、スマートアプリケーションのためにクラウドとの通信を可能にします。このWikiでは、reTerminal DMデバイスを設定してクラウド通信をシームレスに行う方法を案内します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Debian 11 (ARM32v7)を実行し、Azure IoT Edge Runtimeが事前インストールされたreTerminal DMデバイスを接続する方法を説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM_AWS_first/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reTerminalDM/azure.jpg" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### インダストリアルエッジ

<strong><span><font color={'4ec354'} size={"5"}> Node-red</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM Node-RED 入門</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM RS485 ポートと Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM MQTT と Node-RED</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" style={{width:300, height:'auto'}}/></div></td>
      	<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/MQTT.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このウィキでは、reTerminal DM に Node-RED をインストールします。Node-RED は、ブラウザベースのエディタを通じてハードウェアデバイス、API、オンラインサービスを接続する直感的なプログラミングツールであり、簡単にフローを作成してワンクリックでデプロイできます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このウィキでは、組み込みの Modbus ノードを使用して Modbus デバイスを Node-RED ワークフローに統合する方法を探ります。RS485 プロトコルについて学び、Modbus を理解し、それらを reTerminal DM とシームレスに統合する方法を発見してください。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このウィキでは、Node-RED に MQTT を統合し、このプロトコルのサポートを活用して強力な IoT アプリケーションを構築する方法を探ります。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Getting-Started-with-Node-Red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-RS485/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM CAN BUS と Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM と Node-RED および Modbus TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM と Node-RED および BACnet TCP</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このウィキでは、Node-RED を使用して CAN バスモジュールを統合し、自動車、産業オートメーション、医療機器、航空宇宙アプリケーションで広く使用される ECU 間の効率的な高速データ交換を実現します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このウィキでは、Node-RED を使用して reTerminal DM 上で Modbus TCP を操作する方法を学びます。Modbus TCP がプロトコルを Ethernet ネットワークに拡張し、より高速な通信速度と現代の IT インフラとのシームレスな統合を可能にする方法を発見してください。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このウィキでは、Node-RED と BACnet IP を使用してビル管理システム (BMS) における BACnet IP の利点を発見します。スケーラビリティの向上、設置と保守の容易さ、既存のネットワークインフラの活用方法について学びます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-canbus/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal_dm_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal_dm_rpi_200_node_red_bacnet_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM と Node Red および InfluxDB</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM と Grafana を使用した IoT ダッシュボード</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana-dash.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reTerminal DM（Raspberry Pi を搭載した HMI）に InfluxDB をデプロイし、ネットワークエッジでの堅牢な時系列データの収集と分析を実現します。このガイドでは、InfluxDB のインストール、設定、および使用方法を詳しく説明し、IoT アプリケーションの効率的な管理とリアルタイムの洞察を可能にします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では、Raspberry Pi を搭載した reTerminal DM に Grafana をインストールする方法を学び、データを洞察に満ちたビジュアライゼーションに変換します。既存の InfluxDB データベースに Grafana を接続し、システムパフォーマンスを向上させ、トラブルシューティングを簡素化し、強力な監視ツールを使用して情報に基づいた意思決定を行うためのダッシュボードを作成します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal_dm_200_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal_dm_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br/>
<strong><span><font color={'4ec354'} size={"5"}> Ignition Edge</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM と Ignition Edge の入門</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM Ignition Edge パネルビルダー Hello World</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Ignition Edge をネットワークエッジのフィールドおよび OEM デバイスに組み込むことで、Ignition をネットワークのエッジまで拡張できます。このガイドを使用して、reTerminal デバイスをセットアップする方法を学びましょう。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では、基本的なページを作成し、固定 URL で表示する方法を説明します。「Hello World」パースペクティブプロジェクトを作成し、Web ブラウザを使用してゲートウェイで表示する方法を学びます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Getting-Started-with-Ignition-Edge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Ignition-Edge-Panel-Builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br/>
<strong><span><font color={'4ec354'} size={"5"}> N3uron</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM と N3uron の入門</font></th>
      <th class="table-trnobg"><font size={"4"}>AWS IoT Core と N3uron の接続</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://n3uron.com/wp-content/uploads/2021/09/How-to-Connect-Industrial-Assets-to-AWS-IoT.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> N3uron は、IIoT および DataOps のための産業用エッジプラットフォームであり、プラントフロアとサードパーティアプリケーション（オンプレミスまたはクラウド）間のシームレスな統合を保証します。このチュートリアルでは、N3uron の世界への第一歩を踏み出します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、N3uron エッジ IIoT プラットフォームと AWS IoT Core 間のインターフェースの詳細について説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_Get_Start/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_AWS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>N3uronを使用したMQTTおよびModbus対応デバイスとの接続</font></th>
        <th class="table-trnobg"><font size={"4"}>Historianモジュールを統合してreTerminal DMで可視化</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/n3uron_mqtt_modbus_aws.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" style={{width:300, height:'auto'}}/></div></td>  
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reTerminal DMとN3uron Duoの強力な組み合わせで効率的なプラント管理を実現しましょう。Wikiでは、産業環境におけるModbus TCPの重要性を強調し、接続性とデータ操作を向上させるためのシームレスなMQTTデバイス統合を紹介しています。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Neuron Historianを使用すると、N3uron Linksを介してローカルまたはリモートで収集されたタグ値を簡単に保存できます。また、通信が途絶えた際にデータを保持する便利なStore & Forward機能も提供します。このチュートリアルでは、グラフを作成し、データをCSVファイルとして簡単に保存する方法を学びます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_modbus_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_Historian/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div> 
<table>
	<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 詳細を探る</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Piデバイスに戻る</font></span></strong></a></div></td>
		</tr>
	</table>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストは、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の一環として分類されています。私たちは、ユーザー体験を向上させ、Wikiプラットフォームの開発を通じてより良いサポートを提供することに専念しています。
- [このページへの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038)は私たちにとって非常に重要です！皆様のご意見を大切にしており、アイデアの生成にご協力いただけると大変ありがたいです。



## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>