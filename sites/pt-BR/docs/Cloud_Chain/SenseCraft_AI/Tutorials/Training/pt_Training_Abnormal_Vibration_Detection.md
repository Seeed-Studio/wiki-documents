---
description: Introduz o uso da detecção de vibração anormal.
title: Detecção de Vibração Anormal
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 01/06/2026
  author: jancee
createdAt: '2025-08-14'
updatedAt: '2026-01-06'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection/
---

# Detecção de Anomalias de Vibração

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

Assim como a menor lesão pode levar a uma doença fatal, os desastres de engenharia mais graves muitas vezes se originam de anomalias aparentemente insignificantes. A vibração é um indicador crucial — fraturas, obstruções, sobrecargas e desgaste se manifestam em padrões de vibração distintos.

Este tutorial apresenta o **Vibration Anomaly Detection Kit**. É uma solução inteligente e leve projetada para monitorar e identificar padrões de vibração anormais em tempo real. Ao aprender a assinatura de vibração normal de um dispositivo com dados de treinamento mínimos, ele fornece alertas antecipados de falhas mecânicas.

<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

---

## 1. Preparação

Antes de começar a detectar anomalias, certifique-se de que você tenha os seguintes ambientes de hardware e software prontos.

### Requisitos de Hardware

A solução é composta por 3 módulos de hardware.

- **MCU:** <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldered)**</a>
- **Placa de Expansão:** <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO**</a> (com gerenciamento de bateria integrado)
- **Sensor:** <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3-Axis Digital Accelerometer (LIS3DHTR)**</a>
- **Cabo:** 1 cabo de dados USB-C
- **Objeto Alvo:** Um dispositivo com vibrações regulares e consistentes (por exemplo, motor, ventilador).

**Obtenha o Kit completo:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>

### Configuração de Software

1. Abra o navegador e acesse <a href="https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home" target="_blank">**SenseCraft AI**</a>.
2. Faça login com sua conta (registre-se se ainda não tiver uma).
3. Entre no workspace **XIAO ESP32S3 Sense** e selecione **"Vibration"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

---

## 2. Guia Passo a Passo

Siga estes passos para treinar seu dispositivo a reconhecer vibrações "normais" e detectar anomalias.

### Passo 1: Conectar e Inicializar

1. **Montagem:** Conecte o acelerômetro ao XIAO ESP32-S3 por meio do Grove Shield. Prenda o sensor firmemente ao seu objeto alvo.
2. **Conectar:** Conecte o XIAO ESP32S3 ao computador via USB. Clique no botão **"Connect"** na interface do SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>

3. **Verificar:** O sistema exibirá as informações do dispositivo.
    * *Observação:* Se o firmware estiver incorreto, use o botão de gravação na interface para atualizar para o **firmware Vibration Anomaly Detection (VAD)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>

### Passo 2: Configuração

Depois de conectado, você verá a área de Configurações de Parâmetros.
* **Window Size:** O padrão é **192**. Mantenha esse padrão por enquanto.
    * *Dica:* Uma janela muito pequena pode levar a aprendizado insuficiente, enquanto uma janela muito grande aumenta o tempo de inferência. Você pode ajustar isso depois.

### Passo 3: Treinar (Coletar Dados Normais)

O dispositivo precisa aprender como é o estado "Normal".

1. Certifique-se de que o objeto alvo esteja operando em seu **estado normal**.
2. Clique em **"Collect Normal Vibration"**.
3. Aguarde a mensagem de sucesso: "Normal vibration collection succeeded".
4. Clique em **"Save"**. Isso armazena o modelo na memória flash da MCU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

### Passo 4: Detectar Anomalias

1. Clique em **"Detect"** para iniciar o monitoramento em tempo real.
2. Observe a **Área de Saída de Detecção**:
    * **Normal:** O padrão de vibração corresponde ao modelo aprendido.
    * **Abnormal:** Uma possível anomalia é detectada (Alerta exibido).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>

### Passo 5: Implantação & GPIO

