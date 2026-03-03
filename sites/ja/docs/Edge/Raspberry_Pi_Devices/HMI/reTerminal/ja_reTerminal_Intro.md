---
description: reTerminal ガイド
title: reTerminal ガイド
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_Intro
last_update:
  date: 12/22/2023
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/New/reTerminal_new.jpg" style={{width:800, height:'auto'}}/></div>

## reTerminal の入門ガイド

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal の入門ガイド</font></th>
      <th class="table-trnobg"><font size={"4"}>ハードウェアとインターフェースの使用方法</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、reTerminal デバイスでのOS インストールについて、ステップバイステップのウォークスルーを提供し、ドライバーのインストールについても説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、reTerminal のGPIO、CSI カメラインターフェース、内蔵センサー、LCD ディスプレイなど、さまざまなハードウェアコンポーネントとインターフェースを紹介します。これらの機能を活用してプロジェクトのアイデアを拡張する方法をガイドします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-hardware-interfaces-usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal と Pi カメラモジュール</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal 拡張ボード - reTerminal E10-1</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/expansion.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、Picam のインストールと設定方法について、ステップバイステップの手順を説明します。これらの初期ステップは、Seeed Studio reTerminal デバイスでオブジェクト検出プロジェクトを開始するために重要です。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reTerminal E10-1 拡張ボードは、充電可能な電源、アップグレードされたワイヤレス接続、多様なデータ伝送、オーディオサポートで reTerminal を強化します。柔軟性がすべてで、メーカープロジェクトやホームオートメーション構築からオフグリッドDIY実験まで、あらゆる用途に合わせてセットアップをカスタマイズできます。より多くの可能性を解き放つために、wikiをご覧ください。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalBridge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## OS インストール

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian OS または Ubuntu</font></th>
      <th class="table-trnobg"><font size={"4"}>Buildroot</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/URPi.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/build.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このwikiでは、Raspberry Pi OS と Ubuntu のインストールプロセスをガイドします。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Buildroot は、クロスコンパイルを通じて組み込みシステム用の完全な Linux システムの構築プロセスを簡素化し自動化するために設計された、ユーザーフレンドリーなツールです。このwikiでは、Buildroot のインストールプロセスを詳しく説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-Buildroot-SDK/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Yocto</font></th>
      <th class="table-trnobg"><font size={"4"}>Stream-pi と OBS studio</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Yocto プロジェクトは、オープンソースのコラボレーション イニシアチブで、ハードウェア アーキテクチャに関係なく、組み込み製品用のカスタム Linux ベース システムの作成を開発者が支援します。このwikiでは、Yocto のインストールプロセスを探ります。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Stream-Pi は、堅牢なマクロキーボードソフトウェアで、カスタマイズ可能な UI を持つオープンソースの代替品です。OBS Studio は、リアルタイムキャプチャとストリーミングをサポートする無料のオープンソースアプリです。それでは、インストールプロセスを探ってみましょう。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-Yocto/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Streampi_OBS_On_reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## アプリケーション

