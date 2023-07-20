import React from "react";
import "../styles/footer.scss"

export default function Footer(){
    return (
       <footer>
            <div className="container-footer">
                <ul>
                    <li>Email</li>
                    <li>Fone</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Whatsapp</li>
                </ul>
                <div>
                    <span>©2023. ArtArtur/PetConnect. All rights reserved.</span>
                </div>
            </div>
       </footer>
    )
}