---
description: Grove - Mini Track Ball
title: Grove - Mini Track Ball
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mini_Track_Ball
sku: 101020091
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Mini_Track_Ball/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mini Track ball oferece um acesso fácil para prototipar um módulo prático de rastreamento de movimento para suas aplicações. Ele possui detecção de 360° e detecção de clique com alta precisão e resposta rápida. Com os chips **STM32F103C8T6** e **AN48841B** integrados, você pode transformar muitas de suas ideias em coisas tangíveis. Ele também é padronizado com a interface Grove, o que economizará muito trabalho no processo de prototipagem.

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html)
## Recursos


-   Detecção rápida e de 360°.
-   Botão de clique translúcido.
-   Padronizado com interface Grove.
-   MCU poderosa para você enriquecer suas aplicações.

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Ideias de aplicação


-   Módulo de rastreamento para um gamepad.
-   Módulo de rastreamento para um controlador háptico.
-   Módulo de rastreamento para brinquedos.

## Especificações


| Parâmetro                        | Valor                                    |
|----------------------------------|------------------------------------------|
| Tensão de operação               | 3,3V~5,5V (típico em 5V)                 |
| Corrente de operação             | 28 mA (corrente máxima de operação: 40 mA) |
| Faixa de temperatura de operação | -25 ~ 75 ℃                               |
| Frequência do MCU                | 64 MHz                                   |
| Frequência de operação           | 105±5kHz                                 |
| Faixa de intensidade de campo de efeito Hall | (0,5) ~ (8) mT                          |
| Endereço I2C                     | 0x4A                                     |

## Visão geral do hardware


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball_Hardware_Overview.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball_Hardware_Overview.jpg" alt="pir" width={600} height="auto" /></p>

- **Interface Grove**   
Conecte a placa de controle principal, como a placa **Seeeduino**, ao Grove - Mini Track Ball.

- **MCU (STM32F103C8T6)**   
Microcontrolador.

- **Track ball**   
Interface para controlar movimentos.



## Primeiros passos

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Grove-Mini_Track_Ball |
|---------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html)|

- **Passo 2.** Conecte o Grove-Mini_Track_Ball à porta **I2C** do Seeeduino.
- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


#### Software

**Passo 1.** Baixe o [demo](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_test.zip) do Github.

**Passo 2.** Abra o arquivo **Grove - Mini Track ball test.ino**



