 import './nav.scss';

 export default function Nav({title}){
    return(
<nav className='nav'>
<p className='nav__title'>{title}</p>
</nav>
    )
 }