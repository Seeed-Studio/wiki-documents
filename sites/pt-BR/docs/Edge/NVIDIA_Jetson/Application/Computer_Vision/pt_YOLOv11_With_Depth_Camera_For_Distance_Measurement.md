---
description: Este guia mostra como parear uma câmera de profundidade Orbbec Gemini 2 com um reComputer baseado em Jetson (JetPack 5.1.3) para realizar detecção de objetos em tempo real e medição de distância 3D. Ele orienta a instalação do Gemini 2 Python SDK, sua compilação com pybind11 e a validação da saída da câmera por meio de um script de teste em OpenCV. Em seguida, detalha a conversão de um modelo YOLOv11n em um mecanismo TensorRT para inferência em alta velocidade no Jetson, depois explica como obter os parâmetros intrínsecos da câmera e projetar pixels de profundidade em coordenadas 3D para que as distâncias euclidianas entre objetos detectados possam ser calculadas. Um script de exemplo combina detecções do YOLOv11 com dados de profundidade para exibir distâncias medidas (tipicamente precisas em ±1 cm), e o artigo termina com dicas — filtragem do mapa de profundidade, centralização dos alvos e média de quadros — para mitigar o ruído de profundidade de luz estruturada em bordas, superfícies inclinadas ou reflexivas e sob condições de iluminação desafiadoras.
title: YOLOv11 com Câmera de Profundidade no Jetson Orin para Medição de Distância
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
slug: /yolov11_with_depth_camera
sku: 101090144,100071398
last_update:
  date: 07/04/2025
  author: Zibo
createdAt: '2025-07-07'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/yolov11_with_depth_camera/
---

<div style={{ textAlign: "justify" }}>
Este wiki demonstra como usar a câmera de profundidade Orbbec Gemini 2 com o reComputer J4012 (com módulo NVIDIA® Jetson™ Orin™ NX 16GB), combinando detecção de objetos com YOLOv11 para medição de distância de alvos visuais.
</div>

## Pré-requisitos

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html) ou outros produtos da série reComputer (com JetPack 5.1.3 pré-instalado)
- Câmera de Profundidade Orbbec Gemini 2
- Cabo de transmissão de dados USB Type-C (conexão da câmera)

## Conexão de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/connection.jpg"/>
</div>

## Instalar o Gemini 2 Python SDK

