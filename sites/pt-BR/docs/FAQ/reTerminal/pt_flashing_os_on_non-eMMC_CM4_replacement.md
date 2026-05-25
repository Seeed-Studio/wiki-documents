---
description: reTerminal-FAQ
title: Como gravar o sistema operacional se eu substituir o CM4 pela versão sem eMMC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /flashing_os_on_non-eMMC_CM4_replacement
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/flashing_os_on_non-eMMC_CM4_replacement/
---


<!-- Q4: How can I flash OS if I replace the CM4 with non-eMMC version -->

Se você quiser usar um Compute Module 4 sem eMMC no reTerminal, será necessário inserir um micro‑SD e gravar o sistema operacional de sua escolha. Siga as etapas abaixo de acordo com o seu sistema operacional.

- **Passo 1.** Insira um cartão micro‑SD no computador usando um **leitor de cartão micro‑SD** conectado ao computador ou usando um **leitor de cartão integrado** em um notebook

- **Passo 2.** Baixe o software **Raspberry Pi Imager** acessando [este link](https://www.raspberrypi.org/software/)

:::note
Você pode optar por baixar para **Windows, Mac ou Ubuntu**
:::

- **Passo 3.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir configurações de localidade** e muito mais

- **Passo 5.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

:::note
Você pode selecionar sistemas como **64-bit Ubuntu** navegando até **Other general purpose OS**
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 6.** Clique em **CHOOSE STORAGE** e selecione o cartão micro‑SD conectado

- **Passo 7.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 8.** Ejete o cartão micro‑SD do computador e insira-o no reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**Nota:** Você precisa abrir o gabinete do reTerminal para acessar o slot do cartão micro‑SD
