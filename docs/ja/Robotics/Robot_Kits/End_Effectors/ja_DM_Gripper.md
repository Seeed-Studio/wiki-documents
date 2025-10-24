---
description: このwikiは、DM-4310-2ECモーターを使用した交換可能なグリッパーの開発を促進することを目的としています
title: DM_Gripper - デモ付き組み立てガイド
keywords:
  - DM_Gripper
  - DM-4310-2EC
  - 3Dプリントグリッパー
  - 交換可能グリッパー
  - ロボティクス 
image: https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.webp
slug: /ja/dm_gripper
last_update:
  date: 9/17/2025
  author: Ylson W
---

# DM_Gripper – オープンソース組み立てガイド

**DM_Gripper**は、**DM-4310-2ECモーター**を中心に設計されたオープンソースの**3Dプリント製ロボットグリッパー**です。そのモジュラー設計は組み立てと分解の容易さを重視し、ホビイストとロボティクス開発者の両方が**迅速にプロトタイプを作成、カスタマイズ、スケール**できるようにします。

**DAMIAOアクチュエーター**と完全に互換性があり、DM_Gripperは他のアクチュエーターブランドとの統合にも柔軟性を提供します。その独特な**交換可能クロウシステム**により、ユーザーは異なる形状のクロウを素早く交換でき、多様なロボットタスクと使用ケースをサポートします。

すべてのグリッパー部品は**完全に3Dプリント可能**で、最小限のサポート要件で、メーカー、研究者、エンジニアにとってアクセスしやすくなっています。

このwikiには以下が含まれます：

- メカニズム設計の概要
- 完全な部品表（BOM）
- 3Dプリントガイドとセットアップ
- ステップバイステップ組み立て手順
- デモと実用的な使用例

<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.jpg"/>  
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 寸法/動作範囲

寸法と動作範囲は以下にミリメートル単位で示されており、使用するクロウによって高さが変わります。
<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/Specs.png"/>  
</div>

## 駆動メカニズム

このグリッパーは古典的なデュアルクランク＆スライダーメカニズムを特徴とし、回転運動を軸方向運動に変換します。

- **クランク＆スライダーショーケース：**

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/SliderCrank_Mechanism.gif"
       alt="Crank slider mechanism" width="720" />
</div>

- **モーションシミュレーションショーケース**

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/gripper_mechanism_motion.mp4"
            type="video/mp4" />
  </video>
</div>

## BOM

#### 🔩 ファスナー

| 名前                                                   | 数量 |
|--------------------------------------------------------|----------|
| フィリップスパンヘッドスクリュー PM3×8                          | 8        |
| 六角穴付きキャップスクリュー M3×20                             | 4        |
| 六角穴付きキャップスクリュー M3×25                             | 6        |
| 六角穴付きキャップスクリュー M3×50                             | 8        |
| 六角穴付きキャップスクリュー M3×16                             | 12       |
| 304ナイロンロッキング六角セルフロッキングナット M3 (厚さ-3.9mm × 幅-5.5mm) | 18 |
| スプリングワッシャー – M3                                     | 4        |
| フラットワッシャー – M3×7mm (外径) × 0.5mm (厚さ)          | 8        |

#### ⚙️ ベアリング

| 名前                                                                 | 数量 |
|----------------------------------------------------------------------|----------|
| F3-8M ミニチュアスラストベアリング (内径-3mm × 外径-8mm × 厚さ-3.5mm)   | 4        |

#### 🛠️ リニアモーション

| 名前                                       | 数量 |
|--------------------------------------------|----------|
| ステンレス鋼リニアレール MGN9, 200 mm   | 1        |
| リニアレールキャリッジ MGN9C (標準)      | 2        |

#### 🔌 アクチュエーター

| 名前            | 数量 |
|-----------------|----------|
| DM4310-2ECモーター    | 1    |

#### 🧩 カスタムプリント品

| 名前             | 数量 |
|------------------|----------|
| **3Dプリント部品** |1セット |

