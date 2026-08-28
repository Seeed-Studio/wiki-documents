import React from 'react';
import styles from './index.module.scss';
import { j601DemoList } from './config.auto';

type J601Demo = {
  name: string;
  description?: string;
  img: string;
  URL: string;
  category?: string;
};

export default function J601DemoGrid(): React.ReactElement | null {
  const demos = (j601DemoList || []) as J601Demo[];

  if (!demos.length) {
    return null;
  }

  return (
    <div className={styles.jetson_page}>
      <div className={styles.project_grid}>
        {demos.map((project) => (
          <a
            key={project.URL}
            href={project.URL}
            className={styles.project_card}
          >
            <div className={styles.project_image}>
              <img src={project.img} alt={project.name} loading="lazy" />
            </div>
            <div className={styles.project_content}>
              {project.category ? (
                <span className={styles.project_category}>{project.category.replace(/_/g, ' ')}</span>
              ) : null}
              <h3 className={styles.project_title}>{project.name}</h3>
              {project.description ? (
                <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.5, opacity: 0.9 }}>
                  {project.description}
                </p>
              ) : null}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
