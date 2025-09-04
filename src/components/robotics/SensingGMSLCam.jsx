import { useEffect } from "react";
import { Table, Flex, ConfigProvider, Tabs, theme } from "antd";
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';



export const SensingGMSLCamTable = () => {
    // Docusaurus color mode (dark/light)
    const { colorMode } = useColorMode();
    const setTheme = useThemeStore((state) => state.setTheme);

    useEffect(() => {
            setTheme(colorMode === 'dark' ? 'dark' : 'light');
        }, [colorMode]);
    
    const currentTheme = useThemeStore((state) => state.theme);

    
    const tableItems = [
        {
            key: '1',
            label: 'SG3S-ISX031C-GMSL2-H (6G bps)',
            children: <SG3SISX031CGMSL2 />,
        },
        {
            key: '2',
            label: 'SG3S-ISX031C-GMSL2-F (3G bps)',
            children: <SG3SISX031CGMSL2F />,
        },
        {
            key: '3',
            label: "SG8S-AR0820C-5300-G2A-H (6G bps)",
            children: <SG8SAR0820C5300G2AH />,
        },
        {
            key: '4',
            label: "SG2-IMX390C-5200-G2A-H (6G bps)",
            children: <SG2IMX390C5200G2AH />
        },
        {
          key: '5',
          label: 'SG2-AR0233C-5200-G2A-H (6G bps)',
          children: <SG2AR0233C5200G2AH />
        }
    ]

    return (
        <ConfigProvider
        theme={{
            algorithm:
            currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
        >
        <Tabs
            tabPosition="left"
            items={tableItems}
        />
            
        </ConfigProvider>
    )
}

const SG3SISX031CGMSL2 = () => {

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        key: 'name'
    },
    {
        title: "Parameter",
        dataIndex: "value",
        key: "value",
        align: 'center',
    },
];


const data = [
  { key: 1, name: 'Sensor', value: 'SONY 2.95MP ISX031 RGGB' },
  { key: 2, name: 'ISP', value: 'Built-in' },
  { key: 3, name: 'Image Size', value: '1/2.42 inch CMOS' },
  { key: 4, name: 'Output Pixels', value: '1920 H * 1536 V' },
  { key: 5, name: 'Pixel Size', value: '3.0 um * 3.0 um' },
  { key: 6, name: 'Frame Rate', value: '1920 * 1536 @ 30fps' },
  { key: 7, name: 'HDR Support', value: 'Yes' },
  { key: 8, name: 'LFM', value: 'Yes' },
  { key: 9, name: 'Output data', value: 'YUV422@8bit' },
  { key: 10, name: 'Serializer', value: 'MAXIM MAX9295A' },
  { key: 11, name: 'Camera Interface', value: 'GMSL2' },
  { key: 12, name: 'Power Supply', value: '9~16V POC' },
  { key: 13, name: 'Current', value: '<200mA@12VDC' },
  { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
  { key: 15, name: 'Operating temp. range', value: '-40 ~ 85℃' },
  { key: 16, name: 'Dimensions', value: 'W:25mm, L:25mm, H:18.6mm' },
  { key: 17, name: 'Weight', value: '<50g' },
]


const hwColumn = [
    {
        title: 'Category',
        dataIndex: 'category',
        align: 'center',
        key: 'category',
        render: (text, row, index) => {
            if (index === 0) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 0 && index < 3) {
                return { children: text, props: { rowSpan: 0 } };
            }

            if (index === 3) {
                return { children: text, props: { rowSpan: 4 } };
            } else if (index > 3 && index < 7) {
                return { children: text, props: { rowSpan: 0 } };
            }

            return text;
        }
    },
    {
        title: "spec",
        dataIndex: "spec",
        key: "spec",
        align: 'center',
    },
    {
        title: 'Parameter',
        dataIndex: 'value',
        key: 'value',
        align: 'center'
    }
]

const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: 'MAX9295A' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (6G bps)' },
    
    { key: 4, category: 'ISP', spec: 'Model', value: 'ISX031' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0x34 (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Frame Sync', value: 'Controlled by MAX9295A MFP7' },
    { key: 7, category: 'ISP', spec: 'Reset', value: 'Controlled by MAX9295A MFP0' },
]
    return (
        <Flex gap="middle" vertical align="center" wrap>
            <p>
                The camera is equipped with SONY CMOS image sensor ISX031 and Maxim GMSL2 serializer MAX96717F. 
                It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, 
                which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.
            </p>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                size="small"
                pagination={false}
            />

            <p>Hardware Settings</p>

            <Table
                dataSource={hwData}
                columns={hwColumn}
                bordered
                size="small"
                pagination={false}
            />
        </Flex>
    );
}


const SG3SISX031CGMSL2F = () => {
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        key: 'name'
    },
    {
        title: "Parameter",
        dataIndex: "value",
        key: "value",
        align: 'center',
    },
];


