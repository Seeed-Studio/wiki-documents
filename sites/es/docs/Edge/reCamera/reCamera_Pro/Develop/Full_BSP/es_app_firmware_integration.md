---
description: Añade una aplicación al código fuente completo del BSP, inclúyela en la compilación y empaquétala en el rootfs del producto.
title: Integrar una aplicación en el firmware del producto
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_app_integration
sku: 10003420
sidebar_position: 5
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_app_integration/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Integrar una aplicación en el firmware del producto

Esta guía es para desarrolladores que necesitan incluir una aplicación en la compilación del producto reCamera Pro y en la imagen de firmware. Primero selecciona la configuración de la placa de destino. Compila media de antemano solo si tu aplicación enlaza con bibliotecas de medios.

## Cómo funciona el framework de compilación de aplicaciones

Si solo necesitas compilar una aplicación C/C++ o RKNN independiente y no necesitas cambiar la compilación del producto ni la integración del firmware, utiliza en su lugar el [SDK de compilación cruzada](https://github.com/Seeed-Projects/recamera_pro_toolchain) de Seeed.

`project/app/Makefile` detecta subdirectorios con un comodín:

```make
app_src := $(wildcard ./*/Makefile ./component/fastboot_server/Makefile ./component/ao_record_service/Makefile)
```

**Cualquier directorio bajo `project/app/<your-app>/` con un `Makefile` se incluye automáticamente en la compilación**; no se requiere un registro por separado.

Las salidas se recopilan en dos etapas:

```text
project/app/<your-app>/out/          ← PKG_BIN for the individual application
        ↓ MAROC_COPY_PKG_TO_APP_OUTPUT
project/app/out/                    ← RK_APP_OUTPUT, aggregate of all applications
        ↓ copied again by the top-level Makefile
output/out/app_out/                 ← RK_PROJECT_PATH_APP, used to package the rootfs
```

Variables clave de `project/app/Makefile.param`:

| Variable | Valor / significado |
| --- | --- |
| `RK_APP_CROSS` | Prefijo del compilador cruzado; `aarch64-rockchip1240-linux-gnu` para esta placa |
| `RK_APP_CFLAGS` | `-march=armv8-a -mtune=cortex-a53` (derivado del nombre de la toolchain) |
| `RK_APP_OPTS` | `-D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64` más flags de optimización |
| `RK_APP_MEDIA_INCLUDE_PATH` | `output/out/media_out/include` |
| `RK_APP_MEDIA_LIBS_PATH` | `output/out/media_out/lib` |
| `RK_APP_OUTPUT` | `project/app/out` |
| `RK_APP_CHIP` | `rv1126b` |
| `RK_APP_BUILDROOT_STAGING` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/staging` |
| `RK_APP_BUILDROOT_TARGET` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/target` |
| `RK_APP_JOBS` | Número de trabajos en paralelo |

La optimización se controla mediante `RK_BUILD_VERSION_TYPE`: el modo RELEASE predeterminado usa `-Os`, `DEBUG` usa `-O0 -g -ggdb -pg`, y `ASAN` añade `-fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all`.

`Makefile.param` también añade automáticamente `tools/linux/toolchain/<cross-compiler>/bin` a `PATH`, por lo que no necesitas ejecutar `env_install_toolchain.sh`.

## Ejemplo mínimo: `hello_world`

### Crear el directorio

```bash
mkdir -p project/app/hello_world && cd project/app/hello_world
```

### `hello.c`

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Hello World from RV1126B IPC SDK!\n");
    return 0;
}
```

### `Makefile`

```make
ifeq ($(APP_PARAM), )
    APP_PARAM := ../Makefile.param
    include $(APP_PARAM)
endif

export LC_ALL=C
SHELL := /bin/bash

CURRENT_DIR := $(shell pwd)

PKG_NAME := hello_world
PKG_BIN  ?= out

ifeq ($(RK_APP_HELLO_WORLD),y)
PKG_TARGET := hello_world-build
endif

all: $(PKG_TARGET)
	@echo "build $(PKG_NAME) done"

hello_world-build:
	rm -rf $(PKG_BIN); \
	mkdir -p $(PKG_BIN)/bin;
	$(RK_APP_CROSS)-gcc $(RK_APP_OPTS) $(RK_APP_CFLAGS) hello.c -o $(PKG_BIN)/bin/hello_world
	$(call MAROC_COPY_PKG_TO_APP_OUTPUT, $(RK_APP_OUTPUT), $(PKG_BIN))

clean:
	rm -rf $(PKG_BIN)

distclean: clean

info:
	@echo "$(PKG_NAME): RK_APP_HELLO_WORLD=$(RK_APP_HELLO_WORLD)"
