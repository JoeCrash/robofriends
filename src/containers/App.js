import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

const App = ()=>{
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    }, []);
    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    };

    const filteredRobots = robots.filter((robot) => {
        const searchValue = searchField.toLowerCase();
        return robot.name.toLowerCase().includes(searchValue);
    });

    return !robots.length ? (
        <h1 className="tc">Loading</h1>
    ) : (
        <>
        <div className="tc">
            <h1 className="f2 ">Robofriends</h1>
            <button onClick={()=> setCount(count + 1)}>Click me!</button>
            <Searchbox searchChange={onSearchChange} />
        </div>
        <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots} />
            </ErrorBoundary>
        </Scroll>
        </>
    );
}


// class App extends Component {
//     constructor(){
//         super();
//         this.state = {
//             robots: [],
//             searchField: ''
//         };
//     }
//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => this.setState({robots: users}));
//     }
    
//     onSearchChange = (e) => {
//         this.setState({'searchField': e.target.value});
//     }
//     render(){
//         const {robots, searchField} = this.state;
//         const filteredRobots = robots.filter(robot => {
//             const searchValue = searchField.toLowerCase();
//             return robot.name.toLowerCase().includes(searchValue);
//         });

//         return !robots.length ?
//             <h1 className='tc'>Loading</h1>
//         :
//         (<>
//             <div className='tc'>
//                 <h1 className='f2 '>Robofriends</h1>
//                 <Searchbox searchChange={this.onSearchChange}/>
//             </div>
//             <Scroll>
//                 <ErrorBoundary>
//                     <CardList robots={filteredRobots} />
//                 </ErrorBoundary>
//             </Scroll>
//         </>);
//     }
    
// }

export default App;