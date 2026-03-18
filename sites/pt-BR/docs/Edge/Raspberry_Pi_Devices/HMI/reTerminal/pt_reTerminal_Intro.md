---
description: Guia do reTerminal
title: Guia do reTerminal
keywords:
  - reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_Intro
last_update:
  date: 12/22/2023
  author: Kasun Thushara
createdAt: '2023-07-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_Intro/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/New/reTerminal_new.jpg" style={{width:800, height:'auto'}}/></div>

## Primeiros passos com o reTerminal

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeiros passos com o reTerminal</font></th>
      <th class="table-trnobg"><font size={"4"}>Uso de hardware e interfaces</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Vamos abordar a instalação do sistema operacional no dispositivo reTerminal, oferecendo um passo a passo detalhado e cobrindo a instalação de drivers neste wiki.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki apresenta vários componentes de hardware e interfaces, como GPIOs, interface de câmera CSI, sensores integrados, display LCD, etc., no reTerminal. Ele orienta você sobre como utilizar esses recursos para expandir suas ideias de projeto.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-hardware-interfaces-usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal e módulos de câmera Pi</font></th>
      <th class="table-trnobg"><font size={"4"}>Placa de extensão reTerminal - reTerminal E10-1</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/expansion.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Neste wiki, abordaremos instruções passo a passo sobre como instalar Picams e configurá-las. Essas etapas iniciais são cruciais para iniciar seu projeto de detecção de objetos com o dispositivo reTerminal da Seeed Studio.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> A placa de expansão reTerminal E10-1 turbina o seu reTerminal com alimentação recarregável, conectividade sem fio aprimorada, transmissão de dados versátil e suporte de áudio. Tudo gira em torno de flexibilidade, permitindo que você personalize sua configuração para tudo, desde projetos de maker e automação residencial até experimentos DIY fora da rede. Acesse o wiki para desbloquear mais possibilidades.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminalBridge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Instalações de SO

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian OS ou Ubuntu</font></th>
      <th class="table-trnobg"><font size={"4"}>Buildroot</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/URPi.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/build.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki irá guiá-lo através do processo de instalação do Raspberry Pi OS e do Ubuntu.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Buildroot é uma ferramenta fácil de usar, projetada para simplificar e automatizar o processo de construção de um sistema Linux completo para sistemas embarcados por meio de compilação cruzada. Neste wiki, exploramos o processo de instalação do Buildroot.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-Buildroot-SDK/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Yocto</font></th>
      <th class="table-trnobg"><font size={"4"}>Stream-pi e OBS studio</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> O Projeto Yocto, uma iniciativa de colaboração open-source, ajuda desenvolvedores a criar sistemas personalizados baseados em Linux para produtos embarcados, independentemente da arquitetura de hardware. Neste wiki, exploraremos o processo de instalação do Yocto.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Stream-Pi, um poderoso software de teclado macro, é uma alternativa open-source com uma interface personalizável. OBS Studio, um aplicativo gratuito e open-source, oferece suporte a captura e transmissão em tempo real. Vamos agora explorar o processo de instalação.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-Yocto/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Streampi_OBS_On_reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Aplicações

