---
title: Seeed Studio XIAO RA4M1 com MicroPython
description: Multiplexação de pinos com Seeed Studio XIAO RA4M1
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_3.webp
slug: /xiao_ra4m1_micropython
keywords:
  - XIAO
  - RAM41
  - MicroPython
last_update:
  date: 12/25/2025
  author: Zeller
  sidebar_position: 9
createdAt: '2025-12-25'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/xiao_ra4m1_micropython/
---

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com um recurso parcial de compilação de código nativo. Ele fornece um subconjunto de recursos do Python 3.5, implementado para processadores embarcados e sistemas com recursos limitados. É diferente do CircuitPython e você pode ler mais sobre as diferenças na [documentação do MicroPython](https://github.com/micropython/micropython/wiki/Differences).

## Usando MicroPython com XIAO RA4M1

A seguir, vou guiá-lo sobre como usar MicroPython no XIAO MG24 Senese e programá-lo com o Thonny IDE, com base no sistema operacional Windows.

### Preparação de Hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO RA4M1</th>
<th>Seeed Studio XIAO Debug Mate</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-xiao-debugger.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

### Instalar o [Thonny IDE](https://thonny.org/)

Escolha a versão apropriada para instalação. Aqui, estou instalando em um sistema Windows, então selecionei a versão para Windows.

Siga as instruções para a versão desejada do Python.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:600, height:'auto'}}/></div><br/>

Depois, basta seguir as etapas padrão para configuração.

### Baixar o repositório

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Clone-o para a máquina local e, em seguida, lembre-se do caminho onde este MicroPython do XIAO RA4M1 está armazenado. Esse caminho será usado mais tarde.

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

### Exemplo de Piscar LED

Aqui vamos mostrar como acender o USER LED no XIAO MG24 usando MicroPython com Thonny IDE.

#### **Etapa 1.** Gravar o firmware MicroPython

- Baixe o pacote [XIAO RA4M1 MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/xiao_ra4m1_flash.zip) e extraia-o no local apropriado. Em seguida, abra o terminal nesta pasta.

- Insira o XIAO RA4M1 no XIAO XIAO Debug Mate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/debug_1_1.jpg" style={{width:600, height:'auto'}}/></div>

- Clique em xiao_ra4m1_flash.bat e aguarde a conclusão da programação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_1.png" style={{width:600, height:'auto'}}/></div>

- Para Mac / Linux

```bash
sudo chmod +x xiao_ra4m1_flash.sh && ./xiao_ra4m1_flash.sh
```

:::tip
Este script possui comandos de toolchain de gravação pré-configurados. Se você estiver usando-o pela primeira vez, isso pode levar um pouco de tempo.
:::

:::tip
Após terminar de programar o firmware, você precisa desconectar o XIAO RA4M1 do XIAO XIAO XIAO Debug Mate e conectá-lo via USB-C.
:::

#### **Etapa 2.** Configuração do Interpretador

Abra o Thonny IDE e clique no canto inferior direito da interface para configurar as opções do interpretador. Selecione MicroPython (generic) e a Porta. Após a configuração bem-sucedida, as informações da versão do MicroPython serão exibidas no Shell.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_2.png" style={{width:600, height:'auto'}}/></div>

#### **Etapa 3.** Fazer upload do arquivo de placas

- Abra a visualização, selecione **File** e o caminho do gerenciador de arquivos será exibido na barra lateral esquerda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_3.png" style={{width:600, height:'auto'}}/></div>

- Abra o caminho do arquivo clonado ou baixado e abra `micropython-seeed-boards-master\examples`
-Há vários arquivos Python do xiao na pasta **boards**, mas a capacidade da memória flash do XIAO RAM41 é limitada, então você só precisa manter dois arquivos: `xiao.py` e `xiao_ra4m1.py`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_4.png" style={{width:600, height:'auto'}}/></div>

- Selecione a pasta **boards** e faça o upload para a flash. Em seguida, você conseguirá ver o arquivo enviado no dispositivo/flash MicroPython.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_5.png" style={{width:600, height:'auto'}}/></div>

#### **Etapa 4.** Executar o Código

Clique em **File** -> **New** para criar um novo arquivo e salve-o como blink.py.<br/>

```py
import time
from boards.xiao import XiaoPin

led = "led"

try:
    # Initialize LED
    led = XiaoPin(led, XiaoPin.OUT)
    while True:
        # LED 0.5 seconds on, 0.5 seconds off
        led.value(1)
        time.sleep(0.5)
        led.value(0)
        time.sleep(0.5)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    led.value(1)
```

