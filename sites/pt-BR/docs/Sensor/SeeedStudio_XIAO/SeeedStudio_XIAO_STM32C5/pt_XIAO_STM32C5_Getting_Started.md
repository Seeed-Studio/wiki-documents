---
title: Introdução ao XIAO STM32C5
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - can fd
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_getting_started
sku: 100036669
last_update:
  date: 08/11/2026
  author: Zeller
createdAt: '2026-08-07'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:600, height:'auto'}}/></div>

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

## Visão geral

Conheça o primeiro XIAO com STM32. Construído em torno do STM32C5A3CG com um núcleo Arm Cortex-M33 de 144MHz, o XIAO STM32C5 traz conectividade CAN FD, 16MB de Flash externa e um IMU de seis eixos com aquecimento programável para o formato compacto do XIAO. Resistores de aquecimento dedicados ao redor do IMU permitem aquecimento controlado por firmware para projetos de robótica e detecção de movimento. Dois controladores CAN FD nativos, incluindo um canal com um transceptor TCAN3403-Q1 onboard, fornecem um ponto de partida para adaptadores USB‑para‑CAN, sensores conectados e projetos de controle de robôs. USB‑C e carregamento de bateria onboard suportam tanto o desenvolvimento em desktop quanto aplicações portáteis.

## Recursos

- **O primeiro XIAO com STM32**: Construído com o STM32C5A3CG, com um processador Arm Cortex-M33 de 144MHz, suporte a ponto flutuante e instruções DSP para controle embarcado e processamento de sensores.
- **Conectividade CAN FD integrada**: Dois controladores CAN FD nativos, com um canal conectado a um transceptor TCAN3403-Q1 onboard e pads CANH/CANL acessíveis. Adicione um transceptor externo para usar o segundo canal.
- **IMU de 6 eixos com aquecimento programável**: O acelerômetro e giroscópio LSM6DS3TR-C onboard são combinados com resistores de aquecimento dedicados ao redor do sensor. O aquecimento controlado por GPIO permite aquecimento programável e, com firmware de realimentação de temperatura, regulação de temperatura em malha fechada para ajudar a reduzir a deriva relacionada à temperatura em aplicações de robótica e detecção de movimento.
- **Flash externa de 16MB**: Armazene dados de aplicação, logs de sensores, arquivos de configuração e registros de mensagens CAN usando o firmware da aplicação.
- **Cristal externo para temporização de comunicação**: Um cristal externo de alta velocidade onboard fornece uma referência de clock para CAN FD e outras aplicações sensíveis à temporização.
- **USB‑C e carregamento de bateria**: Desenvolva via USB‑C ou construa dispositivos alimentados por bateria usando o circuito de carregamento de bateria de lítio onboard e pads de conexão de bateria.
- **Design compacto e fácil de integrar**: O formato XIAO e os pads de borda metalizados suportam prototipagem em breadboard com headers e integração em placas carrier personalizadas.

## Especificações

