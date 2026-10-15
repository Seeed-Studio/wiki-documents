---
sidebar_position: 2
description: SenseCAP Portal 数据管理
title: 数据管理
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/tutorials/data-management
aliases:
  - /Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/cn/sensecraft-data-platform/tutorials/data-management/
---


SenseCAP Portal 提供数据查询功能，可根据多种条件筛选查询或导出你所需的传感器数据。

## 表格

- ① 设备支持查看两种类型的数据：“上行数据”和“阈值数据”。你可以点击查看每种类型。
- ② 筛选条件，可根据 EUI、频率、分组、状态和注册时间筛选节点。
- ③ 数据列表显示 EUI、设备名称、数据类型、测量项、采集和上传时间等信息。
- ④ 点击 EUI 进入设备详情页面，查看传感器节点的基本信息。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement1.png" /></div>

## 图表
① 点击 Graph。

<div align="left"><img width={1200} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement2.png" /></div>

② 新增页面，输入页面名称，并选择行数和列数。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-data_management-2.jpg)

③  为创建的图表命名，然后点击完成。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement3.png" /></div>

④ 点击添加测量项

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement4.png" /></div>

⑤ 选择要显示的测量类型和时间范围。然后，选择具体的传感器数据。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement5.png" /></div>
⑥ 然后点击 **Confirm** 查看生成的图表数据。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement6.png" /></div>

- 每个页面最多可设置三行三列，并可创建多个页面。详细步骤请参考 Dashboard 图表。

## 查看账户信息

在账户管理页面，你可以查看账户信息并点击修改信息。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-data_management-4.jpg)




## 添加 / 管理子账户
你可以在此注册新的子账户，并将其关联到你的主账户。填写完所需信息后，你可以为子账户设置权限类型。

1. **Limited User**：无任何权限。无法查看主账户的设备数据，也不能添加、编辑或删除设备。
2. **Observer**：可以查看与主账户关联的设备及其上传的数据，但不能添加、编辑或删除设备。
3. **Administrator**：可以查看、编辑和删除与主账户关联的设备。
4. 填写完信息后，点击 **Confirm** 完成注册。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement7.png" /></div>
<br />

点击 **Sub Account List** 查看和管理子账户。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement8.png" /></div>

<br />

点击 **Update Account Information** 修改子账户信息，或点击 **Delete** 删除子账户。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement9.png" /></div>
<br />
输入新添加的子账户和密码进行登录。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement10.png" /></div>
<br />
你可以查看主账户的设备状态和相关数据信息。
<br />
<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement11.png" /></div>