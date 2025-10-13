---
description: SenseCAP Watcher Agent の Web コントロールパネルの使用ガイド
title: Web コントロールパネル(β)
sidebar_position: 3
keywords:
- SenseCAP
- Watcher
- Web Control Panel
- Agent Configuration
- Device Management
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /ja/watcher_web_control_panel
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# Web コントロールパネル ベータ版ガイド

## 概要

SenseCAP Watcher Web コントロールパネル（ベータ版）は、Watcher デバイスの管理と Agent 設定の構成を行うための Web ベースのインターフェースを提供します。このベータ版には、デバイス管理と Agent カスタマイズのための基本機能が含まれています。

以下の動画は、Web コントロールパネルを使用してデバイスを設定する方法のステップバイステップチュートリアルです。
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## 現在の機能

Web コントロールパネルのベータ版には、以下の主要機能が含まれています：

1. デバイスバインディング
2. Agent 設定
3. LLM モデル選択
4. チャット履歴管理
5. デバイス情報表示

## デバイスバインディング

### バインディングプロセス
1. [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) にアクセスします
2. コントロールパネルにアクセスするには、ページの右上角にある Watcher Agent をクリックします。
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>
3. "Bind Device" ボタンをクリックします
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div> 
4. 画面の指示に従い、デバイスに表示される 6 桁の認証コードを入力します



<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

## Agent 設定

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

### ロールテンプレート
- プリセットテンプレートを提供しており、独自のテンプレートを作成したり、プリセットテンプレートを変更したりすることもできます。

### アシスタントニックネーム
- Agent の名前をカスタマイズします。
:::note
この機能は Agent のウェイクワードを変更しません。
Agent のウェイクワードは、ファームウェアをコンパイルする際にのみ変更できます。
デフォルトのウェイクアップワードは "Jarvis" です。
:::


### キャラクターボイス
- 異なる音声を選択します

### ロール紹介/プロンプト
1. 事前定義されたロールテンプレートから選択
2. カスタムロールテンプレートを作成
3. 既存のテンプレートを変更
:::note
上記で設定したアシスタントニックネームは、ロール紹介に `assistant nickname` が追加された場合にのみ機能します。
現在の時刻を取得するには、__DATE__ を追加する必要があります。
:::


### 履歴の表示
- チャットログにアクセス
- 個別のメッセージを表示
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div> 

## デバイス情報

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div> 

コントロールパネルには、以下の重要なデバイス情報が表示されます：

- ボード名
- MAC アドレス
- APP バージョン
- 最終接続時刻
- 自動アップグレードスイッチ
- 操作

:::note
これは Web コントロールパネルのベータ版であり、将来のリリースで機能が更新または変更される可能性があります。最新の機能については、定期的にアップデートを確認してください。
:::

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
