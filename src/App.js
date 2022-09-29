import Palette from './components/palette';
import Theme from './theme/Theme';
import ViewPort from './components/viewport';

function App() {
  return (
    /*<div className="App">
      <Theme>
        <Palette/>
      </Theme>
    </div>*/
    <div className="App">
      <Theme>
        <ViewPort/>
      </Theme>
    </div>
  );
}
export default App;