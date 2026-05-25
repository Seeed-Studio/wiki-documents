---
description: Este wiki fornece um tutorial para o sensor WHEELTEC IMU.
title: WHEELTEC IMU Sensor
keywords:
  - IMU
  - robótica
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg
slug: /wheeltec_imu
last_update:
  date: 01/12/2025
  author: ZhuYaoHui
createdAt: '2025-12-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/wheeltec_imu/
---

# Introdução ao Sensor WHEELTEC IMU IMU

O WHEELTEC H30 é um sensor de atitude de alta precisão projetado para medir com precisão dados-chave de portadores, incluindo ângulos de atitude 3D, aceleração, velocidade angular e intensidade do campo magnético. Desenvolvido com confiabilidade de nível industrial, este sensor integra um giroscópio MEMS de 3 eixos, um acelerômetro MEMS de 3 eixos e um sensor magnético de 3 eixos — oferecendo desempenho robusto para aplicações profissionais.


<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg" />
</div>

## Especificações


| Parâmetro                  | H30 MINI                          | H30WP                              |
|----------------------------|-----------------------------------|------------------------------------|
| Modelo                     | H30 MINI                          | H30WP                              |
| Dimensões                  | 24.5×24.5×14.5mm                  | 63×55×24.5mm                       |
| Carcaça                    | Caixa metálica ultracompacta      | Caixa metálica padrão              |
| Interface de Saída         | Type-C/SH1.0 6PIN                 | Conector de aviação à prova d'água |
| Consumo de Energia         | 186mW                             | 210mW                              |
| Interface Reservada        | UART                              | UART/RS485                         |
| Tensão de Entrada          | 4.5–5.2V DC                       | 5–26V DC                           |
| Contagem de Eixos          | 9 eixos (todos os modelos)        | 9 eixos (todos os modelos)         |
| Temperatura de Operação    | -40°C–85°C (todos os modelos)     | -40°C–85°C (todos os modelos)      |
| Configuração de Comandos   | Suporta configuração de comandos seriais: calibração, configuração, mudança de modo, etc. (todos os modelos) | Suporta configuração de comandos seriais: calibração, configuração, mudança de modo, etc. (todos os modelos) |
| Taxa Máx. de Saída de Dados IMU | 400Hz                         | 400Hz                              |


### **Versão ROS Suportada**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### Diagrama das dimensões de instalação
H30 Mini
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/mini_install.png"/>
</div>

H30WP:
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wp_install.png"/>
</div>

## Primeiros Passos com a IMU
Para materiais como o manual do usuário, drivers e SDK, consulte nossa [documentação no GitHub](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU).

[1. Manual do Usuário da Série H30](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/1.WHEELTEC%20H30%20Series%20Inertial%20Navigation%20User%20Manual%EF%BC%88English%EF%BC%89.pdf)

[2. Documento do Protocolo de Comunicação YESENSE](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/4.YESENSE%20Communication%20Protocol%20Document%EF%BC%88English%EF%BC%89.pdf)

[3. ROS1/ROS2 SDK](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/2.ROS_SDK)

[4. Ferramentas de software](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/3.Software%20tools)

[5. Arquivos de modelo mecânico](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/5.Mechanical%20model%20files)

[6.Rotinas relacionadas ao módulo de navegação inercial](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/6.Routines%20related%20to%20the%20inertial%20navigation%20module)


## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
