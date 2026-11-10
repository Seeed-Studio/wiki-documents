---
description: "Como usar a câmera 3D Orbbec Gemini 2 com o reComputer Jetson: configuração de driver, instalação do SDK, transmissão de profundidade e RGB para percepção em robótica."
title: Câmera 3D Orbbec Gemini2
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
  - Visual SLAM
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.webp
slug: /orbbec_gemini2
sku: 101090144
last_update:
  date: 2025-08-22
  author: Zibo
createdAt: '2025-08-22'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/orbbec_gemini2/
---

<div align="center">
    <img alt="Câmera 3D Orbbec Gemini 2, foto do produto" width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.png" />
</div>

<div style={{ textAlign: "justify" }}>
A câmera 3D compacta Gemini 2 é baseada na tecnologia Active Stereo IR e está equipada com o mais recente ASIC personalizado da Orbbec para processamento de profundidade de alta qualidade, IMU e alimentação + conectividade via cabo único USB 3.0. O amplo campo de visão (FOV) e a ampla faixa de detecção de profundidade tornam a Gemini 2 adaptável a muitas aplicações, especialmente em robótica. Ela é fácil de configurar e operar com o Orbbec SDK e fornece dados extremamente precisos e confiáveis em várias condições de iluminação, desde escuridão total até ambientes semiabertos.
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Características

- **Active Stereo IR** Emprega tecnologia Active Stereo IR para saída de profundidade, permitindo dados precisos e confiáveis em várias condições de iluminação
- **Ampla faixa de detecção** Fornece saída de dados de profundidade de qualidade de 0,15 m a 10 m
- **Amplo FOV** Fornece dados com amplo campo de visão de 91 graus na horizontal e 66 graus na vertical
- **Sincronização de múltiplas câmeras** Suporta sincronização de múltiplas câmeras tanto para imagem de profundidade quanto para imagem RGB
- **Conexão USB** Usa um único cabo USB 3.0 Tipo-C para alimentação e conectividade

## Especificações

<div className="table-center">
  <table style={{ height: "700px" }}>
    <tbody>
      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "400px" }}>
          <strong>Parâmetros</strong>
        </td>
        <td style={{ height: "46px", width: "491px" }}>
          <strong>Detalhes</strong>
        </td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Tensão</td>
        <td style={{ height: "46px", width: "491px" }}>5V (USB Type-C)</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Tecnologia de profundidade</td>
        <td style={{ height: "46px", width: "491px" }}>Active Stereo IR</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Temperatura de operação</td>
        <td style={{ height: "46px", width: "491px" }}>0°C ~ 40°C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Dimensões mecânicas</td>
        <td style={{ height: "46px", width: "491px" }}>90mm x 25mm x 30mm</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Interface de comunicação</td>
        <td style={{ height: "46px", width: "491px" }}>USB 3.0 Type-C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Driver da câmera</td>
        <td style={{ height: "46px", width: "491px" }}>UVC</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Faixa de profundidade</td>
        <td style={{ height: "46px", width: "491px" }}>0,15 m ~ 10 m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Faixa ideal</td>
        <td style={{ height: "46px", width: "491px" }}>0,2 m ~ 5 m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Resolução de profundidade</td>
        <td style={{ height: "46px", width: "491px" }}>Até 1280x800 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Resolução RGB</td>
        <td style={{ height: "46px", width: "491px" }}>Até 1920x1080 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>FOV horizontal</td>
        <td style={{ height: "46px", width: "491px" }}>91°</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>FOV vertical</td>
        <td style={{ height: "46px", width: "491px" }}>66°</td>
      </tr>
    </tbody>
  </table>
</div>

## Visão geral de hardware

<div align="center">
    <img alt="Vista frontal da Gemini 2 com indicação das duas câmeras IR, do LDP, do LDM e da câmera RGB" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-1.png" />
</div>

<div align="center">
    <img alt="Desenho lateral da Gemini 2 mostrando a interface USB Type-C" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-2.png" />
</div>

<div align="center">
    <img alt="Desenho traseiro da Gemini 2 mostrando a interface de sincronização de múltiplas câmeras de 8 pinos" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-3.png" />
</div>


## Guia rápido da série Gemini
- Conectar a câmera Orbbec
 ① Monte a cabeça do tripé no tripé e, em seguida, fixe a câmera no tripé montado, conforme ilustrado na Etapa 1 abaixo.

  ② Use o cabo USB-C para USB-A para conectar a porta Type-C da câmera, como mostrado na Etapa 2 abaixo.

  ③ Conecte o conector USB-A ao host usando o mesmo cabo USB-C para USB-A, como mostrado na Etapa 3 abaixo.

<div align="center">
    <img alt="Câmera Gemini montada na cabeça do tripé com o cabo USB-C para USB-A conectado" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Obter o Orbbec Viewer

Selecione e baixe o [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) correspondente com base no seu sistema e versão.

- Iniciar o Orbbec Viewer

1. Após iniciar o Orbbec Viewer, certifique-se de que a ferramenta reconhece a câmera 3D, conforme indicado na imagem a seguir. 
【Observação】Se a câmera não for reconhecida, verifique se a câmera e o host estão conectados corretamente. Você pode tentar desconectar e reconectar o cabo USB. Se ainda não for reconhecida, considere substituir o cabo USB ou verificar se a fonte de alimentação do computador host atende às especificações exigidas.

<div align="center">
    <img alt="Orbbec Viewer listando a câmera Gemini 2 conectada" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. Alterne o botão ‘Depth’ na parte superior da ferramenta para iniciar e pré-visualizar o fluxo de profundidade.

