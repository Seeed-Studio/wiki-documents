import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import docList from '../define/IAGDocs.js'
import styles from '../css/indexIAG.module.scss'

function DocContainer() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <div className={styles.container}>
      {docList.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <div className={styles.item_container}>
              <div
                className={styles.header}
                style={{ backgroundColor: item.background }}
              >
                {item.label}
              </div>
              <div className={styles.wrapper}>
                {item.childrens.map((childItem, childIndex) => {
                  return (
                    <div
                      key={childIndex}
                      className={clsx(
                        styles.child_item,
                        item.childFull ? styles.full : '',
                      )}
                    >
                      <a href={childItem.href} target="_blank">
                        {childItem.label}
                        <div className={styles.right_img}></div>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.main_container}>
        <DocContainer></DocContainer>
      </div>
    </Layout>
  )
}