Explicação do Código:

- **Importar Módulos**
        - `time` Importa o módulo de tempo
        - `Xiao Pin` Importa a classe de controle de pinos para a placa de desenvolvimento Seeed Xiao a partir do módulo boards.xiao, que é usada para operar os pinos na placa.

- **Definir Pinos**
        - `led = "led""` Especifica que o pino está conectado ao pino `led` da placa de desenvolvimento (aqui, o pino USER)

- **Lógica Principal (bloco try)**
        - O USER LED piscará em intervalos de 0,5 segundos.

Copie o código acima, depois clique no botão verde ou pressione F5 para executá-lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_6.png" style={{width:600, height:'auto'}}/></div>

Assim que o código começar a ser executado, o USER LED piscará em intervalos de 0,5 segundos.

O resultado é o seguinte:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_1.gif" style={{width:400, height:'auto'}}/></div>

### Exemplo de PWM

No XIAO RA4M1, os pinos D5–D10 suportam a função PWM. Vamos apresentar como usar a função PWM com um exemplo de luz respiratória PWM.

#### Preparação de Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

- Crie um novo arquivo chamado pwm.py e copie o código de referência para ele.
- Como apenas os pinos D5–D10 do XIAO RA4M1 suportam a função PWM, o pino D9 é selecionado aqui.

```py
import time
from boards.xiao import XiaoPWM 

led = 9   #D9

try:
    # set the frequency and period of the PWM signal
    FREQ = 1000             
    PERIOD_NS = int(1_000_000_000 // FREQ)  
    # set the number of steps to fade the LED and the delay between steps
    FADE_STEPS = 255        
    STEP_DELAY = 0.01       
    STEP_SIZE = 3

    # initialize the PWM with a frequency and a 0% duty cycle
    pwm = XiaoPWM(led) 
    pwm.init(freq=FREQ, duty=0)
    while True:
        # fade the LED in and out
        for fade in range(0, FADE_STEPS + 1, STEP_SIZE):
            duty_ns = int((fade * PERIOD_NS) / FADE_STEPS)
            if duty_ns < 20:
                duty_ns = 20
            elif duty_ns > 960000:
                duty_ns = 960000
            pwm.duty_ns(duty_ns)
            time.sleep(STEP_DELAY)
        # fade the LED in and out again
        for fade in range(FADE_STEPS, -1, -STEP_SIZE):
            duty_ns = int((fade * PERIOD_NS) / FADE_STEPS)
            if duty_ns < 20:
                duty_ns = 20
            elif duty_ns > 960000:
                duty_ns = 960000
            pwm.duty_ns(duty_ns)
            time.sleep(STEP_DELAY)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s",repr(e))
finally:
    if pwm is not None:
        try:
            pwm.deinit()
        except Exception:
            pass
```

Explicação do código:

- **Importar módulos**
        - `time`: Importa o módulo de tempo padrão para lidar com atrasos (usado para controlar a velocidade do efeito de respiração).
        - `XiaoPWM`: Importa a classe de controle PWM (Modulação por Largura de Pulso) do módulo `boards.xiao`, usada para gerar sinais semelhantes a analógicos no pino digital.

- **Definir pinos e constantes**
        - `PIN = 0`: Especifica que o dispositivo está conectado ao pino D0 na placa de desenvolvimento.
        -`FREQ / PERIOD_NS`: Define a frequência PWM para 1000 Hz e calcula o período total em nanossegundos (1 segundo / 1000).
        - `FADE_STEPS / STEP_DELAY`: Configura a resolução da animação (255 passos) e a velocidade (espera de 0,01 s entre as mudanças).

- **Lógica principal (bloco try)**
        - **Inicialização**: O código inicializa o objeto PWM no pino D0 começando com 0% de brilho (ciclo de trabalho).
        - **Loop de respiração**: Dentro do loop infinito `while True`, dois loops `for` controlam o brilho do LED:
            1. **Aumentar brilho (Fade In)**: Aumenta gradualmente o `duty_ns` (largura de pulso) de 0 até a duração total do período.
            2. **Diminuir brilho (Fade Out)**: Diminui gradualmente o `duty_ns` do período completo de volta para 0.

