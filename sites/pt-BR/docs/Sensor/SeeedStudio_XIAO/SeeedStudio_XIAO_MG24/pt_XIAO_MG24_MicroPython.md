---
title: Seeed Studio XIAO MG24 Sense Com MicroPython
description: Multiplexação de pinos com Seeed Studio XIAO MG24(Sense).
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_6_1.webp
slug: /xiao_mg24_sense_micropython
keywords:
  - XIAO
  - MG24
  - MicroPython
last_update:
  date: 12/25/2025
  author: Zeller
  sidebar_position: 9
createdAt: '2025-09-26'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/xiao_mg24_sense_micropython/
---

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com um recurso parcial de compilação de código nativo. Ele fornece um subconjunto dos recursos do Python 3.5, implementado para processadores embarcados e sistemas com recursos limitados. Ele é diferente do CircuitPython e você pode ler mais sobre as diferenças na [documentação do MicroPython](https://github.com/micropython/micropython/wiki/Differences).

## Usando MicroPython com XIAO MG24

Em seguida, vou guiá‑lo sobre como usar MicroPython no XIAO MG24 Sense e programá‑lo com a Thonny IDE, com base no sistema operacional Windows.

### Preparação de Hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO MG24 Sense</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
</tr>
</table>
</div>

### Instalar [Thonny IDE](https://thonny.org/)

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

Clone o repositório para a máquina local e, em seguida, lembre‑se do caminho onde este MicroPython para XIAO MG24 está armazenado. Esse caminho será usado mais tarde.

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

### Exemplo de Piscar LED

Aqui vamos mostrar como acender o LED USER no XIAO MG24 usando MicroPython com a Thonny IDE.

#### **Passo 1.** Gravar o firmware MicroPython

<!-- 如果您已经刷入了对应的MircroPython固件，可以跳过这一步骤 -->
- Baixe o pacote [Firmware MicroPython para XIAO MG24](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/xiao_mg24_flash.zip) e extraia‑o para o local apropriado. Em seguida, abra o terminal nessa pasta.

- Pressione e segure o botão RESET onboard no XIAO MG24 e, em seguida, ligue a placa.

- Para Windows:  Clique em `xiao_mg24_flash.bat`. Solte o botão RESET quando o script começar a ser executado e aguarde até que a gravação seja concluída.

<!-- 这里的压缩包填入刷写固件的压缩包 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_1.png" style={{width:600, height:'auto'}}/></div>

- Para Mac / Linux

```bash
sudo chmod +x xiao_mg24_flash.sh && ./xiao_mg24_flash.sh
```

:::tip
O erro que ocorre é determinado pela arquitetura interna do chip EFR32MG24. Este chip incorpora um subsistema de segurança protegido (Secure Vault), que corresponde às portas AP#2 e AP#3 da interface de depuração. Quando a ferramenta pyOCD faz a varredura do dispositivo, ela tenta se conectar a todas as portas; no entanto, essas portas seguras estão bloqueadas ou restritas e, portanto, rejeitam as solicitações de conexão, resultando em registros de erro. Isso não afeta a gravação e a execução normais do programa principal (AP#0) e é um comportamento conhecido e esperado.
:::

#### **Passo 2.** Configuração do interpretador

Abra a Thonny IDE e, em seguida, clique no canto inferior direito da interface para configurar as opções do interpretador. Selecione MicroPython (generic) e Port. Após a configuração bem‑sucedida, as informações da versão do MicroPython serão exibidas no Shell.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_2.png" style={{width:600, height:'auto'}}/></div>

#### **Passo 3.** Enviar o arquivo boards

- Abra a visualização, selecione **File**, e o caminho do gerenciador de arquivos será exibido na barra lateral esquerda.
- Abra o caminho do arquivo clonado ou baixado e abra `micropython-seeed-boards-master\examples`
- Selecione a pasta **boards** e envie‑a para a flash. Então, você conseguirá ver o arquivo enviado no dispositivo/flash MicroPython.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_3.png" style={{width:600, height:'auto'}}/></div>

#### **Passo 4.** Executar o código

Clique em **File** -> **New** para criar um novo arquivo e salve‑o como blink.py.<br/>

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
        - `time` Importa o módulo time
        - `Xiao Pin` Importa a classe de controle de pinos para a placa de desenvolvimento Seeed Xiao do módulo boards.xiao, que é usada para operar os pinos na placa.

- **Definir Pinos**
        - `led = "led""` Especifica que o pino está conectado ao pino `led` da placa de desenvolvimento (aqui, o pino USER)

- **Lógica Principal (bloco try)**
        - O LED USER piscará em intervalos de 0,5 segundo.

Copie o código acima e, em seguida, clique no botão verde ou pressione F5 para executá‑lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_4.png" style={{width:600, height:'auto'}}/></div>

Quando o código começar a ser executado, o LED USER piscará em intervalos de 0,5 segundo.

O resultado é o seguinte:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_1.gif" style={{width:600, height:'auto'}}/></div>

### Exemplo de PWM

Todos os pinos GPIO no XIAO MG24 Sense suportam saída PWM. Portanto, você pode usar qualquer pino para gerar PWM para ajustar o brilho de luzes, controlar servos e outras funções.

#### Preparação de Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

- Crie um novo arquivo chamado pwm.py e copie o código de referência nele.

```py
import time
from boards.xiao import XiaoPWM

PIN = 0  # D0

# set the frequency and period of the PWM signal
FREQ = 1000
PERIOD_NS = int(1_000_000_000 // FREQ)  
# set the number of steps to fade the LED and the delay between steps
FADE_STEPS = 255
STEP_DELAY = 0.01
STEP_SIZE = 3

pwm = None

try:
    # initialize the PWM with a frequency and a 0% duty cycle
    pwm = XiaoPWM(PIN)
    pwm.init(freq=FREQ, duty_ns=0)

    while True:
        # fade the LED in and out
        for fade in range(0, FADE_STEPS + 1, STEP_SIZE):
            duty_ns = (fade * PERIOD_NS) // FADE_STEPS

            if duty_ns < 0:
                duty_ns = 0
            elif duty_ns > PERIOD_NS:
                duty_ns = PERIOD_NS
            pwm.duty_ns(int(duty_ns))
            time.sleep(STEP_DELAY)
        # fade the LED in and out again
        for fade in range(FADE_STEPS, -1, -STEP_SIZE):
            duty_ns = (fade * PERIOD_NS) // FADE_STEPS
            if duty_ns < 0:
                duty_ns = 0
            elif duty_ns > PERIOD_NS:
                duty_ns = PERIOD_NS
            pwm.duty_ns(int(duty_ns))
            time.sleep(STEP_DELAY)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")

except Exception as e:

    print("\nError occurred:", repr(e))

finally:
    if pwm is not None:
        try:
            pwm.deinit()
        except Exception:
            pass
```

Explicação do código:

- **Importar módulos**
        - `time`: Importa o módulo padrão de tempo para lidar com atrasos (usado para controlar a velocidade do efeito de respiração).
        - `XiaoPWM`: Importa a classe de controle PWM (Pulse Width Modulation) do módulo `boards.xiao`, usada para gerar sinais semelhantes a analógicos no pino digital.

- **Definir pinos e constantes**
        - `PIN = 0`: Especifica que o dispositivo está conectado ao pino D0 na placa de desenvolvimento.
        -`FREQ / PERIOD_NS`: Define a frequência do PWM em 1000 Hz e calcula o período total em nanossegundos (1 segundo / 1000).
        - `FADE_STEPS / STEP_DELAY`: Configura a resolução da animação (255 etapas) e a velocidade (espera de 0,01 s entre as mudanças).

- **Lógica principal (bloco try)**
        - **Inicialização**: O código inicializa o objeto PWM no pino D0 começando com 0% de brilho (ciclo de trabalho).
        - **Loop de respiração**: Dentro do loop infinito `while True`, dois loops `for` controlam o brilho do LED:
            1. **Fade In**: Aumenta gradualmente o `duty_ns` (largura de pulso) de 0 até a duração total do período.
            2. **Fade Out**: Diminui gradualmente o `duty_ns` do período completo de volta para 0.

- **Cálculo do ciclo de trabalho**: A fórmula `(fade * PERIOD_NS) // FADE_STEPS` mapeia a etapa do loop (0-255) para o tempo em nanossegundos necessário para o hardware PWM.
        - **Segurança/Limpeza**: O bloco `finally` garante que `pwm.deinit()` seja chamado para liberar os recursos de hardware se o programa for interrompido (por exemplo, via Ctrl+C).

#### Gráfico de resultado

Após a execução do programa, o LED terá um efeito de fade, e você pode ajustar o tamanho do passo do PWM de acordo com suas necessidades reais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_2.gif" style={{width:400, height:'auto'}}/></div>

### Exemplo analógico

A placa de desenvolvimento XIAO MG24 Sense possui ADC de 12 bits para leitura de alta resolução de valores de sensores analógicos, o que nos ajuda a ler valores mais precisos.

Em seguida, escolheremos dois sensores para refletir as características do ADC.

#### Preparação de hardware

<table align="center">
 <tr>
        <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
        <th>Grove-Rotary Angle Sensor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881159_2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
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

adc_pin = 0    
pwm_pin = 1    

try:
    adc = XiaoADC(adc_pin)            
    pwm = XiaoPWM(pwm_pin)     

    FREQ = 1000                     
    PERIOD_NS = 1000000000 // FREQ 
    pwm.init(freq=FREQ, duty_ns=0)  

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
        - `time`: Importa o módulo padrão de tempo para lidar com atrasos (usado para controlar a velocidade do efeito de respiração).
        - `XiaoPWM`: Importa a classe de controle PWM (Pulse Width Modulation) do módulo `boards.xiao`, usada para gerar sinais semelhantes a analógicos no pino digital.
Explicação do código:

- **Importar módulos**
        - `time`: Importa o módulo padrão de tempo para lidar com atrasos (usado para controlar a taxa de amostragem do loop).
        - `XiaoADC`, `XiaoPWM`: Importa as classes de controle de hardware do módulo `boards.xiao`. `XiaoADC` lida com a entrada analógica (potenciômetro) e `XiaoPWM` lida com a saída de modulação por largura de pulso (LED).

- **Definir pinos e constantes**
        - `adc_pin = 0` / `pwm_pin = 1`: Mapeia os pinos físicos. O pino D0 é usado para o sensor de entrada e o pino D1 é usado para o LED de saída.
        - `FREQ / PERIOD_NS`: Define a frequência de operação do PWM em 1000 Hz e calcula a duração do período em nanossegundos (1.000.000 ns).
        - `MAX_VOLTAGE / DEAD_ZONE`: Define a tensão de referência (3,3 V) e uma zona morta de 2% para filtrar ruído elétrico e impedir que o LED pisque.

- **Lógica principal (bloco try)**
        - **Inicialização**: Configura os objetos ADC e PWM. O PWM começa com ciclo de trabalho 0.
        - **Loop de controle**: Dentro do loop `while True`, o código monitora continuamente o sensor:
            1. **Leitura e normalização**: Lê o inteiro bruto de 16 bits (0-65535) do ADC e o converte em uma tensão de ponto flutuante (0,0 V - 3,3 V).
            2. **Filtro de jitter**: Compara a leitura atual com `last_duty`. Se a variação for menor que `DEAD_ZONE`, o loop ignora a atualização para manter a estabilidade.

- **Cálculo do ciclo de trabalho e inversão de lógica**
        - **Lógica ativa em nível baixo (Active Low)**: A linha `inverted_duty = 1.0 - duty_percent` inverte a lógica.
        - **Motivo**: Seu LED provavelmente é **Active Low** (conectado ao VCC).
        - **Efeito**: À medida que a tensão aumenta, `duty_ns` se torna menor (mantendo o pino em nível BAIXO por mais tempo), tornando o LED **mais brilhante**.

- **Limites de segurança**: O código limita o sinal de saída entre um mínimo de 20 ns e um máximo de 96% do período. Isso protege o hardware e garante que o sinal permaneça dentro de uma faixa válida.

- **Saída e limpeza**
        - **Feedback**: Imprime a tensão atual e a porcentagem de brilho no console usando `.format()` para compatibilidade com versões mais antigas do MicroPython.
        - **Segurança/Limpeza**: O bloco `finally` garante que `pwm.deinit()` seja executado quando o programa parar, desligando com segurança os recursos de hardware do PWM.

#### Gráfico de resultado

- Gire o Grove-Rotary Angle Sensor e o brilho do LED mudará de acordo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/result_3.gif" style={{width:400, height:'auto'}}/></div>

- A janela Shell também imprimirá a tensão e a porcentagem de brilho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_5.png" style={{width:400, height:'auto'}}/></div>

### Exemplo de UART

UART é um dos protocolos de comunicação mais usados. Ele permite a transmissão de dados com apenas duas linhas de dados e seu baixo custo o torna amplamente usado em muitos campos. Em seguida, demonstraremos a aplicação da comunicação serial, tomando como exemplo a transmissão de dados de um módulo GPS.

#### Preparação de hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO MG24 Sense</th>
   <th>Módulo L76K GNSS para Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a></div>
    </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Software

- Crie um novo arquivo chamado uart.py e copie o código de referência para ele.

<details>

<summary>Código de Referência</summary>

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

Explicação do Código:

- **Importar Módulos**
        - `XiaoUART` Importa a classe de comunicação UART para a placa de desenvolvimento Seeed Xiao a partir do módulo `boards.xiao`, usada para inicializar e controlar a comunicação serial.
        - `time` Importa o módulo de tempo para oferecer suporte a funções relacionadas a temporização (embora não seja usado diretamente aqui, é importado para uso futuro em potencial ou compatibilidade).
        - `math` Importa funções matemáticas (`sin`, `cos`, `sqrt`, `atan2`, etc.) necessárias para algoritmos de transformação de coordenadas.

- **Definir Configuração da UART**
        - `uart = "uart1"` Especifica a instância do controlador UART a ser usada — aqui, `uart1`.
        - `baudrate = 9600` Define a taxa de transmissão para a comunicação serial em 9600 bps.
        - `tx = 6` Especifica que o pino de transmissão UART (TX) está conectado ao pino digital D6.
        - `rx = 7` Especifica que o pino de recepção UART (RX) está conectado ao pino digital D7.

- **Definir Estruturas de Dados**
        - Classe `Coordinates`: Um contêiner simples para armazenar valores de longitude/latitude como números de ponto flutuante.
        - Classe `GNRMC`: Representa dados de GPS analisados a partir de uma sentença NMEA `$GNRMC`. Contém:
            - Latitude/longitude em graus decimais
            - Indicadores de hemisfério (`N/S`, `E/W`)
            - Hora (hora, minuto, segundo — ajustada para GMT+8)
            - Flag de status (1 = correção válida, 0 = sem correção)

- **Funções de Transformação de Coordenadas**
        - `transformLat(x, y)` e `transformLon(x, y)` — Funções auxiliares que implementam parte do algoritmo de conversão WGS-84 → GCJ-02 (usado na China para ofuscação de mapas).
        - `bd_encrypt(gg)` — Converte coordenadas GCJ-02 para o sistema de coordenadas BD-09 da Baidu aplicando deslocamento e rotação adicionais.
        - `transform(gps)` — Função principal que converte coordenadas WGS-84 (GPS bruto) para GCJ-02 usando fórmulas trigonométricas complexas baseadas no modelo elíptico da Terra.
        - `L76X_Baidu_Coordinates(gps)` — Função wrapper que converte GPS bruto (WGS-84) → GCJ-02 → BD-09 (formato de Mapas Baidu).
        - `L76X_Google_Coordinates(gps)` — Função wrapper que converte GPS bruto (WGS-84) → GCJ-02 (formato de Mapas Google na China).

- **Analisar Sentença GNRMC**
        - `parse_gnrmc(nmea_sentence)` — Analisa uma string NMEA `$GNRMC` ou `$PNRMC` bruta em um objeto `GNRMC` estruturado.
            - Extrai a hora (converte de UTC para GMT+8).
            - Verifica o status (`A` = correção ativa/válida, `V` = inválida).
            - Analisa latitude/longitude do formato DDMM.MMMMM → graus decimais.
            - Retorna o objeto `GNRMC` preenchido ou um objeto vazio padrão se a análise falhar.

- **Exibir Dados de GPS Formatados**
        - `print_gps_data(gps)` — Imprime informações de GPS legíveis por humanos, incluindo:
            - Hora local (GMT+8)
            - Coordenadas WGS-84 brutas com hemisfério
            - Coordenadas convertidas GCJ-02 (compatível com Google) e BD-09 (compatível com Baidu)
            - Mensagem de status indicando se o posicionamento foi bem-sucedido

- **Lógica Principal (bloco try)**
        - Inicializa a interface UART com os parâmetros especificados.
        - Define constantes globais necessárias para o cálculo de coordenadas (`pi`, `a`, `ee`, `x_pi`) — parâmetros do elipsoide da Terra e fatores de escala.
        - Entra em um loop infinito para ler continuamente os dados de GPS recebidos via UART.
            - Usa `buffer` para acumular mensagens parciais até que uma linha completa (terminando com `\n`) seja recebida.
            - Quando uma linha completa chega:
                - Verifica se ela começa com `$GNRMC` ou `$PNRMC`
                - Se sim, analisa usando `parse_gnrmc()`
                - Exibe a saída formatada via `print_gps_data()`
        - Lida com exceções:
            - `KeyboardInterrupt`: Encerra graciosamente ao pressionar Ctrl+C.
            - `Exception` geral: Captura e imprime quaisquer erros inesperados.
        - Finalmente, chama `uart.deinit()` para liberar os recursos da UART antes de sair.

#### Gráfico de resultados

- Abra qualquer ferramenta de porta serial e defina a taxa de transmissão para 9600.
- O módulo GPS deve ser usado em uma área externa aberta.
- O programa imprimirá as informações de GPS da sua localização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/UART_GPS_2.png" style={{width:800, height:'auto'}}/></div>

### Exemplo I2C

O XIAO MG24 Sense possui uma interface I2C que pode ser usada para transmissão e análise de dados de muitos sensores, bem como para usar telas OLED.

#### Preparação de Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
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

- Crie um novo arquivo chamado i2c.py e copie o código de referência para ele.

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

# Basic 8x8 font 
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

# Write a single command byte to SSD1306 via I2C
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

# Write multiple command bytes to SSD1306 via I2C
def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

# Write display data bytes to SSD1306 via I2C
def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

# Clear the entire SSD1306 display
def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))

    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

