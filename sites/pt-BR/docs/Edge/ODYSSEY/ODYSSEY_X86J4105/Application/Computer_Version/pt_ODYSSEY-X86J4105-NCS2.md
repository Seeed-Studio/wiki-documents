---
description: ODYSSEY - X86J41x5
title: Intel Neural Compute Stick 2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-NCS2
sku: 102110399,102110398,102110397,110991412,110991465,102110477,102110478,102110479
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-NCS2/
---

# Introdução ao Intel® Neural Compute Stick 2 com ODYSSEY - X86J41x5

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

O **Intel Neural Compute Stick 2 (NCS2)** é um dispositivo USB que oferece acesso à funcionalidade de rede neural, sem a necessidade de hardwares grandes e caros. Ele contém uma **Intel Movidius Myriad X Vision Processing Unit (VPU)** para permitir que você incorpore visão computacional e inteligência artificial (IA) aos seus dispositivos IoT e de borda.

## Configurar o ambiente de software

Para usar o Intel NCS2, primeiro conclua a etapa [Installing Intel® Distribution of OpenVINO™ toolkit for ODYSSEY - X86J41x5](/pt-br/ODYSSEY-X86J4105-NCS2) e configure todo o ambiente de software dependente.
<!-- 上述链接有误 -->

Se você já concluiu o tutorial, siga as instruções abaixo.

## Configurar o Intel® Neural Compute Stick 2

1. Adicione o usuário Linux atual ao grupo users:

```sh
sudo usermod -a -G users "$(whoami)"
```

Faça logoff e login novamente para que isso tenha efeito.

1. Para executar inferência no **Intel® Neural Compute Stick 2**, instale as regras de USB da seguinte forma:

```sh
sudo cp /opt/intel/openvino/inference_engine/external/97-myriad-usbboot.rules /etc/udev/rules.d/
```

```sh
sudo udevadm control --reload-rules
```

```sh
sudo udevadm trigger
```

```sh
sudo ldconfig
```

**Nota:** Reinicie o dispositivo para que isso tenha efeito.

## Executar os exemplos usando a VPU do NCS2

1. Vá para o diretório de demonstração do Inference Engine:

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. Execute o **script de verificação de classificação de imagens com o NSC2:**

```sh
./demo_squeezenet_download_convert_run.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-1.png)

3. Execute o **script de verificação do pipeline de inferência com o NSC2:**

```sh
./demo_security_barrier_camera.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-2.png)

Procure por resultados como este que indicam instalação bem-sucedida!

## Próxima etapa: O [Ncappzoo](http://www.github.com/movidius/ncappzoo)

O [ncappzoo](http://www.github.com/movidius/ncappzoo) em [http://www.github.com/movidius/ncappzoo](http://www.github.com/movidius/ncappzoo) é um repositório open source no GitHub que contém inúmeros exemplos com um layout simples e Makefiles fáceis de usar. Este repositório é voltado para a comunidade de desenvolvedores do Intel® NCS 2 e ajuda os desenvolvedores a começar rapidamente, concentrando-se no código de aplicação que usa redes neurais pré-treinadas.

1. Clone o repositório do GitHub para os arquivos locais com o seguinte comando:

```sh
git clone https://github.com/movidius/ncappzoo.git
```

2. Execute este comando dentro de qualquer pasta **app/network** para verificar as dependências de software do sistema para aquele exemplo em particular:

```sh
make install_reqs
```

3. Execute o exemplo:

```sh
make run
```

## Execução de exemplo

Há muitos exemplos que podem ser executados; aqui foi usado o demo `benchmark` como exemplo:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-1.png)

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-2.png)

### Executando o exemplo `birds`

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

## Recursos

- [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/)

- [Ncappzoo](http://www.github.com/movidius/ncappzoo)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer suporte de diferentes formas para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
