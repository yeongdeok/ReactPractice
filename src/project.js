import React from "react";
import CompanyHome from "./img/CompanyHome.png"
import Left from "./img/left_icon.png"
import Right from "./img/right_icon.png"

function Project() {

    return (
        <>
            <div id="project">
                <table id="projectTable">
                    <tr>
                        <th>Project</th>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="projectOne">
                                <tr>
                                    <td className="projectImgArea" align="center" rowSpan={3}>
                                        <table className="projectImgTable">
                                            <tr>
                                                <td className="projectImgBoxLeft" align="center"><img src={Left} /></td>
                                                <td align="center">
                                                    <div className="projectImgBox">
                                                         <img src={CompanyHome} />
                                                    </div>
                                                </td>
                                                <td className="projectImgBoxRight" align="center"><img src={Right} /></td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td className="projectName" align="center">
                                        Sollind
                                    </td>
                                </tr>
                                <tr>
                                    <td className="projectSubName" align="center">
                                        프로젝트 소제목
                                    </td>
                                </tr>
                                <tr>
                                    <td className="projectExplanation" align="center">
                                        설명
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Project;