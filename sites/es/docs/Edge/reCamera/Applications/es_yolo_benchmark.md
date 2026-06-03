---
title: Benchmarking de YOLO11n en reCamera
description: Este caso de aplicación demuestra el rendimiento extremo y los datos medidos al ejecutar el último modelo YOLO11n en la plataforma de computación perimetral reCamera.
keywords:
  - reCamera
  - Edge AI
  - YOLO11
  - Benchmark
slug: /recamera_benchmarking
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif
sidebar_position: 1
last_update:
  date: 2026-06-02T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/es/recamera_benchmarking/
---

# Benchmarking perimetral de YOLO11n en reCamera

## 1. Introducción

Con la profundización continua de los escenarios de IA en el borde, cómo ejecutar la última generación de modelos de visión bajo un consumo de energía extremadamente limitado se ha convertido en la demanda central de los desarrolladores. Este WIKI demostrará de forma contundente el rendimiento de referencia (Benchmark) de **reCamera** al desplegar el modelo **YOLO11n**.
Aquí verás cómo reCamera ejecuta sin problemas los modelos de detección de objetos y segmentación de instancias YOLO11n con solo **1.5W** de consumo de energía.

---

## Preparación de hardware

Una reCamera
Un PC

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

---

## 2. Visualización del efecto en tiempo real

Ver para creer. Ejecutamos localmente los modelos de detección y segmentación YOLO11n en la reCamera y utilizamos el protocolo UDP para transmitir el vídeo procesado y los datos de cómputo al PC en tiempo real.

La información OSD en la esquina superior izquierda de la pantalla muestra en tiempo real el desglose riguroso del tiempo de consumo de hardware: tiempo de **Pre-proceso**, **Inferencia**, **Post-proceso** y **Total**.

### Transmisión en tiempo real de segmentación de instancias YOLO11n
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif" alt="Demostración de segmentación YOLO11n" />
</div>
<br/>

### Transmisión en tiempo real de detección de objetos YOLO11n
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-detect.gif" alt="Demostración de detección YOLO11n" />
</div>

:::note Descripción de la prueba
Las animaciones anteriores muestran grabaciones reales de pantalla. Los resultados de la prueba se ven afectados por la resolución de entrada del modelo (640x640) y la precisión de cuantificación (INT8), y son solo para referencia de despliegue de ingeniería.
:::

---


## 3. Resultados principales del Benchmark

Bajo pruebas de esfuerzo de carga completa a largo plazo, reCamera demostró una "relación rendimiento-potencia" extremadamente excelente. A continuación se muestra el rendimiento extremo del modelo cuantizado YOLO11n INT8 en la NPU:

| Tipo de tarea del modelo | Resolución de entrada | Formato de cuantificación | Tasa de fotogramas máxima (FPS) | Latencia de extremo a extremo por fotograma | Potencia media de funcionamiento |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **YOLO11n Detección de objetos** | 640 x 640 | INT8 | **20 FPS** | **50 ms** | **1.5 W** |
| **YOLO11n Segmentación de instancias** | 640 x 640 | INT8 | **10 FPS** | **100 ms** | **1.5 W** |

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_information.png" alt="Benchmark YOLO11n" />
</div>

:::info 📊 Descripción de unidades e indicadores de prueba
* **FPS (Frames Per Second)**: Se refiere al **número de fotogramas que el dispositivo puede procesar por segundo**. 20 FPS significa que el sistema puede completar continuamente 20 reconocimientos de imágenes con IA en 1 segundo. Cuanto mayor sea el valor, más fluido será el vídeo de monitorización en tiempo real.
* **ms (Milisegundos)**: es decir, una milésima de segundo. Aquí se refiere al **tiempo total de extremo a extremo para procesar una sola imagen**. 50 ms significa que el dispositivo tarda un mínimo de solo ***0.05 segundos*** en procesar un fotograma de vídeo (incluyendo preprocesamiento, inferencia en la NPU, posprocesamiento y todos los demás pasos).
* **W (Watt)**: La unidad de medida del consumo de energía del dispositivo. Aquí 1.5W se refiere al consumo medio de energía de todo el dispositivo reCamera cuando ejecuta modelos de IA a plena carga.
:::

### 💡 Análisis detallado de los datos
* **Eficiencia energética extrema**: El consumo de 1.5W es casi equivalente al de un ordenador monoplaca normal en modo de suspensión, pero reCamera puede alcanzar una tasa de fotogramas de detección de 20 FPS/S con este consumo, adaptándose perfectamente a escenarios de monitorización exterior alimentados por baterías o PoE de larga distancia.
* **Rendimiento de latencia**: La latencia de extremo a extremo ultrabaja de un mínimo de 50 ms para el modelo de detección significa que puede capturar fácilmente objetos en rápido movimiento; mientras que el modelo de segmentación, a pesar de añadir el operador de decodificación de máscaras de alta carga, aún puede mantener una experiencia fluida de hasta 10 FPS/S.

---


## 4. Práctica práctica: reproducir el Benchmark

Si ya tienes un dispositivo reCamera, puedes reproducir fácilmente localmente los resultados de prueba anteriores con solo unos pocos pasos sencillos.

### Paso 1: Obtener el ejecutable del Benchmark y el modelo
Primero, descarga el archivo bin compilado, el archivo de modelo convertido `.cvimodel` y el script de python a través del siguiente enlace:

```bash
[https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link](https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link)
```

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_list.png" alt="Lista YOLO11n" />
</div>

### Paso 2: Subir archivos al dispositivo reCamera
Sube el archivo bin descargado y el archivo de modelo al directorio /userdata/ del dispositivo reCamera.
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_userdata.png" alt="YOLO11n UserData" />
</div>

### Paso 3: Ejecutar la prueba de Benchmark
Ejecuta el siguiente comando en el dispositivo reCamera para iniciar la prueba de benchmark:

```bash
# The first parameter is the model file path, and the second parameter is the IP address of the streaming target
./recamera_benchmark ./yolo11n_detection_cv181x_int8.cvimodel 192.168.4.35
```

Si quieres ver los resultados de la prueba, puedes ejecutar el siguiente comando en la terminal de Windows para ejecutar el script udp y recibir el flujo de vídeo de la reCamera:
```bash
python.exe .\yolo_udp.py
```

---


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Te proporcionaremos diversos tipos de soporte para garantizar que tengas la experiencia más fluida posible al utilizar nuestros productos. Ofrecemos múltiples canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>