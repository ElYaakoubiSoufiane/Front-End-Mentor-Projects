import { Fragment } from "react"
import Landing from "./Landing"
import Features from "./Features";
import StayProductive from "./Stayproductive";
import Testimonials from "../Testimonials";
import GetStarted from "./GetStarted";

export default function Home() {
    return (
    <Fragment>
    <Landing/>
    <Features/>
    <StayProductive/>
    <Testimonials/>
    <GetStarted/>
    </Fragment>
    );
  }
  