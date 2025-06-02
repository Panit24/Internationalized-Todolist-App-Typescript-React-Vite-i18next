import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleLang = () => {
    const nextLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(nextLang);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw'
    }}>
     <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>{t('Todolist App')}</h2>
      <input
        style={{ padding: "7px" }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={t('placeholder')}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />
      <button style={{ marginLeft: "10px" }} onClick={addTask}>{t('add')}</button>

      <ul style={{ marginTop: '10px', marginLeft: "5px" }}>
        {(todos || []).map((todo:string, i:number) => (
          <li key={i} style={{ margin: '7px' } }>
            {todo}
            <button onClick={() => deleteTask(i)} style={{ marginLeft: '10px' }}>
              {t('delete')}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={toggleLang} style={{ marginTop: '20px' }}>
        {t('switchLanguage')}
      </button>
     </div>
    </div>
  );
};

export default App;
