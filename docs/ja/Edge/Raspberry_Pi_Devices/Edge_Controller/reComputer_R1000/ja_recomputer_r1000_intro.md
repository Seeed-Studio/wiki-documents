---
description: Raspberry Pi CM4を搭載したreComputer R1000エッジIoTコントローラーは、クアッドコアA72プロセッサ、デュアルイーサネット、BACnet、Modbus RTU、Modbus TCP/IPをサポートする複数のRS485チャネルを特徴としています。4G、LoRa®、Wi-Fi/BLEを含む多様なワイヤレスオプションにより、スマートビルディングアプリケーションでのリモートデバイスおよびエネルギー管理に最適です。
title: reComputer R1000 ウォークスルー
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1000
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recomputer_r1000_intro
last_update:
  date: 10/08/2024
  author: Kasun Thushara
---

Raspberry Pi CM4を搭載したreComputer R1000エッジIoTコントローラーは、クアッドコアA72プロセッサ、デュアルイーサネット、BACnet、Modbus RTU、Modbus TCP/IPをサポートする複数のRS485チャネルを特徴としています。4G、LoRa®、Wi-Fi/BLEを含む多様なワイヤレスオプションにより、堅牢なIoTネットワーク通信を確保します。リモートデバイスおよびエネルギー管理に最適で、R1000はスマートビルディングアプリケーションに完璧です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:800, height:'auto'}}/></div>

## reComputer R1000 アプリケーション

### 初回利用ガイド

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 はじめに</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Raspbian OSをeMMCに</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  この記事では、reComputer R1000の概要を提供し、そのハードウェアインターフェースとオプションのハードウェアコンポーネントについて詳しく説明することに焦点を当てています。R1000を様々なIoTアプリケーションに適したものにする機能と能力を強調しています。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reComputer R1000には、Raspbianのプリロードされたイメージが付属しています。再インストールが必要な場合、このガイドではRaspbianを再度インストールする方法を説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_flash_OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 組み立てガイド</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でrs485とmodbus rtuを使用する方法</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でbacnet MS/TPを使用する</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このWikiでは、周辺機器コンポーネントを取り付けるためのユニットの組み立てと分解方法、および取り付けオプションについて説明します</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では主にreComputer R1000のRS485通信機能の使用方法を紹介し、RS485とModbus通信機能をテストします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では主にreComputer R1000でbacnet MS/TPプロトコルの機能テストを実行する方法を紹介します。reComputer R1000でbacnet MS/TPサーバーをシミュレートし、W10 PC上のYABEを使用してデバイスが存在するかどうかを確認しました。 </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_assembly_guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_use_bacnet_mstp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Industrial Edge

