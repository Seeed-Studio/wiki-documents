---
description: Este wiki tem como objetivo promover o desenvolvimento de uma garra intercambiável usando o motor DM-4310-2EC
title: DM_Gripper - Guia de Montagem com Demo
keywords:
  - DM_Gripper
  - DM-4310-2EC
  - 3D Printed Gripper
  - Swappable Gripper
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.webp
slug: /dm_gripper
sku: 100094243,100007512
last_update:
  date: 9/17/2025
  author: Ylson W
createdAt: '2025-09-17'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/dm_gripper/
---

# DM_Gripper – Guia de Montagem Open-Source

A **DM_Gripper** é uma **garra robótica impressa em 3D**, open-source, projetada em torno do **motor DM-4310-2EC**. Seu design modular enfatiza a facilidade de montagem e desmontagem, permitindo que entusiastas e desenvolvedores de robótica **prototipem, personalizem e escalem** seus projetos rapidamente.  

Totalmente compatível com **atuadores DAMIAO**, a DM_Gripper também oferece flexibilidade para integração com outras marcas de atuadores. Seu exclusivo **sistema de garras intercambiáveis** permite que os usuários troquem rapidamente garras de diferentes formatos, suportando diversas tarefas e casos de uso em robótica.  

Todas as peças da garra são **totalmente imprimíveis em 3D**, com requisitos mínimos de suporte, tornando o projeto acessível para makers, pesquisadores e engenheiros.  

Este wiki inclui:  

- Visão geral do projeto do mecanismo  
- Lista completa de materiais (BOM)  
- Guia e configuração de impressão 3D  
- Instruções de montagem passo a passo  
- Demonstrações e casos de uso práticos

<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.jpg"/>  
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Dimensões/Faixa de Operação

As dimensões e a faixa de operação são mostradas abaixo em milímetros, com altura variável dependendo das garras utilizadas.
<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/Specs.png"/>  
</div>

## Mecanismos de Acionamento

Esta garra utiliza um mecanismo clássico de manivela e guia deslizante duplo (Dual Crank & Slider), que converte movimento rotacional em movimento axial.

- **Demonstração de Manivela & Guia Deslizante:**

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/SliderCrank_Mechanism.gif"
       alt="Mecanismo de manivela e guia deslizante" width="720" />
</div>

- **Demonstração da Simulação de Movimento**

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/gripper_mechanism_motion.mp4"
            type="video/mp4" />
  </video>
</div>

## BOM

#### 🔩 Fixadores

| Nome                                                   | Quantidade |
|--------------------------------------------------------|------------|
| Parafuso Philips Cabeça Panela PM3×8                   | 8          |
| Parafuso Allen Cabeça Cilíndrica M3×20                 | 4          |
| Parafuso Allen Cabeça Cilíndrica M3×25                 | 6          |
| Parafuso Allen Cabeça Cilíndrica M3×50                 | 8          |
| Parafuso Allen Cabeça Cilíndrica M3×16                 | 12         |
| Porca Sextavada Auto-Travante de Nylon 304 M3 (Espessura-3,9mm × Largura-5,5mm) | 18 |
| Arruela de Pressão – M3                                | 4          |
| Arruela Lisa – M3×7mm (Diâmetro Externo) × 0,5mm (Espessura) | 8          |

#### ⚙️ Rolamento

| Nome                                                                 | Quantidade |
|----------------------------------------------------------------------|------------|
| Rolamento Axial Miniatura F3-8M (Diâmetro Interno-3mm × Diâmetro Externo-8mm × Espessura-3,5mm) | 4          |

#### 🛠️ Movimento Linear

| Nome                                       | Quantidade |
|--------------------------------------------|------------|
| Trilho Linear em Aço Inoxidável MGN9, 200 mm | 1        |
| Carro de Trilho Linear MGN9C (Padrão)      | 2          |

#### 🔌 Atuador

| Nome            | Quantidade |
|-----------------|------------|
| Motor DM4310-2EC    | 1      |

#### 🧩 Peças Personalizadas Impressas

| Nome             | Quantidade |
|------------------|------------|
| **Peças Impressas em 3D** |1 conjunto |

