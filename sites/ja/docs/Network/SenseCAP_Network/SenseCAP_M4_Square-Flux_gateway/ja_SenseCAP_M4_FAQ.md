---
description: SenseCAP M4 FAQ
title: SenseCAP M4 FAQ
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

# FAQ

### **ノードのFluxチェーン同期の平均時間はどのくらいですか？**

20GBのスナップショットファイルをダウンロードして読み込み、最新ブロックに追いつくためにチェーン同期に約1時間かかります。正確な同期時間はデバイスのネットワークに依存するため、デバイスが良好なネットワーク環境にあることを確認してください。

### **SenseCAP M4 SquareはNIMBUSとSTRATUSをサポートしていますか？**

**いいえ**、SenseCAP M4 SquareはCUMULUSのみをサポートしています。NIMBUSが必要な場合は[こちら](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)をクリックしてください。

### **ポートが開いているかどうかを確認する方法は？**

SenseCAP M4 SquareはFluxに必要なすべてのポートを開きます。SenseCAP Hotspot AppはUPNP検出を提供します。UPNPステータスがONの場合、ポートは開いています。ステータスがOFFの場合は、ルーターのUPNPを確認してください。詳細については、[Flux Node Network Setup](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)をご覧ください。

### **M4には静的IPが必要ですか？同じ外部IPで複数のSenseCAP M4 Squareを実行することは可能ですか？**

外部IPが必要です。

IP当たり最大8台のデバイスを実行でき、ルーターがUPnPまたはポートフォワードをサポートしていることを確認してください。

### **要求を満たすネットワーク帯域幅をテストする方法は？**

https://www.speedtest.net

### **fluxとflux tokensの違いは何ですか？**

Flux tokensはFluxです。Flux tokensは、ETH Flux、BSC Fluxなど、異なるブロックチェーンで支払われるParallel Assetsです。これらはZelcore内のFusionアプリで請求可能です。右上の3つの点から「Parallel Mining Claim」を選択してください。Flux-Tokenの金額が請求に必要な手数料よりも高い場合にのみ、請求可能な金額が表示されます。

### **プロフェッショナルユーザーの場合、元のシステムを消去して他のシステムをインストールできますか？**

これは推奨される操作ではありません。ただし、これはx86ベースのデバイスであり、任意のシステムを再インストールできますが、その前に何をしているかを理解していることを確認してください。

ただし、標準システムを消去すると保証が失われ、元のシステムに戻すことが困難になることを覚えておいてください。

### **電源プラグを自分で選ぶ必要がありますか？**

M4 Squareには広範囲入力電源アダプターが含まれており、US/AU/UK/EUプラグがあります。

### **外部アンテナが必要ですか？**

wifiアンテナはデバイス内部にあります。SenseCAP M4 Square-Fluxnodeには外部アンテナは必要ありません。

### **1000Fluxをステークする必要がありますか？**

**はい**、1000Fluxはハードウェアに含まれていないため、自分でステークする必要があります。

### **M1をFluxNodeに変換できますか？8GB Piを FluxNodeに変換できますか？**

現在、Raspi 8GBはFluxでサポートされていますが、外部SSDが必要であり、安定性は保証されません。これは安定したデバイス動作に影響を与える可能性があります。