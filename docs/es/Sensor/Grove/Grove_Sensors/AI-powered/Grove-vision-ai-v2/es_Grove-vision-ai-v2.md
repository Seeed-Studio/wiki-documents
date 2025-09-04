---
description: Primeros pasos con el Grove Vision AI V2.
title: Módulo Grove Vision AI V2
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove_vision_ai_v2
last_update:
  date: 12/12/2023
  author: Citric
---

# Módulo Grove Vision AI V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Es un módulo de visión AI basado en MCU alimentado por Arm Cortex-M55 y Ethos-U55. Soporta los frameworks TensorFlow y PyTorch y es compatible con Arduino IDE. Con la plataforma de algoritmos AI SenseCraft, los modelos ML entrenados pueden desplegarse en el sensor sin necesidad de codificación. Cuenta con una interfaz CSI estándar, un micrófono digital integrado y una ranura para tarjeta SD, lo que lo hace altamente adecuado para varios proyectos de visión AI embebida.

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Por favor usa el navegador Chrome o Edge basado en el motor Chrome.
:::

### Características

- **Potentes Capacidades de Procesamiento AI**: Utiliza el procesador WiseEye2 HX6538 con un Arm Cortex-M55 de doble núcleo y una unidad de red neuronal Arm Ethos-U55 integrada.
- **Soporte Versátil de Modelos AI**: Despliega fácilmente modelos AI listos para usar o personalizados desde SenseCraft AI, incluyendo Mobilenet V1, V2, Efficientnet-lite, Yolo v5 y v8. Se soportan los frameworks TensorFlow y PyTorch.
- **Dispositivos Periféricos Ricos**: Incluye micrófono PDM, ranura para tarjeta SD, Type-C, interfaz Grove, y otros periféricos.
- **Alta Compatibilidad**: Compatible con la serie XIAO, Arduino, Raspberry Pi, placa de desarrollo ESP, fácil para desarrollo posterior.
- **Completamente Código Abierto**: Todos los códigos, archivos de diseño y esquemas disponibles para modificación y uso.

### Aplicación

- Automatización Industrial: Inspección de calidad, mantenimiento predictivo, control por voz, etc.
- Ciudades Inteligentes: Monitoreo de dispositivos, gestión de energía, etc.
- Transporte: Monitoreo de estado, seguimiento de ubicación, etc.
- Agricultura Inteligente: Monitoreo ambiental, etc.
- Dispositivos IoT Móviles: Dispositivos portátiles, dispositivos de mano, etc.

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.png" style={{width:1000, height:'auto'}}/></div>

Para usar la funcionalidad completa del Grove Vision AI V2 puede que necesites comprar una cámara CSI por separado, recomendamos el [**Módulo de Cámara OV5647-62 FOV para Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html).

#### Conectando a una cámara con interfaz CSI

Una vez que tengas el Grove Vision AI V2 y la cámara listos para usar, entonces puedes conectarlos a través del cable de conexión CSI. Al conectar, por favor presta atención a la dirección de la fila de pines y no los conectes al revés.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## Boot / Reset / Controlador Flasheado

### Boot

Si has utilizado algún método inusual que ha causado que el Grove Vision AI no funcione correctamente en absoluto (a nivel de software), entonces puede que necesites poner el dispositivo en modo BootLoader para revivir el dispositivo. Aquí te mostramos cómo entrar en modo BootLoader.

**Método 1**

Por favor desconecta el cable de conexión entre el Grove Vision AI y tu computadora, luego presiona y mantén presionado el botón Boot en el dispositivo sin soltarlo. En este momento, por favor conecta el Grove Vision AI a tu computadora con un cable de datos tipo Type-C, y luego suéltalo nuevamente. En este punto el dispositivo entrará en modo BootLoader.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**Método 2**

Con el Grove Vision AI conectado a tu computadora, puedes entrar en modo BootLoader presionando el botón Boot y luego presionando rápidamente el botón Reset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### Reset

Si estás experimentando problemas con datos del dispositivo que de repente no se cargan o imágenes que se atascan, puedes intentar reiniciar tu dispositivo usando el botón Reset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### Controlador

Si encuentras que el Grove Vision AI V2 no es reconocido después de conectarlo a tu computadora. Entonces puede que necesites instalar el controlador CH343 en tu computadora. Aquí tienes algunos enlaces para descargar e instalar el controlador CH343.

