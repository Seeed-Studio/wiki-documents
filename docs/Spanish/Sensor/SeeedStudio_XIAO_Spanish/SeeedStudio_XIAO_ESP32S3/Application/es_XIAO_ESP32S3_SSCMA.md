---
description: Guía sobre cómo pasar de conjuntos de datos propios, etiquetado, entrenamiento y despliegue en XIAO ESP32S3.
title: Desplegar Modelos desde Conjuntos de Datos al XIAO ESP32S3
keywords:
- SSCMA
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_sscma
last_update:
  date: 10/02/2025
  author: Guillermo
---


# Desplegar Modelos desde Conjuntos de Datos al XIAO ESP32S3

Bienvenido a este tutorial completo en el que emprenderemos un viaje para convertir tu conjunto de datos en un modelo completamente funcional para su despliegue en el XIAO ESP32S3. En esta guía, navegaremos por los pasos iniciales de etiquetar nuestro conjunto de datos con las herramientas intuitivas de Roboflow, avanzando al entrenamiento del modelo en el entorno colaborativo de Google Colab.

Luego pasaremos al despliegue de nuestro modelo entrenado utilizando el SenseCraft Model Assistant, un proceso que cierra la brecha entre el entrenamiento y la aplicación en el mundo real. Al final de este tutorial, no solo tendrás un modelo personalizado ejecutándose en el XIAO ESP32S3, sino que también estarás equipado con el conocimiento para interpretar y utilizar los resultados de las predicciones de tu modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/0.png" style={{width:1000, height:'auto'}}/></div>


Desde el conjunto de datos hasta la llegada del modelo, tendremos los siguientes pasos principales:

