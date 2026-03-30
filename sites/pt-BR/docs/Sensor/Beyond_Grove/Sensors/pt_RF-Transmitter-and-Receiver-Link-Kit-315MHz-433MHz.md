---
title: Kit de Link de Transmissor e Receptor RF - 315MHz/433MHz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz/
slug: /RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz
sku: 114992732
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz/
---

# Kit de Link de Transmissor e Receptor RF - 315MHz/433MHz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Front-05.png" alt="pir" width={600} height="auto" /></p>


Este é um conjunto de link de radiofrequência de ultra longa distância de 315MHz ou 433MHz, com tecnologia VCO e PLL, frequência estável e forte capacidade de anti-interferência. Você pode usá-lo diretamente em seus projetos, como transmissão de dados sem fio e controle remoto.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz-p-5077.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Recursos

- Baixo consumo de energia: 5V cerca de 6,0mA / 3,3V cerca de 5mA
- Alta sensibilidade de recepção: -110dBm@10kbps
- Longa distância de emissão: 2km (área aberta sem interferência）
- Ampla faixa de temperatura: -20~75℃
- Aplicação flexível, compatível com breadboard e PCB
- Forte capacidade de supressão de radiação: sem interferência mútua, sem influência na distância de recepção.

## Especificações

| Parâmetro             | Valor/Faixa  |
|-----------------------|--------------|
| Tensão de operação    | Transmissor(3-9V),Receptor(3-5V) |
| Corrente de trabalho  | 50mA(9VDC)   |
| Princípio de trabalho | Superhet（VCO, PLL）|
| Modulação             |   OOK/ASK     |
| Banda de operação     | 315MHz ; 433.92MHz (serviço de personalização disponível)|
| Temperatura de operação | -20℃ a +75℃ |
| Largura de banda      | 200KHZ       |
| Sensibilidade         	|-110dBm (50Ω) |
| Taxa de modulação	      |＜10Kbps      |
| Forma de decodificação | PT2272       |
| Comprimento da antena	      |18cm(Tx)、24cm (Rx) |
| Distância de emissão	    |2KM(área aberta sem interferência)|
| Modos de saída de trabalho	| Destravado, travamento alternado, travamento automático|

## Ideias de Aplicação

- Porta de automóvel com controle remoto
- Abridor de porta com controle remoto
- Alarme de segurança sem fio
- Cortina com controle remoto
- Controlador industrial sem fio
- Transmissão de dados sem fio
- Modelo de controle remoto sem fio 
- Controle de brinquedos sem fio

## Visão Geral do Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Preview-07.png" alt="pir" width={1000} height="auto" /></p>


1.Interface de pinos do transmissor: 7PIN (passo: 2,54mm)
2.Interface de pinos do receptor: 7PIN (passo: 2,54mm)
3.Antena de transmissão (a antena deve ser esticada durante o uso.)
4.Antena de recepção em mola

## Primeiros Passos

Aqui, usaremos um kit de transceptor RF, um LED, um botão interruptor, uma placa de desenvolvimento para fornecer energia e alguns fios para realizar uma demonstração simples de controle sem fio de ligar e desligar o LED. 

- **Passo 1.** Prepare o kit de transceptor RF, fios, breadboards ou placas de desenvolvimento e outros componentes relacionados às funções que você deseja implementar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Component list diagram.png" alt="pir" width={1000} height="auto" /></p>


Tomando como exemplo nossa simples demonstração de controle de iluminação sem fio, usaremos:

| Nome                | Quantidade|
|--------------------|------|
| Kit de transceptor RF |	*1 |
| Breadboards	       |  *1 |
| LED	               |  *1 |
| Chave de botão      |	*1 |
| Seeeduino XIAO     |	*1 |
| Fios	             | Alguns |

- **Passo 2.** Siga as instruções abaixo para conectar o sistema de circuito.

**Nota:** Todas as portas de sinal são usadas no diagrama abaixo, mas a conexão de circuito real que fornecemos usa apenas uma porta.

### Diagrama de conexão

<p style={{textAlign: 'left'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Tx).png" alt="pir" width={390} height="auto" /></p>
<div>
  RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Rx).png" alt="pir" width="360" height="auto"&gt;<p />
</div>


### Diagrama de conexão do circuito real

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Actual_circuit_connection_diagram.png" alt="pir" width={1000} height="auto" /></p>

**Nota:**  Nesta demonstração de controle de iluminação sem fio por RF, usamos a placa de desenvolvimento Seeeduino XIAO (saída de 3,3V) como o sistema de alimentação comum e construímos o módulo transmissor e o módulo receptor na mesma placa. Na prática, o módulo transceptor remoto geralmente é alimentado por sua própria fonte de alimentação. Por exemplo, você pode usar diretamente um pacote de baterias como fonte de alimentação.

- **Passo 3.**  Para fornecer energia ao sistema, pressione o botão interruptor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Result.png" alt="pir" width={1000} height="auto" /></p>


**Nota:** Você pode substituir a luz LED na demonstração de controle de luz sem fio RF pelo objeto que deseja controlar e usar várias portas de sinal para obter controle sem fio de uma variedade de sistemas de sinal.

Você também pode usar o Seeedino XIAO na demonstração para obter mais funções, como conectar um sensor de luz para fazer a luz ligar e desligar e o brilho da luz ser controlado sem fio de acordo com a intensidade da luz. Este processo pode enviar sinais sem operação manual.

## Recursos

- **[Datasheet]** [Folha de dados para PT2272 e PT2262](https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/res/Datasheet_for_PT2272_and_PT2262.pdf)


## Suporte Técnico e Discussão de Produto
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>