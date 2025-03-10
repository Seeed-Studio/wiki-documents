---
description: Entrenamiento completo del modelo YOLOv8 en la reComputer
title: ¿Como entrenar y desplegar Yolo V8 en la reComputer?
keywords:
- reComputer
- Entrenamiento con YOLOv8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How_to_Train_and_Deploy_YOLOv8_on_reComputer
last_update:
  date: 12/6/2023
  author: Youjiang
---


# ¿Como entrenar y desplegar Yolo V8 en la reComputer?

## Introducción
Ante los desafíos cada vez más complejos y dinámicos, la aplicación de la inteligencia artificial ofrece nuevas vías para resolver problemas y ha realizado contribuciones significativas al desarrollo sostenible de la sociedad global y la mejora de la calidad de vida de las personas. Típicamente, antes de desplegar algoritmos de inteligencia artificial, el diseño y entrenamiento de modelos de IA se realizan en servidores de computación de alto rendimiento. Una vez que el entrenamiento del modelo está completo, se exporta a dispositivos de computación en el borde para realizar inferencias en el borde. De hecho, todos estos procesos pueden ocurrir directamente en los dispositivos de computación en el borde. Específicamente, tareas como la preparación de conjuntos de datos, el entrenamiento de redes neuronales, la validación de redes neuronales y el despliegue de modelos pueden realizarse en dispositivos de borde. Esto no solo asegura la seguridad de los datos, sino que también ahorra los costos asociados con la compra de dispositivos adicionales.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>

