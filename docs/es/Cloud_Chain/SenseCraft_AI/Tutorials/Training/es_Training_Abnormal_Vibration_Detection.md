---
description: Introduce el uso de la detección de vibraciones anómalas.
title: Detección de Vibraciones Anómalas
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /es/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 08/14/2025
  author: lian
---

# Detección de Anomalías de Vibración

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

Así como la lesión más pequeña puede llevar a una enfermedad fatal, los desastres de ingeniería más severos a menudo surgen de anomalías aparentemente insignificantes, que en realidad proporcionan amplias advertencias y señales reveladoras. La vibración es uno de estos indicadores cruciales: fracturas, bloqueos, sobrecargas y desgaste, todos manifiestan patrones de vibración distintos. Si elegimos hacerlo, podríamos recopilar señales de vibración y emplear hábilmente matemáticas y algoritmos para analizarlas, previniendo así desastres catastróficos y costosos.

## Introducción

Presentamos el kit de detección de anomalías de vibración. Es una solución inteligente ligera diseñada para monitorear e identificar patrones de vibración anómalos en tiempo real. Al aprender la firma de vibración normal de un dispositivo con datos de entrenamiento mínimos, proporciona advertencias tempranas para fallas mecánicas, desgaste o averías, previniendo daños catastróficos antes de que ocurran. Es ideal para mantenimiento predictivo en maquinaria industrial, monitoreo de seguridad en vehículos, evaluación de salud estructural de puentes/edificios, asegurando precisión en equipos de manufactura/laboratorio, y habilitando detección de anomalías en electrodomésticos inteligentes/dispositivos IoT.
<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

Por favor, mira este video primero para obtener una idea inicial de ello.

---

## Escenarios de Aplicación

### Mantenimiento Predictivo para Equipos Rotativos

- Bombas
- Compresores de Aire
- Ventiladores
- Motores
- Cajas de Engranajes

### Cintas Transportadoras Automáticas

### Equipos HVAC/Refrigeración

- Compresores de Refrigeración
- Torres de Enfriamiento
- Motores de Ventilación

### Vehículos y Robótica

- Tractores Agrícolas
- Sistemas AGV/AMR

### Centros de Datos y Sistemas HVAC de Edificios

- Unidades Enfriadoras
- Bombas Secundarias
- Torre de Enfriamiento
- Gabinetes Insonorizados UPS de Gran Escala

### Equipos Domésticos y de Grado de Consumidor

- Alerta de Desbalance de Lavadora/Secadora
- Predicción de Desgaste para Rodillo de Garaje

---

## Cómo funciona

Como se muestra en el video de demostración, el kit consiste en 3 módulos de hardware, que dependen de la plataforma SenseCraft AI para descargar firmware y configurarse.

- <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldado)**</a>
- <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Shield Grove para Seeed Studio XIAO con chip de gestión de batería integrado**</a>
- <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - Acelerómetro Digital de 3 Ejes (LIS3DHTR)**</a>

**Kit:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Kit de Detección de Anomalías de Vibración para XIAO ESP32-S3**</a>

Conectamos un acelerómetro a un objeto con vibraciones consistentes y regulares. Y luego conectamos el acelerómetro a través del cable Grove a un MCU (en este caso, XIAO ESP32-S3). El MCU recopila y analiza los datos de tres ejes del acelerómetro en tiempo real. Al recopilar datos de vibración normal por solo un breve período, el sistema puede aprender a determinar automáticamente si el objeto está experimentando una vibración anormal.

Cuando se conecta a una computadora, los datos del sensor y los resultados de detección se envían vía USB (u otros métodos) a la consola SenseCraft. En la consola, puedes monitorear el estado actual del dispositivo. Si el dispositivo está en un estado anormal, se mostrará una alerta. Además, la consola no solo te permite guardar los datos de "vibración normal" aprendidos para uso futuro, sino que también te permite configurar estados de salida GPIO (como activar una luz LED) para señalar cuando ocurre una anomalía.

Aquí proporcionamos una explicación detallada del algoritmo de detección de anomalías de vibración ---- algoritmo **Detección de Anomalías de Distancia Euclidiana de Giroscopio (GEDAD)**, que inicialmente se desarrolló para giroscopios, y ahora se ha extendido a acelerómetros de 3 ejes manteniendo su nombre original. El algoritmo GEDAD consiste en dos fases centrales: **aprendizaje** e **inferencia**.

---

### 2.1 Adquisición de Datos y Pre-procesamiento