- **Cálculo do ciclo de trabalho**: A fórmula `(fade * PERIOD_NS) // FADE_STEPS` mapeia o passo do loop (0-255) para o tempo em nanossegundos necessário para o hardware PWM.
        - **Segurança/Limpeza**: O bloco `finally` garante que `pwm.deinit()` seja chamado para liberar os recursos de hardware se o programa for interrompido (por exemplo, via Ctrl+C).

#### Gráfico de resultado

Depois que o programa for executado, o LED terá um efeito de fade, e você pode ajustar o tamanho do passo de PWM de acordo com suas necessidades reais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_2.gif" style={{width:400, height:'auto'}}/></div>

### Exemplo analógico

A placa de desenvolvimento XIAO RA4M1 possui ADC de 12 bits para leitura de alta resolução de valores de sensores analógicos, o que pode nos ajudar a ler valores mais precisos.

Em seguida, escolheremos dois sensores para refletir as características do ADC.

#### Preparação de hardware

<table align="center">
 <tr>
        <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
        <th>Grove-Rotary Angle Sensor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881159_2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a></div>
    </td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a></div>
    </td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a></div>
    </td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a></div>
    </td>
 </tr>
</table>

#### Software

- Crie um novo arquivo chamado adc.py e copie o código de referência para ele.

```py
import time
from boards.xiao import XiaoPin, XiaoADC, XiaoPWM 

adc_pin = 0   #D0
pwm_pin = 9   #D9

try:
    adc = XiaoADC(adc_pin)             
    pwm = XiaoPWM(pwm_pin)      

    FREQ = 1000                     
    PERIOD_NS = 1000000000 // FREQ 


    pwm.freq(FREQ)     
    pwm.duty_ns(0)      

    MAX_VOLTAGE = 3.3      
    DEAD_ZONE = 0.02
    last_duty = -1 

    while True:
        raw_value = adc.read_u16()
        voltage = (raw_value / 65535.0) * MAX_VOLTAGE

        # Calculate the base percentage (0.0 - 1.0)
        duty_percent = voltage / MAX_VOLTAGE

        # scope limitation
        if duty_percent < 0: duty_percent = 0
        if duty_percent > 1: duty_percent = 1

        if abs(duty_percent - last_duty) < DEAD_ZONE:
            time.sleep(0.05)
            continue

        inverted_duty = 1.0 - duty_percent
        duty_ns = int(inverted_duty * PERIOD_NS)

        if duty_ns < 20: duty_ns = 20
        elif duty_ns > (PERIOD_NS * 0.96): duty_ns = int(PERIOD_NS * 0.96)

        pwm.duty_ns(duty_ns)

        print("Voltage: {:.2f}V, Brightness: {:.1f}%".format(voltage, duty_percent * 100))

        last_duty = duty_percent
        time.sleep(0.05)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: {}".format(e))
finally:
    pwm.deinit()
```

- **Importar módulos**
        - `time`: Importa o módulo de tempo padrão para lidar com atrasos (usado para controlar a velocidade do efeito de respiração).
        - `XiaoPWM`: Importa a classe de controle PWM (Modulação por Largura de Pulso) do módulo `boards.xiao`, usada para gerar sinais semelhantes a analógicos no pino digital.
Explicação do código:

- **Importar módulos**
        - `time`: Importa o módulo de tempo padrão para lidar com atrasos (usado para controlar a taxa de amostragem do loop).
        - `XiaoADC`, `XiaoPWM`: Importa as classes de controle de hardware do módulo `boards.xiao`. `XiaoADC` lida com a entrada analógica (potenciômetro) e `XiaoPWM` lida com a saída de modulação por largura de pulso (LED).

- **Definir pinos e constantes**
        - `adc_pin = 0` / `pwm_pin = 1`: Mapeia os pinos físicos. O pino D0 é usado para o sensor de entrada e o pino D1 é usado para o LED de saída.
        - `FREQ / PERIOD_NS`: Define a frequência de operação do PWM para 1000 Hz e calcula a duração do período em nanossegundos (1.000.000 ns).
        - `MAX_VOLTAGE / DEAD_ZONE`: Define a tensão de referência (3,3 V) e uma zona morta de 2% para filtrar ruído elétrico e evitar que o LED pisque.

