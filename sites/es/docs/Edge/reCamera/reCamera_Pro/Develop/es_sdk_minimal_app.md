---
description: Instala el SDK de compilación cruzada de reCamera Pro, compila un pequeño programa en C++ para RV1126B, comprueba el binario y ejecútalo en el dispositivo.
title: Configurar el SDK de compilación cruzada de reCamera Pro
keywords:
  - reCamera Pro
  - RV1126B
  - SDK
  - compilación cruzada
  - CMake
  - RKNN
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/12/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/es/recamera_pro_sdk_setup/
createdAt: '2026-09-21'
updatedAt: '2026-10-12'
---

# Configurar el SDK de compilación cruzada de reCamera Pro

Esta guía utiliza el [SDK de compilación cruzada de reCamera Pro](https://github.com/Seeed-Projects/recamera_pro_toolchain) para compilar un pequeño programa en C++ en un PC con Linux o en WSL, y luego ejecutarlo en reCamera Pro. Instalarás el compilador y las bibliotecas de destino, compilarás el ejemplo, comprobarás que es un programa ARM de 64 bits y lo copiarás a la cámara.

> Este SDK es para reCamera Pro con el procesador Rockchip RV1126B. No funciona con la reCamera SG2002/RISC-V.

## Lo que necesitas

- reCamera Pro ejecutando su firmware de producción
- Un PC con Linux o un PC con Windows con WSL 2 y Ubuntu
- Acceso de red desde el host a GitHub Releases para descargar los recursos del SDK (unos 2,5 GB instalados)
- CMake, Ninja y `pkg-config`
- Acceso SSH a la reCamera Pro para el paso de despliegue

El SDK tiene como objetivo Linux ARM de 64 bits y proporciona el compilador Rockchip GCC 12.4.0, el sysroot de destino, los archivos de desarrollo de GStreamer 1.22 y RKNN API/runtime 2.3.2. La conversión de modelos es independiente: convierte modelos ONNX en un host x86_64 con RKNN-Toolkit2 2.3.2 y `target_platform='rv1126b'`.

## 1. Instalar el SDK

Instala las herramientas del host y clona el repositorio del SDK:

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
```

Descarga y verifica el compilador y el sysroot versionados, luego carga el entorno del SDK:

```bash
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` instala los recursos del SDK en los directorios `toolchain/` y `sysroot/` del repositorio y comprueba sus sumas de verificación SHA-256. La descarga puede tardar en una conexión lenta. Ejecuta `source scripts/env.sh` de nuevo en cada terminal nueva antes de configurar un proyecto.

## 2. Compilar el ejemplo incluido en el SDK

Primero compila la prueba de humo incluida. Enlaza contra RKNN Runtime, OpenCV y GStreamer, por lo que comprueba que el SDK puede encontrar las principales bibliotecas de destino.

Desde la raíz del repositorio:

```bash
source scripts/env.sh
cmake -S examples/sdk_smoke -B examples/sdk_smoke/build -G Ninja
cmake --build examples/sdk_smoke/build
```

El ejecutable se escribe en `examples/sdk_smoke/build/`. Si CMake configuró previamente este directorio de compilación con tu compilador de host, elimina ese directorio de compilación y configúralo de nuevo antes de compilar con el SDK.

## 3. Compilar una pequeña aplicación en C++

Puedes usar el SDK con tu propio proyecto CMake. Crea un directorio de proyecto junto a `recamera_pro_toolchain`:

```bash
mkdir -p ~/my-recamerapro-app
cd ~/my-recamerapro-app
```

Crea `main.cpp`:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello from reCamera Pro" << std::endl;
    return 0;
}
```

Crea `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.16)
project(my_recamera_app LANGUAGES CXX)

add_executable(my_recamera_app main.cpp)
```

Carga el entorno del SDK, luego configura y compila. Sustituye la ruta de abajo si clonaste el SDK en otro lugar:

```bash
cd ~/my-recamerapro-app
source ~/recamera_pro_toolchain/scripts/env.sh
cmake -S . -B build -G Ninja
cmake --build build
```

El entorno selecciona el compilador cruzado aarch64 y el sysroot de destino para CMake. Para proyectos que usan RKNN o GStreamer, sigue el [ejemplo de integración con CMake](https://github.com/Seeed-Projects/recamera_pro_toolchain#integración-mínima-con-cmake) del repositorio del SDK para encontrar y enlazar las bibliotecas de destino.

## 4. Comprobar el ejecutable

Antes de copiar el programa a la cámara, confirma que se compiló para el procesador correcto y que no contiene una ruta del host:

```bash
file build/my_recamera_app
source ~/recamera_pro_toolchain/scripts/env.sh
"${CROSS_COMPILE}readelf" -l build/my_recamera_app | grep interpreter
"${CROSS_COMPILE}readelf" -d build/my_recamera_app | grep -E 'NEEDED|RPATH|RUNPATH'
```

Comprueba estos resultados:

- `file` informa ARM aarch64, no x86-64 ni RISC-V.
- El intérprete ELF es `/lib/ld-linux-aarch64.so.1`.
- Cualquier ruta de búsqueda en tiempo de ejecución apunta a `/oem/usr/lib`; no contiene una ruta del host o de WSL.

El archivo de toolchain del SDK establece la ruta de ejecución del dispositivo en `/oem/usr/lib`. No añadas una ruta absoluta desde tu host, el directorio del SDK o el directorio de compilación al ejecutable.

## 5. Copiarlo y ejecutarlo en reCamera Pro

Conéctate a la cámara mediante Ethernet virtual por USB o tu LAN. Sustituye `192.168.42.1` abajo si tu cámara usa una dirección IP diferente. Crea un directorio para el programa y copia el ejecutable:

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/my-recamerapro-app'
scp build/my_recamera_app root@192.168.42.1:/userdata/my-recamerapro-app/
ssh root@192.168.42.1
```

En la cámara, ejecútalo:

```bash
cd /userdata/my-recamerapro-app
chmod +x my_recamera_app
./my_recamera_app
```

Salida esperada:

```text
Hello from reCamera Pro
```

Copia solo tu aplicación y sus recursos necesarios. No sobrescribas `/oem/usr/lib/librknnrt.so`; el RKNN Runtime del SDK se usa para el enlace y se ha comprobado frente al runtime del dispositivo de producción.

## Solución de problemas

| Síntoma | Qué comprobar |
| --- | --- |
| `setup.sh` no puede descargar un recurso | Comprueba la conexión a internet del host y vuelve a ejecutar `./scripts/setup.sh`. El script verifica las sumas de verificación descargadas. |
| CMake selecciona el compilador del host | Ejecuta `source scripts/env.sh` en el mismo terminal, usa un directorio de compilación nuevo y configura de nuevo. |
| `pkg-config` encuentra bibliotecas del host | Carga `scripts/env.sh` antes de configurar; apunta `pkg-config` al sysroot del SDK. |
| `Exec format error` en el dispositivo | Ejecuta `file` sobre el ejecutable y confirma que informa ARM aarch64. |
| Falta una biblioteca compartida en tiempo de ejecución | Comprueba las entradas `NEEDED` del ejecutable y confirma que la biblioteca requerida existe en el firmware del dispositivo. No copies bibliotecas del host al dispositivo. |

El sysroot del SDK usa una libc con símbolos hasta GLIBC 2.38. Comprueba el ABI del firmware antes de declarar compatibilidad con una versión de firmware diferente. Una compilación cruzada satisfactoria confirma la compilación y el enlace; no verifica el funcionamiento de la cámara, la precisión del modelo ni el comportamiento en tiempo de ejecución de tu aplicación.

## Próximos pasos

- [Repositorio del SDK de reCamera Pro](https://github.com/Seeed-Projects/recamera_pro_toolchain) — scripts de configuración del SDK, integración con CMake y el ejemplo `sdk_smoke`
- [Desarrollo de Cámara, Audio e Inferencia](/es/recamera_pro_media_dev/) — captura de cámara con GStreamer, audio y RTSP
- [Elegir una ruta de desarrollo](/es/recamera_pro_dev_path/) — selecciona un flujo de trabajo de desarrollo para tu proyecto

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Puedes elegir el canal que mejor se adapte a ti.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
