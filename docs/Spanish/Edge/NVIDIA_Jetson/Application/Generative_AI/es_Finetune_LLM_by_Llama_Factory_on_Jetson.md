---
description: Implementar Riva y Llama2 en una reComputer
title: Ajuste fino con Llama-Factory
keywords:
- reComputer
- LLM
- Chatbot
- Ajuste fino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Finetune_LLM_on_Jetson
last_update:
  date: 07/03/2024
  author: Youjiang
---


# LLM local personalizado: ajusta el LLM de Llama-Factory en la Jetson


## Introducción

🚀¡Finetune LLM de Llama-Factory en la Jetson! Ahora puedes personalizar un LLM local privado personalizado para satisfacer tus necesidades.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" />
</div>

Llama-Factory tiene una herramienta de ajuste fino de LLM's muy conveniente que admite modelos de lenguaje grande, conjuntos de datos y métodos de ajuste fino comunes. Con esta plataforma, podemos personalizar fácilmente modelos de lenguaje grandes privados.

En esta wiki, aprenderemos cómo implementar Llama-Factory en la Nvidia Jetson y a usar Llama-Factory para entrenar un modelo de lenguaje grande que admita preguntas y respuestas en chino.


## Prerequisitos

- Dispositivo Jetson con más de 16GB de memoria.
- Monitor, Mouse, teclado y red. (no es necesario)

:::Nota
En esta wiki usamos la reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) y [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) Developer Kit.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products">
      <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>

## Primeros pasos

### Conexiones de hardware

1. Conecta el cable Ethernet a la reComputer (con tecnología de Jetson).
2. Conecta el mouse, el teclado y el monitor a la reComputer.
3. Enciende la reComputer.

<!-- Need a GIF here! -->

### Instalar Jetson-Examples

:::nota
Los [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) de Seeed Studio ofrecen una implementación perfecta de comandos de una sola línea para ejecutar modelos de IA de visión e IA generativa en la plataforma NVIDIA Jetson..
:::

Para instalar el paquete, abre la terminal en la Jetson y ejecuta:

```bash
pip3 install jetson-examples
sudo reboot
```

### Instalar y ejecutar Llama-Factory en la Jetson

Implementa `Llama-Factory` mediante Jetson-Examples usando una sola línea:

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

### Comenzar el entrenamiento

Aquí, utilizamos el conjunto de datos `alpaca_zh` para ajustar el modelo `Phi-1.5`, permitiéndole tener capacidades de conversación en chino. Por lo tanto, en la interfaz de usuario web, solo configuramos el `Nombre del modelo` y el `Conjunto de datos` de entrenamiento, manteniendo los demás parámetros de entrenamiento por defecto.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_train.png" />
</div>

Finalmente, haz click en el botón "iniciar" para comenzar el entrenamiento.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/training.png" />
</div>

:::nota
El entrenamiento durará aproximadamente 18 horas.
:::

Después de completar el ajuste, puedes encontrar el modelo con ajuste fino en el directorio de guardado.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/train_result.png" />
</div>

### Probando el modelo con ajuste fino


Finalmente, podemos usar Llama-Factory con el modelo con ajuste fino para probar si realmente ha adquirido capacidades de conversación en chino. Los pasos específicos son los siguientes.


**Paso 1.** Carga el modelo con ajuste fino mediante Llama-Factory WebUI.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/load_model.png" />
</div>

**Paso 2.** Ingresa un mensaje en chino en el cuadro de texto "Entrada", haz click en el botón "Enviar" y verifica el resultado de salida del LLM en el cuadro de texto "Chatbot".

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/test_model.png" />
</div>

A partir de los resultados de las pruebas, podemos ver que el modelo perfeccionado ya tiene la capacidad de hablar con humanos en chino. Si deseas que tu modelo tenga capacidades más avanzadas, intenta utilizar un conjunto más diverso de datos de ajuste para entrenar tu modelo.


### Demostración

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/OaGEn7pVve0" title="Finetune LLM by Llama-Factory on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Referencias
- [https://github.com/hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- [https://github.com/Seeed-Projects/jetson-examples](https://github.com/Seeed-Projects/jetson-examples/tree/main/reComputer/scripts/llama-factory)

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