---
description: "Seeed 具身智能入门课程第二阶段：机械臂组装与基础控制第 7 章 — MotorBridge 电机控制库：MotorBridge 是 Seeed Studio（矽递科技） 开源推出、面向机械臂/人形机器人一体化关节电机的跨厂商统一CAN电机控制软件栈，底层采用Rust高性能核心，提供标准C ABI接口，配套Python/C++/ROS2语言绑定，一套API即可驱动市面上主流一体化关节电机。"
title: 第 7 章 - MotorBridge 电机控制库
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_7
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_7/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 2 阶段 · 第 7 章 · 实践</span>
    <h2>7. MotorBridge 电机控制库</h2>
    <p>
      MotorBridge 是 Seeed Studio（矽递科技） 开源推出、面向机械臂/人形机器人一体化关节电机的跨厂商统一CAN电机控制软件栈，底层采用Rust高性能核心，提供标准C ABI接口，配套Python/C++/ROS2语言绑定，一套API即可驱动市面上主流一体化关节电机。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## MotorBridge 与机械臂校准

## 什么是Motorbridge？

MotorBridge 是 **Seeed Studio（矽递科技）** 开源推出、面向机械臂/人形机器人一体化关节电机的**跨厂商统一CAN电机控制软件栈**，底层采用Rust高性能核心，提供标准C ABI接口，配套Python/C++/ROS2语言绑定，一套API即可驱动市面上主流一体化关节电机。

核心定位：**一套代码，兼容所有主流关节电机，抹平各厂商私有CAN协议差异**，专门解决机械臂开发多电机品牌适配繁琐的痛点。

- 它解决行业什么痛点市面上一体化关节（达妙、RobStride、MyActuator等）每家私有CAN协议、指令格式、控制模式完全不互通：MotorBridge做了一层抽象封装，**上层调用API完全一致，底层自动适配不同厂商协议**，切换电机仅修改厂商参数即可，无需改动运动控制逻辑。

  1. 换电机品牌就要重写整套CAN通信、三环控制代码；
  2. 开发者需要同时学习5套以上私有协议，维护多套代码库；
  3. 缺少统一调试、校准、可视化工具，每家电机配套工具不通用；
  4. Python原生控制实时性差，GC停顿影响机器人运动控制。

| 电机厂商 | 总线类型 | 支持控制模式 |
|-|-|-|
| 达妙 Damiao | CAN2.0 / 串口桥 | MIT阻抗、位置速度、纯速度、力位控制 |
| RobStride | CAN2.0 | MIT、位置、速度 |
| MyActuator RMD | CAN2.0 | 电流、位置、速度 |
| HighTorque | CAN2.0 | MIT、位置速度、纯速度、力位控制 |
| Hexfellow | CAN-FD | MIT、位置速度 |

- 整体分层架构（自上而下）

  - 应用层（用户开发层）

支持 Python、C++（开发中）、ROS2节点，开发者直接调用统一API，无需关心底层CAN协议。

- Python：ctypes绑定Rust编译的动态库，轻量无性能损耗；
- 配套工具：命令行CLI、Web可视化控制台MotorBridge-Studio。

- 对比传统厂商单独SDK优势

| 对比项 | 各厂商原生SDK | MotorBridge |
|-|-|-|
| 多电机品牌兼容 | 单品牌专用，切换电机需重写代码 | 统一API，更换电机仅改厂商参数 |
| 实时性能 | Python实现，GC卡顿，时序不稳定 | Rust底层，无垃圾回收，实时性强 |
| 调试工具 | 每家独立上位机，操作不统一 | 统一CLI+Web可视化控制台 |
| 多语言支持 | 大多仅提供Python | Python/C++/ROS2共用底层库 |
| 协议封装 | 需要开发者手动解析CAN报文 | 完全屏蔽底层CAN协议细节 |
| 跨平台 | 适配参差不齐 | Windows/macOS/Linux全平台支持 |

## 安装环境

## 安装Miniforge

###### ubuntu安装

```Plain Text
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
```

```Plain Text
bash Miniforge3-Linux-x86_64.sh 
```

接下来就是按提示输入yes或者按下enter键，安装成功后输入下面命令更新终端脚本。

```Plain Text
source ~/.bashrc
```

用户名称前出现（base）即安装成功。

###### 其他平台可参考下面