- **Lógica principal (bloco try)**
        - **Inicialização**: Configura os objetos ADC e PWM. O PWM começa com um ciclo de trabalho de 0.
        - **Loop de controle**: Dentro do loop `while True`, o código monitora continuamente o sensor:
            1. **Ler e normalizar**: Lê o inteiro bruto de 16 bits (0-65535) do ADC e o converte em uma tensão de ponto flutuante (0,0 V - 3,3 V).
            2. **Filtro de jitter**: Compara a leitura atual com `last_duty`. Se a mudança for menor que `DEAD_ZONE`, o loop ignora a atualização para manter a estabilidade.

- **Cálculo do ciclo de trabalho e inversão de lógica**
        - **Lógica ativa em nível baixo (Active Low)**: A linha `inverted_duty = 1.0 - duty_percent` inverte a lógica.
        - **Motivo**: Seu LED provavelmente é **Active Low** (conectado ao VCC).
        - **Efeito**: À medida que a tensão aumenta, `duty_ns` se torna menor (mantendo o pino em nível LOW por mais tempo), tornando o LED **mais brilhante**.

- **Limites de segurança (Safety Clamps)**: O código limita o sinal de saída entre um mínimo de 20 ns e um máximo de 96% do período. Isso protege o hardware e garante que o sinal permaneça dentro de uma faixa válida.

- **Saída e limpeza**
        - **Feedback**: Imprime a tensão atual e a porcentagem de brilho no console usando `.format()` para compatibilidade com versões mais antigas do MicroPython.
        - **Safety/Cleanup**: O bloco `finally` garante que `pwm.deinit()` seja executado quando o programa parar, desligando com segurança os recursos de hardware de PWM.

#### Gráfico de resultado

- Gire o Grove-Rotary Angle Sensor e o brilho do LED mudará de acordo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_4.gif" style={{width:400, height:'auto'}}/></div>

- A janela Shell também imprimirá a tensão e a porcentagem de brilho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_5.png" style={{width:400, height:'auto'}}/></div>

### Exemplo de UART

UART é um dos protocolos de comunicação mais comumente usados. Ele permite a transmissão de dados com apenas duas linhas de dados, e seu baixo custo faz com que seja amplamente utilizado em muitos campos. A seguir, demonstraremos a aplicação da comunicação serial tomando como exemplo a transmissão de dados de um módulo GPS.

#### Preparação de hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RA4M1</th>
   <th>L76K GNSS Module for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a></div>
    </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Software

- Crie um novo arquivo chamado uart.py e copie o código de referência para ele.

<details>

<summary>Reference Code</summary>

