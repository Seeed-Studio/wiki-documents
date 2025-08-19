---
description: mmWaveレーダーセンサーの紹介
title: mmWaveレーダーセンサーの紹介
keywords:
- Grove
- mmWaveレーダーセンサー

image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /ja/mmwave_radar_Intro
last_update:
  date: 05/15/2025
  author: Hugo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:'auto', height:'auto'}}/></div>

Seeed StudioのmmWaveレーダーセンサーをご覧いただきありがとうございます。このページは、これらのセンサーに関するあらゆる情報を網羅したガイドとして設計されています。

ここでは、動作周波数、送信出力、動作範囲、検出角度などの製品パラメータの詳細を見つけることができます。また、トップマウント、サイドマウント、傾斜取り付けなどの簡単な取り付け方法も紹介しています。さらに、自動車の安全性、スマートホーム、ヘルスケアなど、さまざまな応用シナリオについても探ります。私たちのmmWaveレーダーセンサーは、幅広いプロジェクトに適しており、信頼性の高いセンシングソリューションを提供します。

## mmWaveレーダーの原理

ミリ波（mmWave）レーダーは、周波数変調連続波（FMCW）レーダー技術を使用して、物体とその速度、距離、角度を検出します。FMCWレーダーは、周波数変調された信号を連続的に送信し、物体から反射された信号を受信します。送信された周波数と受信された周波数の差を分析することで、レーダーは物体の距離（レンジ）と相対速度（速度）を特定できます。この原理により、mmWaveレーダーは微細な動きを検出し、高精度を提供し、雨、霧、ほこりなどのさまざまな環境条件下でも効果的に機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/Principle.png" style={{width:'auto', height:'auto'}}/></div>

<center>  
ミリ波周波数帯域の概略図、出典: <a href="https://www.everythingrf.com/community/what-are-millimeter-waves">EverythingRF</a>
</center>

## mmWaveレーダーセンサーの種類

ミリ波（mmWave）レーダーセンサーは、物体を検出し、その距離、速度、角度を測定することができ、プラスチック、衣類、石膏ボードなどのさまざまな材料を透過する能力を持ち、幅広い用途に適しています。
Seeedでは、mmWaveの力を活用して、転倒検出や睡眠呼吸モニタリングなど、さまざまなアクションを実行できるセンサーを開発しました。

以下に示すのは、当社のmmWaveレーダーセンサーのラインナップで、それぞれ異なる機能と特徴を備えています。

<table align="center">
	<tr>
		<th>XIAO 60GHz mmWave 人間転倒検出センサー MR60FDA2</th>
		<th>XIAO 60GHz mmWave 人間呼吸および心拍センサー MR60BHA2</th>
		<th>24GHz mmWave 人間静的存在センサー for XIAO</th>
		<th>mmWave 人間検出センサーキット MR24HPC1</th>
        <th>24GHz mmWave 人間静的存在センサーモジュール MR24HPC1 Lite</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th><a href="https://wiki.seeedstudio.com/ja/getting_started_with_mr60fda2_mmwave_kit/">XIAO 60GHz mmWave 人間転倒検出センサー <strong>MR60FDA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/ja/getting_started_with_mr60bha2_mmwave_kit/">XIAO 60GHz mmWave 人間呼吸および心拍センサー <strong>MR60BHA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/ja/mmwave_for_xiao/">24GHz mmWave 人間静的存在センサー for XIAO</a></th>
        <th><a href="https://wiki.seeedstudio.com/ja/mmwave_human_detection_kit/">mmWave 人間検出センサーキット <strong>MR24HPC1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/ja/Radar_MR24HPC1/">24GHz mmWave 人間静的存在センサーモジュール <strong>MR24HPC1 Lite</strong></a></th>
    </tr>
    <tr>
        <th>主な機能</th>
        <td>転倒検出</td>
        <td>呼吸および心拍検出</td>
        <td>人間検出</td>
        <td>人間検出</td>
        <td>人間検出</td>
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
        <th>送信出力</th>
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
        <th>存在検出範囲</th>
        <td>3m</td>
        <td>1.5m</td>
        <td>4m</td>
        <td>4m</td>
        <td>4m</td>
    </tr>
    <tr>
        <th>検出角度</th>
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
        <th>取り付け方法</th>
        <td>トップ取り付け</td>
        <td>サイド取り付けまたは傾斜取り付け</td>
        <td>要件なし</td>
        <td>要件なし</td>
        <td>要件なし</td>
    </tr>
    <tr>
        <th>ESPHomeサポート</th>
        <td><a href="https://github.com/limengdu/MR60FDA2_ESPHome_external_components">ネイティブファームウェアサポート</a></td>
        <td><a href="https://github.com/limengdu/MR60BHA2_ESPHome_external_components">ネイティブファームウェアサポート</a></td>
        <td><a href="https://wiki.seeedstudio.com/ja/mmwave_for_xiao/">ガイド</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
    </tr>
    <tr>
       <th>カテゴリ</th>
       <td>XIAO ESP32C6をMCUとして使用したセンサー</td>
       <td>XIAO ESP32C6をMCUとして使用したセンサー</td>
       <td>モジュール、XIAOと互換性あり（ピン互換）</td>
       <td>XIAO ESP32C3をMCUとして使用したセンサー</td>
       <td>モジュール、XIAO、Arduinoと互換性あり（ジャンパーワイヤー経由）</td>
    </tr>
    <tr>
        <th>価格</th>
        <td><a href="https://www.seeedstudio.com/"><strong>\$24.9</strong> at Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/"><strong>\$24.9</strong> at Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html"><strong>\$4.49</strong> at Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html"><strong>\$26.99</strong> at Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html"><strong>\$6.9</strong> at Seeed Studio</a></td>
    </tr>
