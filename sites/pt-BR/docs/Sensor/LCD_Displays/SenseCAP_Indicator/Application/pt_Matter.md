---
description: SenseCAP Indicator - Desenvolvimento de Aplicativos Matter
title: Matter - SenseCAP Indicator
keywords:
  - SenseCAP Indicator
  - Matter
  - ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Application_Matter
sidebar_position: 8
last_update:
  date: 8/28/2023
  author: Tim
createdAt: '2023-08-31'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_Application_Matter/
---

# SenseCAP Indicator - Desenvolvimento de Aplicativos Matter

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/LCIWqwmCZ54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Introdução

Este é um demo de como usar o [Matter SDK](https://project-chip.github.io/connectedhomeip-doc/index.html) para criar aplicativos avançados para o seu SenseCAP Indicator.

O SenseCAP Indicator possui uma tela sensível ao toque, o que o torna capaz de atuar como uma poderosa interface de automação residencial. O Matter torna o processo mais fácil do que nunca, pois remove muitos dos aspectos complicados da configuração. Com a ajuda do SDK do Matter é possível escanear rapidamente um código QR e configurar o dispositivo na sua rede doméstica.

Neste artigo, vamos passar pelas etapas necessárias para deixar o seu dispositivo funcionando com o demo.

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
    </a>
</div>

<br />

O Matter SDK fornece um conjunto padrão de dispositivos e permite acesso aos seus dados e o envio de seu estado para o controlador. O ESP-Matter foi desenvolvido pela Espressif como um framework oficial de desenvolvimento Matter para SoCs da série ESP32.

Para fazer o seu SenseCAP Indicator funcionar com Matter, você precisa seguir alguns passos principais:

1. [Instalar esp-idf e esp-matter](#install_sdks)
2. [Configurar seu ambiente e compilar](#configure_and_build)
3. [Usar o aplicativo](#using_application)
4. [Configurar ainda mais a interface do Home Assistant](#going_beyond)

## Pré-requisitos

Antes de começarmos, certifique-se de ter lido o [Guia do Usuário](/pt-br/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) da placa SenseCAP Indicator para se familiarizar com suas informações de software e hardware.

## Instalar ESP IDF e ESP Matter {#install_sdks}

Você deve seguir as [instruções fornecidas pela documentação do ESP-Matter SDK](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#getting-the-repositories) e instalar a versão 5.0.1 do ESP-IDF e a versão 1.1 de release do ESP-Matter.

Depois que essas versões tiverem sido instaladas, instale o patch fornecido pela Seeed Studio [aplique o patch fornecido](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch).

## Configurando seu ambiente e compilando {#configure_and_build}

### Usando a CLI para configurar e compilar

```sh
~/esp/esp-idf/install.sh
~/.espressif/esp-matter/install.sh

. ~/esp/esp-idf/export.sh
. ~/.espressif/esp-matter/export.sh

cd examples/indicator_matter
idf.py set-target esp32s3
idf.py fullclean
idf.py erase-flash
idf.py build flash monitor
```

## Usando o aplicativo {#using_application}

Depois que o firmware for gravado, a tela inicia apenas com o código QR. Abra o aplicativo de automação residencial no seu celular e entre no fluxo de provisionamento de dispositivos (varia dependendo do fabricante).

No exemplo a seguir você pode ver meu uso do aplicativo móvel Home Assistant para conectar ao meu Home Assistant Yellow executando o serviço Matter Beta.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-1.jpg"/></div>

Ao escanear o dispositivo, meu telefone imediatamente inicia o processo de provisionamento. O processo de provisionamento lida com a transferência segura de suas credenciais para o dispositivo, permitindo que ele se conecte ao dispositivo controlador de automação residencial via Wi-Fi. Dessa forma, você nunca precisa realmente escrever as credenciais de Wi-Fi em nenhum lugar.

Após o provisionamento, o dispositivo começará a relatar sua temperatura e umidade para o controlador Home Assistant em intervalos de 10 segundos.

### Funcionalidade padrão

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/mBhrYeyQQeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

O aplicativo Indicator Matter permite navegar pelos dados de sensores de forma semelhante ao firmware padrão. Ao carregar, o dispositivo mostra a tela do relógio, que é configurada com base na sua localização para fornecer um horário preciso. A tela possui eventos para detectar o gesto de deslizar para a direita e para a esquerda para alternar entre a tela de hora, a tela de exibição de sensores e a tela de configurações.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-2.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-3.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-4.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-5.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Ao clicar em um sensor, são mostradas mais informações sobre o estado desse sensor e o histórico pode ser visualizado dessa forma.

A tela de configurações permite a configuração de vários elementos da função do dispositivo. É possível configurar um relógio de 12 ou 24 horas, sobrescrever o fuso horário e ajustar o brilho da tela.

### Painel Matter do Home Assistant

Para acessar o Painel Matter do Home Assistant, deslize para baixo a partir da tela principal do relógio. Este painel possui vários componentes diferentes que estão associados a dispositivos de demonstração no lado Matter. Durante o processo de provisionamento, são criados endpoints para esses dispositivos, que podem ser usados para acessar recursos comuns, como diminuir a intensidade de uma luz ou desligá-la completamente.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-6.jpg"/></div>

No caso deste demo, duas luzes dimerizáveis foram configuradas juntamente com uma fechadura de porta. Você pode ver que, à medida que clica nos botões, o lado do Home Assistant também é atualizado para refletir essas mudanças. Os controles deslizantes podem ser movidos para definir o brilho da luz.

Pelo lado do Home Assistant, os dispositivos podem ser habilitados e desabilitados ou modificados conforme necessário e o SenseCAP Indicator também é atualizado para refletir isso. Dessa forma, você pode ter automações adicionais desativando ou ativando funcionalidades no seu dispositivo Indicator e fazer com que a tela reflita seu estado em tempo real.

O painel virtual e os recursos de automação do controlador doméstico em uso permitem várias combinações interessantes. Com o SenseCAP Indicator, você pode construir painéis do jeito que imaginar para controlar dispositivos em todo o seu ambiente doméstico.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg"/></div>

## Configurando ainda mais a interface do Home Assistant {#going_beyond}

A própria interface é construída usando [LVGL](https://lvgl.io/). Para informações mais detalhadas sobre como configurar o LVGL, consulte o [seguinte artigo](https://wiki.seeedstudio.com/pt-br/using_lvgl_and_tft_on_round_display/).

A interface do painel é composta de componentes LGVL com eventos configurados para callbacks, de forma que seus dados sejam persistidos tanto no armazenamento local quanto no endpoint Matter. O controlador do painel virtual (`indicator_virtual_dashboard_controller.c`) lida com a atualização do formulário e o envio de eventos associados para outros consumidores quando os dados subjacentes são alterados.

No exemplo inicial, três dispositivos foram configurados e a lógica subjacente no modelo Matter lida com a resposta a eventos da interface e com a persistência dos dados nos endpoints Matter ou com a atualização do estado da interface.

Em geral, as seguintes considerações devem ser feitas ao atualizar a interface e persistir para Matter:

- Durante o processo de inicialização, o método `indicator_matter_setup()` do modelo `indicator_matter.cpp` configura quaisquer dispositivos associados para uso com Matter. Além disso, um callback é configurado para eventos da interface, de forma que os endpoints Matter sejam atualizados quando houver alterações.
- O modelo `indicator_virtual_dashboard.c` escuta os eventos da interface associados ao painel virtual e persiste os dados no armazenamento para recuperação na inicialização.
- A lógica Matter assina os eventos em torno de dados Matter modificados (seja remotamente ou localmente)
- O controlador do painel virtual lida com a atualização do estado do formulário conforme necessário em resposta a eventos enviados via callbacks Matter do `indicator_matter.cpp` em mudanças vindas do controlador Matter.

## Recursos

1. **Demo SDK**: O Demo SDK para o SenseCAP Indicator está disponível no [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).
2. **Guia do Usuário**: O Guia do Usuário fornece informações detalhadas sobre o software e o hardware da placa SenseCAP Indicator. Você pode lê-lo [aqui](/pt-br/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator).
3. **Guia de Introdução ao ESP-IDF**: Este guia fornece todas as etapas para configurar e usar o ESP-IDF para criar projetos. Você pode acessá-lo [aqui](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).
4. **Guia de Instalação do Matter**: Se você é novo em ESP-Matter, este guia o ajudará a instalá-lo e configurá-lo. Você pode encontrá-lo [aqui](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html).

## Suporte Técnico

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

Se você encontrar qualquer problema ou tiver dúvidas ao seguir este tutorial, sinta-se à vontade para entrar em contato com nosso suporte técnico. Estamos sempre à disposição para ajudar!

Visite nosso [Canal Oficial da Seeed no Discord](https://discord.gg/kpY74apCWj) para fazer suas perguntas ou as [discussões no GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartilhar tudo o que você quiser!
