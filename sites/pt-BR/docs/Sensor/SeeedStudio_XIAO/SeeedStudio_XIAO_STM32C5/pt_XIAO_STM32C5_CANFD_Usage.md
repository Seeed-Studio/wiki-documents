---
title: Uso de CANFD no XIAO STM32C5
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
url: https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_canfd_usage/
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
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Introdução ao barramento CAN

CAN (Controller Area Network) é um barramento de comunicação serial desenvolvido pela Bosch a partir de 1983 e apresentado publicamente em 1986. Inicialmente projetado para eletrônica automotiva, agora é amplamente utilizado em automação industrial, robótica, dispositivos médicos e sistemas embarcados.

A camada de enlace de dados CAN e a camada física de alta velocidade são definidas pela série de normas ISO 11898. Em termos do modelo OSI, o CAN especifica principalmente as duas camadas a seguir:

- **Camada física**: Define cabeamento, sinalização elétrica, temporização de bits e conexões do transceptor.
- **Camada de enlace de dados**: Define formatos de quadros, arbitragem do barramento, detecção de erros e confinamento de falhas.

Os principais recursos do CAN incluem:

1. **Comunicação multi-mestre**: Quando o barramento está ocioso, qualquer nó pode tentar transmitir sem depender de varredura por um mestre dedicado.
2. **Transmissão por broadcast baseada em mensagens**: Os quadros carregam identificadores de mensagem em vez de endereços de origem e destino. Cada nó usa filtros para determinar quais mensagens aceitar.
3. **Arbitragem não destrutiva**: Quando vários nós transmitem simultaneamente, seus identificadores são comparados bit a bit, começando pelo bit mais significativo. No primeiro bit diferente, um `0` dominante substitui um `1` recessivo, dando ao quadro com o identificador numericamente menor maior prioridade. Os nós que perdem a arbitragem param de transmitir sem corromper o quadro vencedor.
4. **Tratamento robusto de erros**: Controladores CAN podem detectar erros de bit, stuffing, CRC, formato e ACK. Contadores de erro e retransmissão automática melhoram a confiabilidade da comunicação.
5. **Baixo custo de fiação e componentes**: O CAN de alta velocidade normalmente requer apenas um par trançado, um transceptor para cada nó e um resistor de terminação em cada extremidade do barramento.

### Sinalização física CAN

O CAN de alta velocidade normalmente usa um par trançado composto por `CAN_H` e `CAN_L`. O receptor determina o estado do barramento a partir da tensão diferencial entre as duas linhas de sinal:

`V_diff = V(CAN_H) - V(CAN_L)`

- **Bit recessivo `1`**: CAN_H e CAN_L estão em níveis de tensão semelhantes, produzindo uma tensão diferencial próxima de 0 V. Para transceptores CAN de alta velocidade comuns de 5 V, ambas as linhas ficam tipicamente próximas de 2,5 V.
- **Bit dominante `0`**: A tensão de CAN_H sobe enquanto a tensão de CAN_L cai. Para transceptores CAN de alta velocidade comuns de 5 V, os níveis típicos são aproximadamente 3,5 V e 1,5 V, respectivamente, produzindo uma tensão diferencial de cerca de 2 V.

Esses são valores de tensão típicos. Os valores reais dependem do transceptor, da tensão de alimentação, da carga do barramento e da tensão de modo comum. Consulte o datasheet do transceptor para os intervalos de operação especificados.

Em um barramento CAN, um `0` dominante tem precedência sobre um `1` recessivo. Essa característica permite a arbitragem bit a bit não destrutiva e possibilita que os nós receptores confirmem um quadro recebido corretamente transmitindo um bit dominante no slot de ACK.

### Quadro de dados CAN clássico

O seguinte quadro de dados Classical CAN 2.0A é usado como exemplo: identificador 0x00A, DLC 1, dado 0x81 e CRC-15/CAN 0x18DA. Os rótulos de campo, bits lógicos e formas de onda CAN_H/CAN_L estão alinhados por coluna.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
- Campos do quadro de dados