En este documento, entrenamos y desplegamos un modelo de detección de objetos para escenas de tráfico en la
[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=f6de8f6c8d814c021e13f4455d041d03&objectID=5586&indexName=bazaar_retailer_products). 
Este documento usa
[YOLOv8](https://www.ultralytics.com/) 
como ejemplo y ofrece una visión detallada de todo el proceso. Ten en cuenta que todas las operaciones descritas a continuación se realizan en el dispositivo de computación en el borde Jetson, asegurándose de que el dispositivo Jetson tenga un sistema operativo instalado que sea
[JetPack 5.0](https://wiki.seeedstudio.com/NVIDIA_Jetson/) 
o superior.

## Conjunto de datos.
El proceso de aprendizaje automático consiste en encontrar patrones dentro de los datos proporcionados y luego utilizar una función para capturar esos patrones. Por lo tanto, la calidad del conjunto de datos afecta directamente al rendimiento del modelo. En términos generales, cuanto mejor sea la calidad y la cantidad de los datos de entrenamiento, mejor será el modelo entrenado. Por lo tanto, la preparación del conjunto de datos es crucial.

Existen varios métodos para recolectar conjuntos de datos de entrenamiento. Aquí se presentan dos métodos: 1. Descargar conjuntos de datos públicos de código abierto previamente anotados. 2. Recolectar y anotar datos de entrenamiento. Finalmente, consolidar todos los datos para prepararlos para la fase de entrenamiento posterior.

### Descargar conjuntos de datos públicos
Los conjuntos de datos públicos son recursos de datos estandarizados compartidos y ampliamente utilizados en la investigación en aprendizaje automático e inteligencia artificial. Proporcionan a los investigadores puntos de referencia estándar para evaluar el rendimiento de los algoritmos, fomentando la innovación y la colaboración en el campo. Estos conjuntos de datos impulsan a la comunidad de IA hacia una dirección más abierta, innovadora y sostenible.

Existen muchas plataformas en las que se pueden descargar conjuntos de datos de forma gratuita, como
[Roboflow](https://roboflow.com/), 
[Kaggle](https://www.kaggle.com/), 
y más. Aquí, descargamos un conjunto de datos anotado relacionado con escenas de tráfico. 
[Traffic Detection Project](https://www.kaggle.com/datasets/yusufberksardoan/traffic-detection-project/download?datasetVersionNumber=1), 
de Kaggle.

La estructura del archivo después de la extracción se muestra a continuación:

```sh
archive
├── data.yaml
├── README.dataset.txt
├── README.roboflow.txt
├── test
│   ├── images
│   │   ├── aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.jpg
│   │   ├── aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.jpg
│   │   ├── ...
│   └── labels
│       ├── aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.txt
│       ├── aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.txt
│       ├── ...
├── train
│   ├── images
│   │   ├── aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.jpg
│   │   ├── aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.jpg
│   │   ├── ...
│   └── labels
│       ├── aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.txt
│       ├── aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.txt
│       ├── ...
└── valid
    ├── images
    │   ├── aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.jpg
    │   ├── aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.jpg
    │   ├── ...
    └── labels
        ├── aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.txt
        ├── aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.txt
        ├──...
```

Cada imagen tiene un archivo de texto correspondiente que contiene la información completa de anotación para esa imagen. El archivo data.json registra las ubicaciones de los conjuntos de entrenamiento, prueba y validación, y es necesario modificar las rutas:

```json
train: ./train/images
val: ./valid/images
test: ./test/images

nc: 5
names: ['bicycle', 'bus', 'car', 'motorbike', 'person']
```

### Recolección y etiquetado de datos

Cuando los conjuntos de datos públicos no puedan satisfacer los requisitos del usuario, es necesario considerar la recopilación y creación de conjuntos de datos personalizados, adaptados a necesidades específicas. Esto se puede lograr recopilando, anotando y organizando datos relevantes. Para fines de demostración, capturé y guardé tres imágenes de
[YouTube](https://www.youtube.com/watch?v=iJZcjZD0fw0), e intenta usar [Label Studio](https://www.youtube.com/watch?v=iJZcjZD0fw0) 
para etiquetar las imagenes.

**Paso 1.** Recolección de datos sin procesar:

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/raw_datas.png" />
</div>

**Paso 2.** Instalar y ejecutar la herramienta de etiquetados:
```bash
sudo groupadd docker
sudo gpasswd -a ${USER} docker
sudo systemctl restart docker
sudo chmod a+rw /var/run/docker.sock

mkdir label_studio_data
sudo chmod -R 776 label_studio_data
docker run -it -p 8080:8080 -v $(pwd)/label_studio_data:/label-studio/data heartexlabs/label-studio:latest
```

**Paso 3.** Crea un nuevo proyecto y completa el etiquetado según las indicaciones:
[Documentación de referencia de Label Studio](https://labelstud.io/blog/quickly-create-datasets-for-training-yolo-object-detection-with-label-studio/#output-the-dataset-in-yolo-format)

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/labeling.png" />
</div>

Después de completar el etiquetado, puedes exportar el conjunto de datos en formato YOLO y organizar los datos etiquetados junto con los datos descargados. El enfoque más sencillo es copiar todas las imágenes en la carpeta train/images del conjunto de datos público y los archivos de texto las etiquetas generadas en la carpeta train/labels del mismo conjunto de datos.

En este punto, hemos obtenido los datos de entrenamiento mediante dos métodos diferentes y los hemos integrado. Si deseas datos de entrenamiento de mayor calidad, hay muchos pasos adicionales a considerar, como la limpieza de datos, el equilibrio de clases y más. Dado que nuestra tarea es relativamente simple, omitiremos estos pasos por ahora y procederemos con el entrenamiento utilizando los datos obtenidos anteriormente.

## Modelo
En esta sección, descargaremos el código fuente de YOLOv8 en la reComputer y configuraremos el entorno de ejecución.

**Paso 1.** Usa el siguiente comando para descargar el código fuente:

```bash
git clone https://github.com/ultralytics/ultralytics.git
cd ultralytics
```

**Paso 2.** Abre requirements.txt y modifica el contenido relevante:

```bash
# Use the `vi` command to open the file
vi requirements.txt

# Press `a` to enter edit mode, and modify the following content:
torch>=1.7.0 --> # torch>=1.7.0
torchvision>=0.8.1 --> # torchvision>=0.8.1

# Press `ESC` to exit edit mode, and finally input `:wq` to save and exit the file.

Step 3. Run the following commands to download the required dependencies for YOLO and install YOLOv8:
pip3 install -e .
cd ..
```

**Paso 4.** Instala la versión de PyTorch para la Jetson:

```bash
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.cn/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl -O torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

**Paso 5.** Instala la versión correspondiente de torchvision:
```bash
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.16.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
cd ..
```

**Paso 6.** Corre el siguiente comando para asegurar que YOLO fue instalado exitosamente:
```bash
yolo detect predict model=yolov8s.pt source='https://ultralytics.com/images/bus.jpg'
```

## Entrenamiento
El entrenamiento del modelo es el proceso de actualizar los pesos del modelo. Al entrenar el modelo, los algoritmos de aprendizaje automático pueden aprender de los datos para reconocer patrones y relaciones, lo que permite hacer predicciones y tomar decisiones sobre nuevos datos.

**Paso 1.** Crea un script de Python para el entrenamiento:

```bash
vi train.py
```

Presiona `a` para entrar al modo de edición y modifica el siguiente contenido:

```bash
from ultralytics import YOLO

# Load a model
model = YOLO('yolov8s.pt')

# Train the model
results = model.train(
    data='/home/nvidia/Everything_Happens_Locally/Dataset/data.yaml', 
    batch=8, epochs=100, imgsz=640, save_period=5
)
```

Presiona ESC para salir del modo de edición y, finalmente, ingresa :wq para guardar y salir del archivo.

El método YOLO.train() tiene muchos parámetros de configuración; consulta la
[documentación](https://docs.ultralytics.com/modes/train/#arguments) 
para más detalles. Además, puedes utilizar un enfoque más simplificado con la interfaz de línea de comandos (CLI) para comenzar el entrenamiento según tus requisitos específicos.

**Paso 2.** Comienza el entrenamiento con el siguiente comando:
```bash
python3 train.py
```

Luego viene el largo proceso de espera. Teniendo en cuenta la posibilidad de cerrar la ventana de conexión remota durante la espera, este tutorial utiliza el
[Tmux](https://github.com/tmux/tmux/wiki)
multiplexor de terminal. Así, la interfaz que veo durante el proceso se ve de la siguiente manera:

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/training.png" />
</div>

Tmux es opcional; siempre y cuando el modelo se esté entrenando normalmente. Después de que el programa de entrenamiento termine, podrás encontrar los archivos de pesos del modelo guardados durante el proceso de entrenamiento en la carpeta designada:

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/models.png" />
</div>

## Validación
El proceso de validación consiste en utilizar una porción de los datos para validar la fiabilidad del modelo. Este proceso ayuda a garantizar que el modelo pueda realizar tareas con precisión y robustez en aplicaciones del mundo real. Si observas detenidamente la información que se genera durante el proceso de entrenamiento, notarás que muchas validaciones se intercalan a lo largo del entrenamiento. Esta sección no analizará el significado de cada métrica de evaluación, sino que evaluará la usabilidad del modelo examinando los resultados de las predicciones.

**Paso 1.** Usa el modelo entrenado para realizar una inferencia sobre una imagen específica.

```bash
yolo detect predict \
    model='./runs/detect/train2/weights/best.pt' \ 
    source='./datas/test/images/ant_sales-2615_png_jpg.rf.0ceaf2af2a89d4080000f35af44d1b03.jpg' \
    save=True show=False
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_cmd.png" />
</div>

**Paso 2.** Examina los resultados de la inferencia.

A partir de los resultados de detección, se puede observar que el modelo entrenado alcanza el rendimiento de detección esperado.

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference.jpeg" />
</div>

## Despliegue
El despliegue es el proceso de aplicar un modelo de aprendizaje automático o aprendizaje profundo entrenado a escenarios del mundo real. El contenido presentado anteriormente ha validado la viabilidad del modelo, pero no ha considerado la eficiencia de la inferencia del modelo. En la fase de despliegue, es necesario encontrar un equilibrio entre la precisión de detección y la eficiencia. Se puede utilizar el motor de inferencia TensorRT para mejorar la velocidad de inferencia del modelo.

**Paso 1.** Para demostrar visualmente el contraste entre el modelo ligero y el original, crea un nuevo archivo `inference.py` utilizando la herramienta vi para implementar la inferencia con un archivo de video. Puedes reemplazar el modelo de inferencia y el video de entrada modificando las líneas 8 y 9. La entrada en este documento es un video que grabé con mi teléfono.

```python
from ultralytics import YOLO
import os
import cv2
import time
import datetime


model = YOLO("/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt")
cap = cv2.VideoCapture('./sample_video.mp4')

save_dir = os.path.join('runs/inference_test', datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S'))
if not os.path.exists(save_dir):
    os.makedirs(save_dir)
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
fps = cap.get(cv2.CAP_PROP_FPS)
size = (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))
output = cv2.VideoWriter(os.path.join(save_dir, 'result.mp4'), fourcc, fps, size)

while cap.isOpened():
    success, frame = cap.read()
    if success:
        start_time = time.time()
        results = model(frame)
        annotated_frame = results[0].plot()
        total_time = time.time() - start_time
        fps = 1/total_time
        cv2.rectangle(annotated_frame, (20, 20), (200, 60), (55, 104, 0), -1)
        cv2.putText(annotated_frame, f'FPS: {round(fps, 2)}', (30, 50), 0, 0.9, (255, 255, 255), thickness=2, lineType=cv2.LINE_AA)
        print(f'FPS: {fps}')
        cv2.imshow("YOLOv8 Inference", annotated_frame)
        output.write(annotated_frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    else:
        break

cv2.destroyAllWindows()
cap.release()
output.release()
```

**Paso 2.** Ejecuta el siguiente comando y registra la velocidad de inferencia antes de la cuantización del modelo:

```bash
python3 inference.py
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_pt.png" />
</div>

El resultado indica que la velocidad de inferencia del modelo antes de la cuantización es de 21.9 FPS.

**Paso 3.** Generazión del modelo cuantizado:

```bash
pip3 install onnx
yolo export model=/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt format=engine half=True device=0
```

Después de que el programa se complete (alrededor de 10-20 minutos), se generará un archivo `.engine` en el mismo directorio que el modelo de entrada. Este archivo es el modelo cuantizado.

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/model_engine.png" />
</div>

**Paso 4.** Prueba la velocidad de inferencia utilizando el modelo cuantizado.

Aquí, necesitas modificar el contenido de la línea ocho del script creado en el paso 1.

```bash
model = YOLO(<path to .pt>) --> model = YOLO(<path to .engine>)
```

Luego, vuelve a correr el comando de inferencia.

```bash
python3 inference.py
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_engine.png" />
</div>

Desde la perspectiva de la eficiencia de la inferencia, el modelo cuantizado muestra una mejora significativa en la velocidad de inferencia.

## Resumen

Este artículo ofrece a los lectores una guía completa que cubre diversos aspectos, desde la recopilación de datos y el entrenamiento del modelo hasta el despliegue. Es importante destacar que todos los procesos ocurren en reComputer, eliminando la necesidad de que los usuarios cuenten con GPUs adicionales.





<!-- Code END -->

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>