---
description: Integración de reTerminal y módulos de cámara Pi
title: reTerminal y módulos de cámara Pi
keywords:
  - Edge
  - reTerminal 
  - piCamera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-piCam
last_update:
  date: 5/17/2023
  author: Kasun Thushara
---
# reTerminal y módulos de cámara Pi

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" alt="pir" width="600" height="auto"/></p>

La Cámara Raspberry Pi, comúnmente conocida como PiCam, es un módulo de cámara específicamente diseñado para las computadoras de placa única Raspberry Pi. Ofrece una solución compacta y conveniente para capturar imágenes y grabar videos directamente desde tu dispositivo Raspberry Pi.

Aquí están las especificaciones para cada versión de la PiCam:

**PiCam v1 (Módulo de Cámara v1.3):**

- Sensor: OmniVision OV5647
- Resolución: 5 megapíxeles
- Modos de Video: 1080p30, 720p60, 640x480p60/90

**PiCam v2 (Módulo de Cámara v2):**

- Sensor: Sony IMX219
- Resolución: 8 megapíxeles (3280 x 2464 píxeles)
- Modos de Video: 1080p30, 720p60, 640x480p90

**PiCam v3 (Módulo de Cámara 3):**

- Sensor: Sony IMX708
- Resolución: 12 megapíxeles (4056 x 3040 píxeles)
- Modos de Video: 1080p30, 720p60, 640x480p90

| Módulo de Cámara Raspberry Pi V1|Módulo de Cámara Raspberry Pi V2| Módulo de Cámara Raspberry Pi 3 |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg)|
|[¡COMPRA UNO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products)|[¡COMPRA UNO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)|[¡COMPRA UNO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products)|
|Módulo de Cámara Raspberry Pi 3 Wide NoIR | Módulo de Cámara Raspberry Pi 3 NoIR | Módulo de Cámara Raspberry Pi 3 Wide |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg)|
|[¡COMPRA UNO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products)|[¡COMPRA UNO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products)|[¡COMPRA UNO AHORA!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products)|

Todas las versiones de la PiCam se conectan a la Raspberry Pi a través de la interfaz MIPI CSI-2, proporcionando una conexión directa y de alta velocidad para transmitir datos de imagen y video.

La PiCam ofrece una gama de características y capacidades que la hacen adecuada para diversas aplicaciones, **incluyendo fotografía, videografía, proyectos de visión por computadora, vigilancia, y más**. Su factor de forma pequeño y fácil integración con la Raspberry Pi la convierten en una opción popular entre aficionados, makers y profesionales.

Tenga en cuenta que las especificaciones mencionadas anteriormente son para los módulos PiCam estándar, y puede haber variaciones o módulos de cámara alternativos disponibles de fabricantes de terceros.

Cuando se trata de instalar la PiCam, tiene dos opciones. La primera opción es usar imágenes pre-construidas proporcionadas por Seeed Studio, que se pueden encontrar en nuestra página wiki. Estas imágenes pre-construidas están específicamente configuradas para la PiCam, asegurando compatibilidad y facilidad de uso. Sin embargo, tenga en cuenta que estas imágenes solo funcionan con PiCam v1 (sensor OmniVision OV5647).

Alternativamente, puede elegir instalar la versión más reciente del Raspberry Pi OS desde el sitio web oficial. Al hacerlo, tendrá acceso a las características y mejoras más recientes. Seeed Studio recomienda este enfoque y proporciona instrucciones en nuestra página wiki para instalar los controladores necesarios y componentes relacionados para asegurar el funcionamiento adecuado de la PiCam en la instalación fresca del Raspberry Pi OS.

## Usando imágenes pre-construidas de raspberry pi

Para instalar la PiCam para Seeed Studio reTerminal, tiene la opción de usar imágenes pre-construidas proporcionadas por Seeed Studio. Estas imágenes están disponibles en nuestra página wiki y están específicamente diseñadas para el reTerminal.

:::note

