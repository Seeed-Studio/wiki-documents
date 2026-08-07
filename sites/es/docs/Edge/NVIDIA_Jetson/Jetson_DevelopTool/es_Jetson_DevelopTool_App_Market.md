---
description: Explora e instala aplicaciones de IA en tu dispositivo Jetson usando el App Market en Seeed Jetson DevelopTool, incluidas YOLOv8, Ollama, DeepSeek y Node-RED.
title: App Market
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - App Market
  - YOLOv8
  - Ollama
  - DeepSeek
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_app_market
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/jetson_developtool_app_market/
---

El módulo **App Market** te permite explorar e instalar aplicaciones de IA populares directamente en tu dispositivo Jetson, sin necesidad de comandos manuales de Docker ni gestión de dependencias.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-app-market.png" style={{width:800, height:'auto'}}/></div>

## Aplicaciones disponibles

| App | Categoría | Descripción |
|-----|----------|-------------|
| YOLOv8 | Visión por computadora | Detección de objetos en tiempo real con aceleración NVIDIA TensorRT |
| Ollama | LLM | Ejecuta modelos de lenguaje grandes localmente en Jetson |
| DeepSeek | LLM | Motor de inferencia DeepSeek optimizado para despliegue en el borde |
| Node-RED | IoT / Automatización | Programación de flujos de bajo código para canalizaciones de IoT |
| Jupyter Lab | Desarrollo | Servidor interactivo de cuadernos de Python |
| VS Code Server | Desarrollo | IDE de VS Code basado en navegador |

## Instalación de una app

1. Conéctate a tu dispositivo Jetson (consulta [Connect Device](/es/jetson_developtool_connect_device)).
2. Abre la pestaña **App Market**.
3. Explora las apps disponibles o utiliza la barra de búsqueda para filtrar por categoría.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/appmarket-categories.png" style={{width:800, height:'auto'}}/></div>

4. Haz clic en **Install** en la app deseada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/appmarket-app-cards.png" style={{width:800, height:'auto'}}/></div>

5. La herramienta descargará la imagen de Docker adecuada y la configurará automáticamente para la versión de JetPack de tu Jetson.
6. Una vez instalada, haz clic en **Launch** para iniciar la app y obtener la URL de acceso (para apps basadas en web) o la información de conexión.

:::tip
Las apps de App Market se empaquetan como contenedores de Docker. Asegúrate de que Docker esté instalado en tu Jetson. Si no lo está, la herramienta ofrecerá instalarlo automáticamente.
:::

## Demo: implementación con un clic de Depth Anything V3

El siguiente video muestra cómo implementar **Depth Anything V3** en un dispositivo Jetson con un solo clic desde el App Market.

<div style={{textAlign:'center'}}>
  <video width="800" controls>
    <source src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/depth-anything-v3-deploy.mp4" type="video/mp4"/>
  </video>
</div>

## Gestión de apps instaladas

En la pestaña **Installed**, puedes:

- **Iniciar / Detener** apps individuales
- **Actualizar** a la versión más reciente
- **Eliminar** apps para liberar espacio de almacenamiento
- Ver el mapeo de puertos y la URL de acceso de cada app

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
