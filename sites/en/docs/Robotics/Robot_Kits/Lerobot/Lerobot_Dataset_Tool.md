---
description: This wiki covers LeRobot dataset utilities, including deleting episodes, merging datasets, and more.
title: SO-ARM Dataset Tool
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
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/lerobot_dataset_tool/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SO-ARM Dataset Tool

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="SO-ARM100 and SO-ARM101 robotic arm kits"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Get the SO-ARM101 Kit</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## Overview

Use `lerobot-edit-dataset` to edit datasets and `lerobot-dataset-viz` to view episodes locally.

To record a dataset first, see [Getting started with SO-ARM100 and SO-ARM101](/lerobot_so100m_new/).

The examples follow the [Seeed LeRobot dataset tool implementation](https://github.com/Seeed-Projects/lerobot/blob/d490e472a5d1a207cfe0255caaaf74b6d66e4656/src/lerobot/scripts/lerobot_edit_dataset.py). Other versions may use different options.

| Task | Purpose |
| --- | --- |
| [Delete episodes](#delete-episodes) | Remove episodes by index. |
| [Split a dataset](#split-a-dataset) | Split data by fraction or episode index. |
| [Merge datasets](#merge-datasets) | Combine multiple datasets into a new dataset. |
| [Remove features](#remove-features) | Remove selected features such as images from a camera. |
| [Convert to video](#convert-to-video) | Encode image frames as video and optionally upload the result to the Hugging Face Hub. |
| [Visualize a dataset online](#visualize-a-dataset-online) | View an uploaded dataset in your browser. |
| [Visualize a dataset locally](#visualize-a-dataset-locally) | Use the command-line viewer with a Hub or local dataset. |

### Related robotic arms

| Viola follower arm | Violin leader arm | Cello follower arm |
| --- | --- | --- |
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" width={160} alt="Viola follower arm" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg" width={160} alt="Violin leader arm" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png" width={160} alt="Cello follower arm" /> |

## Delete episodes

Here, an episode is one complete recording of a robot action.

<span id="command-1-delete-specific-episodes-in-a-dataset" aria-hidden="true" />
<span id="command-2-delete-episodes-and-save-as-a-new-dataset-preserve-the-original" aria-hidden="true" />

<Tabs defaultValue="new-dataset">
<TabItem value="new-dataset" label="Save as a new dataset">

Set `--new_repo_id` to save the result while keeping the original dataset. This example removes episodes 0, 2, and 5.

```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

</TabItem>
<TabItem value="in-place" label="Modify the original">

:::caution
This command modifies the original dataset. Check the dataset ID and episode indices first. Select **Save as a new dataset** to keep the original data.
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

| Option | Purpose |
| --- | --- |
| `--repo_id` | ID of the input dataset, such as `lerobot/pusht`. |
| `--new_repo_id` | ID of the new dataset when saving a copy. |
| `--operation.episode_indices` | List of episode indices to delete. |

## Split a dataset

<span id="command-1-split-by-fractions" aria-hidden="true" />
<span id="command-2-split-by-explicit-episode-indices" aria-hidden="true" />

<Tabs defaultValue="fractions">
<TabItem value="fractions" label="Split by fraction">

This example allocates about 80%, 10%, and 10% of episodes to training, test, and validation sets.

```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

</TabItem>
<TabItem value="indices" label="Split by episode index">

This example puts episodes 0–3 in `task1` and episodes 4–5 in `task2`.

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

</TabItem>
</Tabs>

Each split appends its name to the input ID, for example `lerobot/pusht_train`. These examples save the results locally. Uploading requires `--push_to_hub true`.

## Merge datasets

```bash
lerobot-edit-dataset \
    --new_repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```

| Option | Purpose |
| --- | --- |
| `--new_repo_id` | ID of the new merged dataset. |
| `--operation.repo_ids` | IDs of the source datasets to merge. |

## Remove features

If you only need wrist camera footage, you can remove the overhead camera feature. This example drops `observation.images.top` from the dataset.

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```

## Convert to video

Encode image frames into video in a new dataset. This can reduce storage usage and improve read performance.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Choose an output</h4>
<p className="rebot-step-label">Step 1</p>

<Tabs defaultValue="local-folder">
<TabItem value="local-folder" label="Save to a local folder">

Set the output directory with `--new_root`. The result stays local.

```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root /path/to/output/pusht_video
```

</TabItem>
<TabItem value="new-id" label="Use a new dataset ID">

Set the ID for the resulting dataset with `--new_repo_id`. Files stay local.

```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

</TabItem>
<TabItem value="hub" label="Convert and upload to the Hub">

Confirm you have write access to the target repository. `--push_to_hub true` uploads the result after conversion.

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
<h4>Check the result</h4>
<p className="rebot-step-label">Step 2</p>

Check the output `videos/` directory for the camera MP4 files and confirm the episodes, statistics, and task definitions are still present. The `.parquet` files hold metadata while the image frames are stored in the videos.

</div>
</section>

</div>

### Conversion options you can combine

Use the following options with the output settings as needed.

#### Customize encoding

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

#### Set parallel workers

```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root outputs/pusht_video \
    --operation.num_workers 8
```

#### Limit batch size

```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

| Option | Purpose |
| --- | --- |
| `--new_root` | Custom local output directory. |
| `--operation.rgb_encoder.vcodec` | RGB video codec, such as `h264`, `hevc`, or `libsvtav1`. |
| `--operation.rgb_encoder.pix_fmt` | RGB video pixel format, such as `yuv420p`. |
| `--operation.rgb_encoder.g` | Keyframe interval. |
| `--operation.rgb_encoder.crf` | Encoding quality setting. Lower values usually increase quality and file size. |
| `--operation.rgb_encoder.fast_decode` | Fast decoding tuning. Supported values depend on the codec. |
| `--operation.episode_indices` | Episode indices to convert. Omit to convert all episodes. |
| `--operation.num_workers` | Number of parallel workers. Defaults to 4. |
| `--operation.max_episodes_per_batch` | Maximum number of episodes per batch. |
| `--operation.max_frames_per_batch` | Maximum number of frames per batch. |

## Visualize a dataset online

Open an uploaded dataset in the [Hugging Face dataset visualizer](https://huggingface.co/spaces/lerobot/visualize_dataset).

## Visualize a dataset locally

<span id="visualize-a-dataset-from-the-hub-locally" aria-hidden="true" />
<span id="visualize-a-local-dataset" aria-hidden="true" />

<Tabs defaultValue="hub-dataset">
<TabItem value="hub-dataset" label="View a Hub dataset">

Use the dataset ID from the Hub. This example opens episode 0.

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

</TabItem>
<TabItem value="local-dataset" label="View a local dataset">

Give the local dataset directory with `--root` and select `--mode local`.

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

</TabItem>
</Tabs>

| Option | Purpose |
| --- | --- |
| `--repo-id` | ID of the dataset to view. |
| `--episode-index` | Episode index, starting at 0. |
| `--root` | Local dataset directory. |
| `--mode local` | Read from the local filesystem. |

## FAQ

- Get the tool used in this guide from the [Seeed LeRobot repository](https://github.com/Seeed-Projects/lerobot.git). Other versions may use different commands or dataset formats.
- If terminal output has not refreshed for a while, press Enter to see whether there is new output. Operations on compressed datasets can take time. Watch the progress bar.

See the [LeRobot dataset tools documentation](https://huggingface.co/docs/lerobot/using_dataset_tools).
