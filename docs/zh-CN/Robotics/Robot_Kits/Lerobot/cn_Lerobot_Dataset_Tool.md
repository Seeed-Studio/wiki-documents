---
description: 本Wiki提供 Lerobot 数据集的工具使用，包括删除剧集，合并数据集等。
title: Lerobot数据集工具
keywords:
- Lerobot
- Hugging Face
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /cn/lerobot
sku: E24122002, 114993609, 114993608, 108090023, 108090003, 101090141, 101090142, 114090081,114090080,100049805,100038899,100028196
last_update:
  date: 3/2/2026
  author: ZhangJiaQuan
---
<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
</div>

| **跟随臂 Viola** | **领导臂 Violin** | **跟随臂 Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

## 简介
在这篇 Wiki 中，你将会了解到如何：
- 1. **删除剧集**——从数据集中移除特定剧集
- 2. **拆分数据集**——将一个完整的数据集切分为多个较小数据集
- 3. **合并数据集**——将多个小的数据集合并为一个大的数据集。
- 4. **移除特征**——从数据集中移除特征
- 5. **转换为视频**——将基于图像的数据集转换为视频格式，以实现高效存储
- 6. **将数据集上传到 Hugging Face**
- 7. **在线可视化数据集**——在 Hugging Face 观看已经录制并上传的数据集
- 8. **离线可视化数据集**——在本地观看已经录制并保存在本地的数据集

如果你想了解如何使用 LeRobot 采集（录制）数据集，请参考：[基于 LeRobot 的 SO-ARM100 and SO-ARM101 机械臂入门教程](/cn/lerobot_so100m_new/)。

所有以上操作都可以使用`lerobot-edit-dataset`带一定参数实现，以下是完整的命令与解析

## 删除剧集
删除剧集操作可以删除数据集中不想要的剧集。

### 命令一：删除指定数据集中的指定剧集
```bash
# Delete episodes 0, 2, and 5 (modifies original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```
#### 含义说明
- `--repo_id lerobot/pusht`  
    指定要操作的数据集仓库，即 `lerobot/pusht`，其中`lerobot`是记录数据时使用的用户名，`pusht`是数据集名称。
    
- `--operation.type delete_episodes`  
    指定操作类型为**删除剧集**。
    
- `--operation.episode_indices "[0, 2, 5]"`  
    指定要删除的剧集编号，这里表示删除第 **0、2、5 个剧集**。
    
### 命令二：删除数据集中的指定剧集，并将删除后的数据集保存为新的数据集（不改变原有数据集）
```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```
#### 含义说明
- `--repo_id lerobot/pusht`  
    指定原始数据集作为输入。
    
- `--new_repo_id lerobot/pusht_after_deletion`  
    指定一个新的数据集仓库名称，用于保存修改后的结果。

## 拆分数据集

### 第一条命令：按比例拆分数据集
适用于：希望快速训练的用户
```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```
#### 含义说明
- `--operation.type split`  
    指定操作类型为**拆分数据集**。
    
- `--operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'`  
    按比例拆分 `lerobot/pusht` 数据集为三个数据集：
    
    - `train`：约 80% 的剧集
        
    - `test`：约 10% 的剧集
        
    - `val`：约 10% 的剧集
  
拆分之后的数据集仍在仓库中，拆分的名称将会以后缀形式加在主名称后，例如以上命令会生成 `lerobot/pusht_train`、`lerobot/pusht_test`、`lerobot/pusht_val` 三个数据集。
### 第二条命令：按指定剧集编号拆分
```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```
#### 含义说明

- `--operation.type split`  
    操作类型仍为拆分数据集。
    
- `--operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'`  
    按**明确指定的剧集编号**进行拆分：
    
    - `task1`：包含编号为 0、1、2、3 的剧集
        
    - `task2`：包含编号为 4、5 的剧集

## 合并数据集
```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```
#### 含义说明
- `--repo_id lerobot/pusht_merged`  
    指定**合并后生成的新数据集名称**。  
    合并结果将保存到该数据集仓库中。
    
- `--operation.type merge`  
    指定操作类型为**合并数据集**。
    
- `--operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"`  
    指定需要参与合并的源数据集列表：
    
    - `lerobot/pusht_train`
        
    - `lerobot/pusht_val`

## 移除特征

从数据集中移除特征。这个操作可以让你舍弃掉原有数据集的一些观察特征。例如：原数据集有两个相机，一个在桌上，一个在腕部。而你只希望保留一个腕部相机进行训练与部署，这时候可以删除数据集的桌上相机特征（也就是桌上相机的观察数据）
```bash

lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```
#### 含义解释
- `--operation.type remove_feature`  
    指定操作类型为**移除特征**。
    
