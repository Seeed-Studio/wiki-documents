---
description: 10.1インチのオープンソース産業用ヒューマンマシンインターフェース（HMI）であるreTerminal DMをご紹介します。統合デバイスマスターとして機能するこのオールインワンデバイスは、Raspberry Pi CM4をベースとし、パネルPC、HMI、PLC、IIoTゲートウェイとして機能します。IP65産業グレードの大型スクリーンを備えたreTerminal DMは、データフローと現場デバイス管理を合理化する次世代インタラクティブセンシングハブです。
title: reTerminal DM ガイド
keywords:
- reTerminal DM
- Getting Start
image: https://wdcdn.qpic.cn/MTY4ODg1NjEyODQyNTE2Nw_928147_NLYXC-4cRuQd5Tra_1681284617?w=1200&h=713
slug: /ja/reTerminal-dm_Intro
last_update:
  date: 07/05/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NjEyODQyNTE2Nw_928147_NLYXC-4cRuQd5Tra_1681284617?w=1200&h=713" style={{width:800, height:'auto'}}/></div>

## reTerminal を始める

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM を始める</font></th>
      <th class="table-trnobg"><font size={"4"}>ハードウェアとインターフェースの使用方法</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/reterminaldmtools.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、LoRaWAN®、WiFi、BLE、RS485/RS232、CANバス、1000Mイーサネット、USB、HDMIなどの機能に加えて、ハードウェア仕様について説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、SSD、カメラ、PEOモジュールなどのアドオンハードウェアのインストール、WiFi/BLEアンテナ、LoRaWANアンテナなどの組み立てについて説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-dm/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-dm-hardware-guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## OSインストール

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
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、Raspberry Pi OSとドライバーのインストールプロセスをガイドします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、reTerminal DMの10.1インチHMIデバイス向けに設計されたSenseCraft Edge OSを探索します。シームレスなデバイス設定と管理のための統合機能を備えた直感的なインターフェースを提供します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal-dm-sensecraft-edge-os-intro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## アプリケーション

### データ可視化

**このエキサイティングなセクションでは、産業グレードのインタラクティブなダッシュボードを数分で作成する方法を発見する準備をしましょう！**

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>FUXA - Web ベース SCADA ツールの使用開始</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM & Machinechat JEDI：あなたの産業用 IoT パワーハウス</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このセクションでは、SCADA、HMI、ダッシュボード、または IIoT システムを迅速に作成・展開するための強力な Web ベースツールである FUXA を探索します。FUXA を使用すると、カスタムプロセス可視化を簡単に設計し、リアルタイムデータを表示し、産業環境で機器を制御できます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Machinechat JEDI は IoT データ管理を簡素化し、リアルタイムデータの収集、可視化、監視、応答を容易にします。Seeed の reTerminal DM と組み合わせることで、カスタムダッシュボードの作成は 30 分以内で完了します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM_intro_FUXA/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_Introduction_Jedi_MachineChat/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Edge AI

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edge ImpulseとreTerminal DMによる物体検出</font></th>
      <th class="table-trnobg"><font size={"4"}>Yolov5で独自データセットを訓練してreTerminal DMにデプロイ</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、Edge ImpulseとreTerminal DMを使用した物体検出について探求します。Edge Impulseは、開発者が実世界のデータを使用して組み込み機械学習ソリューションを作成し最適化することを可能にします。詳細を掘り下げてみましょう。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、YOLOv5で独自のデータセットを訓練し、Raspberry Piベースのr eTerminal DMにデプロイする方法を学びます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Yolo5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Home Assistant

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Frigate と reTerminal DM の統合</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Frigate は、リアルタイム AI オブジェクト検出用に設計されたオープンソース NVR です。すべての処理はお使いのハードウェア上でローカルに実行され、カメラフィードが確実にご自宅内に留まります。この wiki では、NVR のインストールをガイドし、オブジェクト検出機能をデモンストレーションします。</font></td>
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
      <th class="table-trnobg"><font size={"4"}>AWS IoT Core と reTerminal DM の統合</font></th>
      <th class="table-trnobg"><font size={"4"}>Azure IoT Edge と reTerminal DM の統合</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/awslogo.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/azure.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> AWS IoT Core は IoT デバイスを安全に接続・管理し、スマートアプリケーション向けのクラウドとの通信を可能にします。私たちの Wiki では、シームレスなクラウド通信のための reTerminal DM デバイスのセットアップ方法をガイドします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では、Debian 11 (ARM32v7) を実行し、Azure IoT Edge Runtime がプリインストールされたデバイス管理機能を持つ reTerminal DM デバイスの接続方法について説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM_AWS_first/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reTerminalDM/azure.jpg" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

### Industrial Edge

