---
description: YOLOv8 do treinamento à implantação
title: Treinamento e implantação do modelo de estimação de pose YOLOv8
keywords:
  - YOLOv8
  - we2
  - detecção de pose
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ma_deploy_yolov8_pose
last_update:
  date: 04/02/2024
  author: Jack Mu
createdAt: '2024-04-07'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ma_deploy_yolov8_pose/
---

# Implantação do modelo de estimação de pose YOLOv8

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_pose.png" style={{width:600, height:'auto'}}/></div>

Este wiki apresentará como treinar o modelo oficial de estimação de atitude YOLOv8 e implantar o modelo treinado em dispositivos `Grove Vision AI(V2)` ou `XIAO ESP32S3`.

## Preparação do conjunto de dados

Para o conjunto de dados de estimação de pose, é recomendável consultar a [documentação oficial do YOLOv8](https://docs.ultralytics.com/datasets/pose/coco8-pose/).

## Instalar a ferramenta de linha de comando YOLOv8

- Por padrão, você já possui o ambiente `python` e a ferramenta de gerenciamento de pacotes `pip`, e python>=3.8.

```bash
# Clone the official repository
git clone https://github.com/ultralytics/ultralytics

# Go into the cloned folder
cd ultralytics

# Install in developer mode so that subsequent modifications can be synchronized
pip install -e .
```

O motivo pelo qual se recomenda a instalação usando Git é que algum código precisa ser modificado depois, portanto é necessário instalá-lo em modo de desenvolvedor.

- Você pode usar o comando de consulta de versão para testar se a ferramenta de linha de comando `yolo` foi instalada com sucesso.

```bash
# Version query
yolo -v
```

## Treinar

- Primeiro, vá para a pasta do conjunto de dados baixado

- Execute o comando a seguir para iniciar o treinamento do modelo

```bash
yolo train detect model=yolov8n-pose.pt data=./data_pose.yaml imgsz=192
```

## Exportar modelo para tflite

- Após o treinamento, o modelo estará na pasta `runs/train/exp*/weights/`. Certifique-se de que os indicadores de avaliação do seu modelo atendam às suas necessidades.

- Depois disso, você precisa modificar o código oficial para reduzir algum pós-processamento do modelo. Primeiro modifique as funções `forward` das classes `Detect` e `Pose` no arquivo `~/ultralytics/ultralytics/nn/modules/head.py`. Após a modificação, fica conforme mostrado a seguir

```python
# forward function of Detect class
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

# forward function of Pose class
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

- Para evitar erros anormais na linha de comando, você também pode modificar o código do método `export_saved_model` da classe `Exporter` no arquivo `~/ultralytics/ultralytics/engine/exporter.py` da seguinte forma

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

- Use o seguinte comando para exportar o modelo tflite

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- Em seguida, você verá uma pasta `yolov8n-pose_saved_model` na pasta atual, que contém o arquivo de modelo `yolov8n-pose_full_integer_quant.tflite`. Este arquivo de modelo pode ser implantado em dispositivos `Grove Vision AI(V2)` ou `XIAO ESP32S3`.

### Otimização do grafo do modelo

- Grove Vision AI (V2) oferece suporte a modelos otimizados com vela e também pode acelerar a inferência do modelo. Primeiro, execute o seguinte comando para instalar a ferramenta de linha de comando vela (o dispositivo `XIAO ESP32S3` ainda não é compatível).

```bash

pip3 install ethos-u-vela
```

- Depois disso, você precisa [baixar](https://files.seeedstudio.com/sscma/configs/vela_config.ini) o arquivo de configuração relacionado ao `vela`, ou copiar o conteúdo a seguir para um arquivo, que pode ser nomeado `vela_config.ini`

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

- Por fim, use o seguinte comando para otimizar o grafo

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

## Implantação

- O arquivo de modelo que precisa ser implantado é o arquivo `tflite` exportado acima. Você pode gravar o arquivo de modelo no dispositivo de destino de acordo com o tutorial a seguir.

- Recomendamos fortemente usar nossa ferramenta web para gravar o modelo `tflite` treinado no dispositivo. Operações detalhadas são fornecidas no [Tutorial de Implantação](https://wiki.seeedstudio.com/pt-br/ModelAssistant_Deploy_Overview/)

`Note:` Como o dispositivo `ESP32S3` não suporta a implantação de modelos após a otimização do grafo pelo `vela`, você não precisa realizar a otimização do grafo do modelo `tflite` se quiser implantar o modelo no dispositivo `XIAO ESP32S3`.