```py
from boards.xiao import XiaoUART
import time
import math

uart = "uart1"
baudrate = 9600
tx = 6              # D6
rx = 7              # D7

# Coordinate structure
class Coordinates:
    def __init__(self, Lon=0.0, Lat=0.0):
        self.Lon = Lon
        self.Lat = Lat

# GPS data structure
class GNRMC:
    def __init__(self):
        self.Lon = 0.0      # GPS Longitude
        self.Lat = 0.0      # GPS Latitude
        self.Lon_area = ''  # E or W
        self.Lat_area = ''  # N or S
        self.Time_H = 0     # Time Hour
        self.Time_M = 0     # Time Minute
        self.Time_S = 0     # Time Second
        self.Status = 0     # 1: Successful positioning, 0: Positioning failed

# Convert WGS-84 to GCJ-02
def transformLat(x, y):
    ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(y * pi) + 40.0 * math.sin(y / 3.0 * pi)) * 2.0 / 3.0
    ret += (160.0 * math.sin(y / 12.0 * pi) + 320 * math.sin(y * pi / 30.0)) * 2.0 / 3.0
    return ret

# Convert WGS-84 to GCJ-02
def transformLon(x, y):
    ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(x * pi) + 40.0 * math.sin(x / 3.0 * pi)) * 2.0 / 3.0
    ret += (150.0 * math.sin(x / 12.0 * pi) + 300.0 * math.sin(x / 30.0 * pi)) * 2.0 / 3.0
    return ret

# Convert GCJ-02 to BD-09
def bd_encrypt(gg):
    bd = Coordinates()
    x = gg.Lon
    y = gg.Lat
    z = math.sqrt(x * x + y * y) + 0.00002 * math.sin(y * x_pi)
    theta = math.atan2(y, x) + 0.000003 * math.cos(x * x_pi)
    bd.Lon = z * math.cos(theta) + 0.0065
    bd.Lat = z * math.sin(theta) + 0.006
    return bd

# Convert WGS-84 to GCJ-02
def transform(gps):
    gg = Coordinates()
    dLat = transformLat(gps.Lon - 105.0, gps.Lat - 35.0)
    dLon = transformLon(gps.Lon - 105.0, gps.Lat - 35.0)
    radLat = gps.Lat / 180.0 * pi
    magic = math.sin(radLat)
    magic = 1 - ee * magic * magic
    sqrtMagic = math.sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi)
    dLon = (dLon * 180.0) / (a / sqrtMagic * math.cos(radLat) * pi)
    gg.Lat = gps.Lat + dLat
    gg.Lon = gps.Lon + dLon
    return gg

# Convert to Baidu coordinates (BD-09)
def L76X_Baidu_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    bd09_coords = bd_encrypt(gcj02_coords)
    return bd09_coords

# Convert to Google coordinates (GCJ-02)
def L76X_Google_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    return gcj02_coords

# Parse GNRMC NMEA sentence
def parse_gnrmc(nmea_sentence):
    gps = GNRMC()

    if not nmea_sentence.startswith(b'$GNRMC') and not nmea_sentence.startswith(b'$PNRMC'):
        return gps

    try:
        # Convert to string and split by commas
        sentence_str = nmea_sentence.decode('ascii', 'ignore')
        fields = sentence_str.split(',')

        if len(fields) < 12:
            return gps

        # Parse time field (HHMMSS.sss)
        if fields[1]:
            time_str = fields[1]
            if '.' in time_str:
                time_str = time_str.split('.')[0]
            if len(time_str) >= 6:
                gps.Time_H = int(time_str[0:2]) + 8  # GMT+8
                gps.Time_M = int(time_str[2:4])
                gps.Time_S = int(time_str[4:6])
                if gps.Time_H >= 24:
                    gps.Time_H -= 24

        # Parse status
        gps.Status = 1 if fields[2] == 'A' else 0

        if gps.Status == 1:
            # Parse latitude (DDMM.MMMMM)
            if fields[3] and fields[4]:
                lat_str = fields[3]
                if '.' in lat_str:
                    degrees = float(lat_str[0:2])
                    minutes = float(lat_str[2:])
                    gps.Lat = degrees + minutes / 60.0
                    gps.Lat_area = fields[4]

            # Parse longitude (DDDMM.MMMMM)
            if fields[5] and fields[6]:
                lon_str = fields[5]
                if '.' in lon_str:
                    degrees = float(lon_str[0:3])
                    minutes = float(lon_str[3:])
                    gps.Lon = degrees + minutes / 60.0
                    gps.Lon_area = fields[6]

    except Exception as e:
        print("Parse error:", e)

    return gps

# Print formatted GPS data
def print_gps_data(gps):
    print("\n--- GPS Data ---")
    print("Time (GMT+8): {:02d}:{:02d}:{:02d}".format(gps.Time_H, gps.Time_M, gps.Time_S))
    if gps.Status == 1:
        print("Latitude (WGS-84): {:.6f} {}".format(gps.Lat, gps.Lat_area))
        print("Longitude (WGS-84): {:.6f} {}".format(gps.Lon, gps.Lon_area))

        # Coordinate conversion
        baidu_coords = L76X_Baidu_Coordinates(gps)
        google_coords = L76X_Google_Coordinates(gps)

        print("Baidu Latitude: {:.6f}".format(baidu_coords.Lat))
        print("Baidu Longitude: {:.6f}".format(baidu_coords.Lon))
        print("Google Latitude: {:.6f}".format(google_coords.Lat))
        print("Google Longitude: {:.6f}".format(google_coords.Lon))
        print("GPS positioning successful.")
    else:
        print("GPS positioning failed or no valid data.")

try:
    uart = XiaoUART(uart, baudrate, tx, rx)
    # Initialize UART
    uart.init(9600, bits=8, parity=None, stop=1)
    # Buffer to accumulate complete messages
    buffer = bytearray()
    # Constants for coordinate transformation
    pi = 3.14159265358979324
    a = 6378245.0
    ee = 0.00669342162296594323
    x_pi = 3.14159265358979324 * 3000.0 / 180.0
    while True:
        available = uart.any()
        if available > 0:
            # Read all available bytes
            data = uart.read(available)
            buffer.extend(data)
            # Check if we have a complete line (ends with newline)
            if b'\n' in buffer:
                # Find the newline position
                newline_pos = buffer.find(b'\n')
                # Extract the complete message
                complete_message = buffer[:newline_pos + 1]
                # Remove the processed part from buffer
                buffer = buffer[newline_pos + 1:]
                # Parse GNRMC sentences
                if complete_message.startswith(b'$GNRMC') or complete_message.startswith(b'$PNRMC'):
                    gps_data = parse_gnrmc(complete_message)
                    print_gps_data(gps_data)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    uart.deinit()
```