- `--operation.feature_names "['observation.images.top']"`  
    指定需要移除的特征名称。  
    这里表示删除数据集中名为 `observation.images.top` 的相机图像特征。

## 转换为视频

将**基于图像的数据集**转换为**视频格式**，并生成一个新的 `LeRobotDataset`。  
在该过程中，原本以单帧图像形式存储的相机数据会被编码为 MP4 视频文件。

此转换主要用于：

- 降低整体存储空间占用
    
- 提升数据加载和读取性能
    
转换完成后，新数据集在**结构和内容上与原数据集保持一致**，差别仅在于：  
图像数据不再以原始帧形式存储，而是以符合 LeRobot 规范的视频格式保存。
转换的参数可以随意自定义并组合，以下为命令的六个例子供参考：

1.将图像数据集转换为视频，并仅保存到本地指定目录，不会上传到 Hub。
```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir /path/to/output/pusht_video
```

2.将转换后的结果保存为一个新的数据集，并使用新的 `repo_id` 标识。
```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

3.在完成转换后，将新生成的数据集上传至 Hugging Face Hub。
```bash
# Convert and push to Hugging Face Hub
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video \
    --push_to_hub true
```

4.使用自定义的视频编码器和质量参数进行转换。
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

5.使用多个并行进程，加快转换速度。
```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir outputs/pusht_video \
    --operation.num_workers 8
```
6.在内存受限的系统中，通过限制每批处理的剧集数量和帧数来降低内存占用。
```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

#### 含义解释
- **output_dir**：  
    自定义输出目录（可选）。  
    若未指定，默认使用 `{repo_id}_video` 或 `new_repo_id` 对应的目录。
    
- **vcodec**：  
    视频编码器。  
    可选值包括 `h264`、`hevc`、`libsvtav1`（默认：`h264`）。
    
- **pix_fmt**：  
    视频像素格式。  
    可选值包括 `yuv420p`、`yuv444p`（默认：`yuv420p`）。
    
- **g**：  
    GOP（关键帧间隔）大小。  
    数值越小，视频质量越高，但文件体积更大（默认：2）。
    
- **crf**：  
    恒定速率因子。  
    数值越小质量越高，文件越大；`0` 表示无损编码（默认：30）。
    
- **fast_decode**：  
    启用快速解码的调优选项（默认：0）。
    
- **episode_indices**：  
    需要转换的特定剧集编号列表（默认：转换所有剧集）。
    
- **num_workers**：  
    并行处理的工作进程数量（默认：4）。
    
最终生成的数据集是一个**完整且标准的 LeRobotDataset**：

- 所有摄像头数据均以视频形式存储于 `videos/` 目录
    
- `.parquet` 文件仅包含元数据，不再包含原始图像
    
- 所有剧集、统计信息和任务定义都会被完整保留。


## 数据集在线可视化

当你用 LeRobot 记录数据集时，除非你另有说明，否则它会自动上传到 Hugging Face Hub。要在线查看该数据集，请使用 Hugging Face 出品的 **LeRobot 数据集可视化工具**，网址为：[https://huggingface.co/spaces/lerobot/visualize_dataset](https://huggingface.co/spaces/lerobot/visualize_dataset)

## 数据集本地可视化

### 在本地可视化云端的数据集

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

### 在本地可视化本地的数据集

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

#### 含义解释
- **`lerobot-dataset-viz`**  
    数据集可视化工具，用于查看 LeRobot 数据集中的剧集内容。
    
- **`--repo-id lerobot/pusht`**  
    指定要可视化的数据集名称。
    
- **`--root ./my_local_data_dir`**  
    指定本地数据集的根目录路径。  
    当使用本地模式时，工具会在该目录下查找对应的 `repo-id` 数据集。
    
- **`--mode local`**  
    指定数据来源模式为本地。  
    表示数据集不从远程仓库加载，而是从本地文件系统读取。
    
- **`--episode-index 0`**  
    指定要查看的剧集编号。  
    这里表示可视化第 0 个剧集，即数据集中的第一个完整任务过程。

## FAQ

- 如果使用本文档教程，请git clone本文档推荐的github仓库`https://github.com/Seeed-Projects/lerobot.git`，本文档推荐的仓库是验证过后的稳定版本，Lerobot官方仓库是实时更新的最新版本，会出现一些无法预知的问题，例如数据集版本不同，指令不同等。

- 如果在进行数据集操作时卡住，可以按一下回车刷新一下终端。

- 由于新版本数据集采用压缩方式储存，对于数据集的操作比较耗时，终端上会有进度条显示，需要耐心等待。

参考链接：https://huggingface.co/docs/lerobot/using_dataset_tools
