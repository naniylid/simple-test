import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import TaskForm from './components/TaskForm';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(true);
    const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Header />

            {windowWidth > 767 ? (
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            ) : null}
            <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <TaskForm />
            </main>
        </>
    );
}

export default App;
