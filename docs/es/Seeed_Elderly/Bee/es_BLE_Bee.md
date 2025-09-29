---
description: BLE Bee
title: BLE Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BLE_Bee
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Ble_bee.jpg)

El BLE Bee es un módulo con factor de forma XBEE habilitado para Bluetooth Smart basado en el módulo HM-11. El BLE Bee puede ser utilizado en configuraciones de hardware donde normalmente se usa un módulo XBEE. Usando un BLE Bee, un sistema embebido habilitado con socket XBee puede comunicarse con computadoras de escritorio, teléfonos inteligentes, computadoras tablet e incluso otros sistemas embebidos que proporcionen Bluetooth Smart, también conocido como Bluetooth Low Energy (BLE).

## Características ##

- Forma compatible con XBee

- Protocolo Bluetooth: Especificación Bluetooth V4.0 BLE

- Frecuencia de trabajo: banda ISM de 2.4 GHz

- Método de interfaz: puerto serie

- Entorno abierto dentro de 30 metros puede realizar comunicación entre módulos

- Para enviar y recibir sin límite de bytes entre módulos

- Método de modulación: GFSK (Gaussian Frequency Shift Keying)

- Potencia de transmisión: - DBM, 23-6 DBM, 0 DBM, 6 DBM, puede ser modificada por el comando AT

- usa chip TI CC2540, espacio de configuración de 256 KB, soporta el comando AT, el usuario puede según necesidad cambiar el rol (maestro, modo esclavo) y la velocidad de baudios del puerto serie, nombre del equipo, parámetros de emparejamiento como contraseñas, uso ágil.

- fuente de alimentación: + 3.3 VDC 50 mA

- temperatura de trabajo: - 5 ~ + 65 Centígrados

## Especificación ##

 |Especificación|Valor
 |--|--|
 |Microprocesador|CC2540|
 |Recursos|Soporta el comando AT, el usuario puede según necesidad cambiar el rol (maestro, modo esclavo) y la velocidad de baudios del puerto serie, nombre del equipo, parámetros de emparejamiento como contraseña, el uso flexible.|
 |Tamaño PCB|24.5mmx30.5mmx0.8mm|
 |Dimensión del Contorno|24.5mmx30.5mmx9.77mm|
 |Fuente de alimentación|3.3V|
 |Protocolo de Comunicación|Uart(TTL)|
 |Conteo de IO|2|
 |IO de entrada de tecla|1|
 |IO de Indicadores LED|1|
 |Conectividad|Socket compatible con XBee|

## Características Eléctricas ##

| Especificación|Mín|Típ|Máx|Unidad
|--|--|--|--|--|
 |Voltaje de Entrada Máximo|-0.3||3.6|V|
 |Voltaje de Entrada de Trabajo|2.0|3.3|3.6|V|
 |Corriente de Transmisión||15|| mA|
 |Corriente de Recepción||8.5||mA|
 |Corriente de Sueño Profundo||600||uA|
 |Temperatura de Operación|-40||125|°C|

## Definición de pines ##

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/BLE_BEE11.jpg)

Nota: Solo se listan las funciones alternativas importantes, puede haber más, por favor consulte la hoja de datos.

## Uso ##

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Ble_bee_user.jpg)

- Conecte el Seeed BLE Shield directamente al Arduino/Seeeduino. **Por favor preste atención a la posición de los jumpers en el XBee Shield.**

- Puerto serie duro o suave: Puede elegir dos de siete pines digitales como el canal de comunicación. Solo conecte los jumpers en los headers.

- Lámpara de señal: La lámpara parpadeará si nadie conecta BLE, pero la lámpara se mantendría encendida después de que BLE haya sido conectado.

## Comandos AT y Configuración ##

**1） Consultar la dirección MAC nativa**

Enviar: AT + ADDR?

Enviar después de un retorno exitoso: OK + LADD: dirección MAC (dirección para cadena de 12)

**2） Consultar la velocidad de baudios**

Enviar: AT+BAUD?

