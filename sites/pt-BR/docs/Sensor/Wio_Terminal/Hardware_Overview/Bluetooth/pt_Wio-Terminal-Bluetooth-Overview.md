---
description: Visão geral
title: Visão geral do Bluetooth
keywords:
  - Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Bluetooth-Overview
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Bluetooth-Overview/
---

# Visão geral do Bluetooth

Este wiki apresenta como atualizar o firmware mais recente para o Wireless Core Realtek RTL8720 no Wio Terminal, bem como instalar todas as bibliotecas dependentes para que o Wio Terminal habilite a conectividade Bluetooth.

## Atualizar o firmware do Wireless Core

Siga [este guia](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Network-Overview/#atualizar-o-firmware-do-wireless-core) para atualizar o firmware do wireless core no Wio Terminal.

:::note
        Este firmware permite que Wi-Fi e Bluetooth funcionem ao mesmo tempo!
:::

## Atualizar o Seeed SAMD ArduinoCore

:::note
Atualize o **Seeed SAMD ArduinoCore para a versão mais recente (1.8.1)**!
:::

- **PASSO 1:** Abra a **Arduino IDE** e clique em `Tools` -> `Board` -> `Boards Manager`, e pesquise **Wio Terminal** na caixa de pesquisa

- **PASSO 2:** Certifique-se de que a versão mais recente (1.8.1) está instalada. Caso contrário, clique no menu suspenso `Select version`, selecione a versão mais recente e clique em `Install`

<p style={{textalign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> Você também pode encontrar o código-fonte do Seeed SAMD ArduinoCore [**aqui**](https://github.com/Seeed-Studio/ArduinoCore-samd).

## Instalação de bibliotecas

Existem algumas bibliotecas Arduino necessárias para a conectividade Bluetooth. Incluímos todas as bibliotecas relacionadas a wireless para o Wio Terminal no **Arduino Library Manager**. Portanto, você só precisa abrir o Arduino Library Manager dentro da Arduino IDE, procurar as bibliotecas de que precisa e instalá-las facilmente!

### Como instalar uma biblioteca a partir do Arduino Library Manager

- **PASSO 1:** Abra a **Arduino IDE** e clique em `Sketch` -> `Include Library` -> `Manage Libraries...`

- **PASSO 2:** Digite o **nome da biblioteca** de que precisamos e selecione a **versão mais recente** no menu suspenso (se disponível)

- **PASSO 3:** Clique em **Install**

<p style={{textalign:  'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### Bibliotecas necessárias para Bluetooth

Precisamos das seguintes bibliotecas para começar com Bluetooth no Wio Terminal. Você pode procurar essas bibliotecas digitando o nome da biblioteca na caixa de pesquisa do Arduino Library Manager.

- [**Seeed_Arduino_rpcBLE**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) - pesquise por `"seeed rpcble"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - pesquise por `"seeed rpcunified"`
