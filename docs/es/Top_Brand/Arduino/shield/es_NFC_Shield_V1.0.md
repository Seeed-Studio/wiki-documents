---
description: NFC Shield V1.0
title: NFC Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/NFC_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/) es una interfaz de **Comunicación de Campo Cercano** para **Arduino** construida alrededor del popular circuito integrado NXP PN532. **NFC** es una tecnología de radio de corta distancia que permite la comunicación entre dispositivos que se mantienen cerca uno del otro. **NFC** tiene sus raíces en la tecnología **RFID** y es una tecnología de plataforma abierta estandarizada en ECMA-340 e ISO/IEC 18092.

NFC se usa ampliamente como RFID para reconocer tarjetas/etiquetas (Tarjetas/Etiquetas NXP Mifare). NFC puede usarse como alternativa a **tarjeta de transporte** utilizando la memoria de lectura/escritura proporcionada por tarjetas/etiquetas. Algunos teléfonos móviles vienen con NFC incorporado - se usan como lectores de tarjetas, etiquetas, carteles inteligentes con una URL web (como un lector de código QR móvil). Esta tecnología también se está aplicando para **compras inteligentes sin efectivo**.

Como muchos otros estándares, la tecnología NFC está regulada por el **Foro de Comunicación de Campo Cercano** que estandariza la comunicación **NFC** -- cómo se emparejan los dispositivos, comparten datos y permiten que ocurra una transacción segura. [NFC Forum](http://www.nfc-forum.org) desarrolla y certifica dispositivos compatibles con **estándares NFC**.

NFC opera en la banda ISM (Industrial Científica Médica) sin licencia de **13.56 MHz** de frecuencia. El rango de comunicación NFC es de hasta 10 cm. Pero, esto está limitado por el diseño de la antena y la radiación de potencia. La mayoría de los dispositivos funcionan dentro de un rango de 10mm. La antena de [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) está diseñada para funcionar dentro de un rango de 1cm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) proporciona toda la circuitería necesaria para **PN532** como cristal de 27.12Mhz, fuente de alimentación. También expone los pines de E/S de **PN532** para fácil acceso.

La comunicación entre Arduino y [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) es vía SPI.

Modelo: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)

## Características ##

- Compatible con Arduino Shield. No se requiere soldadura.

- Interfaz **SPI**. Por lo tanto, la mayoría de los pines de **Arduino** están disponibles para otras aplicaciones.

- **Antena PCB** incorporada.

- Soporta operación tanto de 3.3V como de 5V usando el traductor de nivel **TXB0104** de TI.

- Socket para conectar otros shields.

- El rango máximo de comunicación de este NFC Shield es de aproximadamente 5 cm

- No puede leer/escribir chip ultralightC, solo leer su ID

## Ideas de Aplicación ##

- Usar como lector RFID con **etiquetas Mifare One** (ISO14443 Tipo-A) y tarjetas (13.56Mhz).

- Construir sistema de intercambio de tarjetas de visita.

- Construir sistemas de asistencia.

- Diseñar sistemas de autenticación.

- Leer Carteles Inteligentes.

- Intercambiar de forma segura pequeños datos con otros dispositivos NFC

- Usar con [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/) para crear aplicaciones móviles NFC.

- Y otras posibilidades infinitas.

## Uso ##

### Instalación de Hardware ###

- Configura el interruptor deslizante de selección de energía del **Seeeduino** a 3.3V.

- Conecta el [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) al **Seeeduino** como se muestra a continuación.

- Compila y carga el sketch de ejemplo proporcionado.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Conectado al Seeeduino**

- Mantén la **Tarjeta MIFARE** cerca de la antena. El NFC Shield leerá los datos de identificación pasiva.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Tarjeta Mifare mantenida cerca de la Antena del NFC Shield**

- Mantén la Etiqueta MIFARE cerca de la antena. El NFC Shield leerá los datos de identificación pasiva.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Etiqueta Mifare mantenida cerca de la Antena del NFC Shield**

- Usa la siguiente configuración para establecer comunicación punto a punto entre dos Seeeduinos usando NFC Shields.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**Configuración de Comunicación Punto a Punto NFC**

### Programación ###

