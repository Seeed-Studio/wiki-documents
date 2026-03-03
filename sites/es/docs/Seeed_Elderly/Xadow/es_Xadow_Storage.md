---
description: Xadow - Storage
title: Xadow - Storage
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Storage
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/X_Storage_01.jpg)

La mayoría de los AVR tienen una pequeña EEPROM que puede usarse para guardar variables, configuraciones, etc. Como el Chip Atmega32u4 que usa la Placa Principal Xadow tiene 1K Bytes de EEPROM Interna.
¡Si quieres más almacenamiento para tu proyecto Xadow, este módulo está diseñado para ti! Este módulo proporciona dos 32K bytes adicionales para tu proyecto. El Xadow Storage puede ser alimentado por 3.3V. Y es compatible con el sistema Xadow.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Storage-p-1625.html)

##  Especificaciones
---
*   Voltaje de Trabajo: 3.3V

*   Modo de Control: I2C

*   EEPROM: AT24C256C

*   Las Direcciones I2C son convertibles

*   Dimensiones: 25.43mm x 20.35mm

##  Configuración de Dirección I2C
---
Dos AT24C256 del Xadow Storage comparten un bus común de dos cables. Cada AT24C256 tiene una dirección de hardware de ocho bits que se conoce como dirección esclava. La dirección esclava se configura mediante las entradas de selección de dirección A2, A1 y A0. Los pines A2, A1 y A0 son entradas de dirección del dispositivo que están conectadas directamente a GND o a VCC. Si estos pines se dejan flotando, los pines A2, A1 y A0 serán internamente conectados a GND.
<center>
<table  cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">  Dirección Esclava[A6 - A0]</th>
<th colspan="3" scope="col"> Estado de entradas A2,A1 y A0</th>
</tr>
<tr>
<td scope="col"> A2</td>
<td scope="col"> A1</td>
<td scope="col"> A0</td>
</tr>
<tr>
<td scope="row"> 1010000(0x50)</td>
<td>GND/Flotando</td>
<td>GND/Flotando</td>
<td>GND/Flotando</td>
</tr>
<tr>
<td scope="row"> 1010001(0x51)</td>
<td> GND/Flotando</td>
<td> GND/Flotando</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010010(0x52)</td>
<td> GND/Flotando</td>
<td> VCC</td>
<td> GND/Flotando</td>
</tr>
<tr>
<td scope="row"> 1010011(0x53)</td>
<td> GND/Flotando</td>
<td> VCC</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010100(0x54)</td>
<td> VCC</td>
<td> GND/Flotando</td>
<td> GND/Flotando</td>
</tr>
<tr>
<td scope="row"> 1010101(por defecto 0x55)</td>
<td> VCC</td>
<td> GND/Flotando</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010110(0x56)</td>
<td> VCC</td>
<td> VCC</td>
<td> GND/Flotando</td>
</tr>
<tr>
<td scope="row"> 1010111(0x57)</td>
<td> VCC</td>
<td> VCC</td>
<td> VCC</td>
</tr>
</table>

</center>

En modo predeterminado, una AT24C256(U1) tiene dirección I2C 0x50 y otra AT24C256(U2) tiene dirección I2C 0x51(ver el Xadow Storage).

##  Demostración
---
Usando el Xadow Storage, podemos almacenar datos permanentemente incluso si se apaga la alimentación. Ahora mostramos una demostración: escribir datos al almacenamiento y leerlos.

**Instalación del Hardware:**

![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/XadowStorage.jpg)

Nota: cuando conectes el Xadow Storage al Xadow Main Board, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo(ver las cuatro esquinas de cada módulo Xadow).

**El código de demostración:**

```
#include <Wire.h> //I2C library
void setup()
{
    char somedata[] = "this is data from the eeprom"; // data to write
    Wire.begin(); // initialise the connection
    Serial.begin(9600);
    i2c_eeprom_write_page(0x51, 0, (byte *)somedata, sizeof(somedata)); // write to EEPROM

    delay(10); //add a small delay

    Serial.println("Memory written");
}
void loop()
{
    int addr=0; //first address
    byte b = i2c_eeprom_read_byte(0x51, 0); // access the first address from the memory

    while (b!=0)
    {
        Serial.print((char)b); //print content to serial port
        addr++; //increase address
        b = i2c_eeprom_read_byte(0x51, addr); //access an address from the memory
    }
    Serial.println(" ");
    delay(2000);
}
void i2c_eeprom_write_byte( int deviceaddress, unsigned int eeaddress, byte data ) {
    int rdata = data;
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.write(rdata);
    Wire.endTransmission();
}

// WARNING: address is a page address, 6-bit end will wrap around
// also, data can be maximum of about 30 bytes, because the Wire library has a buffer of 32 bytes
void i2c_eeprom_write_page( int deviceaddress, unsigned int eeaddresspage, byte* data, byte length ) {
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddresspage >> 8)); // MSB
    Wire.write((int)(eeaddresspage & 0xFF)); // LSB
    byte c;
    for ( c = 0; c < length; c++)
    Wire.write(data[c]);
    Wire.endTransmission();
}
byte i2c_eeprom_read_byte( int deviceaddress, unsigned int eeaddress ) {
    byte rdata = 0xFF;
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.endTransmission();
    Wire.requestFrom(deviceaddress,1);
    if (Wire.available()) rdata = Wire.read();
    return rdata;
}
// maybe let's not read more than 30 or 32 bytes at a time!
void i2c_eeprom_read_buffer( int deviceaddress, unsigned int eeaddress, byte *buffer, int length ) {
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.endTransmission();
    Wire.requestFrom(deviceaddress,length);
    int c = 0;
    for ( c = 0; c < length; c++ )
    if (Wire.available()) buffer[c] = Wire.read();
}
```


## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
- [Archivo eagle de Xadow Storage](https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip)

- [Hoja de datos EEPROM Serial AT24C256C](https://files.seeedstudio.com/wiki/Xadow_Storage/res/AT24C256C-SSHL-T.pdf)

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
