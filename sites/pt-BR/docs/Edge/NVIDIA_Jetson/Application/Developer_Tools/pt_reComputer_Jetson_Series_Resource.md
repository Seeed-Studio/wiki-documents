---
description: Recurso Jetson
title: Recurso Jetson
keywords:
  - Borda
  - Aplicação reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Jetson_Series_Resource
last_update:
  date: 01/04/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Resource/
---

# Recurso Jetson

## [Software Jetson](https://developer.nvidia.com/embedded/develop/software)

Todos os módulos e kits de desenvolvimento NVIDIA® Jetson™ são compatíveis com a mesma pilha de software, permitindo que você desenvolva uma vez e faça a implantação em qualquer lugar. O Jetson Software é projetado para fornecer aceleração ponta a ponta para aplicações de IA e acelerar o seu tempo de chegada ao mercado. Nós trazemos as mesmas tecnologias poderosas da NVIDIA que alimentam implantações em data centers e na nuvem para a borda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang.png" alt="pir" width={800} height="auto" /></p>

### [NVIDIA JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

A pilha de software Jetson começa com o NVIDIA JetPack™ SDK, que fornece um ambiente de desenvolvimento completo, incluindo bibliotecas de aceleração CUDA-X e outras tecnologias NVIDIA para impulsionar o seu desenvolvimento. O JetPack inclui o pacote de driver Jetson Linux, que fornece o kernel Linux, bootloader, drivers NVIDIA, utilitários de gravação, sistema de arquivos de exemplo e toolchain para a plataforma Jetson. Também inclui recursos de segurança, atualizações over-the-air e mais. O JetPack inclui o runtime de contêiner NVIDIA para habilitar tecnologias e fluxos de trabalho Cloud-Native na borda.

Saiba mais:

- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux](https://developer.nvidia.com/embedded/linux-tegra)
- [Cloud-Native no Jetson](https://developer.nvidia.com/embedded/jetson-cloud-native)

### [NVIDIA TAO e modelos de IA pré-treinados](https://developer.nvidia.com/tao)

O NVIDIA TAO simplifica as partes que consomem tempo dos fluxos de trabalho de deep learning, desde a preparação de dados até o treinamento e a otimização, reduzindo o tempo até a geração de valor.

Saiba mais:

- [TAO](https://developer.nvidia.com/tao)
- [Modelos Pré-treinados](https://developer.nvidia.com/tao-toolkit)

### [NVIDIA Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)

O servidor de inferência NVIDIA Triton™ simplifica a implantação de modelos de IA em escala. O Triton Inference Server é open source e fornece uma única plataforma de inferência padronizada que pode suportar inferência de modelos multi-frame em diferentes implantações, como data centers, nuvem, dispositivos embarcados e ambientes virtualizados. Ele oferece suporte a diferentes tipos de consultas de inferência com algoritmos avançados de batching e agendamento, e suporta atualizações de modelos em tempo real.

Saiba mais:

- [NVIDIA Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)

### [NVIDIA Riva](https://developer.nvidia.com/riva)

O NVIDIA Riva é um SDK totalmente acelerado para construir aplicações de IA conversacional multimodal usando pipelines de deep learning ponta a ponta. O Riva SDK inclui modelos de IA conversacional pré-treinados, o toolkit NVIDIA TAO e habilidades otimizadas ponta a ponta para tarefas de fala, visão e processamento de linguagem natural (NLP).

Saiba mais:

- [Riva](https://developer.nvidia.com/riva)

### [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)

O NVIDIA DeepStream SDK oferece um kit de ferramentas completo de análise de stream para processamento multisensor baseado em IA e compreensão de vídeo e imagem no Jetson. O DeepStream é uma parte integrante do NVIDIA Metropolis, uma plataforma para construir serviços e soluções ponta a ponta que transformam pixels e dados de sensores em insights acionáveis. Saiba mais: DeepStream >

Saiba mais:

- [DeepStream >](https://developer.nvidia.com/deepstream-sdk)

### [NVIDIA Isaac](https://developer.nvidia.com/isaac-sdk)

O NVIDIA Isaac ROS GEM é um pacote de aceleração de hardware que facilita para desenvolvedores ROS a construção de soluções de alto desempenho em hardware NVIDIA. O NVIDIA Isaac Sim, com tecnologia Omniverse, é uma aplicação de simulação de robótica escalável. Ele inclui o Replicator – uma ferramenta que gera vários conjuntos de dados sintéticos para treinar modelos de percepção. O Isaac Sim também é uma ferramenta que suporta ambientes virtuais realistas e fisicamente precisos para desenvolver, testar e gerenciar robôs baseados em IA.

Saiba mais:

- [Isaac ROS GEM](https://developer.nvidia.com/isaac-ros-gems)
- [Isaac Sim](https://developer.nvidia.com/isaac-sim)

---

## [Módulos Jetson](https://developer.nvidia.com/embedded/jetson-modules)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang2.png" alt="pir" width={500} height="auto" /></p>

O NVIDIA ® Jetson™ traz desempenho de IA acelerada para dispositivos de borda em um formato compacto e com eficiência energética. A família de módulos Jetson usa o mesmo software NVIDIA CUDA-X™ e oferece suporte a tecnologias cloud-native, como conteinerização e orquestração, para construir, implantar e gerenciar IA na borda.

[Saiba mais sobre todos os módulos Jetson >](https://developer.nvidia.com/embedded/jetson-modules)

**Os reComputer Jetson utilizam estes módulos:**

### Série Jetson Xavier NX

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang3.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">O Jetson Xavier NX traz até 21 TOPs de poder de computação de IA para a borda em um módulo de formato pequeno. Ele pode executar múltiplas redes neurais modernas em paralelo e processar dados de vários sensores de alta resolução conforme o requisito de um sistema completo de IA. A série Jetson Xavier NX pode ser usada em aplicações de produção e oferece suporte a todos os frameworks de IA populares.<br /> Jetson Xavier NX - <a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html">reComputer J2011</a><br /> Jetson Xavier NX 16GB - <a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">reComputer J2012</a></td>
    </tr>
  </tbody>
</table>

### Jetson Nano

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang4.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">O Jetson Nano é um computador pequeno e poderoso para sistemas de IA embarcados e IoTs, oferecendo o poder da IA moderna em uma plataforma de baixo consumo. Você pode começar rapidamente com o NVIDIA JetPack SDK e um ambiente Linux desktop completo e começar a explorar o novo mundo dos produtos embarcados.<br /> Jetson Nano - <a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a>, <a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></td>
    </tr>
  </tbody>
</table>

## Guia de gravação

Como os produtos da série reComputer Jetson vêm equipados com 16 GB de eMMC, e `ubuntu 18.04 LTS` e `NVIDIA JetPack 4.6` já estão pré-instalados, você pode aplicá-los diretamente para desenvolver seus projetos. Se quiser regravar, visite a documentação apropriada abaixo:

- [Versão da carrier J1010](https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack/)
- [Placa-mãe Jetson A206](https://wiki.seeedstudio.com/pt-br/reComputer_J1020_A206_Flash_JetPack/)

## Suporte

Faça perguntas e receba respostas no Fórum Jetson. Engenheiros da NVIDIA, desenvolvedores da comunidade e parceiros Jetson contribuem aqui. Verifique:

- [Fórum Jetson Nano](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-nano) para kits de desenvolvimento Jetson Nano e módulos de produção Jetson Nano.
- [Fórum Jetson Xavier NX](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-xavier-nx) para kits de desenvolvimento Jetson Xavier NX e módulos de produção Jetson Xavier NX.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

