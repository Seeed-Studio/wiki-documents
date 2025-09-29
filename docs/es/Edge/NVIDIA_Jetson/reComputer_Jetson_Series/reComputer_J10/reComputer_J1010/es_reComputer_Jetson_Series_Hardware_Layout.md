---
description: reComputer for Jetson Series 
title: Diseño de Hardware para la Serie reComputer
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Jetson_Series_Hardware_Layout
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Diseño de Hardware para reComputer

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png" alt="pir" width={600} height="auto" /></p>

Aquí obtendrás la idea básica del diseño de hardware de la serie reComputer para Jetson. Mientras tanto, sabrás cómo remover e instalar la placa principal desde la placa portadora, cómo instalar la cámara, el módulo Wi-Fi M.2 o el disco duro, etc.

## Colocación de la Serie reComputer

Cuando se mira el panel posterior de la interfaz del reComputer, hay 4 almohadillas antideslizantes en el lado derecho del chasis para facilitar su colocación vertical, como se muestra en la figura a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png" alt="pir" width={600} height="auto" /></p>

La parte inferior del chasis del reComputer tiene una estructura suspendida, y el chasis puede fijarse en algunas estructuras inconvenientes con cintas de amarre. La placa inferior del chasis tiene 4 orificios de fijación para facilitar la fijación en fachadas o pendientes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png" alt="pir" width={800} height="auto" /></p>

## Cubierta Superior de la Serie reComputer

Cuando se mira el panel posterior de la interfaz del reComputer, hay 4 almohadillas antideslizantes en el lado derecho del chasis, donde se puede ver un botón metálico, como se muestra en la siguiente figura:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg" alt="pir" width={500} height="auto" /></p>

Empuja el botón hacia arriba para levantar la cubierta superior de la carcasa, y luego puedes levantarla para abrir y remover la cubierta superior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg" alt="pir" width={500} height="auto" /></p>

## Remover la Placa Principal de la Placa Portadora

Después de abrir el chasis, puedes ver el módulo insertado en la placa portadora, como se muestra en la siguiente figura. El módulo puede removerse de la placa portadora siguiendo los pasos a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 1**: Antes de remover la versión principal, primero debes confirmar si la fuente de alimentación del ventilador está conectada. Si lo está, necesitas desconectar la fuente de alimentación del ventilador del enchufe (Para Jetson Nano puede que no haya un ventilador y puedes omitir este paso).

- **Paso 2**. Remueve los tornillos que sostienen la placa principal con un destornillador de cruz.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 3**. Abre la abrazadera en la placa portadora hacia afuera, y la placa principal saltará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 4**. Remueve la placa principal diagonalmente hacia arriba.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg" alt="pir" width={500} height="auto" /></p>

## Montar el Módulo en la Placa Portadora

- **Paso 1**. Encuentra los dedos conectores SODIMM de Jetson correspondientes en la placa portadora y el conector en el módulo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 2**. Inserta el módulo diagonalmente aproximadamente 20 grados en la ranura de la placa portadora. Presiona hacia abajo y se fijará en la placa portadora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg" alt="pir" width={500} height="auto" /></p>

!!! Note
    Puedes encontrar que bajo la instalación correcta se muestran algunos dedos conectores en la interfaz. Se volverá inestable una vez que muchos dedos conectores estén expuestos.
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 3**. Usa un destornillador de cruz para apretar los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 4**. Si el módulo incluye un ventilador de refrigeración, conecta el enchufe de alimentación del ventilador en el conector de alimentación de la placa portadora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

## Remover la Placa Portadora del Chasis del reComputer

Cuando queremos instalar el módulo M.2 o la cámara CSI y otras operaciones, necesitaremos remover la placa portadora del chasis del reComputer para una operación más fácil. La placa portadora está fijada a la base del chasis con 4 tornillos, como se muestra en la siguiente figura:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg" alt="pir" width={600} height="auto" /></p>

Remueve los 4 tornillos de fijación como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg" alt="pir" width={600} height="auto" /></p>

Saca la placa portadora junto con el módulo del chasis:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg" alt="pir" width={600} height="auto" /></p>

## Equipar el reComputer con un Módulo de Cámara

Ambas placas portadoras del reComputer tienen dos interfaces CSI. Las interfaces se usan generalmente para conectar una cámara para algunos proyectos de identificación. Aquí tomamos la placa portadora J1010 como ejemplo para guiarte a equipar y usar el [Módulo de Cámara Raspberry Pi V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html) en el reComputer.

- **Paso 1**. Monta el módulo de cámara en la placa portadora

