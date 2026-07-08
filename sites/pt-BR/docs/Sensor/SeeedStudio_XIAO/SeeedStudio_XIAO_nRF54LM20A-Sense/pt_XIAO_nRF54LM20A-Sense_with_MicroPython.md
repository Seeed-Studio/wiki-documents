---
title: XIAO nRF54LM20A Sense com MicroPython
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_started/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_micropython
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-06-15'
updatedAt: '2026-06-22'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_micropython/
---

# Seeed Studio XIAO nRF54LM20A Sense com MicroPython

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com suporte para emissão de código nativo para trechos de código com requisitos críticos de desempenho. Ele fornece um subconjunto dos recursos principais do Python 3.6+, otimizados para microcontroladores e sistemas com recursos limitados. Ele é diferente do CPython, e você pode ler mais sobre as diferenças na página [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences).

## Usando MicroPython com o XIAO nRF54LM20A Sense

Em seguida, vou guiá-lo sobre como usar o **MicroPython** no **XIAO nRF54LM20A Sense** e programá-lo com o [Thonny IDE](https://thonny.org/), com base no sistema operacional Windows.

### Preparação de hardware

Antes de começar, você precisa preparar uma placa de desenvolvimento XIAO nRF54LM20A Sense.


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

### Instalar o [Thonny IDE](https://thonny.org/)

Escolha a versão apropriada para instalação. Aqui, estou instalando em um sistema Windows, então selecionei a versão para Windows.

Siga as instruções para a versão desejada do Python.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Em seguida, basta seguir as etapas padrão para configuração.

### Implantando o firmware MicroPython

A seguir, vamos guiá-lo sobre como implantar o firmware MicroPython no XIAO nRF54LM20A Sense.

:::tip

Antes de gravar o firmware, conecte o XIAO nRF54LM20A Sense ao seu computador

:::


1. Baixar o pacote compactado do firmware


<div class="xiao_nrf54lm20a_flash.zip.zip" style={{textAlign: 'center'}}>
    <a class="xiao_nrf54lm20a_flash.zip.zip" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/tools/xiao_nrf54lm20a_flash_package.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Repositório GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

2. Descompactar a pasta

A pasta precisa ser descompactada em qualquer diretório, e o conteúdo dos seguintes arquivos aparecerá

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/1.1.png" style={{width:400, height:'auto'}}/></div>

3. Usar um script para gravar o firmware MicroPython

- Para Windows, clique com o botão direito na pasta extraída para abrir um terminal PowerShell e execute o script de gravação. Após a execução correta do script, os resultados de saída serão exibidos como na figura a seguir

```bash
.\flash.bat
```


- Para Mac/Linux

```bash
cd ~/xiao_nrf54lm20a_flash

sed -i '' $'s/\r$//' xiao_nrf54lm20a_flash.sh

chmod +x xiao_nrf54lm20a_flash.sh
./xiao_nrf54lm20a_flash.sh
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/2.png" style={{width:800, height:'auto'}}/></div>

### Testar o efeito da gravação

Este capítulo orienta principalmente sobre como configurar o Thonny IDE



1. Abra o Thonny IDE, clique no canto inferior direito para se preparar para selecionar Configure interpreter

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/3.png" style={{width:800, height:'auto'}}/></div>

2. Selecione **MicroPython (generic)**, escolha a **Porta** correspondente com base no dispositivo e clique em OK

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/4.png" style={{width:800, height:'auto'}}/></div>

3. Após a conexão bem-sucedida, ficará como mostrado na figura abaixo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/5.png" style={{width:800, height:'auto'}}/></div>

4. Em File -> New, crie um novo arquivo e faça um teste de salvamento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/6.png" style={{width:800, height:'auto'}}/></div>

5. Após gravar o firmware, escreva um programa em Python para fazer o LED RGB-B piscar com uma frequência de a cada 0,5 segundos

```py
from machine import Pin
import time

led_r = Pin(("gpio1", 22), Pin.OUT)
led_g = Pin(("gpio1", 24), Pin.OUT)
led_b = Pin(("gpio1", 23), Pin.OUT)

led_r.value(1)
led_g.value(1)
led_b.value(1)

while True:
    led_b.value(0)          
    time.sleep_ms(500)     

    led_b.value(1)         
    time.sleep_ms(500)      
```

6. Clique no botão no canto superior esquerdo para executar o programa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/7.png" style={{width:800, height:'auto'}}/></div>

- O efeito do programa é mostrado na figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/12.gif" style={{width:800, height:'auto'}}/></div>

## Digital

Os pinos digitais são usados principalmente para o controle liga-desliga de sensores e atuadores externos, por meio da saída de níveis lógicos alto e baixo. Combinado com a placa de expansão Grove Base for XIAO e módulos periféricos Grove padrão, esta seção demonstra como usar pinos digitais no XIAO nRF54LM20A Sense com MicroPython.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A Sense, o **D0 (P1.0)** pode ser selecionado como o pino de controle para o **Grove-Button**, e o **D1 (P1.31)** pode ser selecionado como o pino de controle para o **Grove-Piezo Buzzer**.

:::tip

- Para o pinout do XIAO nRF54LM20A Sense, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver os detalhes.

:::

```python
"""
Grove Button (D0 / P1.0) + Grove Piezo Buzzer (D1 / P1.31) - Digital mode
Button pressed → Buzzer ON; Button released → Buzzer OFF
"""

import time
from boards.xiao import XiaoPin

BUTTON = 0   # D0  → P1.0 (Grove Button, onboard pull-down)
BUZZER = 1   # D1  → P1.31 (Grove Piezo Buzzer)

try:
    button = XiaoPin(BUTTON, XiaoPin.IN)
    buzzer = XiaoPin(BUZZER, XiaoPin.OUT)
    buzzer.value(0)
    print("Digital demo started. Press the button to activate the buzzer.")

    while True:
        val = button.value()
        buzzer.value(val)
        time.sleep(0.01)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    buzzer.value(0)
```

**Explicação do código:**

1. **Importações e definições de pinos:** `XiaoPin` de `boards.xiao` fornece controle de GPIO. `BUTTON = 0` mapeia para D0 (P1.0), `BUZZER = 1` mapeia para D1 (P1.31).
2. **Inicialização:** O pino do botão é configurado como entrada (o Grove Button possui um resistor pull-down integrado — nível ALTO quando pressionado). O pino do buzzer é configurado como saída, inicializado em nível BAIXO (desligado).
3. **Loop principal:** Lê continuamente o estado do botão e o escreve diretamente no buzzer. Quando o botão é pressionado (ALTO), o buzzer liga; quando solto (BAIXO), o buzzer desliga. Uma pausa de 10 ms evita o loop ocupado.
4. **Limpeza:** O bloco `finally` garante que o buzzer seja desligado quando o programa terminar.

### Resultado

Após executar o programa, pressione o botão e o buzzer irá emitir um bipe.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM alterna rapidamente os níveis do pino em uma frequência fixa e ajusta dinamicamente o ciclo de trabalho, fornecendo sinais analógicos equivalentes para os periféricos. É amplamente utilizado para controle preciso de ângulo de servomotores e ajuste suave de brilho de LEDs.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A Sense, **D0 (P1.0)** pode ser selecionado como o pino de controle para o **Grove-Servo**.

:::tip

- Para o pinout do XIAO nRF54LM20A Sense, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver detalhes.

:::

```python
"""
Servo control on D0 (P1.0) via PWM (50 Hz).
Sweeps 0 → 180° and back.
"""

import time
from boards.xiao import XiaoPWM

SERVO_PIN = 0             # D0 → P1.0
FREQ = 50                 # Standard servo: 50 Hz
PERIOD_NS = 20_000_000    # 20 ms period in nanoseconds

# Standard servo: 0.5 ms → 0°, 2.5 ms → 180°
MIN_NS = 500_000
MAX_NS = 2_500_000

STEP_MS = 30              # 30 ms per degree step

try:
    servo = XiaoPWM(SERVO_PIN)
    servo.init(freq=FREQ, duty_ns=MIN_NS)
    print("PWM servo demo started on D0 (P1.0).")

    while True:
        # 0° → 180°
        for angle in range(0, 181):
            pulse = MIN_NS + int((angle / 180.0) * (MAX_NS - MIN_NS))
            servo.duty_ns(pulse)
            print("Angle: %d deg" % angle)
            time.sleep_ms(STEP_MS)

        # 180° → 0°
        for angle in range(180, -1, -1):
            pulse = MIN_NS + int((angle / 180.0) * (MAX_NS - MIN_NS))
            servo.duty_ns(pulse)
            print("Angle: %d deg" % angle)
            time.sleep_ms(STEP_MS)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    servo.deinit()
```

**Explicação do código:**

1. **Importações e constantes:** `XiaoPWM` fornece saída PWM. Servos de hobby padrão operam a 50 Hz com uma largura de pulso de 0,5–2,5 ms correspondente à rotação de 0–180°.
2. **Inicialização:** O canal PWM é inicializado em D0 com frequência de 50 Hz. O ciclo de trabalho inicial é definido para a largura de pulso mínima (posição de 0°).
3. **Loop principal:** Dois loops aninhados varrem o servo de 0° a 180° e depois de volta. O ângulo é convertido em largura de pulso em nanossegundos por interpolação linear. O ângulo atual é impresso no console.
4. **Limpeza:** `servo.deinit()` libera o recurso PWM no bloco `finally`.

### Resultado

Após a gravação do firmware, o servo gira de 0° a 180° a uma velocidade de 33 radianos por segundo e depois gira de volta para 0°. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

Enquanto isso, o ângulo atual do servo será impresso via porta serial USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/13.png" style={{width:800, height:'auto'}}/></div>

## Analógico

A entrada analógica é baseada em um Conversor Analógico-digital (ADC) e é usada principalmente para capturar sinais contínuos de tensão analógica de sensores externos. Os valores digitais brutos de amostragem podem ser mapeados para valores reais de medição de engenharia usando algoritmos de conversão lineares ou não lineares.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A Sense, **D0 (P1.0, AIN0)** é usado como pino de entrada do ADC. O valor do ADC é lido e impresso via porta serial USB a cada 500 ms.

:::tip

- Para o pinout do XIAO nRF54LM20A Sense, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver detalhes.

:::

```python
"""
Read ADC on D0 (P1.0 / AIN0) and print raw value every 500 ms.
"""

import time
from boards.xiao import XiaoADC

ADC_PIN = 0   # D0 → P1.0 (AIN0)

try:
    adc = XiaoADC(ADC_PIN)
    print("ADC demo started on D0 (P1.0 / AIN0).")

    while True:
        raw = adc.read_uv()
        voltage = raw / 1_000_000.0
        print("ADC raw: %d uV  |  Voltage: %.3f V" % (raw, voltage))
        time.sleep(0.5)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

**Explicação do código:**

1. **Importações:** `XiaoADC` de `boards.xiao` fornece funcionalidade de ADC. `ADC_PIN = 0` mapeia para D0 (P1.0 / AIN0).
2. **Inicialização:** `XiaoADC(ADC_PIN)` configura o pino para conversão analógico-digital.
3. **Loop principal:** `adc.read_uv()` retorna a leitura do ADC em microvolts (µV). O valor é convertido para volts para exibição. Tanto as leituras brutas em µV quanto em volts são impressas a cada 500 ms.
4. **Tratamento de erros:** `try/except/finally` garante um desligamento adequado.

### Resultado

Após gravar o programa, insira o Grove-Capacitive Soil Moisture Sensor em plantas de vaso domésticas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
Abra o assistente de porta serial no seu computador e observe os valores de saída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/9.png" style={{width:800, height:'auto'}}/></div>

:::tip

Tabela de leitura de referência de tensão
| Status     | Tensão de saída do sensor | Valor bruto ADC esperado|
| -------------- | -------------- | ---------------- |
| No ar (seco) | ~2.0–2.4V      | ~3400–4095       |
| Em solo úmido       | ~1.3–1.8V      | ~2200–3000       |
| Totalmente imerso em água   | ~0.8–1.2V      | ~1365–2048       |

:::

:::caution

Devido a diferenças individuais nos componentes, as medições de módulos diferentes no mesmo ambiente podem variar.

:::

## UART

O Receptor/Transmissor Assíncrono Universal (UART) é um protocolo padrão de comunicação serial assíncrona. Ele não requer sinais de clock externos para sincronização e realiza a transmissão e recepção de dados com base na taxa de baud predefinida por ambas as partes. Um link de dados full‑duplex pode ser estabelecido simplesmente conectando de forma cruzada os pinos TX e RX.

### Preparação de hardware


<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Adaptador de módulo CH340G USB-para-Serial TTL</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o mapeamento de pinos do XIAO nRF54LM20A Sense, **D6 (P1.08)** e **D7 (P1.09)** são usados como pinos TX e RX para comunicação UART a 115200 baud.

:::tip

- Para o mapeamento de pinos do XIAO nRF54LM20A Sense, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#visão-geral-do-hardware) para ver detalhes.

:::

```python
import time
from machine import UART
from boards.xiao_nrf54lm20a import xiao_nrf54lm20a as xiao

uart_id = xiao.uart("uart1")   # → "uart21"

uart = None
try:
    uart = UART(uart_id, baudrate=115200)
    print("UART demo started.")

    uart.write("========================================\r\n")
    uart.write("  UART Demo for XIAO nRF54LM20A Sense\r\n")
    uart.write("========================================\r\n")
    uart.write("Pin Configuration:\r\n")
    uart.write("  TX: D6 (P1.08)\r\n")
    uart.write("  RX: D7 (P1.09)\r\n")
    uart.write("  Baud Rate: 115200\r\n")
    uart.write("\r\nType something and press Enter to see it echoed.\r\n\r\n")

    heartbeat_count = 0
    last_heartbeat = time.ticks_ms()

    while True:
        if uart.any():
            data = uart.read()
            if data:
                uart.write(data)

        now = time.ticks_ms()
        if time.ticks_diff(now, last_heartbeat) >= 5000:
            last_heartbeat = now
            heartbeat_count += 1
            uart.write("\r\n[Heartbeat #%d]\r\n" % heartbeat_count)
            print("Heartbeat #%d" % heartbeat_count)

        time.sleep_ms(10)

except KeyboardInterrupt:
    print("\nStopped by user")
except Exception as e:
    print("\nError: %s" % e)
finally:
    if uart is not None:
        uart.deinit()
```

**Explicação do código:**

1. **Importações e mapeamento de pinos:** `machine.UART` fornece acesso ao hardware UART. `xiao.pin(n)` retorna a tupla de porta e pino para um determinado número de pino digital a partir da definição da placa.
2. **Inicialização:** A UART 1 é configurada a 115200 baud com TX em D6 (P1.08) e RX em D7 (P1.09). Uma mensagem de boas‑vindas é enviada na inicialização.
3. **Loop principal:** Os dados recebidos são ecoados de volta. Uma mensagem de heartbeat é enviada a cada 5 segundos para confirmar que a UART ainda está em execução.
4. **Limpeza:** `uart.deinit()` libera o hardware UART no bloco `finally`.

### Resultado

1. Faça a fiação de acordo com a tabela abaixo:

| XIAO nRF54LM20A Sense | CH340 |
| --------------------- | ----- |
| VBUS                  | 5V    |
| GND                   | GND   |
| D6 (P1.08) - TX       | RX    |
| D7 (P1.09) - RX       | TX    |

2. Abra o software de monitoramento de porta serial no seu computador. As informações de UART configuradas são impressas na inicialização. Por padrão, a string `[Heartbeat #N] UART running...` é impressa a cada 5 segundos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/10.png" style={{width:600, height:'auto'}}/></div>

## I2C

I2C é um protocolo síncrono de comunicação de dados half‑duplex. Ele permite a conexão de múltiplos dispositivos por meio de endereçamento através da linha de clock SCL e da linha de dados SDA, e é comumente usado para ler dados de sensores como IMUs e sensores de temperatura/umidade, ou para saída de exibição em OLED.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Placa base de expansão Seeed Studio para XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o mapeamento de pinos do XIAO nRF54LM20A Sense, **D4 (P1.03)** e **D5 (P1.07)** são configurados respectivamente como pinos I2C SDA e SCL. Este exemplo controla um display OLED SSD1306 128×64 via I2C.

:::tip

- Para o mapeamento de pinos do XIAO nRF54LM20A Sense, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#visão-geral-do-hardware) para ver detalhes.

:::

<details>

<summary>oled.py</summary>

```python
"""
SSD1306 128x64 OLED display via I2C on XIAO nRF54LM20A Sense.
SDA: D4 (P1.03), SCL: D5 (P1.07)
"""

import time
from boards.xiao import XiaoI2C

SDA = 4          # D4 → P1.03
SCL = 5          # D5 → P1.07
I2C_BUS = "i2c0"
FREQ = 400_000   # 400 kHz

# --- SSD1306 I2C address and command definitions ---
SSD1306_I2C_ADDR = 0x3C
SSD1306_SET_CONTRAST = 0x81
SSD1306_DISPLAY_ALL_ON_RESUME = 0xA4
SSD1306_DISPLAY_ALL_ON = 0xA5
SSD1306_NORMAL_DISPLAY = 0xA6
SSD1306_INVERT_DISPLAY = 0xA7
SSD1306_DISPLAY_OFF = 0xAE
SSD1306_DISPLAY_ON = 0xAF
SSD1306_SET_DISPLAY_OFFSET = 0xD3
SSD1306_SET_COM_PINS = 0xDA
SSD1306_SET_VCOM_DETECT = 0xDB
SSD1306_SET_DISPLAY_CLOCK_DIV = 0xD5
SSD1306_SET_PRECHARGE = 0xD9
SSD1306_SET_MULTIPLEX = 0xA8
SSD1306_SET_LOW_COLUMN = 0x00
SSD1306_SET_HIGH_COLUMN = 0x10
SSD1306_SET_START_LINE = 0x40
SSD1306_MEMORY_MODE = 0x20
SSD1306_COLUMN_ADDR = 0x21
SSD1306_PAGE_ADDR = 0x22
SSD1306_COM_SCAN_INC = 0xC0
SSD1306_COM_SCAN_DEC = 0xC8
SSD1306_SEG_REMAP = 0xA0
SSD1306_CHARGE_PUMP = 0x8D

# Display dimensions
SSD1306_WIDTH = 128
SSD1306_HEIGHT = 64
SSD1306_PAGES = 8

# Basic 8x8 font data
font_data = {
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'A': [0x18,0x24,0x42,0x7E,0x42,0x42,0x42,0x00],
    'B': [0x7C,0x42,0x42,0x7C,0x42,0x42,0x7C,0x00],
    'C': [0x3C,0x42,0x40,0x40,0x40,0x42,0x3C,0x00],
    'D': [0x78,0x44,0x42,0x42,0x42,0x44,0x78,0x00],
    'E': [0x7C,0x40,0x40,0x78,0x40,0x40,0x7C,0x00],
    'F': [0x7C,0x40,0x40,0x78,0x40,0x40,0x40,0x00],
    'G': [0x3C,0x42,0x40,0x4E,0x42,0x42,0x3C,0x00],
    'H': [0x44,0x44,0x44,0x7C,0x44,0x44,0x44,0x00],
    'I': [0x38,0x10,0x10,0x10,0x10,0x10,0x38,0x00],
    'J': [0x1C,0x08,0x08,0x08,0x08,0x48,0x30,0x00],
    'K': [0x44,0x48,0x50,0x60,0x50,0x48,0x44,0x00],
    'L': [0x40,0x40,0x40,0x40,0x40,0x40,0x7C,0x00],
    'M': [0x42,0x66,0x5A,0x42,0x42,0x42,0x42,0x00],
    'N': [0x42,0x62,0x52,0x4A,0x46,0x42,0x42,0x00],
    'O': [0x3C,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'P': [0x7C,0x42,0x42,0x7C,0x40,0x40,0x40,0x00],
    'Q': [0x3C,0x42,0x42,0x42,0x4A,0x44,0x3A,0x00],
    'R': [0x7C,0x42,0x42,0x7C,0x48,0x44,0x42,0x00],
    'S': [0x3C,0x42,0x40,0x3C,0x02,0x42,0x3C,0x00],
    'T': [0x7C,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    'U': [0x42,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'V': [0x42,0x42,0x42,0x42,0x42,0x24,0x18,0x00],
    'W': [0x42,0x42,0x42,0x42,0x5A,0x66,0x42,0x00],
    'X': [0x42,0x24,0x18,0x18,0x18,0x24,0x42,0x00],
    'Y': [0x44,0x44,0x28,0x10,0x10,0x10,0x10,0x00],
    'Z': [0x7E,0x04,0x08,0x10,0x20,0x40,0x7E,0x00],
    '0': [0x3C,0x42,0x46,0x4A,0x52,0x62,0x3C,0x00],
    '1': [0x10,0x30,0x10,0x10,0x10,0x10,0x38,0x00],
    '2': [0x3C,0x42,0x02,0x0C,0x30,0x40,0x7E,0x00],
    '3': [0x3C,0x42,0x02,0x1C,0x02,0x42,0x3C,0x00],
    '4': [0x08,0x18,0x28,0x48,0x7E,0x08,0x08,0x00],
    '5': [0x7E,0x40,0x7C,0x02,0x02,0x42,0x3C,0x00],
    '6': [0x1C,0x20,0x40,0x7C,0x42,0x42,0x3C,0x00],
    '7': [0x7E,0x42,0x04,0x08,0x10,0x10,0x10,0x00],
    '8': [0x3C,0x42,0x42,0x3C,0x42,0x42,0x3C,0x00],
    '9': [0x3C,0x42,0x42,0x3E,0x02,0x04,0x38,0x00],
    '!': [0x10,0x10,0x10,0x10,0x10,0x00,0x10,0x00],
    '?': [0x3C,0x42,0x02,0x0C,0x10,0x00,0x10,0x00],
    '.': [0x00,0x00,0x00,0x00,0x00,0x00,0x10,0x00],
    ',': [0x00,0x00,0x00,0x00,0x00,0x10,0x10,0x20],
    ':': [0x00,0x10,0x00,0x00,0x00,0x10,0x00,0x00],
    ';': [0x00,0x10,0x00,0x00,0x00,0x10,0x10,0x20],
    '-': [0x00,0x00,0x00,0x7C,0x00,0x00,0x00,0x00],
    '_': [0x00,0x00,0x00,0x00,0x00,0x00,0x7E,0x00],
    '+': [0x00,0x10,0x10,0x7C,0x10,0x10,0x00,0x00],
    '*': [0x00,0x24,0x18,0x7E,0x18,0x24,0x00,0x00],
    '/': [0x02,0x04,0x08,0x10,0x20,0x40,0x00,0x00],
    '\\': [0x40,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
    '=': [0x00,0x00,0x7E,0x00,0x7E,0x00,0x00,0x00],
    '\'': [0x10,0x10,0x20,0x00,0x00,0x00,0x00,0x00],
    '"': [0x24,0x24,0x00,0x00,0x00,0x00,0x00,0x00],
    '(': [0x08,0x10,0x20,0x20,0x20,0x10,0x08,0x00],
    ')': [0x20,0x10,0x08,0x08,0x08,0x10,0x20,0x00],
    '[': [0x1C,0x10,0x10,0x10,0x10,0x10,0x1C,0x00],
    ']': [0x38,0x08,0x08,0x08,0x08,0x08,0x38,0x00],
    '{': [0x0C,0x10,0x10,0x60,0x10,0x10,0x0C,0x00],
    '}': [0x30,0x08,0x08,0x06,0x08,0x08,0x30,0x00],
    '<': [0x08,0x10,0x20,0x40,0x20,0x10,0x08,0x00],
    '>': [0x20,0x10,0x08,0x04,0x08,0x10,0x20,0x00],
    '|': [0x10,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    '@': [0x3C,0x42,0x5A,0x5A,0x5C,0x40,0x3C,0x00],
    '#': [0x24,0x24,0x7E,0x24,0x7E,0x24,0x24,0x00],
    '$': [0x10,0x3C,0x50,0x3C,0x12,0x3C,0x10,0x00],
    '%': [0x62,0x64,0x08,0x10,0x26,0x46,0x00,0x00],
    '^': [0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00],
    '&': [0x30,0x48,0x50,0x20,0x54,0x48,0x34,0x00],
    '~': [0x00,0x00,0x34,0x4C,0x00,0x00,0x00,0x00]
}

# --- Helper functions ---
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))
    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

def ssd1306_init():
    commands = [
        bytearray([SSD1306_DISPLAY_OFF]),
        bytearray([SSD1306_SET_DISPLAY_CLOCK_DIV, 0x80]),
        bytearray([SSD1306_SET_MULTIPLEX, SSD1306_HEIGHT - 1]),
        bytearray([SSD1306_SET_DISPLAY_OFFSET, 0x00]),
        bytearray([SSD1306_SET_START_LINE | 0x00]),
        bytearray([SSD1306_CHARGE_PUMP, 0x14]),
        bytearray([SSD1306_MEMORY_MODE, 0x00]),
        bytearray([SSD1306_SEG_REMAP | 0x01]),
        bytearray([SSD1306_COM_SCAN_DEC]),
        bytearray([SSD1306_SET_COM_PINS, 0x12]),
        bytearray([SSD1306_SET_CONTRAST, 0xCF]),
        bytearray([SSD1306_SET_PRECHARGE, 0xF1]),
        bytearray([SSD1306_SET_VCOM_DETECT, 0x40]),
        bytearray([SSD1306_DISPLAY_ALL_ON_RESUME]),
        bytearray([SSD1306_NORMAL_DISPLAY]),
        bytearray([SSD1306_DISPLAY_ON])
    ]
    for cmd in commands:
        ssd1306_write_commands(cmd)
    ssd1306_clear()
    print("SSD1306 initialized successfully.")
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

def ssd1306_draw_text(text, x, y):
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, x, x + len(text) * 8 - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, y, y + 0]))
    display_data = bytearray()
    for char in text:
        font_bytes = font_data.get(char.upper(), font_data[' '])
        for col in range(7, -1, -1):
            val = 0
            for row in range(8):
                if font_bytes[row] & (1 << col):
                    val |= (1 << row)
            display_data.append(val)
    ssd1306_write_data(display_data)

try:
    i2c = XiaoI2C(I2C_BUS, SDA, SCL, FREQ)
    print("I2C initialized on %s (SDA: D%d, SCL: D%d)" % (I2C_BUS, SDA, SCL))

    i2c_addr = i2c.scan()
    if SSD1306_I2C_ADDR not in i2c_addr:
        raise Exception("SSD1306 not found on I2C bus")
    else:
        print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

    # Initialize display and draw text
    ssd1306_init()
    ssd1306_draw_text("NRF54LM20A", 22, 2)
    ssd1306_draw_text("HELLO WORLD", 20, 4)
    print("Display updated. Running...")

    while True:
        time.sleep(1)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

</details>

**Explicação do código:**

1. **Importações e definições de pinos:** `XiaoI2C` de `boards.xiao` fornece o gerenciamento do barramento I2C. SDA está em D4 (P1.03) e SCL está em D5 (P1.07). O barramento opera a 400 kHz.
2. **Driver SSD1306:** O display OLED SSD1306 é controlado por meio de gravações brutas de comandos/dados via I2C. Funções auxiliares `ssd1306_write_command()`, `ssd1306_write_data()`, `ssd1306_clear()`, `ssd1306_init()` e `ssd1306_draw_text()` formam um driver mínimo.
3. **Dados de fonte:** Um dicionário de fonte bitmap 8×8 fornece definições de glifos para caracteres ASCII imprimíveis. A função `ssd1306_draw_text()` renderiza strings de texto procurando os bitmaps dos glifos e enviando-os para o display.
4. **Lógica principal:** O barramento I2C é escaneado para verificar se o SSD1306 está presente no endereço `0x3C`. O display é inicializado e duas linhas de texto centralizado são desenhadas ("NRF54LM20A" e "HELLO WORLD").
5. **Limpeza:** O bloco `try/except` lida com o encerramento gracioso em caso de interrupção pelo teclado ou erro.

### Resultado


Após a execução do programa, os textos **NRF54LM20A** e **HELLO WORLD** serão exibidos na tela, e as informações de status serão impressas pela porta serial USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI é um protocolo de comunicação síncrono, full-duplex e de alta velocidade. Ele depende de uma linha de clock SCK dedicada para sincronização de dados e adota uma topologia de quatro fios composta pelos pinos MOSI, MISO, SCK e CS/SS. É amplamente utilizado para acionar displays de alta resolução, armazenamento em Flash/cartão SD e sensores de amostragem de alta frequência.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A Sense, a configuração SPI usa os seguintes pinos:

| Função | Pino digital | Pino físico |
| -------- | ----------- | ------------ |
| SCK      | D8          | P1.04        |
| MOSI     | D10         | P1.06        |
| MISO     | D9          | P1.05        |
| CS       | D1          | P1.31        |
| DC       | D3          | P1.29        |

:::tip

- Para o pinout do XIAO nRF54LM20A Sense, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver detalhes.

:::

```python
import time
from machine import Pin, SPI
from boards.xiao_nrf54lm20a import xiao_nrf54lm20a as xiao

cs  = Pin(("gpio1", 31), Pin.OUT)   # D1
dc  = Pin(("gpio1", 29), Pin.OUT)   # D3
bl  = Pin(("gpio1", 8), Pin.OUT)   
rst = Pin(("gpio1", 30), Pin.OUT)   # D2 

spi_id = xiao.spi("spi0") 
spi = SPI(spi_id, baudrate=8000000, polarity=0, phase=0)

cs.value(1)
dc.value(1)
bl.value(1) 

LCD_W = 240
LCD_H = 240

def write_command(cmd):
    dc.value(0); cs.value(0)
    spi.write(bytearray([cmd & 0xFF]))
    cs.value(1)

def write_data(data):
    dc.value(1); cs.value(0)
    if isinstance(data, int):
        spi.write(bytearray([data & 0xFF]))
    else:
        spi.write(bytearray(data))
    cs.value(1)

def set_addr_window(x0, y0, x1, y1):
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2A]))
    dc.value(1)
    spi.write(bytearray([x0>>8, x0&0xFF, x1>>8, x1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2B]))
    dc.value(1)
    spi.write(bytearray([y0>>8, y0&0xFF, y1>>8, y1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2C]))
    cs.value(1)

