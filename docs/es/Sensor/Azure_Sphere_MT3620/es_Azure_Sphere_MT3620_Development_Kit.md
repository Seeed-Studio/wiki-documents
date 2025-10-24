---
description: Kit de Desarrollo Azure Sphere MT3620
title: Kit de Desarrollo Azure Sphere MT3620
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Azure_Sphere_MT3620_Development_Kit
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure.jpg)

El Kit de Desarrollo Azure Sphere MT3620 está especialmente diseñado para soportar prototipado rápido y permitir a los desarrolladores experimentar la tecnología Azure Sphere. El MT3620 es el primer MCU certificado para Azure Sphere. Los MCUs certificados para Azure Sphere son una nueva clase de microcontroladores híbridos seguros y conectados. El MT3620 cuenta con tres núcleos de microcontrolador accesibles al usuario: un núcleo ARM Cortex-A7 y dos núcleos ARM Cortex-M4F de propósito general. El MT3620 está diseñado para soportar requisitos de tiempo real al interfaz con una variedad de periféricos integrados incluyendo GPIO, UART, I2C, SPI, I2S, PWM y ADC. Tiene un subsistema de seguridad integrado con su propio núcleo CM4F dedicado para arranque seguro y operación segura del sistema, junto con Wi-Fi de banda dual 802.11 b/g/n.

El Kit de Desarrollo MT3620 ha expandido la mayoría de recursos de hardware del MT3620 en los conectores de pines de expansión, mediante cableado a protoboard o agregando una placa shield, el usuario puede conectar fácilmente otros accesorios de hardware.

El sistema operativo Azure Sphere está preinstalado en el MT3620 y está diseñado para trabajar con el Servicio de Seguridad Azure Sphere para crear una plataforma IoT segura. Sus características son:

- Autenticación de dispositivo basada en certificados a cualquier servicio web
- Atestación de software y arranque seguro
- Detección de amenazas mediante reporte de fallos
- Actualizaciones de seguridad continuas
- Una solución IoT integral, segura y de extremo a extremo

El desarrollo de software para MT3620 es soportado usando el poderoso IDE Microsoft Visual Studio:

- Instale [Visual Studio](https://visualstudio.microsoft.com/) (Soporta Community, Enterprise o Professional) y la extensión Azure Sphere, conecte la placa de desarrollo a una PC por USB, y comience a desarrollar aplicaciones IoT con niveles de seguridad sin precedentes.
- Para usar la Placa de Desarrollo MT3620 para Azure Sphere, necesitará una PC con Windows 10 con las últimas Actualizaciones de Windows, junto con el [kit de desarrollo de software Azure Sphere](http://aka.ms/AzureSphereSDK) SDK.

<div class="video-container">
<iframe width="600" height="450" src="https://www.youtube.com/embed/iiDF26HNh-Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

|Nombre del Producto | Cómo Comprar|
|----------------|-----------|
|Kit de Desarrollo Azure Sphere MT3620 Versión US|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)|
|Kit de Desarrollo Azure Sphere MT3620 Versión JP|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-JP-Version-p-3135.html)|
|Kit de Desarrollo Azure Sphere MT3620 Versión EU|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-EU-Version-p-3134.html)|