Você pode configurar o dispositivo para acionar hardware externo quando ocorrer uma anomalia.

1. Localize a seção **GPIO Configuration**.
2. Selecione um pino (por exemplo, LED no Pino 21) e defina o nível ativo para o estado anormal.
3. Ative **"Default Power-On Inference Mode"**. Isso permite que o dispositivo funcione automaticamente quando alimentado por bateria, sem conexão com o computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>

---

## 3. Guia de Ajuste de Parâmetros

Se você achar que a detecção está muito sensível (falsos alarmes) ou pouco sensível, será necessário ajustar os parâmetros.

### Visão Geral da Interface para Ajuste

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

A interface ajuda você a visualizar os dados:
1.  **Informações do Dispositivo:** Área superior.
2.  **Configurações:** Parâmetros e configurações de Coleta.
3.  **Visualização:** Forma de onda em tempo real (Tempo vs. Aceleração).
4.  **Saída:** Resultados da detecção (0 para Normal, 1 para Anormal).

### Parâmetros Principais

#### 1. Window Size
Define o número de pontos de amostra para um "ciclo" de análise.
* **Padrão:** 192 (aprox. 1,92 segundos a 100Hz).
* **Como Ajustar:** A janela deve cobrir pelo menos um ciclo completo de vibração. Use o gráfico de forma de onda para medir o período da vibração da sua máquina. Se a máquina vibrar lentamente, aumente o Window Size.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

#### 2. Anomaly Threshold
Define a sensibilidade da detecção.
* **Faixa:** 0.0 a 1.0 (Padrão: 0.5).
* **Como Ajustar:**
    * **Muitos falsos alarmes?** Aumente o limiar (por exemplo, para 0,6 ou 0,7).
    * **Anomalias não detectadas?** Diminua o limiar (por exemplo, para 0,3 ou 0,4).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

---

## 4. Algoritmo & Teoria

*Esta seção explica a tecnologia por trás dos botões "Collect" e "Detect". Ela é opcional para o uso básico.*

O sistema utiliza o algoritmo **Gyroscope Euclidean Distance Anomaly Detection (GEDAD)**, adaptado para acelerômetros de 3 eixos. Ele consiste em duas fases:

### Fase 1: Aprendizado
O algoritmo estabelece um template de referência de vibração normal.
1.  **Geração de Template:** Coleta um conjunto de dados normais de aceleração em 3 eixos.
2.  **Cálculo de Limiar:** O algoritmo desliza "blocos" de dados sobre o template, calculando a distância Euclidiana (L2). Em seguida, determina estatisticamente um limiar que separa variações normais de anomalias.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

### Fase 2: Inferência
Durante a detecção em tempo real, os dados recebidos são comparados com o template aprendido.
* Se a distância Euclidiana dos dados em tempo real estiver abaixo do limiar em relação ao template, é considerado **Normal**.
* Se a distância permanecer acima do limiar, é sinalizado como **Abnormal**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

**Vantagens:**
* Alta velocidade de treinamento.
* Baixa sobrecarga computacional (adequado para ESP32S3).
* Requer poucos dados para treinamento.

---

## 5. Cenários de Aplicação

O Vibration Anomaly Detection Kit é ideal para manutenção preditiva e monitoramento de segurança em diversos campos:

* **Industrial:** Bombas, Compressores de Ar, Ventiladores, Motores, Caixas de Engrenagens.
* **HVAC:** Compressores de Refrigeração, Torres de Resfriamento.
* **Robótica:** Sistemas AGV/AMR, Tratores Agrícolas.
* **Data Centers:** Unidades de Chiller, Resfriamento de Servidores.
* **Consumidor:** Alertas de balanceamento de Máquina de Lavar, mecanismos de portas de garagem.

---

## Código Aberto & Suporte

**Código-fonte:** <a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab</a>

Nossos algoritmos e firmware são de código aberto. Estamos trabalhando ativamente em recursos como relatórios via WiFi + MQTT e análise FFT. Sinta-se à vontade para enviar um <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a> ou um <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>.

**Suporte Técnico:**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
