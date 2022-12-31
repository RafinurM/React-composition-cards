import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <Card url={'https://klike.net/uploads/posts/2020-03/1583743168_2.jpg'} name={'Lamborgini'} description={'Blue, fast and furious.'} />
      <Card url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj77_7Qaj03FzDpy6tms3TC0R966uXMnFVMA&usqp=CAU'} name={'BMW'} description={'Black style and classic. Choose for big city live.'} />
      <Card name={'New car'} description={'In progress'} />
    </>

  )
}

export default App;