**Passo 1.** Clone o SDK e instale as dependências:

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv camke g++ gcc
pip install pybind11
```

**Passo 2.** Instale os pacotes necessários para compilar o projeto:

```bash
cd pyorbbecsdk
pip install -r requirements.txt
```

**Passo 3.** Compile o projeto:

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

**Passo 4.** Instale o pacote wheel do Python:

```bash
cd /path/to/pyorbbecsdk
pip install wheel
python setup.py bdist_wheel
pip install dist/*.whl
```

**Passo 5.** (Opcional) Gere stubs para melhor suporte a IntelliSense na sua IDE:

```bash
source env.sh
pip install pybind11-stubgen
pybind11-stubgen pyorbbecsdk
```

:::info
Para mais detalhes, consulte [aqui](https://orbbec.github.io/pyorbbecsdk/source/2_installation/build_the_package.html#install-dependencies-ubuntu)
:::

## Testar a Câmera de Profundidade

Por meio do exemplo a seguir, mostraremos como usar a API Python da Câmera de Profundidade Orbbec Gemini 2 em combinação com OpenCV para desenvolvimento. Ao mesmo tempo, isso também pode testar se o ambiente de desenvolvimento da sua câmera está funcionando corretamente.

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
Se você vir uma janela com a imagem RGB à esquerda e a imagem de profundidade à direita, sua câmera está funcionando corretamente.
</div>

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/depth_camera.gif"/>
</div>

## Implantar YOLOv11 com TensorRT

<div style={{ textAlign: "justify" }}>
YOLOv11 oferece detecção de objetos em tempo real com alto desempenho. As etapas a seguir mostram como implantar o YOLOv11 usando TensorRT para inferência rápida em plataformas Jetson.
</div>

**Passo 1.** Clone o repositório do YOLOv11 TensorRT:

```bash
git clone https://github.com/wang-xinyu/tensorrtx.git
cd tensorrtx/yolo11
```

**Passo 2.** Baixe o modelo pré-treinado YOLOv11n:

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```

**Passo 3.** Gere o arquivo .wts:

```bash
python gen_wts.py -w yolo11n.pt -o yolo11n.wts -t detect
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/wts.png"/>
</div>

**Passo 4.** Compile o projeto:

```bash
mkdir build
cd build
cmake ..
make -j4
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/yolo_make_install.png"/>
</div>

**Passo 5.** Gere o mecanismo TensorRT:

```bash
./yolo11_det -s yolo11n.wts yolo11n.engine n
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/g_engine.png"/>
</div>

Se for bem-sucedido, você encontrará o arquivo `yolo11n.engine` no diretório build.

**Passo 6.** Instale pycuda para inferência via API Python:

```bash
pip install pycuda
```

:::info
A implantação do yolo11 neste repositório oferece suporte apenas ao TensorRT-8.x (para plataformas Jetson com Jetpack 6 ou superior, são necessárias modificações significativas no código!)
:::

## Cálculo de Distância

### Conhecimentos prévios

<div style={{ textAlign: "justify" }}>
O valor de profundidade da câmera representa a distância no eixo Z (para frente a partir da câmera), não a distância geométrica real.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/Yolo11/z.jpg"/>
</div>

Para calcular a verdadeira distância euclidiana 3D entre dois pontos, você precisa de:

- Coordenadas de pixel (u, v) do alvo

- Valor de profundidade d em (u, v)

- Parâmetros intrínsecos da câmera de profundidade: fx, fy, cx, cy

As coordenadas tridimensionais de um determinado ponto no sistema de coordenadas da câmera podem ser calculadas usando a seguinte fórmula:
</div>

```bash
Z = d
X = (u - cx) * Z / fx
Y = (v - cy) * Z / fy
```

A distância euclidiana `D` entre dois pontos ((X1,Y1,Z1) e (X2,Y2,Z2)) no espaço pode ser calculada usando a seguinte fórmula:

```
D = sqrt((X1-X2)^2 + (Y1-Y2)^2 + (Z1-Z2)^2)
```

**Exemplo para obter parâmetros da câmera:**

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

Obtenha os parâmetros intrínsecos da câmera de profundidade:

```
fx = 616.707275
fy = 616.707275
cx = 648.300171
cy = 404.478149
```

### Detecção de Objetos em Tempo Real e Medição de Distância

<div style={{ textAlign: "justify" }}>
O script a seguir demonstra como usar YOLOv11 com a câmera de profundidade Orbbec Gemini 2 para detectar objetos (por exemplo, um copo e um mouse) e medir em tempo real a distância 3D entre eles:
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
O script exibirá os resultados de detecção e a distância medida entre dois objetos especificados (por exemplo, xícara e mouse) em tempo real. O lado esquerdo da janela mostra a imagem RGB com caixas de detecção. O lado direito mostra o mapa de profundidade e a distância. No vídeo, você pode ver que o erro de medição geralmente é inferior a um centímetro:
</div>

<div class="video-container">
<iframe width="960" height="371" src="https://www.youtube.com/embed/r_zLhj-waj0" title="Measure distance with depth camera" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
<div style={{ textAlign: "justify" }}>
Como o Orbbec Gemini 2 é baseado no esquema de luz estruturada/visão dupla, em bordas, superfícies inclinadas e objetos reflexivos, os dados de profundidade tendem a flutuar, muitas vezes com erros de vários centímetros. Quando você tira fotos do mesmo objeto de diferentes ângulos, a deformação da textura da projeção infravermelha leva à falha de correspondência e, em última análise, resulta em um desvio de profundidade maior. Ao mesmo tempo, a intensidade da luz ambiente também afeta a qualidade do mapa de profundidade. De acordo com o seu ambiente, fornecemos as seguintes sugestões de ajuste:
</div>

- Filtrar mapas de profundidade anormais e realizar filtragem de redução de ruído nos mapas de profundidade.

- Tente posicionar o alvo no centro da imagem para reduzir a influência da distorção nas bordas da imagem.

- Realizar a operação de tirar a média de várias imagens de profundidade para reduzir a influência de luz anormal (o que reduzirá o desempenho em tempo real).

:::

## Recursos

- [YOLOv11 TensorRT Implementation (tensorrtx)](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)
- [Orbbec pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [Ultralytics YOLOv11](https://github.com/ultralytics/ultralytics)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher os produtos da Seeed Studio! Para suporte técnico e discussão de produtos, utilize os seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
