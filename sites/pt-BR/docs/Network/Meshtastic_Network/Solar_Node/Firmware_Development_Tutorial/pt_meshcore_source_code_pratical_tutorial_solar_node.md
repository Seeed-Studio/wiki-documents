---
description: Um tutorial prático para configurar o ambiente do código‑fonte do firmware MeshCore, compilar o nó solar e gravar o firmware.
title: Tutorial de Desenvolvimento do Código-Fonte do MeshCore
keywords:
  - MeshCore
  - Código-Fonte
  - PlatformIO
  - Nó Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_solar_node
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/pt-br/meshcore_source_code_pratical_tutorial_solar_node/
createdAt: '2026-03-27'
updatedAt: '2026-04-02'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pré-requisitos

### Ferramenta Necessária

Antes de começar, prepare as seguintes ferramentas:

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### Instalar o PlatformIO

Pesquise por `PlatformIO` no marketplace de Extensões do VS Code e instale-o.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

Após a instalação, um ícone em forma de formiga geralmente aparece na barra de ferramentas à esquerda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### Preparação do Projeto

Abra uma pasta onde você quer colocar seu projeto. Abra a pasta no terminal. [Clique aqui](https://github.com/meshcore-dev/MeshCore) para dar git clone no projeto.

Abra o VSCode, depois clique no ícone do PlatformIO, escolha `select a folder`. Escolha a pasta na qual você fez o clone do projeto.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

O PlatformIO instalará automaticamente as dependências necessárias. Após a instalação bem-sucedida, você verá `Project has been successfully updated`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## Desenvolvimento do Firmware

### Tutorial de Desenvolvimento

Encontre o ambiente para sua placa de destino. Tome o repetidor de nó solar como exemplo:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

Então o PlatformIO preparará as dependências necessárias para a placa.

Altere seu código. Recomenda-se alterar o arquivo `variant.h` da sua placa.

Depois de completar a codificação, execute o comando a seguir para compilar o código e convertê-lo em arquivo uf2.

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

Em seguida, clique duas vezes no botão RST para entrar no modo DFU. Arraste o arquivo uf2 para o disco que aparecer. O arquivo uf2 deve ser encontrado em `.pio\build\SenseCap_Solar_repeater`

### Exemplo

#### Controle da Luz do Usuário

Este exemplo mostra como escrever um loop de piscar para a luz do usuário. Copie o código a seguir para `/examples/simple_repeater/main.cpp`

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

## (Avançado) Antes de Enviar PR

Obrigado por considerar contribuir para o projeto MeshCore! Como você pode contribuir?
**1. Reportando Bugs**

- Use o rastreador de Issues
- Use um título claro (por exemplo, "Crash when calling begin() with invalid pin")
- Descreva exatamente os passos para reproduzir
- Inclua sua placa, versão da IDE, versão da biblioteca e trecho de código relevante
- Anexe um exemplo mínimo completo, se possível

**2. Sugerindo Melhorias / Novos Recursos**
- Abra uma issue com o prefixo [Feature request]
- Explique o caso de uso → que problema isso resolveria?
- Descreva sua API / comportamento ideal (exemplos de código ajudam bastante)
**3. Enviando Mudanças de Código (Pull Requests)**
### Pequenas correções 
(erros de digitação, comentários, exemplos, pequenas correções de bugs)
→ Basta abrir um pull request — não é necessário criar issue antes

### Mudanças maiores / novos recursos
1. Abra primeiro uma issue para discutir a ideia
2. Obtenha um sinal positivo geral do(s) mantenedor(es)
3. Faça fork do repositório a partir do branch 'dev' e crie seu branch (fix/xxx, feature/yyy, docs/whatever)
4. Faça suas alterações
5. Atualize ou adicione exemplos quando apropriado
6. Adicione/atualize comentários no código
7. Envie o pull request

### Diretrizes para Pull Request
- Uma funcionalidade / correção = um pull request (PRs menores são mais fáceis e rápidos de revisar)
- Use mensagens de commit descritivas
  Bom: Fix I2C timeout handling on ESP32
  Ruim: update
- Faça referência a qualquer issue relacionada (Fixes #123, Closes #89, etc.)
- Se você alterar a API pública, atualize README.md e library.properties
- Novos recursos devem incluir um exemplo em examples/
### Estilo de Código
Por favor, siga o estilo C++ existente (de acordo com o .clang-format)

- Recuo de 2 espaços (sem tabs)
- camelCase para funções e variáveis
- UpperCamelCase / PascalCase para nomes de classe
- Constantes com #define em ALL_CAPS
- Mantenha as linhas com < ~100 caracteres quando possível
(Mas a consistência com o código existente é mais importante do que regras rígidas)
