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
    const overlayRef = React.useRef<HTMLDivElement | null>(null);
    const [translateY, setTranslateY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            if (overlayRef.current) {
                const scrollPosition = overlayRef.current.scrollTop;
                const maxTranslateY = -100;
                const calculatedTranslateY = Math.max(maxTranslateY, -scrollPosition / 2);
                setTranslateY(calculatedTranslateY);
            }
        };

        const overlayElement = overlayRef.current;
        if (overlayElement) {
            overlayElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (overlayElement) {
                overlayElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

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
            <div style={{ transform: `translateY(${translateY}px)` }} className='modal-content'>
                <div className='modal-header'>
                    <div className='task-header-left'>
                        <h3>Подзадача</h3>
                    </div>
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
                    <InputField label='Продукт' value='Paltform' required={false} search={true} />
                    <InputField
                        label='Рабочие заметки'
                        value='Проверить ACL id=172830402014193655'
                        required={true}
                    />
                    <InputField label='Приоритет' value='Средний' required={false} />
                    <SelectedInput label='Ответственный' value='Константин Константинопольский' />
                    <SelectedInput label='Группа' value='Support Group' />
                    <InputField label='Комментарии' value='' required={false} />
                    <MultiSelect />
                    <InputField label='Когда открыто' value='' required={false} calendar={true} />
                    <InputField
                        label='Когда создано'
                        value='22.10.2024'
                        required={false}
                        calendar={true}
                    />
                    <SelectedInput label='Кем открыто' value='Андрей Пивоваров' />
                    <SelectedInput label='Кем создано' value='Андрей Пивоваров' />
                </div>
            </div>
        </div>,
        document.getElementById('root')!,
    );
};
