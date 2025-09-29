---
description: XIAO CAN Bus拡張ボード-FAQ
title: CAN busの通信問題をトラブルシューティングするにはどうすればよいですか？
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/troubleshoot_CAN_communication_issues
last_update:
  date: 6/30/2023
  author: cheng.tang
---

CAN bus通信で問題が発生した場合は、以下の手順でトラブルシューティングを行うことができます：

- CAN busネットワークの物理的な接続を確認し、正しい配線と終端処理がされていることを確認してください。
- ボーレート設定を確認し、CAN busに接続されているすべてのデバイスで一致していることを確認してください。
- CAN busアナライザーまたはターミナルソフトウェアを使用してCAN busトラフィックを監視し、送信されたメッセージのエラーや問題を特定してください。
- MCP2515コントローラーの適切な初期化と設定について、プログラムコードを再確認してください。
- XIAO開発ボードとCAN busネットワークへの電源供給が安定しており、指定された電圧範囲内にあることを確認してください。
- このFAQセクションでカバーされていない他の質問や問題がある場合は、お気軽に技術サポートチームにお問い合わせください。さらなるサポートを提供いたします。