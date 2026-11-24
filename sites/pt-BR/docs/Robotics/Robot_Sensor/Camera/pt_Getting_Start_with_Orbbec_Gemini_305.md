---
description: Conheça as especificações e a configuração de conexão da câmera 3D Orbbec Gemini 305 e visualize os streams de profundidade e cor com o Orbbec Viewer.
title: Câmera 3D Orbbec Gemini 305
keywords:
  - Orbbec
  - Gemini 305
  - Depth Camera
  - Stereo Vision
  - Robot Vision
image: https://cdn.shopify.com/s/files/1/0704/4022/2949/files/Gemini_305_00.jpg?v=1783414174
slug: /orbbec_gemini305
last_update:
  date: 11/19/2026
  author: Yang-Ci
---

<div align="center">
  <img src="https://cdn.shopify.com/s/files/1/0704/4022/2949/files/Gemini_305_00.jpg?v=1783414174" alt="Orbbec Gemini 305 3D camera" width={400} />
</div>

A Orbbec Gemini 305 é uma câmera de profundidade estéreo para visão robótica de curto alcance, incluindo montagem no punho, reconhecimento de objetos e preensão. Esta página aborda a versão USB; a Gemini 305g possui interfaces, requisitos de energia e dimensões diferentes. Consulte a [documentação da Orbbec](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation) para mais detalhes.

## Recursos

- **Sensoriamento de profundidade de curto alcance:** Faixa de operação de 4–100 cm+ e faixa recomendada de 7–50 cm.
- **Visão estéreo:** Câmeras estéreo fornecem dados de profundidade juntamente com imagens em cores.
- **Corpo compacto:** O invólucro de 42 × 42 × 23 mm se adapta a instalações com espaço limitado.
- **Sincronização e disparo:** Suporta sincronização de múltiplas câmeras e disparos por software e hardware.
- **Conexão USB:** Uma conexão USB Type-C fornece energia e dados; USB 3.0 é recomendado.

## Especificações

