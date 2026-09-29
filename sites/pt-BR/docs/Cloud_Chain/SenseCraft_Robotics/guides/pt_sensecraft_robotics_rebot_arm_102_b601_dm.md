---
title: Guia de Treinamento reBot Arm 102 + B601 DM
description: Configure o reBot Arm 102 + B601 DM com o SenseCraft Robotics, conecte e calibre os braços, colete demonstrações, treine um modelo e valide a inferência.
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 DM
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_dm
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

Este tutorial usa o reBot Arm 102 (braço líder) e o B601 DM (braço seguidor) com o SenseCraft Robotics para apresentar o fluxo de trabalho completo, desde a criação do projeto e configuração do dispositivo até a coleta de dados, treinamento do modelo e operação.
A tarefa de exemplo neste guia é pegar um objeto no Ponto A e colocá-lo no Ponto B. Ela é fornecida apenas para ilustração; os usuários podem projetar cenários de aplicação de acordo com suas necessidades, como classificação, manuseio, encaixotamento, pressionar botões ou conectar e desconectar.

![Exemplo de tarefa de pick-and-place com braço DM](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp)

> **Nota de versão**
> Nomes de interfaces, localizações de botões e backends de treinamento podem mudar entre versões do SenseCraft Robotics. Números de porta serial (como COM21, COM35, COM3 e COM6) e nomes de conjuntos de dados neste guia são exemplos retirados de um vídeo. Sempre use os dispositivos detectados pelo seu computador atual.

## Visão Geral do Tutorial

Este tutorial é organizado na ordem de configuração de hardware e operação de software para ajudar você a configurar rapidamente os braços e treinar um modelo:

| Capítulo | Etapa | Conteúdo principal |
| :--- | :--- | :--- |
| Capítulo 1 | **Preparação** | Lista de hardware, requisitos de computador e software, verificações de cena e segurança |
| Capítulo 2 | **Conectar os braços** | Montagem física e conexões de cabos para os braços líder e seguidor |
| Capítulo 3 | **Treinamento de software** | **Fluxo de trabalho principal**: configuração do dispositivo ➔ coleta de dados ➔ treinamento do modelo ➔ implantação e operação |



<span id="preparation"></span>

## 1. Preparação

### 1.1 Hardware

![Lista de hardware](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-1-hardware-list-dm-en.webp)

