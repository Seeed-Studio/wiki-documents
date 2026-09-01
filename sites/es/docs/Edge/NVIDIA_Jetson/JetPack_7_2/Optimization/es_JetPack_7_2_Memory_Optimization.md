---
description: Optimiza la memoria en JetPack 7.2 mediante medición, habilidades de NVIDIA Jetson, ajuste del BSP sin pantalla o sin cámara, y configuraciones de inferencia de LLM eficientes en memoria.
title: Optimización de memoria en JetPack 7.2
keywords:
  - JetPack 7.2
  - optimización de memoria
  - NVIDIA Skills
  - TensorRT Edge-LLM
  - INT4
  - Jetson Orin
  - Jetson Thor
image: https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG
slug: /jetpack_7_2_memory_optimization
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/jetpack_7_2_memory_optimization/
---

# Optimización de memoria en JetPack 7.2

Jetson usa memoria unificada, por lo que el sistema operativo, las cargas de trabajo de la GPU, el firmware de cámara y pantalla, los pesos del modelo, los motores de TensorRT, la caché KV y los servicios de la aplicación compiten por la misma DRAM física. Por lo tanto, la optimización de memoria debe abarcar tanto la plataforma como la carga de trabajo de inferencia.

Esta guía combina el material de JetPack 7.2 ya disponible en esta colección:

- el [JetPack 7.2 Deep Dive](/es/jetpack72_deep_dive_bk/), incluyendo la reducción medida de memoria después de cargar un modelo de 27B;
- el [flujo de trabajo NVIDIA Skills](/es/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) para diagnóstico del dispositivo, auditoría de memoria y despliegue sin pantalla;
- la [guía de TensorRT Edge-LLM](/es/deploy_tensorrt_edge_llm_on_jetpack7.2/) para inferencia FP16, INT8 e INT4 en JetPack 7.2.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

:::warning
Los cambios de recuperación de memoria a nivel de BSP modifican el firmware de arranque, los device trees y los parámetros de la línea de comandos del kernel. Aplica únicamente recetas validadas de `headless`, `no-camera` o SWIOTLB a un dispositivo de prueba recuperable. Conserva el BSP original y confirma que el dispositivo se puede reflashear antes de hacer estos cambios.
:::

:::tip
¿Buscas el “por qué” detrás de estos pasos? El [JetPack 7.2 Memory Optimization Deep Dive](/es/jetpack_7_2_memory_optimization_deep_dive/) complementario explica de dónde viene el margen: la línea base de la plataforma frente a JetPack 6.2, el presupuesto de memoria del LLM, la mecánica en tiempo de ejecución y las observaciones de campo.
:::

## Capas de optimización

Usa la capa menos invasiva que resuelva el problema.

| Capa | Acción típica | Riesgo | Reinicio o reflash |
| --- | --- | --- | --- |
| Medición | Registrar memoria disponible y uso por proceso | Bajo | No |
| Configuración de inferencia | Cuantización, contexto más corto, tamaño de lote 1, menor concurrencia | Bajo | No |
| Configuración de servicios | Objetivo sin pantalla, detener servidores de modelo duplicados, deshabilitar servicios de usuario no usados | Medio | Normalmente reinicio |
| Recuperación de memoria del BSP | Deshabilitar firmware y memoria reservada de pantalla o cámara no usados | Alto | Reconstruir y reflashear |
| Ajuste de SWIOTLB | Reducir el pool de rebote DMA tras medir el uso real | Alto | Reconstruir y reflashear |

## 1. Registrar una línea base reproducible

Confirma la versión de software y captura la memoria antes de iniciar la aplicación:

```bash
cat /etc/nv_tegra_release
free -h
grep -E 'MemTotal|MemAvailable|SwapTotal|SwapFree|CmaTotal|CmaFree' /proc/meminfo
```

Supervisa la memoria unificada, el uso de la GPU, las temperaturas y la potencia mientras se carga y ejecuta el modelo:

```bash
sudo tegrastats --interval 1000
```

En otra terminal, identifica los procesos y grupos de control más grandes:

```bash
ps -eo pid,comm,rss,vsz,%mem --sort=-rss | head -20
systemd-cgtop
```

Registra al menos cuatro estados:

1. después del arranque y antes de que la aplicación se inicie;
2. después de que se cargue el modelo o el motor de TensorRT;
3. durante el prefill del prompt o el pico de preprocesamiento de visión;
4. durante la generación de tokens en estado estable o la operación de la aplicación.

No compares solo el valor `used` de `free`. Usa `MemAvailable`, la lista de RSS de procesos y el pico reportado por `tegrastats` en conjunto.

## 2. Usar Skills para auditar antes de editar el BSP

El flujo de trabajo basado en skills debe comenzar con la observación en lugar de cambios de configuración inmediatos.

