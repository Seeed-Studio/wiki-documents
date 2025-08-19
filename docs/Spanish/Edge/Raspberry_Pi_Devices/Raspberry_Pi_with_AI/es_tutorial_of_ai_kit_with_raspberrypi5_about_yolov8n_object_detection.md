---
description: Esta wiki demuestra cómo usar yolov8n para la detección de objetos con AI kit en Raspberry Pi 5, desde el entrenamiento hasta el despliegue.
title: Tutorial del AI Kit con Raspberry Pi 5 sobre detección de objetos YOLOv8n
keywords:
  - Edge
  - rpi5
  - AI kit
  - YOLO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection
last_update:
  date: 02/18/2025
  author: Erick González

no_comments: false # para Disqus
---

# Tutorial del AI Kit con Raspberry Pi 5 sobre detección de objetos YOLOv8n
## Introducción

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versión 8) es la serie de modelos más popular de estimación de pose y detección de objetos en tiempo real. Se basa en las fortalezas de sus predecesores al introducir varios avances en velocidad, precisión y flexibilidad. El [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) se utiliza para acelerar la velocidad de inferencia, con un acelerador de red neuronal de 13 tera-operaciones por segundo (TOPS) basado en el chip Hailo-8L.

Esta wiki te guiará sobre cómo usar YOLOv8n para la detección de objetos con AI Kit en Raspberry Pi 5, desde el entrenamiento hasta el despliegue.

## Preparar el hardware

### Para Hailo8L 13 TOPS
<div class="table-center">
	<table align="center">
	<tr>
		<th>Raspberry Pi5 8GB</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Para Hailo8 26 TOPS

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Instalar hardware

