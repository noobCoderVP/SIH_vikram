import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Header from "@/components/Header";

function Case() {
    const name = "Vaibhav v Govt. of India";
    const caseInfo = [
        {
            casePhase: "Initial Phase",
            caseType: "Civil",
            caseNumber: "1234",
            caseYear: "2021",
            active: false,
            caseDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, quam in ultricies aliquam, mi nisl tincidunt augue, sed lacinia velit nulla vitae massa. Nulla facilisi. Nullam auctor, diam sed aliquam lobortis, nunc elit sollicitudin libero, a ultricies sapien aug",
        },

        {
            casePhase: "Trial Phase",
            caseType: "Civil",
            caseNumber: "1234",
            caseYear: "2021",
            active: false,
            caseDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, quam in ultricies aliquam, mi nisl tincidunt augue, sed lacinia velit nulla vitae massa. Nulla facilisi. Nullam auctor, diam sed aliquam lobortis, nunc elit sollicitudin libero, a ultricies sapien aug",
        },

        {
            casePhase: "Judgement Phase",
            caseType: "Civil",
            caseNumber: "1234",
            caseYear: "2021",
            active: true,
            caseDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, quam in ultricies aliquam, mi nisl tincidunt augue, sed lacinia velit nulla vitae massa. Nulla facilisi. Nullam auctor, diam sed aliquam lobortis, nunc elit sollicitudin libero, a ultricies sapien aug",
        },

    ]
    return (
        <>
            <Header />
            <h1 className="bg-white p-2 text-black text-center placeholder:text-2xl font-semibold">Case: {name}</h1>
            <div className="bg-white">
                {
                    caseInfo.map((currentCase, index) => {
                        const contentStyle = currentCase.active
                            ? { 
                                background: 'linear-gradient(90deg, rgba(85,180,221,1) 0%, rgba(110,110,238,1) 35%, rgba(44,132,255,1) 100%)',
                                color: '#f3f4f6',
                            } : {
                                background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(171,171,186,1) 35%, rgba(106,106,110,1) 100%)',
                                color: '#f3f4f6',
                            }
                             
                        return (

                            < VerticalTimeline
                                lineColor="#9ca3af"
                            >
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    position={index % 2 == 0 ? "left" : "right"}
                                    contentStyle={contentStyle}
                                    contentArrowStyle={{
                                        // borderRight: "7px solid #7f1d1d",
                                        borderRight: "7px solid rgba(106,106,110,1)",
                                    }}
                                    date="2011 - present"
                                    iconStyle={contentStyle}
                                    >

                                    <div className="text-black ">
                                        <h3 className="vertical-timeline-element-title font-semibold text-lg">
                                            {currentCase.casePhase}
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle text-md">
                                            {currentCase.caseType}
                                        </h4>
                                        <p className="text-sm">{currentCase.caseNumber} | {currentCase.caseYear}</p>
                                    </div>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        )
                    })
                }
            </div >
        </>
    );
}

export default Case;