### Diagnosticar el dispositivo

Usa `jetson-diagnostic` para recopilar el módulo, la versión de JetPack/L4T, el estado de memoria, el almacenamiento, la temperatura, los servicios y los endpoints de hardware visibles.

Ejemplo de prompt:

```text
/jetson-diagnostic Confirm that this device is running JetPack 7.2 / L4T 39.2,
capture its idle memory baseline, and identify services or hardware subsystems
that consume memory before the inference application starts.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson-diagnostic.PNG" style={{width:900, height:'auto'}} />
</div>

### Auditar la presión de memoria

Usa `jetson-memory-audit` cuando el modelo no se cargue, el OOM killer termine un proceso o el uso de memoria crezca de forma inesperada.

```text
/jetson-memory-audit Compare idle, engine-load, prefill, and decode memory use.
Separate model weights, KV cache, application processes, filesystem cache,
desktop services, and reserved platform memory where possible.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

La auditoría debe producir evidencia antes de recomendar un cambio. No deshabilites un servicio solo porque aparezca cerca de la parte superior de una lista de procesos.

### Convertir despliegues tipo appliance a modo sin pantalla

Si el Jetson se ejecuta sin una pantalla local, usa `jetson-headless-mode` para eliminar la sobrecarga del escritorio a nivel de servicios.

El target estándar de systemd es:

