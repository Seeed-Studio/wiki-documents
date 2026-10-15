---
description: Primeiros passos com o Grove Vision AI V2.
title: Módulo Grove Vision AI V2
keywords:
  - vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2
sku: 101021112,E23011220,104990982
last_update:
  date: 12/12/2023
  author: Citric
createdAt: '2023-12-15'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2/
---

# Módulo Grove Vision AI V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

É um módulo de visão AI baseado em MCU alimentado por Arm Cortex-M55 & Ethos-U55. Ele oferece suporte aos frameworks TensorFlow e PyTorch e é compatível com a Arduino IDE. Com a plataforma de algoritmo SenseCraft AI, modelos de ML treinados podem ser implantados no sensor sem necessidade de codificação. Ele possui uma interface CSI padrão, um microfone digital onboard e um slot para cartão SD, o que o torna altamente adequado para vários projetos embarcados de visão com IA.

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Use o navegador Chrome ou Edge baseado no mecanismo do Chrome.
:::

### Recursos

- **Poderosas capacidades de processamento de IA**: Utiliza o processador WiseEye2 HX6538 com um Arm Cortex-M55 dual-core e unidade de rede neural Arm Ethos-U55 integrada.
- **Suporte versátil a modelos de IA**: Implante facilmente modelos de IA prontos ou personalizados a partir do SenseCraft AI, incluindo Mobilenet V1, V2, Efficientnet-lite, Yolo v5 & v8. Os frameworks TensorFlow e PyTorch são suportados.
- **Periféricos abundantes**: Inclui microfone PDM, slot para cartão SD, Type-C, interface Grove e outros periféricos.
- **Alta compatibilidade**: Compatível com a série XIAO, Arduino, Raspberry Pi, placa de desenvolvimento ESP, facilitando o desenvolvimento posterior.
- **Totalmente open source**: Todos os códigos, arquivos de projeto e esquemáticos disponíveis para modificação e uso.

### Aplicações

- Automação industrial: inspeção de qualidade, manutenção preditiva, controle por voz, etc.
- Cidades inteligentes: monitoramento de dispositivos, gerenciamento de energia, etc.
- Transporte: monitoramento de status, rastreamento de localização, etc.
- Agricultura inteligente: monitoramento ambiental, etc.
- Dispositivos móveis de IoT: dispositivos vestíveis, dispositivos portáteis, etc.

## Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.png" style={{width:1000, height:'auto'}}/></div>

Para usar todas as funcionalidades do Grove Vision AI V2, talvez seja necessário adquirir uma câmera CSI separadamente. Recomendamos o [**Módulo de Câmera OV5647-62 FOV para Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html).

#### Conectando a uma câmera com interface CSI

Depois que o Grove Vision AI V2 e a câmera estiverem prontos, você pode conectá-los por meio do cabo de conexão CSI. Ao conectar, preste atenção à direção da fileira de pinos e não os conecte ao contrário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## Inicialização / Reset / Driver Gravado

### Inicialização

Se você utilizou algum método incomum que fez com que o Grove Vision AI deixasse de funcionar corretamente (em nível de software), talvez seja necessário colocar o dispositivo em modo BootLoader para recuperá-lo. Veja como entrar no modo BootLoader.

**Método 1**

Desconecte o cabo de conexão entre o Grove Vision AI e o seu computador, então pressione e segure o botão Boot no dispositivo sem soltá-lo. Nesse momento, conecte o Grove Vision AI ao seu computador com um cabo de dados tipo Type-C e, em seguida, solte o botão. Neste ponto, o dispositivo entrará no modo BootLoader.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**Método 2**

Com o Grove Vision AI conectado ao seu computador, você pode entrar no modo BootLoader pressionando o botão Boot e, em seguida, pressionando rapidamente o botão Reset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### Reset

Se você estiver enfrentando problemas com dados do dispositivo que de repente deixam de ser enviados ou com imagens travando, pode tentar reiniciar o dispositivo usando o botão Reset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### Driver

Se você perceber que o Grove Vision AI V2 não é reconhecido após conectá-lo ao computador, talvez seja necessário instalar o driver CH343 no seu computador. Abaixo estão alguns links para baixar e instalar o driver CH343.