Enviar después de un retorno exitoso: OK + Get: [para1]

Alcance de para1:0 ~ 8. Los parámetros correspondientes a: 0 representa 9600, 1, 2, 9600, 38400, en representación del representante representante de 57600, 115200, 5, 4800, 6, 7 representa 1200, 1200 2400. La velocidad de baudios predeterminada a 9600.

**3） Establecer la velocidad de baudios**

Enviar: AT+BAUD[para1]

Enviar después de un retorno exitoso: OK+Set:[para1]

Ejemplo: enviar: AT + BAUD1, retornar: OK + Set: 2.La velocidad de baudios se establece a 19200.

Nota: después del cambio a 1200, el módulo ya no soportará las configuraciones del comando AT, y presionar el PIO0 bajo espera, el módulo puede restaurar la configuración de fábrica. No se recomienda usar la velocidad de baudios. Después de establecer la velocidad de baudios, los módulos deben estar en electricidad, de nuevo establecer parámetros puede tomar efecto.

**4） desde el dispositivo conectado a la dirección bluetooth especificada**

Enviar: AT+CON[para1]

Enviar después de un retorno exitoso: OK+CONN[para2]

El rango de Para2 es: A, E, F

Ejemplo: desde la dirección bluetooth es: 0017EA0943AE, enviando el AT + CON0017EA0943AE, el módulo retorna: OK + CONNA o OK + + CONNF CONNE o OK.

**5） eliminación de información de emparejamiento de equipos**

Enviar: AT + CLEAR

Enviar después de un retorno exitoso: OK + CLEAR

Limpiar exitosamente había conectado información de código de dirección de dispositivo.

**6） consultar modo de trabajo del módulo**

Enviar: AT + MODE?

Enviar después de un retorno exitoso: OK + Get: [para]

Para: el rango de 0 ~ 2. 0 representa modo passthrough, en representación del PIO adquisición + control remoto + 1 passthrough, 2 representativo passthrough + modo de control remoto. El predeterminado es 0.

**7） establecer modo de trabajo del módulo:**

Enviar: AT + MODE []

Enviar después de un retorno exitoso: OK + Set: [para]

**8） consultar nombre del dispositivo**

Enviar: AT + NAME?

Enviar después de un retorno exitoso: OK + NAME [para1]

**9） establecer el nombre del dispositivo**

Enviar: AT + NAME [para1]

Enviar después de un retorno exitoso: OK + Set: [para1]

Ejemplo: Establecer el nombre del dispositivo a Seeed, enviando el AT + NAMESeeed, retornar OK + Set: Seeed AT en este momento, el nombre del módulo bluetooth ha sido cambiado a Seeed.
Nota: después de la ejecución de la instrucción, requerido a electricidad, establecer los parámetros de la aprobación.

**10） consultar contraseña de emparejamiento**

Enviar: AT + PASS?

Enviar después de un retorno exitoso: OK + PASS: [para1]

El rango de Para1 es 000000 ~ 999999, el predeterminado es 000000.

**11） emparejamiento establecer contraseña**

Enviar el AT + PASS [para1]

Enviar después de un retorno exitoso: OK + Set: [para1]

**12） restaurar configuración de fábrica**

El AT + RENEW enviar

Enviar después de un retorno exitoso: OK + RENEW

Restaurar la configuración de fábrica predeterminada del módulo, la configuración del módulo será restablecida así, volver a la fábrica con el estado de la fábrica predeterminada, retraso del módulo 500 ms después del reinicio. Si no hay necesidad, por favor tenga cuidado.

**13） reinicio del módulo**

Enviar: AT + RESET

Enviar después de un retorno exitoso: OK + RESET

Después de la ejecución de la instrucción el módulo retrasará 500 ms después del reinicio.

**14） establecer el modo maestro-esclavo**

Enviar: AT + ROLE [para1]

Enviar después de un retorno exitoso: OK + Set: [para1]

