---
description: Mostrar às pessoas como usar a Orbbec Gemini 336.
title: Câmera 3D Orbbec Gemini336
keywords:
  - Jetson
  - reComputer Robotics
  - Visão Computacional
  - Condução Autônoma
  - Robô Industrial
  - Orbbec
  - Câmera de IA
  - Câmera Estéreo
  - Câmera de Profundidade
  - SLAM Visual
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp
slug: /orbbec_gemini336
last_update:
  date: 2025-08-22T00:00:00.000Z
  author: Zibo
createdAt: '2025-12-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/orbbec_gemini336/
---

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


A Gemini 336 é uma adição totalmente nova à série Gemini 330. Com base no desempenho de profundidade excepcional da Gemini 335, ela aprimora a imagem infravermelha ativa filtrando a luz visível. Otimizada especificamente para a qualidade de imagem de profundidade em áreas internas reflexivas, regiões escuras de cenários de alta faixa dinâmica (HDR) e condições de forte luz externa, ela fornece dados de profundidade estáveis e de alta qualidade para os usuários.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
</a></div>

## Características

- **IR Estéreo Ativo** Emprega tecnologia IR estéreo ativa para saída de profundidade, possibilitando saída de dados precisa e confiável em diversas condições de iluminação
- **Ampla Faixa de Detecção** Fornece saída de dados de profundidade de qualidade de 0,1 m a 20 m
- **Amplo Campo de Visão** Fornece dados de amplo campo de visão com 9 graus na horizontal e 65 graus na vertical
- **Sincronização de múltiplas câmeras** Suporta sincronização de múltiplas câmeras tanto para imagem de profundidade quanto para imagem RGB
- **Conexão USB** Usa um único cabo USB 3.0 Type-C para alimentação e conectividade

## Especificações

### Tabela de Especificações da Gemini 336（Inglês）

| Categoria       | Especificação         | Detalhes                                                                 |
|----------------|-----------------------|-------------------------------------------------------------------------|
| Parâmetros Básicos | Ambiente de Operação | Cena completa: Interno & Externo                                        |
|                | Faixa Máxima de Trabalho [1] | 0,10 - 20 m+                                                        |
|                | Faixa Recomendada     | 0,26 - 3 m                                                              |
|                | IMU                   | Suportado                                                               |
|                | Câmera UVC            | Suportada                                                               |
|                | SDK                   | Orbbec SDK                                                              |
| Parâmetros de Profundidade | Tecnologia de Profundidade | Visão Estéreo                                             |
|                | Base                  | 50 mm                                                                    |
|                | Precisão Relativa Espacial [2] | ≤1,5% (1280 × 800 @ 2 m & 90% × 90% ROI)                        |
|                | Campo de Visão (FoV)  | 90° × 65° @ 2 m (1280 × 800)                                            |
|                | Resolução@Taxa de Quadros | Até: 1280 × 800 @ 30 fps                                             |
|                | Tipo de Obturador     | Global Shutter                                                          |
| Parâmetros de Cor | Campo de Visão (FoV)  | 86° × 55°                                                                |
|                | Resolução@Taxa de Quadros | Até: 1920 × 1080 @ 30 fps                                            |
|                | Formato de Imagem     | YUYV & MJPEG                                                            |
|                | Tipo de Obturador     | Rolling Shutter                                                         |
| Parâmetros Elétricos | Recomendação de Alimentação | DC 5 V & ≥1,5 A                                                   |
|                | Consumo Médio de Energia | ＜3 W                                                                |
|                | Tampa de Filtro       | Sim, Passa-IR                                                          |
| Parâmetros Físicos | Temperatura de Operação | -10 - 45 ℃                                                           |
|                | Grau de Proteção IP   | IP5X                                                                    |
|                | Dimensões             | 90 mm × 25 mm × 30,7 mm                                                 |
|                | Peso                  | 99 g                                                                    |
|                | Porta de Dados & Energia | USB 3.0 & USB 2.0 Type-C                                            |
|                | Porta de Sincronização de Múltiplos Dispositivos | Interface de 8 pinos                                     |
|                | Método de Montagem    | Montagem Inferior: 1 × furo roscado 1/4 - 20unc Montagem Traseira: 2 × furos roscados M3 |


## Visão Geral de Hardware
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview1.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview2.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview3.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview4.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview5.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview6.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew7.png" />
</div>

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew9.png" />
</div>

## Guia de Início Rápido da Série Gemini 330
- Conecte a Câmera Orbbec
 ① Monte o cabeçote do tripé no tripé e, em seguida, fixe a câmera no tripé montado, conforme ilustrado na Etapa 1 abaixo.

  ② Use o cabo USB-C para USB-A para conectar a porta Type-C da câmera, conforme mostrado na Etapa 2 abaixo.

  ③ Conecte o conector USB-A ao host usando o mesmo cabo USB-C para USB-A, conforme mostrado na Etapa 3 abaixo.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Obtenha o Orbbec Viewer

Selecione e baixe o [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) correspondente com base no seu sistema e versão.

- Inicie o Orbbec Viewer

1. Após iniciar o Orbbec Viewer, certifique-se de que a ferramenta reconhece a câmera 3D, conforme indicado na imagem a seguir. 
【Observação】Se a câmera não for reconhecida, verifique se a câmera e o host estão conectados corretamente. Você pode tentar desconectar e reconectar o cabo USB. Se ainda não for reconhecida, considere substituir o cabo USB ou verificar se a alimentação do computador host atende às especificações exigidas.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. Altere o botão ‘Depth’ na parte superior da ferramenta para iniciar e visualizar o fluxo de profundidade.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. Altere o botão ‘Color‘ na parte superior da ferramenta para iniciar e visualizar o fluxo de cor. O fluxo de cor e o fluxo de profundidade serão exibidos lado a lado.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. Altere os botões ‘IR Left’ e ‘IR Right’ na parte superior da ferramenta para iniciar e visualizar o fluxo de IR.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. Altere o botão ‘IMU’ na parte superior da ferramenta para iniciar e visualizar o fluxo de IMU.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. Altere o botão na parte superior de cada janela para mostrar as informações de metadados.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. Altere o botão ‘PointCloud‘ na parte superior da ferramenta para iniciar e visualizar a nuvem de pontos 3D

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. Altere o botão ‘Display’ no menu ‘Image View’ à esquerda para iniciar e visualizar o fluxo D2C (registro de profundidade para cor). A nuvem de pontos 3D e o fluxo D2C serão exibidos lado a lado.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>


## Recursos

- [Guia Oficial da Orbbec](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/About%20Orbbec%20Gemini%20330%20Series)
- [Folha de Dados](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/Gemini%20330%20Series%20Datasheet%20(Overall))
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/pt-br/orbbec_depth_camera_on_ros/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
