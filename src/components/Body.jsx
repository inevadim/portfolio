import styles from './Body.module.scss';
import { PanelMenu } from './panelMenu/PanelMenu';
import { Routes, Route } from 'react-router-dom';
import { ToDoList } from './toDoList/ToDoList';
import { Shop } from './shop/Shop';
import { Weather } from './weather/Weather';

export const Body = () => {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<PanelMenu />} />
        <Route path="/ToDo" element={<ToDoList />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="*" element={<PanelMenu />} />
      </Routes>
    </div>
  );
};
