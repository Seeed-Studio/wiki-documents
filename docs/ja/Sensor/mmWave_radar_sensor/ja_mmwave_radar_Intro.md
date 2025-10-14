---
description: mmWave レーダーセンサー紹介
title: mmWave レーダーセンサー紹介
keywords:
- Grove
- mmWave Radar Sensor

image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /ja/mmwave_radar_Intro
last_update:
  date: 03/28/2025
  author: Hugo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:'auto', height:'auto'}}/></div>

Seeed Studio の mmWave レーダーセンサーの世界へようこそ。このページは包括的な情報源として設計されており、これらのセンサーのあらゆる側面についてガイドします。

ここでは、動作周波数、送信電力、動作・存在検知範囲、検知角度などの製品パラメータの詳細を確認できます。また、天井取り付け、側面取り付け、傾斜設置などの分かりやすい設置方法も紹介しています。さらに、自動車安全、スマートホーム、ヘルスケアにわたる様々なアプリケーションシナリオを探求します。当社の mmWave レーダーセンサーは幅広いプロジェクトに適しており、信頼性の高いセンシングソリューションを提供します。

## mmWave レーダーの原理

ミリ波（mmWave）レーダーは、周波数変調連続波（FMCW）レーダー技術を使用して、物体とその速度、距離、角度を検出します。FMCW レーダーは周波数変調された信号を連続的に送信し、物体からの反射信号を受信します。送信信号と受信信号の周波数差を解析することで、レーダーは物体の距離（レンジ）と相対速度（ベロシティ）を決定できます。この原理により、mmWave レーダーは微細な動きを検出し、高精度を提供し、雨、霧、塵などの様々な環境条件下で効果的に機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/Principle.png" style={{width:'auto', height:'auto'}}/></div>

<center>  
ミリ波周波数帯の概略図、出典: <a href="https://www.everythingrf.com/community/what-are-millimeter-waves">EverythingRF</a>
</center>

## mmWave レーダーセンサーの異なるタイプ

ミリ波（mmWave）レーダーセンサーは、物体を検出し、その距離、速度、角度を測定することができ、プラスチック、衣類、乾式壁などの様々な材料を透過できるため、幅広いアプリケーションに適しています。
Seeed では、mmWave の力を活用して、転倒検知や睡眠時呼吸モニタリングなど、様々なアクションを実行できる多様なセンサーを開発しました。

当社の mmWave レーダーセンサーの範囲を以下に示します。それぞれ異なる特徴と機能を持っています。

<table align="center">
 <tr>
  <th>XIAO 60GHz mmWave 人体転倒検知センサー MR60FDA2</th>
  <th>XIAO 60GHz mmWave 人体呼吸・心拍センサー MR60BHA2</th>
  <th>XIAO用24Ghz mmwave人体静的存在センサー</th>
  <th>mmWave人体検知センサーキット MR24HPC1</th>
        <th>24GHz mmWave人体静的存在センサーモジュール MR24HPC1 Lite</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
        </div></td>
 </tr>
