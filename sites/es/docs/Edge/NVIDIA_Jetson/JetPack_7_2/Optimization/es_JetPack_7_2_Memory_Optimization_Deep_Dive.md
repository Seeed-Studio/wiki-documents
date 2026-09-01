---
description: 'Comprende los cambios de software de JetPack 7.2 que afectan a la memoria de Jetson: la pila de CUDA y TensorRT, el soporte oficial de Yocto, las técnicas de optimización y un presupuesto medido de despliegue de LLM para Orin.'
title: 'Optimización de memoria en JetPack 7.2: avances de software y un presupuesto de despliegue de LLM'
keywords:
  - JetPack 7.2
  - optimización de memoria
  - TensorRT Edge-LLM
  - caché KV
  - INT4
  - Jetson Orin Nano
  - despliegue de LLM
image: https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png
slug: /jetpack_7_2_memory_optimization_deep_dive
last_update:
  date: 08/27/2026
  author: zibo
createdAt: '2026-08-27'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/es/jetpack_7_2_memory_optimization_deep_dive/
---

# Optimización de memoria en JetPack 7.2: avances de software y un presupuesto de despliegue de LLM



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png"/>
</div>


Jetson utiliza memoria unificada: la CPU, la GPU, los servicios del sistema, los subsistemas de cámara y pantalla, los pesos del modelo, el runtime de inferencia y la caché KV comparten la misma DRAM física. JetPack 7.2 no añade DRAM física a un módulo existente. En su lugar, actualiza la base de software e introduce nuevas formas de construir, recortar, medir y desplegar ese sistema de memoria compartida.

A medida que el suministro de DRAM sigue siendo limitado y aumentan los costes de memoria, pasar inmediatamente a un módulo con más memoria no es la única forma de hacer viable un diseño de IA en el edge. Una actualización bien medida a JetPack 7.2 puede liberar memoria que antes consumía la plataforma y hacer que el presupuesto restante sea más fácil de controlar. En ese sentido, puede ser una **actualización de memoria por software**: no cambia la capacidad física del módulo, pero puede hacer práctico un workload de LLM que no cabía en un despliegue equivalente con JetPack 6.2, una vez que se vuelven a validar la imagen del sistema, el runtime, la precisión del modelo y los límites de las peticiones.

Este artículo se centra en dos preguntas para desarrolladores de Jetson Orin: qué actualizaciones de software de JetPack 7.2 pueden mejorar la eficiencia de memoria y cómo convertir la memoria disponible en un presupuesto práctico de despliegue de LLM. Distingue las funciones de JetPack 7.2 de las técnicas generales de TensorRT y LLM, ayudándote a medir cada optimización con precisión.


| **reComputer J3011** | **reComputer Classic J5011** |
| :---: | :---: |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/o/row6-recomputer_j30_.jpg" style={{width:400, height:'auto'}} /> | <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100006184-gallery_img_1.jpg" style={{width:400, height:'auto'}} /> |
| Plataforma Jetson Orin Nano 8GB | Plataforma Jetson AGX Orin 32GB |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora 🖱️</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora 🖱️</font></span></strong>
  </a>
</div>

:::info
**Guía de lectura** 

