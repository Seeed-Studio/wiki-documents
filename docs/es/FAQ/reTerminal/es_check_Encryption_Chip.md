---
description: reTerminal-FAQ
title: Cómo verificar si el Chip de Cifrado es ATECC608A-SSHDA-B o ATECC608A-TNGTLSS-G
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/check_Encryption_Chip
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q14: Cómo verificar si el Chip de Cifrado es ATECC608A-SSHDA-B o ATECC608A-TNGTLSS-G -->

| Fecha de Lanzamiento | Versión del IC del Chip de Cifrado |
|---|---|
| Antes del 09/03/2021 | ATECC608A-SSHDA-B |
| Sept 2021 - Enero 2022 | ATECC608A-SSHDA-B o ATECC608A-TNGTLSS-G |
| Después del 02/01/2022 | ATECC608A-TNGTLSS-G |

Para verificar qué chip de cifrado por tipo, ejecuta el comando ```i2cdetect -y 3``` en la Terminal. Si ves ```0x35``` en la tabla de salida, entonces el reTerminal está equipado con el chip ATECC608A-TNGTLSS-G, de lo contrario está equipado con ATECC608A-SSHDA-B.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>