El proceso comienza con la adquisición de datos. Mientras los datos de vibración se recopilan de un acelerómetro de tres ejes vía I2C y se almacenan en un buffer circular, posteriormente los datos se someten a una transformación lineal donde se multiplican por un coeficiente y se suman con otro coeficiente beta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_1.png"/></div>

---

### 2.2 Fase de Aprendizaje

El objetivo de la fase de aprendizaje es establecer una plantilla base de vibración normal para el dispositivo de medición.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

1. **Generación de Plantilla:** Primero, se recopila un conjunto de datos de aceleración de 3 ejes, dimensionado para cubrir un ciclo operacional normal completo, para servir como los datos de plantilla.
2. **Cálculo de Distancia:** El algoritmo luego muestrea aleatoriamente segmentos cortos de datos o llamados *chunks* desde posiciones idénticas dentro de cada canal de la plantilla. Cada chunk se desliza entonces a través de toda la plantilla de su canal correspondiente con un paso definido, calculando la distancia Euclidiana (L2) en cada posición.
3. **Cálculo de Umbral:** A continuación, se filtran los valores atípicos de estas distancias (por ejemplo, usando la regla σ; específicamente, valores menores a un límite dado). Para cada canal, las distancias restantes se ordenan para identificar los valores más pequeños. Luego se calcula un umbral promedio para cada canal a partir de estas distancias, definiendo el límite entre estados normales y anormales.
4. **Calibración de Parámetros:** Finalmente, se determina un parámetro adicional, *K*, encontrando las cuentas medianas de instancias consecutivas donde la distancia Euclidiana está por debajo del umbral durante una comparación posterior. Este parámetro se almacena para mejorar la precisión de detección en la siguiente fase.

---

### 2.3 Fase de Inferencia

Durante la inferencia, el algoritmo compara los datos de aceleración de tres ejes en tiempo real contra los datos de plantilla establecidos para identificar cualquier vibración que no coincida con la 'huella digital' normal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

- El proceso es similar al entrenamiento, pero utiliza segmentos de datos en tiempo real para comparación en lugar de fragmentos muestreados aleatoriamente.
- Si el segmento de datos en tiempo real es suficientemente similar a una porción de la plantilla (es decir, su distancia euclidiana está por debajo del umbral), la vibración se considera normal.
- Por el contrario, si la distancia permanece por encima del umbral después de la comparación contra toda la plantilla, el sistema marca la vibración como una anomalía.

El cálculo real es más complejo, involucrando la fusión de puntuaciones de anomalía a través de canales y el uso del parámetro *K*.

---

### 2.4 Resumen y Trabajo Futuro

En resumen, las ventajas del algoritmo incluyen:

- Velocidad de 'entrenamiento' rápida
- Baja sobrecarga computacional
- Idoneidad para dispositivos embebidos de bajo consumo
- Requiere solo una pequeña cantidad de datos normales para entrenamiento

También estamos explorando optimizaciones de ingeniería, como usar **Transformada Rápida de Fourier (FFT)** para analizar componentes de frecuencia y considerar características tiempo-frecuencia y amplitud promedio. El trabajo futuro se enfocará en mejorar aún más la precisión, eficiencia y robustez del algoritmo.

---

## 3. Cómo usar

### 3.1 Preparación

#### 3.1.1 Hardware

- El kit - **Kit:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Kit de Detección de Anomalías de Vibración para XIAO ESP32-S3**</a>
- 1 cable de datos USB-C (para suministro de energía del dispositivo y transmisión de datos)
- 1 computadora (para acceder al SenseCraft AI)
- Objeto a ser monitoreado (ej., motor, electrodoméstico)

#### 3.1.2 Inicio de Sesión en SenseCraft AI

1. Abra un navegador, visite el sitio web oficial de <a href="https://sensecraft.seeed.cc/ai/home" target="_blank">**SenseCraft AI**</a>, e inicie sesión con su cuenta y contraseña (si no tiene una cuenta, necesita completar el proceso de registro primero).  
2. Ingrese al espacio de trabajo del dispositivo XIAO ESP32S3 Sense y seleccione "Vibration".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

3. Verifique la conexión. Si la conexión es buena y el firmware es el correcto, se mostrará la información del dispositivo. Si el firmware actual del dispositivo es firmware Vision o cualquier otro firmware, puede actualizarlo directamente al firmware de Detección de Anomalías de Vibración (VAD) a través del botón de grabación de firmware en la interfaz.

---

### 3.2 Interfaz de Usuario de SenseCraft AI

