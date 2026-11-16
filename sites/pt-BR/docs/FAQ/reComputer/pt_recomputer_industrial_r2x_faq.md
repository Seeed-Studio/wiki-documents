---
title: FAQ da série reComputer Industrial R2x
description: Perguntas frequentes sobre as séries reComputer Industrial R20xx, R21xx e R22xx, incluindo boot por eMMC e SSD, refrigeração industrial, configuração do sistema e expansão.
slug: /recomputer_industrial_r2x_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer Industrial R20xx FAQ
  - reComputer Industrial R21xx FAQ
  - reComputer Industrial R22xx FAQ
  - reComputer Industrial R2x troubleshooting
  - Raspberry Pi CM4
  - Raspberry Pi CM5
  - industrial AI NVR
---

<div class="recomputer-faq-page">

# FAQ da série reComputer Industrial R2x

Esta página contém respostas verificadas para a série reComputer Industrial R2x. Cada resposta indica a variante de produto e o modo de firmware ao qual se aplica, juntamente com a data em que foi verificada pela última vez em relação às fontes oficiais atuais.

## Antes de começar

- Confirme o modelo exato: reComputer Industrial R20xx, R21xx ou R22xx, e o módulo de computação Raspberry Pi instalado.
- Verifique a versão atual da imagem do Raspberry Pi OS antes de aplicar etapas específicas de versão.
- As respostas nesta página foram verificadas pela última vez em 2026-11-10; verifique novamente as fontes oficiais vinculadas se você estiver lendo isto depois dessa data.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## OS e Firmware {#os-and-firmware}

### Após adicionar um módulo de UPS aos produtos da série Raspberry Pi CM, o dispositivo não liga quando a energia é restabelecida imediatamente após uma queda de energia. Como isso deve ser tratado? {#industrial-r20xx-ups-power-cycle}

**Aplica-se a:** reComputer Industrial R20xx (baseado nos módulos de computação da série Raspberry Pi CM), com um módulo de UPS adicionado e o dispositivo não ligando quando a energia é restabelecida imediatamente após uma queda de energia

**Última verificação:** 2026-11-01

Isso acontece porque, uma vez que o módulo de UPS é instalado, a função do UPS se sobrepõe à lógica de desligamento predefinida no CM5. Quando isso ocorre, simplesmente desligue o dispositivo completamente e aguarde até que o UPS tenha descarregado totalmente; o dispositivo poderá então ser ligado novamente.

**Pré-requisitos:**

- As causas prováveis desse comportamento são:

1. A condição para uma reinicialização do CM4/5 é que a tensão no pino GLOBAL_EN permaneça baixa por mais de 1 milissegundo. A condição que puxa o pino GLOBAL_EN para nível baixo é que a alimentação de sistema de 5 V caia abaixo de 1,65 V.
2. Quando a alimentação externa é cortada, o UPS envia um sinal de desligamento para o CM4. Se a energia for restabelecida antes que o UPS tenha descarregado totalmente, a tensão VDD_5_SYS permanece acima de 1,65 V e, ao mesmo tempo, o dispositivo já recebeu o comando de desligamento e entrou no estado de desligamento. Nesse caso, o pino GLOBAL_EN não consegue ir para nível baixo, portanto o CM4 não consegue reiniciar.

**Notas:**

- Isso só acontece depois que um UPS foi instalado; em uso normal, não afeta a reinicialização do dispositivo. Só importa quando a energia falha de forma repentina, e então é preciso prestar atenção ao momento em que o dispositivo é reiniciado (restabeleça a energia após cerca de 10 a 20 segundos, ou 1 a 2 minutos).
- A situação também pode ser evitada alterando a lógica de desligamento por software; você pode encontrar a solução correspondente na comunidade: https://github.com/lucasnetau/ltc3350-ups

**Referências:**

