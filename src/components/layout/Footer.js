import classes from './Footer.module.css';

function Footer(){
    return(
        <footer className={classes.footer}>
            <p>
                Creater with &#60;3 by: A. Bojović -  
                <a target="_blank" href="https://rs.linkedin.com/in/aleksandar-bojovi%C4%87-4a9783239?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F"> LinkedIn</a>
            </p>
        </footer>
    );
};

export default Footer;