---
description: これは、OTAまたは増分更新の使用がシステムの不安定性とセキュリティリスクを引き起こす可能性があるため、システムのセキュリティと安定性を維持し、部分的な更新を避けるために完全なROM更新を実行することを推奨するFAQです。
title: Jetson用ソフトウェアパッケージのアップグレード
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/upgrade_software_packages_for_jetson
last_update:
  date: 2/11/2025
  author: Youjiang
---

#### apt upgradeを実行できないと言われた場合、ソフトウェアパッケージをどのようにアップグレードできますか？ソフトウェアをアップグレードしないとセキュリティリスクがありますか？

A: まず、**OTA（Over the Air）/増分更新/部分更新**がOSに潜在的な害を与える可能性があることを理解することが重要です。これらの方法では、ユーザーがパッケージのサブセットのみを更新できるためです。このアプローチは依存関係の不一致、システムの不安定性、セキュリティパッチの見落としを引き起こし、最終的にソフトウェア障害や脆弱性のリスクを増加させる可能性があります。さらに、部分アップグレードの管理には手動介入が必要になることが多く、エラーが発生しやすくなります。一方、**完全ROM/完全更新**では、すべてのパッケージと依存関係が一緒に更新され、システムの互換性と安定性が維持されます。システム全体にセキュリティパッチとバグ修正を適用することで、完全アップグレードはシステムを安全で一貫した状態に保ち、競合の可能性を減らします。完全アップグレードには時間がかかる場合がありますが、一般的に長期的にはより安全で信頼性が高いと考えられています。当社のJetsonデバイスでは、NVIDIAがリリースした後にJetPackをリリースしており（ドライバーリリースや独自のJetPackの組み立てについても同様です）、これによりaptを使用したアップグレードと比較して、より安定で安全なシステムが保証されます。古いソフトウェアが心配で特定のパッケージを更新したい場合は、以下のオプションがあります：

1. ソフトウェアパッケージがシステムパッケージに依存していないことが確実な場合は、"sudo apt-get install `<Your_Package>`"を実行してパッケージをアップグレードしてください。
2. ほとんどのオープンソースソフトウェアについては、ソースファイルをダウンロードして自分でコンパイルしてください。
3. 新しいJetPackリリースを待ってください。


## 技術サポートと製品ディスカッション

当社の製品をお選びいただき、ありがとうございます！当社の製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>