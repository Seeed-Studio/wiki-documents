---
description: Instala y usa la Skill reCamera Pro Python SDK con agentes de programación con IA para crear aplicaciones recamera_ext y Kit, convertir modelos RKNN, empaquetar y desplegar en el App Center.
title: Usar la Skill
keywords:
  - reCamera
  - reCamera Pro
  - Python SDK
  - AI coding agent
  - Agent Skills
  - recamera_ext
  - Kit
  - RKNN
  - RV1126B
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_python_sdk_skill
sku: 10003420
sidebar_position: 4.5
last_update:
  date: '2026-11-25'
  author: Go
url: https://wiki.seeedstudio.com/es/recamera_pro_python_sdk_skill/
createdAt: '2026-11-23'
updatedAt: '2026-11-25'
---

# Usa la Skill para desarrollar aplicaciones Python para reCamera Pro

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" alt="reCamera Pro Python SDK Skill" /></div>

## Introducción

La [reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk) empaqueta el flujo de trabajo del SDK de extensión de Python para reCamera Pro (RV1126B) en una Agent Skill. Después de la instalación, tu agente de programación puede evaluar una idea, escribir demos de `recamera_ext`, crear aplicaciones Kit, convertir modelos ONNX, validar y empaquetar la aplicación, y desplegarla por SSH.

La skill no se ejecuta en la cámara. Las aplicaciones que genera usan el `recamera_ext`, `kit` y el manifiesto v2 de App Center del lado del dispositivo.

:::note
Esta skill está dirigida a **reCamera Pro con el SoC RV1126B y Linux aarch64**. **No** es para la reCamera 2002 SG2002/RISC-V. Para desarrollo nativo en C++, usa la [reCamera Pro Development Skill](/es/recamera_pro_development_cpp_skill/).
:::

## Lo que puede hacer la skill

- **Evaluar una solicitud** y elegir la ruta directa del SDK, Kit o la API HTTP pública
- **Escribir demos con el SDK directo** con `FrameSource` y `ResultSink`
- **Crear aplicaciones Kit** con carga de modelos, preprocesamiento, postprocesamiento de detecciones y la superposición en el navegador
- **Convertir modelos** de ONNX a RKNN, con calibración INT8 y comparación numérica
- **Validar y empaquetar** el manifiesto y el código fuente en un `.tar.gz` de App Center v2
- **Desplegar y diagnosticar** por SSH: subir, instalar, verificar y ejecutar diagnósticos de solo lectura

## Entorno compatible

| Elemento | Configuración compatible |
| --- | --- |
| Dispositivo | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| Arquitectura de destino | Linux aarch64 |
| Python en el dispositivo | 3.11 |
| SDK de ejecución | `recamera_ext` 1.5.0 + `kit` |
| Runtime de NPU | RKNN Runtime 2.3.2 |
| Perfil de la plataforma de aplicaciones | `rv1126b-linux-gnu-cp311-rknn232-v1` |
| Host de conversión | Linux x86_64, Python 3.11, RKNN-Toolkit2 2.3.2 |
| Agentes compatibles | Claude Code, Codex y otros agentes compatibles con Agent Skills |
| No compatible | SG2002 / RISC-V / `.cvimodel` |

## Instalar la Skill

La skill es una carpeta dentro del repositorio del SDK, sin instalador independiente. Clona el repositorio y cópialo en el directorio de skills de tu agente:

```bash
git clone --depth 1 https://github.com/Seeed-Studio/recamera-pro-ext-api.git
mkdir -p ~/.claude/skills
cp -r recamera-pro-ext-api/skill/recamera-pysdk ~/.claude/skills/recamera-pysdk
```

Codex usa `~/.agents/skills/recamera-pysdk`; para desarrollo con ámbito de proyecto, usa `.claude/skills/`. Conserva `SKILL.md`, `references/` y `scripts/`, y luego reinicia el agente.

## Usar la Skill: de frames a una aplicación de App Center

### 1. Describe la solicitud

```text
Use the recamera-pysdk skill to assess this idea: I want to read the camera
stream, run my own motion analysis, and draw the result on the preview. Tell me
whether it is supported, which layer to use, and what runtime preconditions apply.
```

