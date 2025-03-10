---
description: reComputer para la serie Jetson 
title: Disposición del hardware para la serie reComputer
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Jetson_Series_Hardware_Layout
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Diseño de hardware para reComputer

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png" alt="pir" width={600} height="auto" /></p>

Aquí obtendrás una idea básica del diseño del hardware de la serie reComputer para Jetson. Mientras tanto, sabrás cómo quitar e instalar la placa central de la Carrier Board, cómo instalar la cámara, el módulo Wi-Fi M.2 o el disco duro, etc.

## Colocación de la serie reComputer

Cuando se mira hacia el plano posterior de la interfaz reComputer, hay 4 almohadillas antideslizantes en el lado derecho del chasis para facilitar el soporte, como se muestra en la siguiente imágen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png" alt="pir" width={600} height="auto" /></p>

La parte inferior del chasis de la computadora es una estructura suspendida y el chasis se puede fijar en algunas estructuras incómodas con cintas adhesivas. La placa inferior del chasis dispone de 4 orificios de fijación para facilitar la fijación en fachada o pendiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png" alt="pir" width={800} height="auto" /></p>

## Cubierta superior de la serie reComputer

Mirando hacia el backplane de la interfaz reComputer, hay 4 almohadillas antideslizantes en el lado derecho del chasis, donde se puede ver un botón de metal, como se muestra en la siguiente imágen:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg" alt="pir" width={500} height="auto" /></p>

Presiona el botón hacia arriba para levantar la cubierta superior del estuche y luego podrás abrirlo para quitar la cubierta superior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg" alt="pir" width={500} height="auto" /></p>

## Retira la placa central de la Carrier Board

Después de abrir el chasis, podrás ver el módulo insertado en la Carrier Board, como se muestra en la siguiente figura. El módulo se puede quitar de la Carrier Board siguiendo los pasos mostrados a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 1**: Antes de retirar la versión principal, primero debes confirmar si la fuente de alimentación del ventilador está conectada. Si es así, deberás desconectar la fuente de alimentación del ventilador del enchufe (para Jetson Nano es posible que no haya un ventilador y puedes omitir este paso).

- **Paso 2**. Retira los tornillos que sujetan la placa central con un destornillador de estrella.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 3**. Abre la abrazadera de la Carrier Board hacia afuera y la placa central saltará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 4**. Retira la placa central en diagonal hacia arriba.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg" alt="pir" width={500} height="auto" /></p>

## Monts el módulo en la Carrier Board

- **Paso 1**. Busca los dedos del conector Jetson SODIMM correspondientes en la Carrier Board y el conector en el módulo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 2**. Inserta el módulo en diagonal unos 20 grados en la ranura de la placa de soporte. Presions hacia abajo y quedará fijado en la Carrier Board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg" alt="pir" width={500} height="auto" /></p>

¡¡¡Nota!!!
    Es posible que, bajo la instalación correcta, se muestren algunos dedos del conector en la interfaz. Será inestable una vez que muchos dedos del conector queden expuestos.
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 3**. Utiliza un destornillador de estrella para apretar los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 4**. Si el módulo incluye un ventilador de refrigeración, conecta el enchufe de alimentación del ventilador a la toma de corriente de la Carrier Board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

## Retira la Carrier Board del chasis de la reComputer

Cuando queramos instalar el módulo M.2 o la cámara CSI y otras operaciones, necesitaremos quitar la Carrier Board del chasis de la computadora para una operación más sencilla. La Carrier Board se fija a la base del chasis con 4 tornillos, como se muestra en la siguiente imágen:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg" alt="pir" width={600} height="auto" /></p>

Retira los 4 tornillos de fijación como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg" alt="pir" width={600} height="auto" /></p>

Saca la Carrier Board junto con el módulo del chasis:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg" alt="pir" width={600} height="auto" /></p>

## Equipa la reComputer con un módulo de cámara

Ambas Carrier Boards reComputer tienen dos interfaces CSI. Las interfaces se utilizan normalmente para conectar una cámara para algunos proyectos de identificación. Aquí tomamos la Carrier Board J1010 como ejemplo para guiarte en el equipamiento y uso del [Módulo de cámara Raspberry Pi V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html) en la reComputer.

- **Paso 1**. Monta el módulo de la cámara en la Carrier Board

