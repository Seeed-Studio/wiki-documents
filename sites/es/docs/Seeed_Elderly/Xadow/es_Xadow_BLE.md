---
description: Xadow - BLE 
title: Xadow - BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/813004001xadow_ble.jpg)

El Xadow - BLE es un módulo con factor de forma Xadow habilitado para Bluetooth Smart basado en el módulo HM-11. El Xadow - BLE puede utilizarse en configuraciones de hardware donde normalmente se usa un módulo Xadow. Usando un Xadow - BLE, un sistema embebido habilitado para Xadow puede comunicarse con computadoras de escritorio, teléfonos inteligentes, computadoras tablet e incluso otros sistemas embebidos que proporcionen Bluetooth Smart, también conocido como Bluetooth Low Energy (BLE).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-p-1727.html)


## Características
---
- Forma compatible con XBee
- Protocolo Bluetooth: Especificación Bluetooth V4.0 BLE
- Frecuencia de trabajo: banda ISM de 2.4 GHz
- Método de interfaz: un puerto serie
- Entorno abierto dentro de 30 metros puede realizar comunicación entre módulos
- Para enviar y recibir sin límite de bytes entre módulos
- Método de modulación: GFSK (Gaussian Frequency Shift Keying)
- Potencia de transmisión: - DBM, 23-6 DBM, 0 DBM, 6 DBM, puede modificarse mediante el comando AT
- Utiliza chip TI CC2540, espacio de configuración de 256 KB, soporta el comando AT, el usuario puede cambiar según necesidad el rol (modo maestro, esclavo) y la velocidad de baudios del puerto serie, nombre del equipo, parámetros de emparejamiento como contraseñas, uso ágil.
- Fuente de alimentación: + 3.3 VDC 50 mA
- Temperatura de trabajo: - 5 ~ + 65 Centígrados

## Especificación
---

|Especificación|	Valor|
|---|---|
|Microprocesador|	CC2540|
|Recursos|	Soporta el comando AT, el usuario puede cambiar según necesidad el rol (modo maestro, esclavo) y la velocidad de baudios del puerto serie, nombre del equipo, parámetros de emparejamiento como contraseña, el uso flexible.|
|Tamaño PCB	|24.5mmx30.5mmx0.8mm|
|Dimensión del Contorno	|24.5mmx30.5mmx9.77mm|
|Fuente de alimentación	|3.3V|
|Protocolo de Comunicación|	Uart(TTL)|
|Cantidad de IO	|2|
|IO de entrada de tecla	|1|
|IO de indicadores LED	|1|
|Conectividad	|Socket compatible con Xadow|

## Características Eléctricas
---
|Especificación	|Mín|	Típ	|Máx|	Unidad|
|---|---|---|---|---|
|Voltaje de Entrada Máximo|	-0.3	|-|	3.6|	V|
|Voltaje de Entrada de Trabajo|	2.0	|3.3|	3.6|	V|
|Corriente de Transmisión	|-	|15	|-|	mA|
|Corriente de Recepción	|-|	8.5	|-|	mA|
|Corriente de Sueño Profundo	|-	|600	|-	|uA|
|Temperatura de Operación|	-40	|-|	125|	°C|


## Definición de pines
---
![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Xadow_ble_pin.jpg)

:::note
    Solo se listan las funciones alternativas importantes, puede haber más, por favor consulte la hoja de datos.
:::
## Uso
---
**Comandos AT y Configuración**

**1）	Consultar la dirección MAC nativa**

Enviar: AT+ADDR?

Enviar después de un retorno exitoso: OK + LADD: dirección MAC (dirección de 12 caracteres)

**2）	Consultar la velocidad de baudios**

Enviar: AT+BAUD?

Enviar después de un retorno exitoso: OK + Get: [para1]

Alcance de para1:0 ~ 8. Los parámetros correspondientes a: 0 representa 9600, 1, 2, 9600, 38400, en representación del representante representativo de 57600, 115200, 5, 4800, 6, 7 representa 1200, 1200 2400. La velocidad de baudios predeterminada es 9600.

**3）	Establecer la velocidad de baudios**

Enviar: AT+BAUD[para1]

Enviar después de un retorno exitoso: OK + Set:[para1]

Ejemplo: enviar: AT + BAUD1, retorna: OK + Set: 2. La velocidad de baudios se establece en 19200.

:::note
    Después del cambio a 1200, el módulo ya no admitirá las configuraciones del comando AT, y presionando el PIO0 en espera, el módulo puede restaurar la configuración de fábrica. No se recomienda usar esta velocidad de baudios. Después de establecer la velocidad de baudios, los módulos deben estar encendidos, los nuevos parámetros establecidos pueden tomar efecto.
:::
**4）	desde el dispositivo conectado a la dirección bluetooth especificada**

Enviar: AT+CON[para1]

Enviar después de un retorno exitoso: OK + CONN[para2]

El rango de Para2 es: A, E, F

Ejemplo: desde la dirección bluetooth es: 0017EA0943AE, enviando el AT + CON0017EA0943AE, el módulo retorna: OK + CONNA o OK + + CONNF CONNE o OK.

**5）	eliminación de información de emparejamiento del equipo**

Enviar: AT+CLEAR

Enviar después de un retorno exitoso: OK + CLEAR

Limpiar exitosamente la información del código de dirección del dispositivo que había estado conectado.

**6）	consultar modo de trabajo del módulo**

Enviar: AT+MODE?

Enviar después de un retorno exitoso: OK + Get: [para]

