---
title: Recomendações de Configuração para Coleta de Dados
description: Cenários recomendados de treinamento com SenseCraft Robotics, layouts de câmera, parâmetros de coleta, etapas de treinamento e verificações de implantação.
keywords:
  - SenseCraft Robotics
  - data collection
  - robot training
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/device-model-selection.webp
slug: /sensecraft_robotics_data_collection_configuration
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

**Uma referência de seleção para coleta de dados, layout de visão e parâmetros de treinamento.**

| Item | Conteúdo |
| --- | --- |
| Cenários aplicáveis | Ensino e treinamento de braço robótico, demonstrações de pick-and-place / transferência, coleta de conjuntos de dados e revisão de planos de treinamento de modelos |
| Conclusão principal | Prefira uma configuração com duas visões. Use resolução de câmera 480p e coleta a 60 fps por padrão (corresponde a High). Planeje episódios de coleta e etapas de treinamento de acordo com a dificuldade da tarefa. |
| Prioridade | Garanta primeiro a cobertura completa da câmera e dados estáveis, depois aumente a resolução ou adicione cenários mais complexos. |
| Uso da saída | Pode servir como base para configuração de compra, planos de treinamento e checklists de implantação em campo. |

Para treinamento básico, prefira a configuração "visão superior + garra". Use a configuração "visão superior + visão lateral" quando a tarefa exigir julgamento de altura, tratamento de oclusão ou reconhecimento de pose do alvo.

Inicie a coleta em 480p e 60 fps (taxa de quadros de coleta: High). Se ocorrerem quedas de quadros, primeiro feche a visualização no lado direito da página de coleta e então avalie se deve reduzir a resolução ou atualizar o desempenho do computador. A qualidade do treinamento depende primeiro da estabilidade dos dados e da cobertura do cenário, depois de maior resolução ou de um número mais complexo de câmeras.

## Recomendações Rápidas

- Layout de câmera: Posicione a câmera superior a cerca de 45° em relação ao objeto alvo. O enquadramento deve cobrir o objeto alvo, o efetuador final do braço robótico e a área principal de movimento.
- Resolução: 480p é recomendada por padrão. Ela equilibra nitidez, carga de transmissão e tamanho do arquivo de vídeo. Aumente a resolução apenas quando o desempenho do computador for suficiente.
- Taxa de quadros de coleta: 60 fps é recomendada por padrão (corresponde a High). É suficientemente suave para a maioria das ações de braço robótico. Uma taxa de quadros muito alta pode causar gargalos de desempenho, quedas de quadros ou erros no conjunto de dados.
- Verificações de desempenho: Se ainda ocorrerem quedas de quadros a 60 fps, primeiro feche a visualização de coleta do lado direito e depois verifique a largura de banda da câmera, portas USB, gravação em disco e programas em segundo plano.

## Opções de Configuração de Câmera

| Opção | Tarefas adequadas | Observações de instalação | Observações |
| --- | --- | --- | --- |
| Visão superior + garra | Transferência de ponto fixo, pick-and-place e treinamento básico de ensino. Adequada para observar o processo de contato de preensão. | Posicione a câmera superior a cerca de 45° do alvo e capture o alvo completo e o braço robótico tanto quanto possível. Aponte a câmera da garra para o efetuador final e a área de preensão. | A visão da garra pode tremer ou ser ocluída. Prenda o cabo e verifique a estabilidade da imagem. |
| Visão superior + visão lateral | Preensão em posições aleatórias, mudanças de pose, oclusão ou tarefas que exigem julgamento de altura. | A câmera superior cobre a visão global. A câmera lateral deve capturar claramente o contorno do alvo, a aproximação da garra e a posição de colocação. | Mantenha a câmera lateral fora da área de interferência de movimento do braço robótico e evite oclusão prolongada por dispositivos de fixação ou peças. |

## Observações sobre Seleção de Câmera

| Computador | Combinação recomendada | Observações |
| --- | --- | --- |
| Mac | 2 câmeras USB Hikvision | Mantenha a taxa de quadros do braço robótico em no máximo 60 fps. Coleta a 120 fps não está disponível e podem ocorrer problemas de compatibilidade em alguns casos. |
| Mac | 1 câmera USB Hikvision + 1 Logitech C270 HD Webcam | Atualmente a combinação mais estável. Também pode ser usada para coleta de braço robótico a 120 fps. |
| Mac | 2 Logitech C270 HD Webcams | Também é uma combinação estável e suporta todas as taxas de quadros de coleta do braço robótico. |
| Windows | Todas as combinações acima estão disponíveis | As combinações atualmente funcionam no Windows. Conecte as câmeras diretamente às portas USB e evite hubs. |

