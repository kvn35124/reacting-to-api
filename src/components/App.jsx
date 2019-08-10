import React from 'react';
import Card from './Card';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            hasLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films: films }))
            .catch(e => console.log(e));
    }

    loadFilms(e) {
        return (
            this.setState({
                hasLoaded: true
            })
        )
    }


    render() {
        if (this.state.hasLoaded === true) {
            return (
                <main className="container">
                    <section className="row justify-content-center">
                        <div>
                            <h1 className="">Must Watch Films</h1>
                        </div>
                        <div>
                            {this.state.films.map(film => {
                                return (<Card film={film} />)
                            })}
                        </div> 
                    </section>
                </main>
            )
        } else {
            return(
                <button onClick={(e) => this.loadFilms(e)} className="m-2 btn-primary btn-small">Load Films</button>
            )
        }
    }
}

export default App;