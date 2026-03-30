---
description: Um tutorial prático para configurar o ambiente do código-fonte do firmware MeshCore, compilar o nó solar e gravar o firmware.
title: Tutorial de Desenvolvimento do Código-Fonte do MeshCore
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_solar_node
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/pt-br/meshcore_source_code_pratical_tutorial_solar_node/
createdAt: '2026-03-27'
updatedAt: '2026-03-27'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pré-requisitos

### Ferramenta necessária

Antes de começar, prepare as seguintes ferramentas:

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### Instalar o PlatformIO

Pesquise por `PlatformIO` no marketplace de Extensões do VS Code e instale-o.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

Após a instalação, normalmente um ícone em forma de formiga aparece na barra de ferramentas à esquerda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### Preparação do projeto

Abra uma pasta onde você deseja colocar seu projeto. Abra a pasta no terminal. [Clique aqui](https://github.com/meshcore-dev/MeshCore) para clonar o projeto com git.

Abra o VSCode, clique no ícone do PlatformIO e escolha `select a folder`. Escolha a pasta em que você clonou o projeto.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

O PlatformIO instalará automaticamente as dependências necessárias. Após a instalação ser concluída com sucesso, você verá `Project has been successfully updated`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## Desenvolvimento de firmware

### Tutorial de desenvolvimento

Encontre o ambiente para a sua placa de destino. Tome o repetidor de nó solar como exemplo:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

Então o PlatformIO irá preparar as dependências necessárias para a placa.

Altere seu código. Recomenda-se alterar o arquivo `variant.h` da sua placa.

Após concluir a codificação, execute o seguinte comando para compilar o código e convertê-lo em um arquivo uf2.

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

Em seguida, clique duas vezes no botão RST para entrar no modo DFU. Arraste o arquivo uf2 para o disco que aparecer.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/Dragin.png)

### Exemplo

#### Controle da luz do usuário

Este exemplo mostra como escrever um loop de piscar para a luz do usuário. Copie o seguinte código para `/examples/simple_repeater/main.cpp`

``` python
#endif
#ifdef LED_WHITE
static void updateUserLightBlink() {
  static unsigned long lastLedPhaseChangeAt = 0;
  static bool lightIsOn = true;

  const unsigned long now = millis();
  if ((unsigned long)(now - lastLedPhaseChangeAt) >= 5000) {
    lightIsOn = !lightIsOn;
    lastLedPhaseChangeAt = now;
  }

  digitalWrite(LED_WHITE, lightIsOn ? LED_STATE_ON : !LED_STATE_ON);
}
```

e escreva o loop:

``` python
#ifdef LED_WHITE
  updateUserLightBlink();
#endif
```

Compile-o e grave o arquivo uf2 no seu nó solar.