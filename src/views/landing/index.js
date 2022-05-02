function Landing(props){ {/*Props can be any word*/}
    return(
        <h1>
            Bienvenid{props.lastletter} {props.name}!
        </h1>    
    )
}

export default Landing;