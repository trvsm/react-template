 import './nav.scss';

 const Nav=({props: {site_title, link_one, link_two, link_three, link_four}})=>{
    return(
<nav className='nav'>
<p className='nav__title'>{site_title}</p>
<ul className="nav__links">
    <li className="nav__link">{link_one || ''}</li>
    <li className="nav__link">{link_two || ''}</li>
    <li className="nav__link">{link_three || ''}</li>
    <li className="nav__link">{link_four || ''}</li>
</ul>
</nav>
    )
 }
 export default Nav