Jetson\树莓派:

```Plain Text
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$$(uname)-$$(uname -m).sh"
```

```Plain Text
bash Miniforge3-$$(uname)-$$(uname -m).sh
```

 macOS:

```Plain Text
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
```

```Plain Text
bash Miniforge3-MacOSX-$(uname -m).sh
```

windows:

```Plain Text
在浏览器中打开 Miniforge 的 Release 页面，找到最新版本的 Miniforge3-Windows-x86_64.exe 点击下载：
```

```Plain Text
https://github.com/conda-forge/miniforge/releases
```

## 创建环境

Python 3.10或以上版本虚拟环境，motorbridge所需 python 版本 >=3.10

```Plain Text
conda create -y -n rebot_motorbridge python=3.12
```

随后激活虚拟环境。每次打开终端要使用虚拟环境里面的相关功能时，都需要重新执行该激活命令。

```Plain Text
conda activate rebot_motorbridge
```

###### 安装motorbridge

激活 reBot_motorbridge 虚拟环境后，执行以下命令安装 motorbridge

```Plain Text
pip install motorbridge
```

## Motorbridge 控制 DM 电机

## Web端控制

1、 在浏览器中打开下面地址

```Plain Text
https://motorbridge.github.io/motorbridge-studio/
```

2、然后点击**帮助**选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-01cn.jpg" alt="" />
</div>

3、帮助选项中，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。以达妙DM电机为例：

- linux平台输入下面指令

```Plain Text
motorbridge-gateway -- \
  --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial \
  --serial-port /dev/ttyACM0 --serial-baud 921600 \
  --dt-ms 20
```

- MAC平台输入下面指令

  ```Plain Text
  motorbridge-gateway -- \
    --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial \
    --serial-port /dev/tty.usbmodem14101 --serial-baud 921600 \
    --dt-ms 20
  ```
- windows输入下面指令

  ```Plain Text
  motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --dt-ms 20
  ```

<callout emoji="🚧">
注意：端口号一定要选择正确的端口，绑定之前要先赋予权限。
</callout>

4、输入上面命令后，回到网页，点击连接后，连接成功后右上角会出现绿色的已连接的文字。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-02cn.jpg" alt="" />
</div>

5、选择dm电机后，并点击扫描Damiao

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-03cn.jpg" alt="" />
</div>

6、扫描成功后出现下面的卡片

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-04cn.jpg" alt="" />
</div>

7、右侧是电机的相关参数，左下角的使能按钮，电机的灯变成绿色。此时可以对电机进行控制。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-05cn.jpg" alt="" />
</div>

8、拖动滑动条或者在小框输入对应的角度（单位是rad），然后点击 Move ，电机会转动到目标角度。

9、点击使能（Enable）按钮后，再点击 Zero+Save 即可将当前位置设置为零点。

10、设置电机id，如果电机是用在rebot上，can_id应设置为对应关节的编号，master_id应设置为 0x10+can_id，

<callout emoji="🚧">
比如 can_id为 1 ，那 master_id 应为0x11，也就是 16+1 =17 。然后点击 Set CAN_ID 
</callout>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-06cn.jpg" alt="" />
</div>

## Python 代码控制

<callout emoji="🚧">
如果没有安装环境，请先参照 7.1 章节的安装环境，dm电机相关的例子都是通过达妙的串口实现的。
</callout>

先拉取示例代码

```Plain Text
git clone https://github.com/hopcan/motorbridge_ctrl.git 
```

然后激活对应的conda环境和进入示例代码文件夹

```Plain Text
conda activate rebot_motorbridge

cd 你的文件夹路径/motorbridge_ctrl/dm_motor_ctrl

```

- 使能/失能 DM电机

 1_enable_dm.py 是 使能/失能 DM电机 的典型例子。

```Plain Text
python 1_enable_dm.py
```

现象：DM电机使能后，电机灯变绿。3秒后失能DM电机。

```Python
#Enable specified motor, disable motor after 3 seconds
from motorbridge import Controller, Mode
import time
motor_configs = {
    1 : {
        "can_id": 0x01,
        "master_id": 0x11, #0x10+1
        "model": "4310", #4310、4340P、6001
    },
}

ctrl = Controller.from_dm_serial("/dev/ttyACM0", 921600)

#add motor
#添加电机到总线上
motor={}
for num,cfg in motor_configs.items():
    motor[num] = ctrl.add_damiao_motor(cfg["can_id"], cfg["master_id"], cfg["model"])

#enable all motor
#使能总线上所有电机
ctrl.enable_all()

time.sleep(3)
#disable all motor
#失能总线上所有电机
ctrl.disable_all()
```

