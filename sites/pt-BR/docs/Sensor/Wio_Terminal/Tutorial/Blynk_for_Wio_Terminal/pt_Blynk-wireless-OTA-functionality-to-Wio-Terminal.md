---
title: WT OTA para Blynk
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Blynk-wireless-OTA-functionality-to-Wio-Terminal/
slug: /Blynk-wireless-OTA-functionality-to-Wio-Terminal
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Blynk-wireless-OTA-functionality-to-Wio-Terminal/
---
# Usar a funcionalidade OTA sem fio do Blynk no Wio Terminal

Neste wiki descreveremos como usar a funcionalidade OTA sem fio do Blynk no Wio Terminal.

- **O que é Blynk**

[**Blynk**](https://blynk.io/) é uma nova plataforma que permite que você crie rapidamente interfaces para controlar e monitorar seus projetos de hardware a partir de seu dispositivo iOS e Android. Depois de baixar o app Blynk, você pode criar um painel de projeto e organizar botões, sliders, gráficos e outros widgets na tela.

## Hardware necessário

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Celular
- Baixar o app Blynk pela App Store
- WiFi

## Trabalho preparatório

Acesse [**Blynk para registrar e fazer login**](https://blynk.cloud/dashboard/login), vá para a tela Templates e crie um novo template.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/1.png)

Em seguida, edite o nome e selecione o dispositivo e o modo de conexão, neste caso "Seeed Wio Terminal" e "WiFi".
![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/60.jpg)

Anote BLYNK_TEMPLATE_ID e BLYNK_DEVICE_NAME.
No exemplo, eles são:

```cpp
#define BLYNK_TEMPLATE_ID "TMPLCc16MxA1"
#define BLYNK_DEVICE_NAME "WioTerminal"
```

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/3.png)

Depois clique no botão de salvar no canto superior direito.

## Configurar a IDE Arduino e ajustar o código

Em seguida, baixe e abra o código de exemplo na IDE Ardunio.

[**Edgent_Wio_Terminal_0-2.zip**](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/Edgent_Wio_Terminal_0-2.zip)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/4.jpg)

Selecione o dispositivo Wio Terminal nas opções da placa de desenvolvimento ([**consulte a página wiki do Wio Terminal**](https://blynk.cloud/dashboard/login) para saber como adicionar o Wio Terminal na IDE Ardunio).

Adicione [**blynk-library**](https://github.com/blynkkk/blynk-library)

Pesquise e adicione os seguintes arquivos de biblioteca no gerenciador de bibliotecas da IDE Ardunio:

- Seeed Arduino rpcunified
- Seeed Arduino rpcWiFi
- Seeed Arduino SFUD
- Seeed Arduino FS
- Seeed Arduino mbedtls
- ArduinoOTA
- ArduinoHttpClient

Nas linhas 16 e 17 do código, preencha o ID e o NAME que o sistema acabou de gerar:

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/5.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/6.jpg)

Depois compile e faça upload do código para o Wio Terminal (se faltar algum arquivo de biblioteca durante a compilação, pesquise-o no gerenciador de bibliotecas e faça o download)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/7.png)

Após o programa ser carregado com sucesso, abra o monitor serial e ajuste o baud rate para 115200. Aguarde de 5 a 10 s. A porta serial exibirá as seguintes informações: (se o monitor serial não responder, tente reconectar o cabo de dados e reabra o monitor serial.)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/8.jpg)

## Configurações do app móvel

Baixe o app Blynk IoT：

Android: [https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US](https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US)

IOS: [https://apps.apple.com/us/app/blynk-iot/id1559317868](https://apps.apple.com/us/app/blynk-iot/id1559317868)

Faça login na tela principal

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji111.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji222.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji333.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji4454.png)

Após a configuração bem-sucedida do app, o monitor serial exibirá o status da conexão de rede. Quando for exibido 'Ready', a conexão WiFi foi estabelecida com sucesso.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/21.jpg)

Agora é hora de testar o recurso OTA.

## OTA: atualizar BLYNK_FIRMWARE_VERSION

Você pode escrever um programa pessoal em "edgent_wio_terminal_0-2" com "void setup()" e "void loop()". Neste exemplo, mudaremos diretamente as informações de versão do programa para fins de demonstração. Se o programa for carregado com sucesso, as informações de versão serão alteradas.
Alteramos BLYNK_FIRMWARE_VERSION de "0.2.0" para "0.2.11"

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/22.jpg)

Depois clique em "Export compiled Binary" e aguarde a conclusão da compilação.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/23.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/24.png)

Em seguida, abra a pasta e vá até o arquivo BIN.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/25.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/26.jpg)

Abra o Blynk Air e selecione "New Shipping" no canto superior direito. Role para baixo nesta tela para encontrar a opção "Firmware".

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/27.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/28.jpg)

Selecione aqui o arquivo bin. que você acabou de gerar, e você verá que a versão do software foi alterada para "0.2.11", que acabamos de definir. Em seguida, clique no botão "Start Shipping" no canto inferior direito para iniciar o upload sem fio do programa.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/29.jpg)

Você pode ver uploads em tempo real na página da web ou no monitor serial.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/30.jpg)

Espere cerca de 2 minutos, se o seu monitor serial não tiver saída então tente reiniciar o dispositivo e ligar novamente o monitor serial e você verá o upload em tempo real.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/31.jpg)

Reinicie o dispositivo e você poderá ver que a versão do software aqui foi alterada para "0.2.11", que acabamos de modificar.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/32.jpg)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
