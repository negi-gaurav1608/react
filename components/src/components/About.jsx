import React from 'react'
import { slides } from "../data/CrouselData.json"
import Cards from "./Cards"
import Slider from './Slider'
function About() {
    return (
        <div >
            <div >
                <Cards
                    data="Tjshfksakjva scvfkhfcv vshdihs dgvihewiau sdvhiubviuawsbviuhvfbvdi oh vdihoivh ibiuc hiucvsa buiv ahgiuv biuva shiuva h buishcviowhsavb iuaeg hfeioarehgy vi;sfvhi"
                    user="Gaurav Negi"
                    position="Student"
                    img="https://images.pexels.com/photos/20195753/pexels-photo-20195753/free-photo-of-new-york-city-at-night-from-the-top-of-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            </div>

            <div >
                <Cards
                    data="ghvsbkjfcvhiubfcvikwhgv shedi wefghyi saedgufiu iuhgasfiuhoa ifeifwsagviufwh fei vdesfghi"
                    user="Abhinav Rwt"
                    position="Student"
                    img="https://images.pexels.com/photos/20195753/pexels-photo-20195753/free-photo-of-new-york-city-at-night-from-the-top-of-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            </div>

            <div>
                <Cards
                    data="fhwhbvh feiufgawif iofhgiuwFHGIUA VHI FVGIUFEV GFVSIU CFGSI VIFEA FGIUaFIFSIUF GFIGUGFUI GIUVCDFGIUVG GV GVFCG "
                    user="Shubham"
                    position="Student"
                    img="https://images.pexels.com/photos/20195753/pexels-photo-20195753/free-photo-of-new-york-city-at-night-from-the-top-of-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            </div>
            <div>
                <Slider data={slides}/>
            </div>
        </div>
        
        
    )
}

export default About
