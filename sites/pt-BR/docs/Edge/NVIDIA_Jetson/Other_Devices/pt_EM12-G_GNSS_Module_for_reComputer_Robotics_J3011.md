---
description: Este wiki explica como instalar e configurar o módulo de posicionamento GNSS EM12-G no reComputer Robotics J3011.
title: Módulo GNSS EM12-G para reComputer Robotics J3011
keywords:
  - Jetson
  - reComputer Robotics
  - J3011
  - GNSS
  - EM12-G
image: https://files.seeedstudio.com/wiki/GNSS_for_jetson/2.png
slug: /em12_g_gnss_module_for_recomputer_robotics_j3011
sku: 100001302
last_update:
  date: 07/01/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/pt-br/em12_g_gnss_module_for_recomputer_robotics_j3011/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
---

# Guia de Configuração do Módulo GNSS EM12-G para reComputer Robotics J3011

O EM12-G é um módulo receptor GNSS de múltiplas constelações projetado para aplicações de posicionamento. Ele utiliza o formato padrão M.2 Key B e é compatível com plataformas de computação embarcada como NVIDIA Jetson e Raspberry Pi. Ele pode fornecer serviços de posicionamento em tempo real estáveis e confiáveis em ambientes urbanos complexos e em cenários externos abertos.

Este guia usa a placa carrier J401 no reComputer Robotics J3011 como exemplo para mostrar como instalar, ligar e configurar o módulo de posicionamento GNSS EM12-G.

## Notas

- **Os nomes dos dispositivos seriais podem mudar**: Este wiki usa `/dev/ttyUSB1` como porta padrão de dados NMEA e `/dev/ttyUSB2` como porta padrão de comandos AT. Os nós seriais USB reais dependem da ordem de enumeração do kernel, portanto as portas também podem aparecer como `ttyUSB0`, `ttyUSB3` ou outros nós. Se um comando informar que o arquivo não existe, execute primeiro `ls /dev/ttyUSB* /dev/ttyACM*`, confirme o nó de dispositivo real e substitua o nome da porta nos comandos abaixo.
- **É necessário posicionamento em ambiente externo**: É muito improvável que o primeiro fix GNSS seja bem-sucedido em ambiente interno. Realize todo o teste em uma área externa aberta.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/1.png"/></div>

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/2.png"/></div>

## Instalação de Hardware

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/3.jpg"/></div>

Após instalar o módulo no dispositivo, conecte uma **antena passiva** ao contato marcado com `G` no módulo. Coloque o dispositivo em uma área externa aberta. A primeira busca por satélites pode levar cerca de 3 a 5 minutos.

## Limpar Processos GPIO Existentes

Para evitar falhas de energização causadas por processos antigos de controle GPIO ainda ocupando os pinos, limpe primeiro os processos `gpioset` existentes:

```bash
sudo pkill -f gpioset || true
```

:::note
`|| true` garante que as operações seguintes continuem mesmo que nenhum processo `gpioset` existente seja encontrado.
:::

## Ligar o Módulo via GPIO

:::danger
Os comandos GPIO nesta seção são apenas para a placa carrier J401. Eles são a sequência de energização dedicada para o módulo EM12-G na J401. Se você estiver usando outra placa carrier, verifique primeiro o esquema de hardware dessa placa. Não execute estes comandos GPIO em outras placas carrier, caso contrário o módulo pode não ligar ou pode ocorrer dano de hardware.
:::

Na placa carrier J401, os pinos de habilitação de energia e de wake-up do EM12-G são controlados pelo GPIO do Jetson. Execute os três comandos a seguir em sequência e mantenha-os em execução em segundo plano:

```bash
sudo gpioset --mode=time --sec=200000 2 14=0 &
sudo gpioset --mode=time --sec=200000 2 12=0 &
sudo gpioset --mode=time --sec=200000 1 13=1 &
```

:::note
Todos os três comandos devem ser executados. Eles controlam, respectivamente, os pinos de habilitação de energia do módulo, reset e `W_DISABLE#`, formando a sequência de energização J401 necessária.
:::

## Aguardar o Dispositivo Serial

Após o módulo ser ligado, a enumeração serial USB pode levar de alguns segundos a dezenas de segundos. Faça a varredura manual da porta de dados NMEA:

```bash
for i in $(seq 1 60); do
    [ -e /dev/ttyUSB1 ] && echo "/dev/ttyUSB1 detected." && break
    echo "Waiting... ($i/60)"
    sleep 1
done
```

Se `/dev/ttyUSB1` ainda não for detectado após 60 segundos, execute o comando a seguir para verificar as portas seriais reais. Confirme também se a antena está conectada corretamente e se o módulo está corretamente inserido no slot M.2.

```bash
ls /dev/ttyUSB* /dev/ttyACM*
```

Após confirmar que o nó de dispositivo existe, execute o comando a seguir. A saída NMEA do GNSS deve aparecer no terminal.

```bash
sudo stdbuf -oL cat /dev/ttyUSB1
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/4.png"/></div>

## Configurar Comandos AT

Abra outra janela de terminal e conecte-se à porta de comandos AT. A porta padrão neste guia é `/dev/ttyUSB2`.

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/5.png"/></div>

Após entrar no `minicom`, configure a saída NMEA e habilite o GNSS:

```bash
# Set NMEA output
AT+QGPSCFG="outport","usbnmea"
AT+QCFG="gpsdrx",0

# Enable GNSS
AT+QGPS=1
```

Após o GNSS ser habilitado, `OK` deve ser retornado no terminal de comandos AT, e o terminal anterior deve começar a imprimir mensagens NMEA. A primeira busca por satélites pode levar de 3 a 5 minutos. Teste o módulo em uma área externa aberta.

- Se sentenças como `$GPGGA`, `$GPRMC` e similares continuarem sendo atualizadas, a comunicação do módulo está funcionando corretamente.
- Em uma sentença GGA, o sexto campo indica a qualidade do fix. `1` significa que o módulo obteve um fix válido, enquanto `0` significa que ainda não obteve um fix. Continue aguardando em ambiente externo por 1 a 5 minutos.
- Pressione `Ctrl+C` para interromper a saída.

O exemplo a seguir mostra informações de posicionamento que contêm dados válidos de latitude e longitude:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/6.png"/></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
