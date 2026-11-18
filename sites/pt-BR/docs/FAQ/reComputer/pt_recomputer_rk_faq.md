---
title: reComputer RK FAQ
description: Perguntas frequentes sobre compatibilidade de hardware, configuração de SO, conectividade e inferência de IA na série reComputer RK.
slug: /recomputer_rk_faq
last_update:
  date: 11/06/2026
  author: doublelf
keywords:
  - reComputer RK FAQ
  - reComputer RK troubleshooting
  - reComputer RK3588
  - reComputer RK3576
  - reComputer RK NPU
  - Rockchip RKNN
---

<div class="recomputer-faq-page">

# reComputer RK FAQ

Esta página contém respostas verificadas para o reComputer RK. Cada resposta indica a variante de produto e o modo de firmware ao qual se aplica, juntamente com a data em que foi verificada pela última vez em relação às fontes oficiais atuais.

## Antes de começar

- Confirme a variante exata do produto e o SoC em que ele se baseia (RK3588 ou RK3576).
- Verifique a versão atual do firmware antes de aplicar etapas específicas de versão.
- As respostas nesta página foram verificadas pela última vez em 2026-11-01; verifique novamente as fontes oficiais vinculadas se você estiver lendo isto depois dessa data.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## Documentação e uso {#documentation-and-usage}

### Onde posso encontrar os tutoriais do reComputer RK? {#rk-tutorials-and-images}

**Aplica-se a:** Toda a série reComputer RK3576 e RK3588, para usuários que precisam dos tutoriais oficiais, das imagens e do fluxo de instalação

**Última verificação:** 2026-11-01

Localização do wiki: https://sensecraft.seeed.cc/ai-lab/en  
  Consulta de imagens: https://armbian.com/boards

1. O wiki da série reComputer RK foi movido para a plataforma reComputer AI Lab, onde você pode encontrar os tutoriais de produto em Tutorials: https://sensecraft.seeed.cc/ai-lab/en; 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_tutorials.jpg' />  
    Além disso, a plataforma também fornece páginas como Models e Projects, onde você pode executar um modelo ou um caso com um único comando Docker para ter uma ideia mais rápida do desempenho do dispositivo. 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_model.jpg' />  <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_project.jpg' />  

2. Enviamos as imagens dos produtos RK relacionados para o repositório oficial do Armbian, onde você mesmo pode pesquisá-las: https://imager.armbian.com/; 

    Também fornecemos um wiki sobre como gravar as imagens: https://sensecraft.seeed.cc/ai-lab/en/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os

### O reComputer RK3576/RK3588 pode inicializar o sistema a partir de um SSD M.2 NVMe? {#rk3576-nvme-boot}

**Aplica-se a:** Série reComputer RK3576/RK3588, usando um SSD M.2 NVMe como disco de sistema

**Última verificação:** 2026-11-01

Sim. Depois que o sistema tiver sido gravado no SSD, desligue o dispositivo e remova o cartão SD; o sistema então inicializa automaticamente a partir do SSD. Você pode seguir o tutorial nessa página para saber como alternar a unidade de boot: https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os#dd

**Notas:**

- Ao gravar o sistema, certifique-se de usar a imagem oficial que fornecemos.

**Referências:**

