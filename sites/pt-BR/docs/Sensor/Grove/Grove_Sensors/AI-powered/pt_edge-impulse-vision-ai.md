---
description: Treine e Faça o Deploy do Seu Próprio Modelo de IA com Edge Impulse
title: Treine e Faça o Deploy do Seu Próprio Modelo de IA com Edge Impulse
keywords:
  - Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /edge-impulse-vision-ai
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/edge-impulse-vision-ai/
---


# Treinamento rápido de modelos para Grove Vision AI usando Edge Impulse

[Grove - Vision AI Module](https://wiki.seeedstudio.com/pt-br/Grove-Vision-AI-Module) é uma placa do tamanho de um polegar baseada no processador Himax HX6537-A, que está equipada com uma câmera OV2640 de 2 megapixels, microfone, acelerômetro de 3 eixos e giroscópio de 3 eixos. Ela oferece armazenamento com flash SPI de 32 MB, vem pré-instalada com algoritmos de ML para reconhecimento facial e detecção de pessoas e também oferece suporte a modelos personalizados. É compatível com o ecossistema XIAO e Arduino, o que a torna perfeita para começar com projetos de câmera com IA!

Ela é totalmente suportada pelo Edge Impulse, o que significa que você poderá amostrar dados brutos da câmera, criar modelos e fazer o deploy de modelos de machine learning treinados diretamente para o módulo a partir do estúdio, sem qualquer programação necessária. Grove - Vision AI Module está disponível para compra diretamente na [Seeed Studio Bazaar](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html).

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/1.jpg"/></div>

O firmware Edge Impulse para esta placa é open source e está hospedado no GitHub: [edgeimpulse/firmware-seeed-vision-ai-internal](https://github.com/edgeimpulse/firmware-seeed-vision-ai-internal/tree/edge-impulse-firmware)

Acesso rápido a links:

- Código-fonte do firmware: [repositório GitHub](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)
- Firmware pré-compilado: [seeed-grove-vision-ai.zip](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip)

## Instalando dependências

Para configurar esta placa no Edge Impulse, você precisará instalar o seguinte software:

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
2. No Linux:
   - GNU Screen: instale, por exemplo, via `sudo apt install screen`.
3. Baixe a versão mais recente do [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)

:::tip
**Problemas ao instalar o Edge Impulse CLI?**
Veja o [guia de instalação e solução de problemas](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
:::

## Conectando ao Edge Impulse

Com todo o software instalado, é hora de conectar a placa ao Edge Impulse.

### Passo 1. Atualizar o firmware do chip BL702

BL702 é o chip USB-UART que permite a comunicação entre o PC e o chip Himax. Você precisa atualizar este firmware para que o firmware Edge Impulse funcione corretamente.

1. baixe a versão mais recente do arquivo BootLoader no link abaixo. O nome do BootLoader geralmente é `tinyuf2-grove_vision_ai_vx.x.x.bin`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download do Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

2. Conecte a placa ao PC via cabo USB Type-C enquanto mantém pressionado o botão **Boot** na placa.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/2.jpg" /></div>

3. Abra o software Bouffalo Lab Dev Cube instalado anteriormente, selecione **BL702/704/706** e clique em **Finish**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/3.png" /></div>

4. Vá até a aba **MCU**. Em **Image file**, clique em **Browse** e selecione o firmware que você acabou de baixar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/4.png" /></div>

5. Clique em **Refresh**, escolha a **Port** relacionada à placa conectada, defina **Chip Erase** como **True**, clique em **Open UART**, clique em **Create & Download** e aguarde até que o processo seja concluído.

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/5.png"/></div>

Você verá a saída como **All Success** se tudo tiver ocorrido bem.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/6.png"/></div>

:::note
Se a gravação gerar um erro, tente clicar em **Create & Download** várias vezes até ver a mensagem **All Success**.
:::

### Passo 2. Atualizar o firmware Edge Impulse

A placa ainda não vem com o firmware Edge Impulse correto. Para atualizar o firmware:

1. [Baixe o firmware Edge Impulse mais recente](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip) e extraia-o para obter o arquivo **firmware.uf2**.

2. Conecte novamente a placa ao PC via cabo USB Type-C e dê um duplo clique no botão **Boot** na placa para entrar no **modo de armazenamento em massa**.

3. Depois disso, você verá uma nova unidade de armazenamento exibida no seu explorador de arquivos como **GROVEAI**. Arraste e solte o arquivo **firmware.uf2** na unidade GROVEAI.

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/7.jpg"/></div>

Quando a cópia for concluída, a unidade **GROVEAI** desaparecerá. É assim que podemos verificar se a cópia foi bem-sucedida ou não.

### Passo 3. Definindo chaves

A partir de um prompt de comando ou terminal, execute:

```
edge-impulse-daemon
```

Isso iniciará um assistente que pedirá para você fazer login e escolher um projeto Edge Impulse. Se quiser alternar de projeto, execute o comando com `--clean`.

Como alternativa, versões recentes do Google Chrome e do Microsoft Edge podem coletar dados diretamente da sua placa, sem a necessidade do Edge Impulse CLI. Consulte [esta postagem no blog](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser) para mais informações.

### Passo 4. Verificando se o dispositivo está conectado

Isso é tudo! Seu dispositivo agora está conectado ao Edge Impulse. Para verificar isso, vá até [seu projeto Edge Impulse](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1) e clique em **Devices**. O dispositivo será listado aqui.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/8.png"/></div>

## Coletando dados do Grove - Vision AI

Com tudo configurado, agora você pode criar e executar seu primeiro modelo de machine learning com estes tutoriais:

- [Adicionando visão aos seus sensores](https://docs.edgeimpulse.com/docs/tutorials/image-classification).
- [Detecção de objetos](https://docs.edgeimpulse.com/docs/tutorials/object-detection).
- [Contagem de objetos usando FOMO](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo).

Quadros da câmera onboard podem ser capturados diretamente a partir do estúdio:

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/9.png"/></div>

Por fim, quando um modelo estiver treinado, ele poderá ser facilmente implantado no Grove – Vision AI Module para iniciar a inferência!

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/10.png"/></div>

## Fazer deploy do modelo para o Grove - Vision AI

Após criar o modelo de machine learning e baixar o firmware Edge Impulse a partir do Edge Impulse Studio, faça o deploy do modelo uf2 para o Grove - Vision AI seguindo os passos 1 e 2 da seção [Update Edge Impulse firmware section](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-grove-vision-ai#2.-update-edge-impulse-firmware).

## Compilar o firmware Edge Impulse a partir do código-fonte

Se você quiser compilar o firmware Edge Impulse a partir do código-fonte, pode visitar [este repositório GitHub](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai) e seguir as instruções incluídas no README. O modelo usado para o firmware oficial pode ser encontrado neste [projeto público](https://studio.edgeimpulse.com/public/87291/latest).

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
