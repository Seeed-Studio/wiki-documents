---
title: Guia de Treinamento SO-ARM101
description: Configure o SO-ARM101 com o SenseCraft Robotics, conecte e calibre os braços, colete demonstrações, treine um modelo e valide a inferência.
keywords:
  - SenseCraft Robotics
  - SO-ARM101
  - robot arm
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/00-task-overview-soarm-en.webp
slug: /sensecraft_robotics_so_arm101
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

Este tutorial usa um braço SO-ARM101 Leader e um braço SO-ARM101 Follower com o SenseCraft Robotics. Ele cobre o fluxo de trabalho completo, desde a criação do projeto e configuração do dispositivo até a coleta de dados, treinamento do modelo e operação.

A tarefa de exemplo é pegar um objeto no Ponto A e colocá-lo no Ponto B. Ela é fornecida apenas para explicar o procedimento. Os usuários podem projetar outros cenários de aplicação, como classificação, manuseio, encaixotamento, pressionar botões ou conectar e desconectar.

![Exemplo de tarefa de pick-and-place com SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/00-task-overview-soarm-en.webp)

> **Nota de versão**
> Nomes de interfaces, localizações de botões e backends de treinamento podem mudar entre versões do SenseCraft Robotics. Portas seriais como COM21, COM35, COM3 e COM6, bem como nomes de conjuntos de dados, são exemplos de um vídeo. Sempre use os dispositivos detectados pelo computador atual.

## Visão geral do tutorial

Este tutorial segue a ordem de configuração de hardware e operação de software:

| Capítulo | Etapa | Conteúdo principal |
| :--- | :--- | :--- |
| Capítulo 1 | **Preparação** | Lista de hardware, requisitos de computador e software, verificações de cena e segurança |
| Capítulo 2 | **Conectar os braços** | Montagem física e conexões de cabos |
| Capítulo 3 | **Fluxo de trabalho de software** | **Fluxo de trabalho principal**: configuração do dispositivo ➔ coleta de dados ➔ treinamento do modelo ➔ implantação e operação |


---

<span id="preparation"></span>

## 1. Preparação

### 1.1 Hardware

![Lista de hardware do SO-ARM101 Pro](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-1-hardware-list-soarm-en.webp)

A lista a seguir é baseada na **Lista de Peças** oficial fornecida com o kit SO-ARM101.

#### Acessórios do Leader e do Follower