Descarga la [Librería PN532_SPI Para NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) e instálala en \arduino\libraries. Puedes copiar los siguientes códigos en el IDE de Arduino o abrir los ejemplos en la librería para comenzar.

**Demo 1：Leer la memoria completa de una tarjeta MIFARE**

1.Abre y carga el ejemplo readAllMemoryBlocks como se muestra a continuación.

```cpp
//This example reads all MIFARE memory block from 0x00 to 0x63.
//It is tested with a new MIFARE 1K cards. Uses default keys for authenication.
//Contributed by Seeed Technology Inc (www.seeedstudio.com)

#include <PN532.h>
#include <SPI.h>

/*Chip select pin can be connected to D10 or D9 which is hareware optional*/
/*if you the version of NFC Shield from SeeedStudio is v2.0.*/
#define PN532_CS 10

PN532 nfc(PN532_CS);

#define  NFC_DEMO_DEBUG 1

void setup(void) {
#ifdef NFC_DEMO_DEBUG
  Serial.begin(9600);
  Serial.println("Hello!");
#endif
  nfc.begin();

  uint32_t versiondata = nfc.getFirmwareVersion();
  if (! versiondata) {
#ifdef NFC_DEMO_DEBUG
    Serial.print("Didn't find PN53x board");
#endif
    while (1); // halt
  }
#ifdef NFC_DEMO_DEBUG
  // Got ok data, print it out!
  Serial.print("Found chip PN5");
  Serial.println((versiondata>>24) & 0xFF, HEX);
  Serial.print("Firmware ver. ");
  Serial.print((versiondata>>16) & 0xFF, DEC);
  Serial.print('.');
  Serial.println((versiondata>>8) & 0xFF, DEC);
  Serial.print("Supports ");
  Serial.println(versiondata & 0xFF, HEX);
#endif
  // configure board to read RFID tags and cards
  nfc.SAMConfig();
}

void loop(void) {
  uint32_t id;
  // look for MiFare type cards
  id = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);

  if (id != 0)
  {
#ifdef NFC_DEMO_DEBUG
    Serial.print("Read card #");
    Serial.println(id);
    Serial.println();
#endif
    uint8_t keys[]= { 0xFF,0xFF,0xFF,0xFF,0xFF,0xFF };// default key of a fresh card
    for(uint8_t blockn=0;blockn<64;blockn++)
    {
      if(nfc.authenticateBlock(1, id ,blockn,KEY_A,keys)) //authenticate block blockn
      {
        //if authentication successful
        uint8_t block[16];
        //read memory block blockn
        if(nfc.readMemoryBlock(1,blockn,block))
        {
#ifdef NFC_DEMO_DEBUG
          //if read operation is successful
          for(uint8_t i=0;i<16;i++)
          {
            //print memory block
            Serial.print(block[i],HEX);
            if(block[i] <= 0xF) //Data arrangement / beautify
            {
              Serial.print("  ");
            }
            else
            {
              Serial.print(" ");
            }
          }

          Serial.print("| Block ");
          if(blockn <= 9) //Data arrangement / beautify
          {
            Serial.print(" ");
          }
          Serial.print(blockn,DEC);
          Serial.print(" | ");

          if(blockn == 0)
          {
            Serial.println("Manufacturer Block");
          }
          else
          {
            if(((blockn + 1) % 4) == 0)
            {
              Serial.println("Sector Trailer");
            }
            else
            {
              Serial.println("Data Block");
            }
          }
#endif
        }
      }
    }
  }
  delay(2000);
}
```

**Este sketch lee la memoria completa de una tarjeta MIFARE Standard usando claves de autenticación predeterminadas. La salida proporciona el diseño típico de memoria de una tarjeta MIFARE Standard nueva.**

2.Acerca una Tarjeta Mifare cerca de la Antena NFC. Abre el monitor serie, puedes ver la puntuación como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

**Nota:** Los bloques se clasifican como Bloque del Fabricante (solo lectura), Bloque de Datos (área escribible por usuario/aplicación), y Trailer del Sector (bits de autenticación y acceso para ese sector)

**Demo 2: Escribir datos al Bloque de Memoria MIFARE**

