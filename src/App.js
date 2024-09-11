import logo from './logo.svg';
import './App.css';
import FormUser from './component/FormUser';
import { Provider } from 'react-redux';
import store from './component/redux/store';


function App() {
  return (
    <Provider store={store}>
      <FormUser />
    </Provider>
  );
}

export default App;