## Guia de Montagem

### Guia de Impressão 3D

- Se você tiver material de suporte dedicado ou PETG+PLA no seu
  <a href="https://wiki.bambulab.com/en/ams/manual/ams-function-introduction" target="_blank"><b>AMS</b></a>
  e quiser o melhor acabamento superficial nas faces com suporte, consulte
  <a href="https://wiki.bambulab.com/en/filament-acc/filament/h2d-pla-and-petg-mutual-support" target="_blank"><b>Este Wiki</b></a>.  
  *Observação: seu trabalho de impressão pode demorar mais.*

- Se você tiver apenas um filamento para imprimir, certifique-se de imprimir com as orientações corretas e decida se precisa das etapas a seguir (Ative **ADVANCED** no Bambu Studio).

    :::warning
    Não altere a distância Top Z se estiver usando PETG ou ABS. Mantenha o padrão. Altere isso apenas se estiver usando PLA.
    :::

  - Passo 1: Layout de impressão com suportes mínimos necessários  
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/PrintLayout.png"
        alt="Mecanismo de manivela e guia deslizante" width="720" />
    </div>

    <br/>

  - Passo 2: As configurações de Scarf proporcionam um melhor acabamento superficial, conforme marcado nos retângulos verdes.  
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/Scarf_Settings.png"
        alt="Mecanismo de manivela e guia deslizante" width="720" />
    </div>

    <br/>

  - Passo 3: Minhas configurações de impressão: altura de camada de 0,2mm, densidade de preenchimento de 25%, Estilo – 3D Honeycomb.  
    <p align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps1.png" alt="ps1" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps2.png" alt="ps2" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps3.png" alt="ps3" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps4.png" alt="ps4" height="500" hspace="5"/>
    </p>

### Passo a Passo da Montagem

- Passo 1: Fixe os suportes das garras nos carrinhos MGN9C com oito parafusos cogumelo M3×8  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S1.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 2: Empilhe os rolamentos, rotores e bielas (estilo "hambúrguer")  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S2.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 3: Coloque oito arruelas M7 acima e abaixo das ranhuras  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S3.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 4: Coloque quatro porcas acima e abaixo das arruelas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S4.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 5: Rosqueie quatro pares de parafusos M3×20 e arruelas de pressão nas porcas (use alicate se necessário)  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S5.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 6: Posicione a base e o atuador; os padrões na placa do rotor e no atuador devem se alinhar  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S6.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 7: Aperte seis parafusos M3×16 para fixar a placa do rotor ao atuador  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S7.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 8: Empurre a base da garra até o curso máximo para as próximas etapas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S8.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 9: Fixe o suporte da came na parte inferior  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S9.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 10: Fixe o suporte da came com quatro pares de parafusos M3×25 e porcas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S10.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 11: Fixe a base com seis parafusos M3×16 (Puxe o trilho para fora nesta etapa e depois deslize-o de volta)

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S11.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 12: Use dois pares de parafusos M3×50 e porcas para travar o trilho na base  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S12.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 13: Deslize o pressionador do trilho para dentro e fixe com dois pares de parafusos M3×25 e porcas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S13.mp4"
            type="video/mp4" />
  </video>
</div>

- Passo 14: Coloque as garras nos suportes das garras e fixe-as com seis pares de parafusos M3×50 e porcas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S14.mp4"
            type="video/mp4" />
  </video>
</div>

## Demos e Arquivos CAD

- Siga o [**Damiao Actuators Wiki**](https://wiki.seeedstudio.com/pt-br/damiao_series/) para configurar tudo, caso ainda não tenha feito isso.
- Siga o [**Torque Controller Demo**](https://github.com/tianrking/DM_Gripper/tree/main) (**muitos agradecimentos a tianrking**) para colocar a garra em movimento com uma GUI legal.  

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/DM_GripperController.gif"
       alt="Demo do Controlador da Garra" width="720" />
</div>

- Os recursos CAD: arquivos STEP editáveis e STLs estão disponíveis [**aqui**](https://github.com/YlsonDdb/DM_Gripper).
