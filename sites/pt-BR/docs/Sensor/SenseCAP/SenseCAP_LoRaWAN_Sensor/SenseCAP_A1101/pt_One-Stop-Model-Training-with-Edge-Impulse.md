---
description: Treinamento de Modelo Tudo-em-Um com Edge Impulse
title: Treinamento de Modelo Tudo-em-Um com Edge Impulse
keywords:
  - Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /One-Stop-Model-Training-with-Edge-Impulse
sku: 101990962
last_update:
  date: 3/31/2023
  author: Yvonne
createdAt: '2023-04-07'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/One-Stop-Model-Training-with-Edge-Impulse/
---

## Visão geral

Neste wiki, vamos ensinar como treinar seu próprio modelo de IA para sua aplicação específica com **Edge Imoulse** e depois implantá‑lo facilmente no SenseCAP A1101 - LoRaWAN Vision AI Sensor. Vamos começar!

:::tip
**O que é Edge Impulse?**Edge Impulse é a plataforma de IA de borda para equipes empresariais que constroem modelos otimizados em qualquer dispositivo de borda. Entregue valor mais rápido e alcance inovação de produto com avançados recursos de sensores com IA.
:::

## Preparação de hardware

[Seeed SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) - **LoRaWAN Vision AI Sensor** é um sensor de IA de reconhecimento de imagens projetado para desenvolvedores. SenseCAP A1101 - LoRaWAN Vision AI Sensor combina a tecnologia TinyML AI e a transmissão LoRaWAN de longo alcance para possibilitar uma solução de dispositivo de IA de baixo consumo e alto desempenho para uso tanto interno quanto externo.<br />Este sensor apresenta a solução de visão AI de alto desempenho e baixo consumo da Himax, que suporta o framework Google TensorFlow Lite e múltiplas plataformas TinyML AI.<br />

Há suporte completo pelo Edge Impulse, o que significa que você poderá amostrar dados brutos da câmera, criar modelos e implantar modelos de aprendizado de máquina treinados no módulo diretamente a partir do estúdio, sem necessidade de programação. SenseCAP - Vision AI Module está disponível para compra diretamente na [Seeed Studio Bazaar](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html).

- SenseCAP A1101 - LoRaWAN Vision AI Sensor
- Cabo USB Type-C
- Windows/ Linux/ Mac com acesso à internet

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p1.jpg"/></div>

## Preparação de software

Para configurar este A1101 no Edge Impulse, você precisará instalar o seguinte software:

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
2. Em Linux:
   - GNU Screen: instale, por exemplo, via `sudo apt install screen`.
3. Baixe a versão mais recente do [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)

