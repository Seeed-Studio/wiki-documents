---
title: Guia de Treinamento reBot Arm 102 + B601 RS
description: Configure o reBot Arm 102 + B601 RS com o SenseCraft Robotics, conecte e calibre os braços, colete demonstrações, treine um modelo e valide a inferência.
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 RS
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_rs
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

Este tutorial usa o reBot Arm 102 (braço líder) e o B601 RS (braço seguidor) com o SenseCraft Robotics para apresentar o fluxo de trabalho completo, desde a criação do projeto e configuração do dispositivo até a coleta de dados, treinamento do modelo e implantação.
A tarefa de exemplo neste guia é pegar um objeto no Ponto A e colocá-lo no Ponto B. Ela é fornecida apenas como ilustração; os usuários podem projetar cenários de aplicação de acordo com suas necessidades, como classificação, manuseio, encaixotamento, pressionar botões ou conectar e desconectar.

![Exemplo de tarefa de pick-and-place com braço RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp)


> **Nota de versão**
> Nomes de interfaces, localizações de botões e backends de treinamento podem mudar entre versões do SenseCraft Robotics. Números de porta serial (como COM21, COM35, COM3 e COM6) e nomes de conjuntos de dados neste guia são exemplos retirados de um vídeo. Sempre use os dispositivos detectados pelo seu computador atual.

## Visão Geral do Tutorial

Este tutorial é organizado na ordem de configuração de hardware e operação de software para ajudar você a configurar rapidamente os braços e treinar um modelo:

| Capítulo | Etapa | Conteúdo principal |
| :--- | :--- | :--- |
| Capítulo 1 | **Preparação** | Lista de hardware, requisitos de computador e software, verificações de cena e segurança |
| Capítulo 2 | **Conectar os braços** | Montagem física e conexões de cabos para os braços líder e seguidor |
| Capítulo 3 | **Treinamento de software** | **Fluxo de trabalho principal**: configuração do dispositivo ➔ coleta de dados ➔ treinamento do modelo ➔ implantação e operação |



---

<span id="preparation"></span>

## 1. Preparação

### 1.1 Hardware
![Lista de hardware](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/01-1-hardware-list-rs-en.webp)

> Os braços devem estar montados, fixados, alimentados e conectados via USB. Se a montagem não estiver concluída, consulte [Etapa 1: Montar o braço](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/).

#### Braços

