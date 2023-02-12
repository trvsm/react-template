import './home.scss';

import Hero from "../../components/Hero/Hero";

export default function Home ({tag_line}){
    return(
        <div className="home">
        <Hero tag_line={tag_line}/>
        </div>

    )
}