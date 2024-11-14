import React from 'react';
import { TaskHeader } from '../TaskHeader';
import InputField from '../InputField';

import './TaskForm.css';
import { SelectedInput } from '../SelectedInput';
import { MultiSelect } from '../MultiSelect';

const TaskForm: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='task-form'>
            <TaskHeader scrolled={isScrolled} />

            <div className='form-content'>
                <h2 className='from-content-title'>
                    STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля
                    остаются редактируемыми для агента если он Caller
                </h2>
                <div className='form-content-top'>
                    <div className='form-content-wrap form-content-top-left'>
                        <InputField
                            label='Тема'
                            value='На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'
                            required={true}
                        />
                        <InputField label='Описание' value='' required={false} />
                        <InputField
                            label='Рабочие заметки'
                            value='Проверить ACL id=172830402014193655'
                            required={true}
                        />
                        <SelectedInput
                            label='Ответственный'
                            value='Константин Константинопольский'
                        />
                    </div>
                    <div className='form-content-wrap  form-content-top-right'>
                        <InputField label='Статус' value='Новая' required={false} />
                        <InputField
                            label='Продукт'
                            value='Paltform'
                            required={false}
                            search={true}
                        />
                        <InputField label='Приоритет' value='Средний' required={false} />
                        <SelectedInput label='Группа' value='Support Group' />
                    </div>
                </div>
                <InputField label='Комментарии' value='' required={false} />
                <MultiSelect />
                <div className='form-footer'>
                    <div className='form-content-wrap  form-footer-left'>
                        <InputField
                            label='Когда открыто'
                            value=''
                            required={false}
                            calendar={true}
                        />
                        <SelectedInput label='Кем открыто' value='Андрей Пивоваров' />
                    </div>
                    <div className='form-content-wrap  form-footer-right'>
                        <InputField
                            label='Когда создано'
                            value='22.10.2024'
                            required={false}
                            calendar={true}
                        />
                        <SelectedInput label='Кем создано' value='Андрей Пивоваров' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;
