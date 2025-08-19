---
description: reTerminal ガイド
title: reTerminal ガイド
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_Intro
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/New/reTerminal_new.jpg" style={{width:800, height:'auto'}}/></div>

## reTerminal の使い方

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal の使い方</font></th>
      <th class="table-trnobg"><font size={"4"}>ハードウェアとインターフェースの使用方法</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、reTerminal デバイスへのOSインストールについて、ステップバイステップの手順を提供し、ドライバーインストールについても説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、reTerminal のGPIO、CSIカメラインターフェース、内蔵センサー、LCDディスプレイなどのさまざまなハードウェアコンポーネントとインターフェースを紹介します。これらの機能を活用してプロジェクトアイデアを拡張する方法をガイドします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-hardware-interfaces-usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal とPiカメラモジュール</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal 拡張ボード - reTerminal E10-1</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/expansion.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Picamsのインストール方法と設定についてステップバイステップで説明します。これらの初期手順は、Seeed Studio reTerminal デバイスを使用した物体検出プロジェクトを開始するために重要です。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reTerminal E10-1拡張ボードは、reTerminal に充電機能、改良された無線通信、産業用データ伝送、オーディオ機能を追加します。これにより、reTerminal はより堅牢になり、高速産業、農業、または強化された無線ホームアプリケーションに適したものとなります。詳細についてはWikiをご覧ください。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminalBridge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## OSインストール

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
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Raspberry Pi OSおよびUbuntuのインストールプロセスについて説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Buildrootは、クロスコンパイルを通じて組み込みシステム向けの完全なLinuxシステムを構築するプロセスを簡素化し、自動化するために設計されたユーザーフレンドリーなツールです。このWikiでは、Buildrootのインストールプロセスについて詳しく説明します。</font></td>
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
      <th class="table-trnobg"><font size={"4"}>Stream-pi および OBS Studio</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Yocto Projectは、オープンソースのコラボレーションイニシアチブであり、ハードウェアアーキテクチャに関係なく、組み込み製品向けのカスタムLinuxベースシステムを開発するための支援を提供します。このWikiでは、Yoctoのインストールプロセスを探ります。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Stream-Piは、カスタマイズ可能なUIを備えたオープンソースの強力なマクロキーボードソフトウェアです。OBS Studioは、リアルタイムキャプチャとストリーミングをサポートする無料のオープンソースアプリです。これらのインストールプロセスを探ってみましょう。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-Yocto/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Streampi_OBS_On_reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## アプリケーション

