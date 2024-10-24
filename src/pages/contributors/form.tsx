import React, { useState } from 'react';
import css from './styles.module.scss'
import clsx from 'clsx'

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getIndexImage = (src) => {
  return src && require(`../../../assets/index/${src}`).default;
}

function IndexForm() {
  const tabList = [
    {
      title: 'Contributors',
      key: 'Contributors',
      active: true
    },
    // {
    //   title: 'Rangers',
    //   key: 'Rangers',
    // }, {
    //   title: 'Co-Creaters',
    //   key: 'Co-Creaters',
    // },
  ]
  const [tabActive, setTabActive] = useState('Contributors')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (loading) return
    setLoading(true)
    // 处理表单提交逻辑
    fetch('https://napi.seeedstudio.com/other/wiki/contributor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        console.log(res)
        if (+res.code === 0) {
            toast.success('Submit Success!');
            reset()
        }else{
          toast.success('Submit Error!');
        }
        setLoading(false)

      })
      .catch(error => {
        toast.success('Submit Error!');
        console.error('Error fetching data:', error);
      });
  };

  const tabClick = (item) => {
    setTabActive(item.key)
  }

  return (
    <div className={clsx(css.index_form, 'wrapper')}>
      <div className={css.index_tab}>
        <div className={css.tab_container}>
          {tabList.map((item, index) => {
            return (
              <div className={css.tab_item} onClick={() => { tabClick(item) }} key={index}>
                {item.key === tabActive && (
                  <img src={getIndexImage('formSelect.png')}></img>
                )}
                {item.title}
              </div>
            )
          })}
        </div>
        <div className={css.tab_tip}>
        We really appreciate if you can <a href="https://wiki.seeedstudio.com/Contributor/">contribute in any way</a>   the wiki platform, suggesting updates, fixing typos, accepting the assignments in demand, etc. Join us and get your reward!
        </div>
      </div>
      <form className={css.form_container} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.form_wrapper} >
          <div className={css.form_item}>
            <label htmlFor="first_name">First Name</label>
            <input {...register('first_name', { required: true })} />
            {errors.first_name && <span>This field is required</span>}
          </div>
          <div className={css.form_item}>
            <label htmlFor="last_name">Last Name</label>
            <input {...register('last_name', { required: true })} />
            {errors.last_name && <span>This field is required</span>}
          </div>
          <div className={css.form_item}>
            <label htmlFor="github">Github</label>
            <input {...register('github', { required: true })} />
            {errors.github && <span>This field is required</span>}
          </div>
          <div className={css.form_item}>
            <label htmlFor="email">Email</label>
            <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span>Please enter a valid email address</span>}
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default IndexForm;