</table>

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th><a href="https://wiki.seeedstudio.com/ja/getting_started_with_mr60fda2_mmwave_kit/">XIAO 60GHz mmWave 人体転倒検知センサー <strong>MR60FDA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/ja/getting_started_with_mr60bha2_mmwave_kit/">XIAO 60GHz mmWave 人体呼吸・心拍センサー <strong>MR60BHA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/ja/mmwave_for_xiao/">24Ghz mmwave XIAO用人体静的存在センサー</a></th>
        <th><a href="https://wiki.seeedstudio.com/ja/mmwave_human_detection_kit/">mmWave 人体検知センサーキット <strong>MR24HPC1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/ja/Radar_MR24HPC1/">24GHz mmWave 人体静的存在センサーモジュール <strong>MR24HPC1 Lite</strong></a></th>
    </tr>
    <tr>
        <th>主な機能</th>
        <td>転倒検知</td>
        <td>呼吸・心拍検知</td>
        <td>人体検知</td>
        <td>人体検知</td>
        <td>人体検知</td>
    </tr>
    <tr>
        <th>動作周波数</th>
        <td>60GHz</td>
        <td>60GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
    </tr>
    <tr>
        <th>送信電力</th>
        <td>/</td>
        <td>/</td>
        <td>/</td>
        <td>8dBm</td>
        <td>8dBm</td>
    </tr>
    <tr>
        <th>送受信数</th>
        <td>2送信2受信</td>
        <td>2送信2受信</td>
        <td>1送信1受信</td>
        <td>1送信1受信</td>
        <td>1送信1受信</td>
    </tr>
    <tr>
        <th>動作範囲</th>
        <td>6m</td>
        <td>6m</td>
        <td>6m</td>
        <td>5m</td>
        <td>5m</td>
    </tr>
    <tr>
        <th>存在範囲</th>
        <td>3m</td>
        <td>1.5m</td>
        <td>4m</td>
        <td>4m</td>
        <td>4m</td>
    </tr>
    <tr>
        <th>検知角度</th>
        <td>120x100°</td>
        <td>120x100°</td>
        <td>60×60°</td>
        <td>90×60°</td>
        <td>90×60°</td>
    </tr>
    <tr>
        <th>動作電圧</th>
        <td>5V</td>
        <td>5V</td>
        <td>5V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
    </tr>
    <tr>
        <th>ピン間隔</th>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.00mm</td>
        <td>2.00mm</td>
    </tr>
    <tr>
        <th>サイズ (WxH)</th>
        <td>30x48mm</td>
        <td>30x48mm</td>
        <td>22x18mm</td>
        <td>35x30mm</td>
        <td>35x30mm</td>
    </tr>
    <tr>
        <th>設置方法</th>
        <td>天井設置</td>
        <td>側面設置または傾斜設置</td>
        <td>要件なし</td>
        <td>要件なし</td>
        <td>要件なし</td>
    </tr>
    <tr>
        <th>ESPHome サポート</th>
        <td><a href="https://github.com/limengdu/MR60FDA2_ESPHome_external_components">ネイティブファームウェアサポート</a></td>
        <td><a href="https://github.com/limengdu/MR60BHA2_ESPHome_external_components">ネイティブファームウェアサポート</a></td>
        <td><a href="https://wiki.seeedstudio.com/ja/mmwave_for_xiao/">ガイド</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
    </tr>
    <tr>
       <th>カテゴリ</th>
       <td>XIAO ESP32C6 をMCUとするセンサー</td>
       <td>XIAO ESP32C6 をMCUとするセンサー</td>
       <td>モジュール、XIAO対応（ピン対ピン）</td>
       <td>XIAO ESP32C3 をMCUとするセンサー</td>
       <td>モジュール、XIAO、Arduino対応（ジャンパーワイヤ経由）</td>
    </tr>
    <tr>
        <th>入手可能性</th>
        <td><a href="https://www.seeedstudio.com/"><strong>\$24.9</strong> Seeed Stduio にて</a></td>
        <td><a href="https://www.seeedstudio.com/"><strong>\$24.9</strong> Seeed Stduio にて</a></td>
        <td><a href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html"><strong>\$4.49</strong> Seeed Studio にて</a></td>
        <td><a href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html"><strong>\$26.99</strong> Seeed Stduio にて</a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html"><strong>\$6.9</strong> Seeed Studio にて</a></td>
    </tr>
</font>
</table>