</details>

Explicação do código:

- **Importar módulos**
        - `XiaoUART` Importa a classe de comunicação UART para a placa de desenvolvimento Seeed Xiao a partir do módulo `boards.xiao`, usada para inicializar e controlar a comunicação serial.
        - `time` Importa o módulo de tempo para oferecer suporte a funções relacionadas a temporização (embora não seja usado diretamente aqui, é importado para uso futuro em potencial ou compatibilidade).
        - `math` Importa funções matemáticas (`sin`, `cos`, `sqrt`, `atan2`, etc.) necessárias para algoritmos de transformação de coordenadas.

- **Definir Configuração de UART**
        - `uart = "uart1"` Especifica a instância do controlador UART a ser usada — aqui, `uart1`.
        - `baudrate = 9600` Define a taxa de transmissão para comunicação serial em 9600 bps.
        - `tx = 6` Especifica que o pino de transmissão UART (TX) está conectado ao pino digital D6.
        - `rx = 7` Especifica que o pino de recepção UART (RX) está conectado ao pino digital D7.

- **Definir Estruturas de Dados**
        - Classe `Coordinates`: Um contêiner simples para armazenar valores de longitude/latitude como números de ponto flutuante.
        - Classe `GNRMC`: Representa dados de GPS analisados a partir de uma sentença NMEA `$GNRMC`. Contém:
            - Latitude/Longitude em graus decimais
            - Indicadores de hemisfério (`N/S`, `E/W`)
            - Hora (hora, minuto, segundo — ajustada para GMT+8)
            - Flag de status (1 = correção válida, 0 = sem correção)

- **Funções de Transformação de Coordenadas**
        - `transformLat(x, y)` & `transformLon(x, y)` — Funções auxiliares que implementam parte do algoritmo de conversão WGS-84 → GCJ-02 (usado na China para ofuscação de mapas).
        - `bd_encrypt(gg)` — Converte coordenadas GCJ-02 para o sistema de coordenadas BD-09 da Baidu aplicando deslocamento e rotação adicionais.
        - `transform(gps)` — Função principal que converte coordenadas WGS-84 (GPS bruto) para GCJ-02 usando fórmulas trigonométricas complexas baseadas no modelo elíptico da Terra.
        - `L76X_Baidu_Coordinates(gps)` — Wrapper que converte GPS bruto (WGS-84) → GCJ-02 → BD-09 (formato do Baidu Maps).
        - `L76X_Google_Coordinates(gps)` — Wrapper que converte GPS bruto (WGS-84) → GCJ-02 (formato do Google Maps na China).

- **Analisar Sentença GNRMC**
        - `parse_gnrmc(nmea_sentence)` — Analisa uma string NMEA bruta `$GNRMC` ou `$PNRMC` em um objeto `GNRMC` estruturado.
            - Extrai a hora (converte de UTC para GMT+8).
            - Verifica o status (`A` = correção ativa/válida, `V` = inválida).
            - Analisa latitude/longitude do formato DDMM.MMMMM → graus decimais.
            - Retorna o objeto `GNRMC` preenchido ou um objeto vazio padrão se a análise falhar.

- **Exibir Dados de GPS Formatados**
        - `print_gps_data(gps)` — Imprime informações de GPS legíveis por humanos incluindo:
            - Hora local (GMT+8)
            - Coordenadas WGS-84 brutas com hemisfério
            - Coordenadas convertidas GCJ-02 (compatíveis com Google) e BD-09 (compatíveis com Baidu)
            - Mensagem de status indicando se o posicionamento foi bem-sucedido

