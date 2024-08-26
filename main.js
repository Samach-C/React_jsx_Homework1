
function CoverImage() {
    return(
        <img width='100%' src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
    )
}

function Name() {
    return(
        <div>
        <h1>Julienne Moore</h1>
        <p>Julienne.moore@company.com</p>
        </div>
    )
}

function Social() {

const data = [
    {
        value: 25,
        text: 'posts'
    },
    {
        value: 350,
        text: 'Following'
    },
    {
        value: '1.5k',
        text: 'Followers'
    }
    
]

const st4 = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '48px'
}

    return (
    <div style={st4}>
        { data.map( item => (
          <div>
             <p>{item.value}</p>
             <p>{item.text}</p> 
          </div>
        ))}
    </div>
    )
}


function App() {
    const st1 = {
        border: '1px solid silver',
        borderRadius: '16px 16px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // width: '100vw',
        height: '440px' 
 
    }

    const st2 = {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
        overflow: 'hidden'
        
    }

    const st3 = {
    margin: '24px 0px',
    fontSize: '24px',
    textAlign: 'center'
    }

    return(
        <div style={st1}>

            <div style={st2}>
            <CoverImage />
            </div>

            <div style={st3}>
               <Name />
            </div>
            
            <Social />
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)