---
title: reTerminal e reTerminal DM FAQ
description: Perguntas frequentes sobre os displays reTerminal e reTerminal DM, incluindo gravação de SO na eMMC, comportamento da tela e do toque, acesso por SSH e console serial e identificação de periféricos.
slug: /reterminal_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reTerminal FAQ
  - reTerminal DM FAQ
  - solução de problemas do reTerminal
  - solução de problemas do reTerminal DM
  - tela preta do reTerminal
  - tela sensível ao toque do reTerminal
  - Raspberry Pi CM4
  - gravação de SO no reTerminal
---

<div class="recomputer-faq-page">

# reTerminal e reTerminal DM FAQ

Esta página contém respostas verificadas para o reTerminal e o reTerminal DM. Cada resposta indica a variante do produto e o modo de firmware ao qual se aplica, juntamente com a data em que foi verificada pela última vez em relação às fontes oficiais atuais.

## Antes de começar

- Confirme o modelo exato: reTerminal ou reTerminal DM, e a variante de Raspberry Pi CM4 instalada.
- Verifique a versão atual da imagem do Raspberry Pi OS antes de aplicar etapas específicas de versão.
- As respostas nesta página foram verificadas pela última vez em 2026-11-10; verifique novamente as fontes oficiais vinculadas se você estiver lendo isto depois dessa data.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## Documentação e uso {#documentation-and-usage}

### Como obtenho o arquivo de modelo 3D do reTerminal DM (114070201)? {#reterminal-dm-3d-model}

**Aplica-se a:** reTerminal DM (114070201), para desenvolvedores que precisam do modelo 3D para projeto estrutural ou validação de gabinete

**Última verificação:** 2026-11-01

O modelo 3D do reTerminal DM (114070201) está disponível por meio do seguinte link de arquivo STEP de projeto estrutural: https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp . Para outros arquivos de projeto ou informações técnicas, entre em contato com a equipe de suporte técnico da Seeed.

**Referências:**

- [Arquivo de Projeto Estrutural do reTerminal DM (STEP)](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)
- [Guia de Hardware do reTerminal DM](https://wiki.seeedstudio.com/pt-br/reterminal-dm-hardware-guide/)

## SO e Firmware {#os-and-firmware}

### Como posso gravar o Raspberry Pi OS que é enviado originalmente com o reTerminal {#reterminal-flash-original-shipped-image}

**Aplica-se a:** reTerminal e reTerminal DM, para restaurar a imagem de fábrica que foi enviada originalmente com o dispositivo

**Última verificação:** 2023-11-15

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)

### Como gravar Raspberry Pi OS/ Ubuntu OS 64-bit ou outro SO na eMMC {#reterminal-flash-os-to-emmc}

**Aplica-se a:** reTerminal e reTerminal DM com um compute module que possui armazenamento eMMC, para gravar uma imagem de sistema

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/flash_different_os_to_emmc/)

### Como instalar os drivers do reTerminal após gravar um novo Raspberry Pi OS/ Ubuntu OS ou outro SO {#reterminal-install-drivers-after-flashing}

**Aplica-se a:** reTerminal e reTerminal DM, para instalar os drivers do reTerminal depois que um novo sistema operacional foi gravado

**Última verificação:** 2023-11-15

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)

### Como atualizar o Raspberry Pi OS e os pacotes instalados {#reterminal-upgrade-rpios-packages}

**Aplica-se a:** reTerminal e reTerminal DM executando Raspberry Pi OS, para uma atualização de sistema in-place de rotina

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/upgrade-rpiOS_installed-packages/)

### Como posso gravar um SO se eu substituir o CM4 por uma versão sem eMMC {#reterminal-flash-os-without-emmc-cm4}

**Aplica-se a:** reTerminal e reTerminal DM equipados com um Raspberry Pi CM4 que não possui armazenamento eMMC

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/flashing_os_on_non-eMMC_CM4_replacement/)

### Não consigo despertar o LCD do reTerminal após o modo de suspensão {#reterminal-lcd-wakeup-after-sleep}

**Aplica-se a:** reTerminal e reTerminal DM executando Raspberry Pi OS com o driver de device tree overlay do reTerminal instalado

**Última verificação:** 2024-12-16

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/Wakeup_reTerminal_LCD_after_sleep/)

### Como posso inicializar um SO a partir de um Pen Drive USB {#reterminal-boot-from-usb-flash-drive}

**Aplica-se a:** reTerminal e reTerminal DM com um bootloader de compute module, para inicializar um sistema a partir de uma unidade USB externa

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/Boot_OS_from_USB_flash_drive/)

