import { useState } from "react";
import "./style.css";

export default function ClientsList () {
    return (
        <div className= "clients-box">
            <h4>Lista de clientes</h4>
            <div className= "column-list">
            <div className= "column-list-one">
                <dl>
                <dt>Leanne Graham</dt>
                <br/>
                <dt>Ervin Howell</dt>
                <br/>
                <dt>Clementine Bauch</dt>
                <br/>
                <dt>Patricia Lebsack</dt>
                <br/>
                <dt>Chelsey Dietrich</dt>
                </dl>
            </div>
            <div className= "column-list-two">
                <dl>
                <dt>Mrs. Dennis Schulist</dt>
                <br/>
                <dt>Kurtis Weissnat</dt>
                <br/>
                <dt>Nicholas Runolfsdottir V</dt>
                <br/>
                <dt>Glenna Reichert</dt>
                <br/>
                <dt>Clementina DuBuque</dt>
                </dl>
            </div>
            </div>
        </div>
    )
}