---
description: ODYSSEY - X86J41x5
title: Intel Neural Compute Stick 2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-NCS2
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Comenzar con Intel® Neural Compute Stick 2 con ODYSSEY - X86J41x5

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

El **Intel Neural Compute Stick 2 (NCS2)** es un dispositivo USB que te ofrece acceso a funcionalidad de redes neuronales, sin la necesidad de hardware grande y costoso. Contiene una **Unidad de Procesamiento de Visión (VPU) Intel Movidius Myriad X** para permitirte incorporar visión por computadora e inteligencia artificial (IA) a tus dispositivos IoT y de borde.

## Configurar el Entorno de Software

Para usar el Intel NCS2, por favor primero completa la [Instalación del kit de herramientas Intel® Distribution of OpenVINO™ para ODYSSEY - X86J41x5](/es/ODYSSEY-X86J4105-NCS2) y configura todo el entorno de software dependiente.
<!-- 上述链接有误 -->

Si ya has completado el tutorial, por favor sigue las instrucciones a continuación.

## Configurar el Intel® Neural Compute Stick 2

1. Agregar el usuario actual de Linux al grupo de usuarios:

```sh
sudo usermod -a -G users "$(whoami)"
```

Cierra sesión e inicia sesión para que tome efecto.

1. Para realizar inferencia en **Intel® Neural Compute Stick 2**, instala las reglas USB de la siguiente manera:

```sh
sudo cp /opt/intel/openvino/inference_engine/external/97-myriad-usbboot.rules /etc/udev/rules.d/
```

```sh
sudo udevadm control --reload-rules
```

```sh
sudo udevadm trigger
```

```sh
sudo ldconfig
```

**Nota:** Reinicia el dispositivo para que esto tome efecto.

## Ejecutar las Muestras Usando la VPU del NCS2

1. Ve al directorio de demostración del Motor de Inferencia:

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. Ejecuta el **script de verificación de Clasificación de Imágenes con NSC2:**

```sh
./demo_squeezenet_download_convert_run.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-1.png)

3. Ejecuta el **script de verificación de Pipeline de Inferencia con NSC2:**

```sh
./demo_security_barrier_camera.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-2.png)

¡Busca resultados como estos que indican una instalación exitosa!

## Siguiente Paso: El [Ncappzoo](http://www.github.com/movidius/ncappzoo)

El [ncappzoo](http://www.github.com/movidius/ncappzoo) en [http://www.github.com/movidius/ncappzoo](http://www.github.com/movidius/ncappzoo) es un repositorio de github de código abierto que contiene numerosos ejemplos con un diseño simple y Makefiles fáciles de usar. Este repositorio está adaptado para la comunidad de desarrolladores de Intel® NCS 2 y ayuda a los desarrolladores a comenzar rápidamente enfocándose en código de aplicación que usa redes neuronales preentrenadas.

1. Clona el repositorio de github a los archivos locales con el siguiente comando:

```sh
git clone https://github.com/movidius/ncappzoo.git
```

2. Ejecuta este comando dentro de cualquier carpeta **app/network** para verificar las dependencias de software del sistema para esa muestra en particular:

```sh
make install_reqs
```

3. Ejecuta la muestra:

```sh
make run
```

## Ejemplo de ejecución

Hay muchos ejemplos que se pueden ejecutar, aquí se usó la demostración `benchmark` como ejemplo:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-1.png)

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-2.png)

### Ejecutando el ejemplo `birds`

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

## Recursos

- [Kit de herramientas Intel® Distribution of OpenVINO™](https://docs.openvinotoolkit.org/)

- [Ncappzoo](http://www.github.com/movidius/ncappzoo)

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