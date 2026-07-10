---
title: Introdução ao XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_getting_started
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-13'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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

## Introdução

O Seeed Studio XIAO nRF54LM20A Sense é uma placa de desenvolvimento sem fio compacta e de ultrabaixo consumo de energia, construída em torno do SoC nRF54LM20A da Nordic Semiconductor. Ela combina um processador Arm Cortex-M33 de 128 MHz, 512 KB de RAM, 2 MB de NVM integrada, conectividade sem fio multiprotocolo de 2,4 GHz, IMU onboard, microfone digital, flash externo de 8 MB, conector de antena IPEX e PMIC nPM1300 para aplicações avançadas de IoT alimentadas por bateria, vestíveis, sensoriamento inteligente e IA de borda.

### Especificações

<table>
  <thead>
    <tr>
      <th>Nome do Produto</th>
      <th>Seeed Studio XIAO nRF54LM20A</th>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Processador</strong></td>
      <td colspan="2">Arm® Cortex®-M33 128 MHz &amp; Coprocessador RISC-V 128 MHz</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">512KB</td>
    </tr>
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB de memória não volátil (NVM)</td>
    </tr]
    <tr>
      <td><strong>Flash Externa</strong></td>
      <td colspan="2">8MB de flash externa onboard</td>
    </tr>
    <tr>
      <td><strong>PMIC / Bateria</strong></td>
      <td colspan="2">PMIC nPM1300 para regulação de energia e carregamento de bateria</td>
    </tr>
    <tr>
      <td><strong>Interface</strong></td>
      <td colspan="2">
        28x pinos GPIO<br/>
        9x pinos analógicos<br/>
        1x I2C<br/>
        1x UART<br/>
        1x SPI<br/>
        1x NFC<br/>
        1x SHPHLD
      </td>
    </tr>
    <tr>
      <td><strong>Onboard</strong></td>
      <td>
        1x LED de usuário (R/G/B 3 cores)<br/>
        1x LED de carga (indicador de carregamento da bateria)<br/>
        1x botão de reset<br/>
        1x botão de usuário<br/>
        1x conector IPEX4 (para antena externa)
      </td>
      <td>
        1x LED de usuário (R/G/B 3 cores)<br/>
        1x LED de carga (indicador de carregamento da bateria)<br/>
        1x botão de reset<br/>
        1x botão de usuário<br/>
        1x conector IPEX4 (para antena externa)<br/>
        1x IMU de 6 eixos<br/>
        1x microfone PDM
      </td>
    </tr>
    <tr>
      <td><strong>Conectividade sem Fio</strong></td>
      <td colspan="2">
        Bluetooth LE 6.0 (inclui Channel Sounding)<br/>
        Bluetooth Mesh<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Protocolos proprietários de 2,4 GHz
      </td>
    </tr>
    <tr>
      <td><strong>Entrada de Energia</strong></td>
      <td colspan="2">
        Type-C: 5V<br/>
        Bateria: 3,7V
      </td>
    </tr>
    <tr>
      <td><strong>Modo de Baixo Consumo (3,7V@2A)</strong></td>
      <td>/</td>
      <td>
        Light-Sleep: ~9,96µA<br/>
        Deep-Sleep (Sistema OFF): ~4,76µA<br/>
        Deep-Sleep (Sistema OFF, despertar por GRTC): ~4,92µA<br/>
        Ship-Mode: 0,33µA
      </td>
    </tr>
    <tr>
      <td><strong>Compatibilidade de Software</strong></td>
      <td colspan="2">
        Nordic nRF Connect SDK (baseado em Zephyr RTOS)<br/>
        PlatformIO (baseado em Zephyr RTOS)
      </td>
    </tr>
    <tr>
      <td><strong>Temperatura de Operação</strong></td>
      <td colspan="2">-20°C a 70°C</td>
    </tr>
    <tr>
      <td><strong>Dimensões</strong></td>
      <td colspan="2">21 x 17,8mm</td>
    </tr>
  </tbody>
</table>

### Recursos