const data = [
  { key: 1, name: 'Sensor', value: 'SONY 2.95MP ISX031 RGGB' },
  { key: 2, name: 'ISP', value: 'Built-in' },
  { key: 3, name: 'Image Size', value: '1/2.42 inch CMOS' },
  { key: 4, name: 'Output Pixels', value: '1920H*1536V' },
  { key: 5, name: 'Pixel Size', value: '3.0um*3.0um' },
  { key: 6, name: 'Frame Rate', value: '1920*1536@30fps' },
  { key: 7, name: 'HDR Support', value: 'Yes' },
  { key: 8, name: 'LFM', value: 'Yes' },
  { key: 9, name: 'Output data', value: 'YUV422@8bit' },
  { key: 10, name: 'Serializer', value: 'MAXIM MAX96717F' },
  { key: 11, name: 'Camera Interface', value: 'GMSL2' },
  { key: 12, name: 'Power Supply', value: '9~16V POC' },
  { key: 13, name: 'Current', value: '<200mA@12VDC' },
  { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
  { key: 15, name: 'Operating temp. range', value: '-40 ~ 85 ℃' },
  { key: 16, name: 'Dimensions', value: 'W:25mm, L:25mm, H:18.6mm' },
  { key: 17, name: 'Weight', value: '<50g' },
]


const hwColumn = [
    {
        title: 'Category',
        dataIndex: 'category',
        align: 'center',
        key: 'category',
        render: (text, row, index) => {
            if (index === 0) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 0 && index < 3) {
                return { children: text, props: { rowSpan: 0 } };
            }

            if (index === 3) {
                return { children: text, props: { rowSpan: 4 } };
            } else if (index > 3 && index < 7) {
                return { children: text, props: { rowSpan: 0 } };
            }

            return text;
        }
    },
    {
        title: "spec",
        dataIndex: "spec",
        key: "spec",
        align: 'center',
    },
    {
        title: 'Parameter',
        dataIndex: 'value',
        key: 'value',
        align: 'center'
    }
]

const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: ' MAX96717F' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (3G bps)' },
    
    { key: 4, category: 'ISP', spec: 'Model', value: 'ISX031' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0x34 (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Frame Sync', value: 'Controlled by  MAX96717F MFP7' },
    { key: 7, category: 'ISP', spec: 'Reset', value: 'Controlled by  MAX96717F MFP0' },
]
    return (
        <Flex gap="middle" vertical align="center" wrap>
            <p>
                The camera is equipped with SONY CMOS image sensor ISX031 and Maxim GMSL2 serializer MAX9295A. 
                It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, 
                which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.
            </p>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                size="small"
                pagination={false}
            />

            <p>Hardware Settings</p>

            <Table
                dataSource={hwData}
                columns={hwColumn}
                bordered
                size="small"
                pagination={false}
            />
        </Flex>
    );
}

const SG8SAR0820C5300G2AH = () => {

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        key: 'name'
    },
    {
        title: "Value",
        dataIndex: "value",
        key: "value",
        align: 'center',
    },
];


const data = [
  { key: 1, name: 'Sensor', value: 'ONSEMI 8.3MP AR0820 RGGB' },
  { key: 2, name: 'ISP', value: 'GW5300' },
  { key: 3, name: 'Image Size', value: '1/2 inch CMOS' },
  { key: 4, name: 'Output Pixels', value: '3840 H * 2160 V' },
  { key: 5, name: 'Pixel Size', value: '2.1 um * 2.1 um' },
  { key: 6, name: 'Frame Rate', value: '3840*2160@30fps' },
  { key: 7, name: 'HDR Support', value: 'Yes' },
  { key: 8, name: 'LFM', value: '/' },
  { key: 9, name: 'Output data', value: 'YUV422@8bit' },
  { key: 10, name: 'Serializer', value: 'MAXIM MAX9295A' },
  { key: 11, name: 'Camera Interface', value: 'GMSL2' },
  { key: 12, name: 'Power Supply', value: '9~16V POC' },
  { key: 13, name: 'Current', value: '<400mA@12V DC' },
  { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
  { key: 15, name: 'Operating temp. range', value: '-40 ~ 85℃' },
  { key: 16, name: 'Dimensions', value: 'W:30 mm, L:30 mm, H:22.57 mm' },
  { key: 17, name: 'Weight', value: '<80g' },
];


const hwColumn = [
    {
        title: 'Category',
        dataIndex: 'category',
        align: 'center',
        key: 'category',
        render: (text, row, index) => {
            if (index === 0) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 0 && index < 3) {
                return { children: text, props: { rowSpan: 0 } };
            }

            if (index === 3) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 3 && index < 6) {
                return { children: text, props: { rowSpan: 0 } };
            }

            if (index === 6) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 6 && index < 9) {
                return { children: text, props: { rowSpan: 0 } };
            }

            return text;
        }
    },
    {
        title: "spec",
        dataIndex: "spec",
        key: "spec",
        align: 'center',
    },
    {
        title: 'Parameter',
        dataIndex: 'value',
        key: 'value',
        align: 'center'
    }
]

