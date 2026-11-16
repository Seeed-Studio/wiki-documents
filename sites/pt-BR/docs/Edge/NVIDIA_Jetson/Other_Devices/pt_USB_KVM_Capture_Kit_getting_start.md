---
description: "Use o Kit de Captura USB KVM com o reComputer Jetson: conecte o compartilhamento de teclado e mouse, capture vídeo HDMI ou DisplayPort e comece a usar o OSRBOT Link."
title: Introdução ao Kit de Captura USB KVM
keywords:
  - Edge
  - NVIDIA Jetson
  - reComputer
  - USB KVM
  - Captura de Vídeo
  - OSRBOT Link
image: https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/product.png
slug: /usb_kvm_capture_kit_getting_start
last_update:
  date: '2026-11-13'
  author: zibo
createdAt: '2026-11-13'
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/pt-br/usb_kvm_capture_kit_getting_start/
---

<div align="center">
  <img alt="Dispositivo OSRBOT Link de compartilhamento de teclado e mouse USB" width="600" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/product.png" />
</div>

O Kit de Captura USB KVM combina um **dispositivo OSRBOT Link de compartilhamento de teclado e mouse** com acessórios opcionais de captura de vídeo. Use o teclado e o mouse do seu computador para operar um reComputer Jetson e visualize a saída de vídeo do Jetson no aplicativo OSRBOT Link quando uma placa de captura estiver conectada. Isso é útil para configuração e solução de problemas no local sem um monitor, teclado e mouse separados.

Neste guia, o **controlador** é o computador que executa o OSRBOT Link, e o **alvo** é o reComputer Jetson sendo operado. O alvo não precisa ter o OSRBOT Link instalado, mas deve oferecer suporte a entrada de teclado e mouse USB.

## Recursos

- Controle de teclado e mouse USB sem instalar software no alvo.
- Software de controle para Windows, macOS e Ubuntu.
- Captura de vídeo HDMI opcional, com um adaptador DP-para-HDMI para alvos com saída DisplayPort.
- Captura de screenshots, gravação de vídeo, captura de GIF e colagem de comandos ASCII.
- Portas de expansão USB separadas para o controlador e o alvo.
- Compartilhamento de rede Ethernet opcional e controle via navegador em LAN com OSRBOT Link Pro.

:::info
As entradas de teclado/mouse, a captura de vídeo e o compartilhamento de rede usam conexões separadas. O dispositivo de compartilhamento por si só não captura vídeo, e seu cabo de dados USB não transporta tráfego de rede. A resolução de vídeo, taxa de quadros e latência dependem da placa de captura e do caminho de vídeo.
:::

## Especificações

### Dispositivo de Compartilhamento de Teclado e Mouse

<div class="table-center">

| Item | Especificação |
| --- | --- |
| Produto | Dispositivo OSRBOT Link de compartilhamento de teclado e mouse |
| Carcaça | Liga de alumínio e plástico de engenharia |
| Conexão do controlador | USB 3.0, com uma porta de expansão USB 3.0 no lado do controlador |
| Conexão do alvo | USB 2.0, com uma porta de expansão USB 2.0 no lado do alvo |
| Cabo de dados fornecido | USB-A macho para USB-A macho, 1 m |
| Software do controlador | OSRBOT Link |
| Plataformas do controlador | Windows, macOS, Ubuntu |
| Visualização de vídeo | Requer uma placa de captura externa |

</div>

### Placa de Captura

As especificações a seguir descrevem a placa de captura listada nos manuais do OSRBOT Link v1.1. Elas não se aplicam a todas as placas de captura de terceiros.

<div align="center">
  <img alt="Placa de captura com entrada HDMI e saída USB-A" width="300" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/capture-card.png" />
</div>

<div class="table-center">

