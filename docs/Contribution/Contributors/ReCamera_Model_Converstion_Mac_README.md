# YOLO11n Model Conversion for reCamera: Complete Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Understanding the Hardware Constraints](#understanding-the-hardware-constraints)
3. [Prerequisites](#prerequisites)
4. [Cloud Provider Setup Options](#cloud-provider-setup-options)
5. [Step-by-Step Conversion Process](#step-by-step-conversion-process)
6. [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)
7. [Deployment to reCamera](#deployment-to-recamera)
8. [Frequently Asked Questions](#frequently-asked-questions)

## Introduction

### Why Model Conversion is Necessary

The reCamera series devices are edge AI cameras powered by the Sophgo CV181x chip, which uses a specialized Tensor Processing Unit (TPU) for machine learning inference. Unlike general-purpose CPUs or GPUs, TPUs require models to be in a specific format optimized for their architecture.

**Key Reasons for Conversion:**

1. **Hardware Optimization**: The CV181x chip uses INT8 quantization instead of FP32, reducing model size by ~75% and increasing inference speed by 4-8x
2. **Memory Constraints**: reCamera devices have limited RAM (256MB-512MB), requiring compressed models
3. **Power Efficiency**: TPU-optimized models consume significantly less power than CPU/GPU alternatives
4. **Real-time Performance**: Edge devices need sub-100ms inference times for practical applications

### About reCamera Hardware

The reCamera family includes several variants, all built around the Sophgo CV181x SoC:

- **reCamera Default**: Basic model with 2MP sensor, USB-C connectivity
- **reCamera Microscope**: Specialized for close-up imaging with interchangeable lenses
- **reCamera HD POE**: Higher resolution with Power-over-Ethernet support
- **reCamera Gimbal**: Motorized gimbal with object tracking capabilities

**Technical Specifications:**

- **Processor**: Sophgo CV181x (RISC-V + TPU)
- **AI Performance**: 0.5 TOPS INT8
- **Memory**: 256MB DDR3
- **Storage**: 16MB SPI Flash + microSD
- **Supported Formats**: CVI models (Sophgo's proprietary format)

### The Conversion Challenge

YOLO11n models are typically trained in PyTorch and exported to ONNX format. However, the reCamera's CV181x chip cannot directly run ONNX models. The conversion process involves:

1. **Model Architecture Translation**: Converting ONNX to MLIR (Multi-Level Intermediate Representation)
2. **Quantization**: Converting FP32 weights to INT8 while maintaining accuracy
3. **Hardware Optimization**: Adapting layer operations for TPU acceleration
4. **Format Conversion**: Creating the final CVI model format

## Understanding the Hardware Constraints

### Memory Limitations

- **Model Size Limit**: Typically 8-16MB for practical deployment
- **Input Resolution**: Usually 640x640 for YOLO11n to balance accuracy and performance
- **Batch Size**: Limited to 1 due to memory constraints

### Processing Constraints

- **Supported Operations**: Not all ONNX operations have TPU equivalents
- **Precision Loss**: INT8 quantization may reduce accuracy by 1-3%
- **Inference Speed**: Target is 10-30 FPS depending on model complexity

### Why Standard ML Frameworks Don't Work

- **TensorFlow/PyTorch**: Designed for x86/ARM CPUs and NVIDIA GPUs
- **ONNX Runtime**: Lacks CV181x backend support
- **TensorRT**: NVIDIA-specific, incompatible with Sophgo hardware

## Prerequisites

### Required Knowledge

- Basic Linux command line operations
- Understanding of Docker containers
- Familiarity with YOLO model architecture
- Basic networking concepts for cloud deployment

### Required Software

- Docker Desktop (for local development)
- SSH client (Terminal on macOS, PuTTY on Windows)
- Web browser for cloud provider management
- Text editor for configuration files

### Required Files

- Trained YOLO11n model in ONNX format
- 100 calibration images (representative of your dataset)
- 1 test image for validation

## Cloud Provider Setup Options

Since the conversion process requires Linux and specific toolchains, cloud providers offer the most reliable environment. Here are setup guides for major providers:

### Option 1: DigitalOcean (Recommended for Beginners)

**Advantages**: Simple interface, predictable pricing, good documentation

**Setup Steps:**

1. Create DigitalOcean account at [digitalocean.com](https://www.digitalocean.com)
2. Create new Droplet with these specifications:
   - **Image**: Ubuntu 22.04 LTS
   - **Plan**: Basic, 4GB RAM, 2 vCPUs ($24/month, can delete after use)
   - **Region**: Choose closest to your location
   - **Authentication**: SSH Key (recommended) or Password

3. **SSH Connection:**

   ```bash
   ssh root@your_droplet_ip
   ```

4. **Install Dependencies:**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**Estimated Cost**: $0.50-2.00 for conversion process (if deleted immediately after)

### Option 2: AWS EC2

**Advantages**: Most comprehensive cloud platform, free tier available

**Setup Steps:**

1. Create AWS account at [aws.amazon.com](https://aws.amazon.com)
2. Launch EC2 instance:
   - **AMI**: Ubuntu Server 22.04 LTS
   - **Instance Type**: t3.medium (2 vCPU, 4GB RAM)
   - **Security Group**: Allow SSH (port 22) from your IP

3. **SSH Connection:**

   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

4. **Install Dependencies:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**Estimated Cost**: $0.10-0.50 for conversion process (t3.medium pricing)

### Option 3: Google Cloud Platform

**Advantages**: $300 free credits for new users, excellent performance

**Setup Steps:**

1. Create GCP account at [cloud.google.com](https://cloud.google.com)
2. Create Compute Engine instance:
   - **Machine Type**: e2-standard-2 (2 vCPU, 8GB RAM)
   - **Boot Disk**: Ubuntu 22.04 LTS, 20GB
   - **Firewall**: Allow HTTP/HTTPS traffic

3. **SSH via Browser** (built-in terminal) or use gcloud CLI

4. **Install Dependencies:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   ```

**Estimated Cost**: Free with credits, otherwise ~$0.20-0.60 for conversion

### Option 4: Microsoft Azure

**Advantages**: Good integration with Windows ecosystem, student discounts

**Setup Steps:**

1. Create Azure account at [azure.microsoft.com](https://azure.microsoft.com)
2. Create Virtual Machine:
   - **Image**: Ubuntu Server 22.04 LTS
   - **Size**: Standard_B2s (2 vCPUs, 4GB RAM)
   - **Authentication**: SSH public key

3. **SSH Connection:**

   ```bash
   ssh azureuser@your-vm-ip
   ```

4. **Install Dependencies:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker azureuser
   ```

**Estimated Cost**: ~$0.30-0.80 for conversion process

### Option 5: Alibaba Cloud

**Advantages**: Strong presence in Asia, competitive pricing

**Setup Steps:**

1. Create account at [alibabacloud.com](https://www.alibabacloud.com)
2. Create ECS instance:
   - **Image**: Ubuntu 22.04 64-bit
   - **Instance Type**: ecs.t6-c1m2.large (2 vCPU, 4GB RAM)
   - **Security Group**: Allow SSH (22/22)

3. **SSH Connection:**

   ```bash
   ssh root@your-ecs-ip
   ```

4. **Install Dependencies:**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**Estimated Cost**: ~$0.20-0.50 for conversion process

### Option 6: Tencent Cloud

**Advantages**: Good for users in China, affordable pricing

**Setup Steps:**

1. Create account at [intl.cloud.tencent.com](https://intl.cloud.tencent.com)
2. Create CVM instance:
   - **Image**: Ubuntu Server 22.04 LTS 64-bit
   - **Model**: S5.MEDIUM4 (2 vCPU, 4GB RAM)
   - **Security Group**: Allow SSH (port 22)

3. **SSH Connection:**

   ```bash
   ssh ubuntu@your-cvm-ip
   ```

4. **Install Dependencies:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**Estimated Cost**: ~$0.15-0.40 for conversion process

## Step-by-Step Conversion Process

### Step 1: Prepare Your Environment

1. **Connect to your cloud instance via SSH**

2. **Set up TPU-MLIR environment:**

   ```bash
   # Pull the official TPU-MLIR Docker image
   docker pull sophgo/tpuc_dev:v3.1
   
   # Create working directory
   mkdir ~/yolo_conversion && cd ~/yolo_conversion
   
   # Start Docker container
   docker run --privileged --name tpu_converter -v $PWD:/workspace -it sophgo/tpuc_dev:v3.1
   ```

3. **Install TPU-MLIR tools inside container:**

   ```bash
   pip install tpu_mlir[all]==1.7
   
   # Clone and build TPU-MLIR
   git clone -b v1.7 --depth 1 https://github.com/sophgo/tpu-mlir.git
   cd tpu-mlir
   source ./envsetup.sh
   ./build.sh
   ```

### Step 2: Upload Your Model Files

**From your local machine, upload files to cloud instance:**

```bash
# Upload ONNX model
scp your_model.onnx user@your-cloud-ip:~/yolo_conversion/

# Upload calibration images (create zip first)
zip -r calibration_images.zip /path/to/calibration/images/
scp calibration_images.zip user@your-cloud-ip:~/yolo_conversion/

# Upload test image
scp test_image.jpg user@your-cloud-ip:~/yolo_conversion/
```

### Step 3: Prepare Directory Structure

**Inside your cloud instance:**

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

### Step 4: Enter Docker Container and Begin Conversion

```bash
# Copy model folder into Docker container
docker cp model_yolo11n tpu_converter:/workspace/tpu-mlir/

# Enter Docker container
docker exec -it tpu_converter /bin/bash

# Navigate to workspace
cd /workspace/tpu-mlir/model_yolo11n/Workspace
```

### Step 5: Model Conversion Pipeline

**5.1: ONNX Version Downgrade**

```bash
python /workspace/tpu-mlir/downgrade_onnx.py yolo11n.onnx yolo11n_v8.onnx
```

**5.2: Convert ONNX to MLIR**

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

**Parameter Explanations:**

- **`--model_name`**: Identifier for your model in the conversion pipeline
  - *Purpose*: Creates consistent naming throughout the process
  - *Can be changed*: Yes, use descriptive names like "traffic_detection" or "person_counter"
  - *Effect*: Only affects internal naming, no impact on performance

- **`--model_def`**: Path to your ONNX model file
  - *Purpose*: Specifies which model to convert
  - *Can be changed*: Yes, must match your actual ONNX file name
  - *Effect*: Different models will produce different results

- **`--input_shapes`**: Defines input tensor dimensions `[batch, channels, height, width]`
  - *Purpose*: Tells the converter the expected input image format
  - *Standard value*: `[[1,3,640,640]]` for YOLO11n
  - *Can be changed*: ⚠️ **Caution** - Must match your training resolution
  - *Effects of changes*:
    - Smaller (e.g., `320x320`): Faster inference, lower accuracy
    - Larger (e.g., `1280x1280`): Higher accuracy, much slower, may exceed memory limits
    - Different aspect ratio: Will distort images, poor results

- **`--mean`**: Pixel normalization mean values for RGB channels
  - *Purpose*: Centers pixel values around zero (standard preprocessing)
  - *Standard value*: `"0.0,0.0,0.0"` (no mean subtraction)
  - *Can be changed*: Only if your model was trained with different normalization
  - *Common alternatives*:
    - ImageNet: `"123.675,116.28,103.53"` (if model uses ImageNet preprocessing)
    - Custom: Match your training preprocessing exactly

- **`--scale`**: Pixel normalization scale factors
  - *Purpose*: Scales pixel values from 0-255 range to 0-1 range
  - *Standard value*: `"0.0039216,0.0039216,0.0039216"` (equivalent to 1/255)
  - *Can be changed*: Only if your model expects different input range
  - *Effects of changes*:
    - Wrong scale values will cause complete model failure
    - Must match exactly what your model was trained with

- **`--keep_aspect_ratio`**: Maintains image proportions during resize
  - *Purpose*: Prevents image distortion by padding instead of stretching
  - *Can be changed*: Yes, use `--no_keep_aspect_ratio` to disable
  - *Effects*:
    - Enabled (default): Better accuracy, black padding on images
    - Disabled: Slightly faster, but images may be distorted

- **`--pixel_format`**: Color channel ordering
  - *Purpose*: Specifies whether input uses RGB or BGR color order
  - *Standard value*: `rgb` for most modern models
  - *Can be changed*: Yes, to `bgr` if your model expects it
  - *Effects of wrong setting*: Colors will be swapped (red appears blue, etc.)

- **`--output_names`**: Specifies which model layers to use as outputs
  - *Purpose*: Tells converter which layers contain detection results
  - *Standard for YOLO11n*: The 6 output layers shown (3 scales × 2 heads each)
  - *Can be changed*: ⚠️ **Advanced users only** - requires deep model knowledge
  - *Effects*: Wrong outputs will prevent detection from working

- **`--test_input`**: Path to validation image
  - *Purpose*: Tests conversion accuracy by comparing before/after results
  - *Can be changed*: Yes, use any representative image from your dataset
  - *Recommended*: Use image similar to your deployment scenario

- **`--test_result`**: Output file for validation data
  - *Purpose*: Stores reference results for later comparison
  - *Can be changed*: Yes, any filename ending in `.npz`
  - *Effect*: Only affects file naming

- **`--mlir`**: Output MLIR file name
  - *Purpose*: Intermediate representation for next conversion step
  - *Can be changed*: Yes, but keep `.mlir` extension
  - *Effect*: Only affects file naming

**5.3: Generate Calibration Table**

```bash
run_calibration \
yolo11n.mlir \
--dataset ../COCO2017 \
--input_num 100 \
-o yolo11n_calib_table
```

**Parameter Explanations:**

- **`yolo11n.mlir`**: Input MLIR model from previous step
  - *Purpose*: The model file that needs calibration data
  - *Can be changed*: Must match the output filename from step 5.2
  - *Effect*: Different models will produce different calibration tables

- **`--dataset`**: Path to calibration images directory
  - *Purpose*: Provides representative images for analyzing activation ranges
  - *Can be changed*: Yes, but must contain images similar to deployment scenario
  - *Requirements*: Images should be `.jpg`, `.png`, or `.bmp` format
  - *Quality impact*: More diverse, representative images = better calibration

- **`--input_num`**: Number of calibration images to use
  - *Purpose*: Determines how many images are processed for statistical analysis
  - *Standard value*: `100` (good balance of accuracy vs. processing time)
  - *Can be changed*: Yes, within practical limits
  - *Effects of changes*:
    - **Fewer images (25-50)**: Faster calibration, potentially less accurate quantization
    - **More images (200-500)**: Better calibration accuracy, much longer processing time
    - **Too few (&lt;10)**: Poor quantization, significant accuracy loss
    - **Too many (>1000)**: Diminishing returns, very long processing time

- **`-o` (output file)**: Name for the calibration table file
  - *Purpose*: Stores statistical data about layer activations for quantization
  - *Can be changed*: Yes, any filename (no extension needed)
  - *Effect*: Only affects filename, content is the same

**What Happens During Calibration:**

1. **Statistical Analysis**: Each calibration image is processed through the model
2. **Activation Mapping**: The tool records the range of values each layer produces
3. **Quantization Planning**: Determines how to map FP32 values to INT8 efficiently
4. **Accuracy Preservation**: Finds optimal scaling factors to minimize precision loss

**Expected Output**: This process will take 5-15 minutes and should show progress like:

```
input_num = 100, ref = 100
real input_num = 100
activation_collect_and_calc_th for op: /model.23/cv3.2/cv3.2.2/Conv_output_0_Conv
[Progress bar showing completion]
auto tune end, run time: XXX seconds
```

**5.4: Compile Final INT8 Model**

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

**Parameter Explanations:**

- **`--mlir`**: Input MLIR model file
  - *Purpose*: The model representation to be compiled for TPU
  - *Can be changed*: Must match output from step 5.2
  - *Effect*: Different MLIR files will produce different final models

- **`--quantize`**: Quantization precision level
  - *Purpose*: Determines numerical precision for model weights and activations
  - *Standard value*: `INT8` for reCamera (required for CV181x TPU)
  - *Can be changed*: Limited options on CV181x
  - *Available options*:
    - `INT8`: Required for reCamera, 4x smaller, 4-8x faster
    - `F16`: Higher precision, larger size, may not fit in memory
    - `F32`: Original precision, too large for reCamera deployment

- **`--quant_input`**: Quantizes input preprocessing
  - *Purpose*: Moves input scaling/normalization to TPU for efficiency
  - *Can be changed*: Yes, omit this flag to keep input processing on CPU
  - *Effects*:
    - **Enabled** (recommended): Faster inference, better TPU utilization
    - **Disabled**: Slightly slower, but more flexible input formats

- **`--processor`**: Target hardware specification
  - *Purpose*: Optimizes code generation for specific chip architecture
  - *Standard value*: `cv181x` for all reCamera models
  - *Can be changed*: ⚠️ **Never change** - other values won't work on reCamera
  - *Effect*: Wrong processor setting will cause deployment failure

- **`--calibration_table`**: Quantization reference data
  - *Purpose*: Provides statistical data for optimal INT8 conversion
  - *Can be changed*: Must match output filename from step 5.3
  - *Effect*: Different calibration data affects model accuracy

- **`--test_input`**: Validation image for accuracy testing
  - *Purpose*: Verifies model accuracy after quantization
  - *Can be changed*: Yes, should represent typical use case
  - *Recommendation*: Use same image as in step 5.2 for consistency

- **`--test_reference`**: Reference output for comparison
  - *Purpose*: Compares quantized model output to original FP32 results
  - *Can be changed*: Must match output filename from step 5.2
  - *Effect*: Used only for validation, doesn't affect final model

- **`--customization_format`**: Input data layout optimization
  - *Purpose*: Optimizes memory layout for TPU processing
  - *Standard value*: `RGB_PACKED` for image data
  - *Can be changed*: Advanced users only
  - *Effects*:
    - `RGB_PACKED`: Optimized for RGB images (recommended)
    - `NCHW`: Standard tensor format, may be slower

- **`--fuse_preprocess`**: Integrates preprocessing into model
  - *Purpose*: Combines image resizing/normalization with inference
  - *Can be changed*: Yes, omit flag to handle preprocessing separately
  - *Effects*:
    - **Enabled** (recommended): Single-step deployment, better performance
    - **Disabled**: More flexibility, but requires external preprocessing

- **`--aligned_input`**: Memory alignment optimization
  - *Purpose*: Ensures optimal memory access patterns for TPU
  - *Can be changed*: Yes, but recommended to keep for performance
  - *Effects*:
    - **Enabled**: Better memory bandwidth utilization
    - **Disabled**: May be slightly slower

- **`--model`**: Output filename for final converted model
  - *Purpose*: Creates the `.cvimodel` file for reCamera deployment
  - *Can be changed*: Yes, use descriptive names like `person_detection.cvimodel`
  - *Requirement*: Must end with `.cvimodel` extension
  - *Effect*: Only affects filename

**What Happens During Compilation:**

1. **Layer Conversion**: Each neural network layer is converted to TPU instructions
2. **Memory Optimization**: Model weights are arranged for efficient TPU access
3. **Quantization Application**: FP32 weights are converted to INT8 using calibration data
4. **Hardware Mapping**: Operations are mapped to specific TPU functional units
5. **Validation**: Final model is tested against reference outputs

**Expected Output**: The conversion should complete with validation results showing similarity scores >99%:

```
npz compare PASSED
230 compared
230 passed
min_similarity = (0.9999997615814209, 0.9999984392787142, 116.13544464111328)
```

**Performance Expectations After Conversion:**

- **Model Size**: 3-8MB (compared to 20-40MB original ONNX)
- **Inference Speed**: 15-30 FPS on reCamera
- **Accuracy**: 97-99% of original model performance
- **Memory Usage**: ~10-20MB RAM during inference

### Step 6: Download Converted Model

**6.1: Exit Docker and copy file to host**

```bash
# Exit Docker container
exit

# Copy converted model from container to host
docker cp tpu_converter:/workspace/tpu-mlir/model_yolo11n/Workspace/yolo11n_sym_int8.cvimodel ./

# Verify file exists and check size (should be 2-10MB)
ls -lh yolo11n_sym_int8.cvimodel
```

**6.2: Download to your local machine**

```bash
# From your local machine
scp user@your-cloud-ip:~/yolo_conversion/yolo11n_sym_int8.cvimodel ~/Downloads/
```

### Step 7: Clean Up Cloud Resources

**Don't forget to terminate your cloud instance to avoid ongoing charges!**

- **DigitalOcean**: Destroy Droplet from control panel
- **AWS**: Terminate EC2 instance
- **GCP**: Delete Compute Engine instance
- **Azure**: Delete Virtual Machine
- **Alibaba/Tencent**: Release ECS/CVM instance

## Common Issues and Troubleshooting

### Issue 1: "File not found" errors during conversion

**Symptoms**:

```
../image/test.jpg doesn't existed !!!
```

**Solution**:

```bash
# Check if file exists and has correct extension
ls -la ../image/
# If file has .img extension, rename it
mv ../image/test.img ../image/test.jpg
```

### Issue 2: "Directory not empty" when moving files

**Symptoms**:

```
mv: cannot move 'Download/model_yolo11n' to 'tpu-mlir/model_yolo11n': Directory not empty
```

**Solution**:

```bash
# Remove existing directory and replace
rm -rf tpu-mlir/model_yolo11n
mv Download/model_yolo11n tpu-mlir/
```

### Issue 3: Calibration fails with "There is no inputs"

**Symptoms**:

```
RuntimeError: There is no inputs
```

**Solution**:

```bash
# Ensure calibration images are in correct format (.jpg, .png)
cd ../COCO2017/
for file in *.img; do
    mv "$file" "${file%.img}.jpg"
done
```

### Issue 4: Docker permission errors

**Symptoms**:

```
permission denied while trying to connect to the Docker daemon socket
```

**Solution**:

```bash
# Add user to docker group
sudo usermod -aG docker $USER
# Log out and log back in, or run:
newgrp docker
```

### Issue 5: Out of memory errors

**Symptoms**:

```
CUDA out of memory
```

**Solution**:

- Upgrade to larger cloud instance (8GB+ RAM)
- Reduce batch size in conversion commands
- Use fewer calibration images (minimum 50)

### Issue 6: Model validation fails

**Symptoms**:

```
npz compare FAILED
```

**Solution**:

- Check if test image is representative of training data
- Verify ONNX model is correct version
- Try different test image

### Issue 7: SSH connection issues

**Symptoms**:

```
Connection refused
ssh: connect to host [IP] port 22: Connection refused
```

**Solution**:

- Check cloud provider security groups allow SSH (port 22)
- Verify instance is running
- Try different SSH key or password authentication

## Deployment to reCamera

### Step 1: Connect reCamera

1. Connect reCamera to your computer via USB-C cable
2. Access web interface at `http://192.168.42.1`
3. Login with username: `root`, password: `recamera.1`

### Step 2: Upload Model

1. Navigate to Workspace section
2. Click on model node in the flow editor
3. Click "Upload" button
4. Select your `.cvimodel` file
5. Configure model parameters:
   - **Model Name**: `yolo11n_detection`
   - **Classes**: Enter your class names (comma-separated)
   - **Confidence Threshold**: 0.5 (adjust as needed)
   - **IoU Threshold**: 0.45

### Step 3: Deploy and Test

1. Click "Deploy" button
2. Wait for "Successfully deployed" message
3. Navigate to Dashboard for live preview
4. Adjust confidence/IoU thresholds as needed

## Frequently Asked Questions

### Q: How long does the conversion process take?

**A**: Typically 20-45 minutes depending on model complexity and cloud instance performance. The calibration step is usually the longest.

### Q: Can I use a different YOLO version?

**A**: This guide is specific to YOLO11n. Other versions (YOLOv8, YOLOv9) require different output layer names and may have compatibility issues.

### Q: What if my model accuracy drops significantly after conversion?

**A**: Some accuracy loss (1-3%) is normal due to INT8 quantization. If loss is >5%, try:

- Using more representative calibration images
- Increasing calibration image count to 200-500
- Adjusting confidence thresholds during deployment

### Q: Can I convert models trained on custom datasets?

**A**: Yes, but ensure your calibration images are representative of your custom dataset. The 100 calibration images should cover the variety of scenarios your model will encounter.

### Q: What's the maximum model size supported?

**A**: The reCamera's memory limits practical model size to ~8-16MB. YOLO11n typically produces 3-8MB models after conversion.

### Q: Do I need to keep the cloud instance running?

**A**: No, you can terminate the instance immediately after downloading your converted model. The conversion is a one-time process.

### Q: Can I batch convert multiple models?

**A**: Yes, you can keep the same environment and convert multiple models by repeating steps 5-6 with different model files.

### Q: What if I encounter an error not covered here?

**A**:

1. Check the Docker container logs: `docker logs tpu_converter`
2. Verify your ONNX model loads correctly in a Python environment first
3. Try with a simpler test model to isolate the issue
4. Contact Seeed Studio support with specific error messages

### Q: Are there alternatives to cloud deployment?

**A**: Yes, you can:

- Use Docker Desktop locally on Mac/Windows (requires significant RAM)
- Set up WSL2 on Windows with Docker
- Use a local Linux machine or VM

However, cloud deployment is recommended for reliability and performance.

---

## Conclusion

Converting YOLO11n models for reCamera deployment requires understanding both the hardware constraints and the TPU-MLIR toolchain. While the process has several steps, following this guide should result in a successfully converted model ready for edge AI deployment.

The key to success is:

1. **Preparation**: Having all files in the correct format and structure
2. **Environment**: Using a properly configured Linux environment (cloud recommended)
3. **Patience**: Allowing sufficient time for the calibration and conversion steps
4. **Validation**: Testing your converted model thoroughly before deployment

For additional support, consult the [SeeedStudio ReCamera wiki](https://wiki.seeedstudio.com/recamera_getting_started/) or the [TPU-MLIR documentation](https://github.com/sophgo/tpu-mlir).