<!-- ### 60GHz mmWave転倒検知センサーキット with XIAO ESP32C6 (MR60FDA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>MR60FDA2センサーキットは、60GHz mmWave技術を活用して信頼性の高い転倒検知と人体存在感知を実現します。光レベルセンシング、カスタマイズ可能なインタラクション用RGB LED、拡張自動化のための追加センサーとアクチュエーターをサポートしています。XIAO ESP32C6を搭載し、プリフラッシュされたESPHomeファームウェアと、Wi-Fi、Bluetooth Low Energy (BLE)、Zigbee、Threadを含むワイヤレス接続オプションを特徴としています。このHome Assistantとのノーコード、プラグアンドプレイ統合により、ユーザーは検知ゾーンを簡単にカスタマイズでき、ヘルスケアモニタリング、安全、高齢者ケア、ホームオートメーションのアプリケーションに最適です。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/getting_started_with_mr60fda2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しく見る</font></span></strong>
    </a>
</div>

### 60GHz mmWave呼吸・心拍検知センサーキット with XIAO ESP32C6 (MR60BHA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>MR60BHA2センサーキットは、60GHz mmWave技術を活用して呼吸、心拍、人体存在の信頼性の高い検知を実現します。光レベルセンシング、カスタマイズ可能なRGB LED、拡張自動化のための追加センサーとアクチュエーターをサポートしています。XIAO ESP32C6を搭載し、プリフラッシュされたESPHomeファームウェアが付属しており、Wi-Fi、Bluetooth Low Energy (BLE)、Zigbee、Threadを使用したHome Assistantとの簡単なプラグアンドプレイ統合を可能にします。ヘルスケアモニタリング、安全、高齢者ケア、ホームオートメーションに最適なソリューションで、ユーザーはコーディングなしで検知ゾーンをカスタマイズできます。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/getting_started_with_mr60bha2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しく見る</font></span></strong>
    </a>
</div>

### 24GHz mmWave人体検知センサーキット with XIAO ESP32C3 (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Seeed StudioのXIAO ESP32C3を搭載し、WiFi/BLE接続とmmWaveセンサーによる精密な人体検知をサポートします。追加機能のためにGroveモジュールを接続し、OTAアップデートで1-2分でHome Assistantをセットアップできます。交換可能なmmWaveセンサーにより多用途な使用が可能で、スマートホームオートメーション、侵入検知、高齢者モニタリングに最適です。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/mmwave_human_detection_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しく見る</font></span></strong>
    </a>
</div>

### Seeed Studio 24GHz mmWave for XIAO

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave Sensor for XIAO - Human Static Presenceは、Seeed Studio XIAOシリーズ用の拡張ボードです。FMCW原理に基づくアンテナ統合型の高感度mmwaveレーダーセンサーです。レーダー信号処理と正確な人体感知アルゴリズムを組み合わせることで、動作中および静止状態の人体を識別できます。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/mmwave_for_xiao/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しく見る</font></span></strong>
    </a>
</div>

### 24GHz mmWaveセンサー - Human Static Presence Module Lite (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWaveセンサー - Human Static Presence Module Liteは、FMCW測距技術を適用し、24GHzで動作するアンテナ統合型の健康に優しいmmwaveレーダーセンサーで、環境の影響に関係なく人体の静的存在を実装します。これはまた、ユーザーが検知機能を決定するためにその基本パラメータを設定できるパーソナライズされたレーダーでもあります。</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/Radar_MR24HPC1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳しく見る</font></span></strong>
    </a>
</div> -->

## 異なるパラメータのmmWaveレーダーセンサーの比較

