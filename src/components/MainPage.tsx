// import { useState } from "react";
import Document from "../Document"
import './MainPage.scss'
import { Accordion, AccordionDetails, AccordionSummary} from "@mui/material";

interface Props {
    items: Document[];
}

const MainPage = ({ items } : Props) => {
    // const [gap, setGap] = useState(0)

    // const handleChange = (newValue) => {
    //     if (newValue !== null && newValue >= 0) {
    //         setGap(newValue);
    //     }
    //     else {
    //         setGap(0)
    //     }
    // }
    return (
        <main className="Container">
            {/* <div className="GapSlider">
                <Slider defaultValue={gap} 
                sx={{ width: 400, color: 'black' }} 
                onChange={handleChange} />
            </div> */}
            <ul className="Stack">
                {items.map((item, index) => (
                    // <Accordion className={`documentAccordion ${items.indexOf(item) % 2 ? 'documentAccordionOdd' : 'documentAccordionEven'}`}>
                    <Accordion className={`documentAccordion`} 
                    sx={index % 2 ? { backgroundColor: 'rgb(108, 106, 255)', color: 'black' } : 
                    { backgroundColor: 'black', color: 'rgb(141, 137, 179)' }}>
                        <AccordionSummary>{item.title}</AccordionSummary>
                        <AccordionDetails className="documentDetails">{item.text}</AccordionDetails>
                    </Accordion>
                ))}
            </ul>
        </main>
    )
}

export default MainPage