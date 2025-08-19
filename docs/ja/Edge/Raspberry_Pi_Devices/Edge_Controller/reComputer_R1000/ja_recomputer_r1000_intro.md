---
description: reComputer R1000 エッジ IoT コントローラーは、Raspberry Pi CM4 を搭載し、クアッドコア A72 プロセッサ、デュアルイーサネット、および BACnet、Modbus RTU、Modbus TCP/IP をサポートする複数の RS485 チャネルを備えています。4G、LoRa®、Wi-Fi/BLE を含む多様なワイヤレスオプションにより、スマートビルディングアプリケーションでの遠隔デバイスおよびエネルギー管理に最適です。
title: reComputer R1000 の概要
keywords:
- Raspberry pi
- エッジコントローラー
- reComputer R1000
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recomputer_r1000_intro
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

reComputer R1000 エッジ IoT コントローラーは、Raspberry Pi CM4 を搭載し、クアッドコア A72 プロセッサ、デュアルイーサネット、および BACnet、Modbus RTU、Modbus TCP/IP をサポートする複数の RS485 チャネルを備えています。4G、LoRa®、Wi-Fi/BLE を含む多様なワイヤレスオプションにより、堅牢な IoT ネットワーク通信を実現します。遠隔デバイスおよびエネルギー管理に理想的であり、スマートビルディングアプリケーションに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:800, height:'auto'}}/></div>

## reComputer R1000 の用途

### 初見ガイド

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 初期設定</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Raspbian OS を eMMC にインストール</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では、reComputer R1000 の概要を提供し、そのハードウェアインターフェースとオプションのハードウェアコンポーネントについて詳しく説明します。また、R1000 がさまざまな IoT アプリケーションに適している理由を強調します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reComputer R1000 には Raspbian のプリロードイメージが付属しています。再インストールが必要な場合、このガイドでは Raspbian を再インストールする方法を示します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_flash_OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 組み立てガイド</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 で RS485 と Modbus RTU を使用する方法</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 で BACnet MS/TP を使用する</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では、周辺機器コンポーネントをインストールするためのユニットの組み立ておよび分解方法、ならびに取り付けオプションについて説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では主に reComputer R1000 の RS485 通信機能の使用方法を紹介し、RS485 および Modbus 通信機能をテストします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では主に reComputer R1000 で BACnet MS/TP プロトコルの機能テストを実行する方法を紹介します。reComputer R1000 上で BACnet MS/TP サーバーをシミュレートし、その後 W10 PC 上で YABE を使用してデバイスが存在するかどうかを確認しました。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_assembly_guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_use_bacnet_mstp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### インダストリアルエッジ

<strong><span><font color={'4ec354'} size={"5"}> Node-RED</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Node-RED の始め方</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と Node-RED および MQTT</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と Node-RED および Modbus TCP</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-recomp.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  reComputer R1000 に Node-RED をインストールして設定する方法を学び、ハードウェア、API、オンラインサービスを接続するための多用途ツールに変身させましょう。直感的なブラウザベースのフローエディタを使用して、豊富なノードパレットを活用し、さまざまなコンポーネントをシームレスに統合できます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では Mosquitto ブローカーのインストール方法を探り、Node-RED を使用して MQTT トピックを購読および公開する方法を学びます。IoT アプリケーションに最適な MQTT は、信頼性の低いネットワーク上で低帯域幅で効率的かつリアルタイムのデータ交換を可能にします。</font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では、Node-RED を使用して reComputer R1000 上で Modbus TCP を操作する方法を学びます。Modbus TCP がプロトコルを Ethernet ネットワークに拡張し、より高速な通信速度と現代の IT インフラとのシームレスな統合を可能にする方法を発見してください。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_started_node_red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と Node-RED および BACnet TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と Node-RED および InfluxDB</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 と Grafana</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/bacnet-recomp.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では、ビル管理システム (BMS) における BACnet IP の利点に焦点を当て、Node-RED の統合方法を学びます。Node-RED と BACnet IP を使用して、スケーラビリティの向上、設置と保守の簡素化、既存のネットワークインフラの活用を実現する方法を学びましょう。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> ネットワークエッジでの強力な時系列データ収集と分析のために、Raspberry Pi を搭載したエッジコントローラー reComputer R1000 に InfluxDB を展開します。このガイドでは、InfluxDB のインストール、設定、および使用方法を詳しく説明し、IoT アプリケーションの効率的な管理とリアルタイムの洞察を可能にします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では、Raspberry Pi を搭載した reComputer R1000 に Grafana をインストールする方法を学び、データを洞察に満ちたビジュアライゼーションに変換します。既存の InfluxDB データベースに Grafana を接続し、システムパフォーマンスを向上させ、トラブルシューティングを簡素化し、強力なモニタリングツールで情報に基づいた意思決定を行うためのダッシュボードを作成します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_node_red_bacnet_ip/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000とNode-REDおよびOPC UAサーバー</font></th>
      <th class="table-trnobg"><font size={"4"}>Siemens PLCをS7プロトコルで接続するreComputer R1000</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000とFlowFuse</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-S7.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/flowfuse.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Node-RED環境でOPC UAサーバーを作成し、さまざまなプロトコルを統合して自動化階層全体での相互運用性を向上させる方法を案内します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では、Raspberry Piを搭載したreComputerでNode-REDを使用し、Siemens PLCとS7プロトコルを介して通信する方法を説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>FlowFuseは、Node-REDに共同開発、リモートデプロイメント、DevOpsパイプラインのためのツールを追加し、Node-REDアプリケーションの管理と提供を容易にします。このWikiでは、FlowFuseが開発チームのプロセスをどのように簡素化するかを探ります。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_opcua_server/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_s7/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_flow_fuse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>N3uron</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000とN3uron</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でN3uronを使用してAWS IoT Coreに接続</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWS_recomputer_n3uron.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> N3uronを使用してOTとITシステム間で双方向データパイプラインを簡単に作成し、運用データを単一のソースに統合して視覚化します。reComputer R1000を使用してN3uronをインストールおよびアクセスする方法を学びます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このチュートリアルでは、N3uron Edge IIoTプラットフォームとAWS IoT Core間のインターフェースの詳細について説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>


