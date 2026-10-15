---
description: AI コーディングエージェントを使って Reachy Mini アプリを構築するためのガイド。AI エージェントが SDK パターンとベストプラクティスを理解できるように、AGENTS.md ドキュメントを参照します。
title: お気に入りのエージェントで Vibe コーディング
slug: /reachymini_vibe-code-with-your-agent
keywords:
  - vibe coding
  - ai agent
  - claude code
  - copilot
  - agent
  - app building
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/ja/reachymini_vibe-code-with-your-agent/
---
# お気に入りのエージェントで Reachy Mini アプリを Vibe コーディングしよう 🤖

AI コーディングエージェント（Claude Code、Codex、Copilot など）を使っていますか？すぐにアプリ開発を始められます。
次のプロンプトをあなたのエージェントに貼り付けてください：

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md  I want my app to do [describe your app idea here].*

この AGENTS.md ガイドには、AI エージェントに必要なものがすべて含まれています：SDK パターン、ベストプラクティス、サンプルアプリ、そしてステップバイステップのスキル解説です。

## 具体的な手順

**1. エージェントにプロジェクトを分析させる**

エージェントツールを開き（ここでは Kimi Code を例にします）、次の2つのページにあるファイルとプロジェクトを分析させます：

例：https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md と  https://github.com/pollen-robotics/reachy_mini/tree/main の2つのページにあるプロジェクトとファイルを分析してください

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_1.webp" />
</div>

**2. ハードウェアのバージョンを伝えて開発を開始**

分析が完了したら、使用している Reachy Mini が有線版かワイヤレス版かを AI に伝え、プロジェクトの開発を始めてもらいます。

例：現在接続しているのは有線版です。姿勢矯正プロジェクトを作って、人の座り姿勢が悪いと認識されたときに音声で姿勢が悪いことを知らせるようにしてください。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_2.webp" />
</div>

**3. デーモンを起動**

AI がプロジェクトを完成させたら、ターミナルを開き、対応する仮想環境に入って次を実行します：

```bash
reachymini-mini-daemon
```

**4. スクリプトを実行**

別のターミナルを開き、AI が書いたスクリプトを実行すれば動作開始です。小さなバグがあったり、現在の内容に機能を追加したりしたい場合は、AI との会話を続けて修正を依頼できます。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_3.webp" />
</div>

これにより、AI を使ったロボット開発をすばやく行い、Reachy Mini アプリを作成・テスト・反復できます。さらに、世界中の人が使えるように Hugging Face アプリストアに公開することもできます！