Modelos de referência:

- Logitech C270 HD Webcam: [https://www.logitech.com/en-sg/shop/p/c270-hd-webcam](https://www.logitech.com/en-sg/shop/p/c270-hd-webcam)
- Câmera USB Hikvision: modelo básico com foco fixo, 1080p é suficiente

## Parâmetros de Coleta de Dados

| Parâmetro | Valor recomendado | Motivo | Ajuste |
| --- | --- | --- | --- |
| Resolução de vídeo | 480p | Clara o suficiente para ver o alvo e o processo de ação, mantendo o tamanho do arquivo e a pressão de transmissão gerenciáveis. | Aumente a resolução se o desempenho do computador, da câmera e do armazenamento for suficiente. Se houver quedas de quadros, volte primeiro para 480p. |
| Taxa de quadros de coleta | 60 fps (corresponde a High no software SenseCraft) | Suavidade suficiente para registrar o movimento do braço robótico e geralmente não perde ações-chave. | Taxas de quadros mais altas aumentam a carga de desempenho. Se 60 fps ainda causar quedas de quadros, feche primeiro a visualização do lado direito. |
| Janela de visualização | Ativada por padrão; desative quando houver quedas de quadros | A visualização ajuda nas verificações em campo, mas consome recursos de computação. | A estabilidade da coleta tem prioridade mais alta do que a experiência de visualização. Desative visualizações desnecessárias para coletas formais. |
| Integridade dos dados | Verificação por amostragem após cada rodada de coleta | Ajuda a detectar em tempo hábil visões ausentes, quedas de quadros, mudanças de iluminação ou ações com falha. | Use nomenclatura consistente por data, tarefa, dificuldade e número do episódio para rastreabilidade. |

## Dificuldade da Tarefa, Episódios e Etapas de Treinamento

| Dificuldade | Descrição da tarefa | Episódios | Etapas de treinamento sugeridas | Foco de aceitação |
| --- | --- | --- | --- | --- |
| Iniciante | Mover da posição fixa A para a posição B | 20 episódios | 10k-15k etapas | Caminho de movimento estável, erro de posição final controlável e nenhuma falha óbvia de execução repetida. |
| Intermediário | Pegar de posições aleatórias e mover para a posição B especificada | 50 episódios | 30k-40k etapas | Cobre diferentes posições iniciais, taxa de sucesso de preensão estável e posição de colocação consistente. |
| Avançado | Tarefas de longa duração, em múltiplas etapas ou contínuas | 100 episódios | 80k-100k etapas | Foque na estabilidade de longa duração, recuperação de exceções, erro acumulado e cobertura da distribuição do conjunto de dados. |

## Checklist de Implantação em Campo

- Cobertura de visão: O enquadramento deve mostrar o objeto alvo, as ações principais da garra e a área de colocação ao mesmo tempo. O alvo não deve permanecer próximo à borda da imagem por longos períodos.
- Nitidez do alvo: A câmera lateral deve capturar claramente o contorno do alvo. A câmera superior deve mostrar a posição relativa entre o alvo e o braço robótico.
- Taxa de quadros estável: Execute um teste curto antes da coleta formal e confirme que não há quedas contínuas de quadros a 60 fps.
- Ambiente consistente: Mantenha a iluminação estável, o fundo simples e a faixa de posicionamento do alvo clara para reduzir variáveis irrelevantes.
- Rastreabilidade dos dados: Registre a dificuldade da tarefa, opção de câmera, resolução, taxa de quadros, contagem de episódios e exceções para cada sessão de coleta.

## Caminho de Implementação Sugerido

1. Comece com uma tarefa para iniciantes para verificar a cobertura da câmera e a estabilidade da coleta. Confirme que 480p e 60 fps conseguem coletar continuamente.
2. Passe para uma tarefa intermediária, adicione posições iniciais aleatórias e foque na taxa de sucesso de preensão e nas quedas de quadros.
3. Expanda para tarefas avançadas de longa duração, adicione mais episódios e registre amostras anormais para otimização posterior.
4. Antes de aumentar a dificuldade da tarefa, mantenha as posições e parâmetros das câmeras fixos para evitar mudar muitas variáveis de uma só vez.