Para: el rango de 0 ~ 2. 0 representa modo de paso directo, en representación de la adquisición PIO + control remoto + 1 paso directo, 2 representativo paso directo + modo de control remoto. El predeterminado es 0.

**7）	establecer modo de trabajo del módulo: **

Enviar: AT+MODE[para1]

Enviar después de un retorno exitoso: OK + Set: [para]

**8）	consultar nombre del dispositivo**

Enviar: AT+NAME?

Enviar después de un retorno exitoso: OK + NAME [para1]

**9）	establecer el nombre del dispositivo**

Enviar: AT+NAME[para1]

Enviar después de un retorno exitoso: OK + Set: [para1]

Ejemplo: Establecer el nombre del dispositivo como Seeed, enviando el AT + NAMESeeed, retorna OK + Set: Seeed AT en este momento, el nombre del módulo bluetooth ha sido cambiado a Seeed. Nota: después de la ejecución de la instrucción, se requiere electricidad, establecer los parámetros de la aprobación.

**10）	consultar contraseña de emparejamiento**

Enviar: AT+PASS?

Enviar después de un retorno exitoso: OK + PASS: [para1]

El rango de Para1 es 000000 ~ 999999, el predeterminado es 000000.

**11）	establecer contraseña de emparejamiento**

Enviar: AT+PASS[para1]

Enviar después de un retorno exitoso: OK + Set: [para1]

**12）	restaurar configuración de fábrica**

Enviar: AT+RENEW

Enviar después de un retorno exitoso: OK + RENEW

Restaurar la configuración de fábrica predeterminada del módulo, la configuración del módulo se restablecerá, volviendo a la fábrica con el estado de la fábrica predeterminada, retraso del módulo 500 ms después del reinicio. Si no es necesario, por favor tenga cuidado.

**13）	reinicio del módulo**

Enviar: AT+RESET

Enviar después de un retorno exitoso: OK + RESET

Después de la ejecución de la instrucción, el módulo retrasará 500 ms después del reinicio.

**14）	establecer el modo maestro-esclavo**
Enviar: AT+ROLE[para1]
Enviar después de un retorno exitoso: OK + Set: [para1]


## HelloWorld
---
:::note
Cuando conecte Xadow-BLE a Xadow Main Board, debe preocuparse por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (vea las cuatro esquinas de cada módulo Xadow).
:::
**//hacer que Xadow BLE sea un dispositivo BLE Maestro**

```
#define SerialBaud   9600
#define Serial1Baud  9600

void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
    while(!Serial.available());
    // set master
    Serial1.print("AT+ROLE1");
    delay(1000);
}

void loop()
{
    while(Serial.available()){
      Serial1.write(Serial.read());
    }
    while(Serial1.available()){
      Serial.write(Serial1.read());
    }
}
```

**//hacer que Xadow BLE sea un dispositivo BLE Esclavo**

```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
    while(!Serial.available());
    // set slave
    Serial1.print("AT+ROLE0");
    delay(1000);
}

void loop()
{
    while(Serial.available()){
      Serial1.write(Serial.read());
    }
    while(Serial1.available()){
      Serial.write(Serial1.read());
    }
}
```

## Comunicación BLE con Android
---
Aquí te mostramos cómo hacer que Xadow - BLE se comunique con tu teléfono móvil Android (Nota: la versión de tu sistema android debe ser superior a 4.3).
1. Descarga la aplicación de android [aquí](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar), e instálala en tu teléfono móvil android.
2. Conecta tu xadow BLE con la placa principal Xadow, y luego copia el código de demostración del dispositivo esclavo Xadow BLE de arriba, compílalo y súbelo a la placa principal Xadow.
3. Abre una herramienta serial (ej. SSCOM32), y abre el puerto serial de la placa principal Xadow.
4. Abre el APK de ejemplo BLE que instalaste en el primer paso, se verá como sigue:

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_start.png)

5. haz clic en el botón start en el centro de la interfaz, comenzará a escanear dispositivos esclavos BLE. El resultado del escaneo se mostrará en la lista del diálogo.

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_scanResult.png)

6. Selecciona el Seeed BLE, intentará conectar el Xadow BLE automáticamente.
7. Después de conectar exitosamente el dispositivo esclavo ble, encontrarás que el UUID es nulo y necesitas elegir uno de la lista de UUID de características. Aquí elegimos el UUID:0000ffe1-0000-1000-8000-00805f9b34fb

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_UUIDSelected.png)

8. ¡OK, ha llegado el momento emocionante! Ingresa el comando(datos) en el cuadro de texto, y luego haz clic en el botón Send, el mensaje será enviado a los dispositivos ble especificados. y el cuadro de texto recv mostrará el mensaje de los dispositivos esclavos, como sigue. ¡Diviértete!
![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_sendData.png)![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_recvData.png)


## Visor de Esquemático en Línea
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle Xadow-BLE_v1.0](https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip)
- [BLE_apk_para_Android](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar)
- [Hoja de datos del módulo BLE](https://files.seeedstudio.com/wiki/Xadow_BLE/res/Bluetooth4_en.pdf)
- [Código fuente BLE Android en GitHub](https://github.com/Seeed-Studio/BLE_Example)
- [Código fuente 4.0 BLE IOS6](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMSoft_ios6.zip)
- [Código fuente 4.0 BLE IOS7](https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-HMSoft_ios7.zip)
- [Código fuente 4.0 BLE Android](https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-BluetoothLeGatt.rar)
- [URL de más documentos](http://www.huamaosoft.com/index_en.asp?page=2&ID=1)

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
