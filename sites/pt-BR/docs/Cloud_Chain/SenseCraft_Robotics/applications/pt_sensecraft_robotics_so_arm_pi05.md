---
title: Treinar e Executar π0.5 com SO-ARM
description: Use SO-ARM e π0.5 para coletar e mesclar dados de organização de mesa com múltiplas tarefas, treinar na nuvem, executar inferência no robô e melhorar o modelo.
keywords:
  - SenseCraft Robotics
  - SO-ARM
  - π0.5
  - VLA
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-scene-en.webp
slug: /sensecraft_robotics/applications/so-arm-pi05
last_update:
  date: 11/10/2026
  author: Seeed Studio
---

**Download da plataforma SenseCraft Robotics:** [Download](https://sensecraft.seeed.cc/en/robotics?utm_source=wiki&utm_medium=referral&utm_campaign=sensecraft_wiki&utm_content=soarm_pi0.5)

Este tutorial usa um projeto de organização de mesa com três tarefas para demonstrar coleta de dados, treinamento em nuvem e validação no mundo real com SO-ARM + π0.5. As etapas detalhadas se concentram em colocar a caixa quadrada em um recipiente de armazenamento. Colete dados para as outras duas tarefas da mesma forma e, em seguida, mescle os três conjuntos de dados de tarefas para o treinamento.

Após concluir este tutorial, insira “Place the square box in the storage bin” para testar se o robô consegue colocar a caixa quadrada no recipiente de armazenamento. Em seguida, insira instruções para as outras tarefas para testar se o robô consegue alternar para executá-las.

Você pode assistir primeiro ao vídeo tutorial abaixo ou seguir o guia passo a passo a seguir.

<div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: '12px' }}>
  <iframe
    src="https://www.youtube.com/embed/Tfoej8WtSUE"
    title="Tutorial em Vídeo: Treinar e Executar π0.5 com SO-ARM"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

## 1. Entenda o Fluxo de Trabalho de Treinamento

Um modelo VLA (Vision-Language-Action) combina informações de visão, linguagem e ação. Neste projeto, as câmeras capturam os objetos a serem organizados e seus recipientes de destino, a instrução da tarefa especifica qual objeto pegar e onde colocá-lo, e o estado do robô fornece informações como as posições atuais das juntas. O modelo combina essas entradas para prever as próximas ações do robô.

O fluxo de trabalho completo é:

**Criar um projeto → Configurar o robô e as câmeras → Coletar demonstrações com instruções → Revisar e mesclar conjuntos de dados → Treinar na nuvem → Executar no robô real → Avaliar e coletar mais dados**

Uma tarefa normalmente requer várias demonstrações. Em um conjunto de dados contendo várias tarefas, cada episódio deve manter sua instrução de tarefa correspondente.

| Conceito | Significado | Exemplo |
|---|---|---|
| Instrução de tarefa (Task) | Descreve o objetivo que o robô deve cumprir | Place the square box in the storage bin |
| Episódio | Um registro completo de execução de tarefa, incluindo imagens, estados do robô, ações e dados relacionados | Pegar a caixa quadrada da posição inicial, colocá-la no recipiente de armazenamento e parar a gravação |

## 2. Pré-requisitos

Antes de começar, prepare o seguinte:

