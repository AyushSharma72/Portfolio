import React from "react";
import "./PortFolio.css";
import { HiExternalLink } from "react-icons/hi";
import Table from 'react-bootstrap/Table';
function Assignment() {
    return (
        <div className="Assignment">
          
                
                <h1 className="Color">CONM <span className="Color2">Assignment</span></h1>
                <Table striped bordered hover variant="light" className="custom-table1">
                    <thead>
                        <tr>
                            <th>Sr_no  </th>
                            <th>Internal test</th>
                            <th>Video/Playlist link</th>
                            <th>Date of Creation</th>   

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1<sup>st</sup> Internal Set A</td>
                            <td>
                                <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYY71LPlBJuWCxoIJ-oT-_Nd&feature=shared">Youtube Videos link
                                    <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                            </td>
                            <td>7 Dec 2023</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1<sup>st</sup> Internal Set B</td>
                            <td> <a href="https://youtu.be/D07IlQaIod8?feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                            </td>
                            <td>4 Dec 2023</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>1<sup>st</sup> Internal Set C</td>
                            <td> <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYZmVfTzbg-oYGvDUd69_V0A&feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a></td>
                            <td>5 Dec 2023</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>1<sup>st</sup> Internal Set D</td>
                            <td><a href="https://youtube.com/playlist?list=PLJKCTCcDfUYbWuT_pCIVN9lpzPztlydMR&feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a></td>
                            <td>5 Dec 2023</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2<sup>nd</sup> Internal (5 questions) </td>
                            <td><a href="https://youtube.com/playlist?list=PLJKCTCcDfUYYLD385GidWRT7KpXZB1D7G&feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a></td>
                            <td>5 Dec 2023</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>3<sup>rd</sup> Internal(4 questions) </td>
                            <td><a href="https://youtube.com/playlist?list=PLJKCTCcDfUYZGgYDzKDkv36lBRR7rJk3I&feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a></td>
                            <td>5 Dec 2023</td>
                        </tr>
                    </tbody>
                </Table>

                <Table striped bordered hover variant="light" className="custom-table2">
                    <thead>
                        <tr>
                           
                            <th>Internal</th>
                            <th>Video/Playlist link</th>
                            <th>Date of Creation</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                         
                            <td>1<sup>st</sup> Internal Set A</td>
                            <td>
                                <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYY71LPlBJuWCxoIJ-oT-_Nd&feature=shared">Youtube Videos link
                                    <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                            </td>
                            <td>7 Dec 2023</td>
                        </tr>
                        <tr>
                            
                            <td>1<sup>st</sup> Internal Set B</td>
                            <td> <a href="https://youtu.be/D07IlQaIod8?feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                            </td>
                            <td>4 Dec 2023</td>
                        </tr>
                        <tr>
                          
                            <td>1<sup>st</sup> Internal Set C</td>
                            <td> <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYZmVfTzbg-oYGvDUd69_V0A&feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a></td>
                            <td>5 Dec 2023</td>
                        </tr>
                        <tr>
                         
                            <td>1<sup>st</sup> Internal Set D</td>
                            <td><a href="https://youtube.com/playlist?list=PLJKCTCcDfUYbWuT_pCIVN9lpzPztlydMR&feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a></td>
                            <td>5 Dec 2023</td>
                        </tr>
                        <tr>
                           
                            <td>2<sup>nd</sup> Internal </td>
                            <td><a href="https://youtube.com/playlist?list=PLJKCTCcDfUYYLD385GidWRT7KpXZB1D7G&feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a></td>
                            <td>5 Dec 2023</td>
                        </tr>
                        <tr>
                           
                            <td>3<sup>rd</sup> Internal </td>
                            <td><a href="https://youtube.com/playlist?list=PLJKCTCcDfUYZGgYDzKDkv36lBRR7rJk3I&feature=shared">Youtube Videos link
                                <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a></td>
                            <td>5 Dec 2023</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
       
    )
}
export default Assignment;
