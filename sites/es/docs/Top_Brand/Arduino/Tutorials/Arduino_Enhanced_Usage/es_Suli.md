---
description: Suli
title: Suli
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Suli
last_update:
  date: 1/16/2023
  author: hushuxu
---

##  Qué es Suli

¿Suena como el nombre de una chica? En realidad significa Seeed Unified Library Interface (Interfaz de Biblioteca Unificada de Seeed). Es algo importante en nuestra lista de tareas pendientes en el futuro cercano.

Tenemos cientos de sensores, actuadores, pantallas y otros módulos útiles. En el pasado, nos enfocamos principalmente en aplicaciones de Arduino, y solo suministramos Biblioteca de Arduino. Esto significa que si usabas otra plataforma como Raspberry, LauchPad, o MCS51, necesitabas portar nuestra Biblioteca, y a veces no es fácil.

A veces cuando algunos clientes nos pedían que proporcionáramos algunas bibliotecas para una plataforma que no fuera Arduino, lo que podíamos hacer era decirles "oye amigo, solo tenemos biblioteca de Arduino." Responder a los clientes de esta manera nos hacía sentir mal.

Y hemos estado pensando qué pasaría si hubiera una manera de hacer que nuestras bibliotecas se ajusten a todas las plataformas. Es realmente una tarea difícil, pero no imposible. Y tenemos la suerte de haberlo descubierto finalmente: es Suli – Seeed Unified Library Interface, que puede hacer que casi todas (al menos el 90%) de nuestras bibliotecas se ajusten a muchas plataformas comunes, o al menos hacer que sea fácil portarlas.

##  Cómo funciona Suli

Echa un vistazo a la siguiente imagen,

![](https://files.seeedstudio.com/wiki/Suli/img/Suli_layer2.jpg)

Podemos encontrar que hay cuatro círculos y el más interno es HW(hardware). Suli llamará recursos desde HW, como GPIO, I2C, Timer y UART; luego Biblioteca compatible con Suli, y luego Aplicación de Usuario. Todas nuestras Bibliotecas llamarán solo función Suli. Por lo tanto, para diferentes plataformas, podemos simplemente portar Suli, entonces la Biblioteca puede ser usada. Eso significa que diferentes plataformas tienen su Suli, Suli para Arduino, Suli para Mbed, Suli para….

Hay varios puntos sobre Suli:

*   Diferentes plataformas tienen diferentes Suli, es para una plataforma particular.

*   La Biblioteca compatible con Suli es independiente de la plataforma.

*   La Biblioteca compatible con Suli llamará la función en Suli.

Suli tiene dos archivos, Suli.h y Suli.cpp(.c). Y Suli debería implementar la siguiente función,

**Tipo GPIO:**

```
typedef     int     IO_T;                           // IO type
typedef     int     PIN_T;                          // pin name
typedef     int     DIR_T;                          // pin direction
typedef int ANALOG_T;                               // pin analog
```

**Estado GPIO:**

```
#define HAL_PIN_INPUT   INPUT          // INPUT and OUTPUT was declared in Arduino IDE
#define HAL_PIN_OUTPUT  OUTPUT
#define HAL_PIN_HIGH    HIGH           // HIGH and LOW was declered in Arduino IDE
#define HAL_PIN_LOW     LOW
```

**Tipo de datos:**
```
typedef signed char     int8;
typedef unsigned char   uint8;
typedef signed short    int16;
typedef unsigned short  uint16;
typedef signed long     int32;
typedef unsigned long   uint32;
```

**Operación de IO Digital:**

```
void suli_pin_init(IO_T *pio, PIN_T pin);      // pin initialize
void suli_pin_dir(IO_T *pio, DIR_T dir);       // set pin direction
void suli_pin_write(IO_T *pio, int16 state);   // write pin
int16 suli_pin_read(IO_T *pio);                // read pin
uint16 suli_pulse_in(IO_T *pio, uint8 state, uint32 timeout);
```

**Operación de IO Analógico:**

```
void suli_analog_init(ANALOG_T * aio, PIN_T pin);
int16 suli_analog_read(ANALOG_T * aio);
```

**Retraso:**

```
	void suli_delay_us(uint32 us);                 // delay us
	void suli_delay_ms(uint32 ms);                 // delay ms
```

**Tiempos:**

```
	uint32 suli_millis(void);
	uint32 suli_micros(void);
```

**Interfaz I2C:**

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

Puedes encontrar que Suli incluye operación de IO digital, operación de IO analógico, I2C, y función Uart, tal vez no sea muy completo, pero basado en mi experiencia, es suficiente para bastantes de nuestras bibliotecas, por supuesto si encontramos que necesitamos más función algún día, la agregaremos.

##   Qué sigue

Nuestro plan es hacer que todas las bibliotecas de Seeed sean compatibles con Suli y portar Suli de algunas plataformas comunes. Estas plataformas incluirán Arduino, Mbed, Mesh Bee, Raspberry, LaunchPad en la primera etapa. Se espera que este trabajo esté terminado antes de junio. Mantente atento

##   Referencia

- [repositorio git de Suli](https://github.com/Seeed-Studio/Suli)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>