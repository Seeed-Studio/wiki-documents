---
description: このwikiでは、reComputer JetsonでClawdbotをデプロイして使用する方法を説明します。
title: Clawdbotを使用したreComputer Jetsonの開発
keywords:
  - reComputer Super
  - Jetson
  - LLM
  - Clawdbot
  - Qwen
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.webp
slug: /develop_recomputer_jetson_using_clawdbot
sku: 114110314, 114090066
last_update:
  date: 01/28/2026
  author: Youjiang
createdAt: '2026-01-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/develop_recomputer_jetson_using_clawdbot/
---


# Clawdbotを使用したreComputer Jetsonの開発

## はじめに

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>

    従来、Jetsonエッジデバイスでの開発には、モニター、キーボード、マウスを使用した物理的なセットアップが必要でした。リモートSSHアクセスを使用する場合でも、開発者はターミナルベースのワークフローと監視・デプロイメント用の追加ツールに依存していました。
    Clawdbotを使用することで、開発がはるかに簡単になります。開発者は、WhatsAppなどのチャットアプリを通じてreComputer Jetsonと直接やり取りできるようになり、メッセージを送信してデバイスの状態を確認し、コマンドを実行し、より便利な方法でスクリプトをデバッグできます。

    このwikiでは、reComputer JetsonでClawdbotをデプロイして使用する方法を説明します。
</div>

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops.png" />
</div>

## 前提条件

- reComputer Super J4012
- USBカメラ

<table align="center">
    <tr>
        <th>reComputer Super J4012</th>
        <th>USBカメラ</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110311-recomputer-super-j3010_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114090066--x10-usb-camera.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## ハードウェア接続

USBカメラをJetsonデバイスのUSB Type-Aポートに接続します。

## 入門ガイド

1. JetsonデバイスにClawdbotをインストール  
Jetsonデバイスでターミナルを開き、以下を実行します：

```bash
curl -fsSL https://molt.bot/install.sh | bash
```

2. Clawdbotの設定  
インストール後、セットアップページが自動的に開きます。ターミナルのプロンプトに従い、以下に注意してください：

- LLMの選択とAPIキーの入力
- インタラクションチャンネルの選択（この例ではWhatsApp）

3. Clawdbot AIエージェントの開始  
すべてが正しく設定されている場合、エージェントは自動的に開始されます。次に、JetsonデバイスのブラウザでWebUIを開きます：  
`http://127.0.0.1:18789`

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/webui.png" />
</div>

これで、スマートフォンでWhatsAppを開き、自分自身にメッセージを送信してreComputer Jetsonを制御できます。

## 効果のデモンストレーション

デモビデオでは、モバイルチャットアプリケーションを使用してJetsonデバイスの状態を確認し、チャットベースのインタラクションを通じてカメラデバッグスクリプトを開発しました。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/9bQcx7G0CiU" title="Develop reComputer Jetson using Clawdbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
