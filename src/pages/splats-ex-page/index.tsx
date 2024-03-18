import { useParams } from "react-router-dom"

export default function SplatsExPage() {
    const {"*": splat } = useParams();

    return (
        <div data-page="splats-ex-page">
            <h1>Splats Example</h1>
            <p>splat : {splat}</p>
        </div>
    )
}