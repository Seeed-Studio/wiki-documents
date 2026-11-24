---
description: 本Wiki提供 LeRobot 数据集的工具使用，包括删除剧集，合并数据集等。
title: SO-ARM 数据集工具
keywords:
  - LeRobot
  - Hugging Face
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_dataset_tool
sku: E24122002, 114993609, 114993608, 108090023, 108090003, 101090141, 101090142, 114090081,114090080,100049805,100038899,100028196
last_update:
  date: 3/2/2026
  author: ZhangJiaQuan
createdAt: '2026-03-02'
updatedAt: '2026-09-16'
url: https://wiki.seeedstudio.com/cn/lerobot_dataset_tool/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SO-ARM 数据集工具

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="SO-ARM100 和 SO-ARM101 机械臂套件"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?id=877820346195&mi_id=0000OU1g76NMAq5LGIUiPORgyMk3E8XbnysI4JwJCeVC1ow&skuId=6312174298846&spm=a1z10.1-b-s.w4004-26191638149.2.4789262ePdEW84" target="_blank" rel="noopener noreferrer">
    <span>立即购买 SO-ARM101 套件</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## 简介

使用 `lerobot-edit-dataset` 编辑数据集，使用 `lerobot-dataset-viz` 在本地查看剧集。

还没录制数据？请参阅 [SO-ARM100 / SO-ARM101 机械臂入门教程](/cn/lerobot_so100m_new/)。