Es importante tener en cuenta que las imágenes pre-construidas actualmente soportan **solo la PiCam v1, que utiliza el sensor OmniVision OV5647**. Esto significa que puede capturar imágenes o grabar videos usando el comando `raspistill`.

:::

- **Paso 1** Visite la página wiki de Seeed Studio dedicada al reTerminal y navegue a la sección que proporciona las imágenes pre-construidas. (puede consultar este enlace para obtener imágenes y conocer el procedimiento de instalación. si ya lo ha hecho, omita este paso. [Este Enlace](https://wiki.seeedstudio.com/es/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal))
- **Paso 2**  Apague el reTerminal y conecte el módulo PiCam v1 a la interfaz de cámara en el reTerminal. Asegúrese de que esté firmemente conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3** Ensamble el reTerminal y arranque el reTerminal. Vaya al icono del reTerminal que puede encontrar en el escritorio y habilite la cámara y reinicie.

- **Paso 4** Abra una terminal o conéctese por SSH al reTerminal para acceder a la interfaz de línea de comandos.
- **Paso 5** Use el comando `raspistill` para capturar imágenes. Puede visitar este sitio para más comandos. [Enlace](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)

```sh
raspistill -o Desktop/image.jpg
```

## Para Raspberry Pi OS nuevo

Recomendamos la imagen nueva de Raspbian Bullseye de 64 bits del sitio web oficial de Raspberry Pi para Seeed Studio reTerminal:

- **Paso 1** Seeed Studio proporciona instrucciones detalladas sobre cómo instalar los controladores después de flashear un nuevo Raspberry Pi OS u otro OS. Consulte la página wiki de Seeed Studio para reTerminal y siga las instrucciones proporcionadas en la sección ["Flash new Raspberry Pi OS"](https://wiki.seeedstudio.com/es/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) y la sección ["How to install reTerminal drivers"](https://wiki.seeedstudio.com/es/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os). Si ya lo ha hecho, omita este paso.

- **Paso 2** Apague el reTerminal y conecte el módulo PiCam a la interfaz de cámara en el reTerminal. Asegúrese de que esté conectado de forma segura.

- **Paso 3** Abra una terminal o conéctese por SSH a su reTerminal y ejecute el siguiente comando para editar el archivo config.txt:

```sh
sudo nano /boot/config.txt 
```

- **Paso 4** Dentro del archivo config.txt, necesitas hacer cambios específicos para habilitar la PiCam. Sigue estos pasos:

  - Localiza la línea camera_auto_detect=1 y coméntala añadiendo un "#" al principio de la línea. Este paso es necesario para deshabilitar la detección automática del módulo de cámara.

  - Añade las siguientes líneas al archivo config.txt:
    - dtoverlay=ov5647,cam0
    - dtoverlay=camera-mux-2port

:::note

Si estás usando PiCam v3 NoIR wide en lugar de PiCam v1, usa **dtoverlay=imx708,cam0** en lugar de **dtoverlay=ov5647,cam0**. La configuración dtoverlay especifica el módulo de cámara que se está usando y el multiplexor de cámara.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG" alt="pir" width="600" height="auto"/></p>

- **Paso 5** : Guarda los cambios realizados en el archivo config.txt presionando Ctrl + X, seguido de Y, y luego Enter para confirmar. Finalmente, reinicia el reTerminal para aplicar las modificaciones:

```sh
sudo reboot
```

 Después del reinicio, la PiCam debería estar configurada y lista para usar con tu Seeed Studio reTerminal. Ahora puedes proceder a capturar imágenes o grabar videos usando libcamera.

- **Paso 6** : Abre la terminal y escribe el siguiente código para probar que todo funciona.

```sh
sudo libcamera-hello
```

libcamera-hello es el equivalente de una aplicación "hello world" para la cámara. Inicia la cámara, muestra una ventana de vista previa y no hace nada más.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG" alt="pir" width="600" height="auto"/></p>

puedes consultar los siguientes documentos para más detalles sobre [libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html )