¡¡¡Nota!!!
    Antes de la instalación, apaga la computadora, desconecta la fuente de alimentación y abre la cubierta superior del chasis.
    Para facilitar la demostración a continuación, retiramos la Carrier Board del chasis y del módulo. La operación real sólo necesita abrir la cubierta superior.

Selecciona el conector CSI que deseas usar y luego levanta suavemente las ranuras de retención negras en ambos lados.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg" /></div>

Asegúrate de dejar la ranura negra a un lado antes de insertar el cable en la ranura.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg" /></div>

Cuidado con la dirección del cable. Puedes ver que el lado del pin del cable mira hacia la Carrier Board y el lado azul mira hacia afuera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG" /></div>

- **Paso 2**. Enciende e inicia la reComputer.

Después de enchufar el cable de la cámara, asegúrate de que el módulo, la Carrier Board y los periféricos estén instalados en su lugar. Y luego enciéndelo.

- **Paso 3**. Comprueba si se reconoce la cámara.

Ingresa el siguiente comando en la ventana de la línea de comandos para ver si hay un dispositivo de cámara disponible actualmente.

```shell
ls /dev/video0 
```

Si el resultado se muestra como a continuación, significa que la cámara se ha detectado correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg" /></div>

Si no ves el archivo del dispositivo, verifica si su cinta está orientada correctamente y asegúrate de que tu cámara Raspberry Pi sea la versión V2, ya que no se reconoce la versión V1.

- **Paso 4**. Aplicar la cámara

Puedes utilizar el atributo `sensor_mode` con el elemento GStreamer nvarguscamerasrc para especificar qué cámara. Los valores válidos son 0 o 1 (el valor predeterminado es 0 si no se especifica), es decir

```shell
# Simple Test
# Ctrl^C to exit
# sensor_id selects the camera: 0 or 1 on Jetson Nano B01
$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink
```

Puedes utilizar los siguientes comandos en la ventana de la línea de comandos para probar el uso de la cámara.

Después de ejecutar este comando, la reComputer mostrará la pantalla capturada por la cámara en pantalla completa hasta que presiones `Ctrl+C`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg" /></div>