- Um braço líder e um braço seguidor SO-ARM totalmente montados e funcionando.
- Fontes de alimentação, cabos USB e câmeras compatíveis.
- Um computador com o aplicativo desktop SenseCraft Robotics atualizado para a V1.1.27, com conexão de rede estável.

  **Download de software:** [Download](https://sensecraft.seeed.cc/en/robotics?utm_source=wiki&utm_medium=referral&utm_campaign=sensecraft_wiki&utm_content=soarm_pi0.5)
- Armazenamento local suficiente no seu computador e créditos de conta suficientes para a tarefa de treinamento.
- Objetos relacionados à tarefa, como a caixa quadrada e um recipiente de armazenamento, e uma bancada estável.

Se esta for a sua primeira vez usando o robô, conclua a montagem e a configuração básica antes de prosseguir.

> Antes de executar o robô, fixe sua base, limpe sua área de trabalho e certifique-se de que você pode pará-lo rapidamente. Mantenha pessoas e objetos frágeis fora da área de movimento do robô durante os testes iniciais.

![Configuração de treinamento de organização de mesa com SO-ARM](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-scene-en.webp)

## 3. Criar um Projeto de Treinamento de Modelo de IA

1. Abra o SenseCraft Robotics.
2. Crie um projeto com um nome fácil de reconhecer, como `SOARM-Desktop-Organization`.
3. Selecione **AI Model Training** como o objetivo do projeto.
4. Após criar o projeto, abra **Device Setup**.

Projetos de AI Model Training oferecem suporte à coleta de dados, treinamento de modelo e inferência. Se você só precisa gravar e repetir uma trajetória fixa, escolha em vez disso um projeto de Action Playback. Este tutorial usa um projeto de AI Model Training.

![Lista de projetos do SenseCraft Robotics e entrada para novo projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/project-list-en.webp)

![Criar um projeto de Treinamento de Modelo de IA](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/create-project-en.webp)

## 4. Configurar o Braço Robótico e as Câmeras

Em Device Setup, siga as instruções na tela para concluir estas etapas:

1. **Selecionar o dispositivo:** Escolha o modelo de braço robótico que você está usando. Este tutorial usa SO-ARM.
2. **Vincular portas seriais:** Identifique as portas para o braço líder e o braço seguidor. Para evitar trocá-las, conecte primeiro o cabo USB do braço líder e vincule sua porta; em seguida, conecte e vincule o braço seguidor.
3. **Calibrar:** Siga o procedimento guiado para estabelecer referências de posição das juntas, de modo que o braço seguidor possa acompanhar corretamente o líder. O SO-ARM oferece suporte à calibração automática e manual. Para calibração automática, posicione o braço conforme instruído e deixe espaço suficiente ao redor para evitar colisões durante a calibração.
4. **Verificar teleoperação:** Mova o braço líder lentamente. Confirme que o seguidor o acompanha corretamente e que a garra abre e fecha normalmente.
5. **Vincular câmeras:** Selecione as câmeras necessárias para a coleta de dados e verifique seus feeds ao vivo.

Verifique os feeds ao vivo das câmeras: a caixa quadrada e o recipiente de armazenamento devem estar claramente visíveis. Simule o movimento da posição inicial da caixa quadrada até o recipiente de armazenamento e confirme que a pega e a colocação permanecem dentro do enquadramento. Se estiver usando uma câmera de punho, verifique se a área de pega está visível à medida que a garra se aproxima da caixa. Verifique as áreas de pega e colocação para as outras duas tarefas da mesma forma.

Mantenha as posições das câmeras, ângulos de visão, configurações dos dispositivos e iluminação o mais consistentes possível entre a coleta de dados e a execução. Após alterar a configuração, verifique a compatibilidade com seus dados e modelos existentes.

Para instruções detalhadas de configuração, consulte o [Guia SO-ARM101](/pt-br/sensecraft_robotics_so_arm101/).

## 5. Coletar Demonstrações com Instruções de Tarefa

### 5.1 Criar um Conjunto de Dados e Inserir uma Descrição de Tarefa

1. Abra **Datasets** e crie um conjunto de dados para a tarefa.
2. Nas configurações de coleta, insira um nome de conjunto de dados e uma descrição de tarefa. A descrição da tarefa se torna a instrução para cada episódio neste lote. Descreva claramente a ação e o destino, por exemplo, “Pick up the square box and place it in the storage bin.” Evite descrições vagas como “pick up” ou “task 1.” Escolha um nome de conjunto de dados que identifique claramente o conteúdo coletado; você também pode usar a própria descrição da tarefa para tornar o conjunto de dados fácil de identificar e gerenciar.
3. Defina o número de episódios, a duração por episódio e a duração de descanso. Ajuste a contagem de episódios de acordo com a dificuldade da tarefa. Para este tutorial, comece com 50 episódios por tarefa e grave substituições após a filtragem, de modo que você tenha pelo menos 50 demonstrações válidas. Primeiro grave uma tentativa completa de pega e colocação para determinar uma duração de episódio adequada. Reserve tempo de descanso suficiente para reposicionar os objetos e o robô em suas posições iniciais. Para configurações simples, geralmente 10–15 segundos são suficientes.
4. Verifique o braço robótico, a câmera e as configurações de armazenamento.
5. Posicione os objetos e o braço robótico para que estejam prontos para a demonstração. Certifique-se de que tanto a posição inicial do objeto quanto seu destino estejam ao alcance do robô. Mantenha a posição inicial do objeto e a posição do recipiente fixas durante a coleta inicial para facilitar o reposicionamento. Colete dados com posições aleatórias mais tarde, durante a otimização.

![Página de conjuntos de dados antes de criar um conjunto de dados](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/dataset-empty-en.webp)

![Nome do conjunto de dados, descrição da tarefa e configurações de coleta](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/dataset-collection-settings-en.webp)

### 5.2 Gravar Vários Episódios

1. Inicie a gravação.
2. Use o braço líder para teleoperar o braço seguidor em uma demonstração completa de pega e colocação.
3. Pare a gravação quando a tarefa estiver concluída.
4. Revise a gravação e mantenha as demonstrações válidas.
5. Reposicione os objetos e o braço robótico e, em seguida, grave a próxima demonstração.

Antes de cada episódio, use o período de descanso para retornar a caixa quadrada à posição inicial, manter o recipiente de armazenamento no lugar e retornar o robô a uma pose inicial consistente. Grave a sequência: aproximar-se da caixa quadrada → fechar a garra → erguer → mover acima do recipiente de armazenamento → soltar. Grave e reposicione as outras duas tarefas separadamente da mesma forma.

![Iniciar gravação de dados de demonstração](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/start-recording-en.webp)

![Progresso de gravação do episódio e atalhos](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/episode-recording-en.webp)

### 5.3 Coletar Dados para Diferentes Tarefas

Para treinar um modelo para executar várias tarefas, grave demonstrações para cada tarefa separadamente. Por exemplo:

| Tarefa | Exemplo de instrução |
|---|---|
| Pick up the square box and place it in the storage bin | Pick up the square box and place it in the storage bin. |
| Pick up the orange and place it on the fruit plate | Pick up the orange and place it on the fruit plate. |
| Pick up the donut and place it in the toy box | Pick up the donut and place it in the toy box. |

Este projeto contém três tarefas de organização. Após coletar a tarefa da caixa quadrada, crie conjuntos de dados separados para as outras duas tarefas, insira suas descrições de tarefa correspondentes e grave suas demonstrações. A instrução de cada lote deve corresponder à ação demonstrada. Não reutilize a instrução da caixa quadrada para as outras tarefas.

![Lista de conjuntos de dados para as três tarefas de organização](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/task-datasets-en.webp)

## 6. Revisar e mesclar conjuntos de dados

Antes do treinamento, abra os detalhes do conjunto de dados, revise os episódios por tarefa e verifique se:

- As instruções da tarefa estão corretas e completas.
- As imagens estão nítidas e as ações importantes são visíveis.
- As demonstrações estão completas, sem falhas óbvias ou trechos não relacionados.
- Nenhuma tarefa apresenta lacunas significativas na cobertura de dados.

Depois de coletar e revisar as três tarefas, selecione os três conjuntos de dados correspondentes no recurso de mesclagem. Você pode nomear o conjunto de dados mesclado como “organização da mesa”. Preserve a associação de tarefa original e a instrução de cada episódio e, em seguida, use o conjunto de dados mesclado de três tarefas para treinar o modelo.

Antes de mesclar, verifique a compatibilidade entre tipos de robô, configurações de câmera, taxas de quadros de coleta (FPS), espaços de ação e outras configurações relevantes. Se a plataforma relatar uma incompatibilidade, ajuste os conjuntos de dados de origem ou colete novos dados conforme as instruções.

Por exemplo, se cada um dos três conjuntos de dados de origem contiver 50 episódios válidos, verifique se o conjunto de dados mesclado mostra 3 tarefas e 150 episódios. Filtre por cada tarefa e reproduza alguns episódios para confirmar se as instruções correspondem às demonstrações e se as câmeras capturaram todo o processo. Exclua gravações com falha ou incompletas das demonstrações bem-sucedidas e, em seguida, registre substituições. Verifique também as outras duas tarefas em relação aos respectivos critérios de sucesso.

![Tarefas e episódios no conjunto de dados mesclado](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merged-dataset-episodes-en.webp)

![Entrada de mesclagem na lista de conjuntos de dados](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merge-datasets-en.webp)

![Selecionar e mesclar três conjuntos de dados de origem](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merge-datasets-dialog-en.webp)

## 7. Treinar o π0.5 na nuvem

1. Abra a página **Train**.
2. Escolha a GPU em nuvem que você deseja usar.
3. Selecione o conjunto de dados que você revisou.
4. Selecione **π0.5** como a estratégia de treinamento.
5. Use a configuração de treinamento recomendada pela plataforma como ponto de partida para sua primeira execução.
6. Revise os parâmetros de treinamento e as informações de recurso, cota ou custo exibidas na página.
7. Envie o job de treinamento e monitore seu status e progresso na página de treinamento.

Antes do envio, a plataforma verifica se os dados atendem aos requisitos do modelo. Se ela relatar instruções de tarefa ausentes, incompatibilidades de configuração de câmera ou outros problemas de dados, resolva-os antes de enviar novamente.

Quando o treinamento terminar, abra **Models** e encontre o modelo deste job de treinamento. O nome da tarefa geralmente é o nome do conjunto de dados seguido da estratégia de treinamento.

**Um job de treinamento concluído não estabelece o desempenho da tarefa no mundo real; você ainda precisa validar o modelo no robô.** Para sua primeira iteração, execute o modelo antes de decidir se deve adicionar dados ou ajustar as configurações de treinamento com base nas falhas observadas.

![Encontrar o modelo treinado na lista de modelos](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/cloud-gpu-selection-en.webp)

![Status e progresso do treinamento em nuvem do π0.5](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-progress-en.webp)

## 8. Executar o modelo no SO-ARM

> **Modo de execução:** Modelos VLA, especialmente o π0.5 usado neste tutorial, exigem grande capacidade de computação e memória de GPU. Um computador típico pode ter dificuldade para executá-los de forma fluida. Para este tutorial, use uma GPU em nuvem para inferência. O braço robótico e as câmeras permanecem conectados ao seu computador local, e o robô executa a saída do modelo localmente. Mantenha sua conexão de rede estável. Antes de tentar a inferência local, confirme se o seu ambiente de hardware e software atende aos requisitos do modelo selecionado.

1. Abra a página **Run**.
2. Escolha a GPU em nuvem que você deseja usar.
3. Selecione o modelo π0.5 treinado e um modo de execução disponível que seja compatível com ele.
4. Confirme se o robô e as câmeras estão conectados corretamente e se sua configuração corresponde aos dados de treinamento.
5. Devolva a caixa quadrada e o recipiente de armazenamento às posições usadas durante a coleta de dados e retorne o robô à pose inicial usada nas demonstrações. Para o primeiro teste, use as mesmas visões de câmera, objetos e arranjo da mesa usados durante a coleta.
6. Para este exemplo, insira “Pick up the square box and place it in the storage bin.” Use a mesma instrução das demonstrações com a caixa quadrada. Ao validar as outras duas tarefas, redefina suas respectivas cenas e insira a instrução original de cada tarefa.
7. Inicie a execução e observe se o robô conclui a tarefa. Pare imediatamente se notar movimentos anormais.

Para um modelo treinado em várias tarefas, valide cada tarefa usando sua instrução correspondente.

![Executar o modelo VLA no SenseCraft Robotics](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/run-model-preview-en.webp)

## 9. Melhorar o modelo com base nos resultados de execução

| Problema observado | O que verificar ou adicionar primeiro |
|---|---|
| Sucesso apenas a partir de algumas posições iniciais | Adicione demonstrações corretas com diferentes posições de objetos |
| Falhas frequentes de preensão ou posicionamento impreciso | Verifique câmeras, calibração do robô e qualidade dos dados; adicione demonstrações para os cenários afetados |
| Desempenho ruim em uma tarefa em um modelo multitarefa | Verifique as instruções dessa tarefa, a qualidade dos episódios e a cobertura de dados |
| Queda de desempenho após mudar câmeras ou a cena | Verifique a consistência da configuração e colete dados nas novas condições |
| As ações não correspondem à instrução da tarefa | Verifique as associações episódio–tarefa e a instrução inserida em tempo de execução |

Mantenha versões de conjuntos de dados, configurações de treinamento e resultados de teste para cada iteração, para que você possa avaliar se as mudanças ajudam. Para suas primeiras melhorias, priorize problemas claros de dados antes de ajustar parâmetros de treinamento.

## 10. Perguntas frequentes

### Um conjunto de dados pode conter várias tarefas?

Sim. Cada episódio deve manter a instrução de tarefa correta. Ao mesclar dados de diferentes tarefas, certifique-se de que os modelos de dispositivo, câmeras e outras configurações de dados sejam compatíveis.

### Depois do treinamento, posso executar qualquer tarefa apenas mudando a instrução?

Não há tal garantia. O desempenho depende do modelo base, dos dados de demonstração e das condições do mundo real. Valide primeiro as tarefas cobertas durante o treinamento e, em seguida, teste gradualmente novas instruções ou condições.

### Os dados de avaliação podem ser usados para treinamento adicional?

Sim, depois de revisar e filtrar os dados e confirmar que eles atendem aos requisitos. Use gravações com falha para analisar problemas e priorize a adição de demonstrações corretas para esses cenários.

### O que fazer se eu ficar sem armazenamento local?

Veja e altere o caminho de armazenamento de dados local nas configurações do aplicativo e siga as instruções para migrar os dados existentes. Após a migração, confirme se seus conjuntos de dados, modelos, gravações de ações e dados de avaliação continuam acessíveis.