> Os braços devem estar montados, fixados, alimentados e conectados via USB. Se a montagem não estiver concluída, consulte [Etapa 1: Montar o braço](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/#%E7%AC%AC%E4%B8%80%E6%AD%A5%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82).

#### Braços

| Categoria | Líder: reBot Arm 102 | Seguidor: B601 DM |
|---|---|---|
| Braço | reBot Arm 102 ×1  🔗[Buy now](https://www.seeedstudio.com/Star-Arm-102-p-6765.html?utm_source=sensecraft_wiki&utm_medium=socil) | Kit reBot Arm B601-DM montado (versão com garra montada e fonte de alimentação) ×1   🔗[Buy now](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html?utm_source=sensecraft_wiki&utm_medium=socil) |
| Fonte de alimentação | Adaptador de energia 12 V / 2 A ×1    | Fonte de alimentação 24 V / 15 A e cabo de alimentação ×1   |
| Cabo de dados | Cabo de dados USB-C ×1 | Cabo de dados USB-C ×1 |
| Componentes de comunicação e alimentação | — | Placa driver USB-CAN ×1 <br />Placa de separação de sinal/alimentação ×1 |
| Outros cabos | — | Cabo JST de 2 pinos ×1<br />Cabo JST de 3 pinos ×1<br />Cabo XT30 2+2 ×1 |
| Ferramentas de fixação | Grampo em G ×2 | Grampo em G ×2  |

#### Câmeras

São necessárias duas câmeras: uma para a visão superior e outra para a visão lateral ou visão da garra.

<table>
  <thead>
    <tr>
      <th>Câmera</th>
      <th>Câmera de visão superior</th>
      <th>Câmera de visão lateral</th>
      <th>Câmera da garra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Quantidade</td>
      <td>1</td>
      <td colspan="2">Escolha a câmera de <em>visão lateral</em> ou de <em>garra</em></td>
    </tr>
    <tr>
      <td>Suporte</td>
      <td>Suporte de visão superior ×1</td>
      <td>Suporte de mesa pequeno ×1</td>
      <td>Suporte impresso em 3D ×1</td>
    </tr>
  </tbody>
</table>

**Opções de câmera**: No macOS ou Windows, escolha qualquer uma das combinações a seguir. Recomendamos conectar as câmeras diretamente às portas USB do computador em vez de usar um hub ou dock USB.

| Opção | Câmera USB Hikvision | Webcam Logitech C270 HD | Desempenho de coleta |
|:---|:---|:---|:---|
| Opção1 | 1 | 1 | Mais estável; suporta coleta a 120 FPS |
| Opção2 | ❌ | 2 | Estável; suporta todas as taxas de quadros de coleta |
| Opção3 | 2 | ❌ | Mantenha a taxa de quadros em ou abaixo de 60 FPS; a coleta a 120 FPS não é suportada e problemas de compatibilidade podem ocorrer em alguns casos |


### 1.2 Computador e Software

- Computador Windows ou macOS (treinamento local requer uma GPU compatível)
- Conexão de rede estável (para download, login, treinamento em nuvem e inferência)
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) instalado
- Uma [conta SenseCraft](https://account.seeed.cc/login) registrada, conectada dentro do SenseCraft Robotics


Para instruções detalhadas, consulte [Download de software e configuração de conta](/pt-br/sensecraft_robotics/#download-e-configuração-de-conta).

### 1.3 Cena e Segurança

- Marque duas posições fixas na mesa: Ponto A para a posição inicial do objeto e Ponto B para o destino.
- Prepare um objeto de tamanho adequado e fácil de agarrar, como um bloco vermelho ou um objeto macio.
- Certifique-se de que o Ponto A, o Ponto B, ambos os braços e o objeto estejam dentro do campo de visão das câmeras e não estejam obstruídos.
- Limpe a área de trabalho dos braços de pessoas, bagunça, cabos e objetos frágeis. Ajuste o braço líder para que ele não se aproxime do braço seguidor nem apareça na visão da câmera do seguidor.

![Exemplo de cena e segurança](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-3-scene-and-safety-dm-en.webp)


<span id="connect-arms"></span>

## 2. Conectar os Braços

> **Aviso de segurança:**
> Desconecte a alimentação antes de conectar ou desconectar cabos JST, XT30 ou outros cabos. Ligue a alimentação somente depois de confirmar que todos os cabos estão conectados corretamente.
> B601 RS e B601 DM são semelhantes. Certifique-se de distingui-los.


### 2.1 Montar e Conectar o reBot Arm 102 (Braço Líder)



#### Etapa 1: Montar o reBot Arm 102

Use grampos de marcenaria para fixar o reBot Arm 102 em uma superfície de mesa plana. Empurre suavemente a base para confirmar que ela não se move.

#### Etapa 2: Conectar os Cabos

![Montagem e conexão do reBot Arm 102 (braço líder)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)


As conexões consistem em dois caminhos:

* **Caminho de sinal (braço -> cabo USB-C -> computador)**
  1. Prepare um cabo USB-C para conectar o braço ao computador (**ainda não o conecte ao computador; conecte quando chegar à vinculação da porta serial e à varredura de dispositivos**).

* **Caminho de alimentação (braço -> adaptador de energia 12 V 2 A -> régua de energia -> ligar)**
  1. Conecte o **adaptador de energia 12 V 2 A** ao conector de alimentação do braço.
  2. Conecte o adaptador à régua de energia para ligar o braço.


### 2.2 Montar e Conectar o B601 DM (Braço Seguidor)

![Conexão de cabos do B601 DM](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-2-follower-wiring-overview-dm-en.webp)

#### Etapa 3: Montar o B601 DM

Use grampos em G para fixar o B601 DM em uma superfície de mesa estável e plana. Depois de fixá-lo, gire suavemente o braço para a esquerda e para a direita para confirmar que a base não se move.

#### Etapa 4: Conectar os Cabos

Certifique-se de que a alimentação esteja desconectada antes de começar. As conexões consistem em dois caminhos:

* **Caminho de sinal (braço -> placa de separação de sinal/alimentação -> placa driver USB-CAN -> computador)**
  1. Use um cabo XT30 2+2 para conectar o primeiro motor na base à placa de separação de sinal/alimentação.
  2. Use o cabo JST de 2 pinos para conectar a placa de separação de sinal/alimentação à placa driver USB-CAN.
  3. Use o cabo JST de 3 pinos para conectar o primeiro motor na base à placa driver USB-CAN (este é um cabo de depuração e pode ser deixado desconectado).
  4. Prepare um cabo de dados USB-C para conectar a placa driver USB-CAN ao computador (**ainda não o conecte ao computador; conecte quando chegar à vinculação da porta serial e à varredura de dispositivos**).

* **Caminho de alimentação (braço -> placa de separação de sinal/alimentação -> adaptador de energia 24 V -> tomada -> ligar)**
  1. Use um cabo XT30 2+2 para conectar o primeiro motor na base à placa de separação de sinal/alimentação.
  2. Conecte a placa de separação de sinal/alimentação ao **adaptador de energia 24 V**.
  3. Conecte o adaptador de energia à tomada. Depois de confirmar que o braço está fixado, os cabos estão corretos e a área ao redor está livre, ligue a alimentação.

![Conectando o B601 DM (braço seguidor)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-2-connect-follower-dm-en.webp)



<span id="project"></span>

## 3. Projeto

Após fazer login, abra a página **Projects**. Crie um novo projeto no primeiro uso ou abra um projeto existente. Em um projeto, a **Project Overview** fornece acesso à configuração de dispositivos, reprodução de ações, conjuntos de dados, treinamento, modelos e operação.

| Operação | Etapas |
|---|---|
| Criar um projeto | Clique em **New Project** → insira o nome e a descrição do projeto → clique em **Create and Start** |
| Abrir um projeto existente | Selecione um projeto na lista de projetos → abra o projeto |

![Janela de novo projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-create-project-dm-en.webp)


### 3.1 Visão Geral do Projeto

**Project Overview** exibe o status atual do projeto, incluindo conexão dos braços, configuração de dispositivos, conjunto de dados, treinamento, modelo e status de operação.

Se a página mostrar **Pending configuration** ou **Not connected**, clique em **Go to Device Setup** para configurar os braços.

![Visão geral do projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-1-device-selection-dm-en.webp)



<span id="device-setup"></span>

### 3.2 Configuração de Dispositivo

Configuração de Dispositivo é usada para seleção de dispositivo, vinculação de porta serial, calibração dos braços, verificação de teleoperação e configuração de câmeras.

#### 3.2.1 Selecionar o Modelo de Dispositivo

Na etapa **Device Pairing**, selecione **reBot Arm 102 + B601 DM** e clique em **Next** para vincular as portas seriais.

![Selecionar reBot Arm 102 + B601 DM](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-1-device-pairing-dm-en.webp)


#### 3.2.2 Vincular as Portas Seriais USB dos Braços Líder e Seguidor

1. **Varredura inicial**: Desconecte os cabos USB de ambos os braços, clique em **Rescan** e anote as portas seriais exibidas no momento.
2. **Vincular o braço líder**: Conecte o reBot Arm 102 (braço líder), clique em **Rescan** novamente e vincule a nova porta serial detectada ao braço líder.
3. **Vincular o braço seguidor**: Conecte o B601 DM (braço seguidor), clique em **Rescan** novamente e vincule a nova porta serial detectada ao braço seguidor.
4. Confirme que ambos os braços exibem **Connected** e clique em **Next**.

![Vincular as portas seriais para os braços líder e seguidor](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-2-serial-binding-dm-en.webp)

> **Vinculação da porta serial e solução de problemas:**
> - Após cada varredura, vincule apenas a porta serial recém-detectada. Não identifique um dispositivo apenas pelo seu número de COM.
> - Se uma porta serial não for exibida, reconecte o cabo USB e faça a varredura novamente. Se apenas uma porta serial for exibida, verifique o outro cabo USB e a alimentação do dispositivo.


#### 3.2.3 Verificação da Calibração do Braço

1. Siga o exemplo na tela para posicionar os braços líder e seguidor em suas poses iniciais e confirme que a área de trabalho está livre.
2. Clique em **Start Calibration** e, em seguida, siga as instruções na tela para concluir o zeramento do braço líder, o zeramento do braço seguidor e a conclusão da calibração.
3. Se as poses dos braços forem inconsistentes ou a calibração falhar, clique em **Recalibrate** e não prossiga para as próximas etapas.

![Verificação da calibração do braço](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)

> Não execute teleoperação ou coleta de dados antes que a calibração seja concluída.

#### 3.2.4 Verificação da Teleoperação

A verificação da teleoperação confirma que o braço seguidor segue corretamente o braço líder. Se a direção estiver invertida, o atraso for excessivo ou o movimento for descontínuo, verifique as funções dos dispositivos, a vinculação da porta serial e o resultado da calibração.

1. Clique em **Start Teleoperation**.
2. Mova o braço líder em uma pequena faixa e observe se o braço seguidor se move de forma síncrona, na mesma direção e de maneira suave.
3. Após concluir a verificação, clique em **End Teleoperation** e selecione uma opção com base no resultado:
   - **Normal**: Clique em **Confirm Teleoperation Normal**.
   - **Abnormal**: Clique em **Abnormal, Return to Recalibrate**.

![Verificação da teleoperação](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)

> **Compensação de gravidade (opcional)**
> O braço tem certo peso, portanto ajustar manualmente o braço seguidor pode exigir esforço. Quando a compensação de gravidade está ativada, o sistema compensa parte do peso e torna o braço seguidor mais fácil de mover. Após o ajuste, desligue a compensação de gravidade antes de realizar a verificação da teleoperação.
> A compensação de gravidade serve para ajustar o braço seguidor; ela não é usada para controlar o braço seguidor durante a operação líder-seguidor.


#### 3.2.5 Vincular as Câmeras

As câmeras registram informações visuais enquanto o braço executa uma tarefa. A seguir estão dois layouts de câmera comuns:

| Layout | Instalação e finalidade | Cenários adequados | Ilustração |
|:---|:---|:---|:---|
| Visão do gripper<br /> | <small><strong>Câmera de visão superior</strong>: Instale-a acima da parte frontal da mesa de trabalho para cobrir a área de trabalho.<br /><br /><strong>Câmera do gripper</strong>: Instale-a próxima ao gripper para observar detalhes da preensão.</small> | <small>Operações finas que exigem observar o contato entre o gripper e o objeto.</small> | ![Layout de visão do gripper](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-eye-in-hand-dm-en.webp)<br /><small>*Observação: você pode projetar o suporte da câmera 3D por conta própria.</small> |
| Assistência de visão lateral<br /> | <small><strong>Câmera de visão superior</strong>: Instale-a acima da parte frontal da mesa de trabalho para cobrir a área de trabalho.<br /><br /><strong>Câmera de visão lateral</strong>: Instale-a na parte frontal lateral da mesa de trabalho para observar a altura do braço e o movimento do gripper.</small> | <small>Tarefas de pegar e colocar, manuseio e posicionamento.</small> | ![Layout de assistência de visão lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-eye-to-hand-dm-en.webp) |

Este tutorial usa o layout de **assistência de visão lateral**. Após instalar e posicionar as câmeras:

1. Conecte as câmeras ao computador e clique em **Rescan**.
2. Selecione os fluxos de vídeo correspondentes nas seções **Top-view camera** e **Side-view camera**.
3. Verifique ambas as janelas de pré-visualização para confirmar que os braços, o objeto e as posições de destino estão claramente visíveis. Clique em **Next** após confirmar a configuração.

![Vincular as câmeras de visão superior e visão lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-camera-binding-dm-en.webp)

> Para confirmar que cada câmera corresponde à sua posição de instalação, clique em **View Camera Layout**. Se uma pré-visualização estiver preta ou anormal, faça uma nova varredura, reinicie a câmera ou use outra porta USB.


<span id="action-replay"></span>

### 3.3 Reprodução de Ações

**Action Replay** registra os movimentos do braço por meio do ensino com o braço líder e os salva na lista de ações para reprodução. Após a gravação, verifique se o movimento é contínuo e se a direção do movimento e a abertura e o fechamento do gripper estão normais.

| Função | Operação | Finalidade |
|---|---|---|
| Gravar uma ação | Clique em **+** para criar uma ação → use o braço líder para controlar o braço seguidor e concluir a tarefa → clique em **Stop Recording** → salve | Registrar ações-alvo como pegar, mover e colocar |
| Reproduzir uma ação | Clique em **Replay** | Verificar se a ação está completa e contínua e confirmar a direção do movimento e a abertura e o fechamento do gripper |

> Antes de gravar uma ação pela primeira vez, conclua a conexão do dispositivo e a verificação da teleoperação em **Device Setup** e clique em **Confirm Teleoperation Normal**. Se a reprodução estiver anormal, exclua a ação e grave novamente.

![Lista de ações e operações de reprodução](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-3-action-replay-dm-en.webp)


<span id="dataset"></span>

### 3.4 Conjunto de Dados

**Dataset** é usado para criar tarefas de coleta e registrar, inspecionar, limpar e mesclar episódios de tarefas. Recomendamos coletar dados em pequenos lotes para que desconexões de dispositivos, erros de software ou travamentos de vídeo possam ser detectados cedo e o risco de perder todos os dados devido a uma única falha seja reduzido.

- Primeiro, registre cerca de 10 episódios de tarefa por lote.
- Após concluir 2–3 lotes, mantenha cerca de 20–30 episódios válidos para a primeira execução de treinamento.
- Adicione mais dados para tarefas complexas de acordo com os resultados do treinamento.

#### 3.4.1 Configurar uma Tarefa de Coleta de Dados

Abra **Dataset** → **Collect Data** na parte superior da página e insira as informações da tarefa. Se vários conjuntos de dados forem mesclados, a descrição da tarefa em cada lote deve ser exatamente a mesma. Antes da coleta, também mantenha as posições A e B, a categoria do objeto, as posições das câmeras, o fundo da mesa e as condições de iluminação o mais estáveis possível.

| Campo | Valor de exemplo | Instruções |
|---|---|---|
| Nome do conjunto de dados | `DM Arm Pick-and-Place from A to B-01` | Use um esquema de nomenclatura “dispositivo + tarefa + lote” |
| Descrição da tarefa | `Move the object from the left to the right` | Descreva claramente o objetivo da tarefa; as descrições devem ser exatamente as mesmas quando os lotes forem mesclados |
| Número de episódios | `10` | Cada episódio deve conter uma tarefa completa |
| Duração do episódio | `20`–`30` segundos | Cobrir a sequência completa de ações |
| Duração de descanso | `5` segundos | Permitir tempo para redefinir o braço e ajustar a cena |

![Configurar uma tarefa de coleta de dados](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-1-dataset-config-dm-en.webp)

#### 3.4.2 Registrar Episódios de Tarefa

Registrar episódios de tarefa é o núcleo dos dados de treinamento. Cada episódio deve registrar completamente pegar o objeto no Ponto A, movê-lo para o Ponto B e colocá-lo. Para ajudar o modelo a aprender rapidamente, mantenha o fluxo da tarefa geralmente consistente. Para melhorar a generalização, adicione dados com diferentes posições, ângulos e variações de movimento.

1. Coloque o objeto no Ponto A, confirme que o braço está em sua pose inicial e clique em **Start Recording**.
2. Use o braço líder para controlar o braço seguidor e concluir a tarefa e, em seguida, retorne o braço à sua pose inicial.
3. Após concluir a tarefa, aguarde o término do tempo restante ou clique na seta (ou pressione a barra de espaço) para encerrar o episódio atual mais cedo.
4. Durante o período de descanso, retorne o objeto ao Ponto A e confirme que o braço está pronto. Inicie o próximo episódio quando o período de descanso terminar.

![Registrar episódios de tarefa](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-2-recording-episode-dm-en.webp)

> **Importante ⚠️**
>
> - Antes da coleta, ajuste e fixe as câmeras. **Certifique-se de que os braços, o gripper, o objeto e os Pontos A e B estejam todos visíveis nas visualizações das câmeras.**
> - Ações-chave não devem ser 🚫 obstruídas nem ficar fora das visualizações das câmeras; caso contrário, os dados podem não ser utilizáveis para treinamento.
> - Se uma tarefa falhar, o objeto não for agarrado com segurança, o vídeo travar ou uma câmera for obstruída, clique em **Retake Immediately** ou pressione `Esc` para interromper a coleta.
> - Você pode concluir primeiro o lote atual e, em seguida, inspecionar e excluir episódios anormais.
> - Se houver risco de perda de controle ou colisão, pare 🛑 imediatamente.



#### 3.4.3 Inspecionar, Excluir e Mesclar Dados

Após a coleta, inspecione episódios anormais, exclua dados inválidos e mescle vários conjuntos de dados quando necessário.

| Operação | Como realizar | Descrição |
|---|---|---|
| Inspecionar episódios anormais | Selecione um episódio e reproduza seu vídeo ou reproduza sua ação | Confirme que a tarefa foi concluída e que o movimento do gripper estava normal. Anote os números dos episódios anormais durante a gravação para que você possa inspecioná-los diretamente depois |
| Excluir episódios anormais | Clique em **Batch Delete Episodes**, selecione os episódios anormais e confirme; em seguida, clique em **Generate Deleted Copy** | Altere o nome do novo conjunto de dados e confirme. O conjunto de dados original não será sobrescrito |
| Mesclar conjuntos de dados | Clique em **Merge**, selecione os conjuntos de dados e insira um novo nome de conjunto de dados | Recomendamos mesclar conjuntos de dados com a mesma descrição de tarefa, combinação de dispositivos e configuração de câmeras |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspect dataset](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-check-dm-en.webp)


<figcaption>Inspecionar conjunto de dados</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Delete abnormal episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-delete-dm-en.webp)


<figcaption>Excluir episódios anormais</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Merge datasets](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-merge-dm-en.webp)


