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

![](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is a **Near Field Communication** interface for  **Arduino**  build around the popular  NXP PN532  integrated circuit.  NFC  is a short-distance radio technology that enables communication between devices that are held close together.**NFC** traces its roots in  **RFID**  technology and is an open platform technology standardized in ECMA-340 and ISO/IEC 18092.

NFC is widely used like RFID to recognize cards/tags (NXP Mifare Cards / Tags). NFC can be used as an alternative to **travel card** using the read/write memory provided by cards/tags. Few mobile phones comes with NFC inbuilt - they are used as readers of cards, tags, smart posters with a Web URL(like a Mobile QR-Code reader). This technology is also being applied for **smart cashless purchases**.

Like many other standards, NFC technology is regulated by  **Near Field Communication Forum**  which standardizes  **NFC**  communication -- how they devices pair, share data and allow a secure transaction to happen.[NFC Forum](http://www.nfc-forum.org) develops and certifies devices compliant with **NFC standards**.

NFC operate on unlicensed ISM(Industry Scientific Medical) band of **13.56 MHz** Frequency. NFC communication range is up to 10 cm. But, this is limited by the antenna and power radiation design. Most devices work within a range of 10mm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  antenna is designed to work within a range of 1cm. [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  provides all necessary circuitry for **PN532** like 27.12Mhz crystal, power supply.It also beaks-out the I/O pins of **PN532** for easy access.

The communication between Arduino and [NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  is via SPI.

Model: [SLD80453P](http://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)


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

![](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Connected to Seeeduino**

- Hold the **MIFARE Card** near the antenna. The NFC Shield will read the passive id data.

![](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/img/MifareCard_near_NFC_Shield1.jpg)
**Mifare Card held near NFC Shield Antenna**

- Hold the MIFARE Tag near the antenna. The NFC Shield will read the passive id data.

![](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/img/MifareTag_near_NFC_Shield1.jpg)
**Mifare Tag held near NFC Shield Antenna**

- Use the following setup for establishing peer to peer communication between two Seeeduinos using NFC Shields.

![](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC Peer to Peer Communication Setup**

###   Programming ###

Donwload the [PN532_SPI Library For NFC Shield](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/res/PN532_SPI_V2.zip) and install it to \arduino\libraries. you can either copy the folling codes into Arduino IDE or open Open the examples in the library to start.

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

![](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/img/Score_2.jpg)

**Note:** Blocks are classified as Manufacturer Block(read-only), Data Block (user/application writable area), and Sector Trailer(authentication and access bits for that sector)

**Demo 2: Write data to MIFARE Memory Block**

1.Open the example writeMifareMemory. This example writes a MIFARE memory block 0x08 of a new MIFARE 1K cards using default authentication keys .Read the Block Memory after complete writing data to MIFARE Memory Block.

Note: Memory block 0 is readonly and contains manufacturer data. Do not write to Sector Trailer block unless you know what you are doing. Otherwise, the MIFARE card may be unusable in the future.

2.Compile and upload the example If you do not know how to upload, please click [here](https://seeeddoc.github.io/Upload_Code/).

3.Bring a Mifare Card near the NFC Antenna..  
4.Open the serial monitor, you can see the score as show below:
![](img/Score_1.jpg)

**Demo 3: Peer to Peer communication**

An experimental NFC Peer to Peer communication is implemented in the latest NFC library. This uses Active Initiator for P2P communication.

1.Download the example “PtoPInitiator” and “PtoPTarge” into two different Arduinos with NFC Shields.

2.Place Antenna close to each other.

3.Open the serial terminal and observer the data trans-reception.

**Output Score:**

P2P Initiator:
![](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/img/NFC_Shield_PtoPInitiator.jpg)

P2P Target:
![](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/img/NFC_Shield_PtoPTarget.jpg)

##   Reference code   ##

The APIs make use of the commands to invoke the interfaces provided by PN532 firmware via SPI. All these commands are documented in PN532 User Manual. The following APIs are provided by PN532_SPI Library.

**boolean SAMConfig(void)**

This API invokes the **SAMConfiguration** command of PN532 and sets it to **Normal Mode**. **SAM** stands for Security Access Module (i.e the PN532 system). PN532 system can work in **Normal** mode, **Virtual Card** mode, **Wired Card** mode and **Dual Card** mode.

**Usage:**

```
nfc.SAMConfig(); // Call this before any read/write operation

```

**uint32_t readPassiveTargetID(uint8_t cardbaudrate)**

This method reads the Passive Target ID and returns it as a 32-bit number. At the moment only reading MIFARE ISO14443A cards/tags are supported. Hence use **PN532_MIFARE_ISO14443A** as parameter. Returns 32 bit card number

**Usage:**

```
uint32_t cid;
// look for MiFare type cards/tags
cid = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);

```

uint32_t authenticateBlock(uint8_t cardnumber, uint32_t cid, uint8_t blockaddress ,uint8_t authtype, uint8_t * keys)

This method is used to authenticate a memory block with key before read/write operation. Returnstrue when successful.

- **cardnumber** can be 1 or 2

- **cid** is 32-bit Card ID

- **blockaddress** is block number (any number between 0 - 63 for MIFARE card)

- **authtype** is which key is to be used for authentication (either **KEY_A** or **KEY_B**)

- **keys** points to the byte-array holding 6 keys.

**Usage:**

```
uint8_t keys[]= {0xFF,0xFF,0xFF,0xFF,0xFF,0xFF};  // default key of a fresh card
nfc.authenticateBlock(1, id ,3,KEY_A,keys); //authenticate block 3, id is 32-bit passive target id.

```

**uint32_t readMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)**

This method reads a memory block after authentication with the key. Returnstrue when successful.

- **cardnumber** can be 1 or 2

- **blockaddress** is block number (any number between 0 - 63 for MIFARE card) to read. Each block is 16bytes long in case of MIFARE Standard card.

- **block** points to buffer(byte-array)to hold 16 bytes of block-data.

**Usage:**

```
uint8_t block[16];
nfc.readMemoryBlock(1,3,block); //Read can be performed only when authentication was successful.

```

**uint32_t writeMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)**

This method writes data to a memory block after authentication with the key. Returnstrue when successful.

- **cardnumber** can be 1 or 2

- **blockaddress** is block number (any number between 0 - 63 for MIFARE card) to write. Each block is 16bytes long in case of MIFARE Standard card.

- **block** points to buffer(byte-array) which holds 16 bytes of block-data to write.**Usage**:

```
uint8_t writeBuffer[16];
    for(uint8_t ii=0;ii<16;ii++)
     {
       writeBuffer[ii]=ii; //Fill buffer with 0,1,2....F
     }
nfc.writeMemoryBlock(1,0x08,writeBuffer); //Write writeBuffer[] to block address 0x08. Read can be performed only when authentication was successful.

```

**uint32_t PN532::configurePeerAsInitiator(uint8_t baudrate)**

This method implements a Peer to Peer Initiator. Returnstrue when successful.

- **baudrate** can be any number from 0-2. 0 for 106kbps or 1 for 201kbps or 2 for 424kbps. At the moment only 1 and 2 are supported.

*8This feature is experimental and supports NFC Peer to Peer communication with other NFC shields. Interaction with mobile devices are not tested.**

**Usage:**

```
// Configure PN532 as Peer to Peer Initiator
if( nfc.configurePeerAsInitiator(2) ) //if connection is error-free
    {
     //Your Send  Receive code here
    }

```

**uint32_t configurePeerAsTarget()**

This method implements a Peer to Peer Target. Returnstrue when successful.

**This feature is experimental and supports NFC Peer to Peer communication with other NFC shields. Interaction with mobile devices are not tested.**

**Usage:**

```
// Configure PN532 as Peer to Peer Target
if(nfc.configurePeerAsTarget()) //if connection is error-free
   {
        //You code to trans-receive data
   }

```

**uint32_t initiatorTxRx(char *DataOut,char *DataIn)**

This method is used to transmit and receive data to and from target. This code is used by NFC Peer to Peer Initiator. Returnstrue when successful.

- **DataOut** is pointer and array of chars (16 bytes) transmit data.

- **DataIn** is pointer and array of chars (16 bytes) receive data.

**This feature is experimental and supports NFC Peer to Peer communication with other NFC shields. Interaction with mobile devices are not tested.**

**Usage:**

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

This method is used to transmit and receive data to and from initiator. This code is used by NFC Peer to Peer Target to respond to Initiator. Returnstrue when successful.

- **DataOut** is pointer and array of chars (16 bytes) transmit data.

- **DataIn** is pointer and array of chars (16 bytes) receive data.

**Usage:**

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

##   Resources   ##

- **[Library]**[PN532_SPI Library For NFC Shield](https://github.com/SeeedDocument/NFC_Shield_V1.0/raw/master/res/PN532_SPI_V2.zip)
- **[Eagle]**[NFC Shield - Schematic and Board Files in Eagle Format](http://wiki.seeedstudio.com/images/8/81/NFC_Shield_V0.9b_Schematic_Board_Files.zip)
- **[PDF]**[NFC Shield - Schematic in PDF format](http://wiki.seeedstudio.com/images/4/48/NFC_Shield_V0.9b.pdf)
- **[PDF]**[NXP PN532 - User Manual](http://www.nxp.com/documents/user_manual/141520.pdf)
- **[Links]**[NFC Forum](http://www.nfc-forum.org)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>