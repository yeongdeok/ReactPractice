import React from "react";
import Java from "./img/java.png"
import CSS from "./img/CSS.png"
import HTML from "./img/HTML.png"
import JavaScript from "./img/javascript.png"
import JQuery from "./img/jQuery.gif"
import MongoDB from "./img/MongoDB.png"
import OracleDB from "./img/OracleDB.png"
import Python from "./img/Python.png"
import ReactImg from "./img/React.png"
import Spring from "./img/Spring.png"
import Nodejs from "./img/nodejs.png"

function Skill() {
    return (
        <>
            <div id="skill">
                <table id="skillTable">
                    <tr>
                        <th colSpan={4}>Skill</th>
                    </tr>
                    <tr>
                        <td align="center"><div className="imgBackground"><img src={Java} /></div></td>
                        <td align="center"><div className="imgBackground"><img src={CSS} /></div></td>
                        <td align="center"><div className="imgBackground"><img src={HTML} /></div></td>
                        <td align="center"><div className="imgBackground"><img src={JavaScript} /></div></td>
                    </tr>
                    <tr>
                        <td align="center"><div className="imgBackground"><img src={JQuery} /></div></td>
                        <td align="center"><div className="imgBackground"><img src={MongoDB} /></div></td>
                        <td align="center"><div className="imgBackground"><img src={OracleDB} /></div></td>
                        <td align="center"><div className="imgBackground"><img src={Python} /></div></td>
                    </tr>
                    <tr>
                        <td align="center"><div className="imgBackground"><img src={ReactImg} /></div></td>
                        <td align="center"><div className="imgBackground"><img src={Spring} /></div></td>
                        <td align="center"><div className="imgBackground"><img src={Nodejs} /></div></td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Skill;