| Item                       | Especificação                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Produto                    | Seeed Studio XIAO STM32C5                                                                                             |
| Microcontrolador           | STMicroelectronics STM32C5A3CG                                                                                        |
| CPU                        | Arm Cortex-M33 de núcleo único, até 144MHz, com FPU e instruções DSP                                                  |
| Encapsulamento do MCU      | UFQFPN48                                                                                                              |
| Flash interna de programa  | 1MB                                                                                                                   |
| SRAM                       | 256KB                                                                                                                 |
| Flash externa              | 16MB                                                                                                                  |
| Controladores CAN          | 2 controladores CAN FD nativos                                                                                        |
| Transceptor CAN onboard    | 1 x TI TCAN3403-Q1                                                                                                    |
| Conexão de barramento CAN onboard | Pads CANH/CANL; use o GND da placa como referência de sinal                                                           |
| Segundo canal CAN          | Sinais digitais TX/RX; transceptor CAN externo necessário                                                             |
| Terminação CAN             | 120 ohms, habilitada por padrão; pode ser desconectada por meio de um jumper de solda cortável                       |
| Isolação CAN               | Sem isolamento galvânico onboard                                                                                      |
| IMU                        | STMicroelectronics LSM6DS3TR-C, acelerômetro de três eixos e giroscópio de três eixos                                 |
| Aquecimento do IMU         | Resistores de aquecimento dedicados ao redor do IMU com acionamento controlado por GPIO                              |
| Regulação de temperatura   | Aquecimento programável; regulação de ponto de ajuste em malha fechada requer realimentação de temperatura e firmware de aplicação adequado |
| Clock externo              | Cristal externo de alta velocidade onboard                                                                            |
| USB                        | USB‑C; USB 2.0 Full Speed, taxa de sinalização de 12Mbps                                                              |
| Nível lógico               | 3,3V                                                                                                                  |
| Alimentação                | Entrada de 5V via USB‑C ou bateria de lítio compatível através dos pads BAT                                          |
| Carregamento de bateria    | Circuito de carregamento onboard                                                                                      |
| Controles do usuário       | Botão de reset e botão de boot                                                                                        |
| Indicadores                | LED de usuário e indicador de carregamento                                                                            |
| Interface de depuração     | SWD                                                                                                                   |
| Fator de forma             | Módulo XIAO compacto com pads de borda metalizados                                                                    |

## Visão geral de hardware

<Tabs>
<TabItem value="XIAO STM32C5" label="XIAO STM32C5" default>

### XIAO STM32C5 - Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/XIAO STM32C5_Front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
### XIAO STM32C5 - Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/XIAO STM32C5_Back_1.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

## **Mapa de pinos**

| Pino / Sinal XIAO | Função          | Pino do chip | Funções alternativas | Descrição                                                     |
| :---------------: | :-------------: | :-------: | :-----------------: | :----------------------------------------------------------- |
| VBUS              | Alimentação     |           | USB 5V              | Entrada/saída de alimentação de 5V                           |
| GND               | Terra           |           |                     | Terra de alimentação                                          |
| 3V3 / 3.3V-OUT    | Alimentação     |           | VOUT_3V3            | Saída regulada de 3,3V                                       |
| D0                | Analógico       | PA0       | A0, ADC             | GPIO e entrada analógica                                     |
| D1                | Analógico       | PA1       | A1, ADC             | GPIO e entrada analógica                                     |
| D2                | Analógico       | PA2       | A2, ADC             | GPIO e entrada analógica                                     |
| D3                | Analógico       | PA3       | A3, ADC             | GPIO e entrada analógica                                     |
| D4                | I2C             | PB7       | I2C1_SDA            | GPIO e dados I2C                                             |
| D5                | I2C             | PB6       | I2C1_SCL            | GPIO e clock I2C                                             |
| D6                | UART            | PA9       | UART_TX             | GPIO e transmissão UART                                      |
| D7                | UART            | PA10      | UART_RX             | GPIO e recepção UART                                         |
| D8                | SPI             | PE2       | SPI_SCK             | GPIO e clock SPI                                             |
| D9                | SPI             | PB0       | SPI_MISO            | GPIO e entrada de dados SPI                                  |
| D10               | SPI             | PB15      | SPI_MOSI            | GPIO e saída de dados SPI                                    |
| D11               | CAN FD          | PB8       | FDCAN1_RX           | GPIO e recepção FDCAN1                                       |
| D12               | CAN FD          | PB9       | FDCAN1_TX           | GPIO e transmissão FDCAN1                                    |
| D13               | CAN FD          | PB5       | FDCAN2_RX           | GPIO e recepção do transceptor CAN onboard                   |
| D14               | CAN FD          | PB13      | FDCAN2_TX           | GPIO e transmissão do transceptor CAN onboard                |
| D15               | Controle CAN    | PB14      | CAN_STB             | Controla o modo standby do transceptor CAN onboard           |
| CAN_H             | Barramento CAN  |           | TCAN3403 CANH       | Barramento diferencial CAN FD alto                           |
| CAN_L             | Barramento CAN  |           | TCAN3403 CANL       | Barramento diferencial CAN FD baixo                          |
| CANFD2_TERM       | Terminação CAN  |           | JP1, 120 ohm        | Corte/abra para desabilitar o resistor de terminação de 120 ohms onboard |
| BAT+              | Alimentação da bateria |           | VBAT                | Terminal positivo para uma bateria Li-ion/LiPo de 3,7V       |
| BAT-              | Terra da bateria |           | GND                 | Terminal negativo da bateria                                 |
| BAT_EN            | Monitor de bateria | PA15      |                     | Habilita o circuito de medição de tensão da bateria          |
| BAT_READ          | Analógico       | PA4       | ADC                 | Lê a tensão da bateria; a entrada ADC é aproximadamente VBAT / 2 |
| SWCLK             | Depuração       | PA14      | SWD Clock           | Pad de clock do Serial Wire Debug                            |
| SWDIO             | Depuração       | PA13      | SWD Data            | Pad de dados do Serial Wire Debug                            |
| RST               | Sistema         | NRST      | STM32C5_RESET       | Pad de teste de reset por hardware                           |
| USB_D+            | USB             | PA12      | USB_DP              | Dados diferenciais USB 2.0 positivos                         |
| USB_D-            | USB             | PA11      | USB_DN              | Dados diferenciais USB 2.0 negativos                         |
| BOOT              | Sistema         | PH2-BOOT0 | STM32C5_BOOT        | Pad de teste de modo de boot e sinal do botão de boot        |
| CHARGE_LED        | Indicador       |           | Saída NCHG do carregador | LED vermelho de status de carregamento controlado pelo CI de carregamento |
| USER_LED          | Indicador GPIO  | PB12      | GPIO25 / User_LED   | LED verde de usuário; conectado em nível baixo ativo         |
| IMU_SDA           | IMU onboard     | PB4       | I2C2_SDA            | Dados I2C para o IMU LSM6DS3TR-C onboard                     |
| IMU_SCL           | IMU onboard     | PB3       | I2C2_SCL            | Clock I2C para o IMU LSM6DS3TR-C onboard                     |
| IMU_INT           | IMU onboard     | PC13      | IMU_INT1            | Saída de interrupção do IMU onboard                          |
| IMU_HEATER_PWM    | Aquecedor do IMU | PA8       | PWM                 | Controle PWM para o aquecedor de compensação de temperatura do IMU |

