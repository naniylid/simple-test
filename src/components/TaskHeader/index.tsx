import React from 'react';
import './TaskHeader.css';
import { Modal } from '../Modal';

interface TaskHeaderProps {
    scrolled: boolean;
}
export const TaskHeader: React.FC<TaskHeaderProps> = ({ scrolled }) => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    const toggleModal = (state: boolean) => {
        setIsModalOpen(state);
    };

    return (
        <>
            <header className={`task-header ${scrolled ? 'shadow' : ''}`}>
                <div className='task-header-left'>
                    <h3>Подзадача</h3>
                    <button className='task-button' onClick={() => toggleModal(true)}>
                        Создать
                    </button>
                </div>
                <div className='task-header-right'>
                    <button className='task-button task-primary-button'>Сохранить</button>
                    <button className='task-button'>Сохранить и выйти</button>
                </div>
            </header>

            <Modal isOpen={isModalOpen} onClose={() => toggleModal(false)}></Modal>
        </>
    );
};
