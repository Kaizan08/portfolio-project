import React, { Component } from 'react';
import '../styles/App.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <h2>The Man - Michael Jordan</h2>
                <img src="./jordan.jpg" width="500" alt="greatness"/>
                <p>Michael Jeffrey Jordan (born February 17, 1963), also known by his initials, MJ, is an American 
                    retired professional basketball player, businessman, and principal owner and chairman of the 
                    Charlotte Hornets. Jordan played 15 seasons in the National Basketball Association (NBA) for 
                    the Chicago Bulls and Washington Wizards. His biography on the NBA website states: "By acclamation, 
                    Michael Jordan is the greatest basketball player of all time." Jordan was one of the most 
                    effectively marketed athletes of his generation and was considered instrumental in popularizing 
                    the NBA around the world in the 1980s and 1990s.</p>
                <p>Jordan played three seasons for coach Dean Smith at the University of North Carolina. As a freshman, 
                    he was a member of the Tar Heels' national championship team in 1982. Jordan joined the Bulls in 
                    1984 as the third overall draft pick. He quickly emerged as a league star, entertaining crowds with 
                    his prolific scoring. His leaping ability, demonstrated by performing slam dunks from the free throw 
                    line in slam dunk contests, earned him the nicknames Air Jordan and His Airness. He also gained a 
                    reputation for being one of the best defensive players in basketball. In 1991, he won his first NBA 
                    championship with the Bulls, and followed that achievement with titles in 1992 and 1993, securing a 
                    "three-peat". Although Jordan abruptly retired from basketball before the beginning of the 1993–94 
                    NBA season to pursue a new venture in minor league baseball, he returned to the Bulls in March 1995 
                    and led them to three additional championships in 1996, 1997, and 1998, as well as a then-record 72 
                    regular-season wins in the 1995–96 NBA season. Jordan retired for a second time in January 1999, but 
                    returned for two more NBA seasons from 2001 to 2003 as a member of the Wizards.</p>
            </div>
        );
    }
}

export default Portfolio;