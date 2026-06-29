---
description: SenseCraft AI es una plataforma AIoT sin código/bajo código de Seeed Studio que te permite desplegar modelos de IA preentrenados en dispositivos de borde como el reSpeaker. Con la palabra de activación "Lumio", esta configuración habilita aplicaciones de IA controladas por voz, sin necesidad de programación compleja.
title: SenseCraft AI con reSpeaker
keywords:
  - SenseCraft
  - reSpeaker XVF3800
  - Detección de palabras clave
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg
slug: /respeaker_xvf3800_sensecraft
sku: 114993702,114993700
last_update:
  date: 6/4/2026
  author: Kasun Thushara
createdAt: '2026-06-04'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_sensecraft/
---


## Introducción

SenseCraft AI es la plataforma de IA sin código/bajo código de Seeed Studio que simplifica el despliegue de modelos de inteligencia artificial preentrenados en dispositivos de borde como el reSpeaker. Esta guía se centra en configurar el reSpeaker para la detección de palabra de activación usando el disparador personalizado "Lumio", lo que permite el control activado por voz para tus proyectos sin escribir código complejo. Con SenseCraft AI, puedes probar, previsualizar e integrar rápidamente eventos de palabra de activación en tus flujos de trabajo de hardware. La plataforma también te permite crear y cargar tus propios modelos personalizados para detectar eventos de sonido específicos y palabras de activación personalizadas, dándote total flexibilidad para adaptar las interacciones por voz a las necesidades únicas de tu aplicación.

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Lite</th>
    <th></th>
    <th>reSpeaker XVF3800</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>

    <td
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0 20px'
      }}
    >
      OR
    </td>

    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Consigue uno ahora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>

    <td></td>

    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Consigue uno ahora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


## Desplegar modelo existente

### Paso 1: Actualizar el firmware del dispositivo

Antes de desplegar el modelo de palabra de activación, asegúrate de que tu reSpeaker XVF3800 esté ejecutando la versión de firmware correcta.

El archivo de firmware requerido es:
> `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.7_48k_test5.bin`