Para más información sobre los comandos AT, consulte la hoja de datos del módulo BLE. Puede descargarla desde el espacio de Recursos.

## Comunicación SoftwareSerial ##

BLE Bee puede actuar como maestro o esclavo, puede usar uno a través de diferentes demos.**Si va a usar el siguiente programa SoftwareSerial, consulte la forma de conexión en la imagen anterior. BLE_TX-->D2, BLE_RX-->D3.**

Abra Arduino IDE, copie el siguiente programa y súbalo a la placa Arduino/Seeeduino. Y luego dos BLE Shields pueden comunicarse entre sí.

**Demo : BLE Esclavo**

```

#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

SoftwareSerial BLE(RxD,TxD);

void setup()
{
  Serial.begin(9600);
  pinMode(RxD, INPUT);
  pinMode(TxD, OUTPUT);
  setupBleConnection();

}

void loop()
{
  char recvChar;
  while(1){
    if(BLE.available()){//check if there's any data sent from the remote BLE shield
      recvChar = BLE.read();
      Serial.print(recvChar);
    }
    if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
      recvChar  = Serial.read();
      BLE.print(recvChar);
    }
  }
}

void setupBleConnection()
{
  BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
  BLE.print("AT+CLEAR"); //clear all previous setting
  BLE.print("AT+ROLE0"); //set the bluetooth name as a slaver
  BLE.print("AT+SAVE1");  //don't save the connect information
}

```

**Demo : BLE Maestro**

```

#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

SoftwareSerial BLE(RxD,TxD);

void setup()
{
  Serial.begin(9600);
  pinMode(RxD, INPUT);
  pinMode(TxD, OUTPUT);
  setupBleConnection();

}

void loop()
{
  char recvChar;
  while(1){
    if(BLE.available()){//check if there's any data sent from the remote BLE shield
      recvChar = BLE.read();
      Serial.print(recvChar);
    }
    if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
      recvChar  = Serial.read();
      BLE.print(recvChar);
    }
  }
}

void setupBleConnection()
{
  BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
  BLE.print("AT+CLEAR"); //clear all previous setting
  BLE.print("AT+ROLE1"); //set the bluetooth name as a master
  BLE.print("AT+SAVE1");  //don't save the connect information
}

```

### Comunicación HardwareSerial ###

Además, puedes usar BLE Shield a través de comandos AT sin ningún programa, **pero necesitas cambiar las posiciones de dos jumpers. BLE_TX-->D1, BLE_RX-->D0.**

Luego abre una Herramienta de Puerto Serie, como CoolTerm u otras. Las siguientes son algunas configuraciones: Baudrate: 9600(por defecto), Data Bits: 8, Parity: none, Stop Bits: 1.

Primero, puedes enviar un(os) comando(s) "AT" a BLE Shield para hacer una prueba. Si devuelve un "OK", entonces puedes hacer los siguientes pasos. **Si no, puedes subir un programa en blanco a Arduino/Seeeduino**, y ver si puedes obtener respuesta de la Herramienta de Puerto Serie a través de la operación anterior.

```

void setup()
{                
}

void loop()
{
}

```

Luego, envía un comando "AT+ROLE0" al BLE Shield; devolverá un "OK+Set:0", lo que significa que ahora el BLE Shield está listo para actuar como esclavo.

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Seeed_BLE-3.png)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE_Bee_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Esquema]**[Esquema de BLE_Bee_v1.0](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE_Bee_v1.0.zip)

- **[PDF]**[BLE Bee v1.0 PCB](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE%20Bee%20v1.0%20PCB.pdf)

- **[PDF]**[BLE Bee v1.0 sch](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE%20Bee%20v1.0%20sch.pdf)

- **[APK]**[BLE_apk_para_Android](https://files.seeedstudio.com/wiki/BLE_Bee/res/HMBLEComAssistant.rar)

- **[Hoja de Datos]**[Hoja de Datos del módulo BLE](https://files.seeedstudio.com/wiki/BLE_Bee/res/Bluetooth40_en.pdf)

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