- Instalador de um clique do driver Windows Vendor VCP: [CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Driver Windows Vendor VCP: [CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Instalador de um clique do driver Windows CDC: [CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Driver Windows CDC: [CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Driver macOS Vendor VCP: [CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

:::tip
Para uso no Linux, você precisa adicionar o seguinte; o exemplo a seguir é para UBUNTU, outros sistemas são semelhantes, mas não serão listados aqui
```cpp
sudo echo 'USBSYTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE:="0666"' > /etc/udev/rules.d/99-grove-vision-ai.rules
sudo udevadm control --reload-rules
sudo udevadm trigger 
```
:::

### Manual da Ferramenta de Recuperação do Bootloader

Esta parte descreve como recuperar o bootloader do módulo Grove Vision AI (WE2). A ferramenta de recuperação é um software que pode ser usado para recuperar o bootloader do módulo Grove Vision AI (WE2) caso o bootloader seja corrompido, ou para gravar um novo firmware no módulo Grove Vision AI (WE2).

#### Pré-requisitos

- Qualquer placa que possua interface I2C e seja suportada pela Arduino IDE.
- Grove Vision AI V2
- Cabo de 4 pinos

#### Instalação de software

1. Instale a Arduino IDE a partir do [site oficial](https://www.arduino.cc/en/software).
2. Baixe a versão mais recente da biblioteca Seeed_Arduino_SSCMA do [repositório GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA).
3. Adicione a biblioteca à sua Arduino IDE selecionando **Sketch > Include Library > Add .ZIP Library** e escolhendo o arquivo baixado.
4. Abra o exemplo `we2_iic_bootloader_recover` na Arduino IDE: **File > Examples > Seeed_Arduino_SSCMA > we2_iic_bootloader_recover**.
5. Envie o exemplo para a sua placa Arduino.

#### Conexão de hardware

Conecte o módulo Grove Vision AI (WE2) à interface I2C padrão da sua placa Arduino usando o cabo de 4 pinos. Certifique-se de que cada fio esteja conectado ao pino correto.

- SCL -> SCL (Grove Vision AI WE2)
- SDA -> SDA (Grove Vision AI WE2)
- VCC -> VCC (Grove Vision AI WE2, 3.3V)
- GND -> GND (Grove Vision AI WE2)

#### Uso

1. Certifique-se de que sua placa Arduino esteja conectada ao computador e de que o módulo Grove Vision AI (WE2) esteja conectado à placa Arduino.
2. Abra o Serial Monitor na Arduino IDE. (ou qualquer outro software de monitor serial, por exemplo, minicom, PuTTY)
3. Aguarde até que o dispositivo Grove Vision AI (WE2) seja detectado
4. Pressione 'enter' para iniciar o processo de recuperação do bootloader e aguarde a conclusão do processo

:::note
Antes de conectar o Grove Vision AI V2 ao seu computador, mantenha o botão BOOT pressionado enquanto conecta ao computador via cabo de dados e, em seguida, solte o botão BOOT. Em alguns casos, pode ser necessário tentar de 3 a 10 vezes para recuperar o bootloader com sucesso.
:::

## Primeiros passos

### Primeiros passos com Arduino

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/grove_vision_ai_v2_software_support/#-introdução-à-biblioteca-arduino-" class="getting_started_label2"> Arduino(Seeed Studio XIAO) </a>
          <br/>Reconhecimento de objetos ou comunicação serial
      </div>
  </div>
</div>

### Primeiros passos com SenseCraft AI

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/grove_vision_ai_v2_software_support/#-primeiros-passos-sem-código-com-sensecraft-ai-" class="getting_started_label2"> SenseCraft AI Model Assistant</a>
          <br/>Implantar e observar modelos de IA sem experiência em código
      </div>
  </div>
</div>

### Conectar o Grove Vision AI V2 ao Home Assistant

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/sensecraft-ai/application/application-for-homeassistant" class="getting_started_label2"> Conectando ao Home Assistant</a>
          <br/>Integrando o Grove Vision AI V2 ao Home Assistant
      </div>
  </div>
</div>

## Solução de problemas

### P1: É possível que o Grove Vision AI veja as informações de resultado do XIAO enquanto exibe uma tela ao vivo?

Não é possível. Considerando a taxa de quadros ou a velocidade de inferência de imagem, não oferecemos suporte à execução simultânea de ambas as tarefas neste estágio. Se o XIAO estiver conectado, você só poderá receber as informações reconhecidas reportadas, mas não o quadro em tempo real.

### P2: Quais câmeras o Grove Vision AI V2 suporta? Ele suporta apenas a OV5647-62?

Você pode verificar [aqui](/pt-br/Grove-vision-ai-v2-camera-supported). Atualmente, escrevemos drivers para a série de câmeras OV5642, portanto o Grove Vision AI V2 é compatível com toda a linha de câmeras Raspberry Pi OV5647, por exemplo, OV5647-62, OV5647-67 e OV5647-160. As outras câmeras CSI são teoricamente suportadas, mas, devido ao fato de que algumas dessas câmeras não têm drivers escritos para elas ou não possuem uma unidade própria de processamento de cor, pode ocorrer o problema de a imagem ficar apenas na cor verde, e a perda de cores completas pode ter um possível impacto na precisão do reconhecimento.


## Recursos

- **[PDF]** [Folha de Dados](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[PDF]** [Diagrama de Circuito](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Circuit_Diagram.pdf)
- **[Zip]** [Diagrama de Layout](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Layout.zip)
- **[Zip]** [Lista de Materiais](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/202003828_PCBA_Grove_Vision_AI_Module_V2_A11_Design.zip)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)
- **[STP]** [Modelo 3D do case do kit grove vision ai v2](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/grove_vision_ai_v2_kit_case.stp)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

