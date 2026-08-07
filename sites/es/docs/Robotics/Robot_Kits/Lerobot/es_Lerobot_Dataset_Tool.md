---
description: Este wiki cubre las utilidades del conjunto de datos de LeRobot, incluyendo eliminar episodios, fusionar conjuntos de datos y más.
title: Herramienta de Conjunto de Datos de LeRobot
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
  skip: [zh-CN]
createdAt: '2026-03-02'
updatedAt: '2026-03-02'
url: https://wiki.seeedstudio.com/es/lerobot_dataset_tool/
---

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
</div>

| **Brazo Seguidor Viola** | **Brazo Líder Violin** | **Brazo Seguidor Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

## Descripción general
En este wiki, aprenderás cómo:
- 1. **Eliminar episodios** — eliminar episodios específicos de un conjunto de datos
- 2. **Dividir un conjunto de datos** — dividir un conjunto de datos completo en varios conjuntos de datos más pequeños
- 3. **Fusionar conjuntos de datos** — fusionar varios conjuntos de datos en un único conjunto de datos más grande
- 4. **Eliminar características** — eliminar características específicas de un conjunto de datos
- 5. **Convertir a vídeo** — convertir un conjunto de datos basado en imágenes a formato de vídeo para un almacenamiento más eficiente
- 6. **Subir un conjunto de datos al Hugging Face Hub**
- 7. **Visualizar un conjunto de datos en línea** — ver conjuntos de datos grabados y subidos en Hugging Face
- 8. **Visualizar un conjunto de datos sin conexión** — ver conjuntos de datos grabados almacenados localmente

Para un tutorial paso a paso sobre cómo grabar/recopilar un conjunto de datos con LeRobot, consulta: [Getting started with SO-ARM100 and SO-ARM101 robotic arm with LeRobot](/es/lerobot_so100m_new/).

Todas las operaciones anteriores se pueden realizar con `lerobot-edit-dataset` usando los argumentos apropiados. A continuación se muestran comandos completos y explicaciones.

## Eliminar episodios
Esta operación elimina episodios no deseados de un conjunto de datos.

### Comando 1: Eliminar episodios específicos en un conjunto de datos
```bash
# Delete episodes 0, 2, and 5 (modifies original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```
#### Explicación
- `--repo_id lerobot/pusht`  
    Especifica el repositorio del conjunto de datos sobre el que operar, es decir, `lerobot/pusht`, donde `lerobot` es el nombre de usuario y `pusht` es el nombre del conjunto de datos.

- `--operation.type delete_episodes`  
    Establece el tipo de operación en **eliminar episodios**.

- `--operation.episode_indices "[0, 2, 5]"`  
    Especifica los índices de episodios a eliminar. Aquí elimina los episodios **0, 2 y 5**.

### Comando 2: Eliminar episodios y guardar como un nuevo conjunto de datos (preservar el original)
```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```
#### Explicación
- `--repo_id lerobot/pusht`  
    Usa el conjunto de datos original como entrada.

- `--new_repo_id lerobot/pusht_after_deletion`  
    Especifica un nuevo nombre de repositorio de conjunto de datos para guardar el resultado modificado.

## Dividir un conjunto de datos

### Comando 1: Dividir por fracciones
Caso de uso: entrenamiento/experimentos rápidos
```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```
#### Explicación
- `--operation.type split`  
    Establece el tipo de operación en **dividir conjunto de datos**.

- `--operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'`  
    Divide `lerobot/pusht` en tres conjuntos de datos por fracción:

    - `train`: ~80% de los episodios

    - `test`: ~10% de los episodios

    - `val`: ~10% de los episodios

Después de dividir, los conjuntos de datos permanecen en el Hub. El nombre de la partición se añade como sufijo al nombre original. Por ejemplo, el comando anterior crea `lerobot/pusht_train`, `lerobot/pusht_test` y `lerobot/pusht_val`.

### Comando 2: Dividir por índices de episodios explícitos
```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```
#### Explicación

- `--operation.type split`  
    El tipo de operación sigue siendo **dividir conjunto de datos**.

- `--operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'`  
    Divide por **índices de episodios explícitos**:

    - `task1`: episodios 0, 1, 2, 3

    - `task2`: episodios 4, 5

## Fusionar conjuntos de datos
```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```
#### Explicación
- `--repo_id lerobot/pusht_merged`  
    Especifica el **nuevo nombre de conjunto de datos** después de la fusión.  
    El resultado fusionado se guardará en este repositorio de conjunto de datos.

- `--operation.type merge`  
    Establece el tipo de operación en **fusionar conjuntos de datos**.

- `--operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"`  
    Especifica los conjuntos de datos de origen a fusionar:

    - `lerobot/pusht_train`

    - `lerobot/pusht_val`

## Eliminar características

Esta operación elimina características de un conjunto de datos. Es útil cuando quieres descartar ciertas modalidades de observación. Por ejemplo, si tu conjunto de datos contiene dos cámaras (una cámara superior y una cámara de muñeca), pero solo quieres conservar la cámara de muñeca para el entrenamiento y la implementación, puedes eliminar la característica de observación de la cámara superior del conjunto de datos.
```bash

lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```
#### Explicación
- `--operation.type remove_feature`  
    Establece el tipo de operación en **eliminar característica**.

- `--operation.feature_names "['observation.images.top']"`  
    Especifica los nombres de características a eliminar.  
    Aquí elimina la característica de imagen de cámara llamada `observation.images.top`.