- **SoC poderoso com conectividade e segurança avançadas**

  O Seeed Studio XIAO nRF54LM20A Sense é uma placa de desenvolvimento sem fio compacta e de ultrabaixo consumo de energia, alimentada pelo SoC nRF54LM20A da Nordic Semiconductor. Ela apresenta um processador Arm Cortex-M33 de 128 MHz, 512 KB de RAM, 2 MB de NVM integrada, um coprocessador RISC-V de 128 MHz, conectividade sem fio multiprotocolo de 2,4 GHz, IMU onboard, microfone digital, flash externa de 8MB, conector de antena IPEX e PMIC Nordic nPM1300 para gerenciamento eficiente de energia. Com suporte a Bluetooth LE, Bluetooth Channel Sounding, Bluetooth Mesh, Thread, Zigbee, Matter e protocolos proprietários de 2,4 GHz de até 4 Mbps, esta placa foi criada para produtos conectados de próxima geração. Os sensores de movimento e áudio onboard a tornam ideal para vestíveis, sensoriamento inteligente, TinyML, reconhecimento de gestos, dispositivos acionados por voz e aplicações de IoT alimentadas por bateria.

- **Eficiência de ultrabaixo consumo**

  Baseado no Nordic nRF54LM20A e no PMIC nPM1300, o XIAO nRF54LM20A Sense atinge uma corrente de deep sleep medida de apenas 4,76 µA sob alimentação BAT. Combinado com o PMIC nPM1300 e sua corrente BAT de 0,33 µA em Ship Mode, em operação sem fio ativa ele registra uma corrente média de 3,87 mA com uma entrada de bateria simulada de 3,7 V e potência de TX ajustada para +8 dBm, tornando a placa ideal para aplicações de sensoriamento alimentadas por bateria de longa duração, vestíveis e dispositivos de IoT sempre ligados.

- **Experiência de desenvolvimento simplificada**

  Suporte completo para Nordic nRF Connect SDK e PlatformIO (Zephyr) permite fluxos de trabalho eficientes de desenvolvimento embarcado. (Observação: Arduino IDE atualmente não é suportado)

## Visão geral de hardware

<Tabs>
<TabItem value="XIAO nRF54LM20A" label="XIAO nRF54LM20A" default>

### Frente do XIAO nRF54LM20A

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/XIAO_nRF54LM20A_f.png" style={{width:800, height:'auto'}}/></div>

### Verso do XIAO nRF54LM20A

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/XIAO_nRF54LM20A_back.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="XIAO nRF54LM20A Sense" label="XIAO nRF54LM20A Sense">

### Frente do XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png" style={{width:800, height:'auto'}}/></div>

### Verso do XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## **Mapa de pinos**

| Pino XIAO      | Função         | Pino do Chip                       | Descrição                                                                   |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **Pinos de Energia** |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | Entrada/Saída de energia de 5V                                             |
| GND            | GND            | -                                 | Terra                                                                       |
| 3V3            | 3V3-OUT        | -                                 | Saída de energia de 3,3V                                                   |
| BAT+           | BAT+           | -                                 | Entrada de bateria (monitorada pelo nPM1300 via I²C)                       |
| BAT-           | BAT-           | -                                 | Terminal negativo da bateria                                               |
| SHPHLD         | SHPHLD         | -                                 | Controle de modo Ship/Hibernate do PMIC (estado de envio de ultrabaixo consumo) |
| **Pinos de Sistema e Controle** |        |                                   |                                                                             |
| RESET          | RESET          | -                                 | Reset da placa                                                              |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | Clock de fio serial (para nRF54 e SAMD11)                                  |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | Dados de fio serial (para nRF54 e SAMD11)                                  |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | Reset do coprocessador SAMD11                                              |
| **Pinos de Usuário e LED** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | Entrada do botão de usuário                                                |
| -              | RGB-B          | P1.23                             | Canal azul do LED RGB onboard                                              |
| -              | RGB-G          | P1.24                             | Canal verde do LED RGB onboard                                             |
| -              | RGB-R          | P1.22                             | Canal vermelho do LED RGB onboard                                          |
| **Pinos de Entrada Analógica (ADC)** |      |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | Entrada analógica 0 / GPIO                                                 |
| A1             | AIN1           | P1.31                             | Entrada analógica 1 / GPIO                                                 |
| A2             | AIN2           | P1.30                             | Entrada analógica 2 / GPIO                                                 |
| A3             | AIN3           | P1.29                             | Entrada analógica 3 / GPIO                                                 |
| A7             | AIN7           | P1.03                             | Entrada analógica 7 / GPIO                                                 |
| **Pinos I2C**  |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | Linha de dados I2C (IMU e periféricos)                                     |
| SCL            | I2C_SCL        | P1.07                             | Linha de clock I2C (IMU e periféricos)                                     |
| -              | BAT_SDA        | P1.18                             | SDA I2C do monitor de bateria (nPM1300)                                    |
| -              | BAT_SCL        | P1.17                             | SCL I2C do monitor de bateria (nPM1300)                                    |
| **Pinos UART** |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | Transmissão UART                                                            |
| RX             | UART_RX        | P1.09                             | Recepção UART                                                               |
| **Pinos SPI**  |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI Master Out Slave In                                                     |
| MISO           | SPI_MISO       | P1.05                             | SPI Master In Slave Out                                                     |
| SCK            | SPI_SCK        | P1.04                             | Clock serial SPI                                                            |
| **Pinos de Periféricos Onboard** |      |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | Linha de dados do microfone                                                |
| -              | MIC_CLK        | P1.13                             | Linha de clock do microfone                                                |
| -              | IMU_SDA        | P0.08                             | IMU I2C SDA (IMU onboard)                                                  |
| -              | IMU_SCL        | P0.07                             | IMU I2C SCL (IMU onboard)                                                  |
| -              | IMU_CS         | P3.12                             | Chip Select da IMU                                                          |
| -              | IMU_INT1       | P0.06                             | Interrupção 1 da IMU                                                        |
| -              | NFC            | P1.02 / P1.01                     | Pinos de antena NFC                                                         |
| -              | GRTC           | P0.04 / P0.05                     | Pinos RTC de uso geral                                                      |

