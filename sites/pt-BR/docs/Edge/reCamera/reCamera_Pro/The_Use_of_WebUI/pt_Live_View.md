---
description: recamera_pro_live_view
title: Visualização ao Vivo
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_view
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_live_view/
---

A reCamera Pro possui uma página integrada de monitoramento de vídeo em tempo real, permitindo que os usuários visualizem transmissões ao vivo da câmera diretamente por meio de um navegador. Os usuários podem configurar fluxos de vídeo, configurações de exibição, sobreposições OSD, mascaramento de privacidade e parâmetros de streaming. Esta página é adequada para instalação e depuração do dispositivo, visualização prévia das imagens, ajuste de parâmetros de vídeo e verificação de funcionalidades antes da implantação.
A reCamera Pro possui uma página integrada de monitoramento de vídeo em tempo real, permitindo que os usuários visualizem transmissões ao vivo da câmera diretamente por meio de um navegador. Os usuários podem configurar fluxos de vídeo, configurações de exibição, sobreposições OSD, mascaramento de privacidade e parâmetros de streaming. Esta página é adequada para instalação e depuração do dispositivo, visualização prévia das imagens, ajuste de parâmetros de vídeo e verificação de funcionalidades antes da implantação.
Ao entrar na página de monitoramento de vídeo em tempo real, o lado esquerdo exibe a área de visualização de vídeo e o lado direito mostra a área de configuração de funções. Os usuários podem concluir a reprodução de vídeo, a troca de fluxos e a configuração de parâmetros relacionados na mesma página.

## Visualização de Vídeo

O lado esquerdo da página fornece uma janela de visualização de vídeo em tempo real, onde os usuários podem optar por reproduzir o fluxo principal ou o subfluxo. Clicar em **Iniciar Reprodução** permite visualizar a transmissão atual da câmera no navegador.

A parte inferior da área de visualização oferece funções básicas de controle de reprodução, incluindo:

- Seleção de Fluxo Principal / Subfluxo

- Iniciar Reprodução / Parar Reprodução

- Ajuste de Volume

- Exibição do Status Atual da Conexão


Quando o dispositivo é desconectado, o fluxo de vídeo está anormal ou a rede está inacessível, a janela de visualização exibirá um aviso de falha de conexão, facilitando para que os usuários determinem rapidamente o status atual do fluxo de vídeo.

## Configurações Básicas

Na área de funções à direita, os usuários podem acessar a página de **Configurações Básicas** para configurar separadamente os parâmetros de codificação de vídeo do fluxo principal e do subfluxo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

Os parâmetros configuráveis incluem:

| Parâmetro | Descrição |
|---|---|
| Resolução | Define a resolução de saída de vídeo, por exemplo, 1920×1080 (1080P) |
| Formato de Codificação | Define o formato de codificação de vídeo, por exemplo, H.264 |
| Taxa de Quadros (FPS) | Define a taxa de quadros de vídeo, por exemplo, 30 FPS |
| GOP | Define o intervalo de quadros-chave, usado para controlar a frequência de geração de quadros-chave |
| Modo de Controle de Taxa de Bits | Define o método de controle da taxa de bits, por exemplo, VBR (Variable Bitrate) |
| Taxa de Bits Máxima | Define a taxa de bits máxima para o fluxo de vídeo, em Kbps |
| Qualidade da Taxa de Bits | Define o nível de qualidade da codificação de vídeo |

Os usuários podem optar por configurar o fluxo principal ou o subfluxo com base em seus cenários reais de aplicação. O fluxo principal é adequado para visualização em alta definição, armazenamento de vídeo e análise de IA; o subfluxo é adequado para visualização em baixa largura de banda, acesso remoto ou cenários com múltiplos canais de vídeo.

Após fazer modificações, clique em **Salvar Configurações de Vídeo** para aplicar a configuração atual. Para restaurar ou reinserir parâmetros, clique em **Redefinir**.

A página também fornece chaves relacionadas a áudio, incluindo **Configurações de Áudio** e **Configurações de Armazenamento de Áudio**, permitindo que os usuários ativem ou desativem as funções de captura e armazenamento de áudio conforme necessário.

## Configurações de Exibição

A página de **Configurações de Exibição** é usada para ajustar os efeitos de exibição da câmera e os parâmetros básicos de imagem.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

As configurações de exibição suportadas incluem:

| Parâmetro | Descrição |
|---|---|
| Espelhar | Define se a imagem será espelhada, o que pode ser usado para se adaptar a diferentes orientações de instalação |
| Rotação | Define o ângulo de rotação da imagem, por exemplo, 0° |
| Padrão de Vídeo | Define o padrão de vídeo, por exemplo, PAL (50HZ) |

Além disso, esta página oferece configurações de comutação de parâmetros dia/noite, incluindo:

| Parâmetro | Descrição |
|---|---|
| Modo de Comutação | Define o método de comutação do modo dia/noite, por exemplo, comutação automática |
| Sensibilidade do Limite de Comutação | Define a sensibilidade para acionar a comutação dia/noite |
| Tempo de Histerese de Comutação | Define o tempo de atraso para a comutação do modo dia/noite para evitar comutações frequentes |

Na área de ajuste básico de imagem, os usuários podem selecionar diferentes perfis e ajustar parâmetros de imagem da câmera, tais como:

- Brilho

