import { CiHeart } from "react-icons/ci";
import './ProjectCard.css';

interface ProjectCardProps {
    title: string,
    city: string,
    uf: string,
    summary: string,
    approvedValue: string,
    capturedValue: string,
}

export default function ProjectCard(props: ProjectCardProps) {

    return (
        <div className="card">
            <p className="type">ROUANET</p>
            <h1>{props.title}</h1>
            <div className="location">
                <p>{props.city} · {props.uf}</p>
            </div>
            <div className="summary">
                <p>{props.summary}</p>
            </div>

            <div className="values">
                <div className="approved">
                    <p>Aprovado</p>
                    <p className="value-priced">{props.approvedValue}</p>
                </div>
                <div className="captured">
                    <p>Captado</p>
                    <p className="value-priced">{props.capturedValue}</p>
                </div>
            </div>

            <div className="buttons">
                <button>ADICIONAR</button>
                <div className="heart">
                    <CiHeart className="icon"></CiHeart>
                </div>
            </div>
        </div>
    )
}