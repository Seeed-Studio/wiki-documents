---
description: Grove-Mega_Shield
title: Grove-Mega Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mega_Shield
sku: 103020027
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Mega_Shield/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/500px-Megashieldn1_03.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mega Shield é uma placa de extensão para Arduino Mega e Google ADK. Padronizamos todos os conectores em conectores de 4 pinos (Sinal 1, Sinal 2, VCC e GND) de 2 mm e mantemos alguns dos headers de 3 pinos (Sinal, VCC e GND) de 2,54 mm para Servo e Electronic Bricks, o que simplifica a fiação de projetos de eletrônica. Os conectores de 4 pinos com trava também tornam a conexão mais estável. O Mega Shield inclui Digital 0 - 21 e Analog 0 - 15; abrimos mão de Digital 22 - 53 para facilitar a instalação do Mega Shield com Xduino Mega/Google ADK.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mega-Shield-v12-p-2539.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos
---
- Compatível com Arduino Mega1280/2560
- Compatível com Grove
- Compatível com Google ADK
- Dimensões: 92,8 mm X 57,2 mm.

## Bloco de Funções
---
O objetivo do Grove - Mega Shield é permitir a fácil conexão dos pinos de entrada e saída do Xduino Mega/Google ADK às unidades Grove.

Cada soquete é claramente rotulado com seu pino de E/S correspondente. O Grove - Mega Shield pode ser dividido em quatro seções: Botão de Reset, Área Analógica, Área Digital e Área de Alimentação.
Considere o diagrama a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield001.jpg" alt="pir" width={600} height="auto" /></p>

A Área Digital do Grove - Mega Shield também pode ser dividida em quatro seções de acordo com as diferentes funções dos GPIO: IIC (3 conectores), UART (UART0-3), PWM (PWM2-13) e ICSP (sem conector). Esteja ciente de que o PWM tem duas formas de aparência: header de 3 pinos 2,54 mm e nosso conector padrão de 4 pinos 2 mm. Essas duas formas de aparência servem a propósitos diferentes: conectores de 4 pinos 2 mm podem ser conectados aos nossos Groves padrão, enquanto o header de 3 pinos 2,54 mm pode ser conectado a Servo, módulo de medição de alcance ultrassônico e Electronic Bricks. Esteja ciente de que, ao usar módulos de 3 pinos e 4 pinos em PWM ao mesmo tempo, preste atenção extra para evitar o uso múltiplo do mesmo GPIO. Consulte o diagrama a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield002.jpg" alt="pir" width={600} height="auto" /></p>

# Grove - Mega Shield
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - Mega Shield v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Grove - Mega Shield.](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip)
- [Arquivo Eagle do Grove - Mega Shield v1.1.](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip)

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>