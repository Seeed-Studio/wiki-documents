---
description: 本指南展示了如何将 Orbbec Gemini 2 深度相机与基于 Jetson 的 reComputer（JetPack 5.1.3）配对，以执行实时目标检测和三维距离测量。它详细介绍了安装 Gemini 2 Python SDK、使用 pybind11 构建它，以及通过 OpenCV 测试脚本验证相机输出。接下来，它详细说明了将 YOLOv11n 模型转换为 TensorRT 引擎以在 Jetson 上进行高速推理，然后解释了如何检索相机内参并将深度像素投影到三维坐标中，以便计算检测到的目标之间的欧几里得距离。示例脚本将 YOLOv11 检测与深度数据相结合，显示测量的距离（通常精确到 ±1 cm），文章最后提供了一些技巧——深度图滤波、目标居中和帧平均——以减轻结构光深度在边缘、倾斜或反射表面以及挑战性照明条件下的噪声。
title: 在 Jetson Orin 上使用 YOLOv11 与深度相机进行距离测量
keywords:
  - reComputer J4012
  - reComputer
  - Orbbec Gemini 2
  - Depth Camera
  - YOLOv11
  - YOLO11
  - Distance Measurement
  - Computer Vision
  - Jetson
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /cn/yolov11_with_depth_camera
last_update:
  date: 07/04/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
本 wiki 演示了如何将 Orbbec Gemini 2 深度相机与 reComputer J4012（配备 NVIDIA® Jetson™ Orin™ NX 16GB 模块）结合使用，通过 YOLOv11 目标检测进行视觉目标距离测量。
</div>

## 前提条件

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html) 或 reCompuer 系列的其他产品（预装 JetPack 5.1.3）
- Orbbec Gemini 2 深度相机
- USB Type-C 数据传输线（连接相机）

## 硬件连接

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/connection.jpg"/>
</div>

## 安装 Gemini 2 Python SDK

**步骤 1.** 克隆 SDK 并安装依赖项：

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv camke g++ gcc
pip install pybind11
```

**步骤 2.** 安装构建项目所需的必要包：

```bash
cd pyorbbecsdk
pip install -r requirements.txt
```

**步骤 3.** 构建项目：

```bash
mkdir build
cd build
# The version of Python here depends on your environment, but it requires Python 3.6 or above.
cmake \
  -Dpybind11_DIR=`pybind11-config --cmakedir` \
  -DPython3_EXECUTABLE=/usr/bin/python3.8 \
  -DPython3_INCLUDE_DIR=/usr/include/python3.8 \
  -DPython3_LIBRARY=/usr/lib/aarch64-linux-gnu/libpython3.8.so \
  ..
make -j4
make install
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/make_install.png"/>
</div>

**步骤 4.** 安装 python wheel：

```bash
cd /path/to/pyorbbecsdk
pip install wheel
python setup.py bdist_wheel
pip install dist/*.whl
```

**步骤 5.** (可选) 为您的IDE生成存根以获得更好的IntelliSense支持：

```bash
source env.sh
pip install pybind11-stubgen
pybind11-stubgen pyorbbecsdk
```

