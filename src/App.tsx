import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import TaskForm from './components/TaskForm';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Header openSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <TaskForm />
            </main>
        </>
    );
}

export default App;