### 組み込み型機械学習アプリケーション

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminalでのMediaPipeの始め方</th>
      <th class="table-trnobg">reTerminalでのTensorFlow Liteの始め方</th>
      <th class="table-trnobg">Edge ImpulseとreTerminalを使用した物体検出</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipeadd.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Googleが提供するオープンソースフレームワークMediaPipeについて掘り下げます。MediaPipeは、マルチモーダルかつクロスプラットフォームの機械学習パイプラインを構築するためのフレームワークで、デバイス上での推論に最適化されています。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、TFliteとそのさまざまなアプリケーションについての洞察を提供します。TensorFlow Liteは、モバイル、組み込み、IoTデバイス上でモデルを実行できるようにするツールセットです。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Edge ImpulseとreTerminalを使用した物体検出について探ります。Edge Impulseは、実世界のデータを使用して組み込み型機械学習ソリューションを作成および最適化するためのツールを提供します。詳細を見ていきましょう。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_ML_MediaPipe/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_ML_TFLite/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_ML_Edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### コンピュータビジョン

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminalとPiカメラを使用したOpenCVの始め方</th>
      <th class="table-trnobg">reTerminalとPiカメラを使用した顔検出</th>
      <th class="table-trnobg">reTerminalとPiカメラを使用した物体検出</th>
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
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このガイドでは、Haar Cascade法を使用した顔検出について探ります。この方法は、機械学習モデルを使用して顔の特徴を識別するコンピュータビジョンの重要な技術です。特にreTerminalとRaspberry Piカメラを使用してこれを実装する方法に焦点を当てます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このガイドでは、Raspberry PiカメラとreTerminalを使用して、COCOデータセットに基づいた事前学習済みEfficientNetモデルを使用して約90種類の物体を検出する方法を探ります。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_Face_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_Object_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    
  <div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal PiカメラとOpenCVを使用した色検出</th>
      <th class="table-trnobg">reTerminal PiカメラとOpenCVを使用した物体追跡</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>色検出はコンピュータビジョンの中心的な要素であり、デジタル画像やビデオ内の色を識別および分析するプロセスです。このWikiでは、色を扱い検出する方法を説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>検出が失敗した場合には追跡を実装します。アルゴリズムを探り、追跡の利点を理解します。Seeed Studio Wikiは包括的なガイドを提供します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_Color_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_DM_Face-tracking/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Home Assistant

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">reTerminalでのHome Assistantの始め方</th>
    <th class="table-trnobg">Home Assistantをカスタマイズする方法</th>
      <th class="table-trnobg">FrigateをreTerminalと統合する</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、reTerminalを使用して普通の家をスマートホームに変える方法をステップバイステップで案内します。最終的には、reTerminalのLCDに美しいダッシュボードが表示され、家庭用電化製品の制御やセンサーデータへの簡単なアクセスが可能になります。それでは始めましょう！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、必要な設定を行いながらダッシュボードを構築する方法や、Home Assistantに付属する重要なアドオンの使用方法をステップバイステップで説明します。それでは始めましょう！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>FrigateはリアルタイムのAIオブジェクト検出のために設計されたオープンソースのNVRです。すべての処理はローカルのハードウェア上で行われ、カメラフィードは自宅内に留まります。このWikiでは、NVRのインストール方法とオブジェクト検出機能を紹介します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-Home-Assistant-Customize/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reterminal_frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 強力なユーザーインターフェースを作成する

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Pythonを使用したreTerminal向けQt</th>
    <th class="table-trnobg">reTerminal向けFlutter</th>
      <th class="table-trnobg">reTerminal向けElectron</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、reTerminal上でPythonを使用して独自のユーザーインターフェースを構築する方法を説明します。開発にはPySide2を使用しています。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、GoogleのオープンソースUIソフトウェア開発キットであるFlutterを使用して独自のユーザーインターフェースを構築する方法を案内します。Flutterを使用すると、単一のコードベースでAndroid、iOS、Linux、Mac、Windows、Google Fuchsia、Web向けのクロスプラットフォームアプリを開発できます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、HTML、CSS、JavaScriptなどのWeb技術を使用して、Windows、Mac、Linux向けのネイティブデスクトップアプリケーションを作成するオープンソースフレームワークであるElectronを使用して独自のユーザーインターフェースを構築する方法を案内します。ウェブサイトを構築できるなら、デスクトップアプリも構築できます！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-build-UI-using-Qt-for-Python/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-build-UI-using-Flutter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-build-UI-using-Electron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    <br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">reTerminal 用 LVGL</th>
    <th class="table-trnobg">Grafana を使用した独自の天気 ダッシュボード の構築</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>LVGL は、使いやすいグラフィカル要素、美しい視覚効果、そして最小限のメモリ使用量を備えた組み込み GUI を作成するための基本を提供します。このグラフィックスライブラリは、リソースが限られたマイクロコントローラー向けに設計されています。この Wiki 記事では、SDL2 を使用した PC シミュレーターの例を利用し、ウィンドウではなくフルスクリーンで UI を表示するように少し変更を加えます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> クレジット: </font><strong><font color={'8DC215'} size={"2"}>Michaelm Klementsk</font></strong><br /><font size={"2"}> この Wiki では、ESP32 を使用して温度、湿度、圧力の測定値を収集し、それらをクラウドサーバーにホストされた InfluxDB 時系列データベースに送信します。最後に、Grafana を使用してデータを視覚化および分析します。</font></td>
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
      <th class="table-trnobg"><font size={"4"}>reTerminal への Mender クライアントのインストール</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Mount_Options/9.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mender.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このセクションでは、reTerminal のマウントソリューションを探り、ハードウェアのネジ仕様やコミュニティデザインの側面を取り上げます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この Wiki では、ホスト型またはセルフホスト型 Mender サーバーから OTA 更新を受信するために reTerminal に Mender クライアントをセットアップする方法を説明します。このガイドでは、Yocto Project を使用してコンパイルされたカスタム Linux システムを備えた reTerminal の使用を強調しています。</font></td>
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
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 詳細を見る</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Pi デバイスに戻る</font></span></strong></a></div></td>
		</tr>
	</table>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストがあり、それは私たちの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)に分類されています。私たちはユーザー体験を向上させ、Wikiプラットフォームの開発を通じてより良いサポートを提供することに専念しています。
- [このページへの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038)は私たちにとって非常に重要です！皆様のご意見を大切にしており、アイデアの生成におけるご協力を心より感謝いたします。

## FAQ

- [reTerminalの黒い画面問題をトラブルシューティングする方法](https://wiki.seeedstudio.com/ja/reterminal_black_screen)
- [Raspberry Pi OS/ 64-bit Ubuntu OS またはその他のOSをeMMCにフラッシュする方法](https://wiki.seeedstudio.com/ja/flash_different_os_to_emmc)
- [Wi-Fi/イーサネット経由でSSHを使用してRaspberry Pi OS/++Ubuntu OSまたはその他のOSにログインする方法](https://wiki.seeedstudio.com/ja/log_rpios_use_ssh_over_wifi_ethernet)
- [さらに詳しく知る](https://wiki.seeedstudio.com/ja/reTerminal-new_FAQ/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>