## 組み立てガイド

### 3Dプリントガイド

- 専用サポート材料またはPETG+PLAを
  <a href="https://wiki.bambulab.com/en/ams/manual/ams-function-introduction" target="_blank"><b>AMS</b></a>
  に入れており、サポート面で最高の表面仕上げを求める場合は、
  <a href="https://wiki.bambulab.com/en/filament-acc/filament/h2d-pla-and-petg-mutual-support" target="_blank"><b>このWiki</b></a>を参照してください。
  *注意：プリントジョブに時間がかかる場合があります。*

- プリントするフィラメントが1つしかない場合は、正しい向きでプリントし、以下の手順が必要かどうかを決定してください（Bambu Studioで**ADVANCED**をオンにしてください）。

    :::warning
    PETGまたはABSを使用している場合は、Top Z距離を変更しないでください。デフォルトのままにしてください。PLAを使用する場合のみこれを変更してください。
    :::

  - ステップ1：最小限のサポートが必要なプリントレイアウト
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/PrintLayout.png"
        alt="Crank slider mechanism" width="720" />
    </div>

    <br/>

  - ステップ2：スカーフ設定により、緑の長方形でマークされた部分でより良い表面仕上げが得られます。
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/Scarf_Settings.png"
        alt="Crank slider mechanism" width="720" />
    </div>

    <br/>

  - ステップ3：私のプリント設定：0.2mmレイヤー高さ、25%インフィル密度、スタイル – 3Dハニカム。
    <p align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps1.png" alt="ps1" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps2.png" alt="ps2" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps3.png" alt="ps3" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps4.png" alt="ps4" height="500" hspace="5"/>
    </p>

### ステップバイステップ組み立てウォークスルー

- ステップ1：8本のM3×8マッシュルームヘッドスクリューでクロウホルダーをMGN9Cスライダーに固定する

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S1.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ2：ベアリング、ローター、リンケージを「ハンバーガー」スタイルで積み重ねる

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S2.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ3：スロットの上下に8個のM7ワッシャーを配置する

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S3.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ4：ワッシャーの上下に4個のナットを配置する

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S4.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ5：4組のM3×20スクリューとスプリングワッシャーをナットにねじ込む（必要に応じてプライヤーを使用）

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S5.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ6：ベースとアクチュエーターを所定の位置に配置する；ロータープレートとアクチュエーターのパターンが一致する必要がある

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S6.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ7：6本のM3×16スクリューでロータープレートをアクチュエーターに固定する

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S7.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ8：次のステップのためにクロウベースを最大範囲まで押し出す

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S8.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ9：カムホルダーを底部に取り付ける

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S9.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ10：4組のM3×25スクリューとナットでカムホルダーを固定する

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S10.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ11：6本のM3×16スクリューでベースを固定する（この段階でレールを引き出し、後でスライドして戻す）

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S11.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ12：2組のM3×50スクリューとナットを使用してレールをベースにロックする

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S12.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ13：レールプレッサーをスライドして挿入し、2組のM3×25スクリューとナットで固定する

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S13.mp4"
            type="video/mp4" />
  </video>
</div>

- ステップ14：クロウをクロウホルダーに配置し、6組のM3×50スクリューとナットで固定する

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S14.mp4"
            type="video/mp4" />
  </video>
</div>

## デモとCADファイル

- まだ設定していない場合は、[**Damiao Actuators Wiki**](https://wiki.seeedstudio.com/ja/damiao_series/)に従ってすべてを設定してください。
- [**トルクコントローラーデモ**](https://github.com/tianrking/DM_Gripper/tree/main)（**tianrkingに感謝**）に従って、クールなGUIでグリッパーを動かしてください。

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/DM_GripperController.gif"
       alt="Gripper Controller Demo" width="720" />
</div>

- CADリソース：編集可能なSTEPファイルとSTLは[**こちら**](https://github.com/YlsonDdb/DM_Gripper)で入手できます。
