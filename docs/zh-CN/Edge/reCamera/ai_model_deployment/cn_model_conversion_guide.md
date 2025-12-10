---
description: reCamera 工作坊完整指南
title: reCamera 的 YOLO11n 模型转换
keywords:
  - Edge
  - reCamera
  - Model Conversion
image: https://files.seeedstudio.com/wiki/reCamera/013.jpg
slug: /cn/model_conversion_guide
last_update:
  date: 10/28/2025
  author: Peter
---

# reCamera 的 YOLO11n 模型转换：完整指南

## 目录

1. [简介](#简介)
2. [了解硬件限制](#了解硬件限制)
3. [先决条件](#先决条件)
4. [云服务提供商设置选项](#云服务提供商设置选项)
5. [逐步转换过程](#逐步转换过程)
6. [常见问题和故障排除](#常见问题和故障排除)
7. [部署到 reCamera](#部署到-reCamera)
8. [常见问题解答](#常见问题解答)

## 简介

### 为什么需要模型转换

reCamera 系列设备是由 Sophgo CV181x 芯片驱动的边缘 AI 摄像头，该芯片使用专用的张量处理单元（TPU）进行机器学习推理。与通用 CPU 或 GPU 不同，TPU 需要模型采用针对其架构优化的特定格式。

**转换的关键原因：**

1. **硬件优化**：CV181x 芯片使用 INT8 量化而非 FP32，将模型大小减少约 75%，推理速度提升 4-8 倍
2. **内存限制**：reCamera 设备的 RAM 有限（256MB-512MB），需要压缩模型
3. **功耗效率**：TPU 优化的模型比 CPU/GPU 替代方案消耗的功耗显著更低
4. **实时性能**：边缘设备需要低于 100ms 的推理时间才能满足实际应用需求

### 关于 reCamera 硬件

reCamera 系列包括多个变体，均基于 Sophgo CV181x SoC 构建：

- **reCamera Default**：基础型号，配备 2MP 传感器，USB-C 连接
- **reCamera Microscope**：专为近距离成像设计，配备可更换镜头
- **reCamera HD POE**：更高分辨率，支持以太网供电
- **reCamera Gimbal**：电动云台，具备物体跟踪功能

**技术规格：**

- **处理器**：Sophgo CV181x（RISC-V + TPU）
- **AI 性能**：0.5 TOPS INT8
- **内存**：256MB DDR3
- **存储**：16MB SPI Flash + microSD
- **支持格式**：CVI 模型（Sophgo 专有格式）

### 转换挑战

YOLO11n 模型通常在 PyTorch 中训练并导出为 ONNX 格式。然而，reCamera 的 CV181x 芯片无法直接运行 ONNX 模型。转换过程包括：

1. **模型架构转换**：将 ONNX 转换为 MLIR（多级中间表示）
2. **量化**：将 FP32 权重转换为 INT8，同时保持精度
3. **硬件优化**：为 TPU 加速调整层操作
4. **格式转换**：创建最终的 CVI 模型格式

## 了解硬件限制

### 内存限制

- **模型大小限制**：实际部署通常为 8-16MB
- **输入分辨率**：YOLO11n 通常为 640x640，以平衡精度和性能
- **批处理大小**：由于内存限制，限制为 1

### 处理限制

- **支持的操作**：并非所有 ONNX 操作都有 TPU 等效操作
- **精度损失**：INT8 量化可能会降低 1-3% 的精度
- **推理速度**：目标是根据模型复杂度达到 10-30 FPS

### 为什么标准 ML 框架不起作用

- **TensorFlow/PyTorch**：专为 x86/ARM CPU 和 NVIDIA GPU 设计
- **ONNX Runtime**：缺乏 CV181x 后端支持
- **TensorRT**：NVIDIA 专用，与 Sophgo 硬件不兼容

## 先决条件

### 所需知识

- 基本的 Linux 命令行操作
- 了解 Docker 容器
- 熟悉 YOLO 模型架构
- 云部署的基本网络概念

### 所需软件

- Docker Desktop（用于本地开发）
- SSH 客户端（macOS 上的 Terminal，Windows 上的 PuTTY）
- 用于云服务提供商管理的网页浏览器
- 用于配置文件的文本编辑器

### 所需文件

- ONNX 格式的训练好的 YOLO11n 模型
- 100 张校准图像（代表您的数据集）
- 1 张测试图像用于验证

## 云服务提供商设置选项

由于转换过程需要 Linux 和特定的工具链，云服务提供商提供了最可靠的环境。以下是主要提供商的设置指南：

### 选项 1：DigitalOcean（推荐初学者使用）

**优势**：简单界面，可预测的定价，良好的文档

**设置步骤：**

1. 在 [digitalocean.com](https://www.digitalocean.com) 创建 DigitalOcean 账户
2. 使用以下规格创建新的 Droplet：
   - **镜像**：Ubuntu 22.04 LTS
   - **计划**：基础，4GB RAM，2 vCPU（$24/月，使用后可删除）
   - **区域**：选择离您最近的位置
   - **身份验证**：SSH 密钥（推荐）或密码

3. **SSH 连接：**

   ```bash
   ssh root@your_droplet_ip
   ```

4. **安装依赖项：**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**预估成本**：转换过程 $0.50-2.00（如果使用后立即删除）

### 选项 2：AWS EC2

**优势**：最全面的云平台，提供免费套餐

**设置步骤：**

1. 在 [aws.amazon.com](https://aws.amazon.com) 创建 AWS 账户
2. 启动 EC2 实例：
   - **AMI**：Ubuntu Server 22.04 LTS
   - **实例类型**：t3.medium（2 vCPU，4GB RAM）
   - **安全组**：允许来自您 IP 的 SSH（端口 22）

3. **SSH 连接：**

   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

4. **安装依赖项：**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**预估成本**：转换过程 $0.10-0.50（t3.medium 定价）

### 选项 3：Google Cloud Platform

**优势**：新用户可获得 $300 免费积分，性能出色

**设置步骤：**

1. 在 [cloud.google.com](https://cloud.google.com) 创建 GCP 账户
2. 创建 Compute Engine 实例：
   - **机器类型**：e2-standard-2（2 vCPU，8GB RAM）
   - **启动磁盘**：Ubuntu 22.04 LTS，20GB
   - **防火墙**：允许 HTTP/HTTPS 流量

3. **通过浏览器 SSH**（内置终端）或使用 gcloud CLI

4. **安装依赖项：**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   ```

**预估成本**：使用积分免费，否则约 $0.20-0.60 用于转换

### 选项 4：Microsoft Azure

**优势**：与 Windows 生态系统良好集成，学生折扣

**设置步骤：**

1. 在 [azure.microsoft.com](https://azure.microsoft.com) 创建 Azure 账户
2. 创建虚拟机：
   - **镜像**：Ubuntu Server 22.04 LTS
   - **大小**：Standard_B2s（2 vCPU，4GB RAM）
   - **身份验证**：SSH 公钥

3. **SSH 连接：**

   ```bash
   ssh azureuser@your-vm-ip
   ```

4. **安装依赖项：**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker azureuser
   ```

**预估成本**：转换过程约 $0.30-0.80

### 选项 5：阿里云

**优势**：在亚洲地区影响力强，价格有竞争力

**设置步骤：**

1. 在 [alibabacloud.com](https://www.alibabacloud.com) 创建账户
2. 创建 ECS 实例：
   - **镜像**：Ubuntu 22.04 64 位
   - **实例类型**：ecs.t6-c1m2.large（2 vCPU，4GB RAM）
   - **安全组**：允许 SSH（22/22）

3. **SSH 连接：**

   ```bash
   ssh root@your-ecs-ip
   ```

4. **安装依赖项：**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**预估成本**：转换过程约 $0.20-0.50

### 选项 6：腾讯云

**优势**：适合中国用户，价格实惠

**设置步骤：**

1. 在 [intl.cloud.tencent.com](https://intl.cloud.tencent.com) 创建账户
2. 创建 CVM 实例：
   - **镜像**：Ubuntu Server 22.04 LTS 64 位
   - **型号**：S5.MEDIUM4（2 vCPU，4GB RAM）
   - **安全组**：允许 SSH（端口 22）

3. **SSH 连接：**

   ```bash
   ssh ubuntu@your-cvm-ip
   ```

4. **安装依赖项：**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**预估成本**：转换过程约 $0.15-0.40

## 逐步转换过程

### 步骤 1：准备您的环境

1. **通过 SSH 连接到您的云实例**

2. **设置 TPU-MLIR 环境：**

   ```bash
   # Pull the official TPU-MLIR Docker image
   docker pull sophgo/tpuc_dev:v3.1

   # Create working directory
   mkdir ~/yolo_conversion && cd ~/yolo_conversion

   # Start Docker container
   docker run --privileged --name tpu_converter -v $PWD:/workspace -it sophgo/tpuc_dev:v3.1
   ```

3. **在容器内安装 TPU-MLIR 工具：**

   ```bash
   pip install tpu_mlir[all]==1.7

   # Clone and build TPU-MLIR
   git clone -b v1.7 --depth 1 https://github.com/sophgo/tpu-mlir.git
   cd tpu-mlir
   source ./envsetup.sh
   ./build.sh
   ```

### 步骤 2：上传您的模型文件

**从您的本地机器，将文件上传到云实例：**

```bash
# Upload ONNX model
scp your_model.onnx user@your-cloud-ip:~/yolo_conversion/

# Upload calibration images (create zip first)
zip -r calibration_images.zip /path/to/calibration/images/
scp calibration_images.zip user@your-cloud-ip:~/yolo_conversion/

# Upload test image
scp test_image.jpg user@your-cloud-ip:~/yolo_conversion/
```

### 步骤 3：准备目录结构

**在您的云实例内：**

```bash
# Create required directory structure
mkdir -p model_yolo11n/{COCO2017,image,Workspace}

# Extract and organize files
unzip calibration_images.zip
mv calibration_images/* model_yolo11n/COCO2017/
mv test_image.jpg model_yolo11n/image/test.jpg
mv your_model.onnx model_yolo11n/Workspace/yolo11n.onnx

# Rename calibration images to expected format
cd model_yolo11n/COCO2017/
count=1
for file in *.jpg *.png *.jpeg; do
    if [ -f "$file" ]; then
        mv "$file" "Calibration${count}.jpg"
        ((count++))
        if [ $count -gt 100 ]; then break; fi
    fi
done
cd ../..
```

### 步骤 4：进入 Docker 容器并开始转换

```bash
# Copy model folder into Docker container
docker cp model_yolo11n tpu_converter:/workspace/tpu-mlir/

# Enter Docker container
docker exec -it tpu_converter /bin/bash

# Navigate to workspace
cd /workspace/tpu-mlir/model_yolo11n/Workspace
```

### 步骤 5：模型转换流水线

**5.1：ONNX 版本降级**

```bash
python /workspace/tpu-mlir/downgrade_onnx.py yolo11n.onnx yolo11n_v8.onnx
```

**5.2：将 ONNX 转换为 MLIR**

```bash
model_transform \
--model_name yolo11n \
--model_def yolo11n_v8.onnx \
--input_shapes "[[1,3,640,640]]" \
--mean "0.0,0.0,0.0" \
--scale "0.0039216,0.0039216,0.0039216" \
--keep_aspect_ratio \
--pixel_format rgb \
--output_names "/model.23/cv2.0/cv2.0.2/Conv_output_0,/model.23/cv3.0/cv3.0.2/Conv_output_0,/model.23/cv2.1/cv2.1.2/Conv_output_0,/model.23/cv3.1/cv3.1.2/Conv_output_0,/model.23/cv2.2/cv2.2.2/Conv_output_0,/model.23/cv3.2/cv3.2.2/Conv_output_0" \
--test_input ../image/test.jpg \
--test_result yolo11n_top_outputs.npz \
--mlir yolo11n.mlir
```

**参数说明：**

- **`--model_name`**：转换流水线中模型的标识符
  - *用途*：在整个过程中创建一致的命名
  - *可以更改*：是，使用描述性名称如 "traffic_detection" 或 "person_counter"
  - *影响*：仅影响内部命名，对性能无影响

- **`--model_def`**：ONNX 模型文件的路径
  - *用途*：指定要转换的模型
  - *可以更改*：是，必须与实际的 ONNX 文件名匹配
  - *影响*：不同的模型将产生不同的结果

- **`--input_shapes`**：定义输入张量维度 `[batch, channels, height, width]`
  - *用途*：告诉转换器预期的输入图像格式
  - *标准值*：`[[1,3,640,640]]` 适用于 YOLO11n
  - *可以更改*：⚠️ **注意** - 必须与训练分辨率匹配
  - *更改的影响*：
    - 更小（如 `320x320`）：推理更快，精度较低
    - 更大（如 `1280x1280`）：精度更高，速度慢很多，可能超出内存限制
    - 不同宽高比：会扭曲图像，结果较差

- **`--mean`**：RGB 通道的像素归一化均值
  - *用途*：将像素值以零为中心（标准预处理）
  - *标准值*：`"0.0,0.0,0.0"`（无均值减法）
  - *可以更改*：仅当模型使用不同归一化训练时
  - *常见替代值*：
    - ImageNet：`"123.675,116.28,103.53"`（如果模型使用 ImageNet 预处理）
    - 自定义：完全匹配训练预处理

- **`--scale`**：像素归一化缩放因子
  - *用途*：将像素值从 0-255 范围缩放到 0-1 范围
  - *标准值*：`"0.0039216,0.0039216,0.0039216"`（等同于 1/255）
  - *可以更改*：仅当模型期望不同输入范围时
  - *更改的影响*：
    - 错误的缩放值会导致模型完全失效
    - 必须与模型训练时完全匹配

- **`--keep_aspect_ratio`**：在调整大小时保持图像比例
  - *用途*：通过填充而非拉伸来防止图像扭曲
  - *可以更改*：是，使用 `--no_keep_aspect_ratio` 禁用
  - *影响*：
    - 启用（默认）：精度更好，图像有黑色填充
    - 禁用：稍快，但图像可能扭曲

- **`--pixel_format`**：颜色通道顺序
  - *用途*：指定输入使用 RGB 还是 BGR 颜色顺序
  - *标准值*：`rgb` 适用于大多数现代模型
  - *可以更改*：是，如果模型期望 BGR，可改为 `bgr`
  - *错误设置的影响*：颜色会交换（红色显示为蓝色等）

- **`--output_names`**：指定将哪些模型层用作输出
  - *用途*：告诉转换器哪些层包含检测结果
  - *YOLO11n 标准*：显示的 6 个输出层（3 个尺度 × 每个 2 个头）
  - *可以更改*：⚠️ **仅限高级用户** - 需要深入的模型知识
  - *影响*：错误的输出会阻止检测工作

- **`--test_input`**：验证图像的路径
  - *用途*：通过比较转换前后的结果来测试转换精度
  - *可以更改*：是，使用数据集中任何代表性图像
  - *建议*：使用与部署场景相似的图像

- **`--test_result`**：验证数据的输出文件
  - *用途*：存储参考结果以供后续比较
  - *可以更改*：是，任何以 `.npz` 结尾的文件名
  - *影响*：仅影响文件命名

- **`--mlir`**：输出 MLIR 文件名
  - *用途*：下一个转换步骤的中间表示
  - *可以更改*：是，但保持 `.mlir` 扩展名
  - *影响*：仅影响文件命名

**5.3：生成校准表**

```bash
run_calibration \
yolo11n.mlir \
--dataset ../COCO2017 \
--input_num 100 \
-o yolo11n_calib_table
```

**参数说明：**

- **`yolo11n.mlir`**：来自上一步的输入 MLIR 模型
  - *用途*：需要校准数据的模型文件
  - *可以更改*：必须与步骤 5.2 的输出文件名匹配
  - *影响*：不同的模型将产生不同的校准表

- **`--dataset`**：校准图像目录的路径
  - *用途*：提供代表性图像用于分析激活范围
  - *可以更改*：是，但必须包含与部署场景相似的图像
  - *要求*：图像应为 `.jpg`、`.png` 或 `.bmp` 格式
  - *质量影响*：更多样化、代表性的图像 = 更好的校准

- **`--input_num`**：使用的校准图像数量
  - *用途*：确定为统计分析处理多少图像
  - *标准值*：`100`（精度与处理时间的良好平衡）
  - *可以更改*：是，在实际限制内
  - *更改的影响*：
    - **更少图像（25-50）**：校准更快，量化可能不够准确
    - **更多图像（200-500）**：校准精度更好，处理时间长很多
    - **太少（&lt;10）**：量化较差，精度显著损失
    - **太多（>1000）**：收益递减，处理时间很长

- **`-o`（输出文件）**：校准表文件的名称
  - *用途*：存储层激活的统计数据用于量化
  - *可以更改*：是，任何文件名（无需扩展名）
  - *影响*：仅影响文件名，内容相同

**校准过程中发生的事情：**

1. **统计分析**：每个校准图像都通过模型处理
2. **激活映射**：工具记录每层产生的值范围
3. **量化规划**：确定如何高效地将 FP32 值映射到 INT8
4. **精度保持**：找到最优缩放因子以最小化精度损失

**预期输出**：此过程需要 5-15 分钟，应显示如下进度：

```
input_num = 100, ref = 100
real input_num = 100
activation_collect_and_calc_th for op: /model.23/cv3.2/cv3.2.2/Conv_output_0_Conv
[Progress bar showing completion]
auto tune end, run time: XXX seconds
```

**5.4：编译最终 INT8 模型**

```bash
model_deploy \
--mlir yolo11n.mlir \
--quantize INT8 \
--quant_input \
--processor cv181x \
--calibration_table yolo11n_calib_table \
--test_input ../image/test.jpg \
--test_reference yolo11n_top_outputs.npz \
--customization_format RGB_PACKED \
--fuse_preprocess \
--aligned_input \
--model yolo11n_sym_int8.cvimodel
```

**参数说明：**

- **`--mlir`**：输入 MLIR 模型文件
  - *用途*：要为 TPU 编译的模型表示
  - *可以更改*：必须与步骤 5.2 的输出匹配
  - *影响*：不同的 MLIR 文件将产生不同的最终模型

- **`--quantize`**：量化精度级别
  - *用途*：确定模型权重和激活的数值精度
  - *标准值*：`INT8` 适用于 reCamera（CV181x TPU 必需）
  - *可以更改*：CV181x 上选项有限
  - *可用选项*：
    - `INT8`：reCamera 必需，体积小 4 倍，速度快 4-8 倍
    - `F16`：精度更高，体积更大，可能内存不足
    - `F32`：原始精度，对 reCamera 部署来说太大

- **`--quant_input`**：量化输入预处理
  - *用途*：将输入缩放/归一化移至 TPU 以提高效率
  - *可以更改*：是，省略此标志以保持输入处理在 CPU 上
  - *影响*：
    - **启用**（推荐）：推理更快，TPU 利用率更好
    - **禁用**：稍慢，但输入格式更灵活

- **`--processor`**：目标硬件规格
  - *用途*：为特定芯片架构优化代码生成
  - *标准值*：`cv181x` 适用于所有 reCamera 型号
  - *可以更改*：⚠️ **绝不更改** - 其他值在 reCamera 上不起作用
  - *影响*：错误的处理器设置会导致部署失败

- **`--calibration_table`**：量化参考数据
  - *用途*：为最优 INT8 转换提供统计数据
  - *可以更改*：必须与步骤 5.3 的输出文件名匹配
  - *影响*：不同的校准数据影响模型精度

- **`--test_input`**：用于精度测试的验证图像
  - *用途*：验证量化后的模型精度
  - *可以更改*：是，应代表典型用例
  - *建议*：使用与步骤 5.2 相同的图像以保持一致性

- **`--test_reference`**：用于比较的参考输出
  - *用途*：将量化模型输出与原始 FP32 结果比较
  - *可以更改*：必须与步骤 5.2 的输出文件名匹配
  - *影响*：仅用于验证，不影响最终模型

- **`--customization_format`**：输入数据布局优化
  - *用途*：为 TPU 处理优化内存布局
  - *标准值*：`RGB_PACKED` 适用于图像数据
  - *可以更改*：仅限高级用户
  - *影响*：
    - `RGB_PACKED`：为 RGB 图像优化（推荐）
    - `NCHW`：标准张量格式，可能较慢

- **`--fuse_preprocess`**: 将预处理集成到模型中
  - *目的*: 将图像调整大小/归一化与推理结合
  - *可以更改*: 是，省略标志以单独处理预处理
  - *效果*:
    - **启用** (推荐): 单步部署，更好的性能
    - **禁用**: 更多灵活性，但需要外部预处理

- **`--aligned_input`**: 内存对齐优化
  - *目的*: 确保 TPU 的最佳内存访问模式
  - *可以更改*: 是，但建议保留以获得性能
  - *效果*:
    - **启用**: 更好的内存带宽利用率
    - **禁用**: 可能稍微慢一些

- **`--model`**: 最终转换模型的输出文件名
  - *目的*: 为 reCamera 部署创建 `.cvimodel` 文件
  - *可以更改*: 是，使用描述性名称如 `person_detection.cvimodel`
  - *要求*: 必须以 `.cvimodel` 扩展名结尾
  - *效果*: 仅影响文件名

**编译过程中发生的事情：**

1. **层转换**: 每个神经网络层都转换为 TPU 指令
2. **内存优化**: 模型权重被安排以实现高效的 TPU 访问
3. **量化应用**: FP32 权重使用校准数据转换为 INT8
4. **硬件映射**: 操作映射到特定的 TPU 功能单元
5. **验证**: 最终模型根据参考输出进行测试

**预期输出**: 转换应该完成，验证结果显示相似度分数 >99%：

```
npz compare PASSED
230 compared
230 passed
min_similarity = (0.9999997615814209, 0.9999984392787142, 116.13544464111328)
```

**转换后的性能预期：**

- **模型大小**: 3-8MB（相比原始 ONNX 的 20-40MB）
- **推理速度**: 在 reCamera 上 15-30 FPS
- **准确性**: 原始模型性能的 97-99%
- **内存使用**: 推理期间约 10-20MB RAM

### 步骤 6: 下载转换后的模型

**6.1: 退出 Docker 并将文件复制到主机**

```bash
# Exit Docker container
exit

# Copy converted model from container to host
docker cp tpu_converter:/workspace/tpu-mlir/model_yolo11n/Workspace/yolo11n_sym_int8.cvimodel ./

# Verify file exists and check size (should be 2-10MB)
ls -lh yolo11n_sym_int8.cvimodel
```

**6.2: 下载到本地机器**

```bash
# From your local machine
scp user@your-cloud-ip:~/yolo_conversion/yolo11n_sym_int8.cvimodel ~/Downloads/
```

### 步骤 7: 清理云资源

**不要忘记终止您的云实例以避免持续收费！**

- **DigitalOcean**: 从控制面板销毁 Droplet
- **AWS**: 终止 EC2 实例
- **GCP**: 删除 Compute Engine 实例
- **Azure**: 删除虚拟机
- **阿里云/腾讯云**: 释放 ECS/CVM 实例

## 常见问题和故障排除

### 问题 1: 转换过程中出现"文件未找到"错误

**症状**:

```
../image/test.jpg doesn't existed !!!
```

**解决方案**:

```bash
# Check if file exists and has correct extension
ls -la ../image/
# If file has .img extension, rename it
mv ../image/test.img ../image/test.jpg
```

### 问题 2: 移动文件时出现"目录非空"错误

**症状**:

```
mv: cannot move 'Download/model_yolo11n' to 'tpu-mlir/model_yolo11n': Directory not empty
```

**解决方案**:

```bash
# Remove existing directory and replace
rm -rf tpu-mlir/model_yolo11n
mv Download/model_yolo11n tpu-mlir/
```

### 问题 3: 校准失败并显示"There is no inputs"

**症状**:

```
RuntimeError: There is no inputs
```

**解决方案**:

```bash
# Ensure calibration images are in correct format (.jpg, .png)
cd ../COCO2017/
for file in *.img; do
    mv "$file" "${file%.img}.jpg"
done
```

### 问题 4: Docker 权限错误

**症状**:

```
permission denied while trying to connect to the Docker daemon socket
```

**解决方案**:

```bash
# Add user to docker group
sudo usermod -aG docker $USER
# Log out and log back in, or run:
newgrp docker
```

### 问题 5: 内存不足错误

**症状**:

```
CUDA out of memory
```

**解决方案**:

- 升级到更大的云实例（8GB+ RAM）
- 减少转换命令中的批处理大小
- 使用更少的校准图像（最少 50 张）

### 问题 6: 模型验证失败

**症状**:

```
npz compare FAILED
```

**解决方案**:

- 检查测试图像是否代表训练数据
- 验证 ONNX 模型是正确版本
- 尝试不同的测试图像

### 问题 7: SSH 连接问题

**症状**:

```
Connection refused
ssh: connect to host [IP] port 22: Connection refused
```

**解决方案**:

- 检查云提供商安全组是否允许 SSH（端口 22）
- 验证实例正在运行
- 尝试不同的 SSH 密钥或密码认证

## 部署到 reCamera

### 步骤 1: 连接 reCamera

1. 通过 USB-C 线缆将 reCamera 连接到您的计算机
2. 在 `http://192.168.42.1` 访问 Web 界面
3. 使用用户名：`root`，密码：`recamera.1` 登录

### 步骤 2: 上传模型

1. 导航到工作区部分
2. 在流编辑器中点击模型节点
3. 点击 "Upload" 按钮
4. 选择您的 `.cvimodel` 文件
5. 配置模型参数：
   - **Model Name**: `yolo11n_detection`
   - **Classes**: 输入您的类别名称（逗号分隔）
   - **Confidence Threshold**: 0.5（根据需要调整）
   - **IoU Threshold**: 0.45

### 步骤 3: 部署和测试

1. 点击 "Deploy" 按钮
2. 等待 "Successfully deployed" 消息
3. 导航到仪表板查看实时预览
4. 根据需要调整置信度/IoU 阈值

## 常见问题解答

### 问：转换过程需要多长时间？

**答**：通常需要 20-45 分钟，取决于模型复杂性和云实例性能。校准步骤通常是最长的。

### 问：我可以使用不同的 YOLO 版本吗？

**答**：本指南专门针对 YOLO11n。其他版本（YOLOv8、YOLOv9）需要不同的输出层名称，可能存在兼容性问题。

### 问：如果我的模型在转换后准确性显著下降怎么办？

**答**：由于 INT8 量化，一些准确性损失（1-3%）是正常的。如果损失 >5%，请尝试：

- 使用更具代表性的校准图像
- 将校准图像数量增加到 200-500 张
- 在部署期间调整置信度阈值

### 问：我可以转换在自定义数据集上训练的模型吗？

**答**：可以，但确保您的校准图像代表您的自定义数据集。100 张校准图像应该涵盖您的模型将遇到的各种场景。

### 问：支持的最大模型大小是多少？

**答**：reCamera 的内存限制实际模型大小约为 8-16MB。YOLO11n 转换后通常产生 3-8MB 的模型。

### 问：我需要保持云实例运行吗？

**答**：不需要，您可以在下载转换后的模型后立即终止实例。转换是一次性过程。

### 问：我可以批量转换多个模型吗？

**答**：可以，您可以保持相同的环境，通过使用不同的模型文件重复步骤 5-6 来转换多个模型。

### 问：如果我遇到这里未涵盖的错误怎么办？

**答**：

1. 检查 Docker 容器日志：`docker logs tpu_converter`
2. 首先验证您的 ONNX 模型在 Python 环境中正确加载
3. 尝试使用更简单的测试模型来隔离问题
4. 联系 Seeed Studio 支持并提供具体错误消息

### 问：有云部署的替代方案吗？

**答**：有，您可以：

- 在 Mac/Windows 上本地使用 Docker Desktop（需要大量 RAM）
- 在 Windows 上设置带有 Docker 的 WSL2
- 使用本地 Linux 机器或虚拟机

但是，建议使用云部署以获得可靠性和性能。

---

## 结论

为 reCamera 部署转换 YOLO11n 模型需要了解硬件约束和 TPU-MLIR 工具链。虽然过程有几个步骤，但遵循本指南应该能够成功转换模型，准备好进行边缘 AI 部署。

成功的关键是：

1. **准备**: 将所有文件准备为正确的格式和结构
2. **环境**: 使用正确配置的 Linux 环境（推荐云环境）
3. **耐心**: 为校准和转换步骤留出足够时间
4. **验证**: 在部署前彻底测试转换后的模型

如需额外支持，请参考 [SeeedStudio ReCamera wiki](https://wiki.seeedstudio.com/cn/recamera_getting_started/) 或 [TPU-MLIR 文档](https://github.com/sophgo/tpu-mlir)。


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