</font>
</table>

<!-- ### 60GHz mmWave 転倒検知センサーキット with XIAO ESP32C6 (MR60FDA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>MR60FDA2センサーキットは、60GHz mmWave技術を活用して信頼性の高い転倒検知と人の存在検知を実現します。光レベル検知、カスタマイズ可能なRGB LEDを備え、追加のセンサーやアクチュエーターをサポートして自動化を強化します。XIAO ESP32C6によって駆動され、事前にESPHomeファームウェアがフラッシュされており、Wi-Fi、Bluetooth Low Energy (BLE)、Zigbee、Threadなどの無線接続オプションを提供します。このコード不要のプラグアンドプレイ統合は、Home Assistantと簡単に連携し、検知ゾーンをカスタマイズ可能で、医療モニタリング、安全性、高齢者ケア、ホームオートメーションなどの用途に最適です。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/getting_started_with_mr60fda2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong>
    </a>
</div>

### 60GHz mmWave 呼吸および心拍検知センサーキット with XIAO ESP32C6 (MR60BHA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>MR60BHA2センサーキットは、60GHz mmWave技術を活用して、呼吸、心拍、人の存在を信頼性高く検知します。光レベル検知、カスタマイズ可能なRGB LEDを備え、追加のセンサーやアクチュエーターをサポートして自動化を強化します。XIAO ESP32C6によって駆動され、このキットには事前にESPHomeファームウェアがフラッシュされており、Wi-Fi、Bluetooth Low Energy (BLE)、Zigbee、Threadを使用してHome Assistantと簡単にプラグアンドプレイ統合が可能です。医療モニタリング、安全性、高齢者ケア、ホームオートメーションに最適で、コード不要で検知ゾーンをカスタマイズできます。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/getting_started_with_mr60bha2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong>
    </a>
</div>

### 24GHz mmWave 人検知センサーキット with XIAO ESP32C3 (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Seeed StudioのXIAO ESP32C3によって駆動され、WiFi/BLE接続をサポートし、mmWaveセンサーを使用して正確な人検知を実現します。Groveモジュールを接続して機能を追加し、OTAアップデートを使用して1〜2分でHome Assistantをセットアップできます。交換可能なmmWaveセンサーにより多用途な使用が可能で、スマートホームオートメーション、不法侵入検知、高齢者モニタリングに最適です。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/mmwave_human_detection_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong>
    </a>
</div>

### Seeed Studio 24GHz mmWave for XIAO

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave Sensor for XIAO - Human Static Presenceは、Seeed Studio XIAOシリーズ用の拡張ボードです。FMCW原理に基づいたアンテナ統合型の高感度mmWaveレーダーセンサーで、レーダー信号処理と正確な人体検知アルゴリズムを組み合わせ、動いている状態と静止している状態の人体を識別できます。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/mmwave_for_xiao/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong>
    </a>
