import React from 'react';
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            filmshasLoaded: false,
            peoplehasLoaded: false
        };
    }

    async componentDidMount() {
        try {
            let r = await fetch("https://ghibliapi.herokuapp.com/films");
            let films = await r.json();
            let r2 = await fetch("https://ghibliapi.herokuapp.com/people");
            let people = await r2.json();
            this.setState({ films: films, people: people });
        } catch (error) {
            console.log(error);
        }

    }

    loadFilms(e) {
        return (
            this.setState({
                filmshasLoaded: true
            })
        )
    }

    loadPeople(e) {
        return (
            this.setState({
                peoplehasLoaded: true
            })
        )
    }


    render() {
        if (this.state.filmshasLoaded === true) {
            return (
                <>
                    <main className="container">
                        <section className="row justify-content-center">
                            <div>
                                <h1 className="">Must Watch Films</h1>
                            </div>
                            <div>
                                {this.state.films.map(film => {
                                    return (<FilmCard film={film} />)
                                })}
                            </div>
                        </section>
                    </main>
                </>
            )
        } else if (this.state.peoplehasLoaded === true) {
            return (
                <main className="container" >
                    <section className="row justify-content-center">
                        <div>
                            <h1 className="">People</h1>
                        </div>
                        <div>
                            {this.state.films.map(person => {
                                return (<PeopleCard person={person} />)
                            })}
                        </div>
                    </section>
                </main>
            )

        } else {
            return (
                <>
                    <button onClick={(e) => this.loadFilms(e)} className="btn btn-small btn-primary m-2">Load Films</button>
                    <button onClick={(e) => this.loadPeople(e)} className="btn btn-small btn-primary m-2">Load People</button>
                </>
            )
        }
    }
}

export default App;