| Item | Leader | Follower |
|---|---|---|
| Arm  [Buy now](https://www.seeedstudio.com/SO-101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html?utm_source=sensecraft_wiki&utm_medium=socil) | Braço Leader preto montado ×1| Braço Follower branco montado ×1 |
| Placa de controle de servos LeRobot | ×1 | ×1 |
| Cabo de alimentação | Cabo de alimentação 5 V (multi-head) ×1 | Pro: cabo de alimentação 12 V ×1; Standard: 5 V |
| Cabo de dados | Cabo de dados USB-C ×1 | Cabo de dados USB-C ×1 |
| Cabo adaptador de alimentação DC | ×1 | ×1 |
| Braçadeira de fixação | ×2 | ×2 |

#### Materiais e acessórios compartilhados

| Acessório | Quantidade | Descrição |
|---|---:|---|
| Peças do gripper flexível | ×1 | Instaladas na extremidade do braço |
| Câmera USB 32 × 32 mm | ×2 | Duas câmeras são necessárias. O kit inclui uma; prepare uma segunda câmera separadamente. Os dados de treinamento devem conter duas visões. |
| Chave de fenda | ×1 | Para montagem e ajuste |
| Mouse pad | ×1 | Protege e estabiliza a superfície de trabalho |

> Os braços devem estar montados, fixados, alimentados e conectados por USB. Se a montagem não estiver concluída, consulte [Etapa 1: Monte o braço](https://wiki.seeedstudio.com/cn/lerobot_so100m/#%E6%A0%A1%E5%87%86%E8%88%B5%E6%9C%BA%E5%B9%B6%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82).

#### Observações sobre alimentação e conexão

- **Versão Standard:** tanto o Leader quanto o Follower usam alimentação de **5 V**.
- **Versão Pro:** o Leader usa **5 V** e o Follower usa **12 V**. Não os troque.
- Verifique a tensão de entrada, a tensão de saída e a corrente nominal no rótulo do adaptador e na documentação oficial do produto para a versão aplicável.

### 1.2 Computador e software

- Computador com Windows ou macOS. O treinamento local requer uma GPU compatível.
- Conexão de rede estável para download, login, treinamento em nuvem e inferência.
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) instalado.
- Uma [conta SenseCraft](https://account.seeed.cc/login) registrada, conectada dentro do SenseCraft Robotics.

Para instruções detalhadas, consulte [Download de software e configuração de conta](/pt-br/sensecraft_robotics/#download-e-configuração-de-conta).

### 1.3 Cena e segurança

- Marque duas posições fixas na mesa: Ponto A para a posição inicial do objeto e Ponto B para o destino.
- Prepare um objeto de tamanho adequado que seja fácil de agarrar, como um bloco vermelho ou um objeto macio.
- Certifique-se de que o Ponto A, o Ponto B, ambos os braços e o objeto estejam visíveis nas visões das câmeras e não estejam obstruídos.
- Limpe a área de trabalho dos braços de pessoas, bagunça, cabos e objetos frágeis. Mantenha o Leader afastado do Follower e fora do campo de visão da câmera do Follower.

![Exemplo de cena de tarefa e segurança](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp)

---

<span id="connect-arms"></span>

## 2. Conectar os braços

> **Aviso de segurança:**
> Desconecte a alimentação antes de instalar, conectar ou remover os braços. Confirme que os braços estão seguros, que os cabos estão conectados corretamente e que a área de trabalho está livre antes de restabelecer a alimentação. Nunca conecte ou desconecte a interface de alimentação enquanto estiver energizada.

### 2.1 Instalar os corpos dos braços

#### Etapa 1: Fixar o Leader e o Follower

1. Coloque o SO-ARM101 Leader e o Follower em uma mesa ou plataforma de montagem estável e nivelada.
2. Use as quatro braçadeiras do kit para fixar os dois braços, usando duas braçadeiras por braço. Empurre suavemente cada base para confirmar que ela não pode deslizar ou tombar.
3. Mantenha uma distância segura entre os braços e deixe livre toda a faixa de movimento de cada junta.
4. Com a alimentação desconectada, mova cada junta lentamente à mão para confirmar um movimento suave, sem colisões, travamentos ou contato com limites mecânicos.

![Instalar os corpos dos braços](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-1-install-arm-body-soarm-en.webp)

### 2.2 Instalar as placas de controle e conectar o USB-C

#### Etapa 2: Instalar as placas de controle

1. Instale uma placa de controle de servos LeRobot em cada braço. Alinhe a placa com o encaixe na base do braço, verifique a orientação do conector e instale-a com firmeza. Não force a inserção na direção inversa.
2. Verifique se os cabos entre cada placa de controle e os servos estão totalmente encaixados e não estão soltos, dobrados de forma acentuada, prensados ou conectados à interface errada.

#### Etapa 3: Conectar os cabos de dados

As conexões de dados são:

* **Leader:** SO-ARM101 Leader → cabo de dados USB-C → computador
* **Follower:** SO-ARM101 Follower → cabo de dados USB-C → computador

Use um cabo USB-C para conectar cada placa de controle ao computador. Para facilitar a identificação das portas seriais, conecte primeiro as extremidades dos braços e conecte as extremidades do computador uma de cada vez durante a etapa de vinculação de porta serial na Seção 3.2.2.

![Instalar as placas de controle](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp)

### 2.3 Instalar as interfaces de alimentação e ligar

#### Etapa 4: Instalar as interfaces de alimentação

1. Confirme que os adaptadores de alimentação não estão conectados à rede elétrica.
2. Insira cada cabo adaptador de alimentação DC na interface de alimentação do braço e aperte o anel de travamento no sentido horário.
3. Verifique os requisitos de alimentação: a versão **Pro** usa 5 V para o Leader e 12 V para o Follower; a versão **Standard** usa 5 V para ambos os braços. Não misture as tensões.
4. Confirme que cada conector está travado e que os cabos não podem entrar na faixa de movimento das juntas.

#### Etapa 5: Ligar

1. Conecte ambos os adaptadores de alimentação à tomada e ligue-os.
2. Observe os indicadores da placa de controle. Se um indicador estiver apagado, piscar de forma anormal, aquecer excessivamente ou produzir odor, desconecte a alimentação imediatamente e inspecione o sistema.
3. O USB-C é usado apenas para comunicação de dados. A alimentação e o USB-C devem estar ambos conectados durante a varredura de dispositivos, calibração e teleoperação.

![Instalar as interfaces de alimentação](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-3-install-power-interface-soarm-en.webp)


<span id="project"></span>

## 3. Fluxo de trabalho do projeto

Após fazer login, abra a página **Projects**. Crie um projeto para o primeiro uso ou abra um projeto existente. A visão geral do projeto fornece acesso à configuração de dispositivos, reprodução de ações, conjuntos de dados, treinamento, modelos e operação.

| Operação | Etapas |
|---|---|
| Criar um projeto | Clique em **New Project** → insira o nome e a descrição do projeto → clique em **Create and Start** |
| Abrir um projeto existente | Selecione um projeto na lista de projetos → abra-o |

![Criar um projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-create-project-soarm-en.webp)

### 3.1 Visão geral do projeto

A **Project Overview** mostra o status atual dos braços, configuração de dispositivos, conjuntos de dados, treinamento, modelos e operação.

Se a página mostrar **To be configured** ou **Not connected**, clique em **Go to Device Setup** para configurar os braços.

![Visão geral do projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-1-project-overview-soarm-en.webp)

<span id="device-setup"></span>

### 3.2 Configuração do dispositivo

Device Setup é usado para seleção de dispositivo, vinculação de porta serial, calibração dos braços, verificação de teleoperação e configuração de câmera.

#### 3.2.1 Selecionar o modelo de dispositivo

Na etapa **Device Pairing**, selecione **SO-ARM101 + SO-ARM101** e clique em **Next** para vincular as portas seriais.

![Selecionar SO-ARM101 + SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-1-device-pairing-soarm-en.webp)

#### 3.2.2 Vincular as portas seriais USB

1. **Varredura inicial:** Desconecte os cabos USB de ambos os braços, clique em **Rescan** e anote as portas exibidas no momento.
2. **Vincular o Leader:** Conecte o SO-ARM101 Leader, clique em **Rescan** novamente e vincule a nova porta que aparecer ao Leader.
3. **Vincular o Follower:** Conecte o SO-ARM101 Follower, clique em **Rescan** novamente e vincule a nova porta que aparecer ao Follower.
4. Confirme que ambos os braços mostram **Connected** e clique em **Next**.

![Vincular as portas seriais do Leader e do Follower](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-2-serial-binding-soarm-en.webp)

> **Solução de problemas de porta serial:**
> - Após cada varredura, vincule apenas a nova porta que aparecer. Não identifique dispositivos apenas pelos números COM.
> - Se uma porta não for exibida, reconecte o cabo USB e verifique novamente. Se apenas uma porta for exibida, verifique o outro cabo USB e a alimentação do dispositivo.

#### 3.2.3 Verificação da calibração do braço

A página de calibração fornece **Calibração automática** e **Calibração manual**. Antes de começar, mova o Leader e o Follower para a postura intermediária mostrada no exemplo na tela e desobstrua a área de trabalho do braço.

##### Calibração automática

A Calibração automática identifica automaticamente o intervalo de movimento das juntas. Ela é adequada para braços SO-ARM101 cujas juntas possuem batentes físicos confiáveis.

1. Remova qualquer carga do Leader e do Follower e confirme que não há obstáculos na área de trabalho do braço.
2. Siga o exemplo na tela e mova lentamente cada junta em sequência, de modo que o Leader e o Follower fiquem aproximadamente verticais e alinhados na posição intermediária.
3. Confirme que todas as juntas a serem calibradas possuem batentes físicos confiáveis e, em seguida, marque a caixa de confirmação na página.
4. Clique em **Start Calibration** e aguarde o sistema identificar o intervalo de movimento das juntas e concluir a calibração.

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![ calibration selection](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-calibration0-soarm-en.webp)


<figcaption>Seleção do modo de calibração</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-automatic-calibration-soarm-en.webp)


<figcaption>Calibração manual</figcaption>
</figure>

</div>

##### Calibração manual

Se uma junta não tiver um batente físico confiável ou se você precisar confirmar a posição intermediária e o curso da junta passo a passo usando as orientações na tela, selecione Calibração manual.

1. Mantenha o Leader ligado e pronto para orientação manual. Confirme que não há obstáculos na área de trabalho do braço.
2. Siga o exemplo na tela e mova lentamente cada junta do Leader próximo ao meio do seu intervalo de movimento.
3. Depois de confirmar que a postura do Leader está correta, clique em **Start Calibration**.
4. Siga as instruções na tela para confirmar, em sequência, as posições intermediárias e o curso das juntas do Leader e do Follower.

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-manual-calibration-soarm-en.webp)


<figcaption>Calibração manual</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-calibration2-soarm-en.webp)


