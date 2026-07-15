---
description: Um tutorial prático para configurar o ambiente do código‑fonte do firmware MeshCore, compilar o Tracker L1 e gravar o firmware.
title: Tutorial de Desenvolvimento do Código‑Fonte do MeshCore
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_l1
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/pt-br/meshcore_source_code_pratical_tutorial_l1/
createdAt: '2026-03-27'
updatedAt: '2026-04-02'
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

Abra uma pasta onde você deseja ter o seu projeto. Abra a pasta no terminal. [Clique aqui](https://github.com/meshcore-dev/MeshCore) para clonar o projeto com git.

Abra o VSCode, depois clique no ícone do PlatformIO, escolha `select a folder`. Escolha a pasta onde você clonou o projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png" style={{width:700, height:'auto'}}/></div>


O PlatformIO instalará automaticamente as dependências necessárias. Após a instalação ser concluída com sucesso, você verá `Project has been successfully updated`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:700, height:'auto'}}/></div>


## Desenvolvimento de firmware

### Tutorial de desenvolvimento

Encontre o ambiente para a sua placa alvo. Tome o L1 Pro companion como exemplo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/L1Board.jpg" style={{width:800, height:'auto'}}/></div>


Então o PlatformIO irá preparar as dependências necessárias para a placa.

Altere o seu código. É recomendado alterar o arquivo `variant.h` para a sua placa.

Após completar a codificação, execute o seguinte comando para compilar o código e convertê-lo em um arquivo uf2.

``` bash
pio run -e WioTrackerL1_companion_radio_ble
pio run -e WioTrackerL1_companion_radio_ble -t create_uf2
```

Em seguida, clique duas vezes no botão RST para entrar no modo DFU. Arraste o arquivo uf2 para o disco que aparecer. O arquivo uf2 deve ser encontrado em `.pio\build\WioTrackerL1_companion_radio_ble`

### Exemplo

#### Controle de exibição do usuário

Este exemplo mostra como modificar a interface de exibição do L1 Pro. Ele exclui a exibição de mensagens na tela, mostrando "Test" constantemente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Displayy.jpg" style={{width:500, height:'auto'}}/></div>

Copie o código a seguir para `/examples/companion_radio/ui-new/UITask.cpp`

``` python
 if (_page == HomePage::FIRST) {
      display.setColor(DisplayDriver::YELLOW);
      display.setTextSize(2);
      display.drawTextCentered(display.width() / 2, 20, "Test");
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/L1Display.jpg" style={{width:800, height:'auto'}}/></div>

Compile-o e grave o arquivo uf2 no seu L1 Pro.

## (Avançado) Antes de enviar PR

Obrigado por considerar contribuir para o projeto MeshCore! Como você pode contribuir?
**1. Reportar bugs**

- Use o rastreador de Issues
- Use um título claro (por exemplo, "Crash when calling begin() with invalid pin")
- Descreva exatamente as etapas para reproduzir
- Inclua sua placa, versão da IDE, versão da biblioteca e trecho de código relevante
- Anexe um sketch de exemplo mínimo e completo, se possível

**2. Sugerir melhorias / novos recursos**
- Abra uma issue com o prefixo [Feature request]
- Explique o caso de uso → que problema isso resolveria?
- Descreva sua API / comportamento ideal (exemplos de código são muito úteis)
**3. Enviar alterações de código (Pull Requests)**
### Pequenas correções 
(erros de digitação, comentários, exemplos, pequenas correções de bugs)
→ Basta abrir um pull request — não é necessário criar issue antes

### Alterações maiores / novos recursos
1. Abra primeiro uma issue para discutir a ideia
2. Obtenha um sinal positivo geral do(s) mantenedor(es)
3. Faça um fork do repositório a partir da branch 'dev' e crie a sua branch (fix/xxx, feature/yyy, docs/whatever)
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
- Novos recursos devem incluir um sketch de exemplo em examples/
### Estilo de código
Por favor, siga o estilo C++ existente (conforme o .clang-format)

- Recuo de 2 espaços (sem tabs)
- camelCase para funções e variáveis
- UpperCamelCase / PascalCase para nomes de classes
- Constantes `#define` em ALL_CAPS
- Mantenha as linhas com < ~100 caracteres quando possível
(Mas a consistência com o código existente é mais importante do que regras rígidas)
