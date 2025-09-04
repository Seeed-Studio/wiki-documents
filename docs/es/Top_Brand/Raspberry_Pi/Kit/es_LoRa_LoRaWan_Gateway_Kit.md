---
description: Kit de Gateway LoRa/LoRaWAN
title: Kit de Gateway LoRa/LoRaWAN
keywords:
- Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LoRa_LoRaWan_Gateway_Kit
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: LoRa/LoRaWAN Gateway Kit
category: Wireless
bzurl:  https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html
prodimagename:
surveyurl: https://www.research.net/r/LoRa_LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3
sku: 110060622
--- -->
<!-- ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/LoraWan%20Getway%20868MHz.jpg) -->

LoRa es una solución inalámbrica de largo alcance perfecta para crear redes de área amplia de bajo consumo. Hasta ahora hemos lanzado varias placas "LoRa" como Seeeduino LoRaWan y Grove LoRa Radio, etc. También hay disponible un [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) listo para usar para los usuarios. Sin embargo, si quieres construir tu propia red LoRa, hay 3 cosas que debes preparar para comenzar: un Gateway, al menos un Nodo y un servidor local donde puedas monitorear todos tus dispositivos.

Este kit proporciona todos los elementos básicos que necesitas: una Raspberry Pi 3, un Seeeduino LoRaWAN con GPS y un gateway y servidor local que te permite recopilar y transferir datos entre todos tus nodos LoRa. Al conectar el gateway con Seeeduino LoRaWAN y módulos Grove, puedes construir tu prototipo IoT en minutos.

Con respecto al módulo gateway RHF0M301, es un módulo gateway LoRaWan de 10 canales (8 x Multi-SF + 1 x LoRa Estándar + 1 x FSK) con un puerto DIP de 24 pines a bordo, los usuarios pueden conectar fácilmente el RHF0M301 con el puente PRI 2 RHF4T002, adaptador para Raspberry Pi 3 y RHF0M301. También incluimos una antena de 868MHz, una tarjeta SD de 8GB y cables USB, cables Ethernet y otros accesorios.

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

:::caution
Por favor, siempre conecta una batería Lipo de 3.7V en caso de que la fuente de alimentación USB no sea suficiente. Usamos el kit de 868MHz en esta wiki, pero esta wiki funciona tanto para el kit de 868MHz como para el kit de 915MHz.

:::

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-s6z2{:center}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-s6z2">Kit de 868MHz para Raspberry Pi 3</th>
      <th className="tg-s6z2"><a href="https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></th>
    </tr>
    <tr>
      <td className="tg-5hgy">Kit de 915MHz para Raspberry Pi 3</td>
      <td className="tg-5hgy"><a href="https://www.seeedstudio.com/LoRa%2FLoRaWAN-Gateway-915MHz-for-Raspberry-Pi-3-p-2821.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></td>
    </tr>
  </tbody></table>

## Características

- Bajo consumo de energía y amplia área de cobertura
- Confiabilidad de estándar industrial
- Solución económica para construir redes LoRa/LoRaWAN
- Rica variedad de accesorios de sensores y actuadores
- Monitoreo en tiempo real

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png)

