---
description: SenseCAP Vision AI V2 入門ガイド
title: SenseCAP Vision AI V2 入門ガイド
keywords:
  - SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /sensecap_a1102
sidebar_position: 1
last_update:
  date: 3/12/2025
  author: Zeke
createdAt: '2025-01-03'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/ja/sensecap_a1102/
---

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

TinyML AI モデルをローカルで実行し、推論結果のみを LoRaWAN®（863〜928MHz）経由で送信することで、プライバシーと省電力性を高めています。480×480 解像度・10 FPS で動作し、人検知、人数カウント、メーター読み取りの 3 つの事前デプロイ済みモデルを搭載しています。また、[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home) プラットフォームを通じて、コード不要で 300 以上の事前学習済みモデルを利用したり、カスタムモデルをトレーニングしたりすることができます。さらに、[TensorFlow Lite](https://www.tensorflow.org/) や [PyTorch](https://pytorch.org/) フレームワークからのモデルデプロイにも対応しています。ユーザーは [SenseCraft App](https://sensecap-mate-download.seeed.cn/) を使用してデバイスや周波数帯を設定でき、IP66 等級のセンサーを過酷な屋内外環境に設置できます。内蔵バッテリーを備えており、長距離通信を必要とするさまざまな AI アプリケーションに最適です。

## 特長

- 高度なエッジ AI カメラ：強力な MCU ベースのビジョンカメラプロセッサを搭載し、480×480 解像度・10 FPS でローカル推論を実行します。推論結果のみを送信することで、データのプライバシーを確保し、ネットワーク帯域幅の使用を最小限に抑えます。

- ノーコード AI モデルのデプロイとトレーニング：人検知、人数カウント、メーター読み取りの 3 つのオンデバイス AI モデルをプリロードしており、箱から出してすぐにビジョンアプリケーションを利用できます。Web ベースのプラットフォームである SenseCraft AI とネイティブに統合されており、300 以上の事前学習済みモデルを即時デプロイできるほか、分類および検出モデル向けにシンプルな 3 ステップのトレーニングワークフローを提供します。これにより、コーディングの専門知識がなくても迅速なモデル学習とデプロイが可能になります。さらに、このデバイスは TensorFlow および PyTorch フレームワークから変換されたカスタム AI モデルのエッジデプロイにも対応しています。

- LoRaWAN® 接続：世界各地の周波数帯（863〜928 MHz）をサポートし、最適条件下で最大 10 km の伝送距離を実現し、信頼性の高い長距離通信を可能にします。

- 2 つの電源オプションとバッテリー寿命：19Ah SOCl2 D サイズバッテリーを内蔵し、オプションのジャンクションボックスを介した外部 DC 電源にも対応します。

- IP66 等級の環境耐性：粉じん侵入および強い噴流水に対する IP66 等級の保護を備えています。動作温度は 0°C〜70°C で、さまざまな屋内外での設置に適しています。

- SenseCraft Cloud との統合：デバイス設定、デバイス管理、迅速なデータ可視化を容易にする SenseCraft Mate モバイルアプリと Web ポータルが含まれます。オープン API をサポートし、3 か月間の無料トライアルアクセスを提供し、サードパーティの IoT プラットフォームとも互換性があります。

## 仕様

<table align="center">
 <tr>
     <th>製品モデル</th>
        <th>SenseCAP A1102</th>
 </tr>
 <tr>
     <th>マイクロコントローラ</th>
        <td align="center">
            <strong>Vision AI:</strong>Himax-6538 <br></br>
            <strong>LoRaWAN Network:</strong>Wio-E5 (STM32WLE5JC)<br></br>
            <strong>Bluetooth:</strong> XIAO ESP32C3<br></br>
        </td>
 </tr>
    <tr>
        <th>カメラ</th>
        <td align="center">
            <strong>モジュール:</strong>OV5647<br />
            <strong>レンズサイズ:</strong>1/4"<br />
            <strong>焦点距離:</strong>3.4 mm（調整可能）<br />
            <strong>解像度:</strong> 2592 × 1944 pixels<br />
            <strong>画素サイズ:</strong> 1.4 µm × 1.4 µm<br />
            <strong>最大フレームレート:</strong> 1080p @ 30 fps, 720p @ 60 fps<br />
            <strong>FOV:</strong>62°
        </td>
    </tr>
    <tr>
     <th>モデル実行および推論</th>
        <th>480 * 480  >10 fps</th> 
    </tr>
    <tr>
        <th>LoRaWAN® 伝送</th>
        <td align="center">
        <strong>プロトコル:</strong> LoRaWAN v1.0.3 Class A<br />
        <strong>LoRaWAN® 周波数:</strong> IN865/EU868/US915/AU915/ AS923<br />
        <strong>通信距離:</strong> 2〜10km（環境に依存）<br />
        <strong>最大送信電力:</strong> 19dBm<br />
        </td>
    </tr>
    <tr>
        <th>電源</th>
        <td align="center">
        内蔵バッテリーまたは DC 12V/1A（外付けジャンクションボックス配線）
        </td>
    </tr>
 <tr>
     <th>消費電流</th>
        <th>102mA</th>
 </tr>
 <tr>
       <th>バッテリー</th>
        <td align="center">
        <strong>容量:</strong> 19Ah（非充電式）<br />
        <strong>タイプ:</strong> 標準 D サイズ SOCl2 バッテリー<br />
        </td>
 </tr>
 <tr>
     <th>ローカルストレージメモリ</th>
        <th>8GB MicroSD カード（Class 10）で、タイムスタンプ付き画像を最大 20,000 枚保存でき、エクスポートをサポート</th>
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
        <th>0-100% RH（結露なきこと）</th>
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
        <td align="center">
        <strong>カメラ:</strong>180mm*75mm*70mm<br />
        <strong>DTU: </strong> 144.5mm*63mm*57mm<br />
        </td>
 </tr>
</table>

## 電源オプション

- オプション 1：SenseCAP A1102 は、内蔵 19Ah D 型 Li-SOCl2 バッテリーを使用してサイクリックモードで動作します。このバッテリーは市販されており、容易に交換できるため、外部電源を必要としないスタンドアロンの屋外設置が可能です。

- オプション 2：SenseCAP A1102 は、12V DC 電源接続による連続動作をサポートします。簡単な設置と組み立てのために、適合する追加のジャンクションボックスが必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## ハードウェア概要

- オンボード写真

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>

## LoRaWAN® への接続

LoRaWAN®（Long Range Wide Area Network）は、IoT（Internet of Things）デバイスとゲートウェイ間の低消費電力・長距離通信のために設計された無線通信プロトコルです。産業・科学・医療（ISM）バンドの免許不要周波数帯を使用し、一般的にはヨーロッパでは 868 MHz、アメリカでは 915 MHz が用いられます。LoRaWAN® は、長距離にわたって IoT デバイスを接続するための低コストかつ省エネルギーなソリューションを提供します。この技術により、デバイスとゲートウェイ間の双方向通信が可能となり、さまざまなアプリケーションに対応するための複数のデータレートをサポートします。

## ゲートウェイと LoRaWAN® の選び方

センサーを使用する際には LoRaWAN® ネットワークのカバレッジが必要であり、選択肢は 2 つあります。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## センサーの使用方法

コンピュータに直接接続してリアルタイムの検出データを表示できるだけでなく、これらのデータを LoRaWAN® 経由で送信し、最終的に [SenseCAP クラウドプラットフォーム](https://sensecap.seeed.cc/) またはサードパーティのクラウドプラットフォームにアップロードすることもできます。SenseCAP クラウドプラットフォーム上では、データを周期的に確認し、スマートフォンやコンピュータを通じてグラフ表示することができます。SenseCAP クラウドプラットフォームと SenseCAP Mate App は同じアカウントシステムを使用しています。

ここではモデル学習プロセスの説明に重点を置いているため、クラウドプラットフォームでのデータ表示の詳細には踏み込みません。しかし、もし興味があれば、いつでも SenseCAP クラウドプラットフォームにアクセスしてデバイスを追加し、データを閲覧してみてください。プラットフォームの機能をより深く理解するのに最適な方法です。

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## FAQ

**画像取得に最適なカメラ設定は何ですか？**

- 500 万画素カメラの場合、最適な画質を得るには 1m〜5m の範囲で画像を取得することを推奨します。撮影時には、カメラが被写体に正対していること、十分な照明があること（まぶしさや白飛びがないこと）、大きな動きや振動がないことを確認してください。

**SenseCAP Vision AI カメラはどのくらいの距離まで物体を検出し、良好な結果を得ることができますか？**

- 人検知モデルを用いた当社のテストに基づくと、1m〜5m の範囲で 70% の信頼度を持つ結果を得ることができます。

**SenseCAP Vision AI センサーのカメラを交換したり、カスタマイズ版を作成したりすることは可能ですか？**

- はい、大量のご要望がある場合は、sensecap@seeed.cc までお問い合わせください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
