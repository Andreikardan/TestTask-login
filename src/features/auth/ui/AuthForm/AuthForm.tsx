import styles from './AuthForm.module.css';
import { Form, Input, message, Space } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ISignUpData } from '@/entities/user/model';
import { inputsInitialState } from '@/shared/consts';
import { ROUTES } from '@/shared/enums/routes';
import { Button } from '@/shared/ui/Button';
import { UserValidator } from '@/entities/user/utils/UserValidator';
import { useAuthSubmit } from './useAuthSubmit';

export function AuthForm() {
  const location = useLocation();

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState<ISignUpData>(inputsInitialState);
  const [success, setSuccess] = useState<boolean>(false);
  const { isAuthorization } = useAuthSubmit();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  const submitHandler = (): void => {
    form
      .validateFields()
      .then((values: ISignUpData) => {
        const result = isAuthorization(values);
        if (location.pathname === ROUTES.REGISTRATION && result) {
          setSuccess(true);
        }
      })
      .catch(() => {
        message.error('Пожалуйста, заполните все поля корректно!');
      });
  };

  return (
    <section className={styles.container}>
      <Form form={form} layout="vertical" initialValues={inputs}>
        <Form.Item
          className={styles.formItem}
          label="Email"
          name="email"
          required
          hasFeedback
          rules={[
            {
              validator: (_, value) => UserValidator.email(_, value)
            }
          ]}>
          <Input name="email" onChange={onChangeHandler} placeholder="example@mail.com" />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          hasFeedback
          required
          rules={[{ validator: (_, value) => UserValidator.password(_, value) }]}>
          <Input.Password name="password" onChange={onChangeHandler} placeholder="********" />
        </Form.Item>

        {location.pathname === `${ROUTES.REGISTRATION}` && (
          <>
            <Form.Item
              name="confirmPassword"
              label="Подтвердите пароль"
              required
              hasFeedback
              dependencies={['password']}
              rules={[
                {
                  validator: (_, value) =>
                    UserValidator.confirmPassword(form.getFieldValue)(_, value)
                }
              ]}>
              <Input.Password
                name="confirmPassword"
                onChange={onChangeHandler}
                placeholder="********"
              />
            </Form.Item>
            <Form.Item
              className={styles.formItem}
              label="Ваше имя"
              name="username"
              required
              hasFeedback
              rules={[
                {
                  validator: (_, value) => UserValidator.username(_, value)
                }
              ]}>
              <Input name="username" onChange={onChangeHandler} placeholder="Киборг-убийца" />
            </Form.Item>
          </>
        )}
      </Form>

      <Form.Item className={styles.button}>
        <Space>
          <Button
            color="green"
            type="submit"
            text={location.pathname === `${ROUTES.REGISTRATION}` ? 'Регистрация' : 'Вход'}
            onClick={submitHandler}
          />
          {success && location.pathname === `${ROUTES.REGISTRATION}` && (
            <Button color="blue" text="Перейти к входу" onClick={() => navigate(ROUTES.LOGIN)} />
          )}
        </Space>
      </Form.Item>
    </section>
  );
}
