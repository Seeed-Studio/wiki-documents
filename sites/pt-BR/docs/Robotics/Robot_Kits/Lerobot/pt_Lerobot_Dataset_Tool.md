---
description: Este wiki abrange utilitários de conjunto de dados do LeRobot, incluindo exclusão de episódios, mesclagem de conjuntos de dados e muito mais.
title: Ferramenta de Dataset do LeRobot
keywords:
  - Lerobot
  - Hugging Face
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_dataset_tool
sku: E24122002, 114993609, 114993608, 108090023, 108090003, 101090141, 101090142, 114090081,114090080,100049805,100038899,100028196
last_update:
  date: 2/11/2026
  author: ZhangJiaQuan
translation:
  skip:
    - zh-CN
createdAt: '2026-03-02'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/lerobot_dataset_tool/
---

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
</div>

| **Braço Seguidor Viola** | **Braço Líder Violino** | **Braço Seguidor Violoncelo** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

## Visão geral
Neste wiki, você aprenderá como:
- 1. **Excluir episódios** — remover episódios específicos de um conjunto de dados
- 2. **Dividir um conjunto de dados** — dividir um conjunto de dados completo em vários conjuntos de dados menores
- 3. **Mesclar conjuntos de dados** — mesclar vários conjuntos de dados em um conjunto de dados maior
- 4. **Remover features** — remover features específicas de um conjunto de dados
- 5. **Converter para vídeo** — converter um conjunto de dados baseado em imagens para formato de vídeo para armazenamento mais eficiente
- 6. **Enviar um conjunto de dados para o Hugging Face Hub**
- 7. **Visualizar um conjunto de dados online** — ver conjuntos de dados gravados e enviados no Hugging Face
- 8. **Visualizar um conjunto de dados offline** — ver conjuntos de dados gravados armazenados localmente

Para um tutorial passo a passo sobre como gravar/coletar um conjunto de dados com LeRobot, consulte: [Introdução ao braço robótico SO-ARM100 e SO-ARM101 com LeRobot](/pt-br/lerobot_so100m_new/).

Todas as operações acima podem ser feitas com `lerobot-edit-dataset` usando os argumentos apropriados. Abaixo estão os comandos completos e explicações.

## Excluir episódios
Essa operação exclui episódios indesejados de um conjunto de dados.

### Comando 1: Excluir episódios específicos em um conjunto de dados
```bash
# Delete episodes 0, 2, and 5 (modifies original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```
#### Explicação
- `--repo_id lerobot/pusht`  
    Especifica o repositório do conjunto de dados a ser operado, ou seja, `lerobot/pusht`, onde `lerobot` é o nome de usuário e `pusht` é o nome do conjunto de dados.

- `--operation.type delete_episodes`  
    Define o tipo de operação como **excluir episódios**.

- `--operation.episode_indices "[0, 2, 5]"`  
    Especifica os índices dos episódios a serem excluídos. Aqui ele exclui os episódios **0, 2 e 5**.

### Comando 2: Excluir episódios e salvar como um novo conjunto de dados (preservar o original)
```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```
#### Explicação
- `--repo_id lerobot/pusht`  
    Usa o conjunto de dados original como entrada.

- `--new_repo_id lerobot/pusht_after_deletion`  
    Especifica um novo nome de repositório de conjunto de dados para salvar o resultado modificado.

## Dividir um conjunto de dados

### Comando 1: Dividir por frações
Caso de uso: treinamento/experimentos rápidos
```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```
#### Explicação
- `--operation.type split`  
    Define o tipo de operação como **dividir conjunto de dados**.

- `--operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'`  
    Divide `lerobot/pusht` em três conjuntos de dados por fração:

    - `train`: ~80% dos episódios

    - `test`: ~10% dos episódios

    - `val`: ~10% dos episódios

Após a divisão, os conjuntos de dados permanecem no Hub. O nome da divisão é adicionado como sufixo ao nome original. Por exemplo, o comando acima cria `lerobot/pusht_train`, `lerobot/pusht_test` e `lerobot/pusht_val`.

### Comando 2: Dividir por índices de episódios explícitos
```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```
#### Explicação

- `--operation.type split`  
    O tipo de operação continua sendo **dividir conjunto de dados**.

- `--operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'`  
    Divide por **índices de episódios explícitos**:

    - `task1`: episódios 0, 1, 2, 3

    - `task2`: episódios 4, 5

## Mesclar conjuntos de dados
```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```
#### Explicação
- `--repo_id lerobot/pusht_merged`  
    Especifica o **novo nome do conjunto de dados** após a mesclagem.  
    O resultado mesclado será salvo neste repositório de conjunto de dados.

- `--operation.type merge`  
    Define o tipo de operação como **mesclar conjuntos de dados**.

- `--operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"`  
    Especifica os conjuntos de dados de origem a serem mesclados:

    - `lerobot/pusht_train`

    - `lerobot/pusht_val`

## Remover features

Essa operação remove features de um conjunto de dados. Ela é útil quando você deseja descartar certas modalidades de observação. Por exemplo, se o seu conjunto de dados contiver duas câmeras (uma câmera superior e uma câmera de pulso), mas você só quiser manter a câmera de pulso para treinamento e implantação, você pode remover a feature de observação da câmera superior do conjunto de dados.
```bash

lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```
#### Explicação
- `--operation.type remove_feature`  
    Define o tipo de operação como **remover feature**.

- `--operation.feature_names "['observation.images.top']"`  
    Especifica os nomes das features a serem removidas.  
    Aqui ela remove a feature de imagem de câmera chamada `observation.images.top`.