- 扫描电机id

2_scan_DMmotor.py 是扫描 DM 电机 can id 的例子。

```Plain Text
python 2_scan_DMmotor.py 
```

主要实现函数 scan_damiao_motors 的输入是can id的范围和端口。运行后会将扫描到的 can id及其 master id 显示出来。可以利用这个脚本检查can id 和对应的 master id 是否正确。

```Python
from motorbridge import Controller

def scan_damiao_motors(start_can_id, end_can_id,channel="/dev/ttyACM0"):
    found_motors = []

    print(f"start scanning  {channel},canID : {start_can_id} - {end_can_id}")

    for motor_can_id in range(start_can_id, end_can_id + 1):
            ctrl =Controller.from_dm_serial(channel, 921600)
            temp_motor_master_id = 0x11 + motor_can_id

            try:
                motor = ctrl.add_damiao_motor(motor_can_id, temp_motor_master_id, "4340P")

                try:
                    # read register to get the can id
                    #读取寄存器获取can id
                    esc_id = motor.get_register_u32(8, timeout_ms=100)
                    master_id = motor.get_register_u32(7, timeout_ms=100)
                    print(f"[find] motor_can_id=0x{esc_id:02X} motor_master_id=0x{master_id:02X}")
                    found_motors.append((esc_id))

                except Exception:
                    # read error, no this can id
                    #读取失败报错
                    print(f"[no respond] motor_can_id=0x{motor_can_id:02X}")

                finally:
                    motor.close()

            except Exception as e:
                print(f"[error] motor_can_id=0x{motor_can_id:02X}: {e}")
            finally:
                ctrl.close_bus()
                ctrl.close()

    print(f"\nfinish find {len(found_motors)} motor")
    return found_motors
#run scanning
# 运行扫描
if __name__ == "__main__":
    motors = scan_damiao_motors(start_can_id=1, end_can_id=10,channel="/dev/ttyACM0")

    print("\nfind motor config:")
    for can_id in motors:
        print(f"  can_id=0x{can_id:02X}")
```

- 设置can id 和 对应的 master id

3_set_id.py 是设置 DM 电机 can id 和 master id 的例子。

```Plain Text
python 3_set_id.py
```

主要实现函数 set_DMmotor_ID 的输入是 旧的 can id 、 要设置的新can id 和 要设置的新master id 以及端口。

```Python
from motorbridge import Controller
from motorbridge import Controller, RID_MST_ID, RID_ESC_ID
import time
#set canID and masterID
#设置can id 和 master id
def set_DMmotor_ID(old_can_id,new_can_id,new_master_id,channel="/dev/ttyACM0"):

    ctrl =Controller.from_dm_serial(channel, 921600)
    temp_motor_master_id= 0x10 + old_can_id 
    motor = ctrl.add_damiao_motor(old_can_id, temp_motor_master_id, "4340P")

    try :
        motor.write_register_u32(RID_MST_ID, new_master_id)
    except Exception:
        pass
    try :
        motor.write_register_u32(RID_ESC_ID, new_can_id)
    except Exception:
        pass
    new_motor = ctrl.add_damiao_motor(new_can_id , new_master_id, "4340P")
    new_motor.store_parameters()
    print("change ID and save")
    time.sleep(1)
    ctrl.close_bus()
    ctrl.close()

if __name__== "__main__" :
    old_can_id = 0x06
    new_can_id = 0x01
    new_master_id = 0x11
    set_DMmotor_ID(old_can_id,new_can_id,new_master_id,channel="/dev/ttyACM0")
```

- 控制不同模式

4_mit_ctrl.py 是 mit 模式的控制例子。kp是控制器的刚度，kd是控制器的阻尼，tau是前馈力矩

```Plain Text
python 4_mit_ctrl.py
```

现象：例子只给了tau，因此电机会一直旋转。根据MIT模式可以衍生出多种控制模式，如kp=0,kd不为0时，给定 vel即可实现匀速转动;kp=0,kd=0，给定 tau 即可实现给定扭矩输出。  

