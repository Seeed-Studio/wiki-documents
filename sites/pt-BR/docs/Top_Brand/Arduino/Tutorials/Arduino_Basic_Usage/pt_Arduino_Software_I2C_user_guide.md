---
description: Guia do Usuário I2C para Placas Arduino
title: Guia do Usuário I2C para Placas Arduino
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino_Software_I2C_user_guide
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Arduino_Software_I2C_user_guide/
---


# Guia do Usuário de Software I2C para Arduino

A biblioteca I2C padrão para o Arduino é a biblioteca Wire. Embora essa biblioteca seja suficiente na maior parte do tempo, existem situações em que ela não pode ser usada:

- os pinos I2C A4/A5 (ou SDA/SCL) já estão em uso para outros propósitos
- dispositivos com os mesmos endereços I2C são usados

Então escrevemos a biblioteca SoftwareI2C para usar porta digital e porta
analógica para permitir que vários dispositivos com o mesmo endereço I2C funcionem no Arduino.

## Scanner I2C para Arduino

I2C Scanner é um sketch simples que faz a varredura do barramento I2C em busca de dispositivos. Você pode enviar o código para o seu Arduino para descobrir o endereço I2C dos módulos. Faça o upload do sketch abaixo e abra o Monitor Serial para ver os resultados:

```cpp
#include <Wire.h>

void setup()
{
    Wire.begin();

    Serial.begin(9600);
    while (!Serial); // Wait for serial monitor
    Serial.println("---I2C Scanner---");
}

void loop()
{
    byte error, address;
    int nDevices;

    Serial.println("Scanning...");

    nDevices = 0;
    for(address = 1; address < 127; address++ )
    {
        Wire.beginTransmission(address);
        error = Wire.endTransmission();

        Wire.beginTransmission(address+1);

    if (error == 0 && Wire.endTransmission() != 0 ) // Special flag for SAMD Series
    {
        Serial.print("I2C device found at address 0x");
        if (address<16)
            Serial.print("0");
        Serial.print(address,HEX);
        Serial.println("!");

        nDevices++;
    }
    else if (error==4) 
    {
        Serial.print("Unknown error at address 0x");
        if (address<16) 
            Serial.print("0");
        Serial.println(address,HEX);
    }
    }
    if (nDevices == 0)
        Serial.println("No I2C devices found\n");
    else
        Serial.println("done\n");

    delay(5000);           // wait 5 seconds for next scan
}
```

## Instalar a Biblioteca SoftwareI2C

----