La interfaz de usuario de la plataforma está dividida en 4 áreas principales:  

1. **Área de Información del Dispositivo:** Ubicada en la parte superior de la interfaz, mostrando ID del dispositivo, nombre del dispositivo, versión del firmware del dispositivo, inferencia predeterminada de encendido del dispositivo, y control de pines GPIO.  
2. **Área de Configuración de Parámetros y Recolección:** Incluye configuraciones para el tamaño de ventana de parámetros del algoritmo y la función de recolección de vibraciones normales.  
3. **Área de Visualización de Datos de Vibración:** Muestra datos de aceleración de vibración en tiempo real en un gráfico de forma de onda (el eje horizontal es el eje de tiempo, y el eje vertical es el valor de aceleración).  
4. **Área de Salida de Detección:** Muestra los resultados de detección de estados normales y anormales (representados por 0 y 1 respectivamente), así como el gráfico de forma de onda de vibraciones anormales (el eje horizontal es el eje de tiempo, y el eje vertical es la visualización anormal con un rango de 0~1).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

---

### 3.3 Proceso de Operación Detallado

#### 3.3.1 Conexión del Dispositivo e Inicialización

1. Conecte el XIAO ESP32S3 Sense a la computadora a través del cable de datos.  
2. Haga clic en el botón "Connect" en la interfaz de SenseCraft AI.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>
3. El sistema envía automáticamente comandos para consultar información del dispositivo, y el dispositivo devuelve la información de respuesta correspondiente.  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>
4. Una vez que se muestre la información del dispositivo, proceda a la configuración de parámetros:  
   - Los usuarios pueden establecer el tamaño de ventana, con un valor predeterminado de 192 y un rango de 192~768. En este punto, simplemente comience con el valor predeterminado. Regrese para ajustar este parámetro cuando obtenga resultados de detección demasiado variables en el paso posterior. Y por favor recuerde hacer clic en el botón "Save" al final después de verificar que el parámetro está en su mejor valor.
:::tip note
Una ventana demasiado pequeña puede llevar a un aprendizaje insuficiente de patrones de vibración, mientras que una ventana demasiado grande aumentará el tiempo de inferencia.
:::
---

#### 3.3.2 Recolección de Datos de Vibración Normal (Entrenamiento del Modelo)

- Haga clic en el botón "Collect Normal Vibration" para comenzar a recolectar datos de vibración normal (entrenamiento).  
- Espere a que se complete la recolección y confirme que ve el mensaje "Normal vibration collection succeeded".  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

- Guarde los datos de vibración normal recolectados. El botón "Save" guardará tanto el parámetro como el "modelo" aprendido en la memoria flash del MCU, permitiendo que persistan a través de ciclos de energía.

---

#### 3.3.3 Detección de Vibración Anormal

- Haga clic en "Detect" para comenzar la detección en tiempo real.  
- Inspeccione los resultados de detección; la plataforma muestra datos de vibración en tiempo real y resultado de detección - normal o anormal. El resultado "anormal" significa que se detecta una anomalía potencial. Los usuarios pueden elegir usarlo directamente o proceder con verificaciones adicionales, dependiendo de qué tan confiado esté el usuario sobre el patrón de anomalía.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>
- Avanza al paso de implementación si estás satisfecho, de lo contrario regresa al ajuste de parámetros o recolecta datos normales nuevamente.

---

#### 3.3.4 Implementación

Actualmente el firmware puede mostrar los estados de resultado con GPIO. Elige el número de GPIO según tus necesidades, y recuerda habilitar el "Modo de Inferencia Predeterminado al Encender".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>
**Uso de GPIO:**  
Actualmente, los GPIOs 1, 2, 3, 21 (LED), 41, y 42 del XIAO ESP32S3 Sense están disponibles. Puedes establecer el nivel activo para el estado anormal. Por ejemplo, configurando el LED para que se encienda, el LED se encenderá cuando se detecte vibración anormal.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace8.png"/></div>
---

### 3.4 Guía de Ajuste de Parámetros

Proporcionamos a los usuarios dos parámetros algorítmicos principales, **Tamaño de Ventana** y **Umbral de Anomalía**. Estos parámetros influyen directamente en el rendimiento en tiempo real, robustez y precisión del algoritmo de detección de anomalías.

#### 3.4.1 Tamaño de Ventana

El tamaño de ventana se define como el número de puntos de datos de muestra recolectados de cada canal durante la fase de aprendizaje del algoritmo para establecer una plantilla del estado normal. Es un factor crítico en la efectividad del algoritmo.