<callout emoji="🚧">
注意：
1、只给 tau 的时候不要给太大的 tau ，如果 tau 太大的话，电机会越转越快来达到 期望的 tau。
2、对位置进行控制时，kd不能赋0，否则会造成电机震荡，甚至失控。  
3、pos，vlim 单位分别为rad和rad/s，数据类型为float
</callout>

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0x11
channel="/dev/ttyACM0"

#get motor handle
#获取电机控制句柄
ctrl =Controller.from_dm_serial(channel,921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

#enable all motor
#使能所有电机
ctrl.enable_all()

# change to MIT mode，timeout 1000ms
#切换 mit 模式
motor.ensure_mode(Mode.MIT, timeout_ms=1000)

#control mit
# mit 控制
motor.send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,    
    kd=0.0,    
    tau=0.8   # 0.8Nm 
)

#run 5s
#运行 5s
time.sleep(5)
#disable all motor
#失能所有电机
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

5_pos_vel_ctrl.py 是pos_vel 模式的控制例子。

```Plain Text
python 5_pos_vel_ctrl.py
```

pos为控制的目标位置，vlim是用来限定运动过程中的最大绝对速度值。

<callout emoji="🚧">
注意：
pos，vlim 单位分别为rad和rad/s，数据类型为float
</callout>

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0x11
channel="/dev/ttyACM0"