def init_display():
    # Hardware reset (if reset pin is connected)
    rst.value(1)
    time.sleep_ms(10)
    rst.value(0)
    time.sleep_ms(10)
    rst.value(1)
    time.sleep_ms(120)

    # GC9A01 full initialization sequence
    write_command(0xEF)
    write_command(0xEB)
    write_data(0x14)

    write_command(0xFE) 
    write_command(0xEF) 

    write_command(0xEB)
    write_data(0x14)

    write_command(0x84)
    write_data(0x40)

    write_command(0x85)
    write_data(0xFF)

    write_command(0x86)
    write_data(0xFF)

    write_command(0x87)
    write_data(0xFF)

    write_command(0x88)
    write_data(0x0A)

    write_command(0x89)
    write_data(0x21)

    write_command(0x8A)
    write_data(0x00)

    write_command(0x8B)
    write_data(0x80)

    write_command(0x8C)
    write_data(0x01)

    write_command(0x8D)
    write_data(0x01)

    write_command(0x8E)
    write_data(0xFF)

    write_command(0x8F)
    write_data(0xFF)

    write_command(0xB6)
    write_data(0x00)
    write_data(0x20)

    write_command(0x36)
    write_data(0x08)  # Memory access control, adjust rotation direction as needed

    write_command(0x3A)
    write_data(0x05)  # RGB565 16-bit color mode

    write_command(0x90)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08) 

    write_command(0xBD)
    write_data(0x06)

    write_command(0xBC)
    write_data(0x00)

    write_command(0xFF)
    write_data(0x60)
    write_data(0x01)
    write_data(0x04)

    write_command(0xC3)
    write_data(0x13)
    write_command(0xC4)
    write_data(0x13)

    write_command(0xC9)
    write_data(0x22)

    write_command(0xBE)
    write_data(0x11)

    write_command(0xE1)
    write_data(0x10)
    write_data(0x0E)

    write_command(0xDF)
    write_data(0x21)
    write_data(0x0c)
    write_data(0x02)

    write_command(0xF0)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)

    write_command(0xF1)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)

    write_command(0xF2)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)

    write_command(0xF3)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)

    write_command(0xED)
    write_data(0x1B)
    write_data(0x0B)

    write_command(0xAE)
    write_data(0x77)

    write_command(0xCD)
    write_data(0x63)

    write_command(0x70)
    write_data(0x07)
    write_data(0x07)
    write_data(0x04)
    write_data(0x0E) 
    write_data(0x0F)
    write_data(0x09)
    write_data(0x07)
    write_data(0x08)
    write_data(0x03)

    write_command(0xE8)
    write_data(0x34)

    write_command(0x62)
    write_data(0x18)
    write_data(0x0D)
    write_data(0x71)
    write_data(0xED)
    write_data(0x70) 
    write_data(0x70)
    write_data(0x18)
    write_data(0x0F)
    write_data(0x71)
    write_data(0xEF)
    write_data(0x70) 
    write_data(0x70)

    write_command(0x63)
    write_data(0x18)
    write_data(0x11)
    write_data(0x71)
    write_data(0xF1)
    write_data(0x70) 
    write_data(0x70)
    write_data(0x18)
    write_data(0x13)
    write_data(0x71)
    write_data(0xF3)
    write_data(0x70) 
    write_data(0x70)

    write_command(0x64)
    write_data(0x28)
    write_data(0x29)
    write_data(0xF1)
    write_data(0x01)
    write_data(0xF1)
    write_data(0x00)
    write_data(0x07)

    write_command(0x66)
    write_data(0x3C)
    write_data(0x00)
    write_data(0xCD)
    write_data(0x67)
    write_data(0x45)
    write_data(0x45)
    write_data(0x10)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)

    write_command(0x67)
    write_data(0x00)
    write_data(0x3C)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)
    write_data(0x01)
    write_data(0x54)
    write_data(0x10)
    write_data(0x32)
    write_data(0x98)

    write_command(0x74)
    write_data(0x10)
    write_data(0x85)
    write_data(0x80)
    write_data(0x00)
    write_data(0x00)
    write_data(0x4E)
    write_data(0x00)

    write_command(0x98)
    write_data(0x3e)
    write_data(0x07)

    write_command(0x35) 
    write_command(0x21)

    write_command(0x11)
    time.sleep_ms(120)

    write_command(0x29)
    time.sleep_ms(120)

    bl.value(0) 
    print("Seeed Studio Round Display & Backlight Active!")

def fill_screen(color):
    hi = (color >> 8) & 0xFF
    lo = color & 0xFF
    set_addr_window(0, 0, LCD_W-1, LCD_H-1)
    dc.value(1); cs.value(0)
    buf = bytearray([hi, lo] * LCD_W)
    for _ in range(LCD_H):
        spi.write(buf)
    cs.value(1)

init_display()

colors = [
    (0xF800, "RED"),
    (0x07E0, "GREEN"),
    (0x001F, "BLUE"),
    (0xFFE0, "YELLOW"),
    (0x07FF, "CYAN"),
    (0xF81F, "MAGENTA"),
    (0x0000, "BLACK"),
    (0xFFFF, "WHITE"),
]

while True:
    for color, name in colors:
        print("Solid: %s" % name)
        fill_screen(color)
        time.sleep_ms(1000)
```

### Resultado

Após executar o programa, o display redondo é atualizado na sequência vermelho, verde, azul, amarelo, ciano e magenta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:400, height:'auto'}}/></div>


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