## Converter para vídeo

Converta um **conjunto de dados baseado em imagens** em **formato de vídeo**, produzindo um novo `LeRobotDataset`.  
Durante a conversão, os dados de câmera originalmente armazenados como quadros de imagem individuais são codificados em arquivos de vídeo MP4.

Isso é usado principalmente para:

- Reduzir o uso geral de armazenamento

- Melhorar o desempenho de carregamento e leitura de dados

Após a conversão, o novo conjunto de dados é **idêntico em estrutura e conteúdo** ao original, exceto pelo fato de que:  
os dados de imagem não são mais armazenados como quadros brutos, mas salvos em formato de vídeo compatível com LeRobot.

As opções de conversão podem ser personalizadas e combinadas livremente. Abaixo estão seis comandos de exemplo para referência.

1. Converter um conjunto de dados de imagem para vídeo e salvar apenas em um diretório de saída local (sem envio para o Hub).
```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir /path/to/output/pusht_video
```

2. Salvar o resultado convertido como um novo conjunto de dados com um novo `repo_id`.
```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

3. Converter e enviar o novo conjunto de dados para o Hugging Face Hub.
```bash
# Convert and push to Hugging Face Hub
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video \
    --push_to_hub true
```

4. Converter com um codec de vídeo e configurações de qualidade personalizados.
```bash
# Convert with custom video codec and quality settings
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir outputs/pusht_video \
    --operation.vcodec libsvtav1 \
    --operation.pix_fmt yuv420p \
    --operation.g 2 \
    --operation.crf 30
```

5. Converter com múltiplos workers para processamento mais rápido.
```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir outputs/pusht_video \
    --operation.num_workers 8
```
6. Para sistemas com restrição de memória, reduzir o uso máximo de memória limitando episódios e quadros por lote.
```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

#### Explicação
- **output_dir**：  
    Diretório de saída personalizado (opcional).  
    Se não for especificado, o padrão é `{repo_id}_video` ou o diretório correspondente a `new_repo_id`.

- **vcodec**：  
    Codec de vídeo.  
    As opções incluem `h264`, `hevc`, `libsvtav1` (padrão: `h264`).

- **pix_fmt**：  
    Formato de pixel de vídeo.  
    As opções incluem `yuv420p`, `yuv444p` (padrão: `yuv420p`).

- **g**：  
    Tamanho do GOP (intervalo de quadro-chave).  
    Valores menores geralmente aumentam a qualidade, mas também aumentam o tamanho do arquivo (padrão: 2).

- **crf**：  
    Constant Rate Factor.  
    Valores menores significam maior qualidade e arquivos maiores; `0` significa codificação sem perdas (padrão: 30).

- **fast_decode**：  
    Flag de ajuste para decodificação rápida (padrão: 0).

- **episode_indices**：  
    Lista de índices de episódios a serem convertidos (padrão: converter todos os episódios).

- **num_workers**：  
    Número de processos de worker em paralelo (padrão: 4).

O conjunto de dados resultante é um **LeRobotDataset completo e padrão**:

- Todos os dados de câmera são armazenados como vídeos em `videos/`

- Arquivos `.parquet` contêm apenas metadados e não contêm mais imagens brutas

- Todos os episódios, estatísticas e definições de tarefas são preservados.


## Visualizar um conjunto de dados online

Quando você grava um conjunto de dados com LeRobot, ele é enviado automaticamente para o Hugging Face Hub, a menos que você especifique o contrário. Para ver o conjunto de dados online, use a **ferramenta de visualização de conjuntos de dados do LeRobot** do Hugging Face: [https://huggingface.co/spaces/lerobot/visualize_dataset](https://huggingface.co/spaces/lerobot/visualize_dataset)

## Visualizar um conjunto de dados localmente

### Visualizar localmente um conjunto de dados a partir do Hub

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

### Visualizar um conjunto de dados local

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

#### Explicação
- **`lerobot-dataset-viz`**  
    Ferramenta de visualização de conjunto de dados para ver episódios em um conjunto de dados LeRobot.

- **`--repo-id lerobot/pusht`**  
    Nome do conjunto de dados a ser visualizado.

- **`--root ./my_local_data_dir`**  
    Diretório raiz dos conjuntos de dados locais.  
    No modo local, a ferramenta procura o conjunto de dados neste diretório usando o `repo-id` fornecido.

- **`--mode local`**  
    Usar modo de fonte de dados local.  
    O conjunto de dados é carregado do sistema de arquivos local em vez de um repositório remoto.

- **`--episode-index 0`**  
    Índice do episódio a ser visualizado.  
    Aqui ele visualiza o episódio 0 (o primeiro episódio no conjunto de dados).

## Perguntas frequentes

- Se você estiver seguindo este tutorial, faça git clone do repositório recomendado: `https://github.com/Seeed-Projects/lerobot.git`. O repositório recomendado aqui é uma versão estável verificada. O repositório oficial do LeRobot é atualizado continuamente, o que pode introduzir problemas inesperados (por exemplo, mudanças na versão do conjunto de dados, comandos diferentes).

- Se a operação do conjunto de dados parecer travar, tente pressionar Enter para atualizar a saída do terminal.

- Como o novo formato de conjunto de dados é armazenado de forma compactada, as operações podem levar mais tempo. Você verá uma barra de progresso no terminal — por favor, seja paciente.

Referência: https://huggingface.co/docs/lerobot/using_dataset_tools