| Item | Especificação |
| --- | --- |
| Conexão | Entrada HDMI para saída USB-A |
| Captura MJPG | 4K a 60 fps / 2K a 60 fps / 1080p a 144 fps |
| Captura NV12 | 4K a 30 fps / 2K a 60 fps / 1080p a 60 fps |
| Captura YUY2 | 4K a 25 fps / 2K a 50 fps / 1080p a 60 fps |
| XRGB (RGB24), conforme listado no manual | 2K a 30 fps / 1080p a 60 fps |
| Saída de áudio | Estéreo por padrão, 48 kHz / 24 bit |
| Captura de áudio | Suporte a canais 5.1 / 7.1 |
| Latência de pré-visualização | 40–80 ms, tipicamente aproximadamente 60 ms |
| Protocolo de vídeo | UVC |

</div>

:::note
Essas especificações e valores de latência da placa de captura são fornecidos pelo fornecedor, não resultados de testes no Jetson. As condições de latência declaradas são USB 3.0, 1080p a 60 fps e pré-visualização RGB24 em um computador. Os modos disponíveis dependem da placa de captura real, da saída da fonte, da conexão USB e do software. As capacidades de áudio da placa, por si só, não estabelecem suporte de áudio em todos os fluxos de trabalho de aplicativos.
:::

## Conteúdo da Embalagem

<div class="table-center">

| Acessório | Básico | HDMI | HDMI + DP |
| --- | --- | --- | --- |
| Dispositivo de compartilhamento de teclado e mouse | Incluído | Incluído | Incluído |
| Cabo de dados USB-A para USB-A | Incluído | Incluído | Incluído |
| Placa de captura | — | Incluída | Incluída |
| Cabo HDMI | — | Incluído | Incluído |
| Adaptador DP-para-HDMI | — | — | Incluído |

</div>

<div align="center">
  <img alt="Cabo de dados USB-A, cabo HDMI e adaptador DP-para-HDMI" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/accessories.png" />
</div>

O manual lista um cabo de dados USB-A de 1 m, um cabo HDMI macho-macho de 0,6 m (HDMI 2.0, 19+1) e um adaptador DP macho-para-HDMI fêmea. O conteúdo da embalagem e as especificações dos acessórios podem mudar; confirme os itens fornecidos ao fazer o pedido.

## Dispositivos Compatíveis e Requisitos

Prepare o seguinte:

- **Controlador:** um computador Windows, macOS ou Ubuntu com conectividade USB. Para o desempenho declarado da placa de captura, use USB 3.0. Tanto o dispositivo de compartilhamento quanto a placa de captura devem estar conectados ao controlador ao usar vídeo.
- **Alvo:** um reComputer Jetson energizado com uma porta host USB que ofereça suporte a entrada de teclado/mouse. Para vídeo, ele também precisa de uma saída HDMI ou DisplayPort funcional.
- **Software:** um pacote OSRBOT Link correspondente ao sistema operacional e à arquitetura de processador do controlador.
- **Acessórios:** o cabo de dados USB-A fornecido e, para vídeo, uma placa de captura, cabo HDMI e adaptador DP-para-HDMI, se necessário.
- **Rede opcional:** um cabo Ethernet e adaptadores de rede adequados para compartilhamento de rede; uma LAN confiável acessível para acesso via navegador.

Este guia descreve requisitos de conexão em vez de uma lista de compatibilidade testada para cada modelo de reComputer ou versão do JetPack. Verifique a documentação de hardware do seu dispositivo para suas portas host USB e conector de vídeo. O Jetson é o alvo aqui; não instale um pacote de controlador nele apenas porque ele executa Ubuntu.

## Conexão de Hardware

### Identificar as Portas

<div align="center">
  <img alt="Lado do controlador: a porta 1 é o conector USB-A integrado e a porta 2 é a porta de expansão USB 3.0 azul" width="400" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/controller-ports.png" />
  <img alt="Lado do alvo: a porta 3 é a porta superior de expansão USB 2.0 e a porta 4 é a porta inferior de conexão do alvo" width="400" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/target-ports.png" />
</div>

| Porta | Finalidade | Conexão |
| --- | --- | --- |
| 1 | Conexão do controlador | Insira o conector USB-A integrado no computador que executa o OSRBOT Link. |
| 2 | Expansão USB 3.0 do lado do controlador | Conecte um periférico pertencente ao controlador, como um drive USB ou receptor de teclado. |
| 3 | Expansão USB 2.0 do lado do alvo | Conecte um periférico USB pertencente ao Jetson. |
| 4 | Conexão do alvo | Use o cabo de dados USB-A para USB-A fornecido para conectar esta porta inferior a uma porta host USB no Jetson. |

