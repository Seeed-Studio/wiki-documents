---
description: reTerminal-FAQ
title: 暗号化チップがATECC608A-SSHDA-BかATECC608A-TNGTLSS-Gかを確認する方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/check_Encryption_Chip
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q14: 暗号化チップがATECC608A-SSHDA-BかATECC608A-TNGTLSS-Gかを確認する方法 -->

| リリース日 | 暗号化チップICバージョン |
|---|---|
| 2021年09月03日以前 | ATECC608A-SSHDA-B |
| 2021年9月 - 2022年1月 | ATECC608A-SSHDA-BまたはATECC608A-TNGTLSS-G |
| 2022年02月01日以降 | ATECC608A-TNGTLSS-G |

どの暗号化チップかを確認するには、ターミナルで ```i2cdetect -y 3``` コマンドを実行してください。出力テーブルに ```0x35``` が表示されている場合、reTerminalにはATECC608A-TNGTLSS-Gチップが搭載されており、そうでなければATECC608A-SSHDA-Bが搭載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>