---
description: OpenWrt-FAQ
title: Dual Gigabit Ethernet Carrier Board で eMMC なしの CM4 を使用する方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/use_a_CM4_witout_eMMC
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q2: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC? -->

Dual Gigabit Ethernet Carrier Board で eMMC なしの Compute Module 4 を使用したい場合は、micro-SD カードに OpenWrt をフラッシュしてボードに挿入する必要があります。お使いのオペレーティングシステムに応じて、以下の手順に従ってください。

- **ステップ 1.** コンピュータに接続された **micro-SD カードリーダー** を使用するか、ノートパソコンの **内蔵カードリーダー** を使用して、micro-SD カードをコンピュータに挿入します

- **ステップ 2.** お使いのオペレーティングシステムに応じて、[このリンク](https://www.balena.io/etcher) にアクセスして **balenaEtcher** ソフトウェアをダウンロードします

- **ステップ 3.** **balenaEtcher** を **管理者として** 実行します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **ステップ 4.** **Flash from file** をクリックし、事前にダウンロードした OpenWrt イメージファイルを指定します

- **ステップ 5.** **Select target** をクリックし、接続された micro-SD カードを選択します

- **ステップ 6.** 最後に、**Flash!** をクリックします

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

フラッシュプロセスが完了するまで数分間お待ちください。

- **ステップ 7.** micro-SD カードをコンピュータから取り出し、Dual Gigabit Ethernet Carrier Board に挿入します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png" alt="pir" width="400" height="auto"/></p>