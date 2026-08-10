---
description:  exportar modelo en línea
title:  exportar modelo en línea
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png
slug: /recamera_model_export_online
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: yylin
createdAt: '2026-07-19'
updatedAt: '2026-07-19'
url: https://wiki.seeedstudio.com/es/Edge/reCamera/reCamera_Basic/ai_model_deployment/recamera_model_export_online/
---

# Convertir y desplegar un modelo de detección YOLO personalizado en la interfaz web de reCamera

La interfaz de gestión web de reCamera proporciona una funcionalidad integrada de conversión de modelos basada en la nube. Después de entrenar o ajustar un modelo de detección YOLO, los usuarios pueden cargar y exportar directamente el modelo ONNX sin necesidad de configurar localmente TPU-MLIR, Docker u otros entornos de conversión de modelos.

Después de cargarlo, el sistema convertirá automáticamente el modelo ONNX en uno que pueda ejecutarse en reCamera. Formato `.cvimodel`. Tras la conversión exitosa del modelo, este se puede aplicar directamente al dispositivo actual y los resultados de detección en tiempo real se pueden ver a través de la página del Panel de control.

## Descripción general de la función

A través de la interfaz web de reCamera se pueden realizar las siguientes operaciones:

- Cargar el modelo YOLO Detect ONNX entrenado o ajustado;
- Utilizar los servicios en la nube de Seeed para convertir modelos automáticamente;
- Convertir modelos ONNX a versiones compatibles con reCamera. Formato `.cvimodel`;
- Descargar el archivo de modelo convertido;
- Aplicar el modelo directamente a la reCamera actual;
- Previsualizar los resultados de detección de objetivos en tiempo real en el Panel de control.

En todo el proceso no se requiere que los usuarios instalen una cadena de herramientas de conversión de modelos localmente, lo que lo hace adecuado para validar y desplegar rápidamente modelos personalizados de detección de objetos.

## Alcance de compatibilidad

Esta función está diseñada actualmente principalmente para modelos de detección de objetos de la serie YOLO (Detect).

Por favor, confirme antes de cargar:

- El modelo se ha exportado en formato ONNX;
- Los modelos ONNX utilizan dimensiones de entrada fijas;
- El modelo se puede ejecutar normalmente en el entorno local de ONNX Runtime.

> Esta función se utiliza principalmente para el modelo YOLO Detect. Los modelos de clasificación, segmentación de instancias, estimación de pose y detección de cajas delimitadoras rotadas pueden utilizar estructuras de salida diferentes y es posible que no se puedan desplegar directamente mediante el proceso de conversión actual.

---

## Preparar el modelo ONNX

Primero, entrena o ajusta el modelo YOLO utilizando Ultralytics u otro framework de entrenamiento y luego exporta el modelo en formato ONNX.

Tomando Ultralytics YOLO como ejemplo:

```bash
yolo export \
  model=runs/detect/train/weights/best.pt \
  format=onnx \
  imgsz=640 \
  opset=17 \
  simplify=True
```

:::note
tpu-mlir solo admite una versión máxima de opset de 17. Es posible que los modelos ONNX con opset > 17 no puedan completar la conversión en línea.
:::

Después de exportar, obtendrás un archivo similar al siguiente:

```text
best.onnx
```

Se recomienda comprobar el modelo ONNX antes de cargarlo:

```bash
pip install model-inspect-tool

model-inspect 
```

Una vez que el modelo pase la comprobación de ONNX, se puede cargar en reCamera.

---

## Paso 1: Abrir la página de conversión de modelos

Accede a la interfaz de gestión web de reCamera utilizando un navegador.

Encuéntrala en el área de gestión de dispositivos en la parte izquierda:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image.png" /></div>

Después de entrar en la página de **Model Conversion**, podrás ver los modelos que se han cargado o convertido.

Los modelos de la página suelen proporcionar las siguientes operaciones:

- `Download`Descargar el modelo convertido;
- `Use`Establecer el modelo como el modelo actualmente en uso;
- Botón de eliminación: elimina el registro de modelo correspondiente.

---

## Paso 2: Cargar el modelo ONNX

Haz clic en el botón **Upload Model** en la página y, en la ventana de selección de archivos, selecciona el modelo YOLO ONNX que deseas convertir.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-1.png" /></div>

Después de seleccionar el archivo, haz clic en "Open" y el modelo comenzará a cargarse.

---

## Paso 3: Esperar a que el modelo en la nube se convierta

Después de que el modelo se cargue, reCamera llamará al servicio de conversión de modelos basado en la nube proporcionado por Seeed para convertir el modelo ONNX a un formato que reCamera pueda ejecutar. Formato `.cvimodel`.

Durante el proceso de conversión, la tarjeta del modelo mostrará el progreso de conversión actual.

Durante la conversión, puedes ver:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-2.png" /></div>

