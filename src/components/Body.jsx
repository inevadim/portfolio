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
        <Route path="portfolio/" element={<PanelMenu />} />
        <Route path="portfolio/ToDo" element={<ToDoList />} />
        <Route path="portfolio/Shop" element={<Shop />} />
        <Route path="portfolio/Weather" element={<Weather />} />
        <Route path="*" element={<PanelMenu />} />
      </Routes>
    </div>
  );
};
