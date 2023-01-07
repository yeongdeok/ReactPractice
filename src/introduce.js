import React from "react";
import image from "./img/user_icon.png"
import image2 from "./img/phone_icon.png"
import image3 from "./img/email_icon.png"

function Introduce() {
    return (
        <>
            <div id="introduce">
                <table id="introduceTable">
                    <tr>
                        <th colSpan={2} align={"center"}>자기소개</th>
                    </tr>
                    <tr>
                        <td className="introduceImg" rowSpan={2} align={"center"}>
                            <img src={image} />
                        </td>
                        <td className="introduceName" align={"center"}>이름</td>
                    </tr>
                    <tr>
                        <td align={"center"}>서영덕</td>
                    </tr>
                    <tr>
                        <td className="introduceImg" rowSpan={2} align={"center"}>
                            <img src={image2} />
                        </td>
                        <td className="introduceName" align={"center"}>전화번호</td>
                    </tr>
                    <tr>
                        <td align={"center"}>010-7191-3896</td>
                    </tr>
                    <tr>
                        <td className="introduceImg" rowSpan={2} align={"center"}>
                            <img src={image3} />
                        </td>
                        <td className="introduceName" align={"center"}>이메일</td>
                    </tr>
                    <tr>
                        <td align={"center"}>dnrjsk123@naver.com</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Introduce;