| Categoria | Líder: reBot Arm 102 | Seguidor: B601 RS |
|---|---|---|
| Braço | reBot Arm 102 ×1    🔗[Buy now](https://www.seeedstudio.com/Star-Arm-102-p-6765.html?utm_source=sensecraft_wiki&utm_medium=socil) | reBot Arm B601-RS montado ×1  🔗[Buy now](https://www.seeedstudio.com/reBot-Arm-B601-RS-Assembled-Kit-with-Gripper-p-6865.html?utm_source=sensecraft_wiki&utm_medium=socil) |
| Fonte de alimentação | Adaptador de energia 12 V / 2 A ×1 | Fonte de alimentação 48 V / 12,5 A ×1 |
| Cabo de dados | Cabo de dados USB-C ×1 | Cabo de extensão USB ×1 |
| Componentes de comunicação e alimentação | — | Placa driver USB-CAN ×1 <br />Placa de separação de sinal/alimentação ×1  |
| Outros cabos | — | Cabo JST de 2 pinos ×1<br />Cabo JST de 3 pinos ×1<br />Cabo XT30 2+2 ×1 |
| Ferramentas de fixação | Grampo em G ×2   | Grampo em G ×2  |

> Os braços devem estar montados, fixados, alimentados e conectados via USB. Se a montagem não estiver concluída, consulte [Etapa 1: Montar o braço](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/).

#### Câmeras
São necessárias duas câmeras: uma para a visão superior e outra para a visão lateral ou visão do gripper.
<table>
  <thead>
    <tr>
      <th>Câmera</th>
      <th>Câmera de visão superior</th>
      <th>Câmera de visão lateral</th>
      <th>Câmera do gripper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Quantidade</td>
      <td>1</td>
      <td colspan="2">Escolha a câmera de <em>visão lateral</em> ou de <em>gripper</em></td>
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
| Opção 1 | 1 | 1 | Mais estável; suporta coleta a 120 FPS |
| Opção 2 | ❌ | 2 | Estável; suporta todas as taxas de quadros de coleta |
| Opção 3 | 2 | ❌ | Mantenha a taxa de quadros em ou abaixo de 60 FPS; a coleta a 120 FPS não é suportada e problemas de compatibilidade podem ocorrer em alguns casos |

### 1.2 Computador e Software

- Computador Windows ou macOS (treinamento local requer uma GPU compatível)
- Conexão de rede estável (para download, login, treinamento em nuvem e inferência)
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) instalado
- Uma [conta SenseCraft](https://account.seeed.cc/login) registrada, conectada dentro do SenseCraft Robotics


Para instruções detalhadas, consulte [Download de software e configuração de conta](/pt-br/sensecraft_robotics/#download-and-account).

### 1.3 Cena e Segurança

- Marque duas posições fixas na mesa: Ponto A para a posição inicial do objeto e Ponto B para o destino.
- Prepare um objeto de tamanho adequado e fácil de agarrar, como um bloco vermelho ou um objeto macio.
- Certifique-se de que o Ponto A, o Ponto B, ambos os braços e o objeto estejam dentro do campo de visão das câmeras e não estejam obstruídos.
- Limpe a área de trabalho do braço de pessoas, bagunça, cabos e objetos frágeis. Ajuste o braço líder para que ele não se aproxime do braço seguidor nem apareça na visão da câmera do seguidor.
![Exemplo de cena e segurança](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-3-scene-and-safety-dm-en.webp)
> **Observação:** Esta imagem usa o braço B601 DM como exemplo. A configuração e a operação são as mesmas para o B601 RS.
---
<span id="connect-arms"></span>

## 2. Conectar os Braços

> **Aviso de segurança:**
> Desconecte a alimentação antes de conectar ou desconectar cabos JST, XT30 ou outros cabos. Ligue a alimentação somente depois de confirmar que todos os cabos estão conectados corretamente.
> B601 RS e B601 DM são visualmente semelhantes. Certifique-se de distingui-los.


### 2.1 Montar e Conectar o reBot Arm 102 (Braço Líder)

![Montagem e conexão do reBot Arm 102 (braço líder)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)

#### Etapa 1: Montar o reBot Arm 102
Use grampos de marcenaria para fixar o reBot Arm 102 em uma superfície de mesa plana. Empurre levemente a base para confirmar que ela não se move.

#### Etapa 2: Conectar os Cabos
As conexões consistem em dois caminhos:

* **Caminho de sinal (braço -> cabo USB-C -> computador)**
  1. Prepare um cabo USB-C para conectar o braço ao computador (**ainda não o conecte ao computador; conecte-o quando chegar à vinculação da porta serial e à varredura de dispositivos**).

* **Caminho de alimentação (braço -> fonte de alimentação 12 V 2 A -> régua de energia)**
  1. Conecte o **adaptador de energia 12 V 2 A** ao conector de alimentação do braço.
  2. Conecte o adaptador à régua de energia para ligar o braço.



---

### 2.2 Montar e Conectar o B601 RS (Braço Seguidor)
![Conexão de cabos do B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-follower-wiring-overview-rs-en.webp)

#### Etapa 4: Montar o B601 RS
Use grampos em G para fixar o B601 RS em uma superfície de mesa plana. Gire suavemente o braço para a esquerda e para a direita para confirmar que a base não se move.

#### Etapa 5: Conectar os Cabos
Certifique-se de que a alimentação esteja desconectada antes de começar. As conexões consistem em dois caminhos:

* **Caminho de sinal (braço -> placa de separação de sinal -> USB-CAN -> computador)**
  1. Use um cabo XT30 2+2 para conectar a base do braço ao módulo de separação de sinal.
  2. Corte o cabo de 2 pinos. Conecte uma extremidade ao módulo de separação de sinal; conecte o fio vermelho na outra extremidade ao H no USB-CAN e o fio preto ao L.
  3. Conecte uma extremidade do USB-CAN ao computador por meio do cabo de extensão USB (**ainda não o conecte ao computador; conecte-o quando a vinculação da porta serial estiver pronta e fizer a varredura de dispositivos**).

* **Caminho de alimentação (braço -> placa de separação de sinal -> fonte de alimentação 48 V 12,5 A -> tomada)**
  1. Use um cabo XT30 2+2 para conectar a base do braço ao módulo de separação de sinal.
  2. Use o cabo de alimentação XT30 para conectar o módulo de separação de sinal à fonte de alimentação 48 V 12,5 A.
  3. Conecte a fonte de alimentação à tomada. Depois de confirmar que o braço está fixado, os cabos estão corretos e a área ao redor está livre, ligue a alimentação.

![Conectando a alimentação ao B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-connect-follower-rs-en.webp)


---

<span id="project"></span>

## 3. Projeto

Após fazer login, abra a página **Projects**. Crie um novo projeto no primeiro uso ou abra um projeto existente. Em um projeto, a **Project Overview** fornece acesso à configuração de dispositivos, reprodução de ações, conjuntos de dados, treinamento, modelos e operação.

| Operação | Etapas |
|---|---|
| Criar um projeto | Clique em **New Project** → insira o nome e a descrição do projeto → clique em **Create and Start** |
| Abrir um projeto existente | Selecione um projeto na lista de projetos → abra o projeto |

![Janela de novo projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-create-project-rs-en.webp)


### 3.1 Visão Geral do Projeto

**Project Overview** exibe o status atual do projeto, incluindo conexão dos braços, configuração de dispositivos, conjunto de dados, treinamento, modelo e status de operação.

Se a página mostrar **Pending configuration** ou **Not connected**, clique em **Go to Device Setup** para configurar os braços.

![Visão geral do projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-1-device-selection-rs-en.webp)



<span id="device-setup"></span>

### 3.2 Configuração de Dispositivo

Device Setup é usado para seleção de dispositivo, vinculação de porta serial, calibração do braço, verificação de teleoperação e configuração de câmera.

#### 3.2.1 Selecionar o Modelo de Dispositivo

Na etapa **Device Pairing**, selecione **reBot Arm 102 + B601 RS** e clique em **Next** para vincular as portas seriais.

![Selecionar reBot Arm 102 + B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-1-device-pairing-rs-en.webp)


#### 3.2.2 Vincular as Portas Seriais USB para os Braços Líder e Seguidor



1. **Varredura inicial**: Desconecte os cabos USB de ambos os braços, clique em **Rescan** e registre as portas seriais exibidas no momento.
2. **Vincular o braço líder**: Conecte o reBot Arm 102, clique em **Rescan** novamente e vincule a nova porta serial que aparecer ao braço líder.
3. **Vincular o braço seguidor**: Conecte o B601 RS, clique em **Rescan** novamente e vincule o *PCAN channel (can0)* ao braço seguidor.
4. Confirme que ambos os braços exibem **Connected** e, em seguida, clique em **Next**.

![Vincular as portas seriais dos braços líder e seguidor](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-2-serial-binding-rs-en.webp)

> **Vinculação de porta serial e solução de problemas:**
> - Após cada varredura, vincule apenas a nova porta serial que aparecer. Não identifique os dispositivos apenas pelos seus números de COM.
> - Se uma porta serial não for exibida, reconecte o cabo USB e faça a varredura novamente. Se apenas uma porta serial for exibida, verifique o outro cabo USB e a alimentação do dispositivo.


#### 3.2.3 Verificação da Calibração do Braço

1. Siga o exemplo na tela para mover os braços líder e seguidor para a postura inicial e certifique-se de que a área de trabalho esteja livre de obstáculos.
2. Clique em **Start Calibration** e siga as instruções na tela para concluir, em sequência, as etapas de posição zero do líder, posição zero do seguidor e conclusão da calibração.
3. Se as posturas dos braços não corresponderem ou a calibração falhar, clique em **Recalibrate** e não continue.

![Verificação da calibração do braço](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)
*Observação: A ilustração usa um braço DM como exemplo. O procedimento para o braço RS é exatamente o mesmo.*

> Não realize teleoperação ou coleta de dados antes que a calibração esteja concluída.

#### 3.2.4 Verificação da Teleoperação

A verificação da teleoperação confirma que o braço seguidor segue corretamente o braço líder. Se a direção estiver invertida, o atraso for excessivo ou o movimento for descontínuo, verifique as funções dos dispositivos, as vinculações de porta serial e o resultado da calibração.

1. Clique em **Start Teleoperation**.
2. Mova levemente o braço líder e observe se o braço seguidor se move de forma síncrona, segue a mesma direção e se move de maneira suave.
3. Após a verificação, clique em **End Teleoperation** e selecione uma opção com base no resultado:
   - **Normal**: clique em **Confirm Teleoperation Normal**;
   - **Abnormal**: clique em **Abnormal, Return to Recalibrate**.

![Verificação da teleoperação](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)
*Observação: A ilustração usa um braço DM como exemplo. O procedimento para o braço RS é exatamente o mesmo.*

> **Compensação de gravidade (opcional)**
> O braço tem certo peso, portanto ajustar manualmente o seguidor pode exigir esforço. Quando a compensação de gravidade está ativada, o sistema compensa parte do peso, tornando o seguidor mais fácil de mover. Desative a compensação de gravidade após o ajuste e antes da verificação da teleoperação.
> A compensação de gravidade serve para ajustar o braço seguidor; ela não controla o braço seguidor para seguir o líder.

#### 3.2.5 Vincular as Câmeras

As câmeras registram informações visuais enquanto o braço executa uma tarefa. Dependendo da posição de montagem da câmera, os dois layouts a seguir são comumente usados:
| Layout | Instalação e finalidade | Cenários adequados | Ilustração |
|:---|:---|:---|:---|
| Visão do gripper<br /> | <small><strong>Câmera de visão superior</strong>: montada acima da parte frontal da bancada para cobrir a área de trabalho.<br /><br /><strong>Câmera do gripper</strong>: montada próxima ao gripper para observar detalhes da pega.</small> | <small>Operações finas que exigem observar o contato entre o gripper e o objeto.</small> | ![Layout de visão do gripper](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-in-hand-rs-en.webp)<br /><small>*Observação: Você pode projetar seu próprio suporte de câmera 3D.</small> |
| Assistência de visão lateral<br /> | <small><strong>Câmera de visão superior</strong>: montada acima da parte frontal da bancada para cobrir a área de trabalho.<br /><br /><strong>Câmera de visão lateral</strong>: montada na parte frontal lateral da bancada para observar a altura do braço e o movimento do gripper.</small> | <small>Tarefas como agarrar, manusear e posicionar.</small> | ![Layout de assistência de visão lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-to-hand-rs-en.webp) |

Este tutorial usa o **layout de assistência de visão lateral**. Após instalar e posicionar as câmeras:

1. Conecte as câmeras ao computador e clique em **Rescan**.
2. Selecione os fluxos de vídeo correspondentes nas áreas **Front Camera** e **Side Camera**.
3. Verifique ambas as janelas de pré-visualização para confirmar que os braços, o objeto e a posição alvo estão claramente visíveis. Clique em **Next** após confirmar.

![Vincular as câmeras frontal e lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-camera-binding-dm-en.webp)

> Para verificar se as câmeras correspondem às suas posições de montagem, clique em **View Camera Layout**. Se a pré-visualização estiver preta ou anormal, faça uma nova varredura, reinicie as câmeras ou altere as portas USB.


<span id="action-replay"></span>

### 3.3 Reprodução de Ações

**Action Replay** registra as ações do braço por meio do ensino com o braço líder e as salva na lista de ações para reprodução. Após a gravação, verifique se a ação é contínua e se a direção do movimento e a abertura e o fechamento do gripper estão corretos.

| Função | Operação | Finalidade |
|---|---|---|
| Gravar uma ação | Clique em **+** para criar uma ação → use o braço líder para controlar o seguidor durante a tarefa <br />Clique em **Stop Recording** → salvar | Registrar ações-alvo como agarrar, mover e posicionar |
| Reproduzir uma ação | Clique em **Replay** | Verificar se a ação está completa e contínua e confirmar a direção do movimento e a abertura e o fechamento do gripper |
> Antes de gravar uma ação pela primeira vez, conclua a conexão do dispositivo e a verificação da teleoperação em **Device Setup** e clique em **Confirm Teleoperation Normal**. Se a reprodução estiver anormal, exclua a ação e grave novamente.

![Lista de ações e operação de reprodução](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-3-action-replay-rs-en.webp)


<span id="dataset"></span>

### 3.4 Conjunto de Dados

**Dataset** é usado para criar tarefas de coleta e para registrar, inspecionar, limpar e mesclar episódios de tarefas. Recomendamos coletar dados em pequenos lotes para detectar desconexões, problemas de software ou travamentos de vídeo cedo e reduzir o risco de perder todos os dados devido a uma única falha.

- Registre cerca de 10 episódios de tarefa por lote;
- Após concluir 2–3 lotes, mantenha cerca de 20–30 episódios válidos para a primeira execução de treinamento;
- Adicione mais dados para tarefas complexas de acordo com os resultados do treinamento.

#### 3.4.1 Configurar uma Tarefa de Coleta de Dados

Vá para **Dataset** → **Collect Data** e insira as informações da tarefa. Se vários conjuntos de dados forem mesclados, as descrições de tarefa de todos os lotes devem ser exatamente iguais. Antes da coleta, mantenha as posições A e B, a categoria do objeto, as posições das câmeras, o fundo da mesa e as condições de iluminação o mais consistentes possível.

| Campo | Valor de exemplo | Instruções |
|---|---|---|
| Nome do conjunto de dados | `RS arm pick object from A to B-01` | Use o formato “dispositivo + tarefa + lote” |
| Descrição da tarefa | `Move the object from the left to the right` | Declare claramente o objetivo da tarefa; as descrições devem ser exatamente iguais quando os lotes forem mesclados |
| Número de episódios | `10` | Cada episódio deve conter uma tarefa completa |
| Duração por episódio | `20`–`30` segundos | Abranger a sequência completa de ações |
| Duração de descanso | `5` segundos | Permitir que o braço seja redefinido e a cena seja ajustada |

![Configurar uma tarefa de coleta de dados](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-1-dataset-config-rs-en.webp)

#### 3.4.2 Registrar Episódios de Tarefa

Registrar episódios de tarefa é o núcleo dos dados de treinamento. Cada episódio deve registrar completamente o processo de agarrar o objeto no Ponto A, movê-lo para o Ponto B e soltá-lo. Para ajudar o modelo a aprender rapidamente, mantenha o procedimento da tarefa geralmente consistente. Para melhorar a generalização, adicione dados com diferentes posições, ângulos e variações de movimento.

1. Coloque o objeto no Ponto A, confirme que o braço está em sua postura inicial e clique em **Start Recording**.
2. Use o braço líder para controlar o seguidor durante a tarefa e, em seguida, retorne o braço à sua postura inicial.
3. Após a conclusão da tarefa, aguarde o término do tempo restante ou clique na seta (ou pressione Espaço) para encerrar o episódio atual antecipadamente.
4. Durante o período de descanso, retorne o objeto ao Ponto A e certifique-se de que o braço esteja pronto. Inicie o próximo episódio quando o período de descanso terminar.

![Registrar episódios de tarefa](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-2-recording-episode-rs-en.webp)

> **Lembrete importante ⚠️**
>
> - Antes da coleta, ajuste e fixe as câmeras. **Certifique-se de que os braços, o gripper, o objeto e os Pontos A e B estejam todos visíveis.**
> - Ações-chave não devem ser 🚫 obstruídas ou ficar fora do campo de visão da câmera, caso contrário os dados podem não ser utilizáveis para treinamento.
> - Se uma tarefa falhar, o objeto não for agarrado com segurança, o vídeo travar ou uma câmera for obstruída, clique em **Record Again** ou pressione `Esc` para interromper a coleta.
> - Você pode concluir primeiro o lote atual e depois inspecionar e excluir episódios anormais.
> - Se o braço se comportar de forma inesperada ou houver risco de colisão, pare 🛑 imediatamente.

#### 3.4.3 Inspecionar, Excluir e Mesclar Dados

Após a coleta, inspecione episódios anormais, exclua dados inválidos e mescle vários conjuntos de dados quando necessário.

| Operação | Método | Descrição |
|---|---|---|
| Inspecionar episódios anormais | Selecione um episódio e reproduza o vídeo ou repita a ação | Confirme que a tarefa está completa e que a ação do gripper é normal. Você pode anotar os números de episódios anormais durante a gravação e inspecioná-los diretamente depois |
| Excluir episódios anormais | Clique em **Batch Delete Episodes**, selecione os episódios anormais e confirme; em seguida, clique em **Generate Deleted Copy** | Insira um novo nome de conjunto de dados e confirme. O conjunto de dados original não será sobrescrito |
| Mesclar conjuntos de dados | Clique em **Merge**, selecione os conjuntos de dados e insira um novo nome de conjunto de dados | Mesclar conjuntos de dados com descrições de tarefa, combinações de dispositivos e configurações de câmera correspondentes |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspect the dataset](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-check-rs-en.webp)


<figcaption>Inspecionar o conjunto de dados</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Delete abnormal episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-delete-rs-en.webp)


