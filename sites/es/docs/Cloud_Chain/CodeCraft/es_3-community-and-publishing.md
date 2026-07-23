---
description: Explora, reutiliza y publica proyectos de CodeCraft a través de la SenseCraft AI Application Gallery.
title: Comunidad y publicación de CodeCraft
keywords:
  - CodeCraft
  - Publicación
sidebar_label: 3. Comunidad y publicación
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/community-and-publishing
sidebar_position: 4
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/es/codecraft/community-and-publishing/
createdAt: '2026-06-30'
updatedAt: '2026-06-30'
---

# Comunidad y publicación de CodeCraft

CodeCraft no solo es adecuado para crear proyectos desde cero, sino que también te permite explorar, reutilizar y publicar trabajos a través de la SenseCraft AI Application Gallery.

En la Application Gallery, puedes explorar inspiración para proyectos, navegar por ejemplos oficiales, experimentar proyectos de la comunidad y publicar tus propias creaciones de CodeCraft para compartirlas con más usuarios. Otros usuarios pueden ver tus proyectos, desplegar firmware y, si lo permites, clonar tu proyecto para aprender o seguir desarrollándolo.

Este documento explica cómo explorar proyectos de la comunidad en la Application Gallery y cómo publicar proyectos de CodeCraft en la SenseCraft AI Application Gallery.

---

## 3.1 Application Gallery y proyectos de la comunidad