### mmWaveレーダーセンサーと他のセンサーの人体検知機能の比較

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>mmWaveレーダーセンサー</th>
        <td>カメラ</td>
        <td>超音波センサー</td>
        <td>LiDAR（レーザーレーダー）</td>
        <td>受動赤外線センサー（PIR）</td>
    </tr>
    <tr>
        <th>プライバシー</th>
        <th>非視覚的検知、隠れた信号周波数帯、データ漏洩リスクが低い</th>
        <td>大量のプライベート情報を含む画像を収集し、漏洩しやすい</td>
        <td>プライベート画像の収集は含まないが、信号が検出されやすい</td>
        <td>スキャンされたデータがシーン情報を露出する可能性があり、漏洩リスクがある</td>
        <td>プライベート画像の収集は含まないが、信号が検出されやすい</td>
    </tr>
    <tr>
        <th>コスト</th>
        <th>中程度</th>
        <td>解像度と機能に基づいてコストが変動し、一部のタイプは比較的高価</td>
        <td>低コスト</td>
        <td>機器とメンテナンスのコストが高い</td>
        <td>低コスト</td>
    </tr>
    <tr>
        <th>精度</th>
        <th>高精度、ターゲットの距離、速度、角度を正確に検出可能</th>
        <td>照明と解像度に大きく影響される</td>
        <td>短距離検出での精度が限定的</td>
        <td>高精度3Dイメージング、ただし環境に影響される</td>
        <td>検出精度が低く、動きのみ判定可能</td>
    </tr>
    <tr>
        <th>安定性</th>
        <th>照明と温度に影響されず、安定した性能</th>
        <td>照明条件に制限され、低照度での性能が悪い</td>
        <td>環境ノイズに影響されやすい</td>
        <td>悪天候に大きく影響される</td>
        <td>熱源などの環境要因に影響されやすい</td>
    </tr>
</font>
</table>

比較表は、mmWaveレーダーがカメラ、超音波センサー、LiDAR、PIRセンサーに対する優位性を強調しています。多様な環境で安定した性能を提供し、転倒検知、呼吸・心拍数モニタリング、人感検知に効果的です。さらに、mmWaveレーダーは識別可能な画像を撮影しないことでプライバシーを保護し、ユーザーの機密性を確保します。

### 24 GHzと60 GHzの比較

24 GHzと60 GHzミリ波レーダーは、その特性において大きく異なります。24 GHzレーダーは強い透過力と長い検知範囲を提供し、特に自動車レーダーシステムにおける人感検知に効果的です。対照的に、60 GHzレーダーは透過力は弱いものの、より高い角度分解能を持ち、転倒検知や心拍数モニタリングなどの精密なアプリケーションに理想的で、スマートホームデバイスでよく見られます。最終的に、適切な周波数の選択は、検知範囲やターゲット特性を含む特定のアプリケーションニーズに依存します。

### mmWaveレーダーセンサー間の人感検知機能の比較

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>人感検知対応</th>
        <th>人感検知効果の比較</th>
    </tr>
    <tr>
        <th>24GHz mmWave for XIAO</th>
        <td>✅</td>
        <td>この製品は人感検知を提供し、すぐに使用できる状態で、基本的なニーズを満たします。ユーザーは比較的安定した検知効果を迅速に実現できます</td>
    </tr>
    <tr>
        <th>MR24HPC1 Lite</th>
        <td>✅</td>
        <td>この製品は人感検知機能を備えており、実践的なスキルを持つユーザーが複雑なシナリオで最適な性能を得るために基本パラメータを調整できます。ただし、直接操作時の検知精度は24GHz mmWave for XIAOよりもわずかに低くなります</td>
    </tr>
    <tr>
        <th>MR60FDA2</th>
        <td>✅</td>
        <td>人感検知機能は主要機能ではありません。主に転倒検知をサポートする補助として使用されます</td>
    </tr>
    <tr>
        <th>MR60BHA2</th>
        <td>✅</td>
        <td>人感検知機能は主要機能ではありません。主に呼吸数と心拍数検知をサポートする補助として使用されます</td>
    </tr>
</font>
</table>

**XIAO用24GHz mmWave**は、利便性と高速アクセスを求めるユーザー向けに設計されています。人感検知やモーション検知などの機能を提供し、すべてBluetoothモバイルアプリで制御できます。開封してすぐに使用でき、セットアップを簡素化し、ユーザーがその機能を素早く活用できるようにします。以下がBluetoothアプリのインターフェースです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**MR24HPC1 Lite**は実践的なユーザー向けに設計されており、人感検知、モーション検知、速度検知機能を備え、様々なシナリオに対応するカスタマイズ可能なパラメータ調整に重点を置いています。ユーザーは正しいパラメータを調整することで最適な検知結果を得ることができますが、カスタマイズオプションを完全に活用するためには、ドキュメントを注意深く読む必要があります。以下がその上位コンピュータの操作インターフェースです：

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

