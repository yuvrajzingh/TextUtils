import React  from 'react'
export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black', 
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#151546' : 'white'
    }
    let myStyle1 = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#1f1f7e' : 'white',
        border: '2px solid',
        borderColor:  props.mode === 'dark' ? 'white' : 'black',
    }
    
    
    return (
        <div className= "container my-5 p-4" style = {myStyle}>
            <h1>About Me</h1>
            
            <div className="accordion " id="accordionExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently and provides special features to help you write.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It is completely free to use and you can use it anywhere.
                        </div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It is browser Compatible and works with every browser.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
