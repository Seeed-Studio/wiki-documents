---
description: recamera_pro_live_view
title: Visualização ao vivo
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_view_legacy
draft: true
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_live_view_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page was split across the new task guides; its content moved primarily to Build_Your_App/preview_capture_record.md (https://wiki.seeedstudio.com/pt-br/recamera_pro_live_preview/). The old URL /recamera_pro_live_view/ is redirected to /recamera_pro_live_preview/ via an aliases entry in that page's frontmatter. This file is kept for history as a draft (slug /recamera_pro_live_view_legacy) and is excluded from production builds. Do not link here. -->

## Índice de Migração de Conteúdo (Página Legada)

A URL antiga /recamera_pro_live_view/ redireciona para /recamera_pro_live_preview/. Para onde cada seção foi movida:

| Seção original | Novo local |
| --- | --- |
| Visualização de vídeo | [Visualizar, capturar e gravar manualmente](https://wiki.seeedstudio.com/pt-br/recamera_pro_live_preview/) |
| Configurações básicas, configurações de exibição | [Qualidade de imagem e baixa luminosidade](https://wiki.seeedstudio.com/pt-br/recamera_pro_image_quality/) |
| Configurações de OSD, mascaramento de imagem | [OSD e máscaras de privacidade](https://wiki.seeedstudio.com/pt-br/recamera_pro_osd_masks/) |
| Configurações de streaming | [Transmitir vídeo via RTSP](https://wiki.seeedstudio.com/pt-br/recamera_pro_rtsp/) |
| Resultados de IA | [Configurar detecção](https://wiki.seeedstudio.com/pt-br/recamera_pro_ai_inference/) |
| Casos de uso típicos | [Página inicial da reCamera Pro](https://wiki.seeedstudio.com/pt-br/recamera_pro/) |
| Referência de campos (todos os módulos) | [Referência da interface Web](https://wiki.seeedstudio.com/pt-br/recamera_pro_webui_reference/) |

A reCamera Pro possui uma página integrada de monitoramento de vídeo em tempo real, permitindo que os usuários visualizem transmissões ao vivo da câmera diretamente por meio de um navegador. Os usuários podem configurar fluxos de vídeo, configurações de exibição, sobreposições OSD, mascaramento de privacidade e parâmetros de streaming. Esta página é adequada para instalação e depuração do dispositivo, visualização prévia das imagens, ajuste de parâmetros de vídeo e verificação funcional antes da implantação.
A reCamera Pro possui uma página integrada de monitoramento de vídeo em tempo real, permitindo que os usuários visualizem transmissões ao vivo da câmera diretamente por meio de um navegador. Os usuários podem configurar fluxos de vídeo, configurações de exibição, sobreposições OSD, mascaramento de privacidade e parâmetros de streaming. Esta página é adequada para instalação e depuração do dispositivo, visualização prévia das imagens, ajuste de parâmetros de vídeo e verificação funcional antes da implantação.
Ao entrar na página de monitoramento de vídeo em tempo real, o lado esquerdo exibe a área de visualização de vídeo e o lado direito mostra a área de configuração de funções. Os usuários podem concluir a reprodução de vídeo, a troca de fluxos e a configuração de parâmetros relacionados na mesma página.

## Visualização de vídeo

O lado esquerdo da página fornece uma janela de visualização de vídeo em tempo real, onde os usuários podem optar por reproduzir o fluxo principal ou o subfluxo. Clicar em **Iniciar reprodução** permite visualizar a transmissão atual da câmera no navegador.

A parte inferior da área de visualização oferece funções básicas de controle de reprodução, incluindo:

- Seleção de fluxo principal / subfluxo

- Iniciar reprodução / Parar reprodução

- Ajuste de volume

- Exibição do status de conexão atual


Quando o dispositivo é desconectado, o fluxo de vídeo está anormal ou a rede está inacessível, a janela de visualização exibirá um aviso de falha de conexão, facilitando para que os usuários determinem rapidamente o status atual do fluxo de vídeo.

## Configurações básicas

Na área de funções à direita, os usuários podem acessar a página de **Configurações básicas** para configurar separadamente os parâmetros de codificação de vídeo do fluxo principal e do subfluxo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

Os parâmetros configuráveis incluem:

| Parâmetro | Descrição |
|---|---|
| Resolução | Define a resolução de saída de vídeo, por exemplo, 1920×1080 (1080P) |
| Formato de codificação | Define o formato de codificação de vídeo, por exemplo, H.264 |
| Taxa de quadros (FPS) | Define a taxa de quadros de vídeo, por exemplo, 30 FPS |
| GOP | Define o intervalo de quadros-chave, usado para controlar a frequência de geração de quadros-chave |
| Modo de controle de taxa de bits | Define o método de controle de taxa de bits, por exemplo, VBR (taxa de bits variável) |
| Taxa de bits máxima | Define a taxa de bits máxima para o fluxo de vídeo, em Kbps |
| Qualidade da taxa de bits | Define o nível de qualidade da codificação de vídeo |

Os usuários podem optar por configurar o fluxo principal ou o subfluxo com base em seus cenários de aplicação reais. O fluxo principal é adequado para visualização em alta definição, armazenamento de vídeo e análise de IA; o subfluxo é adequado para visualização em baixa largura de banda, acesso remoto ou cenários com múltiplos canais de vídeo.

Após fazer modificações, clique em **Salvar configurações de vídeo** para aplicar a configuração atual. Para restaurar ou reinserir parâmetros, clique em **Redefinir**.

A página também fornece chaves relacionadas a áudio, incluindo **Configurações de áudio** e **Configurações de armazenamento de áudio**, permitindo que os usuários ativem ou desativem as funções de captura e armazenamento de áudio conforme necessário.

## Configurações de exibição

A página de **Configurações de exibição** é usada para ajustar os efeitos de exibição da câmera e os parâmetros básicos de imagem.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

As configurações de exibição suportadas incluem:

| Parâmetro | Descrição |
|---|---|
| Espelhar | Define se a imagem será espelhada, o que pode ser usado para se adaptar a diferentes orientações de instalação |
| Rotacionar | Define o ângulo de rotação da imagem, por exemplo, 0° |
| Padrão de vídeo | Define o padrão de vídeo, por exemplo, PAL (50HZ) |

Além disso, esta página oferece configurações de comutação de parâmetros dia/noite, incluindo:

| Parâmetro | Descrição |
|---|---|
| Modo de comutação | Define o método de comutação do modo dia/noite, por exemplo, comutação automática |
| Sensibilidade do limite de comutação | Define a sensibilidade para acionar a comutação dia/noite |
| Tempo de histerese de comutação | Define o tempo de atraso para a comutação do modo dia/noite para evitar trocas frequentes |

Na área de ajuste básico de imagem, os usuários podem selecionar diferentes perfis e ajustar parâmetros de imagem da câmera, tais como:

- Brilho

- Contraste

- Saturação

- Nitidez

- Matiz

- Modo de exposição

- Modo de ganho


Esses parâmetros podem ser usados para otimizar os efeitos de imagem com base no ambiente de iluminação local, como ambientes internos, externos, com pouca luz ou com luz intensa.

Após fazer modificações, clique em **Salvar configurações de exibição** ou **Salvar configuração** para aplicar as configurações atuais.

## Configurações de OSD

As **Configurações de OSD** são usadas para configurar informações sobrepostas na transmissão de vídeo, como nome do canal, data e hora e número de série do dispositivo. Este recurso é aplicável a cenários de vigilância por vídeo, reprodução de vídeo e identificação de dispositivos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

As configurações de OSD suportadas incluem:

| Item de configuração | Descrição |
|---|---|
| Tamanho da fonte | Define o tamanho do texto do OSD |
| Cor da fonte | Define a cor do texto do OSD |
| Modo de cor | Define o modo de cor do OSD, com opção de cores personalizadas |
| Sobreposição do nome do canal | Ativa a exibição do nome do canal na tela quando ligado |
| Nome do canal | Nome de canal personalizado a ser exibido, por exemplo, Camera 01 |
| Coordenadas do nome do canal | Define a posição de exibição do nome do canal na tela |
| Sobreposição de data e hora | Ativa a exibição de data e hora na tela quando ligado |
| Formato de data | Define o formato de exibição da data |
| Formato de hora | Define o formato de exibição da hora, por exemplo, formato de 24 horas |
| Mostrar dia da semana | Controla se as informações do dia da semana serão exibidas |
| Coordenadas de data e hora | Define a posição de exibição da data e hora na tela |
| Sobreposição do número de série | Controla se o número de série do dispositivo será exibido na tela |

As coordenadas de OSD são configuradas usando posições relativas, permitindo que os usuários posicionem o texto em locais adequados com base no layout da tela. Você também pode arrastar o texto diretamente para a posição desejada.

Após a configuração, clique em **Salvar configurações** para aplicar os parâmetros de OSD.

## Mascaramento de imagem

A função de **Mascaramento de imagem** é usada para configurar áreas de mascaramento de privacidade. Os usuários podem ativar o mascaramento de privacidade para ocultar áreas sensíveis na transmissão de vídeo, evitando que informações privadas sejam expostas em visualizações em tempo real, gravações ou streams.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

Você pode adicionar máscaras manualmente e desenhá-las automaticamente. Após adicioná-las, salvar as configurações mostrará o efeito imediatamente.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

Este recurso é aplicável nos seguintes cenários:

- Mascarar informações sensíveis em áreas de escritório

- Mascarar áreas privadas, como residências, números de porta e telas

- Atender a necessidades específicas de proteção de privacidade de vídeo em vários cenários


## Configurações de streaming

A página de **Configurações de streaming** é usada para configurar métodos de saída de fluxo de vídeo, facilitando a integração da reCamera Pro com plataformas de terceiros, NVRs, sistemas de gerenciamento de vídeo ou aplicativos personalizados.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

Os itens de configuração suportados incluem:

| Parâmetro | Descrição |
| --------- | ----------------- |
| Chave de configuração de fluxo | Ativa ou desativa a função de streaming para o fluxo atual |
| Fluxo principal / subfluxo | Seleciona o fluxo a ser configurado |
| Protocolo de streaming | Define o protocolo de streaming, por exemplo, RTSP |
| Tipo de autenticação | Define o método de autenticação para acesso ao fluxo de vídeo, por exemplo, sem autenticação |
| Aplicar configurações | Salva e aplica a configuração de streaming atual |

Os usuários podem configurar separadamente os parâmetros de streaming para o fluxo principal ou subfluxo com base em suas necessidades reais de implantação. Após a configuração, clientes ou plataformas de terceiros podem acessar a transmissão de vídeo da reCamera Pro por meio do endereço de fluxo correspondente.

## Resultados de IA

A página também fornece uma entrada de **Resultados de IA** para visualizar ou configurar como os resultados de inferência de IA são exibidos. Este recurso pode ser usado em cenários de aplicação de IA de borda, como detecção de objetos e reconhecimento de classificação, permitindo que os usuários observem os resultados de saída do modelo nas imagens em tempo real.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4t447lMV5W.png" />

## Casos de uso típicos

A página de monitoramento de vídeo em tempo real é adequada para os seguintes cenários:

- Confirmar as imagens em tempo real após a instalação da câmera

- Configurar os parâmetros do fluxo principal e do subfluxo

- Ajustar a resolução de vídeo, taxa de quadros, taxa de bits e formato de codificação

- Depurar os modos dia/noite e os parâmetros de imagem

- Sobrepor hora OSD, nomes de canais e informações do dispositivo

- Configurar áreas de máscara de privacidade

- Acessar plataformas de terceiros ou NVRs via streaming RTSP

- Verificar a exibição dos resultados de inferência de IA


Por meio da página de monitoramento de vídeo em tempo real, os usuários podem concluir a visualização de vídeo, a depuração de imagem, a configuração de fluxo e as configurações de streaming para a reCamera Pro sem instalar clientes adicionais, melhorando significativamente a eficiência de implantação e depuração do dispositivo.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
