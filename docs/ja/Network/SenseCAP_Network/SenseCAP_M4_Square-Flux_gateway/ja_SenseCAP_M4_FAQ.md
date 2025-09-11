---
description: SenseCAP M4 FAQ
title: SenseCAP M4 FAQ
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

FAQ
===

### **ノードの平均的なフラックスチェーン同期時間はどれくらいですか？**

20GBのスナップショットファイルをダウンロードしてロードし、約1時間でチェーン同期を行い最新のブロックに追いつきます。正確な同期時間はデバイスのネットワークに依存しますので、デバイスが良好なネットワーク環境にあることを確認してください。

### **SenseCAP M4 SquareはNIMBUSとSTRATUSをサポートしていますか？**

**いいえ**、SenseCAP M4 SquareはCUMULUSのみをサポートしています。NIMBUSが必要な場合は[こちら](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)をクリックしてください。

### **ポートが開いているかどうかを確認する方法は？**

SenseCAP M4 SquareはFluxに必要なすべてのポートを開放しています。SenseCAP Hotspot AppはUPNP検出を提供します。UPNPステータスがONの場合、ポートは開いています。ステータスがOFFの場合は、ルーターのUPNPを確認してください。詳細については、[Flux Node Network Setup](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)をご覧ください。

### **M4は静的IPが必要ですか？また、同じ外部IPで複数のSenseCAP M4 Squaresを実行することは可能ですか？**

外部IPが必要です。

1つのIPで最大8台のデバイスを実行可能です。ルーターがUPnPまたはポートフォワードをサポートしていることを確認してください。

### **ネットワーク帯域幅をテストして要件を満たす方法は？**

https://www.speedtest.net

### **FluxとFluxトークンの違いは何ですか？**

FluxトークンはFluxです。Fluxトークンは異なるブロックチェーン上で支払われるParallel Assetsであり、例えばETH Flux、BSC Fluxなどがあります。これらはZelcore内のFusionアプリで請求可能です。右上の三点メニューから「Parallel Mining Claim」を選択してください。Fluxトークンの量が請求に必要な手数料を超えている場合のみ、請求可能な量が表示されます。

### **プロフェッショナルユーザーの場合、元のシステムを消去して別のシステムをインストールできますか？**

これは推奨される操作ではありません。ただし、x86ベースのデバイスであるため、任意のシステムを再インストールすることが可能です。ただし、実行する前に十分な知識を持っていることを確認してください。

ただし、標準システムを消去すると保証が失われ、元のシステムに戻すことが困難になることを覚えておいてください。

### **電源プラグを自分で選ぶ必要がありますか？**

M4 Squareには広範囲入力対応の電源アダプターが含まれており、US/AU/UK/EUプラグが付属しています。

### **外部アンテナが必要ですか？**

Wi-Fiアンテナはデバイス内部にあります。SenseCAP M4 Square-Fluxnodeは外部アンテナを必要としません。

### **1000Fluxをステークする必要がありますか？**

**はい**、1000 Fluxはハードウェアに含まれていないため、自分でステークする必要があります。

### **M1をFluxNodeに変換し、8GBのPiをFluxNodeに変換することはできますか？**

現時点では、Raspi 8GBはFluxによってサポートされていますが、外部SSDが必要であり、安定性が保証されないため、安定した機器の運用に影響を与える可能性があります。