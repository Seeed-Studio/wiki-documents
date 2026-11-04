---
description: Descarga, verifica y extrae el paquete completo del código fuente BSP de reCamera Pro.
title: Descargar y extraer el paquete de código fuente
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_download
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_download/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Descargar y extraer el paquete de código fuente

Descarga el archivo comprimido aquí: [recamera-pro-sdk-v1.0.10.tar.gz](https://seeedstudio88-my.sharepoint.com/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FreCamera%2Frecamera%2Dpro%2Dsdk%2Dv1%2E0%2E10%2Etar%2Egz&parent=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FreCamera&ga=1). Este es el paquete completo del código fuente BSP descrito en esta guía.

## Información del paquete

| Elemento | Valor |
| --- | --- |
| Nombre de archivo | `recamera-pro-sdk-v1.0.10.tar.gz` |
| Tamaño del archivo comprimido | Aproximadamente 3,7 GB (3,928,456,385 bytes) |
| Tamaño tras la extracción | Aproximadamente 12 GB |
| Directorio de nivel superior | `recamera-pro-sdk-v1.0.10/` |
| SHA-256 | `0c171f7a65ed87a7112f07eb0408b91b934f456af32d91608f961a4a21bced8a` |

> El valor SHA-256 se calculó a partir del archivo comprimido de distribución real cuando se escribió este Wiki. Los archivos comprimidos reempaquetados o los paquetes creados con `./build.sh save` pueden tener una suma de verificación diferente; en ese caso, utiliza la suma de verificación del registro de la versión.

## Requisitos del host

| Elemento | Requisito |
| --- | --- |
| Sistema operativo | Ubuntu de 64 bits, se recomienda 20.04 o posterior |
| Arquitectura de CPU | x86_64 o aarch64 |
| Espacio en disco | Al menos 20 GB libres en la partición del SDK; se recomiendan 100 GB o más si mantienes múltiples resultados de compilación |
| Memoria | Se recomiendan 16 GB o más; las compilaciones paralelas de medios y kernel pueden usar mucha memoria |
| Red | Necesaria en la primera ejecución de `setup_build_env.sh` para descargar herramientas y dependencias |

Referencia medida: en un host con una partición para el SDK de 937 GB (242 GB usados), extraer el archivo comprimido de 3,7 GB hasta 12 GB tomó unos 20 segundos con `pigz` en paralelo con 24 núcleos. El `gzip` monohilo del sistema puede tardar varias veces más.

## Verificar el archivo comprimido

```bash
sha256sum recamera-pro-sdk-v1.0.10.tar.gz
```

Compara la salida con la suma de verificación anterior. Si no coincide, es posible que la descarga esté truncada o reempaquetada. **No continúes.**

## Extraer el archivo comprimido

Se recomienda la extracción en paralelo con `pigz`:

```bash
sudo apt install -y pigz
tar -I "pigz -d -p 16" -xf recamera-pro-sdk-v1.0.10.tar.gz
```

O utiliza el comando estándar:

```bash
tar -xzf recamera-pro-sdk-v1.0.10.tar.gz
```

Después de la extracción, confirma que existan los puntos de entrada principales. Estos son enlaces simbólicos dentro de `project/`:

```bash
cd recamera-pro-sdk-v1.0.10
ls -l build.sh rkflash.sh readme_cn.txt setup_build_env.sh
```

La salida esperada incluye:

```text
build.sh -> project/build.sh
rkflash.sh -> project/rkflash.sh
readme_cn.txt -> project/readme_cn.txt
```

## Precauciones importantes

- **No extraigas ni copies este paquete en Windows.** El SDK depende en gran medida de enlaces simbólicos (`build.sh`, `.BoardConfig.mk` y accesos directos PDF bajo `docs/`) y de permisos de ejecución (`build.sh`, `rkflash.sh` y binarios bajo `tools/`). Los sistemas de archivos de Windows pueden perderlos, lo que provoca fallos de compilación o comandos ausentes. El archivo incluido `readme_en.txt` también lo menciona.
- Si necesitas transferir el paquete entre Windows y Linux, mantenlo como un archivo tar y extráelo en Linux, o utiliza `git` / `repo` para obtenerlo.
- Evita espacios y caracteres no ASCII en la ruta de instalación. Buildroot y algunos Makefiles no manejan los espacios de forma fiable.
- No compiles en una partición montada con `noexec`; binarios como `tools/linux/Linux_Upgrade_Tool/upgrade_tool` necesitan permiso de ejecución.
- El SDK extraído **no** contiene `.repo/`; esto es una instantánea del código fuente. Ignora las instrucciones de `repo sync` en `readme_en.txt` porque no se aplican a este paquete.

## Reparar permisos de ejecución perdidos (recuperación)

Si el paquete se transfirió a través de un entorno que no preservó los permisos, prueba:

```bash
cd recamera-pro-sdk-v1.0.10
chmod +x build.sh rkflash.sh setup_build_env.sh project/build.sh project/rkflash.sh
chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool
find . -name "*.sh" -exec chmod +x {} \;
```

Una vez que se pierden los enlaces simbólicos, `chmod` no puede restaurarlos; vuelve a extraer el archivo tar original.

## Primer paso después de la extracción

```bash
./setup_build_env.sh --check     # Check only; report missing tools without changing anything
```

Consulta [Configurar el entorno de compilación](/es/recamera_pro_bsp_build_environment/) para más detalles.

## Actualizar o cambiar a una nueva versión del SDK

- Cada versión del SDK es un archivo tar independiente. Extrae una nueva versión en un **directorio diferente**; no mezcles versiones.
- Los números de configuración de placa en el menú `lunch` se generan ordenando los nombres de archivo bajo `project/cfg/` y pueden cambiar entre versiones. Registra el nombre de archivo completo de la configuración en la documentación y en los scripts; no dependas del número del menú.
- Para migrar tu aplicación, copia el directorio completo `project/app/<your-directory>/` a la misma ubicación en el nuevo SDK y luego habilita la opción correspondiente `RK_APP_xxx=y` en la nueva configuración de placa.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>