---
description: Fusion PCB サービス
title: Fusion PCB サービス
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Service_for_Fusion_PCB
last_update:
  date: 1/13/2023
  author: shuxu hu
---

[fusion PCB サービス](https://www.seeedstudio.com/fusion_pcb.html) を利用する前に、このページをよくお読みください。**価格はお選びいただいたオプションに基づいて計算されます。**

## PCB サービスについて

私たち自身もホビイストとして、地域の製造力を組織し、デザインをパネル化し、配送コストを削減し、品質を保証します。これは、他のサービスと共に私たちのスタジオを持続させるための源となります。

### Fusion PCB 注文手順

1. Fusion PCB 注文ページへアクセス: [https://www.seeedstudio.com/fusion_pcb.html](https://www.seeedstudio.com/fusion_pcb.html)  

2. Gerber ファイルをアップロードし、パラメータを選択します。  

3. チェックアウトして注文を支払います。  

ファイルと設計が要件を満たしていれば、4～6日で処理され出荷されます（中国の祝祭日を除く）。

### Gerber ファイル要件

**必要なレイヤーは以下の通りです：**

- Top layer: pcbname.GTL  
- Bottom layer: pcbname.GBL  
- Solder Stop Mask top: pcbname.GTS  
- Solder Stop Mask Bottom: pcbname.GBS  
- Silk Top: pcbname.GTO  
- Silk Bottom: pcbname.GBO  
- NC Drill: pcbname.TXT  
- 基板外形は少なくとも1つのレイヤーに含める必要があります。  

- Gerber ファイルは RS-274x フォーマットである必要があります。  

### PCB 設計のヒント

単一設計、パネル化不可

**注意：**

- Gerber ファイルには1つの設計のみを含める必要があります。  
- ドリルラインや長いスロットは受け付けられません。  
- 最小スロットサイズ: 1mm × 1mm  
- 添付ルールファイルに従った DRC 互換性が必要です。  
- PCB サイズは PCB を収められる最小の長方形となります。  

**選択可能な数量:** 10枚、50枚、100枚以上。  

最小数量は 5 枚からです。  

**注意:** 10枚以上注文する場合は、異なるオプションの価格を確認し、最も経済的なものを選んでください。  

**例:**  
PCB サイズ (50mm × 100mm) の場合、4 × 10枚のオプションは 1 × 50枚のオプションより高くなります。 

### Fusion PCB の仕様

- 多層基板: 最大 16 層

- PCB 材質: FR-4  

- 利用可能な色:  
  - ソルダーマスク: 緑、赤、黄、青、白、黒
  - シルクスクリーン: 白、黒（白マスク専用）

- フォント: 最小線幅 6mil、高さ 32mil。少し大きめが望ましい。

**選択可能な最大サイズ:** 50mm × 50mm、50mm × 100mm、50mm × 150mm、50mm × 200mm、100mm × 100mm、100mm × 150mm、100mm × 200mm、150mm × 150mm、150mm × 200mm、200mm × 200mm  

**注意:** PCB の寸法（縦横）は選択したサイズオプション内でなければなりません。  

**例:**  

- PCB 設計: 30mm × 60mm → オプション: 50mm × 50mm（不可）、50mm × 100mm（可）  

- PCB 設計: 101mm × 40mm → オプション: 100mm × 50mm（不可）、150mm × 50mm（可）  

- PCB 設計: 70mm × 70mm → オプション: 50mm × 150mm（不可）、100mm × 100mm（可）  

**基板厚みオプション:** 0.8mm、1.0mm、1.2mm、1.6mm、2.0mm  

（0.8mm、1.0mm、1.2mm、1.6mm の費用は同じ）  

**厚み許容差:**  

- (t ≥ 0.8mm): ±10%  
- (t < 0.8mm): ±10%  

**絶縁層の厚み:** 0.075mm ～ 5.00mm  

**最小ライン:** 6mil  
**最小スペース:** 6mil  

**外層銅厚:** 1oz (35um)  
**内層銅厚:** 17um ～ 100um  

**ドリル穴 (機械):** 0.3mm ～ 6.35mm  
**仕上げ穴 (機械):** 0.3mm ～ 6.30mm  
**直径許容差 (機械):** 0.08mm  
**位置精度 (機械):** 0.09mm  

**アスペクト比:** 8:1  

**ソルダーマスクタイプ:** 感光性インク  
**SMT 最小ソルダーマスク幅:** 0.1mm  
**最小ソルダーマスククリアランス:** 0.1mm  
**プラグ穴径:** 0.25 ～ 0.60mm  

**表面処理:** HASL、HASL (無鉛) +5USD、ENIG +10USD  

**E-テスト:** 50% e-test、100% e-test +10USD  

- 50% e-test (テスト済 PCB には PCB の端にマークあり)。  
- 100% e-test は追加 10USD で選択可能。  

**Eagle デザインルール:** [http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification](http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。スムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お好みに合わせて選べる複数のコミュニケーション手段をご用意しています。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