## Introdução ao uso com PlatformIO

Nesta seção, vamos guiá-lo para começar rapidamente com o XIAO nRF54LM20A por meio do efeito de piscar em várias cores de um LED RGB.
Conclua as preparações de hardware e software abaixo para configurar seu XIAO para o desenvolvimento subsequente.

### Preparação de hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x Computador
- 1 x Cabo USB Tipo-C

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
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
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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

### Baixar o VS Code

Baixe de acordo com o sistema que você está usando o [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Instalar a extensão PlatformIO

Abra o VSCode, clique em Extensions, depois pesquise por PlatformIO e selecione para instalar. Após a conclusão da instalação, reinicie o VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Instalar o pacote de plataforma platform-seeedboards

As placas da série Seeed Studio XIAO usam uma plataforma personalizada do PlatformIO, portanto você precisa instalar manualmente o pacote de plataforma correspondente.

- Execute o seguinte comando para uma instalação nova:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- Se você já usou anteriormente placas da série Seeed Studio XIAO no PlatformIO, execute o comando abaixo para atualizar:


```bash
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/gett_start_1.png" style={{width:800, height:'auto'}}/></div>
<br/>


:::tip

Se você quiser usar um projeto PlatformIO existente, substitua o conteúdo de **platformio.ini** como segue:

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
```

:::

### Criar novo projeto

1. Abra a extensão PlatformIO e selecione **Create New Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Defina o nome do projeto, selecione a placa de desenvolvimento, o framework e o caminho de armazenamento dos arquivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Após a conclusão da criação, aparecerá um aviso para abrir o workspace. Clique em OK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. Navegue até a pasta do projeto. Os arquivos são armazenados no diretório padrão se você não tiver especificado um caminho personalizado.

- Para padrão do Windows:

```bash
<path>: C:\Users\your_name\Documents\PlatformIO\Projects
```

- Para padrão do Mac / Linux:

```bash
<path>: ~/Documents/PlatformIO/Projects
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_5.png" style={{width:800, height:'auto'}}/></div>

### Adicionar o programa Blink

Este tutorial é desenvolvido com base no Zephyr RTOS. O projeto é composto por três arquivos principais:

- `main.c`: Programa principal que contém a lógica da aplicação.
- `app.overlay`: Arquivo de overlay do Devicetree para configuração de periféricos de hardware.
- `prj.conf`: Arquivo de configuração do projeto para habilitar os módulos necessários do Zephyr.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_6.png" style={{width:800, height:'auto'}}/></div>

1. Adicione o programa **main.c**

<details>

<summary>main.c</summary>

```c

/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <nrfx_power.h>

#define PWM_PERIOD_NS 1000000U
#define STEP_TIME_MS 500

#define LED_R_NODE DT_ALIAS(pwm_led1)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led0)

#if !DT_NODE_EXISTS(LED_R_NODE) || !DT_NODE_EXISTS(LED_G_NODE) || !DT_NODE_EXISTS(LED_B_NODE)
#error "This RGB blink demo expects pwm-led0/pwm-led1/pwm-led2 devicetree aliases"
#endif

static const struct pwm_dt_spec led_r = PWM_DT_SPEC_GET(LED_R_NODE);
static const struct pwm_dt_spec led_g = PWM_DT_SPEC_GET(LED_G_NODE);
static const struct pwm_dt_spec led_b = PWM_DT_SPEC_GET(LED_B_NODE);

struct rgb_step {
	uint8_t r;
	uint8_t g;
	uint8_t b;
	uint32_t delay_ms;
};

static int pwm_set_u8(const struct pwm_dt_spec *led, uint8_t level)
{
	uint32_t duty_ns = (PWM_PERIOD_NS * (uint32_t)level) / 255U;

	return pwm_set_dt(led, PWM_PERIOD_NS, duty_ns);
}

static int rgb_set(uint8_t r, uint8_t g, uint8_t b)
{
	int ret;

	ret = pwm_set_u8(&led_r, r);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_g, g);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_b, b);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

