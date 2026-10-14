---
title: Uso de CANFD con XIAO STM32C5
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - can fd
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_canfd_usage
sku: 100036669
last_update:
  date: 08/21/2026
  author: Zeller
createdAt: '2026-08-21'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/es/xiao_stm32c5_canfd_usage/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_canfd.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Introducción al bus CAN

CAN (Controller Area Network) es un bus de comunicación serie desarrollado por Bosch a partir de 1983 y presentado públicamente en 1986. Diseñado inicialmente para la electrónica del automóvil, ahora se utiliza ampliamente en automatización industrial, robótica, dispositivos médicos y sistemas embebidos.

La capa de enlace de datos de CAN y la capa física de alta velocidad están definidas por la serie de normas ISO 11898. En términos del modelo OSI, CAN especifica principalmente las dos capas siguientes:

- **Capa física**: Define el cableado, las señales eléctricas, el temporizado de bits y las conexiones del transceptor.
- **Capa de enlace de datos**: Define los formatos de trama, el arbitraje del bus, la detección de errores y el confinamiento de fallos.

Las principales características de CAN incluyen:

1. **Comunicación multi‑maestro**: Cuando el bus está inactivo, cualquier nodo puede intentar transmitir sin depender de un sondeo por parte de un maestro dedicado.
2. **Difusión basada en mensajes**: Las tramas transportan identificadores de mensaje en lugar de direcciones de origen y destino. Cada nodo utiliza filtros para determinar qué mensajes aceptar.
3. **Arbitraje no destructivo**: Cuando varios nodos transmiten simultáneamente, sus identificadores se comparan bit a bit, empezando por el bit más significativo. En el primer bit diferente, un `0` dominante anula un `1` recesivo, dando a la trama con el identificador numéricamente más bajo una prioridad más alta. Los nodos que pierden el arbitraje dejan de transmitir sin corromper la trama ganadora.
4. **Gestión robusta de errores**: Los controladores CAN pueden detectar errores de bit, de inserción, de CRC, de forma y de ACK. Los contadores de errores y la retransmisión automática mejoran la fiabilidad de la comunicación.
5. **Bajo coste de cableado y componentes**: El CAN de alta velocidad suele requerir solo un par trenzado, un transceptor para cada nodo y una resistencia de terminación en cada extremo del bus.

### Señalización física de CAN

El CAN de alta velocidad suele utilizar un par trenzado formado por `CAN_H` y `CAN_L`. El receptor determina el estado del bus a partir de la tensión diferencial entre las dos líneas de señal:

`V_diff = V(CAN_H) - V(CAN_L)`

- **Bit recesivo `1`**: CAN_H y CAN_L están a niveles de tensión similares, produciendo una tensión diferencial cercana a 0 V. Para transceptores CAN de alta velocidad de 5 V comunes, ambas líneas están típicamente cerca de 2,5 V.
- **Bit dominante `0`**: La tensión de CAN_H aumenta mientras que la tensión de CAN_L disminuye. Para transceptores CAN de alta velocidad de 5 V comunes, los niveles típicos son aproximadamente 3,5 V y 1,5 V, respectivamente, produciendo una tensión diferencial de unos 2 V.

Estos son valores de tensión típicos. Los valores reales dependen del transceptor, la tensión de alimentación, la carga del bus y la tensión de modo común. Consulta la hoja de datos del transceptor para conocer los rangos de funcionamiento especificados.

En un bus CAN, un `0` dominante tiene prioridad sobre un `1` recesivo. Esta característica permite el arbitraje bit a bit no destructivo y permite que los nodos receptores reconozcan una trama recibida correctamente transmitiendo un bit dominante en la ranura de ACK.

### Trama de datos CAN clásica

La siguiente trama de datos CAN 2.0A clásica se utiliza como ejemplo: identificador 0x00A, DLC 1, datos 0x81 y CRC-15/CAN 0x18DA. Las etiquetas de los campos, los bits lógicos y las formas de onda de CAN_H/CAN_L están alineados por columnas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
- Campos de la trama de datos

| Campo | Longitud | Descripción |
| --- | ---: | --- |
| SOF | 1 bit | Un `0` dominante marca el inicio de una trama y sincroniza los nodos. |
| Identificador | 11 bits | Identifica el mensaje y determina su prioridad de arbitraje. |
| RTR | 1 bit | `0` dominante para una trama de datos; `1` recesivo para una trama remota. |
| IDE | 1 bit | `0` dominante para una trama estándar; `1` recesivo para una trama extendida. |
| r0 | 1 bit | Bit reservado que se transmite como `0` dominante. |
| DLC | 4 bits | Los valores de `0` a `8` especifican una longitud de carga útil de `0` a `8` bytes. En CAN clásico, los valores de `9` a `15` también representan una carga útil de 8 bytes. |
| Datos | 0–8 bytes | Contiene la carga útil especificada por el DLC. |
| Secuencia CRC | 15 bits | Permite que los nodos receptores detecten errores de transmisión. |
| Delimitador CRC | 1 bit | Fijado en `1` recesivo. |
| Ranura ACK | 1 bit | El transmisor envía un `1` recesivo; los nodos que reciben la trama sin error lo sobrescriben con un `0` dominante. |
| Delimitador ACK | 1 bit | Fijado en `1` recesivo. |
| EOF | 7 bits | Siete bits recesivos consecutivos marcan el final de la trama. |
| Intermisión | 3 bits | Tres bits recesivos que siguen a la trama; forman parte del espacio entre tramas más que de la propia trama. |