<figcaption>Calibração manual</figcaption>
</figure>

</div>

> Não execute teleoperação ou coleta de dados durante a calibração. Se a postura do braço estiver anormal, uma junta estiver obstruída ou a calibração falhar, pare a calibração imediatamente, verifique a posição do braço e a área de trabalho e tente novamente.

#### 3.2.4 Verificação da teleoperação

A verificação da teleoperação confirma que o Follower segue corretamente o Leader. Se a direção estiver invertida, o atraso for excessivo ou o movimento for descontínuo, verifique as funções dos dispositivos, o vínculo da porta serial e o resultado da calibração.

1. Clique em **Start Teleoperation**.
2. Movimente levemente o Leader e observe se o Follower se move de forma síncrona, segue a mesma direção e se move suavemente.
3. Clique em **End Teleoperation** após a verificação e selecione o resultado:
   - **Normal:** clique em **Confirm Teleoperation Normal**.
   - **Anormal:** clique em **Abnormal, Return to Recalibrate**.

![Teleoperation verification](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-4-teleoperation-soarm-en.webp)

> **Compensação de gravidade (opcional)**
> Os braços têm certo peso, portanto ajustar manualmente o Follower pode exigir esforço. A compensação de gravidade compensa parte do peso e facilita o ajuste. Desative-a após o ajuste e antes da verificação da teleoperação. A compensação de gravidade serve para ajustar o Follower; ela não controla o Follower para seguir o Leader.