</div>

### 24GHz mmWave センサー - 人の静止存在モジュール Lite (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave Sensor - Human Static Presence Module Liteは、FMCW測距技術を適用したアンテナ統合型の健康に優しいmmWaveレーダーセンサーで、24GHzで動作し、環境の影響を受けずに人の静止存在を実現します。また、ユーザーが基礎的なパラメータを設定して検知機能を決定できるパーソナライズされたレーダーでもあります。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/ja/Radar_MR24HPC1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細を見る</font></span></strong>
    </a>
</div> -->

## mmWaveレーダーセンサーの異なるパラメータの比較

### mmWaveレーダーセンサーと他のセンサーの人間存在検知機能の比較

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
        <th>非視覚的検知、隠された信号周波数帯域、データ漏洩リスクが低い</th>
        <td>大量の個人情報を含む画像を収集し、漏洩しやすい</td>
        <td>個人画像の収集を伴わないが、信号が容易に検出される</td>
        <td>スキャンされたデータがシーン情報を露出する可能性があり、漏洩リスクがある</td>
        <td>個人画像の収集を伴わないが、信号が容易に検出される</td>
    </tr>
    <tr>
        <th>コスト</th>
        <th>中程度</th>
        <td>解像度や機能に応じてコストが変動し、一部のタイプは比較的高価</td>
        <td>低コスト</td>
        <td>機器とメンテナンスのコストが高い</td>
        <td>低コスト</td>
    </tr>
    <tr>
        <th>精度</th>
        <th>高精度で、ターゲットの距離、速度、角度を正確に検知可能</th>
        <td>照明や解像度に大きく影響される</td>
        <td>短距離検知における精度が限定的</td>
        <td>高精度な3Dイメージングが可能だが、環境に影響される</td>
        <td>検知精度が低く、動きのみを判断可能</td>
    </tr>
    <tr>
        <th>安定性</th>
        <th>照明や温度に影響されず、安定した性能</th>
        <td>照明条件に制約され、低照度では性能が悪い</td>
        <td>環境ノイズに影響されやすい</td>
        <td>悪天候に大きく影響される</td>
        <td>熱源などの環境要因に影響されやすい</td>
    </tr>
</font>
</table>

この比較表は、mmWaveレーダーがカメラ、超音波センサー、LiDAR、PIRセンサーに対する利点を強調しています。mmWaveレーダーは多様な環境で安定した性能を提供し、転倒検知、呼吸および心拍数のモニタリング、人間存在検知に効果的です。また、mmWaveレーダーは識別可能な画像をキャプチャしないため、プライバシーを保護し、ユーザーの機密性を確保します。

### 24GHzと60GHzの比較
24GHzと60GHzのミリ波レーダーは、その特性において大きく異なります。24GHzレーダーは強い透過性と長い検知範囲を提供し、特に自動車レーダーシステムにおいて人間存在検知に効果的です。一方、60GHzレーダーは透過性が弱いものの、角度分解能が高く、転倒検知や心拍数モニタリングなどの精密な用途に適しており、スマートホームデバイスで一般的に使用されています。最終的に、適切な周波数の選択は、検知範囲やターゲット特性を含む特定のアプリケーションニーズに依存します。

### mmWaveレーダーセンサーの人間存在検知機能の比較

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>人間存在検知をサポート</th>
        <th>人間存在検知の効果の比較</th>
    </tr>
    <tr>
        <th>24GHz mmWave for XIAO</th>
        <td>✅</td>
        <td>この製品は人間存在検知を提供し、箱から出してすぐに使用でき、基本的なニーズを満たします。ユーザーは比較的安定した検知効果を迅速に得ることができます</td>
    </tr>
    <tr>
        <th>MR24HPC1 Lite</th>
        <td>✅</td>
        <td>この製品は人間存在検知機能を備えており、ハンズオンスキルを持つユーザーが複雑なシナリオで最適な性能を得るために基礎的なパラメータを調整できます。ただし、直接操作した場合の検知精度は24GHz mmWave for XIAOよりやや低いです</td>
    </tr>
    <tr>
        <th>MR60FDA2</th>
        <td>✅</td>
        <td>人間存在検知機能は主な機能ではなく、主に転倒検知をサポートする補助機能として使用されます</td>
    </tr>
    <tr>
        <th>MR60BHA2</th>
        <td>✅</td>
        <td>人間存在検知機能は主な機能ではなく、主に呼吸率および心拍数検知をサポートする補助機能として使用されます</td>
    </tr>