### Lista de Partes
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-0fxu{background-color:#6ab0de;vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-0fxu">Número de parte</th>
      <th className="tg-0fxu">Nombre de la parte</th>
      <th className="tg-0fxu">Cantidad</th>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❶</font></td>
      <td className="tg-vn4c"><a href="https://wiki.seeedstudio.com/es/Raspberry_Pi_3_Model_B/">Raspberry Pi 3</a></td>
      <td className="tg-vn4c">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❷</font></td>
      <td className="tg-031e">Módulo Gateway RHF0M301–868</td>
      <td className="tg-031e">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❸</font></td>
      <td className="tg-vn4c">PRI 2 Bridge RHF4T002</td>
      <td className="tg-vn4c">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❹</font></td>
      <td className="tg-031e"><a href="https://wiki.seeedstudio.com/es/Seeeduino_LoRAWAN/">Seeeduino LoRaWAN con GPS (RHF76-052AM)</a></td>
      <td className="tg-031e">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❺</font></td>
      <td className="tg-vn4c">Adaptador USB a UART</td>
      <td className="tg-vn4c">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❻</font></td>
      <td className="tg-031e">actualización a Tarjeta Micro SD de 16GB – Clase 10</td>
      <td className="tg-031e">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❼</font></td>
      <td className="tg-vn4c">Antena Rubber Duck de 0dBi</td>
      <td className="tg-vn4c">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❽</font></td>
      <td className="tg-yw4l">Adaptador Estándar Americano 5V/2.1A con Conector Micro USB</td>
      <td className="tg-yw4l">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❾</font></td>
      <td className="tg-6k2t">Cable Micro USB 20cm</td>
      <td className="tg-6k2t">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❿</font></td>
      <td className="tg-yw4l">Cable Micro USB 100cm</td>
      <td className="tg-yw4l">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">⓫</font></td>
      <td className="tg-6k2t">Cable Ethernet RJ45 200cm</td>
      <td className="tg-6k2t">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">⓬</font></td>
      <td className="tg-yw4l">Cable JST2.0 10cm</td>
      <td className="tg-yw4l">1 PCS</td>
    </tr>
  </tbody></table>

## Ideas de Aplicación

- Internet de las Cosas
- Casa Inteligente
- Seguridad
- Red Inteligente
- Granja Inteligente
- Parque Inteligente

## Primeros Pasos

### Hardware

#### Descripción general de interfaces

Dado que hay muchas interfaces aquí, es necesario conocer las capacidades de estas interfaces. Por favor, consulte la siguiente figura para más detalles.
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_interface.jpg)

- <font face size={5} font color="ffc000">❶</font> <strong>Entrada Micro-USB:</strong>
Todo el sistema utiliza esta interfaz Micro-USB para el suministro de energía.

- <font face size={5} font color="ffc000">❷</font> <strong>Conector USB HOST:</strong>
 Salida de energía para suministrar a Raspberry Pi

- <font face size={5} font color="ffc000">❸</font> <strong>Entrada de energía Raspberry Pi:</strong> Entrada de energía para Raspberry.

- <font face size={5} font color="ffc000">❹</font> <strong>HDMI:</strong> Interfaz de salida de video digital HD.

- <font face size={5} font color="ffc000">❺</font> <strong>Conector de auriculares:</strong> Conector de auriculares de 3.5mm

- <font face size={5} font color="ffc000">❻</font> <strong>Interfaz Ethernet:</strong> Puedes usar la interfaz Ethernet para conectar este sistema a Internet. O puedes usar Wifi después de configurar la red inalámbrica.

### Conexión de hardware

- Paso 1. Conecta el **módulo Gateway RHF0M301–868** en **PRI 2 Bridge RHF4T002**.
- Paso 2. Conecta **PRI 2 Bridge RHF4T002** en **Raspberry Pi 3**.
- Paso 3. Conecta <font face size={5} font color="ffc000">❷</font> y <font face size={5} font color="ffc000">❸</font> mediante el cable Micro-USB de 20cm.
- Paso 4. Conecta el **Adaptador USB a UART** al GPIO de **Raspberry Pi 3**. Por favor, conéctalos como se muestra en la imagen a continuación.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/RX-TX.png)

- Paso 5. Conecta el **Adaptador USB a UART** a tu PC.
- Paso 6. Conecta <font face size={5} font color="ffc000">❶</font> con el Adaptador Estándar de 5V/2.1A mediante el cable Micro-USB de 100cm.

Cuando hayas terminado todos los pasos, todo el sistema debería verse como la imagen a continuación.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/connection.jpg)

## Software

### Herramienta de Software

En la siguiente guía, se necesitarán las siguientes herramientas, por favor instálalas en tu computadora.

- **[Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/)**, herramienta serial portátil, utilizada para abrir el puerto serial de Seeeduino LoRaWAN with GPS (RHF76-052AM) y enviar comandos AT a él.
- **[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)**, herramienta de terminal que incluye tanto terminal serial como SSH, utilizada para controlar Raspberry Pi.
- Navegador de Internet, utilizado para acceder al servidor LoRaWAN integrado RHF2S001 (Se recomienda usar Chrome o Firefox).

:::note
Puedes tener otras herramientas seriales favoritas, por supuesto puedes usarlas. Sin embargo, si no estás seguro acerca de tus herramientas. Por favor usa las que recomendamos.

:::

### Conectar al Servidor Local

#### Paso 1. Encender y conectar a putty

a) Primero, asegúrate de que la herramienta serial y RPi (Adaptador RHF4T002) estén conectados correctamente.  

