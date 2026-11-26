---
description: Este wiki abrange utilitários de dataset do LeRobot, incluindo exclusão de episódios, mesclagem de datasets e mais.
title: Ferramenta de Dataset SO-ARM
keywords:
  - LeRobot
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
  skip: [zh-CN]
createdAt: '2026-03-02'
updatedAt: '2026-09-16'
url: https://wiki.seeedstudio.com/pt-br/lerobot_dataset_tool/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ferramenta de Dataset SO-ARM

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="Kits de braço robótico SO-ARM100 e SO-ARM101"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Obtenha o Kit SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## Visão geral

Use `lerobot-edit-dataset` para editar datasets e `lerobot-dataset-viz` para visualizar episódios localmente.

Para gravar primeiro um dataset, consulte [Introdução ao SO-ARM100 e SO-ARM101](/pt-br/lerobot_so100m_new/).

Os exemplos seguem a [implementação da ferramenta de dataset LeRobot da Seeed](https://github.com/Seeed-Projects/lerobot/blob/d490e472a5d1a207cfe0255caaaf74b6d66e4656/src/lerobot/scripts/lerobot_edit_dataset.py). Outras versões podem usar opções diferentes.

| Tarefa | Finalidade |
| --- | --- |
| [Excluir episódios](#excluir-episódios) | Remover episódios por índice. |
| [Dividir um dataset](#dividir-um-dataset) | Dividir dados por fração ou índice de episódio. |
| [Mesclar datasets](#mesclar-datasets) | Combinar vários datasets em um novo dataset. |
| [Remover features](#remover-features) | Remover features selecionadas, como imagens de uma câmera. |
| [Converter para vídeo](#converter-para-vídeo) | Codificar quadros de imagem como vídeo e, opcionalmente, enviar o resultado para o Hugging Face Hub. |
| [Visualizar um dataset online](#visualizar-um-dataset-online) | Visualizar um dataset enviado no seu navegador. |
| [Visualizar um dataset localmente](#visualizar-um-dataset-localmente) | Usar o visualizador de linha de comando com um dataset do Hub ou local. |

### Braços robóticos relacionados

| Braço seguidor de viola | Braço líder de violino | Braço seguidor de violoncelo |
| --- | --- | --- |
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" width={160} alt="Braço seguidor de viola" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg" width={160} alt="Braço líder de violino" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png" width={160} alt="Braço seguidor de violoncelo" /> |

## Excluir episódios

Aqui, um episódio é uma gravação completa de uma ação do robô.

<span id="command-1-delete-specific-episodes-in-a-dataset" aria-hidden="true" />
<span id="command-2-delete-episodes-and-save-as-a-new-dataset-preserve-the-original" aria-hidden="true" />

<Tabs defaultValue="new-dataset">
<TabItem value="new-dataset" label="Salvar como um novo dataset">

Defina `--new_repo_id` para salvar o resultado mantendo o dataset original. Este exemplo remove os episódios 0, 2 e 5.

```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

</TabItem>
<TabItem value="in-place" label="Modificar o original">

:::caution
Este comando modifica o dataset original. Verifique primeiro o ID do dataset e os índices dos episódios. Selecione **Salvar como um novo dataset** para manter os dados originais.
:::

```bash
# Delete episodes 0, 2, and 5 (modifies original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

</TabItem>
</Tabs>

| Opção | Finalidade |
| --- | --- |
| `--repo_id` | ID do dataset de entrada, como `lerobot/pusht`. |
| `--new_repo_id` | ID do novo dataset ao salvar uma cópia. |
| `--operation.episode_indices` | Lista de índices de episódios a serem excluídos. |

## Dividir um dataset

<span id="command-1-split-by-fractions" aria-hidden="true" />
<span id="command-2-split-by-explicit-episode-indices" aria-hidden="true" />

<Tabs defaultValue="fractions">
<TabItem value="fractions" label="Dividir por fração">

Este exemplo aloca cerca de 80%, 10% e 10% dos episódios para conjuntos de treinamento, teste e validação.

```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

</TabItem>
<TabItem value="indices" label="Dividir por índice de episódio">

Este exemplo coloca os episódios 0–3 em `task1` e os episódios 4–5 em `task2`.

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

</TabItem>
</Tabs>

Cada divisão acrescenta seu nome ao ID de entrada, por exemplo `lerobot/pusht_train`. Estes exemplos salvam os resultados localmente. O envio requer `--push_to_hub true`.

## Mesclar datasets

```bash
lerobot-edit-dataset \
    --new_repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```

| Opção | Finalidade |
| --- | --- |
| `--new_repo_id` | ID do novo dataset mesclado. |
| `--operation.repo_ids` | IDs dos datasets de origem a serem mesclados. |

## Remover features

Se você só precisa das imagens da câmera de pulso, pode remover a feature da câmera superior. Este exemplo remove `observation.images.top` do dataset.

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```

## Converter para vídeo

Codifique quadros de imagem em vídeo em um novo dataset. Isso pode reduzir o uso de armazenamento e melhorar o desempenho de leitura.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Escolha uma saída</h4>
<p className="rebot-step-label">Etapa 1</p>

<Tabs defaultValue="local-folder">
<TabItem value="local-folder" label="Salvar em uma pasta local">

Defina o diretório de saída com `--new_root`. O resultado permanece local.

```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root /path/to/output/pusht_video
```

</TabItem>
<TabItem value="new-id" label="Usar um novo ID de dataset">

Defina o ID para o dataset resultante com `--new_repo_id`. Os arquivos permanecem locais.

```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

</TabItem>
<TabItem value="hub" label="Converter e enviar para o Hub">

Confirme que você tem permissão de escrita no repositório de destino. `--push_to_hub true` envia o resultado após a conversão.

```bash
# Convert and push to Hugging Face Hub
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video \
    --push_to_hub true
```

</TabItem>
</Tabs>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Verifique o resultado</h4>
<p className="rebot-step-label">Etapa 2</p>

Verifique o diretório de saída `videos/` para os arquivos MP4 da câmera e confirme que os episódios, estatísticas e definições de tarefa ainda estão presentes. Os arquivos `.parquet` contêm metadados enquanto os quadros de imagem são armazenados nos vídeos.

</div>
</section>

</div>

### Opções de conversão que você pode combinar

Use as seguintes opções com as configurações de saída conforme necessário.

#### Personalizar codificação

```bash
# Convert with custom video codec and quality settings
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root outputs/pusht_video \
    --operation.rgb_encoder.vcodec libsvtav1 \
    --operation.rgb_encoder.pix_fmt yuv420p \
    --operation.rgb_encoder.g 2 \
    --operation.rgb_encoder.crf 30
```

#### Definir workers paralelos

```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root outputs/pusht_video \
    --operation.num_workers 8
```

#### Limitar o tamanho do lote

```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

| Opção | Finalidade |
| --- | --- |
| `--new_root` | Diretório de saída local personalizado. |
| `--operation.rgb_encoder.vcodec` | Codec de vídeo RGB, como `h264`, `hevc` ou `libsvtav1`. |
| `--operation.rgb_encoder.pix_fmt` | Formato de pixel de vídeo RGB, como `yuv420p`. |
| `--operation.rgb_encoder.g` | Intervalo de keyframe. |
| `--operation.rgb_encoder.crf` | Configuração de qualidade de codificação. Valores menores geralmente aumentam a qualidade e o tamanho do arquivo. |
| `--operation.rgb_encoder.fast_decode` | Ajuste para decodificação rápida. Os valores suportados dependem do codec. |
| `--operation.episode_indices` | Índices de episódios a serem convertidos. Omita para converter todos os episódios. |
| `--operation.num_workers` | Número de workers paralelos. O padrão é 4. |
| `--operation.max_episodes_per_batch` | Número máximo de episódios por lote. |
| `--operation.max_frames_per_batch` | Número máximo de quadros por lote. |

## Visualizar um dataset online

Abra um dataset enviado no [visualizador de datasets do Hugging Face](https://huggingface.co/spaces/lerobot/visualize_dataset).

## Visualizar um dataset localmente

<span id="visualize-a-dataset-from-the-hub-locally" aria-hidden="true" />
<span id="visualize-a-local-dataset" aria-hidden="true" />

<Tabs defaultValue="hub-dataset">
<TabItem value="hub-dataset" label="Visualizar um dataset do Hub">

Use o ID do dataset do Hub. Este exemplo abre o episódio 0.

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

</TabItem>
<TabItem value="local-dataset" label="Visualizar um dataset local">

Informe o diretório do dataset local com `--root` e selecione `--mode local`.

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

</TabItem>
</Tabs>

| Opção | Finalidade |
| --- | --- |
| `--repo-id` | ID do dataset a ser visualizado. |
| `--episode-index` | Índice do episódio, começando em 0. |
| `--root` | Diretório do dataset local. |
| `--mode local` | Ler do sistema de arquivos local. |

## FAQ

- Obtenha a ferramenta usada neste guia no [repositório Seeed LeRobot](https://github.com/Seeed-Projects/lerobot.git). Outras versões podem usar comandos ou formatos de dataset diferentes.
- Se a saída do terminal não for atualizada por algum tempo, pressione Enter para verificar se há nova saída. Operações em datasets compactados podem levar tempo. Observe a barra de progresso.

Consulte a [documentação das ferramentas de dataset do LeRobot](https://huggingface.co/docs/lerobot/using_dataset_tools).
