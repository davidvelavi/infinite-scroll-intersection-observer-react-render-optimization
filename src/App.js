import {useEffect, useState} from 'react';
import {getCharacters} from './services'
import Character from './components/Character';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import './App.css'


const  App= () => {
  const scrollingArea = document.getElementById('scrollingArea')
  const [characters, setCharacters] = useState([])
  const {observer, isIntersecting} = useIntersectionObserver({scrollingArea});
  const [page, setPage] = useState(1);

  useEffect(()=>{
    getCharacters(page).then( data => {
      setCharacters(characters => characters.concat(data))
    }).catch( error => console.log(error))
  }, [page])

  useEffect(()=>{
    if(observer && scrollingArea.lastChild){
      observer.observe(scrollingArea.lastChild);
    }
  }, [observer, scrollingArea, characters])

  useEffect(()=>{
    if(isIntersecting){
      setPage(page => page +=1);
    }
  }, [isIntersecting]);


  return (
    <div className="App" id='scrollingArea'>
      {
        characters && characters.map(({id, image, name}) => <Character  key={id} image={image} name={name}/>)
      }

    </div>
  );
}

export default App;