b) Conecta la herramienta FT232 a la PC (Si el puerto COM no es reconocido correctamente, por favor consulta [Virtual COM Port Drivers](https://www.ftdichip.com/Drivers/VCP.html))<!-- 源文件链接有误 -->

c) Abre el **Administrador de Dispositivos** de tu PC para obtener el puerto COM correcto. Como COM15 por ejemplo. Configura
ExtraPuTTY según la imagen a continuación (Velocidad 115200, otros usar valores predeterminados), haz clic en **Open**. Como el gateway aún no está abierto, no hay nada en el terminal.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

d) Enciende el gateway. El registro de arranque se mostrará en el terminal PuTTY, al final te pedirá que ingreses tu nombre de inicio de sesión. Por favor nota que toma 1 o 2 minutos obtener la información de solicitud.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/login_putty.png)

e)  Por favor usa el nombre de usuario y contraseña predeterminados de RHF2S001 para iniciar sesión. ( Nombre de usuario: **rxhf**, Contraseña:
**risinghf** ). Nota, cuando ingreses la contraseña, no hay ningún eco

f)  Conecta RHF2S001 con el router a través del cable ethernet

g)  Ejecuta **ifconfig** para verificar la dirección ip y dirección mac.
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_getip.png)

##### La IP está en el cuadrado azul, la dirección MAC está en el cuadrado naranja (Formato: b8:27:eb:xx:xx:xx)

:::note
Después de obtener la IP, se recomienda iniciar sesión en RHF2S001 nuevamente a través de SSH. Porque SSH es más rápido (Ethernet que UART) y estable. Normalmente usamos la herramienta serial para obtener la IP. Reabre PuTTY, usa el módulo SSH para conectar nuevamente.

:::

Para iniciar sesión a través de SSH, necesitas llenar el Hostname con la dirección IP que acabas de obtener. Y usar el puerto 22, elegir el tipo de conexión SSH. Solo deja las otras opciones por defecto. Luego simplemente haz clic en **Open**.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

#### Paso 2. Expandir el Sistema de Archivos de la Tarjeta SD

Por defecto, la imagen habilita solo 2GB para el Sistema Raspbian, se recomienda expandir para usar toda la tarjeta SD (8GB o 16GB). O la tarjeta SD se llenará pronto.
Ejecuta el siguiente comando en el terminal PuTTY para iniciar raspi-config,  

```
sudo raspi-config
```

Elige "Expand Filesystem", cuando termine reinicia para que surta efecto. Ejecuta el siguiente comando en la terminal PuTTY para conocer la capacidad y uso de la tarjeta SD.

```
df -h
```

Por favor consulta las instrucciones de la herramienta raspi-config de Raspberry Pi para más detalles. Haz clic [aquí](https://www.raspberrypi.org/documentation/configuration/raspi-config.md) para ver más.

#### Paso 3. Usar el servidor LoRaWAN integrado RHF2S001

**a) Conectar Gateway con servidor interno**

Ejecuta los siguientes comandos en el terminal PuTTY y verifica el estado:

```
sudo systemctl status pktfwd
```

Si el servicio pktfwd no está activo, ejecuta el siguiente comando para iniciarlo:

```
sudo systemctl enable pktfwd
sudo systemctl restart pktfwd
```

**b) Plan de Frecuencias**

Plan de Frecuencias para EU868
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">EU868</th>
    <th class="tg-s6z2">Uplink DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">867.1</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">867.3</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">867.5</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">867.7</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">867.9</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">868.1</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">868.3</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">868.5</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
</table>

Plan de Frecuencias para US915 HYBRID

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">US915</th>
    <th class="tg-s6z2">Uplink DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">902.3</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">902.5</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">902.7</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">902.9</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">903.1</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">903.3</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">903.5</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">903.7</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH64</td>
    <td class="tg-j0tj">903.0</td>
    <td class="tg-j0tj">DR4</td>
  </tr>
</table>

 **c) Configuración del RHF76-052AM**

 Ahora configuremos el Seeeduino LoRaWAN con GPS (RHF76-052AM).

- Primero, necesitas conectar el Seeeduino LoRaWAN GPS a tu PC.

- Segundo, abre el IDE de **[Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/)**, y copia el código de abajo en un nuevo sketch.

