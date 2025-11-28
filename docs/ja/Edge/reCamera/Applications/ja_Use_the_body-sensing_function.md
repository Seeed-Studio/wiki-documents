---
description: 体感センサー機能を使って Subway Surfers を操作します。
title: 体感センサー操作で Subway Surfers をプレイ
keywords:
  - reCamera
  - 感覚制御
  - ゲーム
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif
slug: /ja/use_the_motion-sensing_function_of_recamera_to_play_games
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
---

# 体感センサー操作で Subway Surfers をプレイ

## はじめに

reCamera は強力なエッジコンピューティング機能を備えた AI カメラです。このデモでは、デバイスレベルで YOLO11n-Pose モデルをリアルタイムで実行する能力を紹介します。クラウドに依存することなく、人体の主要なポイントと姿勢を正確に識別できます。reCamera でプレイヤーの動きをキャプチャすることで、私たちの体をコントローラーに変換し、自然な体感で「Subway Run」を操作できます：ジャンプ、しゃがみ、左右への回避、すべてがシームレスな動作で実現されます！

このデモを完了したあとの使用イメージは次のとおりです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## ハードウェアの準備

reCamera 1台
コンピューター 1台

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
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

## 1. SenseCraft を開き、「GAME」という名前のアプリケーションを見つける

### 1.1 Wiki を開く

SenseCraft のエントリは Wiki インターフェースの右上角にあります。クリックして SenseCraft に入ります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 reCamera のワークスペースに入る

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_2.png" /></div>

### 1.3 GAME という名前のアプリケーションを見つけてクリックする

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_3.png" /></div>

### 1.4 このアプリケーションを reCamera にデプロイする

ページの下部までスクロールし、Open Application をクリックし、次に Visit Workspace Via USB をクリックします（この時点で reCamera をコンピューターに接続する必要があります）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_4.png" /></div>

その後、ワークスペースに入り、Node-RED ノードがしばらく読み込まれます。読み込みが完了するまで辛抱強くお待ちください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

読み込み後、以下のインターフェースが表示されます。No をクリックして終了します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

右上角の Deploy ボタンをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

デプロイが成功すると、ポップアップウィンドウが表示され、その後デプロイボタンがグレーになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

次に Dashboard を開いて効果を確認します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

この時点で、以下のような検出画面を正常に見ることができるはずです

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.5 上下左右の4つのアクションのトリガーをテストする

#### 1.5.1 初期状態

これは初期アクション、つまり中央に戻る状態です。reCamera を固定し、角度を調整し、reCamera の前に立ち、両腕を自然に両側に置き、ボールが中心線上で紫の線と緑の領域の間にあるように制御します。この時点で、他のアクションを実行してテストできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 左

左腕を左に、右腕は静止させ、ボールを中心線の左側に制御します。青色で表示され、この時点で左と判定されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 右

右腕を右に、左腕は静止させ、ボールを中心線の右側に制御します。黄色で表示され、この時点で右と判定されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 上

両腕を上に上げる必要があります。紫の線が黄色の線を超えているのが見えたら、上向きと判定され、ボールは白色のままになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 下

腕を中央に戻し、自然にしゃがみます。ボールをしゃがみ領域に制御します。ボールは赤色になり、この時点で下向きと判定されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
連続して特定のアクションセットをトリガーしたい場合、例えば連続して2回左に行く、または左に行ってから上に行く場合、最初の左のアクションを行った後、ボールを中央に戻してから2番目のアクションを行う必要があります。
:::

## 2. 対応する python 制御プログラムをダウンロードして実行する

この [GitHub リンク](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git) をクリックしてください

入った後、このプロジェクトの圧縮パッケージをローカルにダウンロードします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

解凍後、scket_udp.py を開き、まずキーボードを制御する依存関係をダウンロードします。

```bash
pip install pynput
```

その後、この python プログラムを実行できます。この時点で、reCamera 検出画面を有効に保つ必要があり、アクション判定の結果の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. ゲームを開く（地下鉄パルクールのウェブ版を例として）

reCamera 検出と python プログラムが実行されており、テストアクションの出力に問題がないことを確認した後、[地下鉄パルクールのウェブページ](https://subway-surfers.gg/) を開き、「Start Game」をクリックしてプレイを開始できます！

:::note
画面には1人だけが表示される必要があります。他の人が侵入すると、アクション判定にエラーが発生します！
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
