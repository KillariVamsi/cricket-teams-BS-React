export function Card(props){
    return(
        <div className="text-center" id={props.id}>
            <img id="image" src={props.Img}/>
            <p className="mt-3"><b> {props.Name} </b></p> 
        </div>
    )
}