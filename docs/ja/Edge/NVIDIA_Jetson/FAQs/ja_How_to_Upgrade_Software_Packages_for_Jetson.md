---
description: OTAや増分アップデートを使用すると、システムの不安定性やセキュリティリスクを引き起こす可能性があるため、システムのセキュリティと安定性を維持し、部分的なアップデートを避けるために、完全なROMアップデートを実行することを推奨します。
title: Jetsonのソフトウェアパッケージをアップグレードする
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/upgrade_software_packages_for_jetson
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

#### apt upgradeを実行できないと言われましたが、ソフトウェアパッケージをどのようにアップグレードできますか？アップグレードしないとセキュリティリスクがありますか？

A: まず、**OTA（Over the Air）/増分アップデート/部分的なアップデート**は、OSに潜在的な害を及ぼす可能性があることを理解することが重要です。これらは、ユーザーがパッケージの一部のみを更新することを許可するため、依存関係の不一致、システムの不安定性、セキュリティパッチの見落としにつながり、最終的にはソフトウェアの障害や脆弱性のリスクを高める可能性があります。さらに、部分的なアップグレードの管理には手動での介入が必要になることが多く、エラーが発生しやすいです。

一方で、**完全なROM/完全なアップデート**は、すべてのパッケージと依存関係を一緒に更新するため、システムの互換性と安定性を維持します。セキュリティパッチやバグ修正をシステム全体に適用することで、完全なアップグレードはシステムを安全かつ一貫性のある状態に保ち、競合の可能性を減らします。完全なアップグレードには時間がかかる場合がありますが、長期的には一般的に安全で信頼性が高いと考えられています。

私たちのJetsonデバイスの場合、NVIDIAがJetPackをリリースした後にJetPackをリリースします（ドライバリリースや独自のJetPackの構築も同様です）。これにより、aptを使用してアップグレードするよりも、より安定して安全なシステムが保証されます。古いソフトウェアが気になる場合や特定のパッケージを更新したい場合、以下のオプションがあります：

1. ソフトウェアパッケージがシステムパッケージに依存していないことを確信している場合は、"sudo apt-get install `<Your_Package>`"を実行してパッケージをアップグレードしてください。
2. ほとんどのオープンソースソフトウェアについては、ソースファイルをダウンロードして自分でコンパイルしてください。
3. 新しいJetPackのリリースを待ちます。


## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>