| Campo | Comprimento | Descrição |
| --- | ---: | --- |
| SOF | 1 bit | Um `0` dominante marca o início de um quadro e sincroniza os nós. |
| Identifier | 11 bits | Identifica a mensagem e determina sua prioridade de arbitragem. |
| RTR | 1 bit | `0` dominante para um quadro de dados; `1` recessivo para um quadro remoto. |
| IDE | 1 bit | `0` dominante para um quadro padrão; `1` recessivo para um quadro estendido. |
| r0 | 1 bit | Bit reservado transmitido como `0` dominante. |
| DLC | 4 bits | Valores de `0` a `8` especificam um comprimento de carga útil de `0` a `8` bytes. No CAN clássico, valores de `9` a `15` também representam uma carga útil de 8 bytes. |
| Data | 0–8 bytes | Contém a carga útil especificada pelo DLC. |
| CRC sequence | 15 bits | Permite que os nós receptores detectem erros de transmissão. |
| CRC delimiter | 1 bit | Fixo em `1` recessivo. |
| ACK slot | 1 bit | O transmissor envia um `1` recessivo; nós que recebem o quadro sem erro o sobrescrevem com um `0` dominante. |
| ACK delimiter | 1 bit | Fixo em `1` recessivo. |
| EOF | 7 bits | Sete bits recessivos consecutivos marcam o fim do quadro. |
| Intermission | 3 bits | Três bits recessivos após o quadro; fazem parte do espaço entre quadros, e não do próprio quadro. |

### Como um quadro CAN é transmitido

1. Após detectar que o barramento está ocioso, o nó transmissor inicia o quadro com o bit SOF.
2. Se vários nós começarem a transmitir simultaneamente, eles comparam o estado do barramento bit a bit durante o campo de arbitragem. Um nó que transmite um `1` recessivo mas detecta um `0` dominante perde a arbitragem e para de transmitir.
3. O nó vencedor continua transmitindo os campos de controle e dados. Os nós receptores filtram o quadro pelo seu identificador e determinam o comprimento da carga útil a partir do DLC.
4. Os nós receptores removem os bits de stuffing e verificam o CRC. Se o formato do quadro e o CRC forem válidos, eles transmitem um `0` dominante no slot de ACK.
5. O nó transmissor conclui a transmissão após detectar o ACK. Se nenhum ACK for detectado, ele relata um erro de ACK e normalmente tenta a retransmissão de acordo com a configuração do controlador.

### Bit stuffing

Do SOF até o final da sequência de CRC, o transmissor insere um bit de stuffing complementar após cinco bits consecutivos com o mesmo valor lógico. O receptor remove esses bits de stuffing automaticamente.

O bit stuffing fornece bordas de sinal para sincronização e auxilia na detecção de erros. Bits de stuffing não pertencem a nenhum campo do quadro e não são incluídos no DLC ou nos comprimentos de campo especificados. Portanto, o tempo real de transmissão depende da taxa de bits, do comprimento da carga útil e do número de bits de stuffing inseridos.

## Introdução ao CAN FD

O CAN clássico suporta uma carga útil máxima de 8 bytes e uma taxa de bits nominal de até 1 Mbit/s. Para suportar transferências de dados maiores, a Bosch introduziu o CAN FD (CAN with Flexible Data-rate) em 2012.

As principais melhorias incluem:

- Aumento da carga útil máxima de **8 bytes** para **64 bytes** por quadro.
- Uso do bit BRS para alternar para uma taxa de bits mais alta durante a fase de dados e retornar à taxa de bits nominal antes do campo de ACK.
- Uso de sequências CRC de 17 bits ou 21 bits, dependendo do comprimento da carga útil, e introdução de um novo mapeamento de DLC para comprimento de carga útil.
- Manutenção dos identificadores de mensagem e do mecanismo de arbitragem bit a bit do CAN clássico durante a fase de arbitragem.

