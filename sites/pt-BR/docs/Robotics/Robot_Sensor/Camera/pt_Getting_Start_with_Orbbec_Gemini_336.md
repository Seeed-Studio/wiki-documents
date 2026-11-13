---
description: "Como começar a usar a câmera 3D Orbbec Gemini 336: configuração, instalação do SDK, transmissão de profundidade e cor para aplicações de visão robótica."
title: Câmera 3D Orbbec Gemini336
keywords:
  - Jetson
  - reComputer Robotics
  - Visão Computacional
  - Direção Autônoma
  - Robô Industrial
  - Orbbec
  - Câmera de IA
  - Câmera Estéreo
  - Câmera de Profundidade
  - SLAM Visual
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp
slug: /orbbec_gemini336
last_update:
  date: 2025-08-22
  author: Zibo
createdAt: '2025-12-01'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/orbbec_gemini336/
---

<div align="center">
    <img alt="Câmera 3D Orbbec Gemini 336, foto do produto" width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


A Gemini 336 é uma adição totalmente nova à série Gemini 330. Com base no desempenho de profundidade excepcional da Gemini 335, ela aprimora a imagem infravermelha ativa filtrando a luz visível. Otimizada especificamente para qualidade de imagem de profundidade em áreas internas reflexivas, regiões escuras de cenários de alta faixa dinâmica (HDR) e condições de forte luz externa, oferece dados de profundidade estáveis e de alta qualidade para os usuários.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-336-3D-Camera-3D-p-6662.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Recurso

- **Estéreo IR Ativo** Emprega tecnologia estéreo IR ativa para saída de profundidade, permitindo saída de dados precisa e confiável em várias condições de iluminação
- **Ampla Faixa de Detecção** Fornece saída de dados de profundidade de qualidade de 0,1 m a 20 m
- **Amplo Campo de Visão (FOV)** Fornece dados de campo de visão amplo com 90 graus na horizontal e 65 graus na vertical
- **Sincronização de múltiplas câmeras** Suporta sincronização de múltiplas câmeras tanto para imagem de profundidade quanto para imagem RGB
- **Conexão USB** Usa um único cabo USB 3.0 Type-C para alimentação e conectividade

## Especificações

### Tabela de Especificações da Gemini 336（Inglês）

| Categoria       | Especificação         | Detalhes                                                                 |
|----------------|-----------------------|-------------------------------------------------------------------------|
| Parâmetros Básicos | Ambiente de Operação | Todos os cenários: Interno e Externo                                    |
|                | Faixa Máxima de Trabalho [1] | 0,10 - 20 m+                                                        |
|                | Faixa Recomendada     | 0,26 - 3 m                                                              |
|                | IMU                   | Suportado                                                               |
|                | Câmera UVC            | Suportado                                                               |
|                | SDK                   | Orbbec SDK                                                              |
| Parâmetros de Profundidade | Tecnologia de Profundidade      | Visão Estéreo                                                |
|                | Base                   | 50 mm                                                                    |
|                | Precisão Relativa Espacial [2] | ≤1,5% (1280 × 800 @ 2 m e 90% × 90% ROI)                        |
|                | Campo de Visão (FoV)  | 90° × 65° @ 2 m (1280 × 800)                                            |
|                | Resolução@Taxa de Quadros | Até: 1280 × 800 @ 30 fps                                             |
|                | Tipo de Obturador     | Global Shutter                                                          |
| Parâmetros de Cor | Campo de Visão (FoV)   | 86° × 55°                                                                |
|                | Resolução@Taxa de Quadros | Até: 1920 × 1080 @ 30 fps                                             |
|                | Formato de Imagem     | YUYV e MJPEG                                                            |
|                | Tipo de Obturador     | Rolling Shutter                                                         |
| Parâmetros Elétricos | Recomendação de Fonte de Alimentação | DC 5 V e ≥1,5 A                                                  |
|                | Consumo Médio de Energia | ＜3 W                                                                 |
|                | Tampa de Filtro       | Sim, Passa-IR                                                           |
| Parâmetros Físicos | Temperatura de Operação | -10 - 45℃                                                             |
|                | Grau de Proteção (IP) | IP5X                                                                    |
|                | Dimensões             | 90 mm × 25 mm × 30,7 mm                                                 |
|                | Peso                  | 99 g                                                                    |
|                | Porta de Dados e Alimentação | USB 3.0 e USB 2.0 Type-C                                           |
|                | Porta de Sincronização de Múltiplos Dispositivos | Interface de 8 pinos                                      |
|                | Método de Montagem    | Montagem Inferior: 1 × furo roscado 1/4 - 20unc Montagem Traseira: 2 × furos roscados M3 |


## Visão Geral do Hardware
<div align="center">
    <img alt="Vista frontal da Gemini 336 com indicação dos dois módulos IR, LRM, LDM, módulo RGB e filtro passa-IR" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew.png" />
</div>

<div align="center">
    <img alt="Vista frontal da Gemini 336 mostrando as duas lentes IR e o módulo RGB" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview1.png" />
</div>

