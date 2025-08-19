---
description: SenseCAP Vision AI V2 の使い方
title: SenseCAP Vision AI V2 の使い方
keywords:
- SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /ja/sensecap_a1102
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Zeke
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

TinyML AIモデルをローカルで実行し、推論結果のみをLoRaWAN®（863-928MHz）を介して送信することで、プライバシーと電力効率を向上させます。480×480の解像度で10 FPSで動作し、人検出、人数カウント、メーター読み取りの3つの事前展開モデルが搭載されています。また、[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)プラットフォームを通じて、コード不要で300以上の事前トレーニング済みモデルへのアクセスやカスタムモデルのトレーニングが可能です。[TensorFlow Lite](https://www.tensorflow.org/)や[PyTorch](https://pytorch.org/)フレームワークからのモデル展開もサポートしています。ユーザーは[SenseCraft App](https://sensecap-mate-download.seeed.cn/)を使用してデバイスや周波数帯域を設定でき、IP66規格のセンサーを過酷な屋内外環境に展開することができます。内蔵バッテリーを搭載しており、長距離通信を必要とするさまざまなAIアプリケーションに最適です。

## 特徴
- **高度なエッジAIカメラ**: 強力なMCUベースのビジョンカメラプロセッサを搭載し、480×480の解像度で10 FPSでローカル推論を実行します。推論結果のみを送信することで、データのプライバシーを確保し、ネットワーク帯域幅の使用を最小限に抑えます。

- **コード不要のAIモデル展開とトレーニング**: 3つのオンデバイスAIモデル（人検出、人数カウント、メーター読み取り）が事前にロードされており、すぐに使用可能なビジョンアプリケーションを提供します。SenseCraft AIとネイティブに統合されており、300以上の事前トレーニング済みモデルを即座に展開できるほか、分類および検出モデルの簡単な3ステップトレーニングワークフローを提供します。これにより、コーディングの専門知識がなくても迅速なモデルトレーニングと展開が可能です。さらに、TensorFlowやPyTorchフレームワークから変換されたカスタムAIモデルのエッジ展開もサポートしています。

- **LoRaWAN®接続**: グローバル周波数帯域（863-928 MHz）をサポートし、最適な条件下で最大10 kmの通信範囲を実現します。信頼性の高い長距離通信を可能にします。

- **2つの電源オプションとバッテリー寿命**: 19Ah SOCl2 Dサイズバッテリーを搭載しており、オプションのジャンクションボックスを介して外部DC電源にも対応しています。

- **IP66規格の環境耐久性**: 粉塵侵入や強力な水流に対するIP66規格の保護を備えています。0°Cから70°Cの温度範囲で信頼性の高い動作を実現し、多様な屋内外展開に適しています。

- **SenseCraftクラウド統合**: SenseCraft Mateモバイルアプリとウェブポータルを含み、簡単なデバイス設定、デバイス管理、迅速なデータ視覚化を提供します。オープンAPIサポートと3か月間の無料トライアルアクセスを特徴とし、サードパーティのIoTプラットフォームとも互換性があります。

## 仕様

<table align="center">
	<tr>
	    <th>製品モデル</th>
        <th>SenseCAP A1102</th>
	</tr>
	<tr>
	    <th>マイクロコントローラー</th>
        <td align="center"><strong>Vision AI:</strong> Himax-6538 <br></br> <strong>LoRaWAN ネットワーク:</strong> Wio-E5 (STM32WLE5JC)<br></br> <strong>Bluetooth:</strong> XIAO ESP32C3<br></br></td>
	</tr>
    <tr>
        <th>カメラ</th>
        <td align="center"><strong>モジュール:</strong> OV5647<br /> <strong>レンズサイズ:</strong> 1/4"<br /> <strong>焦点距離:</strong> 3.4 mm (調整可能)<br /> <strong>解像度:</strong> 2592 × 1944 ピクセル<br /> <strong>ピクセルサイズ:</strong> 1.4 µm × 1.4 µm<br /> <strong>最大フレームレート:</strong> 1080p @ 30 fps, 720p @ 60 fps<br /> <strong>視野角 (FOV):</strong> 62°</td>
    </tr>
    <tr>
	    <th>モデル実行および推論</th>
        <th>480 * 480  >10 fps</th>	
    </tr>
    <tr>
        <th>LoRaWAN® 送信</th>
        <td align="center"><strong>プロトコル:</strong> LoRaWAN v1.0.3 Class A<br /> <strong>LoRaWAN® 周波数:</strong> IN865/EU868/US915/AU915/ AS923<br /> <strong>通信距離:</strong> 2 ～ 10km (環境に依存)<br /> <strong>最大送信出力:</strong> 19dBm<br /></td>
    </tr>
    <tr>
        <th>電源供給</th>
        <td align="center">内蔵バッテリーまたは DC 12V/1A (外部接続ボックス配線付き)</td>
    </tr>
	<tr>
	    <th>消費電力</th>
        <th>102mA</th>
	</tr>
	<tr>
	      <th>バッテリー</th>
        <td align="center"><strong>容量:</strong> 19Ah (充電不可)<br /> <strong>タイプ:</strong> 標準 D サイズ SOCl2 バッテリー<br /></td>
	</tr>
	<tr>
	    <th>ローカルストレージメモリ</th>
        <th>8GB MicroSD カード (Class 10)、タイムスタンプ付きで最大 20,000 枚の画像を保存可能、エクスポート対応</th>
	</tr>
	<tr>
	    <th>IP 等級</th>
        <th>IP66</th>
	</tr>
	<tr>
	    <th>動作温度</th>
        <th>0-70 °C</th>
	</tr>
	<tr>
	    <th>動作湿度</th>
        <th>0-100% RH (結露しないこと)</th>
	</tr>
	<tr>
	    <th>ケーブル長</th>
        <th>2 メートル</th>
	</tr>
	<tr>
	    <th>デバイス重量</th>
        <th>719g</th>
	</tr>
	<tr>
	    <th>デバイス寸法</th>
        <td align="center"><strong>カメラ:</strong> 180mm*75mm*70mm<br /> <strong>DTU:</strong> 144.5mm*63mm*57mm<br /></td>
	</tr>
</table>

## 電源供給オプション
- オプション 1: SenseCAP A1102 は内蔵の 19Ah D 型 Li-SOCl2 バッテリーを使用してサイクルモードで動作します。このバッテリーは市販されており、簡単に交換可能で、外部電源を必要とせずに屋外で単独で展開できます。

- オプション 2: SenseCAP A1102 は 12V DC 電源接続を通じて連続動作をサポートします。簡単な設置と組み立てのために、追加の適合する接続ボックスが必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## ハードウェア概要
- オンボード写真

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>

## LoRaWAN®への接続
LoRaWAN®（Long Range Wide Area Network）は、IoT（モノのインターネット）デバイスとゲートウェイ間で低消費電力かつ長距離通信を実現するために設計された無線通信プロトコルです。このプロトコルは、産業、科学、医療（ISM）バンドの免許不要の無線スペクトルを使用し、通常ヨーロッパでは868 MHz、アメリカでは915 MHzで動作します。LoRaWAN®は、長距離でIoTデバイスを接続するための低コストでエネルギー効率の高いソリューションを提供します。この技術は、デバイスとゲートウェイ間の双方向通信を可能にし、さまざまなアプリケーションに対応するためのデータレートをサポートします。

## ゲートウェイとLoRaWAN®の選択方法
センサーを使用する際には、LoRaWAN®ネットワークのカバレッジが必要です。選択肢は2つあります。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## センサーの使用方法
センサーをコンピュータに直接接続してリアルタイムの検出データを確認するだけでなく、これらのデータをLoRaWAN®を介して送信し、最終的に[SenseCAPクラウドプラットフォーム](https://sensecap.seeed.cc/)またはサードパーティのクラウドプラットフォームにアップロードすることもできます。SenseCAPクラウドプラットフォームでは、データを周期的に確認し、モバイルやコンピュータを通じてグラフィカルに表示することができます。SenseCAPクラウドプラットフォームとSenseCAP Mateアプリは同じアカウントシステムを使用しています。

ここではモデルのトレーニングプロセスの説明に焦点を当てているため、クラウドプラットフォームでのデータ表示の詳細には触れません。しかし、興味があれば、SenseCAPクラウドプラットフォームを訪れてデバイスを追加し、データを確認してみてください。プラットフォームの機能をよりよく理解する良い方法です！

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## FAQ

**画像キャプチャに最適なカメラ設定は何ですか？**

- 5メガピクセルのカメラの場合、最適な画像品質を得るためには、1mから5mの範囲内で画像をキャプチャすることを推奨します。画像キャプチャ時には、カメラが被写体に直接向いていること、十分な照明（グレアや露出オーバーがないこと）、および大きな動きや振動を避けることを確認してください。

**SenseCAP Vision AIカメラはどのくらいの距離で物体を検出し、良好な結果を得ることができますか？**

- 人間検出モデルを使用したテストに基づくと、カメラは1mから5mの範囲内で70%の信頼度で結果を得ることができます。

**SenseCAP Vision AIセンサーのカメラを交換したり、カスタマイズバージョンを作成することは可能ですか？**

- はい、大量の要件がある場合は、sensecap@seeed.ccまでお問い合わせください。

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！お客様が当社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>