```

> Las líneas de receta en un Makefile deben estar indentadas con un **Tab**, no con espacios. Verifica la indentación después de copiar el código anterior.

### Añadir un interruptor de compilación

Edita el archivo seleccionado por `.BoardConfig.mk` (`project/cfg/BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`) y añade esto en la sección de configuración de la aplicación:

```bash
export RK_APP_HELLO_WORLD=y
```

El interruptor es opcional (puedes eliminar la condición `ifeq` del Makefile para compilar incondicionalmente), pero **se recomienda mantenerlo** para que puedas habilitar o deshabilitar la aplicación para diferentes placas. Las aplicaciones existentes como `recamera_notify`, `recamera_onvif`, `recamera_services`, `recamera_web` y `rkllm-inference` usan interruptores `RK_APP_xxx`.

### Compilar y verificar

```bash
./build.sh app                          # Build enabled applications through the aggregate entry point
ls output/out/app_out/bin/hello_world   # Confirm the output exists

make -C project/app/hello_world         # Build only this application (run lunch first)
make -C project/app/hello_world distclean
```

Para probar la aplicación en el dispositivo sin volver a flashear la imagen:

```bash
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/
ssh root@<device-IP> '/userdata/hello_world'
```

Para incluir la aplicación en una imagen de firmware:

```bash
./build.sh firmware
sudo ./rkflash.sh rootfs
```

## Cómo se asignan los directorios de salida al rootfs

Cuando `build.sh` empaqueta el rootfs, fusiona las salidas de las aplicaciones por nombre de directorio:

| Directorio bajo `app_out` | Ubicación en el dispositivo |
| --- | --- |
| `bin/` | `/bin` o `/usr/bin` |
| `lib/` | `/usr/lib`, `/lib` |
| `etc/` | `/etc` |
| `share/` | `/usr/share` |
| `root/` | **Raíz del rootfs, `/`** (copiado tal cual; consulta `__COPY_FILES $RK_PROJECT_PATH_APP/root` en `__PACKAGE_ROOTFS`) |
| `install_to_userdata/` | Partición `/userdata` |

El directorio `root/` es la opción más flexible: para instalar un archivo en `/usr/bin/foo`, colócalo bajo `<PKG_BIN>/root/usr/bin/foo`. La aplicación `project/app/wifi_app` hace esto con `install_out/root/usr/bin`.

Usa `install_to_userdata/` para datos que pertenecen a una partición escribible, como modelos, configuración o grabaciones.

> El SDK actual tiene un problema de código fuente en la ruta de empaquetado `install_to_userdata/` de la aplicación que puede impedir que los archivos se incluyan en la imagen de userdata. Consulta [Revisión de código fuente y problemas conocidos](/es/recamera_pro_sdk_source_notes/) para ver el impacto y la solución alternativa.

El empaquetado también procesa símbolos automáticamente (`__RELEASE_FILESYSTEM_FILES()` en `build.sh`): elimina `lib*.la`, `lib*.a` y todos los directorios `pkgconfig`. El modo RELEASE ejecuta `strip` sobre ejecutables y `*.so*`, excepto `libpthread*.so*` y `ld-*.so*`; los archivos `.ko` reciben `--strip-debug`. El modo DEBUG omite el stripping y también instala los símbolos de depuración de libc.

## Ejemplo real: enlazar bibliotecas de medios

`project/app/ao_record_demo/Makefile` es una plantilla práctica que muestra cómo enlazar con rockit:

```make
RK_APP_CFLAGS = -I $(RK_APP_MEDIA_INCLUDE_PATH) \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/libdrm \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/uAPI \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/uAPI2 \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/algos \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/common \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/xcore \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/iq_parser \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/iq_parser_v2 \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/smartIr \
                -I $(RK_APP_OUTPUT)/include \
                -I $(RK_APP_OUTPUT)/include/freetype2

RK_APP_LDFLAGS = -L $(RK_APP_MEDIA_LIBS_PATH) -L $(RK_APP_OUTPUT)/lib

RK_APP_OPTS += -Wl,-rpath-link,$(RK_APP_MEDIA_LIBS_PATH):$(RK_APP_PATH_LIB_INCLUDE)/root/usr/lib:$(RK_APP_OUTPUT)/lib

LD_FLAGS += $(RK_APP_OPTS) $(RK_APP_LDFLAGS) $(RK_APP_CFLAGS) \
            -Wl,-Bstatic -pthread -lrockit -lrtsp \
            -lrockchip_mpp -lrksysutils -lrga -Wl,-Bdynamic \
            -Wl,--gc-sections -Wl,--as-needed \
            -lrkaiq -lstdc++ -lm
