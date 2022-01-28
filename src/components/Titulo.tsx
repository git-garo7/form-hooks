export default function Titulo(props) {
    return(
        <div className="flex flex-col justify-center">
            <h1 className="px-7 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border-3 border-green-800"/>
        </div>
    )
}