:::info
更多详细信息，请参考[这里](https://orbbec.github.io/pyorbbecsdk/source/2_installation/build_the_package.html#install-dependencies-ubuntu)
:::

## 测试深度相机

通过以下示例，我们将向您展示如何结合使用 Orbbec Gemini 2 深度相机的 Python API 和 OpenCV 进行开发。同时，这也可以测试您的相机开发环境是否正常运行。

<details>
<summary> test.py </summary>

```python
from pyorbbecsdk import *
import cv2
import numpy as np

def simple_frame_to_bgr(frame):
    width = frame.get_width()
    height = frame.get_height()
    data = np.frombuffer(frame.get_data(), dtype=np.uint8)
    if data.size != width * height * 3:
        return None
    image = data.reshape((height, width, 3))
    return cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

config = Config()
pipeline = Pipeline()

color_profile_list = pipeline.get_stream_profile_list(OBSensorType.COLOR_SENSOR)
color_profile = None
for cp in color_profile_list:
    if cp.get_format() == OBFormat.RGB:
        color_profile = cp
        break
if color_profile is None:
    print("No RGB format color stream profile found")
    sys.exit(-1)

hw_d2c_profile_list = pipeline.get_d2c_depth_profile_list(color_profile, OBAlignMode.HW_MODE)
if len(hw_d2c_profile_list) == 0:
    print("No D2C aligned depth stream profile found")
    sys.exit(-1)
hw_d2c_profile = hw_d2c_profile_list[0]

config.enable_stream(hw_d2c_profile)
config.enable_stream(color_profile)
config.set_align_mode(OBAlignMode.HW_MODE)
pipeline.enable_frame_sync()
pipeline.start(config)

try:
    while True:
        frames = pipeline.wait_for_frames(100)
        if frames is None:
            continue
        color_frame = frames.get_color_frame()
        depth_frame = frames.get_depth_frame()
        if color_frame is None or depth_frame is None:
            continue
        color_image = simple_frame_to_bgr(color_frame)
        height = depth_frame.get_height()
        width = depth_frame.get_width()
        depth_data = np.frombuffer(depth_frame.get_data(), dtype=np.uint16).reshape((height, width))
        min_depth = 150
        max_depth = 2000
        depth_clipped = np.clip(depth_data, min_depth, max_depth)
        depth_inverted = max_depth - depth_clipped
        depth_normalized = cv2.normalize(depth_inverted, None, 0, 255, cv2.NORM_MINMAX).astype(np.uint8)
        depth_vis = cv2.applyColorMap(depth_normalized, cv2.COLORMAP_MAGMA)
        if color_image.shape[:2] != depth_vis.shape[:2]:
            color_image = cv2.resize(color_image, (depth_vis.shape[1], depth_vis.shape[0]), interpolation=cv2.INTER_NEAREST)
        concat_image = cv2.hconcat([color_image, depth_vis])
        scale = 0.3
        concat_image = cv2.resize(concat_image, (0, 0), fx=scale, fy=scale, interpolation=cv2.INTER_LINEAR)
        cv2.imshow("Output", concat_image)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
finally:
    pipeline.stop()
    cv2.destroyAllWindows()
```

</details>

<div style={{ textAlign: "justify" }}>
如果您看到一个窗口，左侧显示RGB图像，右侧显示深度图像，说明您的相机工作正常。
</div>

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/depth_camera.gif"/>
</div>

## 使用 TensorRT 部署 YOLOv11

<div style={{ textAlign: "justify" }}>
YOLOv11 提供高性能的实时目标检测。以下步骤展示了如何使用 TensorRT 部署 YOLOv11，以在 Jetson 平台上实现快速推理。
</div>

**步骤 1.** 克隆 YOLOv11 TensorRT 仓库：

```bash
git clone https://github.com/wang-xinyu/tensorrtx.git
cd tensorrtx/yolo11
```

**步骤 2.** 下载 YOLOv11n 预训练模型：

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```
**步骤 3.** 生成 .wts 文件：

```bash
python gen_wts.py -w yolo11n.pt -o yolo11n.wts -t detect
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/wts.png"/>
</div>

**步骤 4.** 构建项目：

```bash
mkdir build
cd build
cmake ..
make -j4
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/yolo_make_install.png"/>
</div>

**步骤 5.** 生成 TensorRT 引擎：

```bash
./yolo11_det -s yolo11n.wts yolo11n.engine n
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/g_engine.png"/>
</div>

如果成功，您将在构建目录中找到 `yolo11n.engine` 文件。

**步骤 6.** 安装 pycuda 用于 Python API 推理：

```bash
pip install pycuda
```

:::info
此仓库中 yolo11 的部署仅支持 TensorRT-8.x（适用于 Jetpack 6 或更高版本的 Jetson 平台，需要大量代码修改！）
:::

## 距离计算

### 前置知识

<div style={{ textAlign: "justify" }}>
来自相机的深度值表示 Z 轴距离（从相机向前），而不是实际的几何距离。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/z.jpg"/>
</div>

要计算两点之间的真实 3D 欧几里得距离，您需要：

- 目标的像素坐标 (u, v)

- (u, v) 处的深度值 d

- 深度相机内参：fx, fy, cx, cy

相机坐标系中某一点的三维坐标可以使用以下公式计算：
</div>

```bash
Z = d
X = (u - cx) * Z / fx
Y = (v - cy) * Z / fy
```

空间中两点((X1,Y1,Z1) 和 (X2,Y2,Z2))之间的欧几里得距离 `D` 可以使用以下公式计算：

```
D = sqrt((X1-X2)^2 + (Y1-Y2)^2 + (Z1-Z2)^2)
```

**Get camera parameters example:**

<details>
<summary> get_camera_parameters.py </summary>

```python
from pyorbbecsdk import *
pipeline = Pipeline()
profile_list = pipeline.get_stream_profile_list(OBSensorType.COLOR_SENSOR)
color_profile = profile_list.get_default_video_stream_profile()
profile_list = pipeline.get_stream_profile_list(OBSensorType.DEPTH_SENSOR)
depth_profile = profile_list.get_default_video_stream_profile()
extrinsic = depth_profile.get_extrinsic_to(color_profile)
print("extrinsic  {}".format(extrinsic))
depth_intrinsics = depth_profile.get_intrinsic()
print("depth_intrinsics  {}".format(depth_intrinsics))
depth_distortion = depth_profile.get_distortion()
print("depth_distortion  {}".format(depth_distortion))
color_intrinsics = color_profile.get_intrinsic()
print("color_intrinsics  {}".format(color_intrinsics))
color_distortion = color_profile.get_distortion()
print("color_distortion  {}".format(color_distortion))
```

</details>

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/in.png"/>
</div>

获取深度相机的内参：

```
fx = 616.707275
fy = 616.707275
cx = 648.300171
cy = 404.478149
```

### 实时物体检测和距离测量

<div style={{ textAlign: "justify" }}>
以下脚本演示了如何使用 YOLOv11 与 Orbbec Gemini 2 深度相机来检测物体（例如，杯子和鼠标）并实时测量它们之间的 3D 距离：
</div>

<details>
<summary>distance_measurement.py</summary>

```python

"""
An example that uses TensorRT's Python api to make inferences.
"""
import ctypes
import os
import shutil
import random
import sys
import threading
import time
import cv2
import numpy as np
import pycuda.autoinit  # noqa: F401
import pycuda.driver as cuda
import tensorrt as trt
from pyorbbecsdk import *
if not hasattr(np, 'bool'):
    np.bool = np.bool_


CONF_THRESH = 0.5
IOU_THRESHOLD = 0.4
POSE_NUM = 17 * 3
DET_NUM = 6
SEG_NUM = 32
OBB_NUM = 1


def get_img_path_batches(batch_size, img_dir):
    ret = []
    batch = []
    for root, dirs, files in os.walk(img_dir):
        for name in files:
            if len(batch) == batch_size:
                ret.append(batch)
                batch = []
            batch.append(os.path.join(root, name))
    if len(batch) > 0:
        ret.append(batch)
    return ret


def plot_one_box(x, img, distance_list,depth_img=None,depth_data=None,color=None, label=None, line_thickness=None):
    """
    description: Plots one bounding box on image img,
                 this function comes from YoLo11 project.
    param:
        x:      a box likes [x1,y1,x2,y2]
        img:    a opencv image object
        color:  color to draw rectangle, such as (0,255,0)
        label:  str
        line_thickness: int
    return:
        no return

    """
    tl = (
            line_thickness or round(0.002 * (img.shape[0] + img.shape[1]) / 2) + 1
    )  # line/font thickness
    color = color or [random.randint(0, 255) for _ in range(3)]
    c1, c2 = (int(x[0]), int(x[1])), (int(x[2]), int(x[3]))
    cv2.rectangle(img, c1, c2, color, thickness=tl, lineType=cv2.LINE_AA)

    # Camera intrinsic parameters
    fx = 616.707275
    fy = 616.707275
    cx0 = 648.300171
    cy0 = 404.478149

    if label:
        cx = int((x[0] + x[2]) / 2)
        cy = int((x[1] + x[3]) / 2)
        cv2.circle(img, (cx, cy), 5, (0, 0, 255), -1)
        cv2.circle(depth_img, (cx, cy), 5, (0, 0, 255), -1)

        depth_clust = [(cx, cy),(cx - 1 ,cy),(cx - 1 ,cy - 1),(cx,cy -1),(cx + 1,cy -1),(cx+1,cy),(cx+1,cy+1),(cx,cy+1),(cx - 1,cy + 1)]
        for point in depth_clust:
            cx, cy = point
            if 0 <= cx < depth_data.shape[1] and 0 <= cy < depth_data.shape[0]:
                cv2.circle(depth_img, (cx, cy), 5, (0, 255, 0), -1)
            else:
                continue
            # Convert depth value to meters, assuming the original data unit is millimeters
            depth_mm = depth_data[cy, cx]
            depth_m = depth_mm / 1000.0
            # Calculate 3D coordinates (X, Y, Z) in meters
            X = (cx - cx0) * depth_m / fx
            Y = (cy - cy0) * depth_m / fy
            Z = depth_m
            distance_list.append([X, Y, Z])

        tf = max(tl - 1, 1)  # font thickness
        t_size = cv2.getTextSize(label, 0, fontScale=tl / 3, thickness=tf)[0]
        c2 = c1[0] + t_size[0], c1[1] - t_size[1] - 3
        cv2.rectangle(img, c1, c2, color, -1, cv2.LINE_AA)  # filled
        cv2.putText(
            img,
            label,
            (c1[0], c1[1] - 2),
            0,
            tl / 3,
            [225, 255, 255],
            thickness=tf,
            lineType=cv2.LINE_AA,
        )
    return distance_list


class YoLo11TRT(object):
    """
    description: A YOLO11 class that warps TensorRT ops, preprocess and postprocess ops.
    """

    def __init__(self, engine_file_path):
        # Create a Context on this device,
        self.ctx = cuda.Device(0).make_context()
        stream = cuda.Stream()
        TRT_LOGGER = trt.Logger(trt.Logger.INFO)
        runtime = trt.Runtime(TRT_LOGGER)

        # Deserialize the engine from file
        with open(engine_file_path, "rb") as f:
            engine = runtime.deserialize_cuda_engine(f.read())
        context = engine.create_execution_context()

        host_inputs = []
        cuda_inputs = []
        host_outputs = []
        cuda_outputs = []
        bindings = []

        for binding in engine:
            print('bingding:', binding, engine.get_binding_shape(binding))
            self.batch_size = engine.get_binding_shape(binding)[0]
            size = trt.volume(engine.get_binding_shape(binding)) * engine.max_batch_size
            dtype = trt.nptype(engine.get_binding_dtype(binding))
            # Allocate host and device buffers
            host_mem = cuda.pagelocked_empty(size, dtype)
            cuda_mem = cuda.mem_alloc(host_mem.nbytes)
            # Append the device buffer to device bindings.
            bindings.append(int(cuda_mem))
            # Append to the appropriate list.
            if engine.binding_is_input(binding):
                self.input_w = engine.get_binding_shape(binding)[-1]
                self.input_h = engine.get_binding_shape(binding)[-2]
                host_inputs.append(host_mem)
                cuda_inputs.append(cuda_mem)
            else:
                host_outputs.append(host_mem)
                cuda_outputs.append(cuda_mem)

        # Store
        self.stream = stream
        self.context = context
        self.engine = engine
        self.host_inputs = host_inputs
        self.cuda_inputs = cuda_inputs
        self.host_outputs = host_outputs
        self.cuda_outputs = cuda_outputs
        self.bindings = bindings
        self.det_output_length = host_outputs[0].shape[0]

    def infer(self, raw_image_generator,depth_img=None,depth_data=None):
        threading.Thread.__init__(self)
        # Make self the active context, pushing it on top of the context stack.
        self.ctx.push()
        # Restore
        stream = self.stream
        context = self.context
        host_inputs = self.host_inputs
        cuda_inputs = self.cuda_inputs
        host_outputs = self.host_outputs
        cuda_outputs = self.cuda_outputs
        bindings = self.bindings
        # Do image preprocess
        batch_image_raw = []
        batch_origin_h = []
        batch_origin_w = []
        batch_input_image = np.empty(shape=[self.batch_size, 3, self.input_h, self.input_w])
        for i, image_raw in enumerate(raw_image_generator):
            input_image, image_raw, origin_h, origin_w = self.preprocess_image(image_raw)
            batch_image_raw.append(image_raw)
            batch_origin_h.append(origin_h)
            batch_origin_w.append(origin_w)
            np.copyto(batch_input_image[i], input_image)
        batch_input_image = np.ascontiguousarray(batch_input_image)

        # Copy input image to host buffer
        np.copyto(host_inputs[0], batch_input_image.ravel())
        start = time.time()
        # Transfer input data  to the GPU.
        cuda.memcpy_htod_async(cuda_inputs[0], host_inputs[0], stream)
        # Run inference.
        context.execute_async_v2(bindings=bindings, stream_handle=stream.handle)
        # Transfer predictions back from the GPU.
        cuda.memcpy_dtoh_async(host_outputs[0], cuda_outputs[0], stream)
        # Synchronize the stream
        stream.synchronize()
        end = time.time()
        # Remove any context from the top of the context stack, deactivating it.
        self.ctx.pop()
        # Here we use the first row of output in that batch_size = 1
        output = host_outputs[0]
        # Do postprocess
        for i in range(self.batch_size):
            result_boxes, result_scores, result_classid = self.post_process(
                output[i * self.det_output_length: (i + 1) * self.det_output_length], batch_origin_h[i],
                batch_origin_w[i]
            )
            detected_classes = {categories[int(cid)] for cid in result_classid}
            if "cup" in detected_classes and "mouse" in detected_classes:
                cup_pos = []
                mouse_pos = []
                # Draw rectangles and labels on the original image
                for j in range(len(result_boxes)):
                    box = result_boxes[j]
                    if categories[int(result_classid[j])] == "cup" or categories[int(result_classid[j])] == "mouse":
                        if categories[int(result_classid[j])] == "cup":
                            cup_pos = plot_one_box(
                                box,
                                batch_image_raw[i],
                                distance_list = cup_pos,
                                depth_img=depth_img,
                                depth_data=depth_data,
                                label="{}:{:.2f}".format(
                                    categories[int(result_classid[j])], result_scores[j],
                                ),
                            )
                        else:
                            mouse_pos = plot_one_box(
                                box,
                                batch_image_raw[i],
                                distance_list = mouse_pos,
                                depth_img=depth_img,
                                depth_data=depth_data,
                                label="{}:{:.2f}".format(
                                    categories[int(result_classid[j])], result_scores[j],
                                ),
                            )

                # If both person and cup are detected, calculate the distance
                if len(mouse_pos) > 0 and len(cup_pos) > 0 and (len(mouse_pos)==len(cup_pos)):
                    dis_cluster = []
                    for x in range(len(mouse_pos)):
                        # for y in range(len(cup_pos)):
                        pr = np.sqrt(
                            (abs(mouse_pos[x][0]) - abs(cup_pos[0][0])) ** 2 +
                            (abs(mouse_pos[x][1]) - abs(cup_pos[0][1])) ** 2 +
                            (abs(mouse_pos[x][2]) - abs(cup_pos[0][2])) ** 2
                        )
                        dis_cluster.append(pr)
                    pr = np.mean(dis_cluster)
                    print(f"Distance between cup and mouse: {pr*1000:.3f} mm")

                    cv2.putText(
                        depth_img,
                        f"Distance: {pr*1000:.3f} mm",
                        (100, 120),
                        cv2.FONT_HERSHEY_SIMPLEX,
                        5,
                        (0, 255, 0),
                        8,
                        cv2.LINE_AA,
                    )
        # print("infer time:", end - start)
    
        return batch_image_raw,depth_img,end - start

    def destroy(self):
        # Remove any context from the top of the context stack, qqqqdeactivating it.
        self.ctx.pop()

    def get_raw_image(self, image_path_batch):
        """
        description: Read an image from image path
        """
        for img_path in image_path_batch:
            yield cv2.imread(img_path)

    def get_raw_image_zeros(self, image_path_batch=None):
        """
        description: Ready data for warmup
        """
        for _ in range(self.batch_size):
            yield np.zeros([self.input_h, self.input_w, 3], dtype=np.uint8)

    def preprocess_image(self, raw_bgr_image):
        """
        description: Convert BGR image to RGB,
                     resize and pad it to target size, normalize to [0,1],
                     transform to NCHW format.
        param:
            input_image_path: str, image path
        return:
            image:  the processed image
            image_raw: the original image
            h: original height
            w: original width
        """
        image_raw = raw_bgr_image
        h, w, c = image_raw.shape
        image = cv2.cvtColor(image_raw, cv2.COLOR_BGR2RGB)
        # Calculate widht and height and paddings
        r_w = self.input_w / w
        r_h = self.input_h / h
        if r_h > r_w:
            tw = self.input_w
            th = int(r_w * h)
            tx1 = tx2 = 0
            ty1 = int((self.input_h - th) / 2)
            ty2 = self.input_h - th - ty1
        else:
            tw = int(r_h * w)
            th = self.input_h
            tx1 = int((self.input_w - tw) / 2)
            tx2 = self.input_w - tw - tx1
            ty1 = ty2 = 0
        # Resize the image with long side while maintaining ratio
        image = cv2.resize(image, (tw, th))
        # Pad the short side with (128,128,128)
        image = cv2.copyMakeBorder(
            image, ty1, ty2, tx1, tx2, cv2.BORDER_CONSTANT, None, (128, 128, 128)
        )
        image = image.astype(np.float32)
        # Normalize to [0,1]
        image /= 255.0
        # HWC to CHW format:
        image = np.transpose(image, [2, 0, 1])
        # CHW to NCHW format
        image = np.expand_dims(image, axis=0)
        # Convert the image to row-major order, also known as "C order":
        image = np.ascontiguousarray(image)
        return image, image_raw, h, w

    def xywh2xyxy(self, origin_h, origin_w, x):
        """
        description:    Convert nx4 boxes from [x, y, w, h] to [x1, y1, x2, y2] where xy1=top-left, xy2=bottom-right
        param:
            origin_h:   height of original image
            origin_w:   width of original image
            x:          A boxes numpy, each row is a box [center_x, center_y, w, h]
        return:
            y:          A boxes numpy, each row is a box [x1, y1, x2, y2]
        """
        y = np.zeros_like(x)
        r_w = self.input_w / origin_w
        r_h = self.input_h / origin_h
        if r_h > r_w:
            y[:, 0] = x[:, 0]
            y[:, 2] = x[:, 2]
            y[:, 1] = x[:, 1] - (self.input_h - r_w * origin_h) / 2
            y[:, 3] = x[:, 3] - (self.input_h - r_w * origin_h) / 2
            y /= r_w
        else:
            y[:, 0] = x[:, 0] - (self.input_w - r_h * origin_w) / 2
            y[:, 2] = x[:, 2] - (self.input_w - r_h * origin_w) / 2
            y[:, 1] = x[:, 1]
            y[:, 3] = x[:, 3]
            y /= r_h

        return y

    def post_process(self, output, origin_h, origin_w):
        """
        description: postprocess the prediction
        param:
            output:     A numpy likes [num_boxes,cx,cy,w,h,conf,cls_id, cx,cy,w,h,conf,cls_id, ...]
            origin_h:   height of original image
            origin_w:   width of original image
        return:
            result_boxes: finally boxes, a boxes numpy, each row is a box [x1, y1, x2, y2]
            result_scores: finally scores, a numpy, each element is the score correspoing to box
            result_classid: finally classid, a numpy, each element is the classid correspoing to box
        """
        num_values_per_detection = DET_NUM + SEG_NUM + POSE_NUM + OBB_NUM
        # Get the num of boxes detected
        num = int(output[0])
        # Reshape to a two dimentional ndarray
        # pred = np.reshape(output[1:], (-1, 38))[:num, :]
        pred = np.reshape(output[1:], (-1, num_values_per_detection))[:num, :]
        # Do nms
        boxes = self.non_max_suppression(pred, origin_h, origin_w, conf_thres=CONF_THRESH, nms_thres=IOU_THRESHOLD)
        result_boxes = boxes[:, :4] if len(boxes) else np.array([])
        result_scores = boxes[:, 4] if len(boxes) else np.array([])
        result_classid = boxes[:, 5] if len(boxes) else np.array([])
        return result_boxes, result_scores, result_classid

    def bbox_iou(self, box1, box2, x1y1x2y2=True):
        """
        description: compute the IoU of two bounding boxes
        param:
            box1: A box coordinate (can be (x1, y1, x2, y2) or (x, y, w, h))
            box2: A box coordinate (can be (x1, y1, x2, y2) or (x, y, w, h))
            x1y1x2y2: select the coordinate format
        return:
            iou: computed iou
        """
        if not x1y1x2y2:
            # Transform from center and width to exact coordinates
            b1_x1, b1_x2 = box1[:, 0] - box1[:, 2] / 2, box1[:, 0] + box1[:, 2] / 2
            b1_y1, b1_y2 = box1[:, 1] - box1[:, 3] / 2, box1[:, 1] + box1[:, 3] / 2
            b2_x1, b2_x2 = box2[:, 0] - box2[:, 2] / 2, box2[:, 0] + box2[:, 2] / 2
            b2_y1, b2_y2 = box2[:, 1] - box2[:, 3] / 2, box2[:, 1] + box2[:, 3] / 2
        else:
            # Get the coordinates of bounding boxes
            b1_x1, b1_y1, b1_x2, b1_y2 = box1[:, 0], box1[:, 1], box1[:, 2], box1[:, 3]
            b2_x1, b2_y1, b2_x2, b2_y2 = box2[:, 0], box2[:, 1], box2[:, 2], box2[:, 3]

        # Get the coordinates of the intersection rectangle
        inter_rect_x1 = np.maximum(b1_x1, b2_x1)
        inter_rect_y1 = np.maximum(b1_y1, b2_y1)
        inter_rect_x2 = np.minimum(b1_x2, b2_x2)
        inter_rect_y2 = np.minimum(b1_y2, b2_y2)
        # Intersection area
        inter_area = (np.clip(inter_rect_x2 - inter_rect_x1 + 1, 0, None)
                      * np.clip(inter_rect_y2 - inter_rect_y1 + 1, 0, None))
        # Union Area
        b1_area = (b1_x2 - b1_x1 + 1) * (b1_y2 - b1_y1 + 1)
        b2_area = (b2_x2 - b2_x1 + 1) * (b2_y2 - b2_y1 + 1)

        iou = inter_area / (b1_area + b2_area - inter_area + 1e-16)

        return iou

    def non_max_suppression(self, prediction, origin_h, origin_w, conf_thres=0.5, nms_thres=0.4):
        """
        description: Removes detections with lower object confidence score than 'conf_thres' and performs
        Non-Maximum Suppression to further filter detections.
        param:
            prediction: detections, (x1, y1, x2, y2, conf, cls_id)
            origin_h: original image height
            origin_w: original image width
            conf_thres: a confidence threshold to filter detections
            nms_thres: a iou threshold to filter detections
        return:
            boxes: output after nms with the shape (x1, y1, x2, y2, conf, cls_id)
        """
        # Get the boxes that score > CONF_THRESH
        boxes = prediction[prediction[:, 4] >= conf_thres]
        # Trandform bbox from [center_x, center_y, w, h] to [x1, y1, x2, y2]
        boxes[:, :4] = self.xywh2xyxy(origin_h, origin_w, boxes[:, :4])
        # clip the coordinates
        boxes[:, 0] = np.clip(boxes[:, 0], 0, origin_w - 1)
        boxes[:, 2] = np.clip(boxes[:, 2], 0, origin_w - 1)
        boxes[:, 1] = np.clip(boxes[:, 1], 0, origin_h - 1)
        boxes[:, 3] = np.clip(boxes[:, 3], 0, origin_h - 1)
        # Object confidence
        confs = boxes[:, 4]
        # Sort by the confs
        boxes = boxes[np.argsort(-confs)]
        # Perform non-maximum suppression
        keep_boxes = []
        while boxes.shape[0]:
            large_overlap = self.bbox_iou(np.expand_dims(boxes[0, :4], 0), boxes[:, :4]) > nms_thres
            label_match = boxes[0, -1] == boxes[:, -1]
            # Indices of boxes with lower confidence scores, large IOUs and matching labels
            invalid = large_overlap & label_match
            keep_boxes += [boxes[0]]
            boxes = boxes[~invalid]
        boxes = np.stack(keep_boxes, 0) if len(keep_boxes) else np.array([])
        return boxes


class inferThread(threading.Thread):
    def __init__(self, yolo11_wrapper, image_path_batch):
        threading.Thread.__init__(self)
        self.yolo11_wrapper = yolo11_wrapper
        self.image_path_batch = image_path_batch

    def run(self):
        batch_image_raw, use_time = self.yolo11_wrapper.infer(self.yolo11_wrapper.get_raw_image(self.image_path_batch))
        for i, img_path in enumerate(self.image_path_batch):
            parent, filename = os.path.split(img_path)
            save_name = os.path.join('output', filename)
            # Save image
            cv2.imwrite(save_name, batch_image_raw[i])
        print('input->{}, time->{:.2f}ms, saving into output/'.format(self.image_path_batch, use_time * 1000))


class warmUpThread(threading.Thread):
    def __init__(self, yolo11_wrapper):
        threading.Thread.__init__(self)
        self.yolo11_wrapper = yolo11_wrapper

    def run(self):
        batch_image_raw, use_time = self.yolo11_wrapper.infer(self.yolo11_wrapper.get_raw_image_zeros())
        print('warm_up->{}, time->{:.2f}ms'.format(batch_image_raw[0].shape, use_time * 1000))


def simple_frame_to_bgr(frame):
    width = frame.get_width()
    height = frame.get_height()
    data = np.frombuffer(frame.get_data(), dtype=np.uint8)
    if data.size != width * height * 3:
        return None
    image = data.reshape((height, width, 3))
    return cv2.cvtColor(image, cv2.COLOR_RGB2BGR)


if __name__ == "__main__":
    # load custom plugin and engine
    PLUGIN_LIBRARY = "build/libmyplugins.so"
    engine_file_path = "./build/yolo11n.engine"

    if len(sys.argv) > 1:
        engine_file_path = sys.argv[1]
    if len(sys.argv) > 2:
        PLUGIN_LIBRARY = sys.argv[2]

    ctypes.CDLL(PLUGIN_LIBRARY)

    categories = ["person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat",
                  "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
                  "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
                  "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
                  "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
                  "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
                  "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard", "cell phone",
                  "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
                  "hair drier", "toothbrush"]

    yolo11_wrapper = YoLo11TRT(engine_file_path)


    # Create Config and Pipeline objects
    config = Config()
    pipeline = Pipeline()

    # Get color stream profile
    color_profile_list = pipeline.get_stream_profile_list(OBSensorType.COLOR_SENSOR)
    color_profile = None
    for i in range(len(color_profile_list)):
        cp = color_profile_list[i]
        if cp.get_format() == OBFormat.RGB:
            color_profile = cp
            break
    if color_profile is None:
        print("RGB format color stream profile not found")
        sys.exit(-1)

    # Get D2C-aligned depth profile
    hw_d2c_profile_list = pipeline.get_d2c_depth_profile_list(color_profile, OBAlignMode.HW_MODE)
    if len(hw_d2c_profile_list) == 0:
        print("D2C-aligned depth stream profile not found")
        sys.exit(-1)
    hw_d2c_profile = hw_d2c_profile_list[0]
    print("hw_d2c_profile:", hw_d2c_profile)

    # Enable D2C-aligned depth and color streams
    config.enable_stream(hw_d2c_profile)
    config.enable_stream(color_profile)
    config.set_align_mode(OBAlignMode.HW_MODE)

    # Enable frame sync (optional, recommended)
    pipeline.enable_frame_sync()
    # Start pipeline
    pipeline.start(config)

    prev_time = time.time()
    frame_count = 0
    fps = 0

    total_frames = 0
    total_time = 0 
    try:
        while True:
            frames = pipeline.wait_for_frames(100)
            if frames is None:
                continue
            color_frame = frames.get_color_frame()
            if color_frame is None:
                continue
            depth_frame = frames.get_depth_frame()
            if color_frame is None or depth_frame is None:
                continue
           
            color_image = simple_frame_to_bgr(color_frame)
   

            start_time = time.time()  # Record the start time of each frame
            
            # Convert depth frame to numpy array
            height = depth_frame.get_height()
            width = depth_frame.get_width()
            depth_data = np.frombuffer(depth_frame.get_data(), dtype=np.uint16).reshape((height, width))
            depth_data = cv2.GaussianBlur(depth_data, (5, 5), 0)
           
            min_depth = 150
            max_depth = 2000

            # 1. First, clip the depth to the specified range
            depth_clipped = np.clip(depth_data, min_depth, max_depth)

            # 2. Invert the depth: near → large, far → small
            depth_inverted = max_depth - depth_clipped  # The closer, the larger the value

            # 3. Normalize to 0 ~ 255
            depth_normalized = cv2.normalize(depth_inverted, None, 0, 255, cv2.NORM_MINMAX)
            depth_normalized = depth_normalized.astype(np.uint8) - 30

            # 4. Apply a smooth and natural colormap (recommended: INFERNO or MAGMA)
            depth_vis = cv2.applyColorMap(depth_normalized, cv2.COLORMAP_MAGMA)


            # Adjust the depth image size to match the color image
            if color_image.shape[:2] != depth_vis.shape[:2]:
                color_image = cv2.resize(color_image, (depth_vis.shape[1], depth_vis.shape[0]), interpolation=cv2.INTER_NEAREST)

            # Inference requires a batch, construct the batch
            batch_imgs = [color_image] * yolo11_wrapper.batch_size
            batch_image_raw, depth_img,use_time = yolo11_wrapper.infer(batch_imgs,depth_vis,depth_data)

            # Only display the first image (only one frame from camera/video stream)
            show_img = batch_image_raw[0]

            # FPS calculation
            frame_count += 1
            curr_time = time.time()
            if curr_time - prev_time >= 1.0:
                fps = frame_count / (curr_time - prev_time)
                prev_time = curr_time
                frame_count = 0
            
            # Horizontal concatenation
            concat_image = cv2.hconcat([show_img, depth_img])
            # Display FPS
            cv2.putText(concat_image, f"FPS: {fps:.2f}", (30, 80), cv2.FONT_HERSHEY_SIMPLEX, 3, (0, 255, 255), 5)
            scale = 0.3
            concat_image = cv2.resize(concat_image, (0, 0), fx=scale, fy=scale, interpolation=cv2.INTER_LINEAR)
            cv2.imshow("Output", concat_image)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

            # Count total frames and total time
            total_frames += 1
            total_time += (time.time() - start_time)  # Count the total process time

    finally:
        # cap.release()
        cv2.destroyAllWindows()
        yolo11_wrapper.destroy()
        if total_time > 0:
            avg_fps = total_frames / total_time
            print(f"Average FPS: {avg_fps:.2f}")

```

</details>

<div style={{ textAlign: "justify" }}>
脚本将实时显示检测结果以及两个指定对象（例如杯子和鼠标）之间的测量距离。窗口左侧显示带有检测框的RGB图像。右侧显示深度图和距离。在视频中，您可以看到测量误差通常在一厘米以内：
</div>

<div class="video-container">
<iframe width="960" height="371" src="https://www.youtube.com/embed/r_zLhj-waj0" title="Measure distance with depth camera" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
<div style={{ textAlign: "justify" }}>
由于Orbbec Gemini 2基于结构光/双视图方案，在边缘、倾斜表面和反射物体上，深度数据容易波动，通常有几厘米的误差。当您从不同角度拍摄同一物体时，红外投影的纹理变形会导致匹配失败，最终导致更大的深度偏差。同时，环境光的强度也会影响深度图的质量。根据您的环境，我们提供以下调整建议：
</div>

- 过滤异常深度图并对深度图进行降噪滤波。
  
- 尽量将目标定位在图像中心，以减少图像边缘畸变的影响。

- 执行多个深度图像的平均操作，以减少异常光线的影响（这会降低实时性能）。

:::

## 资源

- [YOLOv11 TensorRT 实现 (tensorrtx)](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)
- [Orbbec pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [Ultralytics YOLOv11](https://github.com/ultralytics/ultralytics)

## 技术支持与产品讨论

感谢您选择Seeed Studio产品！如需技术支持和产品讨论，请使用以下渠道：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