:::tip
**Problemas instalando o Edge Impulse CLI?**
Consulte o [guia de instalação e solução de problemas](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
:::

## Conectando ao Edge Impulse

Com todo o software instalado, é hora de conectar o A1101 ao Edge Impulse.

:::caution **Note:**
Se você comprou o dispositivo após **30 de março de 2023**, então não precisa atualizar o firmware do EI, pule diretamente para [STEP3](https://wiki.seeedstudio.com/pt-br/One-Stop-Model-Training-with-Edge-Impulse/#step-3-setting-keys) Configuração de chaves. Observe que atualizar o firmware do EI substituirá o modelo padrão.
:::

### Etapa 1. Atualizar o firmware do chip BL702

BL702 é o chip USB-UART que permite a comunicação entre o PC e o chip Himax. Você precisa atualizar este firmware para que o firmware do Edge Impulse funcione corretamente.

1. Obtenha o firmware de bootloader mais recente [aqui](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases): **tinyuf2-sensecap_vision_ai_xxx.bin**.

2. Conecte o A1101 ao PC por meio de um cabo USB Type-C enquanto mantém pressionado o botão **Boot** no A1101.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p2.png" /></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p3.png" /></div>

3. Abra o software Bouffalo Lab Dev Cube instalado anteriormente, selecione **BL702/704/706** e depois clique em **Finish**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p4.png" /></div>

4. Vá até a aba **MCU**. Em **Image file**, clique em **Browse** e selecione o firmware que você acabou de baixar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p5.png" /></div>

5. Clique em **Refresh**, escolha a **Port** relacionada ao A1101 conectado, defina **Chip Erase** como **True**, clique em **Open UART**, clique em **Create & Download** e aguarde até que o processo seja concluído.

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p6.png"/></div>

Você verá a saída como **All Success** se tudo tiver ocorrido bem.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p7.png"/></div>

:::note
Se a gravação gerar um erro, tente clicar em **Create & Download** várias vezes até ver a mensagem **All Success**.
:::

### Etapa 2. Atualizar o firmware do Edge Impulse

O A1101 ainda não vem com o firmware correto do Edge Impulse. Para atualizar o firmware:

1. [Baixe o firmware mais recente do Edge Impulse](https://files.seeedstudio.com/wiki/SenseCAP-A1101/ei_sensecap_vision_ai.uf2.zip) e extraia‑o para obter o arquivo **firmware.uf2**.

2. Conecte novamente o A1101 ao PC por meio do cabo USB Type-C e clique duas vezes no botão **Boot** do A1101 para entrar no **modo de armazenamento em massa**.

3. Depois disso, você verá um novo disco de armazenamento exibido no seu explorador de arquivos como **SENSECAP**. Arraste e solte o arquivo **firmware.uf2** na unidade SENSECAP.

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

Quando a cópia terminar, a unidade **SENSECAP** desaparecerá. Esta é a forma de verificar se a cópia foi bem-sucedida ou não.

### Etapa 3. Configurando chaves

A partir de um prompt de comando ou terminal, execute:

```
edge-impulse-daemon
```

Isso iniciará um assistente que solicitará que você faça login e escolha um projeto Edge Impulse. Se quiser trocar de projeto, execute o comando com `--clean`.

Como alternativa, versões recentes do Google Chrome e do Microsoft Edge podem coletar dados diretamente do seu A1101, sem a necessidade do Edge Impulse CLI. Consulte [esta postagem de blog](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser) para mais informações.

### Etapa 4. Verificando se o dispositivo está conectado

É isso! Seu dispositivo agora está conectado ao Edge Impulse. Para verificar, vá até [seu projeto Edge Impulse](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1) e clique em **Devices**. O dispositivo será listado aqui.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p9.png"/></div>

## Coletando dados do A1101 - Vision AI

Com tudo configurado, você agora pode criar e executar seu primeiro modelo de aprendizado de máquina com estes tutoriais:

- [Detecção de objetos](https://docs.edgeimpulse.com/docs/tutorials/object-detection).
- [Contagem de objetos usando FOMO](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo).

Quadros da câmera embarcada podem ser capturados diretamente a partir do estúdio:

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p16.png"/></div>

Por fim, depois que um modelo é treinado, ele pode ser facilmente implantado no A1101 – Vision AI Module para começar a fazer inferência!

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p17.png"/></div>

## Implantar modelo no A1101 - Vision AI

Depois de construir o modelo de aprendizado de máquina e baixar o firmware do Edge Impulse a partir do Edge Impulse Studio, implante o modelo uf2 no SenseCAP - Vision AI seguindo **as etapas 1 e 2** na [seção Atualizar firmware do Edge Impulse](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-sensecap-a1101#2.-Atualizar-firmware-do-Edge-Impulse).
Arraste e solte o arquivo **firmware.uf2** do EDGE IMPULSE para a unidade **SENSECAP**.

Quando você executar isto na sua interface local:

```
edge-impulse-daemon --debug
```

Ele solicitará que você clique em uma URL e então você verá uma pré-visualização ao vivo da câmera no seu dispositivo.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p33.png"/></div>

## Configure seu modelo no SenseCap Mate

- Baixe o [SenseCAP Mate](https://wiki.seeedstudio.com/pt-br/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP/#docusaurus_skipToContent_fallback)
  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)
- Abra o SenseCAP Mate e faça login

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p10.png"/></div>

- Na tela **Config**, selecione **Vision AI Sensor**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p11.jpg"/></div>

- Pressione e segure o botão de configuração no SenseCap A1101 por 3 segundos para entrar no modo de pareamento via bluetooth

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p12.jpg"/></div>
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p13.jpg"/></div>

- Clique em **Setup** e ele começará a procurar dispositivos SenseCAP A1101 próximos- Vá até **Settings** e certifique-se de que **Object Detection** e **User Defined 1** estejam selecionados. Caso contrário, selecione‑os e clique em **Send**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p14.jpg"/></div>

- Vá até **General** e clique em **Detect**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p15.jpg"/></div>

- [Clique aqui](https://files.seeedstudio.com/grove_ai_vision/index.html) para abrir uma janela de pré-visualização do fluxo de câmera

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p31.png"/></div>

- Clique no botão **Connect**. Em seguida, você verá um pop-up no navegador. Selecione **SenseCAP Vision AI - Paired** e clique em **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p32.png"/></div>

- Veja os resultados de inferência em tempo real usando a janela de pré-visualização!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.png"/></div>

Por exemplo, como você pode ver acima, o gato está sendo detectado com caixas delimitadoras ao seu redor. Aqui "0" corresponde a cada detecção da mesma classe. Se você tiver múltiplas classes, elas serão nomeadas como 0,1,2,3,4 e assim por diante. Além disso, a pontuação de confiança para cada maçã detectada (0,72 na demonstração acima) está sendo exibida!

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
