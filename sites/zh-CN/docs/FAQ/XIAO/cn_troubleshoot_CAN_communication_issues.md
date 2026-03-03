---
description: XIAO CAN Bus 扩展板-常见问题解答
title: 如何排查 CAN 总线通信问题？
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/troubleshoot_CAN_communication_issues
last_update:
  date: 2023/6/30
  author: cheng.tang
---

如果您在使用 CAN 总线通信时遇到问题，可以按照以下步骤进行排查：

- 检查 CAN 总线网络的物理连接，确保接线和终端电阻正确。
- 检查波特率设置，确保所有连接到 CAN 总线的设备的波特率一致。
- 使用 CAN 总线分析仪或终端软件监控 CAN 总线流量，以识别传输消息中的任何错误或问题。
- 仔细检查程序代码，确保正确初始化和配置 MCP2515 控制器。
- 确保 XIAO 开发板和 CAN 总线网络的电源稳定，并在指定的电压范围内。
- 如果您有其他问题或本常见问题解答部分未涵盖的问题，请随时联系我们的技术支持团队以获取进一步帮助。