<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でBACnetをN3uronに接続</font></th>
      <th class="table-trnobg"><font size={"4"}>N3uron、MQTT、Modbusを使用して産業データをAWSクラウドに公開</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/modbus-bacnet-n3uron.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/recomputer-n3uron-aws.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> N3uronを使用して、ビル管理システムにおけるBACnetの力を発見し、データ取得と管理を強化してシームレスな相互運用性を実現します。BACnet TCPを使用してYABEルームシミュレーターでBACnetデバイスを視覚化およびテストし、堅牢で柔軟なBMSソリューションを確保します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>reComputer R1000とN3uron Duoを使用して、堅牢な接続性とデータ操作機能を活用し、プラント管理を強化します。このWikiでは、Modbus TCPとMQTTを使用して産業統合をシームレスに行う方法を案内します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron_bacnet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron_modbus_mqtt_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FUXA</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でFUXAを使用してModbus RTU/TCPを利用する</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でFUXAを使用してMQTTクライアントを利用する</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でFUXAを使用してOPC-UAを利用する</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では主にFUXAを使用してModbus RTU/TCP通信を行う方法について説明します。Modbusの基本をカバーし、さまざまなシナリオでの応用例を示します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では主にreComputer R1000でFUXAを使用してMQTT通信を行う方法を紹介します。この記事では、MQTTサーバーエージェントとしてmosquittoを使用し、FUXAとnode-redをMQTTクライアントとして使用します。また、FUXAが公開するデータのソースとしてModbusTCPスレーブを紹介します。</font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では主にFUXAを使用してOPC-UA通信を行う方法を紹介します。W10 PC上でProsys OPC UA Simulation Serverを実行し、reComputer R1000でシミュレーターのデータを読み取ります。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_modbus_rtu_and_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_mqtt_client/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_opc_ua/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でFUXAを使用してWebAPIを利用する</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でFUXAを使用してSCADAを実現する</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では主にFUXAを使用してWebAPI通信を行う方法を紹介します。この段階では、FUXAはGET機能のみをサポートしており、データパケットはJson形式です。FUXAのGET機能を使用してpostmanのデータグラムを取得します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では主にFUXAを使用してSCADAを実現する方法を紹介します。記事では、FUXAがnode-redとOPC UA Simulatorからデータを受信し、チャートやCircular Gaugeを使用して表示します。同時に、一連のパターンを描画して産業プロセスをシミュレートします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_web_api/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_achieve_scada/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>CODESYS</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000にCODESYSをインストールする方法</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000のModbus RTU機能をCODESYSで設定する方法</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>CODESYSは、3S-Smart Software Solutionsによって開発された、産業用制御システム向けの広く使用されているオートメーションソフトウェアプラットフォームです。この記事では、CODESYSをダウンロード、インストールし、reComputer R1000にプロジェクトを展開する方法に焦点を当てています。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では、CODESYSを基にしたreComputer R1000のModbus RTU機能を使用する方法を主に紹介します。reComputer R1000の2つのrs485ポートを使用し、1つのポートはModbusマスターとして、もう1つのポートはModbusスレーブとして使用します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_install_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_use_modbus_rtu_with_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FIN</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 に FIN をインストール</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と FIN を使用して Modbus TCP/RTU を利用</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と FIN Logic Builder を使用</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> FIN Framework (FIN) は、統合、制御、管理、分析、可視化、接続を可能にするアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は OEM によってさまざまな製品やサービスに統合することができます。本記事では、reComputer R1000 に Fin をインストールする方法を主に紹介します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本記事では、FIN Framework の Modbus コネクタの使用方法、FIN Framework における Modbus TCP/RTU の使用方法について詳しく説明します。</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本記事では、FIN Framework の Logic Builder の使用方法を紹介し、Logic Builder を使用してアラームを実装する方法を説明します。Modbus デバイスの値を監視し、その値が臨界値を超えた場合に FIN がアラームを発する仕組みを解説します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_install_fin/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_logic_builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と FIN を使用してトップレベルグラフィックを作成</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と FIN を使用してサイトグラフィックを作成</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と FIN を使用してフロアグラフィックを作成</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本記事では、FIN Framework の Graphics Builder を使用してトップレベルグラフィックを作成する方法を紹介します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本記事では、FIN Framework の Graphics Builder を使用してサイトグラフィックを作成する方法を紹介します。</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本記事では、FIN Framework の Graphics Builder を使用してフロアグラフィックを作成する方法を紹介します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_top_level_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_site_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_floor_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>ThingsBoard</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でのThingsBoardの始め方</font></th>
      <th class="table-trnobg"><font size={"4"}>ThingsBoardとreComputer R1000を使用した動的IoTダッシュボードの作成</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このガイドでは、reComputerにThingsBoard Community Editionをインストールしてエッジ展開を行う方法を説明します。デバイスのプロビジョニング、データ収集、可視化、テレメトリ分析を可能にする堅牢なIoTインフラを構築するためのステップバイステップのアプローチを提供します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、MQTTデバイスをThingsBoard Community Editionに追加し、そのデータをインタラクティブなダッシュボードで可視化する方法を説明します。デバイスを接続し、テレメトリデータを送信し、ThingsBoardのグラフィカルツールを使用してリアルタイムの監視と分析を行う手順をカバーします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_thingsboard_ce/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_thingsboard_dashboard/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>