#### 3.2.5 Vincular as câmeras

São necessárias duas câmeras e duas visualizações para coleta de dados e treinamento de modelo. Dependendo da posição de montagem, os layouts comuns são:

| Layout | Instalação e finalidade | Cenários adequados | Ilustração |
|:---|:---|:---|:---|
| Visão do gripper | **Câmera de visão superior:** montada acima da parte frontal da bancada para cobrir a área de trabalho.<br /><br />**Câmera do gripper:** montada próxima ao gripper para observar detalhes da pega. | Operações finas que exigem observar o contato entre o gripper e o objeto. | ![Gripper-view layout](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-in-hand-soarm-en.webp)<br /><small>*Observação: você pode projetar seu próprio suporte de câmera 3D.*</small> |
| Assistência de visão lateral | **Câmera de visão superior:** montada acima da parte frontal da bancada para cobrir a área de trabalho.<br /><br />**Câmera de visão lateral:** montada na parte frontal lateral da bancada para observar a altura do braço e o movimento do gripper. | Tarefas como pegar, manipular e posicionar. | ![Side-view assistance layout](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-to-hand-soarm-en.webp) |

Este tutorial usa o **layout de assistência de visão lateral**. Conecte as duas câmeras, instale-as e posicione-as e, em seguida:

1. Conecte as câmeras ao computador e clique em **Rescan**.
2. Selecione os fluxos de vídeo correspondentes nas áreas **Front Camera** e **Side Camera**.
3. Verifique as duas pré-visualizações para confirmar que os braços, o objeto e a posição alvo estão claramente visíveis. Clique em **Next** após confirmar.

![Bind the front and side cameras](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-camera-binding-soarm-en.webp)

> Para confirmar que cada câmera corresponde à sua posição de montagem, clique em **View Camera Layout**. Se uma pré-visualização estiver preta ou anormal, verifique novamente, reinicie a câmera ou altere a porta USB.

<span id="action-replay"></span>

### 3.3 Reprodução de ações

**Action Replay** grava as ações do braço por meio do ensino com o Leader e as salva na lista de ações para reprodução. Após a gravação, verifique se a ação é contínua e se a direção do movimento e a abertura e o fechamento do gripper estão corretos.

| Função | Operação | Finalidade |
|---|---|---|
| Gravar uma ação | Clique em **+** para criar uma ação → use o Leader para controlar o Follower → clique em **Stop Recording** para salvar | Gravar ações de pegar, mover e posicionar |
| Reproduzir uma ação | Clique em **Replay** | Verificar se a ação está completa e contínua e se a direção do movimento e a ação do gripper estão corretas |

> Antes de gravar uma ação pela primeira vez, conclua a configuração do dispositivo e a verificação da teleoperação e, em seguida, clique em **Confirm Teleoperation Normal**. Se a reprodução estiver anormal, exclua a ação e grave novamente.

![Action list and replay](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-3-action-replay-soarm-en.webp)

<span id="dataset"></span>

### 3.4 Conjunto de dados