<figcaption>Excluir episódios anormais</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Merge datasets](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-merge-rs-en.webp)


<figcaption>Mesclar conjuntos de dados</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 Treinamento

O treinamento gera um modelo de ação para o braço (ou seja, um programa de controle de ação criado a partir dos dados de ensino). O SenseCraft Robotics lê os dados de tarefa gravados, analisa como o braço executa a ação alvo e gera um modelo que pode ser usado para operação autônoma.

Use a tabela a seguir para configurar os parâmetros de treinamento:

| Parâmetro | Opção / valor | Detalhes |
| :--- | :--- | :--- |
| **Hardware de treinamento** | Nuvem · selecionar GPU automaticamente | Usa um servidor em nuvem para treinamento e consome os créditos correspondentes. |
| | Local · gratuito | Usa o computador atual para treinamento. Nenhum crédito é consumido, mas é necessária uma GPU local compatível. |
| **Conjunto de dados de treinamento** | Selecione o conjunto de dados alvo | Selecione o conjunto de dados que você gravou e preparou para esta execução de treinamento. |
| **Política** | ACT | A política de controle de ação padrão atualmente suportada. |
| **Etapas de treinamento** | `10000` | 10.000 é recomendado como valor inicial. Ajuste-o depois de acordo com o desempenho real do modelo. |

