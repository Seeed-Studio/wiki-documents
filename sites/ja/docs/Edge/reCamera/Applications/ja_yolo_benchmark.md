---
title: reCamera における YOLO11n ベンチマーク
description: このアプリケーションケースでは、最新の YOLO11n モデルを reCamera エッジコンピューティングプラットフォーム上で実行した際の、極限性能と実測データを示します。
keywords:
  - reCamera
  - Edge AI
  - YOLO11
  - Benchmark
slug: /recamera_benchmarking
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif
sidebar_position: 1
last_update:
  date: 2026-06-02T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/ja/recamera_benchmarking/
---

# reCamera における YOLO11n エッジベンチマーク

## 1. はじめに

エッジ AI の利用シーンが継続的に深化する中、極めて限られた消費電力の下で最新世代のビジョンモデルを動作させる方法が、開発者にとっての中核的なニーズとなっています。本 WIKI では、**reCamera** に **YOLO11n** モデルをデプロイした際のベースライン性能（Benchmark）を、ハードコアに示します。
ここでは、reCamera がわずか **1.5W** の消費電力で、YOLO11n の物体検出およびインスタンスセグメンテーションモデルをいかにスムーズに動作させるかをご覧いただけます。

---

## ハードウェアの準備

- reCamera 1 台
- PC 1 台

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

---

## 2. リアルタイム効果の表示

百聞は一見にしかずです。reCamera 上で YOLO11n の検出およびセグメンテーションモデルをローカル実行し、UDP プロトコルを用いて処理済みの映像と計算データを PC へリアルタイムにストリーミングしました。

画面左上の OSD 情報には、ハードウェアの時間消費内訳がリアルタイムに厳密に表示されます：**前処理 (Pre-process)**、**推論 (Inference)**、**後処理 (Post-process)**、および **合計 (Total)** の時間消費です。

### YOLO11n インスタンスセグメンテーションのリアルタイムストリーミング
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif" alt="YOLO11n Segmentation Demo" />
</div>
<br/>

### YOLO11n 物体検出のリアルタイムストリーミング
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-detect.gif" alt="YOLO11n Detection Demo" />
</div>

:::note テスト説明
上記のアニメーションは、実際の画面録画を示しています。テスト結果はモデル入力解像度（640x640）および量子化精度（INT8）の影響を受けており、エンジニアリングデプロイ時の参考値としてご利用ください。
:::

---


## 3. コアベンチマーク結果

長時間のフルロードストレステストの下で、reCamera は極めて優れた「性能対消費電力比」を示しました。以下は、NPU 上で YOLO11n INT8 量子化モデルが発揮した極限性能です：

| モデルタスク種別 | 入力解像度 | 量子化形式 | 最大フレームレート (FPS) | 単一フレームのエンドツーエンド遅延 | 平均動作電力 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **YOLO11n 物体検出** | 640 x 640 | INT8 | **20 FPS** | **50 ms** | **1.5 W** |
| **YOLO11n インスタンスセグメンテーション** | 640 x 640 | INT8 | **10 FPS** | **100 ms** | **1.5 W** |

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_information.png" alt="YOLO11n Benchmark" />
</div>

:::info 📊 テスト単位および指標の説明
* **FPS (Frames Per Second)**: **デバイスが 1 秒間に処理できるフレーム数**を指します。20 FPS は、システムが 1 秒間に連続して 20 回の画像 AI 認識を完了できることを意味します。値が大きいほど、リアルタイム監視映像は滑らかになります。
* **ms (Milliseconds)**: すなわち 1 秒の 1000 分の 1 です。ここでは、**単一画像を処理するためのエンドツーエンドの総時間消費**を指します。50 ms は、デバイスが 1 フレームの映像を処理するのに必要な時間が最小で ***0.05 秒*** に過ぎないことを意味します（前処理、NPU 推論、後処理、およびその他すべてのステップを含む）。
* **W (Watt)**: デバイスの消費電力を表す単位です。ここでの 1.5W は、AI モデルをフルロードで実行しているときの reCamera 全体の平均消費電力を指します。
:::

### 💡 詳細なデータ分析
* **極限のエネルギー効率**: 1.5W の消費電力は、通常のシングルボードコンピュータのスリープモード時とほぼ同等ですが、reCamera はこの消費電力で 20 FPS/S の検出フレームレートを実現でき、バッテリー駆動や長距離 PoE による屋外監視シナリオに完璧に適合します。
* **レイテンシ性能**: 検出モデルにおける最小 50ms の超低エンドツーエンド遅延は、高速移動する物体も容易に捉えられることを意味します。一方で、セグメンテーションモデルは高負荷な Mask デコード演算子を追加しているにもかかわらず、最大 10 FPS/S のスムーズな体験を維持できます。

---


## 4. ハンズオン実践：ベンチマークを再現する

すでに reCamera デバイスをお持ちであれば、いくつかの簡単な手順だけで、上記のテスト結果をローカルで容易に再現できます。

### ステップ 1: ベンチマーク実行ファイルとモデルを入手
まず、以下のリンクからコンパイル済みの bin ファイル、変換済みの `.cvimodel` モデルファイル、および Python スクリプトをダウンロードします：

```bash
[https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link](https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link)
```

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_list.png" alt="YOLO11n List" />
</div>

### ステップ 2: ファイルを reCamera デバイスへアップロード
ダウンロードした bin ファイルとモデルファイルを、reCamera デバイスの /userdata/ ディレクトリにアップロードします。
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_userdata.png" alt="YOLO11n UserData" />
</div>

### ステップ 3: ベンチマークテストを実行
reCamera デバイス上で次のコマンドを実行し、ベンチマークテストを開始します：

```bash
# The first parameter is the model file path, and the second parameter is the IP address of the streaming target
./recamera_benchmark ./yolo11n_detection_cv181x_int8.cvimodel 192.168.4.35
```

テスト結果を確認したい場合は、Windows ターミナル上で次のコマンドを実行して udp スクリプトを起動し、reCamera のビデオストリームを受信できます：
```bash
python.exe .\yolo_udp.py
```

---


## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>