## Uso do Bootloader

O XIAO STM32C5 vem de fábrica com um bootloader compatível com UF2, destinado principalmente a atualizações de firmware. Antes de gravar um arquivo `.uf2`, pressione rapidamente duas vezes o botão Reset on‑board. Uma unidade de armazenamento em massa chamada **XIAOC5BOOT** será montada no seu PC. Em seguida, você pode copiar o arquivo de firmware para essa unidade para concluir a gravação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_disk_1.png" style={{width:400, height:'auto'}}/></div>

## Introdução ao PlatformIO

Esta seção demonstra o desenvolvimento e uso do XIAO STM32C5 acendendo o LED de usuário on‑board, utilizando a plataforma de desenvolvimento PlatformIO com o framework Zephyr RTOS.

### Preparação de Hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO STM32C5](https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html)
- 1 x Computador
- 1 x Cabo USB Tipo‑C

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
    </tr>
    <tr>
      <td>
       <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div>
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
    </tr>
  </table>
</div>

### Preparação de Software

**Passo 1.** Baixar o VS Code

Baixe o [VS Code](https://code.visualstudio.com/download) de acordo com o sistema que você está usando

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
**Passo 2.** Instalar a extensão PlatformIO

Abra o VSCode, clique em Extensions, depois pesquise por PlatformIO e selecione para instalar. Após a conclusão da instalação, reinicie o VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

**Passo 3.** Instalar o pacote de plataforma platform-seeedboards

As placas da série Seeed Studio XIAO usam uma plataforma personalizada do PlatformIO, portanto você precisa instalar manualmente o pacote de plataforma correspondente.

- Execute o seguinte comando para uma instalação nova:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- Se você já usou anteriormente placas da série Seeed Studio XIAO no PlatformIO, execute o comando abaixo para atualizar:


```bash
# for Windows
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"

# for macOS/Linux
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
``` 

:::tip

Se você quiser usar um projeto PlatformIO existente, substitua o conteúdo de **platformio.ini** como segue:

```ini
[env:seeed-xiao-stm32c5]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-stm32c5
```

:::

**Passo 4.** Criar um Novo Projeto

- Na interface do plugin PlatformIO, selecione criar um novo projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_1.png" style={{width:800, height:'auto'}}/></div>

- Dê um nome ao seu projeto, escolha **Seeed Studio XIAO STM32C5** como a placa alvo e configure o framework de desenvolvimento e o caminho de armazenamento do projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_2.png" style={{width:800, height:'auto'}}/></div>

:::tip

A criação do projeto pode levar algum tempo na primeira inicialização, aguarde pacientemente.

:::

### Compilar e Enviar

**Passo 1.** Escrever o Programa de Piscar o LED

O XIAO STM32C5 possui um LED de usuário mapeado para o GPIO PB12. O LED acende em nível lógico baixo; este exemplo o configura para piscar a cada 500 ms.

O projeto é composto por três arquivos principais:

- `main.c`: Programa principal que contém a lógica da aplicação.
- `app.overlay`: Arquivo Devicetree overlay para configuração de periféricos de hardware.
- `prj.conf`: Arquivo de configuração do projeto para habilitar os módulos necessários do Zephyr.

Siga os passos abaixo para acender o LED:

- Abra o seu projeto recém‑criado e crie o arquivo devicetree `app.overlay` dentro da pasta `zephyr`.

```overlay
/* USB CDC console and the user LED are configured by the board DTS. */
```

- Crie o arquivo de configuração `prj.conf` dentro da pasta `zephyr`.

```conf
# GPIO for LED control
CONFIG_GPIO=y
```

- Copie o código de referência mostrado abaixo para `main.c`.

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Blinky example for XIAO STM32C5 with TinyUF2 bootloader support.
 * Based on Zephyr samples/basic/blinky.
 *
 * The 1200-bps UF2 bootloader trigger is armed automatically by the
 * board support package — no code changes needed in this example.
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

#define SLEEP_TIME_MS 500

#define LED0_NODE DT_ALIAS(led0)

static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
	int ret;
	bool led_state = true;

	if (!gpio_is_ready_dt(&led)) {
		return 0;
	}

	ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	if (ret < 0) {
		return 0;
	}

	while (1) {
		ret = gpio_pin_toggle_dt(&led);
		if (ret < 0) {
			return 0;
		}

		led_state = !led_state;
		printk("LED state: %s\n", led_state ? "ON" : "OFF");
		k_msleep(SLEEP_TIME_MS);
	}

	return 0;
}
```

**Passo 2.** Compilar e Enviar o Programa

- Na barra de ferramentas inferior, acione a compilação do projeto com um clique.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_3.png" style={{width:800, height:'auto'}}/></div>

Como alternativa, você pode realizar a compilação via interface de linha de comando.

```bash
pio run -e seeed-xiao-stm32c5
```

- Enviar o firmware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4.png" style={{width:800, height:'auto'}}/></div>

Da mesma forma, o envio do firmware também pode ser concluído através da linha de comando.

```bash
pio run -e seeed-xiao-stm32c5 -t upload
```

- Resultado da Execução do Programa

O LED on‑board do XIAO STM32C5 pisca em um intervalo de 500 ms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

Enquanto isso, a porta serial exibe o estado ligado/desligado do LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_2.png" style={{width:600, height:'auto'}}/></div>

## Uso da Bateria

Um conector de bateria **BAT** é reservado na parte traseira do XIAO STM32C5 para alimentação usando uma bateria de íons de lítio de 3,7 V‑4,2 V.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_5.png" style={{width:600, height:'auto'}}/></div>

### Ler a Tensão da Bateria

O XIAO STM32C5 incorpora circuitos de detecção de tensão da bateria e de carregamento da bateria.

No circuito de detecção, **BAT_EN / PA15** habilita o chip TPS22916CNYFPR, enquanto **BAT_Reading / PA4** lê a tensão da bateria. São usados dois resistores divisores de tensão de 10 kΩ, portanto o valor medido é igual à metade da tensão real da bateria de íons de lítio.

O Charge_LED pisca durante o carregamento da bateria e apaga quando o carregamento é concluído.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_6.png" style={{width:550, height:'auto'}}/></div>

- Modifique o código de aplicação correspondente.

<details>

<summary>app.overlay</summary>

```overlay
/ {
	/* Expose the battery ADC input to the application. */
	zephyr,user {
		io-channels = <&adc1 4>;
	};
};

