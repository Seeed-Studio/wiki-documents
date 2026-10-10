---
description: "Seeed 具身智能入门课程第二阶段：机械臂组装与基础控制第 8 章 — 使用 Python SDK 控制 reBot Arm：1、如果没有安装环境的参考7 .1 安装环境"
title: 第 8 章 - 使用 Python SDK 控制 reBot Arm
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_8
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_8/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 2 阶段 · 第 8 章 · 理论与实践</span>
    <h2>8. 使用 Python SDK 控制 reBot Arm</h2>
    <p>
      1、如果没有安装环境的参考7 .1 安装环境
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 使用 Python SDK 控制 reBot Arm

<callout emoji="🚧">
1、如果没有安装环境的参考7 .1 安装环境
2、python sdk的机械臂各个关节控制器的参数需要根据实际的使用需求调节，目前的参数只能满足精度不高的场景。
</callout>

安装所需依赖

```Plain Text
python3 -m pip install pyyaml motorbridge
```

拉取示例代码

```Plain Text
git clone https://github.com/hopcan/rebotArm_ctrl.git
```

<callout emoji="🚧">
控制 rebotDM的 python 例子在 rebotArm_ctrl/example/rebotDM
rebotDM机械臂的配置文件在 rebotArm_ctrl/config
控制rebotRS的 python 例子在rebotArm_ctrl/example/rebotRS
rebotRS机械臂的配置文件在 rebotArm_ctrl/config
</callout>

## 修改参数和切换模式

推荐rebot DM 使用的控制模式是POS_VEL，切换机械臂关节控制模式和配置参数都可以在 ebotArm_ctrl/config 下的 rebotDM.yaml 修改对应参数实现。

举例说明：

```YAML
  - name: Shoulder Pan
    motor_can_id: 1   
    MIT:
        kp: 10.0
        kd: 1.0
    POS_VEL:
        vel_kp: 0.0125
        vel_ki: 0.004
        pos_kp: 150.0
        pos_ki: 0.5
        vlim: 5.0
    posmax: 2.6
    posmin: -2.6
    use_mode: POS_VEL
```

MIT 的 kp 和 kd ，POS_VEL 的 vel_kp、vel_ki、pos_kp、pos_ki和vlim是对应模式的参数，可以根据机械臂的控制效果来改变。use_mode 可以切换对应关节的控制模式，可以改成 MIT 或者 POS_VEL。

## 连接 / 断开连接机械臂（使用上下文管理）

参考 example/rebotDM/1_rebotDM_connect.py 或者 example/rebotRS/1_rebotRS_connect.py

1. 先创建总线控制器

<callout emoji="🚧">
注意：
1、检查端口是否存在。
2、端口权限要在程序运行前赋予。
</callout>

rebotDM使用串口，创建方式如下

```Plain Text
channel = "/dev/ttyACM0"  
ctrl =Controller.from_dm_serial(channel, 921600)
```

rebotRS使用Pcan

```Plain Text
channel = "can0"  
ctrl =Controller(channel)
```

1. 通过安全上下文管理器实现

```Python
with reBotArm_handle(ctrl,"rebotDM") as handle:

with reBotArm_handle(ctrl,"rebotRS") as handle:
```

其中 reBotArm_handle 还支持 config_path 参数。这个参数可以指定导入的配置文件，不会再导入默认的机械臂配置文件。可以参考config中的配置文件编写自己的配置文件。

```Python
with reBotArm_handle(ctrl,"rebotDM",config_path = "yaml 的绝对地址") as handle:

with reBotArm_handle(ctrl,"rebotRS",config_path = "yaml 的绝对地址") as handle:
```

<callout emoji="📣">
核心实现：
1、\_\_enter\_\_  函数会调用 connect 函数实现自动连接机械臂，连接失败会输出对应的日志。
2、\_\_exit\_\_ 函数会调用 disconnect 函数实现程序退出自动断开连接机械臂
3、连接机械臂会添加电机到总线控制器、上电检查电机通信、电机can id 和 master id是否有效、配置文件是否有效、将电机的控制模式改为目标控制模式
4、断开连接机械臂会会先自动恢复初始状态，然后失能。
5、使用ctrl c退出程序后等待几秒，不要一直输入ctrl c，需要等待机械臂自动归位后失能。
</callout>

如果不想用上下文管理，可以直接调用 connect 函数 和 disconnect 函数来实现机械臂的连接/断开连接

## 控制机械臂运动

参考 example/rebotDM/3_rebotDM_move_joint.py 或者 example/rebotRS/3_rebotRS_move_joint.py 

```Python
 while True:
            handle.move_to_joint_positions([0,0,0,0.5,0.5,0, -1])
            for motor_id in list(range(1,8)):
                print(f"motor {motor_id}")
                print(f"pos: {handle.motor_state[motor_id].pos:.3f} rad")
                print(f"vel: {handle.motor_state[motor_id].vel:.3f} rad/s")
                print(f"torque: {handle.motor_state[motor_id].torq:.3f} Nm\n")
            time.sleep(0.002)
```

<callout emoji="📣">
handle.motor_state 是一个字典，包含了所有关节的状态信息，读取方法如上。
</callout>

## 给机械臂设置零点

参考 example/rebotDM/2_rebotDM_set_zero.py 或者 example/rebotRS/2_rebotRS_set_zero.py

```Plain Text
with reBotArm_handle(ctrl,"rebotRS") as handle:
    handle.set_zero_position()

with reBotArm_handle(ctrl,"rebotDM") as handle:
    handle.set_zero_position()
```

<callout emoji="📣">
通过机械臂控制类调用 set_zero_position 函数即可给机械臂所有关节设置对应的关节id
</callout>

## 更新机械臂关节状态

参考 example/rebotDM/5_rebotDM_request_joints_data.py 或者 example/rebotRS/5_rebotRS_request_joints_data.py

```Python
    with reBotArm_handle(ctrl,"rebotDM") as handle:
        if handle.is_connected:
            print("Controller is connected and ready.")
            print("Motor Use Modes:", handle.use_mode)
        else:
            print("Controller failed to connect.")
        handle.ctrl.disable_all()
        while True:
            print(handle.get_joints_state())
            time.sleep(0.002)

    with reBotArm_handle(ctrl,"rebotRS") as handle:
        if handle.is_connected:
            print("Controller is connected and ready.")
            print("Motor Use Modes:", handle.use_mode)
        else:
            print("Controller failed to connect.")
        handle.ctrl.disable_all()
        while True:
            print(handle.get_joints_state())
            time.sleep(0.002)

```

<callout emoji="📣">
`get_joints_state()`：主动更新机械臂各关节状态，并返回当前关节角度
</callout>

</div>
