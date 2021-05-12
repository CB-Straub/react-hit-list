import React from 'react'
import HitList from './HitList';
import axios from 'axios';



export class ListRender extends React.Component {
    constructor(){
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json') .then(response => {
            const data = response.data;
            this.setState({list : data})
        }   
         
    )  
        

}
    render() {
        return (
            <div className="container">
                {this.state.list.map(person => {
                    return <HitList 
                        name={person.name} 
                        image={person.image}/>
                 })
            }
                
            </div>
        )
    }
}

export default ListRender
