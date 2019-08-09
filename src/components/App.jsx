import React from 'react';
import Card from './Card';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films: films }))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <main className="container">
                <section className="row">
                    {this.state.films.map(film => {
                        return (<Card film={film} />)
                    })
                    }
                </section>
            </main>

        )
    }
}

export default App;