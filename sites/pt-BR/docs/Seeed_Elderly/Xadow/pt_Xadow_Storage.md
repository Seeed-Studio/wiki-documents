---
description: Xadow - Storage
title: Xadow - Storage
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Storage
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Storage/
---
![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/X_Storage_01.jpg)

A maioria dos AVRs possui uma pequena EEPROM que pode ser usada para salvar variáveis, configurações etc. O chip Atmega32u4 usado na Xadow Main Board possui 1K Bytes de EEPROM interna.
Se você quiser mais armazenamento para o seu projeto Xadow, este módulo foi projetado para você! Este módulo fornece 2 blocos extras de 32K bytes para o seu projeto. O Xadow Storage pode ser alimentado com 3,3 V. E é compatível com o sistema Xadow.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Storage-p-1625.html)

##  Especificação
---
*   Tensão de trabalho: 3,3 V

*   Modo de controle: I2C

*   EEPROM: AT24C256C

*   Endereços I2C são conversíveis

*   Dimensões: 25,43 mm x 20,35 mm

##  Configuração do endereço I2C
---
Duas AT24C256 do Xadow Storage compartilham um barramento comum de dois fios. Cada AT24C256 possui um endereço de hardware de oito bits que é chamado de endereço escravo. O endereço escravo é configurado pelas entradas de seleção de endereço A2, A1 e A0. Os pinos A2, A1 e A0 são entradas de endereço do dispositivo que são conectadas diretamente ao GND ou ao VCC. Se esses pinos forem deixados em aberto, os pinos A2, A1 e A0 serão internamente puxados para GND.
<center>
<table  cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">  Slave Address[A6 - A0]</th>
<th colspan="3" scope="col"> Estado das entradas A2, A1 e A0</th>
</tr>
<tr>
<td scope="col"> A2</td>
<td scope="col"> A1</td>
<td scope="col"> A0</td>
</tr>
<tr>
<td scope="row"> 1010000(0x50)</td>
<td>GND/Flutuando</td>
<td>GND/Flutuando</td>
<td>GND/Flutuando</td>
</tr>
<tr>
<td scope="row"> 1010001(0x51)</td>
<td> GND/Flutuando</td>
<td> GND/Flutuando</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010010(0x52)</td>
<td> GND/Flutuando</td>
<td> VCC</td>
<td> GND/Flutuando</td>
</tr>
<tr>
<td scope="row"> 1010011(0x53)</td>
<td> GND/Flutuando</td>
<td> VCC</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010100(0x54)</td>
<td> VCC</td>
<td> GND/Flutuando</td>
<td> GND/Flutuando</td>
</tr>
<tr>
<td scope="row"> 1010101(default 0x55)</td>
<td> VCC</td>
<td> GND/Flutuando</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010110(0x56)</td>
<td> VCC</td>
<td> VCC</td>
<td> GND/Flutuando</td>
</tr>
<tr>
<td scope="row"> 1010111(0x57)</td>
<td> VCC</td>
<td> VCC</td>
<td> VCC</td>
</tr>
</table>
</center>

No modo padrão, um AT24C256 (U1) tem endereço I2C 0x50 e o outro AT24C256 (U2) tem endereço I2C 0x51 (veja o Xadow Storage).

##  Demonstração
---
Usando o Xadow Storage, podemos armazenar dados permanentemente mesmo que a energia seja desligada. Agora mostramos uma demonstração: gravar dados no storage e lê-los.

**Instalação de hardware:**

![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/XadowStorage.jpg)

Observação: ao conectar o Xadow Storage à Xadow Main Board, você deve se atentar ao sentido da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).

**O código de demonstração:**

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


## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
- [Arquivo eagle do Xadow Storage](https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip)

- [Datasheet da Serial EEPROM AT24C256C](https://files.seeedstudio.com/wiki/Xadow_Storage/res/AT24C256C-SSHL-T.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
