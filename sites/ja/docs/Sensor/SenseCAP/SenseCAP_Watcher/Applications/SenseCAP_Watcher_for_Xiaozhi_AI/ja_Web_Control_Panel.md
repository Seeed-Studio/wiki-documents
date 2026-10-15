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
slug: /watcher_web_control_panel
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip: [zh-CN]
createdAt: '2025-05-07'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/ja/watcher_web_control_panel/
---

# Web コントロールパネル ベータ版ガイド

## 概要

SenseCAP Watcher Web コントロールパネル（ベータ版）は、Watcher デバイスの管理や Agent 設定の構成を行うための Web ベースのインターフェースを提供します。このベータ版には、デバイス管理と Agent カスタマイズのための基本機能が含まれています。

以下の動画は、Web コントロールパネルを使用してデバイスを設定するためのステップバイステップのチュートリアルです。
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## 現在の機能

Web コントロールパネルのベータ版には、次の主な機能が含まれます：

1. デバイスのバインド
2. Agent 設定
3. LLM モデルの選択
4. チャット履歴の管理
5. デバイス情報の表示

## デバイスのバインド

### バインド手順
1. **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`** > **`Watcher Agent`** の順に進んで Watcher Agent コントロールパネルにアクセスするか、[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/37)を使用し、左サイドバーの **`Watcher Agent`** をクリックします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_agent_workspace.png" style={{width:800, height:'auto'}}/></div>

2. 「Bind Device」ボタンをクリックします
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div> 
3. 画面の指示に従い、デバイスに表示されている 6 桁の認証コードを入力します



<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

## Agent 設定

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

### ロールテンプレート
- あらかじめ用意されたテンプレートを提供しており、自分でテンプレートを作成したり、既存のテンプレートを編集することもできます。

### アシスタントのニックネーム
- Agent の名前をカスタマイズします。
:::note
この機能は Agent のウェイクワードは変更しません。 
Agent のウェイクワードは、ファームウェアをコンパイルする際にのみ変更できます。 
デフォルトのウェイクワードは「Jarvis」です。
:::


### キャラクターボイス
- 異なる音声を選択します

### ロール紹介 / プロンプト
1. 事前定義されたロールテンプレートから選択
2. カスタムロールテンプレートを作成
3. 既存テンプレートを編集
:::note
上で設定したアシスタントのニックネームは、ロール紹介に `assistant nickname` が追加されている場合にのみ有効になります。
現在時刻を取得するには、__DATE__ を追加する必要があります。
:::


### 履歴の閲覧
- チャットログにアクセス
- 個々のメッセージを表示
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div> 

## デバイス情報

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div> 

コントロールパネルには、次のような重要なデバイス情報が表示されます：

- ボード名
- MAC アドレス
- APP バージョン
- 最終接続時刻
- 自動アップグレードスイッチ
- 操作

:::note
これは Web コントロールパネルのベータ版であり、今後のリリースで機能が更新または変更される場合があります。最新の機能を利用するため、定期的にアップデートを確認してください。
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