int main(void)
{
	int ret;

#if defined(CONFIG_NRFX_POWER)
	nrfx_power_constlat_mode_request();
#endif

	if (!device_is_ready(led_r.dev) || !device_is_ready(led_g.dev) || !device_is_ready(led_b.dev)) {
		return -1;
	}

	static const struct rgb_step demo[] = {
		{ 255, 0, 0, STEP_TIME_MS },
		{ 0, 255, 0, STEP_TIME_MS },
		{ 0, 0, 255, STEP_TIME_MS },
		{ 255, 255, 0, STEP_TIME_MS },
		{ 0, 255, 255, STEP_TIME_MS },
		{ 255, 0, 255, STEP_TIME_MS },
		{ 255, 255, 255, STEP_TIME_MS },
		{ 0, 0, 0, STEP_TIME_MS },
	};

	while (1) {
		for (size_t i = 0; i < ARRAY_SIZE(demo); i++) {
			ret = rgb_set(demo[i].r, demo[i].g, demo[i].b);
			if (ret < 0) {
				return ret;
			}
			k_msleep(demo[i].delay_ms);
		}
	}

	return 0;
}
```

</details>

2. Adicione o arquivo app.overlay

O arquivo de overlay do Devicetree não existe no exemplo em branco recém-criado. Você precisa adicioná-lo no diretório zephyr.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_7.png" style={{width:800, height:'auto'}}/></div>

<details>

<summary>app.overlay</summary>

```dts
/*
 * Device tree overlay for XIAO nRF54LM20A RGB LED PWM demo.
 *
 * PWM20 peripheral is used for RGB LED control:
 *   - Channel 0: P1.22 (Blue LED)  -> pwm_led0
 *   - Channel 1: P1.23 (Red LED)   -> pwm_led1
 *   - Channel 2: P1.24 (Green LED) -> pwm_led2
 */

&pwm20 {
	status = "okay";
};

/ {
	pwmleds {
		compatible = "pwm-leds";

		pwm_led0: pwm_led_0 {
			pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Blue LED";
		};

		pwm_led1: pwm_led_1 {
			pwms = <&pwm20 1 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Red LED";
		};

		pwm_led2: pwm_led_2 {
			pwms = <&pwm20 2 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Green LED";
		};
	};
};

/ {
	aliases {
		pwm-led0 = &pwm_led0;
		pwm-led1 = &pwm_led1;
		pwm-led2 = &pwm_led2;
	};
};
```

</details>

3. Modifique `prj.conf` e habilite as configurações correspondentes.

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

### Compilar e enviar o programa

Duas formas de compilação e envio são apresentadas abaixo.

1. Compilar e enviar via botão

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_8.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Compilar e enviar via linha de comando

```bash
pio run -e seeed-xiao-nrf54lm20a -t upload -v
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_9.png" style={{width:800, height:'auto'}}/></div>

### Observar o resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:800, height:'auto'}}/></div>

## Antena Bluetooth

Esta placa usa uma antena Bluetooth externa. Para garantir uma melhor qualidade de sinal Bluetooth e aprimorar sua experiência de uso do Bluetooth, é recomendável instalar uma antena Bluetooth.
O método de conexão é mostrado abaixo:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 800, height: 'auto'}}
  />
</div>

## Uso da bateria

O XIAO nRF54LM20A é capaz de usar uma bateria de lítio de 3,7 V como entrada de alimentação. Você pode consultar o diagrama a seguir para o método de fiação.

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 600, height: 'auto'}}
  />
</div>

:::caution
Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem.
Se a bateria estiver com carga, nunca a solde diretamente na placa, pois isso pode queimar a placa de circuito. Causar curto-circuito enquanto o circuito estiver energizado representa um risco significativo; é recomendável usar um adaptador.

:::

**Instruções sobre o uso de baterias:**