```
 void setup()
 {
     Serial1.begin(9600);
     SerialUSB.begin(115200);
 }

 void loop()
 {
     while(Serial1.available())
     {
         SerialUSB.write(Serial1.read());
     }
     while(SerialUSB.available())
     {
         Serial1.write(SerialUSB.read());
     }
 }
```

- Luego elige el puerto serie correcto del Seeeduino Lora GPS, y elige la placa **Tool->Board->Seeeduino_LoRAWAN**. Después de eso puedes hacer clic en el botón de subir. Si no puedes encontrar Seeeduino_LoRAWAN en la lista de placas o no sabes cómo actualizar el código, por favor haz clic [aquí](https://wiki.seeedstudio.com/es/Seeeduino_LoRAWAN/#install-the-driver-for-windows) para más información.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/port_lora.png)

- Ahora por favor abre el monitor serie en la esquina superior derecha (o puedes presionar Ctrl+Shift+M al mismo tiempo). Elige **Newline** (Esta opción añadirá "\r\n" al final de cada comando.), establece la velocidad de baudios 9600. Luego escribe los comandos de abajo y presiona **send**.

Para EU868

```
AT+FDEFAULT=RISINGHF
AT+DR=EU868
```

Para US915

```
 AT+FDEFAULT=RISINGHF
 AT+DR=US915HYBRID
 AT+RXWIN2=923.3,DR8
```

 ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/At_send.png)

:::caution
Después de conectar el Seeeduino LoRaWAN con GPS a tu computadora, es posible que encuentres dos puertos serie. Uno es para raspberry con putty, uno es para Seeeduino LoRaWAN GPS con SSCOM, por favor elige el correcto.
:::

**d) Acceder a la Consola del Servidor Interno**

Llena tu navegador con la dirección IP (IP de tu gateway), saltará al sitio web de abajo.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_webin.png)

#### Paso 4. Usar Seeeduino LoRaWAN GPS(RHF76-052AM) para acceder al servidor LoRaWAN

Hay dos modos, en este wiki solo hablamos sobre el Modo ABP (Este Modo es gratuito para cualquiera), para más información sobre el Modo OTAA (Este modelo es comercial, necesitas pagar por él), puedes hacer clic [aquí](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual-seeed-v2.1.pdf).

a) Encuentra el botón "Application" en la esquina superior derecha del sitio web de arriba, haz clic en él y verás una nueva página.

b) Ahora necesitas **APPEui**, **DevAddr**, **DevEui** del Seeeduino LoRaWAN para añadir una nueva aplicación.
Para obtener la información de ID del Seeeduino LoRaWAN, necesitas escribir el comando de abajo en el monitor serie del Arduino IDE. Haz clic en **Send**, entonces obtendrás el ID.

```
at+id
```

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/at%2Bid.png)

c) Rellena el espacio en blanco con la información de ID que acabas de obtener. Puedes rellenar el nombre y propietario como desees (aquí usamos Seeed y mi apodo :), usa el APPEui que acabas de obtener. Luego haz clic en el botón **Add**.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/applicationpage.png)

Entonces saltarás a la página de configuración. En esta página, elegimos Personalised Motes. Rellena el **DevEUI** y **DevAddr** con la información de ID de tu Seeeduino LoRaWAN GPS. Y establece el **NWKSKEY** y **APPSKEY** por defecto. Puedes consultar la imagen de abajo.

- DevEui： Seeeduino LoRaWAN GPS obtenido a través del comando AT+ID
- DevAddr: Seeeduino LoRaWAN GPS obtenido a través del comando AT+ID
- NWKSKEY：Valor por defecto 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：Valor por defecto 2B7E151628AED2A6ABF7158809CF4F3C

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Add_info.png)

d) Para probar si has añadido el dispositivo exitosamente, puedes usar el monitor serie del IDE de Arduino y escribir el comando de abajo.

```
at+mode=lwabp

AT+CMSGHEX="0a 0b 0c 0d 0e"
```

Debería verse algo como lo siguiente.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test_send.png)

Luego dirígete al sitio web, haz clic en **Application->Seeed(el nombre de la Aplicación que acabas de agregar)->View application data**, verás los datos que acabas de enviar desde el Seeeduino_LoRAWAN. ¡Felicitaciones! ¡Trabajo terminado!

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test.png)

### Conectar al Servidor Loriot

#### Paso 1. Registro del Gateway en el Servidor Loriot