- Rango: Un entero de 192 a 768. El valor predeterminado es 192. Asumiendo una tasa de muestreo del sensor predeterminada de 100Hz, este rango corresponde a una ventana de tiempo de 1.92 a 7.68 segundos.
- Principio de Ajuste: El tamaño de ventana debe abarcar al menos un ciclo completo de vibración del objeto bajo condiciones normales. Si el período de vibración del objeto es largo, el tamaño de ventana debe incrementarse. En consecuencia, los tiempos de aprendizaje e inferencia del algoritmo aumentarán, y viceversa.

Típicamente, el período de vibración puede determinarse observando el gráfico de "Aceleración" en el área de "Detección de Vibración Anormal" bajo condiciones normales. Primero, observa si la curva general muestra un patrón regular y repetitivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

- Si es así, usa el deslizador debajo del gráfico para aislar uno o dos ciclos completos de vibración. Luego puedes determinar la longitud del período pasando el mouse sobre la curva y calculando la diferencia de tiempo entre dos puntos similares.
- Si el período es difícil de discernir, puedes establecer el tamaño de ventana al valor máximo de 768 para asegurar que el algoritmo capture todos los patrones potenciales de vibración.
:::tip note
En términos generales, un "período" se refiere a una característica que se repite a un intervalo fijo durante el movimiento, desarrollo o cambio de un objeto.
:::

---

#### 3.4.2 Umbral de Anomalía

El umbral de anomalía se define como el valor que el algoritmo usa para determinar si el estado actual es anómalo. Impacta directamente la precisión y robustez del algoritmo.

- Rango: Un número de punto flotante entre 0.0 y 1.0. El valor predeterminado es 0.5.
- Principio de Ajuste: El umbral de anomalía debe ajustarse según los requisitos específicos de la aplicación, y determinar el valor óptimo a menudo requiere múltiples experimentos.

Generalmente, un umbral de anomalía más bajo llevará a más falsos positivos, mientras que un umbral más alto puede resultar en falsos negativos. Para hacer el sensor más sensible, puedes bajar el umbral de anomalía; por el contrario, para reducir falsas alarmas, puedes elevarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

Para aumentar la sensibilidad del sensor, se puede usar un método de búsqueda binaria para encontrar el umbral de anomalía óptimo de manera más eficiente. Los pasos son los siguientes:

- Establece el umbral de anomalía inicial a 0.5 y observa la salida. Si el estado sigue siendo "normal," el umbral probablemente es demasiado alto.
- Baja el umbral de anomalía a la mitad del límite superior (0.5), es decir, 0.25, y observa la salida nuevamente.
- Si el estado permanece "normal," establece el valor actual como el nuevo límite superior; de lo contrario, establécelo como el nuevo límite inferior.
- Luego, ajusta el umbral de anomalía al punto medio entre los límites superior e inferior actuales y observa la salida.
- Si la salida es "anormal," el umbral actual es demasiado bajo, así que establece este valor como el nuevo límite inferior. Si la salida es "normal," establece este valor como el nuevo límite superior.
- Repite los pasos 4 y 5 hasta que en el umbral de anomalía actual produzca consistentemente un estado "normal" al nivel deseado de sensibilidad.

---

#### 3.4.3 Otras Consideraciones

Basado en la implementación actual del algoritmo, los cambios a través de los tres grados de libertad rotacionales son los determinantes principales para la detección de anomalías, mientras que las variaciones en los grados de libertad traslacionales tienen un impacto mínimo. Por lo tanto, cuando el entorno de implementación del dispositivo cambia (especialmente su orientación), a menudo es necesario iniciar un nuevo proceso de aprendizaje y reajustar los parámetros. Si encuentras difícil lograr la precisión de detección deseada a través del ajuste de parámetros, también puedes intentar reaprender el estado de vibración normal antes de reajustar los parámetros.

---

## Código abierto

<a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab: AcousticsLab es un framework multiplataforma para análisis de sonido y vibración.</a>

Nuestros algoritmos y firmware son actualmente de código abierto. Por favor siéntete libre de enviar un <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a> si tienes algún problema o sugerencia.

---

## Futuro

Las características próximas incluyen:

- Agregar múltiples algoritmos de detección de anomalías de vibración basados en aprendizaje profundo de vanguardia/estado del arte.
- Soporta reporte de datos y resultados vía WiFi + MQTT.
- Soportar más MCUs y Acelerómetros.

Siéntete libre de sugerir características que te emocionen o enviar un <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