El agente responde con **Compatible / Compatible con condiciones previas / No compatible mediante este SDK**, además de la ruta de API y los límites. El SDK no controla el pipeline multimedia de la cámara y no tiene una API unificada de reproducción por altavoz; el comportamiento no compatible debe indicarse directamente.

### 2. Captura mínima de frames e inyección de resultados

```python
import numpy as np
from recamera_ext import FrameSource, ResultSink

prev = None
with FrameSource() as src, ResultSink(source_id="motion") as sink:
    for frame in src:
        cur = frame.array                 # zero-copy NV12 Y plane view
        if prev is not None:
            diff = np.abs(cur.astype(np.int16) - prev.astype(np.int16))
            ys, xs = np.nonzero(diff > 25)
            if xs.size >= 800:
                h, w = cur.shape
                box = (xs.min()/w, ys.min()/h,
                       xs.max()/w, ys.max()/h, 0.9, "motion")
                sink.send_detections(pts_us=frame.pts_us, boxes=[box])
        prev = cur.copy()                 # the next frame overwrites this view
```

- `frame.array` solo es válido para la iteración actual; llama a `.copy()` antes de almacenarlo, ponerlo en cola o compartirlo entre hilos
- Las cajas de `ResultSink` están normalizadas a `[0, 1]`; los valores en píxeles se colapsan en una caja invisible de 1 píxel
- Los sockets de extensión son solo para root en la plataforma actual, así que ejecuta el proceso como root

### 3. Crear una aplicación de App Center

```python
from kit.app import App, run_app
from kit.runtime.postprocess.detect import postprocess
from kit import events as E

class MyDetector(App):
    owns_loop = True
    model_frame = "hw-direct"
    model_dma_input = True

    def run(self):
        for frame in self.frames():
            x = self.pre(frame)
            outs = self.models.det.infer(x)
            dets = postprocess(outs, x.info,
                               conf_thres=self.conf, iou_thres=self.iou,
                               input_size=self._pre_size,
                               class_names=self.class_names)
            self.emit([E.detection(d) for d in dets],
                      frame.pts, results=dets)

if __name__ == "__main__":
    run_app(MyDetector())
```

`conf` e `iou` se enlazan automáticamente desde `config_schema` del manifiesto. `infer()` devuelve tensores RKNN en bruto y debe pasar por `postprocess`. Tres reglas del manifiesto causan la mayoría de los fallos en el dispositivo:

- **NPU**: declara `npu.rknn: scheduled`, y enumera cada `models[].file` en `artifacts[]` como un `rknn` incluido con su `sha256` y `size` reales
- **Entry**: mantén `entry` en la raíz del paquete (por ejemplo `app.py`) con los modelos y etiquetas junto a él; no uses `Path(__file__).parents[...]`
- **Overlay**: las cajas del navegador necesitan `output.contract_version: 2`, `output.sink: "ws"`, un campo `box` desde `results[].box`, y `render.boxes`

## Referencia de comandos

Solo se muestran los puntos de entrada comunes. Consulta `SKILL.md` y `references/` de la skill para ver todas las opciones:

```bash
# Offline validation
python skill/recamera-pysdk/scripts/validate_app.py --app-dir ./my-detector --mode demo

# Package the App Center archive
python skill/recamera-pysdk/scripts/package_app.py --app-dir ./my-detector --out ./dist

# ONNX -> RKNN (INT8)
python skill/recamera-pysdk/scripts/convert_model.py convert \
  --onnx model.onnx --recipe recipe.json --out build/model \
  --quant i8 --dataset calibration/images.txt \
  --model-id my-detector --task detect

# Upload and install
python skill/recamera-pysdk/scripts/deploy_app.py \
  --archive dist/<app>.tar.gz --host <device-ip> --user root \
  --action install --report deploy-report.json
```