a)  Los nuevos usuarios necesitan registrar una cuenta primero, haz clic en **[dirección de registro](https://cn1.loriot.io/register.html)** <!--源文件链接有误 -->. Completa el Nombre de Usuario, Contraseña y dirección de correo electrónico para registrarte, después del registro se te enviará un correo electrónico, por favor sigue las instrucciones en el correo para activar.

b)  Después de la activación exitosa, haz clic **[aquí](https://cn1.loriot.io/home/login.html)** <!-- 源文件链接有误 -->para iniciar sesión. El nivel predeterminado es "Community Network", soporta 1 Gateway (RHF2S001) y 10 nodos.

c)  Ingresa a **Dashboard -> Gateway**, haz clic en **Add Gateway** para comenzar a agregar Gateway.

d)  Selecciona **Raspberry Pi 3**

e)  Configura como se muestra a continuación:

- Radio front-end  ->  RHF2S001 868/915 MHz(SX1257)
- BUS  ->  SPI

f)  Completa la dirección MAC de tu RHF2S001, debe estar en formato b8:27:eb:xx:xx:xx. Y también ingresa la información de Ubicación del Gateway.  

g)  Haz clic en "Register Raspberry Pi gateway" para finalizar el registro.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_gateway.png)

h)  Haz clic en el gateway registrado para ingresar a la página de configuración, cambia "Frquency Plan" manualmente, tu plan aquí está decidido por el tipo de tu RHF2S001, los planes disponibles son CN470，CN473，CN434，CN780，EU868, después de seleccionar por favor actualiza la página para obtener el canal exacto. En este wiki elegimos **EU868**.

i)  Ejecuta el comando en la terminal putty：

```
cd /home/rxhf/loriot/1.0.2
sudo systemctl stop pktfwd
sudo gwrst
wget https://cn1.loriot.io/home/gwsw/loriot-risinghf-rhf2s008-rhf1257-SPI-0-latest.bin -O loriot-gw.bin
chmod +x loriot-gw.bin
./loriot-gw.bin -f -s cn1.loriot.io
```

j) Finalizar el registro del gateway. Verás que el gateway está Conectado ahora. Lo siguiente es registrar el nodo.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/service_done.png)

#### Paso 2. Conectar dispositivo nodo al servidor Loriot

**a) Obtener los canales disponibles del gateway**

Los canales actuales del gateway se pueden obtener desde **Dashboard -> Gateway -> Tu Gateway**, puedes ver los canales disponibles como se muestra en la imagen a continuación.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/radio_list.png)

**b) Configuración de Seeeduino LoRAWAN GPS(RHF3M076)**

Abre el monitor serie del IDE de Arduino, ingresa el comando a continuación.

```
at+ch
```  

Para confirmar el canal predeterminado de tu Seeeduino_LoRAWAN GPS, obtendrás 3 canales. Si no hay ningún canal disponible, puedes cambiar los canales del Seeeduino_LoRAWAN con el comando a continuación.

```
at+ch=0,868.1
at+ch=1,868.3
at+ch=2,868.5
```

Luego puedes usar **at+ch** nuevamente para verificar.

**c)  Agregar Seeeduino_LoRAWAN GPS como un Nodo ABP**

Inicia sesión en el servidor Loriot, haz clic en **Dash Board->Applications->SimpleApp**. Haz clic en **Import ABP**, ingresa los siguientes elementos:

- DevAddr: Seeeduino_LoRAWAN GPS obtenido a través del comando "AT+ID" (Nota: Loriot no soporta conector de dos puntos,
necesita eliminar manualmente)  
- FCntUp: Establecer en 1
- FCntDn: Establecer en 1
- NWKSKEY: Valor predeterminado 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY: Valor predeterminado 2B7E151628AED2A6ABF7158809CF4F3C
- EUI: DEVEUI, Seeeduino_LoRAWAN GPS obtenido a través del comando "AT+ID"

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_apb.png)

Haz clic en el botón **Import Device** para finalizar la importación del dispositivo.
Ahora elige **Dashboard -> Applications -> SampleApp**, verás el nuevo Nodo ABP que acabas de agregar.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/inite_status_apb.png)

**d)  Enviar datos desde Seeeduino_LoRAWAN**

Regresa al monitor serie del IDE de Arduino, envía el comando:

```
AT+CMSGHEX="0a 0b 0c 0d 0e"
```