- [LTC3350 SuperCap UPS Monitor](https://github.com/lucasnetau/ltc3350-ups)

### O reComputer Industrial R2245-12 oferece suporte oficial ao Ubuntu Server 24.04 LTS e ao driver Hailo-8? {#r2245-12-ubuntu-server-2404}

**Aplica-se a:** reComputer Industrial R22xx (reComputer R2245-12 como exemplo), para casos que precisam executar o Hailo-8 no Ubuntu Server 24.04 LTS

**Última verificação:** 2026-11-01

A instalação da imagem oficial do Ubuntu Server 24.04 é suportada, mas, como os arquivos de device tree podem estar ausentes, algumas funções podem não funcionar corretamente. Recomenda-se usar a imagem oficial fornecida pela Seeed; essa imagem vem com tudo o que é necessário para executar o Hailo-8 pré-instalado e pode ser usada como está.

**Referências:**

- [Introdução ao reComputer Industrial R22xx](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_getting_start/)
- [reComputer Industrial R22xx Flash OS](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_flash_os/)

## Conectividade e Rede {#connectivity-and-networking}

### O reComputer Industrial R21xx precisa de um transceptor CAN adicional para conectar um sensor de ângulo CANopen? {#industrial-r21xx-canopen-transceiver}

**Aplica-se a:** reComputer Industrial R21xx, para conectar dispositivos de fieldbus como sensores de ângulo CANopen através da interface CAN on-board

**Última verificação:** 2026-11-01

O reComputer Industrial R21xx possui um transceptor CAN FD isolado on-board, portanto não é necessário um transceptor CAN adicional. O CAN-H, CAN-L e o GND de sinal do sensor podem ser conectados diretamente aos terminais Phoenix CANH/CANL/GND do dispositivo. A alimentação do sensor deve ser ligada separadamente e não deve ser misturada com as linhas de sinal CAN. Um resistor de terminação de 120 Ω deve ser instalado em cada extremidade do barramento CAN; o R21xx não possui resistores de terminação integrados. A interface é compatível com CAN 2.0 e oferece suporte a CANopen; ela é mapeada como `can0`/`can1` no Linux e começa a se comunicar assim que a taxa de baud é configurada.

**Referências:**

- [Introdução ao reComputer Industrial R21xx](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_R21xx_getting_start/)

### O reComputer Industrial R2245-12 não tem saída HDMI e a eMMC não é detectada ao fazer o flash via USB. Como isso deve ser tratado? {#r2245-12-usb-emmc-not-detected}

**Aplica-se a:** reComputer Industrial R22xx (reComputer R2245-12 como exemplo), em que o dispositivo não tem saída HDMI e a eMMC não é detectada ao fazer o flash via USB

**Última verificação:** 2026-11-01

Depois de entrar no modo BOOT e conectar a placa ao computador via USB, o sistema detecta automaticamente a eMMC do R2245. Primeiro verifique no Gerenciador de Dispositivos do Windows se aparece um dispositivo de armazenamento adicional e, em seguida, use o Raspberry Pi Imager para selecionar a imagem e o dispositivo de armazenamento de destino e gravá-la; se a opção estiver disponível, regravar uma nova imagem geralmente restaura o dispositivo. Se a eMMC ainda não for detectada, a eMMC ou o CM5 podem estar danificados: você pode abrir o gabinete, substituir o CM5 e gravar a imagem novamente como teste; se a substituição for bem-sucedida, o CM5 original estava danificado. Registre as etapas e o log durante o teste.

**Referências:**

- [Introdução ao reComputer Industrial R22xx](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_getting_start/)
- [reComputer Industrial R22xx Flash OS](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_flash_os/)

## Hardware e Interfaces {#hardware-and-interfaces}

### Como usar a função de GPS nos produtos da série reComputer Industrial R2x? A função 4G pode ser equipada com uma antena de diversidade? {#industrial-r2x-gps-4g-antenna}

**Aplica-se a:** série reComputer Industrial R2x (reComputer Industrial R20xx / R21xx / R22xx), para casos que precisam de posicionamento por GPS ou de uma antena de diversidade 4G

**Última verificação:** 2026-11-01

A função de GPS do dispositivo só funciona com um módulo 4G e uma antena GPS; o produto padrão não é fornecido com nenhum deles. Se você precisar dessa função, pode solicitar a personalização ao fazer o pedido, e a Seeed concluirá a pré-instalação antes do envio. Em relação à antena de diversidade para a função 4G, o dispositivo pode receber no máximo 3 antenas ao mesmo tempo.

**Referências:**

- [Introdução ao reComputer Industrial R22xx](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_getting_start/)
- [Introdução ao reComputer Industrial R20xx](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r20xx_getting_start/)

### O dispositivo ainda pode ser usado quando uma peça se soltou internamente, está solta ou faz barulho ao chacoalhar? Após solicitar uma devolução, como são realizados a inspeção e o reembolso? {#industrial-r21xx-return-inspection-refund}

**Aplica-se a:** reComputer Industrial R21xx, para casos de pós-venda em que uma peça interna se soltou, está solta ou faz barulho e uma devolução foi solicitada

**Última verificação:** 2026-11-01

Se você perceber que uma peça se soltou dentro do dispositivo, está solta ou faz barulho quando o dispositivo é movimentado, pare imediatamente de alimentar e usar o dispositivo, para evitar um curto-circuito ou danos adicionais à placa principal. Não recoloque a peça por conta própria nem continue desmontando o dispositivo; entregue-o ao suporte técnico ou ao armazém para inspeção. Ao tratar o caso, tire fotos nítidas em close do rótulo da embalagem externa (com o código de barras), do número de série (SN) do dispositivo, da placa principal como um todo e do local onde a peça se soltou.

**Referências:**

- [Introdução ao reComputer Industrial R21xx](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_R21xx_getting_start/)

### Nenhuma das duas portas USB-A 3.2 do reComputer Industrial R21 reconhece um dispositivo e o log de boot continua mostrando o erro -71. Como a falha deve ser delimitada e tratada? {#industrial-r21xx-usb-a-error-71}

**Aplica-se a:** reComputer Industrial R21xx, em que nenhuma porta USB-A 3.2 reconhece um dispositivo e o log de boot continua mostrando o erro -71

**Última verificação:** 2026-11-01

Se o dispositivo mostrar uma falha de leitura do descritor de dispositivo USB por volta de 0,8 segundos após o início do boot, continuar relatando o erro -71 (EPROTO) e, por fim, imprimir "unable to enumerate USB device", e o hub USB5744 também não for detectado no barramento USB 3.0, o hardware deve ser verificado primeiro. Se as outras unidades do mesmo lote funcionarem normalmente enquanto apenas esta unidade continuar relatando o erro antes que o programa em espaço de usuário seja iniciado, a falha pode ser atribuída a um defeito de hardware no caminho de sinal USB 2.0 D+/D- ou no circuito do hub entre o RP1 e o USB5744, em vez de a um problema comum de configuração de software.

**Referências:**

- [Introdução ao reComputer Industrial R21xx](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_R21xx_getting_start/)

## Térmica e Alimentação {#thermal-and-power}

### Para produtos em módulo, como o módulo PoE e o módulo térmico, por que o chip não entra em contato com o dispositivo de refrigeração durante a instalação? {#industrial-r2xx-module-thermal-contact}

**Aplica-se a:** reComputer Industrial R20xx (baseado nos módulos de computação da série Raspberry Pi CM), para instalações de acessórios opcionais como o módulo PoE e o módulo térmico

**Última verificação:** 2026-11-01

Para essa dúvida comum, verifique o seguinte: 1. se o acessório é um acessório que se adapta ao produto correspondente; 2. se você o instalou na interface correta; 3. se o acessório está totalmente instalado (o pad térmico, o gabinete e assim por diante).

**Referências:**

- [Introdução ao reComputer Industrial R20xx](https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r20xx_getting_start/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## Suporte Técnico e Discussão de Produtos

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