1.Abre el ejemplo writeMifareMemory. Este ejemplo escribe un bloque de memoria MIFARE 0x08 de una nueva tarjeta MIFARE 1K usando claves de autenticación predeterminadas. Lee la Memoria del Bloque después de completar la escritura de datos al Bloque de Memoria MIFARE.

Nota: El bloque de memoria 0 es de solo lectura y contiene datos del fabricante. No escribas al bloque Trailer del Sector a menos que sepas lo que estás haciendo. De lo contrario, la tarjeta MIFARE puede volverse inutilizable en el futuro.

2.Compila y sube el ejemplo. Si no sabes cómo subir, por favor haz clic [aquí](https://seeeddoc.github.io/Upload_Code/).

3.Acerca una Tarjeta Mifare cerca de la Antena NFC.  
4.Abre el monitor serie, puedes ver la puntuación como se muestra a continuación:
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_1.jpg)

**Demo 3: Comunicación Punto a Punto**

Una comunicación experimental NFC Punto a Punto está implementada en la última biblioteca NFC. Esta usa Iniciador Activo para comunicación P2P.

1.Descarga los ejemplos "PtoPInitiator" y "PtoPTarge" en dos Arduinos diferentes con NFC Shields.

2.Coloca las Antenas cerca una de la otra.

3.Abre la terminal serie y observa la transmisión-recepción de datos.

**Puntuación de Salida:**

P2P Iniciador:
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPInitiator.jpg)

P2P Objetivo:
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPTarget.jpg)

## Código de referencia ##

Las APIs hacen uso de los comandos para invocar las interfaces proporcionadas por el firmware PN532 vía SPI. Todos estos comandos están documentados en el Manual de Usuario PN532. Las siguientes APIs son proporcionadas por la Biblioteca PN532_SPI.

**boolean SAMConfig(void)**

Esta API invoca el comando **SAMConfiguration** de PN532 y lo establece en **Modo Normal**. **SAM** significa Módulo de Acceso de Seguridad (es decir, el sistema PN532). El sistema PN532 puede trabajar en modo **Normal**, modo **Tarjeta Virtual**, modo **Tarjeta Cableada** y modo **Tarjeta Dual**.

**Uso:**

```
nfc.SAMConfig(); // Call this before any read/write operation

```

**uint32_t readPassiveTargetID(uint8_t cardbaudrate)**

Este método lee el ID del Objetivo Pasivo y lo devuelve como un número de 32 bits. Por el momento solo se admite la lectura de tarjetas/etiquetas MIFARE ISO14443A. Por lo tanto, use **PN532_MIFARE_ISO14443A** como parámetro. Devuelve el número de tarjeta de 32 bits

**Uso:**

```
uint32_t cid;
// look for MiFare type cards/tags
cid = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);

```

uint32_t authenticateBlock(uint8_t cardnumber, uint32_t cid, uint8_t blockaddress ,uint8_t authtype, uint8_t * keys)

Este método se utiliza para autenticar un bloque de memoria con clave antes de la operación de lectura/escritura. Devuelve true cuando es exitoso.

- **cardnumber** puede ser 1 o 2

- **cid** es el ID de tarjeta de 32 bits

- **blockaddress** es el número de bloque (cualquier número entre 0 - 63 para tarjeta MIFARE)

- **authtype** es qué clave se va a usar para la autenticación (ya sea **KEY_A** o **KEY_B**)

- **keys** apunta al arreglo de bytes que contiene 6 claves.

**Uso:**

```
uint8_t keys[]= {0xFF,0xFF,0xFF,0xFF,0xFF,0xFF};  // default key of a fresh card
nfc.authenticateBlock(1, id ,3,KEY_A,keys); //authenticate block 3, id is 32-bit passive target id.

```

**uint32_t readMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)**

Este método lee un bloque de memoria después de la autenticación con la clave. Devuelve true cuando es exitoso.

- **cardnumber** puede ser 1 o 2

- **blockaddress** es el número de bloque (cualquier número entre 0 - 63 para tarjeta MIFARE) a leer. Cada bloque tiene 16 bytes de longitud en el caso de tarjeta MIFARE Standard.

- **block** apunta al buffer (arreglo de bytes) para contener 16 bytes de datos del bloque.

**Uso:**

```
uint8_t block[16];
nfc.readMemoryBlock(1,3,block); //Read can be performed only when authentication was successful.

```

