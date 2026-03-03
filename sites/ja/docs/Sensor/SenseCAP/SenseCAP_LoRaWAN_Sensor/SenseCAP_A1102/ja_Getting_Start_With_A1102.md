---
description: SenseCAP Vision AI V2の使用開始
title: SenseCAP Vision AI V2の使用開始
keywords:
- SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /ja/sensecap_a1102
sidebar_position: 1
last_update:
  date: 3/12/2025
  author: Zeke
---

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

TinyML AIモデルをローカルで実行し、推論結果のみをLoRaWAN®（863-928MHz）経由で送信することで、プライバシーの強化と電力効率の向上を実現します。480×480解像度で10 FPSで動作し、人体検出、人数カウント、メーター読み取り用の3つの事前デプロイされたモデルが付属しており、[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)プラットフォームを通じて300以上の事前訓練済みモデルへのノーコードアクセスやカスタムモデル訓練を提供します。また、[TensorFlow Lite](https://www.tensorflow.org/)および[PyTorch](https://pytorch.org/)フレームワークからのモデルデプロイメントもサポートしています。ユーザーは[SenseCraft App](https://sensecap-mate-download.seeed.cn/)を通じてデバイスと周波数帯域を設定でき、IP66定格のセンサーを過酷な屋内外環境に配置できます。内蔵バッテリーを搭載し、長距離通信を必要とする様々なAIアプリケーションに最適です。

## 特徴

- 高度なエッジAIカメラ：強力なMCUベースのビジョンカメラプロセッサを搭載し、480×480解像度で10 FPSでローカル推論を実行します。推論結果のみを送信することで、データプライバシーを確保し、ネットワーク帯域幅の使用を最小限に抑えます。

- ノーコードAIモデルデプロイメントと訓練：3つのオンデバイスAIモデル（人体検出、人数カウント、メーター読み取り）が事前ロードされており、すぐに使えるビジョンアプリケーションを提供します。SenseCraft AIとネイティブに統合されており、これは300以上の事前訓練済みモデルを即座にデプロイできるWebベースのプラットフォームで、分類と検出モデル用のシンプルな3ステップ訓練ワークフローを提供します。これにより、コーディングの専門知識なしに迅速なモデル訓練とデプロイメントが可能になります。さらに、デバイスはTensorFlowとPyTorchフレームワークから変換されたカスタムAIモデルのエッジデプロイメントもサポートしています。

- LoRaWAN®接続性：グローバル周波数帯域（863-928 MHz）をサポートし、最適条件下で最大10 kmの送信範囲を実現し、信頼性の高い長距離通信を可能にします。

- 2つの電源オプションとバッテリー寿命：19Ah SOCl2 Dサイズバッテリーを搭載し、オプションのジャンクションボックス経由での外部DC電源供給にも対応しています。

- IP66定格の環境耐久性：粉塵の侵入と強力な水流に対するIP66定格の保護を特徴とします。0°Cから70°Cの温度範囲で確実に動作し、多様な屋内外の配置に適しています。

- SenseCraft Cloudとの統合：SenseCraft Mateモバイルアプリとウェブポータルを含み、簡単なデバイス設定、デバイス管理、迅速なデータ可視化を提供します。オープンAPIサポートと3ヶ月間の無料トライアルアクセスを特徴とし、サードパーティのIoTプラットフォームと互換性があります。

## 仕様

<table align="center">
 <tr>
     <th>製品モデル</th>
        <th>SenseCAP A1102</th>
 </tr>
 <tr>
     <th>マイクロコントローラー</th>
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
            <strong>焦点距離:</strong>3.4 mm (調整可能)<br />
            <strong>解像度:</strong> 2592 × 1944 ピクセル<br />
            <strong>ピクセルサイズ:</strong> 1.4 µm × 1.4 µm<br />
            <strong>最大フレームレート:</strong> 1080p @ 30 fps, 720p @ 60 fps<br />
            <strong>FOV:</strong>62°
        </td>
    </tr>
    <tr>
     <th>モデル実行と推論</th>
        <th>480 * 480  >10 fps</th> 
    </tr>
    <tr>
        <th>LoRaWAN® 送信</th>
        <td align="center">
        <strong>プロトコル:</strong> LoRaWAN v1.0.3 Class A<br />
        <strong>LoRaWAN® 周波数:</strong> IN865/EU868/US915/AU915/ AS923<br />
        <strong>通信距離:</strong> 2 to 10km (環境に依存)<br />
        <strong>最大送信電力:</strong> 19dBm<br />
        </td>
    </tr>
    <tr>
        <th>電源供給</th>
        <td align="center">
        内蔵バッテリーまたはDC 12V/1A (外部ジャンクションボックス配線付き)
        </td>
    </tr>
 <tr>
     <th>消費電力</th>
        <th>102mA</th>
 </tr>
 <tr>
       <th>バッテリー</th>
        <td align="center">
        <strong>容量:</strong> 19Ah (非充電式)<br />
        <strong>タイプ:</strong> 標準D型SOCl2バッテリー<br />
        </td>
 </tr>
 <tr>
     <th>ローカルストレージメモリ</th>
        <th>8GB MicroSDカード (Class 10) タイムスタンプ付きで最大20,000枚の画像を保存し、エクスポートをサポート</th>
 </tr>
 <tr>
     <th>IP等級</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>動作温度</th>
        <th>0-70 °C</th>
 </tr>
 <tr>
     <th>動作湿度</th>
        <th>0-100% RH (結露なし)</th>
 </tr>
 <tr>
     <th>ケーブル長</th>
        <th>2メートル</th>
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

- オプション1：SenseCAP A1102は内蔵の19Ah D型Li-SOCl2バッテリーを使用してサイクルモードで動作します。バッテリーは市販品で交換が容易であり、外部電源を必要とせずに屋外での独立展開を可能にします。

- オプション2：SenseCAP A1102は12V DC電源接続による連続動作をサポートします。簡単な設置と組み立てのために、追加のマッチングジャンクションボックスが必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## ハードウェア概要

- オンボード写真

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>

## LoraWAN®への接続

LoRaWAN®（Long Range Wide Area Network）は、IoT（Internet of Things）デバイスとゲートウェイ間の低電力、長距離通信用に設計された無線通信プロトコルです。産業・科学・医療（ISM）バンドの無免許無線スペクトラムを使用し、通常ヨーロッパでは868MHz、米国では915MHzで動作します。LoRaWAN®は、長距離にわたってIoTデバイスを接続するための低コストで省エネルギーなソリューションを提供します。この技術により、デバイスとゲートウェイ間の双方向通信が可能になり、さまざまなタイプのアプリケーションに対応するためのデータレート範囲をサポートします。

## ゲートウェイとLoraWAN®の選択方法

センサーを使用する際にはLoRaWAN®ネットワークカバレッジが必要で、2つのオプションがあります。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## センサーの使用方法

コンピューターに直接接続してリアルタイム検出データを表示することに加えて、これらのデータをLoraWAN®を通じて送信し、最終的に[SenseCAPクラウドプラットフォーム](https://sensecap.seeed.cc/)またはサードパーティのクラウドプラットフォームにアップロードすることもできます。SenseCAPクラウドプラットフォームでは、携帯電話やコンピューターを通じてデータをサイクルで表示し、グラフィカルに表示できます。SenseCAPクラウドプラットフォームとSenseCAP Mateアプリは同じアカウントシステムを使用します。

ここでの焦点はモデル訓練プロセスの説明にあるため、クラウドプラットフォームのデータ表示の詳細については説明しません。しかし、興味がある場合は、いつでもSenseCAPクラウドプラットフォームを訪問してデバイスの追加やデータの表示を試すことができます。プラットフォームの機能をより良く理解するための素晴らしい方法です！

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## FAQ

**画像キャプチャに最適なカメラ設定は何ですか？**

- 5メガピクセルカメラの場合、最適な画質を得るために1mから5mの範囲内で画像をキャプチャすることを推奨します。画像キャプチャ中は、カメラが被写体に直接向いていること、十分な照明があること（グレアや露出過多がないこと）、大きな動きや振動を避けることを確認してください。

**SenseCAP Vision AIカメラはどのくらいの距離でオブジェクトを検出し、良い結果を得ることができますか？**

- 人間検出モデルでのテストに基づくと、カメラは1mから5mの範囲内で70%の信頼度レベルの結果を達成できます。

**SenseCAP Vision AIセンサーのカメラを交換したり、カスタマイズ版を作ることは可能ですか？**

- はい、大量の要件がある場合は、sensecap@seeed.ccまでお問い合わせください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