:::caution
Si necesita ayuda en la selección de versión, por favor consulte la [lista de países o regiones disponibles](https://view.officeapps.live.com/op/view.aspx?src=https://statics3.seeedstudio.com/document/Available_country.docx) para más detalles.
:::

## Características

- Azure Sphere: Seguridad integral para dispositivos IoT
- Wi-Fi de banda dual 802.11 b/g/n con diversidad de antena
- Microcontrolador de tres núcleos con RAM y flash integrados
- Entorno de desarrollo Microsoft Visual Studio
- Autenticación en línea y actualizaciones durante la vida útil del dispositivo

## Especificación

**Hardware**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-amwm{font-weight:bold;:center;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>Descripción</span></th>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>Valor</span></th>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={2}><br />MCU</td>
      <td className="tg-0lax">1 *núcleo ARM Cortex A7 @500MHz , 4MB RAM</td>
    </tr>
    <tr>
      <td className="tg-0lax">2* núcleo ARM Cortex M4 @200MHz, 64KB RAM</td>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={5}><br /><br /><br /><br />ISU</td>
      <td className="tg-0lax">4 *interfaz serie "ISU" que se puede configurar como:</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- I2C funciona hasta 1MHz</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- SPI funciona hasta 40MHz</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- UART funciona hasta 3Mbps</td>
    </tr>
    <tr>
      <td className="tg-0lax">ISU es Interfaz de Comunicación Serie</td>
    </tr>
    <tr>
      <td className="tg-amwm">Conectividad</td>
      <td className="tg-0lax">Wi-Fi de banda dual 2.4/5GHz 802.11 b/g/n</td>
    </tr>
    <tr>
      <td className="tg-amwm">I2S</td>
      <td className="tg-0lax">1* I2S compatible con modo esclavo y modo esclavo TDM</td>
    </tr>
    <tr>
      <td className="tg-amwm">ADC</td>
      <td className="tg-0lax">4 *entrada ADC de 12 bits I/O</td>
    </tr>
    <tr>
      <td className="tg-amwm">RTC</td>
      <td className="tg-0lax">1* RTC con portapilas CR2032 3V</td>
    </tr>
    <tr>
      <td className="tg-amwm">USB</td>
      <td className="tg-0lax">1 *puerto Micro USB para alimentación y depuración, 5V/1A</td>
    </tr>
    <tr>
      <td className="tg-amwm">Conector DC</td>
      <td className="tg-0lax">1* conector de alimentación DC 5V/1A</td>
    </tr>
    <tr>
      <td className="tg-amwm">Temperatura de Funcionamiento</td>
      <td className="tg-0lax">-40~85°C</td>
    </tr>
    <tr>
      <td className="tg-amwm">Dimensiones</td>
      <td className="tg-0lax">L:85mm*W:50mm*H:16mm</td>
    </tr>
    <tr>
      <td className="tg-amwm">Certificación</td>
      <td className="tg-0lax">CE / FCC / MIC / RoHS</td>
    </tr>
  </tbody></table>

**Software**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">Sistema</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">Lenguaje de Programación</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## Descripción General del Hardware

**Diagrama de la Placa**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png"/></a>

- **J1**: Voltaje de Referencia ADC, Encendido: usando 2.5v interno; Apagado: Conectar 1.8v Externo al Pin 1. Apagado por defecto.
- **J2**: Aislamiento 3.3V, Encendido: Habilitar alimentación del sistema 3.3v; Apagado: Cortar la alimentación del sistema 3.3v. Encendido por defecto.
- **J3**: Selección de Alimentación RTC: 2 pines izquierdos: Usando Batería RTC(Modelo:CR2032) en la parte trasera.
- **4 LED RGB de Usuario**: El modelo de LED es LTST-C19HE1WT.
- **Puerto USB**: Fuente de alimentación(5V/1A) y depuración, conectado al chip FT4232HQ en la parte trasera.
- **4 LED del Sistema**: Led1(Cerca del puerto USB): Verde, LED de Actividad FTDI. Led2: ROJO, Indicador de Alimentación. Led3: RGB, Estado Wifi. Led4: RGB, Estado de la Aplicación.
- **Alimentación DC**: 5V/1A
- **3 Botones del Sistema**: Botón A&B(Blanco) son botones de usuario. Botón Reset(Azul) es Reinicio del Sistema.
- **MT3620**：El [MT3620](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf) es un MCU IoT altamente integrado y de alto rendimiento con el alto nivel de seguridad necesario para dispositivos modernos y robustos conectados a internet. El MT3620 está dirigido a una amplia gama de aplicaciones IoT incluyendo hogar inteligente, comercial, industrial y muchos otros dominios gracias a su extenso subsistema de periféricos I/O que permite flexibilidad y libertad en el diseño de dispositivos.
- **FT4232HQ**: El [FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf) es un IC USB 2.0 High Speed (480Mb/s) a UART/MPSSE.

**Mapa de Pines de la Placa**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png"/></a>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**Dimensiones**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png"/></a>

**Alimentación**

La alimentación al Kit de Desarrollo Azure Sphere MT3620 se suministra a través del conector USB Micro B integrado o directamente a través del conector DC.

- El voltaje de GPIO es 3.3v, tiene una sobrecarga limitada de solo 100mA disponibles.
- 5v_out en el conector H3 tiene una sobrecarga limitada de solo 500mA disponibles.
- 3.3v en el conector H3 tiene una sobrecarga limitada de solo 400mA disponibles.
- El consumo de corriente promedio típico es 150mA con Wi-Fi de 5V encendido. La corriente de escaneo Wifi es típicamente 330ma.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/power.png)

**Diseño y Fabricación de Hardware**

Para usar I2S, por favor consulte el [Manual de Usuario M4](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf)

:::tip
Para más información, por favor consulte [Información y herramientas para diseño y fabricación de hardware](https://learn.microsoft.com/en-us/azure-sphere/hardware/hardware-manufacturing-overview).
:::

## Manejo del Producto

**Empaque**

El empaque del Kit de Desarrollo Azure Sphere MT3620 contiene el Kit de Desarrollo Azure Sphere MT3620 y cable USB Micro B.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/box.JPG)

**Precauciones ESD**

El Kit de Desarrollo Azure Sphere MT3620 contiene circuitos electrónicos altamente sensibles y es un Dispositivo Sensible a la Electricidad Estática (ESD). Manejar el Kit de Desarrollo Azure Sphere MT3620 sin la protección ESD adecuada puede destruirlo o dañarlo permanentemente. Se deben aplicar procedimientos apropiados de manejo y empaque ESD durante todo el procesamiento, manejo y operación de cualquier aplicación que incorpore el Kit de Desarrollo Azure Sphere MT3620.

## Aplicaciones

- Hogar/Edificios/Instalaciones
- Automatización
- Seguridad
- Gestión de Equipos
- Servicios Públicos
- Seguridad Pública
:::tip
Para entender cómo funciona Azure Sphere en un entorno del mundo real, considera [el escenario de Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Calificación y aprobaciones

<div className="method1" style={{width: '16%'}}>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/FCC.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/CE.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mic.jpg" /></a></p>
</div>

<div ><img width="{1000}" src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/RoHS.jpg" /></div>

<!-- <style>
.method1{
  :center;
  float:left;
}
.title{
font-size:1px;
text-indent:1px;
line-height:3px
}
</style> -->

- FCC ID: [Z4T-MT3620DEVB](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- CE ID: [18/0331/SZ](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- MIC ID: [CSRT18207](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)

## Instalar Azure Sphere

Si tienes un kit de desarrollo Azure Sphere que aún no ha sido usado, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primero para comenzar a funcionar.

## Azure Sphere Demo

Construimos dos demostraciones que combinan el kit de desarrollo Sphere y el [sistema Grove de Seeed](https://wiki.seeedstudio.com/es/Grove_System/).

**Demo1**: La placa de desarrollo MT3620 funciona como un MCU, que se conecta con sensor de temperatura (SHT31), relé, ventilador, pantalla, dispositivo analógico. La demo simula un ventilador con conectividad IoT, las personas pueden medir la temperatura ambiente y configurar un valor umbral para encender/apagar el ventilador desde la nube de Azure. La temperatura se mostrará en la pantalla LED. El usuario puede intercambiar la resistencia para cambiar el nivel de velocidad del ventilador de 0,1,2,3 (0 significa apagar el ventilador).

**Demo2**: La placa de desarrollo MT3620 funciona como un dispositivo de conectividad de seguridad IoT, que se conectará a un electrodoméstico ya fabricado, el electrodoméstico tiene su propio MCU, que en esta demo, usamos un Arduino para simular la placa de control de un ventilador, la placa puede obtener el estado de los datos del motor del ventilador, al analizar los datos, las personas pueden obtener el estado de falla y enviar un técnico para arreglarlo. Al presionar el botón, esto simula el estado de salud del dispositivo ventilador, cuando se presiona el botón, eso significa que el dispositivo necesita mantenimiento.

### Hardware

**Lista de Partes**

| Kits de desarrollo MT3620 | Grove-Temperature&Humidity|  Grove - Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/relay.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
| Grove - Slide Potentiometer | Grove - 4-Digit Display |   Grove - Blue LED Button  |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Slide_Potentiometer_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/4_digital_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Grov-Blue_led_button.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html)|
| MT3620 Grove Shield |Seeeduino V4.2  | Base Shield  |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

**Diagrama del Sistema**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png"/></a>

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png"/></a>

**Shield Grove para MT3620**

Dado que el [SDK de Azure Sphere](http://aka.ms/AzureSphereSDK) aún no ha soportado ADC e I2C en MT3620. Este shield sirve como una interfaz entre el puerto UART del MT3620 y dispositivos I2C externos, como el sensor de temperatura I2C. La función básica del shield es ayudar a conectar con dispositivos I2C externos. Al usar un chip ADC compatible con I2C, el desarrollador también puede leer los datos analógicos desde el puerto analógico.

El [Shield Grove para MT3620](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) incluye 2 chips, AD7992 (Analógico a I2C) y SC18IM700 (I2C a UART) para habilitar la función ADC e I2C desde el lado del hardware. Así que la señal de los sensores analógicos pasa a través del AD7992 y luego del SC18IM700 al UART de la placa de desarrollo. Los sensores I2C pasan a través del SC18IM700 al UART de la placa de desarrollo también.

El [AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) es un ADC de aproximación sucesiva de 12 bits, de bajo consumo con una interfaz compatible con I2C. Transforma la señal analógica A0, A1 a datos I2C.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

El [SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) está diseñado para servir como una interfaz entre el puerto UART estándar de un microcontrolador o microprocesador y el bus I2C serial; esto permite al microcontrolador o microprocesador comunicarse directamente con otros dispositivos del bus I2C. Transforma las señales SDA/SCL a GPIO26_TXD0 y GPIO28_RXD0.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>Descripción General del Hardware del Shield Grove para MT3620</div>

**Conexión del Hardware**

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_Front.jpg)

<div style={{textAlign: 'center'}}>Vista frontal de la configuración del hardware</div>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_backside.jpg)

<div style={{textAlign: 'center'}}>Vista superior de la configuración del hardware</div>

- Paso 1. Conectar Grove-Blue LED Button al puerto 2 del shield base Grove.
- Paso 2. Conectar la señal PWM del ventilador al puerto 5 del shield base Grove.
- Paso 3. Conectar el puerto 7 (Puerto Serial por Software) del shield base Grove al UART3 del Shield Grove para MT3620. Cortar el Vcc (cable rojo) y dejar TX/RX/GND para la comunicación serial.
- Paso 4. Conectar el shield base Grove al Seeeduino/Arduino.
- Paso 5. Conectar Grove-4 Digital Display al puerto GPIO4 del Shield Grove para MT3620.
- Paso 6. Conectar Grove-Temperature&Humidity Sensor(SHT31) al puerto I2C del Shield Grove para MT3620.
- Paso 7. Conectar Grove-Relay al puerto GPIO0 del Shield Grove para MT3620 y el terminal de salida de Grove-Relay para controlar el encendido/apagado del ventilador.
- Paso 8. Conectar Grove-Slide Potentiometer al puerto analógico del Shield Grove para MT3620.
- Paso 9. Conectar el shield base MT3620 a la placa de desarrollo Azure Sphere MT3620.
- Paso 10. Conectar el cable USB a la placa de desarrollo Azure Sphere MT3620 y la PC.
- Paso 11. Conectar el cable USB al Arduino/Seeeduino y la PC.
- Paso 12. Conectar la fuente de alimentación al ventilador.

:::caution
Por favor asegúrese de que el interruptor de voltaje en el shield base Grove esté configurado a **3.3v**.
:::

### Software

El software incluye el sistema de simulación de ventilador inteligente y el sistema de desarrollo Azure Sphere MT3620.

- Para el sistema de simulación de ventilador inteligente, usar la placa arduino para leer la señal de entrada de presión/liberación del Grove-Blue LED button, generar el PWM para controlar la velocidad del ventilador y controlar el estado LED del Grove-Blue LED button también. Luego usar el puerto 7 para comunicarse con el sistema de desarrollo Azure Sphere MT3620 a través de UART.

- Para el sistema de desarrollo Azure Sphere MT3620, Grove-4 Digital LED muestra la temperatura del sensor Grove-Temperature&Humidity Sensor(SHT31), lo cual demuestra la función del shield UART-I2C y la función de salida GPIO del MT3620. Deslizar el Grove-Slide Potentiometer para cambiar la velocidad del ventilador, lo cual demuestra la función de entrada I/O del MT3620. Configurar un valor de temperatura umbral desde Azure Cloud, cuando el valor > umbral, Grove-relay enciende el ventilador, de lo contrario apaga el ventilador. El usuario también puede ajustar Grove-Slide Potentiometer, cuando el estado de funcionamiento del ventilador falla, el MCU del ventilador enviará la falla a Azure Sphere por UART, luego el reporte de falla va a Azure Cloud y espera mantenimiento.

**Sistema de Simulación de Ventilador Inteligente**

- Paso 1. Abrir el IDE de Arduino.
- Paso 2. Copiar el [código de simulación de ventilador inteligente de Arduino](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan/blob/master/Arduino_code/Arduino_code.ino) y pegarlo en el IDE de Arduino.
- Paso 3. Seleccionar Arduino/Seeeduino v4 como placa desde el menú Tools.
- Paso 4. Seleccionar el puerto COM relacionado desde el menú Tools.
- Paso 5. Hacer clic en upload para cargar el código al Arduino/Seeeduino.

:::note
Si no sabe cómo cargar el código, por favor revise [cómo cargar código](https://wiki.seeedstudio.com/es/Upload_Code/).
:::

**Sistema de Desarrollo Azure Sphere MT3620**

- Paso 1. Descargar el [código de Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan).
- Paso 2. Seguir las guías de inicio rápido para Azure Sphere para abrir el proyecto **AzureSphereDemo2.vcxproj**.
- Paso 3. Abrir el main.c bajo Source Files.
- Paso 4. Modificar wifiSsid y wifiPsk en las líneas 21 y 22.
- Paso 5. Conectar la demo a Azure IoT.
- Paso 6. Hacer clic en Build -> Rebuild Solution directamente al dispositivo.
- Paso 7. Usar la herramienta Remote Debug Tool para acceder al dispositivo.
- Paso 8. Ver los datos de temperatura transmitidos desde la consola.
- Paso 9. Configurar el explorador de dispositivos y vincular los dispositivos físicos y los dispositivos en la nube.
- Paso 10. Presionar el sensor de temperatura y ver el mensaje de activación en la consola.
- Paso 11. Presionar el botón para simular el error del ventilador y ver el estado en la consola.

Para una operación detallada, consulte el video.

<div class="video-container">
<iframe width="1000" height="669" src="https://www.youtube.com/embed/KXThR9RUNvw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Recursos

- **[Producto]** [Azure Sphere MT3620 Development Kit Resumen del Producto](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Producto]** [Bienvenido a Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Certificación]** [Azure Sphere MT3620 Development Kit-CE](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- **[Certificación]** [Azure Sphere MT3620 Development Kit-FCC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- **[Certificación]** [Azure Sphere MT3620 Development Kit-MIC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)
- **[Biblioteca]** [Biblioteca MT3620 Grove Shield](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Wiki]** [MT3620 Grove Shield](https://wiki.seeedstudio.com/es/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/)
- **[Hoja de Datos]]** [MediaTek MT3620 Resumen del Producto](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[Hoja de Datos]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[Mecánico]** [Azure Sphere MT3620 Development Board-Dibujo-2D](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[Web FAQ]** [Foro de Azure Sphere](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[Web FAQ]** [Problemas de Github de Azure Sphere](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