**uint32_t writeMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)**

Este método escribe datos a un bloque de memoria después de la autenticación con la clave. Devuelve true cuando es exitoso.

- **cardnumber** puede ser 1 o 2

- **blockaddress** es el número de bloque (cualquier número entre 0 - 63 para tarjeta MIFARE) a escribir. Cada bloque tiene 16 bytes de longitud en el caso de tarjeta MIFARE Standard.

- **block** apunta al buffer(arreglo de bytes) que contiene 16 bytes de datos de bloque a escribir.**Uso**:

```
uint8_t writeBuffer[16];
    for(uint8_t ii=0;ii<16;ii++)
     {
       writeBuffer[ii]=ii; //Fill buffer with 0,1,2....F
     }
nfc.writeMemoryBlock(1,0x08,writeBuffer); //Write writeBuffer[] to block address 0x08. Read can be performed only when authentication was successful.

```

**uint32_t PN532::configurePeerAsInitiator(uint8_t baudrate)**

Este método implementa un Iniciador Peer to Peer. Devuelve true cuando es exitoso.

- **baudrate** puede ser cualquier número del 0-2. 0 para 106kbps o 1 para 201kbps o 2 para 424kbps. Por el momento solo se soportan 1 y 2.

*Esta característica es experimental y soporta comunicación NFC Peer to Peer con otros shields NFC. La interacción con dispositivos móviles no está probada.*

**Uso:**

```
// Configure PN532 as Peer to Peer Initiator
if( nfc.configurePeerAsInitiator(2) ) //if connection is error-free
    {
     //Your Send  Receive code here
    }

```

**uint32_t configurePeerAsTarget()**

Este método implementa un Objetivo de Par a Par. Devuelve true cuando es exitoso.

**Esta característica es experimental y soporta comunicación NFC de Par a Par con otros shields NFC. La interacción con dispositivos móviles no está probada.**

**Uso:**

```
// Configure PN532 as Peer to Peer Target
if(nfc.configurePeerAsTarget()) //if connection is error-free
   {
        //You code to trans-receive data
   }

```

**uint32_t initiatorTxRx(char *DataOut,char *DataIn)**

Este método se utiliza para transmitir y recibir datos hacia y desde el objetivo. Este código es utilizado por el Iniciador NFC Peer to Peer. Devuelve true cuando es exitoso.

- **DataOut** es un puntero y arreglo de caracteres (16 bytes) para datos de transmisión.

- **DataIn** es un puntero y arreglo de caracteres (16 bytes) para datos de recepción.

**Esta característica es experimental y soporta comunicación NFC Peer to Peer con otros shields NFC. La interacción con dispositivos móviles no ha sido probada.**

**Uso:**

```
    // Configure PN532 as Peer to Peer Initiator in active mode
    if( nfc.configurePeerAsInitiator(2) ) //if connection is error-free
    {
        //trans-receive data
        if(nfc.initiatorTxRx(DataOut,DataIn))
        {
         Serial.print("Data Sent and Received: ");
         Serial.println(DataIn);
        }
    }

```

**uint32_t targetTxRx(char *DataOut,char *DataIn)**

Este método se utiliza para transmitir y recibir datos hacia y desde el iniciador. Este código es utilizado por el Objetivo NFC Peer to Peer para responder al Iniciador. Devuelve true cuando es exitoso.

- **DataOut** es un puntero y arreglo de caracteres (16 bytes) para transmitir datos.

- **DataIn** es un puntero y arreglo de caracteres (16 bytes) para recibir datos.

**Uso:**

```
    // Configure PN532 as Peer to Peer Target
    if(nfc.configurePeerAsTarget()) //if connection is error-free
    {
        //trans-receive data
        if(nfc.targetTxRx(DataOut,DataIn))
        {
         Serial.print("Data Received: ");
         Serial.println(DataIn);
        }
    }

```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/es/images/8/81/NFC_Shield_V0.9b_Schematic_Board_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Librería]**[Librería PN532_SPI Para NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip)
- **[PDF]**[NXP PN532 - Manual de Usuario](https://www.nxp.com/docs/en/user-guide/141520.pdf)
- **[Enlaces]**[Foro NFC](http://www.nfc-forum.org)

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
