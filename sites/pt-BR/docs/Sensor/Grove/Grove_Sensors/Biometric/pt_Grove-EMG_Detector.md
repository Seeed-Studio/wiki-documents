---
description: Grove - Detector de EMG
title: Grove - Detector de EMG
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-EMG_Detector
sku: 101020058
last_update:
  date: 1/6/2023
  author: jianjing Huang
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-EMG_Detector/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_product.jpg" /></div>

O detector de EMG é uma ponte que conecta o corpo humano e a eletricidade; o sensor coleta pequenos sinais musculares e então os processa com uma segunda etapa de amplificação e filtragem; o sinal de saída pode ser reconhecido pelo Arduino. Você pode adicionar esse sinal ao seu sistema de controle.

:::note
O sensor não pode ser usado para fins médicos.
:::

No modo de espera, a tensão de saída é de 1,5 V. Quando detecta atividade muscular, o sinal de saída aumenta, e a tensão máxima é de 3,3 V. Você pode usar este sensor em sistemas de 3,3 V ou 5 V.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Características
--------

- Compatível com Grove
- Conector de 3,5 mm
- 6 eletrodos de superfície descartáveis
- Tensão de alimentação: 3,3 V–5 V
- Cabos de 1000 mm
- Nenhuma fonte de alimentação adicional

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Plataformas Compatíveis
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como compatíveis são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software/códigos de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

Visão Geral do Hardware
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_EMG_detector.jpg" /></div>

- J2: interface Grove, conecte à E/S analógica;
- J1: conector para eletrodos de superfície descartáveis de EMG.
- U1: INA331IDGKT, amplificador diferencial.
- U2, U3: OPA333, amplificador de deriva zero.

Demonstração
-------------

Esta demonstração mostrará como usar o Grove - LCD RGB Backlight; precisamos de um Seeeduino V3.0, um Grove - LED Bar e um Grove - Base Shield.

### Instalação de Hardware

Conecte o Grove - Base Shield ao Seeeduino, depois conecte o Grove - LED Bar ao D8 e conecte o Grove - EMG Sensor ao A0.

Por fim, fixe os três eletrodos no seu músculo e mantenha uma distância entre cada eletrodo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_connect.jpg" /></div>

:::tip
A lista de peças deste produto foi atualizada recentemente. Você pode receber fios de conexão de duas especificações; suas funções são totalmente idênticas, apenas as cores são diferentes. A relação correspondente é mostrada no diagrama abaixo.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/newline.png" /></div>
:::

### Baixar o Código e Fazer o Upload

Você pode baixar o código de demonstração no GitHub, clique [aqui](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code/), depois extraia-o em qualquer lugar.

Em seguida, faça o upload do código para o Seeeduino; se você tiver qualquer problema com o envio do código, consulte Getting Started With Seeeduino

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_ide.png" /></div>

### Mover

Quando terminar de baixar o código de demonstração, levará cerca de 5 s para inicializar; você deve permanecer parado durante a inicialização.

Você pode ver que, durante a inicialização, o LED Bar passará do nível 10 para o nível 0. Quando todos os LEDs do LED Bar estiverem apagados, você já pode se mover.

Quando você estiver se movendo, verá que o nível do LED Bar mudará.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_emg_demo_2.gif" /></div>


<!-- 
# Grove-EMG Sensor v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div> -->

Recursos
--------

- [Arquivo Eagle do Grove-EMG Sensor v1.1](https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip)
- [Código de Demonstração](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EMG_Detector -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

