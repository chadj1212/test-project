
import './App.css'

function App() {// component
  return (
    //fragment
    <> 
    <Text display="hi there"/>
    <Text display="my brotha"/>
    </>
  )
}
function Text ({display}){ //function Text ({display}){ this is a prop
  return( 
    <div>
     <p>{display}</p>
    </div>
  );
}

export default App