### Cómo se transmite una trama CAN

1. Tras detectar que el bus está inactivo, el nodo transmisor inicia la trama con el bit SOF.
2. Si varios nodos comienzan a transmitir simultáneamente, comparan el estado del bus bit a bit durante el campo de arbitraje. Un nodo que transmite un `1` recesivo pero detecta un `0` dominante pierde el arbitraje y deja de transmitir.
3. El nodo ganador continúa transmitiendo los campos de control y datos. Los nodos receptores filtran la trama por su identificador y determinan la longitud de la carga útil a partir del DLC.
4. Los nodos receptores eliminan los bits de inserción y verifican el CRC. Si el formato de la trama y el CRC son válidos, transmiten un `0` dominante en la ranura de ACK.
5. El nodo transmisor completa la transmisión tras detectar el ACK. Si no se detecta ACK, informa de un error de ACK y normalmente intenta la retransmisión según la configuración del controlador.

### Inserción de bits (Bit Stuffing)

Desde el SOF hasta el final de la secuencia CRC, el transmisor inserta un bit de relleno complementario después de cinco bits consecutivos con el mismo valor lógico. El receptor elimina estos bits de relleno automáticamente.

La inserción de bits proporciona flancos de señal para la sincronización y ayuda en la detección de errores. Los bits de relleno no pertenecen a ningún campo de la trama y no se incluyen en el DLC ni en las longitudes de campo especificadas. Por lo tanto, el tiempo de transmisión real depende de la velocidad de bits, la longitud de la carga útil y el número de bits de relleno insertados.

## Introducción a CAN FD

El CAN clásico admite una carga útil máxima de 8 bytes y una velocidad de bits nominal de hasta 1 Mbit/s. Para admitir transferencias de datos más grandes, Bosch introdujo CAN FD (CAN with Flexible Data-rate) en 2012.

Las principales mejoras incluyen:

- Aumentar la carga útil máxima de **8 bytes** a **64 bytes** por trama.
- Utilizar el bit BRS para cambiar a una velocidad de bits más alta durante la fase de datos y volver a la velocidad de bits nominal antes del campo ACK.
- Utilizar secuencias CRC de 17 bits o 21 bits, según la longitud de la carga útil, e introducir un nuevo mapeo de DLC a longitud de carga útil.
- Conservar los identificadores de mensaje y el mecanismo de arbitraje bit a bit del CAN clásico durante la fase de arbitraje.

La velocidad de bits alcanzable en la fase de datos de CAN FD depende del controlador, el transceptor, la precisión del reloj, la longitud del cable, el número de nodos y la topología de la red. Las velocidades de bits de fase de datos habituales incluyen 2 Mbit/s, 5 Mbit/s y superiores.

## Uso de CAN FD con PlatformIO

El XIAO STM32C5 proporciona una interfaz CAN FD con un transceptor y una resistencia de terminación integrados, lo que permite la conexión directa a través de CAN_H y CAN_L.

Este ejemplo utiliza PlatformIO y el framework Zephyr con dos placas XIAO STM32C5:

- **Placa A** transmite tramas CAN FD.
- **Placa B** recibe y procesa las tramas, y luego controla su LED de usuario integrado según los datos recibidos.

:::note

