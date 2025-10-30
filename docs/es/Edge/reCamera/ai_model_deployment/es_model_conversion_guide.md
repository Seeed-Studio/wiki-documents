---
description: Guía Completa del Taller de reCamera
title: Conversión del Modelo YOLO11n para reCamera
keywords:
  - Edge
  - reCamera
  - Model Conversion
image: https://files.seeedstudio.com/wiki/reCamera/013.jpg
slug: /es/model_conversion_guide
last_update:
  date: 10/28/2025
  author: Peter
---

# Conversión del Modelo YOLO11n para reCamera: Guía Completa

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Comprendiendo las Limitaciones del Hardware](#comprendiendo-las-limitaciones-del-hardware)
3. [Prerrequisitos](#prerrequisitos)
4. [Opciones de Configuración de Proveedores en la Nube](#opciones-de-configuración-de-proveedores-en-la-nube)
5. [Proceso de Conversión Paso a Paso](#proceso-de-conversión-paso-a-paso)
6. [Problemas Comunes y Solución de Problemas](#problemas-comunes-y-solución-de-problemas)
7. [Despliegue en reCamera](#despliegue-en-reCamera)
8. [Preguntas Frecuentes](#preguntas-frecuentes)

## Introducción

### Por Qué es Necesaria la Conversión de Modelos

Los dispositivos de la serie reCamera son cámaras de IA de borde alimentadas por el chip Sophgo CV181x, que utiliza una Unidad de Procesamiento de Tensores (TPU) especializada para inferencia de aprendizaje automático. A diferencia de las CPUs o GPUs de propósito general, las TPUs requieren que los modelos estén en un formato específico optimizado para su arquitectura.

**Razones Clave para la Conversión:**

1. **Optimización de Hardware**: El chip CV181x utiliza cuantización INT8 en lugar de FP32, reduciendo el tamaño del modelo en ~75% y aumentando la velocidad de inferencia de 4-8x
2. **Limitaciones de Memoria**: Los dispositivos reCamera tienen RAM limitada (256MB-512MB), requiriendo modelos comprimidos
3. **Eficiencia Energética**: Los modelos optimizados para TPU consumen significativamente menos energía que las alternativas CPU/GPU
4. **Rendimiento en Tiempo Real**: Los dispositivos de borde necesitan tiempos de inferencia sub-100ms para aplicaciones prácticas

### Acerca del Hardware de reCamera

La familia reCamera incluye varias variantes, todas construidas alrededor del SoC Sophgo CV181x:

- **reCamera Default**: Modelo básico con sensor 2MP, conectividad USB-C
- **reCamera Microscope**: Especializada para imágenes de primer plano con lentes intercambiables
- **reCamera HD POE**: Mayor resolución con soporte Power-over-Ethernet
- **reCamera Gimbal**: Gimbal motorizado con capacidades de seguimiento de objetos

**Especificaciones Técnicas:**

- **Procesador**: Sophgo CV181x (RISC-V + TPU)
- **Rendimiento de IA**: 0.5 TOPS INT8
- **Memoria**: 256MB DDR3
- **Almacenamiento**: 16MB SPI Flash + microSD
- **Formatos Soportados**: Modelos CVI (formato propietario de Sophgo)

### El Desafío de la Conversión

Los modelos YOLO11n típicamente se entrenan en PyTorch y se exportan al formato ONNX. Sin embargo, el chip CV181x de reCamera no puede ejecutar directamente modelos ONNX. El proceso de conversión involucra:

1. **Traducción de Arquitectura del Modelo**: Convertir ONNX a MLIR (Representación Intermedia Multi-Nivel)
2. **Cuantización**: Convertir pesos FP32 a INT8 manteniendo la precisión
3. **Optimización de Hardware**: Adaptar operaciones de capas para aceleración TPU
4. **Conversión de Formato**: Crear el formato final del modelo CVI

## Comprendiendo las Limitaciones del Hardware

### Limitaciones de Memoria

- **Límite de Tamaño del Modelo**: Típicamente 8-16MB para despliegue práctico
- **Resolución de Entrada**: Usualmente 640x640 para YOLO11n para equilibrar precisión y rendimiento
- **Tamaño de Lote**: Limitado a 1 debido a limitaciones de memoria

### Limitaciones de Procesamiento

- **Operaciones Soportadas**: No todas las operaciones ONNX tienen equivalentes TPU
- **Pérdida de Precisión**: La cuantización INT8 puede reducir la precisión en 1-3%
- **Velocidad de Inferencia**: El objetivo es 10-30 FPS dependiendo de la complejidad del modelo

### Por Qué los Frameworks ML Estándar No Funcionan

- **TensorFlow/PyTorch**: Diseñados para CPUs x86/ARM y GPUs NVIDIA
- **ONNX Runtime**: Carece de soporte backend CV181x
- **TensorRT**: Específico de NVIDIA, incompatible con hardware Sophgo

## Prerrequisitos

### Conocimiento Requerido

- Operaciones básicas de línea de comandos de Linux
- Comprensión de contenedores Docker
- Familiaridad con la arquitectura del modelo YOLO
- Conceptos básicos de redes para despliegue en la nube

### Software Requerido

- Docker Desktop (para desarrollo local)
- Cliente SSH (Terminal en macOS, PuTTY en Windows)
- Navegador web para gestión de proveedores en la nube
- Editor de texto para archivos de configuración

### Archivos Requeridos

- Modelo YOLO11n entrenado en formato ONNX
- 100 imágenes de calibración (representativas de tu conjunto de datos)
- 1 imagen de prueba para validación

## Opciones de Configuración de Proveedores en la Nube

Dado que el proceso de conversión requiere Linux y cadenas de herramientas específicas, los proveedores en la nube ofrecen el entorno más confiable. Aquí están las guías de configuración para los principales proveedores:

### Opción 1: DigitalOcean (Recomendado para Principiantes)

**Ventajas**: Interfaz simple, precios predecibles, buena documentación

**Pasos de Configuración:**

1. Crear cuenta de DigitalOcean en [digitalocean.com](https://www.digitalocean.com)
2. Crear nuevo Droplet con estas especificaciones:
   - **Imagen**: Ubuntu 22.04 LTS
   - **Plan**: Básico, 4GB RAM, 2 vCPUs ($24/mes, se puede eliminar después del uso)
   - **Región**: Elegir la más cercana a tu ubicación
   - **Autenticación**: Clave SSH (recomendado) o Contraseña

3. **Conexión SSH:**

   ```bash
   ssh root@your_droplet_ip
   ```

4. **Instalar Dependencias:**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**Costo Estimado**: $0.50-2.00 para el proceso de conversión (si se elimina inmediatamente después)

### Opción 2: AWS EC2

**Ventajas**: Plataforma en la nube más completa, nivel gratuito disponible

**Pasos de Configuración:**

1. Crear cuenta AWS en [aws.amazon.com](https://aws.amazon.com)
2. Lanzar instancia EC2:
   - **AMI**: Ubuntu Server 22.04 LTS
   - **Tipo de Instancia**: t3.medium (2 vCPU, 4GB RAM)
   - **Grupo de Seguridad**: Permitir SSH (puerto 22) desde tu IP

3. **Conexión SSH:**

   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

4. **Instalar Dependencias:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**Costo Estimado**: $0.10-0.50 para el proceso de conversión (precios t3.medium)

### Opción 3: Google Cloud Platform

**Ventajas**: $300 en créditos gratuitos para nuevos usuarios, excelente rendimiento

**Pasos de Configuración:**

1. Crear cuenta GCP en [cloud.google.com](https://cloud.google.com)
2. Crear instancia Compute Engine:
   - **Tipo de Máquina**: e2-standard-2 (2 vCPU, 8GB RAM)
   - **Disco de Arranque**: Ubuntu 22.04 LTS, 20GB
   - **Firewall**: Permitir tráfico HTTP/HTTPS

3. **SSH vía Navegador** (terminal integrada) o usar gcloud CLI

4. **Instalar Dependencias:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   ```

**Costo Estimado**: Gratis con créditos, de lo contrario ~$0.20-0.60 para conversión

### Opción 4: Microsoft Azure

**Ventajas**: Buena integración con el ecosistema Windows, descuentos estudiantiles

**Pasos de Configuración:**

1. Crear cuenta Azure en [azure.microsoft.com](https://azure.microsoft.com)
2. Crear Máquina Virtual:
   - **Imagen**: Ubuntu Server 22.04 LTS
   - **Tamaño**: Standard_B2s (2 vCPUs, 4GB RAM)
   - **Autenticación**: Clave pública SSH

3. **Conexión SSH:**

   ```bash
   ssh azureuser@your-vm-ip
   ```

4. **Instalar Dependencias:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker azureuser
   ```

**Costo Estimado**: ~$0.30-0.80 para el proceso de conversión

### Opción 5: Alibaba Cloud

**Ventajas**: Fuerte presencia en Asia, precios competitivos

**Pasos de Configuración:**

1. Crear cuenta en [alibabacloud.com](https://www.alibabacloud.com)
2. Crear instancia ECS:
   - **Imagen**: Ubuntu 22.04 64-bit
   - **Tipo de Instancia**: ecs.t6-c1m2.large (2 vCPU, 4GB RAM)
   - **Grupo de Seguridad**: Permitir SSH (22/22)

3. **Conexión SSH:**

   ```bash
   ssh root@your-ecs-ip
   ```

4. **Instalar Dependencias:**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**Costo Estimado**: ~$0.20-0.50 para el proceso de conversión

### Opción 6: Tencent Cloud

**Ventajas**: Bueno para usuarios en China, precios asequibles

**Pasos de Configuración:**

1. Crear cuenta en [intl.cloud.tencent.com](https://intl.cloud.tencent.com)
2. Crear instancia CVM:
   - **Imagen**: Ubuntu Server 22.04 LTS 64-bit
   - **Modelo**: S5.MEDIUM4 (2 vCPU, 4GB RAM)
   - **Grupo de Seguridad**: Permitir SSH (puerto 22)

3. **Conexión SSH:**

   ```bash
   ssh ubuntu@your-cvm-ip
   ```

4. **Instalar Dependencias:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**Costo Estimado**: ~$0.15-0.40 para el proceso de conversión

## Proceso de Conversión Paso a Paso

### Paso 1: Preparar tu Entorno

1. **Conectar a tu instancia en la nube vía SSH**

2. **Configurar entorno TPU-MLIR:**

   ```bash
   # Pull the official TPU-MLIR Docker image
   docker pull sophgo/tpuc_dev:v3.1

   # Create working directory
   mkdir ~/yolo_conversion && cd ~/yolo_conversion

   # Start Docker container
   docker run --privileged --name tpu_converter -v $PWD:/workspace -it sophgo/tpuc_dev:v3.1
   ```

3. **Instalar herramientas TPU-MLIR dentro del contenedor:**

   ```bash
   pip install tpu_mlir[all]==1.7

   # Clone and build TPU-MLIR
   git clone -b v1.7 --depth 1 https://github.com/sophgo/tpu-mlir.git
   cd tpu-mlir
   source ./envsetup.sh
   ./build.sh
   ```

### Paso 2: Subir tus Archivos de Modelo

**Desde tu máquina local, subir archivos a la instancia en la nube:**

```bash
# Upload ONNX model
scp your_model.onnx user@your-cloud-ip:~/yolo_conversion/

# Upload calibration images (create zip first)
zip -r calibration_images.zip /path/to/calibration/images/
scp calibration_images.zip user@your-cloud-ip:~/yolo_conversion/

# Upload test image
scp test_image.jpg user@your-cloud-ip:~/yolo_conversion/
```

### Paso 3: Preparar Estructura de Directorios

**Dentro de tu instancia en la nube:**

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

### Paso 4: Ingresar al Contenedor Docker y Comenzar la Conversión

```bash
# Copy model folder into Docker container
docker cp model_yolo11n tpu_converter:/workspace/tpu-mlir/

# Enter Docker container
docker exec -it tpu_converter /bin/bash

# Navigate to workspace
cd /workspace/tpu-mlir/model_yolo11n/Workspace
```

### Paso 5: Pipeline de Conversión del Modelo

**5.1: Degradación de Versión ONNX**

```bash
python /workspace/tpu-mlir/downgrade_onnx.py yolo11n.onnx yolo11n_v8.onnx
```

**5.2: Convertir ONNX a MLIR**

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

**Explicaciones de Parámetros:**

- **`--model_name`**: Identificador para tu modelo en el pipeline de conversión
  - *Propósito*: Crea nomenclatura consistente a lo largo del proceso
  - *Se puede cambiar*: Sí, usa nombres descriptivos como "traffic_detection" o "person_counter"
  - *Efecto*: Solo afecta la nomenclatura interna, sin impacto en el rendimiento

- **`--model_def`**: Ruta a tu archivo de modelo ONNX
  - *Propósito*: Especifica qué modelo convertir
  - *Se puede cambiar*: Sí, debe coincidir con el nombre real de tu archivo ONNX
  - *Efecto*: Diferentes modelos producirán diferentes resultados

- **`--input_shapes`**: Define las dimensiones del tensor de entrada `[batch, channels, height, width]`
  - *Propósito*: Indica al convertidor el formato de imagen de entrada esperado
  - *Valor estándar*: `[[1,3,640,640]]` para YOLO11n
  - *Se puede cambiar*: ⚠️ **Precaución** - Debe coincidir con tu resolución de entrenamiento
  - *Efectos de los cambios*:
    - Menor (ej., `320x320`): Inferencia más rápida, menor precisión
    - Mayor (ej., `1280x1280`): Mayor precisión, mucho más lento, puede exceder límites de memoria
    - Relación de aspecto diferente: Distorsionará imágenes, resultados pobres

- **`--mean`**: Valores medios de normalización de píxeles para canales RGB
  - *Propósito*: Centra los valores de píxeles alrededor de cero (preprocesamiento estándar)
  - *Valor estándar*: `"0.0,0.0,0.0"` (sin sustracción de media)
  - *Se puede cambiar*: Solo si tu modelo fue entrenado con normalización diferente
  - *Alternativas comunes*:
    - ImageNet: `"123.675,116.28,103.53"` (si el modelo usa preprocesamiento ImageNet)
    - Personalizado: Coincide exactamente con tu preprocesamiento de entrenamiento

- **`--scale`**: Factores de escala de normalización de píxeles
  - *Propósito*: Escala valores de píxeles del rango 0-255 al rango 0-1
  - *Valor estándar*: `"0.0039216,0.0039216,0.0039216"` (equivalente a 1/255)
  - *Se puede cambiar*: Solo si tu modelo espera un rango de entrada diferente
  - *Efectos de los cambios*:
    - Valores de escala incorrectos causarán falla completa del modelo
    - Debe coincidir exactamente con lo que tu modelo fue entrenado

- **`--keep_aspect_ratio`**: Mantiene las proporciones de imagen durante el redimensionamiento
  - *Propósito*: Previene distorsión de imagen rellenando en lugar de estirar
  - *Se puede cambiar*: Sí, usa `--no_keep_aspect_ratio` para deshabilitar
  - *Efectos*:
    - Habilitado (predeterminado): Mejor precisión, relleno negro en imágenes
    - Deshabilitado: Ligeramente más rápido, pero las imágenes pueden distorsionarse

- **`--pixel_format`**: Ordenamiento de canales de color
  - *Propósito*: Especifica si la entrada usa orden de color RGB o BGR
  - *Valor estándar*: `rgb` para la mayoría de modelos modernos
  - *Se puede cambiar*: Sí, a `bgr` si tu modelo lo espera
  - *Efectos de configuración incorrecta*: Los colores se intercambiarán (rojo aparece azul, etc.)

- **`--output_names`**: Especifica qué capas del modelo usar como salidas
  - *Propósito*: Indica al convertidor qué capas contienen resultados de detección
  - *Estándar para YOLO11n*: Las 6 capas de salida mostradas (3 escalas × 2 cabezas cada una)
  - *Se puede cambiar*: ⚠️ **Solo usuarios avanzados** - requiere conocimiento profundo del modelo
  - *Efectos*: Salidas incorrectas impedirán que funcione la detección

- **`--test_input`**: Ruta a imagen de validación
  - *Propósito*: Prueba la precisión de conversión comparando resultados antes/después
  - *Se puede cambiar*: Sí, usa cualquier imagen representativa de tu conjunto de datos
  - *Recomendado*: Usa imagen similar a tu escenario de despliegue

- **`--test_result`**: Archivo de salida para datos de validación
  - *Propósito*: Almacena resultados de referencia para comparación posterior
  - *Se puede cambiar*: Sí, cualquier nombre de archivo que termine en `.npz`
  - *Efecto*: Solo afecta la nomenclatura de archivos

- **`--mlir`**: Nombre del archivo MLIR de salida
  - *Propósito*: Representación intermedia para el siguiente paso de conversión
  - *Se puede cambiar*: Sí, pero mantén la extensión `.mlir`
  - *Efecto*: Solo afecta la nomenclatura de archivos

**5.3: Generar Tabla de Calibración**

```bash
run_calibration \
yolo11n.mlir \
--dataset ../COCO2017 \
--input_num 100 \
-o yolo11n_calib_table
```

**Explicaciones de Parámetros:**

- **`yolo11n.mlir`**: Modelo MLIR de entrada del paso anterior
  - *Propósito*: El archivo de modelo que necesita datos de calibración
  - *Se puede cambiar*: Debe coincidir con el nombre de archivo de salida del paso 5.2
  - *Efecto*: Diferentes modelos producirán diferentes tablas de calibración

- **`--dataset`**: Ruta al directorio de imágenes de calibración
  - *Propósito*: Proporciona imágenes representativas para analizar rangos de activación
  - *Se puede cambiar*: Sí, pero debe contener imágenes similares al escenario de despliegue
  - *Requisitos*: Las imágenes deben estar en formato `.jpg`, `.png`, o `.bmp`
  - *Impacto en calidad*: Imágenes más diversas y representativas = mejor calibración

- **`--input_num`**: Número de imágenes de calibración a usar
  - *Propósito*: Determina cuántas imágenes se procesan para análisis estadístico
  - *Valor estándar*: `100` (buen equilibrio de precisión vs. tiempo de procesamiento)
  - *Se puede cambiar*: Sí, dentro de límites prácticos
  - *Efectos de los cambios*:
    - **Menos imágenes (25-50)**: Calibración más rápida, cuantización potencialmente menos precisa
    - **Más imágenes (200-500)**: Mejor precisión de calibración, tiempo de procesamiento mucho mayor
    - **Muy pocas (&lt;10)**: Cuantización pobre, pérdida significativa de precisión
    - **Demasiadas (>1000)**: Rendimientos decrecientes, tiempo de procesamiento muy largo

- **`-o` (archivo de salida)**: Nombre para el archivo de tabla de calibración
  - *Propósito*: Almacena datos estadísticos sobre activaciones de capas para cuantización
  - *Se puede cambiar*: Sí, cualquier nombre de archivo (no se necesita extensión)
  - *Efecto*: Solo afecta el nombre del archivo, el contenido es el mismo

**Lo que Sucede Durante la Calibración:**

1. **Análisis Estadístico**: Cada imagen de calibración se procesa a través del modelo
2. **Mapeo de Activaciones**: La herramienta registra el rango de valores que produce cada capa
3. **Planificación de Cuantización**: Determina cómo mapear valores FP32 a INT8 eficientemente
4. **Preservación de Precisión**: Encuentra factores de escala óptimos para minimizar pérdida de precisión

**Salida Esperada**: Este proceso tomará 5-15 minutos y debería mostrar progreso como:

```
input_num = 100, ref = 100
real input_num = 100
activation_collect_and_calc_th for op: /model.23/cv3.2/cv3.2.2/Conv_output_0_Conv
[Progress bar showing completion]
auto tune end, run time: XXX seconds
```

**5.4: Compilar Modelo INT8 Final**

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

**Explicaciones de Parámetros:**

- **`--mlir`**: Archivo de modelo MLIR de entrada
  - *Propósito*: La representación del modelo a ser compilada para TPU
  - *Se puede cambiar*: Debe coincidir con la salida del paso 5.2
  - *Efecto*: Diferentes archivos MLIR producirán diferentes modelos finales

- **`--quantize`**: Nivel de precisión de cuantización
  - *Propósito*: Determina la precisión numérica para pesos y activaciones del modelo
  - *Valor estándar*: `INT8` para reCamera (requerido para TPU CV181x)
  - *Se puede cambiar*: Opciones limitadas en CV181x
  - *Opciones disponibles*:
    - `INT8`: Requerido para reCamera, 4x más pequeño, 4-8x más rápido
    - `F16`: Mayor precisión, tamaño mayor, puede no caber en memoria
    - `F32`: Precisión original, demasiado grande para despliegue en reCamera

- **`--quant_input`**: Cuantiza el preprocesamiento de entrada
  - *Propósito*: Mueve el escalado/normalización de entrada al TPU para eficiencia
  - *Se puede cambiar*: Sí, omite esta bandera para mantener el procesamiento de entrada en CPU
  - *Efectos*:
    - **Habilitado** (recomendado): Inferencia más rápida, mejor utilización del TPU
    - **Deshabilitado**: Ligeramente más lento, pero formatos de entrada más flexibles

- **`--processor`**: Especificación de hardware objetivo
  - *Propósito*: Optimiza la generación de código para arquitectura de chip específica
  - *Valor estándar*: `cv181x` para todos los modelos reCamera
  - *Se puede cambiar*: ⚠️ **Nunca cambiar** - otros valores no funcionarán en reCamera
  - *Efecto*: Configuración incorrecta de procesador causará falla de despliegue

- **`--calibration_table`**: Datos de referencia de cuantización
  - *Propósito*: Proporciona datos estadísticos para conversión óptima a INT8
  - *Se puede cambiar*: Debe coincidir con el nombre de archivo de salida del paso 5.3
  - *Efecto*: Diferentes datos de calibración afectan la precisión del modelo

- **`--test_input`**: Imagen de validación para prueba de precisión
  - *Propósito*: Verifica la precisión del modelo después de la cuantización
  - *Se puede cambiar*: Sí, debería representar el caso de uso típico
  - *Recomendación*: Usa la misma imagen que en el paso 5.2 para consistencia

- **`--test_reference`**: Salida de referencia para comparación
  - *Propósito*: Compara la salida del modelo cuantizado con resultados FP32 originales
  - *Se puede cambiar*: Debe coincidir con el nombre de archivo de salida del paso 5.2
  - *Efecto*: Usado solo para validación, no afecta el modelo final

- **`--customization_format`**: Optimización de diseño de datos de entrada
  - *Propósito*: Optimiza el diseño de memoria para procesamiento TPU
  - *Valor estándar*: `RGB_PACKED` para datos de imagen
  - *Se puede cambiar*: Solo usuarios avanzados
  - *Efectos*:
    - `RGB_PACKED`: Optimizado para imágenes RGB (recomendado)
    - `NCHW`: Formato de tensor estándar, puede ser más lento

- **`--fuse_preprocess`**: Integra el preprocesamiento en el modelo
  - *Propósito*: Combina el redimensionamiento/normalización de imágenes con la inferencia
  - *Se puede cambiar*: Sí, omite la bandera para manejar el preprocesamiento por separado
  - *Efectos*:
    - **Habilitado** (recomendado): Despliegue de un solo paso, mejor rendimiento
    - **Deshabilitado**: Más flexibilidad, pero requiere preprocesamiento externo

- **`--aligned_input`**: Optimización de alineación de memoria
  - *Propósito*: Asegura patrones de acceso a memoria óptimos para TPU
  - *Se puede cambiar*: Sí, pero se recomienda mantener para el rendimiento
  - *Efectos*:
    - **Habilitado**: Mejor utilización del ancho de banda de memoria
    - **Deshabilitado**: Puede ser ligeramente más lento

- **`--model`**: Nombre de archivo de salida para el modelo final convertido
  - *Propósito*: Crea el archivo `.cvimodel` para el despliegue en reCamera
  - *Se puede cambiar*: Sí, usa nombres descriptivos como `person_detection.cvimodel`
  - *Requisito*: Debe terminar con la extensión `.cvimodel`
  - *Efecto*: Solo afecta el nombre del archivo

**Lo que Sucede Durante la Compilación:**

1. **Conversión de Capas**: Cada capa de la red neuronal se convierte a instrucciones TPU
2. **Optimización de Memoria**: Los pesos del modelo se organizan para acceso eficiente a TPU
3. **Aplicación de Cuantización**: Los pesos FP32 se convierten a INT8 usando datos de calibración
4. **Mapeo de Hardware**: Las operaciones se mapean a unidades funcionales específicas de TPU
5. **Validación**: El modelo final se prueba contra salidas de referencia

**Salida Esperada**: La conversión debe completarse con resultados de validación mostrando puntuaciones de similitud >99%:

```
npz compare PASSED
230 compared
230 passed
min_similarity = (0.9999997615814209, 0.9999984392787142, 116.13544464111328)
```

**Expectativas de Rendimiento Después de la Conversión:**

- **Tamaño del Modelo**: 3-8MB (comparado con 20-40MB del ONNX original)
- **Velocidad de Inferencia**: 15-30 FPS en reCamera
- **Precisión**: 97-99% del rendimiento del modelo original
- **Uso de Memoria**: ~10-20MB RAM durante la inferencia

### Paso 6: Descargar Modelo Convertido

**6.1: Salir de Docker y copiar archivo al host**

```bash
# Exit Docker container
exit

# Copy converted model from container to host
docker cp tpu_converter:/workspace/tpu-mlir/model_yolo11n/Workspace/yolo11n_sym_int8.cvimodel ./

# Verify file exists and check size (should be 2-10MB)
ls -lh yolo11n_sym_int8.cvimodel
```

**6.2: Descargar a tu máquina local**

```bash
# From your local machine
scp user@your-cloud-ip:~/yolo_conversion/yolo11n_sym_int8.cvimodel ~/Downloads/
```

### Paso 7: Limpiar Recursos de la Nube

**¡No olvides terminar tu instancia de la nube para evitar cargos continuos!**

- **DigitalOcean**: Destruir Droplet desde el panel de control
- **AWS**: Terminar instancia EC2
- **GCP**: Eliminar instancia de Compute Engine
- **Azure**: Eliminar Máquina Virtual
- **Alibaba/Tencent**: Liberar instancia ECS/CVM

## Problemas Comunes y Solución de Problemas

### Problema 1: Errores de "Archivo no encontrado" durante la conversión

**Síntomas**:

```
../image/test.jpg doesn't existed !!!
```

**Solución**:

```bash
# Check if file exists and has correct extension
ls -la ../image/
# If file has .img extension, rename it
mv ../image/test.img ../image/test.jpg
```

### Problema 2: "Directorio no vacío" al mover archivos

**Síntomas**:

```
mv: cannot move 'Download/model_yolo11n' to 'tpu-mlir/model_yolo11n': Directory not empty
```

**Solución**:

```bash
# Remove existing directory and replace
rm -rf tpu-mlir/model_yolo11n
mv Download/model_yolo11n tpu-mlir/
```

### Problema 3: La calibración falla con "No hay entradas"

**Síntomas**:

```
RuntimeError: There is no inputs
```

**Solución**:

```bash
# Ensure calibration images are in correct format (.jpg, .png)
cd ../COCO2017/
for file in *.img; do
    mv "$file" "${file%.img}.jpg"
done
```

### Problema 4: Errores de permisos de Docker

**Síntomas**:

```
permission denied while trying to connect to the Docker daemon socket
```

**Solución**:

```bash
# Add user to docker group
sudo usermod -aG docker $USER
# Log out and log back in, or run:
newgrp docker
```

### Problema 5: Errores de memoria insuficiente

**Síntomas**:

```
CUDA out of memory
```

**Solución**:

- Actualizar a una instancia de nube más grande (8GB+ RAM)
- Reducir el tamaño del lote en los comandos de conversión
- Usar menos imágenes de calibración (mínimo 50)

### Problema 6: La validación del modelo falla

**Síntomas**:

```
npz compare FAILED
```

**Solución**:

- Verificar si la imagen de prueba es representativa de los datos de entrenamiento
- Verificar que el modelo ONNX sea la versión correcta
- Probar con una imagen de prueba diferente

### Problema 7: Problemas de conexión SSH

**Síntomas**:

```
Connection refused
ssh: connect to host [IP] port 22: Connection refused
```

**Solución**:

- Verificar que los grupos de seguridad del proveedor de nube permitan SSH (puerto 22)
- Verificar que la instancia esté ejecutándose
- Probar con una clave SSH diferente o autenticación por contraseña

## Despliegue en reCamera

### Paso 1: Conectar reCamera

1. Conecta reCamera a tu computadora vía cable USB-C
2. Accede a la interfaz web en `http://192.168.42.1`
3. Inicia sesión con usuario: `root`, contraseña: `recamera.1`

### Paso 2: Subir Modelo

1. Navega a la sección Workspace
2. Haz clic en el nodo del modelo en el editor de flujo
3. Haz clic en el botón "Upload"
4. Selecciona tu archivo `.cvimodel`
5. Configura los parámetros del modelo:
   - **Model Name**: `yolo11n_detection`
   - **Classes**: Ingresa los nombres de tus clases (separados por comas)
   - **Confidence Threshold**: 0.5 (ajusta según sea necesario)
   - **IoU Threshold**: 0.45

### Paso 3: Desplegar y Probar

1. Haz clic en el botón "Deploy"
2. Espera el mensaje "Successfully deployed"
3. Navega al Dashboard para vista previa en vivo
4. Ajusta los umbrales de confianza/IoU según sea necesario

## Preguntas Frecuentes

### P: ¿Cuánto tiempo toma el proceso de conversión?

**R**: Típicamente 20-45 minutos dependiendo de la complejidad del modelo y el rendimiento de la instancia de nube. El paso de calibración suele ser el más largo.

### P: ¿Puedo usar una versión diferente de YOLO?

**R**: Esta guía es específica para YOLO11n. Otras versiones (YOLOv8, YOLOv9) requieren nombres de capas de salida diferentes y pueden tener problemas de compatibilidad.

### P: ¿Qué pasa si la precisión de mi modelo baja significativamente después de la conversión?

**R**: Cierta pérdida de precisión (1-3%) es normal debido a la cuantización INT8. Si la pérdida es >5%, intenta:

- Usar imágenes de calibración más representativas
- Aumentar el conteo de imágenes de calibración a 200-500
- Ajustar los umbrales de confianza durante el despliegue

### P: ¿Puedo convertir modelos entrenados en conjuntos de datos personalizados?

**R**: Sí, pero asegúrate de que tus imágenes de calibración sean representativas de tu conjunto de datos personalizado. Las 100 imágenes de calibración deben cubrir la variedad de escenarios que tu modelo encontrará.

### P: ¿Cuál es el tamaño máximo de modelo soportado?

**R**: Los límites de memoria de reCamera limitan el tamaño práctico del modelo a ~8-16MB. YOLO11n típicamente produce modelos de 3-8MB después de la conversión.

### P: ¿Necesito mantener la instancia de nube ejecutándose?

**R**: No, puedes terminar la instancia inmediatamente después de descargar tu modelo convertido. La conversión es un proceso de una sola vez.

### P: ¿Puedo convertir múltiples modelos en lote?

**R**: Sí, puedes mantener el mismo entorno y convertir múltiples modelos repitiendo los pasos 5-6 con diferentes archivos de modelo.

### P: ¿Qué pasa si encuentro un error no cubierto aquí?

**R**:

1. Revisa los logs del contenedor Docker: `docker logs tpu_converter`
2. Verifica que tu modelo ONNX se cargue correctamente en un entorno Python primero
3. Prueba con un modelo de prueba más simple para aislar el problema
4. Contacta el soporte de Seeed Studio con mensajes de error específicos

### P: ¿Hay alternativas al despliegue en la nube?

**R**: Sí, puedes:

- Usar Docker Desktop localmente en Mac/Windows (requiere RAM significativa)
- Configurar WSL2 en Windows con Docker
- Usar una máquina Linux local o VM

Sin embargo, el despliegue en la nube es recomendado para confiabilidad y rendimiento.

---

## Conclusión

Convertir modelos YOLO11n para el despliegue en reCamera requiere entender tanto las limitaciones del hardware como la cadena de herramientas TPU-MLIR. Aunque el proceso tiene varios pasos, seguir esta guía debería resultar en un modelo convertido exitosamente listo para el despliegue de IA en el borde.

La clave del éxito es:

1. **Preparación**: Tener todos los archivos en el formato y estructura correctos
2. **Entorno**: Usar un entorno Linux configurado apropiadamente (nube recomendada)
3. **Paciencia**: Permitir tiempo suficiente para los pasos de calibración y conversión
4. **Validación**: Probar tu modelo convertido exhaustivamente antes del despliegue

Para soporte adicional, consulta la [wiki de SeeedStudio ReCamera](https://wiki.seeedstudio.com/es/recamera_getting_started/) o la [documentación de TPU-MLIR](https://github.com/sophgo/tpu-mlir).


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
