---
description: YOLOv8 from training to deployment
title: deploy YOLOv8
keywords:
- YOLOv8
- we2 
- pose detection
image: <https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png>
slug: /CN/TinyML/ModelAssistant/Deploy/Deploy_YOLOv8_Pose
last_update:
  date: 04/02/2024
  author: 大庆
---
# YOLOv8姿态估计模型部署

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_pose.png" style={{width:600, height:'auto'}}/></div>

此wiki将介绍如何训练官方的YOLOv8姿态估计模型及将训练好的模型部署到`Grove Vision AI(V2)`或`XIAO ESP32S3`设备上。

## 数据集准备

姿态估计的数据集建议查看[YOLOv8官方文档](https://docs.ultralytics.com/datasets/pose/coco8-pose/)。

## 安装YOLOv8命令行工具

- 在此默认你已经有了`python`的环境与`pip`包管理工具，且python>=3.8。

```bash
# 克隆官方仓库
git clone https://github.com/ultralytics/ultralytics

# 进入到克隆下来的文件夹内
cd ultralytics

# 以开发者模式进行安装，以便后续的修改能够同步
pip install -e .
```

这里建议使用`Git`安装的原因是后面需要修改部分代码，所以需要以开发者模型安装

- 可使用版本查询命令测试是否成功安装`yolo`命令行工具

```bash
# 训练测试
yolo -v
```

## 训练

- 首先切入到所下载的数据集文件夹下

- 执行以下命令开始训练模型

```bash
yolo train detect model=yolov8n-pose.pt data=./data_pose.yaml imgsz=192
```

## 导出模型至tflite

- 训练完成后的模型会再`runs/train/exp*/weights/`文件夹下，确认你的模型的评估指标达到你的需求

- 之后需要修改官方代码，减少模型的部分后处理，首先修改`~/ultralytics/ultralytics/nn/modules/head.py`文件下`Detect`和`Pose`类的`forward`函数，修改后如下所示

```python
# Detect 类的forward函数
    def forward(self, x):
        """Concatenates and returns predicted bounding boxes and class probabilities."""
        shape = x[0].shape  # BCHW

        if self.export:
            return [
                torch.permute(j, (0, 2, 3, 1)).reshape(j.shape[0], -1, x.shape[1])
                for j in [self.cv2[i](x[i]) for i in range(self.nl)]
                + [self.cv3[i](x[i]) for i in range(self.nl)]
            ]
        else:
            for i in range(self.nl):
                x[i] = torch.cat((self.cv2[i](x[i]), self.cv3[i](x[i])), 1)
        if self.training:
            return x
        elif self.dynamic or self.shape != shape:
            self.anchors, self.strides = (
                x.transpose(0, 1) for x in make_anchors(x, self.stride, 0.5)
            )
            self.shape = shape

        x_cat = torch.cat([xi.view(shape[0], self.no, -1) for xi in x], 2)
        if self.export and self.format in (
            "saved_model",
            "pb",
            "tflite",
            "edgetpu",
            "tfjs",
        ):  # avoid TF FlexSplitV ops
            box = x_cat[:, : self.reg_max * 4]
            cls = x_cat[:, self.reg_max * 4 :]
        else:
            box, cls = x_cat.split((self.reg_max * 4, self.nc), 1)
        dbox = (
            dist2bbox(self.dfl(box), self.anchors.unsqueeze(0), xywh=True, dim=1)
            * self.strides
        )

        if self.export and self.format in ("tflite", "edgetpu"):
            # Normalize xywh with image size to mitigate quantization error of TFLite integer models as done in YOLOv5:
            # https://github.com/ultralytics/yolov5/blob/0c8de3fca4a702f8ff5c435e67f378d1fce70243/models/tf.py#L307-L309
            # See this PR for details: https://github.com/ultralytics/ultralytics/pull/1695
            img_h = shape[2] * self.stride[0]
            img_w = shape[3] * self.stride[0]
            img_size = torch.tensor(
                [img_w, img_h, img_w, img_h], device=dbox.device
            ).reshape(1, 4, 1)
            dbox /= img_size

        y = torch.cat((dbox, cls.sigmoid()), 1)
        return y if self.export else (y, x)

# Pose类的forward函数
    def forward(self, x):
        """Perform forward pass through YOLO model and return predictions."""
        bs = x[0].shape[0]  # batch size
        kpt = torch.cat([self.cv4[i](x[i]).view(bs, self.nk, -1) for i in range(self.nl)], -1)  # (bs, 17*3, h*w)
        x = self.detect(self, x)
        if self.training:
            return x, kpt
        if self.export:
            return x, torch.permute(kpt, (0, 2, 1))
        pred_kpt = self.kpts_decode(bs, kpt)
        return torch.cat([x, pred_kpt], 1) if self.export else (torch.cat([x[0], pred_kpt], 1), (x[1], kpt))
```

- 为了命令行不发生异常错误，还可修改`~/ultralytics/ultralytics/engine/exporter.py`文件下`Exporter`类的`export_saved_model`方法代码如下，

```python
    @try_export
    def export_saved_model(self, prefix=colorstr('TensorFlow SavedModel:')):
        """YOLOv8 TensorFlow SavedModel export."""
        cuda = torch.cuda.is_available()
        try:
            import tensorflow as tf  # noqa
        except ImportError:
            check_requirements(f"tensorflow{'-macos' if MACOS else '-aarch64' if ARM64 else '' if cuda else '-cpu'}")
            import tensorflow as tf  # noqa
        check_requirements(
            ('onnx', 'onnx2tf>=1.15.4,<=1.17.5', 'sng4onnx>=1.0.1', 'onnxsim>=0.4.33', 'onnx_graphsurgeon>=0.3.26',
             'tflite_support', 'onnxruntime-gpu' if cuda else 'onnxruntime'),
            cmds='--extra-index-url https://pypi.ngc.nvidia.com')  # onnx_graphsurgeon only on NVIDIA

        LOGGER.info(f'\n{prefix} starting export with tensorflow {tf.__version__}...')
        check_version(tf.__version__,
                      '<=2.13.1',
                      name='tensorflow',
                      verbose=True,
                      msg='https://github.com/ultralytics/ultralytics/issues/5161')
        f = Path(str(self.file).replace(self.file.suffix, '_saved_model'))
        if f.is_dir():
            import shutil
            shutil.rmtree(f)  # delete output folder

        # Pre-download calibration file to fix https://github.com/PINTO0309/onnx2tf/issues/545
        onnx2tf_file = Path('calibration_image_sample_data_20x128x128x3_float32.npy')
        if not onnx2tf_file.exists():
            attempt_download_asset(f'{onnx2tf_file}.zip', unzip=True, delete=True)

        # Export to ONNX
        self.args.simplify = True
        f_onnx, _ = self.export_onnx()

        # Export to TF
        tmp_file = f / 'tmp_tflite_int8_calibration_images.npy'  # int8 calibration images file
        if self.args.int8:
            verbosity = '--verbosity info'
            if self.args.data:
                # Generate calibration data for integer quantization
                LOGGER.info(f"{prefix} collecting INT8 calibration images from 'data={self.args.data}'")
                data = check_det_dataset(self.args.data)
                dataset = YOLODataset(data['val'], data=data, imgsz=self.imgsz[0], augment=False)
                images = []
                for i, batch in enumerate(dataset):
                    if i >= 100:  # maximum number of calibration images
                        break
                    im = batch['img'].permute(1, 2, 0)[None]  # list to nparray, CHW to BHWC
                    images.append(im)
                f.mkdir()
                images = torch.cat(images, 0).float()
                # mean = images.view(-1, 3).mean(0)  # imagenet mean [123.675, 116.28, 103.53]
                # std = images.view(-1, 3).std(0)  # imagenet std [58.395, 57.12, 57.375]
                np.save(str(tmp_file), images.numpy())  # BHWC
                int8 = f'-oiqt -qt per-tensor -cind images "{tmp_file}" "[[[[0, 0, 0]]]]" "[[[[255, 255, 255]]]]"'
            else:
                int8 = '-oiqt -qt per-tensor'
        else:
            verbosity = '--non_verbose'
            int8 = ''

        cmd = f'onnx2tf -i "{f_onnx}" -o "{f}" -nuo {verbosity} {int8}'.strip()
        LOGGER.info(f"{prefix} running '{cmd}'")
        subprocess.run(cmd, shell=True)
        yaml_save(f / 'metadata.yaml', self.metadata)  # add metadata.yaml

        # Remove/rename TFLite models
        if self.args.int8:
            tmp_file.unlink(missing_ok=True)
            for file in f.rglob('*_dynamic_range_quant.tflite'):
                file.rename(file.with_name(file.stem.replace('_dynamic_range_quant', '_int8') + file.suffix))
            for file in f.rglob('*_integer_quant_with_int16_act.tflite'):
                file.unlink()  # delete extra fp16 activation TFLite files

        # Add TFLite metadata
        # for file in f.rglob('*.tflite'):
            # f.unlink() if 'quant_with_int16_act.tflite' in str(f) else self._add_tflite_metadata(file)

        return str(f), tf.saved_model.load(f, tags=None, options=None)  # load saved_model as Keras model
```

- 使用以下命令可导出tflite模型

```bash
yolo export model=${你的模型路径}  format=tflite imgsz=192 int8
```

- 之后会再所在文件夹下看到一个`yolov8n-pose_saved_model`的文件夹，里面含有`yolov8n-pose_full_integer_quant.tflite`模型文件，可将此模型文件部署到`Grove Vision AI(V2)`或`XIAO ESP32S3`设备上。

### 模型图优化

- `Grove Vision AI(V2)`支持使用`vela`优化后的模型，同时也能加速模型的推理，首先执行以下命令安装vela命令行工具(`XIAO ESP32S3`设备暂不支持)

```bash

pip3 install ethos-u-vela
```

- 之后需要[下载](https://files.seeedstudio.com/sscma/configs/vela_config.ini)`vela`相关的配置文件,或者复制下列的内容到一个文件内，可命名为`vela_config.ini`

```bash
; file: my_vela_cfg.ini ; ----------------------------------------------------------------------------- 
; Vela configuration file ; ----------------------------------------------------------------------------- 
; System Configuration 

; My_Sys_Cfg 
[System_Config.My_Sys_Cfg] 
core_clock=400e6 
axi0_port=Sram 
axi1_port=OffChipFlash 
Sram_clock_scale=1.0 
Sram_burst_length=32 
Sram_read_latency=16 
Sram_write_latency=16 
Dram_clock_scale=0.75 
Dram_burst_length=128 
Dram_read_latency=500 
Dram_write_latency=250 
OnChipFlash_clock_scale=0.25 
OffChipFlash_clock_scale=0.015625 
OffChipFlash_burst_length=32 
OffChipFlash_read_latency=64 
OffChipFlash_write_latency=64 
; ----------------------------------------------------------------------------- 
; Memory Mode 
; My_Mem_Mode_Parent 
[Memory_Mode.My_Mem_Mode_Parent] 
const_mem_area=Axi1 
arena_mem_area=Axi0 
cache_mem_area=Axi0
```

- 最后使用以下命令，进行图优化

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${优化后的模型保存路径} \
    ${需要被优化的tflite模型路径}
```

## 部署

- 需要部署的模型文件是以上导出的`tflite`文件，可根据以下教程将模型文件烧录至目标设备

- 我们强烈建议使用我们的网页工具将训练好的tflite模型烧录到设备中，其详细操作我们提供的[部署教程](https://wiki.seeedstudio.com/ModelAssistant_Deploy_Overview/)进行

`注意:`由于`ESP32S3`设备不支持经过`vela`图优化后的模型部署，因此如果你想将模型部署到`XIAO ESP32S3`设备上不需要进行`tflite`模型图优化。
