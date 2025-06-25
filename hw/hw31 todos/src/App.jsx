
import './App.css'
import ItemsRenderField from './components/ItemsRenderField'
import InputForm from './components/InputForm'
import { styles } from './css path/customCssPath'
import Header from './components/Header'
import ModalEdit from './components/ModalEdit'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.bg}>
          <Header />
          <div className={styles.container}>
            <InputForm />
            <ItemsRenderField />
            <ModalEdit />
          </div>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