**Dataset** é usado para criar tarefas de coleta e registrar, inspecionar, limpar e mesclar episódios de tarefas. Recomenda-se uma abordagem de pequenos lotes e múltiplas sessões para que desconexões, problemas de software ou travamentos de vídeo possam ser detectados cedo.

- Primeiro, registre cerca de 10 episódios de tarefa por lote.
- Após 2–3 lotes, mantenha cerca de 20–30 episódios válidos para a primeira execução de treinamento.
- Adicione mais dados para tarefas complexas de acordo com os resultados do treinamento.

#### 3.4.1 Configurar uma tarefa de coleta de dados

Abra **Dataset** → **Collect Data** e insira as informações da tarefa. Se conjuntos de dados forem ser mesclados, suas descrições de tarefa devem ser exatamente iguais. Mantenha as posições A/B, a categoria do objeto, as posições das câmeras, o fundo da mesa e a iluminação o mais estáveis possível.

| Campo | Exemplo | Orientação |
|---|---|---|
| Nome do conjunto de dados | `SO-ARM101 pick-and-place A-to-B-01` | Use a nomenclatura “dispositivo + tarefa + lote” |
| Descrição da tarefa | `Move the object from the left to the right` | Declare claramente o objetivo da tarefa; as descrições devem coincidir exatamente ao mesclar |
| Número de episódios | `10` | Cada episódio completa uma tarefa inteira |
| Duração por episódio | `20`–`30` segundos | Abrange a ação completa |
| Duração de descanso | `5` segundos | Redefine os braços e a cena |

![Configure a data-collection task](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-1-dataset-config-soarm-en.webp)

#### 3.4.2 Registrar episódios de tarefa

Cada episódio deve registrar o processo completo de pegar o objeto no Ponto A, movê-lo para o Ponto B e soltá-lo. Mantenha o procedimento consistente; adicione pequenas variações de posição, ângulo e movimento apenas quando for necessário mais poder de generalização.

1. Coloque o objeto no Ponto A, confirme a postura inicial e clique em **Start Recording**.
2. Use o Leader para controlar o Follower durante a tarefa e, em seguida, retorne o braço à postura inicial.
3. Após a conclusão da tarefa, aguarde o tempo restante ou clique em ➡ (ou pressione Espaço) para encerrar o episódio antecipadamente.
4. Durante o período de descanso, retorne o objeto ao Ponto A e prepare o braço para o próximo episódio.

![Record task episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-2-recording-episode-soarm-en.webp)

> **Importante**
> - Fixe as câmeras antes da coleta. Os braços, o gripper, o objeto e os Pontos A e B devem permanecer visíveis em ambas as visualizações.
> - Não permita que ações-chave sejam bloqueadas ou saiam do campo de visão das câmeras.
> - Se a tarefa falhar, o objeto não for segurado com segurança, o vídeo travar ou uma câmera for bloqueada, clique em **Record Again** ou pressione `Esc` para parar a coleta.
> - Você pode terminar o lote primeiro e depois inspecionar e excluir episódios anormais.
> - Pare imediatamente se houver perda de controle ou risco de colisão.

#### 3.4.3 Inspecionar, excluir e mesclar dados

Após a coleta, inspecione episódios anormais, exclua dados inválidos e mescle conjuntos de dados compatíveis quando necessário.

| Operação | Método | Descrição |
|---|---|---|
| Inspecionar episódios anormais | Selecione um episódio e reproduza o vídeo ou a repetição da ação | Verifique a conclusão da tarefa e o movimento da garra |
| Excluir episódios anormais | Clique em **Batch Delete Episodes**, selecione os episódios, confirme e clique em **Generate Deleted Copy** | Renomeie o novo conjunto de dados; o conjunto de dados original não é sobrescrito |
| Mesclar conjuntos de dados | Clique em **Merge**, selecione conjuntos de dados e insira um novo nome de conjunto de dados | Mescle conjuntos de dados com descrições de tarefa, combinações de dispositivos e configurações de câmera correspondentes |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspecionar conjunto de dados](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-check-soarm-en.webp)


<figcaption>Inspecionar conjunto de dados</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Excluir episódios anormais](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-delete-soarm-en.webp)


<figcaption>Excluir episódios anormais</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Mesclar conjuntos de dados](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-merge-soarm-en.webp)


<figcaption>Mesclar conjuntos de dados</figcaption>
</figure>

</div>

<span id="training"></span>

### 3.5 Treinamento

O treinamento gera um modelo de ação a partir dos dados de ensino. O SenseCraft Robotics lê os dados de tarefa gravados, analisa como o braço executa a ação alvo e gera um modelo para operação autônoma.