- **Lógica Principal (bloco try)**
        - Inicializa a interface UART com os parâmetros especificados.
        - Define constantes globais necessárias para a matemática de coordenadas (`pi`, `a`, `ee`, `x_pi`) — parâmetros do elipsoide da Terra e fatores de escala.
        - Entra em um loop infinito para ler continuamente os dados de GPS recebidos via UART.
            - Usa `buffer` para acumular mensagens parciais até que uma linha completa (terminada com `\n`) seja recebida.
            - Quando uma linha completa chega:
                - Verifica se ela começa com `$GNRMC` ou `$PNRMC`
                - Se sim, a analisa usando `parse_gnrmc()`
                - Exibe a saída formatada via `print_gps_data()`
        - Trata exceções:
            - `KeyboardInterrupt`: Sai graciosamente ao pressionar Ctrl+C.
            - `Exception` geral: Captura e imprime quaisquer erros inesperados.
        - Por fim, chama `uart.deinit()` para liberar os recursos de UART antes de sair.

#### Gráfico de resultado

- Abra qualquer ferramenta de porta serial e defina a taxa de transmissão para 9600.
- O módulo GPS deve ser usado em uma área externa aberta.
- O programa imprimirá as informações de GPS da sua localização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/UART_GPS_2.png" style={{width:800, height:'auto'}}/></div>

### Exemplo I2C

O XIAO RAM41 possui uma interface I2C que pode ser usada para transmissão e análise de dados de muitos sensores, bem como para o uso de telas OLED.

#### Preparação de Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Base de Expansão Seeed Studio para XIAO com Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

- Crie um novo arquivo chamado i2c.py e copie o código de referência nele.

<details>

<summary>Código de Referência</summary>

