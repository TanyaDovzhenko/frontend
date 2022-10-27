import './Global.scss'

function App() {
  // console
  //   .log(
  //     113
  //     +
  //     'sdfsd')
  return (
    <div className='app'>
      <Test prop={false} />
    </div>
  );
}

export default App;

interface test {
  prop: boolean
}

function Test({ prop }: test) {
  console
    .log('sdfsd')
  return (
    <div className='app'>
    </div>
  );
}