&adc1 {
	/* Add the battery input on PA4 (ADC1_IN4). */
	pinctrl-0 = <&adc1_in0_pa0 &adc1_in1_pa1 &adc1_in2_pa2
		     &adc1_in3_pa3 &adc1_in4_pa4>;

	channel@4 {
		reg = <4>;
		zephyr,gain = "ADC_GAIN_1";
		zephyr,reference = "ADC_REF_INTERNAL";
		zephyr,acquisition-time = <ADC_ACQ_TIME(ADC_ACQ_TIME_TICKS, 289)>;
		zephyr,resolution = <12>;
	};
};
```

</details>

<details>

<summary>prj.conf</summary>

```overlay
# Battery voltage measurement. USB CDC console support is supplied by the board.
CONFIG_ADC=y
CONFIG_GPIO=y
```

</details>

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Read the XIAO STM32C5 battery voltage once per second.
 * printk() output uses USB CDC;
 * BAT_Reading/PA4 is added by app.overlay. BAT_EN/PA15 and USB CDC are
 * supplied by the board devicetree.
 */

#include <zephyr/device.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
	!DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No battery ADC io-channel specified"
#endif

#define BATTERY_ADC_NODE        DT_PATH(zephyr_user)
#define BAT_EN_NODE             DT_ALIAS(baten)
#define BATTERY_ENABLE_DELAY_MS 5
#define ADC_AVG_SAMPLES         16
#define SAMPLE_PERIOD_MS        1000

static const struct adc_dt_spec battery_adc =
	ADC_DT_SPEC_GET_BY_IDX(BATTERY_ADC_NODE, 0);
static const struct gpio_dt_spec bat_en =
	GPIO_DT_SPEC_GET(BAT_EN_NODE, gpios);

int main(void)
{
	uint16_t raw;
	struct adc_sequence sequence = {
		.buffer = &raw,
		.buffer_size = sizeof(raw),
	};
	int err;

	if (!device_is_ready(battery_adc.dev) || !gpio_is_ready_dt(&bat_en)) {
		printk("Battery ADC hardware is not ready\n");
		return 0;
	}

	err = gpio_pin_configure_dt(&bat_en, GPIO_OUTPUT_ACTIVE);
	if (err) {
		printk("BAT_EN configure failed: %d\n", err);
		return 0;
	}

	k_msleep(BATTERY_ENABLE_DELAY_MS);

	err = adc_channel_setup_dt(&battery_adc);
	if (err) {
		printk("Battery ADC channel setup failed: %d\n", err);
		return 0;
	}

	err = adc_sequence_init_dt(&battery_adc, &sequence);
	if (err) {
		printk("Battery ADC sequence init failed: %d\n", err);
		return 0;
	}

	printk("Battery voltage monitor (USB CDC)\n");

	while (1) {
		uint32_t raw_sum = 0;
		uint16_t raw_avg;
		int32_t adc_mv;

		/* Discard the first conversion after the one-second idle period. */
		err = adc_read(battery_adc.dev, &sequence);
		for (int i = 0; !err && i < ADC_AVG_SAMPLES; i++) {
			err = adc_read(battery_adc.dev, &sequence);
			raw_sum += raw;
		}

		if (!err) {
			raw_avg = raw_sum / ADC_AVG_SAMPLES;
			adc_mv = raw_avg;
			err = adc_raw_to_millivolts_dt(&battery_adc, &adc_mv);
			if (err) {
				printk("Battery voltage conversion failed: %d\n", err);
			} else {
				/* The 1:1 divider halves the battery voltage. */
				printk("Battery: %d mV\n", adc_mv * 2);
			}
		} else {
			printk("Battery ADC read failed: %d\n", err);
		}

		k_msleep(SAMPLE_PERIOD_MS);
	}

	return 0;
}
```