- Empieza con [1. What Is Specific to JetPack 7.2?](#1-what-is-specific-to-jetpack-72) para identificar las palancas específicas de la versión 7.2; 
- Usa [2. Turning the 7.2 Stack into an LLM Budget](#2-turning-the-jetpack-72-stack-into-an-llm-memory-budget) para separar pesos, runtime y caché KV; 
- Usa [3. Existing JetPack 7.2 Guides](#3-use-this-deep-dive-with-the-existing-jetpack-72-guides) para el flujo de trabajo operativo correspondiente; 
- Lee [4. Field Observations](#4-field-observations-evidence-for-jetpack-72-not-marketing-claims).
:::

El complemento práctico de este artículo es la guía [JetPack 7.2 Memory Optimization](/es/jetpack_7_2_memory_optimization/), que convierte los mismos principios en un flujo de trabajo de auditoría y configuración basado en habilidades.

## 1. What Is Specific to JetPack 7.2?

[JetPack 7.2](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2) proporciona Jetson Linux 39.2, Ubuntu 24.04, kernel de Linux 6.8, CUDA 13.2.1 y TensorRT 10.16.2. El [JetPack 7.2 Resource Hub](/es/jetpack_7_2_resource_hub/) ya describe todo el conjunto de funciones de la versión; esta sección conserva solo las capacidades que cambian una decisión de memoria para LLM.

| Función de JetPack 7.2 | Por qué pertenece a este artículo | Guía detallada |
| --- | --- | --- |
| Pila actualizada de CUDA y TensorRT | Es la base de software para reconstruir y perfilar motores de inferencia compatibles. | [Deploy TensorRT Edge-LLM on JetPack 7.2](/es/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| Habilidades de optimización de memoria y benchmarking | Proporcionan una forma repetible de medir las reservas de la plataforma, los servicios y la presión del workload antes de cambiar la configuración. | [JetPack 7.2 Memory Optimization](/es/jetpack_7_2_memory_optimization/) |
| Soporte oficial de Yocto | Un equipo de producción puede crear una imagen adaptada y reproducible cuando la imagen de desarrollo de Ubuntu incluye software innecesario. | [Build and Flash a Yocto Image](/es/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) |

JetPack 7.2 no añade DRAM a un módulo, no reduce automáticamente un modelo ni habilita por sí mismo funciones de runtime como la reutilización de la caché KV. Proporciona la base de software y las herramientas a partir de las cuales se pueden tomar y medir esas decisiones.

### 1.1 Menor memoria al arranque es margen utilizable para LLM

La huella del sistema al arrancar es la primera parte del presupuesto de LLM. La siguiente comparación histórica de Orin Nano 8 GB muestra alrededor de 1,4 GiB usados en un estado con JetPack 6.2 y algo más de 800 MiB usados en un estado con JetPack 7.2. La diferencia —aproximadamente 600 MiB en esta imagen y configuración de servicios concretas— es memoria que puede seguir disponible para el runtime de inferencia, el espacio de trabajo del modelo o la caché KV en lugar de consumirse antes de que la aplicación se inicie.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/6.2vs7.2.PNG" alt="Comparación histórica de memoria al arranque entre JetPack 6.2 y 7.2 en Orin Nano"/>
</div>

Por eso un menor uso de memoria del sistema puede entenderse como una **actualización de memoria por software**. El módulo sigue teniendo los mismos 8 GB de DRAM física, pero una huella de plataforma más pequeña aumenta la parte que la aplicación puede presupuestar realmente. Para un despliegue de LLM limitado por memoria, ese margen adicional puede ser la diferencia entre fallar durante la carga del motor o el prefill y tener suficiente espacio para ejecutar una petición útil y acotada.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/7.2.png" alt="Observación histórica de memoria al arranque con JetPack 7.2 en Orin Nano"/>
</div>

El resultado no es automático para cada imagen de JetPack 7.2. El modo escritorio, los servicios habilitados, los contenedores, las rutas de pantalla y cámara, los ajustes del BSP de la carrier board y el punto de medición afectan todos a la línea base. Mide el estado inactivo estabilizado en el dispositivo real antes de asignar el margen recuperado a un modelo más grande o a un contexto más largo.

Para la comparación publicada de carga de modelos en AGX Orin 32 GB con JetPack 6.2 frente a 7.2 —incluida su configuración de prueba y cifras de rendimiento— consulta [JetPack 7.2 Deep Dive](/es/jetpack72_deep_dive_bk/).

## 2. Turning the JetPack 7.2 Stack into an LLM Memory Budget

JetPack 7.2 proporciona la plataforma y las herramientas; un LLM aún tiene que encajar en la memoria que queda después de que el sistema operativo y los servicios del producto se hayan iniciado. El presupuesto utilizable depende del tamaño del modelo, la longitud del contexto, el tamaño de lote, la precisión de los pesos y el runtime que ejecuta el modelo. Divídelo en los bloques siguientes antes de cambiar ajustes.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_1.png"/>
</div>


- **Pesos del modelo**: el propio modelo, sus parámetros entrenados. Normalmente es el bloque más grande: cuanto mayor es el modelo o mayor la precisión, más memoria consume.
- **Caché KV**: la "memoria de la conversación hasta ahora" del modelo. Evita que el modelo tenga que volver a leer todo el chat para cada nuevo token, pero cuanto más largo es el contexto, más crece.
- **Activaciones**: valores temporales producidos a mitad del cálculo; se crean y descartan a medida que el modelo recorre cada capa.
- **Espacio de trabajo de TensorRT**: espacio temporal que TensorRT reserva mientras prepara y ejecuta el modelo.
- **Contexto de CUDA**: la "sesión" de GPU que el runtime de CUDA abre antes de cualquier cómputo: contexto, streams y estado interno.
- **Runtime / buffers temporales**: buffers de corta duración que el framework y tu aplicación usan para mover datos: buffers de E/S, regiones de copia y memoria temporal intermedia.


### 2.1 Límites del runtime: qué añade TensorRT Edge-LLM

JetPack 7.2 proporciona CUDA 13.2.1 y TensorRT 10.16.2, la capa inferior sobre la que TensorRT Edge-LLM puede ejecutar flujos de trabajo de edge-LLM compatibles. Edge-LLM es un runtime y una toolchain independientes, no una función que JetPack habilite automáticamente. Cuando su modelo y versión son compatibles, puede construir motores de TensorRT a partir de checkpoints INT4 AWQ y usar técnicas como planificación de memoria, gestión de caché KV, fusión de kernels y CUDA Graphs.

Para los desarrolladores de JetPack 7.2, el beneficio práctico es una pila de inferencia actual de NVIDIA que puede usarse con una línea base de sistema reproducible. El objetivo no es simplemente arrancar un LLM; es hacer que el modelo coexista con la CPU, la GPU, los servicios y la aplicación que comparten una DRAM y un ancho de banda de memoria limitados.

Para un modelo grande, los pesos suelen ser la primera asignación estable que hay que contabilizar. Un modelo de 4B parámetros necesita aproximadamente:


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_parameters.png"/>
</div>


Estas cifras describen solo los pesos. Las escalas de cuantización, los metadatos, los buffers de runtime y la caché KV son asignaciones adicionales. Aun así, pasar de FP16 a INT4 reduce el almacenamiento teórico de pesos en aproximadamente un 75%.

### 2.2 llama.cpp y TensorRT Edge-LLM son caminos diferentes

Una etiqueta de 4 bits no hace que dos despliegues sean equivalentes. En la misma imagen de JetPack 7.2, un archivo GGUF de Qwen3.5-4B usado por llama.cpp y un checkpoint INT4 AWQ construido con TensorRT Edge-LLM siguen caminos diferentes hasta la misma GPU de Jetson.

| Comparación | Ruta GGUF | Ruta TensorRT Edge-LLM |
| --- | --- | --- |
| Artefacto de cuantización | Un archivo GGUF, como Q4_K_M | Un checkpoint INT4 AWQ compatible y sus artefactos exportados |
| Motor de inferencia | llama.cpp | Exportación del modelo → motor de TensorRT |
| Ejecución en GPU | Kernels seleccionados por la build y el backend de llama.cpp | Motor de TensorRT con fusión compatible, planificación de memoria, plugins y CUDA Graphs |
| Comparación justa de memoria | Igualar modelo, contexto, offload a GPU, lote, modo de energía y versión | Igualar las mismas variables e incluir entonces el uso del motor y del espacio de trabajo |

Por lo tanto, TensorRT Edge-LLM es más que un simple lector de modelos INT4. Convierte un checkpoint compatible en un motor optimizado para GPU NVIDIA. Las funciones exactas disponibles dependen del modelo, la compilación del motor y la versión de TensorRT Edge-LLM, así que revisa siempre su matriz de modelos compatibles y la documentación de la versión. Para una comparación entre JetPack 6.2 y 7.2, recompila o revalida ambas rutas en sus respectivas pilas de software; no reutilices un motor antiguo y llames a ese resultado una mejora de JetPack 7.2.

### 2.3 Caché KV: El presupuesto que JetPack 7.2 no elimina

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV-cache-token.jpeg"/>
</div>
Cuando un Transformer produce el primer token, procesa el prompt y almacena las claves y valores de atención que ha calculado. En el siguiente token, el runtime puede reutilizar esos valores en lugar de calcular de nuevo todo el historial. Esa reutilización es la razón por la que la decodificación sigue siendo práctica, pero tiene un coste: la caché crece a medida que crece la conversación.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV—Cache.jpeg"/>
</div>

Una fórmula aproximada de planificación es:

> **KV-cache bytes ≈ 2 × layers × KV heads × head dimension × tokens × batch × bytes per element**

Por eso el mismo modelo INT4 puede ejecutarse cómodamente con un contexto de 4K y luego quedarse sin memoria a 32K. JetPack 7.2 puede dejar más margen utilizable gracias a una imagen de despliegue más ligera o a un runtime compatible más eficiente, pero no limita el crecimiento de la caché KV. La cuantización de pesos reduce un coste fijo; el contexto, el batch y la concurrencia siguen definiendo la parte creciente del presupuesto.


### 2.4 Reutilización de la caché KV: convertir un coste creciente en un recurso gestionado

La Sección 2.3 explica la compensación: la caché KV evita que el modelo recalcule el prompt completo para cada token, pero consume más DRAM a medida que crece el contexto. En un despliegue con JetPack 7.2, primero utiliza las mejoras de la plataforma para establecer un presupuesto de memoria real; luego decide si el trabajo ya almacenado en la caché puede ayudar a la siguiente solicitud.

TensorRT Edge-LLM trata esta caché como un recurso de runtime en lugar de un efecto secundario invisible. El motor se construye con una longitud de entrada objetivo y una capacidad de caché KV, mientras que el runtime tiene un pool de páginas para contextos activos y retenidos. Esta es una capacidad de TensorRT Edge-LLM que se ejecuta sobre la pila de cómputo de JetPack 7.2, no una política de caché aplicada automáticamente por el sistema operativo, pero permite que un despliegue 7.2 reserve memoria de forma deliberada en lugar de descubrir el límite tras un fallo por falta de memoria.

Para los modelos compatibles, Edge-LLM también puede reutilizar prefijos de prompt coincidentes entre solicitudes. La caché es local a una instancia de runtime y se indexa por el contenido del prefijo, por lo que solo puede reutilizarse la parte compartida de un prompt. En la implementación actual de Edge-LLM, esta función requiere una caché KV en FP16 y debe habilitarse para el motor y el runtime seleccionados.

| Turno | Sin reutilización de prefijo | Con reutilización de prefijo |
| --- | --- | --- |
| Primera solicitud | El system prompt y el user prompt se precargan y luego se escriben en la caché KV. | Se requiere el mismo prefill inicial. |
| Solicitud posterior con el mismo system prompt | El prefijo repetido se vuelve a precargar. | El prefijo en caché que coincide puede reutilizarse; solo la parte nueva necesita prefill. |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/prefix_kv_cache.png" alt="Reutilización de la caché KV de prefijo en solicitudes LLM repetidas"/>
</div>
Esto es especialmente útil para un agente con un system prompt largo, un flujo de trabajo RAG con un prefijo de documento repetido o una solicitud VLM que repite el mismo prefijo de imagen. El mayor beneficio suele ser un menor trabajo de prefill repetido y un tiempo más corto hasta el primer token, no un menor requisito de memoria máxima. Las páginas de caché retenidas siguen consumiendo memoria, y cambiar el prompt, la imagen o el orden de las imágenes impide la reutilización para el prefijo afectado.

Para un despliegue en Jetson, verifica la reutilización en lugar de asumir que está activa. Construye suficiente capacidad de pool de páginas para los contextos que pretendes retener, habilita la reutilización de contexto en tiempo de ejecución e inspecciona el perfil del runtime: una solicitud que acierta en la caché debería informar de un recuento positivo de tokens reutilizados.

Teniendo en cuenta la capacidad de contexto y la reutilización, la pregunta restante es qué ocurre dentro de cada token generado. Ahí es donde importan las optimizaciones de ejecución de TensorRT.

### 2.5 TensorRT en JetPack 7.2: reducir el movimiento de datos intermedios

Una capa Transformer combina operaciones como normalización, cuantización o des-cuantización, multiplicación de matrices, activación y atención. Si esas operaciones se ejecutan como kernels separados, un kernel puede escribir un tensor intermedio en la DRAM solo para que el siguiente kernel lo lea de inmediato.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/transformer_layer.png" alt="Operaciones en una capa Transformer"/>
</div>

| Ruta de ejecución | Qué cruza la DRAM | Por qué importa en Jetson |
| --- | --- | --- |
| Kernels separados | Cada tensor intermedio se escribe y se lee entre operaciones. | Mayor uso de ancho de banda, asignaciones temporales y lanzamientos de kernels. |
| Kernel fusionado | Las operaciones compatibles se ejecutan juntas antes de que se escriba el resultado final. | Menos tráfico intermedio y menos sobrecarga de runtime. |

La fusión de kernels no cambia el tamaño de los pesos del modelo ni de la caché KV. Reduce los datos de trabajo que se mueven entre operaciones, por lo que puede mejorar la latencia y reducir la presión transitoria en tiempo de ejecución. TensorRT 10.16.2 de JetPack 7.2 proporciona la versión de TensorRT para esta ruta de motor, pero este artículo no afirma que una fusión concreta se haya introducido en 7.2. Las fusiones disponibles dependen del grafo del modelo y de la compilación del motor; mide el motor resultante en el Jetson de destino en lugar de tratar la fusión como una cifra fija de ahorro de memoria.

La fusión reduce el trabajo dentro de una secuencia de kernels. La decodificación sigue repitiendo esa secuencia para cada token generado, lo que deja un coste de planificación independiente.

### 2.6 CUDA Graph en la ruta de runtime de JetPack 7.2

Durante la decodificación, un LLM genera uno o unos pocos tokens por iteración, mientras que una secuencia similar de operaciones de GPU se ejecuta muchas veces. En una ruta convencional, la CPU envía esa secuencia repetidamente.

CUDA Graph registra una secuencia de GPU compatible una vez y la reproduce más tarde con un único lanzamiento de grafo.

| Etapa de decodificación | Ruta de lanzamiento convencional | Ruta con CUDA Graph |
| --- | --- | --- |
| Secuencia compatible inicial | La CPU lanza las operaciones individuales de la GPU. | El runtime registra la secuencia como un grafo. |
| Iteraciones posteriores | La CPU envía de nuevo la secuencia en cada iteración. | La CPU lanza el grafo registrado y la secuencia se ejecuta como una unidad. |

Se trata de una optimización de planificación. La fusión de kernels reduce principalmente el tráfico de memoria intermedia; CUDA Graph reduce principalmente la sobrecarga repetida de lanzamiento CPU‑a‑GPU. Ninguno hace que los pesos del modelo o la caché KV sean más pequeños. En un sistema JetPack 7.2, es una forma en que un motor TensorRT compatible puede aprovechar mejor la pila actualizada de CUDA y TensorRT. En Jetson, reducir el trabajo de lanzamiento puede mejorar la capacidad de respuesta de extremo a extremo porque los recursos de CPU y el presupuesto de energía son limitados junto con los recursos de GPU.

Los mecanismos ahora forman un panorama completo de runtime: la cuantización reduce el coste fijo de los pesos; la configuración de la caché KV controla el coste creciente del contexto; la fusión reduce el tráfico intermedio; y CUDA Graph reduce la planificación repetida de la decodificación.

### 2.7 Relacionar cada mecanismo con JetPack 7.2

La siguiente tabla distingue las palancas de JetPack 7.2 de los mecanismos de runtime utilizados sobre ellas.

| Capa o mecanismo | Relación con JetPack 7.2 | Decisión de despliegue | Qué medir |
| --- | --- | --- | --- |
| Línea base de la plataforma JetPack 7.2 | Proporciona las versiones del sistema operativo, CUDA y TensorRT; establece el punto de partida reproducible. | Registrar la versión, el service set, el objetivo de escritorio y el modo de energía. | Memoria en reposo estabilizada y configuración del dispositivo. |
| Yocto o una imagen 7.2 recortada | Una opción directa de imagen de producción 7.2 para reducir software de sistema innecesario. | Incluir solo los servicios, controladores y bibliotecas requeridos. | Memoria en reposo y validación de las funciones requeridas. |
| Pesos de baja precisión | Una elección de modelo realizada dentro del entorno de runtime 7.2. | Elegir un checkpoint compatible y validar la calidad de salida. | Memoria de carga del motor y calidad de la tarea. |
| Capacidad y reutilización de la caché KV | Una función opcional de runtime, no una característica automática del sistema operativo 7.2. | Establecer límites de contexto, batch, pool de páginas y retención para la carga de trabajo. | Pico de prefill, memoria estable de decodificación, recuento de tokens reutilizados y TTFT. |
| Fusión de TensorRT y CUDA Graph | Los motores compatibles pueden explotar la pila CUDA/TensorRT incluida con 7.2. | Compilar y perfilar el motor en el dispositivo 7.2 de destino. | Pico de runtime, latencia de decodificación y rendimiento. |

Por eso “más eficiente en memoria” y “más rápido” están vinculados en Jetson. El sistema no está ganando DRAM física adicional. En su lugar, se deja más de la misma DRAM y ancho de banda compartidos para la carga de trabajo porque los pesos, la caché, los datos intermedios y el trabajo de planificación se gestionan de forma más deliberada.

Utiliza este mapa en orden: establece la imagen y el presupuesto de plataforma, mide la huella de runtime y del modelo, y luego amplía el contexto y la concurrencia solo cuando la carga de trabajo completa aún tiene margen.

## 3. Usa este análisis detallado junto con las guías existentes de JetPack 7.2

Esta página explica el presupuesto: por qué un menor consumo en reposo, pesos más pequeños, una caché KV acotada y un runtime compatible están conectados. Intencionadamente no repite los procedimientos operativos que ya se mantienen en el resto de la colección de JetPack 7.2.

| Si necesitas… | Usa esta guía | Mantén esta página abierta para… |
| --- | --- | --- |
| Medir la memoria en reposo, de carga del motor, de prefill y de decodificación; reducir servicios; o cambiar una reserva BSP validada | [JetPack 7.2 Memory Optimization](/es/jetpack_7_2_memory_optimization/) | Decidir qué capa de memoria es responsable antes de actuar. |
| Exportar un checkpoint, compilar un motor, seleccionar una precisión compatible o hacer un benchmark de TensorRT Edge-LLM | [Deploy TensorRT Edge-LLM on JetPack 7.2](/es/deploy_tensorrt_edge_llm_on_jetpack7.2/) | Entender cómo los pesos, el workspace y la caché KV encajan en el presupuesto total. |
| Construir una imagen de sistema operativo orientada a producción y a medida | [Build and Flash a Yocto Image](/es/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) | Decidir si una imagen de sistema más pequeña compensa el coste adicional de propiedad. |
| Comparar los resultados publicados de 6.2 y 7.2 en AGX Orin | [JetPack 7.2 Deep Dive](/es/jetpack72_deep_dive_bk/) | Evitar el error de tratar un resultado medido como un ahorro de memoria universal. |

El orden correcto es sencillo: establece la línea base del sistema, mide el tiempo de ejecución y el modelo seleccionados, y luego aumenta el contexto o la concurrencia solo mientras toda la carga de trabajo se mantenga dentro del presupuesto. Las guías enlazadas contienen los comandos, comprobaciones de seguridad, procedimientos de reversión y pruebas de aceptación para cada paso.

## 4. Observaciones de campo: evidencia para JetPack 7.2, no afirmaciones de marketing

Para la comparación publicada de AGX Orin 32 GB y sus cifras, consulta [JetPack 7.2 Deep Dive](/es/jetpack72_deep_dive_bk/). Este artículo se centra en cómo interpretar esos resultados al planificar un presupuesto de memoria para LLM.

Cuando compares un resultado de JetPack 6.2 y 7.2, trata la versión como una sola variable. Mantén fijos el módulo, la placa portadora, el checksum del modelo, el comando, la descarga a GPU, el contexto, el número de tokens generados, el modo de energía, el estado de `jetson_clocks`, el objetivo de escritorio, el conjunto de servicios, la temperatura y el punto de muestreo. Registra las versiones de L4T, CUDA y TensorRT en cada ejecución.

Los cuatro estados de memoria que importan son inactividad estabilizada, motor o modelo cargado, pre-relleno del prompt y decodificación estable. La [guía de optimización de memoria](/es/jetpack_7_2_memory_optimization/) proporciona los comandos de recopilación y la interpretación para estos estados. Un valor tomado en un solo estado no puede demostrar que JetPack 7.2, CUDA o TensorRT hayan causado una mejora de memoria en toda la carga de trabajo.

## Referencias

- [TrendForce — AI Server Demand Continues to Support Memory Prices in 3Q26](https://www.trendforce.com/presscenter/news/20260703-13134.html): previsión reciente de precios de contrato de DRAM y NAND.
- [NVIDIA Developer Blog — Deploy Agentic-Ready AI at the Edge with Memory Efficiency in NVIDIA JetPack 7.2](https://developer.nvidia.com/blog/deploy-agentic-ready-ai-at-the-edge-with-memory-efficiency-in-nvidia-jetpack-7-2/): habilidades de optimización de memoria de JetPack 7.2 y soporte oficial de Yocto.
- [NVIDIA JetPack 7.2 Downloads / Release Notes](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2)
- [NVIDIA TensorRT-Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM): fuente versionada de referencia para la cadena de herramientas de edge, modelos compatibles y ejemplos.
- [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM): tiempo de ejecución de LLM, construcción de motores y documentación de funcionalidades; fuente de la documentación de optimización de fusión de kernels y CUDA Graph.
- [TensorRT Edge-LLM KV Cache Reuse](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/features/kv-cache-reuse.html): condiciones de soporte, capacidad del pool de páginas, habilitación en tiempo de ejecución y verificación de reutilización.
- [NVIDIA TensorRT KV Cache Documentation](https://docs.nvidia.com/deeplearning/tensorrt/latest/inference-library/transformers-kv-cache.html): conceptos generales de gestión y configuración de la caché KV.

## Páginas relacionadas

- [JetPack 7.2 Memory Optimization](/es/jetpack_7_2_memory_optimization/) — auditoría basada en habilidades, recuperación de BSP sin cabeza / sin cámara, seguridad SWIOTLB y configuraciones de inferencia de LLM con menor memoria.
- [Deploy TensorRT Edge-LLM on JetPack 7.2](/es/deploy_tensorrt_edge_llm_on_jetpack7.2/) — exportación en el host, construcción del motor en el objetivo y validación de inferencia en C++.
- [JetPack 7.2 Deep Dive](/es/jetpack72_deep_dive_bk/) — qué cambia para la inferencia en Jetson AGX Orin y la comparación de Seeed JetPack 7.2 vs 6.2.
- [JetPack 7.2 Resource Hub](/es/jetpack_7_2_resource_hub/) — el índice categorizado de todos los recursos de JetPack 7.2 para los dispositivos de Seeed Studio.

## Soporte técnico y debate sobre productos

¡Gracias por elegir productos de Seeed Studio! Para soporte técnico y debate sobre productos, utiliza los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