# Initialize SSD1306 display with recommended settings
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

# Draw a string of text at specified column and page (row) on SSD1306
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

i2c_addr = i2c.scan()
if SSD1306_I2C_ADDR not in i2c_addr:
    raise Exception("SSD1306 not found on I2C bus")
else:
    print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

# Initialize display
ssd1306_init()
ssd1306_draw_text("XIAO MG24", 30, 2)
ssd1306_draw_text("HELLO WORLD", 20, 4)
```

</details>

Explicação do código:

- **Importar módulos**
        - `time` Importa o módulo time para habilitar funções relacionadas a tempo, como atrasos.
        - `XiaoI2C` Importa a classe de comunicação I2C para a placa de desenvolvimento Seeed Xiao do módulo `boards.xiao`, usada para inicializar e controlar periféricos I2C.

- **Definir configuração do I2C**
        - `sda = 4` Especifica que a linha SDA (dados) do barramento I2C está conectada ao pino digital D4.
        - `scl = 5` Especifica que a linha SCL (clock) do barramento I2C está conectada ao pino digital D5.
        - `i2c = "i2c0"` Especifica a instância do controlador I2C a ser usada — aqui, é `i2c0`.
        - `frq = 400000` Define a frequência do barramento I2C para 400 kHz (modo rápido padrão).
        - `i2c = XiaoI2C(i2c, sda, scl, frq)` Inicializa a interface I2C com os parâmetros especificados.

- **Definir constantes do SSD1306**
        - `SSD1306_I2C_ADDR = 0x3C` O endereço I2C padrão do display OLED SSD1306.
        - Várias constantes de comando (`SSD1306_SET_CONTRAST`, `SSD1306_DISPLAY_ON`, etc.) definem comandos de controle para configurar e controlar o hardware do display.
        - `SSD1306_WIDTH = 128`, `SSD1306_HEIGHT = 64`, `SSD1306_PAGES = 8` Definem a resolução do display e a estrutura de páginas (cada página tem 8 linhas de altura).

- **Definir dados de fonte**
        - `font_data` Um dicionário que mapeia caracteres ASCII para suas representações de bitmap de 8x8 pixels. Cada caractere é representado como uma lista de 8 bytes, onde cada byte corresponde a uma linha de pixels (LSB = pixel mais à esquerda).

- **Funções auxiliares**
        - `ssd1306_write_command(cmd)` Envia um único byte de comando para o SSD1306 via I2C usando o byte de controle `0x00`.
        - `ssd1306_write_commands(cmds)` Envia múltiplos bytes de comando em uma única transação.
        - `ssd1306_write_data(data)` Envia bytes de dados de exibição para o SSD1306 usando o byte de controle `0x40` (modo de dados).
        - `ssd1306_clear()` Limpa todo o display escrevendo bytes zero em todas as páginas e colunas.
        - `ssd1306_init()` Inicializa o display SSD1306 com configurações recomendadas, incluindo contraste, taxa de multiplexação, modo de memória e ligando o display.
        - `ssd1306_draw_text(text, x, y)` Desenha texto começando na coluna `x` e página `y`. Converte cada caractere para seu bitmap de fonte 8x8, gira-o 90° no sentido horário (para corresponder à orientação do display) e escreve os dados de pixel no buffer do display.

- **Lógica principal (Inicialização e exibição)**
        - `i2c.scan()` Faz uma varredura no barramento I2C para detectar dispositivos conectados.
        - Se o SSD1306 não for encontrado no endereço `0x3C`, uma exceção é gerada; caso contrário, uma mensagem de sucesso é impressa.
        - `ssd1306_init()` Inicializa o hardware do display.
        - `ssd1306_draw_text("XIAO MG24", 30, 2)` Desenha a string **XIAO MG24** começando na coluna 30, página 2 (≈ linha 16).
        - `ssd1306_draw_text("HELLO WORLD", 20, 4)` Desenha a string **HELLO WORLD** começando na coluna 20, página 4 (≈ linha 32).

#### Gráfico de resultado

- Assim que o programa começar a rodar, ele exibirá **XIAO MG24** e **HELLO WORLD** na tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_6_1.jpg" style={{width:400, height:'auto'}}/></div>

### Resumo

Parabéns! Tendo concluído os tutoriais acima, você adquiriu a capacidade de desenvolvimento e depuração básicos com XIAO MG24 Sense e MicroPython. Esperamos ver você criar projetos mais interessantes com base nessas habilidades fundamentais

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
