---
description: reTerminal-FAQ
title: Como ativar o LCD do reTerminal após o modo de suspensão
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wakeup_reTerminal_LCD_after_sleep
last_update:
  date: 12/16/2024
  author: Joshua Lee
createdAt: '2023-06-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Wakeup_reTerminal_LCD_after_sleep/
---

<!-- Q6:I cannot wake up the reTerminal LCD after sleep -->

Desde o commit [github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b](https://github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b), a correção para esse problema foi integrada ao driver, portanto você não precisa executar etapas adicionais manualmente

Para versões anteriores, considere reinstalar o driver a partir de [github.com/Seeed-Studio/seeed-linux-dtoverlays](https://github.com/Seeed-Studio/seeed-linux-dtoverlays). Veja [Instalar drivers do reTerminal após gravar o novo Raspbian OS](/pt-br/reterminal-dm-flash-OS/#Instalar-drivers-do-reTerminal-após-gravar-o-novo-Raspbian-OS) para etapas detalhadas.