A taxa de bits alcançável na fase de dados do CAN FD depende do controlador, transceptor, precisão do clock, comprimento do cabo, número de nós e topologia da rede. Taxas de bits comuns na fase de dados incluem 2 Mbit/s, 5 Mbit/s e superiores.

## Usando CAN FD com PlatformIO

O XIAO STM32C5 fornece uma interface CAN FD com um transceptor e resistor de terminação onboard, permitindo conexão direta por meio de CAN_H e CAN_L.

Este exemplo usa PlatformIO e o framework Zephyr com duas placas XIAO STM32C5:

- **Placa A** transmite quadros CAN FD.
- **Placa B** recebe e processa os quadros e, em seguida, controla o LED de usuário onboard de acordo com os dados recebidos.

:::note

Este exemplo usa PlatformIO. Se você não estiver familiarizado com ele, consulte [Introdução ao PlatformIO para XIAO STM32C5](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_getting_started/#getting-started-with-platformio).

:::

1. Verifique os recursos de pinos de hardware para o periférico CAN.

O XIAO STM32C5 fornece duas interfaces CAN FD. Uma expõe sinais TX e RX em nível lógico para conexão a um transceptor CAN externo. A outra está conectada ao transceptor CAN FD onboard [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) e fornece acesso direto ao barramento por meio de CAN_H e CAN_L.

O circuito CAN FD onboard inclui um resistor de terminação de 120 Ω desconectável. Habilite o resistor quando a placa estiver localizada em qualquer extremidade do barramento e desconecte-o quando a placa for um nó intermediário ou quando outro resistor de 120 Ω já estiver instalado na extremidade XIAO do barramento. O transceptor também suporta modo de espera para reduzir o consumo de energia quando a comunicação CAN não é necessária.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

Os pads CAN_H e CAN_L na parte de trás podem ser usados diretamente. No entanto, se pads circulares forem usados, é necessário empregar um chip de conversão CAN independente e resistores de terminação correspondentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_3.png" style={{width:700, height:'auto'}}/></div>

2. Modifique o arquivo devicetree `app.overlay`. No XIAO STM32C5, o nó `canfd2` é utilizado. Os pinos de transmissão/recepção CAN são FDCAN2_RX‑PB5 e FDCAN2_TX‑PB13, com CAN_STB‑PB14. Os nós alias correspondentes no devicetree são `fdcan2_rx_pb5`, `fdcan2_tx_pb13` e `can_phy0`.

```dts
/* FDCAN2, transceiver standby, and USB CDC are configured by the board DTS. */

```

3. Modifique o arquivo de configuração e adicione as configurações relevantes para `fdcan2`.

```conf
# CAN FD: 500 kbit/s arbitration and 2 Mbit/s data phases.
CONFIG_CAN=y
CONFIG_CAN_FD_MODE=y
CONFIG_CAN_DEFAULT_BITRATE=500000
CONFIG_CAN_DEFAULT_BITRATE_DATA=2000000

# Keep application status output enabled; the board routes it to USB CDC.
CONFIG_PRINTK=y
```

4. Escreva o programa `main.c`. Este exemplo usa duas placas XIAO STM32C5. A Placa A atua como transmissora para enviar dados no protocolo CAN. A Placa B funciona como receptora; ela recebe e analisa as mensagens CAN e, em seguida, acende o LED on‑board.

<details>

<summary>Programa de envio CANFD</summary>

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

<summary>Programa de recepção CAN</summary>

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

5. Os resultados são mostrados na figura abaixo.

- Conecte CAN_H a CAN_H e CAN_L a CAN_L entre as Placas A e B. Se elas usarem fontes de alimentação separadas, conecte também os seus terras. A Placa B pisca o LED após receber e validar um quadro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_4.gif" style={{width:500, height:'auto'}}/></div>

- Verifique os dados transmitidos e analisados usando o monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_5.png" style={{width:1000, height:'auto'}}/></div>

## Ponte USB para CAN

A CAN Bridge transforma o XIAO STM32C5 em um adaptador USB‑CAN. Ela encaminha mensagens bidirecionalmente entre o PC e o barramento CAN/CAN‑FD, permitindo que o PC envie comandos de controle, monitore o status dos dispositivos e registre o tráfego do barramento. Casos de uso típicos incluem depuração de motores de junta de robôs, análise de ECU automotiva e de redes veiculares, testes de integração para servos industriais e sensores CAN, e monitoramento de status de BMS. No desenvolvimento de robôs, por exemplo, o PC pode enviar comandos de habilitação, posição e velocidade para os controladores de motor das juntas via CAN Bridge, enquanto recebe informações de ângulo, corrente, temperatura e falhas.

Este tutorial fornece duas implementações: `gs_usb` e `slcan`. Ambas oferecem funções semelhantes no lado CAN; as principais diferenças estão no transporte de dados entre host e placa, nas plataformas suportadas e na capacidade CAN‑FD.

### gs_usb vs slcan

`gs_usb` é um protocolo de comunicação para adaptadores USB‑CAN. A placa transfere mensagens CAN via USB para o PC. No Linux, o driver `gs_usb` no kernel a registra diretamente como uma interface SocketCAN, como `can0`. Ele oferece alta taxa de transferência com suporte a CAN‑FD, adequado para comunicação em alta velocidade, monitoramento de barramento, testes automatizados e depuração de longo prazo em Linux.

`slcan` é um método de comunicação que encapsula mensagens CAN com comandos ASCII Lawicel. Neste projeto, a placa se comunica com o PC pela porta serial USB CDC. A placa aparece como uma porta COM no Windows e `/dev/ttyACMx` no Linux. Ela pode funcionar com SavvyCAN, python‑can ou `slcand`. Essa abordagem apresenta um protocolo simples, acesso flexível e boa compatibilidade multiplataforma.

### Trabalhando com gs_usb

Esta seção demonstra a funcionalidade usando firmware pré‑compilado. O código‑fonte pode ser baixado do repositório `platform‑seeedboards`.

:::tip

- A placa possui um terminador de 120 Ω integrado. Quando ele está habilitado e a placa está em uma das extremidades do barramento, não é necessário resistor adicional nessa extremidade. Certifique‑se de que a outra extremidade também esteja terminada; desabilite o resistor integrado para um nó intermediário.
- Esta seção é baseada na distribuição Linux Ubuntu 22.04 LTS.

:::

- **📄[Firmware]** [Firmware CAN-Bridge-gsusb](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-bridge-gsusb.uf2)
- Consulte o link do GitHub para o código‑fonte.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-can-bridge-gsusb" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> zephyr-can-bridge-gsusb</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

1. Pressione duas vezes o botão Reset no XIAO STM32C5 para entrar no modo bootloader. Baixe e copie o arquivo de firmware para a unidade de armazenamento em massa `XIAOC5BOOT`. Para testar o desempenho de transmissão e recepção CAN‑FD, grave o firmware em duas placas XIAO STM32C5 para verificação.

:::tip
Consulte o diagrama de fiação para as conexões. [Using CANFD With PlatformIO](#Using-CANFD-With-PlatformIO)
:::

2. Conecte a placa ao seu host Linux, abra um terminal e instale os pacotes de software necessários. Os dispositivos CAN serão então enumerados, normalmente `can0` e `can1`.

```bash
# Install can-utils
sudo apt update
sudo apt install can-utils

# Load gs_usb kernel module
sudo modprobe gs_usb
ip -brief link show type can
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_6.png" style={{width:700, height:'auto'}}/></div>

3. Configure as interfaces CAN

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

4. Envie e monitore o tráfego CAN‑FD

- Abra outro terminal para receber dados na interface `can1`.

```bash
candump -x can1
```

- Em outro terminal, envie um quadro CAN‑FD de 12 bytes com BRS habilitado pela interface `can0`.

```bash
cansend can0 123##1000102030405060708090A0B
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_7.png" style={{width:700, height:'auto'}}/></div>

5. Verifique com script

- Instale o módulo `python‑can`

```bash
sudo apt update
sudo apt install python3-can
```

- Execute no lado receptor

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

- Execute no lado do transmissor

```bash
python3 canfd_2m_test.py send \
  --interface socketcan \
  --channel can0 \
  --count 10 \
  --interval 0.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_7_1.png" style={{width:700, height:'auto'}}/></div>

### Trabalhando com slcan

Esta seção demonstra a funcionalidade usando firmware pré‑compilado. O código‑fonte pode ser baixado do repositório `platform‑seeedboards`.

:::tip

- O XIAO STM32C5 já possui um resistor de terminação CAN de 120 Ω embutido e habilitado por padrão, portanto você não precisa soldar um resistor extra entre os pads CAN_H e CAN_L. Ao usar duas placas XIAO, o resistor embutido em cada placa termina uma extremidade do barramento.
- Esta seção é baseada na distribuição Linux Ubuntu 22.04 LTS.

:::

- **📄[Firmware]** [Firmware CAN-Bridge-slcan](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-bridge-slcan.uf2)
- Consulte o link do GitHub para o código‑fonte.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-can-bridge-slcan" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> can-bridge-slcan</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

1. Pressione duas vezes o botão Reset no XIAO STM32C5 para entrar no modo bootloader. Baixe e copie o arquivo de firmware para a unidade de armazenamento em massa `XIAOC5BOOT`. Use duas placas XIAO STM32C5 com o firmware gravado ou um XIAO STM32C5 mais outro dispositivo receptor compatível com slcan.
2. Conecte a placa ao seu host Linux e abra um terminal. Localize os dispositivos seriais em `/dev/ttyACM*`, normalmente `ttyACM0` e `ttyACM1`.

```bash
ls /dev/ttyACM*
```

<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_8.png" style={{width:800, height:'auto'}}/></div>
<br/>

3. Instale o [SavvyCAN](https://github.com/collin80/SavvyCAN/releases). Baixe a versão V220 ou mais recente e, em seguida, estabeleça uma conexão via SavvyCAN.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/collin80/SavvyCAN/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> SavvyCAN</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

:::tip

- Para sistemas Linux, o pacote `libfuse2` é necessário antes do uso.

```bash
sudo apt update
sudo apt install libfuse2
```

:::

- Este exemplo usa a versão V220. Execute o aplicativo conforme mostrado abaixo no Linux:

```bash
# For Linux
sudo chmod +x SavvyCAN-7c576c5-x86_64.AppImage
./SavvyCAN-7c576c5-x86_64.AppImage

# On Windows, directly launch the executable SavvyCAN.exe
```

4. Vá para **Connection → Open Connection Window**. Clique em **Add New Device Connection**. Defina o tipo de conexão como **LAWICEL / SLCAN Serial**. Selecione `ttyACM0` para Serial Port. Defina Serial Port Speed como `115200`, CAN Bus Speed como `500000 bit/s`. Habilite **CAN‑FD** e defina a taxa de dados CAN‑FD como `2000000 bit/s`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_9.png" style={{width:400, height:'auto'}}/></div>

5. Após a configuração, o status da conexão indicará se a conexão foi bem‑sucedida. Recomenda‑se abrir o console no canto superior direito para visualizar os logs, verificar se os parâmetros correspondem às suas configurações e, em seguida, salvar a configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_10.png" style={{width:800, height:'auto'}}/></div>

6. Abra um novo terminal e execute o script de teste. O script detectará automaticamente os dispositivos seriais `/dev/ttyACM*` não utilizados e transmitirá dados CAN‑FD.

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

Você pode observar que o script grava 24 quadros CAN‑FD no dispositivo `/dev/ttyACM1`. `/dev/ttyACM0` aparece ocupado porque está sendo utilizado pelo SavvyCAN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_11.png" style={{width:800, height:'auto'}}/></div>

7. Você pode visualizar os dados de quadros CAN‑FD recebidos e analisados no painel principal do SavvyCAN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.png" style={{width:800, height:'auto'}}/></div>

## Acionar um motor via CAN

O XIAO STM32C5 pode servir como placa‑controladora principal para motores brushless de alta precisão com comunicação CAN. Ele é adequado para aplicações práticas em controle de robôs, controle industrial e cenários de controle de múltiplos motores.

O exemplo a seguir demonstra sua capacidade de acionamento controlando o motor DM4310.

:::note

Este exemplo é construído com PlatformIO. Se você é novo em PlatformIO, consulte [Getting Started with PlatformIO For XIAO STM32C5](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_getting_started/#getting-started-with-platformio)

:::

### Preparação de hardware

- 1 × XIAO STM32C5
- PC com cabo Type‑C
- Fonte de alimentação de 24 V
- Placa de Separação de Energia XT30 2+2
- Motor DM4310

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
   <th>DM4310</th>
   <th>Placa de Separação de Energia XT30 2+2</th>
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
                  Adquira agora 🖱️
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
                  Adquira agora 🖱️
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
                  Adquira agora 🖱️
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
É necessária uma fonte de alimentação de 24 V para acionar o motor. Use uma fonte de alimentação em conformidade para evitar riscos ao seu equipamento e à sua segurança pessoal!
:::

1. Obtenha o ID do motor. Use o software Damiao host para PC para configurar: Motor CAN ID: `0x007`, Master ID: `0x017`. Consulte [Damiao 43 Series Motors Getting Started](https://wiki.seeedstudio.com/pt-br/damiao_series/)

2. Grave o programa via PlatformIO ou grave o firmware de teste pré‑compilado:
    - **📄[Firmware]** [Firmware CAN-Driver-DM4310](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can_driver_dm4310_v1.1.uf2)
    - Consulte o link do GitHub para o código‑fonte.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-damiao-j4340P-2EC-v11-speed-fdcan2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Driver DM4310</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

3. Após a habilitação do motor, o DM‑J4310 percorre ciclicamente as velocidades alvo `0 → 3 → 6 → 10 → 6 → 3 rad/s` a cada 5 segundos. O LED on‑board acende quando a velocidade alvo é diferente de zero e apaga quando é zero. Os dados de feedback do motor são impressos simultaneamente pela porta serial.

:::tip
- Ao acionar o motor, certifique‑se de que CAN_H e CAN_L no XIAO STM32C5 estejam corretamente correspondidos com CAN_H e CAN_L do dispositivo conectado. Fiação incorreta resultará em falha de comunicação.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.gif" style={{width:400, height:'auto'}}/></div>

## Resumo

Seguindo estes exemplos, você agora deve ter uma compreensão básica de como usar os recursos de CAN‑FD no XIAO STM32C5. A carga útil transmitida via CAN varia para diferentes casos de uso e depende dos requisitos funcionais. CAN e CAN‑FD são amplamente adotados em controle industrial, inteligência incorporada, controle de robôs, eletrônica automotiva e muitos outros campos. Divirta‑se criando projetos interessantes com esse recurso e compartilhe seu trabalho na comunidade de código aberto para que outros possam descobrir, aprender e reutilizar!

## Fonte de referência

- **[Community]** [Using CAN (bxCAN) in Normal mode with STM32 microcontrollers](https://community.st.com/stm32-mcus-60/using-can-bxcan-in-normal-mode-with-stm32-microcontrollers-part-1-151183)

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