### 組み込み ML アプリケーション

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal での MediaPipe 入門</th>
      <th class="table-trnobg">reTerminal での TensorFlow Lite 入門</th>
      <th class="table-trnobg">Edge Impulse と reTerminal によるオブジェクト検出</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipeadd.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このwikiでは、デバイス上での推論に最適化された、マルチモーダルでクロスプラットフォームの応用ML パイプラインを構築するためのGoogleのオープンソースフレームワークであるMediaPipeについて詳しく説明します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このwikiでは、TFliteとさまざまなアプリケーションについての洞察を提供します。TensorFlow Liteは、デバイス上での機械学習を促進するツールセットで、開発者がモバイル、組み込み、IoTデバイス上でモデルを実行できるようにします。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このwikiでは、Edge ImpulseとreTerminalを使用したオブジェクト検出について探求します。Edge Impulseは、開発者が実世界のデータを使用して組み込み機械学習ソリューションを作成し最適化することを可能にします。詳細を見ていきましょう。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_ML_MediaPipe/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_ML_TFLite/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_ML_Edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### コンピュータビジョン

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminalとPiカメラでOpenCVを始める</th>
      <th class="table-trnobg">reTerminalとPiカメラでOpenCVを使った顔検出</th>
      <th class="table-trnobg">reTerminalとPiカメラでのオブジェクト検出</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このガイドでは、Raspberry Piカメラを統合し、Pythonスニペットを使用してビデオストリームをキャプチャし、キーを押すことで画像を保存する機能を実装します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このガイドでは、顔の特徴を識別するために機械学習モデルを利用するコンピュータビジョンの重要な技術であるHaar Cascade法を使用した顔検出について探求します。特にRaspberry Piカメラを使用してreTerminal上でこれを実装することに焦点を当てます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このガイドでは、COCOデータセットに基づく事前訓練されたEfficientNetモデルを使用して約90のオブジェクトを検出するためのRaspberry PiカメラとreTerminalの活用について探求します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_Face_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_Object_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

  <div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal PiカメラとOpenCVでの色検出</th>
      <th class="table-trnobg">reTerminal PiカメラとOpenCVでのオブジェクト追跡</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>コンピュータビジョンの中核コンポーネントである色検出は、デジタル画像や動画内の色を識別し分析することを含みます。このwikiでは、色の扱い方と検出方法について説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>検出が失敗した場合、追跡を実装します。アルゴリズムを探求し、追跡の利点を理解しましょう。Seeed Studio Wikiは包括的なガイドを提供します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_Color_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_Face-tracking/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Home Assistant

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">reTerminalでHome Assistantを始める</th>
    <th class="table-trnobg">Home Assistantをカスタマイズする方法</th>
      <th class="table-trnobg">FrigateとreTerminalの統合</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このwikiでは、reTerminalを使用して普通の家をスマートホームに変える方法をステップバイステップでガイドします。最終的には、reTerminal LCDに美しいダッシュボードが表示され、家電製品を制御し、センサーデータに簡単にアクセスできるようになります。始めましょう！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このwikiでは、必要な設定を行ってダッシュボードを構築する方法と、Home Assistantに付属する重要なアドオンの使用方法について、ステップバイステップで説明します。それでは始めましょう！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Frigateは、リアルタイムAIオブジェクト検出用に設計されたオープンソースNVRです。すべての処理はハードウェア上でローカルに実行され、カメラフィードが家庭内に留まることを保証します。このwikiでは、NVRのインストールをガイドし、オブジェクト検出機能を実演します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-Home-Assistant-Customize/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal_frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 強力なユーザーインターフェースの作成

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Python を使った reTerminal 向け Qt</th>
    <th class="table-trnobg">reTerminal 向け Flutter</th>
      <th class="table-trnobg">reTerminal 向け Electron</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、reTerminal で Qt for Python を使用して独自のユーザーインターフェースを構築する方法を説明します。ここでは開発に PySide2 を使用しています。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、Google のオープンソース UI ソフトウェア開発キットである Flutter を使用して独自のユーザーインターフェースを構築する方法をガイドします。Flutter は、単一のコードベースを使用して Android、iOS、Linux、Mac、Windows、Google Fuchsia、およびウェブ向けのクロスプラットフォームアプリ開発を可能にします。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、HTML、CSS、JavaScript などのウェブ技術を使用してネイティブデスクトップアプリケーション（Windows、Mac、Linux）を作成するためのオープンソースフレームワークである Electron を使用して独自のユーザーインターフェースを構築する方法をガイドします。ウェブサイトを構築できれば、デスクトップアプリも構築できます！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-build-UI-using-Qt-for-Python/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-build-UI-using-Flutter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-build-UI-using-Electron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    <br />

  <div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">reTerminal 向け LVGL</th>
    <th class="table-trnobg">Grafana を使用した独自の天気ダッシュボードの構築</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>LVGL は、ユーザーフレンドリーなグラフィカル要素、美しい視覚効果、最小限のメモリフットプリントで組み込み GUI を作成するための必需品を提供します。このグラフィックスライブラリは、限られたリソースを持つマイクロコントローラー向けに設計されています。この Wiki 記事では、SDL2 を使用した PC シミュレーターの例を利用し、ウィンドウではなくフルスクリーンで UI を表示するように若干の変更を加えます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>クレジット：</font><strong><font color={'8DC215'} size={"2"}>Michaelm Klementsk</font></strong><br /><font size={"2"}>この Wiki では、ESP32 を使用して温度、湿度、気圧の測定値を収集し、それらをクラウドサーバーでホストされている InfluxDB 時系列データベースに送信します。最後に、Grafana を使用してデータを可視化および分析します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-build-UI-using-LVGL/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/weather-dashboard-with-Grafana-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## その他

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal マウントオプション</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal への Mender Client のインストール</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Mount_Options/9.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mender.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、ハードウェアネジの仕様とコミュニティデザインの側面をカバーする reTerminal マウントソリューションを探求します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、ホスト型またはセルフホスト型の Mender Server から OTA アップデートを受信するために reTerminal で Mender Client を設定する方法を説明します。このガイドでは、Yocto Project を使用してコンパイルされたカスタム Linux システムを搭載した reTerminal の使用を重視しています。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_Mount_Options/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
  <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Mender-Client-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div>
<table>
 <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 さらに探索</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Pi デバイスに戻る</font></span></strong></a></div></td>
  </tr>
 </table>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストがあり、これは私たちの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の下に分類されています。私たちは Wiki プラットフォームの開発を通じてユーザーエクスペリエンスの向上とより良いサポートの提供に専念しています。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038)は私たちにとって不可欠です！私たちはあなたの意見を本当に大切にしており、アイデアの創出においてあなたの支援を心から感謝いたします。

## FAQ

- [reTerminalの黒い画面の問題をトラブルシューティングする方法](https://wiki.seeedstudio.com/ja/reterminal_black_screen)
- [Raspberry Pi OS/ 64ビットUbuntu OSまたはその他のOSをeMMCにフラッシュする方法](https://wiki.seeedstudio.com/ja/flash_different_os_to_emmc)
- [Wi-Fi/イーサネット経由でSSHを使用してRaspberry Pi OS/Ubuntu OSまたはその他のOSにログインする](https://wiki.seeedstudio.com/ja/log_rpios_use_ssh_over_wifi_ethernet)
- [詳細を見る](https://wiki.seeedstudio.com/ja/reTerminal-new_FAQ/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