| Parâmetro | Opção / valor | Detalhes |
| :--- | :--- | :--- |
| **Training hardware** | Cloud · automatically select GPU | Usa um servidor em nuvem e consome os créditos correspondentes. |
| | Local · free | Usa o computador atual e requer uma GPU local compatível. |
| **Training dataset** | Select the target dataset | Selecione um conjunto de dados gravado e preparado. |
| **Policy** | ACT | A política de controle de ação padrão atual. |
| **Training steps** | `10000` | Recomendado como valor inicial; ajuste de acordo com os resultados. |

> **Aviso sobre créditos**
> O treinamento em nuvem consome créditos; o treinamento local não consome créditos de treinamento em nuvem. Consulte as [Credit rules](/pt-br/sensecraft_robotics/#credit-rules) para obter informações sobre créditos.

**Etapas de treinamento e contagem de episódios recomendadas:**

| Dificuldade da tarefa | Descrição da tarefa | Episódios recomendados | Etapas recomendadas |
|---|---|---:|---:|
| Iniciante | Ponto fixo A para ponto B | Cerca de 20 | 10.000–15.000 |
| Intermediário | Agarrar e colocar em posições aleatórias | Cerca de 50 | 30.000–40.000 |
| Avançado | Várias etapas ou longa duração | Cerca de 100 | 80.000–100.000 |

> **Duração do treinamento:** O tempo total de treinamento depende do modelo de GPU selecionado e do número de etapas de treinamento. Por exemplo, 20.000 etapas na nuvem podem levar de vários minutos a dezenas de minutos na maioria das GPUs; 100.000 etapas levam cerca de cinco vezes mais tempo.

Clique em **Start Training** após confirmar as configurações. Veja o progresso e o histórico em **Current Training Tasks**.

![Configuração de treinamento](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-5-training-soarm-en.webp)

<span id="model"></span>

### 3.6 Modelo

**Model** é usado para visualizar os resultados do treinamento e selecionar um modelo para operação. Confirme que o treinamento foi concluído e que a combinação de tarefa e dispositivo corresponde ao projeto atual.

![Lista de modelos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-6-model-soarm-en.webp)

<span id="run"></span>

### 3.7 Operação

**Operation** carrega um modelo treinado nos braços para verificar se ele consegue concluir a tarefa corretamente.

1. **Selecionar um modelo:** Selecione um modelo marcado como compatível com os braços atuais.
2. **Selecionar um método de inferência:** Selecione **Cloud Inference** ou **Local Inference** e configure os parâmetros correspondentes.
3. **Iniciar a inferência:** Confirme as configurações e clique em **Start Cloud/Local Inference**.

**Principais diferenças entre inferência em nuvem e inferência local:**

| Comparação | Inferência em nuvem | Inferência local |
| :--- | :--- | :--- |
| **Hardware de computação** | Usa uma GPU de nuvem de alto desempenho. | Usa a CPU local; a plataforma atual não oferece suporte a GPU local. |
| **Impacto no desempenho** | Os resultados dependem fortemente da qualidade da transmissão de rede. | Os resultados dependem do desempenho da CPU local. |
| **Parâmetros** | **Action count (padrão 120):** etapas de ação previstas por inferência. <br />**Chunk threshold (padrão 0,9):** afeta a suavidade e a precisão. Valores mais altos são mais cautelosos e podem pausar; valores mais baixos são mais suaves, mas podem aumentar erros. | **Run count:** número de execuções repetidas da tarefa. <br />**Time limit per run:** duração máxima de uma execução; ela termina automaticamente ao atingir o tempo limite. |
| **Saída de dados** | Executa apenas a verificação de inferência. | Gera automaticamente um conjunto de dados a partir das execuções de inferência após o término da operação. |
| **Custo e limitações** | Sujeito às regras da plataforma; o poder de computação é adequado para começar rapidamente. | Normalmente não requer créditos de nuvem, mas é limitado pelo desempenho da CPU local. |

**Observações**

- Antes da operação, confirme que os braços estão conectados corretamente e que a área de trabalho é segura.
- Durante a operação, não desconecte nem desmonte os braços. Observe seus movimentos.
- Se o resultado não for satisfatório, volte para **Dataset**, exclua episódios anormais, adicione dados válidos e treine novamente.
![Interface de operação do modelo](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-inference-soarm-en.webp)
![Interface de operação do modelo](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-run-soarm-en.webp)
