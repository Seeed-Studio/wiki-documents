---
description: Este wiki fornece tutoriais para motores da série Myactuator.
title: MyActuator Series Motors
keywords:
  - atuador
  - motor
  - braço
  - robótica
image: https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.webp
slug: /myactuator_series
sku: 114090068,114090069
last_update:
  date: 05/29/2025
  author: ZhuYaoHui
createdAt: '2023-08-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/myactuator_series/
---

# Primeiros Passos com os Motores MyActuator X Series

Este artigo apresentará como começar a usar os motores da série MyActuator e como utilizá-los com C++ e Python no reComputer Mini Jetson Orin.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱</font></span></strong>
    </a>
</div>

## Especificações

Aqui está a tabela completa com todos os parâmetros preenchidos para todos os modelos de motor:

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>X2-7</th>
      <th>X4-10</th>
      <th>X4-36</th>
      <th>X8-120</th>
      <th>X12-320</th>
      <th>X15-450</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Relação de Engrenagem</td><td>28.17</td><td>12.6</td><td>36</td><td>19.61</td><td>20</td><td>20.25</td></tr>
    <tr><td>Tensão de Entrada (V)</td><td>24</td><td>24</td><td>24</td><td>48</td><td>48</td><td>72</td></tr>
    <tr><td>Velocidade em Vazio (RPM)</td><td>178</td><td>317</td><td>111</td><td>158</td><td>125</td><td>108</td></tr>
    <tr><td>Corrente de Entrada em Vazio (A)</td><td>1</td><td>1</td><td>0.9</td><td>1.6</td><td>2.7</td><td>3.5</td></tr>
    <tr><td>Velocidade Nominal (RPM)</td><td>142</td><td>238</td><td>83</td><td>127</td><td>100</td><td>98</td></tr>
    <tr><td>Torque Nominal (N.m)</td><td>2.5</td><td>4</td><td>10.5</td><td>43</td><td>85</td><td>145</td></tr>
    <tr><td>Potência de Saída Nominal (W)</td><td>37</td><td>100</td><td>100</td><td>574</td><td>900</td><td>1480</td></tr>
    <tr><td>Corrente de Fase Nominal A(rms)</td><td>3</td><td>7.8</td><td>6.1</td><td>17.6</td><td>30</td><td>25</td></tr>
    <tr><td>Torque de Pico (N.m)</td><td>7</td><td>10</td><td>34</td><td>120</td><td>320</td><td>450</td></tr>
    <tr><td>Corrente de Fase de Pico A(rms)</td><td>8.1</td><td>19.5</td><td>21.5</td><td>43.8</td><td>100</td><td>69.2</td></tr>
    <tr><td>Eficiência (%)</td><td>63</td><td>69.5</td><td>63.1</td><td>79</td><td>75</td><td>82.4</td></tr>
    <tr><td>Constante de Força Contraeletromotriz do Motor (Vdc/Krpm)</td><td>4.3</td><td>6</td><td>6</td><td>19.2</td><td>17.9</td><td>29.9</td></tr>
    <tr><td>Constante de Torque do Módulo (N.m/A)</td><td>0.8</td><td>0.8</td><td>1.9</td><td>2.4</td><td>3.3</td><td>5.8</td></tr>
    <tr><td>Resistência de Fase do Motor (Ω)</td><td>0.61</td><td>0.32</td><td>0.35</td><td>0.18</td><td>0.12</td><td>0.08</td></tr>
    <tr><td>Indutância de Fase do Motor (mH)</td><td>0.13</td><td>0.14</td><td>0.17</td><td>0.31</td><td>0.05</td><td>0.14</td></tr>
    <tr><td>Par de Polos</td><td>13</td><td>13</td><td>13</td><td>10</td><td>20</td><td>20</td></tr>
    <tr><td>Conexão Trifásica</td><td colspan="6">Y</td></tr>
    <tr><td>Torque de Retorno (N.m)</td><td>0.4</td><td>0.8</td><td>1.14</td><td>3.21</td><td>3.8</td><td>4</td></tr>
    <tr><td>Folga (Arcmin)</td><td>12</td><td>10</td><td>10</td><td>10</td><td>10</td><td>10</td></tr>
    <tr><td>Tipo de Rolamento de Saída</td><td colspan="2">Rolamentos de Esferas de Ranhura Profunda</td><td colspan="4">Rolamentos de Rolos Cruzados</td></tr>
    <tr><td>Carga Axial (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>4</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>Tensão Axial (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>1</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>Carga Radial (KN)</td><td>1</td><td>1.2</td><td>1.5</td><td>4.5</td><td>5</td><td>6</td></tr>
    <tr><td>Inércia (Kg.cm²)</td><td>0.17</td><td>0.25</td><td>0.3</td><td>1.5</td><td>12.9</td><td>31.6</td></tr>
    <tr><td>Tipo de Encoder e Interface</td><td colspan="6">Encoder Duplo ABS-17BIT (Entrada) / 17-18BIT (Saída)</td></tr>
    <tr><td>Precisão de Controle (Grau)</td><td colspan="6">&lt;0.01</td></tr>
    <tr><td>Comunicação</td><td colspan="6">CAN BUS / EtherCAT</td></tr>
    <tr><td>Peso (Kg)</td><td>0.26</td><td>0.33</td><td>0.36</td><td>1.40</td><td>2.37</td><td>3.50</td></tr>
    <tr><td>Classe de Isolação</td><td colspan="6">F</td></tr>
  </tbody>
</table>

## Convenções de Nomenclatura da Série RMD-X V4

- **RMD**: Nome da marca R-Redutor M-Motor D-Drive
- **X2**: X Representa o Nome da Série: Atuador Planetário Integrado, 2 representa o número do modelo do motor, por exemplo: X2 X4 X6 X8 etc.
- **P28**: Relação de engrenagem planetária, por exemplo: P12 P28 P32 etc.
- **7**: Torque de pico 7N.m
- **E**: Comunicação E: CAN BUS & EtherCAT

## Principais Características

1. **CAN BUS & EtherCAT**
2. **Rolamentos de Rolos Cruzados**
3. **Encoder Duplo**
4. **Alta Densidade de Torque**
5. **Alta Precisão**
6. **Design Vazado**

## Primeiros Passos

### Preparação do Ambiente Antes do Uso

**Sistema Windows no PC**

- Baixe o [manual de produto correspondente](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip).
- Baixe o [MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)

- Extraia `MYACTUATOR_Setup Software_V4.0.zip` e instale o seguinte:
  - `USBCAN_AllInOne_x86_x64_2.0.0.1.exe` localizado no diretório `Required Runtime Environment\ZLGUSBCAN_Driver`
  - `MSVBCRT.AIO.2019.10.19.X86 X64.exe` localizado no diretório `Required Microsoft Runtime Libraries`

### Conectar o Circuito

Aqui selecionamos o motor X4-36, e seu diagrama de interface é mostrado abaixo.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/X4-36-circuit.png" />
</div>

<table>
  <tr>
    <th>Definição da Porta</th>
    <th>Descrição da Porta</th>
  </tr>
  <tr>
    <td>① VCC</td>
    <td>Alimentação positiva</td>
  </tr>
  <tr>
    <td>② GND</td>
    <td>Alimentação negativa</td>
  </tr>
  <tr>
    <td>③ CAN_H</td>
    <td>Terminal de sinal de rede CAN_H</td>
  </tr>
  <tr>
    <td>④ CAN_L</td>
    <td>Terminal de sinal de rede CAN_L</td>
  </tr>
  <tr>
    <td>⑤ EtherCAT_IN</td>
    <td>Terminal de entrada EtherCAT</td>
  </tr>
  <tr>
    <td>⑥ EtherCAT_OUT</td>
    <td>Terminal de saída EtherCAT</td>
  </tr>
  <tr>
    <td>⑦ T+</td>
    <td>O mestre envia comandos de controle para o módulo</td>
  </tr>
  <tr>
    <td>⑧ T-</td>
    <td>O módulo envia o feedback de status para o mestre</td>
  </tr>
  <tr>
    <td>⑨ R+</td>
    <td>O mestre reflete os dados de status do módulo</td>
  </tr>
  <tr>
    <td>⑩ R-</td>
    <td>O módulo reflete os comandos de controle do mestre</td>
  </tr>
</table>

Aqui, usamos o método de comunicação CAN, que requer uma interface USB-CAN adicional para depuração via computador superior no Windows.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/6.jpg" />
</div>

Aqui, você precisa fornecer uma fonte de alimentação separada de 24V para o motor e conectar o cabo USB ao seu computador.

### Use o `MYACTUATOR Setup Software 250206.exe` para Testar o Motor

| **Definir ID e Conexão** | **Ler Informações do Motor** | **Calibrar o motor** | **Calibrar o motor** |**Executar um teste de rotação do motor.** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/5.png) |
| O ID padrão do motor é 1. Insira o ID como 1 e clique em "Connect". | Após a conexão, clique em "Read" para obter as informações atuais do motor.|Para uso pela primeira vez, clique em "Calibrate Motor" para realizar a calibração.|Após a calibração, clique em "Read" e "Save". |Agora você pode testar diferentes modos de controle do motor na seção Motor Running. |

Para mais detalhes sobre os recursos, consulte o ​**Setup Software Instruction Manual - V3.0.pdf** incluído no arquivo ​[MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip).

## Controle o Motor Usando o [​reComputer Mini Jetson Orin.](/pt-br/recomputer_jetson_mini_getting_started)

Atualmente, as interfaces de comunicação CAN mais comuns para motores no mercado usam **XT30 (2+2)** e **conectores JST**. Nossos dispositivos **reComputer Mini Jetson Orin** e **reComputer Robotics** estão equipados com **duplas portas XT30 (2+2)** e **interfaces CAN baseadas em JST**, proporcionando compatibilidade perfeita.  

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

Para mais detalhes sobre o uso de CAN, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_hardware_interfaces_usage/#can).

### Habilitar Interfaces CAN

**Passo 1:** Antes de usar CAN0 e CAN1, remova a tampa inferior e ajuste ambos os resistores de terminação de 120Ω para a posição ​ON.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**Passo 2:** Conecte o motor diretamente ao CAN0 do reComputer Mini através da interface XT30 (2+2).

Esta é a interface CAN0 para o reComputer Mini

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.jpg" />
</div>

:::danger
Esta fonte de alimentação é apenas para aprendizado e teste de um único motor. Para múltiplos motores, projete uma placa de alimentação separada e isole a fonte de alimentação do Jetson da fonte de alimentação do motor para evitar que uma corrente alta passe diretamente pelo Jetson.
:::

#### Habilitar comunicação CAN do Jetson

Abra um terminal e insira o seguinte comando para colocar o pino GPIO em nível alto e ativar o CAN0:

```bash
gpioset --mode=wait 0 43=0
```

Se você estiver usando o CAN1 com interface JST, coloque o pino 106 em nível alto.

```bash
gpioset --mode=wait 0 106=0
```

Mantenha este terminal aberto, abra um novo terminal e configure o CAN0.

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Construir ambiente Python e C++

**Passo 1:** Faça o git clone do SDK.

```bash
git clone https://github.com/ZhuYaoHui1998/myactuator_rmd.git
```

**Passo 2:** Este SDK de driver requer a instalação das seguintes dependências. Para Debian Linux elas podem ser instaladas via apt da seguinte forma:

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

Caso queira usar os bindings Python, você terá que instalar adicionalmente Python 3, pip e pybind11:

```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

Depois de instalar as dependências, você deverá instalar o SDK do driver como uma biblioteca C++ ou como um pacote Python, conforme descrito nos passos a seguir. Ambos usarão CMake para compilar o código C++.

#### Compilando a biblioteca C++

Para compilar o SDK do driver em C++, abra um novo terminal dentro desta pasta e execute os seguintes comandos. Em versões mais antigas do Linux, a compilação pode falhar com a mensagem de erro error: 'const struct can_frame' has no member named 'len' e você terá que aplicar a modificação de código discutida na [issue 5](https://github.com/2b-t/myactuator_rmd/issues/5).

```bash
cd ~/myactuator_rmd
mkdir build
cd build
cmake .. -D PYTHON_BINDINGS=on
make -j $(nproc)
sudo make install
```

A flag PYTHON_BINDINGS (por padrão desligada) compila os bindings Python adicionalmente à biblioteca C++. Caso você esteja interessado apenas em usar a biblioteca C++, sinta-se à vontade para deixá-la desligada. Ao compilar os bindings Python desta forma, eles serão compilados como uma biblioteca compartilhada, mas não serão instalados. Isso significa que você terá que instalar a biblioteca manualmente ou só poderá importá-la localmente dentro da pasta de compilação.

Para desinstalar o pacote novamente, você pode usar o seguinte comando `xargs rm < install_manifest.txt`.

#### Compilando a biblioteca Python

Para compilar e instalar os bindings Python para este SDK, abra um novo terminal dentro da pasta principal e execute o seguinte comando:

```bash
cd ~/myactuator_rmd
pip3 install .
```

Isso usará o setup.py para invocar o CMake e instalar os bindings como uma biblioteca C++. Se quiser removê-los novamente, basta executar `pip3 uninstall myactuator-rmd-py`.

### Controle usando C++

1. Criar estrutura de diretórios do projeto  
Crie o diretório do seu projeto dentro do diretório src do código, por exemplo, nomeie-o como `myactuator_example`, e crie uma pasta src dentro deste subdiretório.

```bash  
cd ~/myactuator_rmd
mkdir -p ~/myactuator_rmd/src/myactuator_example/src  
cd ~/myactuator_rmd/src/myactuator_example  
```  

2. Escrever CMakeLists.txt  
No arquivo `~/myactuator_rmd/src/myactuator_example/CMakeLists.txt`, escreva o seguinte conteúdo:

```bash
touch CMakeLists.txt
```

```cmake  
cmake_minimum_required(VERSION 3.20)  
project(myactuator_example)  

# Find the myactuator_rmd library  
find_package(myactuator_rmd REQUIRED)  

# Create executable  
add_executable(myactuator_node  
src/main.cpp  
)  

# Use C++17 standard  
target_compile_features(myactuator_node PUBLIC  
cxx_std_17  
)  

# Link the myactuator_rmd library  
target_link_libraries(myactuator_node PUBLIC  
myactuator_rmd::myactuator_rmd  
)  
```

3. Escrever main.cpp  
No arquivo `~/myactuator_rmd/src/myactuator_example/src/main.cpp`, escreva o seguinte código:  

```bash
touch src/main.cpp
```

```cpp
#include <cstdlib>
#include <iostream>
#include <myactuator_rmd/myactuator_rmd.hpp>

int main() {
myactuator_rmd::CanDriver driver {"can0"};
myactuator_rmd::ActuatorInterface actuator {driver, 1};

std::cout << actuator.getVersionDate() << std::endl;
std::cout << actuator.sendPositionAbsoluteSetpoint(180.0, 500.0) << std::endl;
actuator.shutdownMotor();
return EXIT_SUCCESS;
}
```

4. Compilar o projeto  

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

5. Executar o programa  

```bash
sudo ./myactuator_node
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/Cresult.png" />
</div>

**Pré-requisitos**  

- A interface CAN `can0` deve estar devidamente configurada (garanta que o seu motor e o barramento CAN estejam corretamente conectados).  
- A biblioteca `myactuator_rmd` deve estar devidamente instalada (se não estiver, instale-a primeiro).

Para mais detalhes de implementação em C++, consulte todo o conteúdo em `myactuator_rmd.hpp`. Forneceremos uma introdução detalhada aos métodos de uso em Python.

### Controle usando Python

Crie uma pasta chamada scripts no diretório `~/myactuator_rmd/src/myactuator_example` para armazenar os scripts Python.

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir scripts
```

#### **Obter número da versão**

Crie um script Python personalizado chamado `test.py` no diretório scripts e preencha-o com o seguinte código.

```python
import myactuator_rmd_py as rmd
import time

# Initialize CAN driver and actuator interface
driver = rmd.CanDriver("can0")  # Using can0
actuator = rmd.ActuatorInterface(driver, 1)  # CAN ID set to 1

# Get version number
print("Version number:", actuator.getVersionDate())
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.png" />
</div>

Carregue a biblioteca e continue criando um driver para uma determinada interface de rede (aqui can0) e drive (aqui 1 correspondendo ao endereço CAN 0x140 + 1 = 0x141).

#### **Obter status do motor**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Motor Status 1
status1 = actuator.getMotorStatus1()
print(f"""
Motor Status 1:
Temperature: {status1.temperature}°C
Brake Status: {'Released' if status1.is_brake_released else 'Locked'}
Voltage: {status1.voltage}V
Error Code: {status1.error_code}
""")

# Motor Status 2
status2 = actuator.getMotorStatus2()
print(f"""
Motor Status 2:
Temperature: {status2.temperature}°C
Current: {status2.current}A
Shaft Speed: {status2.shaft_speed} RPM
Shaft Angle: {status2.shaft_angle}°
""")

# Motor Status 3
status3 = actuator.getMotorStatus3()
print(f"""
Motor Status 3:
Temperature: {status3.temperature}°C
Phase A Current: {status3.current_phase_a}A
Phase B Current: {status3.current_phase_b}A
Phase C Current: {status3.current_phase_c}A
""")

## Torque Calculation

import myactuator_rmd_py as rmd
from myactuator_rmd_py.actuator_constants import X4_24  # Import according to your motor model

def get_normalized_torque(actuator):
    """Calculate normalized torque from current"""
    # Get current value
    status = actuator.getMotorStatus2()
    current = status.current

    # Calculate normalized torque (current/rated)
    torque_ratio = current / X4_24.rated_current
    actual_torque = torque_ratio * X4_24.rated_torque
    return actual_torque

# Usage example
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

try:
    while True:
        torque = get_normalized_torque(actuator)
        print(f"Current Torque: {torque:.3f} Nm (Rated: {X4_24.rated_torque} Nm)", end='\r')
        time.sleep(0.1)
except KeyboardInterrupt:
    actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/9.png" />
</div>

#### **Modo de controle**

- **Obter modo de controle atual**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
mode = actuator.getControlMode()
print(f"Current Control Mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/10.png" />
</div>

- **Controle de posição absoluta**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move to 180 degree position at 100 deg/s
actuator.sendPositionAbsoluteSetpoint(180.0, 300.0)
time.sleep(5)  # Wait for motor to reach target position

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

time.sleep(5)
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/11.png" />
</div>

Você verá o seu motor girar até a posição de 180 graus.

- **Controle de posição relativa**

```python
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move an additional 90 degrees from current position
current_angle = actuator.getMultiTurnAngle()
target_angle = current_angle + 90.0
actuator.sendPositionAbsoluteSetpoint(target_angle, 50.0)
time.sleep(3)
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/12.png" />
</div>

Você observará o motor girar 90 graus no sentido anti-horário.

- **Controle de velocidade**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Continuous rotation at 500 RPM
actuator.sendVelocitySetpoint(500.0)
time.sleep(15)

# Stop motor
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/13.png" />
</div>

- **Controle de Torque**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Apply 0.5A current (torque)
actuator.sendCurrentSetpoint(0.5)
time.sleep(2)

# Stop torque output
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/14.png" />
</div>

- **Controle de Movimento em Malha Fechada**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Position control with feedback
feedback = actuator.sendPositionAbsoluteSetpoint(180.0, 100.0)
time.sleep(5)
print(feedback)


# Velocity control with feedback
feedback = actuator.sendVelocitySetpoint(20.0)
time.sleep(5)
print(feedback)

# Torque control with feedback
torque_constant = 0.32  # Set according to motor model
feedback = actuator.sendTorqueSetpoint(1.5, torque_constant)
time.sleep(5)
print(feedback)

actuator.stopMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/15.png" />
</div>

#### Controle de Freio do Motor

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Engage brake
actuator.lockBrake()
print("Brake engaged")

# Release brake
actuator.releaseBrake()
print("Brake released")
```

#### Controle de Alimentação do Motor

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Power off motor
actuator.shutdownMotor()
print("Motor powered off")
```

#### Funções do Encoder

- **Obter Posição do Encoder Multivoltas**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
encoder_pos = actuator.getMultiTurnEncoderPosition()
print(f"Multi-turn encoder position: {encoder_pos}")
```

- **Definir a Posição Atual como Ponto Zero (Requer Reinicialização)**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
actuator.setCurrentPositionAsEncoderZero()
print("Current position set as encoder zero point")
```

- **Definir Ponto Zero Personalizado (Requer Reinicialização)**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Get current position as zero point
current_pos = actuator.getMultiTurnEncoderOriginalPosition()
print(f"Raw encoder position: {current_pos}")

# Set zero offset
actuator.setEncoderZero(current_pos)
print(f"Encoder zero point set to: {current_pos}")

# Reboot to apply settings
actuator.shutdownMotor()
time.sleep(1)  # Wait for shutdown
actuator = rmd.ActuatorInterface(driver, 1)  # Reinitialize

# Verify
new_pos = actuator.getMultiTurnEncoderPosition()
print(f"Post-reboot position (should be near 0): {new_pos}")
```

#### Configurações de Aceleração

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
from myactuator_rmd_py.actuator_state import AccelerationType

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

## Get initial acceleration
print(f"Initial acceleration: {actuator.getAcceleration()}")

actuator.setAcceleration(5000, AccelerationType.POSITION_PLANNING_ACCELERATION)

## Get modified acceleration
print(f"Modified acceleration: {actuator.getAcceleration()}")

# Set different acceleration types
actuator.setAcceleration(1000, AccelerationType.POSITION_PLANNING_ACCELERATION)
actuator.setAcceleration(800, AccelerationType.POSITION_PLANNING_DECELERATION)
actuator.setAcceleration(1200, AccelerationType.VELOCITY_PLANNING_ACCELERATION)
actuator.setAcceleration(1000, AccelerationType.VELOCITY_PLANNING_DECELERATION)
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/0HLx3iQitXg?si=Z39mFeatUdp4j9dh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