<strong><span><font color={'4ec354'} size={"5"}> Node-RED</font></span></strong>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Node-Red 入門ガイド</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と Node Red および MQTT</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 と Node Red および Modbus TCP</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-recomp.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  reComputer R1000 に Node-RED をインストールして設定する方法を学び、ハードウェア、API、オンラインサービスを接続する多用途ツールに変身させます。直感的なブラウザベースのフローエディターを使用して、豊富なノードパレットを活用しながら様々なコンポーネントをシームレスに統合できます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Mosquitto ブローカーのインストールを探索し、Node-RED と連携して MQTT トピックの購読と発行を行う方法をこのウィキで学びます。IoT アプリケーションに最適な MQTT は、信頼性の低いネットワーク上で低帯域幅での効率的なリアルタイムデータ交換を可能にします。</font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このウィキで Node-RED を使用して reComputer R1000 で Modbus TCP を操作する方法を学びます。Modbus TCP がプロトコルを Ethernet ネットワークに拡張し、より高速な通信速度と現代の IT インフラストラクチャとのシームレスな統合を可能にする方法を発見してください。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_started_node_red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Node Red and BACnet TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Node Red and InfluxDB</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Grafana</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/bacnet-recomp.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このwikiでは、Node-RED統合に焦点を当てて、ビルディング管理システム（BMS）におけるBACnet IPの利点を発見してください。Node-REDとBACnet IPを使用して、改善されたスケーラビリティ、より簡単なインストールとメンテナンス、既存のネットワークインフラストラクチャの活用を実現する方法を学びます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Raspberry Piを搭載したエッジコントローラーであるreComputer R1000にInfluxDBをデプロイし、ネットワークエッジでの堅牢な時系列データ収集と分析を実現します。このガイドでは、InfluxDBのインストール、設定、使用の手順を詳しく説明し、IoTアプリケーションの効率的な管理とリアルタイムインサイトを可能にします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このwikiでは、Raspberry Piを搭載したreComputer R1000にGrafanaをインストールし、データを洞察に満ちた視覚化に変換する方法を学びます。Grafanaを既存のInfluxDBデータベースに接続し、説明的なダッシュボードを作成して、システムパフォーマンスの向上、トラブルシューティングの合理化、強力な監視ツールによる情報に基づいた意思決定を実現します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_node_red_bacnet_ip/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Node Red and OPC UA server with Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>S7プロトコルを使用してSiemens PLCをreComputer R1000に接続する</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FlowFuse</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-S7.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/flowfuse.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、Node-RED環境でOPC UAサーバーを作成し、自動化階層全体での相互運用性を向上させるためにさまざまなプロトコルを統合する方法をガイドします。 </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では、Raspberry PiベースのreComputerでフローベースの開発ツールであるNode-REDを使用して、S7プロトコル経由でSiemens PLCと通信する方法について説明します。 </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>FlowFuseは、協調開発、リモートデプロイメント、DevOpsパイプライン用のツールでNode-REDを拡張し、Node-REDアプリケーションの管理と配信を容易にします。このwikiでは、FlowFuseが開発チームのこれらのプロセスをどのように合理化するかを探ります。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_opcua_server/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_s7/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_flow_fuse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>N3uron</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with N3uron</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Connect AWS IoT Core with N3uron</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWS_recomputer_n3uron.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> N3uronを使用してOTシステムとITシステム間の双方向データパイプラインを簡単に作成し、運用データを単一のソースに統合して可視化します。reComputer R1000を使用してN3uronをインストールしアクセスする方法を学びます</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このチュートリアルでは、N3uron Edge IIoTプラットフォームとAWS IoT Core間のインターフェースの複雑さについて詳しく説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でN3uronをBACnetに接続する</font></th>
      <th class="table-trnobg"><font size={"4"}>N3uron、MQTT、Modbusを使用して産業データをAWSクラウドに公開する</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/modbus-bacnet-n3uron.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/recomputer-n3uron-aws.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> N3uronを使用したビル管理システムにおけるBACnetの力を発見し、シームレスな相互運用性のためのデータ取得と管理を強化します。YABE Room SimulatorでBACnet TCPを活用してBACnetデバイスを可視化・テストし、堅牢で柔軟なBMSソリューションを確保します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reComputer R1000とN3uron Duoでプラント管理を強化し、堅牢な接続性とデータ操作機能を活用します。このWikiでは、シームレスな産業統合のためにModbus TCPとMQTTを使用した接続方法をガイドします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron_bacnet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron_modbus_mqtt_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FUXA</font></span></strong>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to use Modbus RTU/TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to use MQTT client</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to use OPC-UA</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  この記事では主に、FUXAを使用したModbus RTU/TCP通信の方法について説明します。Modbusの基本をカバーし、様々なシナリオでのアプリケーションを実演します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では主に、reComputerR1000でFUXAを使用したmqtt通信の方法を紹介します。この記事では、mosquittoをMQTTサーバーエージェントとして、FUXAとnode-redをMQTTクライアントとして使用し、FUXAが公開するデータのソースとしてModbusTCPスレーブを紹介します。 </font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  この記事では主に、FUXAを使用したOPC-UA通信の方法を紹介します。W10 PC上でProsys OPC UA Simulation Serverを実行し、reComputer R1000でシミュレーターのデータを読み取ります。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_modbus_rtu_and_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_mqtt_client/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_opc_ua/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to use WebAPI</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to achieve SCADA</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  この記事では主にFUXAを使用してWebAPI通信を行う方法を紹介します。現段階では、FUXAはGET機能のみをサポートしており、データパケットはJson形式です。FUXAのGET機能を使用してpostmanのデータグラムを取得します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では主にFUXAを使用してSCADAを実現する方法を紹介します。記事では、FUXAがnode-redとOPC UA Simulatorからデータを受信し、チャートとCircular Gaugeを使用して表示します。同時に、一連のパターンを描画して産業プロセスをシミュレートします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_web_api/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_achieve_scada/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>CODESYS</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000用CODESYSのインストール方法</font></th>
      <th class="table-trnobg"><font size={"4"}>CODESYSを使用してR1000のModbus RTU機能を設定する方法</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> CODESYSは、3S-Smart Software Solutionsによって開発された、産業制御システム向けに広く使用されている自動化ソフトウェアプラットフォームです。この記事では、CODESYSのダウンロード、インストール方法、およびreComputer R1000へのプロジェクトのデプロイ方法に焦点を当てています。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では、主にCODESYSベースのreComputer R1000のmodbus rtu機能の使用方法を紹介します。reComputer R1000の2つのrs485ポートを使用し、1つのポートはModbusマスター用、もう1つのポートはModbusスレーブ用として使用します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_install_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/recomputer_r1000_use_modbus_rtu_with_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FIN</font></span></strong>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 install FIN</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN to use modbus TCP/RTU</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN Logic Builder</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> FIN Framework (FIN) は、統合、制御、管理、分析、可視化、接続が可能なアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEMによって様々な製品やサービスに統合することができます。この記事では主に、reComputer R1000にFinをインストールする方法を紹介します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では、FIN FramworkのModbusコネクタの使用方法を紹介し、FIN FramworkにおけるModbus TCP/RTUの使用について詳しく説明します。</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では、FIN FramworkのLogic Builderの使用方法を紹介し、Logic Builderを使用してアラームを実装する方法を説明します。Modbusデバイスの値を監視し、値が臨界値を超えた場合、FINがアラームを発生させます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_install_fin/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_logic_builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN を使用してトップレベルグラフィックを作成</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN を使用してサイトグラフィックを作成</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN を使用してフロアグラフィックを作成</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では、FIN Framework の Graphics Builder の使用方法と、Graphics Builder を使用してトップレベルグラフィックを作成する方法を説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では、FIN Framework の Graphics Builder の使用方法と、Graphics Builder を使用してサイトグラフィックを作成する方法を説明します。</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この記事では、FIN Framework の Graphics Builder の使用方法と、Graphics Builder を使用してフロアグラフィックを作成する方法を説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_top_level_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_site_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_floor_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>ThingsBoard</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000でThingsBoardを始める</font></th>
      <th class="table-trnobg"><font size={"4"}>ThingsBoardとreComputer R1000で動的IoTダッシュボードを作成する</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このガイドでは、エッジ展開のためのreComputerへのThingsBoard Community Editionのインストールについて説明します。堅牢なIoTインフラストラクチャの構築に向けたステップバイステップのアプローチを提供し、デバイスプロビジョニング、データ収集、可視化、テレメトリ分析を可能にします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、ThingsBoard Community EditionにMQTTデバイスを追加し、インタラクティブなダッシュボードでそのデータを可視化する方法を説明します。デバイスの接続、テレメトリデータの送信、リアルタイム監視と分析のためのThingsBoardのグラフィカルツールの使用手順を説明します。</font></td>
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
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 balena OS セットアップ</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Balena: 開発者がデバイスフリート全体でアプリケーションをデプロイ・管理するためのIoTプラットフォーム。多様なアーキテクチャをサポートし、簡単なアップデートと現場での安全で信頼性の高いデバイス動作を可能にします。</font></td>
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
      <th class="table-trnobg"><font size={"4"}>AWS IoT Core と reComputer R1000 の統合</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWSrecomputer.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  この包括的なガイドで、reComputer R1000 を AWS IoT クラウドに接続する方法を学びましょう。AWS IoT Core を活用してセキュアなデバイス管理とシームレスな通信を実現し、AWS エコシステム内でスマートで接続されたアプリケーションの開発を可能にします。</font></td>
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
      <th class="table-trnobg"><font size={"4"}>reComputer R1000とHailo-8LでのYOLOv8物体検出</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000とHailo-8LでのYOLOv8姿勢推定</font></th>
      <th class="table-trnobg"><font size={"4"}>RPi5とCM4でrpi ai kitを使用してyolov8sを実行するベンチマーク</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このwikiでは、reComputer R1000でRaspberry-pi-AI-kitアクセラレーションありとなしでYOLOv8を使用した物体検出を実演します。Raspberry Pi AI KitはRaspberry Piの性能を向上させ、人工知能と機械学習アプリケーションでの潜在能力を引き出します</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このwikiでは、reComputer R1000でRaspberry-pi-AI-kitアクセラレーションありとなしでYOLOv8を使用した姿勢推定を実演します。Raspberry Pi AI KitはRaspberry Piの性能を向上させ、人工知能と機械学習アプリケーションでの潜在能力を引き出します</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このwikiでは、Raspberry Pi 5とRaspberry Pi Compute Module 4でのYOLOv8sの姿勢推定と物体検出のベンチマークを紹介します。すべてのテストで同じモデル（YOLOv8s）を使用し、int8に量子化し、入力サイズは640x640解像度、バッチサイズは1に設定し、240 FPSの同じビデオから入力しています。</font></td>
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
      <th class="table-trnobg"><font size={"4"}>Node-RedとAIキット搭載Raspberry Piを使用したポーズベースライト制御</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer上のClipアプリケーション</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI-Box/CLIP.PNG" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  このwikiでは、AIキットを使用してYOLOv8を実行し、YOLOv8を使用して姿勢を監視し、最終的に姿勢に基づいてライトを制御する方法をガイドします。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このチュートリアルでは、reComputerにCLIPをインストールする方法をガイドします。CLIPは従来のラベルを使用せずに画像とテキストをマッチングすることで、ゼロショット画像認識を可能にします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/pose_based_light_control_with_nodered_and_rpi_with_aikit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/clip_application_on_rpi5_with_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