- [Install Armbian on an NVMe SSD on reComputer RK3576 | reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os#dd)

## SO e firmware {#os-and-firmware}

### Qual é a senha inicial de um dispositivo reComputer RK3588? {#rk3588-default-password}

**Aplica-se a:** Placas reComputer RK3588

**Última verificação:** 2026-11-01

Se você comprou um reComputer RK3588 padrão diretamente e a conta não foi personalizada, o nome de usuário e a senha iniciais do dispositivo são: root  - 1234

### O reComputer RK3588 Dev Kit virá com uma imagem oficial de Android? {#rk3588-devkit-android-availability}

**Aplica-se a:** reComputer RK3588 Dev Kit

**Última verificação:** 2026-11-01

No momento, o reComputer RK3588 Dev Kit oferece suporte oficial ao Armbian. Nenhuma imagem oficial de Android foi confirmada para lançamento, e nenhuma data de lançamento foi confirmada. Se o seu projeto precisar de Android ou de outro sistema operacional, você pode avaliar o suporte personalizado por meio da parceria de customização ODM; esse caminho não é o mesmo que uma imagem oficial de disponibilidade geral.

## Conectividade e rede {#connectivity-and-networking}

### Como uso câmeras GMSL no reComputer RK3576 e qual desserializador funciona? {#rk3576-gmsl-camera}

**Aplica-se a:** Placas reComputer RK3576 com um adaptador desserializador GMSL para MIPI CSI-2 externo

**Última verificação:** 2026-11-01

Sim. O RK3576 pode receber câmeras GMSL por meio de uma placa adaptadora desserializadora GMSL externa. O desserializador converte os dados seriais GMSL em MIPI CSI-2, e o RK3576 os recebe pela sua interface MIPI CSI; um MAX96712 é um desserializador adequado para isso. Codificação e gravação em hardware H.265 também são suportadas: o RK3576 possui um VPU integrado com codificação em hardware H.264 e H.265, e a especificação do chip atinge até 4K a 60 fps.

**Referências:**

- [Object Detection with YOLOv11 on reComputer-RK](https://wiki.seeedstudio.com/pt-br/object_detection_with_yolov11_on_recomputer_rk/)
- [reComputer RK3576-30](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)

### O reComputer RK3576-20 fornece pinos I2C? {#rk3576-20-i2c-pins}

**Aplica-se a:** reComputer RK3576-20, usado como substituto de um Raspberry Pi

**Última verificação:** 2026-11-01

O reComputer RK3576-20 expõe um conector GPIO de 40 pinos que inclui dois canais I2C, e seu esquemático está disponível aqui: https://files.seeedstudio.com/wiki/reComputer_RK/Documents/recomputer_rk3576/RECOMPUTER%20RK3576_V1.0_SCH_2026.pdf.

**Referências:**

- [reComputer RK3576 V1.0 Schematic](https://files.seeedstudio.com/wiki/reComputer_RK/Documents/recomputer_rk3576/RECOMPUTER%20RK3576_V1.0_SCH_2026.pdf)

### Como verifico o GPIO e os pinos multiplexados do conector de 40 pinos do reComputer RK3576? {#rk3576-40pin-pinmux}

**Aplica-se a:** Conector GPIO de 40 pinos da série reComputer RK3576, para projetos de hardware que planejam multiplexação de UART, CAN, SPI ou I2C

**Última verificação:** 2026-11-01

O conector de 40 pinos pode multiplexar até 6 UARTs. Quatro UARTs padrão (RS232, RS485 ou KNX) são possíveis, mas exigem multiplexação e ocupam 8 pinos no total; um UART com CTS e RTS (MG24) também é possível; um CAN é possível, e o CAN no conector de 40 pinos é um sinal nativo do chip, portanto é necessário um transceptor CAN externo para que ele funcione. Como a multiplexação é extensa, funções como SPI ou I2C podem não estar disponíveis.

1. Você pode verificar o teste de pinos e o status de multiplexação do dispositivo nesse wiki: https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/interface-usage-guidelines/use-recomputer-rk3576-hardware-interfaces-and-fan-control#gpio 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_rk3576_gpio.jpg' /> 

**Referências:**

- [reComputer RK3576 Hardware Interfaces and Fan Control | reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/tutorials)

### O reComputer RK3588-30 pode receber uma câmera IP e executar detecção de objetos nela? {#rk3588-ip-camera-rtsp}

**Aplica-se a:** reComputer RK3588-30, conectando uma câmera IP RTSP via Ethernet para análise de vídeo

**Última verificação:** 2026-11-01

Sim. Pelas suas capacidades, o dispositivo oferece suporte total à entrada de câmera RTSP: ele possui duas portas Ethernet de 2,5 Gigabit, uma das quais com suporte a PoE, um VPU para decodificação de vídeo e um NPU para computação.

**Referências:**

- [Interruptible Conversational Voice AI on the Edge: Build, Deploy, and Measured Results](https://wiki.seeedstudio.com/pt-br/solutions/conversational-voice-ai/)
- [Edge Security Alerting: Restricted Zones, Line Crossing and Loitering on the Edge](https://wiki.seeedstudio.com/pt-br/solutions/edge-security/)

## Hardware e interfaces {#hardware-and-interfaces}

### O cartão acelerador RK182x interfere na instalação no reComputer RK3576 e não pode ser instalado {#rk1828-npu-interference}

**Aplica-se a:** Placas reComputer RK3576 com um cartão NPU PCIe RK1828 ou RM182X adicionado

**Última verificação:** 2026-11-01

O reComputer RK3576 já foi testado para essa instalação. Ao instalar o cartão acelerador RK182x, observe que a carcaça inferior original do acelerador deve ser removida: mantenha apenas a placa nua mais o ventilador de resfriamento, e então o cartão pode ser instalado normalmente.

### Quais câmeras MIPI-CSI o reComputer RK3588 suporta? {#rk3588-csi-camera-support}

**Aplica-se a:** Série reComputer RK3588, conectando uma câmera pela interface MIPI-CSI

**Última verificação:** 2026-11-01

A câmera atualmente confirmada como funcionando é o Raspberry Pi Camera Module 3 (IMX708).

**Notas:**

- A interface CSI do reComputer RK3588 é diferente do design do Raspberry Pi, portanto o ecossistema de câmeras do Raspberry Pi não pode ser usado como está.

**Referências:**

- [Edge Security Alerting: Restricted Zones, Line Crossing and Loitering on the Edge](https://wiki.seeedstudio.com/pt-br/solutions/edge-security/)
- [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)

## Produto e serviço {#product-and-service}

### O reComputer RK3588-40 pode executar IA local como DeepSeek ou Ollama, e ele oferece suporte a Windows ou Linux? {#rk3588-local-ai-os}

**Aplica-se a:** reComputer RK3588-40 executando modelos LLM ou VLM locais

**Última verificação:** 2026-11-01

Sim, ele pode ser usado para implantação de IA local. O reComputer RK3588-40 oferece suporte a uma ampla gama de modelos LLM e VLM; você pode verificar os modelos adaptados na página Models da plataforma reComputer AI Lab. Em relação ao sistema operacional, o oficialmente suportado é o Debian, com Linux como sistema base; Windows e outras distribuições Linux além do Debian ainda não têm suporte explícito.

**Notas:**

- Se uma ferramenta ou modelo específico (por exemplo, DeepSeek ou Ollama) funciona ainda precisa ser confirmado em relação à versão do modelo, ao nível de quantização, à memória disponível e aos recursos de computação.

**Referências:**

- [reComputer AI Lab - Models](https://sensecraft.seeed.cc/ai-lab/models)
- [reComputer RK3588-40](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html)

### Quais acessórios PoE-PD e Hailo-8 M.2 o reComputer RK3576/RK3588 suporta, e como confirmo compatibilidade, o SKU e a forma de comprá-los? {#rk3588-40-accessories}

**Aplica-se a:** reComputer RK3588-40 (SKU 100086238), para seleção de acessórios PoE-PD e Hailo-8 M.2

**Última verificação:** 2026-11-01

O módulo PoE-PD para o reComputer RK3588 ainda não foi lançado, portanto não há um SKU confirmado nem uma declaração sobre se ele será vendido separadamente. Em segundo lugar, o acelerador Hailo-8 M.2: a Seeed afirma que existe um módulo Hailo-8 M.2 compatível com o reComputer RK3588-40, mas ele atualmente é fornecido apenas como um pacote personalizado com um host RK3588-40 e o módulo não pode ser comprado separadamente;

**Notas:**

- Solicite um orçamento para a solução personalizada em volume. Se você comprar um módulo Hailo-8 por outro canal, peça ao vendedor as especificações relevantes e a mesma compatibilidade do Hailo-8 com o RK3588-40 antes de decidir

**Referências:**

- [reComputer RK3588-40](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html)

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