> **Aviso sobre créditos**
> O treinamento em nuvem com **Nuvem · selecionar GPU automaticamente** consome créditos. O treinamento **Local · gratuito** não consome créditos de treinamento em nuvem. Consulte as [Regras de créditos](/pt-br/sensecraft_robotics/#créditos) para obter informações sobre como obter e usar créditos.

**Etapas de treinamento e contagem de episódios recomendadas:**

| Dificuldade da tarefa | Descrição da tarefa | Episódios recomendados | Etapas de treinamento recomendadas |
|---|---|---:|---:|
| Iniciante | Ponto fixo A para ponto B | Cerca de 20 | 10.000–15.000 etapas |
| Intermediário | Agarrar e colocar em posições aleatórias | Cerca de 50 | 30.000–40.000 etapas |
| Avançado | Vários passos ou longa duração | Cerca de 100 | 80.000–100.000 etapas |

> **Duração do treinamento**: O tempo total de treinamento depende tanto do **modelo de GPU** selecionado quanto do **número de etapas de treinamento**. Por exemplo, treinar por 20.000 etapas (20K) na nuvem normalmente leva de vários minutos a dezenas de minutos na maioria das GPUs. Treinar por 100.000 etapas (100K) leva aproximadamente cinco vezes mais tempo do que treinar por 20K etapas.

Após confirmar as configurações, clique em **Start Training**. Depois que o treinamento começar, visualize o progresso e o histórico de treinamento na lista **Current Training Tasks**.

![Training configuration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-5-training-rs-en.webp)

<span id="model"></span>

### 3.6 Modelo

**Modelo** é usado para visualizar os resultados do treinamento e selecionar um modelo para operação subsequente. Antes de usar, confirme que o treinamento foi concluído e que a combinação de tarefa e dispositivo corresponde ao projeto atual.

![Model list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-6-model-rs-en.webp)

<span id="run"></span>

### 3.7 Operação

**Operação** carrega um modelo treinado nos braços para verificar se ele consegue concluir a tarefa corretamente.

**Etapas:**
1. **Selecione um modelo**: Selecione um modelo marcado como **Supports current arm**.
2. **Selecione um método de inferência**: Selecione **Cloud Inference** ou **Local Inference** e, em seguida, configure os parâmetros correspondentes.
3. **Inicie a inferência**: Após confirmar as configurações, clique em **Start Cloud/Local Inference**.

**Principais diferenças entre inferência em nuvem e inferência local:**
| Comparação | Inferência em nuvem | Inferência local |
| :--- | :--- | :--- |
| **Hardware de computação** | Usa uma GPU de nuvem de alto desempenho para inferência. | Usa a CPU local do computador (a plataforma atual não suporta o uso de uma GPU local). |
| **Impacto no desempenho** | O poder de computação geralmente não é uma limitação, mas os resultados dependem fortemente da **qualidade da transmissão de rede**. | Os resultados dependem do **poder de computação da CPU local**. |
| **Parâmetros** | **Action chunks (padrão 120):** número de etapas de ação previstas em uma inferência. <br />**Chunk threshold (padrão 0,9):** afeta a suavidade e a precisão do movimento. Um valor mais alto torna o braço mais cauteloso e pode causar pausas; um valor mais baixo torna o movimento mais suave, mas pode aumentar os erros.<br />**(Os padrões geralmente são recomendados.)** | **Run count:** número total de vezes (episódios) para repetir a tarefa. <br />**Time limit per run (seconds):** duração máxima de uma execução de tarefa; a execução termina automaticamente quando o tempo se esgota.<br />**(Os padrões geralmente são recomendados.)** |
| **Saída de dados** | Apenas realiza verificação de inferência. | Gera automaticamente um conjunto de dados correspondente a partir das execuções de inferência após o término da operação. |
| **Custo e limitações** | Sujeito à precificação da plataforma; o poder de computação mais forte é adequado para começar rapidamente. | Normalmente não consome créditos de nuvem, mas é limitado pelo desempenho da CPU local. |

**Observações**
- Antes de iniciar: Confirme que os braços estão conectados corretamente e que a área de trabalho é segura.
- Durante a operação: Não desconecte nem desmonte os braços e observe se seus movimentos estão normais.
- Se o resultado for insatisfatório: Volte para **Dataset**, exclua episódios anormais, adicione dados válidos e treine novamente.

![Model operation interface](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-7-run-rs-en.webp)