### Como posso instalar o Ubuntu no reTerminal? {#reterminal-install-ubuntu}

**Aplica-se a:** reTerminal e reTerminal DM com uma imagem Ubuntu Server arm64 gravada na eMMC

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/install-ubuntu-on-reterminal/)

### A orientação da tela está incorreta após instalar o Raspberry Pi OS Bullseye {#reterminal-screen-orientation}

**Aplica-se a:** reTerminal e reTerminal DM com uma imagem Raspberry Pi OS Bullseye ou Bookworm e os drivers do reTerminal instalados

**Última verificação:** 2023-11-24

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/Incorrect_screen_orientation_on_RPiOS_Bullseye/)

### Como desativar a rotação de tela no reTerminal {#reterminal-disable-screen-rotation}

**Aplica-se a:** reTerminal e reTerminal DM executando Raspberry Pi OS, para uma instalação fixa em que o display não deve girar

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/disable_screen_rotation_on_reTerminal/)

### Como resolver quando a taxa de atualização da tela está muito baixa {#reterminal-screen-refresh-rate}

**Aplica-se a:** reTerminal e reTerminal DM executando Raspberry Pi OS, para um display que apresenta travamentos visíveis na atualização

**Última verificação:** 2024-07-02

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/screen_refresh_rate_low/)

## Conectividade e rede {#connectivity-and-networking}

### A Seeed mantém o IMEI e o número de série do módulo 4G LTE Cat 4 EC25 dos dispositivos reTerminal ou reTerminal DM entregues, e como eles podem ser obtidos quando o dispositivo já está implantado e não pode ser lido no local? {#reterminal-imei-lte-serial}

**Aplica-se a:** dispositivos reTerminal e reTerminal DM que foram entregues e implantados em campo, para registro de ativos em que o IMEI e o número de série do módulo 4G LTE Cat 4 EC25 precisam ser preenchidos

**Última verificação:** 2026-11-01

A Seeed não mantém o IMEI nem o número de série do módulo 4G dos dispositivos entregues, portanto esses números não podem ser preenchidos apenas a partir do pedido, do modelo do produto ou do número de série do host. O IMEI e o número de série do módulo 4G pertencem ao dispositivo ou módulo individual e precisam ser lidos a partir do dispositivo implantado: o usuário final ou o técnico em campo abre o console serial do dispositivo ou a interface de comandos AT do módulo e executa `AT+GSN` para consultar o IMEI desse módulo 4G; o número de série / ID do módulo deve ser obtido a partir da etiqueta do módulo ou por meio do comando de consulta do módulo EC25. Faça a correspondência dos resultados de consulta um a um com os números de ativo do dispositivo antes de concluir o registro. Se as pessoas no local do dispositivo não puderem ser contatadas agora, o usuário final local ou o técnico em campo terá que executar as consultas e enviar os resultados de volta; a Seeed não pode restaurá-los a partir dos registros originais de entrega.

1. Confirme a localização, o número de ativo e a pessoa de contato de cada dispositivo implantado.
2. O usuário final ou o técnico em campo conecta-se ao console serial do dispositivo ou à interface de comandos AT do módulo 4G.
3. Execute `AT+GSN` e registre o IMEI retornado; observe que esse comando consulta o IMEI e não é o mesmo que consultar o número de série do módulo.
4. Consulte e registre o número de série / ID do módulo 4G a partir da etiqueta do módulo ou a partir do comando de consulta do LTE Cat 4 EC25.
5. Faça a correspondência do IMEI, do ID do módulo e do número de ativo do host de cada dispositivo um a um e envie-os ao administrador do dispositivo para concluir o registro.
6. Se não for possível organizar uma conexão remota ou no local, o usuário final ou o técnico em campo na localização do dispositivo terá que executar as consultas acima.

**Critérios de sucesso:**

- O IMEI e o ID do módulo 4G de cada dispositivo foram lidos do lado do dispositivo e registrados em relação ao número de ativo
- O registro não contém nenhum número que tenha sido deduzido a partir do pedido ou do número de série do host

**Referências:**

- [Guia de Introdução ao reTerminal DM](https://wiki.seeedstudio.com/pt-br/reterminal-dm/)

### Como posso fazer login no Raspberry Pi OS/ Ubuntu OS ou outro SO usando um conversor USB para serial {#reterminal-usb-serial-console-login}

**Aplica-se a:** reTerminal e reTerminal DM com o conector GPIO de 40 pinos, para login no console sem display

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/Logging_in_OS_using_USB_to_serial_converter/)