:::caution
Conecte o cabo de dados fornecido entre a **porta 4 do dispositivo de compartilhamento** e o Jetson. Não o use para conectar a porta USB do controlador diretamente à porta host USB do Jetson. As portas 2 e 3 são portas de expansão, não substitutas da porta 4.
:::

### Visão Geral da Conexão do reComputer

<div align="center">
  <img alt="Diagrama de conexão do reComputer Jetson: teclado e mouse vão do controlador através do dispositivo de compartilhamento OSRBOT para uma porta host USB do Jetson; o vídeo HDMI ou DP do Jetson retorna através de uma placa de captura para o controlador; o compartilhamento de rede opcional usa um cabo Ethernet separado" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/recomputer-connection.svg" />
</div>

O diagrama é um guia lógico de cabeamento; as posições dos conectores dependem do seu modelo de reComputer. Alimente o Jetson usando sua fonte de alimentação normal. Escolha uma das três configurações abaixo.

### Opção 1: Apenas Teclado e Mouse

1. Insira a **porta 1** do dispositivo de compartilhamento no controlador.
2. Conecte a **porta 4** à porta host USB do Jetson usando o cabo de dados fornecido.
3. Use o display existente do alvo, se necessário. Sem uma placa de captura, o OSRBOT Link fornece controle de entrada, mas nenhuma pré-visualização de vídeo do alvo.

<div align="center">
  <img alt="Apenas teclado e mouse: USB do controlador para o dispositivo de compartilhamento, depois porta 4 e o cabo de dados para a porta USB do alvo" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/keyboard-mouse-connection.png" />
</div>

### Opção 2: Teclado e Mouse com Vídeo HDMI

1. Conclua as conexões de teclado/mouse acima.
2. Conecte a **saída HDMI** do Jetson à **entrada HDMI** da placa de captura usando o cabo HDMI.
3. Conecte a **saída USB** da placa de captura ao controlador.

<div align="center">
  <img alt="Configuração HDMI com caminhos separados de controle de entrada USB e captura de vídeo HDMI-para-USB" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/hdmi-connection.png" />
</div>

### Opção 3: Teclado e Mouse com Vídeo DisplayPort

1. Conclua as conexões de teclado/mouse da Opção 1.
2. Conecte o adaptador DP-para-HDMI à **saída DisplayPort** do Jetson.
3. Conecte um cabo HDMI do adaptador à **entrada HDMI** da placa de captura.
4. Conecte a **saída USB** da placa de captura ao controlador.

<div align="center">
  <img alt="Configuração DisplayPort: saída DP do alvo através de um adaptador DP-para-HDMI e cabo HDMI até a placa de captura, com a saída USB da placa de captura conectada ao controlador" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/dp-connection.png" />
</div>

A direção do adaptador é **fonte DP para entrada de captura HDMI**. O dispositivo de compartilhamento permanece conectado em ambas as configurações de vídeo.

## Instalação de Software

### Baixar o OSRBOT Link