### フリート管理  

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 balena OSセットアップ</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Balenaは、デバイスフリート全体にわたってアプリケーションを展開および管理するための開発者向けIoTプラットフォームです。多様なアーキテクチャをサポートし、現場での簡単な更新と安全で信頼性の高いデバイス運用を可能にします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_balena/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### クラウドソリューション 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>AWS IoT CoreとreComputer R1000の統合</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWSrecomputer.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  この包括的なガイドでは、reComputer R1000をAWS IoTクラウドに接続する方法を学びます。AWS IoT Coreを活用して、安全なデバイス管理とシームレスな通信を実現し、AWSエコシステム内でスマートで接続されたアプリケーションを開発します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### コンピュータビジョン 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>YOLOv8によるreComputer R1000とHailo-8Lでの物体検出</font></th>
      <th class="table-trnobg"><font size={"4"}>YOLOv8によるreComputer R1000とHailo-8Lでのポーズ推定</font></th>
      <th class="table-trnobg"><font size={"4"}>Raspberry Pi 5とCM4でのYOLOv8sのベンチマーク（Raspberry Pi AIキット使用）</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このWikiでは、reComputer R1000でYOLOv8を使用した物体検出を、Raspberry Pi AIキットの有無で実演します。Raspberry Pi AIキットは、Raspberry Piの性能を向上させ、人工知能と機械学習アプリケーションの可能性を引き出します。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このWikiでは、reComputer R1000でYOLOv8を使用したポーズ推定を、Raspberry Pi AIキットの有無で実演します。Raspberry Pi AIキットは、Raspberry Piの性能を向上させ、人工知能と機械学習アプリケーションの可能性を引き出します。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このWikiでは、Raspberry Pi 5とRaspberry Pi Compute Module 4でのYOLOv8sのポーズ推定と物体検出のベンチマークを紹介します。すべてのテストは同じモデル（YOLOv8s）を使用し、int8に量子化され、入力サイズは640x640解像度、バッチサイズは1、240 FPSの同じビデオから入力を取得します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>
<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Node-RedとRaspberry Pi AIキットを使用したポーズベースのライト制御</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputerでのCLIPアプリケーション</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI-Box/CLIP.PNG" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このWikiでは、AIキットを使用してYOLOv8を実行し、姿勢を監視し、最終的に姿勢に基づいてライトを制御する方法を説明します。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このチュートリアルでは、reComputerにCLIPをインストールする方法を説明します。CLIPは、従来のラベルを使用せずに画像とテキストを一致させることでゼロショット画像認識を可能にします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/pose_based_light_control_with_nodered_and_rpi_with_aikit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/clip_application_on_rpi5_with_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

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