const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: ' MAX9295A' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (6G bps)' },
    
    { key: 4, category: 'ISP', spec: 'Model', value: 'GW5300' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0xDA (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Reset', value: 'Controlled by  MAX9295A MFP0' },


    { key: 7, category: 'Sensor', spec: 'Model', value: 'AR0820' },
    { key: 8, category: 'Sensor', spec: 'I2C Address', value: '0x20 (8 bit address)' },
    { key: 9, category: 'Sensor', spec: 'Frame Sync', value: 'Controlled by  MAX9295A MFP7' },
]
    return (
        <Flex gap="middle" vertical align="center" wrap>
            <p>
                The camera is equipped with On-semi Semiconductor CMOS image sensor AR0820, image processor GW5300 and Maxim GMSL2 serializer MAX9295A. 
                It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, 
                which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.
            </p>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                size="small"
                pagination={false}
            />

            <p>Hardware Settings</p>

            <Table
                dataSource={hwData}
                columns={hwColumn}
                bordered
                size="small"
                pagination={false}
            />
        </Flex>
    );
}

const SG2IMX390C5200G2AH = () => {

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        key: 'name'
    },
    {
        title: "Value",
        dataIndex: "value",
        key: "value",
        align: 'center',
    },
];


const data = [
  { key: 1, name: 'Sensor', value: 'SONY 2.12 MP IMX390 RGGB' },
  { key: 2, name: 'ISP', value: 'GW5200' },
  { key: 3, name: 'Image Size', value: '1/2.7 inch CMOS' },
  { key: 4, name: 'Output Pixels', value: '1920 H * 1080 V' },
  { key: 5, name: 'Pixel Size', value: '3 um * 3 um' },
  { key: 6, name: 'Frame Rate', value: '1920 * 1080 @ 30fps' },
  { key: 7, name: 'HDR Support', value: 'Yes' },
  { key: 8, name: 'LFM', value: 'Yes' },
  { key: 9, name: 'Output data', value: 'YUV422@8bit' },
  { key: 10, name: 'Serializer', value: 'MAXIM MAX9295A' },
  { key: 11, name: 'Camera Interface', value: 'GMSL2' },
  { key: 12, name: 'Power Supply', value: '9~16V POC' },
  { key: 13, name: 'Current', value: '<250mA@12V DC' },
  { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
  { key: 15, name: 'Operating temp. range', value: '-40 ~ 85℃' },
  { key: 16, name: 'Dimensions', value: 'W:30 mm, L:30 mm, H:22.57 mm' },
  { key: 17, name: 'Weight', value: '<50g' },
];


const hwColumn = [
    {
        title: 'Category',
        dataIndex: 'category',
        align: 'center',
        key: 'category',
        render: (text, row, index) => {
            if (index === 0) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 0 && index < 3) {
                return { children: text, props: { rowSpan: 0 } };
            }

            if (index === 3) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 3 && index < 6) {
                return { children: text, props: { rowSpan: 0 } };
            }

            if (index === 6) {
                return { children: text, props: { rowSpan: 4 } };
            } else if (index > 6 && index < 10) {
                return { children: text, props: { rowSpan: 0 } };
            }

            return text;
        }
    },
    {
        title: "spec",
        dataIndex: "spec",
        key: "spec",
        align: 'center',
    },
    {
        title: 'Parameter',
        dataIndex: 'value',
        key: 'value',
        align: 'center'
    }
]