<strong><span><font color={'4ec354'} size={"5"}> Node-red</font></span></strong>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM Node-Red入門ガイド</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM RS485ポートとNode-REDの連携</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM MQTTとNode-REDの連携</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" style={{width:300, height:'auto'}}/></div></td>
       <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/MQTT.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、reTerminal DMにNode-REDをインストールします。Node-REDは、ハードウェアデバイス、API、オンラインサービスを接続するための直感的なプログラミングツールで、ブラウザベースのエディタを通じて簡単にフローを作成し、ワンクリックでデプロイできます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、内蔵のModbusノードを使用してModbusデバイスをNode-REDワークフローに統合する方法を探ります。RS485プロトコルについて学び、Modbusを理解し、reTerminal DMとのシームレスな統合方法を発見します。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、Node-REDにMQTTを統合し、このプロトコルのサポートを活用して強力なIoTアプリケーションを構築する方法を探ります。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Getting-Started-with-Node-Red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-RS485/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM CAN BUS with Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM with Node Red and Modbus TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM with Node Red and BACnet TCP</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、CAN busモジュールをNode-REDと統合し、ECU間での効率的な高速データ交換を実現します。自動車、産業オートメーション、医療機器、航空宇宙アプリケーションで広く使用されています</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、Node-REDを使用してreTerminal DMでModbus TCPを操作する方法を学びます。Modbus TCPがプロトコルをEthernetネットワークに拡張し、より高速な通信速度と現代のITインフラストラクチャとのシームレスな統合を可能にする方法を発見してください。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、Node-RED統合に焦点を当てて、ビル管理システム（BMS）におけるBACnet IPの利点を発見します。Node-REDとBACnet IPを使用して、改善されたスケーラビリティ、より簡単なインストールとメンテナンス、既存のネットワークインフラストラクチャの活用を実現する方法を学びます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-canbus/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal_dm_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal_dm_rpi_200_node_red_bacnet_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Node RedとInfluxDBを使用したreTerminal DM</font></th>
      <th class="table-trnobg"><font size={"4"}>IoTダッシュボード用GrafanaとreTerminal DM</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana-dash.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Raspberry Piベースのreターミナル DMにInfluxDBを展開し、ネットワークエッジでの堅牢な時系列データ収集と分析を実現します。このガイドでは、InfluxDBのインストール、設定、使用手順を詳しく説明し、IoTアプリケーションの効率的な管理とリアルタイムインサイトを可能にします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでRaspberry PiベースのreTerminal DMにGrafanaをインストールする方法を学び、データを洞察に満ちた視覚化に変換します。Grafanaを既存のInfluxDBデータベースに接続し、説明的なダッシュボードを作成して、システムパフォーマンスの向上、トラブルシューティングの効率化、強力な監視ツールによる情報に基づいた意思決定を実現します。</font></td>
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
      <th class="table-trnobg"><font size={"4"}>reTerminal DM Ignition Edge入門ガイド</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM Ignition Edge Panel Builder Hello World</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> ネットワークのエッジにあるフィールドおよびOEMデバイスにIgnition Edgeを組み込むことで、Ignitionをネットワークのエッジまで拡張できます。このガイドでreTerminalデバイスのセットアップ方法をご確認ください。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、基本的なページを作成し、固定URLで表示する方法を実演します。'hello world' perspectiveプロジェクトを作成し、Webブラウザを使用してゲートウェイで表示することで実現します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Getting-Started-with-Ignition-Edge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Ignition-Edge-Panel-Builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br/>
<strong><span><font color={'4ec354'} size={"5"}> N3uron</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM N3uron入門ガイド</font></th>
      <th class="table-trnobg"><font size={"4"}>N3uronでAWS IoT Coreに接続</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://n3uron.com/wp-content/uploads/2021/09/How-to-Connect-Industrial-Assets-to-AWS-IoT.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> N3uronは、IIoTとDataOpsのための頼りになる産業用エッジプラットフォームで、プラントフロアとサードパーティアプリケーション間のシームレスな統合を保証します。オンプレミスでもクラウドでも対応可能です。このチュートリアルでは、N3uronの世界への旅を始めましょう。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、N3uron Edge IIoTプラットフォームとAWS IoT Core間のインターフェースの複雑さについて詳しく説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_Get_Start/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_AWS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>N3uronをMQTTおよびModbus対応デバイスと接続</font></th>
        <th class="table-trnobg"><font size={"4"}>reTerminal DMでの可視化のためのHistorianモジュール統合</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/n3uron_mqtt_modbus_aws.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" style={{width:300, height:'auto'}}/></div></td>  
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 効率的なプラント管理のためのreTerminal DMとN3uron Duoの強力な組み合わせを発見してください。私たちのWikiでは、産業環境におけるModbus TCPの重要性を強調し、接続性とデータ操作の向上のためのシームレスなMQTTデバイス統合を紹介しています。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Neuron Historianを使用すると、N3uron Linksを介してローカルまたはリモートで収集されたタグ値を簡単に保存できます。また、通信損失時にデータを保持するための便利なStore & Forward機能も提供します。このチュートリアルでは、グラフを作成し、データをCSVファイルとして簡単に保存する方法を学習します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_modbus_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_Historian/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div>
<table>
 <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 さらに探索</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Piデバイスに戻る </font></span></strong></a></div></td>
  </tr>
 </table>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストがあり、これは私たちの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の下に分類されています。私たちはwikiプラットフォームの開発を通じて、ユーザーエクスペリエンスの向上とより良いサポートの提供に専念しています。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038)は私たちにとって不可欠です！私たちはあなたの意見を本当に大切にしており、アイデアの創出においてあなたの支援を心から感謝いたします。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、あなたの製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供するためにここにいます。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
