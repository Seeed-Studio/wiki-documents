---
name:  NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

---

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is a **Near Field Communication** interface for  **Arduino**  build around the popular  NXP PN532  integrated circuit.  NFC  is a short-distance radio technology that enables communication between devices that are held close together.**NFC** traces its roots in  **RFID**  technology and is an open platform technology standardized in ECMA-340 and ISO/IEC 18092.

NFC is widely used like RFID to recognize cards/tags (NXP Mifare Cards / Tags). NFC can be used as an alternative to **travel card** using the read/write memory provided by cards/tags. Few mobile phones comes with NFC inbuilt - they are used as readers of cards, tags, smart posters with a Web URL(like a Mobile QR-Code reader). This technology is also being applied for **smart cashless purchases**.

Like many other standards, NFC technology is regulated by  **Near Field Communication Forum**  which standardizes  **NFC**  communication -- how they devices pair, share data and allow a secure transaction to happen.[NFC Forum](http://www.nfc-forum.org) develops and certifies devices compliant with **NFC standards**.

NFC operate on unlicensed ISM(Industry Scientific Medical) band of **13.56 MHz** Frequency. NFC communication range is up to 10 cm. But, this is limited by the antenna and power radiation design. Most devices work within a range of 10mm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  antenna is designed to work within a range of 1cm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  provides all necessary circuitry for **PN532** like 27.12Mhz crystal, power supply.It also beaks-out the I/O pins of **PN532** for easy access.

The communication between Arduino and [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is via SPI.

Model: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)


##   Features   ##

-  Arduino Shield compatible. No soldering required.

- **SPI** interface. Hence, most **Arduino** pins are available for other applications.

-  Built in **PCB Antenna**.

-  Supports both 3.3V and 5V operation using TI's **TXB0104** level translator.

-  Socket to connect other shields.

-  The maximum communication range of this NFC Shield is about 5 cm

-  Not being able to read/write ultralightC chip,Only to Read its ID

##   Application Ideas   ##

- Use as a RFID reader with **Mifare One tags** (ISO14443 Type-A) and cards (13.56Mhz).

- Build visiting card sharing system.

- Build attendance systems.

- Design authentication systems.

- Read Smart Posters.

- Securely exchange small data with other NFC devices

- Use with [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)  for creating mobile NFC applications.

- And other endless possibility.

##   Usage   ##

###   Hardware Installation   ###

- Set **Seeeduino** power selection slide-switch to 3.3V.

- Connect [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  to **Seeeduino** as shown below.

- Compile and upload the example sketch provided.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Connected to Seeeduino**

- Hold the **MIFARE Card** near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Mifare Card held near NFC Shield Antenna**

- Hold the MIFARE Tag near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Mifare Tag held near NFC Shield Antenna**

- Use the following setup for establishing peer to peer communication between two Seeeduinos using NFC Shields.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC Peer to Peer Communication Setup**

###   Programming ###

Donwload the [PN532_SPI Library For NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) and install it to \arduino\libraries. you can either copy the folling codes into Arduino IDE or open Open the examples in the library to start.

**Demo 1：Read the complete memory of a MIFARE card**

1.Open and upload the example readAllMemoryBlocks example as show below.

```
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

**This sketch reads the complete memory of a MIFARE Standard card using default authentication keys. The output gives typical memory layout of fresh MIFARE Standard card.**

2.Bring a Mifare Card near the NFC Antenna. Open the serial monitor, you can see the score as show below:

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

---
name:  NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

---

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is a **Near Field Communication** interface for  **Arduino**  build around the popular  NXP PN532  integrated circuit.  NFC  is a short-distance radio technology that enables communication between devices that are held close together.**NFC** traces its roots in  **RFID**  technology and is an open platform technology standardized in ECMA-340 and ISO/IEC 18092.

NFC is widely used like RFID to recognize cards/tags (NXP Mifare Cards / Tags). NFC can be used as an alternative to **travel card** using the read/write memory provided by cards/tags. Few mobile phones comes with NFC inbuilt - they are used as readers of cards, tags, smart posters with a Web URL(like a Mobile QR-Code reader). This technology is also being applied for **smart cashless purchases**.

Like many other standards, NFC technology is regulated by  **Near Field Communication Forum**  which standardizes  **NFC**  communication -- how they devices pair, share data and allow a secure transaction to happen.[NFC Forum](http://www.nfc-forum.org) develops and certifies devices compliant with **NFC standards**.

NFC operate on unlicensed ISM(Industry Scientific Medical) band of **13.56 MHz** Frequency. NFC communication range is up to 10 cm. But, this is limited by the antenna and power radiation design. Most devices work within a range of 10mm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  antenna is designed to work within a range of 1cm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  provides all necessary circuitry for **PN532** like 27.12Mhz crystal, power supply.It also beaks-out the I/O pins of **PN532** for easy access.

The communication between Arduino and [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is via SPI.

Model: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)


##   Features   ##

-  Arduino Shield compatible. No soldering required.

- **SPI** interface. Hence, most **Arduino** pins are available for other applications.

-  Built in **PCB Antenna**.

-  Supports both 3.3V and 5V operation using TI's **TXB0104** level translator.

-  Socket to connect other shields.

-  The maximum communication range of this NFC Shield is about 5 cm

-  Not being able to read/write ultralightC chip,Only to Read its ID

##   Application Ideas   ##

- Use as a RFID reader with **Mifare One tags** (ISO14443 Type-A) and cards (13.56Mhz).

- Build visiting card sharing system.

- Build attendance systems.

- Design authentication systems.

- Read Smart Posters.

- Securely exchange small data with other NFC devices

- Use with [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)  for creating mobile NFC applications.

- And other endless possibility.

##   Usage   ##

###   Hardware Installation   ###

- Set **Seeeduino** power selection slide-switch to 3.3V.

- Connect [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  to **Seeeduino** as shown below.

- Compile and upload the example sketch provided.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Connected to Seeeduino**

- Hold the **MIFARE Card** near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Mifare Card held near NFC Shield Antenna**

- Hold the MIFARE Tag near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Mifare Tag held near NFC Shield Antenna**

- Use the following setup for establishing peer to peer communication between two Seeeduinos using NFC Shields.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC Peer to Peer Communication Setup**

###   Programming ###

Donwload the [PN532_SPI Library For NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) and install it to \arduino\libraries. you can either copy the folling codes into Arduino IDE or open Open the examples in the library to start.

**Demo 1：Read the complete memory of a MIFARE card**

1.Open and upload the example readAllMemoryBlocks example as show below.

```
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

**This sketch reads the complete memory of a MIFARE Standard card using default authentication keys. The output gives typical memory layout of fresh MIFARE Standard card.**

2.Bring a Mifare Card near the NFC Antenna. Open the serial monitor, you can see the score as show below:

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

---
name:  NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

---

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is a **Near Field Communication** interface for  **Arduino**  build around the popular  NXP PN532  integrated circuit.  NFC  is a short-distance radio technology that enables communication between devices that are held close together.**NFC** traces its roots in  **RFID**  technology and is an open platform technology standardized in ECMA-340 and ISO/IEC 18092.

NFC is widely used like RFID to recognize cards/tags (NXP Mifare Cards / Tags). NFC can be used as an alternative to **travel card** using the read/write memory provided by cards/tags. Few mobile phones comes with NFC inbuilt - they are used as readers of cards, tags, smart posters with a Web URL(like a Mobile QR-Code reader). This technology is also being applied for **smart cashless purchases**.

Like many other standards, NFC technology is regulated by  **Near Field Communication Forum**  which standardizes  **NFC**  communication -- how they devices pair, share data and allow a secure transaction to happen.[NFC Forum](http://www.nfc-forum.org) develops and certifies devices compliant with **NFC standards**.

NFC operate on unlicensed ISM(Industry Scientific Medical) band of **13.56 MHz** Frequency. NFC communication range is up to 10 cm. But, this is limited by the antenna and power radiation design. Most devices work within a range of 10mm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  antenna is designed to work within a range of 1cm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  provides all necessary circuitry for **PN532** like 27.12Mhz crystal, power supply.It also beaks-out the I/O pins of **PN532** for easy access.

The communication between Arduino and [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is via SPI.

Model: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)


##   Features   ##

-  Arduino Shield compatible. No soldering required.

- **SPI** interface. Hence, most **Arduino** pins are available for other applications.

-  Built in **PCB Antenna**.

-  Supports both 3.3V and 5V operation using TI's **TXB0104** level translator.

-  Socket to connect other shields.

-  The maximum communication range of this NFC Shield is about 5 cm

-  Not being able to read/write ultralightC chip,Only to Read its ID

##   Application Ideas   ##

- Use as a RFID reader with **Mifare One tags** (ISO14443 Type-A) and cards (13.56Mhz).

- Build visiting card sharing system.

- Build attendance systems.

- Design authentication systems.

- Read Smart Posters.

- Securely exchange small data with other NFC devices

- Use with [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)  for creating mobile NFC applications.

- And other endless possibility.

##   Usage   ##

###   Hardware Installation   ###

- Set **Seeeduino** power selection slide-switch to 3.3V.

- Connect [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  to **Seeeduino** as shown below.

- Compile and upload the example sketch provided.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Connected to Seeeduino**

- Hold the **MIFARE Card** near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Mifare Card held near NFC Shield Antenna**

- Hold the MIFARE Tag near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Mifare Tag held near NFC Shield Antenna**

- Use the following setup for establishing peer to peer communication between two Seeeduinos using NFC Shields.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC Peer to Peer Communication Setup**

###   Programming ###

Donwload the [PN532_SPI Library For NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) and install it to \arduino\libraries. you can either copy the folling codes into Arduino IDE or open Open the examples in the library to start.

**Demo 1：Read the complete memory of a MIFARE card**

1.Open and upload the example readAllMemoryBlocks example as show below.

```
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

**This sketch reads the complete memory of a MIFARE Standard card using default authentication keys. The output gives typical memory layout of fresh MIFARE Standard card.**

2.Bring a Mifare Card near the NFC Antenna. Open the serial monitor, you can see the score as show below:

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

---
name:  NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

---

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is a **Near Field Communication** interface for  **Arduino**  build around the popular  NXP PN532  integrated circuit.  NFC  is a short-distance radio technology that enables communication between devices that are held close together.**NFC** traces its roots in  **RFID**  technology and is an open platform technology standardized in ECMA-340 and ISO/IEC 18092.

NFC is widely used like RFID to recognize cards/tags (NXP Mifare Cards / Tags). NFC can be used as an alternative to **travel card** using the read/write memory provided by cards/tags. Few mobile phones comes with NFC inbuilt - they are used as readers of cards, tags, smart posters with a Web URL(like a Mobile QR-Code reader). This technology is also being applied for **smart cashless purchases**.

Like many other standards, NFC technology is regulated by  **Near Field Communication Forum**  which standardizes  **NFC**  communication -- how they devices pair, share data and allow a secure transaction to happen.[NFC Forum](http://www.nfc-forum.org) develops and certifies devices compliant with **NFC standards**.

NFC operate on unlicensed ISM(Industry Scientific Medical) band of **13.56 MHz** Frequency. NFC communication range is up to 10 cm. But, this is limited by the antenna and power radiation design. Most devices work within a range of 10mm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  antenna is designed to work within a range of 1cm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  provides all necessary circuitry for **PN532** like 27.12Mhz crystal, power supply.It also beaks-out the I/O pins of **PN532** for easy access.

The communication between Arduino and [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is via SPI.

Model: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)


##   Features   ##

-  Arduino Shield compatible. No soldering required.

- **SPI** interface. Hence, most **Arduino** pins are available for other applications.

-  Built in **PCB Antenna**.

-  Supports both 3.3V and 5V operation using TI's **TXB0104** level translator.

-  Socket to connect other shields.

-  The maximum communication range of this NFC Shield is about 5 cm

-  Not being able to read/write ultralightC chip,Only to Read its ID

##   Application Ideas   ##

- Use as a RFID reader with **Mifare One tags** (ISO14443 Type-A) and cards (13.56Mhz).

- Build visiting card sharing system.

- Build attendance systems.

- Design authentication systems.

- Read Smart Posters.

- Securely exchange small data with other NFC devices

- Use with [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)  for creating mobile NFC applications.

- And other endless possibility.

##   Usage   ##

###   Hardware Installation   ###

- Set **Seeeduino** power selection slide-switch to 3.3V.

- Connect [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  to **Seeeduino** as shown below.

- Compile and upload the example sketch provided.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Connected to Seeeduino**

- Hold the **MIFARE Card** near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Mifare Card held near NFC Shield Antenna**

- Hold the MIFARE Tag near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Mifare Tag held near NFC Shield Antenna**

- Use the following setup for establishing peer to peer communication between two Seeeduinos using NFC Shields.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC Peer to Peer Communication Setup**

###   Programming ###

Donwload the [PN532_SPI Library For NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) and install it to \arduino\libraries. you can either copy the folling codes into Arduino IDE or open Open the examples in the library to start.

**Demo 1：Read the complete memory of a MIFARE card**

1.Open and upload the example readAllMemoryBlocks example as show below.

```
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

**This sketch reads the complete memory of a MIFARE Standard card using default authentication keys. The output gives typical memory layout of fresh MIFARE Standard card.**

2.Bring a Mifare Card near the NFC Antenna. Open the serial monitor, you can see the score as show below:

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

---
name:  NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

---

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is a **Near Field Communication** interface for  **Arduino**  build around the popular  NXP PN532  integrated circuit.  NFC  is a short-distance radio technology that enables communication between devices that are held close together.**NFC** traces its roots in  **RFID**  technology and is an open platform technology standardized in ECMA-340 and ISO/IEC 18092.

NFC is widely used like RFID to recognize cards/tags (NXP Mifare Cards / Tags). NFC can be used as an alternative to **travel card** using the read/write memory provided by cards/tags. Few mobile phones comes with NFC inbuilt - they are used as readers of cards, tags, smart posters with a Web URL(like a Mobile QR-Code reader). This technology is also being applied for **smart cashless purchases**.

Like many other standards, NFC technology is regulated by  **Near Field Communication Forum**  which standardizes  **NFC**  communication -- how they devices pair, share data and allow a secure transaction to happen.[NFC Forum](http://www.nfc-forum.org) develops and certifies devices compliant with **NFC standards**.

NFC operate on unlicensed ISM(Industry Scientific Medical) band of **13.56 MHz** Frequency. NFC communication range is up to 10 cm. But, this is limited by the antenna and power radiation design. Most devices work within a range of 10mm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  antenna is designed to work within a range of 1cm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  provides all necessary circuitry for **PN532** like 27.12Mhz crystal, power supply.It also beaks-out the I/O pins of **PN532** for easy access.

The communication between Arduino and [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is via SPI.

Model: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)


##   Features   ##

-  Arduino Shield compatible. No soldering required.

- **SPI** interface. Hence, most **Arduino** pins are available for other applications.

-  Built in **PCB Antenna**.

-  Supports both 3.3V and 5V operation using TI's **TXB0104** level translator.

-  Socket to connect other shields.

-  The maximum communication range of this NFC Shield is about 5 cm

-  Not being able to read/write ultralightC chip,Only to Read its ID

##   Application Ideas   ##

- Use as a RFID reader with **Mifare One tags** (ISO14443 Type-A) and cards (13.56Mhz).

- Build visiting card sharing system.

- Build attendance systems.

- Design authentication systems.

- Read Smart Posters.

- Securely exchange small data with other NFC devices

- Use with [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)  for creating mobile NFC applications.

- And other endless possibility.

##   Usage   ##

###   Hardware Installation   ###

- Set **Seeeduino** power selection slide-switch to 3.3V.

- Connect [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  to **Seeeduino** as shown below.

- Compile and upload the example sketch provided.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Connected to Seeeduino**

- Hold the **MIFARE Card** near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Mifare Card held near NFC Shield Antenna**

- Hold the MIFARE Tag near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Mifare Tag held near NFC Shield Antenna**

- Use the following setup for establishing peer to peer communication between two Seeeduinos using NFC Shields.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC Peer to Peer Communication Setup**

###   Programming ###

Donwload the [PN532_SPI Library For NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) and install it to \arduino\libraries. you can either copy the folling codes into Arduino IDE or open Open the examples in the library to start.

**Demo 1：Read the complete memory of a MIFARE card**

1.Open and upload the example readAllMemoryBlocks example as show below.

```
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

**This sketch reads the complete memory of a MIFARE Standard card using default authentication keys. The output gives typical memory layout of fresh MIFARE Standard card.**

2.Bring a Mifare Card near the NFC Antenna. Open the serial monitor, you can see the score as show below:

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

---
name:  NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

---

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is a **Near Field Communication** interface for  **Arduino**  build around the popular  NXP PN532  integrated circuit.  NFC  is a short-distance radio technology that enables communication between devices that are held close together.**NFC** traces its roots in  **RFID**  technology and is an open platform technology standardized in ECMA-340 and ISO/IEC 18092.

NFC is widely used like RFID to recognize cards/tags (NXP Mifare Cards / Tags). NFC can be used as an alternative to **travel card** using the read/write memory provided by cards/tags. Few mobile phones comes with NFC inbuilt - they are used as readers of cards, tags, smart posters with a Web URL(like a Mobile QR-Code reader). This technology is also being applied for **smart cashless purchases**.

Like many other standards, NFC technology is regulated by  **Near Field Communication Forum**  which standardizes  **NFC**  communication -- how they devices pair, share data and allow a secure transaction to happen.[NFC Forum](http://www.nfc-forum.org) develops and certifies devices compliant with **NFC standards**.

NFC operate on unlicensed ISM(Industry Scientific Medical) band of **13.56 MHz** Frequency. NFC communication range is up to 10 cm. But, this is limited by the antenna and power radiation design. Most devices work within a range of 10mm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  antenna is designed to work within a range of 1cm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  provides all necessary circuitry for **PN532** like 27.12Mhz crystal, power supply.It also beaks-out the I/O pins of **PN532** for easy access.

The communication between Arduino and [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is via SPI.

Model: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)


##   Features   ##

-  Arduino Shield compatible. No soldering required.

- **SPI** interface. Hence, most **Arduino** pins are available for other applications.

-  Built in **PCB Antenna**.

-  Supports both 3.3V and 5V operation using TI's **TXB0104** level translator.

-  Socket to connect other shields.

-  The maximum communication range of this NFC Shield is about 5 cm

-  Not being able to read/write ultralightC chip,Only to Read its ID

##   Application Ideas   ##

- Use as a RFID reader with **Mifare One tags** (ISO14443 Type-A) and cards (13.56Mhz).

- Build visiting card sharing system.

- Build attendance systems.

- Design authentication systems.

- Read Smart Posters.

- Securely exchange small data with other NFC devices

- Use with [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)  for creating mobile NFC applications.

- And other endless possibility.

##   Usage   ##

###   Hardware Installation   ###

- Set **Seeeduino** power selection slide-switch to 3.3V.

- Connect [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  to **Seeeduino** as shown below.

- Compile and upload the example sketch provided.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Connected to Seeeduino**

- Hold the **MIFARE Card** near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Mifare Card held near NFC Shield Antenna**

- Hold the MIFARE Tag near the antenna. The NFC Shield will read the passive id data.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Mifare Tag held near NFC Shield Antenna**

- Use the following setup for establishing peer to peer communication between two Seeeduinos using NFC Shields.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC Peer to Peer Communication Setup**

###   Programming ###

Donwload the [PN532_SPI Library For NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) and install it to \arduino\libraries. you can either copy the folling codes into Arduino IDE or open Open the examples in the library to start.

**Demo 1：Read the complete memory of a MIFARE card**

1.Open and upload the example readAllMemoryBlocks example as show below.

```
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

**This sketch reads the complete memory of a MIFARE Standard card using default authentication keys. The output gives typical memory layout of fresh MIFARE Standard card.**

2.Bring a Mifare Card near the NFC Antenna. Open the serial monitor, you can see the score as show below:

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

---
name: Nose LED Kit
category: Discontinued
bzurl:  https://www.seeedstudio.com/Nose-LED-Kit-p-1274.html
oldwikiname: Nose LED Kit
prodimagename:
surveyurl: https://www.research.net/r/Nose_LED_Kit
sku:   110990217
---

##  How To Assembly

*   [https://docs.google.com/open?id=0B2MvWvAFndBdcTR5SWhuRl9WNUk](https://docs.google.com/open?id=0B2MvWvAFndBdcTR5SWhuRl9WNUk)

*   [https://www.youtube.com/watch?v=CFH_GJ4jTB4](https://www.youtube.com/watch?v=CFH_GJ4jTB4)

###  How to solder battery terminals

*   [https://www.youtube.com/watch?v=_ze1ZoqXn0U](https://www.youtube.com/watch?v=_ze1ZoqXn0U)

##  How To put batteries

*   [https://docs.google.com/open?id=0B2MvWvAFndBdd2R4ZUd4LTdscEk](https://docs.google.com/open?id=0B2MvWvAFndBdd2R4ZUd4LTdscEk)

##  How to Hack

Please,see original Version of Nose LED(hanahotaru)'s manual

*   [https://docs.google.com/open?id=0B2MvWvAFndBdU0pROHhwaEVxeE0](https://docs.google.com/open?id=0B2MvWvAFndBdU0pROHhwaEVxeE0)  (English)

*   [https://docs.google.com/open?id=0B2MvWvAFndBdVUgxUVU2WkU4Q0U](https://docs.google.com/open?id=0B2MvWvAFndBdVUgxUVU2WkU4Q0U)  (Japanese)

Nose LED Kit's pin layout is different from Hanahotaru's one.Please see following URL.

*   [https://docs.google.com/open?id=0B2MvWvAFndBdYkRwdVB4SzFwcVk](https://docs.google.com/open?id=0B2MvWvAFndBdYkRwdVB4SzFwcVk)

##  schematic

*   [https://docs.google.com/open?id=0B2MvWvAFndBdYmJhRTRoREVMTHc](https://docs.google.com/open?id=0B2MvWvAFndBdYmJhRTRoREVMTHc)

##  PR movie

*   [https://www.youtube.com/watch?v=CQJDa41mKwA](https://www.youtube.com/watch?v=CQJDa41mKwA)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>