</font>
</table>

**24GHz mmWave for XIAO**は、利便性と迅速なアクセスを求めるユーザー向けに設計されています。この製品は人間存在検知や動き検知などの機能を提供し、Bluetoothモバイルアプリを介して制御可能です。箱から出してすぐに使用できるため、セットアップを簡素化し、その機能を迅速に活用できます。以下はBluetoothアプリのインターフェースです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**MR24HPC1 Lite**は、ハンズオンユーザー向けに設計されており、人間存在検知、動き検知、速度検知を備えています。さまざまなシナリオに合わせてパラメータを調整することで、最適な検知結果を得ることができます。ただし、正しいパラメータを調整するためには、ドキュメントを注意深く読む必要があります。以下はその上位コンピュータの操作インターフェースです：

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

## mmWaveレーダーセンサー：私たちの生活における典型的な応用シナリオ

mmWaveレーダーセンサーは、さまざまな業界で革新的なプロジェクトに利用されています。以下はその例です：

- **自動車安全システム**：適応型クルーズコントロール、自動緊急ブレーキ、死角検知などの機能を備えたドライバー支援システムの強化。
- **スマートホームデバイス**：ジェスチャー認識、存在検知、非接触でのバイタルサインのモニタリングにレーダーセンサーを使用。
- **産業オートメーション**：機械のモニタリング、危険区域での人の存在検知、自動化環境での安全性向上にレーダーを導入。
- **ヘルスケアアプリケーション**：患者のバイタルサインのモニタリング、転倒検知、非侵襲的な診断ツールの提供。
- **ドローンナビゲーション**：障害物回避、自律的なナビゲーション、精密な着陸を可能にする。

これらのプロジェクトは、mmWaveレーダー技術がさまざまな分野でのセンシングと自動化能力を向上させる可能性と多様性を示しています。

もちろん、mmWaveレーダーセンサーモジュールをHomeAssistantに接続することも可能です。以下は使用例です：