<div align="center">
    <img alt="Vista traseira da Gemini 336 com as aletas do dissipador de calor" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview2.png" />
</div>

<div align="center">
    <img alt="Desenho de dimensão frontal da Gemini 336 com os espaçamentos das lentes e tolerâncias de diâmetro" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview3.png" />
</div>
<div align="center">
    <img alt="Desenho de dimensão traseira com o espaçamento de furos de 45 mm e os pontos de montagem M3, profundidade máxima de inserção 3 mm" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview4.png" />
</div>
<div align="center">
    <img alt="Desenho lateral com os ângulos de campo de visão OP 104 graus / ME 107 graus e OP 109,6 graus" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview5.png" />
</div>
<div align="center">
    <img alt="Desenho lateral com os ângulos OP 94 graus / ME 101 graus e o ponto de montagem 1/4-20UNC, profundidade máxima de inserção 5 mm" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview6.png" />
</div>
<div align="center">
    <img alt="Desenho lateral com o ponto de montagem USB Type-C e dois pontos de montagem M2, altura 15,00 mais ou menos 0,15 mm" width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew7.png" />
</div>

<div align="center">
    <img alt="Desenho lateral com largura 30,70 mais ou menos 0,30 mm e altura 25,00 mais ou menos 0,30 mm" width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew9.png" />
</div>

## Guia de Início Rápido da Série Gemini 330
- Conecte a Câmera Orbbec
 ① Monte a cabeça do tripé no tripé e, em seguida, fixe a câmera no tripé montado, conforme ilustrado na Etapa 1 abaixo.

  ② Use o cabo USB-C para USB-A para conectar a porta Type-C da câmera, como mostrado na Etapa 2 abaixo.

  ③ Conecte o conector USB-A ao host usando o mesmo cabo USB-C para USB-A, como mostrado na Etapa 3 abaixo.

<div align="center">
    <img alt="Câmera Gemini montada na cabeça do tripé com o cabo USB-C para USB-A conectado" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Obtenha o Orbbec Viewer

Selecione e baixe o [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) correspondente com base no seu sistema e versão.

- Inicie o Orbbec Viewer

1. Após iniciar o Orbbec Viewer, verifique se a ferramenta reconhece a câmera 3D, conforme indicado na imagem a seguir. 
【Observação】Se a câmera não for reconhecida, verifique se a câmera e o host estão conectados corretamente. Você pode tentar desconectar e reconectar o cabo USB. Se ainda não for reconhecida, considere substituir o cabo USB ou verificar se a fonte de alimentação do computador host atende às especificações exigidas.

<div align="center">
    <img alt="Orbbec Viewer antes de uma câmera ser conectada, mostrando a pré-visualização vazia e a mensagem &quot;No device found&quot;" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. Alterne o botão ‘Depth’ na parte superior da ferramenta para iniciar e pré-visualizar o fluxo de profundidade.

<div align="center">
    <img alt="Fluxo de profundidade ativado no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. Alterne o botão ‘Color‘ na parte superior da ferramenta para iniciar e pré-visualizar o fluxo de cor. O fluxo de cor e o fluxo de profundidade serão exibidos lado a lado.

<div align="center">
    <img alt="Fluxos de cor e profundidade exibidos lado a lado no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. Alterne os botões ‘IR Left’ e ‘IR Right’ na parte superior da ferramenta para iniciar e pré-visualizar o fluxo IR.

<div align="center">
    <img alt="Fluxos IR esquerdo e direito pré-visualizados no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. Alterne o botão ‘IMU’ na parte superior da ferramenta para iniciar e pré-visualizar o fluxo IMU.

<div align="center">
    <img alt="Fluxo IMU pré-visualizado no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. Alterne o botão na parte superior de cada janela para mostrar as informações de metadados.

<div align="center">
    <img alt="Sobreposição de metadados ativada nas janelas do Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. Alterne o botão ‘PointCloud‘ na parte superior da ferramenta para iniciar e visualizar a nuvem de pontos 3D

<div align="center">
    <img alt="Visualização de nuvem de pontos 3D no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. Alterne o botão ‘Display’ no menu ‘Image View’ à esquerda para iniciar e visualizar o fluxo D2C (registro de profundidade para cor). A nuvem de pontos 3D e o fluxo D2C serão exibidos lado a lado.

<div align="center">
    <img alt="Nuvem de pontos e fluxo D2C registrado exibidos lado a lado" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>


## Recursos

- [Guia oficial da Orbbec](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/About%20Orbbec%20Gemini%20330%20Series)
- [Folha de dados](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/Gemini%20330%20Series%20Datasheet%20(Overall))
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/pt-br/orbbec_depth_camera_on_ros/)

## Recursos Relacionados

- [Câmera 3D Orbbec Gemini 2](/pt-br/orbbec_gemini2/)
- [ORB-SLAM3 com Orbbec Gemini2](/pt-br/orb_slam3_orbbec_gemini2/)
- [PyCuVSLAM no reComputer](/pt-br/pycuvslam_recomputer_robotics/)
- [Câmera de profundidade Orbbec no ROS](/pt-br/orbbec_depth_camera_on_ros/)

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