En la [Application Gallery](https://sensecraft.seeed.cc/ai/application) de SenseCraft AI, puedes completar todo el flujo de trabajo, desde descubrir inspiración hasta publicar proyectos, en un solo lugar.

![Proyectos de la comunidad de CodeCraft](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/codecraft-community-EN.png)

**¿Qué puedes hacer aquí?**

| Propósito | Descripción |
|------|----------|
| 🔍 Encontrar inspiración | Explora una gran cantidad de proyectos para obtener ideas |
| 📖 Aprender con ejemplos oficiales | Estudia implementaciones estandarizadas proporcionadas por el equipo oficial |
| ♻️ Reutilizar proyectos de la comunidad | Haz fork o adapta trabajos existentes directamente |
| 🚀 Publicar tu propio trabajo | Muestra tus creaciones a la comunidad |
| 🎮 Probar hardware rápidamente | Desde minijuegos hasta proyectos maker complejos, permitiendo prototipado rápido |

**Ventajas principales**

- **CodeCraft acelera el desarrollo** — Te ayuda a crear prototipos más rápido y reduce las barreras de programación.
- **Publicación con un clic** — Los proyectos terminados pueden publicarse directamente en la galería para su reutilización global.

> 💡 Adecuado para todas las etapas, desde proyectos casuales hasta creaciones maker avanzadas. Tanto principiantes como usuarios experimentados pueden beneficiarse.

---

**Cómo usar la Application Gallery**

| Método | Cómo funciona | Caso de uso |
| :--- | :--- | :--- |
| **Explorar y reutilizar** | **Clone** (copiar proyecto → modificar sobre la base del original) | • Probar rápidamente placas de desarrollo o sensores<br/>• Modificar ejemplos existentes<br/>• Adaptar proyectos oficiales para enseñanza o demostraciones |
| **Crear y publicar** | **Publish** (App → My Apps → Create New App → New Workspace) | • Mostrar ideas y recibir comentarios<br/>• Contribuir ejemplos para otros<br/>• Crear un portafolio personal de proyectos |

---

## 3.2 Publicación de aplicaciones

### 3.2.1 Preparación antes de publicar

Antes de publicar, prepara los siguientes materiales:

| Elemento | Requisitos | Notas |
|--------|----------|------|
| **Imagen del proyecto** | • Recomendado como imagen de portada<br/>• Relación de aspecto: `4:3`<br/>• Tamaño < `2MB`<br/>• Clara y visualmente representativa | Obligatorio |
| **Nombre y descripción del proyecto** | • Nombre conciso y atractivo<br/>• Puede incluir palabras clave del dispositivo (por ejemplo, `Wio Terminal`, `XIAO ESP32S3 Sense`) | Obligatorio |
| **Archivo de firmware** | • Formato: `.bin` o `.hex`<br/>• Debe probarse en hardware real<br/>• `.bin` para Wio Terminal / XIAO ESP32S3 Sense<br/>• `.hex` se usa comúnmente para Grove Beginner Kit | Obligatorio |
| **Archivo de código fuente** | • Por ejemplo, archivo `.ino`<br/>• Opcional, para aprendizaje y modificación | Opcional |

---

### 3.2.2 Preguntas frecuentes sobre publicación

| Pregunta | Respuesta |
|------|----------|
| **¿Qué pasa si falta el firmware?** | - El firmware es esencial; sin él otros no pueden ejecutar tu proyecto<br/>- Prueba siempre el firmware en hardware real antes de subirlo<br/>- Si no se ha generado, pregunta a CodeCraft AI: “Please provide a `.bin` firmware file.” |
| **¿Se admiten GIF en portadas y documentos?** | - Sí, se admiten GIF tanto en la portada como en la documentación<br/>- Recomendados para demostraciones dinámicas<br/>- Mantén el tamaño del archivo pequeño para evitar cargas lentas |
| **¿Se pueden incrustar vídeos?** | - Sí, se admiten enlaces de vídeo<br/>- Compatible con YouTube, Bilibili, Douyin y otras plataformas<br/>- Pega los enlaces directamente en el editor para la inserción automática |

---

## 3.3 Publicar una nueva app en SenseCraft AI

### 3.3.1 Ir a SenseCraft AI

Abre la [SenseCraft AI Application Gallery](https://sensecraft.seeed.cc/ai/application). Puedes crear una nueva aplicación desde cero o clonar una existente para modificarla y volver a publicarla.

---

### 3.3.2 Crear una nueva aplicación

Puedes empezar desde cero o usar una aplicación existente como plantilla.

#### 3.3.2.1 Clonar una app existente

Abre cualquier aplicación publicada y haz clic en `Clone` para seguir editando a partir de ella.

![Clonar app](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Clone-App-ZH.png)

---

#### 3.3.2.2 Crear una nueva app

Ve a la Application Gallery y haz clic en:

`My Apps` > `Create New App` > `Create New Workspace`

![Crear nueva app](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/create-new-app-EN.png)

---

### 3.3.3 Edición de contenido

Después de crear una aplicación, completa el contenido en cuatro pasos usando el editor.

![Flujo de edición de la app](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Edit-App-Flow-ZH.png)

---

#### 3.3.3.1 Descripción general de la app

Rellena la información básica de la app, incluyendo nombre, descripción, escenario, licencia e imágenes.

| Campo | Descripción y sugerencias | Obligatorio |
| :--- | :--- | :--- |
| **Nombre** | • Claro y atractivo<br/>• Incluye palabras clave del dispositivo como `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense`, `CodeCraft`<br/>• Ejemplo: `CodeCraft Smart Temperature & Humidity Display - Wio Terminal` | ✅ |
| **Descripción** | • Describe brevemente la función y el hardware utilizado<br/>• Menciona “creado con CodeCraft” si corresponde<br/>• Ejemplo: `This is a Wio Terminal project created with CodeCraft for real-time temperature and humidity display.` | ✅ |
| **Escenario** | Elige entre:<br/>• Educación<br/>• Hogar inteligente<br/>• Monitorización ambiental<br/>• Aplicaciones de sensores<br/>• Proyectos AIoT | ✅ |
| **Licencia** | **1. Permitir clonación:** permite que otros hagan fork y modifiquen tu proyecto<br/>**2. Permitir uso comercial:** permite el uso comercial si está permitido | ✅ |
| **Imágenes** | • Usa fotos reales del dispositivo<br/>• Relación de aspecto `4:3`, tamaño < `2MB`<br/>• Muestra claramente el resultado del proyecto<br/>• Hasta 16 imágenes | ✅ |

---

#### 3.3.3.2 Detalles de la app

En esta sección, describe el contexto del proyecto, el proceso de desarrollo y las instrucciones de uso. También puedes añadir bloques de firmware para el despliegue con un clic.

| Categoría | Instrucciones / Contenido | Ejemplo |
| :--- | :--- | :--- |
| **Introducción al proyecto** | • Describe la función y el hardware<br/>• Explica el flujo de trabajo de CodeCraft<br/>• Enumera los prompts utilizados<br/>• Muestra resultados y notas<br/>• Añade el enlace de CodeCraft | ![interfaz-documento-proyecto](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/project-doc-interface-ZH.png) |
| **Firmware y despliegue en el dispositivo** | • Inserta el bloque “Flash Firmware”<br/>• Selecciona el dispositivo objetivo<br/>• Compatible con Wio Terminal / Grove Beginner Kit / XIAO ESP32S3 Sense | ![Edición de documento](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Document-editing-page-ZH.png) |
| **Subir archivo de firmware** | • Sube archivos `.bin` o `.hex`<br/>• `.hex` normalmente para Grove Beginner Kit<br/>• Asegúrate de que el firmware esté probado | ![Subida de firmware](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/add-firmware-burning-function-block-ZH.png) |
| **Subir código fuente (opcional)** | • Sube archivos `.ino` u otros archivos de código fuente<br/>• Ayuda al aprendizaje y la modificación | ![Subir código fuente](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/upload-firmware-and-source-code-ZH.png) |
| **Detalles de desarrollo y pruebas** | • Describe los pasos con claridad<br/>• Incluye métodos de prueba y resultados<br/>• Añade capturas de pantalla o datos si es necesario | — |

---

#### 3.3.3.3 Lista de materiales

| Placas de desarrollo de Seeed | Otros productos de Seeed | Hardware / herramientas de terceros |
| :--- | :--- | :--- |
| `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense` | • Sensores Grove, módulos de expansión, etc.<br/>• Si falta algo, envía una solicitud mediante el [SenseCraft AI Device Request Form](https://seeedstudio.feishu.cn/share/base/form/shrcnNgPcW5x5rIrz4i066BlTqh) | • Hardware de terceros<br/>• Otros materiales relacionados |

---

#### 3.3.3.4 Vista previa y publicación

**Antes de enviar, asegúrate de lo siguiente:**

| Categoría | Lista de verificación |
| :--- | :--- |
| **Información básica** | • La imagen de portada es clara y atractiva<br/>• El nombre de la app es correcto<br/>• La descripción es clara<br/>• La configuración de la licencia es correcta |
| **Materiales y firmware** | • La lista de materiales está completa<br/>• El firmware se ha subido correctamente |
| **Validación de la función** | • El dispositivo funciona correctamente después de flashear |
| **Contenido opcional** | • Código fuente descargable (si se ha subido)<br/>• Otros archivos como modelos 3D o recursos vectoriales |

Una vez comprobado, haz clic en **Publish** y acepta la exención de responsabilidad.

---

### 3.3.4 Después de publicar

Tras la aprobación de la revisión, tu aplicación aparecerá en la SenseCraft AI Application Gallery.

Puedes copiar el enlace de la app y compartirlo en redes sociales, foros de la comunidad o documentación de proyectos para que más usuarios descubran y utilicen tu proyecto de CodeCraft.