## mmWaveレーダーセンサー：私たちの生活における典型的な応用シナリオ

mmWaveレーダーセンサーは、様々な業界の革新的なプロジェクトで活用されています。以下にいくつかの例を示します：

- 自動車安全システム：アダプティブクルーズコントロール、自動緊急ブレーキ、死角検知などの機能でドライバー支援システムを強化。
- スマートホームデバイス：ジェスチャー認識、存在検知、物理的接触なしでのバイタルサイン監視にレーダーセンサーを使用。
- 産業オートメーション：機械の監視、危険エリアでの人感検知、自動化環境での安全性向上にレーダーを実装。
- ヘルスケア応用：患者のバイタルサイン監視、転倒検知、非侵襲的診断ツールの提供。
- ドローンナビゲーション：ドローンの障害物回避、自律航行、精密着陸を可能にする。

これらのプロジェクトは、改良されたセンシングと自動化機能を通じて様々な分野を変革するmmWaveレーダー技術の多様性と可能性を実証しています。

もちろん、私たちのmmWaveレーダーセンサーモジュールをHomeAssistantに接続することもできます。以下に使用例をいくつか示します：

- [MR60FDA2 転倒検知センサーとHome Assistant](https://wiki.seeedstudio.com/ja/ha_with_mr60fda2/)
- [MR60BHA2 呼吸・心拍センサーとHome Assistant](https://wiki.seeedstudio.com/ja/ha_with_mr60bha2/)
- [mmWave キットとGroveをESPHomeに接続](https://wiki.seeedstudio.com/ja/mmWave_Kit_And_Grove_Connect_To_ESPHome/)
- [XIAO用mmWaveからBluetoothでHome Assistantへ](https://wiki.seeedstudio.com/ja/mmwave_for_xiao_to_ha_bt/)

## mmWaveレーダーセンサーの設置方法

**方法1：天井設置。** 天井取り付けの吊り下げ高さ2.2-3.0m、最大センシング半径2m、mmWaveセンサーがある面を検知方向に合わせる必要があります。

適用対象：MR60FDA2、MR24HPC1、24GHz mmWave XIAO

:::note
MR60FDA2の設置高さ閾値は2.4〜3.0メートルの間で、転倒検知の高さ閾値は0〜0.6メートルの間です。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>

**方法2：側面設置。** 側面取り付けでは、レーダーの設置高さを被測定者の胸の高さと一致させ、モジュール位置と胸の位置を≤1.5mにすることを推奨します。

適用対象：MR60BHA2、MR24HPC1、24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>

**方法3：傾斜設置。** 睡眠時の呼吸と心拍検知のニーズに対しては、傾斜設置方法を採用できます。レーダーをベッドの頭部真上1mの高さに設置し、ベッドの中央に向かって45°下向きに傾け、レーダーと胸腔の距離を1.5m以内に制御する必要があります。レーダーの法線方向を主要検知位置に合わせ、レーダーが呼吸と心拍データを検知できるようにします。

適用対象：MR60BHA2、MR24HPC1、24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
このモジュールは開放空間で使用し、モジュールへの干渉を防ぐため、検知範囲内で以下のシナリオを避けてください：

- 複数のレーダーを近距離に設置  
- 風によるカーテンの動きや植物の揺れ
- 水流と水膜  
- 大面積の金属と鏡面反射  
- ガラスや薄い木板を通した検知  
- 振動が起こりやすい設置場所  
- 低品質電源の使用  

:::

## Seeed Studio mmWaveレーダーセンサーのオープンソース化

### Seeed Studio MR60FDA2 mmWaveキット オープンソース資料

- **STL**: [mmWave 3Dケース](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHubリポジトリ**: 完全なコードベースとドキュメントは[Seeed mmWaveライブラリGitHubページ](https://github.com/Love4yzp/Seeed-mmWave-library)でアクセスできます。
- **ESPHomeドキュメント**: さらなるカスタマイズと統合については、[ESPHomeドキュメント](https://esphome.io/)を参照してください。
- **MR60FDA2ファームウェアアップグレードツール**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2ファームウェア v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **MR60FDA2 GUIソフトウェア**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **mmWaveセンサー SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60FDA2モジュール技術仕様**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **MR60FDA2 Tiny Frameインターフェースマニュアル**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)

### Seeed Studio MR60BHA2 mmWaveキット オープンソース資料

- **STL**: [mmWave 3Dケース](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHubリポジトリ**: 完全なコードベースとドキュメントは[Seeed mmWaveライブラリGitHubページ](https://github.com/Love4yzp/Seeed-mmWave-library)でアクセスできます。
- **ESPHomeドキュメント**: さらなるカスタマイズと統合については、[ESPHomeドキュメント](https://esphome.io/)を参照してください。
- **MR60BHA2ファームウェアアップグレードツール**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2ファームウェア v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **MR60BHA2 GUIソフトウェア**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **mmWaveセンサー SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60BHA2モジュール技術仕様**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **MR60BHA2 Tiny Frameインターフェースマニュアル**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)

### Seeed Studio 24GHz mmWave for XIAO オープンソース資料

- **24GHz mmWave for XIAO技術仕様**: [24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **24GHz mmWave for XIAOユーザーマニュアル**: [24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **24GHz mmWave for XIAO SCH**: [24GHz-mmWave-for-xiao-SCH.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

### Seeed Studio MR24HPC1 mmWaveキット オープンソース資料

- **GitHubリポジトリ**: 完全なコードベースとドキュメントは[プロジェクトオープンソース](https://github.com/limengdu/mmwave-kit-external-components)でアクセスできます。
- **MR24HPC1モジュールクイックセットアップテンプレート**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **MR24HPC1モジュール技術仕様**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **MR24HPC1モジュールユーザーマニュアル V1.5**: [MR24HPC1_User_Manual-V1.5.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

#### バージョン1

- **MR24HPC1モジュール SCH&PCB V1.0**: [mmWare-kit_sch&pcb.zip](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **MR24HPC1モジュール SCH V1.0**: [sch_mmware_kit.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

#### バージョン2

- **MR24HPC1モジュール SCH&PCB V2.0**: [Human_Detection_Sensor_Board_V2.zip](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **MR24HPC1モジュール SCH V2.0**: [mmwave_kit_sch_V2.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

### Seeed Studio 24GHz mmWaveセンサー MR24HPC1 オープンソース資料

- **MR24HPC1モジュールクイックセットアップテンプレート**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **MR24HPC1モジュール技術仕様**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **MR24HPC1モジュールユーザーマニュアル V2.0**: [MR24HPC1_User_Manual-V2.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **MR24HPC1モジュール上位コンピューターソフトウェア**: [Human-Radar-Open-Protocol_2.0.exe](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **MR24HPC1モジュールCE認証文書**: [101991030_CE.zip](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

:::note
Seeed Studio mmWave レーダーセンサーの生データとアルゴリズムは非オープンソースです。ご理解とご支援をありがとうございます！
:::

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストがあり、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の下に分類されています。私たちはwikiプラットフォームの開発を通じてユーザーエクスペリエンスの向上とより良いサポートの提供に専念しています。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962026)は私たちにとって不可欠です！私たちはあなたの意見を本当に大切にしており、アイデアの創出においてあなたの支援を心から感謝いたします。

## 技術サポート & 製品ディスカッション

 <br />

私たちの製品をお選びいただき、ありがとうございます！私たちは、あなたの製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供するためにここにいます。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
