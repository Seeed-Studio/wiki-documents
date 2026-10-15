---
description: XIAO ESP32S3(Sense) com FreeRTOS
title: XIAO ESP32S3(Sense) com FreeRTOS
keywords:
  - Software
  - FreeRtos
  - sd
  - camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao-esp32s3-freertos
last_update:
  date: 09/14/2024
  author: Priyanshu Roy
createdAt: '2024-08-05'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao-esp32s3-freertos/
---

# XIAO ESP32S3(Sense) com FreeRTOS

Este wiki aborda o suporte do [FreeRTOS](https://freertos.org/) para o [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/). Com a ajuda deste guia você poderá utilizar o conjunto de recursos disponível para a placa.

## O que é o [FreeRTOS](https://www.freertos.org/index.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" alt="pir" width={600} height="auto" /></p>

FreeRTOS é um conjunto de bibliotecas C composto por um kernel de tempo real e um conjunto de bibliotecas modulares que implementam funcionalidades complementares. O kernel FreeRTOS é um kernel de tempo real (ou escalonador de tempo real) que permite que aplicações construídas sobre FreeRTOS atendam a seus requisitos rígidos de tempo real. Ele permite que as aplicações sejam organizadas como uma coleção de threads de execução independentes.

_Referência : [**Mastering the FreeRTOS Real Time Kernel**](https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book)_

## Portas do FreeRTOS

FreeRTOS é um kernel de RTOS (sistema operacional de tempo real) de código aberto que é integrado ao ESP-IDF como um componente. Assim, todas as aplicações ESP-IDF e muitos componentes ESP-IDF são escritos com base no FreeRTOS. O kernel FreeRTOS é portado para todas as arquiteturas (ou seja, Xtensa e RISC-V) disponíveis dos chips ESP.

Nós usaremos a porta ESP IDF do FreeRTOS.

## Preparação de Hardware

Eu estou usando o [Seed Studio XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/) e a câmera, microfone e leitor de cartão SD onboard juntamente com a funcionalidade Wi-Fi do ESP32S3.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3(Sense)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Componentes Adicionais

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Display I2C, RTC e Botão
- [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)
- [Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Acrylic Case for Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/XIAO-p-4812.html)

## Preparação de Software

Eu estou usando Visual Studio Code (Windows) com ESP-IDF.

1. Instalação do VSCode
2. Guia de instalação do ESP-IDF
3. Repositório Git

<div class="table-center">
  <table align="center">
    <tr>
        <th>VS Code</th>
        <th>ESP-IDF para VSCode</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Baixar VSCode⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Instalar ESP-IDF ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Primeiros Passos

### Configurando o ESP-IDF

Após configurar a [Extensão do Visual Studio](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md), abra o terminal e cole o seguinte comando para acessar as Ferramentas de Linha de Comando do ESP-IDF a partir do ambiente de terminal normal (fora do VScode).

:::note
A instalação normal da extensão [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) do VS-Code irá atender a 90% dos casos de uso, faça os passos a seguir somente se você precisar das ferramentas de linha de comando ESP fora do ambiente.
:::

PowerShell (Windows)

```shell
.$HOME\esp\v5.3\esp-idf\export.ps1
```

:::info
".$HOME\esp\v5.3\esp-idf" pode variar de usuário para usuário. Este é o caminho de instalação padrão.  
Substitua-o pelo caminho de instalação no seu dispositivo.
:::
:::tip
Para evitar configurações repetidas, inicie o PowerShell em modo administrador e digite o seguinte comando

```shell
notepad $PSHOME\Profile.ps1
```

Uma instância do Notepad será aberta. Cole o comando de exportação do shell no bloco de notas e salve-o.
Abra uma instância do PowerShell e ela deverá ter uma saída próxima à seguinte.

```shell
Done! You can now compile ESP-IDF projects.
```

:::  
Se tudo for feito corretamente, o seguinte comando :

```shell
idf.py
```

deverá mostrar a seguinte saída :

```shell
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build
  system target will be made. Selected target: None
```

### Configuração da Placa para XIAO ESP32S3

Após configurar o ESP-IDF, você precisa configurar seu projeto especificamente para a placa XIAO ESP32S3 para aproveitar seus recursos de hardware, incluindo 8MB de Flash e 8MB de Octal PSRAM.

#### Definir o Dispositivo Alvo

No diretório do seu projeto ESP-IDF, defina o alvo como ESP32-S3:

```bash
idf.py set-target esp32s3
```

#### Habilitar Opções de Build Completas

No `CMakeLists.txt` raiz do seu projeto, certifique-se de que `MINIMAL_BUILD` esteja definido como `OFF`:

```cmake
idf_build_set_property(MINIMAL_BUILD OFF)
```

Isso habilita todas as opções de configuração no menuconfig.

#### Configurar Flash e PSRAM

Abra o menu de configuração:

```bash
idf.py menuconfig
```

**Configuração do Tamanho da Flash:**
1. Navegue até: **Serial flasher config → Flash size**
2. Defina como: **8 MB**

**Configuração da PSRAM:**
1. Navegue até: **Component config → ESP PSRAM**
2. Habilite: **Support for external, SPI-connected RAM**
3. Defina **SPI RAM mode** como: **Octal Mode PSRAM**
4. Defina **SPI RAM clock** como: **80MHz**

:::info
O XIAO ESP32S3 usa Octal PSRAM, não modo Quad. Selecionar o modo correto é essencial para que os 8MB de PSRAM funcionem corretamente.
:::

#### Atualizar Dependências do Componente Principal

Em `/main/CMakeLists.txt`, certifique-se de que os componentes de PSRAM e SPI flash estejam incluídos:

```cmake
idf_component_register(
    SRCS "main.c"
    INCLUDE_DIRS "."
    PRIV_REQUIRES esp_psram spi_flash
)
```

#### Criar Componente de Configuração de Pinos da Placa

Crie um componente reutilizável para definições de pinos do XIAO para tornar seu código mais legível e portátil:

```bash
mkdir -p ./components/board_config/include/
```

Crie `./components/board_config/include/xiao_pins.h`:

```c
// xiao_pins.h
#pragma once

#ifdef __cplusplus
extern "C" {
#endif

// Analog / Digital Pins
#define XIAO_D0     1
#define XIAO_D1     2
#define XIAO_D2     3
#define XIAO_D3     4
#define XIAO_D4     5
#define XIAO_D5     6
#define XIAO_D6     43
#define XIAO_D7     44
#define XIAO_D8     7
#define XIAO_D9     8
#define XIAO_D10    9

// Onboard User LED (Active Low)
#define XIAO_LED    21

// I2C Pins (Default)
#define XIAO_SDA    5   // Same as D4
#define XIAO_SCL    6   // Same as D5

// SPI Pins (Default)
#define XIAO_MISO   9   // Same as D10
#define XIAO_MOSI   10
#define XIAO_SCK    8   // Same as D9
#define XIAO_SS     7   // Same as D8

#ifdef __cplusplus
}
#endif
```

Crie `./components/board_config/CMakeLists.txt`:

```cmake
idf_component_register(INCLUDE_DIRS "include")
```

:::tip
Essas definições de pinos correspondem aos rótulos serigrafados na placa XIAO ESP32S3, tornando seu código mais legível. Por exemplo, use `XIAO_LED` em vez de codificar diretamente o GPIO 21.
:::

#### Usar Definições de Pinos no Seu Código

Na sua aplicação principal ou em qualquer componente, inclua o cabeçalho:

```c
#include "xiao_pins.h"

void app_main(void) {
    // Example: Configure LED pin
    gpio_set_direction(XIAO_LED, GPIO_MODE_OUTPUT);
    gpio_set_level(XIAO_LED, 0);  // Turn on (active low)
}
```

#### Referência de Mapeamento de Pinos

![Xiao ESP32S3 Pinout reference picture](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg)

| Rótulo | GPIO | Função Alternativa |
|-------|------|--------------------|
| D0    | 1    | ADC1_CH0     |
| D1    | 2    | ADC1_CH1     |
| D2    | 3    | ADC1_CH2     |
| D3    | 4    | ADC1_CH3     |
| D4    | 5    | ADC1_CH4, SDA |
| D5    | 6    | ADC1_CH5, SCL |
| D6    | 43   | TX           |
| D7    | 44   | RX           |
| D8    | 7    | ADC1_CH6, SS |
| D9    | 8    | ADC1_CH7, SCK |
| D10   | 9    | ADC1_CH8, MISO |

:::note
- GPIO 19 e 20 são usados para USB D-/D+ e não devem ser reconfigurados
- O LED onboard no GPIO 21 é ativo em LOW (defina como 0 para acender)
- Todos os pinos D0-D10 suportam entrada analógica via ADC1
:::

#### Compilando e Gravando

Compile seu projeto:

```bash
idf.py build
```

Grave na XIAO ESP32-S3:

```bash
idf.py -p /dev/ttyACM0 flash monitor
```

Substitua `/dev/ttyACM0` pela sua porta serial real (no Windows, normalmente `COM3`, `COM4`, etc.).

#### Solução de Problemas de Configuração da Placa

**PSRAM Não Detectada:**
- Verifique se o modo Octal está selecionado (não Quad)
- Verifique se o tamanho da flash está definido como 8MB
- Certifique-se de que a versão do ESP-IDF é 4.4 ou superior

**Falha no Upload:**
- Pressione e segure o botão BOOT enquanto conecta o USB
- Tente reduzir a velocidade de upload: `idf.py -p PORT -b 115200 flash`

**Conflitos de Pinos:**
- Evite usar os pinos GPIO 19 e 20 (USB D- e D+)
- XIAO_LED (GPIO 21) é compartilhado com o LED onboard

## O que são Tarefas?

Tasks são pequenas funções/trabalhos que o processador é solicitado a executar com um conjunto de configurações. As tasks podem variar de pequenas funções a funções com loop infinito.  
Tasks são as unidades fundamentais de execução em uma aplicação ESP-IDF. Elas são essencialmente funções que são executadas concorrentemente com outras tasks. Isso permite multitarefa eficiente e boa capacidade de resposta.

### Quais são as propriedades de uma task?

Devido à amplitude deste tópico, vou cobrir apenas algumas das propriedades que usaremos neste guia.

- **TaskFunction**: Esta é a função que contém a lógica real da task. É o ponto de entrada para a execução da task.
- **StackSize**: Especifica a quantidade de memória alocada para a pilha da task. A pilha é usada para armazenar variáveis locais, endereços de retorno de função e dados temporários.
- **TaskPriority**: Determina a importância relativa da task em comparação com outras tasks. Tasks com prioridade mais alta têm maior chance de serem executadas antes das de prioridade mais baixa.
- **TaskParameters**: São argumentos opcionais que podem ser passados para a função da task quando ela é criada. Eles podem ser usados para fornecer contexto adicional ou configuração para a task.
- **CoreAffinity**: Especifica em qual núcleo de CPU a task deve ser atribuída. Em sistemas com múltiplos núcleos, isso pode ser usado para otimizar o desempenho ou balancear a carga de trabalho.

### Criando uma task

Para criar uma task no FreeRTOS, a função xTaskCreate é usada. Essa função recebe vários parâmetros, incluindo a função da task, nome da task, tamanho da pilha, parâmetros, prioridade e um handle para a task criada.

```c
TaskHandle_t task;
xTaskCreate(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task                     /* Used to pass out the created task's handle. */
        );
```

### Criando uma task fixada a um núcleo

Para criar uma task e fixá-la a um núcleo específico (apenas se o chip em uso for dual core), a função xTaskCreatePinnedToCore é usada. Essa função é semelhante à xTaskCreate, mas inclui um parâmetro adicional para especificar o núcleo.

```c
TaskHandle_t task;
xTaskCreatePinnedToCore(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task,                    /* Used to pass out the created task's handle. */
        0);                       /* Core ID */
```

### Chamada da função da task

A função da task é o código real que será executado pela task.

```c
void taskFunction(void * pvParameters) {
  /*
  Function definition goes here
  */
}
```

## Visualização de tasks

Estou criando quatro tasks simples para visualizar como o FreeRTOS funciona.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/2.png" alt="pir" width={700} height="auto" /></p>

### Representação visual

```shell
CPU0
-----
taskFunction1 (1000ms delay)

CPU1
-----
taskFunction2 (500ms delay)
taskFunction3 (500ms delay)
taskFunction4 (500ms delay)
```

### Código

```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "sdkconfig.h"
#include "esp_log.h"

TaskHandle_t task1,task2,task3,task4;

void taskFunction1(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task1", "Hello from task 1");
        vTaskDelay(pdMS_TO_TICKS(1000)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction2(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task2", "Hello from task 2");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction3(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task3", "Hello from task 3");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction4(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task4", "Hello from task 4");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void app_main(void) {
    xTaskCreatePinnedToCore(
        taskFunction1, /* Function that implements the task. */
        "task_1",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task1,         /* Used to pass out the created task's handle. */
        0);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction2, /* Function that implements the task. */
        "task_2",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task2,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction3, /* Function that implements the task. */
        "task_3",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task3,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction4, /* Function that implements the task. */
        "task_4",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task4,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */
}
```

:::tip
configMINIMAL_STACK_SIZE pode ser alterado em sdkconfig.
:::

1. Quatro tasks: O código define quatro tasks: taskFunction1, taskFunction2, taskFunction3 e taskFunction4.
2. Prioridades das tasks: Todas as tasks são criadas com tskIDLE_PRIORITY. Isso significa que elas têm a mesma prioridade.
3. Fixação das tasks: taskFunction1 é fixada ao CPU0, enquanto as outras três tasks são fixadas ao CPU1.
4. Atrasos das tasks: taskFunction1 tem um atraso de 1000ms, enquanto as outras três têm um atraso de 500ms.

### Criando o agendamento de tasks do CPU0 e CPU1

Eu criei um agendamento básico de tasks para CPU0 e CPU1.

#### Agendamento de tasks do CPU0

```shell
Task: taskFunction1
Priority: Idle (lowest)
Delay: 1000ms
Core: 0
```

#### Agendamento de tasks do CPU1

```shell
Tasks: taskFunction2, taskFunction3, taskFunction4
Priorities: All Idle (same priority)
Delays: 500ms for all tasks
Core: 1
```

:::info
Este é um agendamento simplificado. O agendamento real de tasks em um sistema em tempo real envolveria fatores mais complexos, como prioridades de tasks, prazos e restrições de recursos.
:::

<details>

<summary> Output</summary>

```shell
I (11412) Task1: Hello from task 1
I (11522) Task3: Hello from task 3
I (11522) Task2: Hello from task 2
I (11532) Task4: Hello from task 4
I (12032) Task3: Hello from task 3
I (12032) Task2: Hello from task 2
I (12042) Task4: Hello from task 4
I (12422) Task1: Hello from task 1
I (12542) Task3: Hello from task 3
I (12542) Task2: Hello from task 2
I (12552) Task4: Hello from task 4
I (13052) Task3: Hello from task 3
I (13052) Task2: Hello from task 2
I (13062) Task4: Hello from task 4
I (13432) Task1: Hello from task 1
I (13562) Task3: Hello from task 3
I (13562) Task2: Hello from task 2
I (13572) Task4: Hello from task 4
I (14072) Task3: Hello from task 3
I (14072) Task2: Hello from task 2
I (14082) Task4: Hello from task 4
```

</details>

## Polling de sensor usando FreeRTOS

Para isso estou usando um sensor analógico [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) junto com ESP_IDF_v5.3.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Air_quality_Sensor_ESP-IDF.git" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Configuração de hardware

Conecte o Xiao-S3 à [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) e conecte o [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) ao conector analógico.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/3.jpg" alt="pir" width={600} height="auto" /></p>

### Configuração de Software

Após fazer o pull do repositório git, abra a pasta no VSCode. Vá para View->Command Palette->ESP-IDF: Add vscode Configuration Folder.
No painel inferior selecione a porta COM correta, o chip (ESP-S3) e então faça build, flash e monitor.

### Visão Geral do Código

Este código foi projetado para coletar dados de qualidade do ar de um sensor, processar os dados brutos para determinar o nível de qualidade do ar e imprimir periodicamente os resultados no console.

#### Componentes Principais

- Inicialização do Sensor:

```c
air_quality_sensor_t air_quality_sensor;

void sensor_setup()
{
    air_quality_sensor._io_num = ADC_CHANNEL_0;
    air_quality_sensor._adc_num = ADC_UNIT_1;
    printf("Starting Air Quality Sensor...\n");
    if(!initialize_air_quality_sensor(&air_quality_sensor))
    {
        printf("Sensor ready.\n");
    }
    else{
        printf("Sensor ERROR!\n");
    }
}
```

- A função sensor_setup() configura os pinos de I/O do sensor e a unidade ADC.
- Ela tenta inicializar o sensor usando initialize_air_quality_sensor().
- Se a inicialização for bem-sucedida, o sensor estará pronto para a coleta de dados.

- Tarefa de Coleta de Dados:

```c
void poll_read_air_quality_sensor(void *pvParameters)
{
    for (;;)
    {
        air_quality_sensor_slope(&air_quality_sensor);
        vTaskDelay(500 / portTICK_PERIOD_MS);
    }
}
```

- A tarefa poll_read_air_quality_sensor() é criada para ler continuamente dados brutos do sensor.
- Ela chama air_quality_sensor_slope() para processar os dados brutos e calcular a inclinação, que é um indicador da qualidade do ar.
- A tarefa aguarda 500 milissegundos antes de ler o próximo ponto de dados.

- Tarefa de Impressão de Dados:

```c

void print_read_air_quality_sensor(void *pvParameters)
{
    for (;;)
    {
        char buf[40];
        air_quality_error_to_message(air_quality_sensor._air_quality,buf);
        printf("Time : %lu\tSlope : %d\tRaw Value : %d\n%s\n", (uint32_t)esp_timer_get_time() / 1000, air_quality_sensor._air_quality, air_quality_sensor._sensor_raw_value,buf);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
    }
}
```

- A tarefa print_read_air_quality_sensor() é criada para imprimir periodicamente os dados coletados e a qualidade do ar calculada.
- Ela obtém o horário atual, a inclinação, o valor bruto e a mensagem de qualidade do ar usando air_quality_error_to_message().
- A tarefa imprime os dados no console de forma formatada.
- A tarefa aguarda 1000 milissegundos antes de imprimir o próximo ponto de dados.

```c

void app_main(void)
{
    sensor_setup();
    xTaskCreatePinnedToCore(
        poll_read_air_quality_sensor,   /* Function that implements the task. */
        "poll_read_air_quality_sensor", /* Text name for the task. */
        configMINIMAL_STACK_SIZE * 2,   /* Stack size in words, not bytes. */
        NULL,                           /* Parameter passed into the task. */
        tskIDLE_PRIORITY,               /* Priority at which the task is created. */
        NULL,                           /* Used to pass out the created task's handle. */
        0);                             /* Core ID */

    xTaskCreatePinnedToCore(
        print_read_air_quality_sensor,   /* Function that implements the task. */
        "print_read_air_quality_sensor", /* Text name for the task. */
        configMINIMAL_STACK_SIZE * 2,    /* Stack size in words, not bytes. */
        NULL,                            /* Parameter passed into the task. */
        tskIDLE_PRIORITY + 1,            /* Priority at which the task is created. */
        NULL,                            /* Used to pass out the created task's handle. */
        0);                              /* Core ID */
}
```

### Saída

```shell
Time : 37207    Slope : 3       Raw Value : 273
Fresh air.
Time : 38217    Slope : 3       Raw Value : 269
Fresh air.
Time : 39227    Slope : 3       Raw Value : 274
Fresh air.
Time : 40237    Slope : 3       Raw Value : 251
Fresh air.
Time : 41247    Slope : 3       Raw Value : 276
Fresh air.
Time : 42257    Slope : 3       Raw Value : 250
Fresh air.
Time : 43267    Slope : 3       Raw Value : 236
Fresh air.
Time : 44277    Slope : 3       Raw Value : 253
Fresh air.
Time : 45287    Slope : 3       Raw Value : 245
Fresh air.
Time : 46297    Slope : 3       Raw Value : 249
Fresh air.
Time : 47307    Slope : 3       Raw Value : 244
Fresh air.
Time : 48317    Slope : 3       Raw Value : 235
Fresh air.
Time : 49327    Slope : 3       Raw Value : 239
Fresh air.
Time : 50337    Slope : 3       Raw Value : 233
Fresh air.
Time : 51347    Slope : 3       Raw Value : 235
Fresh air.
```

## Uso da Câmera e do Cartão SD no FreeRTOS

Para isso estou usando a câmera e o cartão SD onboard juntamente com o ESP_IDF_v5.3.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Camera-and-SdCard-FreeRTOS.git" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Configuração de Hardware

Siga o [guia do cartão microSD](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_filesystem/) e o [guia da câmera](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_camera_usage/) para conectar a câmera e a placa de extensão do cartão microSD ao

- Formate o cartão microSD (suportado até 32Gb)
- Conecte o cartão microSD à placa de extensão

A configuração ficará algo como isto:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Frente</th>
        <th>Traseira</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/6.jpeg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/7.jpeg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Configuração de Software

Após fazer o pull do repositório git, abra a pasta no VSCode. Vá para View->Command Palette->ESP-IDF: Add vscode Configuration Folder.
No painel inferior selecione a porta COM correta, o chip (ESP-S3) e então faça build, flash e monitor.

:::tip
Se você estiver usando o modelo OV3660, é necessário configurá-lo no IDF para conseguir controlá-lo. Digite **"idf.py menuconfig"** no seu terminal
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>Etapa 1</th>
        <th>Etapa 2</th>
        <th>Etapa 3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36601.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36602.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36603.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Componente da Câmera

- Configuração da Câmera:
  - Define os pinos GPIO usados para várias funções da câmera (PWDN, RESET, XCLK, SIOD, SIOC, Y9-Y2, VSYNC, HREF, PCLK, LED).
  - Define valores padrão para parâmetros da câmera (por exemplo, frequência de clock, localização do frame buffer, formato de pixel, tamanho do frame, qualidade JPEG, contagem de frame buffer, modo de captura).

```c
#ifndef CAMERA_CONFIG_H
#define CAMERA_CONFIG_H

#define PWDN_GPIO_NUM     -1
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM     10
#define SIOD_GPIO_NUM     40
#define SIOC_GPIO_NUM     39

#define Y9_GPIO_NUM       48
#define Y8_GPIO_NUM       11
#define Y7_GPIO_NUM       12
#define Y6_GPIO_NUM       14
#define Y5_GPIO_NUM       16
#define Y4_GPIO_NUM       18
#define Y3_GPIO_NUM       17
#define Y2_GPIO_NUM       15
#define VSYNC_GPIO_NUM    38
#define HREF_GPIO_NUM     47
#define PCLK_GPIO_NUM     13

#define LED_GPIO_NUM      21

#endif //CAMERA_CONFIG_H
```

- Interface da Câmera:  
  Declara as funções initialize_camera() e createCameraTask().

- Implementação da Câmera:

  - Inicializa a câmera usando a configuração definida.

  ```c
  void initialize_camera(void)
  {
    camera_config_t camera_config = {
        .pin_pwdn = PWDN_GPIO_NUM,
        .pin_reset = RESET_GPIO_NUM,
        .pin_xclk = XCLK_GPIO_NUM,
        .pin_sccb_sda = SIOD_GPIO_NUM,
        .pin_sccb_scl = SIOC_GPIO_NUM,
        .pin_d7 = Y9_GPIO_NUM,
        .pin_d6 = Y8_GPIO_NUM,
        .pin_d5 = Y7_GPIO_NUM,
        .pin_d4 = Y6_GPIO_NUM,
        .pin_d3 = Y5_GPIO_NUM,
        .pin_d2 = Y4_GPIO_NUM,
        .pin_d1 = Y3_GPIO_NUM,
        .pin_d0 = Y2_GPIO_NUM,
        .pin_vsync = VSYNC_GPIO_NUM,
        .pin_href = HREF_GPIO_NUM,
        .pin_pclk = PCLK_GPIO_NUM,

        .xclk_freq_hz = 20000000,          // The clock frequency of the image sensor
        .fb_location = CAMERA_FB_IN_PSRAM, // Set the frame buffer storage location
        .pixel_format = PIXFORMAT_JPEG,    // The pixel format of the image: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size = FRAMESIZE_UXGA,      // The resolution size of the image: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality = 15,                // The quality of the JPEG image, ranging from 0 to 63.
        .fb_count = 2,                     // The number of frame buffers to use.
        .grab_mode = CAMERA_GRAB_LATEST    //  The image capture mode.
    };

    esp_err_t ret = esp_camera_init(&camera_config);
    if (ret == ESP_OK)
    {
        ESP_LOGI(cameraTag, "Camera configured successful");
    }
    else
    {
        ESP_LOGI(cameraTag, "Camera configured unsuccessful");
        return;
    }
  }
  ```

  - Define os parâmetros da câmera (brilho, contraste, saturação, efeito especial, balanço de branco, controle de exposição, AEC, nível de AE, valor de AEC, controle de ganho, ganho de AGC, limite de ganho, BPC, WPC, GMA bruto, LENC, hmirror, vflip, DCW, barras de cores).

  ```c
  sensor_t *s = esp_camera_sensor_get();

    s->set_brightness(s, 0);                 // -2 to 2
    s->set_contrast(s, 0);                   // -2 to 2
    s->set_saturation(s, 0);                 // -2 to 2
    s->set_special_effect(s, 0);             // 0 to 6 (0 - No Effect, 1 - Negative, 2 - Grayscale, 3 - Red Tint, 4 - Green Tint, 5 - Blue Tint, 6 - Sepia)
    s->set_whitebal(s, 1);                   // 0 = disable , 1 = enable
    s->set_awb_gain(s, 1);                   // 0 = disable , 1 = enable
    s->set_wb_mode(s, 0);                    // 0 to 4 - if awb_gain enabled (0 - Auto, 1 - Sunny, 2 - Cloudy, 3 - Office, 4 - Home)
    s->set_exposure_ctrl(s, 1);              // 0 = disable , 1 = enable
    s->set_aec2(s, 0);                       // 0 = disable , 1 = enable
    s->set_ae_level(s, 0);                   // -2 to 2
    s->set_aec_value(s, 300);                // 0 to 1200
    s->set_gain_ctrl(s, 1);                  // 0 = disable , 1 = enable
    s->set_agc_gain(s, 0);                   // 0 to 30
    s->set_gainceiling(s, (gainceiling_t)0); // 0 to 6
    s->set_bpc(s, 0);                        // 0 = disable , 1 = enable
    s->set_wpc(s, 1);                        // 0 = disable , 1 = enable
    s->set_raw_gma(s, 1);                    // 0 = disable , 1 = enable
    s->set_lenc(s, 1);                       // 0 = disable , 1 = enable
    s->set_hmirror(s, 0);                    // 0 = disable , 1 = enable
    s->set_vflip(s, 0);                      // 0 = disable , 1 = enable
    s->set_dcw(s, 1);                        // 0 = disable , 1 = enable
    s->set_colorbar(s, 0);                   // 0 = disable , 1 = enable
  ```

  - Define uma função takePicture() para capturar uma imagem e salvá-la no cartão SD.

  ```c
  void takePicture()
  {
    ESP_LOGI(cameraTag, "Taking picture...");
    camera_fb_t *pic = esp_camera_fb_get();

    if (pic)
    {
        saveJpegToSdcard(pic);
    }

    ESP_LOGI(cameraTag, "Picture taken! Its size was: %zu bytes", pic->len);

    esp_camera_fb_return(pic);
  }
  ```

  - Cria uma tarefa cameraTakePicture_5_sec() para tirar fotos continuamente a cada 5 segundos.

  ```c
  void cameraTakePicture_5_sec(void *pvParameters)
  {
      for (;;)
      {
          takePicture();
          vTaskDelay(5000 / portTICK_PERIOD_MS);
      }
  }

  void createCameraTask()
  {
      TaskHandle_t task;
      xTaskCreate(
          cameraTakePicture_5_sec,      /* Function that implements the task. */
          "cameraTakePicture_5_sec",    /* Text name for the task. */
          configMINIMAL_STACK_SIZE * 4, /* Stack size in words, or bytes. */
          NULL,                         /* Parameter passed into the task. */
          tskIDLE_PRIORITY,             /* Priority at which the task is created. */
          &task                         /* Used to pass out the created task's handle. */
      );
  }
  ```

Code Structure:

- Arquivos de cabeçalho (camera_config.h, camera_interface.h) e arquivos de implementação (camera_interface.c).
- O arquivo camera_config.h define os parâmetros de configuração da câmera.
- O arquivo camera_interface.h declara as funções para inicialização da câmera e criação de tarefas.
- O arquivo camera_interface.c implementa a inicialização da câmera, a captura de imagens e a lógica de criação de tarefas.

### SdCard Component

- Configuração do Cartão SD:  
  Define os pinos GPIO usados para a interface do cartão SD (MISO, MOSI, CLK, CS).

```c
#ifndef SDCARD_CONFIG_H
#define SDCARD_CONFIG_H

#define PIN_NUM_MISO  GPIO_NUM_8
#define PIN_NUM_MOSI  GPIO_NUM_9
#define PIN_NUM_CLK   GPIO_NUM_7
#define PIN_NUM_CS    GPIO_NUM_21

#endif //SDCARD_CONFIG_H
```

- Interface do Cartão SD:  
  Declara as funções initialize_sdcard(), deinitialize_sdcard() e saveJpegToSdcard().

```c
#ifndef SDCARD_INTERFACE_H
#define SDCARD_INTERFACE_H

#include "esp_camera.h"

void initialize_sdcard(void);
void deinitialize_sdcard();
void saveJpegToSdcard(camera_fb_t *);

#endif //SDCARD_INTERFACE_H
```

- Implementação do Cartão SD:

  - Inicializa o cartão SD usando a configuração definida e monta o cartão SD como um sistema de arquivos FAT.

  ```c
  sdmmc_card_t *card;
  sdmmc_host_t host = SDSPI_HOST_DEFAULT();
  const char mount_point[] = "/sd";

  void initialize_sdcard()
  {
      esp_err_t ret;

      // If format_if_mount_failed is set to true, SD card will be partitioned and
      // formatted in case when mounting fails.
      esp_vfs_fat_sdmmc_mount_config_t mount_config = {
  #ifdef FORMAT_IF_MOUNT_FAILED
          .format_if_mount_failed = true,
  #else
          .format_if_mount_failed = false,
  #endif // EXAMPLE_FORMAT_IF_MOUNT_FAILED
          .max_files = 5,
          .allocation_unit_size = 32 * 1024};

      ESP_LOGI(sdcardTag, "Initializing SD card");

      // Use settings defined above to initialize SD card and mount FAT filesystem.
      // Note: esp_vfs_fat_sdmmc/sdspi_mount is all-in-one convenience functions.
      // Please check its source code and implement error recovery when developing
      // production applications.
      ESP_LOGI(sdcardTag, "Using SPI peripheral");

      // By default, SD card frequency is initialized to SDMMC_FREQ_DEFAULT (20MHz)
      // For setting a specific frequency, use host.max_freq_khz (range 400kHz - 20MHz for SDSPI)
      spi_bus_config_t bus_cfg = {
          .mosi_io_num = PIN_NUM_MOSI,
          .miso_io_num = PIN_NUM_MISO,
          .sclk_io_num = PIN_NUM_CLK,
          .quadwp_io_num = -1,
          .quadhd_io_num = -1,
          .max_transfer_sz = host.max_freq_khz,
      };
      ret = spi_bus_initialize(host.slot, &bus_cfg, SDSPI_DEFAULT_DMA);
      if (ret != ESP_OK)
      {
          ESP_LOGE(sdcardTag, "Failed to initialize bus.");
          return;
      }

      // This initializes the slot without card detect (CD) and write protect (WP) signals.
      // Modify slot_config.gpio_cd and slot_config.gpio_wp if your board has these signals.
      sdspi_device_config_t slot_config = SDSPI_DEVICE_CONFIG_DEFAULT();
      slot_config.gpio_cs = PIN_NUM_CS;
      slot_config.host_id = host.slot;

      ESP_LOGI(sdcardTag, "Mounting filesystem");
      ret = esp_vfs_fat_sdspi_mount(mount_point, &host, &slot_config, &mount_config, &card);

      if (ret != ESP_OK)
      {
          if (ret == ESP_FAIL)
          {
              ESP_LOGE(sdcardTag, "Failed to mount filesystem. "
                                  "If you want the card to be formatted, set the FORMAT_IF_MOUNT_FAILED in sdcard_config.h");
          }
          else
          {
              ESP_LOGE(sdcardTag, "Failed to initialize the card (%s). "
                                  "Make sure SD card lines have pull-up resistors in place.",
                      esp_err_to_name(ret));
          }
          return;
      }
      ESP_LOGI(sdcardTag, "Filesystem mounted");

      // Card has been initialized, print its properties
      sdmmc_card_print_info(stdout, card);

      // Format FATFS
  #ifdef FORMAT_SD_CARD
      ret = esp_vfs_fat_sdcard_format(mount_point, card);
      if (ret != ESP_OK)
      {
          ESP_LOGE(sdcardTag, "Failed to format FATFS (%s)", esp_err_to_name(ret));
          return;
      }

      if (stat(file_foo, &st) == 0)
      {
          ESP_LOGI(sdcardTag, "file still exists");
          return;
      }
      else
      {
          ESP_LOGI(sdcardTag, "file doesnt exist, format done");
      }
  #endif // CONFIG_EXAMPLE_FORMAT_SD_CARD
  }
  ```

  - Fornece funções para salvar imagens JPEG no cartão SD.

  ```c
  uint16_t lastKnownFile = 0;

  void saveJpegToSdcard(camera_fb_t *captureImage)
  {
    // Find the next available filename
    char filename[32];

    sprintf(filename, "%s/%u_img.jpg", mount_point, lastKnownFile++);

    // Create the file and write the JPEG data
    FILE *fp = fopen(filename, "wb");
    if (fp != NULL)
    {
        fwrite(captureImage->buf, 1, captureImage->len, fp);
        fclose(fp);
        ESP_LOGI(sdcardTag, "JPEG saved as %s", filename);
    }
    else
    {
        ESP_LOGE(sdcardTag, "Failed to create file: %s", filename);
    }
  }
  ```

Component Structure:

- Arquivos de cabeçalho (sdcard_config.h, sdcard_interface.h) e arquivos de implementação (sdcard_interface.c).
- O arquivo sdcard_config.h define os parâmetros de configuração do cartão SD.
- O arquivo sdcard_interface.h declara as funções para inicialização, desinicialização e salvamento de imagens no cartão SD.
- O arquivo sdcard_interface.c implementa a lógica de inicialização, desinicialização e salvamento de imagens do cartão SD.

### Função Principal

```c
// main.c
#include <stdio.h>
#include "camera_interface.h"
#include "sdcard_interface.h"

void initialize_drivers()
{
    initialize_sdcard();
    initialize_camera();
}

void start_tasks()
{
    createCameraTask();
}

void app_main(void)
{
    initialize_drivers();
    start_tasks();
}
```

- Inclui os arquivos de cabeçalho necessários para as interfaces da câmera e do cartão SD.
- Inicializa tanto o cartão SD quanto a câmera usando as funções fornecidas.
- Inicia a tarefa da câmera para tirar fotos continuamente

### Saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/8.gif" alt="pir" width={600} height="auto" /></p>

#### Saída UART

```shell
I (1119) main_task: Calling app_main()
I (1123) sdcard: Initializing SD card
I (1127) sdcard: Using SPI peripheral
I (1132) sdcard: Mounting filesystem
I (1137) gpio: GPIO[21]| InputEn: 0| OutputEn: 1| OpenDrain: 0| Pullup: 0| Pulldown: 0| Intr:0
I (1146) sdspi_transaction: cmd=52, R1 response: command not supported
I (1195) sdspi_transaction: cmd=5, R1 response: command not supported
I (1219) sdcard: Filesystem mounted
Name: SD32G
Type: SDHC/SDXC
Speed: 20.00 MHz (limit: 20.00 MHz)
Size: 30448MB
CSD: ver=2, sector_size=512, capacity=62357504 read_bl_len=9
SSR: bus_width=1
I (1226) s3 ll_cam: DMA Channel=1
I (1230) cam_hal: cam init ok
I (1234) sccb: pin_sda 40 pin_scl 39
I (1238) sccb: sccb_i2c_port=1
I (1252) camera: Detected camera at address=0x30
I (1255) camera: Detected OV2640 camera
I (1255) camera: Camera PID=0x26 VER=0x42 MIDL=0x7f MIDH=0xa2
I (1344) cam_hal: buffer_size: 16384, half_buffer_size: 1024, node_buffer_size: 1024, node_cnt: 16, total_cnt: 375
I (1344) cam_hal: Allocating 384000 Byte frame buffer in PSRAM
I (1351) cam_hal: Allocating 384000 Byte frame buffer in PSRAM
I (1357) cam_hal: cam config ok
I (1361) ov2640: Set PLL: clk_2x: 0, clk_div: 0, pclk_auto: 0, pclk_div: 12
I (1453) camera: Camera configured successful
I (1487) main_task: Returned from app_main()
I (1487) camera: Taking picture...
I (1997) sdcard: JPEG saved as /sd/0_img.jpg
I (1997) camera: Picture taken! Its size was: 45764 bytes
I (6997) camera: Taking picture...
I (7348) sdcard: JPEG saved as /sd/1_img.jpg
I (7349) camera: Picture taken! Its size was: 51710 bytes
I (12349) camera: Taking picture...
I (12704) sdcard: JPEG saved as /sd/2_img.jpg
I (12705) camera: Picture taken! Its size was: 51853 bytes
I (17706) camera: Taking picture...
I (18054) sdcard: JPEG saved as /sd/3_img.jpg
I (18055) camera: Picture taken! Its size was: 51919 bytes
I (23055) camera: Taking picture...
I (23414) sdcard: JPEG saved as /sd/4_img.jpg
I (23414) camera: Picture taken! Its size was: 51809 bytes
I (28415) camera: Taking picture...
I (28768) sdcard: JPEG saved as /sd/5_img.jpg
I (28768) camera: Picture taken! Its size was: 51747 bytes
I (33771) camera: Taking picture...
I (34117) sdcard: JPEG saved as /sd/6_img.jpg
I (34117) camera: Picture taken! Its size was: 51968 bytes
```

#### Imagem de Saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/9.jpg" alt="pir" width={600} height="auto" /></p>

## FreeRtos para Arduino IDE

FreeRtos pode ser usado para builds do XIAO-S3 baseados em Arduino-IDE. É semelhante ao utilizável com ESP-IDF, mas roda apenas em um núcleo e não é otimizado para ESP-IDF.

### Configuração de Hardware

Conecte o Xiao-S3 à [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (display OLED e RTC) e conecte o [Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) ao barramento I2c.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/4.jpg" alt="pir" width={600} height="auto" /></p>

### Configuração de Software

Instale as bibliotecas Arduino para a biblioteca [pcf8563](https://github.com/Bill2462/PCF8563-Arduino-Library), [U8x8lib](https://github.com/olikraus/U8g2_Arduino) e [bme680](https://github.com/Seeed-Studio/Seeed_Arduino_BME68x). Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para instalar bibliotecas para Arduino.

```cpp
#include "time.h"
#include <WiFi.h>
#include <PCF8563.h>
#include <U8x8lib.h>
#include <Wire.h>
#include "seeed_bme680.h"

#define IIC_ADDR uint8_t(0x76)
Seeed_BME680 bme680(IIC_ADDR); /* IIC PROTOCOL */

// I2C communication library for the PCF8563 real-time clock
PCF8563 pcf;

// OLED display library
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/D4, /* data=*/D5, /* reset=*/U8X8_PIN_NONE);  // OLEDs without Reset of the Display

// WiFi network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

// NTP server for time synchronization
const char* ntpServer = "pool.ntp.org";

// Timezone offset (adjust based on your location)
const long gmtOffset_sec = 5.5 * 60 * 60;  // Hours * Minutes * Seconds (here, GMT+5:30)
const int daylightOffset_sec = 0;          // No daylight saving time assumed

// Global variable to store current time information
static Time nowTime;

// Function prototypes for tasks
void printDateAndTime(void* pvParameters);
void updateTime(void* pvParameters);
void ledBlink2Hz(void* pvParameters);
void oledDisplayUpdate(void* pvParameters);
void taskBME680(void* pvParameters);

// Setup function (runs once at startup)
void setup() {

  Serial.begin(115200);  // Initialize serial communication for debugging

  // Set built-in LED pin as output for blinking
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);  // Connect to WiFi network
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (!bme680.init()) {
    Serial.println("bme680 init failed ! can't find device!");
    delay(10000);
  }

  pcf.init();  // Initialize the PCF8563 real-time clock

  // Stop the clock before setting the time
  pcf.stopClock();

  // Configure time synchronization using NTP server
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  static struct tm timeinfo;
  while (!getLocalTime(&timeinfo)) {
    Serial.println("no received time info ... Waiting ...");
  }

  // Set the time on the PCF8563 clock based on retrieved time
  pcf.setYear(timeinfo.tm_year);
  pcf.setMonth(timeinfo.tm_mon);
  pcf.setDay(timeinfo.tm_mday);
  pcf.setHour(timeinfo.tm_hour);
  pcf.setMinut(timeinfo.tm_min);
  pcf.setSecond(timeinfo.tm_sec);

  pcf.startClock();  // Start the clock after setting the time

  Serial.println("WiFi connected at " + WiFi.localIP());

  u8x8.begin();         // Initialize the OLED display
  u8x8.setFlipMode(1);  // Optionally rotate OLED display content

  // Create tasks for different functionalities
  xTaskCreate(
    updateTime,
    "Get LocalTime",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);

  xTaskCreate(
    ledBlink2Hz,
    "Task 2",
    configMINIMAL_STACK_SIZE,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);

  xTaskCreate(
    oledDisplayUpdate,
    "OLED Display Task",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY,
    NULL);

  xTaskCreate(
    printDateAndTime,
    "Print Uart",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY,
    NULL);

  xTaskCreate(
    taskBME680,
    "BME680 Sensor Poll",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);
}

// Loop function (doesn't do anything in this case, tasks handle everything)
void loop() {
  // Nothing to do here, all work is done in the tasks
}

// Function that will run as a task: Prints current date and time to serial port
void printDateAndTime(void* pvParameters) {
  for (;;) {
    // Print current time in formatted string (DD/MM/YY\tHH:MM:SS) to serial port
    Serial.printf("%02d/%02d/%02d\t%02d:%02d:%02d\n",
                  nowTime.day, nowTime.month + 1, nowTime.year % 100,
                  nowTime.hour, nowTime.minute, nowTime.second);
    // Delay for 1 second before reading time again
    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}

// Function that will run as a task: Reads current time from PCF8563 clock
void updateTime(void* pvParameters) {
  for (;;) {
    // Update the global `nowTime` variable with the current time from the PCF8563 clock
    nowTime = pcf.getTime();
    // Delay for 0.5 second before reading time again (can be adjusted for desired update frequency)
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

// Function that will run as a task: Blinks the built-in LED at 2Hz
void ledBlink2Hz(void* pvParameters) {
  bool state = true;  // Initial state for LED (on or off)
  for (;;) {
    // Set LED state (HIGH for on, LOW for off)
    digitalWrite(LED_BUILTIN, (state ? HIGH : LOW));
    // Delay for 0.5 second to create a 2Hz blinking frequency (one cycle on/off)
    vTaskDelay(500 / portTICK_PERIOD_MS);
    // Toggle LED state for the next cycle
    state = !state;
  }
}

// Function that will run as a task: Updates OLED display with date and time
void oledDisplayUpdate(void* pvParameters) {
  for (;;) {

    // Set font for the first line (date)
    u8x8.setFont(u8x8_font_chroma48medium8_r);

    // Set cursor position for the first line (centered)
    u8x8.setCursor(0, 0);

    char buffer1[12];  // Buffer to hold formatted date string
    std::snprintf(buffer1, sizeof(buffer1), "%02d/%02d/%02d",
                  nowTime.day, nowTime.month + 1, nowTime.year % 100);
    u8x8.print(buffer1);

    // Format time string (HH:MM:SS) into buffer2 using std::snprintf
    std::snprintf(buffer1, sizeof(buffer1), "%02d:%02d:%02d",
                  nowTime.hour, nowTime.minute, nowTime.second);
    // Print formatted time string to OLED display
    u8x8.print(buffer1);

    // Adjust cursor position for the second line (below the first line)
    u8x8.setCursor(0, 10);

    char buffer2[20];  // Buffer to hold formatted sensor data

    std::snprintf(buffer2, sizeof(buffer2), "T: %.1f°C", bme680.sensor_result_value.temperature);
    u8x8.print(buffer2);
    u8x8.setCursor(0, 20);

    std::snprintf(buffer2, sizeof(buffer2), "P: %.1fkPa", bme680.sensor_result_value.pressure / 1000.0);
    u8x8.print(buffer2);

    u8x8.setCursor(0, 30);

    std::snprintf(buffer2, sizeof(buffer2), "H: %.1f%%", bme680.sensor_result_value.humidity);
    u8x8.print(buffer2);

    // std::snprintf(buffer2, sizeof(buffer2), "G: %.1f Kohms", bme680.sensor_result_value.gas / 1000.0);
    // u8x8.print(buffer2);

    vTaskDelay(100 / portTICK_PERIOD_MS);  // Update every 0.1 seconds (adjust as needed)
  }
}

void taskBME680(void* pvParameters) {
  for (;;) {
    if (bme680.read_sensor_data()) {
      Serial.println("Failed to perform reading :(");
    } else {
      Serial.print("T: ");
      Serial.print(bme680.sensor_result_value.temperature, 2);
      Serial.print(" C  P: ");
      Serial.print(bme680.sensor_result_value.pressure / 1000.0, 2);
      Serial.print(" KPa  H: ");
      Serial.print(bme680.sensor_result_value.humidity, 2);
      Serial.print(" %  G: ");
      Serial.print(bme680.sensor_result_value.gas / 1000.0, 2);
      Serial.println(" Kohms");
    }

    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}
```

### Saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/5.gif" alt="pir" width={600} height="auto" /></p>

### Saída do Monitor Serial

```shell
09/09/24 03:17:20
T: 29.01 C  P: 90.86 KPa  H: 63.41 %  G: 47.41 Kohms
09/09/24 03:17:21
T: 29.03 C  P: 90.86 KPa  H: 63.34 %  G: 47.85 Kohms
```

## Arduino FreeRtos vs ESP-IDF FreeRtos

| Recurso                | Arduino FreeRTOS                                                | ESP-IDF FreeRTOS                                                                                                   |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Camada de Abstração    | Abstração de nível mais alto, mais fácil para iniciantes        | Abstração de nível mais baixo, mais controle para usuários experientes                                            |
| Ambiente de Desenvolvimento | Arduino IDE                                                | Ferramentas de linha de comando ESP-IDF                                                                           |
| Compatibilidade         | Compatível principalmente com placas baseadas em Arduino        | Compatível com uma gama mais ampla de placas ESP32 e ESP32-S2                                                     |
| Recursos                | Recursos básicos de RTOS, criação de tarefas, escalonamento, sincronização | Recursos abrangentes de RTOS, criação de tarefas, escalonamento, sincronização, grupos de eventos, filas, mutexes, semáforos |
| Desempenho              | Geralmente com desempenho inferior devido à camada de abstração | Melhor desempenho devido ao acesso direto ao hardware e às APIs do RTOS                                           |
| Personalização          | Opções de personalização limitadas                              | Amplas opções de personalização por meio de arquivos de configuração e APIs                                       |
| Curva de Aprendizado    | Mais fácil de aprender para iniciantes                          | Curva de aprendizado mais íngreme para quem não está familiarizado com ferramentas de linha de comando e C/C++    |
| Casos de Uso            | Projetos simples de IoT, prototipagem                           | Aplicações IoT complexas, sistemas em tempo real, hardware personalizado                                          |

## Solução de Problemas

Alguns problemas podem ser encontrados durante o processo de conexão de hardware, depuração de software ou upload.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