Este ejemplo utiliza PlatformIO. Si no estás familiarizado con él, consulta [Getting Started with PlatformIO for XIAO STM32C5](https://wiki.seeedstudio.com/es/xiao_stm32c5_getting_started/#getting-started-with-platformio).

:::

1. Comprueba los recursos de pines de hardware para el periférico CAN.

El XIAO STM32C5 proporciona dos interfaces CAN FD. Una expone señales TX y RX a nivel lógico para la conexión a un transceptor CAN externo. La otra está conectada al transceptor CAN FD integrado [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) y proporciona acceso directo al bus a través de CAN_H y CAN_L.

El circuito CAN FD integrado incluye una resistencia de terminación de 120 Ω desconectable. Activa la resistencia cuando la placa se encuentra en cualquiera de los extremos del bus y desconéctala cuando la placa sea un nodo intermedio o cuando ya haya otra resistencia de 120 Ω instalada en el extremo XIAO del bus. El transceptor también admite un modo de espera para reducir el consumo de energía cuando no se requiere comunicación CAN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

Se pueden utilizar directamente las almohadillas CAN_H y CAN_L de la parte posterior. Sin embargo, si se utilizan almohadillas circulares, es necesario emplear un chip de conversión CAN independiente y resistencias de terminación correspondientes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_3.png" style={{width:700, height:'auto'}}/></div>

2. Modifica el archivo devicetree `app.overlay`. En XIAO STM32C5 se utiliza el nodo `canfd2`. Los pines de transmisión/recepción CAN son FDCAN2_RX‑PB5 y FDCAN2_TX‑PB13, con CAN_STB‑PB14. Los nodos alias correspondientes en el devicetree son `fdcan2_rx_pb5`, `fdcan2_tx_pb13` y `can_phy0`.

```dts
/* FDCAN2, transceiver standby, and USB CDC are configured by the board DTS. */

```

3. Modifica el archivo de configuración y añade las configuraciones relevantes para `fdcan2`.

```conf
# CAN FD: 500 kbit/s arbitration and 2 Mbit/s data phases.
CONFIG_CAN=y
CONFIG_CAN_FD_MODE=y
CONFIG_CAN_DEFAULT_BITRATE=500000
CONFIG_CAN_DEFAULT_BITRATE_DATA=2000000

# Keep application status output enabled; the board routes it to USB CDC.
CONFIG_PRINTK=y
```

4. Escribe el programa `main.c`. En este ejemplo se utilizan dos placas XIAO STM32C5. La placa A actúa como transmisor para enviar datos del protocolo CAN. La placa B funciona como receptor; recibe y analiza los mensajes CAN y luego enciende el LED integrado.

<details>

<summary>Programa de envío CANFD</summary>

```cpp
/*
 * XIAO STM32C5 CAN FD sender (board A)
 *
 * Sends one 16-byte CAN FD frame with standard ID 0x123 over FDCAN2
 * every second. BRS uses 500 kbit/s for arbitration and 2 Mbit/s for
 * the data phase. Transmission status is printed through USB CDC ACM.
 */
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/can.h>
#include <zephyr/kernel.h>

#include <stdint.h>

#define CAN_NODE DT_CHOSEN(zephyr_canbus)
#define CAN_ID 0x123U
#define CAN_DATA_LENGTH 16U
#define CAN_DATA_DLC 10U
#define SEND_PERIOD_MS 1000

static const struct device *const can_dev = DEVICE_DT_GET(CAN_NODE);

/* Encode multibyte fields explicitly as little-endian wire data. */
static void put_u16_le(uint8_t *dst, uint16_t value)
{
 dst[0] = (uint8_t)value;
 dst[1] = (uint8_t)(value >> 8);
}

static void put_u32_le(uint8_t *dst, uint32_t value)
{
 dst[0] = (uint8_t)value;
 dst[1] = (uint8_t)(value >> 8);
 dst[2] = (uint8_t)(value >> 16);
 dst[3] = (uint8_t)(value >> 24);
}

static uint8_t payload_checksum(const uint8_t *data)
{
 uint8_t checksum = 0U;

 for (size_t i = 0U; i < CAN_DATA_LENGTH - 1U; i++) {
  checksum ^= data[i];
 }

 return checksum;
}

/*
 * 16-byte application payload:
 *   [0..3]   sequence number (uint32, little-endian)
 *   [4..7]   sender uptime in milliseconds (uint32, little-endian)
 *   [8..9]   example measurement A (int16, little-endian)
 *   [10..11] example measurement B (int16, little-endian)
 *   [12]     state value cycling from 0 to 3
 *   [13..14] fixed markers 0x5A and 0xA5
 *   [15]     XOR checksum of bytes 0 through 14
 */
static void build_frame(struct can_frame *frame, uint32_t sequence)
{
 int16_t measurement_a = (int16_t)(250 + (sequence % 50U));
 int16_t measurement_b = (int16_t)(-100 + (sequence % 20U));

 *frame = (struct can_frame) {
  .id = CAN_ID,
  .dlc = CAN_DATA_DLC,
  /* FDF selects CAN FD; BRS enables the faster data phase. */
  .flags = CAN_FRAME_FDF | CAN_FRAME_BRS,
 };

 put_u32_le(&frame->data[0], sequence);
 put_u32_le(&frame->data[4], k_uptime_get_32());
 put_u16_le(&frame->data[8], (uint16_t)measurement_a);
 put_u16_le(&frame->data[10], (uint16_t)measurement_b);
 frame->data[12] = (uint8_t)(sequence & 0x03U);
 frame->data[13] = 0x5AU;
 frame->data[14] = 0xA5U;
 frame->data[15] = payload_checksum(frame->data);
}

int main(void)
{
 uint32_t sequence = 0U;
 int ret;

 if (!device_is_ready(can_dev)) {
  printk("FDCAN2 device is not ready\r\n");
  return 0;
 }

 /* The controller mode must be selected before the controller starts. */
 ret = can_set_mode(can_dev, CAN_MODE_FD);
 if (ret != 0) {
  printk("Failed to enable CAN FD mode: %d\r\n", ret);
  return 0;
 }

 ret = can_start(can_dev);
 if (ret != 0) {
  printk("Failed to start FDCAN2: %d\r\n", ret);
  return 0;
 }

 printk("FDCAN2 sender started: ID=0x%03x, 500 kbit/s + 2 Mbit/s data\r\n",
        CAN_ID);

 while (true) {
  struct can_frame frame;

  build_frame(&frame, sequence);
  /* A NULL callback makes this synchronous, with a 100 ms timeout. */
  ret = can_send(can_dev, &frame, K_MSEC(100), NULL, NULL);
  if (ret == 0) {
   printk("TX sequence=%u time=%u ms state=%u\r\n",
          sequence, k_uptime_get_32(), frame.data[12]);
   sequence++;
  } else {
   printk("FDCAN2 send failed: %d\r\n", ret);
  }

  k_msleep(SEND_PERIOD_MS);
 }

 return 0;
}
```

</details>

<details>

<summary>Programa de recepción CAN</summary>

```cpp
/*
 * XIAO STM32C5 CAN FD receiver (board B)
 *
 * FDCAN2 accepts standard ID 0x123, decodes the 16-byte application
 * payload, and prints it through USB CDC ACM. A valid frame lights the
 * onboard LED for 100 ms. With no traffic, the LED stays off and a
 * timeout warning is printed once per second.
 */
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/can.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/kernel.h>

#include <stdint.h>

#define CAN_NODE DT_CHOSEN(zephyr_canbus)
#define CAN_ID 0x123U
#define CAN_DATA_LENGTH 16U
#define CAN_DATA_DLC 10U
#define LED_FLASH_MS 100
#define RX_POLL_MS 20
#define NO_RX_REPORT_MS 1000

static const struct device *const can_dev = DEVICE_DT_GET(CAN_NODE);
static const struct gpio_dt_spec led =
 GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);

/* The driver posts frames from interrupt context; the main loop consumes them. */
CAN_MSGQ_DEFINE(rx_msgq, 10);

/* Decode multibyte fields using the sender's little-endian wire format. */
static uint16_t get_u16_le(const uint8_t *src)
{
 return (uint16_t)src[0] | ((uint16_t)src[1] << 8);
}

static uint32_t get_u32_le(const uint8_t *src)
{
 return (uint32_t)src[0] |
        ((uint32_t)src[1] << 8) |
        ((uint32_t)src[2] << 16) |
        ((uint32_t)src[3] << 24);
}

static uint8_t payload_checksum(const uint8_t *data)
{
 uint8_t checksum = 0U;

 for (size_t i = 0U; i < CAN_DATA_LENGTH - 1U; i++) {
  checksum ^= data[i];
 }

 return checksum;
}

/*
 * Print the raw payload and its decoded fields.
 * A true return value means the XOR checksum passed and permits an LED flash.
 */
static bool print_frame(const struct can_frame *frame)
{
 uint32_t sequence = get_u32_le(&frame->data[0]);
 uint32_t tx_time_ms = get_u32_le(&frame->data[4]);
 int16_t measurement_a = (int16_t)get_u16_le(&frame->data[8]);
 int16_t measurement_b = (int16_t)get_u16_le(&frame->data[10]);
 uint8_t state = frame->data[12];
 uint8_t received_checksum = frame->data[15];
 uint8_t calculated_checksum = payload_checksum(frame->data);

 printk("RX ID=0x%03x DLC=%u DATA=", frame->id, frame->dlc);
 for (size_t i = 0U; i < CAN_DATA_LENGTH; i++) {
  printk("%02x%s", frame->data[i],
         (i == CAN_DATA_LENGTH - 1U) ? "" : " ");
 }
 printk("\r\n");

 printk("PARSED sequence=%u tx_time=%u ms measurement_a=%d "
        "measurement_b=%d state=%u checksum=%s\r\n",
        sequence, tx_time_ms, measurement_a, measurement_b, state,
        received_checksum == calculated_checksum ? "OK" : "ERROR");

 return received_checksum == calculated_checksum;
}

int main(void)
{
 /* Match standard 11-bit ID 0x123; other IDs do not enter the queue. */
 const struct can_filter filter = {
  .id = CAN_ID,
  .mask = CAN_STD_ID_MASK,
  .flags = 0U,
 };
 int64_t led_off_time = 0;
 int64_t last_rx_time = k_uptime_get();
 int64_t last_no_rx_report_time = last_rx_time;
 int filter_id;
 int ret;

 if (!gpio_is_ready_dt(&led)) {
  printk("LED device is not ready\r\n");
  return 0;
 }

 /* GPIO_OUTPUT_INACTIVE honors devicetree polarity and starts with LED off. */
 ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE);
 if (ret != 0) {
  printk("Failed to configure LED: %d\r\n", ret);
  return 0;
 }

 if (!device_is_ready(can_dev)) {
  printk("FDCAN2 device is not ready\r\n");
  return 0;
 }

 /* Enable CAN FD mode before starting the controller. */
 ret = can_set_mode(can_dev, CAN_MODE_FD);
 if (ret != 0) {
  printk("Failed to enable CAN FD mode: %d\r\n", ret);
  return 0;
 }

 /* Queue matching frames so parsing and printing stay out of interrupt context. */
 filter_id = can_add_rx_filter_msgq(can_dev, &rx_msgq, &filter);
 if (filter_id < 0) {
  printk("Failed to add receive filter: %d\r\n", filter_id);
  return 0;
 }

 ret = can_start(can_dev);
 if (ret != 0) {
  printk("Failed to start FDCAN2: %d\r\n", ret);
  return 0;
 }

 printk("FDCAN2 receiver started: ID=0x%03x, output via USB CDC\r\n",
        CAN_ID);

 while (true) {
  struct can_frame frame;

  /*
   * Poll with a short timeout instead of blocking forever so the loop
   * can turn off the LED and report an absence of CAN traffic.
   */
  if (k_msgq_get(&rx_msgq, &frame, K_MSEC(RX_POLL_MS)) != 0) {
   int64_t now = k_uptime_get();

   if (led_off_time != 0 && now >= led_off_time) {
    (void)gpio_pin_set_dt(&led, 0);
    led_off_time = 0;
   }

   if ((now - last_rx_time) >= NO_RX_REPORT_MS &&
       (now - last_no_rx_report_time) >= NO_RX_REPORT_MS) {
    printk("WARN: no FDCAN2 data received for %lld ms\r\n",
           now - last_rx_time);
    last_no_rx_report_time = now;
   }
   continue;
  }

  last_rx_time = k_uptime_get();
  last_no_rx_report_time = last_rx_time;

  /* This example only decodes 16-byte CAN FD frames. */
  if ((frame.flags & CAN_FRAME_FDF) == 0U ||
      frame.dlc != CAN_DATA_DLC) {
   printk("Ignored non-matching frame: flags=0x%x dlc=%u\r\n",
          frame.flags, frame.dlc);
   (void)gpio_pin_set_dt(&led, 0);
   led_off_time = 0;
   continue;
  }

  if (print_frame(&frame)) {
   /* Logical GPIO levels automatically handle the active-low onboard LED. */
   (void)gpio_pin_set_dt(&led, 1);
   led_off_time = k_uptime_get() + LED_FLASH_MS;
  } else {
   (void)gpio_pin_set_dt(&led, 0);
   led_off_time = 0;
  }
 }

 return 0;
}
```

</details>

5. Los resultados se muestran en la figura siguiente.

- Conecta CAN_H con CAN_H y CAN_L con CAN_L entre las placas A y B. Si utilizan fuentes de alimentación separadas, conecta también sus tierras. La placa B hace parpadear su LED después de recibir y validar una trama.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_4.gif" style={{width:500, height:'auto'}}/></div>

- Comprueba los datos transmitidos y analizados utilizando el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_5.png" style={{width:1000, height:'auto'}}/></div>

## Puente USB a CAN

El CAN Bridge convierte la XIAO STM32C5 en un adaptador USB‑CAN. Reenvía mensajes bidireccionalmente entre el PC y el bus CAN/CAN‑FD, lo que permite al PC enviar comandos de control, supervisar el estado del dispositivo y registrar el tráfico del bus. Los casos de uso típicos incluyen depuración de motores de articulaciones de robots, análisis de ECU automotrices y redes a bordo, pruebas de integración para servos industriales y sensores CAN, y monitorización del estado de BMS. Tomando como ejemplo el desarrollo de robots, el PC puede enviar comandos de habilitación, posición y velocidad a los controladores de motores de articulaciones a través de CAN Bridge, mientras recibe información de ángulo, corriente, temperatura y fallos.

Este tutorial proporciona dos implementaciones: `gs_usb` y `slcan`. Ambas ofrecen funciones similares en el lado CAN; las principales diferencias radican en el transporte de datos entre el host y la placa, las plataformas compatibles y la capacidad CAN‑FD.

### gs_usb vs slcan

`gs_usb` es un protocolo de comunicación para adaptadores USB‑CAN. La placa transfiere mensajes CAN por USB al PC. En Linux, el controlador `gs_usb` del kernel lo registra directamente como una interfaz SocketCAN como `can0`. Ofrece un alto rendimiento con soporte CAN‑FD, adecuado para comunicación de alta velocidad, monitorización de bus, pruebas automatizadas y depuración a largo plazo en Linux.

`slcan` es un método de comunicación que encapsula mensajes CAN con comandos ASCII de Lawicel. En este proyecto, la placa se comunica con el PC a través del puerto serie USB CDC. La placa aparece como un puerto COM en Windows y `/dev/ttyACMx` en Linux. Puede funcionar con SavvyCAN, python‑can o `slcand`. Este enfoque se caracteriza por un protocolo sencillo, acceso flexible y buena compatibilidad multiplataforma.

### Trabajar con gs_usb

Esta sección demuestra la funcionalidad utilizando firmware precompilado. El código fuente se puede descargar desde el repositorio `platform‑seeedboards`.

:::tip

- La placa tiene un terminador integrado de 120 Ω. Cuando está habilitado y la placa se encuentra en un extremo del bus, no se necesita una resistencia adicional en ese extremo. Asegúrate de que el otro extremo también esté terminado; desactiva la resistencia integrada para un nodo intermedio.
- Esta sección se basa en la distribución Linux Ubuntu 22.04 LTS.

:::

- **📄[Firmware]** [Firmware CAN-Bridge-gsusb](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-bridge-gsusb.uf2)
- Consulta el enlace de GitHub para el código fuente.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-can-bridge-gsusb" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> zephyr-can-bridge-gsusb</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

1. Pulsa dos veces el botón Reset en la XIAO STM32C5 para entrar en modo bootloader. Descarga y copia el archivo de firmware a la unidad de almacenamiento masivo `XIAOC5BOOT`. Para probar el rendimiento de transmisión y recepción CAN‑FD, flashea el firmware en dos placas XIAO STM32C5 para su verificación.

:::tip
Consulta el diagrama de cableado para las conexiones. [Using CANFD With PlatformIO](#Using-CANFD-With-PlatformIO)
:::

2. Conecta la placa a tu host Linux, abre una terminal e instala los paquetes de software necesarios. Los dispositivos CAN se enumerarán entonces, normalmente `can0` y `can1`.

```bash
# Install can-utils
sudo apt update
sudo apt install can-utils

# Load gs_usb kernel module
sudo modprobe gs_usb
ip -brief link show type can
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_6.png" style={{width:700, height:'auto'}}/></div>

3. Configura las interfaces CAN

```bash
# Bring up can0
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can0 up

# Bring up can1
sudo ip link set can1 down
sudo ip link set can1 type can bitrate 5000000 dbitrate 2000000 fd on
sudo ip link set can1 up
```

4. Envía y monitoriza el tráfico CAN‑FD

- Abre otra terminal para recibir datos en la interfaz `can1`.

```bash
candump -x can1
```

- En otra terminal, envía una trama CAN‑FD de 12 bytes con BRS habilitado a través de la interfaz `can0`.

```bash
cansend can0 123##1000102030405060708090A0B
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_7.png" style={{width:700, height:'auto'}}/></div>

5. Verificar con script

- Instala el módulo `python‑can`

```bash
sudo apt update
sudo apt install python3-can
```

- Ejecuta en el lado receptor

<details>

<summary>canfd_2m_test.py</summary>

```python
# SPDX-License-Identifier: Apache-2.0
"""Send or receive CAN FD frames at 500 kbit/s nominal and 2 Mbit/s data."""

import argparse
import time

import can

NOMINAL_BITRATE = 500_000
DATA_BITRATE = 2_000_000


def open_bus(interface, channel, serial_number=None, loop_back=False):
    if interface == "socketcan":
        options = {
            "interface": "socketcan",
            "channel": channel,
            "fd": True,
        }
    else:
        try:
            candle_channel = int(channel)
        except ValueError:
            candle_channel = channel
        options = {
            "interface": "candle",
            "channel": candle_channel,
            "fd": True,
            "bitrate": NOMINAL_BITRATE,
            "data_bitrate": DATA_BITRATE,
            "loop_back": loop_back,
            "ignore_config": True,
        }
        if serial_number:
            options["serial_number"] = serial_number
    return can.Bus(**options)


def make_test_frames():
    payload_12 = bytes(range(12))
    payload_64 = bytes(range(64))
    return (
        can.Message(
            arbitration_id=0x200,
            is_extended_id=False,
            is_fd=True,
            bitrate_switch=True,
            data=payload_12,
        ),
        can.Message(
            arbitration_id=0x201,
            is_extended_id=False,
            is_fd=True,
            bitrate_switch=True,
            data=payload_64,
        ),
    )


def send_frames(bus, count, interval):
    frames = make_test_frames()

    acknowledged = 0
    for _ in range(count):
        for frame in frames:
            try:
                bus.send(frame, timeout=1.0)
                acknowledged += 1
                print(
                    f"TX ID={frame.arbitration_id:#05x} len={len(frame.data)} "
                    f"FD={frame.is_fd} BRS={frame.bitrate_switch}"
                )
            except can.CanError as error:
                print(f"TX failed for ID {frame.arbitration_id:#05x}: {error}")
            time.sleep(interval)

    print(f"Transmission complete: {acknowledged} CAN FD frames submitted")


def loopback_test(bus, count, interval):
    frames = make_test_frames()
    passed = 0
    expected = count * len(frames)

    for _ in range(count):
        for frame in frames:
            bus.send(frame, timeout=1.0)
            deadline = time.monotonic() + 1.0
            received = None

            while time.monotonic() < deadline:
                candidate = bus.recv(timeout=0.1)
                if candidate is None:
                    continue
                if (
                    candidate.arbitration_id == frame.arbitration_id
                    and candidate.is_fd
                    and candidate.bitrate_switch
                    and bytes(candidate.data) == bytes(frame.data)
                ):
                    received = candidate
                    break

            if received is None:
                print(
                    f"FAIL ID={frame.arbitration_id:#05x}: "
                    "no matching loopback frame"
                )
            else:
                passed += 1
                print(
                    f"PASS ID={received.arbitration_id:#05x} "
                    f"len={len(received.data)} FD={received.is_fd} "
                    f"BRS={received.bitrate_switch}"
                )
            time.sleep(interval)

    print(f"Loopback complete: {passed}/{expected} CAN FD frames passed")
    if passed != expected:
        raise RuntimeError("CAN FD loopback test failed")


def receive_frames(bus, duration):
    deadline = time.monotonic() + duration
    received = 0
    while time.monotonic() < deadline:
        frame = bus.recv(timeout=0.5)
        if frame is None:
            continue
        received += 1
        print(
            f"RX ID={frame.arbitration_id:#x} len={len(frame.data)} "
            f"FD={frame.is_fd} BRS={frame.bitrate_switch} "
            f"data={bytes(frame.data).hex().upper()}"
        )
    print(f"Reception complete: {received} frames")


def main():
    parser = argparse.ArgumentParser(
        description="XIAO STM32C5 gs_usb CAN FD 500k/2M test"
    )
    parser.add_argument("mode", choices=("send", "receive", "loopback"))
    parser.add_argument(
        "--interface",
        choices=("candle", "socketcan"),
        default="candle",
        help="candle uses direct USB; socketcan uses a Linux canX interface",
    )
    parser.add_argument(
        "--channel",
        default="0",
        help="candle channel number or SocketCAN interface name such as can0",
    )
    parser.add_argument("--serial-number", help="USB serial number for board selection")
    parser.add_argument("--count", type=int, default=10)
    parser.add_argument("--interval", type=float, default=0.1)
    parser.add_argument("--duration", type=float, default=10.0)
    args = parser.parse_args()

    print(
        f"Opening {args.interface} channel {args.channel}: "
        f"nominal={NOMINAL_BITRATE}, "
        f"data={DATA_BITRATE}, FD enabled, "
        f"loopback={args.mode == 'loopback'}"
    )
    bus = open_bus(
        args.interface,
        args.channel,
        args.serial_number,
        loop_back=args.mode == "loopback",
    )
    try:
        if args.mode == "send":
            send_frames(bus, args.count, args.interval)
        elif args.mode == "receive":
            receive_frames(bus, args.duration)
        else:
            loopback_test(bus, args.count, args.interval)
    finally:
        bus.shutdown()


if __name__ == "__main__":
    main()
```

</details>

```bash
python3 canfd_2m_test.py receive \
  --interface socketcan \
  --channel can1 \
  --duration 30
```

- Ejecutar en el lado del transmisor

```bash
python3 canfd_2m_test.py send \
  --interface socketcan \
  --channel can0 \
  --count 10 \
  --interval 0.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_7_1.png" style={{width:700, height:'auto'}}/></div>

### Trabajar con slcan

Esta sección demuestra la funcionalidad utilizando firmware precompilado. El código fuente se puede descargar desde el repositorio `platform‑seeedboards`.

:::tip

- El XIAO STM32C5 ya tiene una resistencia de terminación CAN integrada de 120 Ω habilitada de forma predeterminada, por lo que no necesitas soldar una resistencia adicional entre sus pads CAN_H y CAN_L. Cuando se usan dos placas XIAO, la resistencia integrada en cada placa termina un extremo del bus.
- Esta sección se basa en la distribución Linux Ubuntu 22.04 LTS.

:::

- **📄[Firmware]** [Firmware CAN-Bridge-slcan](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-bridge-slcan.uf2)
- Consulta el enlace de GitHub para el código fuente.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-can-bridge-slcan" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> can-bridge-slcan</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

1. Pulsa dos veces el botón Reset en el XIAO STM32C5 para entrar en modo bootloader. Descarga y copia el archivo de firmware a la unidad de almacenamiento masivo `XIAOC5BOOT`. Utiliza dos placas XIAO STM32C5 con el firmware flasheado, o una XIAO STM32C5 más otro dispositivo receptor compatible con slcan.
2. Conecta la placa a tu host Linux y abre una terminal. Localiza los dispositivos serie bajo `/dev/ttyACM*`, normalmente `ttyACM0` y `ttyACM1`.

```bash
ls /dev/ttyACM*
```

<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_8.png" style={{width:800, height:'auto'}}/></div>
<br/>

3. Instala [SavvyCAN](https://github.com/collin80/SavvyCAN/releases). Descarga la versión V220 o posterior y luego establece una conexión a través de SavvyCAN.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/collin80/SavvyCAN/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> SavvyCAN</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

:::tip

- Para sistemas Linux, se requiere el paquete `libfuse2` antes de usarlo.

```bash
sudo apt update
sudo apt install libfuse2
```

:::

- Este ejemplo utiliza la versión V220. Ejecuta la aplicación como se muestra a continuación en Linux:

```bash
# For Linux
sudo chmod +x SavvyCAN-7c576c5-x86_64.AppImage
./SavvyCAN-7c576c5-x86_64.AppImage

# On Windows, directly launch the executable SavvyCAN.exe
```

4. Ve a **Connection → Open Connection Window**. Haz clic en **Add New Device Connection**. Establece el tipo de conexión en **LAWICEL / SLCAN Serial**. Selecciona `ttyACM0` para Serial Port. Configura Serial Port Speed en `115200`, CAN Bus Speed en `500000 bit/s`. Habilita **CAN‑FD** y establece la velocidad de datos CAN‑FD en `2000000 bit/s`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_9.png" style={{width:400, height:'auto'}}/></div>

5. Después de la configuración, el estado de la conexión indicará si la conexión se realizó correctamente. Se recomienda abrir la consola en la esquina superior derecha para ver los registros, verificar que los parámetros coincidan con tu configuración y luego guardar la configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_10.png" style={{width:800, height:'auto'}}/></div>

6. Abre una nueva terminal y ejecuta el script de prueba. El script detectará automáticamente los dispositivos serie `/dev/ttyACM*` sin usar y transmitirá datos CAN‑FD.

```bash
python3 savvycan_fd_peer.py send
```

<details>
<summary>savvycan_fd_peer.py</summary>

```py
# SPDX-License-Identifier: Apache-2.0
"""Send or receive SavvyCAN LAWICEL CAN FD frames with a second XIAO board."""

import argparse
import time

import serial
import serial.tools.list_ports

SEEED_VID = 0x2886
SERIAL_BAUD = 115200


def find_available_port(explicit_port=None):
    candidates = [explicit_port] if explicit_port else [
        port.device
        for port in serial.tools.list_ports.comports()
        if port.vid == SEEED_VID
    ]

    for device in candidates:
        try:
            connection = serial.Serial(device, SERIAL_BAUD, timeout=0.35)
            connection.dtr = True
            connection.rts = False
            time.sleep(0.4)
            connection.reset_input_buffer()
            return connection
        except (OSError, serial.SerialException) as error:
            print(f"Skipping {device}: {error}")

    raise RuntimeError(
        "No available Seeed CDC port. Close SavvyCAN on the peer port or "
        "specify the unused port with --port."
    )


def command(connection, text, response_wait=0.08):
    connection.reset_input_buffer()
    connection.write((text + "\r").encode("ascii"))
    connection.flush()
    time.sleep(response_wait)
    response = connection.read(256)
    if b"\x07" in response:
        raise RuntimeError(f"Firmware rejected command {text!r}: {response!r}")
    if b"\r" not in response:
        raise RuntimeError(f"No acknowledgement for {text!r}: {response!r}")
    return response


def open_can_fd(connection):
    command(connection, "C")
    command(connection, "S6")  # 500 kbit/s nominal bitrate
    command(connection, "Y2")  # 2 Mbit/s CAN FD data bitrate
    command(connection, "O")


def send_frames(connection, duration):
    frames = [
        "d2009000102030405060708090A0B",  # 12-byte standard FD, no BRS
        "b201F" + "".join(f"{value:02X}" for value in range(64)),
        "B001ABCDE9AABBCCDDEEFF001122334455",  # 12-byte extended FD with BRS
    ]
    deadline = time.monotonic() + duration
    sent = 0

    print("Sending IDs 0x200, 0x201, and 0x1ABCDE to SavvyCAN...")
    while time.monotonic() < deadline:
        for frame in frames:
            command(connection, frame, response_wait=0.04)
            sent += 1
            time.sleep(0.16)
    print(f"Transmission complete: {sent} acknowledged CAN FD frames.")


def receive_frames(connection, duration):
    deadline = time.monotonic() + duration
    print("Waiting for CAN FD frames sent by SavvyCAN...")
    connection.reset_input_buffer()
    while time.monotonic() < deadline:
        line = connection.read_until(b"\r")
        if line:
            print(line.decode("ascii", errors="replace").strip())


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=("send", "receive"))
    parser.add_argument(
        "--port",
        help="Unused peer port, for example COM4 or /dev/ttyACM1",
    )
    parser.add_argument("--duration", type=float, default=12.0)
    args = parser.parse_args()

    connection = find_available_port(args.port)
    print(f"Using {connection.port} at {SERIAL_BAUD} baud")
    try:
        open_can_fd(connection)
        if args.mode == "send":
            send_frames(connection, args.duration)
        else:
            receive_frames(connection, args.duration)
        command(connection, "C")
    finally:
        connection.close()


if __name__ == "__main__":
    main()
```

</details>

Puedes observar que el script escribe 24 tramas CAN‑FD en el dispositivo `/dev/ttyACM1`. `/dev/ttyACM0` aparece ocupado porque está siendo utilizado por SavvyCAN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_11.png" style={{width:800, height:'auto'}}/></div>

7. Puedes ver los datos de tramas CAN‑FD recibidos y analizados en el panel principal de SavvyCAN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.png" style={{width:800, height:'auto'}}/></div>

## Controlar un motor a través de CAN

El XIAO STM32C5 puede servir como placa principal de control para motores brushless de alta precisión con comunicación CAN. Es adecuado para aplicaciones prácticas en control de robots, control industrial y escenarios de control multimotor.

El siguiente ejemplo demuestra su capacidad de accionamiento controlando el motor DM4310.

:::note

Este ejemplo está construido con PlatformIO. Si eres nuevo en PlatformIO, consulta [Getting Started with PlatformIO For XIAO STM32C5](https://wiki.seeedstudio.com/es/xiao_stm32c5_getting_started/#getting-started-with-platformio)

:::

### Preparación de hardware

- 1 × XIAO STM32C5
- PC con cable Type‑C
- Fuente de alimentación de 24 V
- XT30 2+2 Power Separation Board
- Motor DM4310

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
   <th>DM4310</th>
   <th>XT30 2+2 Power Separation Board</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
            style={{width: 300, height: 'auto'}}
          />
        </div>
      </td>
         <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-100094243--seeed-gripper-01.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
            <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100045091-xt30-2_2-power-separationboard.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
         <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
   <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

### Programa de software

:::caution
Se requiere una fuente de alimentación de 24 V para el accionamiento del motor. ¡Utiliza una fuente de alimentación conforme para evitar riesgos para tu equipo y tu seguridad personal!
:::

1. Obtén el ID del motor. Utiliza el software Damiao host para PC para configurar: Motor CAN ID: `0x007`, Master ID: `0x017`. Consulta [Damiao 43 Series Motors Getting Started](https://wiki.seeedstudio.com/es/damiao_series/)

2. Flashea el programa mediante PlatformIO, o flashea el firmware de prueba precompilado:
    - **📄[Firmware]** [Firmware CAN-Driver-DM4310](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can_driver_dm4310_v1.1.uf2)
    - Consulta el enlace de GitHub para el código fuente.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-damiao-j4340P-2EC-v11-speed-fdcan2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Driver DM4310</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

3. Después de habilitar el motor, el DM‑J4310 recorre cíclicamente las velocidades objetivo `0 → 3 → 6 → 10 → 6 → 3 rad/s` cada 5 segundos. El LED integrado se enciende cuando la velocidad objetivo es distinta de cero y se apaga cuando es cero. Los datos de retroalimentación del motor se imprimen simultáneamente por el puerto serie.

:::tip
- Al accionar el motor, asegúrate de que CAN_H y CAN_L en el XIAO STM32C5 estén correctamente emparejados con CAN_H y CAN_L del dispositivo conectado. Un cableado incorrecto provocará un fallo de comunicación.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.gif" style={{width:400, height:'auto'}}/></div>

## Resumen

Siguiendo estos ejemplos, ahora deberías tener una comprensión básica de cómo utilizar las funciones de CAN‑FD en el XIAO STM32C5. La carga útil transmitida por CAN varía para diferentes casos de uso y depende de los requisitos funcionales. CAN y CAN‑FD se adoptan ampliamente en control industrial, inteligencia encarnada, control de robots, electrónica automotriz y muchos otros campos. ¡Diviértete construyendo proyectos interesantes con esta función y comparte tu trabajo en la comunidad de código abierto para que otros puedan descubrirlo, aprender de él y reutilizarlo!

## Fuente de referencia

- **[Community]** [Using CAN (bxCAN) in Normal mode with STM32 microcontrollers](https://community.st.com/stm32-mcus-60/using-can-bxcan-in-normal-mode-with-stm32-microcontrollers-part-1-151183)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