Sigue el [procedimiento](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#actualizar-firmware) estándar de DFU (Actualización de Firmware del Dispositivo) de tu dispositivo para flashear este archivo en el reSpeaker XVF3800.

Si estás usando un reSpeaker Lite, asegúrate de que esté ejecutando la versión de firmware correcta.

El archivo de firmware requerido es:
> `respeaker_lite_i2s_dfu_firmware_v1.0.9.bin`

Sigue el [procedimiento](https://wiki.seeedstudio.com/es/reSpeaker_usb_v3/#descarga-de-firmware) estándar de DFU (Actualización de Firmware del Dispositivo) de tu dispositivo para flashear este archivo en el reSpeaker Lite.


### Paso 2: Navegar a la plataforma SenseCraft AI

Abre tu navegador web y ve a:
> **https://sensecraft.seeed.cc/**

### Paso 3: Acceder a la sección de entrenamiento

Desde el menú de navegación principal:
1. Haz clic en **Products**
2. Selecciona **SenseCraft AI**
3. Elige **Training AI Models**



### Paso 4: Abrir tu espacio de trabajo

1. Navega a tu **Workspace**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_0.jpg" alt="pir" width={800} height="auto" /></p>

2. Verifica que el espacio de trabajo esté configurado con **reSpeaker** como tipo de dispositivo activo
3. Selecciona **reSpeaker** de la lista de dispositivos
4. Haz clic en el botón **Connect** para establecer una conexión con tu dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_1.jpg" alt="pir" width={800} height="auto" /></p>

### Paso 5: Reemplazar el modelo en ejecución

Una vez conectado, reemplazarás el modelo existente en el dispositivo:

1. Localiza la sección **Model** bajo "Replace the device running model"
2. Haz clic en **Select Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_2.jpg" alt="pir" width={800} height="auto" /></p>

3. Elige **Keyword Spotting- Lumos Keyword recognition** de las opciones disponibles

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_3.jpg" alt="pir" width={800} height="auto" /></p>

:::note

El modelo que estás desplegando se llama **Lumos**. Es un modelo ligero de reconocimiento de voz diseñado para proporcionar capacidades de interacción por voz eficientes y de baja latencia para dispositivos de borde. Al analizar características espectrales de audio, el modelo puede detectar con precisión la palabra de activación específica **"Lumos"** incluso en medio de un ruido de fondo ambiental complejo.
:::


### Paso 6: Confirmar el despliegue del modelo

1. Aparecerá un cuadro de diálogo con los detalles del modelo
2. Haz clic en **Confirm** para proceder a flashear el modelo en tu dispositivo
3. Espera un momento mientras el modelo se flashea en el reSpeaker

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={800} height="auto" /></p>

### Paso 8: Probar la detección de palabra de activación

Después de un despliegue exitoso, verás:

- **Visualización del espectro de audio**: muestra la entrada de sonido en tiempo real
- **Dos clases de detección**:
  - *Ruido de fondo*
  - *Lumos*

Para probar la palabra de activación:
1. Pronuncia claramente la palabra **"Lumos"** hacia el micrófono del reSpeaker
2. Observa cómo aumenta el nivel de confianza para la clase Lumos
3. Ajusta el **parámetro de umbral** según sea necesario para afinar la sensibilidad de detección

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={800} height="auto" /></p>

## Entrenar y desplegar tu propio clasificador de audio

### Paso 1: Abrir la pestaña de entrenamiento

1. Navega a **https://sensecraft.seeed.cc/**
2. Desde el menú principal, ve a **Products** → **SenseCraft AI** → **Training AI Models**
3. Haz clic en la pestaña **Training** para acceder a la interfaz de clasificación de audio


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_6.jpg" alt="pir" width={800} height="auto" /></p>

### Paso 2: Conectar tu dispositivo reSpeaker

Bajo **Audio Classification / Detection**:

1. Verifica que **reSpeaker Microphone** esté seleccionado como dispositivo de entrada
2. Haz clic en el botón **Connect** para establecer una conexión
3. Espera a que la plataforma confirme la conexión exitosa


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_7.jpg" alt="pir" width={800} height="auto" /></p>



### Paso 3: Recopilar datos de ruido de fondo

Antes de entrenar sonidos personalizados, debes establecer una línea base para el ruido ambiental normal.

1. Pulsa **Collect Training Data for Background Noise**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_8.jpg" alt="pir" width={800} height="auto" /></p>

2. La plataforma grabará automáticamente durante aproximadamente **20 segundos**
3. La grabación se dividirá en **muestras de 1 segundo**
4. Una vez completado, aparecerá una vista previa de las muestras de datos de fondo
5. Revisa las muestras y pulsa **Apply** cuando estés satisfecho


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_10.jpg" alt="pir" width={600} height="auto" /></p>


### Paso 4: Crear una clase de sonido personalizada

Ahora añadirás una nueva clase para el sonido específico que quieres que el modelo detecte.

**4.1 Nombra tu clase**

1. Haz clic en **Add New Class**
2. Introduce el nombre de la clase: **Grassbreaking**
3. Pulsa **Create** o confirma la nueva clase

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_11.jpg" alt="pir" width={800} height="auto" /></p>

**4.2 Recopilar datos de entrenamiento para la clase personalizada**

1. Selecciona la clase **Grassbreaking**
2. Pulsa **Collect Training Data**
3. La plataforma grabará durante aproximadamente **2 segundos**
4. La grabación se dividirá en **muestras de 1 segundo**

**4.3 Revisar y aplicar las muestras**

1. Después de la recopilación, aparecerá una vista previa de las **2 muestras**
2. Escucha o revisa las muestras
3. Pulsa **Apply** cuando estés satisfecho con la calidad

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_9.jpg" alt="pir" width={800} height="auto" /></p>

**4.4 Repetir para más muestras**

Para lograr una detección fiable, repite el proceso de recopilación de datos hasta que hayas recopilado al menos **8 muestras** para la clase Grassbreaking.

**Consejos para buenas muestras:**
- Varía la intensidad del sonido de rotura de hierba
- Recopila muestras desde posiciones o ángulos ligeramente diferentes
- Asegúrate de que el sonido sea claramente audible por encima del ruido de fondo


### Paso 5: Entrenar el modelo

Una vez que hayas recopilado suficientes datos, es momento de entrenar el modelo.

#### 5.1 Navegar al paso de entrenamiento

Ve a **Step 2: Training** en la interfaz.

#### 5.2 Confirmar la selección del dispositivo

Verifica que **reSpeaker** esté seleccionado como el dispositivo de destino para el entrenamiento.

#### 5.3 Iniciar el entrenamiento

1. Pulsa el botón **Train**
2. Espera unos minutos a que se complete el proceso de entrenamiento
3. No cierres el navegador ni desconectes el dispositivo durante el entrenamiento

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_12.jpg" alt="pir" width={800} height="auto" /></p>

#### 5.4 Revisar los resultados del entrenamiento

Una vez finalizado el entrenamiento, tus clases entrenadas aparecerán con:
- **Barras de probabilidad animadas** que muestran los niveles de confianza
- Predicciones en tiempo real basadas en la entrada de audio en vivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_13.jpg" alt="pir" width={800} height="auto" /></p>

### Paso 6: Implementar el modelo en reSpeaker

**6.1 Ir al paso de implementación**

Ve a **Step 3: Deploy** en la interfaz.

**6.2 Implementar el modelo**

1. Haz clic en el botón **Deploy** para enviar el modelo a tu dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_14.jpg" alt="pir" width={800} height="auto" /></p>


2. Aparecerá un cuadro de diálogo de confirmación
3. **Confirma** la implementación para enviar el modelo TFLM (TensorFlow Lite Micro) al XIAO ESP32-S3 del reSpeaker


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_15.jpg" alt="pir" width={600} height="auto" /></p>

**6.3 Esperar a que finalice**

El proceso de implementación puede tardar un momento. Espera el mensaje de confirmación que indique que la implementación se ha realizado correctamente.


### Paso 7: Supervisar la detección en tiempo real

Después de una implementación exitosa:

1. La interfaz mostrará **barras de confianza animadas** para cada clase detectada
2. Habla o produce el sonido de rotura de hierba para probar la detección
3. Observa cómo aumenta el nivel de confianza para la clase **Grassbreaking**
4. Observa cómo disminuye la confianza de **Background Noise** cuando se detecta el sonido personalizado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_16.jpg" alt="pir" width={600} height="auto" /></p>



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

