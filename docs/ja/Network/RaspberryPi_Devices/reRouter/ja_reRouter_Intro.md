---
description: reRouter ガイド
title: reRouter ガイド
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reRouter_Intro
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png" style={{width:500, height:'auto'}}/></div>

この Mini Router は、デュアル Gigabit Ethernet ポートとデュアル USB 3.0 ポートを備えており、ソフトルーターアプリケーションに適している一方で、ハードウェアを最小限に抑えています。Raspberry Pi Compute Module 4（4GB RAM、32GB eMMC）を事前にインストールしており、迅速な起動時間とスムーズな全体的な使用体験を提供します。

## reRouter の使い方

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">ルーターでの OpenWrt の使い方</th>
      <th class="table-trnobg">reRouter キャリアボード - ハードウェア概要</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/thumb.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、OpenWrt を探索します。OpenWrt はルーターや組み込みデバイス向けのオープンソース Linux OS であり、機能、性能、セキュリティを強化し、カスタマイズ可能なファイルシステムとパッケージ管理を提供します。ルーターにアクセスすると、美しくインタラクティブなダッシュボードが表示されます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、小型ルーターのハードウェア概要を探索します。Raspberry Pi Compute Module 4 を搭載したデュアル Gigabit キャリアボードで、デュアル Gigabit Ethernet ポート、USB 3.0 ポート、さまざまな I/O 周辺機器を備えています。コンパクトな形状を維持しながら、ソフトルーターアプリケーションに最適です。HTPC メーカー、Linux 開発者、Raspberry Pi ユーザーに適しています。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Raspberry-OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## アプリケーション

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">OpenWRT の始め方</th>
      <th class="table-trnobg">Plex メディアサーバー</th>
      <th class="table-trnobg">Mender の使用</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mender.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、OpenWrt の詳細な解説を提供し、GUI の機能について説明します。OpenWrt をソフトルーターや WiFi アクセスポイントとして使用する方法を探求してください。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このガイドでは、Seeed OpenWrt ファームウェア上で Docker コンテナとして Plex メディアサーバーをセットアップする方法を説明します。Plex を使用すると、ローカルのメディアファイルを世界中でストリーミングできます。OpenWrt は ODYSSEY – X86 ボードまたは Raspberry Pi Compute Module 4 用のデュアルギガビットイーサネットキャリアボードで動作します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、Raspberry Pi Compute Module 4 用のデュアルギガビットイーサネットキャリアボードに Mender クライアントをセットアップし、ホスト型またはセルフホスト型の Mender サーバーから OTA アップデートを受け取る方法を説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/OpenWrt-Plex-Media-Server-on-Docker/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Mender-Client-dual-GbE-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストを用意しており、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の一環として分類されています。私たちは、ユーザー体験を向上させ、Wiki プラットフォームの開発を通じてより良いサポートを提供することに専念しています。
- [このページへの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962991)は私たちにとって非常に重要です！皆さんの意見を大切にしており、アイデアの提供にご協力いただけると大変ありがたいです。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>