### Aplicações de ML embarcado

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeiros passos com MediaPipe no reTerminal</th>
      <th class="table-trnobg">Primeiros passos com TensorFlow Lite no reTerminal</th>
      <th class="table-trnobg">Detecção de objetos com Edge Impulse e reTerminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipeadd.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste wiki, vamos nos aprofundar no MediaPipe, um framework open-source do Google para construir pipelines de ML aplicados, multimodais e multiplataforma, otimizados para inferência em dispositivo. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki fornece insights sobre TFlite e várias aplicações. O TensorFlow Lite, um conjunto de ferramentas, facilita o aprendizado de máquina em dispositivo, permitindo que desenvolvedores executem modelos em dispositivos móveis, embarcados e IoT. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste wiki, exploramos detecção de objetos com Edge Impulse e reTerminal. O Edge Impulse capacita desenvolvedores a criar e otimizar soluções de aprendizado de máquina embarcado usando dados do mundo real. Vamos nos aprofundar nos detalhes. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_ML_MediaPipe/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_ML_TFLite/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_ML_Edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Visão Computacional

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeiros passos com reTerminal e câmera Pi com OpenCV</th>
      <th class="table-trnobg">Detecção de rosto com reTerminal e câmera Pi com OpenCV</th>
      <th class="table-trnobg">Detecção de objetos com reTerminal e câmera Pi</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste guia, vamos integrar a câmera Raspberry Pi, capturar um fluxo de vídeo usando um trecho de código em Python e implementar um recurso para salvar uma imagem ao pressionar uma tecla. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste guia, vamos explorar a detecção de rosto usando o método Haar Cascade, uma técnica crucial em visão computacional que utiliza um modelo de aprendizado de máquina para identificar características faciais. Vamos nos concentrar especificamente em implementar isso no reTerminal usando a câmera Raspberry Pi. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este guia explora o uso da câmera Raspberry Pi e do reTerminal para detectar cerca de 90 objetos usando um modelo EfficientNet pré-treinado baseado no conjunto de dados COCO. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_DM_opencv/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Face_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Object_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

  <div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Detecção de cores com câmera Pi do reTerminal e OpenCV</th>
      <th class="table-trnobg">Rastreamento de objetos com câmera Pi do reTerminal e OpenCV</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> A detecção de cores, um componente central da visão computacional, envolve identificar e analisar cores em imagens ou vídeos digitais. Neste wiki, vamos explicar como lidar com cores e detectá-las.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Quando a detecção falha, implemente o rastreamento. Explore algoritmos e entenda os benefícios do rastreamento. O Wiki da Seeed Studio fornece guias abrangentes.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Color_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Face-tracking/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Home Assistant

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Primeiros passos com Home Assistant no reTerminal</th>
    <th class="table-trnobg">Como personalizar o Home Assistant</th>
      <th class="table-trnobg">Integração do Frigate com o reTerminal</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste wiki, vamos guiá-lo passo a passo na transformação da sua casa comum em uma casa inteligente usando um reTerminal. Ao final, você terá um belo dashboard no LCD do reTerminal, permitindo controlar eletrodomésticos e acessar dados de sensores com facilidade. Vamos começar! </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki fará um passo a passo de como construir o dashboard realizando as configurações necessárias e também de como usar alguns dos add-ons importantes que vêm com o Home Assistant. Então vamos começar!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Frigate é um NVR open-source projetado para detecção de objetos por IA em tempo real. Todo o processamento ocorre localmente no seu hardware, garantindo que os fluxos das suas câmeras permaneçam dentro da sua casa. Este wiki guia você pela instalação do NVR e demonstra as capacidades de detecção de objetos. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-Home-Assistant-Customize/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reterminal_frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Crie uma Interface de Usuário Poderosa

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Qt para reTerminal com Python</th>
    <th class="table-trnobg">Flutter para reTerminal</th>
      <th class="table-trnobg">Electron para reTerminal</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki explica como criar sua própria interface de usuário usando Qt para Python no reTerminal. Aqui usamos PySide2 para o desenvolvimento. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki orienta você na criação da sua própria interface de usuário com Flutter, um kit de desenvolvimento de software de UI de código aberto do Google. O Flutter possibilita o desenvolvimento de aplicativos multiplataforma para Android, iOS, Linux, Mac, Windows, Google Fuchsia e web usando uma única base de código.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki orienta você na criação de sua própria interface de usuário usando Electron, um framework de código aberto para criar aplicativos desktop nativos (Windows, Mac, Linux) com tecnologias web como HTML, CSS e JavaScript. Se você consegue criar um site, você consegue criar um aplicativo desktop! </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-build-UI-using-Qt-for-Python/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-build-UI-using-Flutter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-build-UI-using-Electron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    <br />

  <div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">LVGL para reTerminal</th>
    <th class="table-trnobg">Crie Seu Próprio Painel de Clima Usando Grafana</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>LVGL oferece o essencial para criar uma GUI embarcada com elementos gráficos fáceis de usar, efeitos visuais impressionantes e um consumo mínimo de memória. Esta biblioteca gráfica é projetada para microcontroladores com recursos limitados. Neste artigo do wiki, usaremos um exemplo de simulador de PC com SDL2 e faremos pequenas modificações para exibir a interface em tela cheia em vez de em uma janela. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Crédito para </font><strong><font color={'8DC215'} size={"2"}>Michaelm Klementsk.</font></strong><br /><font size={"2"}> Neste wiki, usaremos um ESP32 para coletar leituras de temperatura, umidade e pressão, enviando-as para um banco de dados de séries temporais InfluxDB hospedado em seu servidor na nuvem. Por fim, vamos visualizar e analisar os dados usando Grafana.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-build-UI-using-LVGL/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/weather-dashboard-with-Grafana-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Diversos

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Opções de Montagem do reTerminal</font></th>
      <th class="table-trnobg"><font size={"4"}>Instalação do Cliente Mender no reTerminal</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Mount_Options/9.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mender.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Nesta seção, exploramos soluções de montagem para o reTerminal, cobrindo especificações de parafusos de hardware e aspectos de design da comunidade.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki explica como configurar o Cliente Mender em um reTerminal para receber atualizações OTA de um Mender Server hospedado na nuvem (Hosted) ou autogerenciado (Self-Hosted). O guia enfatiza o uso de um reTerminal com um sistema Linux personalizado compilado usando o Yocto Project.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal_Mount_Options/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Mender-Client-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div>
<table>
 <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 Explore Mais</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Voltar para Dispositivos Pi </font></span></strong></a></div></td>
  </tr>
 </table>

## ✨ Projeto de Contribuidores

- Temos uma lista de tarefas para atualizar esta página, que está categorizada em nosso [projeto de contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), pois estamos empenhados em aprimorar a experiência do usuário e fornecer melhor suporte por meio do desenvolvimento de nossa plataforma wiki.
- [Sua contribuição para esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038) é essencial para nós! Valorizamos muito sua opinião e apreciaríamos imensamente sua ajuda na geração de ideias.

## FAQ

- [Como solucionar o problema de tela preta no reTerminal](https://wiki.seeedstudio.com/pt-br/reterminal_black_screen)
- [Como gravar Raspberry Pi OS/ Ubuntu OS 64-bit ou outro sistema operacional na eMMC](https://wiki.seeedstudio.com/pt-br/flash_different_os_to_emmc)
- [Fazer login no Raspberry Pi OS/++Ubuntu OS ou outro sistema operacional usando SSH via Wi‑Fi/Ethernet](https://wiki.seeedstudio.com/pt-br/log_rpios_use_ssh_over_wifi_ethernet)
- [Saiba mais](https://wiki.seeedstudio.com/pt-br/reTerminal-new_FAQ/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
