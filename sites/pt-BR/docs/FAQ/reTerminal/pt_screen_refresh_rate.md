---
description: reTerminal && reTerminal DM-FAQ
title: Como resolver taxa de atualização de tela muito baixa
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /screen_refresh_rate_low
last_update:
  date: 7/2/2024
  author: Parker
createdAt: '2024-07-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/screen_refresh_rate_low/
---

<!-- ### Q17: How to solve screen refresh rate is too low -->

## Descrição do problema

A tela apresenta faixas de travamento perceptíveis na atualização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/DM_bug.gif" alt="pir" width={600} height="auto" /></p>

## Solução do problema

- **Passo 1.** Digite o seguinte comando no terminal.

```sh
sudo raspi-config
```

- **Passo 2.** Selecione `6 Advanced Options` e pressione Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/01.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Selecione `A9 Wayland` e pressione Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/02.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Selecione `Yes` e pressione Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/03.png" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Selecione `Ok` e pressione Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/04.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Selecione `Finish` e pressione Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/05.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Selecione reiniciar agora, selecione `Yes` e pressione Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/06.png" alt="pir" width={600} height="auto" /></p>

:::note
Se você estiver usando um sistema bullseye, alternar para o modo wayland pode desativar o seu software de login remoto VNC.
Se você estiver usando um sistema bookworm, você não terá esse problema.
:::