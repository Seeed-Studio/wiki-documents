---
description: Seeed Physical AI 初級コース第3章 — 各ステージで必要となる実習用ハードウェア一覧。メイン制御ユニット、reBot Arm、カメラ、リーダーアーム、3Dプリント用マウントを含みます。
title: 第3章 - コース向けハードウェア選定
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Hardware
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_3
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 1 · 第3章 · 理論 &amp; 実践</span>
    <h2>3. 以降のコース向けハードウェア選定</h2>
    <p>
      Seeed Physical AI 初級コース第3章 — 各ステージで必要となる実習用ハードウェア一覧。
      メイン制御ユニット、reBot Arm、カメラ、リーダーアーム、
      および3Dプリント用マウントを含みます。
    </p>
    <div className="hero-actions">
      <a href="#main-control-unit">メイン制御ユニット</a>
      <a href="#stage-2">ステージ別ハードウェア</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>必要なもの</strong>
    <span>全章共通で使用するメイン制御デバイス（Ubuntu 推奨）。</span>
    <span>テレオペレーションのステージ用に reBot Arm B601（DM または RS）とリーダーアーム。</span>
    <span>ビジョンおよび模倣学習ステージ用のカメラと3Dプリント用マウント。</span>
  </div>
</section>

## 3.1 以降のコース向けハードウェア選定

<section id="hardware-selection" className="section-card">
  <div className="section-title">
    <span>ハードウェア</span>
    <h2>3.1 以降のコース向けハードウェア選定</h2>
  </div>

このセクションでは、各章で必要となる実習用ハードウェア一覧を紹介します。受講者は自分の状況に応じて購入してください。

コース全体を通して、自分のコンピュータをアルゴリズムのデプロイ用デバイスとして使用する必要があります。Ubuntu、Mac、あるいは Raspberry Pi や Jetson でも構いません。ただし、**Windows、WSL、仮想マシン上の Ubuntu は使用しないでください**。そうしないと、バグ対応に多大な労力を費やすことになり、学習効率が大きく低下します。

### メイン制御ユニット

すべての章で、コードのデプロイ先となるメイン制御デバイスが必要です。以下は推奨デバイスとシステムです：

| 必要なハードウェア | リンク | 数量 | 備考 | 対応章 |
| :--- | :--- | :---: | :--- | :--- |
| デスクトップまたはノート PC | - | 1 | Ubuntu 22.04 ネイティブ環境、GTX 4080 以上で 12GB 以上の VRAM、16GB 以上の RAM | 全章 |
| reComputer Robotics J4012 | [Bazaar](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 1 | - | ステージ 2、ステージ 3、ステージ 5、ステージ 6、ステージ 7 |
| NVIDIA Jetson AGX Thor 128G | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | - | ステージ 2、ステージ 3、ステージ 4、ステージ 5、ステージ 6、ステージ 7 |

### ステージ 2: ロボットアームのハードウェアと基本制御

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - DM/RS のいずれか一方を選択<br/>- 購入負担を軽減するため、部品のみのバージョンを購入することもできます。Seeed は非常に詳細で段階的な組立チュートリアルも提供しています。<br/>- Seeed が出荷する電源は難燃素材を使用しているため、価格がやや高くなっています。台湾 Mean Well 社の純正電源を自分で購入することも可能です。 |

### ステージ 3: 模倣学習と LeRobot

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - DM/RS のいずれか一方を選択<br/>- 購入負担を軽減するため、部品のみのバージョンを購入することもできます。Seeed は非常に詳細で段階的な組立チュートリアルも提供しています。<br/>- Seeed が出荷する電源は難燃素材を使用しているため、価格がやや高くなっています。台湾 Mean Well 社の純正電源を自分で購入することも可能です。 |
| reBot Arm 102 Leader Arm | [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html)<br/>[Power for leader arm](https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html) | 1 | - |
| 720P 単眼リストカメラ | [UVC Monocular Camera](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 2 | - |
| リストカメラマウント | [UVC32_mount.step](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/b601-camera-mounts/UVC32_mount.step) | 1 |  |
| Hikvision カメラ天吊りマウント | [Single Mount + Universal Ring + Live Overhead; Universal](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 1 | - |

### ステージ 4: VLA と Isaac Groot

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - DM/RS のいずれか一方を選択<br/>- 購入負担を軽減するため、部品のみのバージョンを購入することもできます。Seeed は非常に詳細で段階的な組立チュートリアルも提供しています。<br/>- Seeed が出荷する電源は難燃素材を使用しているため、価格がやや高くなっています。台湾 Mean Well 社の純正電源を自分で購入することも可能です。 |
| reBot Arm 102 Leader Arm | [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html)<br/>[Power for leader arm](https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html) | 1 | - |
| 720P 単眼リストカメラ | [UVC Monocular Camera](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 2 | - |
| リストカメラマウント | [UVC32_mount.step](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/b601-camera-mounts/UVC32_mount.step) | 1 |  |
| Hikvision カメラ天吊りマウント | [Single Mount + Universal Ring + Live Overhead; Universal](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 1 | - |

### ステージ 5: ロボットアームの数学とモーション制御

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - DM/RS のいずれか一方を選択<br/>- 購入負担を軽減するため、部品のみのバージョンを購入することもできます。Seeed は非常に詳細で段階的な組立チュートリアルも提供しています。<br/>- Seeed が出荷する電源は難燃素材を使用しているため、価格がやや高くなっています。台湾 Mean Well 社の純正電源を自分で購入することも可能です。 |

### ステージ 6: ロボットアームのビジョンと自律把持

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - DM/RS のいずれか一方を選択<br/>- 購入負担を軽減するため、部品のみのバージョンを購入することもできます。Seeed は非常に詳細で段階的な組立チュートリアルも提供しています。<br/>- Seeed が出荷する電源は難燃素材を使用しているため、価格がやや高くなっています。台湾 Mean Well 社の純正電源を自分で購入することも可能です。 |
| Realsense 435i または Orbbec Gemini2 深度カメラ または Realsense 405 ステレオカメラ | [Intel RealSense Depth Camera D435i](https://www.seeedstudio.com/Intel-RealSense-Depth-Camera-D435i-p-4423.html) | 1 | - |
| カメラ用リストマウント | [D435_Gemini2_Mount.step](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/b601-camera-mounts/D435_Gemini2_Mount.step)<br/>[D405_305_Mount.step](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/b601-camera-mounts/D405_305_Mount.step) | 1 |  |

### ステージ 7: ROS2 とロボットシステム統合

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - DM/RS のいずれか一方を選択<br/>- 購入負担を軽減するため、部品のみのバージョンを購入することもできます。Seeed は非常に詳細で段階的な組立チュートリアルも提供しています。<br/>- Seeed が出荷する電源は難燃素材を使用しているため、価格がやや高くなっています。台湾 Mean Well 社の純正電源を自分で購入することも可能です。 |

### ステージ 8: MuJoCo と Isaac Sim によるロボットアームシミュレーション

- 32GB RAM、4080 以上の GPU、Ubuntu 22.04 を備えたコンピュータが必要です。
- ロボットアームは仮想現実との同期に使用します。

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - DM/RS のいずれか一方を選択<br/>- 購入負担を軽減するため、部品のみのバージョンを購入することもできます。Seeed は非常に詳細で段階的な組立チュートリアルも提供しています。<br/>- Seeed が出荷する電源は難燃素材を使用しているため、価格がやや高くなっています。台湾 Mean Well 社の純正電源を自分で購入することも可能です。 |

</section>

</div>
