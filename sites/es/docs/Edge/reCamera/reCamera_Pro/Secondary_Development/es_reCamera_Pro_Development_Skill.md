---
title: Desarrolla aplicaciones reCamera Pro con agentes de programación con IA
description: Instala y usa la habilidad de desarrollo de reCamera Pro para convertir modelos ONNX, compilar aplicaciones nativas RKNN y desarrollar flujos de trabajo de cámara, audio, GStreamer y RTSP mediante conversaciones en lenguaje natural.
keywords:
  - reCamera
  - reCamera Pro
  - AI coding agent
  - Agent Skills
  - RKNN
  - RV1126B
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/cpp_skill/recamera_skill.png
slug: /recamera_pro_development_cpp_skill
sidebar_position: 3
last_update:
  date: 2026-08-14
  author: yylin
createdAt: '2026-08-14'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/es/recamera_pro_development_cpp_skill/
---

# Desarrolla aplicaciones reCamera Pro con agentes de programación con IA

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/cpp_skill/recamera_skill.png" alt="Flujo de trabajo de la habilidad de desarrollo de reCamera Pro" /></div>

## Introducción

La [habilidad de desarrollo de reCamera Pro](https://github.com/Seeed-Projects/recamera-pro-development-skill) empaqueta instrucciones específicas de reCamera Pro, scripts, referencias técnicas y una plantilla de aplicación nativa en C++ para agentes de programación con IA. Después de instalarla, puedes describir una aplicación en lenguaje natural y dejar que el agente prepare el flujo de trabajo de conversión de modelos y desarrollo nativo.

Por ejemplo, puedes pedirle al agente que:

- Convierta un modelo ONNX a RKNN para la NPU RV1126B
- Cree o modifique una aplicación nativa C/C++ con RKNN Runtime
- Capture fotogramas de la cámara con GStreamer
- Añada captura de micrófono o reproducción por altavoz
- Desarrolle una canalización de inferencia RTSP
- Inspeccione el host, el compilador cruzado, el sysroot, las bibliotecas de destino y los archivos ELF generados

El repositorio proporciona ediciones para OpenAI Codex, Claude Code, GitHub Copilot, Cursor y Gemini CLI. Cada edición usa el mismo conocimiento de desarrollo de reCamera Pro con instrucciones de instalación e invocación específicas del agente.

:::note
Esta habilidad está diseñada específicamente para **reCamera Pro con el SoC RV1126B y Linux aarch64**. No está pensada para la plataforma reCamera SG2002/riscv64.
:::

## Preparación de hardware

- Una reCamera Pro
- Un ordenador Linux o un ordenador Windows con WSL para la conversión de modelos y la compilación cruzada
- Una conexión de red para descargar el repositorio y las dependencias de desarrollo necesarias

<div align="center">
<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>
</div>

## Entorno de desarrollo compatible

La habilidad utiliza el siguiente contrato de destino al desarrollar aplicaciones de IA nativas:

| Elemento | Configuración compatible |
| --- | --- |
| Dispositivo | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| Arquitectura de destino | Linux aarch64 |
| Formato de modelo | Entrada ONNX, salida RKNN |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| Framework de cámara | GStreamer |
| Lenguaje de la aplicación nativa | C/C++ |

## Instalar la habilidad

### Selecciona tu agente de programación con IA

Clona la rama que coincida con el agente que utilizas:

| Agente de programación con IA | Rama | Directorio de habilidades a nivel de usuario |
| --- | --- | --- |
| OpenAI Codex | `main` | `~/.agents/skills/recamera-rknn-dev` |
| Claude Code | `claude-code` | `~/.claude/skills/recamera-rknn-dev` |
| GitHub Copilot | `github-copilot` | `~/.copilot/skills/recamera-rknn-dev` |
| Cursor | `cursor` | `~/.cursor/skills/recamera-rknn-dev` |
| Gemini CLI | `gemini-cli` | `~/.gemini/skills/recamera-rknn-dev` |

### Método 1: Pídele al agente que la instale

Si tu agente admite instalar habilidades desde un repositorio Git, envíale la siguiente solicitud:

```text
Install the reCamera Pro development skill from:
https://github.com/Seeed-Projects/recamera-pro-development-skill.git
```

Menciona el agente que utilizas para que seleccione la rama y el directorio de instalación correspondientes.

### Método 2: Instalar manualmente

El siguiente ejemplo instala la edición de OpenAI Codex:

```bash
git clone --branch main --single-branch \
  https://github.com/Seeed-Projects/recamera-pro-development-skill.git
cd recamera-pro-development-skill
./scripts/install_skill.sh
```

Para usar otro agente compatible, sustituye `main` por el nombre de su rama de la tabla anterior. El script de instalación específico de la rama copia la habilidad en el directorio de habilidades a nivel de usuario de ese agente.

Reinicia el agente después de la instalación si la habilidad no aparece en la sesión actual.

:::tip
Conserva el repositorio clonado. Para actualizar la habilidad más adelante, extrae los últimos cambios de la misma rama del agente y sigue el README y las instrucciones de instalación de esa rama.
:::

## Usar la habilidad

Puedes mencionar explícitamente la habilidad en tu prompt:

```text
Use the reCamera Pro development skill to check whether my computer is ready
to cross-compile native applications for reCamera Pro.
```

Después de instalar la habilidad, también puedes describir la tarea de forma natural. El agente cargará la guía relevante de conversión de modelos, compilación cruzada, cámara, audio o streaming.

### Convertir un modelo ONNX

```text
Use the reCamera Pro development skill to inspect model.onnx and convert it
to an RKNN model for RV1126B. Use representative images in calibration/images
for INT8 calibration and compare the RKNN output with the ONNX output.
```

El agente comprueba el contrato de entrada y salida del modelo, configura RKNN-Toolkit2 2.3.2 para `rv1126b` y mantiene los metadatos de preprocesamiento y conversión junto con el modelo generado.

:::warning
No adivines el preprocesamiento, el orden de color, la normalización ni la semántica de salida de un modelo. Proporciona la fuente original del modelo e imágenes de calibración representativas cuando solicites cuantización INT8.
:::

### Compilar una aplicación nativa de cámara

```text
Use the reCamera Pro development skill to create a C++ application that
captures /dev/video13 with GStreamer and runs my RKNN detection model.
Cross-compile it with my reCamera Pro sysroot and inspect the resulting ELF file.
```

La habilidad incluye una plantilla mínima de aplicación con RKNN Runtime y GStreamer. El agente adapta el preprocesamiento y el posprocesamiento al modelo en lugar de tratar la plantilla como un detector completo.

### Añadir audio o RTSP

```text
Add microphone capture and speaker playback to my reCamera Pro application.
Check the device's ALSA configuration before changing the code.
```

```text
Create an RTSP inference application for reCamera Pro and identify the target
GStreamer dependencies required by the cross build.
```

### Diagnosticar un proyecto existente

```text
Diagnose why this binary does not run on reCamera Pro. Check its architecture,
ELF interpreter, shared-library dependencies, runtime search path, and ABI
compatibility with the board sysroot.
```

## Flujo de trabajo de desarrollo

El agente sigue este flujo de trabajo general:

1. Inspeccionar el host Linux o WSL, la instalación de Conda, el compilador cruzado, el sysroot y los archivos locales de RKNN Runtime.
2. Inspeccionar el contrato del modelo ONNX y registrar su origen, licencia, disposición de entrada, normalización, orden de color y semántica de salida.
3. Convertir el modelo con RKNN-Toolkit2 2.3.2 para `rv1126b`; usar datos de calibración representativos para INT8.
4. Comparar la salida RKNN con el modelo ONNX de origen antes de integrarlo en una aplicación.
5. Crear o adaptar la aplicación nativa C/C++ y compilarla de forma cruzada contra un sysroot compatible con reCamera Pro.
6. Verificar que el ejecutable generado sea aarch64 y que sus rutas de RKNN, GStreamer, libc, ABI de C++ y tiempo de ejecución sean compatibles con el dispositivo.
7. Preparar el ejecutable, el modelo RKNN, el comando de ejecución y el contrato de entrada/salida esperado para el despliegue.

De forma predeterminada, la habilidad compila e inspecciona artefactos localmente. La transferencia de archivos y la ejecución en la reCamera Pro solo se realizan cuando tú lo solicitas y autorizas explícitamente.

De forma predeterminada, después de que el agente genere una salida, necesitas subirla manualmente al dispositivo para ejecutarla. El agente proporcionará el comando de ejecución correspondiente, y la salida suele ser un archivo binario ejecutable y un archivo de modelo rknn.

## Notas importantes

- Usa la API C de RKNN Runtime para aplicaciones nativas C/C++. `rknn-toolkit-lite2` no se utiliza para este flujo de trabajo.
- No enlaces bibliotecas x86_64 desde el ordenador de desarrollo en una aplicación de destino aarch64.
- No alimentes bytes de cámara NV12 directamente a un modelo RGB o BGR. La canalización o la aplicación deben realizar el preprocesamiento exacto que requiere el modelo.
- Una conversión de modelo satisfactoria no garantiza una inferencia correcta. Compara las salidas numéricas y el preprocesamiento con el framework de origen.
- La aplicación se enlaza contra un RKNN Runtime compatible con la placa y utiliza el tiempo de ejecución existente del dispositivo; no debe sustituir el RKNN Runtime instalado en la reCamera Pro.

## Solución de problemas

| Problema | Posible causa | Solución |
| --- | --- | --- |
| La habilidad no aparece en la lista | El agente no ha recargado su directorio de habilidades a nivel de usuario | Reinicia el agente y verifica que la habilidad se haya instalado en el directorio mostrado arriba |
| Se selecciona la plataforma incorrecta | Se mezclaron instrucciones para reCamera SG2002/riscv64 en la tarea | Indica que el destino es reCamera Pro, RV1126B y aarch64 |
| La conversión RKNN falla | La versión del toolkit, la compatibilidad de operadores ONNX o el contrato de entrada del modelo son incompatibles | Pídele al agente que inspeccione primero el modelo ONNX y use RKNN-Toolkit2 2.3.2 |
| La precisión INT8 es deficiente | Faltan imágenes de calibración o no son representativas | Crea un conjunto de datos representativo y lista una ruta de imagen por línea |
| El ejecutable es x86-64 | Se utilizó el compilador del host en lugar del compilador cruzado aarch64 | Vuelve a compilar con un compilador compatible con el destino y el sysroot de reCamera Pro |
| El binario no puede cargar una biblioteca | El sysroot, el ABI o la ruta de búsqueda de tiempo de ejecución no coinciden con la placa | Pídele al agente que inspeccione las dependencias ELF y compare cada biblioteca de destino con el dispositivo |
| Los fotogramas de la cámara tienen colores o resultados de inferencia incorrectos | La conversión NV12-a-RGB/BGR o la normalización no coinciden con el modelo | Vuelve a comprobar el contrato del modelo y haz explícito el preprocesamiento |

## Recursos

- [Repositorio de la habilidad de desarrollo de reCamera Pro](https://github.com/Seeed-Projects/recamera-pro-development-skill)
- [Página de producto de reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [Wiki de reCamera Pro](https://wiki.seeedstudio.com/es/recamera_pro_getting_started/)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