- [SKILL.md](https://github.com/Seeed-Studio/recamera-pro-ext-api/blob/main/skill/recamera-pysdk/SKILL.md)
- [Referencia de la API](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk/references/api)

## Flujo de trabajo de desarrollo

1. **Evaluar** si la solicitud es compatible y elegir SDK directo o Kit.
2. **Implementar** con la forma actual de `kit.app.App` o llamadas directas a `recamera_ext`.
3. **Convertir** un nuevo modelo ONNX a RKNN con una receta de preprocesamiento explícita.
4. **Validar** sin conexión con `validate_app.py` y corregir todos los errores.
5. **Empaquetar** el `.tar.gz` del manifiesto v2 y liberar el bloqueo.
6. **Desplegar** por SSH cuando sea necesario, luego instalar y verificar.
7. **Aceptar** informando por separado los resultados de validación, instalación, ciclo de vida y tareas; el éxito del empaquetado no implica éxito en el dispositivo.

## Solución de problemas

| Problema | Causa probable | Qué hacer |
| --- | --- | --- |
| La skill no aparece en la lista | El agente no ha recargado su directorio de skills | Confirma que la carpeta contiene `SKILL.md`, luego reinicia el agente |
| El agente sugiere C++/GStreamer | La tarea se enroutó a la skill nativa | Indica que el destino es el Python SDK / RV1126B |
| `rc_ext_frame_open failed` | El firmware no tiene el endpoint, o el proceso no es root | Comprueba `/run/recamera/` y ejecuta como root |
| No hay cajas en la vista previa | Falta el contrato de salida/renderizado o es inconsistente | Comprueba `brokered`, `contract_version: 2`, `box`, `coord` y `render.boxes` |
| `inference authorization failed` | Un modelo programado no tiene artefacto `rknn` incluido | Añade el `sha256`, `size`, `file` y `mount` correspondientes |
| El empaquetado falla en Windows | Los miembros del archivo contienen barras invertidas | Compila en un host POSIX o mantén los recursos en la raíz del paquete |

## Recursos

- [reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk)
- [Repositorio de la reCamera Pro Extension API](https://github.com/Seeed-Studio/recamera-pro-ext-api)
- [reCamera Pro Development Skill (C++)](/es/recamera_pro_development_cpp_skill/)
- [Desarrollo en C/C++ para reCamera 2002](/es/recamera_develop_with_c_cpp/)
- [Página de producto de reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)

## Preguntas y respuestas

**P: El agente no muestra la skill recamera-pysdk después de la instalación. ¿Qué debo comprobar?**

R: Confirma que la carpeta copiada contiene directamente `SKILL.md`, `references/` y `scripts/` (no anidada un nivel más profundo), y que está en el directorio de skills correcto: `~/.claude/skills/` para Claude Code, `~/.agents/skills/` para Codex, o `.claude/skills/` para uso con ámbito de proyecto. Luego reinicia el agente para que recargue el directorio de skills.

**P: La aplicación se ejecuta en el dispositivo, pero no aparecen cajas en la vista previa del navegador. ¿Por qué?**

R: Normalmente falta el contrato de salida/renderizado o es inconsistente. Comprueba que el manifiesto establezca `output.contract_version: 2` y `output.sink: "ws"`, que las detecciones lleven un campo `box` obtenido de `results[].box`, y que `render.boxes` esté habilitado. Las cajas deben estar normalizadas a `[0, 1]`; los valores en píxeles se colapsan en una caja invisible de 1 píxel.

**P: Obtengo `rc_ext_frame_open failed` o `inference authorization failed` en el dispositivo. ¿Cómo lo soluciono?**

R: Para `rc_ext_frame_open failed`, verifica que el firmware exponga los sockets bajo `/run/recamera/` y ejecuta el proceso como root. Para `inference authorization failed`, un modelo RKNN programado debe estar listado en `artifacts[]` como un `rknn` incluido con su `sha256`, `size`, `file` y `mount` reales.

### Exportar registros

Si el problema persiste, recopila los registros de tu reCamera Pro (RV1126B) y envíalos al soporte. Sustituye `<device-ip>` por la dirección IP de tu dispositivo:

```bash
# Pack device logs (falls back to /var/log + dmesg if /userdata/log is absent)
ssh root@<device-ip> 'tar czf /tmp/recamera-pro-logs.tar.gz /var/log /userdata/log 2>/dev/null; dmesg > /tmp/recamera-pro-dmesg.log'

# Pull the archives back to your host
scp root@<device-ip>:/tmp/recamera-pro-logs.tar.gz .
scp root@<device-ip>:/tmp/recamera-pro-dmesg.log .
```

Envía por correo electrónico los archivos comprimidos de registro, una breve descripción del problema (qué hiciste / qué ocurrió / qué esperabas) y el modelo de hardware y la versión de firmware a **techsupport@seeed.io**.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
