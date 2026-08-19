---
description: Um tutorial prático para configurar o ambiente do código-fonte do firmware MeshCore, compilar o MeshTracker X1 e gravar o firmware.
title: Tutorial de Desenvolvimento com Código-Fonte do MeshCore
keywords:
  - MeshCore
  - Código-fonte
  - PlatformIO
  - MeshTracker X1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_meshtracker_x1
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/pt-br/meshcore_source_code_pratical_tutorial_meshtracker_x1/
createdAt: '2026-03-27'
updatedAt: '2026-07-31'
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

Após a instalação, um ícone em forma de formiga geralmente aparece na barra de ferramentas à esquerda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### Preparação do projeto

Abra uma pasta na qual você deseja ter o seu projeto. Abra a pasta no terminal. [Clique aqui](https://github.com/meshcore-dev/MeshCore) para clonar o projeto com git.

Abra o VSCode, clique no ícone do PlatformIO e escolha `select a folder`. Escolha a pasta em que você clonou o projeto.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

O PlatformIO instalará automaticamente as dependências necessárias. Após a instalação ser concluída com sucesso, você verá `Project has been successfully updated`


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:800, height:'auto'}}/></div>


## Desenvolvimento de firmware

### Tutorial de desenvolvimento

Encontre o ambiente para a sua placa de destino. Tome o T1000-E Bluetooth Companion como exemplo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000EBoard.jpg" style={{width:800, height:'auto'}}/></div>


Então o PlatformIO irá preparar as dependências necessárias para a placa.

Altere o seu código. Recomenda-se alterar o arquivo `variant.h` da sua placa.

Após concluir a codificação, execute o seguinte comando para compilar o código e convertê-lo em um arquivo uf2.

``` bash
pio run -e t1000e_companion_radio_ble
pio run -e t1000e_companion_radio_ble -t create_uf2
```

Pressione e segure o botão do dispositivo e, em seguida, conecte rapidamente o cabo de carregamento duas vezes; o LED verde ficará aceso continuamente. Arraste o arquivo uf2 para o disco que aparecer. O arquivo uf2 deve ser encontrado em `.pio\build\t1000e_companion_radio_ble`

### Exemplo

#### Controle da luz do usuário

Este exemplo mostra como controlar a luz do usuário para ficar constantemente ligada. Copie o código a seguir para `/examples/companion_radio/ui-new/ui-orig/UITask.cpp`

``` python
void UITask::userLedHandler() {
#ifdef PIN_STATUS_LED
#ifdef T1000_E
  // T1000-E: keep status LED continuously on.
  digitalWrite(PIN_STATUS_LED, LED_STATE_ON);
  return;
#endif
  static int state = 0;
  static int next_change = 0;
  static int last_increment = 0;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000ELight.jpg" style={{width:900, height:'auto'}}/></div>


Compile-o e grave o arquivo uf2 no seu T1000-E.

## (Avançado) Envio de PR

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
→ Basta abrir um pull request — não é necessário abrir uma issue antes

### Alterações maiores / novos recursos
1. Abra primeiro uma issue para discutir a ideia
2. Obtenha um sinal de positivo aproximado do(s) mantenedor(es)
3. Faça fork do repositório a partir do branch 'dev' e crie o seu branch (fix/xxx, feature/yyy, docs/whatever)
4. Faça suas alterações
5. Atualize ou adicione exemplos quando apropriado
6. Adicione/atualize comentários no código
7. Envie o pull request

### Diretrizes para Pull Request
- Um recurso / correção = um pull request (PRs menores são mais fáceis e rápidos de revisar)
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
- Constantes #define em ALL_CAPS
- Mantenha as linhas com < ~100 caracteres quando for razoável
(Mas a consistência com o código existente é mais importante do que regras rígidas)

## Suporte técnico e discussão sobre o produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>