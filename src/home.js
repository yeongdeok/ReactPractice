import React from "react";

function Home() {
    return (
        <>
            <div id="title">
                <div className="titleDiv">서영덕</div>
                <div className="titleDiv">개발자 포트폴리오</div>
                <div id="subMenu">
                    <table id="menuTable">
                        <th colSpan={3}><div id="subTitle">배우는 자세로, 맡은 바 최선을 다하는 서영덕입니다.</div></th>
                        <tr>
                            <td>소개</td>
                            <td>Skill</td>
                            <td>Project</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;