```bash
sudo systemctl set-default multi-user.target
sudo reboot
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/headless-mode.PNG" style={{width:900, height:'auto'}} />
</div>

Confirma el acceso por SSH antes de reiniciar. Este cambio a nivel de servicios es independiente de recuperar los carveouts de firmware de pantalla en el BSP.

### Usar `jetson-optimize-memory` solo para escenarios de BSP validados

El skill a nivel de BSP admite tres flujos de trabajo acotados:

| Escenario | Despliegue previsto | Área de plataforma recuperada |
| --- | --- | --- |
| `headless` | Sin salida de pantalla local | Firmware de DCE/pantalla, framebuffer temprano y nodos de kernel correspondientes |
| `no-camera` | Sin CSI, GMSL u otra canalización de cámara | RCE, VI, ISP, NVCSI y carveouts de firmware correspondientes |
| `swiotlb` | El uso medido del pool de rebote DMA está muy por debajo del pool reservado | Una asignación SWIOTLB más pequeña y distinta de cero |

Solicitudes de ejemplo:

```text
/jetson-optimize-memory headless
/jetson-optimize-memory no-camera
/jetson-optimize-memory swiotlb
```

Para cambios de carveout, el MB1 BCT, los controles de carga de MB2, las referencias AST de MB2 y los nodos del device tree del kernel deben permanecer coherentes. Poner a cero solo una entrada de carveout no es una optimización válida. Para SWIOTLB, nunca configures un pool de tamaño cero y revierte inmediatamente si `io_tlb_used` se aproxima a `io_tlb_nslabs`.

## 3. Reducir el uso de memoria de LLM y VLM

### Elegir la precisión más pequeña compatible

TensorRT Edge-LLM en JetPack 7.2 admite FP16, INT8 e INT4 en Jetson Orin. Comienza con FP16 para validar la corrección y luego evalúa checkpoints INT8 o INT4 compatibles con el modelo seleccionado.

| Precisión | Tendencia de memoria | Uso recomendado |
| --- | --- | --- |
| FP16 | La más alta de las rutas compatibles en Orin | Línea base funcional y cargas de trabajo sensibles a la precisión |
| INT8 | Menor memoria de pesos con compromisos moderados de precisión | Evaluación de producción equilibrada |
| INT4 | La menor memoria de pesos entre las rutas compatibles | Modelos grandes o despliegues multi-servicio con DRAM limitada |

No asumas que cambiar un flag del motor cuantiza correctamente un checkpoint FP16. Usa un checkpoint y una ruta de exportación compatibles con el modelo y luego reconstruye el motor de TensorRT en JetPack 7.2.

### Controlar contexto, caché KV y concurrencia

La memoria de un LLM no está determinada solo por los pesos del modelo. La caché KV crece con la longitud del contexto, el tamaño de lote, los tokens generados y las solicitudes concurrentes.

Comienza con una solicitud conservadora:

```json
{
  "batch_size": 1,
  "max_generate_length": 128,
  "requests": [
    {
      "messages": [
        {
          "role": "user",
          "content": "Summarize the current device status."
        }
      ]
    }
  ]
}
```

Luego aumenta una dimensión a la vez:

1. longitud del contexto de entrada;
2. longitud de generación;
3. tamaño de lote;
4. solicitudes concurrentes;
5. servicios adicionales de visión o robótica.

Si la memoria aumenta bruscamente durante el prefill, acorta el prompt o la ventana de contexto. Si aumenta a medida que las sesiones permanecen activas, inspecciona la retención de la caché KV y el manejo de solicitudes concurrentes.

### Evitar cargas duplicadas de modelos

Usa un único servidor de modelos de larga ejecución cuando varias aplicaciones necesiten el mismo modelo. Scripts de Python separados, notebooks, servidores de prueba y servicios de producción pueden cargar cada uno otra copia de los pesos o del motor.

Antes de iniciar la inferencia, comprueba si existen procesos de modelo ya en ejecución:

```bash
ps -ef | grep -E 'llm|triton|python|ollama' | grep -v grep
```

Detén solo los procesos que se confirmen como duplicados. No termines servicios del sistema basándote únicamente en una coincidencia de nombre.

### Mantener la exportación y la construcción del motor fuera del objetivo cuando sea posible

TensorRT Edge-LLM usa un host x86 con GPU para la exportación del checkpoint y el Jetson para la construcción del motor de destino. La exportación puede requerir varias veces el tamaño del checkpoint en RAM y VRAM, por lo que mantener la exportación en el host preserva la memoria del Jetson para validación e inferencia.

Durante la construcción del motor, cierra servidores de modelos no relacionados y registra el pico de memoria por separado de la memoria en tiempo de ejecución. La presión de memoria durante la construcción no representa necesariamente el requisito de despliegue en estado estable.

![TensorRT Edge-LLM engine build](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/6.png)

### Tratar el swap como una herramienta de recuperación, no como DRAM libre

El swap puede ayudar a completar una conversión de modelo o construcción de motor única, pero el intercambio sostenido aumenta la latencia y puede incrementar el desgaste del almacenamiento. Para inferencia en tiempo real, prefiere un modelo más pequeño o cuantizado, un contexto más corto, menor concurrencia y menos servicios duplicados antes de depender del swap.

## 4. Validar el resultado

Usa el mismo prompt, entrada, modo de potencia y topología de aplicación antes y después de cada cambio.

| Métrica | Por qué importa |
| --- | --- |
| `MemAvailable` en reposo | Mide la sobrecarga del sistema y los servicios |
| Memoria después de cargar el motor | Muestra la huella del modelo y del runtime |
| Pico de memoria durante el prefill | Expone la presión del contexto y del espacio de trabajo temporal |
| Memoria de decodificación en estado estable | Muestra la caché KV y la retención de sesiones |
| Tiempo hasta el primer token | Detecta regresiones causadas por swap o espacios de trabajo restringidos |
| Rendimiento de decodificación | Confirma que la menor memoria no hizo que la inferencia fuera inaceptablemente lenta |
| Temperatura y potencia de la placa | Confirma que el resultado es estable, no un pico breve |

El [JetPack 7.2 Deep Dive](/es/jetpack72_deep_dive_bk/) registró la memoria tras cargar un modelo de 27B, pasando de aproximadamente **24.6 GB** en JetPack 6.2 a **14.7 GB** en JetPack 7.2 en la comparación de Seeed. Considera ese resultado como una referencia específica de la carga de trabajo, no como una reducción garantizada para cada modelo.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/rO0ZPA2VK9w" title="JetPack 7.2 and JetPack 6.2 memory and inference comparison on Jetson AGX Orin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Orden recomendado

1. Mide la memoria en reposo, con carga del motor, en prefill y en decodificación.
2. Elimina procesos de modelo duplicados y servicios de aplicación innecesarios.
3. Reduce el contexto, la longitud de generación, el tamaño de lote y la concurrencia.
4. Evalúa checkpoints INT8 o INT4 compatibles con TensorRT Edge-LLM.
5. Usa `jetson-headless-mode` para despliegues de dispositivos sin pantalla.
6. Usa `jetson-optimize-memory headless` o `no-camera` solo cuando el escenario de hardware coincida exactamente.
7. Considera la reducción de SWIOTLB solo después de medir el uso real del bounce-pool de DMA.
8. Vuelve a ejecutar pruebas de corrección, latencia, rendimiento, térmicas y de estabilidad después de cada cambio.

## Reversión

- Restaura el objetivo de servicio original si se vuelve a necesitar un escritorio gráfico.
- Restaura la fuente BSP original y vuelve a flashear si un cambio de carveout o device-tree provoca fallos de arranque o de periféricos.
- Revierte los cambios de SWIOTLB si aparecen errores de DMA o el uso se aproxima al pool configurado.
- Conserva el último motor TensorRT y la configuración de modelo conocidos como correctos hasta que la configuración optimizada supere las pruebas de aceptación.

## Soporte técnico y debate sobre productos

Gracias por elegir productos de Seeed Studio. Para soporte técnico y debate sobre productos, utiliza los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>