- Contraste

- Saturação

- Nitidez

- Matiz

- Modo de Exposição

- Modo de Ganho


Esses parâmetros podem ser usados para otimizar os efeitos de imagem com base no ambiente de iluminação local, como ambientes internos, externos, com pouca luz ou luz intensa.

Após fazer modificações, clique em **Salvar Configurações de Exibição** ou **Salvar Configuração** para aplicar as configurações atuais.

## Configurações de OSD

As **Configurações de OSD** são usadas para configurar informações de sobreposição no fluxo de vídeo, como nome do canal, data e hora e número de série do dispositivo. Este recurso é aplicável a cenários de vigilância por vídeo, reprodução de vídeo e identificação de dispositivos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

As configurações de OSD suportadas incluem:

| Item de Configuração | Descrição |
|---|---|
| Tamanho da Fonte | Define o tamanho do texto OSD |
| Cor da Fonte | Define a cor do texto OSD |
| Modo de Cor | Define o modo de cor do OSD, com opção de cores personalizadas |
| Sobreposição do Nome do Canal | Ativa a exibição do nome do canal na tela quando ligado |
| Nome do Canal | Nome de canal personalizado a ser exibido, por exemplo, Camera 01 |
| Coordenadas do Nome do Canal | Define a posição de exibição do nome do canal na tela |
| Sobreposição de Data e Hora | Ativa a exibição de data e hora na tela quando ligado |
| Formato de Data | Define o formato de exibição da data |
| Formato de Hora | Define o formato de exibição da hora, por exemplo, formato de 24 horas |
| Mostrar Dia da Semana | Controla se as informações do dia da semana serão exibidas |
| Coordenadas de Data e Hora | Define a posição de exibição da data e hora na tela |
| Sobreposição do Número de Série | Controla se o número de série do dispositivo será exibido na tela |

As coordenadas de OSD são configuradas usando posições relativas, permitindo que os usuários posicionem o texto em locais adequados com base no layout da tela. Você também pode arrastar diretamente o texto para a posição desejada.

Após a configuração, clique em **Salvar Configurações** para aplicar os parâmetros de OSD.

## Mascaramento de Imagem

A função de **Mascaramento de Imagem** é usada para configurar áreas de mascaramento de privacidade. Os usuários podem ativar o mascaramento de privacidade para ocultar áreas sensíveis no fluxo de vídeo, evitando que informações privadas sejam expostas em visualizações em tempo real, gravações ou streams.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

Você pode adicionar manualmente e desenhar máscaras automaticamente. Após adicioná-las, salvar as configurações mostrará o efeito imediatamente.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

Este recurso é aplicável nos seguintes cenários:

- Mascarar informações sensíveis em áreas de escritório

- Mascarar áreas privadas, como residências, números de porta e telas

- Atender a necessidades específicas de proteção de privacidade de vídeo em vários cenários


## Configurações de Streaming

A página de **Configurações de Streaming** é usada para configurar métodos de saída de fluxo de vídeo, facilitando a integração da reCamera Pro com plataformas de terceiros, NVRs, sistemas de gerenciamento de vídeo ou aplicativos personalizados.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

Os itens de configuração suportados incluem:

| Parâmetro | Descrição |
| --------- | ----------------- |
| Interruptor de Configuração de Fluxo | Ativa ou desativa a função de streaming para o fluxo atual |
| Fluxo Principal / Subfluxo | Seleciona o fluxo a ser configurado |
| Protocolo de Streaming | Define o protocolo de streaming, por exemplo, RTSP |
| Tipo de Autenticação | Define o método de autenticação para acesso ao fluxo de vídeo, por exemplo, sem autenticação |
| Aplicar Configurações | Salva e aplica a configuração de streaming atual |

Os usuários podem configurar separadamente os parâmetros de streaming para o fluxo principal ou subfluxo com base em suas necessidades reais de implantação. Após a configuração, clientes ou plataformas de terceiros podem acessar o fluxo de vídeo da reCamera Pro por meio do endereço de fluxo correspondente.

## Resultados de IA

A página também fornece uma entrada de **Resultados de IA** para visualizar ou configurar como os resultados de inferência de IA são exibidos. Este recurso pode ser usado em cenários de aplicação de IA de borda, como detecção de objetos e reconhecimento de classificação, permitindo que os usuários observem os resultados de saída do modelo nas imagens em tempo real.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4t447lMV5W.png" />

## Casos de Uso Típicos

A página de monitoramento de vídeo em tempo real é adequada para os seguintes cenários:

- Confirmar as imagens em tempo real após a instalação da câmera

- Configurar parâmetros do fluxo principal e do subfluxo

- Ajustar resolução de vídeo, taxa de quadros, taxa de bits e formato de codificação

- Depurar modos dia/noite e parâmetros de imagem

- Sobrepor hora OSD, nomes de canais e informações do dispositivo

- Configurar áreas de mascaramento de privacidade

- Acessar plataformas de terceiros ou NVRs via streaming RTSP

- Verificar a exibição dos resultados de inferência de IA


Por meio da página de monitoramento de vídeo em tempo real, os usuários podem concluir a visualização de vídeo, depuração de imagem, configuração de fluxos e configurações de streaming da reCamera Pro sem instalar clientes adicionais, melhorando significativamente a eficiência de implantação e depuração do dispositivo.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