#get motor handle
#获取电机控制句柄
ctrl =Controller.from_dm_serial(channel,921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

#enable all motor
#使能所有电机
ctrl.enable_all()

# change to POS-VEL mode，timeout 1000ms
# 切换位速模式
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

#control pos_vel
#位速模式控制
motor.send_pos_vel(
    pos=2.0,    # target angle（rad）
    vlim=1.5    # max vel（rad/s）
)

#run 5s
#运行5s
time.sleep(5)

#disable all motor
#失能所有电机
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

6_vel_ctrl.py 是 vel 模式的控制例子。

```Plain Text
python 6_vel_ctrl.py
```

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0x11
channel="/dev/ttyACM0"

#get motor handle
#获取电机控制句柄
ctrl =Controller.from_dm_serial(channel,921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

#enable all motor
#使能所有电机
ctrl.enable_all()

# change to VEL mode，timeout 1000ms
# 切换位速模式
motor.ensure_mode(Mode.VEL, 1000)

#control vel
#位速模式控制
motor.send_vel(vel=1.0)  # 1 rad/s

#run 5s
#运行5s
time.sleep(5)

#disable all motor
#失能所有电机
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

其中 vel 为控制的目标速度

<callout emoji="🚧">
注意：
pos单位分别为rad/s，数据类型为float
</callout>

7_force_pos.py force_pos 模式的控制例子。

```Plain Text
python 7_force_pos.py
```

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0x11
channel="/dev/ttyACM0"

#get motor handle
#获取电机控制句柄
ctrl =Controller.from_dm_serial(channel,921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

#enable all motor
#使能所有电机
ctrl.enable_all()

# change to  force_pos mode，timeout 1000ms
# 切换 force_pos 模式
motor.ensure_mode(Mode.FORCE_POS, 1000)

#control force_pos
#force_pos 控制
motor.send_force_pos(
    pos=0.5,    # target angle（rad）
    vlim=1.0,   # max vel（rad/s）
    ratio=0.3   # torque ratio（0.0 - 1.0）0 means no torque, 1 means full torque
)

#run 5s
#运行5s
time.sleep(5)

#disable all motor
#失能所有电机
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

 pos为控制的目标位置，vlim为速度限制，ratio代表使用的力矩大小。ratio 为 0 的时候就是无力，为 1 的时候就是全力。

- 获取电机状态

8_get_state.py 是获取电机状态的例子。

```Plain Text
python 8_get_state.py 
```

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0x11
channel="/dev/ttyACM0"

#get motor handle
#获取电机控制句柄
ctrl =Controller.from_dm_serial(channel,921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

#enable all motor
#使能所有电机
ctrl.enable_all()

# change to pos_vel mode，timeout 1000ms
# 切换 pos_vel 模式
motor.ensure_mode(Mode.POS_VEL, 1000)

#record start time
start = time.perf_counter()

#control cycle
dt = 0.01  # 10ms 

#run 5s
while time.perf_counter()- start < 5.0:
    now_time = time.perf_counter() - start
    motor.send_pos_vel(
        pos=2.0,    # target angle（rad）
        vlim=1.5    # max vel（rad/s）
    )
    time.sleep(dt)
    state = motor.get_state()

    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

#disable all motor
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

8_get_state.py 给的例子是控制过程中获取上一帧电机返回的应答帧。这个应答帧是发送控制帧给电机，电机就会回复，相当于一问一答的模式。如果只想要电机返回应答帧获取状态，而不想让电机运动的话，可以参考9_set_zero.py 中读取电机状态的方式。 

- 设置电机零点

9_set_zero.py  是设置电机零点的例子

```Plain Text
python  9_set_zero.py 
```

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0x11
channel="/dev/ttyACM0"

#get motor handle
#获取电机控制句柄
ctrl =Controller.from_dm_serial(channel,921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

#set zero position
#设置零点
try:
    motor.set_zero_position()
    print("set zero successfully")
except Exception:
    print("set zero failed")
time.sleep(1)

#check the position
#检查位置
start = time.perf_counter()
dt = 0.01  # 10ms 
while time.perf_counter()- start < 1.0:
    now_time = time.perf_counter() - start
    motor.request_feedback()
    time.sleep(dt)
    state = motor.get_state()
    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

time.sleep(1)

ctrl.close_bus()
ctrl.close()
```

现象：设置零点成功后会读取电机当前的状态，确认设置零点是否成功。

## Motorbridge 控制 RS 电机

## web 端控制

如果你的系统还没有安装PCAN驱动，请看这里[reBot Arm B601-RS Quick Start | Seeed Studio Wiki](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow)

1、加载 `peak_usb` 内核模块、检查端口、设置波特率和启动端口

```Bash
#套件里是 PCAN-USB，通常应该直接出现 can0 或 can1
sudo modprobe peak_usb
ip -br link

#如果出现 can0，再设置 bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

2、在浏览器中打开下面地址

```Plain Text
https://motorbridge.github.io/motorbridge-studio/
```

3、然后点击帮助选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-07cn.jpg" alt="" />
</div>

4、然后点击帮助选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。

- linux平台输入下面指令

```Plain Text
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

- MAC平台输入下面指令

```Plain Text
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

- windows输入下面指令

```Plain Text
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0@1000000
```

5、输入上面命令后，回到网页，点击连接后，连接成功后右上角会出现绿色的已连接的文字。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-08cn.jpg" alt="" />
</div>

6、选择rs电机后，并点击扫描 Robstride 电机

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-09cn.jpg" alt="" />
</div>

7、扫描成功后出现下面的卡片

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-10cn.jpg" alt="" />
</div>

  8、右侧是电机的相关参数，左下角的使能按钮，电机的灯变成绿色。此时可以对电机进行控制。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7cn/ch07-11cn.jpg" alt="" />
</div>

9、拖动滑动条或者在小框输入对应的角度（单位是rad），然后点击 Move ，电机会转动到目标角度。

10、点击使能（Enable）按钮后，再点击 Zero+Save 即可将当前位置设置为零点。

11、设置电机id，如果电机是用在rebot上，can_id应设置为对应关节的编号，master_id是固定的。

## Python 代码控制

- 使能/失能 RS电机

1_enable_rs.py 是 使能/失能 DM电机 的典型例子。

```Plain Text
python 1_enable_rs.py
```

```Python

#使能指定电机,3s后失能电机
#Enable specified motor, disable motor after 3 seconds
from motorbridge import Controller, Mode
import time
motor_configs = {
    1 : {
        "can_id": 0x07,
        "master_id": 0xfd, #fix
        "model": "rs-00", #rs-06、rs-00
    },
}

ctrl = Controller("can0")

#add motor
# 添加电机
motor={}
for num,cfg in motor_configs.items():
    motor[num] = ctrl.add_robstride_motor(cfg["can_id"], cfg["master_id"], cfg["model"])

#enable all motor
# 使能所有电机
ctrl.enable_all()

# change to MIT mode，timeout 1000ms  
# 切换到MIT模式，超时1000毫秒
motor[1].ensure_mode(Mode.MIT, timeout_ms=1000)

#control mit
# 控制MIT
motor[1].send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,    
    kd=0.0,    
    tau=0.3  # 0.3Nm 
    # 0.3牛米
)

time.sleep(3)
#disable all motor
# 失能所有电机
ctrl.disable_all()
```

现象：DM电机使能后，电机灯变绿。3秒后失能DM电机，电机灯变红。

- 扫描电机id

2_scan_RSmotor.py 是扫描 DM 电机 can id 的例子。

```Plain Text
python 2_scan_RSmotor.py
```

```Python
from motorbridge import Controller, Mode
import time

def scan_robstride_motors(start_can_id, end_can_id,channel="can0"):
    found_motors=[]
    for motor_can_id in range(start_can_id, end_can_id + 1):
        ctrl =Controller(channel)

        try:
            motor = ctrl.add_robstride_motor(motor_can_id,0xfd, "rs-00")

            try:
                can_id, respond_id = motor.robstride_ping()
                found_motors.append(can_id)
                print(f"can_id={can_id:02X} respond_id={respond_id:02X}") #respond id is not master id
                # 响应ID不是主ID

            except Exception:
                # scan error
                # 扫描错误
                print(f"[no respond] no this motor_can_id=0x{motor_can_id:02X}")

            finally:
                motor.close()

        except Exception as e:
            print(f"[error] motor_can_id=0x{motor_can_id:02X}: {e}")
        finally:
            ctrl.close_bus()
            ctrl.close()
    print(f"\nfinish find {len(found_motors)} motor\n")
    return found_motors

if __name__ == "__main__" :
    motors=scan_robstride_motors(1, 10,channel="can0")

    print("\nfind motor config:")
    for can_id in motors:
        print(f"  can_id=0x{can_id:02X}")
```

主要实现函数 scan_RSmiao_motors 的输入是can id的范围和端口。运行后会将扫描到的 can id及其 master id 显示出来。可以利用这个脚本检查can id 和对应的 master id 是否正确。

- 设置can id 和 对应的 master id

3_set_id.py 是设置 DM 电机 can id 和 master id 的例子。

```Plain Text
python 3_set_id.py
```

```Python
from motorbridge import Controller
from motorbridge import Controller, RID_MST_ID, RID_ESC_ID
import time
#set canID 
# 设置 CAN ID
def set_RSmotor_ID(old_can_id,new_can_id,channel="can0"):

    ctrl =Controller(channel)

    motor = ctrl.add_robstride_motor(old_can_id,0xfd, "rs-00")
    try :
        motor.robstride_set_device_id(new_can_id)
        print(f"change to new id :{new_can_id}")
    except Exception:
        print("set id failed")

    time.sleep(1)
    ctrl.close_bus()
    ctrl.close()

if __name__== "__main__" :
    old_can_id = 0x01
    new_can_id = 0x01
    set_RSmotor_ID(old_can_id,new_can_id,channel="can0")
```

主要实现函数 set_DMmotor_ID 的输入是 旧的 can id 、 要设置的新can id 和 要设置的新master id 以及端口。

- 控制不同模式

4_mit_ctrl.py 是 mit 模式的控制例子。kp是控制器的刚度，kd是控制器的阻尼，tau是前馈力矩

```Plain Text
python 4_mit_ctrl.py 
```

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0xfd
channel="can0"

#get motor handle
# 获取电机句柄
ctrl =Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

#enable all motor
# 使能所有电机
ctrl.enable_all()

# change to MIT mode，timeout 1000ms
# 切换到MIT模式，超时1000毫秒
motor.ensure_mode(Mode.MIT, timeout_ms=1000)

#control mit
# 控制MIT
motor.send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,    
    kd=0.0,    
    tau=0.3   # 0.3Nm 
    # 0.3牛米
)

#run 3s
time.sleep(3)
#disable all motor
# 失能所有电机
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

现象：例子只给了tau，因此电机会一直旋转。根据MIT模式可以衍生出多种控制模式，如kp=0,kd不为0时，给定 vel即可实现匀速转动;kp=0,kd=0，给定 tau 即可实现给定扭矩输出。  

<callout emoji="🚧">
注意：
1、只给 tau 的时候不要给太大的 tau ，如果 tau 太大的话，电机会越转越快来达到 期望的 tau。
2、对位置进行控制时，kd不能赋0，否则会造成电机震荡，甚至失控。  
3、pos，vlim 单位分别为rad和rad/s，数据类型为float。
</callout>

5_pos_vel_ctrl.py 是pos_vel 模式的控制例子。

```Plain Text
python 5_pos_vel_ctrl.py
```

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0xfd
channel="can0"

#get motor handle
# 获取电机句柄
ctrl =Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

#enable all motor
# 使能所有电机
ctrl.enable_all()

# change to POS-VEL mode，timeout 1000ms
# 切换到位置-速度模式，超时1000毫秒
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

#control pos_vel
# 控制位置-速度

motor.send_pos_vel(
    pos=2.0,    # target angle（rad）
    # 目标角度（弧度）
    vlim=1.5    # max vel（rad/s）
    # 最大速度（弧度/秒）
)

#run 5s
# 运行5秒
time.sleep(5)

#disable all motor
# 失能所有电机
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

pos为控制的目标位置，vlim是用来限定运动过程中的最大绝对速度值。

<callout emoji="🚧">
注意：
1、pos，vlim 单位分别为rad和rad/s，数据类型为float。
2、这里用的pos_vel 模式是位置速度模式（PP）。
</callout>

6_vel_ctrl.py 是 vel 模式的控制例子。

```Plain Text
python 6_vel_ctrl.py
```

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0xfd
channel="can0"

#get motor handle
ctrl =Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

#enable all motor
# 使能所有电机
ctrl.enable_all()

# change to POS-VEL mode，timeout 1000ms
# 切换到位置-速度模式，超时1000毫秒
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

#control pos_vel
# 控制位置-速度

motor.send_pos_vel(
    pos=2.0,    # target angle（rad）
    # 目标角度（弧度）
    vlim=1.5    # max vel（rad/s）
    # 最大速度（弧度/秒）
)

#run 5s
# 运行5秒
time.sleep(5)

#disable all motor
# 失能所有电机
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

其中 vel 为控制的目标速度

<callout emoji="🚧">
注意：
pos单位分别为rad/s，数据类型为float。
</callout>

- 获取电机状态

7_get_state.py 是获取电机状态的例子。

```Plain Text
python 7_get_state.py
```

```Python
from motorbridge import Controller, Mode
import time 

motor_can_id = 0x01 
motor_master_id = 0xfd
channel="can0"

#get motor handle
ctrl =Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

#enable all motor
# 使能所有电机
ctrl.enable_all()

# change to mit mode，timeout 1000ms
# 更改为位置-速度模式，超时1000毫秒
motor.ensure_mode(Mode.POS_VEL, 1000)

#record start time
# 记录开始时间
start = time.perf_counter()

#control cycle
# 控制周期
dt = 0.01  # 10ms 
# 10毫秒

#run 5s
# 运行5秒
while time.perf_counter()- start < 5.0:
    now_time = time.perf_counter() - start
    motor.send_pos_vel(
        pos=2.0,    # target angle（rad）
        vlim=1.5    # max vel（rad/s）
    )
    time.sleep(dt)
    state = motor.get_state()

    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

#disable all motor
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

7_get_state.py给的例子是控制过程中获取上一帧电机返回的应答帧。这个应答帧是发送控制帧给电机，电机就会回复，相当于一问一答的模式。如果只想要电机返回应答帧获取状态，而不想让电机运动的话，可以参考8_set_zero.py  中读取电机状态的例子。

- 设置电机零点

8_set_zero.py 是设置电机零点的例子

```Plain Text
python  8_set_zero.py 
```

```Python
from motorbridge import Controller, Mode
motor_can_id = 0x01 
import time 

motor_can_id = 0x01 
motor_master_id = 0xfd
channel="can0"

#get motor handle
# 获取电机句柄
ctrl =Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")
try:
    motor.set_zero_position()
    print("set zero successfully")
except Exception:
    print("set zero failed")
time.sleep(1)

#check the position
# 检查位置
start = time.perf_counter()
dt = 0.01  # 10ms 
# 10毫秒
while time.perf_counter()- start < 1.0:
    now_time = time.perf_counter() - start
    motor.request_feedback()
    time.sleep(dt)
    state = motor.get_state()
    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

time.sleep(1)

ctrl.close_bus()
ctrl.close()
```

现象：设置零点成功后会读取电机当前的状态，确认设置零点是否成功。

</div>
