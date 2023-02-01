import Head from "next/head";
import { Inter } from "@next/font/google";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Anderson Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10">
        <section className="min-h-screen">
          <Navbar />
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-red-400">Samuel Anderson</h2>
            <h3 className="text-2xl py-2">Full-Stack Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-200">
              Current student working part-time. Check out my projects to see
              what I&apos;m all about.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-blue-400">
            <AiFillLinkedin
              href="https://www.linkedin.com/in/samuel-anderson-a26905206/"
              target="_blank"
              className="cursor-pointer"
            />
            <AiFillTwitterCircle className="cursor-pointer" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl pt-10 text-center">Career.Path</h3>
            <p className="text-center text-md py-5 leading-8 text-gray-200">
              Current student working part-time. Check out my projects to see
              what I&apos;m all about.
            </p>
          </div>
          <div>
            <Timeline position="alternate">

              <TimelineItem>
              <TimelineOppositeContent color="#139E8F" variant="h6">F-2020</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Computer Science Start</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="grey"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
              <TimelineOppositeContent color="#139E8F" variant="h6">F-2021</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Pokemon WPF Application</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="grey"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
              <TimelineOppositeContent color="#139E8F" variant="h6">W-2021</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>DND Website</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="grey"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
              <TimelineOppositeContent color="#139E8F" variant="h6">F-2022</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Pokemon Tower Defense</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="grey"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
              <TimelineOppositeContent color="#139E8F" variant="h6">W-2023</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="success"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Internship @ CAE</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="grey"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning" variant="outlined" />
                </TimelineSeparator>
                <TimelineContent>Graduate Computer Science</TimelineContent>
              </TimelineItem>

            </Timeline>
          </div>
        </section>
      </main>
    </>
  );
}
