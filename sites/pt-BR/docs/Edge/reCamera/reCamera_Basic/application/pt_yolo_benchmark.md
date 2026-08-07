---
title: Benchmarking do YOLO11n na reCamera
description: Este caso de aplicação demonstra o desempenho extremo e os dados medidos da execução do modelo mais recente YOLO11n na plataforma de computação de borda reCamera.
keywords:
  - reCamera
  - Edge AI
  - YOLO11
  - Benchmark
slug: /recamera_benchmarking
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif
sidebar_position: 1
last_update:
  date: 2026-06-02
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/pt-br/reCamera/reCamera_Basic/application/recamera_benchmarking/
---

# Benchmarking de Borda do YOLO11n na reCamera

## 1. Introdução

Com o aprofundamento contínuo dos cenários de IA de borda, como executar a geração mais recente de modelos de visão sob um consumo de energia extremamente limitado tornou-se a demanda central dos desenvolvedores. Este WIKI irá demonstrar de forma direta o desempenho de referência (Benchmark) da **reCamera** ao implantar o modelo **YOLO11n**.
Aqui, você verá como a reCamera aciona suavemente os modelos de detecção de objetos e segmentação de instâncias YOLO11n com apenas **1,5W** de consumo de energia.

---

## Preparação de Hardware

- Uma reCamera
- Um PC

<table align="center">
 <tr>
  <th>Série reCamera 2002</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

---

## 2. Exibição do Efeito em Tempo Real

Ver para crer. Executamos localmente os modelos de detecção e segmentação YOLO11n na reCamera e usamos o protocolo UDP para transmitir o vídeo processado e os dados de computação para o PC em tempo real.

As informações de OSD no canto superior esquerdo da tela exibem em tempo real a divisão rigorosa do tempo de consumo de hardware: consumo de tempo de **Pré-processamento**, **Inferência**, **Pós-processamento** e **Total**.

### Transmissão em Tempo Real de Segmentação de Instâncias YOLO11n
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif" alt="YOLO11n Segmentation Demo" />
</div>
<br/>

### Transmissão em Tempo Real de Detecção de Objetos YOLO11n
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-detect.gif" alt="YOLO11n Detection Demo" />
</div>

:::note Descrição do Teste
As animações acima mostram gravações reais de tela. Os resultados do teste são afetados pela resolução de entrada do modelo (640x640) e pela precisão de quantização (INT8), e são apenas para referência de implantação de engenharia.
:::

---


## 3. Resultados Centrais do Benchmark

Sob testes de estresse de carga total de longo prazo, a reCamera demonstrou uma "relação desempenho-consumo" extremamente excelente. A seguir está o desempenho extremo do modelo YOLO11n quantizado em INT8 no NPU:

| Tipo de Tarefa do Modelo | Resolução de Entrada | Formato de Quantização | Taxa de Quadros de Pico (FPS) | Latência de Fim a Fim por Quadro Único | Potência Média de Operação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **YOLO11n Detecção de Objetos** | 640 x 640 | INT8 | **20 FPS** | **50 ms** | **1,5 W** |
| **YOLO11n Segmentação de Instâncias** | 640 x 640 | INT8 | **10 FPS** | **100 ms** | **1,5 W** |

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_information.png" alt="YOLO11n Benchmark" />
</div>

:::info 📊 Descrição das Unidades e Indicadores de Teste
* **FPS (Frames Per Second)**: Refere-se ao **número de quadros que o dispositivo pode processar por segundo**. 20 FPS significa que o sistema pode completar continuamente 20 reconhecimentos de imagem por IA em 1 segundo. Quanto maior o valor, mais suave será o vídeo de monitoramento em tempo real.
* **ms (Milissegundos)**: ou seja, um milésimo de segundo. Aqui refere-se ao **tempo total de fim a fim para processar uma única imagem**. 50 ms significa que o dispositivo leva no mínimo apenas ***0,05 segundos*** para processar um quadro de vídeo (incluindo pré-processamento, inferência NPU, pós-processamento e todas as outras etapas).
* **W (Watt)**: A unidade de medida para consumo de energia do dispositivo. Aqui 1,5W refere-se ao consumo médio de energia de todo o dispositivo reCamera ao executar modelos de IA em carga total.
:::

### 💡 Análise Detalhada dos Dados
* **Eficiência Energética Extrema**: O consumo de energia de 1,5W é quase equivalente ao modo de suspensão de um computador de placa única comum, mas a reCamera pode atingir uma taxa de quadros de detecção de 20 FPS/S com esse consumo, encaixando-se perfeitamente em cenários de monitoramento externo alimentados por baterias ou PoE de longa distância.
* **Desempenho de Latência**: A latência de fim a fim ultrabaixa de no mínimo 50 ms para o modelo de detecção significa que ele pode capturar facilmente objetos em movimento rápido; enquanto o modelo de segmentação, apesar de adicionar o operador de decodificação de Mask de alta carga, ainda pode manter uma experiência suave de até 10 FPS/S.

---


## 4. Prática Hands-on: Reproduzir o Benchmark

Se você já possui um dispositivo reCamera, pode reproduzir facilmente localmente os resultados de teste acima com apenas alguns passos simples.

### Etapa 1: Obter o Executável de Benchmark e o Modelo
Primeiro, baixe o arquivo bin compilado, o arquivo de modelo convertido `.cvimodel` e o script em python através do link abaixo:

```bash
[https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link](https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link)
```

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_list.png" alt="YOLO11n List" />
</div>

### Etapa 2: Enviar Arquivos para o Dispositivo reCamera
Envie o arquivo bin baixado e o arquivo de modelo para o diretório /userdata/ do dispositivo reCamera.
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_userdata.png" alt="YOLO11n UserData" />
</div>

### Etapa 3: Executar o Teste de Benchmark
Execute o seguinte comando no dispositivo reCamera para iniciar o teste de benchmark:

```bash
# The first parameter is the model file path, and the second parameter is the IP address of the streaming target
./recamera_benchmark ./yolo11n_detection_cv181x_int8.cvimodel 192.168.4.35
```

Se você quiser visualizar os resultados do teste, pode executar o seguinte comando no terminal do Windows para executar o script udp e receber o fluxo de vídeo da reCamera:
```bash
python.exe .\yolo_udp.py
```

---


## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Forneceremos a você diversos tipos de suporte para garantir que você tenha a experiência mais tranquila possível ao usar nossos produtos. Oferecemos múltiplos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>