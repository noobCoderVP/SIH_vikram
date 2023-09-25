import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Header from "@/components/Header";

function Case() {
    return (
        <>
            <Header />
            <div className="bg-red-400">
                <VerticalTimeline>
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
            </div>
        </>
    );
}

export default Case;