- Nombre del modelo;
- Hora de carga;
- Progreso de conversión actual;
- Botón `Stop Model Conversion`.

Asegúrate de que reCamera tenga una conexión de red estable hasta que la conversión del modelo se complete.

> La carga y conversión de modelos requiere acceso a servicios en la nube. Si el dispositivo no puede acceder a Internet o la conexión de red es inestable, la conversión del modelo puede fallar o quedarse atascada en cierto punto de progreso durante un período prolongado.

---

## Paso 4: Confirmar que la conversión del modelo se ha completado

Después de una conversión exitosa, aparecerá un marcador verde de finalización en la esquina superior derecha del modelo, junto con los siguientes botones:

```text
Download
Use
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-3.png" /></div>

Esto indica que la nube ha completado la conversión de ONNX a... `.cvimodel`.

### Descargar modelo

Haz clic en **Download** para descargar el modelo convertido a tu ordenador local para guardarlo.

El archivo descargado se puede utilizar para:

- Copia de seguridad del modelo;
- Personalizar la aplicación de reCamera;
- Nodos de modelo de Node-RED;
- Programa de inferencia en C/C++;
- Despliegue posterior sin conexión.

### Usar el modelo

Al hacer clic en **Use** se establecerá este modelo como el modelo de inferencia que utiliza actualmente la aplicación reCamera.

Después de aplicar el modelo, el nombre del modelo actual se sincronizará con el nodo de modelo correspondiente o la página de vista previa.

> Si en la lista existen varios modelos con el mismo nombre, puedes determinar la versión que necesitas utilizar en función de la hora de carga. Para facilitar la gestión, se recomienda utilizar nombres de archivo con información de versión antes de cargarlos, como... `person_detect_v1.onnx`。

---

## Paso 5: Desplegar el flujo actual de Node-RED

Después de seleccionar un modelo, debes desplegar el flujo actual de Node-RED para que la configuración del modelo sea oficialmente efectiva.

Haz clic en el botón **Deploy** en la esquina superior derecha de la página.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-4.png" /></div>

Una vez completado el despliegue, los nodos de la cámara, los nodos de modelo y la página del Panel de control se ejecutarán de acuerdo con la nueva configuración.

> Solo hacer clic en `Use` puede ser simplemente una actualización de la selección del modelo. Para garantizar que el cambio de modelo surta pleno efecto, se recomienda hacer clic de nuevo en el botón de despliegue después de seleccionar el modelo.

---

## Paso 6: Abrir la página de vista previa del Panel de control

Una vez completado el despliegue, haz clic en el botón **Dashboard** en la esquina superior derecha de la página.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/recamera-open-dashboard.png" /></div>

El navegador te llevará entonces a la página de vista previa del modelo y control del dispositivo.

En el área de vista previa, puedes ver:

- El nombre del modelo que se está utilizando actualmente;
- Umbral de IoU;
- Umbral de confianza;
- Flujo de vídeo en directo de la cámara;
- Cajas delimitadoras de detección de objetos;
- Nombre de la categoría detectada;
- Nivel de confianza de la detección.

Por ejemplo, cuando se detecta una persona, la pantalla mostrará:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-5.png" /></div>

donde:

- `person` indica la categoría de detección;
- `91` indica un nivel de confianza de detección de aproximadamente el 91%.

---

## Preguntas frecuentes

### El modelo permanece atascado en el proceso de conversión durante un período prolongado

Por favor, comprueba:

1. ¿Puede reCamera acceder a Internet con normalidad?
2. ¿Se cargó el archivo ONNX completamente?
3. ¿Es el archivo de modelo demasiado grande?
4. ¿Se puede cargar el modelo ONNX con normalidad?

Como alternativa, puedes detener la tarea de conversión actual y volver a cargar.

### Falló la conversión del modelo

Las causas comunes incluyen:

- El modelo ONNX contiene operadores que actualmente no son compatibles;
- El modelo utiliza dimensiones de entrada dinámicas;
- La estructura de salida del modelo se ha personalizado.
- La versión ONNX exportada u Opset es incompatible;
- El archivo de modelo está dañado.

Se recomienda volver a exportar el modelo y dar prioridad al uso de dimensiones de entrada fijas:

```bash
yolo export \
  model=best.pt \
  format=onnx \
  imgsz=640 \
  opset=17 \
  simplify=True \
  dynamic=False
```

### El resultado de la vista previa no cambió después de hacer clic en Use

Por favor, confirma:

1. Se ha hecho clic en el botón del modelo. `Use`;
2. Se ha hecho clic en el botón de despliegue en la esquina superior derecha;
3. ¿El Current Model que se muestra en el Panel de control es el modelo objetivo?
4. ¿Se están ejecutando los nodos de modelo?
5. ¿Están correctamente conectados el nodo de la cámara y el nodo de modelo?

Si es necesario, se puede volver a desplegar el flujo o actualizar la página del Panel de control.

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
