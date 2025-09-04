---
description: Xadow - BLE Slave
title: Xadow - BLE Slave
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_BLE_Slave
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Xadow_ble_01.jpg)

Este es un módulo Bluetooth 4.0 (módulo esclavo Bluetooth 4.0). Comparado con las versiones 2.0 y 3.0 de Bluetooth, es más avanzado por su menor consumo de energía. Puedes conectar fácilmente tu propio proyecto al dispositivo principal de Bluetooth 4.0 usando este módulo. Por ejemplo, puede transferir los datos detectados sobre la información de tu cuerpo al teléfono para mostrar o analizar, luego, ayudarte a gestionar mejor tu condición física.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-Slave-p-1546.html)

## Especificaciones
---
- Módulo Bluetooth 4.0
- PIN: 0000
- Velocidad de baudios por defecto: 38400
- Dimensiones: 25.43mm x 20.35mm

## Demostración
---
La demostración te mostrará cómo conectar un dispositivo bluetooth con Xadow BLE Slave y comunicarse. Puedes usarlo para comunicarte con el teléfono (con Bluetooth 4.0). Ahora hagamos una prueba:
- Conecta el Xadow BLE Slave a la Placa Principal Xadow y conecta la Placa Principal a la PC con un cable USB. En modo normal, el LED azul parpadeará una vez por vez. Si el LED azul está apagado, por favor presiona el botón "reset" en la Placa Principal Xadow.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/XadowBLE.jpg)

:::note
    Cuando conectes XadowBLE Slave a la Placa Principal Xadow, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).
:::
- Sube el código de prueba a tu Placa Principal Xadow.

```
int error=0;
int n;
void setup()
{
    Serial.begin(38400);
    delay(100);
    PORTB|=0x04;
    TESTIO();
    if(error==0)
    {
        DDRB|=0x81;
        for(n=0;n<40;n++)
        {
            PORTB&=~0x81;
            delay(50);
            PORTB|=0x81;
        }
    }

    Serial1.begin(38400);
}
void loop()
{
    boot();
}
void TESTIO(void)
{
    DDRB|=0x0e;
    PORTB&=~0x0e;
    DDRF|=0x01;
    PORTF&=~0x01;
    DDRD&=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&0x01))
    {
        error=1;
    }
    if(PIND&0x02)
    {
        error=1;
    }
    if(!(PIND&0x04))
    {
        error=1;
    }
    if(PIND&0x08)
    {
        error=1;
    }
    PORTB&=~0x04;
    PORTB|=0x0a;
    PORTF&=~0x01;
    delay(30);
    if(PIND&0x01)
    {
        error=1;
    }
    if(!(PIND&0x02))
    {
        error=1;
    }
    if(PIND&0x04)
    {
        error=1;
    }
    if(!(PIND&0x08))
    {
        error=1;
    }
    Serial.println(error);
}
void boot(void)
{
    for(;;)
    {
        if(Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if(Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- Selecciona una herramienta serial para enviar y recibir datos. Aquí usamos [Sscom32E](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Sscom32E.zip). La velocidad de baudios debe ser 38400.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_serial_tool.jpg)

- Prepara tu dispositivo móvil e instala la ["APP BlueSPP"](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip) y ejecuta BlueSPP. Recuerda que tu dispositivo debe ser Bluetooth 4.0.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_Bluetooth.jpg)

- Haz clic en "search" para encontrar los dispositivos. Encuentra el dispositivo Xadow BLE Slave y presiona para comenzar a conectar el dispositivo Bluetooth.

:::tip
    Debes emparejar primero el teléfono con el módulo BLE en el administrador de dispositivos del teléfono si 'BlueSPP' no puede encontrar el módulo BLE.
:::
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Search_device.jpg)

- Después de conectar, la pantalla en el Dispositivo es la siguiente. Podrías escribir textos y los datos se enviarán. Se mostrará en la herramienta serial de tu PC. Por supuesto, puedes enviar datos al teléfono mediante la herramienta serial de tu PC.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Send_and_Receive_Data.jpg)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/BLE_Slave_send_data.jpg)

## Recursos
---
- [Xadow BLE Slave](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Xadow_BLE_Slave.zip)
- ["APP BlueSPP"](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>