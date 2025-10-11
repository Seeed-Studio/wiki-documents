---
description: Desplegar Riva y Llama2 en reComputer
title: Ajuste fino con Llama-Factory
keywords:
- reComputer
- LLM
- Chatbot
- Finetune
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Finetune_LLM_on_Jetson
last_update:
  date: 07/03/2024
  author: Youjiang
---


# LLM Local Personalizado: Ajuste fino de LLM con Llama-Factory en Jetson


## Introducción

🚀¡Ajuste fino de LLM con Llama-Factory en Jetson! Ahora puedes personalizar un LLM local privado para satisfacer tus requisitos.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" />
</div>

Llama-Factory proporciona una herramienta de ajuste fino de modelos de lenguaje grandes altamente conveniente que soporta modelos de lenguaje grandes comunes, conjuntos de datos y métodos de ajuste fino. Con esta plataforma, podemos personalizar fácilmente modelos de lenguaje grandes privados.

En este wiki, aprenderemos cómo desplegar Llama-Factory en Nvidia Jetson y usar Llama-Factory para entrenar un modelo de lenguaje grande que soporte preguntas y respuestas en chino.


## Prerrequisitos

- Dispositivo Jetson con más de 16GB de memoria.
- Monitor, ratón, teclado y red. (no necesario)

:::note
Ya hemos probado la viabilidad de este wiki en reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) y [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) Developer Kit.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Comenzando

### Conexión de Hardware

1. Conecta el cable Ethernet al reComputer (Alimentado por Jetson).
2. Conecta el ratón, teclado y monitor al reComputer.
3. Enciende el reComputer.

<!-- Need a GIF here! -->

### Instalar Jetson-Examples

:::note
Los [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) de Seeed Studio ofrecen un despliegue sin problemas con un comando de una línea para ejecutar modelos de IA de visión e IA Generativa en la plataforma NVIDIA Jetson.
:::

Para instalar el paquete, por favor abre la terminal en Jetson y ejecuta:

```bash
pip3 install jetson-examples
sudo reboot
```

### Instalar y Ejecutar Llama-Factory en Jetson

Despliega `Llama-Factory` con jetson-examples en una línea:

```bash
reComputer run llama-factory
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_llama_factory.png" />
</div>

Luego podemos abrir un navegador web y acceder a la dirección para abrir la WebUI:
```bash
# http://<jetson-ip>:7860
http://127.0.0.1:7860
```

### Iniciar Entrenamiento

Aquí, usamos el conjunto de datos `alpaca_zh` para hacer ajuste fino del modelo `Phi-1.5`, permitiéndole tener capacidades conversacionales en chino. Por lo tanto, en la interfaz web, solo configuramos el `Model name` de entrenamiento y `Dataset`, manteniendo los otros parámetros de entrenamiento como predeterminados.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_train.png" />
</div>

Finalmente, haz clic en el botón `start` para iniciar el entrenamiento.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/training.png" />
</div>

:::note
El proceso de entrenamiento tomará aproximadamente 18 horas.
:::

Después de completar el ajuste fino, puedes encontrar el modelo ajustado en el directorio de guardado.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/train_result.png" />
</div>

### Probando el Modelo con Ajuste Fino.


Finalmente, podemos usar Llama-Factory con el modelo ajustado para probar si efectivamente ha adquirido capacidades conversacionales en chino. Los pasos específicos son los siguientes.


**Paso1.** Cargar el modelo con ajuste fino mediante la WebUI de Llama-Factory.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/load_model.png" />
</div>

**Paso2.** Ingresa un prompt en chino en el cuadro de texto `Input`, haz clic en el botón `Submit`, y verifica el resultado de salida del modelo de lenguaje grande en el cuadro de texto `Chatbot`.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/test_model.png" />
</div>

De los resultados de la prueba, podemos ver que el modelo con ajuste fino ya tiene la capacidad de conversar con humanos en chino. Si quieres que tu modelo tenga capacidades más avanzadas, ¡intenta usar un conjunto más diverso de datos de ajuste fino para entrenar tu modelo!


### Demostración

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/OaGEn7pVve0" title="Finetune LLM by Llama-Factory on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Referencias
- [https://github.com/hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- [https://github.com/Seeed-Projects/jetson-examples](https://github.com/Seeed-Projects/jetson-examples/tree/main/reComputer/scripts/llama-factory)

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