Si tienes más necesidades de uso de la cámara, puedes consultar el [proyecto CSI-Camera](https://github.com/JetsonHacksNano/CSI-Camera) para explorar y aprender tu mismo.

## Equipa el módulo inalámbrico para la reComputer

Aquí te mostraremos cómo instalar un módulo inalámbrico M.2 Key E en la reComputer.

Equipo y accesorios requeridos

- reComputer
- [Módulo inalámbrico Intel® Dual Band Wireless-AC 8265](https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html)
- 2 x Adaptador de antena externa IPEX a SMA hembra y antena SMA macho para módulo WIFI
- Destornillador Phillips y tornillos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg" alt="pir" width={600} height="auto" /></p>

¡¡¡Nota!!!
    La instalación del módulo inalámbrico del M.2 Key E requiere antenas adicionales. Debido a que el módulo está en el chasis, es posible que incluso quede presionado entre el módulo y la Carrier Board. Sin antenas, la intensidad de la señal se verá muy afectada.

- **Paso 1**. Separa la Carrier Board del chasis de la reComputer.

Antes de instalar el módulo inalámbrico, retira la Carrier Board del chasis de la computadora como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 2**. Retira el tapón de silicona de la funda.

Hay 4 aberturas de antena reservadas en el chasis, donde se conectan con tapones de silicona, como se muestra en la siguiente imágen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg" alt="pir" width={600} height="auto" /></p>

Selecciona los dos orificios exteriores, aprieta el tapón de silicona desde el exterior del chasis hacia el interior del chasis y luego extrae el tapón de silicona desde el interior para exponer el orificio de la antena.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 3**. Instalar el encabezado SAM

Como se muestra en la figura siguiente, instala la tuerca y la tuerca del cabezal SAM en el orificio wifi, prestando atención a colocar el extremo del cable en el chasis.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 4**. Inserta el módulo inalámbrico en el puerto M.2 Key E

¡¡¡Nota!!!
    La interfaz M.2 Key E está en la parte inferior o superior de la Carrier Board. Para diferentes portadores, consulta Diseño de hardware de la Carrier Board. Antes de la instalación, es posible que desees retirar la placa central de la Carrier Board.

Como se muestra en la figura siguiente, busca la interfaz M.2 Key E en la Carrier Board e inserta el módulo inalámbrico en la ranura de la interfaz.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg" alt="pir" width={600} height="auto" /></p>

Una vez que el módulo inalámbrico esté firmemente insertado, fíjalo con tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5**. Inserta 2 enchufes IPEX en los enchufes correspondientes del módulo inalámbrico, la conexión es una conexión de botón, como se muestra en la siguiente figura. Simplemente presiónalo y no se requieren más operaciones.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg" alt="pir" width={600} height="auto" /></p>

La instalación debe ser como en la imágen que se muestra a continuación. En este momento, ten cuidado de no romper el cable entre el módulo inalámbrico y la base de la antena SAM.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 6**. Instala el módulo en el chasis.

Coloca con cuidado la Carrier Board en el chasis de la computadora y luego instala los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 7**. Equipar antenas

Instala dos antenas macho SAM en los enchufes hembra SAM y apriétalas. Esa será toda la instalación del hardware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 8**. Enciende la reComputer y conéctate a la red inalámbrica

Conecta los periféricos a la reComputer y luego enciéndela. Ingresa al sistema y abre la opción de red en la esquina superior derecha de la pantalla. Después de marcar la opción **Habilitar Wi-Fi**, verás la red inalámbrica cercana. Selecciona la conexión de red inalámbrica disponible.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg" alt="pir" width={800} height="auto" /></p>

Felicitaciones, has instalado exitosamente el módulo inalámbrico y te has conectado a la red.

## Diseño de hardware

### **Carrier Board J101**

**Vista superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png" alt="pir" width={750} height="auto" /></p>

### **Carrier Board J202**

**Vista superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20FRONT.png" alt="pir" width={750} height="auto" /></p>

**Vista inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20BACK.png" alt="pir" width={750} height="auto" /></p>

### **Carrier board Jetson A206 (equipada con Jetson Nano)**

*Haz Click [aquí](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf) para comprobar los pines de la Carrier Board Jetson A206 (equipada con Jetson Nano) a las interfaces operativas.*

**Vista superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**Vista inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg" alt="pir" width={600} height="auto" /></p>

### **Carrier Board Jetson A206 (equipada con Jetson Xavier NX)**

*Haz click [aquí](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf) para comprobar los pines de la Carrier Board Jetson A206 (equipada con Jetson Nano) a las interfaces operativas.*

**Vista superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**Vista inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg" alt="pir" width={720} height="auto" /></p>

## Comparasión detallada

|        Producto       |                                                    reComputer J1010                                                   |                         reComputer J1020                        |                                                    reComputer J2011                                                   |                                                    reComputer J2012                                                   |
|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|        Módulo        |                                                    Nano                                                    |                         Nano                         |                                                 Xavier NX                                                  |                                               Xavier NX 16GB                                               |
|        AI Perf       |                                                           472 GFLOPS                                                           |                                472 GFLOPS                                | 21 TOPS                                                                                                                        | 21 TOPS                                                                                                                        |
|          GPU         |                                                    128-core NVIDIA Maxwell™                                                    |                         128-core NVIDIA Maxwell™                         | 384-core NVIDIA Volta™ GPU                                                                                                     | 384-core NVIDIA Volta™ GPU                                                                                                     |
|          CPU         |                                                  Quad-core ARM A57 @ 1.43 GHz                                                  |                       Quad-core ARM A57 @ 1.43 GHz                       | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     |
|        Memoria       |                                                   4GB 64-bit LPDDR4 25.6GB/s                                                   |                        4GB 64-bit LPDDR4 25.6GB/s                        | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  |
|     Almacenamiento   |                                                           16 GB eMMC                                                           |                                16 GB eMMC                                | 16 GB eMMC                                                                                                                     | 16 GB eMMC                                                                                                                     |
|     VIDEO ENCODER    |                             4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264)                            |  4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264) |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |
|     VIDEO DECODER    |                            4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264)                            | 4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) |
|   Gigabit Ethernet   |                                         1x RJ45 Gigabit Ethernet Connector (10/100/1000)                                        |              1x RJ45 Gigabit Ethernet Connector (10/100/1000)             | 1x RJ45 Gigabit Ethernet Connector (10/100/1000)                                                                                | 1x RJ45 Gigabit Ethernet Connector (10/100/1000)                                                                                |
|          USB         | 1 x  USB 3.0 Type A Connector;  2 x  USB 2.0 Type A Connector; 1 x  USB Type C for Device mode; 1 x  USB Type C for 5V power input |    4 x  USB 3.0 Type A Connector； 1 x  Micro-USB port for Device mode;    |                               4 x  USB 3.0 Type A Connector； 1 x  Micro-USB port for Device mode;                               |                               4 x  USB 3.0 Type A Connector； 1 x  Micro-USB port for Device mode;                               |
|  CSI Camera Connect  |                                          2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )                                         |               2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )              | 2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  | 2x CSI Cámaras (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  |
|        Pantalla       |                                                          1x HDMI Type A                                                         |                            1xHDMI Type A; 1xDP                           | 1xHDMI Type A; 1xDP                                                                                                            | 1xHDMI Type A; 1xDP                                                                                                            |
|          FAN         |                                                         1x  FAN(5V PWM)                                                         |                              1x  FAN(5V PWM)                              | 1x  FAN(5V PWM)                                                                                                                 | 1x  FAN(5V PWM)                                                                                                                 |
|       M.2 KEY E      |                                                           1x M.2 Key E                                                          |                          1x M.2 Key E（Disabled）                         |                                                           1x M.2 Key E                                                          |                                                           1x M.2 Key E                                                          |
|       M.2 KEY M      |                                                                -                                                               |                                1x M.2 Key M                               | 1x M.2 Key M                                                                                                                    | 1x M.2 Key M                                                                                                                    |
|          RTC         |                                                          1x RTC Socket                                                          |                               1x RTC socket                               |                                                          1x RTC Socket                                                          |                                                          1x RTC Socket                                                          |
| Multifunctional port |                                                        1x  40-Pin header                                                        |                             1x  40-Pin header                             | 1x  40-Pin header                                                                                                               | 1x  40-Pin header                                                                                                               |
|  Power  |                                                       USB-Type C 5V⎓3A；                                                       |                              DC Jack 12V/2A                              | DC Jack 19V/4.74A (MAX 90W) MAX                                                                                                      | DC Jack 19V/4.74A (MAX 90W) MAX                                                                                                      |
|      Mechanical      |                                                     130 mm x 120 mm x 50 mm                                                    |                            130mm x120mm x 50mm                           |                                                       130mm x120mm x 50mm                                                      |                                                       130mm x120mm x 50mm                                                      |
|                      |                                                                                                                                |                                                                          |                                                                                                                                |                                                                                                                                |

## Especificaciones técnicas de Carrier Board

|  Conector               |  J1010 Carrier Board                   |  Jetson A206 Carrier Board                                |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
|  Jetson module connector |  1x Jetson SODIMM connector, 260-pin              |  1x Jetson SODIMM connector, 260-pin              |
|  USB Type A              |  1x USB 3.0 Type-A Connector 2x USB 2.0 Type A connectors                      |  4x USB 3.0 Type-A Connectors                      |
|  USB Micro Type B        |  -                                               |  1x USB Micro B, RA Female                        |
|  USB Type C              |  2x Type C connector                             |  -                                               |
|   Ethernet Port          |  1x RJ45 Gigabit Ethernet Connector (10/100/1000) |  1x RJ45 Gigabit Ethernet Connector (10/100/1000) |
|  Display Port            |  1xHDMI type A                          |  1xHDMI type A and 1xDP                          |
|  CSI Camera Connector    |  2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )   |  2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )   |
|  M.2 Key E               |  1x M.2 Key E Slot (75-pin) 2230                                     |  1x M.2 Key E Slot (75-pin) 2230                  |
|  M.2 Key M               |  -                                               |  1x M.2 Key M Slot (75-pin) NVME 2280             |
|  Multifunctional Port    |  2.0 Pitch 40 PIN                                |  2.0 Pitch 40 PIN                                |
|  Button Header           |  1x Button Header (1x12, 2.54mm pitch, RA)        |  1x Button Header (1x12, 2.54mm pitch, RA)        |
|  FAN Connector           |  1x Picoblade Header                              |  1x Picoblade Header                              |
|  CAN                     |  Diasabled                                       |  1x CAN Bus Header (1x4, 2.54mm pitch, RA)        |
|  RTC                     |  1x RTC Back-up Coin Cell Socket (CR1220)         |  1x RTC Back-up Coin Cell Socket (CR1225)         |
|   Power                  |  1x Type C connector                            |  1x DC Input Power TE Connector                   |

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

