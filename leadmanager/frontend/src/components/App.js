import React from "react"
import ReactDOM from "react-dom"

const MyContext = React.createContext()

const MyProvider = props => {
    return (
        <MyContext.Provider value={{
            name: "Joe",
            age: 31
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const Person = () => (
    <MyContext.Consumer>
        {context => (
            <>
                <p>Name: {context.name}</p>
                <p>Age: {context.age}</p>
            </>
        )}
    </MyContext.Consumer>
)

const Group = () => <Person />

const App = () => (
    <MyProvider>
        <h1>React App</h1>
        <Group />
    </MyProvider>
)

ReactDOM.render(<App />, document.getElementById("app"))