1. Utilize baterias qualificadas que atendam às especificações.
2. O XIAO pode ser conectado ao seu computador por meio de cabo de dados enquanto utiliza a bateria; fique tranquilo, pois o XIAO possui um chip de proteção de circuito integrado, sendo seguro.



### Detecção de Tensão da Bateria

O XIAO nRF54LM20A integra um recurso de detecção de tensão da bateria que se concentra em gerenciar de forma eficiente as medições de energia da bateria usando o load switch nPM1300-CAA. Este guia focará em analisar a implementação de software da detecção de bateria **(especialmente o código main.c)** e orientá-lo sobre como implantar e usar esse recurso facilmente em um ambiente PlatformIO, evitando a complexidade do Zephyr NCS SDK.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_10.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquemático de Detecção da Bateria</em></p>
</div>

Função do chip nPM1300-CAA:

O nPM1300-CAA é um CI de gerenciamento de energia (PMIC) altamente integrado que substitui a função simples de load switch do TPS22916. Ele não apenas controla a comutação da tensão da bateria para monitoramento de baixo consumo, como também integra carregamento, regulação e medição precisa do nível de carga (por meio de tensão, corrente e temperatura) para maximizar a vida útil da bateria do nRF54LM20A.



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
O exemplo a seguir funciona tanto para PlatformIO quanto para nRF Connect SDK. Ele pode ser usado diretamente no PlatformIO, enquanto o SDK exige a adição manual de arquivos. Consulte este [link](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#placa-alimentada-por-bateria)
:::

## Visão geral dos periféricos

A circuitaria periférica desta placa inclui um IMU e um microfone. Você pode ver suas localizações no diagrama abaixo:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="Localizações do IMU e do microfone"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

O XIAO nRF54LM20A Sense possui um IMU LSM6DS3TR-C com um acelerômetro de 3 eixos e um giroscópio de 3 eixos.

- [Uso do IMU do XIAO nRF54LM20A](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_onboard/#imu)

## MIC

O XIAO nRF54LM20A Sense é equipado com um microfone digital MSM261DGT006 para captura de áudio.
- [Uso do MIC do XIAO nRF54LM20A](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_onboard/#mic)

### FAQ

**P1: O que devo fazer se encontrar erros de build após modificar os arquivos de configuração?**

Se você já tiver feito o build do projeto e depois modificou arquivos de configuração (como `prj.conf`, `app.overlay` ou `CMakeLists.txt`), é recomendável limpar o cache de build antes de compilar novamente. Isso ajuda a evitar erros de compilação causados por arquivos de cache antigos ou corrompidos.

Execute o seguinte comando:

```shell
pio run -t clean
```

---

**P2: Por que recebo `zsh: command not found: openocd` após a instalação? (macOS)**

Esse problema geralmente ocorre porque o diretório do executável do OpenOCD não foi adicionado ao `PATH` do sistema. Você pode adicioná-lo permanentemente ao arquivo `~/.zshrc` usando os seguintes comandos.

> **Observação:** Esta solução é apenas para **macOS**.

```shell
echo 'export PATH="$HOME/Library/Application Support/Seeed/OpenOCD/tool-openocd/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
openocd --version
```

Se o número da versão for exibido com sucesso, a configuração foi concluída.

---

**P3: O que devo fazer se o menu suspenso de projetos do PlatformIO falhar após instalar a plataforma Seeed Studio XIAO várias vezes?**



Se você instalou diferentes versões da plataforma Seeed Studio XIAO do PlatformIO várias vezes, pacotes de plataforma duplicados ou desatualizados podem causar conflitos de versão e impedir que os projetos do PlatformIO sejam carregados corretamente.

Recomenda-se remover todos os pacotes antigos da plataforma Seeed e deixar o PlatformIO baixar automaticamente a versão oficial mais recente.

Execute o seguinte comando:

```shell
rm -rf ~/.platformio/packages/platform-seeed-* ~/.platformio/packages/framework-seeed-*
```

Após a limpeza, reabra o PlatformIO e faça o build do seu projeto novamente.

## Recursos

### Seeed Studio XIAO nRF54LM20A

**Projeto de hardware**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [Esquemático do XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[Arquivos de projeto de PCB]** [Projeto KiCad do XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]**[Planilha de pinagem do XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Dimension in DXF](1) -->

### Seeed Studio XIAO nRF54LM20A Sense

**Projeto de hardware**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [Esquemático do XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[Arquivos de projeto de PCB]** [Projeto KiCad do XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[Bibliotecas de projeto de PCB]**
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]**[Planilha de pinagem do XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Sense Dimension in DXF](1) -->


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
