import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import InputField from '../InputField';
import { SelectedInput } from '../SelectedInput';
import { MultiSelect } from '../MultiSelect';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    React.useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content'>
                <div className='modal-container'>
                    <div className='modal-header'>
                        <div className='task-header-left'>
                            <h3>Подзадача</h3>
                        </div>
                        {window.innerWidth < 768 ? (
                            <button className='modal-close'>
                                <svg
                                    aria-hidden='true'
                                    aria-label='Закрыть'
                                    width='14'
                                    height='14'
                                    viewBox='0 0 14 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M13.3877 1.95915C13.7596 1.58722 13.7596 0.984207 13.3877 0.612279C13.0158 0.240351 12.4128 0.240351 12.0408 0.612279L7 5.65313L1.95915 0.612279C1.58722 0.240351 0.984207 0.240351 0.612279 0.612279C0.240351 0.984207 0.240351 1.58722 0.612279 1.95915L5.65313 7L0.612279 12.0408C0.240351 12.4128 0.240351 13.0158 0.612279 13.3877C0.984207 13.7596 1.58722 13.7596 1.95915 13.3877L7 8.34687L12.0408 13.3877C12.4128 13.7596 13.0158 13.7596 13.3877 13.3877C13.7596 13.0158 13.7596 12.4128 13.3877 12.0408L8.34687 7L13.3877 1.95915Z'
                                        fill='#2E3238'
                                    />
                                </svg>
                            </button>
                        ) : null}
                        <div className='task-header-right'>
                            <button className='task-button task-primary-button'>Сохранить</button>
                            <button onClick={onClose} className='task-button'>
                                Отменить
                            </button>
                        </div>
                    </div>
                    <h2 className='from-content-title'>Новая запись</h2>
                    <div className='modal-content-wrap'>
                        <InputField
                            label='Тема'
                            value='На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'
                            required={true}
                        />
                        <InputField label='Статус' value='Новая' required={false} />
                        <InputField label='Описание' value='' required={false} />
                        <InputField
                            label='Продукт'
                            value='Paltform'
                            required={false}
                            search={true}
                        />
                        <InputField
                            label='Рабочие заметки'
                            value='Проверить ACL id=172830402014193655'
                            required={true}
                        />
                        <InputField label='Приоритет' value='Средний' required={false} />
                        <SelectedInput
                            label='Ответственный'
                            value='Константин Константинопольский'
                        />
                        <SelectedInput label='Группа' value='Support Group' />
                        <InputField label='Комментарии' value='' required={false} />
                        <MultiSelect />
                        <InputField
                            label='Когда открыто'
                            value=''
                            required={false}
                            calendar={true}
                        />
                        <InputField
                            label='Когда создано'
                            value='22.10.2024'
                            required={false}
                            calendar={true}
                        />
                        <SelectedInput label='Кем открыто' value='Андрей Пивоваров' />
                        <SelectedInput label='Кем создано' value='Андрей Пивоваров' />
                    </div>
                    {window.innerWidth < 768 ? (
                        <div className='modal-button'>
                            <button className='task-button task-primary-button'>Сохранить</button>
                            <button onClick={onClose} className='task-button'>
                                Отменить
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>,
        document.getElementById('root')!,
    );
};
