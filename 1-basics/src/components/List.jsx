import { Button } from './Button';
import './List.css';
import ListItem from './ListItem';

const list = ['Pikachu', 'Bulbazaur', 'Charmander', 'Squirtle', 'charizard', 'Caterpie', 'Rattata', 'Magneton', 'Dewgong']

export const List = () => (
  <div className='container'>
    <div className='list'>
      
        {list.map((listItem) => (
          // <li key={listItem}>{listItem}</li>
          <div className='pokemon'>
            <ListItem key={listItem} text={listItem}/>
          </div>
        ))}
    </div>
    
    <Button text=' Do it'/>
  </div>
);