## Convertir a vídeo

Convierte un **conjunto de datos basado en imágenes** a **formato de vídeo**, produciendo un nuevo `LeRobotDataset`.  
Durante la conversión, los datos de cámara originalmente almacenados como fotogramas de imagen individuales se codifican en archivos de vídeo MP4.

Esto se utiliza principalmente para:

- Reducir el uso total de almacenamiento

- Mejorar el rendimiento de carga y lectura de datos

Después de la conversión, el nuevo conjunto de datos es **idéntico en estructura y contenido** al original, excepto que:  
los datos de imagen ya no se almacenan como fotogramas sin procesar, sino que se guardan en formato de vídeo compatible con LeRobot.

Las opciones de conversión se pueden personalizar y combinar libremente. A continuación se muestran seis comandos de ejemplo como referencia.

1. Convertir un conjunto de datos de imágenes a vídeo y guardar solo en un directorio de salida local (sin envío al Hub).
```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir /path/to/output/pusht_video
```

2. Guardar el resultado convertido como un nuevo conjunto de datos con un nuevo `repo_id`.
```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

3. Convertir y enviar el nuevo conjunto de datos al Hugging Face Hub.
```bash
# Convert and push to Hugging Face Hub
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video \
    --push_to_hub true
```

4. Convertir con un códec de vídeo y ajustes de calidad personalizados.
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

5. Convertir con múltiples workers para un procesamiento más rápido.
```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir outputs/pusht_video \
    --operation.num_workers 8
```
6. Para sistemas con restricciones de memoria, reducir el uso máximo de memoria limitando episodios y fotogramas por lote.
```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

#### Explicación
- **output_dir**：  
    Directorio de salida personalizado (opcional).  
    Si no se especifica, el valor predeterminado es `{repo_id}_video` o el directorio correspondiente a `new_repo_id`.

- **vcodec**：  
    Códec de vídeo.  
    Las opciones incluyen `h264`, `hevc`, `libsvtav1` (predeterminado: `h264`).

- **pix_fmt**：  
    Formato de píxel de vídeo.  
    Las opciones incluyen `yuv420p`, `yuv444p` (predeterminado: `yuv420p`).

- **g**：  
    Tamaño del GOP (intervalo entre fotogramas clave).  
    Valores más pequeños generalmente aumentan la calidad pero también aumentan el tamaño del archivo (predeterminado: 2).

- **crf**：  
    Factor de Tasa Constante (Constant Rate Factor).  
    Valores más pequeños significan mayor calidad y archivos más grandes; `0` significa codificación sin pérdidas (predeterminado: 30).

- **fast_decode**：  
    Indicador de ajuste para decodificación rápida (predeterminado: 0).

- **episode_indices**：  
    Lista de índices de episodios a convertir (predeterminado: convertir todos los episodios).

- **num_workers**：  
    Número de procesos worker en paralelo (predeterminado: 4).

El conjunto de datos resultante es un **LeRobotDataset completo y estándar**:

- Todos los datos de cámara se almacenan como vídeos bajo `videos/`

- Los archivos `.parquet` contienen solo metadatos y ya no contienen imágenes sin procesar

- Todos los episodios, estadísticas y definiciones de tareas se conservan.


## Visualizar un conjunto de datos en línea

Cuando grabas un conjunto de datos con LeRobot, este se sube automáticamente al Hugging Face Hub a menos que especifiques lo contrario. Para ver el conjunto de datos en línea, utiliza la **herramienta de visualización de conjuntos de datos de LeRobot** de Hugging Face: [https://huggingface.co/spaces/lerobot/visualize_dataset](https://huggingface.co/spaces/lerobot/visualize_dataset)

## Visualizar un conjunto de datos localmente

### Visualizar localmente un conjunto de datos desde el Hub

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

### Visualizar un conjunto de datos local

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

#### Explicación
- **`lerobot-dataset-viz`**  
    Herramienta de visualización de conjuntos de datos para ver episodios en un conjunto de datos de LeRobot.

- **`--repo-id lerobot/pusht`**  
    Nombre del conjunto de datos a visualizar.

- **`--root ./my_local_data_dir`**  
    Directorio raíz de los conjuntos de datos locales.  
    En modo local, la herramienta busca el conjunto de datos bajo este directorio usando el `repo-id` dado.

- **`--mode local`**  
    Usa el modo de fuente de datos local.  
    El conjunto de datos se carga desde el sistema de archivos local en lugar de desde un repositorio remoto.

- **`--episode-index 0`**  
    Índice del episodio a visualizar.  
    Aquí se visualiza el episodio 0 (el primer episodio del conjunto de datos).

## Preguntas frecuentes

- Si estás siguiendo este tutorial, por favor haz git clone del repositorio recomendado: `https://github.com/Seeed-Projects/lerobot.git`. El repositorio recomendado aquí es una versión estable verificada. El repositorio oficial de LeRobot se actualiza continuamente, lo que puede introducir problemas inesperados (por ejemplo, cambios en la versión del conjunto de datos, comandos diferentes).

- Si la operación sobre el conjunto de datos parece quedarse colgada, intenta presionar Enter para actualizar la salida del terminal.

- Dado que el nuevo formato de conjunto de datos se almacena de forma comprimida, las operaciones sobre el conjunto de datos pueden tardar más. Verás una barra de progreso en el terminal; por favor, ten paciencia.

Referencia: https://huggingface.co/docs/lerobot/using_dataset_tools