- Instalador de Un Clic del Controlador VCP del Proveedor para Windows: [CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Controlador VCP del Proveedor para Windows: [CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Instalador de un clic del controlador CDC para Windows: [CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Controlador CDC para Windows: [CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Controlador VCP del Proveedor para macOS: [CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

:::tip
Para el uso en Linux, necesitas añadir lo siguiente, lo siguiente es para UBUNTU, otros sistemas son similares, pero no los listaremos
```cpp
sudo echo 'USBSYTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE:="0666"' > /etc/udev/rules.d/99-grove-vision-ai.rules
sudo udevadm control --reload-rules
sudo udevadm trigger 
```

:::

### Manual de la Herramienta de Recuperación del Bootloader

Esta parte describe cómo recuperar el bootloader del módulo Grove Vision AI (WE2). La herramienta de recuperación es una herramienta de software que puede utilizarse para recuperar el bootloader del módulo Grove Vision AI (WE2) en caso de que el bootloader esté corrupto, o flashear un nuevo firmware al módulo Grove Vision AI (WE2).

#### Prerrequisitos

- Cualquier placa que tenga interfaz I2C y sea compatible con Arduino IDE.
- Grove Vision AI V2
- Cable de 4 pines

#### Instalación del Software

1. Instala el Arduino IDE desde el [sitio web oficial](https://www.arduino.cc/en/software).
2. Descarga la última versión de la librería Seeed_Arduino_SSCMA desde el [repositorio de GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA).
3. Añade la librería a tu Arduino IDE seleccionando **Sketch > Include Library > Add .ZIP Library** y eligiendo el archivo descargado.
4. Abre el ejemplo `we2_iic_bootloader_recover` desde el Arduino IDE: **File > Examples > Seeed_Arduino_SSCMA > we2_iic_bootloader_recover**.
5. Sube el ejemplo a tu placa Arduino.

#### Conexión del Hardware

Conecta el módulo Grove Vision AI (WE2) a la interfaz I2C predeterminada de tu placa Arduino usando el Cable de 4 pines. Asegúrate de que cada cable esté conectado al pin correcto.

- SCL -> SCL (Grove Vision AI WE2)
- SDA -> SDA (Grove Vision AI WE2)
- VCC -> VCC (Grove Vision AI WE2, 3.3V)
- GND -> GND (Grove Vision AI WE2)

#### Uso

1. Asegúrate de que tu placa Arduino esté conectada a tu computadora, y el módulo Grove Vision AI (WE2) esté conectado a la placa Arduino.
2. Abre el Monitor Serie en el Arduino IDE. (o cualquier otro software de monitor serie, ej., minicom, PuTTY)
3. Espera a que el dispositivo Grove Vision AI (WE2) sea detectado
4. Presiona 'enter' para iniciar el proceso de recuperación del bootloader, espera a que el proceso se complete

:::note
Antes de conectar el Grove Vision AI V2 a tu computadora, mantén presionado el botón BOOT mientras lo conectas a tu computadora a través del cable de datos, y luego suelta el botón BOOT. En algunos casos, puede que tengas que intentar de 3 a 10 veces para recuperar el bootloader exitosamente.
:::

## Primeros Pasos

### Primeros Pasos con Arduino

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/es/grove_vision_ai_v2_software_support/#-arduino-library-introduction-" class="getting_started_label2"> Arduino(Seeed Studio XIAO) </a>
          <br/>Reconocimiento de objetos o comunicación serie
      </div>
  </div>
</div>

### Primeros Pasos con SenseCraft AI

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/es/grove_vision_ai_v2_software_support/#-no-code-getting-started-with-sensecraft-ai-" class="getting_started_label2"> SenseCraft AI Model Assistant</a>
          <br/>Despliegue y observación de modelos de IA sin experiencia en código
      </div>
  </div>
</div>

### Conectar Grove Vision AI V2 a Home Assistant

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/es/sensecraft-ai/application/application-for-homeassistant" class="getting_started_label2"> Conectando a Home Assistant</a>
          <br/>Integrando Grove Vision AI V2 en Home Assistant
      </div>
  </div>
</div>

## Solución de problemas

### P1: ¿Es posible que Grove Vision AI vea la información de resultados de XIAO mientras muestra una pantalla en vivo?

No es posible. Considerando la velocidad de fotogramas o la velocidad de inferencia de imagen, no admitimos la ejecución simultánea de ambos trabajos en esta etapa. Si XIAO está conectado, entonces solo puedes recibir la información de reconocimiento reportada, pero no los fotogramas en tiempo real.

### P2: ¿Qué cámaras admite Grove Vision AI V2? ¿Solo admite la OV5647-62?

Puedes verificar [aquí](/es/Grove-vision-ai-v2-camera-supported). Actualmente hemos escrito controladores para la serie de cámaras OV5642, por lo que Grove Vision AI V2 admite toda la gama de cámaras Raspberry Pi OV5647, por ejemplo, la OV5647-62, OV5647-67 y OV5647-160. Las otras cámaras CSI son teóricamente compatibles, pero debido al hecho de que algunas de las cámaras no tienen controladores escritos para ellas o no tienen una unidad de procesamiento de color propia, puede haber un problema de que el color sea solo verde, y la pérdida de color completo tendrá un posible impacto en la precisión del reconocimiento.


## Recursos

- **[PDF]** [Hoja de datos](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[PDF]** [Diagrama de circuito](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Circuit_Diagram.pdf)
- **[Zip]** [Diagrama de diseño](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Layout.zip)
- **[Zip]** [Lista de materiales](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/202003828_PCBA_Grove_Vision_AI_Module_V2_A11_Design.zip)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)
- **[STP]** [Modelo 3D de carcasa del kit grove vision ai v2](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/grove_vision_ai_v2_kit_case.stp)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

