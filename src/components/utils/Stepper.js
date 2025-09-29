// 文件路径: src/components/Steppers.js

import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import { Steps } from 'antd';

export default function Steppers({ children }) {
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const history = useHistory();

  const onChange = (value) => {
    const targetId = items[value]?.id;
    if (targetId) {
      history.push({ hash: `#${targetId}` });
    }
  };

  const items = useMemo(() => {
    const stepsData = [];
    let currentStep = null;
    const validChildren = React.Children.toArray(children);

    validChildren.forEach(child => {
      if (!React.isValidElement(child)) return;
      
      // 检测方法：检查元素类型和属性
      const isHeading = isHeadingElement(child);

      if (isHeading) {
        if (currentStep) stepsData.push(currentStep);
        currentStep = {
          headingElement: child,
          descriptionElements: [],
        };
      } else if (currentStep) {
        currentStep.descriptionElements.push(child);
      }
    });
    if (currentStep) stepsData.push(currentStep);

    return stepsData.map(step => ({
      id: step.headingElement.props.id,
      title: step.headingElement.props.children,
      description: (
        <>
          {/* 隐形锚点的样式，使用绝对定位来创建偏移 */}
          {React.cloneElement(step.headingElement, {
            style: {
              position: 'absolute',
              top: `calc(-1 * var(--ifm-navbar-height))`,
              visibility: 'hidden',
            },
          })}
          {step.descriptionElements}
        </>
      ),
    }));
  }, [children]);

  useEffect(() => {
    const hash = decodeURIComponent(location.hash.substring(1));
    if (hash) {
      const index = items.findIndex(item => item.id === hash);
      if (index !== -1 && index !== current) {
        setCurrent(index);
      }
    }
  }, [location.hash, items, current]);

  if (items.length === 0) { 
    return null; 
  }
  
  return (
    <Steps current={current} onChange={onChange} direction="vertical">
      {items.map((item) => (
        <Steps.Step
          key={item.id}
          className="stepper-step-item"
          title={item.title}
          description={item.description}
        />
      ))}
    </Steps>
  );
}

/**
 * 检测是否为标题元素的辅助函数
 * MDX v3 兼容版本
 */
function isHeadingElement(element) {
  if (!React.isValidElement(element)) return false;
  
  // 方法1：检查元素类型是否为字符串且匹配标题模式
  if (typeof element.type === 'string' && /^h[1-6]$/.test(element.type)) {
    return true;
  }
  
  // 方法2：检查 props 中是否有标题相关的属性
  const props = element.props || {};
  
  // 检查是否有 id 属性（Docusaurus 通常为标题添加 id）
  if (props.id && typeof props.children === 'string') {
    return true;
  }
  
  // 方法3：检查 displayName 或其他可能的标识符
  if (element.type && element.type.displayName) {
    return /^h[1-6]$/i.test(element.type.displayName);
  }
  
  // 方法4：基于内容结构的启发式检测
  if (props.children && typeof props.children === 'string') {
    // 如果内容看起来像标题（例如：较短的文本，没有句号等）
    const content = props.children.toString().trim();
    if (content.length > 0 && content.length < 100 && !content.endsWith('.')) {
      // 进一步检查是否有其他标题特征
      return hasHeadingCharacteristics(element);
    }
  }
  
  return false;
}

/**
 * 检查元素是否具有标题特征
 */
function hasHeadingCharacteristics(element) {
  const props = element.props || {};
  
  // 检查是否有 id 属性（Docusaurus 自动为标题生成）
  if (props.id) return true;
  
  // 检查样式是否类似标题
  if (props.style && (props.style.fontWeight === 'bold' || props.style.fontSize)) {
    return true;
  }
  
  // 检查 className 是否包含标题相关类名
  if (props.className && typeof props.className === 'string') {
    return /heading|title|h[1-6]/i.test(props.className);
  }
  
  return false;
}