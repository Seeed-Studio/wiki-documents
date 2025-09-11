---
description: SenseCAP Watcher AgentのWebコントロールパネルの使用ガイド
title: Webコントロールパネル(β)
sidebar_position: 3
keywords:
- SenseCAP
- Watcher
- Webコントロールパネル
- エージェント設定
- デバイス管理
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /ja/watcher_web_control_panel
last_update:
  date: 05/15/2025
  author: Tony
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Webコントロールパネル ベータ版ガイド

## 概要

SenseCAP Watcher Webコントロールパネル（ベータ版）は、Watcherデバイスの管理およびエージェント設定の構成を行うためのウェブベースのインターフェースを提供します。このベータ版には、デバイス管理とエージェントカスタマイズのための基本的な機能が含まれています。

## 現在の機能

ベータ版のWebコントロールパネルには以下の主要な機能が含まれています：

1. デバイスのバインディング
2. エージェント設定
3. LLMモデル選択
4. チャット履歴管理
5. デバイス情報表示

## デバイスのバインディング

### バインディングプロセス
1. [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)にアクセスします。
2. コントロールパネルにアクセスするには、ページ右上のWatcher Agentをクリックします。
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>
3. 「Bind Device」ボタンをクリックします。
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div> 
4. 画面の指示に従い、デバイスに表示される6桁の認証コードを入力します。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

## エージェント設定

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

### ロールテンプレート
- プリセットテンプレートを提供しています。独自のテンプレートを作成したり、プリセットテンプレートを変更することもできます。

### アシスタントのニックネーム
- エージェントの名前をカスタマイズできます。
:::note
この機能はエージェントのウェイクワードを変更するものではありません。
エージェントのウェイクワードはファームウェアをコンパイルする際にのみ変更可能です。
デフォルトのウェイクワードは「Jarvis」です。
:::

### キャラクターボイス
- 異なる声を選択できます。

### ロール紹介/プロンプト
1. 定義済みのロールテンプレートから選択
2. カスタムロールテンプレートを作成
3. 既存のテンプレートを変更
:::note
上記で設定したアシスタントのニックネームは、`{assistant_nickname}`がロール紹介に追加されている場合のみ機能します。
現在時刻を取得するには、__DATE__を追加する必要があります。
:::

### 履歴の閲覧と管理
- チャットログにアクセス
- 個々のメッセージを削除
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div> 

## デバイス情報

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div> 

コントロールパネルには以下の重要なデバイス情報が表示されます：

- デバイスモデル
- チップモデル
- ファームウェアバージョン
- MACアドレス
- バインディング時間
- オンラインステータス
- メモ
- OTAアップグレードスイッチ
- バインド解除

:::note
これはWebコントロールパネルのベータ版であり、将来のリリースで機能が更新または変更される可能性があります。最新の機能を確認するために定期的に更新をチェックしてください。
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