!!!Note
    Antes de la instalación, por favor apaga el reComputer, desconecta la fuente de alimentación y abre la cubierta superior del chasis.
    Para la conveniencia de la demostración a continuación, removimos la placa portadora del chasis y el módulo. La operación real solo necesita abrir la cubierta superior.

Selecciona el conector CSI que quieres usar, luego levanta suavemente las ranuras de retención negras en ambos lados.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg" /></div>

Asegúrate de poner la ranura negra a un lado antes de insertar el cable en la ranura.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg" /></div>

Ten cuidado con la dirección del cable. Puedes ver que el lado del pin del cable está mirando hacia la placa portadora, y el lado azul está mirando hacia afuera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG" /></div>

- **Paso 2**. Enciende e inicia el reComputer.

Después de conectar el cable de la cámara, asegúrate de que el módulo, la placa portadora y los periféricos estén todos instalados en su lugar. Y luego enciende.

- **Paso 3**. Verifica si la cámara es reconocida.

Ingresa el siguiente comando en la ventana de línea de comandos para ver si un dispositivo de cámara está disponible actualmente.

```shell
ls /dev/video0 
```

Si la salida se muestra como se indica a continuación, significa que la cámara ha sido detectada exitosamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg" /></div>

Si no ves el archivo del dispositivo, verifica si tu cinta está orientada correctamente y asegúrate de que tu cámara Raspberry Pi sea versión V2, ya que la versión V1 no es reconocida.

- **Paso 4**. Aplicar la Cámara

Puedes usar el atributo `sensor_mode` con el elemento GStreamer nvarguscamerasrc para especificar qué cámara. Los valores válidos son 0 o 1 (por defecto es 0 si no se especifica), es decir,

```shell
# Simple Test
# Ctrl^C to exit
# sensor_id selects the camera: 0 or 1 on Jetson Nano B01
$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink
```

Puedes usar los siguientes comandos en la ventana de línea de comandos para probar el uso de la cámara.

Después de ejecutar este comando, reComputer mostrará la pantalla capturada por la cámara en pantalla completa hasta que presiones `Ctrl+C`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg" /></div>

