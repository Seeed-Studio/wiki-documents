---
description: reTerminal-常见问题解答
title: 如何检查加密芯片是 ATECC608A-SSHDA-B 还是 ATECC608A-TNGTLSS-G
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/check_Encryption_Chip
last_update:
  date: 2023/6/21
  author: Seraphina
---

<!-- Q14: 如何检查加密芯片是 ATECC608A-SSHDA-B 还是 ATECC608A-TNGTLSS-G -->

| 发布日期 | 加密芯片 IC 版本 |
|---|---|
| 2021年9月3日之前 | ATECC608A-SSHDA-B |
| 2021年9月至2022年1月 | ATECC608A-SSHDA-B 或 ATECC608A-TNGTLSS-G |
| 2022年2月1日之后 | ATECC608A-TNGTLSS-G |

要检查加密芯片的类型，请在终端中输入命令 ```i2cdetect -y 3```，如果在输出表中看到 ```0x35```，则说明 reTerminal 配备了 ATECC608A-TNGTLSS-G 芯片，否则配备的是 ATECC608A-SSHDA-B。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>