1. [Conjuntos de Datos Etiquetados](#labelled-datasets) —— Este capítulo se centra en cómo obtener conjuntos de datos que puedan ser entrenados en modelos. Hay dos formas principales de hacer esto. La primera es utilizar los conjuntos de datos etiquetados proporcionados por la comunidad de Roboflow, y la otra es usar tus propias imágenes específicas del escenario como conjuntos de datos, pero necesitarás pasar manualmente por el proceso de etiquetado.

2. [Modelo Exportado de Conjunto de Datos Entrenado](#training-dataset-exported-model) —— Este capítulo se enfoca en cómo entrenar para obtener un modelo que pueda ser desplegado en el XIAO ESP32S3 basado en el conjunto de datos obtenido en el primer paso, utilizando la plataforma Google Colab.

3. [Subir Modelos a través del SenseCraft Model Assistant](#upload-models-via-sensecraft-model-assistant) —— Esta sección describe cómo usar el archivo del modelo exportado para subir el modelo al XIAO ESP32S3 utilizando el SenseCraft Model Assistant.

4. [Protocolos Comunes y Aplicaciones del Modelo](#common-protocols-and-applications-of-the-model) —— Finalmente, presentaremos el formato unificado de comunicación de datos de SenseCraft AI para que puedas aprovechar al máximo el potencial de tus dispositivos y modelos para crear aplicaciones que se ajusten a tus escenarios.

Así que, ¡vamos a sumergirnos y comenzar el emocionante proceso de dar vida a tus datos!

## Materiales Requeridos

Antes de comenzar, es posible que necesites preparar el siguiente equipo.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Seeed Studio XIAO ESP32S3 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Tanto la versión XIAO ESP32S3 como la versión Sense pueden ser utilizadas como contenido para este tutorial, pero dado que la versión estándar del producto no permite el uso de la placa de expansión de cámara, recomendamos que utilices la versión Sense.

## Conjuntos de Datos Etiquetados

En el contenido de esta sección, permitimos a los usuarios elegir libremente los conjuntos de datos que tienen. Esto incluye fotos de la comunidad o de sus propios escenarios. Este tutorial presentará dos escenarios principales. El primero es usar conjuntos de datos etiquetados listos proporcionados por la comunidad de [Roboflow](https://roboflow.com/about). El otro es usar imágenes de alta resolución que hayas tomado y etiquetado como conjunto de datos. Por favor, lee los diferentes tutoriales a continuación según tus necesidades.

### Paso 1: Crear una cuenta gratuita en Roboflow

Roboflow proporciona todo lo que necesitas para etiquetar, entrenar y desplegar soluciones de visión por computadora. Para comenzar, crea una [cuenta gratuita en Roboflow](https://app.roboflow.com/?ref=blog.roboflow.com).

Después de revisar y aceptar los términos del servicio, se te pedirá que elijas entre uno de dos planes: el Plan Público y el Plan Starter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/1.png" style={{width:800, height:'auto'}}/></div>


Luego, se te pedirá que invites colaboradores a tu espacio de trabajo. Estos colaboradores pueden ayudarte a anotar imágenes o gestionar los proyectos de visión en tu espacio de trabajo. Una vez que hayas invitado personas a tu espacio de trabajo (si lo deseas), podrás crear un proyecto.

### Elige cómo obtendrás tu conjunto de datos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Download Labelled datasets using Roboflow" label="Download Labelled datasets using Roboflow">

Elegir un conjunto de datos adecuado de Roboflow para su uso directo implica determinar cuál se ajusta mejor a los requisitos de tu proyecto, considerando aspectos como el tamaño del conjunto de datos, la calidad, la relevancia y la licencia.

**Paso 2. Explora Roboflow Universe**

Roboflow Universe es una plataforma donde puedes encontrar diversos conjuntos de datos. Visita el sitio web de Roboflow Universe y explora los conjuntos de datos disponibles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/2.png" style={{width:1000, height:'auto'}}/></div>

Roboflow ofrece filtros y una función de búsqueda para ayudarte a encontrar conjuntos de datos. Puedes filtrar los conjuntos de datos por dominio, número de clases, tipos de anotación y más. Utiliza estos filtros para reducir los conjuntos de datos que se ajusten a tus criterios.

**Paso 3. Evaluar Conjuntos de Datos Individuales**

Una vez que tengas una lista corta, evalúa cada conjunto de datos individualmente. Busca:

**Calidad de las Anotaciones**: Verifica si las anotaciones son precisas y consistentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/3.png" style={{width:1000, height:'auto'}}/></div>

**Tamaño del Conjunto de Datos**: Asegúrate de que el conjunto de datos sea lo suficientemente grande para que tu modelo pueda aprender de manera efectiva, pero no tan grande que sea difícil de manejar.

**Equilibrio de Clases**: El conjunto de datos debe tener idealmente un número equilibrado de ejemplos para cada clase.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/4.png" style={{width:1000, height:'auto'}}/></div>

**Licencia**: Revisa la licencia del conjunto de datos para asegurarte de que puedes usarlo según lo previsto.

**Documentación**: Revisa cualquier documentación o metadatos que acompañen al conjunto de datos para comprender mejor su contenido y los pasos de preprocesamiento que ya se hayan aplicado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Puedes averiguar la condición del modelo a través de **[Roboflow Health Check](https://docs.roboflow.com/datasets/dataset-health-check)**.
:::

**Paso 4. Descargar la Muestra**

Si encuentras el conjunto de datos que deseas, tendrás la opción de descargarlo y usarlo. Roboflow generalmente permite descargar una muestra del conjunto de datos. Prueba la muestra para ver si se integra bien con tu flujo de trabajo y si es adecuada para tu modelo.

Para continuar con los pasos posteriores, te recomendamos exportar el conjunto de datos en el formato que se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/6.png" style={{width:1000, height:'auto'}}/></div>

Luego obtendrás la **URL en bruto** para este modelo, guárdala de forma segura, ya que usaremos ese enlace en el paso de entrenamiento del modelo más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/26.png" style={{width:1000, height:'auto'}}/></div>


:::caution
Si estás usando Roboflow por primera vez y no tienes un criterio claro para la selección de conjuntos de datos, el paso de entrenar un modelo con un conjunto de datos para realizar una prueba inicial y ver su rendimiento puede ser esencial. Esto te ayudará a evaluar si el conjunto de datos cumplirá con tus requisitos.

Si el conjunto de datos cumple con tus requisitos y tiene un buen rendimiento en las pruebas iniciales, es probable que sea adecuado para tu proyecto. De lo contrario, puede que necesites continuar con tu búsqueda o considerar expandir el conjunto de datos con más imágenes.
:::

</TabItem>

<TabItem value="Use your own images as a dataset" label="Usa tus propias imágenes como conjunto de datos">

Aquí, utilizaré la imagen del gesto de piedra, papel o tijera como demostración para guiarte a través de las tareas de cargar imágenes, etiquetar y exportar un conjunto de datos en Roboflow.

:::note
Te recomendamos encarecidamente que utilices el XIAO ESP32S3 para tomar las fotos de tu conjunto de datos, ya que es el más adecuado para el XIAO ESP32S3. Un programa de muestra para el XIAO ESP32S3 Sense para tomar fotos se puede encontrar en el enlace de Wiki a continuación.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#taking-photos-with-the-camera">
            <strong><span><font color={'FFFFFF'} size={"4"}>Go to Wiki</font></span></strong>
    </a>
</div>
:::

**Paso 2. Crear un Nuevo Proyecto y Subir Imágenes**

Una vez que hayas iniciado sesión en Roboflow, haz clic en **Crear Proyecto**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/7.png" style={{width:1000, height:'auto'}}/></div>

Nombra tu proyecto (por ejemplo, "Piedra-Papel-Tijeras"). Define tu proyecto como **Detección de Objetos**. Establece las **Etiquetas de Salida** como **Categóricas** (ya que Piedra, Papel y Tijeras son categorías distintas).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/8.png" style={{width:1000, height:'auto'}}/></div>

Ahora es el momento de subir tus imágenes de gestos de la mano.

Reúne imágenes de los gestos de piedra, papel y tijeras. Asegúrate de tener una variedad de fondos y condiciones de iluminación. En la página de tu proyecto, haz clic en "Agregar Imágenes".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/9.png" style={{width:1000, height:'auto'}}/></div>

Puedes arrastrar y soltar tus imágenes o seleccionarlas desde tu computadora. Sube al menos 100 imágenes de cada gesto para obtener un conjunto de datos robusto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/10.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**¿Cómo se determina el tamaño del conjunto de datos?**

Generalmente depende de una variedad de factores: el modelo de tarea, la complejidad de la tarea, la pureza de los datos, entre otros. Por ejemplo, el modelo de detección del cuerpo humano involucra una gran cantidad de personas, un rango amplio, la tarea es más compleja, por lo que se necesita recolectar más datos.
Otro ejemplo es el modelo de detección de gestos, que solo necesita detectar los tres tipos de "piedra", "tijeras" y "papel", y requiere menos categorías, por lo que el conjunto de datos recolectado es de alrededor de 500.
:::

**Paso 3: Anotar Imágenes**

Después de subir las imágenes, deberás anotarlas etiquetando los gestos de la mano.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/11.png" style={{width:1000, height:'auto'}}/></div>

Roboflow ofrece tres formas diferentes de etiquetar imágenes: Auto Label, Roboflow Labeling y Manual Labeling.

- [**Auto Label**](https://blog.roboflow.com/yolo-world-prompting-tips/): Usa un modelo generalizado grande para etiquetar automáticamente las imágenes.
- **Roboflow Labeling**: Trabaja con un equipo profesional de etiquetadores humanos. No hay volumen mínimo. Sin compromisos por adelantado. Las anotaciones de cuadro delimitador comienzan en $0.04 y las anotaciones de polígono comienzan en $0.08.
- **Manual Labeling**: Tú y tu equipo etiquetan sus propias imágenes.

A continuación se describe el método más comúnmente utilizado de etiquetado manual.

Haz clic en el botón "Manual Labeling". Roboflow cargará la interfaz de anotación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/12.png" style={{width:1000, height:'auto'}}/></div>

Selecciona el botón "Start Annotating". Dibuja cuadros delimitadores alrededor del gesto de la mano en cada imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/13.gif" style={{width:1000, height:'auto'}}/></div>

Etiqueta cada cuadro delimitador como "Piedra", "Papel" o "Tijeras".

Usa el botón ">" para avanzar a través de tu conjunto de datos, repitiendo el proceso de anotación para cada imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/14.gif" style={{width:1000, height:'auto'}}/></div>


**Paso 4: Revisar y Editar las Anotaciones**

Es fundamental asegurarse de que las anotaciones sean precisas.

Revisa cada imagen para asegurarte de que los cuadros delimitadores estén correctamente dibujados y etiquetados. Si encuentras algún error, selecciona la anotación para ajustar el cuadro delimitador o cambiar la etiqueta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/15.png" style={{width:1000, height:'auto'}}/></div>

:::tip
El etiquetado incorrecto afecta el rendimiento general del entrenamiento y puede ser descartado si algunos conjuntos de datos no cumplen con los requisitos de etiquetado. A continuación, se muestran algunos ejemplos de etiquetado incorrecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/16.png" style={{width:700, height:'auto'}}/></div>
:::

**Paso 5: Generar y Exportar el Conjunto de Datos**

Una vez que todas las imágenes estén anotadas, en la sección de Anotación haz clic en el botón **Add x images to Dataset** en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/17.png" style={{width:1000, height:'auto'}}/></div>

Luego, haz clic en el botón **Add Images** en la parte inferior de la nueva ventana emergente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/18.png" style={{width:400, height:'auto'}}/></div>

Haz clic en **Generate** en la barra de herramientas de la izquierda y luego haz clic en **Continue** en el tercer paso de **Preprocesamiento**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/19.png" style={{width:1000, height:'auto'}}/></div>

En la sección de **Augmentation** en el paso 4, selecciona **Mosaic**, que aumenta la generalización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/21.png" style={{width:1000, height:'auto'}}/></div>

En el último paso de **Create**, calcula razonablemente el número de imágenes de acuerdo con el impulso de Roboflow; en general, cuanto más imágenes tengas, más tiempo llevará entrenar el modelo. Sin embargo, tener más imágenes no necesariamente hará que el modelo sea más preciso, depende principalmente de si el conjunto de datos es lo suficientemente bueno o no.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/22.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **Create** para crear una versión de tu conjunto de datos. Roboflow procesará las imágenes y anotaciones, creando un conjunto de datos versionado. Después de que el conjunto de datos sea generado, haz clic en **Export Dataset**. Elige el formato **COCO** que coincida con los requisitos del modelo que estarás entrenando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/23.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **Continuar** y luego obtendrás la URL en bruto para este modelo. Guárdala, la usaremos en el paso de entrenamiento del modelo más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/27.png" style={{width:1000, height:'auto'}}/></div>


¡Felicidades! Has utilizado con éxito Roboflow para cargar, anotar y exportar un conjunto de datos para un modelo de detección de gestos de mano de Piedra-Papel-Tijeras. Con tu conjunto de datos listo, puedes proceder a entrenar un modelo de aprendizaje automático utilizando plataformas como Google Colab.

Recuerda mantener tu conjunto de datos diverso y bien anotado para mejorar la precisión de tu modelo futuro. ¡Buena suerte con el entrenamiento de tu modelo y diviértete clasificando gestos de mano con el poder de la IA!
</TabItem>
</Tabs>


## Modelo Exportado del Conjunto de Datos de Entrenamiento

### Paso 1. Accede a Colab Notebook

Puedes encontrar diferentes tipos de archivos de código de modelos para Google Colab en el [Wiki del Asistente de Modelos de SenseCraft](https://wiki.seeedstudio.com/ModelAssistant_Introduce_Quick_Start/#model-training). Si no sabes qué código deberías elegir, puedes seleccionar cualquiera de ellos, dependiendo de la clase de tu modelo (detección de objetos o clasificación de imágenes).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/24.png" style={{width:1000, height:'auto'}}/></div>

Si aún no has iniciado sesión en tu cuenta de Google, por favor inicia sesión para acceder a todas las funcionalidades de Google Colab.

Haz clic en "Conectar" para asignar recursos a tu sesión de Colab.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/25.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Agrega tu Conjunto de Datos de Roboflow

Antes de ejecutar oficialmente el bloque de código paso a paso, necesitamos modificar el contenido del código para que pueda usar el conjunto de datos que preparamos. Debemos proporcionar una URL para descargar el conjunto de datos directamente en el sistema de archivos de Colab.

Por favor, busca la sección **Descargar el conjunto de datos** en el código. Verás el siguiente programa de ejemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/28.png" style={{width:1000, height:'auto'}}/></div>

```sh
%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset 
!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip 
!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset
```

Este fragmento de código se utiliza para crear un directorio, descargar un conjunto de datos desde Roboflow y descomprimirlo en el nuevo directorio creado dentro del entorno de Google Colab. A continuación, te explico qué hace cada línea:

1. `%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset`:
   - Esta línea crea un nuevo directorio llamado `Gesture_Detection_Swift-YOLO_192` y un subdirectorio llamado `dataset`. La opción `-p` asegura que el comando no genere un error si el directorio ya existe y crea los directorios principales necesarios.

2. `!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip`:
   - Esta línea utiliza `wget`, una herramienta de línea de comandos, para descargar el conjunto de datos desde la URL proporcionada por Roboflow. La opción `-c` permite que la descarga se reanude si se interrumpe. La opción `-O` especifica la ubicación y el nombre del archivo descargado, en este caso, `Gesture_Detection_Swift-YOLO_192/dataset.zip`.

3. `!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset`:
   - Esta línea utiliza el comando `unzip` para extraer el contenido del archivo `dataset.zip` en el directorio `dataset` que se creó previamente. La opción `-q` ejecuta el comando `unzip` en modo silencioso, suplantando la mayoría de los mensajes de salida.

Para personalizar este código con el enlace de tu propio modelo de Roboflow:

1. Sustituye `Gesture_Detection_Swift-YOLO_192` por el nombre de directorio deseado donde quieres almacenar tu conjunto de datos.

2. Sustituye la URL del conjunto de datos de Roboflow (`https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t`) con el enlace a tu conjunto de datos exportado (es la URL en bruto que obtuvimos en el [último paso de Conjuntos de Datos Etiquetados](#choose-how-you-get-your-dataset)). Asegúrate de incluir el parámetro `key` si es necesario para el acceso.

3. Ajusta el nombre del archivo de salida en el comando `wget` si es necesario (`-O tu_directorio/tu_archivo.zip`).

4. Asegúrate de que el directorio de salida en el comando `unzip` coincida con el directorio que creaste y que el nombre del archivo coincida con el que configuraste en el comando `wget`.

:::caution
Si cambias el nombre de un directorio, como `Gesture_Detection_Swift-YOLO_192`, ten en cuenta que tendrás que hacer cambios en otros nombres de directorios en el código que se usaron antes del cambio, ¡de lo contrario podría ocurrir un error!
:::

### Paso 3. Ajuste de los parámetros del modelo

El siguiente paso es ajustar los parámetros de entrada del modelo. Por favor, dirígete a la sección "Entrenar un modelo con SSCMA" y verás el siguiente fragmento de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/29.png" style={{width:1000, height:'auto'}}/></div>

```sh
!sscma.train configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
--cfg-options  \
    work_dir=Gesture_Detection_Swift-YOLO_192 \
    num_classes=3 \
    epochs=10  \
    height=192 \
    width=192 \
    data_root=Gesture_Detection_Swift-YOLO_192/dataset/ \
    load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth
```


Este comando se utiliza para iniciar el proceso de entrenamiento de un modelo de aprendizaje automático, específicamente un modelo YOLO (You Only Look Once), utilizando el marco SSCMA (Seeed Studio SenseCraft Model Assistant). El comando incluye varias opciones para configurar el proceso de entrenamiento. Aquí te explico qué hace cada parte:

- `!sscma.train` es el comando que inicia el entrenamiento dentro del marco SSCMA.

- `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` especifica el archivo de configuración para el entrenamiento, que incluye ajustes como la arquitectura del modelo, el cronograma de entrenamiento, las estrategias de aumento de datos, etc.

- `--cfg-options` permite sobrescribir las configuraciones predeterminadas especificadas en el archivo `.py` con las que proporcionas en la línea de comandos.

- `work_dir=Gesture_Detection_Swift-YOLO_192` establece el directorio donde se guardarán los resultados del entrenamiento, como los registros y los puntos de control del modelo guardados.

- `num_classes=3` especifica el número de clases que el modelo debe aprender a reconocer. Depende del número de etiquetas que tengas; por ejemplo, rock, paper, scissors deberían ser tres etiquetas.

- `epochs=10` establece el número de ciclos de entrenamiento (épocas) que se ejecutarán. Se recomienda un valor entre 50 y 100.

- `height=192` y `width=192` establecen la altura y el ancho de las imágenes de entrada que el modelo espera.

:::caution
No recomendamos que cambies el tamaño de la imagen en el código de Colab, ya que este valor es un tamaño de conjunto de datos más adecuado que hemos verificado que es una combinación de tamaño, precisión y velocidad de inferencia. Si estás utilizando un conjunto de datos que no tiene este tamaño y deseas cambiar el tamaño de la imagen para garantizar la precisión, no excedas los 240x240.
:::

- `data_root=Gesture_Detection_Swift-YOLO_192/dataset/` define la ruta al directorio donde se encuentra el conjunto de datos de entrenamiento.

- `load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth` proporciona la ruta al archivo de punto de control de un modelo preentrenado desde el cual debe reanudarse el entrenamiento o utilizarse como punto de partida para el aprendizaje por transferencia.

Para personalizar este comando para tu propio entrenamiento, deberías:

1. Sustituir `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` con la ruta a tu propio archivo de configuración si tienes uno personalizado.

2. Cambiar `work_dir` por el directorio donde deseas que se guarden los resultados de tu entrenamiento.

3. Actualizar `num_classes` para que coincida con el número de clases en tu propio conjunto de datos. Depende del número de etiquetas que tengas; por ejemplo, rock, paper, scissors deberían ser tres etiquetas.

4. Ajustar `epochs` al número deseado de épocas de entrenamiento para tu modelo. Los valores recomendados son entre 50 y 100.

5. Establecer `height` y `width` para que coincidan con las dimensiones de las imágenes de entrada de tu modelo.

6. Cambiar `data_root` para apuntar al directorio raíz de tu conjunto de datos.

7. Si tienes un archivo de modelo preentrenado diferente, actualiza la ruta de `load_from` en consecuencia.

### Paso 4. Ejecutar el código de Google Colab

La forma de ejecutar el bloque de código es hacer clic en el botón de reproducción en la esquina superior izquierda del bloque de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/30.png" style={{width:1000, height:'auto'}}/></div>

El bloque de código se ejecutará después de que hagas clic en el botón, y si todo va bien, verás la señal de que la ejecución del bloque de código se ha completado: aparecerá un símbolo de marca de verificación (tick) a la izquierda del bloque. Como se muestra en la figura, este es el efecto después de que se complete la ejecución del primer bloque de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/31.png" style={{width:1000, height:'auto'}}/></div>

Si encuentras el mismo mensaje de error que el mío en la imagen de arriba, por favor asegúrate de que estás utilizando una **GPU T4**. Por favor, **no uses CPU** para este proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/32.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/33.png" style={{width:600, height:'auto'}}/></div>

Luego, vuelve a ejecutar el bloque de código. Para el primer bloque de código, si todo va bien, verás el resultado mostrado a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/34.png" style={{width:1000, height:'auto'}}/></div>

A continuación, ejecuta todos los bloques de código desde **Descargar el archivo de pesos del modelo preentrenado** hasta **Exportar el modelo**. Asegúrate de que cada bloque de código esté libre de errores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/36.png" style={{width:400, height:'auto'}}/></div>


:::note
Los Warnings que aparecen en el código se pueden ignorar.
:::

### Paso 5. Evaluar el modelo

Cuando llegues a la sección **Evaluar el modelo**, tendrás la opción de ejecutar el bloque de código **Evaluar el modelo TFLite INT8**.

:::tip
Evaluar el modelo TFLite INT8 implica probar las predicciones del modelo cuantizado contra un conjunto de datos de prueba independiente para medir su precisión y métricas de rendimiento. También se evalúa el impacto de la cuantización en la precisión del modelo, así como la velocidad de inferencia y el uso de recursos, para asegurar que cumpla con las restricciones de implementación en dispositivos de borde (edge devices).
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/35.png" style={{width:1000, height:'auto'}}/></div>

El siguiente fragmento es la parte válida del resultado después de ejecutar este bloque de código.

```
 Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.450
 Average Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 0.929
 Average Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.361
 Average Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000
 Average Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = 0.474
 Average Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.456
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.515
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.529
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.529
 Average Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = 0.536
 Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.537
03/19 01:38:43 - mmengine - INFO - bbox_mAP_copypaste: 0.450 0.929 0.361 -1.000 0.474 0.456
{'coco/bbox_mAP': 0.45, 'coco/bbox_mAP_50': 0.929, 'coco/bbox_mAP_75': 0.361, 'coco/bbox_mAP_s': -1.0, 'coco/bbox_mAP_m': 0.474, 'coco/bbox_mAP_l': 0.456}
FPS: 128.350449 fram/s
```

Los resultados de la evaluación incluyen una serie de métricas de **Precisión Promedio (AP)** y **Recuerdo Promedio (AR)**, calculadas para diferentes umbrales de **Intersección sobre la Unión (IoU)** y tamaños de objetos, que son comúnmente utilizados para evaluar el rendimiento de los modelos de detección de objetos.

1. **AP@[IoU=0.50:0.95 | area=all | maxDets=100] = 0.450**  
   - Esta puntuación es la precisión promedio del modelo a través de un rango de umbrales de IoU de 0.50 a 0.95, incrementados en 0.05. Un AP de 0.450 indica que el modelo tiene una precisión moderada en este rango. Esta es una métrica clave comúnmente utilizada para el conjunto de datos COCO.

2. **AP@[IoU=0.50 | area=all | maxDets=100] = 0.929**  
   - Con un umbral de IoU de 0.50, el modelo alcanza una alta precisión promedio de 0.929, lo que sugiere que detecta objetos con mucha precisión bajo un criterio de coincidencia más flexible.

3. **AP@[IoU=0.75 | area=all | maxDets=100] = 0.361**  
   - Con un umbral de IoU más estricto de 0.75, la precisión promedio del modelo cae a 0.361, lo que indica una disminución en el rendimiento bajo criterios de coincidencia más estrictos.

4. **AP@[IoU=0.50:0.95 | area=small/medium/large | maxDets=100]**  
   - Las puntuaciones de AP varían según el tamaño de los objetos. Sin embargo, el AP para objetos pequeños es -1.000, lo que podría indicar falta de datos de evaluación para objetos pequeños o un mal desempeño del modelo en la detección de objetos pequeños. Las puntuaciones de AP para objetos medianos y grandes son 0.474 y 0.456, respectivamente, lo que sugiere que el modelo detecta objetos medianos y grandes de manera relativamente mejor.

5. **AR@[IoU=0.50:0.95 | area=all | maxDets=1/10/100]**  
   - Las tasas de recuerdo promedio para diferentes valores de `maxDets` son bastante consistentes, variando de 0.515 a 0.529, lo que indica que el modelo recupera de manera confiable la mayoría de las instancias verdaderas positivas.

6. **FPS: 128.350449 frames/s**  
   - El modelo procesa imágenes a una velocidad muy alta de aproximadamente 128.35 cuadros por segundo durante la inferencia, lo que indica un gran potencial para aplicaciones en tiempo real o casi en tiempo real.

En general, el modelo tiene un excelente rendimiento a un IoU de 0.50 y un rendimiento moderado a un IoU de 0.75. Funciona mejor en la detección de objetos medianos y grandes, pero puede tener problemas para detectar objetos pequeños. Además, el modelo realiza inferencias a alta velocidad, lo que lo hace adecuado para escenarios que requieren procesamiento rápido. Si la detección de objetos pequeños es crítica en una aplicación, puede que sea necesario optimizar aún más el modelo o recopilar más datos de objetos pequeños para mejorar el rendimiento.

### Paso 6. Descargar el archivo del modelo exportado

Después de la sección **Exportar el modelo**, obtendrás los archivos del modelo en varios formatos, los cuales se almacenarán en la carpeta **ModelAssistant** por defecto. En este tutorial, el directorio almacenado es **Gesture_Detection_Swift_YOLO_192**.

:::tip
A veces, Google Colab no actualiza automáticamente el contenido de una carpeta. En este caso, es posible que necesites actualizar el directorio de archivos haciendo clic en el ícono de refresco en la esquina superior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/39.png" style={{width:500, height:'auto'}}/></div>

:::

En el directorio anterior, los archivos de modelo **.tflite** están disponibles para XIAO ESP32S3 y Grove Vision AI V2. Para el **XIAO ESP32S3 Sense**, asegúrate de seleccionar el archivo de modelo que utiliza el formato **xxx_int8.tflite**. Ningún otro formato puede ser utilizado por el XIAO ESP32S3 Sense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/37.png" style={{width:400, height:'auto'}}/></div>

Una vez que hayas encontrado los archivos del modelo, por favor descárgalos localmente en tu computadora lo antes posible, ya que Google Colab podría vaciar tu directorio de almacenamiento si permaneces inactivo durante mucho tiempo.

Con los pasos realizados aquí, hemos exportado con éxito los archivos del modelo que pueden ser compatibles con XIAO ESP32S3. Ahora, vamos a desplegar el modelo en el dispositivo.

## Subir modelos a través de SenseCraft Model Assistant

### Paso 7. Subir el modelo personalizado al XIAO ESP32S3

A continuación, llegamos a la página del **SenseCraft Model Assistant**.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process">
            <strong><span><font color={'FFFFFF'} size={"4"}>Model Assistant 🖱️</font></span></strong>
    </a>
</div>
<br></br>

Por favor, conecta el dispositivo después de seleccionar **XIAO ESP32S3** y luego selecciona **Upload Custom AI Model** en la parte inferior de la página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaos3-sscma/1.png" style={{width:1000, height:'auto'}}/></div>

Luego, necesitarás preparar el nombre del modelo, el archivo del modelo y las etiquetas. Quiero destacar aquí cómo se determina este elemento del **ID de etiqueta**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/41.png" style={{width:500, height:'auto'}}/></div>

**Si estás descargando el conjunto de datos de Roboflow directamente**

Si descargaste el conjunto de datos de Roboflow directamente, puedes ver las diferentes categorías y su orden en la página de **Health Check**. Solo debes instalar el orden ingresado allí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/42.png" style={{width:1000, height:'auto'}}/></div>


:::tip
No necesitas completar los números en **ID:Object**, solo llena directamente el nombre de la categoría. Los números y los dos puntos antes de las categorías en la imagen se agregan automáticamente.
:::

**Si estás utilizando un conjunto de datos personalizado**

Si estás utilizando un conjunto de datos personalizado, puedes ver las diferentes categorías y su orden en la página de **Health Check**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/43.png" style={{width:1000, height:'auto'}}/></div>

:::tip
No necesitas completar los números en **ID:Object**, solo llena directamente el nombre de la categoría. Los números y los dos puntos antes de las categorías en la imagen se agregan automáticamente.
:::

Luego, haz clic en **Send Model** en la esquina inferior derecha. Esto puede tardar entre 3 y 5 minutos aproximadamente. Si todo va bien, podrás ver los resultados de tu modelo en las ventanas de **Model Name** y **Preview** arriba.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/44.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades! Al haber llegado hasta aquí, has logrado entrenar y desplegar con éxito tu propio modelo.

## Protocolos comunes y aplicaciones del modelo

Durante el proceso de subida de un modelo personalizado, además de los archivos del modelo que podemos visualizar siendo subidos, también se debe transferir el firmware del dispositivo. En el firmware del dispositivo, existe un conjunto de protocolos de comunicación establecidos que especifican el formato de los resultados del modelo y lo que el usuario puede hacer con estos modelos.

Debido a limitaciones de espacio, no vamos a expandirnos sobre los detalles de estos protocolos en este wiki. Detallaremos esta sección a través de la documentación en Github. Si estás interesado en un desarrollo más profundo, por favor visita este enlace.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft Protocols</font></span></strong>
    </a>
</div>
<br></br>


## Solución de problemas

### 1. ¿Qué hacer si sigo los pasos y obtengo resultados insatisfactorios del modelo?

Si la precisión de reconocimiento de tu modelo no es satisfactoria, puedes diagnosticar y mejorar el modelo considerando los siguientes aspectos:

1. **Calidad y cantidad de datos**
   - **Problema**: El conjunto de datos podría ser demasiado pequeño o carecer de diversidad, o podría haber inexactitudes en las anotaciones.
   - **Solución**: Aumenta el tamaño y la diversidad de los datos de entrenamiento, y realiza una limpieza de datos para corregir cualquier error en las anotaciones.

2. **Proceso de entrenamiento**
   - **Problema**: El tiempo de entrenamiento podría ser insuficiente, o la tasa de aprendizaje podría no estar correctamente configurada, lo que impide que el modelo aprenda de manera efectiva.
   - **Solución**: Aumenta el número de épocas de entrenamiento, ajusta la tasa de aprendizaje y otros hiperparámetros, e implementa la detención temprana para evitar el sobreajuste.

3. **Desequilibrio de clases**
   - **Problema**: Algunas clases tienen significativamente más muestras que otras, lo que lleva a que el modelo se sesgue hacia la clase mayoritaria.
   - **Solución**: Utiliza pesos de clase, sobreamuestra las clases minoritarias o submuestrea las clases mayoritarias para equilibrar los datos.

Al analizar y aplicar mejoras específicas, puedes mejorar progresivamente la precisión de tu modelo. Recuerda usar un conjunto de validación para probar el rendimiento del modelo después de cada modificación y asegurarte de que las mejoras son efectivas.

### 2. ¿Por qué veo el mensaje **Invoke failed** en el despliegue de SenseCraft después de seguir los pasos en el Wiki?

Si encuentras el mensaje **Invoke failed**, significa que has entrenado un modelo que no cumple con los requisitos para ser utilizado en el dispositivo. Debes enfocarte en las siguientes áreas:

1. Revisa si has modificado el tamaño de la imagen en Colab. El tamaño de compresión predeterminado es **192x192**. Grove Vision AI V2 requiere que el tamaño de la imagen esté comprimido como un cuadrado. No utilices tamaños no cuadrados para la compresión. Además, no uses tamaños demasiado grandes *(se recomienda no superar los 240x240)*.

<!-- 2. El archivo del modelo para Grove Vision AI V2 debe tener el sufijo **int8_vela.tflite**. No utilices archivos de modelos en otros formatos. Esto incluye **int8.tflite**, que también no es compatible con Grove Vision AI V2. -->

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>