命令示例以 [Seeed LeRobot 的数据集工具实现](https://github.com/Seeed-Projects/lerobot/blob/d490e472a5d1a207cfe0255caaaf74b6d66e4656/src/lerobot/scripts/lerobot_edit_dataset.py)为准；不同版本的参数可能不同。

| 任务 | 用途 |
| --- | --- |
| [删除剧集](#删除剧集) | 移除指定编号的剧集。 |
| [拆分数据集](#拆分数据集) | 按比例或剧集编号切分数据。 |
| [合并数据集](#合并数据集) | 把多个数据集合并成一个新数据集。 |
| [移除特征](#移除特征) | 移除指定特征，例如某个相机的图像。 |
| [转换为视频](#转换为视频) | 将图像帧编码为视频，可在转换后上传 Hugging Face Hub。 |
| [数据集在线可视化](#数据集在线可视化) | 在浏览器中查看已上传的数据集。 |
| [数据集本地可视化](#数据集本地可视化) | 用命令行工具查看 Hub 或本地数据集。 |

### 相关机械臂

| Viola 跟随臂 | Violin 领导臂 | Cello 跟随臂 |
| --- | --- | --- |
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" width={160} alt="Viola 跟随臂" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg" width={160} alt="Violin 领导臂" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png" width={160} alt="Cello 跟随臂" /> |

## 删除剧集

这里的「剧集」指一次完整的机器人动作录制。

<span id="命令一删除指定数据集中的指定剧集" aria-hidden="true" />
<span id="命令二删除数据集中的指定剧集并将删除后的数据集保存为新的数据集不改变原有数据集" aria-hidden="true" />

<Tabs defaultValue="new-dataset">
<TabItem value="new-dataset" label="另存为新数据集">

用 `--new_repo_id` 指定输出数据集，保留原始数据。示例移除剧集 0、2 和 5。

```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

</TabItem>
<TabItem value="in-place" label="修改原数据集">

:::caution
此命令会修改原数据集。先核对数据集 ID 和剧集编号。如果要保留原始数据，请选择「另存为新数据集」。
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

| 参数 | 用途 |
| --- | --- |
| `--repo_id` | 输入数据集的 ID，例如 `lerobot/pusht`。 |
| `--new_repo_id` | 另存时使用的新数据集 ID。 |
| `--operation.episode_indices` | 要删除的剧集编号列表。 |

## 拆分数据集

<span id="第一条命令按比例拆分数据集" aria-hidden="true" />
<span id="第二条命令按指定剧集编号拆分" aria-hidden="true" />

<Tabs defaultValue="fractions">
<TabItem value="fractions" label="按比例拆分">

示例将剧集约按 80%、10%、10% 分到训练、测试和验证集。

```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

</TabItem>
<TabItem value="indices" label="按剧集编号拆分">

示例将剧集 0–3 分给 `task1`，将剧集 4–5 分给 `task2`。

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

</TabItem>
</Tabs>

各拆分结果以输入数据集 ID 加拆分名作为后缀，例如 `lerobot/pusht_train`。示例将结果写到本地，上传需显式指定 `--push_to_hub true`。

## 合并数据集

```bash
lerobot-edit-dataset \
    --new_repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```

| 参数 | 用途 |
| --- | --- |
| `--new_repo_id` | 合并后的新数据集 ID。 |
| `--operation.repo_ids` | 要合并的源数据集 ID 列表。 |

## 移除特征

如果只需要保留腕部相机画面，可以移除桌面相机的图像特征。这个示例从数据集中移除 `observation.images.top`。

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```

## 转换为视频

将图像帧编码为视频，生成新的数据集，可减少存储占用并改善读取性能。

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>选择输出方式</h4>
<p className="rebot-step-label">第 1 步</p>

<Tabs defaultValue="local-folder">
<TabItem value="local-folder" label="保存到本地目录">

用 `--new_root` 指定输出目录，结果保留在本地。

```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root /path/to/output/pusht_video
```

</TabItem>
<TabItem value="new-id" label="使用新数据集 ID">

用 `--new_repo_id` 指定结果的数据集 ID，文件保存在本地。

```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

</TabItem>
<TabItem value="hub" label="转换并上传 Hub">

确认你有目标数据集仓库的写权限。`--push_to_hub true` 会在转换后上传结果。

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
<h4>检查转换结果</h4>
<p className="rebot-step-label">第 2 步</p>

检查输出目录中的 `videos/` 是否包含相机的 MP4 文件，并确认剧集、统计信息和任务定义仍在。`.parquet` 文件保留元数据，图像帧存放在视频文件中。

</div>
</section>

</div>

### 可组合的转换选项

以下选项可根据需要与输出设置一起使用。

#### 自定义编码参数

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

#### 设置并行进程

```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root outputs/pusht_video \
    --operation.num_workers 8
```

#### 限制每批处理量

```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

| 参数 | 用途 |
| --- | --- |
| `--new_root` | 自定义本地输出目录。 |
| `--operation.rgb_encoder.vcodec` | RGB 视频编码器，例如 `h264`、`hevc` 或 `libsvtav1`。 |
| `--operation.rgb_encoder.pix_fmt` | RGB 视频像素格式，例如 `yuv420p`。 |
| `--operation.rgb_encoder.g` | 关键帧间隔。 |
| `--operation.rgb_encoder.crf` | 编码质量参数，较低的值通常使画质更高、文件更大。 |
| `--operation.rgb_encoder.fast_decode` | 快速解码调优选项，具体取值由编码器决定。 |
| `--operation.episode_indices` | 要转换的剧集编号。省略时转换全部剧集。 |
| `--operation.num_workers` | 并行工作进程数，默认为 4。 |
| `--operation.max_episodes_per_batch` | 每批最多处理的剧集数。 |
| `--operation.max_frames_per_batch` | 每批最多处理的帧数。 |

## 数据集在线可视化

在 [Hugging Face 数据集可视化工具](https://huggingface.co/spaces/lerobot/visualize_dataset) 中打开已上传的数据集。

## 数据集本地可视化

<span id="在本地可视化云端的数据集" aria-hidden="true" />
<span id="在本地可视化本地的数据集" aria-hidden="true" />

<Tabs defaultValue="hub-dataset">
<TabItem value="hub-dataset" label="查看 Hub 数据集">

使用 Hub 中的数据集 ID。示例查看编号为 0 的剧集。

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

</TabItem>
<TabItem value="local-dataset" label="查看本地数据集">

用 `--root` 指定本地数据根目录，并选择 `--mode local`。

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

</TabItem>
</Tabs>

| 参数 | 用途 |
| --- | --- |
| `--repo-id` | 要查看的数据集 ID。 |
| `--episode-index` | 要查看的剧集编号，从 0 开始。 |
| `--root` | 本地数据集目录。 |
| `--mode local` | 从本地文件系统读取数据集。 |

## FAQ

- 从 [Seeed LeRobot 仓库](https://github.com/Seeed-Projects/lerobot.git)获取这篇教程对应的工具。其他版本可能使用不同的命令或数据格式。
- 如果终端长时间没有刷新，可以按 Enter 查看有无新输出。压缩格式的数据集处理可能需要较长时间，请留意进度条。

参阅 [LeRobot 数据集工具文档](https://huggingface.co/docs/lerobot/using_dataset_tools)。
