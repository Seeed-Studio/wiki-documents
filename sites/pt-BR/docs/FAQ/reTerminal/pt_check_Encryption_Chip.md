---
description: reTerminal-FAQ
title: Como verificar se o chip de criptografia é ATECC608A-SSHDA-B ou ATECC608A-TNGTLSS-G
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /check_Encryption_Chip
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/check_Encryption_Chip/
---

<!-- Q14: Como verificar se o chip de criptografia é ATECC608A-SSHDA-B ou ATECC608A-TNGTLSS-G -->

| Data de Lançamento | Versão do CI de Criptografia |
|---|---|
| Antes de 09/03/2021 | ATECC608A-SSHDA-B |
| Setembro de 2021 - Janeiro de 2022 | ATECC608A-SSHDA-B ou ATECC608A-TNGTLSS-G |
| Após 02/01/2022 | ATECC608A-TNGTLSS-G |

Para verificar qual chip de criptografia, digite o comando ```i2cdetect -y 3``` no Terminal. Se você vir ```0x35``` na tabela de saída, então o reTerminal está equipado com o chip ATECC608A-TNGTLSS-G, caso contrário, está equipado com o ATECC608A-SSHDA-B.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>
