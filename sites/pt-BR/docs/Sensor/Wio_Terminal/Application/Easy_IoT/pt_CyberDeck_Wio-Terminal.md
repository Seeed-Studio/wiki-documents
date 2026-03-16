---
title: Cyber Desk no Wio Terminal usando Platform IO, com tecnologia Cursor AI
image: https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal_1.gif
slug: /CyberDeck_Wio-Terminal
last_update:
  date: 12/09/2024
  author: Eric Pan
createdAt: '2024-12-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/CyberDeck_Wio-Terminal/
---

# Tutorial de Monitor de PC com Wio Terminal - Estilo Cyberpunk

- [**Visão Geral de Todo o Projeto**](#jump1)
- [**Tutorial de Uso do Cursor AI**](#jump2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal.gif" style={{width:500, height:'auto'}}/></div>

## Visão Geral do Projeto {#jump1}

Crie um sistema de monitoramento de PC em estilo cyberpunk usando o Wio Terminal como terminal de exibição para monitorar vários indicadores de desempenho do computador em tempo real.

## Requisitos de Hardware

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)  
- Cabo de Dados USB-C  
- Um Computador com Windows  

## Requisitos de Software

- [VSCode](https://code.visualstudio.com/) + Plugin PlatformIO  
- [Python 3.x](https://www.python.org/)
- Open Hardware Monitor (para obter dados de temperatura)  

## Passos Detalhados

### 1. Configuração do Ambiente

- Instale os pacotes Python:

  ```bash
  pip install psutil pyserial GPUtil wmi pywin32
  ```

- Instale os plugins do VSCode:
  1. Instale o plugin **PlatformIO IDE**  
  2. Instale e execute o **OpenHardwareMonitor**  

### 2. Crie o Projeto

- Crie um projeto PlatformIO:  
  1. Abra o VSCode  
  2. Clique no ícone do PlatformIO  
  3. Selecione "New Project"  
  4. Configuração:  
     - **Board:** "Seeed Wio Terminal"  
     - **Framework:** "Arduino"  

### 3. Implementação do Código

#### (a) Configure `platformio.ini`

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
lib_deps = 
    Seeed_Arduino_LCD@2.1.0
```

#### (b) Crie o Script de Monitoramento do PC (`pc_stats.py`)

```python
import psutil
import serial
import time
import GPUtil
import socket
import wmi
from datetime import datetime

def get_cpu_temp():
    try:
        w = wmi.WMI(namespace="root\wmi")
        temperature_info = w.MSAcpi_ThermalZoneTemperature()[0]
        temp = float(temperature_info.CurrentTemperature) / 10.0 - 273.15
        return max(0, min(temp, 100))
    except Exception as e:
        print(f"[WARN] Unable to read CPU temperature: {e}")
        return 0.0

# Configure serial port (modify COM port as needed)
ser = serial.Serial('COM10', 115200)
while True:
    try:
        # Retrieve system data
        cpu_usage = psutil.cpu_percent()
        ram_usage = psutil.virtual_memory().percent
        cpu_temp = get_cpu_temp()
        disk_usage = psutil.disk_usage('/').percent

        # Retrieve GPU information
        try:
            gpus = GPUtil.getGPUs()
            gpu_usage = gpus[0].load * 100
            gpu_temp = gpus[0].temperature
        except:
            gpu_usage = gpu_temp = 0

        # Send data to Wio Terminal
        data = f"{cpu_usage},{ram_usage},{cpu_temp},{gpu_usage},{gpu_temp},{disk_usage},{socket.gethostbyname(socket.gethostname())}\n"
        ser.write(data.encode())
        time.sleep(0.5)

    except KeyboardInterrupt:
        ser.close()
        break
```

#### (c) Crie o Código do Wio Terminal (`main.cpp`)

```cpp
#include <Arduino.h>
#include "TFT_eSPI.h"

TFT_eSPI tft;
int currentPage = 0;

// Define buttons
const int BTN_1 = WIO_KEY_A;
const int BTN_2 = WIO_KEY_B;
const int BTN_3 = WIO_KEY_C;

// PC State Structure
struct PCStats {
    int cpuUsage = 0;
    int ramUsage = 0;
    float cpuTemp = 0.0;
    int diskUsage = 0;
    int gpuUsage = 0;
    float gpuTemp = 0.0;
    char ipAddress[16] = "0.0.0.0";
    unsigned long lastUpdate = 0;
} pcStats;

// Drawing Functions
void drawBox(int x, int y, int w, int h) {
    tft.drawRect(x, y, w, h, TFT_GREEN);
}

void drawTitle(const char* title) {
    tft.drawString("<<", 10, 10);
    tft.drawString(title, 40, 10);
    tft.drawString(">>", 270, 10);
    drawBox(5, 5, 310, 230);
    tft.drawLine(10, 30, 300, 30, TFT_GREEN);
}

// [Other drawing functions...]

void setup() {
    Serial.begin(115200);
    tft.begin();
    tft.setRotation(3);
    tft.setTextSize(2);

    pinMode(BTN_1, INPUT_PULLUP);
    pinMode(BTN_2, INPUT_PULLUP);
    pinMode(BTN_3, INPUT_PULLUP);

    drawPage(currentPage);
}

void loop() {
    // Receive and parse data
    if (Serial.available()) {
        String data = Serial.readStringUntil('\n');
        // Parse data...
    }

    // Button handling
    if (digitalRead(BTN_1) == LOW) {
        currentPage = 0;
        drawPage(currentPage);
        delay(200);
    }
    // [Other button handling...]

    // Update display
    if (currentPage == 0) {
        drawSystemStatus();
        delay(100);
    }
}
```

### 4. Execute o Projeto

1. Envie o código para o Wio Terminal  
2. Execute o **OpenHardwareMonitor**  
3. Execute o script Python:

   ```bash
   python pc_stats.py
   ```

4. Use os botões no Wio Terminal para alternar entre páginas:  
   - **Botão A:** Status do Sistema  
   - **Botão B:** Monitoramento de Desempenho  
   - **Botão C:** Informações de Rede  

---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/cyberdesk_wio-terminal.jpg" style={{width:300, height:'auto'}}/></div>

## Sugestões de Personalização

1. **Ajustar Estilo de Exibição:** Modifique cores (por exemplo, `TFT_GREEN`), layout e tamanho da fonte.  
2. **Adicionar Animações:** Adicione efeitos animados para um visual mais cyberpunk.  
3. **Adicionar Novos Recursos:**  
   - Monitoramento de velocidade de rede  
   - Velocidade de leitura/gravação do disco  
   - Informações de processos do sistema  

---

## Solução de Problemas

1. **Problemas de Conexão Serial:**  
   - Verifique se a porta COM está correta  
   - Confirme as configurações de baud rate (115200)  

2. **Problemas na Leitura de Temperatura:**  
   - Certifique-se de que o **OpenHardwareMonitor** está em execução  
   - Verifique as permissões de administrador  

3. **Problemas de Exibição:**  
   - Verifique se as coordenadas de exibição excedem os limites  
   - Use a função `clearArea` para evitar ghosting  

---

## Otimização Avançada

- Adicionar funcionalidade de registro de dados  
- Implementar limites de aviso  
- Personalizar temas de exibição  
- Adicionar exibição de gráficos  
- Habilitar conectividade WiFi  

Este projeto é ótimo para iniciantes e oferece bastante espaço para expansão. Comece com a funcionalidade básica e adicione gradualmente os recursos que você deseja.

---

## Tutorial de Desenvolvimento com Cursor AI - Com base no Monitor de PC no Wio Terminal {#jump2}

## 1. Conceitos Básicos do Cursor AI

### 1.1 Inicialização do Projeto

1. Abra o editor Cursor.  
2. Diga à IA o que você quer criar:  
   > "I want to create a Wio Terminal project to display PC system information in a cyberpunk style."  
3. A IA vai ajudá-lo a:  
   - Sugerir a estrutura do projeto  
   - Criar os arquivos necessários  
   - Fornecer o código inicial  

---

### 1.2 Modo de Colaboração

- **Descreva de forma clara e específica:** Foque em um recurso por vez.  
- **Forneça feedback rapidamente:** Avise a IA quando encontrar problemas.  

---

## 2. Estudo de Caso Prático

### 2.1 Criar Funcionalidade Básica de Exibição

**Bom prompt:**  
> "Help me create a Wio Terminal display program to show CPU usage, memory usage, and temperature information."  

- A IA vai fornecer:  
  - Arquivos de cabeçalho necessários  
  - Estrutura básica do código  
  - Implementação das funções de exibição  

---

### 2.2 Resolver Problemas Específicos

**Exemplo:** Corrigindo problemas de leitura de temperatura  
**Bom prompt:**  
> "The CPU temperature reading is 0. How can I fix this?"  

- Resposta da IA:  
  1. Analisar possíveis causas  
  2. Fornecer múltiplas soluções  
  3. Mostrar exemplos de implementação  

---

### 2.3 Otimizar Efeitos de Exibição

**Bom prompt:**  
> "How can I optimize the display for a more cyberpunk style?"  

- A IA irá:  
  - Fornecer sugestões de design  
  - Implementar código específico  

---

## 3. Técnicas de Depuração

### 3.1 Tratando Erros de Código

- Ao encontrar erros de compilação, copie a mensagem de erro para a IA:  
  > "I encountered this error during compilation: [error message]"  

- A IA irá:  
  - Analisar a causa do erro  
  - Fornecer correções  
  - Explicar a solução  

---

### 3.2 Tratando Problemas de Lógica

**Boa descrição:**  
> "The numbers on the screen have ghosting when updated. How can I fix this?"  

- Processo da IA:  
  1. Entender a causa raiz  
  2. Sugerir funções de limpeza de área  
  3. Fornecer uma solução completa  

---

## 4. Boas Práticas

### 4.1 Fazendo as Perguntas Certas

1. **Seja Específico:**  
   - "I want to implement [specific feature]."  
2. **Forneça Contexto:**  
   - "I’ve implemented [A feature], now I want to add [B feature]."  
3. **Descreva os Problemas Claramente:**  
   - "I encountered [specific issue], and the error message is [error content]."  

---

### 4.2 Otimização de Código

1. **Solicitar Revisão de Código:**  
   - "Can you review this code and suggest improvements?"  
2. **Otimização de Desempenho:**  
   - "This code runs slowly. How can I optimize it?"  
3. **Melhoria de Estilo de Código:**  
   - "How can I make this code more readable and maintainable?"  

---

### 4.3 Expansão de Funcionalidades

1. **Desenvolvimento Gradual:**  
   - "I want to add [new feature]. How should I start?"  
2. **Solicitações de Modularização:**  
   - "How can I modularize this feature for future extensions?"  

---

## 5. Armadilhas Comuns

### 5.1 O que Evitar

- **Problemas Pouco Claros:**  
  - ❌ "The code doesn’t work. What do I do?"  
- **Informações Incompletas:**  
  - ❌ "There’s an error. Help me fix it."  
- **Escopo Muito Amplo:**  
  - ❌ "Help me complete the entire project."  

---

### 5.2 Práticas Recomendadas

- **Descrição Clara do Problema:**  
  - ✅ "The CPU usage value is always 0. How can I fix this?"  
- **Forneça Informações Completas:**  
  - ✅ "I encountered this error: [complete error info]. Using library version: ..."  
- **Divisão Razoável de Tarefas:**  
  - ✅ "Let’s first implement the basic display, then add other features step by step."  

---

## 6. Conclusão

- **Desenvolvimento Gradual:** Comece com a funcionalidade básica e depois adicione novos recursos.  
- **Resolução Oportuna de Problemas:** Trate os problemas à medida que surgirem.  
- **Comunicação Eficaz:** Descreva claramente suas necessidades e forneça contexto.  
- **Otimização Contínua:** Revise e melhore seu código regularmente.  

Ao desenvolver este projeto, você pode ver como o Cursor AI melhora significativamente a eficiência de desenvolvimento. A chave é aprender a colaborar de forma eficaz com a IA. Perguntas claras e requisitos bem definidos o ajudarão a obter resultados melhores.
