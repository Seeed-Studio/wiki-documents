---
description: Este wiki cubre las utilidades del conjunto de datos de LeRobot, incluyendo eliminar episodios, fusionar conjuntos de datos y más.
title: Herramienta de Conjunto de Datos SO-ARM
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
url: https://wiki.seeedstudio.com/es/lerobot_dataset_tool/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Herramienta de Conjunto de Datos SO-ARM

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="Kits de brazo robótico SO-ARM100 y SO-ARM101"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Obtén el kit SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## Descripción general

Usa `lerobot-edit-dataset` para editar conjuntos de datos y `lerobot-dataset-viz` para ver episodios localmente.

Para grabar primero un conjunto de datos, consulta [Primeros pasos con SO-ARM100 y SO-ARM101](/es/lerobot_so100m_new/).

Los ejemplos siguen la [implementación de la herramienta de conjuntos de datos Seeed LeRobot](https://github.com/Seeed-Projects/lerobot/blob/d490e472a5d1a207cfe0255caaaf74b6d66e4656/src/lerobot/scripts/lerobot_edit_dataset.py). Otras versiones pueden usar opciones diferentes.

| Tarea | Propósito |
| --- | --- |
| [Eliminar episodios](#eliminar-episodios) | Quitar episodios por índice. |
| [Dividir un conjunto de datos](#dividir-un-conjunto-de-datos) | Dividir datos por fracción o índice de episodio. |
| [Fusionar conjuntos de datos](#fusionar-conjuntos-de-datos) | Combinar varios conjuntos de datos en uno nuevo. |
| [Eliminar características](#eliminar-características) | Eliminar características seleccionadas como imágenes de una cámara. |
| [Convertir a vídeo](#convertir-a-vídeo) | Codificar fotogramas de imagen como vídeo y, opcionalmente, subir el resultado a Hugging Face Hub. |
| [Visualizar un conjunto de datos en línea](#visualizar-un-conjunto-de-datos-en-línea) | Ver un conjunto de datos subido en tu navegador. |
| [Visualizar un conjunto de datos localmente](#visualizar-un-conjunto-de-datos-localmente) | Usar el visor de línea de comandos con un conjunto de datos del Hub o local. |

### Brazos robóticos relacionados

| Brazo seguidor de viola | Brazo líder de violín | Brazo seguidor de violonchelo |
| --- | --- | --- |
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" width={160} alt="Brazo seguidor de viola" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg" width={160} alt="Brazo líder de violín" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png" width={160} alt="Brazo seguidor de violonchelo" /> |

## Eliminar episodios

Aquí, un episodio es una grabación completa de una acción del robot.

<span id="command-1-delete-specific-episodes-in-a-dataset" aria-hidden="true" />
<span id="command-2-delete-episodes-and-save-as-a-new-dataset-preserve-the-original" aria-hidden="true" />

<Tabs defaultValue="new-dataset">
<TabItem value="new-dataset" label="Guardar como un nuevo conjunto de datos">

Configura `--new_repo_id` para guardar el resultado manteniendo el conjunto de datos original. Este ejemplo elimina los episodios 0, 2 y 5.

```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

</TabItem>
<TabItem value="in-place" label="Modificar el original">

:::caution
Este comando modifica el conjunto de datos original. Comprueba primero el ID del conjunto de datos y los índices de los episodios. Selecciona **Guardar como un nuevo conjunto de datos** para conservar los datos originales.
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

| Opción | Propósito |
| --- | --- |
| `--repo_id` | ID del conjunto de datos de entrada, como `lerobot/pusht`. |
| `--new_repo_id` | ID del nuevo conjunto de datos al guardar una copia. |
| `--operation.episode_indices` | Lista de índices de episodios que se van a eliminar. |

## Dividir un conjunto de datos

<span id="command-1-split-by-fractions" aria-hidden="true" />
<span id="command-2-split-by-explicit-episode-indices" aria-hidden="true" />

<Tabs defaultValue="fractions">
<TabItem value="fractions" label="Dividir por fracción">

Este ejemplo asigna aproximadamente 80%, 10% y 10% de los episodios a los conjuntos de entrenamiento, prueba y validación.

```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

</TabItem>
<TabItem value="indices" label="Dividir por índice de episodio">

Este ejemplo coloca los episodios 0–3 en `task1` y los episodios 4–5 en `task2`.

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

</TabItem>
</Tabs>

Cada división añade su nombre al ID de entrada, por ejemplo `lerobot/pusht_train`. Estos ejemplos guardan los resultados localmente. Subirlos requiere `--push_to_hub true`.

## Fusionar conjuntos de datos

```bash
lerobot-edit-dataset \
    --new_repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```

| Opción | Propósito |
| --- | --- |
| `--new_repo_id` | ID del nuevo conjunto de datos fusionado. |
| `--operation.repo_ids` | IDs de los conjuntos de datos de origen que se van a fusionar. |

## Eliminar características

Si solo necesitas las imágenes de la cámara de muñeca, puedes eliminar la característica de la cámara cenital. Este ejemplo elimina `observation.images.top` del conjunto de datos.

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```

## Convertir a vídeo

Codifica fotogramas de imagen en vídeo en un nuevo conjunto de datos. Esto puede reducir el uso de almacenamiento y mejorar el rendimiento de lectura.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Elige una salida</h4>
<p className="rebot-step-label">Paso 1</p>

<Tabs defaultValue="local-folder">
<TabItem value="local-folder" label="Guardar en una carpeta local">

Configura el directorio de salida con `--new_root`. El resultado permanece local.

```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root /path/to/output/pusht_video
```

</TabItem>
<TabItem value="new-id" label="Usar un nuevo ID de conjunto de datos">

Configura el ID para el conjunto de datos resultante con `--new_repo_id`. Los archivos permanecen locales.

```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

</TabItem>
<TabItem value="hub" label="Convertir y subir al Hub">

Confirma que tienes permisos de escritura en el repositorio de destino. `--push_to_hub true` sube el resultado después de la conversión.

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
<h4>Comprueba el resultado</h4>
<p className="rebot-step-label">Paso 2</p>

Comprueba el directorio de salida `videos/` para los archivos MP4 de la cámara y confirma que los episodios, estadísticas y definiciones de tareas siguen presentes. Los archivos `.parquet` contienen los metadatos mientras que los fotogramas de imagen se almacenan en los vídeos.

</div>
</section>

</div>

### Opciones de conversión que puedes combinar

Usa las siguientes opciones con la configuración de salida según sea necesario.

#### Personalizar la codificación

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

#### Configurar trabajadores en paralelo

```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root outputs/pusht_video \
    --operation.num_workers 8
```

#### Limitar el tamaño de lote

```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

| Opción | Propósito |
| --- | --- |
| `--new_root` | Directorio de salida local personalizado. |
| `--operation.rgb_encoder.vcodec` | Códec de vídeo RGB, como `h264`, `hevc` o `libsvtav1`. |
| `--operation.rgb_encoder.pix_fmt` | Formato de píxel de vídeo RGB, como `yuv420p`. |
| `--operation.rgb_encoder.g` | Intervalo de fotogramas clave. |
| `--operation.rgb_encoder.crf` | Ajuste de calidad de codificación. Los valores más bajos suelen aumentar la calidad y el tamaño del archivo. |
| `--operation.rgb_encoder.fast_decode` | Ajuste para decodificación rápida. Los valores admitidos dependen del códec. |
| `--operation.episode_indices` | Índices de episodios que se van a convertir. Omite para convertir todos los episodios. |
| `--operation.num_workers` | Número de trabajadores en paralelo. El valor predeterminado es 4. |
| `--operation.max_episodes_per_batch` | Número máximo de episodios por lote. |
| `--operation.max_frames_per_batch` | Número máximo de fotogramas por lote. |

## Visualizar un conjunto de datos en línea

Abre un conjunto de datos subido en el [visualizador de conjuntos de datos de Hugging Face](https://huggingface.co/spaces/lerobot/visualize_dataset).

## Visualizar un conjunto de datos localmente

<span id="visualize-a-dataset-from-the-hub-locally" aria-hidden="true" />
<span id="visualize-a-local-dataset" aria-hidden="true" />

<Tabs defaultValue="hub-dataset">
<TabItem value="hub-dataset" label="Ver un dataset de Hub">

Usa el ID del dataset desde el Hub. Este ejemplo abre el episodio 0.

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

</TabItem>
<TabItem value="local-dataset" label="Ver un dataset local">

Indica el directorio del dataset local con `--root` y selecciona `--mode local`.

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

</TabItem>
</Tabs>

| Opción | Propósito |
| --- | --- |
| `--repo-id` | ID del dataset que se va a ver. |
| `--episode-index` | Índice del episodio, empezando en 0. |
| `--root` | Directorio del dataset local. |
| `--mode local` | Leer desde el sistema de archivos local. |

## Preguntas frecuentes

- Obtén la herramienta utilizada en esta guía desde el [repositorio Seeed LeRobot](https://github.com/Seeed-Projects/lerobot.git). Otras versiones pueden usar comandos o formatos de dataset diferentes.
- Si la salida del terminal no se ha actualizado durante un tiempo, pulsa Enter para comprobar si hay nueva salida. Las operaciones sobre datasets comprimidos pueden llevar tiempo. Observa la barra de progreso.

Consulta la [documentación de herramientas de datasets de LeRobot](https://huggingface.co/docs/lerobot/using_dataset_tools).
