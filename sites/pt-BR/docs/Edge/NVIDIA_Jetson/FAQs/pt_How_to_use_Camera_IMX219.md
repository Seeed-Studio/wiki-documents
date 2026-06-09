---
description: Este é um FAQ sobre o uso da câmera IMX219 com dispositivos NVIDIA Jetson
title: Usando a câmera IMX219 com dispositivos NVIDIA Jetson
keywords:
  - Jetson
  - IMX219 Camera
  - CSI Camera
image: https://files.seeedstudio.com/wiki/imx219/IMG_20260602_165135.jpg
slug: /how_to_use_camera_imx219
last_update:
  date: 06/03/2026
  auther: Dongxu Jin
createdAt: '2026-06-03'
updatedAt: '2026-06-05'
url: https://wiki.seeedstudio.com/pt-br/how_to_use_camera_imx219/
---

# Guia de Configuração da Câmera IMX219

A IMX219 é um sensor de imagem CMOS de 8 megapixels amplamente utilizado que utiliza um cabo flat CSI de 15 pinos.

## Instalação de Hardware
A câmera CSI não suporta hot-swapping. Todas as operações de fiação devem ser realizadas com a placa de desenvolvimento completamente desligada.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/IMG_20260602_165135.jpg"/></div>
[LINE_24>Levante a trava no conector CSI da placa Jetson.
Insira o cabo flat CSI, certificando-se de que os contatos metálicos do cabo estejam alinhados com os da placa carrier do Jetson.
Pressione a trava firmemente para baixo para travar o cabo no lugar.

## Configuração do Driver de Software
Inicie a ferramenta de configuração da NVIDIA:
 ```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```
Navegue até Configure Jetson Nano CSI Connector.
<div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap'}}>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-16-40.png"/>
    </div>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-17-20.png"/>
    </div>
</div>
Selecione Configure for compatible hardware.
Escolha Camera IMX219 Dual na lista.
<div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap'}}>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-17-41.png"/>
    </div>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-18-07.png"/>
    </div>
</div>
Selecione Save pin changes.
Selecione Save and reboot para reconfigurar os pinos e aplicar as alterações na device tree.

***💡 Dica: Se estiver conectando uma única câmera, você deve selecionar o modo "Camera IMX219 Dual" para que ela funcione corretamente. Por outro lado, se estiver conectando uma configuração de câmera dupla, você deve selecionar o modo "Single".***

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-18-36.png"/></div>
Verificação do Nó de Dispositivo
Após a reinicialização do sistema, abra um terminal e execute o seguinte comando para verificar se o hardware foi reconhecido:

```bash
ls /dev/video*
```

Se a saída incluir um nó de dispositivo como `/dev/video0`, a conexão de hardware foi bem-sucedida. Você pode então testar a câmera usando o método mais simples:
```bash
nvgstcapture
```
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-21-00.png"/></div>
Você pode notar um tom avermelhado nas bordas do vídeo da câmera. Isso é causado pela ausência de um arquivo de configuração de ISP (Image Signal Processing).

## Configuração do Arquivo ISP
Você pode corrigir a distorção de cor baixando e instalando o arquivo de configuração de ISP oficial da NVIDIA.

Baixe e extraia o arquivo:
```bash
wget https://files.seeedstudio.com//Driver/Camera_overrides.tar.gz
tar zxvf Camera_overrides.tar.gz
```

Mova o arquivo para o diretório de configurações de câmera Nvidia do sistema e modifique as permissões:
```bash
sudo mv camera_overrides.isp /var/nvidia/nvcam/settings/
sudo chmod 664 /var/nvidia/nvcam/settings/camera_overrides.isp
sudo chown root:root /var/nvidia/nvcam/settings/camera_overrides.isp
```

Após substituir o arquivo ISP, reinicie o aplicativo de visualização da câmera. O tom avermelhado nas bordas deve ser corrigido.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-32-48.png"/></div>

***⚠️ Nota: Aplicar este arquivo de substituição de ISP pode causar um tom azulado ao redor da imagem se você voltar a usar uma câmera padrão Raspberry Pi V2. Recomenda-se fazer backup ou restaurar as configurações originais de ISP ao alternar entre diferentes módulos de câmera.***


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