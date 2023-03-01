'use client';
import React from 'react';
import { Inter } from "@next/font/google";
import Link from "next/link";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGift, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

import Navbar from "@/components/navbar";
import styles from "../src/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="px-10 no-scrollbar">
        <section className="min-h-screen no-scrollbar">
          <div className="text-center p-5">
            <h2 className="text-6xl text-center py-2 text-red-400 font-bold">Samuel Anderson</h2>
            <h3 className="text-3xl font-medium py-2">Full-Stack Software Developer</h3>
            <p className="text-xl font-medium py-5 leading-8 text-gray-200">
              Current student working part-time. Check out my <Link href="/projects" className="underline hover:no-underline hover:text-red-400">projects</Link> to see
              what I&apos;m all about.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-blue-400">
            <Link
              href="https://www.linkedin.com/in/samuel-anderson-a26905206/"
              target="_blank"
            >
              <AiFillLinkedin className={styles.clickableIcon} />
            </Link>

            <Link href="https://twitter.com" target="_blank">
              <AiFillTwitterCircle className={styles.clickableIcon} />
            </Link>
            <Link href="https://github.com/SAnderson-96" target="_blank">
              <AiFillGithub className={styles.clickableIcon}/>
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-cyan-600 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image alt="" src={deved} fill={true} style={{objectFit: "cover"}} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-5xl pt-10 font-medium text-center">Career.Path</h3>
            <p className="text-center text-lg font-medium py-5 leading-8 text-gray-200">
              Current student working part-time. Check out my projects to see
              what I&apos;m all about.
            </p>
          </div>
          <div>
            <Timeline position="alternate">
              <TimelineItem>
                  <TimelineOppositeContent className="text-center md:text-end" color="#139E8F" variant="h6">
                  Fall 2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                  <TimelineContent className="text-center md:text-justify">Computer Science Start</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="grey" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineOppositeContent className="text-center md:text-end" color="#139E8F" variant="h6">
                  F-2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                  <TimelineContent className="text-center md:text-justify"><Link className={styles.linkText + " hover:text-cyan-500"} href="/pokemon-wpf">Pokemon WPF Application</Link></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="grey" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineOppositeContent className="text-center md:text-end" color="#139E8F" variant="h6">
                  W-2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                  <TimelineContent className="text-center md:text-justify"><Link className={styles.linkText + " hover:text-cyan-500"} href="/dnd">DND Website</Link></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="grey" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineOppositeContent className="text-center md:text-end" color="#139E8F" variant="h6">
                  F-2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                  <TimelineContent className="text-center md:text-justify"><Link className={styles.linkText + " hover:text-cyan-500"} href="/">Pokemon Tower Defense</Link></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="grey" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>


              <TimelineItem>
                  <TimelineOppositeContent className="text-center md:text-end" color="#139E8F" variant="h6">
                  F-2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                  <TimelineContent className="text-center md:text-justify"><Link className={styles.linkText + " hover:text-cyan-500"} href="/">Android Farming Application</Link></TimelineContent>
              </TimelineItem>



              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="grey" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineOppositeContent className="text-center md:text-end" color="#139E8F" variant="h6">
                  W-2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                  <TimelineContent className="text-center md:text-justify"><Link className={styles.linkText + " hover:text-cyan-500"} href="/">Internship</Link></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="grey" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineOppositeContent className="text-center md:text-end" color="#139E8F" variant="h6">
                      Spring 2023
                  </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="warning" variant="outlined" />
                </TimelineSeparator>
                  <TimelineContent className="text-center md:text-justify">Graduate Computer Science</TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </section>
      </main>
    </>
  );
}