```cpp


#include <Wire.h>

/*---------------------------------------------------------------------------------------//
 * define the default data
 */
#define ReadMode 0
#define WriteMode 1
#define DeAddr 0X4A
#define ConfigValid 0x3a6fb67c


/*---------------------------------------------------------------------------------------//
 * define the enum type for Register
 */
enum MOTION_REG_ADDR
{
  MOTION_REG_UP = 0X00,
  MOTION_REG_DOWN,
  MOTION_REG_LEFT,
  MOTION_REG_RIGHT,
  MOTION_REG_CONFIRM,
  MOTION_REG_NUM
};

enum CONFIG_REG_ADDR
{
  CONFIG_REG_VALID = MOTION_REG_NUM,
  CONFIG_REG_I2C_ADDR = CONFIG_REG_VALID + 4,
  CONFIG_REG_I2C_SPEED,
  CONFIG_REG_LED_MODE = CONFIG_REG_I2C_SPEED + 2,
  CONFIG_REG_LED_FLASH_TIME,
  CONFIG_REG_DATA_CLEAR_TIME = CONFIG_REG_LED_FLASH_TIME + 2,  //CONFIG_REG_LED_FLASH_TIME has 2bytes
  CONFIG_REG_DATA_READ_TIME = CONFIG_REG_DATA_CLEAR_TIME + 2,
  CONFIG_REG_NUM = CONFIG_REG_DATA_READ_TIME + 2
};


/*---------------------------------------------------------------------------------------//
 * define the LED word mode
 */
enum LED_MODE
{
  LED_FLASH_1 = 0X00,
  LED_FLASH_2,
  LED_FLASH_TOGGLE,
  LED_FLASH_ALL,
  LED_ALWAYS_ON_1,
  LED_ALWAYS_ON_2, 
  LED_ALWAYS_ON_ALL,
  LED_ALWAYS_OFF,
  LED_BREATHING_1,
  LED_BREATHING_2,
  LED_BREATHING_ALL,
  LED_MOVE_FLASH,
  LED_MODE_NUM
};



/*---------------------------------------------------------------------------------------//
 * Write one byte into register
 */
void WriteByte(uint8_t Reg, uint8_t Value)
{
    Wire.beginTransmission(DeAddr); 
    Wire.write(WriteMode); 
    Wire.write(Reg); 
    Wire.write(Value); 
    Wire.endTransmission(); 
}

/*---------------------------------------------------------------------------------------//
 * Write N byte into register
 */
void WriteNByte(uint8_t Reg , uint8_t * Value , uint8_t len)
{
    Wire.beginTransmission(DeAddr); 
    Wire.write(WriteMode); 
    Wire.write(Reg); 
    for(int i = 0;i<len;i++)
    {
      Wire.write(Value[i]); 
    }
    Wire.endTransmission(); 
}

/*---------------------------------------------------------------------------------------//
 * Write one word(4 bytes,32 bits) into register ,the register address must be continuous
 */
void WriteOneWord(uint8_t Reg, uint32_t Value)
{
  uint8_t tmp[4]={0};
  tmp[0] = (Value>>0)&0XFF;
  tmp[1] = (Value>>8)&0XFF;
  tmp[2] = (Value>>16)&0XFF;
  tmp[3] = (Value>>24)&0XFF;
  WriteNByte(Reg,tmp,4);
}


/*---------------------------------------------------------------------------------------//
 * Write half word(2 bytes,16 bits) into register ,the register address must be continuous
 */
void WriteHalfWord(uint8_t Reg, uint16_t Value)
{
  uint8_t tmp[2]={0};
  tmp[0] = (Value>>0)&0XFF;
  tmp[1] = (Value>>8)&0XFF;
  WriteNByte(Reg,tmp,2);
}

/*---------------------------------------------------------------------------------------//
 * Read one byte from register
 */
 uint8_t ReadByte(uint8_t Reg)
 {
    Wire.beginTransmission(DeAddr); 
    Wire.write(ReadMode); 
    Wire.write(Reg); 
    Wire.write(1); 
    Wire.endTransmission(); 
    Wire.requestFrom(DeAddr, 1);  
    return Wire.read();
 }
 /*---------------------------------------------------------------------------------------//
 * Read half word from register
 */
 uint16_t ReadHalfWord(uint8_t Reg)
 {
   uint16_t tmp;
   tmp = ReadByte(Reg);
   tmp |= ((uint16_t)ReadByte(Reg+1))<<8;
   return tmp;
 }
 /*---------------------------------------------------------------------------------------//
 * Read one word from register
 */
 uint32_t ReadOneWord(uint8_t Reg)
 {
   uint32_t tmp;
   tmp = ReadByte(Reg);
   tmp |= ((uint32_t)ReadByte(Reg+1))<<8;
   tmp |= ((uint32_t)ReadByte(Reg+2))<<16;
   tmp |= ((uint32_t)ReadByte(Reg+3))<<24;
   return tmp;
 }

/*---------------------------------------------------------------------------------------//
 * Set LED mode ,reference to the enum type LED_MODE
 */
void SetLedMode(uint8_t LED_MODE)
{
  WriteByte(CONFIG_REG_LED_MODE,LED_MODE);
}

/*---------------------------------------------------------------------------------------//
 * test api ,Set LED mode circularly  ,reference to the enum type LED_MODE 
 */
void test_SetLedMode(void)
{
  unsigned char tmp[8]={0};
  for(int i=0;i<LED_MODE_NUM;i++)
  {
     //WriteByte(CONFIG_REG_LED_MODE,(enum LED_MODE)i);
     tmp[0] = i;
     WriteNByte(CONFIG_REG_LED_MODE ,tmp , 1);
     delay(5000);
  }
}

/*---------------------------------------------------------------------------------------//
 * test api,print the track ball data
 */
void test_PrintTrackData(void)
{
  for(int i=0;i<500;i++)
  {
    Serial.print(ReadByte(MOTION_REG_UP));
    Serial.print("-");
    Serial.print(ReadByte(MOTION_REG_DOWN));
    Serial.print("-");
    Serial.print(ReadByte(MOTION_REG_LEFT));
    Serial.print("-");
    Serial.print(ReadByte(MOTION_REG_RIGHT));
    Serial.print("-");
    Serial.println(ReadByte(MOTION_REG_CONFIRM));
    delay(100);
  }
}

/*---------------------------------------------------------------------------------------//
 * test api,Write register
 */
void test_WriteReg(void)
{ 
  unsigned char tmp[8]={0};
  tmp[0] = 0X4A;
  WriteByte(CONFIG_REG_I2C_ADDR ,tmp[0]);
  delay(100);
  tmp[0] = 0X64;
  tmp[1] = 0X00;
  WriteByte(CONFIG_REG_I2C_SPEED ,tmp[0]);
  WriteByte(CONFIG_REG_I2C_SPEED+1 ,tmp[1]);
  delay(100);
  tmp[0] = 10;
  WriteByte(CONFIG_REG_LED_MODE ,tmp[0]);
  delay(100);
  tmp[0] = 0xc8;
  tmp[1] = 0x00;
  WriteByte(CONFIG_REG_LED_FLASH_TIME ,tmp[0]);
  WriteByte(CONFIG_REG_LED_FLASH_TIME+1 ,tmp[1]);
  delay(100);
  tmp[0] = 0XEA;
  tmp[1] = 0X14;
  WriteByte(CONFIG_REG_DATA_CLEAR_TIME ,tmp[0]);
  WriteByte(CONFIG_REG_DATA_CLEAR_TIME+1 ,tmp[1]);
  delay(100);
  tmp[0] = 0X22;
  tmp[1] = 0X05;
  WriteByte(CONFIG_REG_DATA_READ_TIME ,tmp[0]);
  WriteByte(CONFIG_REG_DATA_READ_TIME+1 ,tmp[1]);
  delay(1000);
  Serial.println("Setted Value are over here");
  Serial.print("valid:0x");Serial.print(ReadByte(CONFIG_REG_VALID+3),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+2),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+1),HEX);Serial.println(ReadByte(CONFIG_REG_VALID+0),HEX);
  Serial.print("I2C_ADDR:0x");Serial.println(ReadByte(CONFIG_REG_I2C_ADDR+0),HEX);
  Serial.print("I2C_SPEED:0x");Serial.print(ReadByte(CONFIG_REG_I2C_SPEED+1),HEX);Serial.println(ReadByte(CONFIG_REG_I2C_SPEED+0),HEX);
  Serial.print("LED_MODE:0x");Serial.println(ReadByte(CONFIG_REG_LED_MODE+0),HEX);
  Serial.print("LED_FLASH_TIME:0x");Serial.print(ReadByte(CONFIG_REG_LED_FLASH_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_LED_FLASH_TIME+0),HEX);
  Serial.print("DATA_CLEAR_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+0),HEX);
  Serial.print("DATA_READ_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_READ_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_READ_TIME+0),HEX);
  Serial.println();Serial.println();Serial.println();
  delay(3000);

}


/*---------------------------------------------------------------------------------------//
 * test api,Set all config to default value
 */
void test_SetDefault(void)
{ 
  unsigned char Zero[]={0,0,0,0};
  Serial.println("Setting Default Value");
  WriteNByte(CONFIG_REG_VALID , Zero , 4);
  delay(100);
  Serial.println("Default Value are over here");
  Serial.print("valid:0x");Serial.print(ReadByte(CONFIG_REG_VALID+3),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+2),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+1),HEX);Serial.println(ReadByte(CONFIG_REG_VALID+0),HEX);
  Serial.print("I2C_ADDR:0x");Serial.println(ReadByte(CONFIG_REG_I2C_ADDR+0),HEX);
  Serial.print("I2C_SPEED:0x");Serial.print(ReadByte(CONFIG_REG_I2C_SPEED+1),HEX);Serial.println(ReadByte(CONFIG_REG_I2C_SPEED+0),HEX);
  Serial.print("LED_MODE:0x");Serial.println(ReadByte(CONFIG_REG_LED_MODE+0),HEX);
  Serial.print("LED_FLASH_TIME:0x");Serial.print(ReadByte(CONFIG_REG_LED_FLASH_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_LED_FLASH_TIME+0),HEX);
  Serial.print("DATA_CLEAR_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+0),HEX);
  Serial.print("DATA_READ_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_READ_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_READ_TIME+0),HEX);
  Serial.println();Serial.println();Serial.println();
  delay(3000);
}

void setup() {

 Wire.begin();
 Serial.begin(115200);
}

void loop() {

  test_SetLedMode();

  test_PrintTrackData();

 test_WriteReg();  

 test_SetDefault();

 delay(3000);
}


```

**Passo 3.** Envie seu código para a placa Seeeduino. Quando o processo de upload estiver concluído, para abrir a janela Serial Monitor, clique em **Serial Monitor** no menu **Tool**.

**Passo 4.** O LED indicador sob a trackball acenderá em diferentes modos, que durarão cerca de 50 segundos

**Passo 5.** Depois disso, você pode girar ou "clicar" na trackball para obter informações sobre sua trajetória.


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

- **[Eagle]** [Grove-Mini Track ball v1.0 schematic](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_Eagle.zip)
- **[PDF]** [Grove-Mini Track ball v1.0 schematic](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_PDF.zip)
- **[Datasheet]** [STM32F103C8T6 Datasheet](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/STM32F03C8T6.pdf)
- **[Datasheet]** [AN48841B Datasheet](http://www.semicon.panasonic.co.jp/ds4/AN48841B_E.pdf)
- **[Library]** [Library file in Github](https://github.com/Seeed-Studio/Grove_Mini_Track_Ball)

## Suporte Técnico e Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