```

Puntos clave:

- La raíz de include es `$(RK_APP_MEDIA_INCLUDE_PATH)`. Los headers de rkaiq están repartidos en múltiples subdirectorios, por lo que cada uno necesita una opción `-I`.
- `-Wl,-rpath-link,...` resuelve dependencias indirectas en tiempo de enlace; sin ello, el linker puede informar `warning: libxxx.so not found`.
- `-Wl,-Bstatic ... -Wl,-Bdynamic` enlaza estáticamente rockit/rtsp/mpp/rga manteniendo rkaiq como dinámica. Esto sigue las convenciones de las aplicaciones de referencia de Rockchip y reduce las dependencias en tiempo de ejecución bajo `/oem/usr/lib`.
- `-Wl,--gc-sections -Wl,--as-needed` reduce el tamaño del binario.

## Iniciar la aplicación en el arranque

El punto de entrada de inicio de aplicaciones de reCamera Pro es `/oem/usr/bin/RkLunch.sh` (el script de parada es `RkLunch-stop.sh`). `__PACKAGE_OEM()` en `build.sh` genera un script de inicio bajo `/etc/init.d/` con este contenido:

```sh
#!/bin/sh
[ -f /etc/profile.d/RkEnv.sh ] && source /etc/profile.d/RkEnv.sh
case $1 in
    start) sh /oem/usr/bin/RkLunch.sh ;;
    stop)  sh /oem/usr/bin/RkLunch-stop.sh ;;
    *)     exit 1 ;;
esac
```

**Enfoque recomendado:** añade tu comando de inicio de aplicación al final de `RkLunch.sh`. El archivo fuente es `project/app/recamera_ipc/src/rv1126b_ipc/RkLunch.sh`. Esto permite que tu aplicación comparta el `PATH` y `LD_LIBRARY_PATH` establecidos por `RkEnv.sh` (incluido `/oem/usr/lib`) y use el flujo de parada común.

Si necesitas un script de inicio separado, sigue el patrón de overlay (`start-stop-daemon -S -b -m -p <pidfile> -x <executable> -- <arguments>`) y nombra el archivo `S<priority><name>` bajo `<PKG_BIN>/root/etc/init.d/`. Las prioridades existentes son `S00board-id`, `S10log`, `S15watchdog`, `S20hwclock`, `S40gmgr`, `S40skt2ws`, `S40tmir`, `S49rcisd`, `S50sshd`, `S50ttyd`, `S50go2rtc`, `S70vsftpd`, `S99factorykey`, `S99inotify_passwd` y `S99led`.

## Usar CMake en lugar de un Makefile

`recamera_ipc` y `recamera_web_backend` usan CMake. Mantén un Makefile externo fino para que el comodín del framework de aplicaciones encuentre la aplicación y luego invoca CMake dentro de él:

```make
ifeq ($(APP_PARAM), )
    APP_PARAM := ../Makefile.param
    include $(APP_PARAM)
endif
PKG_BIN ?= out

all:
	rm -rf build && mkdir -p build
	cd build && cmake .. \
	    -DCMAKE_TOOLCHAIN_FILE=../cmake/toolchain.cmake \
	    -DCMAKE_INSTALL_PREFIX=$(CURDIR)/$(PKG_BIN)
	make -C build -j$(RK_APP_JOBS) install
	$(call MAROC_COPY_PKG_TO_APP_OUTPUT, $(RK_APP_OUTPUT), $(PKG_BIN))

distclean:
	rm -rf build $(PKG_BIN)
clean: distclean
```

Consulta [Choose a Development Path](/es/recamera_pro_dev_path/) para el enfoque basado en toolchain-file.

## Aplicaciones Rust / Go / Node.js / Python

El directorio `project/app/` incluye ejemplos escritos en lenguajes distintos de C; utiliza su enfoque de compilación como referencia:

| Aplicación | Lenguaje | Enfoque de compilación |
| --- | --- | --- |
| `recamera_services/gmgr` | Rust | `Cargo.toml` + `Cross.toml`; usa `cross` para compilación cruzada basada en Docker. `setup-libgpiod.sh` prepara las dependencias |
| `recamera_web/recamera_web_react` | Node.js / React | `package.json` + `nginx.conf`; genera recursos estáticos |
| `recamera_web/recamera_web_backend` | C/C++ | CMake + `thirdparty` |
| `recamera_notify/notify-server` | Python | Ejecuta el script de instalación e instala `requirements.txt`; no hay compilación |
| aplicaciones relacionadas con go2rtc | Go | Los binarios precompilados se colocan en el overlay bajo `oem/usr/bin/go2rtc` (`go2rtc-arm` y `go2rtc-arm64`) |

Las aplicaciones Go se suministran como binarios precompilados en el overlay (`overlay-buildroot-go2rtc-arm64/oem/usr/bin/go2rtc`). Esto significa que el flujo de compilación actual copia binarios Go precompilados al overlay en lugar de compilarlos dentro del SDK.

## Lista de comprobación

- La aplicación está bajo `project/app/` y tiene un `Makefile`.
- El Makefile incluye `../Makefile.param` cerca del principio.
- Proporciona los objetivos `all`, `clean` y `distclean` (el `clean` de nivel superior llama a `distclean` en cada subdirectorio y falla si falta el objetivo).
- Las salidas se copian a `$(PKG_BIN)`, seguido de una llamada a `MAROC_COPY_PKG_TO_APP_OUTPUT`.
- Añade el interruptor `RK_APP_<NAME>=y` a la configuración de la placa.
- Después de la compilación, verifica que tus archivos aparezcan bajo `output/out/app_out/`.

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