Si tienes más necesidades de uso de la cámara, puedes consultar el [proyecto CSI-Camera](https://github.com/JetsonHacksNano/CSI-Camera) para explorar y aprender por ti mismo.

## Equipar el Módulo Inalámbrico para el reComputer

Aquí te mostraremos cómo instalar un módulo inalámbrico M.2 Key E en el reComputer.

Equipos y accesorios requeridos:

- reComputer
- [Módulo inalámbrico Intel® Dual Band Wireless-AC 8265](https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html)
- 2 x Adaptador de Antena Externa IPEX a SMA Hembra y Antena Macho SMA para Módulo WIFI
- Destornillador Phillips y tornillos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg" alt="pir" width={600} height="auto" /></p>

!!!Note
    La instalación del módulo inalámbrico M.2 Key E requiere antenas adicionales. Debido a que el módulo está en el chasis, puede incluso estar presionado entre el módulo y la placa portadora. Sin antenas, la intensidad de la señal se verá muy afectada.

- **Paso 1**. Desconectar la placa portadora del chasis del reComputer

Antes de instalar el módulo inalámbrico, desconecta la placa portadora del chasis del reComputer como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 2**. Remover el tapón de silicona de la carcasa

Hay 4 aberturas de antena reservadas en el chasis, que están tapadas con tapones de silicona, como se muestra en la figura a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg" alt="pir" width={600} height="auto" /></p>

Selecciona los dos orificios exteriores, aprieta el tapón de silicona desde el exterior del chasis hacia el interior del chasis, y luego saca el tapón de silicona desde el interior para exponer el orificio de la antena.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 3**. Instalar el conector SAM

Como se muestra en la figura a continuación, instala la tuerca y contratuerca del conector SAM en el orificio wifi, prestando atención a colocar el extremo del cable en el chasis.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 4**. Insertar el módulo inalámbrico en el puerto M.2 Key E

!!!Note
    La interfaz M.2 Key E está en la parte inferior o superior de la placa portadora. Para diferentes portadoras, consulta el Diseño de Hardware de la Placa Portadora. Antes de la instalación, es posible que quieras remover la placa principal de la placa portadora.

Como se muestra en la figura a continuación, encuentra la interfaz M.2 Key E en la placa portadora, e inserta el módulo inalámbrico en la ranura de la interfaz.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg" alt="pir" width={600} height="auto" /></p>

Después de que el módulo inalámbrico esté firmemente insertado, fíjalo con tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5**. Insertar 2 conectores IPEX en los enchufes correspondientes del módulo inalámbrico, la conexión es una conexión de botón, como se muestra en la figura a continuación. Simplemente presiónalo y no se requieren más operaciones.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg" alt="pir" width={600} height="auto" /></p>

La instalación debe ser como se muestra en la figura a continuación. En este momento, ten cuidado de no romper el cable entre el módulo inalámbrico y la base de la antena SAM.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 6**. Instalar el módulo en el chasis

Coloca cuidadosamente la placa portadora en el chasis del reComputer y luego instala los tornillos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 7**. Equipar antenas

Instala dos antenas macho SAM en los enchufes hembra SAM y aprieta. Eso será toda la instalación de hardware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 8**. Encender el reComputer y conectar a la red inalámbrica

Conecta los periféricos al reComputer y luego enciéndelo. Ingresa al sistema y abre la opción de red en la esquina superior derecha de la pantalla. Después de marcar la opción **Habilitar Wi-Fi**, verás la red inalámbrica cercana. Selecciona la conexión de red inalámbrica disponible.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg" alt="pir" width={800} height="auto" /></p>

Felicitaciones, has instalado exitosamente el módulo inalámbrico y te has conectado a la red.

## Diseño del Hardware

### **Placa portadora J101**

**Vista Superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png" alt="pir" width={750} height="auto" /></p>

### **Placa portadora J202**

**Vista Superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20FRONT.png" alt="pir" width={750} height="auto" /></p>

**Vista Inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20BACK.png" alt="pir" width={750} height="auto" /></p>

### **Placa portadora Jetson A206 (equipada con Jetson Nano)**

*Haz clic [aquí](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf) para consultar los pines de la placa portadora Jetson A206 (equipada con Jetson Nano) a las interfaces de funcionamiento.*

**Vista Superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**Vista Inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg" alt="pir" width={600} height="auto" /></p>

### **Placa portadora Jetson A206 (equipada con Jetson Xavier NX)**

*Haz clic [aquí](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf) para consultar los pines de la placa portadora Jetson A206 (equipada con Jetson Nano) a las interfaces de funcionamiento.*

**Vista Superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**Vista Inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg" alt="pir" width={720} height="auto" /></p>

## Comparación Detallada

|        Producto       |                                                    reComputer J1010                                                   |                         reComputer J1020                        |                                                    reComputer J2011                                                   |                                                    reComputer J2012                                                   |
|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|        Módulo        |                                                    Nano                                                    |                         Nano                         |                                                 Xavier NX                                                  |                                               Xavier NX 16GB                                               |
|        Rendimiento IA       |                                                           472 GFLOPS                                                           |                                472 GFLOPS                                | 21 TOPS                                                                                                                        | 21 TOPS                                                                                                                        |
|          GPU         |                                                    128-core NVIDIA Maxwell™                                                    |                         128-core NVIDIA Maxwell™                         | 384-core NVIDIA Volta™ GPU                                                                                                     | 384-core NVIDIA Volta™ GPU                                                                                                     |
|          CPU         |                                                  Quad-core ARM A57 @ 1.43 GHz                                                  |                       Quad-core ARM A57 @ 1.43 GHz                       | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     |
|        Memoria        |                                                   4GB 64-bit LPDDR4 25.6GB/s                                                   |                        4GB 64-bit LPDDR4 25.6GB/s                        | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  |
|        Almacenamiento       |                                                           16 GB eMMC                                                           |                                16 GB eMMC                                | 16 GB eMMC                                                                                                                     | 16 GB eMMC                                                                                                                     |
|     CODIFICADOR DE VIDEO    |                             4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264)                            |  4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264) |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |
|     DECODIFICADOR DE VIDEO    |                            4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264)                            | 4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) |
|   Ethernet Gigabit   |                                         1x Conector RJ45 Gigabit Ethernet (10/100/1000)                                        |              1x Conector RJ45 Gigabit Ethernet (10/100/1000)             | 1x Conector RJ45 Gigabit Ethernet (10/100/1000)                                                                                | 1x Conector RJ45 Gigabit Ethernet (10/100/1000)                                                                                |
|          USB         | 1 x  Conector USB 3.0 Tipo A;  2 x  Conector USB 2.0 Tipo A; 1 x  USB Tipo C para modo Dispositivo; 1 x  USB Tipo C para entrada de alimentación 5V |    4 x  Conector USB 3.0 Tipo A； 1 x  Puerto Micro-USB para modo Dispositivo;    |                               4 x  Conector USB 3.0 Tipo A； 1 x  Puerto Micro-USB para modo Dispositivo;                               |                               4 x  Conector USB 3.0 Tipo A； 1 x  Puerto Micro-USB para modo Dispositivo;                               |
|  Conexión de Cámara CSI  |                                          2x Cámara CSI (15 pos, 1mm pitch, MIPI CSI-2 )                                         |               2x Cámara CSI (15 pos, 1mm pitch, MIPI CSI-2 )              | 2x Cámara CSI (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  | 2x Cámara CSI (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  |
|        Pantalla       |                                                          1x HDMI Tipo A                                                         |                            1xHDMI Tipo A; 1xDP                           | 1xHDMI Tipo A; 1xDP                                                                                                            | 1xHDMI Tipo A; 1xDP                                                                                                            |
|          VENTILADOR         |                                                         1x  VENTILADOR(5V PWM)                                                         |                              1x  VENTILADOR(5V PWM)                              | 1x  VENTILADOR(5V PWM)                                                                                                                 | 1x  VENTILADOR(5V PWM)                                                                                                                 |
|       M.2 KEY E      |                                                           1x M.2 Key E                                                          |                          1x M.2 Key E（Deshabilitado）                         |                                                           1x M.2 Key E                                                          |                                                           1x M.2 Key E                                                          |
|       M.2 KEY M      |                                                                -                                                               |                                1x M.2 Key M                               | 1x M.2 Key M                                                                                                                    | 1x M.2 Key M                                                                                                                    |
|          RTC         |                                                          1x Socket RTC                                                          |                               1x socket RTC                               |                                                          1x Socket RTC                                                          |                                                          1x Socket RTC                                                          |
| Puerto multifuncional |                                                        1x  Header de 40 pines                                                        |                             1x  Header de 40 pines                             | 1x  Header de 40 pines                                                                                                               | 1x  Header de 40 pines                                                                                                               |
|  Alimentación  |                                                       USB-Tipo C 5V⎓3A；                                                       |                              Conector DC 12V/2A                              | Conector DC 19V/4.74A (MÁX 90W) MÁX                                                                                                      | Conector DC 19V/4.74A (MÁX 90W) MÁX                                                                                                      |
|      Mecánico      |                                                     130 mm x 120 mm x 50 mm                                                    |                            130mm x120mm x 50mm                           |                                                       130mm x120mm x 50mm                                                      |                                                       130mm x120mm x 50mm                                                      |
|                      |                                                                                                                                |                                                                          |                                                                                                                                |                                                                                                                                |

## Especificación Técnica de la Placa Portadora

|  Conector               |  Placa Portadora J1010                   |  Placa Portadora Jetson A206                                |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
|  Conector del módulo Jetson |  1x conector Jetson SODIMM, 260 pines              |  1x conector Jetson SODIMM, 260 pines              |
|  USB Tipo A              |  1x Conector USB 3.0 Tipo A 2x conectores USB 2.0 Tipo A                      |  4x Conectores USB 3.0 Tipo A                      |
|  USB Micro Tipo B        |  -                                               |  1x USB Micro B, Hembra RA                        |
|  USB Tipo C              |  2x conector Tipo C                             |  -                                               |
|   Puerto Ethernet          |  1x Conector Ethernet Gigabit RJ45 (10/100/1000) |  1x Conector Ethernet Gigabit RJ45 (10/100/1000) |
|  Puerto de Pantalla            |  1xHDMI tipo A                          |  1xHDMI tipo A y 1xDP                          |
|  Conector de Cámara CSI    |  2x Cámara CSI (15 pos, paso 1mm, MIPI CSI-2 )   |  2x Cámara CSI (15 pos, paso 1mm, MIPI CSI-2 )   |
|  M.2 Key E               |  1x Ranura M.2 Key E (75 pines) 2230                                     |  1x Ranura M.2 Key E (75 pines) 2230                  |
|  M.2 Key M               |  -                                               |  1x Ranura M.2 Key M (75 pines) NVME 2280             |
|  Puerto Multifuncional    |  40 PINES Paso 2.0                                |  40 PINES Paso 2.0                                |
|  Cabezal de Botón           |  1x Cabezal de Botón (1x12, paso 2.54mm, RA)        |  1x Cabezal de Botón (1x12, paso 2.54mm, RA)        |
|  Conector de VENTILADOR           |  1x Cabezal Picoblade                              |  1x Cabezal Picoblade                              |
|  CAN                     |  Deshabilitado                                       |  1x Cabezal Bus CAN (1x4, paso 2.54mm, RA)        |
|  RTC                     |  1x Zócalo de Pila de Moneda de Respaldo RTC (CR1220)         |  1x Zócalo de Pila de Moneda de Respaldo RTC (CR1225)         |
|   Alimentación                  |  1x conector Tipo C                            |  1x Conector TE de Entrada de Alimentación DC                   |

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

