---
description: Suli
title: Suli
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Suli
last_update:
  date: 1/16/2023
  author: hushuxu
createdAt: '2023-02-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Suli/
---

##  O que é Suli

Parece o nome de uma garota? Na verdade, significa Seeed Unified Library Interface. É algo grande na nossa lista de tarefas para um futuro próximo.

Temos centenas de sensores, atuadores, displays e outros módulos úteis. No passado, nós nos concentrávamos principalmente em aplicações Arduino e fornecíamos apenas a Arduino Library. Isso significa que, se você usasse outra plataforma, como Raspberry, LauchPad ou MCS51, precisaria portar nossa Library e, às vezes, isso não é fácil.

Às vezes, quando alguns clientes nos pediam para fornecer algumas libraries para uma plataforma que não fosse Arduino, tudo o que podíamos fazer era dizer a eles “hey man, we only have Arduino library.” Responder aos clientes dessa maneira nos fazia sentir mal.

E temos pensado: e se houver uma maneira de fazer com que nossas libraries se encaixem em todas as plataformas. É realmente uma tarefa difícil, mas não impossível. E tivemos a sorte de finalmente descobrir: é Suli – Seeed Unified Library Interface, que pode fazer com que quase todas (pelo menos 90%) as nossas libraries sirvam para muitas plataformas comuns, ou pelo menos tornar fácil portá‑las.

##  Como o Suli funciona

Dê uma olhada na imagem a seguir,

![](https://files.seeedstudio.com/wiki/Suli/img/Suli_layer2.jpg)

Podemos ver que há quatro círculos e o mais interno é HW(hardware). Suli chamará recursos de HW, como GPIO, I2C, Timer e UART; depois Library compatível com Suli e, em seguida, User Application. Todas as nossas Libraries chamarão apenas a função Suli. Assim, para diferentes plataformas, podemos simplesmente portar o Suli, então a Library poderá ser usada. Isso significa que diferentes plataformas têm o seu Suli, Suli para Arudino, Suli para Mbed, Suli para….

Há vários pontos sobre o Suli:

*   Plataformas diferentes têm Suli diferentes, ele é para uma plataforma específica.

*   A Library compatível com Suli é independente de plataforma.

*   A Library compatível com Suli chamará a functon no Suli.

Suli tem dois arquivos, Suli.h e Suli.cpp(.c). E Suli deve implementar a seguinte função,

**Tipo de GPIO:**

```
typedef     int     IO_T;                           // IO type
typedef     int     PIN_T;                          // pin name
typedef     int     DIR_T;                          // pin direction
typedef int ANALOG_T;                               // pin analog
```

**Estado de GPIO:**

```
#define HAL_PIN_INPUT   INPUT          // INPUT and OUTPUT was declared in Arduino IDE
#define HAL_PIN_OUTPUT  OUTPUT
#define HAL_PIN_HIGH    HIGH           // HIGH and LOW was declered in Arduino IDE
#define HAL_PIN_LOW     LOW
```

**Tipo de dado:**
```
typedef signed char     int8;
typedef unsigned char   uint8;
typedef signed short    int16;
typedef unsigned short  uint16;
typedef signed long     int32;
typedef unsigned long   uint32;
```

**Operação de IO digital:**

```
void suli_pin_init(IO_T *pio, PIN_T pin);      // pin initialize
void suli_pin_dir(IO_T *pio, DIR_T dir);       // set pin direction
void suli_pin_write(IO_T *pio, int16 state);   // write pin
int16 suli_pin_read(IO_T *pio);                // read pin
uint16 suli_pulse_in(IO_T *pio, uint8 state, uint32 timeout);
```

**Operação de IO analógico:**

```
void suli_analog_init(ANALOG_T * aio, PIN_T pin);
int16 suli_analog_read(ANALOG_T * aio);
```

**Delay:**

```
	void suli_delay_us(uint32 us);                 // delay us
	void suli_delay_ms(uint32 ms);                 // delay ms
```

**Times:**

```
	uint32 suli_millis(void);
	uint32 suli_micros(void);
```

**Interface I2C:**

```
	void suli_i2c_init(void * i2c_device);
	uint8 suli_i2c_write(void * i2c_device, uint8 dev_addr, uint8 *data, uint8 len);
	uint8 suli_i2c_read(void * i2c_device, uint8 dev_addr, uint8 *buff, uint8 *len);
```

**UART:**

```
	void suli_uart_init(void * uart_device, int16 uart_num, uint32 baud);
	void suli_uart_send(void * uart_device, int16 uart_num, uint8 *data, uint16 len);
	void suli_uart_send_byte(void * uart_device, int16 uart_num, uint8 data);
	uint8 suli_uart_read_byte(void * uart_device, int16 uart_num);
	uint16 suli_uart_readable(void * uart_device, int16 uart_num);
```

Você pode notar que Suli inclui operação de IO digital, operação de IO analógico, I2C e função Uart, talvez não seja muito abrangente, mas com base na minha experiência, é suficiente para bastante das nossas libraries; claro, se descobrirmos que precisamos de mais funciton algum dia, vamos acrescentar.

##   O que vem a seguir

Nosso plano é tornar todas as libraries da Seeed compatíveis com Suli e portar o Suli para algumas plataformas comuns. Essas plataformas incluirão Arduino, Mbed, Mesh Bee, Raspberry, LaunchPad na primeira etapa. Espera‑se que esse trabalho seja concluído antes de junho. Fique ligado

##   Referência

- [git repository of Suli](https://github.com/Seeed-Studio/Suli)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