Abra as [versões oficiais do OSRBOT Link](https://github.com/osrbot/osrbot-link/releases) no controlador e selecione um pacote para sua plataforma.

| Plataforma do controlador | Pacote |
| --- | --- |
| Windows | Instalador ou pacote portátil correspondente à versão e arquitetura do Windows suportadas |
| macOS | Pacote Apple Silicon ou Intel, correspondente ao Mac |
| Ubuntu | DEB ou AppImage para uma arquitetura suportada; verifique os requisitos da versão |

**OSRBOT Link Pro** inclui os fluxos de trabalho de compartilhamento de rede e controle via navegador em LAN descritos abaixo. O **Lite** é destinado ao controle USB local e às ferramentas de captura. Use o Pro para seguir o guia completo e consulte as notas da versão selecionada para sistemas suportados e detalhes de instalação.

### Permitir permissões necessárias

- **Windows e macOS:** permita o acesso à câmera para a placa de captura.
- **macOS:** permita o acesso a Acessibilidade ao encaminhar atalhos do sistema. Configure o Compartilhamento de Internet manualmente em Configurações do Sistema se estiver usando esse recurso opcional.
- **Ubuntu:** se o acesso HID falhar, abra **Settings → Input and Shortcuts → Fix Linux HID Permissions**, autorize a ação e faça uma nova varredura. Reconecte o dispositivo de compartilhamento se necessário.

Os rótulos da interface podem variar entre versões. As capturas de tela e os limites de operação neste guia vêm dos manuais do produto v1.1.

## Iniciar controle

<div align="center">
  <img alt="Janela principal do OSRBOT Link mostrando a sequência: conectar HID, iniciar vídeo opcional e depois clicar no espaço de trabalho" width="900" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/start-control.png" />
</div>

1. **Conecte o HID.** Abra o OSRBOT Link, atualize a lista **Keyboard/Mouse Sharing**, selecione **OSRBOT HID** e clique em **Connect**. Confirme que o status está **Connected**.
2. **Inicie o vídeo, se conectado.** Selecione a placa de captura em **Video Capture** (mostrado como **Video Input** em algumas interfaces), escolha uma resolução e taxa de quadros compatíveis em **Capture Settings** e clique em **Start Video**. Pule esta etapa para operação apenas de teclado/mouse.
3. **Escolha o modo do mouse.** Use **Computer** para alvos de computador, como uma área de trabalho Jetson. O modo **Android** usa movimento relativo para alvos Android.
4. **Inicie a entrada.** Clique no vídeo ou no espaço de trabalho em branco. O teclado e o mouse do controlador agora operam o alvo.
5. **Verifique a operação.** Com o vídeo ativado, confirme que a área de trabalho Jetson esperada aparece. Mova o ponteiro e digite uma sequência de teste inofensiva em um campo de texto no alvo.

:::tip
Pressione **Shift + Esc** para liberar a entrada e sair da tela cheia. Clique novamente no espaço de trabalho para retomar. Abrir configurações, mudar modos ou alternar janelas pausa o controle. Um atalho opcional de liberação **Right Ctrl** pode ser ativado em Settings.
:::

Quando terminar, clique em **Disconnect** em Keyboard/Mouse Sharing. Use o menu Control para enviar **Ctrl+Alt+Del** quando apropriado; o encaminhamento de atalhos de sistema reservados depende da plataforma do controlador.

## Recursos adicionais

### Configurações de exibição e captura

| Modo de exibição | Comportamento |
| --- | --- |
| Fit | Preserva a proporção e mostra a imagem inteira. |
| Fill | Preserva a proporção; as bordas podem ser cortadas. |
| Original | Exibe as dimensões originais em pixels. |
| Stretch | Preenche o espaço de trabalho; a proporção pode mudar. |

Use o menu Display para entrar em tela cheia ou mostrar/ocultar a barra lateral e a barra de ferramentas. Pare o vídeo antes de trocar a placa de captura ou as configurações de captura. A barra de status mostra a resolução e a taxa de quadros reais; inserir uma resolução personalizada não adiciona capacidades à placa de captura.

### Capturas de tela, gravação e GIFs

Inicie o vídeo e depois use o menu Capture ou a barra de ferramentas em tela cheia:

- **Screenshot:** salva o quadro capturado atual em um local escolhido.
- **Recording:** clique em Record e depois em Stop Recording para salvar. Cada gravação é interrompida e salva automaticamente em **256 MiB**; inicie outro segmento para continuar.
- **GIF:** grave um clipe curto e depois pare para salvar. Cada clipe é limitado a aproximadamente **10 segundos**.

Parar o vídeo também encerra a gravação. Aguarde o término da gravação antes de fechar o aplicativo ou desconectar dispositivos. Em **Settings → Capture and Watermark**, um nome personalizado pode ser anexado à marca d'água do OSRBOT Link.

### Comandos de colagem

<div align="center">
  <img alt="Paste Helper com visualização de comando, velocidade de envio e Enter opcional após o envio" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/paste-helper.png" />
</div>

1. Mantenha o HID conectado e foque um terminal ou campo de texto no Jetson.
2. Abra **Control → Paste Helper**. Revise o texto da área de transferência ou insira o comando.
3. Escolha **Fast**, **Standard** ou **Slow** e verifique se **Press Enter after sending** está ativado.
4. Clique em **Send Paste** e aguarde a conclusão. Use **Stop Sending** para interromper.

Durante o controle local, **Ctrl + Alt + V** envia uma única linha de até **256 caracteres ASCII imprimíveis**, sem pressionar Enter. Textos mais longos ou multilinha abrem uma visualização. O Paste Helper aceita até **1.200 caracteres ASCII** e não oferece suporte a texto em chinês ou transferência de arquivos.

:::caution
O Paste Helper gera entrada de teclado no campo em foco do alvo. Verifique o foco do alvo e o comando antes de enviar, especialmente quando a opção de pressionar Enter estiver ativada.
:::

### Configurações e diagnósticos

<div align="center">
  <img alt="Abas de configurações do OSRBOT Link para preferências gerais, entrada e atalhos, captura e marca d'água e informações do aplicativo" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/settings.png" />
</div>

As configurações incluem idioma inglês/chinês, aparência clara/escura/sistema, direção de rolagem, atalhos de liberação, dicas de ponteiro e colagem rápida. As preferências são salvas no controlador; alterá-las não conecta dispositivos automaticamente.

Para solução de problemas, ative os logs de diagnóstico em **Settings → General**, reproduza o problema e selecione **Export**. De acordo com o manual, os logs registram o status da sessão em vez de pressionamentos de teclas, conteúdo da área de transferência ou vídeo, e não são enviados automaticamente.

## Opcional: compartilhamento de rede

No OSRBOT Link Pro, abra **Network and Remote**. O compartilhamento de rede dá ao Jetson acesso à conexão upstream do controlador; ele é independente do controle de teclado/mouse e da captura de vídeo.

<div align="center">
  <img alt="Exemplo de compartilhamento de rede no Windows com seleções separadas de adaptador upstream e de destino" width="650" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/network-sharing.png" />
</div>

1. Conecte as portas Ethernet do controlador e do Jetson com um cabo Ethernet.
2. Conecte o controlador à rede upstream por Wi-Fi ou por um segundo adaptador Ethernet.
3. Selecione o **Upstream Adapter** e o **Target Adapter**, clique em **Enable Sharing** e conceda as permissões de sistema solicitadas.
4. Verifique o status e as informações de IP exibidos e depois confirme o serviço de LAN ou acesso à internet necessário a partir do Jetson.
5. Clique em **Disable Sharing** quando terminar.

O Windows requer acesso de administrador. O Linux requer NetworkManager, autorização do sistema e uma rota padrão no adaptador upstream. No macOS, ative o Compartilhamento de Internet manualmente em Configurações do Sistema.

:::note
O cabo USB de teclado/mouse não fornece essa conexão de rede. Para um link Ethernet direto offline, use endereços IP mutuamente alcançáveis; acesso à internet e compartilhamento de rede são desnecessários. Fechar o OSRBOT Link **não** desativa o compartilhamento de rede do sistema. Os nomes e endereços dos adaptadores na captura de tela são exemplos.
:::

## Opcional: controle via navegador na LAN

Mantenha o OSRBOT Link Pro em execução no controlador. Outros computadores em uma LAN confiável alcançável podem ver a tela capturada do Jetson e, quando autorizados, operá-lo por meio de um navegador. O compartilhamento de rede não precisa estar ativado para esse recurso.

<div align="center">
  <img alt="Configurações de controle pela LAN no controlador, com IP da LAN, porta, pareamento e permissões de controle" width="450" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/lan-control.png" />
</div>

1. No controlador, selecione o IP e a porta da sua LAN e clique em **Enable LAN**.
2. Em outro computador, abra o endereço real exibido pelo aplicativo, insira o código de pareamento e clique em **Connect**. Cada código é de uso único e expira após **2 minutos**.
3. Para visualização, certifique-se de que o vídeo esteja em execução no controlador.
4. Para entrada, também conecte o HID, ative **Allow Control** e conceda permissão de controle a esse navegador. O usuário do navegador pode clicar em **Request Control**.

<div align="center">
  <img alt="Página de pareamento no navegador e barra de ferramentas de controle com escala de exibição, qualidade de streaming e controles de tela cheia" width="900" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/browser-control.png" />
</div>

Até **4 navegadores** podem visualizar ao mesmo tempo, com apenas **1 navegador** recebendo entrada remota. O controlador e o navegador autorizado podem ambos enviar entrada, portanto coordenem a operação. **Disable Control** revoga a entrada remota enquanto permite a visualização; desativar o controle pela LAN encerra todas as sessões.

Use uma LAN confiável, permita o acesso de firewall para rede privada conforme necessário e não encaminhe a porta para a internet pública. A reconexão requer um novo código de pareamento. Se o IP do controlador mudar, reinicie o controle pela LAN e use o novo endereço.

## Solução de problemas

| Sintoma | O que verificar |
| --- | --- |
| Dispositivo de compartilhamento ausente ou HID não consegue conectar | Verifique a conexão USB do controlador, atualize a lista e selecione novamente o dispositivo HID. Se necessário, use Reset HID ou corrija as permissões HID do Linux e reconecte. |
| Vídeo funciona, mas a entrada não | Confirme que o HID está Connected, que o cabo do alvo usa a porta 4 e que o espaço de trabalho foi clicado. Para entrada pelo navegador, verifique também a autorização de controle. |
| Sem vídeo ou tela preta | Verifique a saída de vídeo do alvo, a direção HDMI/DP, a conexão USB da placa de captura e a permissão da câmera. Feche outros aplicativos que estejam usando a placa de captura. |
| Uma resolução ou taxa de quadros não inicia | Pare o vídeo e selecione um modo compatível com a placa de captura e a fonte. Verifique a conexão USB; configurações personalizadas não podem exceder as capacidades do hardware. |
| A entrada para após abrir configurações ou alternar janelas | Clique novamente no espaço de trabalho para retomar o controle. Se ainda estiver sem resposta, use Reset HID, atualize e reconecte. |
| Compartilhamento de rede ativado, mas o acesso falha | Verifique ambas as seleções de adaptador, a fiação Ethernet e o endereço, gateway e DNS do alvo. Confirme o serviço necessário a partir do alvo; um ping bem-sucedido sozinho é insuficiente. |
| Falha no pareamento do navegador | Gere um novo código de pareamento e verifique a alcançabilidade na LAN e o acesso pelo firewall. Use o endereço atual do controlador. |
| Navegador consegue visualizar, mas não controlar | Verifique o HID, o Allow Control e a permissão de controle concedida ao navegador. Apenas um navegador pode manter a permissão de entrada remota. |

**Reset HID** não retoma automaticamente o controle nem interrompe o vídeo/gravação. Reconecte e clique no workspace em seguida.

Para uma solicitação de suporte, inclua o sistema operacional do controlador, modelo de destino, fotos da fiação, mensagem de erro, etapas de reprodução e logs de diagnóstico exportados, se necessário.

## Recursos Relacionados

- [Lançamentos de software OSRBOT Link e notas de instalação](https://github.com/osrbot/osrbot-link/releases)
- [Uso do hardware e interfaces do reComputer Super](/pt-br/recomputer_jetson_super_hardware_interfaces_usage/)
- [Interfaces e pinouts do reComputer Robotics J401](/pt-br/recomputer_jetson_robotics_j401_getting_started/)
- [Repositório e discussões do Seeed Wiki](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

As informações do produto, limites de operação e ilustrações do manual são baseadas no **OSRBOT Link Product Manual v1.1 (inglês e chinês, novembro de 2026)**. A visão geral da conexão do reComputer é um esquema para este guia, não uma fotografia de uma configuração testada. Para suporte de software e hardware OSRBOT, entre em contato com [winter@osrbot.com](mailto:winter@osrbot.com).

## Suporte Técnico e Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