## Hardware e interfaces {#hardware-and-interfaces}

### Como solucionar o problema de tela preta no reTerminal {#reterminal-black-screen}

**Aplica-se a:** reTerminal e reTerminal DM cujo LCD permanece preto após a inicialização, com os LEDs de status PWR e SYS disponíveis para diagnóstico

**Última verificação:** 2023-11-15

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/reterminal_black_screen/)

### Por que há uma cola preta ao redor dos chips no CM4? {#reterminal-cm4-epoxy-underfill}

**Aplica-se a:** reTerminal e reTerminal DM com um compute module Raspberry Pi CM4, para usuários que notam o material preto na placa

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/black_glue_around_CM4/)

### Como resolver o problema de buzzer e LEDs que não funcionam após instalar os drivers do reTerminal {#reterminal-buzzer-leds-after-driver-install}

**Aplica-se a:** reTerminal e reTerminal DM após a instalação do driver do reTerminal ter sido executada

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/buzzer-leds-not-work_by_drivers/)

### Solução de problemas de imprecisão da tela sensível ao toque {#reterminal-touchscreen-inaccuracy}

**Aplica-se a:** reTerminal e reTerminal DM executando uma imagem Raspberry Pi OS baseada em X11 com o driver de toque do reTerminal instalado

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/troubleshooting-touch-screen-inaccuracy/)

### Como verificar se o chip de criptografia é ATECC608A-SSHDA-B ou ATECC608A-TNGTLSS-G {#reterminal-encryption-chip-check}

**Aplica-se a:** reTerminal e reTerminal DM para identificar a variante do coprocessador de criptografia on-board

**Última verificação:** 2023-06-21

Para mais detalhes, clique [aqui](https://wiki.seeedstudio.com/pt-br/check_Encryption_Chip/)

## Produto e serviço {#product-and-service}

### Um pedido unitário de reTerminal DM pode receber o módulo de expansão Dual LAN/SSD, o SSD NVMe M.2 2280 e as antenas Bluetooth/Wi-Fi instalados e testados gratuitamente antes do envio? {#reterminal-dm-preinstall-expansion}

**Aplica-se a:** pedidos unitários de reTerminal DM, para clientes que precisam do módulo de expansão Dual LAN/SSD, do SSD NVMe M.2 2280 e das antenas Bluetooth/Wi-Fi instalados antes do envio

**Última verificação:** 2026-11-01

Um pedido unitário não pode receber uma pré-montagem de fábrica gratuita (incluindo a instalação e o teste dos acessórios internos). Esse serviço é um serviço de personalização leve e só se aplica a pedidos que atinjam a quantidade mínima de compra exigida e paguem as taxas de personalização correspondentes. Para o pedido unitário atual, o dispositivo pode ser recebido em sua embalagem original de fábrica; após a chegada, você pode instalar os acessórios relacionados seguindo o guia oficial de montagem de hardware: https://wiki.seeedstudio.com/pt-br/reterminal-dm-hardware-guide/ .

**Observações:**

- A pré-montagem de fábrica é um serviço de personalização leve que exige uma certa quantidade de compra e cobra taxas de personalização, portanto um pedido unitário não se qualifica para a pré-instalação e teste gratuitos antes do envio.
- Se o volume do pedido posteriormente atingir o limite de personalização, você pode consultar novamente a Seeed sobre as condições aplicáveis ao serviço de pré-montagem de fábrica.

**Referências:**

- [Guia de Hardware do reTerminal DM](https://wiki.seeedstudio.com/pt-br/reterminal-dm-hardware-guide/)

### O reTerminal DM pode operar em uma temperatura ambiente de -20°C e é possível solicitar uma versão ODM na quantidade de 10 unidades? {#reterminal-dm-minus20-operating-temp}

**Aplica-se a:** O reTerminal DM padrão, para projetos que utilizam o dispositivo em temperatura ambiente de -20°C e para consultas de personalização ODM de 10 unidades

**Última verificação:** 2026-11-01

A faixa de temperatura de operação do reTerminal DM padrão é de -10°C a 50°C, portanto o modelo padrão por si só não atende a uma temperatura ambiente de -20°C. Operar a -20°C requer uma personalização ODM com um display de ampla faixa de temperatura ou uma solução de aquecimento interno. A quantidade mínima de pedido para uma personalização ODM é de 50 unidades.

**Referências:**

- [Introdução ao reTerminal DM](https://wiki.seeedstudio.com/pt-br/reterminal-dm/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