- [MR60FDA2転倒検知センサーとHome Assistant](https://wiki.seeedstudio.com/ja/ha_with_mr60fda2/)
- [MR60BHA2呼吸・心拍センサーとHome Assistant](https://wiki.seeedstudio.com/ja/ha_with_mr60bha2/)
- [mmWaveキットとGroveをESPHomeに接続](https://wiki.seeedstudio.com/ja/mmWave_Kit_And_Grove_Connect_To_ESPHome/)
- [mmWaveをXIAOからBluetooth経由でHome Assistantに接続](https://wiki.seeedstudio.com/ja/mmwave_for_xiao_to_ha_bt/)

## mmWaveレーダーセンサーの設置方法

**方法1：上部設置**  
上部に取り付ける場合、吊り下げ高さは2.2〜3.0m、最大検知半径は2mです。mmWaveセンサーのある側は検知方向に合わせる必要があります。

適用対象：MR60FDA2、MR24HPC1、24GHz mmWave XIAO

:::note
MR60FDA2の設置高さの閾値は2.4〜3.0メートルであり、転倒検知の高さ閾値は0〜0.6メートルです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>

**方法2：側面設置**  
側面に取り付ける場合、レーダーの設置高さは測定対象者の胸の高さと一致することが推奨されます。モジュール位置と胸の位置の距離は1.5m以内である必要があります。

適用対象：MR60BHA2、MR24HPC1、24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>

**方法3：傾斜設置**  
睡眠中の呼吸および心拍検知のニーズに応じて、傾斜設置方法を採用することができます。レーダーはベッドの頭上1mの高さに直接設置し、ベッドの中央に向かって45°下向きに傾けます。レーダーと胸腔の距離は1.5m以内に制御される必要があります。レーダーの正面方向は主な検知位置に合わせて、呼吸および心拍データを検知できるようにします。

適用対象：MR60BHA2、MR24HPC1、24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
このモジュールは開放空間で使用してください。以下のような状況が検知範囲内にある場合、モジュールへの干渉を防ぐために避けてください：

- 複数のレーダーが近接して設置されている  
- 風によるカーテンの動きや植物の揺れ  
- 水の流れや水膜  
- 大面積の金属や鏡の反射  
- ガラスや薄い木板を通した検知  
- 振動が発生しやすい設置場所  
- 低品質の電源の使用  

:::

## Seeed Studio mmWaveレーダーセンサーのオープンソース化

### Seeed Studio MR60FDA2 mmWaveキット オープンソース資料
- **STL**: [mmWave 3Dケース](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHubリポジトリ**: [Seeed mmWave Library GitHubページ](https://github.com/Love4yzp/Seeed-mmWave-library)でコードベースとドキュメントにアクセスできます。
- **ESPHomeドキュメント**: カスタマイズや統合については、[ESPHomeドキュメント](https://esphome.io/)を参照してください。
- **MR60FDA2ファームウェアアップグレードツール**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2ファームウェアv4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **MR60FDA2 GUIソフトウェア**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **mmWaveセンサーSCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60FDA2モジュール技術仕様書**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **MR60FDA2 Tiny Frameインターフェースマニュアル**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)

### Seeed Studio MR60BHA2 mmWaveキット オープンソース資料
- **STL**: [mmWave 3Dケース](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHubリポジトリ**: [Seeed mmWave Library GitHubページ](https://github.com/Love4yzp/Seeed-mmWave-library)でコードベースとドキュメントにアクセスできます。
- **ESPHomeドキュメント**: カスタマイズや統合については、[ESPHomeドキュメント](https://esphome.io/)を参照してください。
- **MR60BHA2ファームウェアアップグレードツール**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2ファームウェアv1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **MR60BHA2 GUIソフトウェア**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **mmWaveセンサーSCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60BHA2モジュール技術仕様書**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **MR60BHA2 Tiny Frameインターフェースマニュアル**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)

### Seeed Studio 24GHz mmWave for XIAO オープンソース資料
- **24GHz mmWave for XIAO技術仕様書**: [24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **24GHz mmWave for XIAOユーザーマニュアル**: [24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **24GHz mmWave for XIAO SCH**: [24GHz-mmWave-for-xiao-SCH.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

### Seeed Studio MR24HPC1 mmWaveキット オープンソース資料
- **GitHubリポジトリ**: [プロジェクトオープンソース](https://github.com/limengdu/mmwave-kit-external-components)でコードベースとドキュメントにアクセスできます。
- **MR24HPC1モジュールクイックセットアップテンプレート**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **MR24HPC1モジュール技術仕様書**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **MR24HPC1モジュールユーザーマニュアルV1.5**: [MR24HPC1_User_Manual-V1.5.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

#### バージョン1
- **MR24HPC1モジュールSCH&PCB V1.0**: [mmWare-kit_sch&pcb.zip](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **MR24HPC1モジュールSCH V1.0**: [sch_mmware_kit.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

#### バージョン2
- **MR24HPC1モジュールSCH&PCB V2.0**: [Human_Detection_Sensor_Board_V2.zip](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **MR24HPC1モジュールSCH V2.0**: [mmwave_kit_sch_V2.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

### Seeed Studio 24GHz mmWaveセンサーMR24HPC1 オープンソース資料

- **MR24HPC1モジュールクイックセットアップテンプレート**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **MR24HPC1モジュール技術仕様書**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **MR24HPC1モジュールユーザーマニュアルV2.0**: [MR24HPC1_User_Manual-V2.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **MR24HPC1モジュール上位コンピュータソフトウェア**: [Human-Radar-Open-Protocol_2.0.exe](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **MR24HPC1モジュールCE認証文書**: [101991030_CE.zip](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

:::note
Seeed Studio mmWave Radar Sensorsの生データおよびアルゴリズムは非公開です。ご理解とご支援に感謝いたします！
:::

## ✨ コントリビュータープロジェクト

- このページの更新に関するタスクリストは、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)に分類されています。私たちは、ユーザー体験を向上させ、Wikiプラットフォームの開発を通じてより良いサポートを提供することに尽力しています。
- [このページへの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962026)は私たちにとって非常に重要です！皆様のご意見を大切にしており、アイデアの提供にご協力いただけると幸いです。

## 技術サポートと製品に関する議論

 <br />

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験をスムーズにするために、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>