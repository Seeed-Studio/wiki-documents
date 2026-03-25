---
description: Xadow - Acelerômetro Digital de 3 Eixos (±400g)
title: Xadow - Acelerômetro Digital de 3 Eixos (±400g)
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g
sku: 101040002
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/
---
![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow_3Axis_Accelerometer400g.jpg)

O H3LIS331DL é um acelerômetro linear de 3 eixos, de alto desempenho e baixo consumo de energia, pertencente à família “nano”, com saída padrão de interface serial digital I2C. O dispositivo apresenta modos de operação de consumo ultrabaixo que permitem avançados recursos de economia de energia e funções inteligentes de sono para ativação. O H3LIS331DL possui escalas completas dinamicamente selecionáveis pelo usuário de ±100g/±200 g/±400 g e é capaz de medir acelerações com taxas de dados de saída de 0,5 Hz a 1 kHz.

## Recursos
---
- Ampla faixa de alimentação de CC 2,2 V a 3,6 V
- Formato Xadow
- Detecção em 3 eixos
- Pacote pequeno e de baixo perfil: 3×3×1mm TFLGA
- Baixo consumo 300µA a 3,3V (típico)
- Escala completa dinamicamente selecionável de ±100g /±200 g /±400 g
- Interface de saída digital I2C (endereço = 0xE7)
- Alta resistência a choque de 10000 g
- Compatível com ECOPACK® RoHS e “Green”

## Ideias de Aplicação

-  Detector de impacto
- Reconhecimento e registro de impactos
- Detecção de concussão

## Uso
---
A seguir, mostramos como ler os dados brutos deste acelerômetro.
Assim como outros módulos Xadow, você precisa conectar o Xadow 3-Axis Accelerometer à Xadow Main Board antes de enviar o código de teste para a Xadow Main Board para obter as informações do acelerômetro.

A instalação de hardware:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow-3-Axis_Digital_Accelerometer_Connection.jpg)

:::note
    Ao conectar o Xadow 3-Axis Accelerometer à Xadow Main Board, você deve se atentar ao sentido da conexão. O método de conexão é que o canto não preenchido de um módulo Xadow deve ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
Após enviar o código, abra o monitor serial para observar o resultado do teste. As saídas deste sensor são informações de aceleração em 3 eixos, que são convertidas para a unidade de gravidade, "g".

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Raw_data_of_H3LIS331DL.jpg)


## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Arquivo Eagle do Xadow - 3-Axis Digital Accelerometer(±400g)](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip)
- [Repositório Github para 3-Axis Digital Accelerometer(±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