Luego ve a **Dashboard -> Applications -> SampleApp ->Device**, haz clic en el Node Device EUI o DevAddr, encontrarás los datos que acabas de enviar aquí.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/final.png).

## Resumen

  Este artículo ha introducido el Kit de Gateway LoRa/LoRaWAN y el proceso de crear tu propio gateway LoRaWAN. Cubrimos pasos clave en la conexión de hardware y configuración de herramientas de software, incluyendo la conexión de componentes necesarios y la comunicación con el servidor LoRaWAN. Este método de gateway DIY ofrece flexibilidad y personalización, permitiendo a los usuarios construir una red LoRaWAN robusta según sus necesidades.

  Sin embargo, para algunos usuarios, crear su propio gateway LoRaWAN puede ser desafiante, y prefieren dispositivos listos para usar. Entendemos esta demanda y ofrecemos la opción del [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html). Por solo $99, puedes comprar este gateway para construir tu propia red LoRaWAN sin esfuerzo. Yendo un paso más allá, también proporcionamos el [SenseCAP LoRaWAN Starter kit](https://www.seeedstudio.com/SenseCAP-LoRaWAN-Starter-Kit-EU868-p-5789.html) diseñado para principiantes que están explorando LoRaWAN. Este kit incluye un SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway, [XIAO ESP32-S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), [Grove-Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html), y dos sensores Grove. Está específicamente diseñado para facilitar el proceso de aprendizaje y experimentación con LoRaWAN.
  
 <div style={{ display: 'flex', justifyContent: 'center' }}>
  <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html">
    <img src="https://files.seeedstudio.com/wiki/LoRa/LoRaWAN%20Gateway%20Kit/114992981_45-M2_1.jpg" width={450} height="auto" style={{ marginRight: '20px' }} />
  </a>
  <a href="https://www.seeedstudio.com/SenseCAP-LoRaWAN-Starter-Kit-EU868-p-5789.html">
    <img src="https://files.seeedstudio.com/wiki/LoRa/LoRaWAN%20Gateway%20Kit/1-114993166-sensecap-lorawan-starter-kit-eu-45font.jpg"  width={450} height="auto" />
  </a>
</div>

## Preguntas Frecuentes

**P1: ¿Cómo encontrar el firmware de fábrica?**

**R1:** Cuando el firmware está dañado o ocurren errores terribles, puedes descargar el [firmware](https://drive.google.com/open?id=1MVLQlxjhir_mWvKhvuqBsr1a0ievZRDC) aquí. Es solo para raspberry 3b, NO soporta raspberry 3b +.

**P2: ¿Cómo construir la imagen más reciente?**

**R2:** Funciona bien tanto con raspberry 3b como 3b+. Lo probamos bajo la imagen raspbian 2018-11-13.

- Paso 1. Descarga la [imagen más reciente de raspberry](https://www.raspberrypi.org/downloads/raspbian/)

- Paso 2. Descarga libssl1.0.0.deb a tu Raspberry Pi ejecutando `wget https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/libssl1.0.0.deb`, y ejecuta `sudo dpkg -i ./libssl1.0.0.deb` para instalarlo en terminal.

- Paso 3. Ejecuta `sudo raspi-config` en terminal, selecciona _Interfacing Options_ -- _P4 SPI_ -- _YES_ para habilitar SPI, para que Raspberry Pi pueda comunicarse con RHF0M301.

- Paso 4. Ejecuta los siguientes comandos en terminal, descarga e inicia el gateway loriot.

```
wget https://cn1.loriot.io/home/gwsw/loriot-pi-3-rhf1257-SPI-0-latest.bin -O loriot-gw
chmod +x loriot-gw
./loriot-gw -f
```

## Recursos

- **[PDF]** [Descargar PDF de Wiki](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/LoRa_LoRaWan_Gateway_Kit.pdf)
- **[Manual de Usuario]** [Manual de Usuario](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual%20-%20v3.2.pdf).<!-- 源文件链接有误 -->
- **[Más Lectura]** <a href="/es/Seeeduino_LoRAWAN" ><span><font size={"3"}> Wiki de Seeeduino LoRaWAN </font></span></a>
- **[Más Lectura]** [Sitio Web de RisingHF](http://www.risinghf.com/product/risinghf-iot-dicovery/?lang=en)
- **[Azure IoT Edge LoRaWAN]** [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)

## Proyectos

**LoRa IoTea**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

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
