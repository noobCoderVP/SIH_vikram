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
            caseType: "Civil",
            caseNumber: "1234",
            caseYear: "2021",
            caseDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, quam in ultricies aliquam, mi nisl tincidunt augue, sed lacinia velit nulla vitae massa. Nulla facilisi. Nullam auctor, diam sed aliquam lobortis, nunc elit sollicitudin libero, a ultricies sapien aug",
        },

        {
            caseType: "Criminal",
            caseNumber: "1234",
            caseYear: "2021",
            caseDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, quam in ultricies aliquam, mi nisl tincidunt augue, sed lacinia velit nulla vitae massa. Nulla facilisi. Nullam auctor, diam sed aliquam lobortis, nunc elit sollicitudin libero, a ultricies sapien aug",
        },

        {
            caseType: "Civil",
            caseNumber: "1234",
            caseYear: "2021",
            caseDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, quam in ultricies aliquam, mi nisl tincidunt augue, sed lacinia velit nulla vitae massa. Nulla facilisi. Nullam auctor, diam sed aliquam lobortis, nunc elit sollicitudin libero, a ultricies sapien aug",
        },

    ]
    return (
        <>
            <Header />
            <h1 className="bg-white p-2 text-black text-center placeholder:text-2xl font-semibold">Case: {name}</h1>
            <div className="bg-white">

                {
                    caseInfo.map((currentCase) => {
                        return (

                            < VerticalTimeline
                                lineColor="#9ca3af"
                            >
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"

                                    contentStyle={{
                                        background: "#d1d5db",
                                        color: "#f3f4f6",
                                    }}
                                    contentArrowStyle={{
                                        // borderRight: "7px solid #7f1d1d",
                                        borderRight: "7px solid rgb(33, 150, 243)",
                                    }}
                                    date="2011 - present"
                                    iconStyle={{
                                        background: "rgb(33, 150, 243)",
                                        color: "#7f1d1d",
                                    }}>
                                    <div className="text-black ">
                                        <h3 className="vertical-timeline-element-title">
                                            Stage 1
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            {currentCase.caseType}
                                        </h4>
                                        <p>{currentCase.caseNumber} | {currentCase.caseYear}</p>
                                    </div>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        )
                    })
                }

                <VerticalTimeline
                    lineColor="#9ca3af"
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"

                        contentStyle={{
                            background: "#d1d5db",
                            color: "#f3f4f6",
                        }}
                        contentArrowStyle={{
                            // borderRight: "7px solid #7f1d1d",
                            borderRight: "7px solid rgb(33, 150, 243)",
                        }}
                        date="2011 - present"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#7f1d1d",
                        }}>
                        <div className="text-black ">
                            <h3 className="vertical-timeline-element-title">
                                Stage 1
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Civil case
                            </h4>
                            <p>Vaibhav land dispute</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        date="2011 - present"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}>
                        <h3 className="vertical-timeline-element-title">
                            Stage 1
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Civil case
                        </h4>
                        <p>Vaibhav land dispute</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div >
        </>
    );
}

export default Case;