<div align="center">
    <img alt="Fluxo de profundidade ativado no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. Alterne o botão ‘Color‘ na parte superior da ferramenta para iniciar e pré-visualizar o fluxo de cor. Os fluxos de cor e de profundidade serão exibidos lado a lado.

<div align="center">
    <img alt="Fluxos de cor e profundidade exibidos lado a lado no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. Alterne os botões ‘IR Left’ e ‘IR Right’ na parte superior da ferramenta para iniciar e pré-visualizar o fluxo IR.

<div align="center">
    <img alt="Fluxos IR esquerdo e direito pré-visualizados no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. Alterne o botão ‘IMU’ na parte superior da ferramenta para iniciar e pré-visualizar o fluxo da IMU.

<div align="center">
    <img alt="Orbbec Viewer com o painel de metadados de quadro aberto ao lado dos fluxos de profundidade e cor" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. Alterne o botão na parte superior de cada janela para mostrar as informações de metadados.

<div align="center">
    <img alt="Metadados de quadro e valores de aceleração e giroscópio da IMU no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. Alterne o botão ‘PointCloud‘ na parte superior da ferramenta para iniciar e pré-visualizar a nuvem de pontos 3D

<div align="center">
    <img alt="Pré-visualização de nuvem de pontos 3D no Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. Alterne o botão ‘Display’ no menu ‘Image View’ à esquerda para iniciar e pré-visualizar o fluxo D2C (registro de profundidade para cor). A nuvem de pontos 3D e o fluxo D2C serão exibidos lado a lado.

<div align="center">
    <img alt="Nuvem de pontos e fluxo D2C registrado exibidos lado a lado" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>



## Primeiros passos no reComputer

**Etapa 1.** Baixe e instale o Orbbec SDK para arquitetura ARM64:

```bash
# Download Orbbec SDK
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.11/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip

# Unzip the SDK
unzip OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip
```

**Etapa 2.** Compile os exemplos e teste:

```bash
# Install udev rules
cd OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64/shared/
sudo chmod +x ./install_udev_rules.sh
sudo ./install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
# Build examples and setup
cd ..
./build_examples.sh
./setup.sh
```

<div align="center">
    <img alt="Exemplos do Orbbec SDK compilados e a janela de teste aberta no reComputer" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/test_sdk.png" />
</div>

## Exemplo de aplicações

<div style={{ textAlign: "justify" }}>
A Orbbec Gemini2 é uma câmera de profundidade compacta e de alto desempenho, ideal para robótica, visão 3D, rastreamento de objetos e automação industrial.
Ela se encaixa perfeitamente em aplicações de IA embarcada e computação de borda, como aquelas em plataformas NVIDIA Jetson.
</div>

:::info
Aqui estão alguns tutoriais de caso desenvolvidos por nós usando o Gemini2:

[Medição de distância](https://wiki.seeedstudio.com/pt-br/yolov11_with_depth_camera/)

<div align="center">
    <img alt="Demonstração de medição de distância combinando o Gemini 2 com YOLOv11" width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/distance.png" />
</div>

[Rastreamento de objeto em drone](https://wiki.seeedstudio.com/pt-br/object_tracking_with_reComputer_jetson_and_pX4/)

<div align="center">
    <img alt="Demonstração de rastreamento de objeto em um drone usando o Gemini 2 e PX4" width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/px4.png" />
</div>

:::

## Recursos

- [Guia da API do Orbbec SDK v2](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [Folha de dados](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/pt-br/orbbec_depth_camera_on_ros/)

## FAQ

**Quais tipos de stream posso visualizar no Orbbec Viewer?**
Profundidade, cor, IR esquerdo, IR direito, IMU, nuvem de pontos 3D e o stream registrado D2C. Cada um tem sua própria chave de ativação na parte superior do viewer, e a nuvem de pontos mais o D2C podem ser exibidos lado a lado.

**O viewer não lista a câmera. O que devo verificar primeiro?**
A conexão USB. Reconecte o cabo USB-C para USB-A, tente outro cabo e confirme se a porta do host pode fornecer energia suficiente — o Gemini 2 consome mais do que uma porta de hub de baixa potência fornece.

**O que o lado Jetson precisa além do viewer?**
O pacote Orbbec SDK v2.4.11 aarch64. Instale as regras udev a partir de `shared/install_udev_rules.sh`, depois execute `./build_examples.sh` e `./setup.sh` antes que qualquer aplicação se comunique com a câmera.

**Esta é a mesma câmera do guia Gemini 336?**
Não. Esta página trata do Gemini 2; o tripé e as capturas de tela do viewer são compartilhados com o guia rápido do Gemini 336 porque ambas as câmeras usam o mesmo Orbbec Viewer. O pacote SDK e o alcance de profundidade diferem por modelo.

**Posso usá-la para medição de distância ou rastreamento?**
Sim — os dois exemplos vinculados ao final rodam em reComputer: medição de distância com YOLOv11 e rastreamento de objeto em um drone com PX4. Ambos leem o stream de profundidade por meio do Orbbec SDK.

## Recursos relacionados

- [Combine o Gemini 2 com YOLOv11 para medição de distância](/pt-br/yolov11_with_depth_camera/)
- [ORB-SLAM3 com Orbbec Gemini2](/pt-br/orb_slam3_orbbec_gemini2/)
- [Implantar Depth Anything V3 no Jetson AGX Orin](/pt-br/deploy_depth_anything_v3_jetson_agx_orin/)
- [Página do produto Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)
- [Folha de dados da série Orbbec Gemini 2](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)

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
