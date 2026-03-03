---
title: Crear un Proyecto(ESP-IDF) - SenseCAP Indicator
description: Guía paso a paso para desarrollar un proyecto para el SenseCAP Indicator usando ESP-IDF o Squareline Studio.
keywords: 
- SenseCAP Indicator
- ESP-IDF
- Squareline
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecap_indicator_project
sidebar_position: 4
last_update:
  date: 04/12/2024
  author: Spencer
---

## Descripción General
El SenseCAP Indicator integra MCUs de doble núcleo ESP32-S3 y RP2040. Este tutorial se enfoca en crear proyectos usando el ESP32-S3 con ESP-IDF.

Hay dos métodos simples de creación de proyectos: Plantilla de GitHub y Squareline Studio.

## Métodos de Creación de Proyectos

### 1. Plantilla de GitHub
#### Paso 1: Crear un Nuevo Proyecto
- Visita el [repositorio de Plantilla del SenseCAP Indicator](https://github.com/Seeed-Solution/indicator-esp-idf-template) y haz clic en `Use this template` para iniciar un nuevo repositorio.

#### Paso 2: Clonar el Repositorio
```bash
git clone https://github.com/your-username/indicator-esp-idf-template.git
```

#### Paso 3: Construir el Proyecto
Navega al directorio del proyecto y construye el proyecto:
```bash
cd indicator-esp-idf-template
idf.py build
```

#### Paso 4: Flashear el Proyecto
Conecta el dispositivo vía USB y flashea el proyecto usando:
```bash
idf.py -p PORT flash
```

#### Paso 5: Monitorear el Proyecto
Monitorea la salida con:
```bash
idf.py -p PORT monitor
```
*Nota: Reemplaza `PORT` con el número de puerto de tu dispositivo.*

### 2. Squareline Studio
Para principiantes, Squareline Studio ofrece una opción amigable y de bajo código para el diseño de UI.

Hay un blog [Diseño de UI de Bajo Código para SenseCAP Indicator con SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe) que proporciona una guía detallada sobre el uso de Squareline Studio para diseñar la UI.

#### Paso 1: Configuración
- Descarga e instala Squareline Studio desde [el sitio web de Squareline](https://studio.squareline.io/).
- Inicia el software y comienza un nuevo proyecto.

![](https://hackster.imgix.net/uploads/attachments/1650386/image_4QrcVcHWtG.png?auto=compress%2Cformat&w=1280&h=960)

#### Paso 2: Diseñar la UI
- Usa Squareline Studio para diseñar la UI del proyecto.

#### Paso 3: Generar y Construir el Proyecto
- Genera el código de la UI.
- Construye el proyecto usando ESP-IDF.

Para más información sobre el uso de Squareline Studio, consulta la guía sobre [Diseño de UI de Bajo Código para SenseCAP Indicator con SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe).

### Consejos para Principiantes
- Si eres nuevo en el desarrollo, comienza con Squareline Studio para crear un proyecto simple de parpadeo.
- Para personalización más avanzada, modifica el [ejemplo del SDK](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) directamente.

## Servicio ODM

Seeed Studio ofrece un servicio ODM integral de ventanilla única para acomodar personalizaciones rápidas y requisitos de escalado para diversas necesidades. Si buscas personalizar tu proyecto con características especializadas o necesitas asistencia para escalar tus operaciones de manera eficiente, por favor contáctanos. Para consultas e información más detallada, contáctanos en iot@seeed.cc. Estamos aquí para ayudar a convertir tus ideas únicas en realidad.

## Soporte Técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

Si encuentras algún problema o tienes alguna pregunta mientras sigues este tutorial, por favor no dudes en contactar a nuestro soporte técnico. ¡Siempre estamos aquí para ayudar!

Visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas o las [discusiones de GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartir todo lo que quieras!