- Siga os procedimentos de [como instalar uma biblioteca do arduino](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para instalar a biblioteca.
- Fornecemos uma Biblioteca Arduino para **SoftwareI2C**, clique em [**aqui**](https://github.com/Seeed-Studio/Arduino_Software_I2C) para baixá-la.

## Exemplo nº 1: Fazer a varredura do endereço do dispositivo I2C

----

### Conexão

Aqui vamos mostrar como isso funciona por meio de uma demonstração simples. Antes de tudo, você precisa preparar os itens abaixo:

| Seeeduino V4.2 | Grove - OLED Display 1.12" | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

Este é um módulo fácil de usar, o que você precisa fazer é conectar o módulo à **porta D2** de um Base Shield.

![enter image description here](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/One_OLED.jpg)

Se você não tiver o Base Shield, siga a conexão abaixo.

|Pino Arduino|Pino OLED  |
|--------|------|
|Dígito 3 | SDA   |
|Dígito 2   | SCL|
|VCC   | VCC  |
|GND | GND  |

### Software

- Abra o código diretamente pelo caminho: **File -> Example ->Arduino_Software_I2C-master->SoftwareI2C_Scan**.

![](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/I2C_Scan.jpg)

```cpp
#include "SoftwareI2C.h"

SoftwareI2C softwarei2c;

void setup()
{
    Serial.begin(115200);
    softwarei2c.begin(3, 2);       // sda, scl
    Serial.println("begin to scan...");
}

void loop()
{
    for(unsigned char i=1; i<=127; i++)
    {
        if(softwarei2c.beginTransmission(i))
        {
            Serial.print("0x");
            Serial.println(i, HEX);

            while(1);
        }
        softwarei2c.endTransmission();
    }

    Serial.println("find nothing");
    while(1);

}
```

- Envie o código para o Arduino.
- Configure a taxa de baud da porta serial como 115200.
- Podemos ver o endereço I2C no monitor serial.

## Exemplo nº 2: Exibir informações diferentes em 2 Grove - OLED Display 1.12

----

### Conexão

Aqui vamos mostrar como isso funciona por meio de uma demonstração simples. Antes de tudo, você precisa preparar os itens abaixo:

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

- Conecte um Grove - OLED Display 1.12 à **porta D2** e o outro à **porta D4**.

![enter image description here](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/Two_OLED.jpg)

### Software

- Clique em [aqui](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip) para baixar a biblioteca Grove-OLED-Display-1.12.
- **Copie SeeedGrayOLED.cpp e SeeedGrayOLED.h para a pasta Arduino_Software_I2C-master**
- **Edite SeeedGrayOLED.cpp**

  - Passo 1: Altere a biblioteca de Wire.h para SoftwareI2C.h

```cpp
From
#include "Wire.h"
To
#include <SoftwareI2C.h>
```

- Passo 2: Adicione a função initSoftwareI2C, temos que alterar o nome da classe para produtos diferentes.

```cpp
void SeeedGrayOLED::initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl)
{
    Wire = w;
    Wire->begin(__sda, __scl);
}
```

- Passo 3: Substitua todo `Wire.` por `Wire->`  Por exemplo, altere `Wire.endTransmission()` para `Wire->endTransmission()`.

```cpp
From
Wire.endTransmission();
To
Wire->endTransmission();
```

- **Edite SeeedGrayOLED.h**

  - Passo 1: Altere a biblioteca `Wire.h` para `SoftwareI2C.h`

```cpp
From
#include "Wire.h"
To
#include <SoftwareI2C.h>
```

- Passo 2: Adicione a função initSoftwareI2C na classe public

```cpp
void initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl);
```

- Passo 3: Adicione SoftwareI2C *Wire na classe private

```cpp
SoftwareI2C *Wire;
```

- Abra o código diretamente pelo caminho: **File -> Example ->Arduino_Software_I2C-master->OLED_Display**.

![](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/OLED_Display.jpg)

- Temos que definir objetos SoftwareI2C assim como objetos SeeedGrayOLED.

```cpp
//define 2 SoftwareI2C objects
#include "SoftwareI2C.h"  
SoftwareI2C WireS1;
SoftwareI2C WireS2;

//define 2 SeeedGrayOLED objects
#include "SeeedGrayOLED.h"
#include <avr/pgmspace.h>
SeeedGrayOLED SeeedGrayOled1;
SeeedGrayOLED SeeedGrayOled2;
```

- Usamos initSoftwareI2C em vez de Wire.begin durante a configuração.

```cpp
  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl
```

```cpp
//define 2 SoftwareI2C objects
#include "SoftwareI2C.h"  
SoftwareI2C WireS1;
SoftwareI2C WireS2;

//define 2 SeeedGrayOLED objects
#include "SeeedGrayOLED.h"
#include <avr/pgmspace.h>
SeeedGrayOLED SeeedGrayOled1;
SeeedGrayOLED SeeedGrayOled2;


void setup()
{
  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl

  SeeedGrayOled1.init(SSD1327);
  SeeedGrayOled1.clearDisplay();     //Clear Display.
  SeeedGrayOled1.setNormalDisplay(); //Set Normal Display Mode
  SeeedGrayOled1.setVerticalMode();  // Set to vertical mode for displaying text


  for(char i=0; i < 12 ; i++)
  {
  SeeedGrayOled1.setTextXY(i,0);  //set Cursor to ith line, 0th column
  SeeedGrayOled1.setGrayLevel(i); //Set Grayscale level. Any number between 0 - 15.
  SeeedGrayOled1.putString("11111111"); //Print 11111111
  }


  SeeedGrayOled2.initSoftwareI2C(&WireS2, 5, 4);     // initSoftwareI2C, sda, scl

  SeeedGrayOled2.init(SSD1327);             //initialize SEEED OLED display
  SeeedGrayOled2.clearDisplay();     //Clear Display.
  SeeedGrayOled2.setNormalDisplay(); //Set Normal Display Mode
  SeeedGrayOled2.setVerticalMode();  // Set to vertical mode for displaying text

  for(char i=0; i < 12 ; i++)
  {
  SeeedGrayOled2.setTextXY(i,0);  //set Cursor to ith line, 0th column
  SeeedGrayOled2.setGrayLevel(i); //Set Grayscale level. Any number between 0 - 15.
  SeeedGrayOled2.putString("00000000"); //Print 00000000
  }
}

  void loop()
  {

  }
```

- Carregue para o Sketch.
- Veremos 11111111 exibido em uma tela enquanto 00000000 está na outra.

## APIs da biblioteca

-----

- função begin(): SoftwareI2C.begin() deve ser chamada primeiro para iniciar qualquer comunicação I2C por software usando a biblioteca SoftwareI2C.  

```cpp
SoftwareI2C::begin(int Sda, int Scl)
```

- função beginTransmission: Usada quando o ATmega está atuando como mestre I2C. Define variáveis internas na biblioteca SoftwareI2C em preparação para transmitir para o endereço fornecido.

```cpp
SoftwareI2C.beginTransmission(uchar addr)
```

- função endTransmission(): fim da transmissão para o endereço fornecido.  

```cpp
SoftwareI2C.endTransmission()
```

- função write: Preenche o buffer de envio de dados com os dados encontrados na lista de argumentos. Existem 2 funções. Uma envia um byte e a outra um array.

```cpp
SoftwareI2C.write(uchar dta)
```

```cpp
SoftwareI2C::write(uchar len, uchar *dta)
```

- função read: Retorna o byte no buffer de recebimento.

```cpp
SoftwareI2C.read()
```

## Referências

----

- **[Library]**[Arduino SoftwareI2C Library](https://github.com/Seeed-Studio/Arduino_Software_I2C/archive/master.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