Por favor, consulta [esto](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

## En la computadora anfitriona

:::note
Instalaremos el software de Hailo, asegúrate de tener una cuenta de Hailo.
:::

### Instalar Ultralytics y entrenar el modelo:

Instala python3.11
```
sudo apt install python3.11
```

Crea un entorno virtual llamado yolo_env

```
python3.11 -m venv yolo_env
```

Activa el entorno

```
source yolo_env/bin/activate
```

Instala ultralytics

```
pip install ultralytics
```

Entrena YOLOv8n usando el conjunto de datos COCO. Si deseas entrenar tu propio conjunto de datos, puedes consultar [esto](https://docs.ultralytics.com) para instrucciones sobre cómo hacerlo.

```
mkdir yolomodel && cd yolomodel
yolo detect train data=coco128.yaml model=yolov8n.pt name=retrain_yolov8n epochs=100 batch=16
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train.png" alt="pir" width={1000} height="auto"/></p>

Obtendrás el modelo `best.pt` después de tu entrenamiento, como se muestra a continuación:

```
cd ./runs/detect/retrain_yolov8n/weights/
ls
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train_result.png" alt="pir" width={1000} height="auto"/></p>

Convierte el modelo `.pt` a `.onnx`.

```
yolo export model=./best.pt imgsz=640 format=onnx opset=11 
```
El resultado es como sigue:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/convert_onnx.png" alt="pir" width={1000} height="auto"/></p>

### Instalar el software de Hailo:

Instala python 3.8

```
cd ~
sudo apt install python3.8
```

Crea un entorno virtual llamado hailo_env

```
python3.8 -m venv hailo_env
```

Activa el entorno

```
source hailo_env/bin/activate
```

Instala [Hailo Dataflow Compiler 3.27](https://hailo.ai/developer-zone/software-downloads/), aquí necesitas registrarte en Hailo e iniciar sesión, y descargar el software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/HDF_install.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_dataflow_compiler-3.27.0-py3-none-linux_x86_64.whl 
```

Instala [Model zoo](https://hailo.ai/developer-zone/software-downloads/), aquí necesitas registrarte en Hailo e iniciar sesión, y descargar el software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_model_zoo-2.11.0-py3-none-any.whl 
```

Prueba si `hailo_model_zoo` funciona correctamente.

```
hailomz -h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo_test.png" alt="pir" width={1000} height="auto"/></p>

Instala el archivo de github `hailo_model_zoo`

```
cd yolomodel/runs/detect/retrain_yolov8n/weights

git clone https://github.com/hailo-ai/hailo_model_zoo.git
```

Instala el conjunto de datos coco para evaluar/optimizar/compilar el modelo yolov8n

```
python hailo_model_zoo/datasets/create_coco_tfrecord.py val2017
python hailo_model_zoo/datasets/create_coco_tfrecord.py calib2017
```

### Usa `hailo_model_zoo` para analizar el modelo:

```
hailomz parse --hw-arch hailo8l --ckpt ./best.onnx yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/parse_model.png" alt="pir" width={1000} height="auto"/></p>

### Usa `hailo_model_zoo` para optimizar el modelo:

:::note
Si ejecutas el siguiente comando, podrías encontrar algunos errores. Sin embargo, puedes copiar `./hailo_model_zoo/hailo_model_zoo` a tu biblioteca local. Si el error indica que no se encuentra el conjunto de datos, puedes navegar a `~/.hailomz`, localizar el conjunto de datos y copiarlo a tu directorio local de conjuntos de datos.
:::

```
hailomz optimize --hw-arch hailo8l --har ./yolov8n.har yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/optimize_model.png" alt="pir" width={1000} height="auto"/></p>

### Usa `hailo_model_zoo` para compilar el modelo:

```
hailomz compile  yolov8n --hw-arch hailo8l --har ./yolov8n.har 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_compile.png" alt="pir" width={1000} height="auto"/></p>

Después de todo, obtendrás un modelo `hef`, que puedes usar para desplegar en Raspberry Pi 5 con AI kit.

```
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/compile_result.png" alt="pir" width={1000} height="auto"/></p>

## En Raspberry Pi5

### Actualiza el sistema:

```
sudo apt update
sudo apt full-upgrade
```

### Configura pcie a gen2/gen3 (gen3 es más rápido que gen2):

Agrega el siguiente texto a ` /boot/firmware/config.txt`

```
# Habilitar el conector PCIe externo

dtparam=pciex1

# Forzar velocidades Gen 3.0

dtparam=pciex1_gen=3
```

:::note
Si deseas usar `gen2`, comenta `dtparam=pciex1_gen=3`
:::

### Instalar hailo-all y reiniciar:

Abre la terminal en Raspberry Pi 5 e ingresa el siguiente comando para instalar el software de Hailo

```
sudo apt install hailo-all
sudo reboot
```

### Verificar Software y Hardware:

Abre la terminal en Raspberry Pi 5, y ingresa el siguiente comando para verificar si hailo-all ha sido instalado.

```
hailortcli fw-control identify
```

El resultado correcto es el siguiente:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre la terminal en Raspberry Pi 5, y ingresa el siguiente comando para verificar si hailo-8L está conectado.

```
lspci | grep Hailo
```

El resultado correcto es el siguiente:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Clonar el proyecto:

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

### Copiar tu modelo a Raspberry Pi 5:

Crea un directorio llamado `hailomodel`

```
mkdir hailomodel
```

:::note
El comando a continuación debe ejecutarse en tu computadora anfitriona, no en tu Raspberry Pi 5. Asegúrate de que tanto tu computadora anfitriona como Raspberry Pi 5 estén conectados a la misma red.
:::

```
scp -r ./yolomodel/runs/detect/retrain_yolov8n/weights/yolov8n.hef username@ip /home/pi/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/hailomodel/
```

### Cambiar el código

Busca la línea 105 y 106 en `object-detection-hailo.py`, y cambia el código como sigue:
```
        elif args.network == "yolov8n":
            self.hef_path = os.path.join(self.current_path, './hailomodel/yolov8n.hef')   
```

Busca la línea 172 en `object-detection-hailo.py`, y cambia el código como sigue:
```
    parser.add_argument("--network", default="yolov8n", choices=['yolov6n', 'yolov8s', 'yolox_s_leaky'], help="Qué red usar, por defecto es yolov6n")
```

### Ejecutar el código:

```
bash run.sh object-detection-hailo
```

## Resultado

Aquí está el video en el que demostramos el proceso de entrenar el modelo YOLOv8n y desplegarlo en Raspberry Pi 5. Establecimos el tamaño de lote en 8, el tamaño de entrada en 640x640 y la tasa de cuadros de video de entrada en 240 fps. La velocidad de inferencia alcanzada es de 136.7 fps, lo cual es excepcionalmente rápido para la mayoría de los escenarios de aplicación.

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/mVNrEVpvvuc" title="YOLOv8n Detección de objetos en Raspberry Pi 5 con AI Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte el soporte necesario para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
