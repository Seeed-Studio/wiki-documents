---
description: reTerminal-FAQ
title: How to check if the Encryption Chip is ATECC608A-SSHDA-B or ATECC608A-TNGTLSS-G
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /check_Encryption_Chip
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q14: How to check if the Encryption Chip is ATECC608A-SSHDA-B or ATECC608A-TNGTLSS-G -->

| Released Date | Encryption Chip IC Version |
|---|---|
| Before 09/03/2021 | ATECC608A-SSHDA-B |
| Sept 2021 - January 2022 | ATECC608A-SSHDA-B or ATECC608A-TNGTLSS-G |
| After 02/01/2022 | ATECC608A-TNGTLSS-G |

To check which Encryption chip by type  ```i2cdetect -y 3``` command in Terminal, If you see ```0x35``` in the output table then the reTerminal is equipped with ATECC608A-TNGTLSS-G chip, otherwise it is equipped with ATECC608A-SSHDA-B.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>