<figcaption>Mesclar conjuntos de dados</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 Treinamento

O treinamento gera um modelo de ação para o braço (ou seja, um programa de controle de ação formado a partir dos dados de demonstração). O SenseCraft Robotics lê os dados de tarefa gravados, analisa como o braço conclui o objetivo e gera um modelo que pode ser usado para operação automática.

Use a tabela a seguir para configurar os parâmetros de treinamento:

| Parâmetro | Opção / valor | Detalhes |
| :--- | :--- | :--- |
| **Hardware de treinamento** | Cloud · Auto-select GPU | Usa um servidor em nuvem para treinamento e consome os créditos correspondentes. |
| | Local · Free | Usa o computador atual para treinamento e não consome créditos, mas requer uma GPU local compatível. |
| **Conjunto de dados de treinamento** | Selecione o conjunto de dados de destino | Selecione o conjunto de dados gravado preparado para esta execução de treinamento. |
| **Política** | ACT | A política de controle de ação padrão atualmente utilizada. |
| **Etapas de treinamento** | `10000` | Recomendamos inserir 10000 como valor inicial e ajustá-lo de acordo com o desempenho real do modelo. |

> **Observação sobre créditos**
> O treinamento Cloud · Auto-select GPU consome créditos; o treinamento Local · Free não consome créditos de treinamento em nuvem. Para aquisição, uso e regras de créditos, consulte [Credit Rules](/pt-br/sensecraft_robotics/#regras-de-créditos).

**Recomendações de etapas de treinamento e episódios:**

| Dificuldade da tarefa | Descrição da tarefa | Episódios recomendados | Etapas de treinamento recomendadas |
|---|---|---:|---:|
| Iniciante | Ponto fixo A para Ponto B | Cerca de 20 | 10.000–15.000 etapas |
| Intermediário | Pegar e colocar em posições aleatórias | Cerca de 50 | 30.000–40.000 etapas |
| Avançado | Muitas etapas ou longa duração | Cerca de 100 | 80.000–100.000 etapas |

> **Duração do treinamento**: O tempo total de treinamento depende tanto do modelo de GPU selecionado quanto do número de etapas de treinamento. Por exemplo, treinar por 20.000 etapas (2W) na nuvem na maioria das GPUs geralmente leva de vários minutos a algumas dezenas de minutos. Treinar por 100.000 etapas (10W) leva aproximadamente cinco vezes mais tempo do que treinar por 20.000 etapas.

Após confirmar as configurações, clique em **Start Training**. Quando o treinamento começar, você poderá visualizar o progresso e as tarefas históricas na lista **Current Training Tasks**.

![Training configuration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-5-training-dm-en.webp)

<span id="model"></span>

### 3.6 Modelo

**Modelo** é usado para visualizar os resultados do treinamento e selecionar o modelo para a operação subsequente. Antes de usar um modelo, confirme que o treinamento foi concluído e que a combinação de tarefa e dispositivo corresponde ao projeto atual.

![Model list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-6-model-dm-en.webp)

<span id="run"></span>

### 3.7 Operação

**Operação** carrega um modelo treinado nos braços para verificar se ele consegue concluir a tarefa corretamente.

**Etapas:**

1. **Selecionar um modelo**: Selecione um modelo marcado como **Supported by Current Robot Arm**.
2. **Selecionar um método de inferência**: Selecione **Cloud Inference** ou **Local Inference** e configure os parâmetros correspondentes.
3. **Iniciar a inferência**: Após confirmar as configurações, clique em **Start Inference**.

**Principais diferenças entre Cloud Inference e Local Inference:**

| Comparação | Cloud Inference | Local Inference |
| :--- | :--- | :--- |
| **Hardware de computação** | Usa uma GPU de nuvem de alto desempenho para inferência. | Usa a CPU local do computador para inferência (a plataforma atual não suporta o uso de uma GPU local). |
| **Impacto no desempenho** | O poder de computação é forte e geralmente sem restrições, mas o resultado depende fortemente da **qualidade da transmissão de rede**. | O desempenho é afetado pela **CPU local**. |
| **Configuração de parâmetros** | **Action count (padrão: 120):** Número de etapas de ação previstas em uma inferência. <br />**Block threshold (padrão: 0,9):** Um parâmetro que afeta a continuidade e a precisão do movimento. Um valor mais alto torna a execução do braço mais cautelosa (e pode causar pausas); um valor mais baixo torna o movimento mais suave (mas pode causar erros).<br />**(As configurações padrão geralmente são suficientes.)** | **Run count:** Número total de vezes (episódios) para repetir a tarefa continuamente.<br />**Time limit per run (seconds):** Tempo máximo para uma execução de tarefa; a execução termina automaticamente quando o limite é atingido.<br />**(As configurações padrão geralmente são suficientes.)** |
| **Saída de dados** | Apenas realiza inferência para verificação. | Após o término da execução, o conteúdo da inferência é gerado automaticamente como um conjunto de dados correspondente. |
| **Custo e limites** | O custo está sujeito às regras da plataforma; o poder de computação é forte e adequado para iniciar o treinamento rapidamente. | Normalmente não requer créditos de nuvem, mas é limitado pelo desempenho da CPU local. |

**Observações**

- Antes de iniciar: Confirme que os braços estão conectados corretamente e que a área de trabalho está segura.
- Durante a operação: Não desconecte nem desmonte os braços e observe se seus movimentos estão normais.
- Se o resultado for insatisfatório: Volte para **Dataset**, exclua episódios anormais, adicione dados válidos e treine novamente.

![Model operation interface](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-7-run-dm-en.webp)
