---
description: Introdução à RS485 Vision AI Camera
title: RS485 Vision AI Camera
keywords:
  - RS485 Vision
  - Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /getting_started_with_rs485_vision_ai_cam
sku: 110992084
sidebar_position: 4
last_update:
  date: 12/26/2024
  author: Jason
createdAt: '2025-01-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_rs485_vision_ai_cam/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## Visão geral dos softwares compatíveis

- [**Introdução sem código com SenseCraft AI**](#jump1)
  - [O que é SenseCraft AI?](#jump2)
  - [Primeiros passos com o SenseCraft AI Model Assistant](#jump3)
- [**Programar no Arduino conectando com a placa Seeed Studio XIAO**](#jump4)
  - [Introdução à biblioteca Arduino](#jump5)
  - [Primeiros passos com Seeed Studio XIAO](#jump6)

## Visão geral do hardware

### Introdução

A Seeed Studio RS485 Vision AI Camera é um dispositivo inteligente que combina um MCU ESP32-C3 (Seeed Studio XIAO) com um processador Himax WiseEye2 HX6538, com núcleo duplo Arm Cortex-M55 e um processador neural Ethos-U55 integrado. Esta câmera avançada oferece reconhecimento de IA de alto desempenho com resolução de 480×480 e 10 FPS, mantendo baixo consumo de energia por meio de opções flexíveis para transmissão dos resultados de inferência. Com sua interface Modbus RS485 padrão, integra-se perfeitamente a sistemas industriais e oferece suporte a conectividade LoRaWAN e 4G por meio de SenseCAP DTUs ou outros dispositivos DTU RS485 padrão. Protegida por um gabinete com classificação IP66, suporta condições ambientais adversas, tornando-a ideal para aplicações internas e externas. A câmera se destaca em várias tarefas de visão computacional, incluindo contagem de pessoas, detecção de objetos e classificação. Os usuários podem implantar modelos a partir de mais de 300 modelos pré-treinados ou treinar modelos personalizados na plataforma sem código SenseCraft AI, enquanto modelos de IA nos frameworks TensorFlow e PyTorch são suportados. Questões de privacidade são abordadas por meio do seu design para transmitir apenas os resultados de inferência, com transmissão opcional de quadros-chave via Wi-Fi quando necessário.

### Preparação de equipamentos

<div class="table-center">
<table align="center">
    <tr>
        <th>RS485 Vision AI Camera </th>
    </tr>
    <tr>
    <td><div align="center"><img width ={550} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/shop.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Vision-AI-Camera-p-6346.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Características

- Poderosa capacidade de processamento de IA visual: inferência local de até 480*480 10FPS com o processador WiseEye2 HX6538 com núcleo duplo Arm Cortex-M55 e unidade de rede neural Arm Ethos-U55 integrada.

- Computação de borda para alta segurança de dados: inferência de imagem local, enviando apenas o resultado final, adequada para aplicações que exigem transmissão de dados limitada e alta privacidade de dados.  

- Modelos de IA multifuncionais: fornecida com 3 modelos integrados de detecção de humanos, contagem de pessoas e leitura de medidores, e também é fácil implantar modelos públicos de IA ou treinar modelos personalizados de IA no SenseCraft AI com poucos cliques. Suporta os frameworks TensorFlow e PyTorch.

- Múltiplos protocolos de transmissão: suporta transmissão de resultados de inferência via protocolo RS485 padrão; conecte-se ao SenseCAP S2100/ 4G Sensor Hub DTU para obter os resultados via LoRaWAN ou 4G. Também suporta transmissão de quadros-chave via Wi-Fi.

- Resistência à poeira e à água: proteção com classificação IP66 garante implantação estável de longo prazo em ambientes internos e externos.

- Gerenciamento de modelos via SenseCraft App: configure e alterne entre modelos de IA pré-instalados com apenas alguns toques. Ajuste facilmente os limiares de confiança do modelo para otimizar o desempenho para o seu caso de uso específico.

### Especificações

<table align="center">
 <tr>
     <th>Modelo do produto</th>
        <th>S-VA-01B</th>
 </tr>
 <tr>
     <th>Corrente de entrada</th>
        <th>1A</th>
 </tr>
 <tr>
     <th>Tensão de entrada</th>
        <th>5V/12V</th>
 </tr>
 <tr>
     <th>Microcontrolador</th>
        <td align="center">Visão de IA: <strong>Himax-6538</strong> <br></br> Rede: <strong>XIAO ESP32C3</strong> <br></br></td>
 </tr>
    <tr>
        <th>Câmera</th>
        <td align="center">
            Tamanho da lente: <strong>“1/4"</strong><br />
            Distância focal: <strong>3,4 mm (ajustável)</strong><br />
            Resolução: <strong>2592 × 1944 pixels</strong><br />
            Tamanho do pixel: <strong>1,4 µm × 1,4 µm</strong><br />
            Taxa máxima de quadros: <strong>1080p @ 30 fps, 720p @ 60 fps</strong><br />
            FOV: <strong>62°</strong>
        </td>
    </tr>
    <tr>
     <th>Execução e inferência de modelo</th>
        <th>480 * 480  >10 fps</th>
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            Chip:<strong>TP8485E, transceptor half-duplex
            Protocolo RS485 Modbus-RTU</strong><br />
            Conexão de terminais: <strong>Conexão de terminais: terminal de 3 pinos para fio de sinal e terminal de 3 pinos para alimentação</strong><br />
            Alcance de transmissão:<strong>Alcance de transmissão: até 1200 metros (varia conforme o ambiente)</strong><br />
            Velocidade de transmissão: <strong>Velocidade de transmissão: 250k bps (Máx)</strong>
        </td>
    </tr>
    <tr>
        <th>Compatibilidade</th>
        <td align="center">
            Modbus RS485 DTU<br />
            SenseCAP Sensor Hub 4G DTU<br />
            SenseCAP S2100 LoRaWAN DTU
        </td>
    </tr>
 <tr>
     <th>Memória</th>
        <th>Cartão MicroSD de 8GB (Classe 10)</th>
 </tr>
 <tr>
     <th>Grau de proteção IP</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>Temperatura de operação</th>
        <th>0 - 70 °C</th>
 </tr>
 <tr>
     <th>Umidade de operação</th>
        <th>0 - 100 %RH (sem condensação)</th>
 </tr>
 <tr>
     <th>Tamanho do dispositivo</th>
        <th>180mm*75mm*70mm</th>
 </tr>
 <tr>
     <th>Peso do dispositivo</th>
        <th>439g</th>
 </tr>
 <tr>
     <th>Comprimento do cabo</th>
        <th>2 metros</th>
 </tr>
</table>

### Diagrama de pinagem

De acordo com a figura abaixo, as diferentes cores de fios do A1102 correspondem a diferentes funções de pinos. As funções específicas dos pinos são as seguintes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

Encontre a função que corresponde ao datalogger para fazer a conexão

:::tip
Se você usar 5v, não precisa usar 12v; 12v e 5v escolhem uma das tensões de alimentação, lembre-se de não usar juntas!
:::

## Visão geral do software

### Implantação de modelos de IA de fábrica

#### Fluxo de trabalho do software

**Passo 1 :** Após fazer login no aplicativo, clique em “User” na caixa abaixo e, em seguida, encontre as configurações do dispositivo conectado por Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**Passo 2 :** Marque o dispositivo “RS485 Vision AI Camera”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**Passo 3 :** Faça a varredura após ligar a RS485 Vision AI Camera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**Passo 4 :** Clique em “AI Model” para visualizar o modelo de IA definido de fábrica e implantar o tipo que você deseja.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**Passo 5 :** Se você precisar vincular o “DataLogger”, insira o número SN correspondente; se você não definir a “confidence” de que precisa, clique em “Preview” para acessar o sensor de imagem para coletar a imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**Passo 6 :** Mostrar imagem

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

Parabéns por usar com sucesso o dispositivo RS485 Vision AI V2 no SenseCraft APP!🎉

### Modelos de IA personalizados com SenseCraft AI

Se você quiser personalizar o seu modelo, mostraremos como usar o SenseCraft AI para implantar seu modelo de aprendizado de máquina favorito no dispositivo RS485 Vision AI Camera para personalizar funcionalidades e aplicações.

#### Fluxo de trabalho de hardware

Conecte a porta Type-C ao Vision AI V2 ao seu computador de acordo com as instruções a seguir

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### Fluxo de trabalho do software

**Passo 1 .** Primeiro, clique em [SenseCraftAI](https://sensecraft.seeed.cc/ai/#/home) e encontre **“Pretrained Models”** na barra de menu na parte superior do site SenseCraft AI e clique nela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**Passo 2 .** Encontre **“SenseCAP A1102”** na seção Supported Devices. Aqui você precisa encontrar o modelo de dispositivo que corresponde ao modelo adaptado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**Passo 3 .** Aqui escolhemos o modelo de **“Face Detection”** na página 31 como um exemplo de demonstração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**Passo 4 .** Após entrar no modelo, encontre a opção **“Deploy Model”**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**Passo 5.** Encontre o dispositivo de conexão e a opção correspondente **“SenseCAP A1102”**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**Passo 6.** Depois de acessar, conecte seu dispositivo A1102 e encontre a porta serial correspondente para se conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**Passo 7.** Por fim, podemos ver o modelo gravado e exibir os resultados correspondentes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confidence:`
    - Confidence se refere ao nível de certeza ou probabilidade atribuído por um modelo às suas previsões.

`IoU:`
    - IoU é usado para avaliar a precisão das caixas delimitadoras previstas em comparação com as caixas delimitadoras reais.

Neste ponto, implantamos com sucesso o modelo de que precisamos no dispositivo RS485 Vision AI Camera. Em seguida, prosseguimos para a próxima etapa da operação!

### Leitura de Dados com XIAO

Para ler dados de modelos gravados via XIAO, acesse este [wiki](https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_software_support/), que explica em detalhes como ler dados do Vision AI V2 via XIAO.

### Transmissão de Dados RS485

#### Esquemático de Conexão

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip
Se você usar 5 V, não precisa usar 12 V; escolha apenas uma das tensões de alimentação, 12 V ou 5 V, lembre-se de não usar as duas ao mesmo tempo!
:::

Depois de ter feito a conexão com sucesso de acordo com o diagrama acima, clique neste link do [wiki](https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_rs485/) para uma explicação mais detalhada de como usar o código para acionar a câmera.

## Recursos

- 📄 **[PDF]** [Esquemático da Seeed Studio RS485 Vision AI Camera](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