```py
import time
from boards.xiao import XiaoI2C  

sda = 4        #D4
scl = 5        #D5
i2c = "i2c0"
frq = 400000
i2c = XiaoI2C(i2c, sda, scl, frq)

# Basic 8x8 font 
font_data = {
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'D': [0x78,0x44,0x42,0x42,0x42,0x44,0x78,0x00],
    'E': [0x7C,0x40,0x40,0x78,0x40,0x40,0x7C,0x00],
    'H': [0x44,0x44,0x44,0x7C,0x44,0x44,0x44,0x00],
    'L': [0x40,0x40,0x40,0x40,0x40,0x40,0x7C,0x00],
    'O': [0x3C,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'R': [0x7C,0x42,0x42,0x7C,0x48,0x44,0x42,0x00],
    'W': [0x42,0x42,0x42,0x42,0x5A,0x66,0x42,0x00],
}

# Write a single command byte to SSD1306 via I2C
def ssd1306_write_command(cmd):
    i2c.writeto(0x3C, bytes([0x00, cmd]))

# Write multiple command bytes to SSD1306 via I2C
def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(0x3C, data)

# Write display data bytes to SSD1306 via I2C
def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(0x3C, buffer)

# Clear the entire SSD1306 display
def ssd1306_clear():
    ssd1306_write_commands(bytearray([0x21, 0, 127]))
    ssd1306_write_commands(bytearray([0x22, 0, 7]))

    empty_data = bytearray(128)
    for _ in range(8):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([0x21, 0, 127])

# Initialize SSD1306 display with recommended settings
def ssd1306_init():
    commands = [
        bytearray([0xAE]),
        bytearray([0xD5, 0x80]),
        bytearray([0xA8, 63]),
        bytearray([0xD3, 0x00]),
        bytearray([0x40]),
        bytearray([0x8D, 0x14]),
        bytearray([0x20, 0x00]),
        bytearray([0xA1]),
        bytearray([0xC8]),
        bytearray([0xDA, 0x12]),
        bytearray([0x81, 0xCF]),
        bytearray([0xD9, 0xF1]),
        bytearray([0xDB, 0x40]),
        bytearray([0xA4]),
        bytearray([0xA6]),
        bytearray([0xAF])
    ]

    for cmd in commands:
        ssd1306_write_commands(cmd)

    ssd1306_clear()
    print("SSD1306 initialized successfully")
    ssd1306_write_commands([0x21, 0, 127])

# Draw a string of text at specified column and page (row) on SSD1306
def ssd1306_draw_text(text, x, y): 
    ssd1306_write_commands(bytearray([0x21, x, x + len(text) * 8 - 1]))
    ssd1306_write_commands(bytearray([0x22, y, y + 0]))

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
    i2c_addr = i2c.scan()
    if 0x3C not in i2c_addr:
        raise Exception("SSD1306 not found on I2C bus")
    else:
        print("SSD1306 found on I2C bus: 0x3C")
    # Initialize display
    ssd1306_init()
    ssd1306_draw_text("HELLO WORLD", 20, 4)
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

</details>

Explicação do Código:

- **Importar Módulos**
        - `time`: Importa o módulo padrão de tempo para lidar com pausas e atrasos do programa (usado aqui para o `while` loop sleep).
        - `XiaoI2C`: Importa a classe I2C específica de hardware de `boards.xiao`, que lida com o protocolo de comunicação de baixo nível para a placa de desenvolvimento XIAO.

- **Definir Configuração de I2C**
        - `sda = 4`, `scl = 5`: Atribui as linhas de dados (SDA) e clock (SCL) do I2C aos pinos digitais D4 e D5, respectivamente.
        -`i2c = "i2c0"`: Seleciona o barramento periférico I2C de hardware específico (barramento 0) no microcontrolador.
        - `frq = 400000`: Define a velocidade de comunicação para 400 kHz (Modo Rápido), permitindo atualizações rápidas da tela.
        - `i2c = XiaoI2C(...)`: Instancia o objeto I2C com as configurações de pinos e frequência definidas.

- **Definir Dados de Fonte**
        - `font_data`: Um dicionário atuando como uma tabela de consulta. Ele mapeia caracteres (como 'H', 'E') para uma lista de 8 bytes hexadecimais. Esses bytes representam a máscara de bits para os pixels desse caractere em uma grade 8x8.

- **Funções Auxiliares (Driver de Baixo Nível)**
        - `ssd1306_write_command(cmd)`: Envia uma única instrução de controle para o display. Ela prefixa o byte com `0x00`, informando ao controlador SSD1306 que o byte seguinte é um comando, não dados de pixel.
        - `ssd1306_write_commands(cmds)`: Envia de forma eficiente uma sequência de comandos de configuração em uma única transação I2C para minimizar a sobrecarga.
        - `ssd1306_write_data(data)`: Envia dados gráficos para a RAM da tela. Ele prefixa os dados com `0x40`, indicando que os bytes seguintes representam pixels que devem ser acesos.

- **Funções Auxiliares (Controle de Alto Nível)**
        - `ssd1306_clear()`: Limpa o conteúdo da tela. Define o endereço de coluna (0-127) e o endereço de página (0-7) para cobrir a tela inteira e, em seguida, grava zeros (pixels em branco) em cada posição de memória.
        - `ssd1306_init()`: Envia uma sequência rigorosa de códigos hexadecimais (por exemplo, `0xAE` para desligar o display, `0x8D 0x14` para ativar a bomba de carga) para configurar a tensão do painel OLED, a direção de varredura e o modo de endereçamento antes de ligá‑lo.
        - `ssd1306_draw_text(text, x, y)`: A função gráfica principal.
        - Ela define a janela de desenho na tela usando os comandos `0x21` (Endereço de Coluna) e `0x22` (Endereço de Página).
        - Ela itera pela string de entrada, obtém os bytes da fonte e executa operações bit a bit (`val |= (1 << row)`) para transpor/rotacionar os dados de modo a corresponder à estrutura de memória específica do SSD1306.

- **Lógica Principal (Fluxo de Execução)**
        - `i2c.scan()`: Detecta todos os dispositivos conectados ao barramento I2C para garantir que a fiação esteja correta.
        - **Validação de Endereço**: Verifica se o display está presente no endereço `0x3C`. Se não for encontrado, gera um erro para interromper a execução; caso contrário, imprime uma confirmação.
        - `ssd1306_init()`: Ativa o display e aplica as configurações.
        - `ssd1306_draw_text("HELLO WORLD", 20, 4)`: Renderiza o texto "HELLO WORLD" começando na coluna de pixel 20 na página 4 (aproximadamente no meio à esquerda da tela).
        - `while True`: Entra em um loop infinito que dorme por 1 segundo repetidamente, mantendo o programa em execução para que o display permaneça ativo.
        - `try...except`: Envolve a lógica principal em um manipulador de erros para capturar problemas (como hardware ausente) ou uma interrupção do usuário (Ctrl+C), garantindo que o programa seja encerrado graciosamente com uma mensagem legível.

#### Gráfico de resultado

- Assim que o programa começar a ser executado, ele exibirá **HELLO WORLD** na tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_3.jpg" style={{width:400, height:'auto'}}/></div>

### Resumo

Parabéns! Tendo concluído os tutoriais acima, você adquiriu a capacidade de desenvolvimento e depuração básicos com o XIAO RA4M1 e MicroPython. Estamos ansiosos para ver você criar projetos mais interessantes com base nessas habilidades fundamentais

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