</details>

- Resultado da leitura de tensão

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_6_1.png" style={{width:550, height:'auto'}}/></div>

## IMU

O XIAO STM32C5 possui um **[LSM6DS3TR‑C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf) sensor inercial de 6 eixos** integrado, que combina um acelerômetro de 3 eixos e um giroscópio de 3 eixos. Ele pode ser aplicado em detecção de atitude, reconhecimento de movimento, monitoramento de vibração e outros casos de uso.

Para mitigar o impacto da variação de temperatura ambiente sobre o desvio do sensor e a estabilidade das medições, a placa implementa um circuito de aquecimento com compensação ativa de temperatura. Resistores de aquecimento posicionados ao redor da IMU fornecem aquecimento uniforme para o sensor, e a potência de aquecimento pode ser ajustada por meio de sinais PWM. Combinado com as leituras internas de temperatura da IMU, o controle por software mantém o sensor operando em uma temperatura relativamente estável. Isso reduz a deriva de medição causada pela deriva de temperatura e melhora a consistência dos dados durante a operação de longo prazo e em condições de temperatura variável.

- Uso de referência: [XIAO STM32C5 IMU Usage](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_application/#imu-usage)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_7.png" style={{width:550, height:'auto'}}/></div>

## CAN FD

O XIAO STM32C5 possui dois controladores CAN FD. O FDCAN1 expõe pinos TX e RX em nível lógico e requer um transceptor CAN externo para conexão a um barramento CAN. O FDCAN2 está conectado ao transceptor integrado [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) e se conecta ao barramento por meio dos pads CAN_H e CAN_L. A placa também pode trocar quadros Classical CAN. No entanto, nós que suportam apenas Classical CAN não conseguem decodificar quadros CAN FD, portanto confirme que os nós ativos no barramento suportam CAN FD antes de transmitir tráfego FD. O CAN FD suporta cargas úteis de até 64 bytes e, quando a comutação de taxa de bits está habilitada, uma taxa de bits mais alta durante a fase de dados.

A placa possui um resistor de terminação de 120 Ω integrado e desconectável, habilitado por padrão. Mantenha-o habilitado quando o XIAO estiver em uma extremidade física do barramento CAN e essa extremidade não tiver outro terminador. Desabilite-o quando o XIAO for um nó intermediário ou já houver outro terminador instalado na mesma extremidade. Certifique-se de que a extremidade oposta do barramento também esteja devidamente terminada. O transceptor suporta modo de espera (standby) para reduzir o consumo de energia quando a comunicação CAN não é necessária.

- Uso de referência: [XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_canfd_usage/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

## Recursos

**Projeto de Hardware**
- **📄[Datasheet]** [STM32C5A3CG](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[Datasheet]** [LSM6DS3TR-C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf)
- **📄[Datasheet]** [TCAN3403D4BQ1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf)
- **📄[Esquemático]** [XIAO STM32C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/Seeed-Studio-XIAO-STM32C5-v1.0.pdf)
- **🗃️[Arquivos de projeto de PCB]** 
  - [ XIAO STM32C5 Projeto KiCad](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO_STM32C5_v1.0_SCH&PCB.zip)
  - [XIAO STM32C5 Projeto Eagle](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO_STM32C5_v1.0_SCH&PCB.zip)
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [XIAO Series Pegadas KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip)
  - [XIAO Series Símbolos SCH KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip)
- **📄[Diagrama de pinagem]** [XIAO STM32C5 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO-STM32C5-pinout_sheet.xlsx)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