const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: ' MAX9295A' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (6G bps)' },
    
    { key: 4, category: 'ISP', spec: 'Model', value: 'GW5200' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0xDA (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Reset', value: 'Controlled by  MAX9295A MFP0' },


    { key: 7, category: 'Sensor', spec: 'Model', value: 'IMX390' },
    { key: 8, category: 'Sensor', spec: 'I2C Address', value: '0x42 (8 bit address)' },
    { key: 9, category: 'Sensor', spec: 'Frame Sync', value: 'Controlled by MAX9295A MFP7' },
    { key: 9, category: 'Sensor', spec: 'Error', value: 'Controlled by MAX9295A MFP5' },
]
    return (
        <Flex gap="middle" vertical align="center" wrap>
            <p>
                The camera is equipped with Sony image sensor IMX390, image processor GW5200 and Maxim GMSL2 serializer MAX9295A. 
                It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, 
                which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.
            </p>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                size="small"
                pagination={false}
            />

            <p>Hardware Settings</p>

            <Table
                dataSource={hwData}
                columns={hwColumn}
                bordered
                size="small"
                pagination={false}
            />
        </Flex>
    );
}

const SG2AR0233C5200G2AH = () => {

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        key: 'name'
    },
    {
        title: "Value",
        dataIndex: "value",
        key: "value",
        align: 'center',
    },
];


const data = [
  { key: 1, name: 'Sensor', value: 'ONSEMI 2.6 MP AR0233 RGGB' },
  { key: 2, name: 'ISP', value: 'GW5200' },
  { key: 3, name: 'Image Size', value: '1/2.5 inch CMOS' },
  { key: 4, name: 'Output Pixels', value: '1920 H * 1080 V' },
  { key: 5, name: 'Pixel Size', value: '3 um * 3 um' },
  { key: 6, name: 'Frame Rate', value: '1920 * 1080 @ 30fps' },
  { key: 7, name: 'HDR Support', value: 'Yes' },
  { key: 8, name: 'LFM', value: 'Yes' },
  { key: 9, name: 'Output data', value: 'YUV422@8bit' },
  { key: 10, name: 'Serializer', value: 'MAXIM MAX9295A' },
  { key: 11, name: 'Camera Interface', value: 'GMSL2' },
  { key: 12, name: 'Power Supply', value: '9~16V POC' },
  { key: 13, name: 'Current', value: '<250mA@12V DC' },
  { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
  { key: 15, name: 'Operating temp. range', value: '-40 ~ 85℃' },
  { key: 16, name: 'Dimensions', value: 'W:30 mm, L:30 mm, H:22.5 mm' },
  { key: 17, name: 'Weight', value: '<50g' },
];


const hwColumn = [
    {
        title: 'Category',
        dataIndex: 'category',
        align: 'center',
        key: 'category',
        render: (text, row, index) => {
            if (index === 0) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 0 && index < 3) {
                return { children: text, props: { rowSpan: 0 } };
            }

            if (index === 3) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 3 && index < 6) {
                return { children: text, props: { rowSpan: 0 } };
            }

            if (index === 6) {
                return { children: text, props: { rowSpan: 3 } };
            } else if (index > 6 && index < 9) {
                return { children: text, props: { rowSpan: 0 } };
            }

            return text;
        }
    },
    {
        title: "spec",
        dataIndex: "spec",
        key: "spec",
        align: 'center',
    },
    {
        title: 'Parameter',
        dataIndex: 'value',
        key: 'value',
        align: 'center'
    }
]

const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: 'MAX9295A' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (6G bps)' },
    
    { key: 4, category: 'ISP', spec: 'Model', value: 'GW5200' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0xDA (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Reset', value: 'Controlled by MAX9295A MFP0' },


    { key: 7, category: 'Sensor', spec: 'Model', value: 'AR0233' },
    { key: 8, category: 'Sensor', spec: 'I2C Address', value: '0x20 (8 bit address)' },
    { key: 9, category: 'Sensor', spec: 'Frame Sync', value: 'Controlled by MAX9295A MFP7' },
]
    return (
        <Flex gap="middle" vertical align="center" wrap>
            <p>
                The camera is equipped with ONSEMI image sensor AR0233, image processor GW5200 and Maxim GMSL2 serializer MAX9295A. 
                It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, 
                which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.
            </p>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                size="small"
                pagination={false}
            />

            <p>Hardware Settings</p>

            <Table
                dataSource={hwData}
                columns={hwColumn}
                bordered
                size="small"
                pagination={false}
            />
        </Flex>
    );
}



export default SensingGMSLCamTable