Essas especificações se aplicam à versão USB da Gemini 305. Consulte a [página de produto da Orbbec](https://www.orbbec.com/gemini-305/) para condições de teste e detalhes atualizados.

| Category | Specification | Details |
| --- | --- | --- |
| Basic | Operating environment | Indoor and outdoor |
| | Operating range | 4–100 cm+ |
| | Recommended range | 7–50 cm |
| | Depth technology / baseline | Stereo vision / 18 mm |
| Depth | Spatial precision | ≤1% (1280 × 800 at 50 cm, 90% × 90% ROI) |
| | Depth field of view | H 88° × V 65° ±3° (1280 × 800 at 20 cm) |
| | Resolution and frame rate | Up to 1280 × 800 at 30 fps; 848 × 480 at 60 fps |
| Color | Color field of view | H 94° × V 68° ±3° |
| | Resolution and frame rate | Up to 1280 × 800 at 60 fps |
| | Sensors | Stereo color, global shutter |
| Electrical | Power supply | 5 V DC, ≥700 mA |
| | Average power consumption | Less than 2 W |
| Physical | Dimensions / weight | 42 × 42 × 23 mm / 68 g ±10 g |
| | Interface | USB Type-C, USB 3.0 and USB 2.0 |
| | Ingress protection | IP54 when a suitably protected USB cable is connected and secured |
| | Mounting | Bottom: one 1/4-20 UNC and two M3 threaded holes; rear: two M3 threaded holes |

## Visão geral de hardware

A câmera possui duas lentes na parte frontal e uma porta USB Type-C na lateral. Antes de montá-la em um braço robótico ou suporte, verifique o campo de visão, o roteamento do cabo e a folga ao longo de todo o movimento pretendido. Locais de montagem e desenhos dimensionais estão disponíveis na [documentação da Gemini 305](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation).

As imagens a seguir, da [página oficial de produto da Orbbec](https://store.orbbec.com/products/gemini-305), mostram a parte frontal da Gemini 305, a porta USB Type-C e os furos de montagem inferiores e traseiros.

<div align="center">
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_01.png?v=1783414201&amp;width=1600" alt="Front of the Gemini 305 showing its two lenses" width={360} />
  <p>Frente: lentes estéreo</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_07.png?v=1783414277&amp;width=1600" alt="USB Type-C port on the side of the Gemini 305" width={360} />
  <p>Lado: porta USB Type-C</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_08.png?v=1783414288&amp;width=1600" alt="1/4-20 UNC and M3 mounting holes on the bottom of the Gemini 305" width={360} />
  <p>Furos de montagem inferiores</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_09.png?v=1783414301&amp;width=1600" alt="Two M3 mounting holes on the rear of the Gemini 305" width={360} />
  <p>Furos de montagem traseiros</p>
</div>

## Início rápido

### Preparar e conectar

1. Separe uma Gemini 305, um cabo USB Type-C com suporte a dados e um host que atenda aos requisitos de energia da câmera. Uma porta e um cabo USB 3.0 são recomendados para maior largura de banda.
2. Monte a câmera para a sua aplicação e conecte-a ao host com o cabo USB Type-C. Para um braço em movimento, deixe folga suficiente no cabo e evite que ele seja puxado ou prensado.

### Instalar o Orbbec Viewer

1. Abra a [página de releases do Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2/releases), selecione uma versão que ofereça suporte à Gemini 305 e baixe o instalador ou o pacote do Orbbec Viewer para o sistema operacional e arquitetura do seu host. Sistemas Jetson normalmente usam Linux ARM64; escolha o pacote x86-64 ou Windows apropriado para um PC.
2. Instale ou extraia o pacote e inicie o Orbbec Viewer conforme descrito na página de releases. Nomes de arquivos e procedimentos podem mudar entre versões; no Linux, configure as permissões USB de acordo com as instruções para a sua versão.

:::note
A Gemini 305 usa o **Orbbec SDK v2**; o SDK v1 não oferece suporte a este modelo. A interface do Viewer e os recursos disponíveis dependem da versão do software, firmware e configuração do dispositivo. Consulte a [documentação do SDK v2](https://github.com/orbbec/OrbbecSDK_v2) para instalação e permissões do dispositivo.
:::

### Visualizar imagens e nuvens de pontos

1. Confirme que a Gemini 305 aparece na lista de dispositivos do Orbbec Viewer e selecione-a.
2. Ative os streams de Depth e Color, escolha a resolução e a taxa de quadros oferecidas pelo dispositivo e verifique se ambas as janelas de pré-visualização exibem imagens.
3. Coloque um objeto dentro da faixa recomendada e observe a imagem de profundidade conforme a distância muda. Ative a nuvem de pontos para uma visualização 3D ou revise as configurações de alinhamento depth-to-color (D2C) ao alinhar imagens de cor e profundidade.
4. Pare os streams antes de desconectar a câmera. Para controles detalhados, consulte o [guia do Orbbec Viewer](https://github.com/orbbec/OrbbecSDK_v2/blob/main/docs/tutorial/orbbecviewer.md).

As imagens a seguir são do guia do Viewer 2.6.2 da Orbbec e mostram uma **Gemini 335Lg**. Elas ilustram a interface e não são resultados de teste da Gemini 305. A Gemini 305 não possui IMU integrada, portanto o painel de IMU do exemplo não indica um recurso da Gemini 305. A interface e as opções disponíveis dependem do dispositivo e da versão do software.

<div align="center">
  <img src="https://raw.githubusercontent.com/orbbec/OrbbecSDK_v2/f5d59930ccb9a189f200e58fba4e2ae42664792d/docs/tutorial/images/image1.jpg" alt="Orbbec Viewer example showing the device list, stream controls, and image previews using a Gemini 335Lg" width={800} />
  <p>Exemplo do Viewer: controles de stream na parte superior, configurações à esquerda e pré-visualizações à direita</p>
  <img src="https://raw.githubusercontent.com/orbbec/OrbbecSDK_v2/f5d59930ccb9a189f200e58fba4e2ae42664792d/docs/tutorial/images/image23.jpg" alt="Orbbec Viewer example showing a point cloud and depth-to-color alignment using a Gemini 335Lg" width={800} />
  <p>Exemplo do Viewer: nuvem de pontos e alinhamento depth-to-color</p>
</div>

### Solução de problemas

- **Dispositivo não listado:** Reconecte o cabo, confirme que ele suporta dados e não apenas energia e verifique a fonte de alimentação do host. No Linux, verifique também as permissões USB em relação às instruções do SDK v2.
- **Um stream não inicia ou é instável:** Inicie profundidade ou cor isoladamente e teste outras resoluções e taxas de quadros suportadas pelo dispositivo. Verifique a porta USB, o cabo, o firmware e a compatibilidade do SDK.
- **Resultados de profundidade inesperados:** Mova o objeto para dentro da faixa recomendada, verifique se as lentes não estão obstruídas e ajuste, no Viewer, as configurações suportadas pelo dispositivo para a cena.

## ROS 2

Para usar a câmera com ROS 2, siga o [guia de instalação do Orbbec SDK ROS 2 Wrapper v2](https://orbbec.github.io/OrbbecSDK_ROS2/) para configurar o workspace e as permissões do dispositivo. A Gemini 305 usa o branch `v2-main`. Após instalar uma versão que ofereça suporte a este modelo e fazer o source do workspace, inicie o arquivo fornecido:

```bash
ros2 launch orbbec_camera gemini_301_series.launch.py
```

Em outro terminal com o ambiente ROS 2 configurado, use `ros2 topic list` para inspecionar os tópicos disponíveis. Tópicos e parâmetros dependem da versão instalada e da configuração de launch. Essas etapas são baseadas na documentação oficial e não foram verificadas com uma Gemini 305 física para esta página.

## Recursos

- [Documentação e datasheet da Gemini 305](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation)
- [Downloads do Orbbec SDK v2 e Viewer](https://github.com/orbbec/OrbbecSDK_v2/releases)
- [Guia do Orbbec Viewer](https://github.com/orbbec/OrbbecSDK_v2/blob/main/docs/tutorial/orbbecviewer.md)
- [Orbbec SDK ROS 2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2)

## Recursos relacionados

- [Câmera 3D Orbbec Gemini 336](/pt-br/orbbec_gemini336/)
- [Câmera de profundidade Orbbec no ROS](/pt-br/orbbec_depth_camera_on_ros/)

## Suporte técnico e discussão sobre o produto

Para obter ajuda, visite o [fórum da Seeed](https://forum.seeedstudio.com/) ou [entre em contato com a Seeed](https://www.seeedstudio.com/contacts).
